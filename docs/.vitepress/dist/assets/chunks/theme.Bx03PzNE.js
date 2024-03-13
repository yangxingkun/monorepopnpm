import {
  d as _,
  o as a,
  c,
  r as l,
  n as T,
  a as F,
  t as L,
  b as $,
  w as v,
  T as de,
  e as f,
  _ as k,
  u as Ue,
  i as Ge,
  f as je,
  g as ve,
  h as S,
  j as R,
  k as b,
  l as j,
  m as p,
  p as r,
  q as C,
  s as H,
  v as G,
  x as ie,
  y as z,
  z as x,
  A as pe,
  B as ye,
  C as ze,
  D as qe,
  E as q,
  F as M,
  G as E,
  H as Pe,
  I as ee,
  J as m,
  K,
  L as Ve,
  M as te,
  N as Q,
  O as oe,
  P as We,
  Q as Le,
  R as Ke,
  S as Re,
  U as Je,
  V as Se,
  W as Ye,
  X as we,
  Y as Ie,
  Z as Qe,
  $ as Xe,
  a0 as Ze,
  a1 as xe
} from './framework.DyMc37k2.js'
const et = _({
    __name: 'VPBadge',
    props: { text: {}, type: { default: 'tip' } },
    setup(o) {
      return (e, t) => (
        a(),
        c(
          'span',
          { class: T(['VPBadge', e.type]) },
          [l(e.$slots, 'default', {}, () => [F(L(e.text), 1)])],
          2
        )
      )
    }
  }),
  tt = { key: 0, class: 'VPBackdrop' },
  ot = _({
    __name: 'VPBackdrop',
    props: { show: { type: Boolean } },
    setup(o) {
      return (e, t) => (
        a(),
        $(
          de,
          { name: 'fade' },
          { default: v(() => [e.show ? (a(), c('div', tt)) : f('', !0)]), _: 1 }
        )
      )
    }
  }),
  st = k(ot, [['__scopeId', 'data-v-87c0d919']]),
  V = Ue
function nt(o, e) {
  let t,
    n = !1
  return () => {
    t && clearTimeout(t),
      n
        ? (t = setTimeout(o, e))
        : (o(), (n = !0) && setTimeout(() => (n = !1), e))
  }
}
function le(o) {
  return /^\//.test(o) ? o : `/${o}`
}
function he(o) {
  const {
    pathname: e,
    search: t,
    hash: n,
    protocol: s
  } = new URL(o, 'http://a.com')
  if (Ge(o) || o.startsWith('#') || !s.startsWith('http') || !je(e)) return o
  const { site: i } = V(),
    u =
      e.endsWith('/') || e.endsWith('.html')
        ? o
        : o.replace(
            /(?:(^\.+)\/)?.*$/,
            `$1${e.replace(/(\.md)?$/, i.value.cleanUrls ? '' : '.html')}${t}${n}`
          )
  return ve(u)
}
const fe = S(R ? location.hash : '')
R &&
  window.addEventListener('hashchange', () => {
    fe.value = location.hash
  })
function J({ removeCurrent: o = !0, correspondingLink: e = !1 } = {}) {
  const { site: t, localeIndex: n, page: s, theme: i } = V(),
    u = b(() => {
      var d, g
      return {
        label: (d = t.value.locales[n.value]) == null ? void 0 : d.label,
        link:
          ((g = t.value.locales[n.value]) == null ? void 0 : g.link) ||
          (n.value === 'root' ? '/' : `/${n.value}/`)
      }
    })
  return {
    localeLinks: b(() =>
      Object.entries(t.value.locales).flatMap(([d, g]) =>
        o && u.value.label === g.label
          ? []
          : {
              text: g.label,
              link:
                at(
                  g.link || (d === 'root' ? '/' : `/${d}/`),
                  i.value.i18nRouting !== !1 && e,
                  s.value.relativePath.slice(u.value.link.length - 1),
                  !t.value.cleanUrls
                ) + fe.value
            }
      )
    ),
    currentLang: u
  }
}
function at(o, e, t, n) {
  return e
    ? o.replace(/\/$/, '') +
        le(
          t.replace(/(^|\/)index\.md$/, '$1').replace(/\.md$/, n ? '.html' : '')
        )
    : o
}
const rt = (o) => (C('data-v-df132710'), (o = o()), H(), o),
  it = { class: 'NotFound' },
  lt = { class: 'code' },
  ct = { class: 'title' },
  ut = rt(() => p('div', { class: 'divider' }, null, -1)),
  dt = { class: 'quote' },
  vt = { class: 'action' },
  pt = ['href', 'aria-label'],
  ht = _({
    __name: 'NotFound',
    setup(o) {
      const { site: e, theme: t } = V(),
        { localeLinks: n } = J({ removeCurrent: !1 }),
        s = S('/')
      return (
        j(() => {
          var u
          const i = window.location.pathname
            .replace(e.value.base, '')
            .replace(/(^.*?\/).*$/, '/$1')
          n.value.length &&
            (s.value =
              ((u = n.value.find(({ link: h }) => h.startsWith(i))) == null
                ? void 0
                : u.link) || n.value[0].link)
        }),
        (i, u) => {
          var h, d, g, y, P
          return (
            a(),
            c('div', it, [
              p(
                'p',
                lt,
                L(((h = r(t).notFound) == null ? void 0 : h.code) ?? '404'),
                1
              ),
              p(
                'h1',
                ct,
                L(
                  ((d = r(t).notFound) == null ? void 0 : d.title) ??
                    'PAGE NOT FOUND'
                ),
                1
              ),
              ut,
              p(
                'blockquote',
                dt,
                L(
                  ((g = r(t).notFound) == null ? void 0 : g.quote) ??
                    "But if you don't change your direction, and if you keep looking, you may end up where you are heading."
                ),
                1
              ),
              p('div', vt, [
                p(
                  'a',
                  {
                    class: 'link',
                    href: r(ve)(s.value),
                    'aria-label':
                      ((y = r(t).notFound) == null ? void 0 : y.linkLabel) ??
                      'go to home'
                  },
                  L(
                    ((P = r(t).notFound) == null ? void 0 : P.linkText) ??
                      'Take me home'
                  ),
                  9,
                  pt
                )
              ])
            ])
          )
        }
      )
    }
  }),
  ft = k(ht, [['__scopeId', 'data-v-df132710']])
function Te(o, e) {
  if (Array.isArray(o)) return X(o)
  if (o == null) return []
  e = le(e)
  const t = Object.keys(o)
      .sort((s, i) => i.split('/').length - s.split('/').length)
      .find((s) => e.startsWith(le(s))),
    n = t ? o[t] : []
  return Array.isArray(n) ? X(n) : X(n.items, n.base)
}
function _t(o) {
  const e = []
  let t = 0
  for (const n in o) {
    const s = o[n]
    if (s.items) {
      t = e.push(s)
      continue
    }
    e[t] || e.push({ items: [] }), e[t].items.push(s)
  }
  return e
}
function mt(o) {
  const e = []
  function t(n) {
    for (const s of n)
      s.text &&
        s.link &&
        e.push({ text: s.text, link: s.link, docFooterText: s.docFooterText }),
        s.items && t(s.items)
  }
  return t(o), e
}
function ce(o, e) {
  return Array.isArray(e)
    ? e.some((t) => ce(o, t))
    : G(o, e.link)
      ? !0
      : e.items
        ? ce(o, e.items)
        : !1
}
function X(o, e) {
  return [...o].map((t) => {
    const n = { ...t },
      s = n.base || e
    return (
      s && n.link && (n.link = s + n.link),
      n.items && (n.items = X(n.items, s)),
      n
    )
  })
}
function O() {
  const { frontmatter: o, page: e, theme: t } = V(),
    n = ie('(min-width: 960px)'),
    s = S(!1),
    i = b(() => {
      const B = t.value.sidebar,
        w = e.value.relativePath
      return B ? Te(B, w) : []
    }),
    u = S(i.value)
  z(i, (B, w) => {
    JSON.stringify(B) !== JSON.stringify(w) && (u.value = i.value)
  })
  const h = b(
      () =>
        o.value.sidebar !== !1 &&
        u.value.length > 0 &&
        o.value.layout !== 'home'
    ),
    d = b(() =>
      g
        ? o.value.aside == null
          ? t.value.aside === 'left'
          : o.value.aside === 'left'
        : !1
    ),
    g = b(() =>
      o.value.layout === 'home'
        ? !1
        : o.value.aside != null
          ? !!o.value.aside
          : t.value.aside !== !1
    ),
    y = b(() => h.value && n.value),
    P = b(() => (h.value ? _t(u.value) : []))
  function I() {
    s.value = !0
  }
  function N() {
    s.value = !1
  }
  function A() {
    s.value ? N() : I()
  }
  return {
    isOpen: s,
    sidebar: u,
    sidebarGroups: P,
    hasSidebar: h,
    hasAside: g,
    leftAside: d,
    isSidebarEnabled: y,
    open: I,
    close: N,
    toggle: A
  }
}
function kt(o, e) {
  let t
  x(() => {
    t = o.value ? document.activeElement : void 0
  }),
    j(() => {
      window.addEventListener('keyup', n)
    }),
    pe(() => {
      window.removeEventListener('keyup', n)
    })
  function n(s) {
    s.key === 'Escape' && o.value && (e(), t == null || t.focus())
  }
}
function $t(o) {
  const { page: e } = V(),
    t = S(!1),
    n = b(() => o.value.collapsed != null),
    s = b(() => !!o.value.link),
    i = S(!1),
    u = () => {
      i.value = G(e.value.relativePath, o.value.link)
    }
  z([e, o, fe], u), j(u)
  const h = b(() =>
      i.value
        ? !0
        : o.value.items
          ? ce(e.value.relativePath, o.value.items)
          : !1
    ),
    d = b(() => !!(o.value.items && o.value.items.length))
  x(() => {
    t.value = !!(n.value && o.value.collapsed)
  }),
    ye(() => {
      ;(i.value || h.value) && (t.value = !1)
    })
  function g() {
    n.value && (t.value = !t.value)
  }
  return {
    collapsed: t,
    collapsible: n,
    isLink: s,
    isActiveLink: i,
    hasActiveLink: h,
    hasChildren: d,
    toggle: g
  }
}
function bt() {
  const { hasSidebar: o } = O(),
    e = ie('(min-width: 960px)'),
    t = ie('(min-width: 1280px)')
  return {
    isAsideEnabled: b(() =>
      !t.value && !e.value ? !1 : o.value ? t.value : e.value
    )
  }
}
const ue = []
function Ne(o) {
  return (
    (typeof o.outline == 'object' &&
      !Array.isArray(o.outline) &&
      o.outline.label) ||
    o.outlineTitle ||
    'On this page'
  )
}
function _e(o) {
  const e = [...document.querySelectorAll('.VPDoc :where(h1,h2,h3,h4,h5,h6)')]
    .filter((t) => t.id && t.hasChildNodes())
    .map((t) => {
      const n = Number(t.tagName[1])
      return { element: t, title: gt(t), link: '#' + t.id, level: n }
    })
  return yt(e, o)
}
function gt(o) {
  let e = ''
  for (const t of o.childNodes)
    if (t.nodeType === 1) {
      if (
        t.classList.contains('VPBadge') ||
        t.classList.contains('header-anchor') ||
        t.classList.contains('ignore-header')
      )
        continue
      e += t.textContent
    } else t.nodeType === 3 && (e += t.textContent)
  return e.trim()
}
function yt(o, e) {
  if (e === !1) return []
  const t = (typeof e == 'object' && !Array.isArray(e) ? e.level : e) || 2,
    [n, s] = typeof t == 'number' ? [t, t] : t === 'deep' ? [2, 6] : t
  ;(o = o.filter((u) => u.level >= n && u.level <= s)), (ue.length = 0)
  for (const { element: u, link: h } of o) ue.push({ element: u, link: h })
  const i = []
  e: for (let u = 0; u < o.length; u++) {
    const h = o[u]
    if (u === 0) i.push(h)
    else {
      for (let d = u - 1; d >= 0; d--) {
        const g = o[d]
        if (g.level < h.level) {
          ;(g.children || (g.children = [])).push(h)
          continue e
        }
      }
      i.push(h)
    }
  }
  return i
}
function Pt(o, e) {
  const { isAsideEnabled: t } = bt(),
    n = nt(i, 100)
  let s = null
  j(() => {
    requestAnimationFrame(i), window.addEventListener('scroll', n)
  }),
    ze(() => {
      u(location.hash)
    }),
    pe(() => {
      window.removeEventListener('scroll', n)
    })
  function i() {
    if (!t.value) return
    const h = window.scrollY,
      d = window.innerHeight,
      g = document.body.offsetHeight,
      y = Math.abs(h + d - g) < 1,
      P = ue
        .map(({ element: N, link: A }) => ({ link: A, top: Vt(N) }))
        .filter(({ top: N }) => !Number.isNaN(N))
        .sort((N, A) => N.top - A.top)
    if (!P.length) {
      u(null)
      return
    }
    if (h < 1) {
      u(null)
      return
    }
    if (y) {
      u(P[P.length - 1].link)
      return
    }
    let I = null
    for (const { link: N, top: A } of P) {
      if (A > h + qe() + 4) break
      I = N
    }
    u(I)
  }
  function u(h) {
    s && s.classList.remove('active'),
      h == null
        ? (s = null)
        : (s = o.value.querySelector(`a[href="${decodeURIComponent(h)}"]`))
    const d = s
    d
      ? (d.classList.add('active'),
        (e.value.style.top = d.offsetTop + 39 + 'px'),
        (e.value.style.opacity = '1'))
      : ((e.value.style.top = '33px'), (e.value.style.opacity = '0'))
  }
}
function Vt(o) {
  let e = 0
  for (; o !== document.body; ) {
    if (o === null) return NaN
    ;(e += o.offsetTop), (o = o.offsetParent)
  }
  return e
}
const Lt = ['href', 'title'],
  St = _({
    __name: 'VPDocOutlineItem',
    props: { headers: {}, root: { type: Boolean } },
    setup(o) {
      function e({ target: t }) {
        const n = t.href.split('#')[1],
          s = document.getElementById(decodeURIComponent(n))
        s == null || s.focus({ preventScroll: !0 })
      }
      return (t, n) => {
        const s = q('VPDocOutlineItem', !0)
        return (
          a(),
          c(
            'ul',
            { class: T(['VPDocOutlineItem', t.root ? 'root' : 'nested']) },
            [
              (a(!0),
              c(
                M,
                null,
                E(
                  t.headers,
                  ({ children: i, link: u, title: h }) => (
                    a(),
                    c('li', null, [
                      p(
                        'a',
                        {
                          class: 'outline-link',
                          href: u,
                          onClick: e,
                          title: h
                        },
                        L(h),
                        9,
                        Lt
                      ),
                      i != null && i.length
                        ? (a(),
                          $(s, { key: 0, headers: i }, null, 8, ['headers']))
                        : f('', !0)
                    ])
                  )
                ),
                256
              ))
            ],
            2
          )
        )
      }
    }
  }),
  Me = k(St, [['__scopeId', 'data-v-13ca2e78']]),
  wt = (o) => (C('data-v-18b2990b'), (o = o()), H(), o),
  It = { class: 'content' },
  Tt = { class: 'outline-title', role: 'heading', 'aria-level': '2' },
  Nt = { 'aria-labelledby': 'doc-outline-aria-label' },
  Mt = wt(() =>
    p(
      'span',
      { class: 'visually-hidden', id: 'doc-outline-aria-label' },
      ' Table of Contents for current page ',
      -1
    )
  ),
  At = _({
    __name: 'VPDocAsideOutline',
    setup(o) {
      const { frontmatter: e, theme: t } = V(),
        n = Pe([])
      ee(() => {
        n.value = _e(e.value.outline ?? t.value.outline)
      })
      const s = S(),
        i = S()
      return (
        Pt(s, i),
        (u, h) => (
          a(),
          c(
            'div',
            {
              class: T([
                'VPDocAsideOutline',
                { 'has-outline': n.value.length > 0 }
              ]),
              ref_key: 'container',
              ref: s,
              role: 'navigation'
            },
            [
              p('div', It, [
                p(
                  'div',
                  { class: 'outline-marker', ref_key: 'marker', ref: i },
                  null,
                  512
                ),
                p('div', Tt, L(r(Ne)(r(t))), 1),
                p('nav', Nt, [
                  Mt,
                  m(Me, { headers: n.value, root: !0 }, null, 8, ['headers'])
                ])
              ])
            ],
            2
          )
        )
      )
    }
  }),
  Bt = k(At, [['__scopeId', 'data-v-18b2990b']]),
  Ct = { class: 'VPDocAsideCarbonAds' },
  Ht = _({
    __name: 'VPDocAsideCarbonAds',
    props: { carbonAds: {} },
    setup(o) {
      const e = () => null
      return (t, n) => (
        a(),
        c('div', Ct, [
          m(r(e), { 'carbon-ads': t.carbonAds }, null, 8, ['carbon-ads'])
        ])
      )
    }
  }),
  Et = (o) => (C('data-v-15ca7508'), (o = o()), H(), o),
  Ft = { class: 'VPDocAside' },
  Dt = Et(() => p('div', { class: 'spacer' }, null, -1)),
  Ot = _({
    __name: 'VPDocAside',
    setup(o) {
      const { theme: e } = V()
      return (t, n) => (
        a(),
        c('div', Ft, [
          l(t.$slots, 'aside-top', {}, void 0, !0),
          l(t.$slots, 'aside-outline-before', {}, void 0, !0),
          m(Bt),
          l(t.$slots, 'aside-outline-after', {}, void 0, !0),
          Dt,
          l(t.$slots, 'aside-ads-before', {}, void 0, !0),
          r(e).carbonAds
            ? (a(),
              $(Ht, { key: 0, 'carbon-ads': r(e).carbonAds }, null, 8, [
                'carbon-ads'
              ]))
            : f('', !0),
          l(t.$slots, 'aside-ads-after', {}, void 0, !0),
          l(t.$slots, 'aside-bottom', {}, void 0, !0)
        ])
      )
    }
  }),
  Ut = k(Ot, [['__scopeId', 'data-v-15ca7508']])
