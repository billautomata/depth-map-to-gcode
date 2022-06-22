<script  lang="ts">
//@ts-nocheck
import { defineComponent, ref } from "vue";
import * as moment from "moment";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { GCodeLoader } from "three/examples/jsm/loaders/GCodeLoader.js";
import convert from "../lib/convert-to-gcode";
import * as FileSaver from "file-saver";

const loader = new GCodeLoader();
const threeObjects = {
  obj: new THREE.Object3D(),
  scene: new THREE.Scene(),
};

export default defineComponent({
  name: "fuck-this",
  data() {
    return {
      msg: "foo",
      isGenerating: false,
      options: {
        px_to_mm: 0.1,
        skipX: 8,
        skipY: 1,
        depth_mm: 10,
        plunge_rate: 50,
        feed_rate: 100,
      },
      step: {
        skipX: 1,
        skipY: 1,
        depth_mm: 0.1,
        px_to_mm: 0.01,
        plunge_speed: 1,
        feed_rate: 1,
      },
      info: {
        px: { x: 0, y: 0 },
        dimensions: { x: 0, y: 0 },
        cutting: { distance_mm: 0 },
        lines: [],
        bytes: { value: 0 },
      },
    };
  },
  mounted() {
    let camera: THREE.PerspectiveCamera, renderer: THREE.Renderer;

    const self = this;
    init();
    render();
    self.do_conversion();

    function init() {
      const container = document.createElement("div");
      document.body.appendChild(container);

      camera = new THREE.PerspectiveCamera(
        60,
        window.innerWidth / window.innerHeight,
        1,
        10000
      );
      camera.position.set(0, 0, 200);
      camera.lookAt(threeObjects.scene.position);

      renderer = new THREE.WebGLRenderer();
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(window.innerWidth, window.innerHeight);
      container.appendChild(renderer.domElement);

      const controls = new OrbitControls(camera, renderer.domElement);
      controls.addEventListener("change", render); // use if there is no animation loop
      controls.minDistance = 10;
      controls.maxDistance = 1000;

      window.addEventListener("resize", resize);
    }

    function resize() {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      render();
    }

    function render() {
      renderer.render(threeObjects.scene, camera);
    }
    window.render = render;
  },
  methods: {
    save_gcode: function () {
      const self = this;
      console.log("save gcode");
      console.log(self.info.lines.join("\n").length);
      var blob = new Blob([self.info.lines.join("\n")], {
        type: "text/plain;charset=utf-8",
      });
      FileSaver.saveAs(
        blob,
        `gcode_${Date().split(" ").slice(0, 5).join("_")}.gcode`
      );
    },
    options_keys: function () {
      console.log(Object.keys(this.options));
      return Object.keys(this.options);
    },
    cutting_time: function () {
      const t = moment.duration(
        this.info.cutting.distance_mm / this.options.feed_rate,
        "seconds"
      );
      return `${t.hours()} hours, ${t.minutes()} minutes, ${t.seconds()} seconds`;
    },
    do_conversion: function () {
      const self = this;
      self.isGenerating = true;
      convert(
        (data: any) => {
          threeObjects.scene.remove(threeObjects.obj);
          const obj = loader.parse(data);
          threeObjects.obj = loader.parse(data);
          console.log(threeObjects.obj);
          threeObjects.obj.children[1].geometry.computeBoundingBox();
          console.log(threeObjects.obj.children[1].geometry.boundingBox);
          console.log(threeObjects.scene);
          // .set(, -10, self.info.dimensions.y/-0.5);
          threeObjects.obj.position.set(
            -1 * (self.info.dimensions.x * 0.5),
            -50,
            0
          );
          threeObjects.scene.add(threeObjects.obj);
          if (window.render) {
            window.render();
          }
          self.isGenerating = false;
        },
        { ...self.options },
        { ...self.info }
      );
    },
  },
});
</script>

<template>
  <div class="ui">
    <div
      v-for="(option, idx) in options_keys()"
      v-bind:option="option"
      v-bind:key="`option${idx}`"
      class="ui-element"
    >
      <div>{{ option }}</div>
      <div>
        <input type="number" v-model="options[option]" :step="step[option]" />
      </div>
    </div>
    <div class="spacing-buttons">
      <button v-if="!isGenerating" @click="do_conversion()">Generate</button>
      <div v-else>Generating...</div>
    </div>
    <div v-if="!isGenerating">
      <h4>Info</h4>
      <p>{{ info.px.x }}px by {{ info.px.y }}px</p>
      <p>{{ info.dimensions.x }}mm by {{ info.dimensions.y }}mm</p>
      <p>{{ info.cutting.distance_mm.toFixed(0) }}mm of travel.</p>
      <p>{{ this.cutting_time }}.</p>
    </div>
    <div v-if="!isGenerating">
      <button @click="save_gcode">Save GCode</button>
      <p>{{ (info.bytes.value / (1000 * 1000)).toFixed(2) }} MB</p>
    </div>
  </div>
</template>

<style scoped>
.ui {
  display: flex;
  position: fixed;
  top: 2px;
  left: 2px;
  z-index: 32;
  padding: 16px 24px;
  background-color: #fff;
  flex-wrap: wrap;
  flex-direction: column;
  font-family: monospace;
  max-width: 192px;
}
.ui-element {
  display: flex;
  flex: 4;
  width: 192px;
  justify-content: space-between;
}
.spacing-buttons {
  margin: 4px 0px 0px;
}
input {
  width: 64px;
}
</style>
