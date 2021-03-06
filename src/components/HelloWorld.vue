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
        px_to_mm: 0.303,
        skipX: 8,
        skipY: 4,
        depth_mm: 7.5,
        plunge_rate: 5,
        feed_rate: 10,
        tool_width_mm: 2,
        tool_angle_deg: 45
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
        cutting: { distance_mm: 0, time: 0 },
        lines: [],
        bytes: { value: 0 },
        bit: { overlap: 0, backoff: 0 },
        process: { percent_complete: 0 }
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
        `gcode_${Date().split(" ").slice(0, 5).join("_")}.nc`
      );
    },
    options_keys: function () {
      // console.log(Object.keys(this.options));
      return Object.keys(this.options);
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
      <div class="ui-element-name">{{ option }}</div>
      <div>
        <input type="number" v-model="options[option]" :step="step[option]" v-if="option !=='tool_angle_deg'"/>
        <select v-else v-model="options[option]">
          <option value="30">30</option>
          <option value="45">45</option>
          <option value="60">60</option>
          <option value="75">75</option>
          <option value="90">90</option>
        </select>

      </div>
    </div>
    <div class="spacing-buttons">
      <button v-if="!isGenerating" @click="do_conversion">Generate</button>
      <p v-else>Generating... {{info.process.percent_complete}}</p>
    </div>
    <div v-if="!isGenerating">
      <h4>Info</h4>
      <p>{{ info.px.x }}px by {{ info.px.y }}px</p>
      <p>{{ info.dimensions.x }}mm by {{ info.dimensions.y }}mm</p>
      <p>{{ info.cutting.distance_mm.toFixed(0) }}mm of travel</p>
      <p>{{ info.cutting.time }}</p>
      <p>Overlap {{ info.bit.overlap.toFixed(2) }}%</p>
      <p>Backoff Score: {{ info.bit.backoff.toFixed(2) }} (lower is better)</p>
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
  top: 5px;
  left: 6px;
  z-index: 32;
  padding: 8px 4px 0px 8px;
  background-color: #fff;
  flex-wrap: wrap;
  flex-direction: column;
  font-family: monospace;
  max-width: 192px;
  border-radius: 3px;
}
.ui-element {
  display: flex;
  flex: 4;
  width: 192px;
  justify-content: space-between;
  align-items: center;
}
.ui-element-name {
  flex: 2;
  margin-right: 6px;
  text-align: right;
}
.spacing-buttons {
  margin: 12px 0px 0px;
}
input {
  width: 64px;
}
select {
  width: 72px;
  height: 22px;
}
</style>
