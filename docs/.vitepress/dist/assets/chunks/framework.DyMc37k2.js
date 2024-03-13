/**
 * @vue/shared v3.4.21
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ function ms(e, t) {
  const n = new Set(e.split(','))
  return t ? (s) => n.has(s.toLowerCase()) : (s) => n.has(s)
}
const te = {},
  mt = [],
  xe = () => {},
  lo = () => !1,
  Bt = (e) =>
    e.charCodeAt(0) === 111 &&
    e.charCodeAt(1) === 110 &&
    (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97),
  _s = (e) => e.startsWith('onUpdate:'),
  ie = Object.assign,
  ys = (e, t) => {
    const n = e.indexOf(t)
    n > -1 && e.splice(n, 1)
  },
  co = Object.prototype.hasOwnProperty,
  X = (e, t) => co.call(e, t),
  B = Array.isArray,
  _t = (e) => bn(e) === '[object Map]',
  jr = (e) => bn(e) === '[object Set]',
  K = (e) => typeof e == 'function',
  ne = (e) => typeof e == 'string',
  St = (e) => typeof e == 'symbol',
  Z = (e) => e !== null && typeof e == 'object',
  Vr = (e) => (Z(e) || K(e)) && K(e.then) && K(e.catch),
  Dr = Object.prototype.toString,
  bn = (e) => Dr.call(e),
  ao = (e) => bn(e).slice(8, -1),
  Ur = (e) => bn(e) === '[object Object]',
  vs = (e) =>
    ne(e) && e !== 'NaN' && e[0] !== '-' && '' + parseInt(e, 10) === e,
  yt = ms(
    ',key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted'
  ),
  wn = (e) => {
    const t = Object.create(null)
    return (n) => t[n] || (t[n] = e(n))
  },
  uo = /-(\w)/g,
  Me = wn((e) => e.replace(uo, (t, n) => (n ? n.toUpperCase() : ''))),
  fo = /\B([A-Z])/g,
  at = wn((e) => e.replace(fo, '-$1').toLowerCase()),
  En = wn((e) => e.charAt(0).toUpperCase() + e.slice(1)),
  on = wn((e) => (e ? `on${En(e)}` : '')),
  Qe = (e, t) => !Object.is(e, t),
  Dn = (e, t) => {
    for (let n = 0; n < e.length; n++) e[n](t)
  },
  un = (e, t, n) => {
    Object.defineProperty(e, t, { configurable: !0, enumerable: !1, value: n })
  },
  ho = (e) => {
    const t = parseFloat(e)
    return isNaN(t) ? e : t
  },
  po = (e) => {
    const t = ne(e) ? Number(e) : NaN
    return isNaN(t) ? e : t
  }
let Ws
const Br = () =>
  Ws ||
  (Ws =
    typeof globalThis < 'u'
      ? globalThis
      : typeof self < 'u'
        ? self
        : typeof window < 'u'
          ? window
          : typeof global < 'u'
            ? global
            : {})
function bs(e) {
  if (B(e)) {
    const t = {}
    for (let n = 0; n < e.length; n++) {
      const s = e[n],
        r = ne(s) ? yo(s) : bs(s)
      if (r) for (const i in r) t[i] = r[i]
    }
    return t
  } else if (ne(e) || Z(e)) return e
}
const go = /;(?![^(]*\))/g,
  mo = /:([^]+)/,
  _o = /\/\*[^]*?\*\//g
function yo(e) {
  const t = {}
  return (
    e
      .replace(_o, '')
      .split(go)
      .forEach((n) => {
        if (n) {
          const s = n.split(mo)
          s.length > 1 && (t[s[0].trim()] = s[1].trim())
        }
      }),
    t
  )
}
function ws(e) {
  let t = ''
  if (ne(e)) t = e
  else if (B(e))
    for (let n = 0; n < e.length; n++) {
      const s = ws(e[n])
      s && (t += s + ' ')
    }
  else if (Z(e)) for (const n in e) e[n] && (t += n + ' ')
  return t.trim()
}
const vo =
    'itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly',
  bo = ms(vo)
function kr(e) {
  return !!e || e === ''
}
const $a = (e) =>
    ne(e)
      ? e
      : e == null
        ? ''
        : B(e) || (Z(e) && (e.toString === Dr || !K(e.toString)))
          ? JSON.stringify(e, Kr, 2)
          : String(e),
  Kr = (e, t) =>
    t && t.__v_isRef
      ? Kr(e, t.value)
      : _t(t)
        ? {
            [`Map(${t.size})`]: [...t.entries()].reduce(
              (n, [s, r], i) => ((n[Un(s, i) + ' =>'] = r), n),
              {}
            )
          }
        : jr(t)
          ? { [`Set(${t.size})`]: [...t.values()].map((n) => Un(n)) }
          : St(t)
            ? Un(t)
            : Z(t) && !B(t) && !Ur(t)
              ? String(t)
              : t,
  Un = (e, t = '') => {
    var n
    return St(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  }
/**
 * @vue/reactivity v3.4.21
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ let ve
class wo {
  constructor(t = !1) {
    ;(this.detached = t),
      (this._active = !0),
      (this.effects = []),
      (this.cleanups = []),
      (this.parent = ve),
      !t && ve && (this.index = (ve.scopes || (ve.scopes = [])).push(this) - 1)
  }
  get active() {
    return this._active
  }
  run(t) {
    if (this._active) {
      const n = ve
      try {
        return (ve = this), t()
      } finally {
        ve = n
      }
    }
  }
  on() {
    ve = this
  }
  off() {
    ve = this.parent
  }
  stop(t) {
    if (this._active) {
      let n, s
      for (n = 0, s = this.effects.length; n < s; n++) this.effects[n].stop()
      for (n = 0, s = this.cleanups.length; n < s; n++) this.cleanups[n]()
      if (this.scopes)
        for (n = 0, s = this.scopes.length; n < s; n++) this.scopes[n].stop(!0)
      if (!this.detached && this.parent && !t) {
        const r = this.parent.scopes.pop()
        r &&
          r !== this &&
          ((this.parent.scopes[this.index] = r), (r.index = this.index))
      }
      ;(this.parent = void 0), (this._active = !1)
    }
  }
}
function Eo(e, t = ve) {
  t && t.active && t.effects.push(e)
}
function Wr() {
  return ve
}
function Co(e) {
  ve && ve.cleanups.push(e)
}
let ot
class Es {
  constructor(t, n, s, r) {
    ;(this.fn = t),
      (this.trigger = n),
      (this.scheduler = s),
      (this.active = !0),
      (this.deps = []),
      (this._dirtyLevel = 4),
      (this._trackId = 0),
      (this._runnings = 0),
      (this._shouldSchedule = !1),
      (this._depsLength = 0),
      Eo(this, r)
  }
  get dirty() {
    if (this._dirtyLevel === 2 || this._dirtyLevel === 3) {
      ;(this._dirtyLevel = 1), ut()
      for (let t = 0; t < this._depsLength; t++) {
        const n = this.deps[t]
        if (n.computed && (xo(n.computed), this._dirtyLevel >= 4)) break
      }
      this._dirtyLevel === 1 && (this._dirtyLevel = 0), ft()
    }
    return this._dirtyLevel >= 4
  }
  set dirty(t) {
    this._dirtyLevel = t ? 4 : 0
  }
  run() {
    if (((this._dirtyLevel = 0), !this.active)) return this.fn()
    let t = Xe,
      n = ot
    try {
      return (Xe = !0), (ot = this), this._runnings++, qs(this), this.fn()
    } finally {
      Gs(this), this._runnings--, (ot = n), (Xe = t)
    }
  }
  stop() {
    var t
    this.active &&
      (qs(this),
      Gs(this),
      (t = this.onStop) == null || t.call(this),
      (this.active = !1))
  }
}
function xo(e) {
  return e.value
}
function qs(e) {
  e._trackId++, (e._depsLength = 0)
}
function Gs(e) {
  if (e.deps.length > e._depsLength) {
    for (let t = e._depsLength; t < e.deps.length; t++) qr(e.deps[t], e)
    e.deps.length = e._depsLength
  }
}
function qr(e, t) {
  const n = e.get(t)
  n !== void 0 && t._trackId !== n && (e.delete(t), e.size === 0 && e.cleanup())
}
let Xe = !0,
  ss = 0
const Gr = []
function ut() {
  Gr.push(Xe), (Xe = !1)
}
function ft() {
  const e = Gr.pop()
  Xe = e === void 0 ? !0 : e
}
function Cs() {
  ss++
}
function xs() {
  for (ss--; !ss && rs.length; ) rs.shift()()
}
function zr(e, t, n) {
  if (t.get(e) !== e._trackId) {
    t.set(e, e._trackId)
    const s = e.deps[e._depsLength]
    s !== t ? (s && qr(s, e), (e.deps[e._depsLength++] = t)) : e._depsLength++
  }
}
const rs = []
function Xr(e, t, n) {
  Cs()
  for (const s of e.keys()) {
    let r
    s._dirtyLevel < t &&
      (r ?? (r = e.get(s) === s._trackId)) &&
      (s._shouldSchedule || (s._shouldSchedule = s._dirtyLevel === 0),
      (s._dirtyLevel = t)),
      s._shouldSchedule &&
        (r ?? (r = e.get(s) === s._trackId)) &&
        (s.trigger(),
        (!s._runnings || s.allowRecurse) &&
          s._dirtyLevel !== 2 &&
          ((s._shouldSchedule = !1), s.scheduler && rs.push(s.scheduler)))
  }
  xs()
}
const Yr = (e, t) => {
    const n = new Map()
    return (n.cleanup = e), (n.computed = t), n
  },
  fn = new WeakMap(),
  lt = Symbol(''),
  is = Symbol('')
function _e(e, t, n) {
  if (Xe && ot) {
    let s = fn.get(e)
    s || fn.set(e, (s = new Map()))
    let r = s.get(n)
    r || s.set(n, (r = Yr(() => s.delete(n)))), zr(ot, r)
  }
}
function He(e, t, n, s, r, i) {
  const o = fn.get(e)
  if (!o) return
  let l = []
  if (t === 'clear') l = [...o.values()]
  else if (n === 'length' && B(e)) {
    const c = Number(s)
    o.forEach((u, d) => {
      ;(d === 'length' || (!St(d) && d >= c)) && l.push(u)
    })
  } else
    switch ((n !== void 0 && l.push(o.get(n)), t)) {
      case 'add':
        B(e)
          ? vs(n) && l.push(o.get('length'))
          : (l.push(o.get(lt)), _t(e) && l.push(o.get(is)))
        break
      case 'delete':
        B(e) || (l.push(o.get(lt)), _t(e) && l.push(o.get(is)))
        break
      case 'set':
        _t(e) && l.push(o.get(lt))
        break
    }
  Cs()
  for (const c of l) c && Xr(c, 4)
  xs()
}
function So(e, t) {
  var n
  return (n = fn.get(e)) == null ? void 0 : n.get(t)
}
const To = ms('__proto__,__v_isRef,__isVue'),
  Jr = new Set(
    Object.getOwnPropertyNames(Symbol)
      .filter((e) => e !== 'arguments' && e !== 'caller')
      .map((e) => Symbol[e])
      .filter(St)
  ),
  zs = Ao()
function Ao() {
  const e = {}
  return (
    ['includes', 'indexOf', 'lastIndexOf'].forEach((t) => {
      e[t] = function (...n) {
        const s = Y(this)
        for (let i = 0, o = this.length; i < o; i++) _e(s, 'get', i + '')
        const r = s[t](...n)
        return r === -1 || r === !1 ? s[t](...n.map(Y)) : r
      }
    }),
    ['push', 'pop', 'shift', 'unshift', 'splice'].forEach((t) => {
      e[t] = function (...n) {
        ut(), Cs()
        const s = Y(this)[t].apply(this, n)
        return xs(), ft(), s
      }
    }),
    e
  )
}
function Ro(e) {
  const t = Y(this)
  return _e(t, 'has', e), t.hasOwnProperty(e)
}
class Qr {
  constructor(t = !1, n = !1) {
    ;(this._isReadonly = t), (this._isShallow = n)
  }
  get(t, n, s) {
    const r = this._isReadonly,
      i = this._isShallow
    if (n === '__v_isReactive') return !r
    if (n === '__v_isReadonly') return r
    if (n === '__v_isShallow') return i
    if (n === '__v_raw')
      return s === (r ? (i ? Uo : ni) : i ? ti : ei).get(t) ||
        Object.getPrototypeOf(t) === Object.getPrototypeOf(s)
        ? t
        : void 0
    const o = B(t)
    if (!r) {
      if (o && X(zs, n)) return Reflect.get(zs, n, s)
      if (n === 'hasOwnProperty') return Ro
    }
    const l = Reflect.get(t, n, s)
    return (St(n) ? Jr.has(n) : To(n)) || (r || _e(t, 'get', n), i)
      ? l
      : he(l)
        ? o && vs(n)
          ? l
          : l.value
        : Z(l)
          ? r
            ? Sn(l)
            : xn(l)
          : l
  }
}
class Zr extends Qr {
  constructor(t = !1) {
    super(!1, t)
  }
  set(t, n, s, r) {
    let i = t[n]
    if (!this._isShallow) {
      const c = Ct(i)
      if (
        (!dn(s) && !Ct(s) && ((i = Y(i)), (s = Y(s))), !B(t) && he(i) && !he(s))
      )
        return c ? !1 : ((i.value = s), !0)
    }
    const o = B(t) && vs(n) ? Number(n) < t.length : X(t, n),
      l = Reflect.set(t, n, s, r)
    return (
      t === Y(r) && (o ? Qe(s, i) && He(t, 'set', n, s) : He(t, 'add', n, s)), l
    )
  }
  deleteProperty(t, n) {
    const s = X(t, n)
    t[n]
    const r = Reflect.deleteProperty(t, n)
    return r && s && He(t, 'delete', n, void 0), r
  }
  has(t, n) {
    const s = Reflect.has(t, n)
    return (!St(n) || !Jr.has(n)) && _e(t, 'has', n), s
  }
  ownKeys(t) {
    return _e(t, 'iterate', B(t) ? 'length' : lt), Reflect.ownKeys(t)
  }
}
class Oo extends Qr {
  constructor(t = !1) {
    super(!0, t)
  }
  set(t, n) {
    return !0
  }
  deleteProperty(t, n) {
    return !0
  }
}
const Io = new Zr(),
  Lo = new Oo(),
  Po = new Zr(!0),
  Ss = (e) => e,
  Cn = (e) => Reflect.getPrototypeOf(e)
function qt(e, t, n = !1, s = !1) {
  e = e.__v_raw
  const r = Y(e),
    i = Y(t)
  n || (Qe(t, i) && _e(r, 'get', t), _e(r, 'get', i))
  const { has: o } = Cn(r),
    l = s ? Ss : n ? Rs : Ht
  if (o.call(r, t)) return l(e.get(t))
  if (o.call(r, i)) return l(e.get(i))
  e !== r && e.get(t)
}
function Gt(e, t = !1) {
  const n = this.__v_raw,
    s = Y(n),
    r = Y(e)
  return (
    t || (Qe(e, r) && _e(s, 'has', e), _e(s, 'has', r)),
    e === r ? n.has(e) : n.has(e) || n.has(r)
  )
}
function zt(e, t = !1) {
  return (
    (e = e.__v_raw), !t && _e(Y(e), 'iterate', lt), Reflect.get(e, 'size', e)
  )
}
function Xs(e) {
  e = Y(e)
  const t = Y(this)
  return Cn(t).has.call(t, e) || (t.add(e), He(t, 'add', e, e)), this
}
function Ys(e, t) {
  t = Y(t)
  const n = Y(this),
    { has: s, get: r } = Cn(n)
  let i = s.call(n, e)
  i || ((e = Y(e)), (i = s.call(n, e)))
  const o = r.call(n, e)
  return (
    n.set(e, t), i ? Qe(t, o) && He(n, 'set', e, t) : He(n, 'add', e, t), this
  )
}
function Js(e) {
  const t = Y(this),
    { has: n, get: s } = Cn(t)
  let r = n.call(t, e)
  r || ((e = Y(e)), (r = n.call(t, e))), s && s.call(t, e)
  const i = t.delete(e)
  return r && He(t, 'delete', e, void 0), i
}
function Qs() {
  const e = Y(this),
    t = e.size !== 0,
    n = e.clear()
  return t && He(e, 'clear', void 0, void 0), n
}
function Xt(e, t) {
  return function (s, r) {
    const i = this,
      o = i.__v_raw,
      l = Y(o),
      c = t ? Ss : e ? Rs : Ht
    return (
      !e && _e(l, 'iterate', lt), o.forEach((u, d) => s.call(r, c(u), c(d), i))
    )
  }
}
function Yt(e, t, n) {
  return function (...s) {
    const r = this.__v_raw,
      i = Y(r),
      o = _t(i),
      l = e === 'entries' || (e === Symbol.iterator && o),
      c = e === 'keys' && o,
      u = r[e](...s),
      d = n ? Ss : t ? Rs : Ht
    return (
      !t && _e(i, 'iterate', c ? is : lt),
      {
        next() {
          const { value: h, done: m } = u.next()
          return m
            ? { value: h, done: m }
            : { value: l ? [d(h[0]), d(h[1])] : d(h), done: m }
        },
        [Symbol.iterator]() {
          return this
        }
      }
    )
  }
}
function Ue(e) {
  return function (...t) {
    return e === 'delete' ? !1 : e === 'clear' ? void 0 : this
  }
}
function Mo() {
  const e = {
      get(i) {
        return qt(this, i)
      },
      get size() {
        return zt(this)
      },
      has: Gt,
      add: Xs,
      set: Ys,
      delete: Js,
      clear: Qs,
      forEach: Xt(!1, !1)
    },
    t = {
      get(i) {
        return qt(this, i, !1, !0)
      },
      get size() {
        return zt(this)
      },
      has: Gt,
      add: Xs,
      set: Ys,
      delete: Js,
      clear: Qs,
      forEach: Xt(!1, !0)
    },
    n = {
      get(i) {
        return qt(this, i, !0)
      },
      get size() {
        return zt(this, !0)
      },
      has(i) {
        return Gt.call(this, i, !0)
      },
      add: Ue('add'),
      set: Ue('set'),
      delete: Ue('delete'),
      clear: Ue('clear'),
      forEach: Xt(!0, !1)
    },
    s = {
      get(i) {
        return qt(this, i, !0, !0)
      },
      get size() {
        return zt(this, !0)
      },
      has(i) {
        return Gt.call(this, i, !0)
      },
      add: Ue('add'),
      set: Ue('set'),
      delete: Ue('delete'),
      clear: Ue('clear'),
      forEach: Xt(!0, !0)
    }
  return (
    ['keys', 'values', 'entries', Symbol.iterator].forEach((i) => {
      ;(e[i] = Yt(i, !1, !1)),
        (n[i] = Yt(i, !0, !1)),
        (t[i] = Yt(i, !1, !0)),
        (s[i] = Yt(i, !0, !0))
    }),
    [e, n, t, s]
  )
}
const [No, Fo, $o, Ho] = Mo()
function Ts(e, t) {
  const n = t ? (e ? Ho : $o) : e ? Fo : No
  return (s, r, i) =>
    r === '__v_isReactive'
      ? !e
      : r === '__v_isReadonly'
        ? e
        : r === '__v_raw'
          ? s
          : Reflect.get(X(n, r) && r in s ? n : s, r, i)
}
const jo = { get: Ts(!1, !1) },
  Vo = { get: Ts(!1, !0) },
  Do = { get: Ts(!0, !1) },
  ei = new WeakMap(),
  ti = new WeakMap(),
  ni = new WeakMap(),
  Uo = new WeakMap()
function Bo(e) {
  switch (e) {
    case 'Object':
    case 'Array':
      return 1
    case 'Map':
    case 'Set':
    case 'WeakMap':
    case 'WeakSet':
      return 2
    default:
      return 0
  }
}
function ko(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Bo(ao(e))
}
function xn(e) {
  return Ct(e) ? e : As(e, !1, Io, jo, ei)
}
function Ko(e) {
  return As(e, !1, Po, Vo, ti)
}
function Sn(e) {
  return As(e, !0, Lo, Do, ni)
}
function As(e, t, n, s, r) {
  if (!Z(e) || (e.__v_raw && !(t && e.__v_isReactive))) return e
  const i = r.get(e)
  if (i) return i
  const o = ko(e)
  if (o === 0) return e
  const l = new Proxy(e, o === 2 ? s : n)
  return r.set(e, l), l
}
function vt(e) {
  return Ct(e) ? vt(e.__v_raw) : !!(e && e.__v_isReactive)
}
function Ct(e) {
  return !!(e && e.__v_isReadonly)
}
function dn(e) {
  return !!(e && e.__v_isShallow)
}
function si(e) {
  return vt(e) || Ct(e)
}
function Y(e) {
  const t = e && e.__v_raw
  return t ? Y(t) : e
}
function It(e) {
  return Object.isExtensible(e) && un(e, '__v_skip', !0), e
}
const Ht = (e) => (Z(e) ? xn(e) : e),
  Rs = (e) => (Z(e) ? Sn(e) : e)
class ri {
  constructor(t, n, s, r) {
    ;(this.getter = t),
      (this._setter = n),
      (this.dep = void 0),
      (this.__v_isRef = !0),
      (this.__v_isReadonly = !1),
      (this.effect = new Es(
        () => t(this._value),
        () => Lt(this, this.effect._dirtyLevel === 2 ? 2 : 3)
      )),
      (this.effect.computed = this),
      (this.effect.active = this._cacheable = !r),
      (this.__v_isReadonly = s)
  }
  get value() {
    const t = Y(this)
    return (
      (!t._cacheable || t.effect.dirty) &&
        Qe(t._value, (t._value = t.effect.run())) &&
        Lt(t, 4),
      Os(t),
      t.effect._dirtyLevel >= 2 && Lt(t, 2),
      t._value
    )
  }
  set value(t) {
    this._setter(t)
  }
  get _dirty() {
    return this.effect.dirty
  }
  set _dirty(t) {
    this.effect.dirty = t
  }
}
function Wo(e, t, n = !1) {
  let s, r
  const i = K(e)
  return (
    i ? ((s = e), (r = xe)) : ((s = e.get), (r = e.set)),
    new ri(s, r, i || !r, n)
  )
}
function Os(e) {
  var t
  Xe &&
    ot &&
    ((e = Y(e)),
    zr(
      ot,
      (t = e.dep) != null
        ? t
        : (e.dep = Yr(() => (e.dep = void 0), e instanceof ri ? e : void 0))
    ))
}
function Lt(e, t = 4, n) {
  e = Y(e)
  const s = e.dep
  s && Xr(s, t)
}
function he(e) {
  return !!(e && e.__v_isRef === !0)
}
function fe(e) {
  return oi(e, !1)
}
function ii(e) {
  return oi(e, !0)
}
function oi(e, t) {
  return he(e) ? e : new qo(e, t)
}
class qo {
  constructor(t, n) {
    ;(this.__v_isShallow = n),
      (this.dep = void 0),
      (this.__v_isRef = !0),
      (this._rawValue = n ? t : Y(t)),
      (this._value = n ? t : Ht(t))
  }
  get value() {
    return Os(this), this._value
  }
  set value(t) {
    const n = this.__v_isShallow || dn(t) || Ct(t)
    ;(t = n ? t : Y(t)),
      Qe(t, this._rawValue) &&
        ((this._rawValue = t), (this._value = n ? t : Ht(t)), Lt(this, 4))
  }
}
function li(e) {
  return he(e) ? e.value : e
}
const Go = {
  get: (e, t, n) => li(Reflect.get(e, t, n)),
  set: (e, t, n, s) => {
    const r = e[t]
    return he(r) && !he(n) ? ((r.value = n), !0) : Reflect.set(e, t, n, s)
  }
}
function ci(e) {
  return vt(e) ? e : new Proxy(e, Go)
}
class zo {
  constructor(t) {
    ;(this.dep = void 0), (this.__v_isRef = !0)
    const { get: n, set: s } = t(
      () => Os(this),
      () => Lt(this)
    )
    ;(this._get = n), (this._set = s)
  }
  get value() {
    return this._get()
  }
  set value(t) {
    this._set(t)
  }
}
function Xo(e) {
  return new zo(e)
}
class Yo {
  constructor(t, n, s) {
    ;(this._object = t),
      (this._key = n),
      (this._defaultValue = s),
      (this.__v_isRef = !0)
  }
  get value() {
    const t = this._object[this._key]
    return t === void 0 ? this._defaultValue : t
  }
  set value(t) {
    this._object[this._key] = t
  }
  get dep() {
    return So(Y(this._object), this._key)
  }
}
class Jo {
  constructor(t) {
    ;(this._getter = t), (this.__v_isRef = !0), (this.__v_isReadonly = !0)
  }
  get value() {
    return this._getter()
  }
}
function Qo(e, t, n) {
  return he(e)
    ? e
    : K(e)
      ? new Jo(e)
      : Z(e) && arguments.length > 1
        ? Zo(e, t, n)
        : fe(e)
}
function Zo(e, t, n) {
  const s = e[t]
  return he(s) ? s : new Yo(e, t, n)
}
/**
 * @vue/runtime-core v3.4.21
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ function Ye(e, t, n, s) {
  try {
    return s ? e(...s) : e()
  } catch (r) {
    Tn(r, t, n)
  }
}
function Se(e, t, n, s) {
  if (K(e)) {
    const i = Ye(e, t, n, s)
    return (
      i &&
        Vr(i) &&
        i.catch((o) => {
          Tn(o, t, n)
        }),
      i
    )
  }
  const r = []
  for (let i = 0; i < e.length; i++) r.push(Se(e[i], t, n, s))
  return r
}
function Tn(e, t, n, s = !0) {
  const r = t ? t.vnode : null
  if (t) {
    let i = t.parent
    const o = t.proxy,
      l = `https://vuejs.org/error-reference/#runtime-${n}`
    for (; i; ) {
      const u = i.ec
      if (u) {
        for (let d = 0; d < u.length; d++) if (u[d](e, o, l) === !1) return
      }
      i = i.parent
    }
    const c = t.appContext.config.errorHandler
    if (c) {
      Ye(c, null, 10, [e, o, l])
      return
    }
  }
  el(e, n, r, s)
}
function el(e, t, n, s = !0) {
  console.error(e)
}
let jt = !1,
  os = !1
const ue = []
let Pe = 0
const bt = []
let We = null,
  rt = 0
const ai = Promise.resolve()
let Is = null
function An(e) {
  const t = Is || ai
  return e ? t.then(this ? e.bind(this) : e) : t
}
function tl(e) {
  let t = Pe + 1,
    n = ue.length
  for (; t < n; ) {
    const s = (t + n) >>> 1,
      r = ue[s],
      i = Vt(r)
    i < e || (i === e && r.pre) ? (t = s + 1) : (n = s)
  }
  return t
}
function Ls(e) {
  ;(!ue.length || !ue.includes(e, jt && e.allowRecurse ? Pe + 1 : Pe)) &&
    (e.id == null ? ue.push(e) : ue.splice(tl(e.id), 0, e), ui())
}
function ui() {
  !jt && !os && ((os = !0), (Is = ai.then(fi)))
}
function nl(e) {
  const t = ue.indexOf(e)
  t > Pe && ue.splice(t, 1)
}
function sl(e) {
  B(e)
    ? bt.push(...e)
    : (!We || !We.includes(e, e.allowRecurse ? rt + 1 : rt)) && bt.push(e),
    ui()
}
function Zs(e, t, n = jt ? Pe + 1 : 0) {
  for (; n < ue.length; n++) {
    const s = ue[n]
    if (s && s.pre) {
      if (e && s.id !== e.uid) continue
      ue.splice(n, 1), n--, s()
    }
  }
}
function hn(e) {
  if (bt.length) {
    const t = [...new Set(bt)].sort((n, s) => Vt(n) - Vt(s))
    if (((bt.length = 0), We)) {
      We.push(...t)
      return
    }
    for (We = t, rt = 0; rt < We.length; rt++) We[rt]()
    ;(We = null), (rt = 0)
  }
}
const Vt = (e) => (e.id == null ? 1 / 0 : e.id),
  rl = (e, t) => {
    const n = Vt(e) - Vt(t)
    if (n === 0) {
      if (e.pre && !t.pre) return -1
      if (t.pre && !e.pre) return 1
    }
    return n
  }
function fi(e) {
  ;(os = !1), (jt = !0), ue.sort(rl)
  try {
    for (Pe = 0; Pe < ue.length; Pe++) {
      const t = ue[Pe]
      t && t.active !== !1 && Ye(t, null, 14)
    }
  } finally {
    ;(Pe = 0),
      (ue.length = 0),
      hn(),
      (jt = !1),
      (Is = null),
      (ue.length || bt.length) && fi()
  }
}
function il(e, t, ...n) {
  if (e.isUnmounted) return
  const s = e.vnode.props || te
  let r = n
  const i = t.startsWith('update:'),
    o = i && t.slice(7)
  if (o && o in s) {
    const d = `${o === 'modelValue' ? 'model' : o}Modifiers`,
      { number: h, trim: m } = s[d] || te
    m && (r = n.map((w) => (ne(w) ? w.trim() : w))), h && (r = n.map(ho))
  }
  let l,
    c = s[(l = on(t))] || s[(l = on(Me(t)))]
  !c && i && (c = s[(l = on(at(t)))]), c && Se(c, e, 6, r)
  const u = s[l + 'Once']
  if (u) {
    if (!e.emitted) e.emitted = {}
    else if (e.emitted[l]) return
    ;(e.emitted[l] = !0), Se(u, e, 6, r)
  }
}
function di(e, t, n = !1) {
  const s = t.emitsCache,
    r = s.get(e)
  if (r !== void 0) return r
  const i = e.emits
  let o = {},
    l = !1
  if (!K(e)) {
    const c = (u) => {
      const d = di(u, t, !0)
      d && ((l = !0), ie(o, d))
    }
    !n && t.mixins.length && t.mixins.forEach(c),
      e.extends && c(e.extends),
      e.mixins && e.mixins.forEach(c)
  }
  return !i && !l
    ? (Z(e) && s.set(e, null), null)
    : (B(i) ? i.forEach((c) => (o[c] = null)) : ie(o, i),
      Z(e) && s.set(e, o),
      o)
}
function Rn(e, t) {
  return !e || !Bt(t)
    ? !1
    : ((t = t.slice(2).replace(/Once$/, '')),
      X(e, t[0].toLowerCase() + t.slice(1)) || X(e, at(t)) || X(e, t))
}
let de = null,
  On = null
function pn(e) {
  const t = de
  return (de = e), (On = (e && e.type.__scopeId) || null), t
}
function Ha(e) {
  On = e
}
function ja() {
  On = null
}
function ol(e, t = de, n) {
  if (!t || e._n) return e
  const s = (...r) => {
    s._d && fr(-1)
    const i = pn(t)
    let o
    try {
      o = e(...r)
    } finally {
      pn(i), s._d && fr(1)
    }
    return o
  }
  return (s._n = !0), (s._c = !0), (s._d = !0), s
}
function Bn(e) {
  const {
    type: t,
    vnode: n,
    proxy: s,
    withProxy: r,
    props: i,
    propsOptions: [o],
    slots: l,
    attrs: c,
    emit: u,
    render: d,
    renderCache: h,
    data: m,
    setupState: w,
    ctx: O,
    inheritAttrs: M
  } = e
  let V, q
  const J = pn(e)
  try {
    if (n.shapeFlag & 4) {
      const _ = r || s,
        P = _
      ;(V = Ae(d.call(P, _, h, i, w, m, O))), (q = c)
    } else {
      const _ = t
      ;(V = Ae(
        _.length > 1 ? _(i, { attrs: c, slots: l, emit: u }) : _(i, null)
      )),
        (q = t.props ? c : ll(c))
    }
  } catch (_) {
    ;(Ft.length = 0), Tn(_, e, 1), (V = ae(be))
  }
  let g = V
  if (q && M !== !1) {
    const _ = Object.keys(q),
      { shapeFlag: P } = g
    _.length && P & 7 && (o && _.some(_s) && (q = cl(q, o)), (g = Ze(g, q)))
  }
  return (
    n.dirs && ((g = Ze(g)), (g.dirs = g.dirs ? g.dirs.concat(n.dirs) : n.dirs)),
    n.transition && (g.transition = n.transition),
    (V = g),
    pn(J),
    V
  )
}
const ll = (e) => {
    let t
    for (const n in e)
      (n === 'class' || n === 'style' || Bt(n)) && ((t || (t = {}))[n] = e[n])
    return t
  },
  cl = (e, t) => {
    const n = {}
    for (const s in e) (!_s(s) || !(s.slice(9) in t)) && (n[s] = e[s])
    return n
  }
function al(e, t, n) {
  const { props: s, children: r, component: i } = e,
    { props: o, children: l, patchFlag: c } = t,
    u = i.emitsOptions
  if (t.dirs || t.transition) return !0
  if (n && c >= 0) {
    if (c & 1024) return !0
    if (c & 16) return s ? er(s, o, u) : !!o
    if (c & 8) {
      const d = t.dynamicProps
      for (let h = 0; h < d.length; h++) {
        const m = d[h]
        if (o[m] !== s[m] && !Rn(u, m)) return !0
      }
    }
  } else
    return (r || l) && (!l || !l.$stable)
      ? !0
      : s === o
        ? !1
        : s
          ? o
            ? er(s, o, u)
            : !0
          : !!o
  return !1
}
function er(e, t, n) {
  const s = Object.keys(t)
  if (s.length !== Object.keys(e).length) return !0
  for (let r = 0; r < s.length; r++) {
    const i = s[r]
    if (t[i] !== e[i] && !Rn(n, i)) return !0
  }
  return !1
}
function ul({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const s = t.subTree
    if ((s.suspense && s.suspense.activeBranch === e && (s.el = e.el), s === e))
      ((e = t.vnode).el = n), (t = t.parent)
    else break
  }
}
const Ps = 'components'
function Va(e, t) {
  return pi(Ps, e, !0, t) || e
}
const hi = Symbol.for('v-ndc')
function Da(e) {
  return ne(e) ? pi(Ps, e, !1) || e : e || hi
}
function pi(e, t, n = !0, s = !1) {
  const r = de || ce
  if (r) {
    const i = r.type
    if (e === Ps) {
      const l = oc(i, !1)
      if (l && (l === t || l === Me(t) || l === En(Me(t)))) return i
    }
    const o = tr(r[e] || i[e], t) || tr(r.appContext[e], t)
    return !o && s ? i : o
  }
}
function tr(e, t) {
  return e && (e[t] || e[Me(t)] || e[En(Me(t))])
}
const fl = (e) => e.__isSuspense
function gi(e, t) {
  t && t.pendingBranch
    ? B(e)
      ? t.effects.push(...e)
      : t.effects.push(e)
    : sl(e)
}
const dl = Symbol.for('v-scx'),
  hl = () => Et(dl)
function mi(e, t) {
  return In(e, null, t)
}
function Ua(e, t) {
  return In(e, null, { flush: 'post' })
}
const Jt = {}
function je(e, t, n) {
  return In(e, t, n)
}
function In(
  e,
  t,
  { immediate: n, deep: s, flush: r, once: i, onTrack: o, onTrigger: l } = te
) {
  if (t && i) {
    const I = t
    t = (...D) => {
      I(...D), P()
    }
  }
  const c = ce,
    u = (I) => (s === !0 ? I : pt(I, s === !1 ? 1 : void 0))
  let d,
    h = !1,
    m = !1
  if (
    (he(e)
      ? ((d = () => e.value), (h = dn(e)))
      : vt(e)
        ? ((d = () => u(e)), (h = !0))
        : B(e)
          ? ((m = !0),
            (h = e.some((I) => vt(I) || dn(I))),
            (d = () =>
              e.map((I) => {
                if (he(I)) return I.value
                if (vt(I)) return u(I)
                if (K(I)) return Ye(I, c, 2)
              })))
          : K(e)
            ? t
              ? (d = () => Ye(e, c, 2))
              : (d = () => (w && w(), Se(e, c, 3, [O])))
            : (d = xe),
    t && s)
  ) {
    const I = d
    d = () => pt(I())
  }
  let w,
    O = (I) => {
      w = g.onStop = () => {
        Ye(I, c, 4), (w = g.onStop = void 0)
      }
    },
    M
  if ($n)
    if (
      ((O = xe),
      t ? n && Se(t, c, 3, [d(), m ? [] : void 0, O]) : d(),
      r === 'sync')
    ) {
      const I = hl()
      M = I.__watcherHandles || (I.__watcherHandles = [])
    } else return xe
  let V = m ? new Array(e.length).fill(Jt) : Jt
  const q = () => {
    if (!(!g.active || !g.dirty))
      if (t) {
        const I = g.run()
        ;(s || h || (m ? I.some((D, R) => Qe(D, V[R])) : Qe(I, V))) &&
          (w && w(),
          Se(t, c, 3, [I, V === Jt ? void 0 : m && V[0] === Jt ? [] : V, O]),
          (V = I))
      } else g.run()
  }
  q.allowRecurse = !!t
  let J
  r === 'sync'
    ? (J = q)
    : r === 'post'
      ? (J = () => ge(q, c && c.suspense))
      : ((q.pre = !0), c && (q.id = c.uid), (J = () => Ls(q)))
  const g = new Es(d, xe, J),
    _ = Wr(),
    P = () => {
      g.stop(), _ && ys(_.effects, g)
    }
  return (
    t
      ? n
        ? q()
        : (V = g.run())
      : r === 'post'
        ? ge(g.run.bind(g), c && c.suspense)
        : g.run(),
    M && M.push(P),
    P
  )
}
function pl(e, t, n) {
  const s = this.proxy,
    r = ne(e) ? (e.includes('.') ? _i(s, e) : () => s[e]) : e.bind(s, s)
  let i
  K(t) ? (i = t) : ((i = t.handler), (n = t))
  const o = kt(this),
    l = In(r, i.bind(s), n)
  return o(), l
}
function _i(e, t) {
  const n = t.split('.')
  return () => {
    let s = e
    for (let r = 0; r < n.length && s; r++) s = s[n[r]]
    return s
  }
}
function pt(e, t, n = 0, s) {
  if (!Z(e) || e.__v_skip) return e
  if (t && t > 0) {
    if (n >= t) return e
    n++
  }
  if (((s = s || new Set()), s.has(e))) return e
  if ((s.add(e), he(e))) pt(e.value, t, n, s)
  else if (B(e)) for (let r = 0; r < e.length; r++) pt(e[r], t, n, s)
  else if (jr(e) || _t(e))
    e.forEach((r) => {
      pt(r, t, n, s)
    })
  else if (Ur(e)) for (const r in e) pt(e[r], t, n, s)
  return e
}
function Le(e, t, n, s) {
  const r = e.dirs,
    i = t && t.dirs
  for (let o = 0; o < r.length; o++) {
    const l = r[o]
    i && (l.oldValue = i[o].value)
    let c = l.dir[s]
    c && (ut(), Se(c, n, 8, [e.el, l, e, t]), ft())
  }
}
const qe = Symbol('_leaveCb'),
  Qt = Symbol('_enterCb')
function gl() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: new Map()
  }
  return (
    Tt(() => {
      e.isMounted = !0
    }),
    Ci(() => {
      e.isUnmounting = !0
    }),
    e
  )
}
const we = [Function, Array],
  yi = {
    mode: String,
    appear: Boolean,
    persisted: Boolean,
    onBeforeEnter: we,
    onEnter: we,
    onAfterEnter: we,
    onEnterCancelled: we,
    onBeforeLeave: we,
    onLeave: we,
    onAfterLeave: we,
    onLeaveCancelled: we,
    onBeforeAppear: we,
    onAppear: we,
    onAfterAppear: we,
    onAppearCancelled: we
  },
  ml = {
    name: 'BaseTransition',
    props: yi,
    setup(e, { slots: t }) {
      const n = Fn(),
        s = gl()
      return () => {
        const r = t.default && bi(t.default(), !0)
        if (!r || !r.length) return
        let i = r[0]
        if (r.length > 1) {
          for (const m of r)
            if (m.type !== be) {
              i = m
              break
            }
        }
        const o = Y(e),
          { mode: l } = o
        if (s.isLeaving) return kn(i)
        const c = nr(i)
        if (!c) return kn(i)
        const u = ls(c, o, s, n)
        cs(c, u)
        const d = n.subTree,
          h = d && nr(d)
        if (h && h.type !== be && !it(c, h)) {
          const m = ls(h, o, s, n)
          if ((cs(h, m), l === 'out-in'))
            return (
              (s.isLeaving = !0),
              (m.afterLeave = () => {
                ;(s.isLeaving = !1),
                  n.update.active !== !1 && ((n.effect.dirty = !0), n.update())
              }),
              kn(i)
            )
          l === 'in-out' &&
            c.type !== be &&
            (m.delayLeave = (w, O, M) => {
              const V = vi(s, h)
              ;(V[String(h.key)] = h),
                (w[qe] = () => {
                  O(), (w[qe] = void 0), delete u.delayedLeave
                }),
                (u.delayedLeave = M)
            })
        }
        return i
      }
    }
  },
  _l = ml
function vi(e, t) {
  const { leavingVNodes: n } = e
  let s = n.get(t.type)
  return s || ((s = Object.create(null)), n.set(t.type, s)), s
}
function ls(e, t, n, s) {
  const {
      appear: r,
      mode: i,
      persisted: o = !1,
      onBeforeEnter: l,
      onEnter: c,
      onAfterEnter: u,
      onEnterCancelled: d,
      onBeforeLeave: h,
      onLeave: m,
      onAfterLeave: w,
      onLeaveCancelled: O,
      onBeforeAppear: M,
      onAppear: V,
      onAfterAppear: q,
      onAppearCancelled: J
    } = t,
    g = String(e.key),
    _ = vi(n, e),
    P = (R, j) => {
      R && Se(R, s, 9, j)
    },
    I = (R, j) => {
      const E = j[1]
      P(R, j),
        B(R) ? R.every((U) => U.length <= 1) && E() : R.length <= 1 && E()
    },
    D = {
      mode: i,
      persisted: o,
      beforeEnter(R) {
        let j = l
        if (!n.isMounted)
          if (r) j = M || l
          else return
        R[qe] && R[qe](!0)
        const E = _[g]
        E && it(e, E) && E.el[qe] && E.el[qe](), P(j, [R])
      },
      enter(R) {
        let j = c,
          E = u,
          U = d
        if (!n.isMounted)
          if (r) (j = V || c), (E = q || u), (U = J || d)
          else return
        let S = !1
        const W = (R[Qt] = (re) => {
          S ||
            ((S = !0),
            re ? P(U, [R]) : P(E, [R]),
            D.delayedLeave && D.delayedLeave(),
            (R[Qt] = void 0))
        })
        j ? I(j, [R, W]) : W()
      },
      leave(R, j) {
        const E = String(e.key)
        if ((R[Qt] && R[Qt](!0), n.isUnmounting)) return j()
        P(h, [R])
        let U = !1
        const S = (R[qe] = (W) => {
          U ||
            ((U = !0),
            j(),
            W ? P(O, [R]) : P(w, [R]),
            (R[qe] = void 0),
            _[E] === e && delete _[E])
        })
        ;(_[E] = e), m ? I(m, [R, S]) : S()
      },
      clone(R) {
        return ls(R, t, n, s)
      }
    }
  return D
}
function kn(e) {
  if (Ln(e)) return (e = Ze(e)), (e.children = null), e
}
function nr(e) {
  return Ln(e) ? (e.children ? e.children[0] : void 0) : e
}
function cs(e, t) {
  e.shapeFlag & 6 && e.component
    ? cs(e.component.subTree, t)
    : e.shapeFlag & 128
      ? ((e.ssContent.transition = t.clone(e.ssContent)),
        (e.ssFallback.transition = t.clone(e.ssFallback)))
      : (e.transition = t)
}
function bi(e, t = !1, n) {
  let s = [],
    r = 0
  for (let i = 0; i < e.length; i++) {
    let o = e[i]
    const l = n == null ? o.key : String(n) + String(o.key != null ? o.key : i)
    o.type === me
      ? (o.patchFlag & 128 && r++, (s = s.concat(bi(o.children, t, l))))
      : (t || o.type !== be) && s.push(l != null ? Ze(o, { key: l }) : o)
  }
  if (r > 1) for (let i = 0; i < s.length; i++) s[i].patchFlag = -2
  return s
}
/*! #__NO_SIDE_EFFECTS__ */ function wi(e, t) {
  return K(e) ? ie({ name: e.name }, t, { setup: e }) : e
}
const wt = (e) => !!e.type.__asyncLoader,
  Ln = (e) => e.type.__isKeepAlive