function Gt() {
  const { theme: o, page: e } = V()
  return b(() => {
    const { text: t = 'Edit this page', pattern: n = '' } =
      o.value.editLink || {}
    let s
    return (
      typeof n == 'function'
        ? (s = n(e.value))
        : (s = n.replace(/:path/g, e.value.filePath)),
      { url: s, text: t }
    )
  })
}
function jt() {
  const { page: o, theme: e, frontmatter: t } = V()
  return b(() => {
    var d, g, y, P, I, N, A, B
    const n = Te(e.value.sidebar, o.value.relativePath),
      s = mt(n),
      i = s.findIndex((w) => G(o.value.relativePath, w.link)),
      u =
        (((d = e.value.docFooter) == null ? void 0 : d.prev) === !1 &&
          !t.value.prev) ||
        t.value.prev === !1,
      h =
        (((g = e.value.docFooter) == null ? void 0 : g.next) === !1 &&
          !t.value.next) ||
        t.value.next === !1
    return {
      prev: u
        ? void 0
        : {
            text:
              (typeof t.value.prev == 'string'
                ? t.value.prev
                : typeof t.value.prev == 'object'
                  ? t.value.prev.text
                  : void 0) ??
              ((y = s[i - 1]) == null ? void 0 : y.docFooterText) ??
              ((P = s[i - 1]) == null ? void 0 : P.text),
            link:
              (typeof t.value.prev == 'object' ? t.value.prev.link : void 0) ??
              ((I = s[i - 1]) == null ? void 0 : I.link)
          },
      next: h
        ? void 0
        : {
            text:
              (typeof t.value.next == 'string'
                ? t.value.next
                : typeof t.value.next == 'object'
                  ? t.value.next.text
                  : void 0) ??
              ((N = s[i + 1]) == null ? void 0 : N.docFooterText) ??
              ((A = s[i + 1]) == null ? void 0 : A.text),
            link:
              (typeof t.value.next == 'object' ? t.value.next.link : void 0) ??
              ((B = s[i + 1]) == null ? void 0 : B.link)
          }
    }
  })
}
const D = _({
    __name: 'VPLink',
    props: {
      tag: {},
      href: {},
      noIcon: { type: Boolean },
      target: {},
      rel: {}
    },
    setup(o) {
      const e = o,
        t = b(() => e.tag ?? (e.href ? 'a' : 'span')),
        n = b(() => e.href && Ve.test(e.href))
      return (s, i) => (
        a(),
        $(
          K(t.value),
          {
            class: T([
              'VPLink',
              {
                link: s.href,
                'vp-external-link-icon': n.value,
                'no-icon': s.noIcon
              }
            ]),
            href: s.href ? r(he)(s.href) : void 0,
            target: s.target ?? (n.value ? '_blank' : void 0),
            rel: s.rel ?? (n.value ? 'noreferrer' : void 0)
          },
          { default: v(() => [l(s.$slots, 'default')]), _: 3 },
          8,
          ['class', 'href', 'target', 'rel']
        )
      )
    }
  }),
  zt = { class: 'VPLastUpdated' },
  qt = ['datetime'],
  Wt = _({
    __name: 'VPDocFooterLastUpdated',
    setup(o) {
      const { theme: e, page: t, frontmatter: n, lang: s } = V(),
        i = b(() => new Date(n.value.lastUpdated ?? t.value.lastUpdated)),
        u = b(() => i.value.toISOString()),
        h = S('')
      return (
        j(() => {
          x(() => {
            var d, g, y
            h.value = new Intl.DateTimeFormat(
              (g =
                (d = e.value.lastUpdated) == null ? void 0 : d.formatOptions) !=
                null && g.forceLocale
                ? s.value
                : void 0,
              ((y = e.value.lastUpdated) == null
                ? void 0
                : y.formatOptions) ?? { dateStyle: 'short', timeStyle: 'short' }
            ).format(i.value)
          })
        }),
        (d, g) => {
          var y
          return (
            a(),
            c('p', zt, [
              F(
                L(
                  ((y = r(e).lastUpdated) == null ? void 0 : y.text) ||
                    r(e).lastUpdatedText ||
                    'Last updated'
                ) + ': ',
                1
              ),
              p('time', { datetime: u.value }, L(h.value), 9, qt)
            ])
          )
        }
      )
    }
  }),
  Kt = k(Wt, [['__scopeId', 'data-v-ed1e116d']]),
  Rt = (o) => (C('data-v-ba62f331'), (o = o()), H(), o),
  Jt = { key: 0, class: 'VPDocFooter' },
  Yt = { key: 0, class: 'edit-info' },
  Qt = { key: 0, class: 'edit-link' },
  Xt = Rt(() =>
    p('span', { class: 'vpi-square-pen edit-link-icon' }, null, -1)
  ),
  Zt = { key: 1, class: 'last-updated' },
  xt = { key: 1, class: 'prev-next' },
  eo = { class: 'pager' },
  to = ['innerHTML'],
  oo = ['innerHTML'],
  so = { class: 'pager' },
  no = ['innerHTML'],
  ao = ['innerHTML'],
  ro = _({
    __name: 'VPDocFooter',
    setup(o) {
      const { theme: e, page: t, frontmatter: n } = V(),
        s = Gt(),
        i = jt(),
        u = b(() => e.value.editLink && n.value.editLink !== !1),
        h = b(() => t.value.lastUpdated && n.value.lastUpdated !== !1),
        d = b(() => u.value || h.value || i.value.prev || i.value.next)
      return (g, y) => {
        var P, I, N, A
        return d.value
          ? (a(),
            c('footer', Jt, [
              l(g.$slots, 'doc-footer-before', {}, void 0, !0),
              u.value || h.value
                ? (a(),
                  c('div', Yt, [
                    u.value
                      ? (a(),
                        c('div', Qt, [
                          m(
                            D,
                            {
                              class: 'edit-link-button',
                              href: r(s).url,
                              'no-icon': !0
                            },
                            {
                              default: v(() => [Xt, F(' ' + L(r(s).text), 1)]),
                              _: 1
                            },
                            8,
                            ['href']
                          )
                        ]))
                      : f('', !0),
                    h.value ? (a(), c('div', Zt, [m(Kt)])) : f('', !0)
                  ]))
                : f('', !0),
              ((P = r(i).prev) != null && P.link) ||
              ((I = r(i).next) != null && I.link)
                ? (a(),
                  c('nav', xt, [
                    p('div', eo, [
                      (N = r(i).prev) != null && N.link
                        ? (a(),
                          $(
                            D,
                            {
                              key: 0,
                              class: 'pager-link prev',
                              href: r(i).prev.link
                            },
                            {
                              default: v(() => {
                                var B
                                return [
                                  p(
                                    'span',
                                    {
                                      class: 'desc',
                                      innerHTML:
                                        ((B = r(e).docFooter) == null
                                          ? void 0
                                          : B.prev) || 'Previous page'
                                    },
                                    null,
                                    8,
                                    to
                                  ),
                                  p(
                                    'span',
                                    {
                                      class: 'title',
                                      innerHTML: r(i).prev.text
                                    },
                                    null,
                                    8,
                                    oo
                                  )
                                ]
                              }),
                              _: 1
                            },
                            8,
                            ['href']
                          ))
                        : f('', !0)
                    ]),
                    p('div', so, [
                      (A = r(i).next) != null && A.link
                        ? (a(),
                          $(
                            D,
                            {
                              key: 0,
                              class: 'pager-link next',
                              href: r(i).next.link
                            },
                            {
                              default: v(() => {
                                var B
                                return [
                                  p(
                                    'span',
                                    {
                                      class: 'desc',
                                      innerHTML:
                                        ((B = r(e).docFooter) == null
                                          ? void 0
                                          : B.next) || 'Next page'
                                    },
                                    null,
                                    8,
                                    no
                                  ),
                                  p(
                                    'span',
                                    {
                                      class: 'title',
                                      innerHTML: r(i).next.text
                                    },
                                    null,
                                    8,
                                    ao
                                  )
                                ]
                              }),
                              _: 1
                            },
                            8,
                            ['href']
                          ))
                        : f('', !0)
                    ])
                  ]))
                : f('', !0)
            ]))
          : f('', !0)
      }
    }
  }),
  io = k(ro, [['__scopeId', 'data-v-ba62f331']]),
  lo = (o) => (C('data-v-f0e6bb9f'), (o = o()), H(), o),
  co = { class: 'container' },
  uo = lo(() => p('div', { class: 'aside-curtain' }, null, -1)),
  vo = { class: 'aside-container' },
  po = { class: 'aside-content' },
  ho = { class: 'content' },
  fo = { class: 'content-container' },
  _o = { class: 'main' },
  mo = _({
    __name: 'VPDoc',
    setup(o) {
      const { theme: e } = V(),
        t = te(),
        { hasSidebar: n, hasAside: s, leftAside: i } = O(),
        u = b(() => t.path.replace(/[./]+/g, '_').replace(/_html$/, ''))
      return (h, d) => {
        const g = q('Content')
        return (
          a(),
          c(
            'div',
            { class: T(['VPDoc', { 'has-sidebar': r(n), 'has-aside': r(s) }]) },
            [
              l(h.$slots, 'doc-top', {}, void 0, !0),
              p('div', co, [
                r(s)
                  ? (a(),
                    c(
                      'div',
                      { key: 0, class: T(['aside', { 'left-aside': r(i) }]) },
                      [
                        uo,
                        p('div', vo, [
                          p('div', po, [
                            m(Ut, null, {
                              'aside-top': v(() => [
                                l(h.$slots, 'aside-top', {}, void 0, !0)
                              ]),
                              'aside-bottom': v(() => [
                                l(h.$slots, 'aside-bottom', {}, void 0, !0)
                              ]),
                              'aside-outline-before': v(() => [
                                l(
                                  h.$slots,
                                  'aside-outline-before',
                                  {},
                                  void 0,
                                  !0
                                )
                              ]),
                              'aside-outline-after': v(() => [
                                l(
                                  h.$slots,
                                  'aside-outline-after',
                                  {},
                                  void 0,
                                  !0
                                )
                              ]),
                              'aside-ads-before': v(() => [
                                l(h.$slots, 'aside-ads-before', {}, void 0, !0)
                              ]),
                              'aside-ads-after': v(() => [
                                l(h.$slots, 'aside-ads-after', {}, void 0, !0)
                              ]),
                              _: 3
                            })
                          ])
                        ])
                      ],
                      2
                    ))
                  : f('', !0),
                p('div', ho, [
                  p('div', fo, [
                    l(h.$slots, 'doc-before', {}, void 0, !0),
                    p('main', _o, [
                      m(
                        g,
                        {
                          class: T([
                            'vp-doc',
                            [
                              u.value,
                              r(e).externalLinkIcon &&
                                'external-link-icon-enabled'
                            ]
                          ])
                        },
                        null,
                        8,
                        ['class']
                      )
                    ]),
                    m(io, null, {
                      'doc-footer-before': v(() => [
                        l(h.$slots, 'doc-footer-before', {}, void 0, !0)
                      ]),
                      _: 3
                    }),
                    l(h.$slots, 'doc-after', {}, void 0, !0)
                  ])
                ])
              ]),
              l(h.$slots, 'doc-bottom', {}, void 0, !0)
            ],
            2
          )
        )
      }
    }
  }),
  ko = k(mo, [['__scopeId', 'data-v-f0e6bb9f']]),
  $o = _({
    __name: 'VPButton',
    props: {
      tag: {},
      size: { default: 'medium' },
      theme: { default: 'brand' },
      text: {},
      href: {},
      target: {},
      rel: {}
    },
    setup(o) {
      const e = o,
        t = b(() => e.href && Ve.test(e.href)),
        n = b(() => (e.tag || e.href ? 'a' : 'button'))
      return (s, i) => (
        a(),
        $(
          K(n.value),
          {
            class: T(['VPButton', [s.size, s.theme]]),
            href: s.href ? r(he)(s.href) : void 0,
            target: e.target ?? (t.value ? '_blank' : void 0),
            rel: e.rel ?? (t.value ? 'noreferrer' : void 0)
          },
          { default: v(() => [F(L(s.text), 1)]), _: 1 },
          8,
          ['class', 'href', 'target', 'rel']
        )
      )
    }
  }),
  bo = k($o, [['__scopeId', 'data-v-fd59eb2d']]),
  go = ['src', 'alt'],
  yo = _({
    inheritAttrs: !1,
    __name: 'VPImage',
    props: { image: {}, alt: {} },
    setup(o) {
      return (e, t) => {
        const n = q('VPImage', !0)
        return e.image
          ? (a(),
            c(
              M,
              { key: 0 },
              [
                typeof e.image == 'string' || 'src' in e.image
                  ? (a(),
                    c(
                      'img',
                      Q(
                        { key: 0, class: 'VPImage' },
                        typeof e.image == 'string'
                          ? e.$attrs
                          : { ...e.image, ...e.$attrs },
                        {
                          src: r(ve)(
                            typeof e.image == 'string' ? e.image : e.image.src
                          ),
                          alt:
                            e.alt ??
                            (typeof e.image == 'string'
                              ? ''
                              : e.image.alt || '')
                        }
                      ),
                      null,
                      16,
                      go
                    ))
                  : (a(),
                    c(
                      M,
                      { key: 1 },
                      [
                        m(
                          n,
                          Q(
                            {
                              class: 'dark',
                              image: e.image.dark,
                              alt: e.image.alt
                            },
                            e.$attrs
                          ),
                          null,
                          16,
                          ['image', 'alt']
                        ),
                        m(
                          n,
                          Q(
                            {
                              class: 'light',
                              image: e.image.light,
                              alt: e.image.alt
                            },
                            e.$attrs
                          ),
                          null,
                          16,
                          ['image', 'alt']
                        )
                      ],
                      64
                    ))
              ],
              64
            ))
          : f('', !0)
      }
    }
  }),
  Z = k(yo, [['__scopeId', 'data-v-4752cd67']]),
  Po = (o) => (C('data-v-6388140a'), (o = o()), H(), o),
  Vo = { class: 'container' },
  Lo = { class: 'main' },
  So = { key: 0, class: 'name' },
  wo = ['innerHTML'],
  Io = ['innerHTML'],
  To = ['innerHTML'],
  No = { key: 0, class: 'actions' },
  Mo = { key: 0, class: 'image' },
  Ao = { class: 'image-container' },
  Bo = Po(() => p('div', { class: 'image-bg' }, null, -1)),
  Co = _({
    __name: 'VPHero',
    props: { name: {}, text: {}, tagline: {}, image: {}, actions: {} },
    setup(o) {
      const e = oe('hero-image-slot-exists')
      return (t, n) => (
        a(),
        c(
          'div',
          { class: T(['VPHero', { 'has-image': t.image || r(e) }]) },
          [
            p('div', Vo, [
              p('div', Lo, [
                l(t.$slots, 'home-hero-info-before', {}, void 0, !0),
                l(
                  t.$slots,
                  'home-hero-info',
                  {},
                  () => [
                    t.name
                      ? (a(),
                        c('h1', So, [
                          p(
                            'span',
                            { innerHTML: t.name, class: 'clip' },
                            null,
                            8,
                            wo
                          )
                        ]))
                      : f('', !0),
                    t.text
                      ? (a(),
                        c(
                          'p',
                          { key: 1, innerHTML: t.text, class: 'text' },
                          null,
                          8,
                          Io
                        ))
                      : f('', !0),
                    t.tagline
                      ? (a(),
                        c(
                          'p',
                          { key: 2, innerHTML: t.tagline, class: 'tagline' },
                          null,
                          8,
                          To
                        ))
                      : f('', !0)
                  ],
                  !0
                ),
                l(t.$slots, 'home-hero-info-after', {}, void 0, !0),
                t.actions
                  ? (a(),
                    c('div', No, [
                      (a(!0),
                      c(
                        M,
                        null,
                        E(
                          t.actions,
                          (s) => (
                            a(),
                            c('div', { key: s.link, class: 'action' }, [
                              m(
                                bo,
                                {
                                  tag: 'a',
                                  size: 'medium',
                                  theme: s.theme,
                                  text: s.text,
                                  href: s.link,
                                  target: s.target,
                                  rel: s.rel
                                },
                                null,
                                8,
                                ['theme', 'text', 'href', 'target', 'rel']
                              )
                            ])
                          )
                        ),
                        128
                      ))
                    ]))
                  : f('', !0),
                l(t.$slots, 'home-hero-actions-after', {}, void 0, !0)
              ]),
              t.image || r(e)
                ? (a(),
                  c('div', Mo, [
                    p('div', Ao, [
                      Bo,
                      l(
                        t.$slots,
                        'home-hero-image',
                        {},
                        () => [
                          t.image
                            ? (a(),
                              $(
                                Z,
                                { key: 0, class: 'image-src', image: t.image },
                                null,
                                8,
                                ['image']
                              ))
                            : f('', !0)
                        ],
                        !0
                      )
                    ])
                  ]))
                : f('', !0)
            ])
          ],
          2
        )
      )
    }
  }),
  Ho = k(Co, [['__scopeId', 'data-v-6388140a']]),
  Eo = _({
    __name: 'VPHomeHero',
    setup(o) {
      const { frontmatter: e } = V()
      return (t, n) =>
        r(e).hero
          ? (a(),
            $(
              Ho,
              {
                key: 0,
                class: 'VPHomeHero',
                name: r(e).hero.name,
                text: r(e).hero.text,
                tagline: r(e).hero.tagline,
                image: r(e).hero.image,
                actions: r(e).hero.actions
              },
              {
                'home-hero-info-before': v(() => [
                  l(t.$slots, 'home-hero-info-before')
                ]),
                'home-hero-info': v(() => [l(t.$slots, 'home-hero-info')]),
                'home-hero-info-after': v(() => [
                  l(t.$slots, 'home-hero-info-after')
                ]),
                'home-hero-actions-after': v(() => [
                  l(t.$slots, 'home-hero-actions-after')
                ]),
                'home-hero-image': v(() => [l(t.$slots, 'home-hero-image')]),
                _: 3
              },
              8,
              ['name', 'text', 'tagline', 'image', 'actions']
            ))
          : f('', !0)
    }
  }),
  Fo = (o) => (C('data-v-d523d1e1'), (o = o()), H(), o),
  Do = { class: 'box' },
  Oo = { key: 0, class: 'icon' },
  Uo = ['innerHTML'],
  Go = ['innerHTML'],
  jo = ['innerHTML'],
  zo = { key: 4, class: 'link-text' },
  qo = { class: 'link-text-value' },
  Wo = Fo(() =>
    p('span', { class: 'vpi-arrow-right link-text-icon' }, null, -1)
  ),
  Ko = _({
    __name: 'VPFeature',
    props: {
      icon: {},
      title: {},
      details: {},
      link: {},
      linkText: {},
      rel: {},
      target: {}
    },
    setup(o) {
      return (e, t) => (
        a(),
        $(
          D,
          {
            class: 'VPFeature',
            href: e.link,
            rel: e.rel,
            target: e.target,
            'no-icon': !0,
            tag: e.link ? 'a' : 'div'
          },
          {
            default: v(() => [
              p('article', Do, [
                typeof e.icon == 'object' && e.icon.wrap
                  ? (a(),
                    c('div', Oo, [
                      m(
                        Z,
                        {
                          image: e.icon,
                          alt: e.icon.alt,
                          height: e.icon.height || 48,
                          width: e.icon.width || 48
                        },
                        null,
                        8,
                        ['image', 'alt', 'height', 'width']
                      )
                    ]))
                  : typeof e.icon == 'object'
                    ? (a(),
                      $(
                        Z,
                        {
                          key: 1,
                          image: e.icon,
                          alt: e.icon.alt,
                          height: e.icon.height || 48,
                          width: e.icon.width || 48
                        },
                        null,
                        8,
                        ['image', 'alt', 'height', 'width']
                      ))
                    : e.icon
                      ? (a(),
                        c(
                          'div',
                          { key: 2, class: 'icon', innerHTML: e.icon },
                          null,
                          8,
                          Uo
                        ))
                      : f('', !0),
                p('h2', { class: 'title', innerHTML: e.title }, null, 8, Go),
                e.details
                  ? (a(),
                    c(
                      'p',
                      { key: 3, class: 'details', innerHTML: e.details },
                      null,
                      8,
                      jo
                    ))
                  : f('', !0),
                e.linkText
                  ? (a(),
                    c('div', zo, [p('p', qo, [F(L(e.linkText) + ' ', 1), Wo])]))
                  : f('', !0)
              ])
            ]),
            _: 1
          },
          8,
          ['href', 'rel', 'target', 'tag']
        )
      )
    }
  }),
  Ro = k(Ko, [['__scopeId', 'data-v-d523d1e1']]),
  Jo = { key: 0, class: 'VPFeatures' },
  Yo = { class: 'container' },
  Qo = { class: 'items' },
  Xo = _({
    __name: 'VPFeatures',
    props: { features: {} },
    setup(o) {
      const e = o,
        t = b(() => {
          const n = e.features.length
          if (n) {
            if (n === 2) return 'grid-2'
            if (n === 3) return 'grid-3'
            if (n % 3 === 0) return 'grid-6'
            if (n > 3) return 'grid-4'
          } else return
        })
      return (n, s) =>
        n.features
          ? (a(),
            c('div', Jo, [
              p('div', Yo, [
                p('div', Qo, [
                  (a(!0),
                  c(
                    M,
                    null,
                    E(
                      n.features,
                      (i) => (
                        a(),
                        c(
                          'div',
                          { key: i.title, class: T(['item', [t.value]]) },
                          [
                            m(
                              Ro,
                              {
                                icon: i.icon,
                                title: i.title,
                                details: i.details,
                                link: i.link,
                                'link-text': i.linkText,
                                rel: i.rel,
                                target: i.target
                              },
                              null,
                              8,
                              [
                                'icon',
                                'title',
                                'details',
                                'link',
                                'link-text',
                                'rel',
                                'target'
                              ]
                            )
                          ],
                          2
                        )
                      )
                    ),
                    128
                  ))
                ])
              ])
            ]))
          : f('', !0)
    }
  }),
  Zo = k(Xo, [['__scopeId', 'data-v-a4b20839']]),
  xo = _({
    __name: 'VPHomeFeatures',
    setup(o) {
      const { frontmatter: e } = V()
      return (t, n) =>
        r(e).features
          ? (a(),
            $(
              Zo,
              { key: 0, class: 'VPHomeFeatures', features: r(e).features },
              null,
              8,
              ['features']
            ))
          : f('', !0)
    }
  }),
  es = _({
    __name: 'VPHomeContent',
    setup(o) {
      const { width: e } = We({ includeScrollbar: !1 })
      return (t, n) => (
        a(),
        c(
          'div',
          {
            class: 'vp-doc container',
            style: Le(
              r(e) ? { '--vp-offset': `calc(50% - ${r(e) / 2}px)` } : {}
            )
          },
          [l(t.$slots, 'default', {}, void 0, !0)],
          4
        )
      )
    }
  }),
  ts = k(es, [['__scopeId', 'data-v-3b748e37']]),
  os = { class: 'VPHome' },
  ss = _({
    __name: 'VPHome',
    setup(o) {
      const { frontmatter: e } = V()
      return (t, n) => {
        const s = q('Content')
        return (
          a(),
          c('div', os, [
            l(t.$slots, 'home-hero-before', {}, void 0, !0),
            m(Eo, null, {
              'home-hero-info-before': v(() => [
                l(t.$slots, 'home-hero-info-before', {}, void 0, !0)
              ]),
              'home-hero-info': v(() => [
                l(t.$slots, 'home-hero-info', {}, void 0, !0)
              ]),
              'home-hero-info-after': v(() => [
                l(t.$slots, 'home-hero-info-after', {}, void 0, !0)
              ]),
              'home-hero-actions-after': v(() => [
                l(t.$slots, 'home-hero-actions-after', {}, void 0, !0)
              ]),
              'home-hero-image': v(() => [
                l(t.$slots, 'home-hero-image', {}, void 0, !0)
              ]),
              _: 3
            }),
            l(t.$slots, 'home-hero-after', {}, void 0, !0),
            l(t.$slots, 'home-features-before', {}, void 0, !0),
            m(xo),
            l(t.$slots, 'home-features-after', {}, void 0, !0),
            r(e).markdownStyles !== !1
              ? (a(), $(ts, { key: 0 }, { default: v(() => [m(s)]), _: 1 }))
              : (a(), $(s, { key: 1 }))
          ])
        )
      }
    }
  }),
  ns = k(ss, [['__scopeId', 'data-v-3aabd883']]),
  as = {},
  rs = { class: 'VPPage' }
