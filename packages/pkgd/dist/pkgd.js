function r(t) {
  let n = 0;
  const e = (o) => {
    n = o, t.innerHTML = `count is ${n}`;
  };
  t.addEventListener("click", () => e(++n)), e(0);
}
const s = (t) => /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((.[a-zA-Z0-9_-]{2,3}){1,2})$/.test(
  t
);
export {
  s as isEmail,
  r as setupCounter
};