function yl(e, t) {
  Ei(e, 'a', t)
}
function vl(e, t) {
  Ei(e, 'da', t)
}
function Ei(e, t, n = ce) {
  const s =
    e.__wdc ||
    (e.__wdc = () => {
      let r = n
      for (; r; ) {
        if (r.isDeactivated) return
        r = r.parent
      }
      return e()
    })
  if ((Pn(t, s, n), n)) {
    let r = n.parent
    for (; r && r.parent; ) Ln(r.parent.vnode) && bl(s, t, n, r), (r = r.parent)
  }
}
function bl(e, t, n, s) {
  const r = Pn(t, e, s, !0)
  Mn(() => {
    ys(s[t], r)
  }, n)
}
function Pn(e, t, n = ce, s = !1) {
  if (n) {
    const r = n[e] || (n[e] = []),
      i =
        t.__weh ||
        (t.__weh = (...o) => {
          if (n.isUnmounted) return
          ut()
          const l = kt(n),
            c = Se(t, n, e, o)
          return l(), ft(), c
        })
    return s ? r.unshift(i) : r.push(i), i
  }
}
const De =
    (e) =>
    (t, n = ce) =>
      (!$n || e === 'sp') && Pn(e, (...s) => t(...s), n),
  wl = De('bm'),
  Tt = De('m'),
  El = De('bu'),
  Cl = De('u'),
  Ci = De('bum'),
  Mn = De('um'),
  xl = De('sp'),
  Sl = De('rtg'),
  Tl = De('rtc')