function is(o, e) {
  const t = q('Content')
  return (
    a(),
    c('div', rs, [l(o.$slots, 'page-top'), m(t), l(o.$slots, 'page-bottom')])
  )
}
const ls = k(as, [['render', is]]),
  cs = _({
    __name: 'VPContent',
    setup(o) {
      const { page: e, frontmatter: t } = V(),
        { hasSidebar: n } = O()
      return (s, i) => (
        a(),
        c(
          'div',
          {
            class: T([
              'VPContent',
              { 'has-sidebar': r(n), 'is-home': r(t).layout === 'home' }
            ]),
            id: 'VPContent'
          },
          [
            r(e).isNotFound
              ? l(s.$slots, 'not-found', { key: 0 }, () => [m(ft)], !0)
              : r(t).layout === 'page'
                ? (a(),
                  $(
                    ls,
                    { key: 1 },
                    {
                      'page-top': v(() => [
                        l(s.$slots, 'page-top', {}, void 0, !0)
                      ]),
                      'page-bottom': v(() => [
                        l(s.$slots, 'page-bottom', {}, void 0, !0)
                      ]),
                      _: 3
                    }
                  ))
                : r(t).layout === 'home'
                  ? (a(),
                    $(
                      ns,
                      { key: 2 },
                      {
                        'home-hero-before': v(() => [
                          l(s.$slots, 'home-hero-before', {}, void 0, !0)
                        ]),
                        'home-hero-info-before': v(() => [
                          l(s.$slots, 'home-hero-info-before', {}, void 0, !0)
                        ]),
                        'home-hero-info': v(() => [
                          l(s.$slots, 'home-hero-info', {}, void 0, !0)
                        ]),
                        'home-hero-info-after': v(() => [
                          l(s.$slots, 'home-hero-info-after', {}, void 0, !0)
                        ]),
                        'home-hero-actions-after': v(() => [
                          l(s.$slots, 'home-hero-actions-after', {}, void 0, !0)
                        ]),
                        'home-hero-image': v(() => [
                          l(s.$slots, 'home-hero-image', {}, void 0, !0)
                        ]),
                        'home-hero-after': v(() => [
                          l(s.$slots, 'home-hero-after', {}, void 0, !0)
                        ]),
                        'home-features-before': v(() => [
                          l(s.$slots, 'home-features-before', {}, void 0, !0)
                        ]),
                        'home-features-after': v(() => [
                          l(s.$slots, 'home-features-after', {}, void 0, !0)
                        ]),
                        _: 3
                      }
                    ))
                  : r(t).layout && r(t).layout !== 'doc'
                    ? (a(), $(K(r(t).layout), { key: 3 }))
                    : (a(),
                      $(
                        ko,
                        { key: 4 },
                        {
                          'doc-top': v(() => [
                            l(s.$slots, 'doc-top', {}, void 0, !0)
                          ]),
                          'doc-bottom': v(() => [
                            l(s.$slots, 'doc-bottom', {}, void 0, !0)
                          ]),
                          'doc-footer-before': v(() => [
                            l(s.$slots, 'doc-footer-before', {}, void 0, !0)
                          ]),
                          'doc-before': v(() => [
                            l(s.$slots, 'doc-before', {}, void 0, !0)
                          ]),
                          'doc-after': v(() => [
                            l(s.$slots, 'doc-after', {}, void 0, !0)
                          ]),
                          'aside-top': v(() => [
                            l(s.$slots, 'aside-top', {}, void 0, !0)
                          ]),
                          'aside-outline-before': v(() => [
                            l(s.$slots, 'aside-outline-before', {}, void 0, !0)
                          ]),
                          'aside-outline-after': v(() => [
                            l(s.$slots, 'aside-outline-after', {}, void 0, !0)
                          ]),
                          'aside-ads-before': v(() => [
                            l(s.$slots, 'aside-ads-before', {}, void 0, !0)
                          ]),
                          'aside-ads-after': v(() => [
                            l(s.$slots, 'aside-ads-after', {}, void 0, !0)
                          ]),
                          'aside-bottom': v(() => [
                            l(s.$slots, 'aside-bottom', {}, void 0, !0)
                          ]),
                          _: 3
                        }
                      ))
          ],
          2
        )
      )
    }
  }),
  us = k(cs, [['__scopeId', 'data-v-6ddd9cad']]),
  ds = { class: 'container' },
  vs = ['innerHTML'],
  ps = ['innerHTML'],
  hs = _({
    __name: 'VPFooter',
    setup(o) {
      const { theme: e, frontmatter: t } = V(),
        { hasSidebar: n } = O()
      return (s, i) =>
        r(e).footer && r(t).footer !== !1
          ? (a(),
            c(
              'footer',
              { key: 0, class: T(['VPFooter', { 'has-sidebar': r(n) }]) },
              [
                p('div', ds, [
                  r(e).footer.message
                    ? (a(),
                      c(
                        'p',
                        {
                          key: 0,
                          class: 'message',
                          innerHTML: r(e).footer.message
                        },
                        null,
                        8,
                        vs
                      ))
                    : f('', !0),
                  r(e).footer.copyright
                    ? (a(),
                      c(
                        'p',
                        {
                          key: 1,
                          class: 'copyright',
                          innerHTML: r(e).footer.copyright
                        },
                        null,
                        8,
                        ps
                      ))
                    : f('', !0)
                ])
              ],
              2
            ))
          : f('', !0)
    }
  }),
  fs = k(hs, [['__scopeId', 'data-v-c46e32ee']])
