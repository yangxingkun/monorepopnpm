import { defineComponent as s, computed as a, openBlock as r, createElementBlock as p, normalizeClass as c, renderSlot as u } from "vue";
import "./index.vue2.js";
import l from "../../../_virtual/_plugin-vue_export-helper.js";
const d = s({
  name: "SButton"
}), f = /* @__PURE__ */ Object.assign(d, {
  props: {
    type: {
      type: String,
      default: "default"
    }
  },
  setup(t) {
    const e = t, o = a(() => `button-${e.type}`);
    return (n, m) => (r(), p("button", {
      class: c(["button", o.value])
    }, [
      u(n.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), y = /* @__PURE__ */ l(f, [["__scopeId", "data-v-8c3574a9"]]);
export {
  y as default
};