function Al(e, t = ce) {
  Pn('ec', e, t)
}
function Ba(e, t, n, s) {
  let r
  const i = n && n[s]
  if (B(e) || ne(e)) {
    r = new Array(e.length)
    for (let o = 0, l = e.length; o < l; o++)
      r[o] = t(e[o], o, void 0, i && i[o])
  } else if (typeof e == 'number') {
    r = new Array(e)
    for (let o = 0; o < e; o++) r[o] = t(o + 1, o, void 0, i && i[o])
  } else if (Z(e))
    if (e[Symbol.iterator])
      r = Array.from(e, (o, l) => t(o, l, void 0, i && i[l]))
    else {
      const o = Object.keys(e)
      r = new Array(o.length)
      for (let l = 0, c = o.length; l < c; l++) {
        const u = o[l]
        r[l] = t(e[u], u, l, i && i[l])
      }
    }
  else r = []
  return n && (n[s] = r), r
}
function ka(e, t, n = {}, s, r) {
  if (de.isCE || (de.parent && wt(de.parent) && de.parent.isCE))
    return t !== 'default' && (n.name = t), ae('slot', n, s && s())
  let i = e[t]
  i && i._c && (i._d = !1), Fi()
  const o = i && xi(i(n)),
    l = Hi(
      me,
      { key: n.key || (o && o.key) || `_${t}` },
      o || (s ? s() : []),
      o && e._ === 1 ? 64 : -2
    )
  return (
    !r && l.scopeId && (l.slotScopeIds = [l.scopeId + '-s']),
    i && i._c && (i._d = !0),
    l
  )
}
function xi(e) {
  return e.some((t) =>
    _n(t) ? !(t.type === be || (t.type === me && !xi(t.children))) : !0
  )
    ? e
    : null
}
function Ka(e, t) {
  const n = {}
  for (const s in e) n[t && /[A-Z]/.test(s) ? `on:${s}` : on(s)] = e[s]
  return n
}
const as = (e) => (e ? (Ui(e) ? $s(e) || e.proxy : as(e.parent)) : null),
  Pt = ie(Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => as(e.parent),
    $root: (e) => as(e.root),
    $emit: (e) => e.emit,
    $options: (e) => Ms(e),
    $forceUpdate: (e) =>
      e.f ||
      (e.f = () => {
        ;(e.effect.dirty = !0), Ls(e.update)
      }),
    $nextTick: (e) => e.n || (e.n = An.bind(e.proxy)),
    $watch: (e) => pl.bind(e)
  }),
  Kn = (e, t) => e !== te && !e.__isScriptSetup && X(e, t),
  Rl = {
    get({ _: e }, t) {
      const {
        ctx: n,
        setupState: s,
        data: r,
        props: i,
        accessCache: o,
        type: l,
        appContext: c
      } = e
      let u
      if (t[0] !== '$') {
        const w = o[t]
        if (w !== void 0)
          switch (w) {
            case 1:
              return s[t]
            case 2:
              return r[t]
            case 4:
              return n[t]
            case 3:
              return i[t]
          }
        else {
          if (Kn(s, t)) return (o[t] = 1), s[t]
          if (r !== te && X(r, t)) return (o[t] = 2), r[t]
          if ((u = e.propsOptions[0]) && X(u, t)) return (o[t] = 3), i[t]
          if (n !== te && X(n, t)) return (o[t] = 4), n[t]
          us && (o[t] = 0)
        }
      }
      const d = Pt[t]
      let h, m
      if (d) return t === '$attrs' && _e(e, 'get', t), d(e)
      if ((h = l.__cssModules) && (h = h[t])) return h
      if (n !== te && X(n, t)) return (o[t] = 4), n[t]
      if (((m = c.config.globalProperties), X(m, t))) return m[t]
    },
    set({ _: e }, t, n) {
      const { data: s, setupState: r, ctx: i } = e
      return Kn(r, t)
        ? ((r[t] = n), !0)
        : s !== te && X(s, t)
          ? ((s[t] = n), !0)
          : X(e.props, t) || (t[0] === '$' && t.slice(1) in e)
            ? !1
            : ((i[t] = n), !0)
    },
    has(
      {
        _: {
          data: e,
          setupState: t,
          accessCache: n,
          ctx: s,
          appContext: r,
          propsOptions: i
        }
      },
      o
    ) {
      let l
      return (
        !!n[o] ||
        (e !== te && X(e, o)) ||
        Kn(t, o) ||
        ((l = i[0]) && X(l, o)) ||
        X(s, o) ||
        X(Pt, o) ||
        X(r.config.globalProperties, o)
      )
    },
    defineProperty(e, t, n) {
      return (
        n.get != null
          ? (e._.accessCache[t] = 0)
          : X(n, 'value') && this.set(e, t, n.value, null),
        Reflect.defineProperty(e, t, n)
      )
    }
  }
function Wa() {
  return Ol().slots
}
function Ol() {
  const e = Fn()
  return e.setupContext || (e.setupContext = ki(e))
}
function sr(e) {
  return B(e) ? e.reduce((t, n) => ((t[n] = null), t), {}) : e
}
let us = !0
function Il(e) {
  const t = Ms(e),
    n = e.proxy,
    s = e.ctx
  ;(us = !1), t.beforeCreate && rr(t.beforeCreate, e, 'bc')
  const {
    data: r,
    computed: i,
    methods: o,
    watch: l,
    provide: c,
    inject: u,
    created: d,
    beforeMount: h,
    mounted: m,
    beforeUpdate: w,
    updated: O,
    activated: M,
    deactivated: V,
    beforeDestroy: q,
    beforeUnmount: J,
    destroyed: g,
    unmounted: _,
    render: P,
    renderTracked: I,
    renderTriggered: D,
    errorCaptured: R,
    serverPrefetch: j,
    expose: E,
    inheritAttrs: U,
    components: S,
    directives: W,
    filters: re
  } = t
  if ((u && Ll(u, s, null), o))
    for (const z in o) {
      const F = o[z]
      K(F) && (s[z] = F.bind(n))
    }
  if (r) {
    const z = r.call(n, n)
    Z(z) && (e.data = xn(z))
  }
  if (((us = !0), i))
    for (const z in i) {
      const F = i[z],
        Fe = K(F) ? F.bind(n, n) : K(F.get) ? F.get.bind(n, n) : xe,
        Kt = !K(F) && K(F.set) ? F.set.bind(n) : xe,
        et = se({ get: Fe, set: Kt })
      Object.defineProperty(s, z, {
        enumerable: !0,
        configurable: !0,
        get: () => et.value,
        set: (Oe) => (et.value = Oe)
      })
    }
  if (l) for (const z in l) Si(l[z], s, n, z)
  if (c) {
    const z = K(c) ? c.call(n) : c
    Reflect.ownKeys(z).forEach((F) => {
      Hl(F, z[F])
    })
  }
  d && rr(d, e, 'c')
  function $(z, F) {
    B(F) ? F.forEach((Fe) => z(Fe.bind(n))) : F && z(F.bind(n))
  }
  if (
    ($(wl, h),
    $(Tt, m),
    $(El, w),
    $(Cl, O),
    $(yl, M),
    $(vl, V),
    $(Al, R),
    $(Tl, I),
    $(Sl, D),
    $(Ci, J),
    $(Mn, _),
    $(xl, j),
    B(E))
  )
    if (E.length) {
      const z = e.exposed || (e.exposed = {})
      E.forEach((F) => {
        Object.defineProperty(z, F, {
          get: () => n[F],
          set: (Fe) => (n[F] = Fe)
        })
      })
    } else e.exposed || (e.exposed = {})
  P && e.render === xe && (e.render = P),
    U != null && (e.inheritAttrs = U),
    S && (e.components = S),
    W && (e.directives = W)
}
function Ll(e, t, n = xe) {
  B(e) && (e = fs(e))
  for (const s in e) {
    const r = e[s]
    let i
    Z(r)
      ? 'default' in r
        ? (i = Et(r.from || s, r.default, !0))
        : (i = Et(r.from || s))
      : (i = Et(r)),
      he(i)
        ? Object.defineProperty(t, s, {
            enumerable: !0,
            configurable: !0,
            get: () => i.value,
            set: (o) => (i.value = o)
          })
        : (t[s] = i)
  }
}
function rr(e, t, n) {
  Se(B(e) ? e.map((s) => s.bind(t.proxy)) : e.bind(t.proxy), t, n)
}
function Si(e, t, n, s) {
  const r = s.includes('.') ? _i(n, s) : () => n[s]
  if (ne(e)) {
    const i = t[e]
    K(i) && je(r, i)
  } else if (K(e)) je(r, e.bind(n))
  else if (Z(e))
    if (B(e)) e.forEach((i) => Si(i, t, n, s))
    else {
      const i = K(e.handler) ? e.handler.bind(n) : t[e.handler]
      K(i) && je(r, i, e)
    }
}
function Ms(e) {
  const t = e.type,
    { mixins: n, extends: s } = t,
    {
      mixins: r,
      optionsCache: i,
      config: { optionMergeStrategies: o }
    } = e.appContext,
    l = i.get(t)
  let c
  return (
    l
      ? (c = l)
      : !r.length && !n && !s
        ? (c = t)
        : ((c = {}),
          r.length && r.forEach((u) => gn(c, u, o, !0)),
          gn(c, t, o)),
    Z(t) && i.set(t, c),
    c
  )
}
function gn(e, t, n, s = !1) {
  const { mixins: r, extends: i } = t
  i && gn(e, i, n, !0), r && r.forEach((o) => gn(e, o, n, !0))
  for (const o in t)
    if (!(s && o === 'expose')) {
      const l = Pl[o] || (n && n[o])
      e[o] = l ? l(e[o], t[o]) : t[o]
    }
  return e
}
const Pl = {
  data: ir,
  props: or,
  emits: or,
  methods: Ot,
  computed: Ot,
  beforeCreate: pe,
  created: pe,
  beforeMount: pe,
  mounted: pe,
  beforeUpdate: pe,
  updated: pe,
  beforeDestroy: pe,
  beforeUnmount: pe,
  destroyed: pe,
  unmounted: pe,
  activated: pe,
  deactivated: pe,
  errorCaptured: pe,
  serverPrefetch: pe,
  components: Ot,
  directives: Ot,
  watch: Nl,
  provide: ir,
  inject: Ml
}
function ir(e, t) {
  return t
    ? e
      ? function () {
          return ie(
            K(e) ? e.call(this, this) : e,
            K(t) ? t.call(this, this) : t
          )
        }
      : t
    : e
}
function Ml(e, t) {
  return Ot(fs(e), fs(t))
}
function fs(e) {
  if (B(e)) {
    const t = {}
    for (let n = 0; n < e.length; n++) t[e[n]] = e[n]
    return t
  }
  return e
}
function pe(e, t) {
  return e ? [...new Set([].concat(e, t))] : t
}
function Ot(e, t) {
  return e ? ie(Object.create(null), e, t) : t
}
function or(e, t) {
  return e
    ? B(e) && B(t)
      ? [...new Set([...e, ...t])]
      : ie(Object.create(null), sr(e), sr(t ?? {}))
    : t
}
function Nl(e, t) {
  if (!e) return t
  if (!t) return e
  const n = ie(Object.create(null), e)
  for (const s in t) n[s] = pe(e[s], t[s])
  return n
}
function Ti() {
  return {
    app: null,
    config: {
      isNativeTag: lo,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {}
    },
    mixins: [],
    components: {},
    directives: {},
    provides: Object.create(null),
    optionsCache: new WeakMap(),
    propsCache: new WeakMap(),
    emitsCache: new WeakMap()
  }
}
let Fl = 0
function $l(e, t) {
  return function (s, r = null) {
    K(s) || (s = ie({}, s)), r != null && !Z(r) && (r = null)
    const i = Ti(),
      o = new WeakSet()
    let l = !1
    const c = (i.app = {
      _uid: Fl++,
      _component: s,
      _props: r,
      _container: null,
      _context: i,
      _instance: null,
      version: cc,
      get config() {
        return i.config
      },
      set config(u) {},
      use(u, ...d) {
        return (
          o.has(u) ||
            (u && K(u.install)
              ? (o.add(u), u.install(c, ...d))
              : K(u) && (o.add(u), u(c, ...d))),
          c
        )
      },
      mixin(u) {
        return i.mixins.includes(u) || i.mixins.push(u), c
      },
      component(u, d) {
        return d ? ((i.components[u] = d), c) : i.components[u]
      },
      directive(u, d) {
        return d ? ((i.directives[u] = d), c) : i.directives[u]
      },
      mount(u, d, h) {
        if (!l) {
          const m = ae(s, r)
          return (
            (m.appContext = i),
            h === !0 ? (h = 'svg') : h === !1 && (h = void 0),
            d && t ? t(m, u) : e(m, u, h),
            (l = !0),
            (c._container = u),
            (u.__vue_app__ = c),
            $s(m.component) || m.component.proxy
          )
        }
      },
      unmount() {
        l && (e(null, c._container), delete c._container.__vue_app__)
      },
      provide(u, d) {
        return (i.provides[u] = d), c
      },
      runWithContext(u) {
        const d = Mt
        Mt = c
        try {
          return u()
        } finally {
          Mt = d
        }
      }
    })
    return c
  }
}
let Mt = null
function Hl(e, t) {
  if (ce) {
    let n = ce.provides
    const s = ce.parent && ce.parent.provides
    s === n && (n = ce.provides = Object.create(s)), (n[e] = t)
  }
}
function Et(e, t, n = !1) {
  const s = ce || de
  if (s || Mt) {
    const r = s
      ? s.parent == null
        ? s.vnode.appContext && s.vnode.appContext.provides
        : s.parent.provides
      : Mt._context.provides
    if (r && e in r) return r[e]
    if (arguments.length > 1) return n && K(t) ? t.call(s && s.proxy) : t
  }
}
function jl(e, t, n, s = !1) {
  const r = {},
    i = {}
  un(i, Nn, 1), (e.propsDefaults = Object.create(null)), Ai(e, t, r, i)
  for (const o in e.propsOptions[0]) o in r || (r[o] = void 0)
  n ? (e.props = s ? r : Ko(r)) : e.type.props ? (e.props = r) : (e.props = i),
    (e.attrs = i)
}
function Vl(e, t, n, s) {
  const {
      props: r,
      attrs: i,
      vnode: { patchFlag: o }
    } = e,
    l = Y(r),
    [c] = e.propsOptions
  let u = !1
  if ((s || o > 0) && !(o & 16)) {
    if (o & 8) {
      const d = e.vnode.dynamicProps
      for (let h = 0; h < d.length; h++) {
        let m = d[h]
        if (Rn(e.emitsOptions, m)) continue
        const w = t[m]
        if (c)
          if (X(i, m)) w !== i[m] && ((i[m] = w), (u = !0))
          else {
            const O = Me(m)
            r[O] = ds(c, l, O, w, e, !1)
          }
        else w !== i[m] && ((i[m] = w), (u = !0))
      }
    }
  } else {
    Ai(e, t, r, i) && (u = !0)
    let d
    for (const h in l)
      (!t || (!X(t, h) && ((d = at(h)) === h || !X(t, d)))) &&
        (c
          ? n &&
            (n[h] !== void 0 || n[d] !== void 0) &&
            (r[h] = ds(c, l, h, void 0, e, !0))
          : delete r[h])
    if (i !== l) for (const h in i) (!t || !X(t, h)) && (delete i[h], (u = !0))
  }
  u && He(e, 'set', '$attrs')
}
function Ai(e, t, n, s) {
  const [r, i] = e.propsOptions
  let o = !1,
    l
  if (t)
    for (let c in t) {
      if (yt(c)) continue
      const u = t[c]
      let d
      r && X(r, (d = Me(c)))
        ? !i || !i.includes(d)
          ? (n[d] = u)
          : ((l || (l = {}))[d] = u)
        : Rn(e.emitsOptions, c) ||
          ((!(c in s) || u !== s[c]) && ((s[c] = u), (o = !0)))
    }
  if (i) {
    const c = Y(n),
      u = l || te
    for (let d = 0; d < i.length; d++) {
      const h = i[d]
      n[h] = ds(r, c, h, u[h], e, !X(u, h))
    }
  }
  return o
}
function ds(e, t, n, s, r, i) {
  const o = e[n]
  if (o != null) {
    const l = X(o, 'default')
    if (l && s === void 0) {
      const c = o.default
      if (o.type !== Function && !o.skipFactory && K(c)) {
        const { propsDefaults: u } = r
        if (n in u) s = u[n]
        else {
          const d = kt(r)
          ;(s = u[n] = c.call(null, t)), d()
        }
      } else s = c
    }
    o[0] && (i && !l ? (s = !1) : o[1] && (s === '' || s === at(n)) && (s = !0))
  }
  return s
}
function Ri(e, t, n = !1) {
  const s = t.propsCache,
    r = s.get(e)
  if (r) return r
  const i = e.props,
    o = {},
    l = []
  let c = !1
  if (!K(e)) {
    const d = (h) => {
      c = !0
      const [m, w] = Ri(h, t, !0)
      ie(o, m), w && l.push(...w)
    }
    !n && t.mixins.length && t.mixins.forEach(d),
      e.extends && d(e.extends),
      e.mixins && e.mixins.forEach(d)
  }
  if (!i && !c) return Z(e) && s.set(e, mt), mt
  if (B(i))
    for (let d = 0; d < i.length; d++) {
      const h = Me(i[d])
      lr(h) && (o[h] = te)
    }
  else if (i)
    for (const d in i) {
      const h = Me(d)
      if (lr(h)) {
        const m = i[d],
          w = (o[h] = B(m) || K(m) ? { type: m } : ie({}, m))
        if (w) {
          const O = ur(Boolean, w.type),
            M = ur(String, w.type)
          ;(w[0] = O > -1),
            (w[1] = M < 0 || O < M),
            (O > -1 || X(w, 'default')) && l.push(h)
        }
      }
    }
  const u = [o, l]
  return Z(e) && s.set(e, u), u
}
function lr(e) {
  return e[0] !== '$' && !yt(e)
}
function cr(e) {
  return e === null
    ? 'null'
    : typeof e == 'function'
      ? e.name || ''
      : (typeof e == 'object' && e.constructor && e.constructor.name) || ''
}
function ar(e, t) {
  return cr(e) === cr(t)
}
function ur(e, t) {
  return B(t) ? t.findIndex((n) => ar(n, e)) : K(t) && ar(t, e) ? 0 : -1
}
const Oi = (e) => e[0] === '_' || e === '$stable',
  Ns = (e) => (B(e) ? e.map(Ae) : [Ae(e)]),
  Dl = (e, t, n) => {
    if (t._n) return t
    const s = ol((...r) => Ns(t(...r)), n)
    return (s._c = !1), s
  },
  Ii = (e, t, n) => {
    const s = e._ctx
    for (const r in e) {
      if (Oi(r)) continue
      const i = e[r]
      if (K(i)) t[r] = Dl(r, i, s)
      else if (i != null) {
        const o = Ns(i)
        t[r] = () => o
      }
    }
  },
  Li = (e, t) => {
    const n = Ns(t)
    e.slots.default = () => n
  },
  Ul = (e, t) => {
    if (e.vnode.shapeFlag & 32) {
      const n = t._
      n ? ((e.slots = Y(t)), un(t, '_', n)) : Ii(t, (e.slots = {}))
    } else (e.slots = {}), t && Li(e, t)
    un(e.slots, Nn, 1)
  },
  Bl = (e, t, n) => {
    const { vnode: s, slots: r } = e
    let i = !0,
      o = te
    if (s.shapeFlag & 32) {
      const l = t._
      l
        ? n && l === 1
          ? (i = !1)
          : (ie(r, t), !n && l === 1 && delete r._)
        : ((i = !t.$stable), Ii(t, r)),
        (o = t)
    } else t && (Li(e, t), (o = { default: 1 }))
    if (i) for (const l in r) !Oi(l) && o[l] == null && delete r[l]
  }