function Ae() {
  const { theme: o, frontmatter: e } = V(),
    t = Pe([]),
    n = b(() => t.value.length > 0)
  return (
    ee(() => {
      t.value = _e(e.value.outline ?? o.value.outline)
    }),
    { headers: t, hasLocalNav: n }
  )
}
const _s = (o) => (C('data-v-8512aa94'), (o = o()), H(), o),
  ms = _s(() => p('span', { class: 'vpi-chevron-right icon' }, null, -1)),
  ks = { class: 'header' },
  $s = { class: 'outline' },
  bs = _({
    __name: 'VPLocalNavOutlineDropdown',
    props: { headers: {}, navHeight: {} },
    setup(o) {
      const e = o,
        { theme: t } = V(),
        n = S(!1),
        s = S(0),
        i = S(),
        u = S()
      Ke(i, () => {
        n.value = !1
      }),
        Re('Escape', () => {
          n.value = !1
        }),
        ee(() => {
          n.value = !1
        })
      function h() {
        ;(n.value = !n.value),
          (s.value =
            window.innerHeight + Math.min(window.scrollY - e.navHeight, 0))
      }
      function d(y) {
        y.target.classList.contains('outline-link') &&
          (u.value && (u.value.style.transition = 'none'),
          Je(() => {
            n.value = !1
          }))
      }
      function g() {
        ;(n.value = !1),
          window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
      }
      return (y, P) => (
        a(),
        c(
          'div',
          {
            class: 'VPLocalNavOutlineDropdown',
            style: Le({ '--vp-vh': s.value + 'px' }),
            ref_key: 'main',
            ref: i
          },
          [
            y.headers.length > 0
              ? (a(),
                c(
                  'button',
                  { key: 0, onClick: h, class: T({ open: n.value }) },
                  [F(L(r(Ne)(r(t))) + ' ', 1), ms],
                  2
                ))
              : (a(),
                c(
                  'button',
                  { key: 1, onClick: g },
                  L(r(t).returnToTopLabel || 'Return to top'),
                  1
                )),
            m(
              de,
              { name: 'flyout' },
              {
                default: v(() => [
                  n.value
                    ? (a(),
                      c(
                        'div',
                        {
                          key: 0,
                          ref_key: 'items',
                          ref: u,
                          class: 'items',
                          onClick: d
                        },
                        [
                          p('div', ks, [
                            p(
                              'a',
                              { class: 'top-link', href: '#', onClick: g },
                              L(r(t).returnToTopLabel || 'Return to top'),
                              1
                            )
                          ]),
                          p('div', $s, [
                            m(Me, { headers: y.headers }, null, 8, ['headers'])
                          ])
                        ],
                        512
                      ))
                    : f('', !0)
                ]),
                _: 1
              }
            )
          ],
          4
        )
      )
    }
  }),
  gs = k(bs, [['__scopeId', 'data-v-8512aa94']]),
  ys = (o) => (C('data-v-0161dced'), (o = o()), H(), o),
  Ps = { class: 'container' },
  Vs = ['aria-expanded'],
  Ls = ys(() => p('span', { class: 'vpi-align-left menu-icon' }, null, -1)),
  Ss = { class: 'menu-text' },
  ws = _({
    __name: 'VPLocalNav',
    props: { open: { type: Boolean } },
    emits: ['open-menu'],
    setup(o) {
      const { theme: e, frontmatter: t } = V(),
        { hasSidebar: n } = O(),
        { headers: s } = Ae(),
        { y: i } = Se(),
        u = S(0)
      j(() => {
        u.value = parseInt(
          getComputedStyle(document.documentElement).getPropertyValue(
            '--vp-nav-height'
          )
        )
      }),
        ee(() => {
          s.value = _e(t.value.outline ?? e.value.outline)
        })
      const h = b(() => s.value.length === 0),
        d = b(() => h.value && !n.value),
        g = b(() => ({
          VPLocalNav: !0,
          'has-sidebar': n.value,
          empty: h.value,
          fixed: d.value
        }))
      return (y, P) =>
        r(t).layout !== 'home' && (!d.value || r(i) >= u.value)
          ? (a(),
            c(
              'div',
              { key: 0, class: T(g.value) },
              [
                p('div', Ps, [
                  r(n)
                    ? (a(),
                      c(
                        'button',
                        {
                          key: 0,
                          class: 'menu',
                          'aria-expanded': y.open,
                          'aria-controls': 'VPSidebarNav',
                          onClick: P[0] || (P[0] = (I) => y.$emit('open-menu'))
                        },
                        [
                          Ls,
                          p('span', Ss, L(r(e).sidebarMenuLabel || 'Menu'), 1)
                        ],
                        8,
                        Vs
                      ))
                    : f('', !0),
                  m(gs, { headers: r(s), navHeight: u.value }, null, 8, [
                    'headers',
                    'navHeight'
                  ])
                ])
              ],
              2
            ))
          : f('', !0)
    }
  }),
  Is = k(ws, [['__scopeId', 'data-v-0161dced']])
