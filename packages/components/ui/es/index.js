import e from "./src/index.js";
import { default as s } from "./src/button/index.js";
import { default as u } from "./src/input/index.js";
const r = {
  install: (t) => e.forEach((o) => t.use(o))
};
export {
  s as SButton,
  u as SInput,
  r as default
};