function mn(e, t, n, s, r = !1) {
  if (B(e)) {
    e.forEach((m, w) => mn(m, t && (B(t) ? t[w] : t), n, s, r))
    return
  }
  if (wt(s) && !r) return
  const i = s.shapeFlag & 4 ? $s(s.component) || s.component.proxy : s.el,
    o = r ? null : i,
    { i: l, r: c } = e,
    u = t && t.r,
    d = l.refs === te ? (l.refs = {}) : l.refs,
    h = l.setupState
  if (
    (u != null &&
      u !== c &&
      (ne(u)
        ? ((d[u] = null), X(h, u) && (h[u] = null))
        : he(u) && (u.value = null)),
    K(c))
  )
    Ye(c, l, 12, [o, d])
  else {
    const m = ne(c),
      w = he(c)
    if (m || w) {
      const O = () => {
        if (e.f) {
          const M = m ? (X(h, c) ? h[c] : d[c]) : c.value
          r
            ? B(M) && ys(M, i)
            : B(M)
              ? M.includes(i) || M.push(i)
              : m
                ? ((d[c] = [i]), X(h, c) && (h[c] = d[c]))
                : ((c.value = [i]), e.k && (d[e.k] = c.value))
        } else
          m
            ? ((d[c] = o), X(h, c) && (h[c] = o))
            : w && ((c.value = o), e.k && (d[e.k] = o))
      }
      o ? ((O.id = -1), ge(O, n)) : O()
    }
  }
}
let Be = !1
const kl = (e) =>
    e.namespaceURI.includes('svg') && e.tagName !== 'foreignObject',
  Kl = (e) => e.namespaceURI.includes('MathML'),
  Zt = (e) => {
    if (kl(e)) return 'svg'
    if (Kl(e)) return 'mathml'
  },
  en = (e) => e.nodeType === 8