function Ts() {
  const o = S(!1)
  function e() {
    ;(o.value = !0), window.addEventListener('resize', s)
  }
  function t() {
    ;(o.value = !1), window.removeEventListener('resize', s)
  }
  function n() {
    o.value ? t() : e()
  }
  function s() {
    window.outerWidth >= 768 && t()
  }
  const i = te()
  return (
    z(() => i.path, t),
    { isScreenOpen: o, openScreen: e, closeScreen: t, toggleScreen: n }
  )
}
const Ns = {},
  Ms = { class: 'VPSwitch', type: 'button', role: 'switch' },
  As = { class: 'check' },
  Bs = { key: 0, class: 'icon' }
function Cs(o, e) {
  return (
    a(),
    c('button', Ms, [
      p('span', As, [
        o.$slots.default
          ? (a(), c('span', Bs, [l(o.$slots, 'default', {}, void 0, !0)]))
          : f('', !0)
      ])
    ])
  )
}
const Hs = k(Ns, [
    ['render', Cs],
    ['__scopeId', 'data-v-e4367a8b']
  ]),
  Be = (o) => (C('data-v-5812f0ae'), (o = o()), H(), o),
  Es = Be(() => p('span', { class: 'vpi-sun sun' }, null, -1)),
  Fs = Be(() => p('span', { class: 'vpi-moon moon' }, null, -1)),
  Ds = _({
    __name: 'VPSwitchAppearance',
    setup(o) {
      const { isDark: e, theme: t } = V(),
        n = oe('toggle-appearance', () => {
          e.value = !e.value
        }),
        s = b(() =>
          e.value
            ? t.value.lightModeSwitchTitle || 'Switch to light theme'
            : t.value.darkModeSwitchTitle || 'Switch to dark theme'
        )
      return (i, u) => (
        a(),
        $(
          Hs,
          {
            title: s.value,
            class: 'VPSwitchAppearance',
            'aria-checked': r(e),
            onClick: r(n)
          },
          { default: v(() => [Es, Fs]), _: 1 },
          8,
          ['title', 'aria-checked', 'onClick']
        )
      )
    }
  }),
  me = k(Ds, [['__scopeId', 'data-v-5812f0ae']]),
  Os = { key: 0, class: 'VPNavBarAppearance' },
  Us = _({
    __name: 'VPNavBarAppearance',
    setup(o) {
      const { site: e } = V()
      return (t, n) =>
        r(e).appearance && r(e).appearance !== 'force-dark'
          ? (a(), c('div', Os, [m(me)]))
          : f('', !0)
    }
  }),
  Gs = k(Us, [['__scopeId', 'data-v-6ec974a7']]),
  ke = S()
let Ce = !1,
  re = 0
function js(o) {
  const e = S(!1)
  if (R) {
    !Ce && zs(), re++
    const t = z(ke, (n) => {
      var s, i, u
      n === o.el.value || ((s = o.el.value) != null && s.contains(n))
        ? ((e.value = !0), (i = o.onFocus) == null || i.call(o))
        : ((e.value = !1), (u = o.onBlur) == null || u.call(o))
    })
    pe(() => {
      t(), re--, re || qs()
    })
  }
  return Ye(e)
}
function zs() {
  document.addEventListener('focusin', He),
    (Ce = !0),
    (ke.value = document.activeElement)
}
function qs() {
  document.removeEventListener('focusin', He)
}
function He() {
  ke.value = document.activeElement
}
const Ws = { class: 'VPMenuLink' },
  Ks = _({
    __name: 'VPMenuLink',
    props: { item: {} },
    setup(o) {
      const { page: e } = V()
      return (t, n) => (
        a(),
        c('div', Ws, [
          m(
            D,
            {
              class: T({
                active: r(G)(
                  r(e).relativePath,
                  t.item.activeMatch || t.item.link,
                  !!t.item.activeMatch
                )
              }),
              href: t.item.link,
              target: t.item.target,
              rel: t.item.rel
            },
            { default: v(() => [F(L(t.item.text), 1)]), _: 1 },
            8,
            ['class', 'href', 'target', 'rel']
          )
        ])
      )
    }
  }),
  se = k(Ks, [['__scopeId', 'data-v-68b23d91']]),
  Rs = { class: 'VPMenuGroup' },
  Js = { key: 0, class: 'title' },
  Ys = _({
    __name: 'VPMenuGroup',
    props: { text: {}, items: {} },
    setup(o) {
      return (e, t) => (
        a(),
        c('div', Rs, [
          e.text ? (a(), c('p', Js, L(e.text), 1)) : f('', !0),
          (a(!0),
          c(
            M,
            null,
            E(
              e.items,
              (n) => (
                a(),
                c(
                  M,
                  null,
                  [
                    'link' in n
                      ? (a(), $(se, { key: 0, item: n }, null, 8, ['item']))
                      : f('', !0)
                  ],
                  64
                )
              )
            ),
            256
          ))
        ])
      )
    }
  }),
  Qs = k(Ys, [['__scopeId', 'data-v-9aadf9bc']]),
  Xs = { class: 'VPMenu' },
  Zs = { key: 0, class: 'items' },
  xs = _({
    __name: 'VPMenu',
    props: { items: {} },
    setup(o) {
      return (e, t) => (
        a(),
        c('div', Xs, [
          e.items
            ? (a(),
              c('div', Zs, [
                (a(!0),
                c(
                  M,
                  null,
                  E(
                    e.items,
                    (n) => (
                      a(),
                      c(
                        M,
                        { key: n.text },
                        [
                          'link' in n
                            ? (a(),
                              $(se, { key: 0, item: n }, null, 8, ['item']))
                            : (a(),
                              $(
                                Qs,
                                { key: 1, text: n.text, items: n.items },
                                null,
                                8,
                                ['text', 'items']
                              ))
                        ],
                        64
                      )
                    )
                  ),
                  128
                ))
              ]))
            : f('', !0),
          l(e.$slots, 'default', {}, void 0, !0)
        ])
      )
    }
  }),
  en = k(xs, [['__scopeId', 'data-v-7fe84da0']]),
  tn = (o) => (C('data-v-947a1321'), (o = o()), H(), o),
  on = ['aria-expanded', 'aria-label'],
  sn = { key: 0, class: 'text' },
  nn = ['innerHTML'],
  an = tn(() => p('span', { class: 'vpi-chevron-down text-icon' }, null, -1)),
  rn = { key: 1, class: 'vpi-more-horizontal icon' },
  ln = { class: 'menu' },
  cn = _({
    __name: 'VPFlyout',
    props: { icon: {}, button: {}, label: {}, items: {} },
    setup(o) {
      const e = S(!1),
        t = S()
      js({ el: t, onBlur: n })
      function n() {
        e.value = !1
      }
      return (s, i) => (
        a(),
        c(
          'div',
          {
            class: 'VPFlyout',
            ref_key: 'el',
            ref: t,
            onMouseenter: i[1] || (i[1] = (u) => (e.value = !0)),
            onMouseleave: i[2] || (i[2] = (u) => (e.value = !1))
          },
          [
            p(
              'button',
              {
                type: 'button',
                class: 'button',
                'aria-haspopup': 'true',
                'aria-expanded': e.value,
                'aria-label': s.label,
                onClick: i[0] || (i[0] = (u) => (e.value = !e.value))
              },
              [
                s.button || s.icon
                  ? (a(),
                    c('span', sn, [
                      s.icon
                        ? (a(),
                          c(
                            'span',
                            { key: 0, class: T([s.icon, 'option-icon']) },
                            null,
                            2
                          ))
                        : f('', !0),
                      s.button
                        ? (a(),
                          c(
                            'span',
                            { key: 1, innerHTML: s.button },
                            null,
                            8,
                            nn
                          ))
                        : f('', !0),
                      an
                    ]))
                  : (a(), c('span', rn))
              ],
              8,
              on
            ),
            p('div', ln, [
              m(
                en,
                { items: s.items },
                {
                  default: v(() => [l(s.$slots, 'default', {}, void 0, !0)]),
                  _: 3
                },
                8,
                ['items']
              )
            ])
          ],
          544
        )
      )
    }
  }),
  $e = k(cn, [['__scopeId', 'data-v-947a1321']]),
  un = ['href', 'aria-label', 'innerHTML'],
  dn = _({
    __name: 'VPSocialLink',
    props: { icon: {}, link: {}, ariaLabel: {} },
    setup(o) {
      const e = o,
        t = b(() =>
          typeof e.icon == 'object'
            ? e.icon.svg
            : `<span class="vpi-social-${e.icon}" />`
        )
      return (n, s) => (
        a(),
        c(
          'a',
          {
            class: 'VPSocialLink no-icon',
            href: n.link,
            'aria-label':
              n.ariaLabel ?? (typeof n.icon == 'string' ? n.icon : ''),
            target: '_blank',
            rel: 'noopener',
            innerHTML: t.value
          },
          null,
          8,
          un
        )
      )
    }
  }),
  vn = k(dn, [['__scopeId', 'data-v-ec01c528']]),
  pn = { class: 'VPSocialLinks' },
  hn = _({
    __name: 'VPSocialLinks',
    props: { links: {} },
    setup(o) {
      return (e, t) => (
        a(),
        c('div', pn, [
          (a(!0),
          c(
            M,
            null,
            E(
              e.links,
              ({ link: n, icon: s, ariaLabel: i }) => (
                a(),
                $(vn, { key: n, icon: s, link: n, ariaLabel: i }, null, 8, [
                  'icon',
                  'link',
                  'ariaLabel'
                ])
              )
            ),
            128
          ))
        ])
      )
    }
  }),
  be = k(hn, [['__scopeId', 'data-v-ccefc130']]),
  fn = { key: 0, class: 'group translations' },
  _n = { class: 'trans-title' },
  mn = { key: 1, class: 'group' },
  kn = { class: 'item appearance' },
  $n = { class: 'label' },
  bn = { class: 'appearance-action' },
  gn = { key: 2, class: 'group' },
  yn = { class: 'item social-links' },
  Pn = _({
    __name: 'VPNavBarExtra',
    setup(o) {
      const { site: e, theme: t } = V(),
        { localeLinks: n, currentLang: s } = J({ correspondingLink: !0 }),
        i = b(
          () =>
            (n.value.length && s.value.label) ||
            e.value.appearance ||
            t.value.socialLinks
        )
      return (u, h) =>
        i.value
          ? (a(),
            $(
              $e,
              { key: 0, class: 'VPNavBarExtra', label: 'extra navigation' },
              {
                default: v(() => [
                  r(n).length && r(s).label
                    ? (a(),
                      c('div', fn, [
                        p('p', _n, L(r(s).label), 1),
                        (a(!0),
                        c(
                          M,
                          null,
                          E(
                            r(n),
                            (d) => (
                              a(),
                              $(se, { key: d.link, item: d }, null, 8, ['item'])
                            )
                          ),
                          128
                        ))
                      ]))
                    : f('', !0),
                  r(e).appearance && r(e).appearance !== 'force-dark'
                    ? (a(),
                      c('div', mn, [
                        p('div', kn, [
                          p(
                            'p',
                            $n,
                            L(r(t).darkModeSwitchLabel || 'Appearance'),
                            1
                          ),
                          p('div', bn, [m(me)])
                        ])
                      ]))
                    : f('', !0),
                  r(t).socialLinks
                    ? (a(),
                      c('div', gn, [
                        p('div', yn, [
                          m(
                            be,
                            {
                              class: 'social-links-list',
                              links: r(t).socialLinks
                            },
                            null,
                            8,
                            ['links']
                          )
                        ])
                      ]))
                    : f('', !0)
                ]),
                _: 1
              }
            ))
          : f('', !0)
    }
  }),
  Vn = k(Pn, [['__scopeId', 'data-v-32102689']]),
  Ln = (o) => (C('data-v-4fc59892'), (o = o()), H(), o),
  Sn = ['aria-expanded'],
  wn = Ln(() =>
    p(
      'span',
      { class: 'container' },
      [
        p('span', { class: 'top' }),
        p('span', { class: 'middle' }),
        p('span', { class: 'bottom' })
      ],
      -1
    )
  ),
  In = [wn],
  Tn = _({
    __name: 'VPNavBarHamburger',
    props: { active: { type: Boolean } },
    emits: ['click'],
    setup(o) {
      return (e, t) => (
        a(),
        c(
          'button',
          {
            type: 'button',
            class: T(['VPNavBarHamburger', { active: e.active }]),
            'aria-label': 'mobile navigation',
            'aria-expanded': e.active,
            'aria-controls': 'VPNavScreen',
            onClick: t[0] || (t[0] = (n) => e.$emit('click'))
          },
          In,
          10,
          Sn
        )
      )
    }
  }),
  Nn = k(Tn, [['__scopeId', 'data-v-4fc59892']]),
  Mn = ['innerHTML'],
  An = _({
    __name: 'VPNavBarMenuLink',
    props: { item: {} },
    setup(o) {
      const { page: e } = V()
      return (t, n) => (
        a(),
        $(
          D,
          {
            class: T({
              VPNavBarMenuLink: !0,
              active: r(G)(
                r(e).relativePath,
                t.item.activeMatch || t.item.link,
                !!t.item.activeMatch
              )
            }),
            href: t.item.link,
            target: t.item.target,
            rel: t.item.rel,
            tabindex: '0'
          },
          {
            default: v(() => [
              p('span', { innerHTML: t.item.text }, null, 8, Mn)
            ]),
            _: 1
          },
          8,
          ['class', 'href', 'target', 'rel']
        )
      )
    }
  }),
  Bn = k(An, [['__scopeId', 'data-v-d67861b1']]),
  Cn = _({
    __name: 'VPNavBarMenuGroup',
    props: { item: {} },
    setup(o) {
      const e = o,
        { page: t } = V(),
        n = (i) =>
          'link' in i
            ? G(t.value.relativePath, i.link, !!e.item.activeMatch)
            : i.items.some(n),
        s = b(() => n(e.item))
      return (i, u) => (
        a(),
        $(
          $e,
          {
            class: T({
              VPNavBarMenuGroup: !0,
              active:
                r(G)(
                  r(t).relativePath,
                  i.item.activeMatch,
                  !!i.item.activeMatch
                ) || s.value
            }),
            button: i.item.text,
            items: i.item.items
          },
          null,
          8,
          ['class', 'button', 'items']
        )
      )
    }
  }),
  Hn = (o) => (C('data-v-b470d34a'), (o = o()), H(), o),
  En = {
    key: 0,
    'aria-labelledby': 'main-nav-aria-label',
    class: 'VPNavBarMenu'
  },
  Fn = Hn(() =>
    p(
      'span',
      { id: 'main-nav-aria-label', class: 'visually-hidden' },
      'Main Navigation',
      -1
    )
  ),
  Dn = _({
    __name: 'VPNavBarMenu',
    setup(o) {
      const { theme: e } = V()
      return (t, n) =>
        r(e).nav
          ? (a(),
            c('nav', En, [
              Fn,
              (a(!0),
              c(
                M,
                null,
                E(
                  r(e).nav,
                  (s) => (
                    a(),
                    c(
                      M,
                      { key: s.text },
                      [
                        'link' in s
                          ? (a(), $(Bn, { key: 0, item: s }, null, 8, ['item']))
                          : (a(), $(Cn, { key: 1, item: s }, null, 8, ['item']))
                      ],
                      64
                    )
                  )
                ),
                128
              ))
            ]))
          : f('', !0)
    }
  }),
  On = k(Dn, [['__scopeId', 'data-v-b470d34a']])