function Wl(e) {
  const {
      mt: t,
      p: n,
      o: {
        patchProp: s,
        createText: r,
        nextSibling: i,
        parentNode: o,
        remove: l,
        insert: c,
        createComment: u
      }
    } = e,
    d = (g, _) => {
      if (!_.hasChildNodes()) {
        n(null, g, _), hn(), (_._vnode = g)
        return
      }
      ;(Be = !1),
        h(_.firstChild, g, null, null, null),
        hn(),
        (_._vnode = g),
        Be && console.error('Hydration completed but contains mismatches.')
    },
    h = (g, _, P, I, D, R = !1) => {
      const j = en(g) && g.data === '[',
        E = () => M(g, _, P, I, D, j),
        { type: U, ref: S, shapeFlag: W, patchFlag: re } = _
      let le = g.nodeType
      ;(_.el = g), re === -2 && ((R = !1), (_.dynamicChildren = null))
      let $ = null
      switch (U) {
        case xt:
          le !== 3
            ? _.children === ''
              ? (c((_.el = r('')), o(g), g), ($ = g))
              : ($ = E())
            : (g.data !== _.children && ((Be = !0), (g.data = _.children)),
              ($ = i(g)))
          break
        case be:
          J(g)
            ? (($ = i(g)), q((_.el = g.content.firstChild), g, P))
            : le !== 8 || j
              ? ($ = E())
              : ($ = i(g))
          break
        case Nt:
          if ((j && ((g = i(g)), (le = g.nodeType)), le === 1 || le === 3)) {
            $ = g
            const z = !_.children.length
            for (let F = 0; F < _.staticCount; F++)
              z && (_.children += $.nodeType === 1 ? $.outerHTML : $.data),
                F === _.staticCount - 1 && (_.anchor = $),
                ($ = i($))
            return j ? i($) : $
          } else E()
          break
        case me:
          j ? ($ = O(g, _, P, I, D, R)) : ($ = E())
          break
        default:
          if (W & 1)
            (le !== 1 || _.type.toLowerCase() !== g.tagName.toLowerCase()) &&
            !J(g)
              ? ($ = E())
              : ($ = m(g, _, P, I, D, R))
          else if (W & 6) {
            _.slotScopeIds = D
            const z = o(g)
            if (
              (j
                ? ($ = V(g))
                : en(g) && g.data === 'teleport start'
                  ? ($ = V(g, g.data, 'teleport end'))
                  : ($ = i(g)),
              t(_, z, null, P, I, Zt(z), R),
              wt(_))
            ) {
              let F
              j
                ? ((F = ae(me)),
                  (F.anchor = $ ? $.previousSibling : z.lastChild))
                : (F = g.nodeType === 3 ? Di('') : ae('div')),
                (F.el = g),
                (_.component.subTree = F)
            }
          } else
            W & 64
              ? le !== 8
                ? ($ = E())
                : ($ = _.type.hydrate(g, _, P, I, D, R, e, w))
              : W & 128 &&
                ($ = _.type.hydrate(g, _, P, I, Zt(o(g)), D, R, e, h))
      }
      return S != null && mn(S, null, I, _), $
    },
    m = (g, _, P, I, D, R) => {
      R = R || !!_.dynamicChildren
      const {
          type: j,
          props: E,
          patchFlag: U,
          shapeFlag: S,
          dirs: W,
          transition: re
        } = _,
        le = j === 'input' || j === 'option'
      if (le || U !== -1) {
        W && Le(_, null, P, 'created')
        let $ = !1
        if (J(g)) {
          $ = Pi(I, re) && P && P.vnode.props && P.vnode.props.appear
          const F = g.content.firstChild
          $ && re.beforeEnter(F), q(F, g, P), (_.el = g = F)
        }
        if (S & 16 && !(E && (E.innerHTML || E.textContent))) {
          let F = w(g.firstChild, _, g, P, I, D, R)
          for (; F; ) {
            Be = !0
            const Fe = F
            ;(F = F.nextSibling), l(Fe)
          }
        } else
          S & 8 &&
            g.textContent !== _.children &&
            ((Be = !0), (g.textContent = _.children))
        if (E)
          if (le || !R || U & 48)
            for (const F in E)
              ((le && (F.endsWith('value') || F === 'indeterminate')) ||
                (Bt(F) && !yt(F)) ||
                F[0] === '.') &&
                s(g, F, null, E[F], void 0, void 0, P)
          else E.onClick && s(g, 'onClick', null, E.onClick, void 0, void 0, P)
        let z
        ;(z = E && E.onVnodeBeforeMount) && Ee(z, P, _),
          W && Le(_, null, P, 'beforeMount'),
          ((z = E && E.onVnodeMounted) || W || $) &&
            gi(() => {
              z && Ee(z, P, _), $ && re.enter(g), W && Le(_, null, P, 'mounted')
            }, I)
      }
      return g.nextSibling
    },
    w = (g, _, P, I, D, R, j) => {
      j = j || !!_.dynamicChildren
      const E = _.children,
        U = E.length
      for (let S = 0; S < U; S++) {
        const W = j ? E[S] : (E[S] = Ae(E[S]))
        if (g) g = h(g, W, I, D, R, j)
        else {
          if (W.type === xt && !W.children) continue
          ;(Be = !0), n(null, W, P, null, I, D, Zt(P), R)
        }
      }
      return g
    },
    O = (g, _, P, I, D, R) => {
      const { slotScopeIds: j } = _
      j && (D = D ? D.concat(j) : j)
      const E = o(g),
        U = w(i(g), _, E, P, I, D, R)
      return U && en(U) && U.data === ']'
        ? i((_.anchor = U))
        : ((Be = !0), c((_.anchor = u(']')), E, U), U)
    },
    M = (g, _, P, I, D, R) => {
      if (((Be = !0), (_.el = null), R)) {
        const U = V(g)
        for (;;) {
          const S = i(g)
          if (S && S !== U) l(S)
          else break
        }
      }
      const j = i(g),
        E = o(g)
      return l(g), n(null, _, E, j, P, I, Zt(E), D), j
    },
    V = (g, _ = '[', P = ']') => {
      let I = 0
      for (; g; )
        if (((g = i(g)), g && en(g) && (g.data === _ && I++, g.data === P))) {
          if (I === 0) return i(g)
          I--
        }
      return g
    },
    q = (g, _, P) => {
      const I = _.parentNode
      I && I.replaceChild(g, _)
      let D = P
      for (; D; )
        D.vnode.el === _ && (D.vnode.el = D.subTree.el = g), (D = D.parent)
    },
    J = (g) => g.nodeType === 1 && g.tagName.toLowerCase() === 'template'
  return [d, h]
}
const ge = gi
function ql(e) {
  return Gl(e, Wl)
}
function Gl(e, t) {
  const n = Br()
  n.__VUE__ = !0
  const {
      insert: s,
      remove: r,
      patchProp: i,
      createElement: o,
      createText: l,
      createComment: c,
      setText: u,
      setElementText: d,
      parentNode: h,
      nextSibling: m,
      setScopeId: w = xe,
      insertStaticContent: O
    } = e,
    M = (
      a,
      f,
      p,
      y = null,
      v = null,
      x = null,
      A = void 0,
      C = null,
      T = !!f.dynamicChildren
    ) => {
      if (a === f) return
      a && !it(a, f) && ((y = Wt(a)), Oe(a, v, x, !0), (a = null)),
        f.patchFlag === -2 && ((T = !1), (f.dynamicChildren = null))
      const { type: b, ref: L, shapeFlag: H } = f
      switch (b) {
        case xt:
          V(a, f, p, y)
          break
        case be:
          q(a, f, p, y)
          break
        case Nt:
          a == null && J(f, p, y, A)
          break
        case me:
          S(a, f, p, y, v, x, A, C, T)
          break
        default:
          H & 1
            ? P(a, f, p, y, v, x, A, C, T)
            : H & 6
              ? W(a, f, p, y, v, x, A, C, T)
              : (H & 64 || H & 128) && b.process(a, f, p, y, v, x, A, C, T, dt)
      }
      L != null && v && mn(L, a && a.ref, x, f || a, !f)
    },
    V = (a, f, p, y) => {
      if (a == null) s((f.el = l(f.children)), p, y)
      else {
        const v = (f.el = a.el)
        f.children !== a.children && u(v, f.children)
      }
    },
    q = (a, f, p, y) => {
      a == null ? s((f.el = c(f.children || '')), p, y) : (f.el = a.el)
    },
    J = (a, f, p, y) => {
      ;[a.el, a.anchor] = O(a.children, f, p, y, a.el, a.anchor)
    },
    g = ({ el: a, anchor: f }, p, y) => {
      let v
      for (; a && a !== f; ) (v = m(a)), s(a, p, y), (a = v)
      s(f, p, y)
    },
    _ = ({ el: a, anchor: f }) => {
      let p
      for (; a && a !== f; ) (p = m(a)), r(a), (a = p)
      r(f)
    },
    P = (a, f, p, y, v, x, A, C, T) => {
      f.type === 'svg' ? (A = 'svg') : f.type === 'math' && (A = 'mathml'),
        a == null ? I(f, p, y, v, x, A, C, T) : j(a, f, v, x, A, C, T)
    },
    I = (a, f, p, y, v, x, A, C) => {
      let T, b
      const { props: L, shapeFlag: H, transition: N, dirs: k } = a
      if (
        ((T = a.el = o(a.type, x, L && L.is, L)),
        H & 8
          ? d(T, a.children)
          : H & 16 && R(a.children, T, null, y, v, Wn(a, x), A, C),
        k && Le(a, null, y, 'created'),
        D(T, a, a.scopeId, A, y),
        L)
      ) {
        for (const Q in L)
          Q !== 'value' &&
            !yt(Q) &&
            i(T, Q, null, L[Q], x, a.children, y, v, $e)
        'value' in L && i(T, 'value', null, L.value, x),
          (b = L.onVnodeBeforeMount) && Ee(b, y, a)
      }
      k && Le(a, null, y, 'beforeMount')
      const G = Pi(v, N)
      G && N.beforeEnter(T),
        s(T, f, p),
        ((b = L && L.onVnodeMounted) || G || k) &&
          ge(() => {
            b && Ee(b, y, a), G && N.enter(T), k && Le(a, null, y, 'mounted')
          }, v)
    },
    D = (a, f, p, y, v) => {
      if ((p && w(a, p), y)) for (let x = 0; x < y.length; x++) w(a, y[x])
      if (v) {
        let x = v.subTree
        if (f === x) {
          const A = v.vnode
          D(a, A, A.scopeId, A.slotScopeIds, v.parent)
        }
      }
    },
    R = (a, f, p, y, v, x, A, C, T = 0) => {
      for (let b = T; b < a.length; b++) {
        const L = (a[b] = C ? Ge(a[b]) : Ae(a[b]))
        M(null, L, f, p, y, v, x, A, C)
      }
    },
    j = (a, f, p, y, v, x, A) => {
      const C = (f.el = a.el)
      let { patchFlag: T, dynamicChildren: b, dirs: L } = f
      T |= a.patchFlag & 16
      const H = a.props || te,
        N = f.props || te
      let k
      if (
        (p && tt(p, !1),
        (k = N.onVnodeBeforeUpdate) && Ee(k, p, f, a),
        L && Le(f, a, p, 'beforeUpdate'),
        p && tt(p, !0),
        b
          ? E(a.dynamicChildren, b, C, p, y, Wn(f, v), x)
          : A || F(a, f, C, null, p, y, Wn(f, v), x, !1),
        T > 0)
      ) {
        if (T & 16) U(C, f, H, N, p, y, v)
        else if (
          (T & 2 && H.class !== N.class && i(C, 'class', null, N.class, v),
          T & 4 && i(C, 'style', H.style, N.style, v),
          T & 8)
        ) {
          const G = f.dynamicProps
          for (let Q = 0; Q < G.length; Q++) {
            const ee = G[Q],
              oe = H[ee],
              Te = N[ee]
            ;(Te !== oe || ee === 'value') &&
              i(C, ee, oe, Te, v, a.children, p, y, $e)
          }
        }
        T & 1 && a.children !== f.children && d(C, f.children)
      } else !A && b == null && U(C, f, H, N, p, y, v)
      ;((k = N.onVnodeUpdated) || L) &&
        ge(() => {
          k && Ee(k, p, f, a), L && Le(f, a, p, 'updated')
        }, y)
    },
    E = (a, f, p, y, v, x, A) => {
      for (let C = 0; C < f.length; C++) {
        const T = a[C],
          b = f[C],
          L =
            T.el && (T.type === me || !it(T, b) || T.shapeFlag & 70)
              ? h(T.el)
              : p
        M(T, b, L, null, y, v, x, A, !0)
      }
    },
    U = (a, f, p, y, v, x, A) => {
      if (p !== y) {
        if (p !== te)
          for (const C in p)
            !yt(C) && !(C in y) && i(a, C, p[C], null, A, f.children, v, x, $e)
        for (const C in y) {
          if (yt(C)) continue
          const T = y[C],
            b = p[C]
          T !== b && C !== 'value' && i(a, C, b, T, A, f.children, v, x, $e)
        }
        'value' in y && i(a, 'value', p.value, y.value, A)
      }
    },
    S = (a, f, p, y, v, x, A, C, T) => {
      const b = (f.el = a ? a.el : l('')),
        L = (f.anchor = a ? a.anchor : l(''))
      let { patchFlag: H, dynamicChildren: N, slotScopeIds: k } = f
      k && (C = C ? C.concat(k) : k),
        a == null
          ? (s(b, p, y), s(L, p, y), R(f.children || [], p, L, v, x, A, C, T))
          : H > 0 && H & 64 && N && a.dynamicChildren
            ? (E(a.dynamicChildren, N, p, v, x, A, C),
              (f.key != null || (v && f === v.subTree)) && Mi(a, f, !0))
            : F(a, f, p, L, v, x, A, C, T)
    },
    W = (a, f, p, y, v, x, A, C, T) => {
      ;(f.slotScopeIds = C),
        a == null
          ? f.shapeFlag & 512
            ? v.ctx.activate(f, p, y, A, T)
            : re(f, p, y, v, x, A, T)
          : le(a, f, T)
    },
    re = (a, f, p, y, v, x, A) => {
      const C = (a.component = nc(a, y, v))
      if ((Ln(a) && (C.ctx.renderer = dt), sc(C), C.asyncDep)) {
        if ((v && v.registerDep(C, $), !a.el)) {
          const T = (C.subTree = ae(be))
          q(null, T, f, p)
        }
      } else $(C, a, f, p, v, x, A)
    },
    le = (a, f, p) => {
      const y = (f.component = a.component)
      if (al(a, f, p))
        if (y.asyncDep && !y.asyncResolved) {
          z(y, f, p)
          return
        } else (y.next = f), nl(y.update), (y.effect.dirty = !0), y.update()
      else (f.el = a.el), (y.vnode = f)
    },
    $ = (a, f, p, y, v, x, A) => {
      const C = () => {
          if (a.isMounted) {
            let { next: L, bu: H, u: N, parent: k, vnode: G } = a
            {
              const ht = Ni(a)
              if (ht) {
                L && ((L.el = G.el), z(a, L, A)),
                  ht.asyncDep.then(() => {
                    a.isUnmounted || C()
                  })
                return
              }
            }
            let Q = L,
              ee
            tt(a, !1),
              L ? ((L.el = G.el), z(a, L, A)) : (L = G),
              H && Dn(H),
              (ee = L.props && L.props.onVnodeBeforeUpdate) && Ee(ee, k, L, G),
              tt(a, !0)
            const oe = Bn(a),
              Te = a.subTree
            ;(a.subTree = oe),
              M(Te, oe, h(Te.el), Wt(Te), a, v, x),
              (L.el = oe.el),
              Q === null && ul(a, oe.el),
              N && ge(N, v),
              (ee = L.props && L.props.onVnodeUpdated) &&
                ge(() => Ee(ee, k, L, G), v)
          } else {
            let L
            const { el: H, props: N } = f,
              { bm: k, m: G, parent: Q } = a,
              ee = wt(f)
            if (
              (tt(a, !1),
              k && Dn(k),
              !ee && (L = N && N.onVnodeBeforeMount) && Ee(L, Q, f),
              tt(a, !0),
              H && Vn)
            ) {
              const oe = () => {
                ;(a.subTree = Bn(a)), Vn(H, a.subTree, a, v, null)
              }
              ee
                ? f.type.__asyncLoader().then(() => !a.isUnmounted && oe())
                : oe()
            } else {
              const oe = (a.subTree = Bn(a))
              M(null, oe, p, y, a, v, x), (f.el = oe.el)
            }
            if ((G && ge(G, v), !ee && (L = N && N.onVnodeMounted))) {
              const oe = f
              ge(() => Ee(L, Q, oe), v)
            }
            ;(f.shapeFlag & 256 ||
              (Q && wt(Q.vnode) && Q.vnode.shapeFlag & 256)) &&
              a.a &&
              ge(a.a, v),
              (a.isMounted = !0),
              (f = p = y = null)
          }
        },
        T = (a.effect = new Es(C, xe, () => Ls(b), a.scope)),
        b = (a.update = () => {
          T.dirty && T.run()
        })
      ;(b.id = a.uid), tt(a, !0), b()
    },
    z = (a, f, p) => {
      f.component = a
      const y = a.vnode.props
      ;(a.vnode = f),
        (a.next = null),
        Vl(a, f.props, y, p),
        Bl(a, f.children, p),
        ut(),
        Zs(a),
        ft()
    },
    F = (a, f, p, y, v, x, A, C, T = !1) => {
      const b = a && a.children,
        L = a ? a.shapeFlag : 0,
        H = f.children,
        { patchFlag: N, shapeFlag: k } = f
      if (N > 0) {
        if (N & 128) {
          Kt(b, H, p, y, v, x, A, C, T)
          return
        } else if (N & 256) {
          Fe(b, H, p, y, v, x, A, C, T)
          return
        }
      }
      k & 8
        ? (L & 16 && $e(b, v, x), H !== b && d(p, H))
        : L & 16
          ? k & 16
            ? Kt(b, H, p, y, v, x, A, C, T)
            : $e(b, v, x, !0)
          : (L & 8 && d(p, ''), k & 16 && R(H, p, y, v, x, A, C, T))
    },
    Fe = (a, f, p, y, v, x, A, C, T) => {
      ;(a = a || mt), (f = f || mt)
      const b = a.length,
        L = f.length,
        H = Math.min(b, L)
      let N
      for (N = 0; N < H; N++) {
        const k = (f[N] = T ? Ge(f[N]) : Ae(f[N]))
        M(a[N], k, p, null, v, x, A, C, T)
      }
      b > L ? $e(a, v, x, !0, !1, H) : R(f, p, y, v, x, A, C, T, H)
    },
    Kt = (a, f, p, y, v, x, A, C, T) => {
      let b = 0
      const L = f.length
      let H = a.length - 1,
        N = L - 1
      for (; b <= H && b <= N; ) {
        const k = a[b],
          G = (f[b] = T ? Ge(f[b]) : Ae(f[b]))
        if (it(k, G)) M(k, G, p, null, v, x, A, C, T)
        else break
        b++
      }
      for (; b <= H && b <= N; ) {
        const k = a[H],
          G = (f[N] = T ? Ge(f[N]) : Ae(f[N]))
        if (it(k, G)) M(k, G, p, null, v, x, A, C, T)
        else break
        H--, N--
      }
      if (b > H) {
        if (b <= N) {
          const k = N + 1,
            G = k < L ? f[k].el : y
          for (; b <= N; )
            M(null, (f[b] = T ? Ge(f[b]) : Ae(f[b])), p, G, v, x, A, C, T), b++
        }
      } else if (b > N) for (; b <= H; ) Oe(a[b], v, x, !0), b++
      else {
        const k = b,
          G = b,
          Q = new Map()
        for (b = G; b <= N; b++) {
          const ye = (f[b] = T ? Ge(f[b]) : Ae(f[b]))
          ye.key != null && Q.set(ye.key, b)
        }
        let ee,
          oe = 0
        const Te = N - G + 1
        let ht = !1,
          Bs = 0
        const At = new Array(Te)
        for (b = 0; b < Te; b++) At[b] = 0
        for (b = k; b <= H; b++) {
          const ye = a[b]
          if (oe >= Te) {
            Oe(ye, v, x, !0)
            continue
          }
          let Ie
          if (ye.key != null) Ie = Q.get(ye.key)
          else
            for (ee = G; ee <= N; ee++)
              if (At[ee - G] === 0 && it(ye, f[ee])) {
                Ie = ee
                break
              }
          Ie === void 0
            ? Oe(ye, v, x, !0)
            : ((At[Ie - G] = b + 1),
              Ie >= Bs ? (Bs = Ie) : (ht = !0),
              M(ye, f[Ie], p, null, v, x, A, C, T),
              oe++)
        }
        const ks = ht ? zl(At) : mt
        for (ee = ks.length - 1, b = Te - 1; b >= 0; b--) {
          const ye = G + b,
            Ie = f[ye],
            Ks = ye + 1 < L ? f[ye + 1].el : y
          At[b] === 0
            ? M(null, Ie, p, Ks, v, x, A, C, T)
            : ht && (ee < 0 || b !== ks[ee] ? et(Ie, p, Ks, 2) : ee--)
        }
      }
    },
    et = (a, f, p, y, v = null) => {
      const { el: x, type: A, transition: C, children: T, shapeFlag: b } = a
      if (b & 6) {
        et(a.component.subTree, f, p, y)
        return
      }
      if (b & 128) {
        a.suspense.move(f, p, y)
        return
      }
      if (b & 64) {
        A.move(a, f, p, dt)
        return
      }
      if (A === me) {
        s(x, f, p)
        for (let H = 0; H < T.length; H++) et(T[H], f, p, y)
        s(a.anchor, f, p)
        return
      }
      if (A === Nt) {
        g(a, f, p)
        return
      }
      if (y !== 2 && b & 1 && C)
        if (y === 0) C.beforeEnter(x), s(x, f, p), ge(() => C.enter(x), v)
        else {
          const { leave: H, delayLeave: N, afterLeave: k } = C,
            G = () => s(x, f, p),
            Q = () => {
              H(x, () => {
                G(), k && k()
              })
            }
          N ? N(x, G, Q) : Q()
        }
      else s(x, f, p)
    },
    Oe = (a, f, p, y = !1, v = !1) => {
      const {
        type: x,
        props: A,
        ref: C,
        children: T,
        dynamicChildren: b,
        shapeFlag: L,
        patchFlag: H,
        dirs: N
      } = a
      if ((C != null && mn(C, null, p, a, !0), L & 256)) {
        f.ctx.deactivate(a)
        return
      }
      const k = L & 1 && N,
        G = !wt(a)
      let Q
      if ((G && (Q = A && A.onVnodeBeforeUnmount) && Ee(Q, f, a), L & 6))
        oo(a.component, p, y)
      else {
        if (L & 128) {
          a.suspense.unmount(p, y)
          return
        }
        k && Le(a, null, f, 'beforeUnmount'),
          L & 64
            ? a.type.remove(a, f, p, v, dt, y)
            : b && (x !== me || (H > 0 && H & 64))
              ? $e(b, f, p, !1, !0)
              : ((x === me && H & 384) || (!v && L & 16)) && $e(T, f, p),
          y && Ds(a)
      }
      ;((G && (Q = A && A.onVnodeUnmounted)) || k) &&
        ge(() => {
          Q && Ee(Q, f, a), k && Le(a, null, f, 'unmounted')
        }, p)
    },
    Ds = (a) => {
      const { type: f, el: p, anchor: y, transition: v } = a
      if (f === me) {
        io(p, y)
        return
      }
      if (f === Nt) {
        _(a)
        return
      }
      const x = () => {
        r(p), v && !v.persisted && v.afterLeave && v.afterLeave()
      }
      if (a.shapeFlag & 1 && v && !v.persisted) {
        const { leave: A, delayLeave: C } = v,
          T = () => A(p, x)
        C ? C(a.el, x, T) : T()
      } else x()
    },
    io = (a, f) => {
      let p
      for (; a !== f; ) (p = m(a)), r(a), (a = p)
      r(f)
    },
    oo = (a, f, p) => {
      const { bum: y, scope: v, update: x, subTree: A, um: C } = a
      y && Dn(y),
        v.stop(),
        x && ((x.active = !1), Oe(A, a, f, p)),
        C && ge(C, f),
        ge(() => {
          a.isUnmounted = !0
        }, f),
        f &&
          f.pendingBranch &&
          !f.isUnmounted &&
          a.asyncDep &&
          !a.asyncResolved &&
          a.suspenseId === f.pendingId &&
          (f.deps--, f.deps === 0 && f.resolve())
    },
    $e = (a, f, p, y = !1, v = !1, x = 0) => {
      for (let A = x; A < a.length; A++) Oe(a[A], f, p, y, v)
    },
    Wt = (a) =>
      a.shapeFlag & 6
        ? Wt(a.component.subTree)
        : a.shapeFlag & 128
          ? a.suspense.next()
          : m(a.anchor || a.el)
  let Hn = !1
  const Us = (a, f, p) => {
      a == null
        ? f._vnode && Oe(f._vnode, null, null, !0)
        : M(f._vnode || null, a, f, null, null, null, p),
        Hn || ((Hn = !0), Zs(), hn(), (Hn = !1)),
        (f._vnode = a)
    },
    dt = {
      p: M,
      um: Oe,
      m: et,
      r: Ds,
      mt: re,
      mc: R,
      pc: F,
      pbc: E,
      n: Wt,
      o: e
    }
  let jn, Vn
  return (
    t && ([jn, Vn] = t(dt)), { render: Us, hydrate: jn, createApp: $l(Us, jn) }
  )
}
function Wn({ type: e, props: t }, n) {
  return (n === 'svg' && e === 'foreignObject') ||
    (n === 'mathml' &&
      e === 'annotation-xml' &&
      t &&
      t.encoding &&
      t.encoding.includes('html'))
    ? void 0
    : n
}
function tt({ effect: e, update: t }, n) {
  e.allowRecurse = t.allowRecurse = n
}
function Pi(e, t) {
  return (!e || (e && !e.pendingBranch)) && t && !t.persisted
}
function Mi(e, t, n = !1) {
  const s = e.children,
    r = t.children
  if (B(s) && B(r))
    for (let i = 0; i < s.length; i++) {
      const o = s[i]
      let l = r[i]
      l.shapeFlag & 1 &&
        !l.dynamicChildren &&
        ((l.patchFlag <= 0 || l.patchFlag === 32) &&
          ((l = r[i] = Ge(r[i])), (l.el = o.el)),
        n || Mi(o, l)),
        l.type === xt && (l.el = o.el)
    }
}
function zl(e) {
  const t = e.slice(),
    n = [0]
  let s, r, i, o, l
  const c = e.length
  for (s = 0; s < c; s++) {
    const u = e[s]
    if (u !== 0) {
      if (((r = n[n.length - 1]), e[r] < u)) {
        ;(t[s] = r), n.push(s)
        continue
      }
      for (i = 0, o = n.length - 1; i < o; )
        (l = (i + o) >> 1), e[n[l]] < u ? (i = l + 1) : (o = l)
      u < e[n[i]] && (i > 0 && (t[s] = n[i - 1]), (n[i] = s))
    }
  }
  for (i = n.length, o = n[i - 1]; i-- > 0; ) (n[i] = o), (o = t[o])
  return n
}
function Ni(e) {
  const t = e.subTree.component
  if (t) return t.asyncDep && !t.asyncResolved ? t : Ni(t)
}
const Xl = (e) => e.__isTeleport,
  me = Symbol.for('v-fgt'),
  xt = Symbol.for('v-txt'),
  be = Symbol.for('v-cmt'),
  Nt = Symbol.for('v-stc'),
  Ft = []
let Re = null
function Fi(e = !1) {
  Ft.push((Re = e ? null : []))
}
function Yl() {
  Ft.pop(), (Re = Ft[Ft.length - 1] || null)
}
let Dt = 1
function fr(e) {
  Dt += e
}
function $i(e) {
  return (
    (e.dynamicChildren = Dt > 0 ? Re || mt : null),
    Yl(),
    Dt > 0 && Re && Re.push(e),
    e
  )
}
function qa(e, t, n, s, r, i) {
  return $i(Vi(e, t, n, s, r, i, !0))
}
function Hi(e, t, n, s, r) {
  return $i(ae(e, t, n, s, r, !0))
}
function _n(e) {
  return e ? e.__v_isVNode === !0 : !1
}
function it(e, t) {
  return e.type === t.type && e.key === t.key
}
const Nn = '__vInternal',
  ji = ({ key: e }) => e ?? null,
  ln = ({ ref: e, ref_key: t, ref_for: n }) => (
    typeof e == 'number' && (e = '' + e),
    e != null
      ? ne(e) || he(e) || K(e)
        ? { i: de, r: e, k: t, f: !!n }
        : e
      : null
  )
function Vi(
  e,
  t = null,
  n = null,
  s = 0,
  r = null,
  i = e === me ? 0 : 1,
  o = !1,
  l = !1
) {
  const c = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && ji(t),
    ref: t && ln(t),
    scopeId: On,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: i,
    patchFlag: s,
    dynamicProps: r,
    dynamicChildren: null,
    appContext: null,
    ctx: de
  }
  return (
    l
      ? (Fs(c, n), i & 128 && e.normalize(c))
      : n && (c.shapeFlag |= ne(n) ? 8 : 16),
    Dt > 0 &&
      !o &&
      Re &&
      (c.patchFlag > 0 || i & 6) &&
      c.patchFlag !== 32 &&
      Re.push(c),
    c
  )
}
const ae = Jl
function Jl(e, t = null, n = null, s = 0, r = null, i = !1) {
  if (((!e || e === hi) && (e = be), _n(e))) {
    const l = Ze(e, t, !0)
    return (
      n && Fs(l, n),
      Dt > 0 &&
        !i &&
        Re &&
        (l.shapeFlag & 6 ? (Re[Re.indexOf(e)] = l) : Re.push(l)),
      (l.patchFlag |= -2),
      l
    )
  }
  if ((lc(e) && (e = e.__vccOpts), t)) {
    t = Ql(t)
    let { class: l, style: c } = t
    l && !ne(l) && (t.class = ws(l)),
      Z(c) && (si(c) && !B(c) && (c = ie({}, c)), (t.style = bs(c)))
  }
  const o = ne(e) ? 1 : fl(e) ? 128 : Xl(e) ? 64 : Z(e) ? 4 : K(e) ? 2 : 0
  return Vi(e, t, n, s, r, o, i, !0)
}
function Ql(e) {
  return e ? (si(e) || Nn in e ? ie({}, e) : e) : null
}
function Ze(e, t, n = !1) {
  const { props: s, ref: r, patchFlag: i, children: o } = e,
    l = t ? Zl(s || {}, t) : s
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: l,
    key: l && ji(l),
    ref:
      t && t.ref ? (n && r ? (B(r) ? r.concat(ln(t)) : [r, ln(t)]) : ln(t)) : r,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: o,
    target: e.target,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    patchFlag: t && e.type !== me ? (i === -1 ? 16 : i | 16) : i,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: e.transition,
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && Ze(e.ssContent),
    ssFallback: e.ssFallback && Ze(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  }
}
function Di(e = ' ', t = 0) {
  return ae(xt, null, e, t)
}
function Ga(e, t) {
  const n = ae(Nt, null, e)
  return (n.staticCount = t), n
}
function za(e = '', t = !1) {
  return t ? (Fi(), Hi(be, null, e)) : ae(be, null, e)
}
function Ae(e) {
  return e == null || typeof e == 'boolean'
    ? ae(be)
    : B(e)
      ? ae(me, null, e.slice())
      : typeof e == 'object'
        ? Ge(e)
        : ae(xt, null, String(e))
}
function Ge(e) {
  return (e.el === null && e.patchFlag !== -1) || e.memo ? e : Ze(e)
}
function Fs(e, t) {
  let n = 0
  const { shapeFlag: s } = e
  if (t == null) t = null
  else if (B(t)) n = 16
  else if (typeof t == 'object')
    if (s & 65) {
      const r = t.default
      r && (r._c && (r._d = !1), Fs(e, r()), r._c && (r._d = !0))
      return
    } else {
      n = 32
      const r = t._
      !r && !(Nn in t)
        ? (t._ctx = de)
        : r === 3 &&
          de &&
          (de.slots._ === 1 ? (t._ = 1) : ((t._ = 2), (e.patchFlag |= 1024)))
    }
  else
    K(t)
      ? ((t = { default: t, _ctx: de }), (n = 32))
      : ((t = String(t)), s & 64 ? ((n = 16), (t = [Di(t)])) : (n = 8))
  ;(e.children = t), (e.shapeFlag |= n)
}
function Zl(...e) {
  const t = {}
  for (let n = 0; n < e.length; n++) {
    const s = e[n]
    for (const r in s)
      if (r === 'class')
        t.class !== s.class && (t.class = ws([t.class, s.class]))
      else if (r === 'style') t.style = bs([t.style, s.style])
      else if (Bt(r)) {
        const i = t[r],
          o = s[r]
        o &&
          i !== o &&
          !(B(i) && i.includes(o)) &&
          (t[r] = i ? [].concat(i, o) : o)
      } else r !== '' && (t[r] = s[r])
  }
  return t
}
function Ee(e, t, n, s = null) {
  Se(e, t, 7, [n, s])
}
const ec = Ti()
let tc = 0
function nc(e, t, n) {
  const s = e.type,
    r = (t ? t.appContext : e.appContext) || ec,
    i = {
      uid: tc++,
      vnode: e,
      type: s,
      parent: t,
      appContext: r,
      root: null,
      next: null,
      subTree: null,
      effect: null,
      update: null,
      scope: new wo(!0),
      render: null,
      proxy: null,
      exposed: null,
      exposeProxy: null,
      withProxy: null,
      provides: t ? t.provides : Object.create(r.provides),
      accessCache: null,
      renderCache: [],
      components: null,
      directives: null,
      propsOptions: Ri(s, r),
      emitsOptions: di(s, r),
      emit: null,
      emitted: null,
      propsDefaults: te,
      inheritAttrs: s.inheritAttrs,
      ctx: te,
      data: te,
      props: te,
      attrs: te,
      slots: te,
      refs: te,
      setupState: te,
      setupContext: null,
      attrsProxy: null,
      slotsProxy: null,
      suspense: n,
      suspenseId: n ? n.pendingId : 0,
      asyncDep: null,
      asyncResolved: !1,
      isMounted: !1,
      isUnmounted: !1,
      isDeactivated: !1,
      bc: null,
      c: null,
      bm: null,
      m: null,
      bu: null,
      u: null,
      um: null,
      bum: null,
      da: null,
      a: null,
      rtg: null,
      rtc: null,
      ec: null,
      sp: null
    }
  return (
    (i.ctx = { _: i }),
    (i.root = t ? t.root : i),
    (i.emit = il.bind(null, i)),
    e.ce && e.ce(i),
    i
  )
}
let ce = null
const Fn = () => ce || de
let yn, hs
{
  const e = Br(),
    t = (n, s) => {
      let r
      return (
        (r = e[n]) || (r = e[n] = []),
        r.push(s),
        (i) => {
          r.length > 1 ? r.forEach((o) => o(i)) : r[0](i)
        }
      )
    }
  ;(yn = t('__VUE_INSTANCE_SETTERS__', (n) => (ce = n))),
    (hs = t('__VUE_SSR_SETTERS__', (n) => ($n = n)))
}
const kt = (e) => {
    const t = ce
    return (
      yn(e),
      e.scope.on(),
      () => {
        e.scope.off(), yn(t)
      }
    )
  },
  dr = () => {
    ce && ce.scope.off(), yn(null)
  }
function Ui(e) {
  return e.vnode.shapeFlag & 4
}
let $n = !1
function sc(e, t = !1) {
  t && hs(t)
  const { props: n, children: s } = e.vnode,
    r = Ui(e)
  jl(e, n, r, t), Ul(e, s)
  const i = r ? rc(e, t) : void 0
  return t && hs(!1), i
}
function rc(e, t) {
  const n = e.type
  ;(e.accessCache = Object.create(null)), (e.proxy = It(new Proxy(e.ctx, Rl)))
  const { setup: s } = n
  if (s) {
    const r = (e.setupContext = s.length > 1 ? ki(e) : null),
      i = kt(e)
    ut()
    const o = Ye(s, e, 0, [e.props, r])
    if ((ft(), i(), Vr(o))) {
      if ((o.then(dr, dr), t))
        return o
          .then((l) => {
            hr(e, l, t)
          })
          .catch((l) => {
            Tn(l, e, 0)
          })
      e.asyncDep = o
    } else hr(e, o, t)
  } else Bi(e, t)
}
function hr(e, t, n) {
  K(t)
    ? e.type.__ssrInlineRender
      ? (e.ssrRender = t)
      : (e.render = t)
    : Z(t) && (e.setupState = ci(t)),
    Bi(e, n)
}
let pr
function Bi(e, t, n) {
  const s = e.type
  if (!e.render) {
    if (!t && pr && !s.render) {
      const r = s.template || Ms(e).template
      if (r) {
        const { isCustomElement: i, compilerOptions: o } = e.appContext.config,
          { delimiters: l, compilerOptions: c } = s,
          u = ie(ie({ isCustomElement: i, delimiters: l }, o), c)
        s.render = pr(r, u)
      }
    }
    e.render = s.render || xe
  }
  {
    const r = kt(e)
    ut()
    try {
      Il(e)
    } finally {
      ft(), r()
    }
  }
}
function ic(e) {
  return (
    e.attrsProxy ||
    (e.attrsProxy = new Proxy(e.attrs, {
      get(t, n) {
        return _e(e, 'get', '$attrs'), t[n]
      }
    }))
  )
}
function ki(e) {
  const t = (n) => {
    e.exposed = n || {}
  }
  return {
    get attrs() {
      return ic(e)
    },
    slots: e.slots,
    emit: e.emit,
    expose: t
  }
}
function $s(e) {
  if (e.exposed)
    return (
      e.exposeProxy ||
      (e.exposeProxy = new Proxy(ci(It(e.exposed)), {
        get(t, n) {
          if (n in t) return t[n]
          if (n in Pt) return Pt[n](e)
        },
        has(t, n) {
          return n in t || n in Pt
        }
      }))
    )
}
function oc(e, t = !0) {
  return K(e) ? e.displayName || e.name : e.name || (t && e.__name)
}
function lc(e) {
  return K(e) && '__vccOpts' in e
}
const se = (e, t) => Wo(e, t, $n)
function ps(e, t, n) {
  const s = arguments.length
  return s === 2
    ? Z(t) && !B(t)
      ? _n(t)
        ? ae(e, null, [t])
        : ae(e, t)
      : ae(e, null, t)
    : (s > 3
        ? (n = Array.prototype.slice.call(arguments, 2))
        : s === 3 && _n(n) && (n = [n]),
      ae(e, t, n))
}
const cc = '3.4.21'
/**
 * @vue/runtime-dom v3.4.21
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ const ac = 'http://www.w3.org/2000/svg',
  uc = 'http://www.w3.org/1998/Math/MathML',
  ze = typeof document < 'u' ? document : null,
  gr = ze && ze.createElement('template'),
  fc = {
    insert: (e, t, n) => {
      t.insertBefore(e, n || null)
    },
    remove: (e) => {
      const t = e.parentNode
      t && t.removeChild(e)
    },
    createElement: (e, t, n, s) => {
      const r =
        t === 'svg'
          ? ze.createElementNS(ac, e)
          : t === 'mathml'
            ? ze.createElementNS(uc, e)
            : ze.createElement(e, n ? { is: n } : void 0)
      return (
        e === 'select' &&
          s &&
          s.multiple != null &&
          r.setAttribute('multiple', s.multiple),
        r
      )
    },
    createText: (e) => ze.createTextNode(e),
    createComment: (e) => ze.createComment(e),
    setText: (e, t) => {
      e.nodeValue = t
    },
    setElementText: (e, t) => {
      e.textContent = t
    },
    parentNode: (e) => e.parentNode,
    nextSibling: (e) => e.nextSibling,
    querySelector: (e) => ze.querySelector(e),
    setScopeId(e, t) {
      e.setAttribute(t, '')
    },
    insertStaticContent(e, t, n, s, r, i) {
      const o = n ? n.previousSibling : t.lastChild
      if (r && (r === i || r.nextSibling))
        for (
          ;
          t.insertBefore(r.cloneNode(!0), n),
            !(r === i || !(r = r.nextSibling));

        );
      else {
        gr.innerHTML =
          s === 'svg'
            ? `<svg>${e}</svg>`
            : s === 'mathml'
              ? `<math>${e}</math>`
              : e
        const l = gr.content
        if (s === 'svg' || s === 'mathml') {
          const c = l.firstChild
          for (; c.firstChild; ) l.appendChild(c.firstChild)
          l.removeChild(c)
        }
        t.insertBefore(l, n)
      }
      return [
        o ? o.nextSibling : t.firstChild,
        n ? n.previousSibling : t.lastChild
      ]
    }
  },
  ke = 'transition',
  Rt = 'animation',
  Ut = Symbol('_vtc'),
  Ki = (e, { slots: t }) => ps(_l, dc(e), t)
Ki.displayName = 'Transition'
const Wi = {
  name: String,
  type: String,
  css: { type: Boolean, default: !0 },
  duration: [String, Number, Object],
  enterFromClass: String,
  enterActiveClass: String,
  enterToClass: String,
  appearFromClass: String,
  appearActiveClass: String,
  appearToClass: String,
  leaveFromClass: String,
  leaveActiveClass: String,
  leaveToClass: String
}
Ki.props = ie({}, yi, Wi)
const nt = (e, t = []) => {
    B(e) ? e.forEach((n) => n(...t)) : e && e(...t)
  },
  mr = (e) => (e ? (B(e) ? e.some((t) => t.length > 1) : e.length > 1) : !1)
function dc(e) {
  const t = {}
  for (const S in e) S in Wi || (t[S] = e[S])
  if (e.css === !1) return t
  const {
      name: n = 'v',
      type: s,
      duration: r,
      enterFromClass: i = `${n}-enter-from`,
      enterActiveClass: o = `${n}-enter-active`,
      enterToClass: l = `${n}-enter-to`,
      appearFromClass: c = i,
      appearActiveClass: u = o,
      appearToClass: d = l,
      leaveFromClass: h = `${n}-leave-from`,
      leaveActiveClass: m = `${n}-leave-active`,
      leaveToClass: w = `${n}-leave-to`
    } = e,
    O = hc(r),
    M = O && O[0],
    V = O && O[1],
    {
      onBeforeEnter: q,
      onEnter: J,
      onEnterCancelled: g,
      onLeave: _,
      onLeaveCancelled: P,
      onBeforeAppear: I = q,
      onAppear: D = J,
      onAppearCancelled: R = g
    } = t,
    j = (S, W, re) => {
      st(S, W ? d : l), st(S, W ? u : o), re && re()
    },
    E = (S, W) => {
      ;(S._isLeaving = !1), st(S, h), st(S, w), st(S, m), W && W()
    },
    U = (S) => (W, re) => {
      const le = S ? D : J,
        $ = () => j(W, S, re)
      nt(le, [W, $]),
        _r(() => {
          st(W, S ? c : i), Ke(W, S ? d : l), mr(le) || yr(W, s, M, $)
        })
    }
  return ie(t, {
    onBeforeEnter(S) {
      nt(q, [S]), Ke(S, i), Ke(S, o)
    },
    onBeforeAppear(S) {
      nt(I, [S]), Ke(S, c), Ke(S, u)
    },
    onEnter: U(!1),
    onAppear: U(!0),
    onLeave(S, W) {
      S._isLeaving = !0
      const re = () => E(S, W)
      Ke(S, h),
        mc(),
        Ke(S, m),
        _r(() => {
          S._isLeaving && (st(S, h), Ke(S, w), mr(_) || yr(S, s, V, re))
        }),
        nt(_, [S, re])
    },
    onEnterCancelled(S) {
      j(S, !1), nt(g, [S])
    },
    onAppearCancelled(S) {
      j(S, !0), nt(R, [S])
    },
    onLeaveCancelled(S) {
      E(S), nt(P, [S])
    }
  })
}
function hc(e) {
  if (e == null) return null
  if (Z(e)) return [qn(e.enter), qn(e.leave)]
  {
    const t = qn(e)
    return [t, t]
  }
}
function qn(e) {
  return po(e)
}
function Ke(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)),
    (e[Ut] || (e[Ut] = new Set())).add(t)
}
function st(e, t) {
  t.split(/\s+/).forEach((s) => s && e.classList.remove(s))
  const n = e[Ut]
  n && (n.delete(t), n.size || (e[Ut] = void 0))
}
function _r(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e)
  })
}
let pc = 0
function yr(e, t, n, s) {
  const r = (e._endId = ++pc),
    i = () => {
      r === e._endId && s()
    }
  if (n) return setTimeout(i, n)
  const { type: o, timeout: l, propCount: c } = gc(e, t)
  if (!o) return s()
  const u = o + 'end'
  let d = 0
  const h = () => {
      e.removeEventListener(u, m), i()
    },
    m = (w) => {
      w.target === e && ++d >= c && h()
    }
  setTimeout(() => {
    d < c && h()
  }, l + 1),
    e.addEventListener(u, m)
}
function gc(e, t) {
  const n = window.getComputedStyle(e),
    s = (O) => (n[O] || '').split(', '),
    r = s(`${ke}Delay`),
    i = s(`${ke}Duration`),
    o = vr(r, i),
    l = s(`${Rt}Delay`),
    c = s(`${Rt}Duration`),
    u = vr(l, c)
  let d = null,
    h = 0,
    m = 0
  t === ke
    ? o > 0 && ((d = ke), (h = o), (m = i.length))
    : t === Rt
      ? u > 0 && ((d = Rt), (h = u), (m = c.length))
      : ((h = Math.max(o, u)),
        (d = h > 0 ? (o > u ? ke : Rt) : null),
        (m = d ? (d === ke ? i.length : c.length) : 0))
  const w =
    d === ke && /\b(transform|all)(,|$)/.test(s(`${ke}Property`).toString())
  return { type: d, timeout: h, propCount: m, hasTransform: w }
}
function vr(e, t) {
  for (; e.length < t.length; ) e = e.concat(e)
  return Math.max(...t.map((n, s) => br(n) + br(e[s])))
}
function br(e) {
  return e === 'auto' ? 0 : Number(e.slice(0, -1).replace(',', '.')) * 1e3
}
function mc() {
  return document.body.offsetHeight
}
function _c(e, t, n) {
  const s = e[Ut]
  s && (t = (t ? [t, ...s] : [...s]).join(' ')),
    t == null
      ? e.removeAttribute('class')
      : n
        ? e.setAttribute('class', t)
        : (e.className = t)
}
const wr = Symbol('_vod'),
  yc = Symbol('_vsh'),
  vc = Symbol(''),
  bc = /(^|;)\s*display\s*:/
function wc(e, t, n) {
  const s = e.style,
    r = ne(n)
  let i = !1
  if (n && !r) {
    if (t)
      if (ne(t))
        for (const o of t.split(';')) {
          const l = o.slice(0, o.indexOf(':')).trim()
          n[l] == null && cn(s, l, '')
        }
      else for (const o in t) n[o] == null && cn(s, o, '')
    for (const o in n) o === 'display' && (i = !0), cn(s, o, n[o])
  } else if (r) {
    if (t !== n) {
      const o = s[vc]
      o && (n += ';' + o), (s.cssText = n), (i = bc.test(n))
    }
  } else t && e.removeAttribute('style')
  wr in e && ((e[wr] = i ? s.display : ''), e[yc] && (s.display = 'none'))
}
const Er = /\s*!important$/
function cn(e, t, n) {
  if (B(n)) n.forEach((s) => cn(e, t, s))
  else if ((n == null && (n = ''), t.startsWith('--'))) e.setProperty(t, n)
  else {
    const s = Ec(e, t)
    Er.test(n)
      ? e.setProperty(at(s), n.replace(Er, ''), 'important')
      : (e[s] = n)
  }
}
const Cr = ['Webkit', 'Moz', 'ms'],
  Gn = {}
function Ec(e, t) {
  const n = Gn[t]
  if (n) return n
  let s = Me(t)
  if (s !== 'filter' && s in e) return (Gn[t] = s)
  s = En(s)
  for (let r = 0; r < Cr.length; r++) {
    const i = Cr[r] + s
    if (i in e) return (Gn[t] = i)
  }
  return t
}
const xr = 'http://www.w3.org/1999/xlink'
function Cc(e, t, n, s, r) {
  if (s && t.startsWith('xlink:'))
    n == null
      ? e.removeAttributeNS(xr, t.slice(6, t.length))
      : e.setAttributeNS(xr, t, n)
  else {
    const i = bo(t)
    n == null || (i && !kr(n))
      ? e.removeAttribute(t)
      : e.setAttribute(t, i ? '' : n)
  }
}
function xc(e, t, n, s, r, i, o) {
  if (t === 'innerHTML' || t === 'textContent') {
    s && o(s, r, i), (e[t] = n ?? '')
    return
  }
  const l = e.tagName
  if (t === 'value' && l !== 'PROGRESS' && !l.includes('-')) {
    const u = l === 'OPTION' ? e.getAttribute('value') || '' : e.value,
      d = n ?? ''
    ;(u !== d || !('_value' in e)) && (e.value = d),
      n == null && e.removeAttribute(t),
      (e._value = n)
    return
  }
  let c = !1
  if (n === '' || n == null) {
    const u = typeof e[t]
    u === 'boolean'
      ? (n = kr(n))
      : n == null && u === 'string'
        ? ((n = ''), (c = !0))
        : u === 'number' && ((n = 0), (c = !0))
  }
  try {
    e[t] = n
  } catch {}
  c && e.removeAttribute(t)
}
function Sc(e, t, n, s) {
  e.addEventListener(t, n, s)
}
function Tc(e, t, n, s) {
  e.removeEventListener(t, n, s)
}
const Sr = Symbol('_vei')
function Ac(e, t, n, s, r = null) {
  const i = e[Sr] || (e[Sr] = {}),
    o = i[t]
  if (s && o) o.value = s
  else {
    const [l, c] = Rc(t)
    if (s) {
      const u = (i[t] = Lc(s, r))
      Sc(e, l, u, c)
    } else o && (Tc(e, l, o, c), (i[t] = void 0))
  }
}
const Tr = /(?:Once|Passive|Capture)$/
function Rc(e) {
  let t
  if (Tr.test(e)) {
    t = {}
    let s
    for (; (s = e.match(Tr)); )
      (e = e.slice(0, e.length - s[0].length)), (t[s[0].toLowerCase()] = !0)
  }
  return [e[2] === ':' ? e.slice(3) : at(e.slice(2)), t]
}
let zn = 0
const Oc = Promise.resolve(),
  Ic = () => zn || (Oc.then(() => (zn = 0)), (zn = Date.now()))
function Lc(e, t) {
  const n = (s) => {
    if (!s._vts) s._vts = Date.now()
    else if (s._vts <= n.attached) return
    Se(Pc(s, n.value), t, 5, [s])
  }
  return (n.value = e), (n.attached = Ic()), n
}
function Pc(e, t) {
  if (B(t)) {
    const n = e.stopImmediatePropagation
    return (
      (e.stopImmediatePropagation = () => {
        n.call(e), (e._stopped = !0)
      }),
      t.map((s) => (r) => !r._stopped && s && s(r))
    )
  } else return t
}
const Ar = (e) =>
    e.charCodeAt(0) === 111 &&
    e.charCodeAt(1) === 110 &&
    e.charCodeAt(2) > 96 &&
    e.charCodeAt(2) < 123,
  Mc = (e, t, n, s, r, i, o, l, c) => {
    const u = r === 'svg'
    t === 'class'
      ? _c(e, s, u)
      : t === 'style'
        ? wc(e, n, s)
        : Bt(t)
          ? _s(t) || Ac(e, t, n, s, o)
          : (
                t[0] === '.'
                  ? ((t = t.slice(1)), !0)
                  : t[0] === '^'
                    ? ((t = t.slice(1)), !1)
                    : Nc(e, t, s, u)
              )
            ? xc(e, t, s, i, o, l, c)
            : (t === 'true-value'
                ? (e._trueValue = s)
                : t === 'false-value' && (e._falseValue = s),
              Cc(e, t, s, u))
  }
function Nc(e, t, n, s) {
  if (s)
    return !!(
      t === 'innerHTML' ||
      t === 'textContent' ||
      (t in e && Ar(t) && K(n))
    )
  if (
    t === 'spellcheck' ||
    t === 'draggable' ||
    t === 'translate' ||
    t === 'form' ||
    (t === 'list' && e.tagName === 'INPUT') ||
    (t === 'type' && e.tagName === 'TEXTAREA')
  )
    return !1
  if (t === 'width' || t === 'height') {
    const r = e.tagName
    if (r === 'IMG' || r === 'VIDEO' || r === 'CANVAS' || r === 'SOURCE')
      return !1
  }
  return Ar(t) && ne(n) ? !1 : t in e
}
const Fc = ['ctrl', 'shift', 'alt', 'meta'],
  $c = {
    stop: (e) => e.stopPropagation(),
    prevent: (e) => e.preventDefault(),
    self: (e) => e.target !== e.currentTarget,
    ctrl: (e) => !e.ctrlKey,
    shift: (e) => !e.shiftKey,
    alt: (e) => !e.altKey,
    meta: (e) => !e.metaKey,
    left: (e) => 'button' in e && e.button !== 0,
    middle: (e) => 'button' in e && e.button !== 1,
    right: (e) => 'button' in e && e.button !== 2,
    exact: (e, t) => Fc.some((n) => e[`${n}Key`] && !t.includes(n))
  },
  Xa = (e, t) => {
    const n = e._withMods || (e._withMods = {}),
      s = t.join('.')
    return (
      n[s] ||
      (n[s] = (r, ...i) => {
        for (let o = 0; o < t.length; o++) {
          const l = $c[t[o]]
          if (l && l(r, t)) return
        }
        return e(r, ...i)
      })
    )
  },
  Hc = {
    esc: 'escape',
    space: ' ',
    up: 'arrow-up',
    left: 'arrow-left',
    right: 'arrow-right',
    down: 'arrow-down',
    delete: 'backspace'
  },
  Ya = (e, t) => {
    const n = e._withKeys || (e._withKeys = {}),
      s = t.join('.')
    return (
      n[s] ||
      (n[s] = (r) => {
        if (!('key' in r)) return
        const i = at(r.key)
        if (t.some((o) => o === i || Hc[o] === i)) return e(r)
      })
    )
  },
  jc = ie({ patchProp: Mc }, fc)
let Xn,
  Rr = !1
function Vc() {
  return (Xn = Rr ? Xn : ql(jc)), (Rr = !0), Xn
}
const Ja = (...e) => {
  const t = Vc().createApp(...e),
    { mount: n } = t
  return (
    (t.mount = (s) => {
      const r = Uc(s)
      if (r) return n(r, !0, Dc(r))
    }),
    t
  )
}
function Dc(e) {
  if (e instanceof SVGElement) return 'svg'
  if (typeof MathMLElement == 'function' && e instanceof MathMLElement)
    return 'mathml'
}
function Uc(e) {
  return ne(e) ? document.querySelector(e) : e
}
const Bc = window.__VP_SITE_DATA__
function Hs(e) {
  return Wr() ? (Co(e), !0) : !1
}
function Je(e) {
  return typeof e == 'function' ? e() : li(e)
}
const qi = typeof window < 'u' && typeof document < 'u'
typeof WorkerGlobalScope < 'u' && globalThis instanceof WorkerGlobalScope
const kc = Object.prototype.toString,
  Kc = (e) => kc.call(e) === '[object Object]',
  $t = () => {},
  gs = Wc()
function Wc() {
  var e, t
  return (
    qi &&
    ((e = window == null ? void 0 : window.navigator) == null
      ? void 0
      : e.userAgent) &&
    (/iP(ad|hone|od)/.test(window.navigator.userAgent) ||
      (((t = window == null ? void 0 : window.navigator) == null
        ? void 0
        : t.maxTouchPoints) > 2 &&
        /iPad|Macintosh/.test(
          window == null ? void 0 : window.navigator.userAgent
        )))
  )
}
function qc(e, t) {
  function n(...s) {
    return new Promise((r, i) => {
      Promise.resolve(
        e(() => t.apply(this, s), { fn: t, thisArg: this, args: s })
      )
        .then(r)
        .catch(i)
    })
  }
  return n
}
const Gi = (e) => e()
function Gc(e = Gi) {
  const t = fe(!0)
  function n() {
    t.value = !1
  }
  function s() {
    t.value = !0
  }
  const r = (...i) => {
    t.value && e(...i)
  }
  return { isActive: Sn(t), pause: n, resume: s, eventFilter: r }
}
function zc(e) {
  return e || Fn()
}
function zi(...e) {
  if (e.length !== 1) return Qo(...e)
  const t = e[0]
  return typeof t == 'function' ? Sn(Xo(() => ({ get: t, set: $t }))) : fe(t)
}
function Xc(e, t, n = {}) {
  const { eventFilter: s = Gi, ...r } = n
  return je(e, qc(s, t), r)
}
function Yc(e, t, n = {}) {
  const { eventFilter: s, ...r } = n,
    { eventFilter: i, pause: o, resume: l, isActive: c } = Gc(s)
  return {
    stop: Xc(e, t, { ...r, eventFilter: i }),
    pause: o,
    resume: l,
    isActive: c
  }
}
function js(e, t = !0, n) {
  zc() ? Tt(e, n) : t ? e() : An(e)
}
function gt(e) {
  var t
  const n = Je(e)
  return (t = n == null ? void 0 : n.$el) != null ? t : n
}
const Ne = qi ? window : void 0
function Ve(...e) {
  let t, n, s, r
  if (
    (typeof e[0] == 'string' || Array.isArray(e[0])
      ? (([n, s, r] = e), (t = Ne))
      : ([t, n, s, r] = e),
    !t)
  )
    return $t
  Array.isArray(n) || (n = [n]), Array.isArray(s) || (s = [s])
  const i = [],
    o = () => {
      i.forEach((d) => d()), (i.length = 0)
    },
    l = (d, h, m, w) => (
      d.addEventListener(h, m, w), () => d.removeEventListener(h, m, w)
    ),
    c = je(
      () => [gt(t), Je(r)],
      ([d, h]) => {
        if ((o(), !d)) return
        const m = Kc(h) ? { ...h } : h
        i.push(...n.flatMap((w) => s.map((O) => l(d, w, O, m))))
      },
      { immediate: !0, flush: 'post' }
    ),
    u = () => {
      c(), o()
    }
  return Hs(u), u
}
let Or = !1
function Qa(e, t, n = {}) {
  const {
    window: s = Ne,
    ignore: r = [],
    capture: i = !0,
    detectIframe: o = !1
  } = n
  if (!s) return $t
  gs &&
    !Or &&
    ((Or = !0),
    Array.from(s.document.body.children).forEach((m) =>
      m.addEventListener('click', $t)
    ),
    s.document.documentElement.addEventListener('click', $t))
  let l = !0
  const c = (m) =>
      r.some((w) => {
        if (typeof w == 'string')
          return Array.from(s.document.querySelectorAll(w)).some(
            (O) => O === m.target || m.composedPath().includes(O)
          )
        {
          const O = gt(w)
          return O && (m.target === O || m.composedPath().includes(O))
        }
      }),
    d = [
      Ve(
        s,
        'click',
        (m) => {
          const w = gt(e)
          if (!(!w || w === m.target || m.composedPath().includes(w))) {
            if ((m.detail === 0 && (l = !c(m)), !l)) {
              l = !0
              return
            }
            t(m)
          }
        },
        { passive: !0, capture: i }
      ),
      Ve(
        s,
        'pointerdown',
        (m) => {
          const w = gt(e)
          l = !c(m) && !!(w && !m.composedPath().includes(w))
        },
        { passive: !0 }
      ),
      o &&
        Ve(s, 'blur', (m) => {
          setTimeout(() => {
            var w
            const O = gt(e)
            ;((w = s.document.activeElement) == null ? void 0 : w.tagName) ===
              'IFRAME' &&
              !(O != null && O.contains(s.document.activeElement)) &&
              t(m)
          }, 0)
        })
    ].filter(Boolean)
  return () => d.forEach((m) => m())
}
function Jc(e) {
  return typeof e == 'function'
    ? e
    : typeof e == 'string'
      ? (t) => t.key === e
      : Array.isArray(e)
        ? (t) => e.includes(t.key)
        : () => !0
}
function Za(...e) {
  let t,
    n,
    s = {}
  e.length === 3
    ? ((t = e[0]), (n = e[1]), (s = e[2]))
    : e.length === 2
      ? typeof e[1] == 'object'
        ? ((t = !0), (n = e[0]), (s = e[1]))
        : ((t = e[0]), (n = e[1]))
      : ((t = !0), (n = e[0]))
  const {
      target: r = Ne,
      eventName: i = 'keydown',
      passive: o = !1,
      dedupe: l = !1
    } = s,
    c = Jc(t)
  return Ve(
    r,
    i,
    (d) => {
      ;(d.repeat && Je(l)) || (c(d) && n(d))
    },
    o
  )
}
function Qc() {
  const e = fe(!1),
    t = Fn()
  return (
    t &&
      Tt(() => {
        e.value = !0
      }, t),
    e
  )
}
function Zc(e) {
  const t = Qc()
  return se(() => (t.value, !!e()))
}
function Xi(e, t = {}) {
  const { window: n = Ne } = t,
    s = Zc(() => n && 'matchMedia' in n && typeof n.matchMedia == 'function')
  let r
  const i = fe(!1),
    o = (u) => {
      i.value = u.matches
    },
    l = () => {
      r &&
        ('removeEventListener' in r
          ? r.removeEventListener('change', o)
          : r.removeListener(o))
    },
    c = mi(() => {
      s.value &&
        (l(),
        (r = n.matchMedia(Je(e))),
        'addEventListener' in r
          ? r.addEventListener('change', o)
          : r.addListener(o),
        (i.value = r.matches))
    })
  return (
    Hs(() => {
      c(), l(), (r = void 0)
    }),
    i
  )
}
const tn =
    typeof globalThis < 'u'
      ? globalThis
      : typeof window < 'u'
        ? window
        : typeof global < 'u'
          ? global
          : typeof self < 'u'
            ? self
            : {},
  nn = '__vueuse_ssr_handlers__',
  ea = ta()
function ta() {
  return nn in tn || (tn[nn] = tn[nn] || {}), tn[nn]
}
function Yi(e, t) {
  return ea[e] || t
}
function na(e) {
  return e == null
    ? 'any'
    : e instanceof Set
      ? 'set'
      : e instanceof Map
        ? 'map'
        : e instanceof Date
          ? 'date'
          : typeof e == 'boolean'
            ? 'boolean'
            : typeof e == 'string'
              ? 'string'
              : typeof e == 'object'
                ? 'object'
                : Number.isNaN(e)
                  ? 'any'
                  : 'number'
}
const sa = {
    boolean: { read: (e) => e === 'true', write: (e) => String(e) },
    object: { read: (e) => JSON.parse(e), write: (e) => JSON.stringify(e) },
    number: { read: (e) => Number.parseFloat(e), write: (e) => String(e) },
    any: { read: (e) => e, write: (e) => String(e) },
    string: { read: (e) => e, write: (e) => String(e) },
    map: {
      read: (e) => new Map(JSON.parse(e)),
      write: (e) => JSON.stringify(Array.from(e.entries()))
    },
    set: {
      read: (e) => new Set(JSON.parse(e)),
      write: (e) => JSON.stringify(Array.from(e))
    },
    date: { read: (e) => new Date(e), write: (e) => e.toISOString() }
  },
  Ir = 'vueuse-storage'
function ra(e, t, n, s = {}) {
  var r
  const {
      flush: i = 'pre',
      deep: o = !0,
      listenToStorageChanges: l = !0,
      writeDefaults: c = !0,
      mergeDefaults: u = !1,
      shallow: d,
      window: h = Ne,
      eventFilter: m,
      onError: w = (E) => {
        console.error(E)
      },
      initOnMounted: O
    } = s,
    M = (d ? ii : fe)(typeof t == 'function' ? t() : t)
  if (!n)
    try {
      n = Yi('getDefaultStorage', () => {
        var E
        return (E = Ne) == null ? void 0 : E.localStorage
      })()
    } catch (E) {
      w(E)
    }
  if (!n) return M
  const V = Je(t),
    q = na(V),
    J = (r = s.serializer) != null ? r : sa[q],
    { pause: g, resume: _ } = Yc(M, () => I(M.value), {
      flush: i,
      deep: o,
      eventFilter: m
    })
  h &&
    l &&
    js(() => {
      Ve(h, 'storage', R), Ve(h, Ir, j), O && R()
    }),
    O || R()
  function P(E, U) {
    h &&
      h.dispatchEvent(
        new CustomEvent(Ir, {
          detail: { key: e, oldValue: E, newValue: U, storageArea: n }
        })
      )
  }
  function I(E) {
    try {
      const U = n.getItem(e)
      if (E == null) P(U, null), n.removeItem(e)
      else {
        const S = J.write(E)
        U !== S && (n.setItem(e, S), P(U, S))
      }
    } catch (U) {
      w(U)
    }
  }
  function D(E) {
    const U = E ? E.newValue : n.getItem(e)
    if (U == null) return c && V != null && n.setItem(e, J.write(V)), V
    if (!E && u) {
      const S = J.read(U)
      return typeof u == 'function'
        ? u(S, V)
        : q === 'object' && !Array.isArray(S)
          ? { ...V, ...S }
          : S
    } else return typeof U != 'string' ? U : J.read(U)
  }
  function R(E) {
    if (!(E && E.storageArea !== n)) {
      if (E && E.key == null) {
        M.value = V
        return
      }
      if (!(E && E.key !== e)) {
        g()
        try {
          ;(E == null ? void 0 : E.newValue) !== J.write(M.value) &&
            (M.value = D(E))
        } catch (U) {
          w(U)
        } finally {
          E ? An(_) : _()
        }
      }
    }
  }
  function j(E) {
    R(E.detail)
  }
  return M
}
function Ji(e) {
  return Xi('(prefers-color-scheme: dark)', e)
}
function ia(e = {}) {
  const {
      selector: t = 'html',
      attribute: n = 'class',
      initialValue: s = 'auto',
      window: r = Ne,
      storage: i,
      storageKey: o = 'vueuse-color-scheme',
      listenToStorageChanges: l = !0,
      storageRef: c,
      emitAuto: u,
      disableTransition: d = !0
    } = e,
    h = { auto: '', light: 'light', dark: 'dark', ...(e.modes || {}) },
    m = Ji({ window: r }),
    w = se(() => (m.value ? 'dark' : 'light')),
    O =
      c ||
      (o == null
        ? zi(s)
        : ra(o, s, i, { window: r, listenToStorageChanges: l })),
    M = se(() => (O.value === 'auto' ? w.value : O.value)),
    V = Yi('updateHTMLAttrs', (_, P, I) => {
      const D =
        typeof _ == 'string'
          ? r == null
            ? void 0
            : r.document.querySelector(_)
          : gt(_)
      if (!D) return
      let R
      if (
        (d &&
          ((R = r.document.createElement('style')),
          R.appendChild(
            document.createTextNode(
              '*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}'
            )
          ),
          r.document.head.appendChild(R)),
        P === 'class')
      ) {
        const j = I.split(/\s/g)
        Object.values(h)
          .flatMap((E) => (E || '').split(/\s/g))
          .filter(Boolean)
          .forEach((E) => {
            j.includes(E) ? D.classList.add(E) : D.classList.remove(E)
          })
      } else D.setAttribute(P, I)
      d && (r.getComputedStyle(R).opacity, document.head.removeChild(R))
    })
  function q(_) {
    var P
    V(t, n, (P = h[_]) != null ? P : _)
  }
  function J(_) {
    e.onChanged ? e.onChanged(_, q) : q(_)
  }
  je(M, J, { flush: 'post', immediate: !0 }), js(() => J(M.value))
  const g = se({
    get() {
      return u ? O.value : M.value
    },
    set(_) {
      O.value = _
    }
  })
  try {
    return Object.assign(g, { store: O, system: w, state: M })
  } catch {
    return g
  }
}
function oa(e = {}) {
  const { valueDark: t = 'dark', valueLight: n = '', window: s = Ne } = e,
    r = ia({
      ...e,
      onChanged: (l, c) => {
        var u
        e.onChanged
          ? (u = e.onChanged) == null || u.call(e, l === 'dark', c, l)
          : c(l)
      },
      modes: { dark: t, light: n }
    }),
    i = se(() =>
      r.system ? r.system.value : Ji({ window: s }).value ? 'dark' : 'light'
    )
  return se({
    get() {
      return r.value === 'dark'
    },
    set(l) {
      const c = l ? 'dark' : 'light'
      i.value === c ? (r.value = 'auto') : (r.value = c)
    }
  })
}
function Yn(e) {
  return typeof Window < 'u' && e instanceof Window
    ? e.document.documentElement
    : typeof Document < 'u' && e instanceof Document
      ? e.documentElement
      : e
}
function Qi(e) {
  const t = window.getComputedStyle(e)
  if (
    t.overflowX === 'scroll' ||
    t.overflowY === 'scroll' ||
    (t.overflowX === 'auto' && e.clientWidth < e.scrollWidth) ||
    (t.overflowY === 'auto' && e.clientHeight < e.scrollHeight)
  )
    return !0
  {
    const n = e.parentNode
    return !n || n.tagName === 'BODY' ? !1 : Qi(n)
  }
}
function la(e) {
  const t = e || window.event,
    n = t.target
  return Qi(n)
    ? !1
    : t.touches.length > 1
      ? !0
      : (t.preventDefault && t.preventDefault(), !1)
}
const sn = new WeakMap()
function eu(e, t = !1) {
  const n = fe(t)
  let s = null
  je(
    zi(e),
    (o) => {
      const l = Yn(Je(o))
      if (l) {
        const c = l
        sn.get(c) || sn.set(c, c.style.overflow),
          n.value && (c.style.overflow = 'hidden')
      }
    },
    { immediate: !0 }
  )
  const r = () => {
      const o = Yn(Je(e))
      !o ||
        n.value ||
        (gs &&
          (s = Ve(
            o,
            'touchmove',
            (l) => {
              la(l)
            },
            { passive: !1 }
          )),
        (o.style.overflow = 'hidden'),
        (n.value = !0))
    },
    i = () => {
      var o
      const l = Yn(Je(e))
      !l ||
        !n.value ||
        (gs && (s == null || s()),
        (l.style.overflow = (o = sn.get(l)) != null ? o : ''),
        sn.delete(l),
        (n.value = !1))
    }
  return (
    Hs(i),
    se({
      get() {
        return n.value
      },
      set(o) {
        o ? r() : i()
      }
    })
  )
}
function tu(e = {}) {
  const { window: t = Ne, behavior: n = 'auto' } = e
  if (!t) return { x: fe(0), y: fe(0) }
  const s = fe(t.scrollX),
    r = fe(t.scrollY),
    i = se({
      get() {
        return s.value
      },
      set(l) {
        scrollTo({ left: l, behavior: n })
      }
    }),
    o = se({
      get() {
        return r.value
      },
      set(l) {
        scrollTo({ top: l, behavior: n })
      }
    })
  return (
    Ve(
      t,
      'scroll',
      () => {
        ;(s.value = t.scrollX), (r.value = t.scrollY)
      },
      { capture: !1, passive: !0 }
    ),
    { x: i, y: o }
  )
}
function nu(e = {}) {
  const {
      window: t = Ne,
      initialWidth: n = Number.POSITIVE_INFINITY,
      initialHeight: s = Number.POSITIVE_INFINITY,
      listenOrientation: r = !0,
      includeScrollbar: i = !0
    } = e,
    o = fe(n),
    l = fe(s),
    c = () => {
      t &&
        (i
          ? ((o.value = t.innerWidth), (l.value = t.innerHeight))
          : ((o.value = t.document.documentElement.clientWidth),
            (l.value = t.document.documentElement.clientHeight)))
    }
  if ((c(), js(c), Ve('resize', c, { passive: !0 }), r)) {
    const u = Xi('(orientation: portrait)')
    je(u, () => c())
  }
  return { width: o, height: l }
}
var Jn = { BASE_URL: '/', MODE: 'production', DEV: !1, PROD: !0, SSR: !1 },
  Qn = {}
const Zi = /^(?:[a-z]+:|\/\/)/i,
  ca = 'vitepress-theme-appearance',
  aa = /#.*$/,
  ua = /[?#].*$/,
  fa = /(?:(^|\/)index)?\.(?:md|html)$/,
  Ce = typeof document < 'u',
  eo = {
    relativePath: '',
    filePath: '',
    title: '404',
    description: 'Not Found',
    headers: [],
    frontmatter: { sidebar: !1, layout: 'page' },
    lastUpdated: 0,
    isNotFound: !0
  }
function da(e, t, n = !1) {
  if (t === void 0) return !1
  if (((e = Lr(`/${e}`)), n)) return new RegExp(t).test(e)
  if (Lr(t) !== e) return !1
  const s = t.match(aa)
  return s ? (Ce ? location.hash : '') === s[0] : !0
}
function Lr(e) {
  return decodeURI(e).replace(ua, '').replace(fa, '$1')
}
function ha(e) {
  return Zi.test(e)
}
function pa(e, t) {
  var s, r, i, o, l, c, u
  const n =
    Object.keys(e.locales).find(
      (d) => d !== 'root' && !ha(d) && da(t, `/${d}/`, !0)
    ) || 'root'
  return Object.assign({}, e, {
    localeIndex: n,
    lang: ((s = e.locales[n]) == null ? void 0 : s.lang) ?? e.lang,
    dir: ((r = e.locales[n]) == null ? void 0 : r.dir) ?? e.dir,
    title: ((i = e.locales[n]) == null ? void 0 : i.title) ?? e.title,
    titleTemplate:
      ((o = e.locales[n]) == null ? void 0 : o.titleTemplate) ??
      e.titleTemplate,
    description:
      ((l = e.locales[n]) == null ? void 0 : l.description) ?? e.description,
    head: no(e.head, ((c = e.locales[n]) == null ? void 0 : c.head) ?? []),
    themeConfig: {
      ...e.themeConfig,
      ...((u = e.locales[n]) == null ? void 0 : u.themeConfig)
    }
  })
}
function to(e, t) {
  const n = t.title || e.title,
    s = t.titleTemplate ?? e.titleTemplate
  if (typeof s == 'string' && s.includes(':title'))
    return s.replace(/:title/g, n)
  const r = ga(e.title, s)
  return n === r.slice(3) ? n : `${n}${r}`
}
function ga(e, t) {
  return t === !1
    ? ''
    : t === !0 || t === void 0
      ? ` | ${e}`
      : e === t
        ? ''
        : ` | ${t}`
}
function ma(e, t) {
  const [n, s] = t
  if (n !== 'meta') return !1
  const r = Object.entries(s)[0]
  return r == null ? !1 : e.some(([i, o]) => i === n && o[r[0]] === r[1])
}
function no(e, t) {
  return [...e.filter((n) => !ma(t, n)), ...t]
}
const _a = /[\u0000-\u001F"#$&*+,:;<=>?[\]^`{|}\u007F]/g,
  ya = /^[a-z]:/i
function Pr(e) {
  const t = ya.exec(e),
    n = t ? t[0] : ''
  return (
    n +
    e
      .slice(n.length)
      .replace(_a, '_')
      .replace(/(^|\/)_+(?=[^/]*$)/, '$1')
  )
}
const Zn = new Set()
function va(e) {
  if (Zn.size === 0) {
    const n =
      (typeof process == 'object' &&
        (Qn == null ? void 0 : Qn.VITE_EXTRA_EXTENSIONS)) ||
      (Jn == null ? void 0 : Jn.VITE_EXTRA_EXTENSIONS) ||
      ''
    ;(
      '3g2,3gp,aac,ai,apng,au,avif,bin,bmp,cer,class,conf,crl,css,csv,dll,doc,eps,epub,exe,gif,gz,ics,ief,jar,jpe,jpeg,jpg,js,json,jsonld,m4a,man,mid,midi,mjs,mov,mp2,mp3,mp4,mpe,mpeg,mpg,mpp,oga,ogg,ogv,ogx,opus,otf,p10,p7c,p7m,p7s,pdf,png,ps,qt,roff,rtf,rtx,ser,svg,t,tif,tiff,tr,ts,tsv,ttf,txt,vtt,wav,weba,webm,webp,woff,woff2,xhtml,xml,yaml,yml,zip' +
      (n && typeof n == 'string' ? ',' + n : '')
    )
      .split(',')
      .forEach((s) => Zn.add(s))
  }
  const t = e.split('.').pop()
  return t == null || !Zn.has(t.toLowerCase())
}
const ba = Symbol(),
  ct = ii(Bc)
function su(e) {
  const t = se(() => pa(ct.value, e.data.relativePath)),
    n = t.value.appearance,
    s =
      n === 'force-dark'
        ? fe(!0)
        : n
          ? oa({
              storageKey: ca,
              initialValue: () => (typeof n == 'string' ? n : 'auto'),
              ...(typeof n == 'object' ? n : {})
            })
          : fe(!1)
  return {
    site: t,
    theme: se(() => t.value.themeConfig),
    page: se(() => e.data),
    frontmatter: se(() => e.data.frontmatter),
    params: se(() => e.data.params),
    lang: se(() => t.value.lang),
    dir: se(() => e.data.frontmatter.dir || t.value.dir),
    localeIndex: se(() => t.value.localeIndex || 'root'),
    title: se(() => to(t.value, e.data)),
    description: se(() => e.data.description || t.value.description),
    isDark: s
  }
}
function wa() {
  const e = Et(ba)
  if (!e) throw new Error('vitepress data not properly injected in app')
  return e
}
function Ea(e, t) {
  return `${e}${t}`.replace(/\/+/g, '/')
}
function Mr(e) {
  return Zi.test(e) || !e.startsWith('/') ? e : Ea(ct.value.base, e)
}
function Ca(e) {
  let t = e.replace(/\.html$/, '')
  if (((t = decodeURIComponent(t)), (t = t.replace(/\/$/, '/index')), Ce)) {
    const n = '/'
    t = Pr(t.slice(n.length).replace(/\//g, '_') || 'index') + '.md'
    let s = __VP_HASH_MAP__[t.toLowerCase()]
    if (
      (s ||
        ((t = t.endsWith('_index.md')
          ? t.slice(0, -9) + '.md'
          : t.slice(0, -3) + '_index.md'),
        (s = __VP_HASH_MAP__[t.toLowerCase()])),
      !s)
    )
      return null
    t = `${n}assets/${t}.${s}.js`
  } else t = `./${Pr(t.slice(1).replace(/\//g, '_'))}.md.js`
  return t
}
let an = []
function ru(e) {
  an.push(e),
    Mn(() => {
      an = an.filter((t) => t !== e)
    })
}
function xa() {
  let e = ct.value.scrollOffset,
    t = 0,
    n = 24
  if (
    (typeof e == 'object' &&
      'padding' in e &&
      ((n = e.padding), (e = e.selector)),
    typeof e == 'number')
  )
    t = e
  else if (typeof e == 'string') t = Nr(e, n)
  else if (Array.isArray(e))
    for (const s of e) {
      const r = Nr(s, n)
      if (r) {
        t = r
        break
      }
    }
  return t
}
function Nr(e, t) {
  const n = document.querySelector(e)
  if (!n) return 0
  const s = n.getBoundingClientRect().bottom
  return s < 0 ? 0 : s + t
}
const Sa = Symbol(),
  Vs = 'http://a.com',
  Ta = () => ({ path: '/', component: null, data: eo })
function iu(e, t) {
  const n = xn(Ta()),
    s = { route: n, go: r }
  async function r(l = Ce ? location.href : '/') {
    var c, u
    ;(l = vn(l)),
      (await ((c = s.onBeforeRouteChange) == null ? void 0 : c.call(s, l))) !==
        !1 &&
        ($r(l),
        await o(l),
        await ((u = s.onAfterRouteChanged) == null ? void 0 : u.call(s, l)))
  }
  let i = null
  async function o(l, c = 0, u = !1) {
    var m
    if (
      (await ((m = s.onBeforePageLoad) == null ? void 0 : m.call(s, l))) === !1
    )
      return
    const d = new URL(l, Vs),
      h = (i = d.pathname)
    try {
      let w = await e(h)
      if (!w) throw new Error(`Page not found: ${h}`)
      if (i === h) {
        i = null
        const { default: O, __pageData: M } = w
        if (!O) throw new Error(`Invalid route component: ${O}`)
        ;(n.path = Ce ? h : Mr(h)),
          (n.component = It(O)),
          (n.data = It(M)),
          Ce &&
            An(() => {
              let V =
                ct.value.base +
                M.relativePath.replace(/(?:(^|\/)index)?\.md$/, '$1')
              if (
                (!ct.value.cleanUrls && !V.endsWith('/') && (V += '.html'),
                V !== d.pathname &&
                  ((d.pathname = V),
                  (l = V + d.search + d.hash),
                  history.replaceState(null, '', l)),
                d.hash && !c)
              ) {
                let q = null
                try {
                  q = document.getElementById(
                    decodeURIComponent(d.hash).slice(1)
                  )
                } catch (J) {
                  console.warn(J)
                }
                if (q) {
                  Fr(q, d.hash)
                  return
                }
              }
              window.scrollTo(0, c)
            })
      }
    } catch (w) {
      if (
        (!/fetch|Page not found/.test(w.message) &&
          !/^\/404(\.html|\/)?$/.test(l) &&
          console.error(w),
        !u)
      )
        try {
          const O = await fetch(ct.value.base + 'hashmap.json')
          ;(window.__VP_HASH_MAP__ = await O.json()), await o(l, c, !0)
          return
        } catch {}
      i === h &&
        ((i = null),
        (n.path = Ce ? h : Mr(h)),
        (n.component = t ? It(t) : null),
        (n.data = eo))
    }
  }
  return (
    Ce &&
      (window.addEventListener(
        'click',
        (l) => {
          if (l.target.closest('button')) return
          const u = l.target.closest('a')
          if (
            u &&
            !u.closest('.vp-raw') &&
            (u instanceof SVGElement || !u.download)
          ) {
            const { target: d } = u,
              {
                href: h,
                origin: m,
                pathname: w,
                hash: O,
                search: M
              } = new URL(
                u.href instanceof SVGAnimatedString ? u.href.animVal : u.href,
                u.baseURI
              ),
              V = new URL(window.location.href)
            !l.ctrlKey &&
              !l.shiftKey &&
              !l.altKey &&
              !l.metaKey &&
              !d &&
              m === V.origin &&
              va(w) &&
              (l.preventDefault(),
              w === V.pathname && M === V.search
                ? (O !== V.hash &&
                    (history.pushState(null, '', O),
                    window.dispatchEvent(new Event('hashchange'))),
                  O
                    ? Fr(u, O, u.classList.contains('header-anchor'))
                    : ($r(h, !1), window.scrollTo(0, 0)))
                : r(h))
          }
        },
        { capture: !0 }
      ),
      window.addEventListener('popstate', async (l) => {
        var c
        await o(vn(location.href), (l.state && l.state.scrollPosition) || 0),
          (c = s.onAfterRouteChanged) == null || c.call(s, location.href)
      }),
      window.addEventListener('hashchange', (l) => {
        l.preventDefault()
      })),
    s
  )
}
function Aa() {
  const e = Et(Sa)
  if (!e) throw new Error('useRouter() is called without provider.')
  return e
}
function so() {
  return Aa().route
}
function Fr(e, t, n = !1) {
  let s = null
  try {
    s = e.classList.contains('header-anchor')
      ? e
      : document.getElementById(decodeURIComponent(t).slice(1))
  } catch (r) {
    console.warn(r)
  }
  if (s) {
    let r = function () {
      !n || Math.abs(o - window.scrollY) > window.innerHeight
        ? window.scrollTo(0, o)
        : window.scrollTo({ left: 0, top: o, behavior: 'smooth' })
    }
    const i = parseInt(window.getComputedStyle(s).paddingTop, 10),
      o = window.scrollY + s.getBoundingClientRect().top - xa() + i
    requestAnimationFrame(r)
  }
}
function $r(e, t = !0) {
  if (Ce && vn(e) !== vn(location.href)) {
    const n = location.hash
    history.replaceState({ scrollPosition: window.scrollY }, document.title),
      history.pushState(null, '', e),
      t &&
        new URL(e, Vs).hash !== n &&
        window.dispatchEvent(new Event('hashchange'))
  }
}
function vn(e) {
  const t = new URL(e, Vs)
  return (
    (t.pathname = t.pathname.replace(/(^|\/)index(\.html)?$/, '$1')),
    ct.value.cleanUrls
      ? (t.pathname = t.pathname.replace(/\.html$/, ''))
      : !t.pathname.endsWith('/') &&
        !t.pathname.endsWith('.html') &&
        (t.pathname += '.html'),
    t.pathname + t.search + t.hash
  )
}
const es = () => an.forEach((e) => e()),
  ou = wi({
    name: 'VitePressContent',
    props: { as: { type: [Object, String], default: 'div' } },
    setup(e) {
      const t = so(),
        { site: n } = wa()
      return () =>
        ps(e.as, n.value.contentProps ?? { style: { position: 'relative' } }, [
          t.component
            ? ps(t.component, {
                onVnodeMounted: es,
                onVnodeUpdated: es,
                onVnodeUnmounted: es
              })
            : '404 Page Not Found'
        ])
    }
  }),
  lu = (e, t) => {
    const n = e.__vccOpts || e
    for (const [s, r] of t) n[s] = r
    return n
  },
  Ra = 'modulepreload',
  Oa = function (e) {
    return '/' + e
  },
  Hr = {},
  cu = function (t, n, s) {
    let r = Promise.resolve()
    if (n && n.length > 0) {
      const i = document.getElementsByTagName('link')
      r = Promise.all(
        n.map((o) => {
          if (((o = Oa(o)), o in Hr)) return
          Hr[o] = !0
          const l = o.endsWith('.css'),
            c = l ? '[rel="stylesheet"]' : ''
          if (!!s)
            for (let h = i.length - 1; h >= 0; h--) {
              const m = i[h]
              if (m.href === o && (!l || m.rel === 'stylesheet')) return
            }
          else if (document.querySelector(`link[href="${o}"]${c}`)) return
          const d = document.createElement('link')
          if (
            ((d.rel = l ? 'stylesheet' : Ra),
            l || ((d.as = 'script'), (d.crossOrigin = '')),
            (d.href = o),
            document.head.appendChild(d),
            l)
          )
            return new Promise((h, m) => {
              d.addEventListener('load', h),
                d.addEventListener('error', () =>
                  m(new Error(`Unable to preload CSS for ${o}`))
                )
            })
        })
      )
    }
    return r
      .then(() => t())
      .catch((i) => {
        const o = new Event('vite:preloadError', { cancelable: !0 })
        if (((o.payload = i), window.dispatchEvent(o), !o.defaultPrevented))
          throw i
      })
  },
  au = wi({
    setup(e, { slots: t }) {
      const n = fe(!1)
      return (
        Tt(() => {
          n.value = !0
        }),
        () => (n.value && t.default ? t.default() : null)
      )
    }
  })
function uu() {
  Ce &&
    window.addEventListener('click', (e) => {
      var n
      const t = e.target
      if (t.matches('.vp-code-group input')) {
        const s = (n = t.parentElement) == null ? void 0 : n.parentElement
        if (!s) return
        const r = Array.from(s.querySelectorAll('input')).indexOf(t)
        if (r < 0) return
        const i = s.querySelector('.blocks')
        if (!i) return
        const o = Array.from(i.children).find((u) =>
          u.classList.contains('active')
        )
        if (!o) return
        const l = i.children[r]
        if (!l || o === l) return
        o.classList.remove('active'), l.classList.add('active')
        const c = s == null ? void 0 : s.querySelector(`label[for="${t.id}"]`)
        c == null || c.scrollIntoView({ block: 'nearest' })
      }
    })
}
function fu() {
  if (Ce) {
    const e = new WeakMap()
    window.addEventListener('click', (t) => {
      var s
      const n = t.target
      if (n.matches('div[class*="language-"] > button.copy')) {
        const r = n.parentElement,
          i = (s = n.nextElementSibling) == null ? void 0 : s.nextElementSibling
        if (!r || !i) return
        const o = /language-(shellscript|shell|bash|sh|zsh)/.test(r.className),
          l = ['.vp-copy-ignore', '.diff.remove'],
          c = i.cloneNode(!0)
        c.querySelectorAll(l.join(',')).forEach((d) => d.remove())
        let u = c.textContent || ''
        o && (u = u.replace(/^ *(\$|>) /gm, '').trim()),
          Ia(u).then(() => {
            n.classList.add('copied'), clearTimeout(e.get(n))
            const d = setTimeout(() => {
              n.classList.remove('copied'), n.blur(), e.delete(n)
            }, 2e3)
            e.set(n, d)
          })
      }
    })
  }
}
async function Ia(e) {
  try {
    return navigator.clipboard.writeText(e)
  } catch {
    const t = document.createElement('textarea'),
      n = document.activeElement
    ;(t.value = e),
      t.setAttribute('readonly', ''),
      (t.style.contain = 'strict'),
      (t.style.position = 'absolute'),
      (t.style.left = '-9999px'),
      (t.style.fontSize = '12pt')
    const s = document.getSelection(),
      r = s ? s.rangeCount > 0 && s.getRangeAt(0) : null
    document.body.appendChild(t),
      t.select(),
      (t.selectionStart = 0),
      (t.selectionEnd = e.length),
      document.execCommand('copy'),
      document.body.removeChild(t),
      r && (s.removeAllRanges(), s.addRange(r)),
      n && n.focus()
  }
}
function du(e, t) {
  let n = !0,
    s = []
  const r = (i) => {
    if (n) {
      ;(n = !1),
        i.forEach((l) => {
          const c = ts(l)
          for (const u of document.head.children)
            if (u.isEqualNode(c)) {
              s.push(u)
              return
            }
        })
      return
    }
    const o = i.map(ts)
    s.forEach((l, c) => {
      const u = o.findIndex((d) =>
        d == null ? void 0 : d.isEqualNode(l ?? null)
      )
      u !== -1 ? delete o[u] : (l == null || l.remove(), delete s[c])
    }),
      o.forEach((l) => l && document.head.appendChild(l)),
      (s = [...s, ...o].filter(Boolean))
  }
  mi(() => {
    const i = e.data,
      o = t.value,
      l = i && i.description,
      c = (i && i.frontmatter.head) || [],
      u = to(o, i)
    u !== document.title && (document.title = u)
    const d = l || o.description
    let h = document.querySelector('meta[name=description]')
    h
      ? h.getAttribute('content') !== d && h.setAttribute('content', d)
      : ts(['meta', { name: 'description', content: d }]),
      r(no(o.head, Pa(c)))
  })
}
function ts([e, t, n]) {
  const s = document.createElement(e)
  for (const r in t) s.setAttribute(r, t[r])
  return n && (s.innerHTML = n), e === 'script' && !t.async && (s.async = !1), s
}
function La(e) {
  return e[0] === 'meta' && e[1] && e[1].name === 'description'
}
function Pa(e) {
  return e.filter((t) => !La(t))
}
const ns = new Set(),
  ro = () => document.createElement('link'),
  Ma = (e) => {
    const t = ro()
    ;(t.rel = 'prefetch'), (t.href = e), document.head.appendChild(t)
  },
  Na = (e) => {
    const t = new XMLHttpRequest()
    t.open('GET', e, (t.withCredentials = !0)), t.send()
  }
let rn
const Fa =
  Ce &&
  (rn = ro()) &&
  rn.relList &&
  rn.relList.supports &&
  rn.relList.supports('prefetch')
    ? Ma
    : Na
function hu() {
  if (!Ce || !window.IntersectionObserver) return
  let e
  if ((e = navigator.connection) && (e.saveData || /2g/.test(e.effectiveType)))
    return
  const t = window.requestIdleCallback || setTimeout
  let n = null
  const s = () => {
    n && n.disconnect(),
      (n = new IntersectionObserver((i) => {
        i.forEach((o) => {
          if (o.isIntersecting) {
            const l = o.target
            n.unobserve(l)
            const { pathname: c } = l
            if (!ns.has(c)) {
              ns.add(c)
              const u = Ca(c)
              u && Fa(u)
            }
          }
        })
      })),
      t(() => {
        document.querySelectorAll('#app a').forEach((i) => {
          const { hostname: o, pathname: l } = new URL(
              i.href instanceof SVGAnimatedString ? i.href.animVal : i.href,
              i.baseURI
            ),
            c = l.match(/\.\w+$/)
          ;(c && c[0] !== '.html') ||
            (i.target !== '_blank' &&
              o === location.hostname &&
              (l !== location.pathname ? n.observe(i) : ns.add(l)))
        })
      })
  }
  Tt(s)
  const r = so()
  je(() => r.path, s),
    Mn(() => {
      n && n.disconnect()
    })
}
export {
  Ka as $,
  Mn as A,
  Ua as B,
  Cl as C,
  xa as D,
  Va as E,
  me as F,
  Ba as G,
  ii as H,
  ru as I,
  ae as J,
  Da as K,
  Zi as L,
  so as M,
  Zl as N,
  Et as O,
  nu as P,
  bs as Q,
  Qa as R,
  Za as S,
  Ki as T,
  An as U,
  tu as V,
  Sn as W,
  eu as X,
  Hl as Y,
  Ya as Z,
  lu as _,
  Di as a,
  Xa as a0,
  Wa as a1,
  Ga as a2,
  du as a3,
  Sa as a4,
  su as a5,
  ba as a6,
  ou as a7,
  au as a8,
  ct as a9,
  Ja as aa,
  iu as ab,
  Ca as ac,
  cu as ad,
  hu as ae,
  fu as af,
  uu as ag,
  ps as ah,
  Hi as b,
  qa as c,
  wi as d,
  za as e,
  va as f,
  Mr as g,
  fe as h,
  ha as i,
  Ce as j,
  se as k,
  Tt as l,
  Vi as m,
  ws as n,
  Fi as o,
  li as p,
  Ha as q,
  ka as r,
  ja as s,
  $a as t,
  wa as u,
  da as v,
  ol as w,
  Xi as x,
  je as y,
  mi as z
}