function Un(o) {
  const { localeIndex: e, theme: t } = V()
  function n(s) {
    var A, B, w
    const i = s.split('.'),
      u = (A = t.value.search) == null ? void 0 : A.options,
      h = u && typeof u == 'object',
      d =
        (h &&
          ((w = (B = u.locales) == null ? void 0 : B[e.value]) == null
            ? void 0
            : w.translations)) ||
        null,
      g = (h && u.translations) || null
    let y = d,
      P = g,
      I = o
    const N = i.pop()
    for (const Y of i) {
      let U = null
      const W = I == null ? void 0 : I[Y]
      W && (U = I = W)
      const ne = P == null ? void 0 : P[Y]
      ne && (U = P = ne)
      const ae = y == null ? void 0 : y[Y]
      ae && (U = y = ae), W || (I = U), ne || (P = U), ae || (y = U)
    }
    return (
      (y == null ? void 0 : y[N]) ??
      (P == null ? void 0 : P[N]) ??
      (I == null ? void 0 : I[N]) ??
      ''
    )
  }
  return n
}
const Gn = ['aria-label'],
  jn = { class: 'DocSearch-Button-Container' },
  zn = p('span', { class: 'vp-icon DocSearch-Search-Icon' }, null, -1),
  qn = { class: 'DocSearch-Button-Placeholder' },
  Wn = p(
    'span',
    { class: 'DocSearch-Button-Keys' },
    [
      p('kbd', { class: 'DocSearch-Button-Key' }),
      p('kbd', { class: 'DocSearch-Button-Key' }, 'K')
    ],
    -1
  ),
  ge = _({
    __name: 'VPNavBarSearchButton',
    setup(o) {
      const t = Un({
        button: { buttonText: 'Search', buttonAriaLabel: 'Search' }
      })
      return (n, s) => (
        a(),
        c(
          'button',
          {
            type: 'button',
            class: 'DocSearch DocSearch-Button',
            'aria-label': r(t)('button.buttonAriaLabel')
          },
          [
            p('span', jn, [zn, p('span', qn, L(r(t)('button.buttonText')), 1)]),
            Wn
          ],
          8,
          Gn
        )
      )
    }
  }),
  Kn = { class: 'VPNavBarSearch' },
  Rn = { id: 'local-search' },
  Jn = { key: 1, id: 'docsearch' },
  Yn = _({
    __name: 'VPNavBarSearch',
    setup(o) {
      const e = () => null,
        t = () => null,
        { theme: n } = V(),
        s = S(!1),
        i = S(!1)
      j(() => {})
      function u() {
        s.value || ((s.value = !0), setTimeout(h, 16))
      }
      function h() {
        const y = new Event('keydown')
        ;(y.key = 'k'),
          (y.metaKey = !0),
          window.dispatchEvent(y),
          setTimeout(() => {
            document.querySelector('.DocSearch-Modal') || h()
          }, 16)
      }
      const d = S(!1),
        g = ''
      return (y, P) => {
        var I
        return (
          a(),
          c('div', Kn, [
            r(g) === 'local'
              ? (a(),
                c(
                  M,
                  { key: 0 },
                  [
                    d.value
                      ? (a(),
                        $(r(e), {
                          key: 0,
                          onClose: P[0] || (P[0] = (N) => (d.value = !1))
                        }))
                      : f('', !0),
                    p('div', Rn, [
                      m(ge, { onClick: P[1] || (P[1] = (N) => (d.value = !0)) })
                    ])
                  ],
                  64
                ))
              : r(g) === 'algolia'
                ? (a(),
                  c(
                    M,
                    { key: 1 },
                    [
                      s.value
                        ? (a(),
                          $(
                            r(t),
                            {
                              key: 0,
                              algolia:
                                ((I = r(n).search) == null
                                  ? void 0
                                  : I.options) ?? r(n).algolia,
                              onVnodeBeforeMount:
                                P[2] || (P[2] = (N) => (i.value = !0))
                            },
                            null,
                            8,
                            ['algolia']
                          ))
                        : f('', !0),
                      i.value
                        ? f('', !0)
                        : (a(), c('div', Jn, [m(ge, { onClick: u })]))
                    ],
                    64
                  ))
                : f('', !0)
          ])
        )
      }
    }
  }),
  Qn = _({
    __name: 'VPNavBarSocialLinks',
    setup(o) {
      const { theme: e } = V()
      return (t, n) =>
        r(e).socialLinks
          ? (a(),
            $(
              be,
              { key: 0, class: 'VPNavBarSocialLinks', links: r(e).socialLinks },
              null,
              8,
              ['links']
            ))
          : f('', !0)
    }
  }),
  Xn = k(Qn, [['__scopeId', 'data-v-affd6941']]),
  Zn = ['href', 'rel', 'target'],
  xn = { key: 1 },
  ea = { key: 2 },
  ta = _({
    __name: 'VPNavBarTitle',
    setup(o) {
      const { site: e, theme: t } = V(),
        { hasSidebar: n } = O(),
        { currentLang: s } = J(),
        i = b(() => {
          var d
          return typeof t.value.logoLink == 'string'
            ? t.value.logoLink
            : (d = t.value.logoLink) == null
              ? void 0
              : d.link
        }),
        u = b(() => {
          var d
          return typeof t.value.logoLink == 'string' ||
            (d = t.value.logoLink) == null
            ? void 0
            : d.rel
        }),
        h = b(() => {
          var d
          return typeof t.value.logoLink == 'string' ||
            (d = t.value.logoLink) == null
            ? void 0
            : d.target
        })
      return (d, g) => (
        a(),
        c(
          'div',
          { class: T(['VPNavBarTitle', { 'has-sidebar': r(n) }]) },
          [
            p(
              'a',
              {
                class: 'title',
                href: i.value ?? r(he)(r(s).link),
                rel: u.value,
                target: h.value
              },
              [
                l(d.$slots, 'nav-bar-title-before', {}, void 0, !0),
                r(t).logo
                  ? (a(),
                    $(Z, { key: 0, class: 'logo', image: r(t).logo }, null, 8, [
                      'image'
                    ]))
                  : f('', !0),
                r(t).siteTitle
                  ? (a(), c('span', xn, L(r(t).siteTitle), 1))
                  : r(t).siteTitle === void 0
                    ? (a(), c('span', ea, L(r(e).title), 1))
                    : f('', !0),
                l(d.$slots, 'nav-bar-title-after', {}, void 0, !0)
              ],
              8,
              Zn
            )
          ],
          2
        )
      )
    }
  }),
  oa = k(ta, [['__scopeId', 'data-v-0210455f']]),
  sa = { class: 'items' },
  na = { class: 'title' },
  aa = _({
    __name: 'VPNavBarTranslations',
    setup(o) {
      const { theme: e } = V(),
        { localeLinks: t, currentLang: n } = J({ correspondingLink: !0 })
      return (s, i) =>
        r(t).length && r(n).label
          ? (a(),
            $(
              $e,
              {
                key: 0,
                class: 'VPNavBarTranslations',
                icon: 'vpi-languages',
                label: r(e).langMenuLabel || 'Change language'
              },
              {
                default: v(() => [
                  p('div', sa, [
                    p('p', na, L(r(n).label), 1),
                    (a(!0),
                    c(
                      M,
                      null,
                      E(
                        r(t),
                        (u) => (
                          a(),
                          $(se, { key: u.link, item: u }, null, 8, ['item'])
                        )
                      ),
                      128
                    ))
                  ])
                ]),
                _: 1
              },
              8,
              ['label']
            ))
          : f('', !0)
    }
  }),
  ra = k(aa, [['__scopeId', 'data-v-822a8e14']]),
  ia = (o) => (C('data-v-239f150d'), (o = o()), H(), o),
  la = { class: 'wrapper' },
  ca = { class: 'container' },
  ua = { class: 'title' },
  da = { class: 'content' },
  va = { class: 'content-body' },
  pa = ia(() =>
    p('div', { class: 'divider' }, [p('div', { class: 'divider-line' })], -1)
  ),
  ha = _({
    __name: 'VPNavBar',
    props: { isScreenOpen: { type: Boolean } },
    emits: ['toggle-screen'],
    setup(o) {
      const { y: e } = Se(),
        { hasSidebar: t } = O(),
        { hasLocalNav: n } = Ae(),
        { frontmatter: s } = V(),
        i = S({})
      return (
        ye(() => {
          i.value = {
            'has-sidebar': t.value,
            'has-local-nav': n.value,
            top: s.value.layout === 'home' && e.value === 0
          }
        }),
        (u, h) => (
          a(),
          c(
            'div',
            { class: T(['VPNavBar', i.value]) },
            [
              p('div', la, [
                p('div', ca, [
                  p('div', ua, [
                    m(oa, null, {
                      'nav-bar-title-before': v(() => [
                        l(u.$slots, 'nav-bar-title-before', {}, void 0, !0)
                      ]),
                      'nav-bar-title-after': v(() => [
                        l(u.$slots, 'nav-bar-title-after', {}, void 0, !0)
                      ]),
                      _: 3
                    })
                  ]),
                  p('div', da, [
                    p('div', va, [
                      l(u.$slots, 'nav-bar-content-before', {}, void 0, !0),
                      m(Yn, { class: 'search' }),
                      m(On, { class: 'menu' }),
                      m(ra, { class: 'translations' }),
                      m(Gs, { class: 'appearance' }),
                      m(Xn, { class: 'social-links' }),
                      m(Vn, { class: 'extra' }),
                      l(u.$slots, 'nav-bar-content-after', {}, void 0, !0),
                      m(
                        Nn,
                        {
                          class: 'hamburger',
                          active: u.isScreenOpen,
                          onClick:
                            h[0] || (h[0] = (d) => u.$emit('toggle-screen'))
                        },
                        null,
                        8,
                        ['active']
                      )
                    ])
                  ])
                ])
              ]),
              pa
            ],
            2
          )
        )
      )
    }
  }),
  fa = k(ha, [['__scopeId', 'data-v-239f150d']]),
  _a = { key: 0, class: 'VPNavScreenAppearance' },
  ma = { class: 'text' },
  ka = _({
    __name: 'VPNavScreenAppearance',
    setup(o) {
      const { site: e, theme: t } = V()
      return (n, s) =>
        r(e).appearance && r(e).appearance !== 'force-dark'
          ? (a(),
            c('div', _a, [
              p('p', ma, L(r(t).darkModeSwitchLabel || 'Appearance'), 1),
              m(me)
            ]))
          : f('', !0)
    }
  }),
  $a = k(ka, [['__scopeId', 'data-v-f620d948']]),
  ba = _({
    __name: 'VPNavScreenMenuLink',
    props: { item: {} },
    setup(o) {
      const e = oe('close-screen')
      return (t, n) => (
        a(),
        $(
          D,
          {
            class: 'VPNavScreenMenuLink',
            href: t.item.link,
            target: t.item.target,
            rel: t.item.rel,
            onClick: r(e)
          },
          { default: v(() => [F(L(t.item.text), 1)]), _: 1 },
          8,
          ['href', 'target', 'rel', 'onClick']
        )
      )
    }
  }),
  ga = k(ba, [['__scopeId', 'data-v-aba5031a']]),
  ya = _({
    __name: 'VPNavScreenMenuGroupLink',
    props: { item: {} },
    setup(o) {
      const e = oe('close-screen')
      return (t, n) => (
        a(),
        $(
          D,
          {
            class: 'VPNavScreenMenuGroupLink',
            href: t.item.link,
            target: t.item.target,
            rel: t.item.rel,
            onClick: r(e)
          },
          { default: v(() => [F(L(t.item.text), 1)]), _: 1 },
          8,
          ['href', 'target', 'rel', 'onClick']
        )
      )
    }
  }),
  Ee = k(ya, [['__scopeId', 'data-v-e6833b5c']]),
  Pa = { class: 'VPNavScreenMenuGroupSection' },
  Va = { key: 0, class: 'title' },
  La = _({
    __name: 'VPNavScreenMenuGroupSection',
    props: { text: {}, items: {} },
    setup(o) {
      return (e, t) => (
        a(),
        c('div', Pa, [
          e.text ? (a(), c('p', Va, L(e.text), 1)) : f('', !0),
          (a(!0),
          c(
            M,
            null,
            E(
              e.items,
              (n) => (a(), $(Ee, { key: n.text, item: n }, null, 8, ['item']))
            ),
            128
          ))
        ])
      )
    }
  }),
  Sa = k(La, [['__scopeId', 'data-v-f5755b6a']]),
  wa = (o) => (C('data-v-ca32a14d'), (o = o()), H(), o),
  Ia = ['aria-controls', 'aria-expanded'],
  Ta = ['innerHTML'],
  Na = wa(() => p('span', { class: 'vpi-plus button-icon' }, null, -1)),
  Ma = ['id'],
  Aa = { key: 1, class: 'group' },
  Ba = _({
    __name: 'VPNavScreenMenuGroup',
    props: { text: {}, items: {} },
    setup(o) {
      const e = o,
        t = S(!1),
        n = b(() => `NavScreenGroup-${e.text.replace(' ', '-').toLowerCase()}`)
      function s() {
        t.value = !t.value
      }
      return (i, u) => (
        a(),
        c(
          'div',
          { class: T(['VPNavScreenMenuGroup', { open: t.value }]) },
          [
            p(
              'button',
              {
                class: 'button',
                'aria-controls': n.value,
                'aria-expanded': t.value,
                onClick: s
              },
              [
                p(
                  'span',
                  { class: 'button-text', innerHTML: i.text },
                  null,
                  8,
                  Ta
                ),
                Na
              ],
              8,
              Ia
            ),
            p(
              'div',
              { id: n.value, class: 'items' },
              [
                (a(!0),
                c(
                  M,
                  null,
                  E(
                    i.items,
                    (h) => (
                      a(),
                      c(
                        M,
                        { key: h.text },
                        [
                          'link' in h
                            ? (a(),
                              c('div', { key: h.text, class: 'item' }, [
                                m(Ee, { item: h }, null, 8, ['item'])
                              ]))
                            : (a(),
                              c('div', Aa, [
                                m(
                                  Sa,
                                  { text: h.text, items: h.items },
                                  null,
                                  8,
                                  ['text', 'items']
                                )
                              ]))
                        ],
                        64
                      )
                    )
                  ),
                  128
                ))
              ],
              8,
              Ma
            )
          ],
          2
        )
      )
    }
  }),
  Ca = k(Ba, [['__scopeId', 'data-v-ca32a14d']]),
  Ha = { key: 0, class: 'VPNavScreenMenu' },
  Ea = _({
    __name: 'VPNavScreenMenu',
    setup(o) {
      const { theme: e } = V()
      return (t, n) =>
        r(e).nav
          ? (a(),
            c('nav', Ha, [
              (a(!0),
              c(
                M,
                null,
                E(
                  r(e).nav,
                  (s) => (
                    a(),
                    c(
                      M,
                      { key: s.text },
                      [
                        'link' in s
                          ? (a(), $(ga, { key: 0, item: s }, null, 8, ['item']))
                          : (a(),
                            $(
                              Ca,
                              { key: 1, text: s.text || '', items: s.items },
                              null,
                              8,
                              ['text', 'items']
                            ))
                      ],
                      64
                    )
                  )
                ),
                128
              ))
            ]))
          : f('', !0)
    }
  }),
  Fa = _({
    __name: 'VPNavScreenSocialLinks',
    setup(o) {
      const { theme: e } = V()
      return (t, n) =>
        r(e).socialLinks
          ? (a(),
            $(
              be,
              {
                key: 0,
                class: 'VPNavScreenSocialLinks',
                links: r(e).socialLinks
              },
              null,
              8,
              ['links']
            ))
          : f('', !0)
    }
  }),
  Fe = (o) => (C('data-v-ef2da327'), (o = o()), H(), o),
  Da = Fe(() => p('span', { class: 'vpi-languages icon lang' }, null, -1)),
  Oa = Fe(() =>
    p('span', { class: 'vpi-chevron-down icon chevron' }, null, -1)
  ),
  Ua = { class: 'list' },
  Ga = _({
    __name: 'VPNavScreenTranslations',
    setup(o) {
      const { localeLinks: e, currentLang: t } = J({ correspondingLink: !0 }),
        n = S(!1)
      function s() {
        n.value = !n.value
      }
      return (i, u) =>
        r(e).length && r(t).label
          ? (a(),
            c(
              'div',
              {
                key: 0,
                class: T(['VPNavScreenTranslations', { open: n.value }])
              },
              [
                p('button', { class: 'title', onClick: s }, [
                  Da,
                  F(' ' + L(r(t).label) + ' ', 1),
                  Oa
                ]),
                p('ul', Ua, [
                  (a(!0),
                  c(
                    M,
                    null,
                    E(
                      r(e),
                      (h) => (
                        a(),
                        c('li', { key: h.link, class: 'item' }, [
                          m(
                            D,
                            { class: 'link', href: h.link },
                            { default: v(() => [F(L(h.text), 1)]), _: 2 },
                            1032,
                            ['href']
                          )
                        ])
                      )
                    ),
                    128
                  ))
                ])
              ],
              2
            ))
          : f('', !0)
    }
  }),
  ja = k(Ga, [['__scopeId', 'data-v-ef2da327']]),
  za = { class: 'container' },
  qa = _({
    __name: 'VPNavScreen',
    props: { open: { type: Boolean } },
    setup(o) {
      const e = S(null),
        t = we(R ? document.body : null)
      return (n, s) => (
        a(),
        $(
          de,
          {
            name: 'fade',
            onEnter: s[0] || (s[0] = (i) => (t.value = !0)),
            onAfterLeave: s[1] || (s[1] = (i) => (t.value = !1))
          },
          {
            default: v(() => [
              n.open
                ? (a(),
                  c(
                    'div',
                    {
                      key: 0,
                      class: 'VPNavScreen',
                      ref_key: 'screen',
                      ref: e,
                      id: 'VPNavScreen'
                    },
                    [
                      p('div', za, [
                        l(
                          n.$slots,
                          'nav-screen-content-before',
                          {},
                          void 0,
                          !0
                        ),
                        m(Ea, { class: 'menu' }),
                        m(ja, { class: 'translations' }),
                        m($a, { class: 'appearance' }),
                        m(Fa, { class: 'social-links' }),
                        l(n.$slots, 'nav-screen-content-after', {}, void 0, !0)
                      ])
                    ],
                    512
                  ))
                : f('', !0)
            ]),
            _: 3
          }
        )
      )
    }
  }),
  Wa = k(qa, [['__scopeId', 'data-v-ee89372d']]),
  Ka = { key: 0, class: 'VPNav' },
  Ra = _({
    __name: 'VPNav',
    setup(o) {
      const { isScreenOpen: e, closeScreen: t, toggleScreen: n } = Ts(),
        { frontmatter: s } = V(),
        i = b(() => s.value.navbar !== !1)
      return (
        Ie('close-screen', t),
        x(() => {
          R && document.documentElement.classList.toggle('hide-nav', !i.value)
        }),
        (u, h) =>
          i.value
            ? (a(),
              c('header', Ka, [
                m(
                  fa,
                  { 'is-screen-open': r(e), onToggleScreen: r(n) },
                  {
                    'nav-bar-title-before': v(() => [
                      l(u.$slots, 'nav-bar-title-before', {}, void 0, !0)
                    ]),
                    'nav-bar-title-after': v(() => [
                      l(u.$slots, 'nav-bar-title-after', {}, void 0, !0)
                    ]),
                    'nav-bar-content-before': v(() => [
                      l(u.$slots, 'nav-bar-content-before', {}, void 0, !0)
                    ]),
                    'nav-bar-content-after': v(() => [
                      l(u.$slots, 'nav-bar-content-after', {}, void 0, !0)
                    ]),
                    _: 3
                  },
                  8,
                  ['is-screen-open', 'onToggleScreen']
                ),
                m(
                  Wa,
                  { open: r(e) },
                  {
                    'nav-screen-content-before': v(() => [
                      l(u.$slots, 'nav-screen-content-before', {}, void 0, !0)
                    ]),
                    'nav-screen-content-after': v(() => [
                      l(u.$slots, 'nav-screen-content-after', {}, void 0, !0)
                    ]),
                    _: 3
                  },
                  8,
                  ['open']
                )
              ]))
            : f('', !0)
      )
    }
  }),
  Ja = k(Ra, [['__scopeId', 'data-v-2960f73c']]),
  De = (o) => (C('data-v-4d7ec7f6'), (o = o()), H(), o),
  Ya = ['role', 'tabindex'],
  Qa = De(() => p('div', { class: 'indicator' }, null, -1)),
  Xa = De(() => p('span', { class: 'vpi-chevron-right caret-icon' }, null, -1)),
  Za = [Xa],
  xa = { key: 1, class: 'items' },
  er = _({
    __name: 'VPSidebarItem',
    props: { item: {}, depth: {} },
    setup(o) {
      const e = o,
        {
          collapsed: t,
          collapsible: n,
          isLink: s,
          isActiveLink: i,
          hasActiveLink: u,
          hasChildren: h,
          toggle: d
        } = $t(b(() => e.item)),
        g = b(() => (h.value ? 'section' : 'div')),
        y = b(() => (s.value ? 'a' : 'div')),
        P = b(() =>
          h.value ? (e.depth + 2 === 7 ? 'p' : `h${e.depth + 2}`) : 'p'
        ),
        I = b(() => (s.value ? void 0 : 'button')),
        N = b(() => [
          [`level-${e.depth}`],
          { collapsible: n.value },
          { collapsed: t.value },
          { 'is-link': s.value },
          { 'is-active': i.value },
          { 'has-active': u.value }
        ])
      function A(w) {
        ;('key' in w && w.key !== 'Enter') || (!e.item.link && d())
      }
      function B() {
        e.item.link && d()
      }
      return (w, Y) => {
        const U = q('VPSidebarItem', !0)
        return (
          a(),
          $(
            K(g.value),
            { class: T(['VPSidebarItem', N.value]) },
            {
              default: v(() => [
                w.item.text
                  ? (a(),
                    c(
                      'div',
                      Q(
                        { key: 0, class: 'item', role: I.value },
                        Xe(w.item.items ? { click: A, keydown: A } : {}, !0),
                        { tabindex: w.item.items && 0 }
                      ),
                      [
                        Qa,
                        w.item.link
                          ? (a(),
                            $(
                              D,
                              {
                                key: 0,
                                tag: y.value,
                                class: 'link',
                                href: w.item.link,
                                rel: w.item.rel,
                                target: w.item.target
                              },
                              {
                                default: v(() => [
                                  (a(),
                                  $(
                                    K(P.value),
                                    { class: 'text', innerHTML: w.item.text },
                                    null,
                                    8,
                                    ['innerHTML']
                                  ))
                                ]),
                                _: 1
                              },
                              8,
                              ['tag', 'href', 'rel', 'target']
                            ))
                          : (a(),
                            $(
                              K(P.value),
                              { key: 1, class: 'text', innerHTML: w.item.text },
                              null,
                              8,
                              ['innerHTML']
                            )),
                        w.item.collapsed != null
                          ? (a(),
                            c(
                              'div',
                              {
                                key: 2,
                                class: 'caret',
                                role: 'button',
                                'aria-label': 'toggle section',
                                onClick: B,
                                onKeydown: Qe(B, ['enter']),
                                tabindex: '0'
                              },
                              Za,
                              32
                            ))
                          : f('', !0)
                      ],
                      16,
                      Ya
                    ))
                  : f('', !0),
                w.item.items && w.item.items.length
                  ? (a(),
                    c('div', xa, [
                      w.depth < 5
                        ? (a(!0),
                          c(
                            M,
                            { key: 0 },
                            E(
                              w.item.items,
                              (W) => (
                                a(),
                                $(
                                  U,
                                  { key: W.text, item: W, depth: w.depth + 1 },
                                  null,
                                  8,
                                  ['item', 'depth']
                                )
                              )
                            ),
                            128
                          ))
                        : f('', !0)
                    ]))
                  : f('', !0)
              ]),
              _: 1
            },
            8,
            ['class']
          )
        )
      }
    }
  }),
  tr = k(er, [['__scopeId', 'data-v-4d7ec7f6']]),
  Oe = (o) => (C('data-v-53766b84'), (o = o()), H(), o),
  or = Oe(() => p('div', { class: 'curtain' }, null, -1)),
  sr = {
    class: 'nav',
    id: 'VPSidebarNav',
    'aria-labelledby': 'sidebar-aria-label',
    tabindex: '-1'
  },
  nr = Oe(() =>
    p(
      'span',
      { class: 'visually-hidden', id: 'sidebar-aria-label' },
      ' Sidebar Navigation ',
      -1
    )
  ),
  ar = _({
    __name: 'VPSidebar',
    props: { open: { type: Boolean } },
    setup(o) {
      const { sidebarGroups: e, hasSidebar: t } = O(),
        n = o,
        s = S(null),
        i = we(R ? document.body : null)
      return (
        z(
          [n, s],
          () => {
            var u
            n.open
              ? ((i.value = !0), (u = s.value) == null || u.focus())
              : (i.value = !1)
          },
          { immediate: !0, flush: 'post' }
        ),
        (u, h) =>
          r(t)
            ? (a(),
              c(
                'aside',
                {
                  key: 0,
                  class: T(['VPSidebar', { open: u.open }]),
                  ref_key: 'navEl',
                  ref: s,
                  onClick: h[0] || (h[0] = Ze(() => {}, ['stop']))
                },
                [
                  or,
                  p('nav', sr, [
                    nr,
                    l(u.$slots, 'sidebar-nav-before', {}, void 0, !0),
                    (a(!0),
                    c(
                      M,
                      null,
                      E(
                        r(e),
                        (d) => (
                          a(),
                          c('div', { key: d.text, class: 'group' }, [
                            m(tr, { item: d, depth: 0 }, null, 8, ['item'])
                          ])
                        )
                      ),
                      128
                    )),
                    l(u.$slots, 'sidebar-nav-after', {}, void 0, !0)
                  ])
                ],
                2
              ))
            : f('', !0)
      )
    }
  }),
  rr = k(ar, [['__scopeId', 'data-v-53766b84']]),
  ir = _({
    __name: 'VPSkipLink',
    setup(o) {
      const e = te(),
        t = S()
      z(
        () => e.path,
        () => t.value.focus()
      )
      function n({ target: s }) {
        const i = document.getElementById(decodeURIComponent(s.hash).slice(1))
        if (i) {
          const u = () => {
            i.removeAttribute('tabindex'), i.removeEventListener('blur', u)
          }
          i.setAttribute('tabindex', '-1'),
            i.addEventListener('blur', u),
            i.focus(),
            window.scrollTo(0, 0)
        }
      }
      return (s, i) => (
        a(),
        c(
          M,
          null,
          [
            p(
              'span',
              { ref_key: 'backToTop', ref: t, tabindex: '-1' },
              null,
              512
            ),
            p(
              'a',
              {
                href: '#VPContent',
                class: 'VPSkipLink visually-hidden',
                onClick: n
              },
              ' Skip to content '
            )
          ],
          64
        )
      )
    }
  }),
  lr = k(ir, [['__scopeId', 'data-v-448eb6bb']]),
  cr = _({
    __name: 'Layout',
    setup(o) {
      const { isOpen: e, open: t, close: n } = O(),
        s = te()
      z(() => s.path, n), kt(e, n)
      const { frontmatter: i } = V(),
        u = xe(),
        h = b(() => !!u['home-hero-image'])
      return (
        Ie('hero-image-slot-exists', h),
        (d, g) => {
          const y = q('Content')
          return r(i).layout !== !1
            ? (a(),
              c(
                'div',
                { key: 0, class: T(['Layout', r(i).pageClass]) },
                [
                  l(d.$slots, 'layout-top', {}, void 0, !0),
                  m(lr),
                  m(
                    st,
                    { class: 'backdrop', show: r(e), onClick: r(n) },
                    null,
                    8,
                    ['show', 'onClick']
                  ),
                  m(Ja, null, {
                    'nav-bar-title-before': v(() => [
                      l(d.$slots, 'nav-bar-title-before', {}, void 0, !0)
                    ]),
                    'nav-bar-title-after': v(() => [
                      l(d.$slots, 'nav-bar-title-after', {}, void 0, !0)
                    ]),
                    'nav-bar-content-before': v(() => [
                      l(d.$slots, 'nav-bar-content-before', {}, void 0, !0)
                    ]),
                    'nav-bar-content-after': v(() => [
                      l(d.$slots, 'nav-bar-content-after', {}, void 0, !0)
                    ]),
                    'nav-screen-content-before': v(() => [
                      l(d.$slots, 'nav-screen-content-before', {}, void 0, !0)
                    ]),
                    'nav-screen-content-after': v(() => [
                      l(d.$slots, 'nav-screen-content-after', {}, void 0, !0)
                    ]),
                    _: 3
                  }),
                  m(Is, { open: r(e), onOpenMenu: r(t) }, null, 8, [
                    'open',
                    'onOpenMenu'
                  ]),
                  m(
                    rr,
                    { open: r(e) },
                    {
                      'sidebar-nav-before': v(() => [
                        l(d.$slots, 'sidebar-nav-before', {}, void 0, !0)
                      ]),
                      'sidebar-nav-after': v(() => [
                        l(d.$slots, 'sidebar-nav-after', {}, void 0, !0)
                      ]),
                      _: 3
                    },
                    8,
                    ['open']
                  ),
                  m(us, null, {
                    'page-top': v(() => [
                      l(d.$slots, 'page-top', {}, void 0, !0)
                    ]),
                    'page-bottom': v(() => [
                      l(d.$slots, 'page-bottom', {}, void 0, !0)
                    ]),
                    'not-found': v(() => [
                      l(d.$slots, 'not-found', {}, void 0, !0)
                    ]),
                    'home-hero-before': v(() => [
                      l(d.$slots, 'home-hero-before', {}, void 0, !0)
                    ]),
                    'home-hero-info-before': v(() => [
                      l(d.$slots, 'home-hero-info-before', {}, void 0, !0)
                    ]),
                    'home-hero-info': v(() => [
                      l(d.$slots, 'home-hero-info', {}, void 0, !0)
                    ]),
                    'home-hero-info-after': v(() => [
                      l(d.$slots, 'home-hero-info-after', {}, void 0, !0)
                    ]),
                    'home-hero-actions-after': v(() => [
                      l(d.$slots, 'home-hero-actions-after', {}, void 0, !0)
                    ]),
                    'home-hero-image': v(() => [
                      l(d.$slots, 'home-hero-image', {}, void 0, !0)
                    ]),
                    'home-hero-after': v(() => [
                      l(d.$slots, 'home-hero-after', {}, void 0, !0)
                    ]),
                    'home-features-before': v(() => [
                      l(d.$slots, 'home-features-before', {}, void 0, !0)
                    ]),
                    'home-features-after': v(() => [
                      l(d.$slots, 'home-features-after', {}, void 0, !0)
                    ]),
                    'doc-footer-before': v(() => [
                      l(d.$slots, 'doc-footer-before', {}, void 0, !0)
                    ]),
                    'doc-before': v(() => [
                      l(d.$slots, 'doc-before', {}, void 0, !0)
                    ]),
                    'doc-after': v(() => [
                      l(d.$slots, 'doc-after', {}, void 0, !0)
                    ]),
                    'doc-top': v(() => [
                      l(d.$slots, 'doc-top', {}, void 0, !0)
                    ]),
                    'doc-bottom': v(() => [
                      l(d.$slots, 'doc-bottom', {}, void 0, !0)
                    ]),
                    'aside-top': v(() => [
                      l(d.$slots, 'aside-top', {}, void 0, !0)
                    ]),
                    'aside-bottom': v(() => [
                      l(d.$slots, 'aside-bottom', {}, void 0, !0)
                    ]),
                    'aside-outline-before': v(() => [
                      l(d.$slots, 'aside-outline-before', {}, void 0, !0)
                    ]),
                    'aside-outline-after': v(() => [
                      l(d.$slots, 'aside-outline-after', {}, void 0, !0)
                    ]),
                    'aside-ads-before': v(() => [
                      l(d.$slots, 'aside-ads-before', {}, void 0, !0)
                    ]),
                    'aside-ads-after': v(() => [
                      l(d.$slots, 'aside-ads-after', {}, void 0, !0)
                    ]),
                    _: 3
                  }),
                  m(fs),
                  l(d.$slots, 'layout-bottom', {}, void 0, !0)
                ],
                2
              ))
            : (a(), $(y, { key: 1 }))
        }
      )
    }
  }),
  ur = k(cr, [['__scopeId', 'data-v-09f48466']]),
  vr = {
    Layout: ur,
    enhanceApp: ({ app: o }) => {
      o.component('Badge', et)
    }
  }
export { vr as t }
