// node_modules/preact/dist/preact.module.js
var v = function(n, l) {
  for (var u in l)
    n[u] = l[u];
  return n;
};
var p = function(n) {
  var l = n.parentNode;
  l && l.removeChild(n);
};
var y = function(l, u, t) {
  var i, o, r, f = {};
  for (r in u)
    r == "key" ? i = u[r] : r == "ref" ? o = u[r] : f[r] = u[r];
  if (arguments.length > 2 && (f.children = arguments.length > 3 ? n.call(arguments, 2) : t), typeof l == "function" && l.defaultProps != null)
    for (r in l.defaultProps)
      f[r] === undefined && (f[r] = l.defaultProps[r]);
  return d(l, f, i, o, null);
};
var d = function(n, t, i, o, r) {
  var f = { type: n, props: t, key: i, ref: o, __k: null, __: null, __b: 0, __e: null, __d: undefined, __c: null, __h: null, constructor: undefined, __v: r == null ? ++u : r };
  return r == null && l.vnode != null && l.vnode(f), f;
};
var k = function(n) {
  return n.children;
};
var b = function(n, l) {
  this.props = n, this.context = l;
};
var g = function(n, l) {
  if (l == null)
    return n.__ ? g(n.__, n.__.__k.indexOf(n) + 1) : null;
  for (var u;l < n.__k.length; l++)
    if ((u = n.__k[l]) != null && u.__e != null)
      return u.__e;
  return typeof n.type == "function" ? g(n) : null;
};
var m = function(n) {
  var l, u;
  if ((n = n.__) != null && n.__c != null) {
    for (n.__e = n.__c.base = null, l = 0;l < n.__k.length; l++)
      if ((u = n.__k[l]) != null && u.__e != null) {
        n.__e = n.__c.base = u.__e;
        break;
      }
    return m(n);
  }
};
var w = function(n) {
  (!n.__d && (n.__d = true) && i.push(n) && !x.__r++ || o !== l.debounceRendering) && ((o = l.debounceRendering) || r)(x);
};
var x = function() {
  var n, l, u, t, o, r, e, c, s;
  for (i.sort(f);n = i.shift(); )
    n.__d && (l = i.length, t = undefined, o = undefined, r = undefined, c = (e = (u = n).__v).__e, (s = u.__P) && (t = [], o = [], (r = v({}, e)).__v = e.__v + 1, L(s, e, r, u.__n, s.ownerSVGElement !== undefined, e.__h != null ? [c] : null, t, c == null ? g(e) : c, e.__h, o), M(t, e, o), e.__e != c && m(e)), i.length > l && i.sort(f));
  x.__r = 0;
};
var P = function(n, l, u, t, i, o, r, f, e, a, v2) {
  var p2, y2, _, b2, g2, m2, w2, x2, P2, S, H = 0, I = t && t.__k || s, T = I.length, j = T, z = l.length;
  for (u.__k = [], p2 = 0;p2 < z; p2++)
    (b2 = u.__k[p2] = (b2 = l[p2]) == null || typeof b2 == "boolean" || typeof b2 == "function" ? null : typeof b2 == "string" || typeof b2 == "number" || typeof b2 == "bigint" ? d(null, b2, null, null, b2) : h(b2) ? d(k, { children: b2 }, null, null, null) : b2.__b > 0 ? d(b2.type, b2.props, b2.key, b2.ref ? b2.ref : null, b2.__v) : b2) != null && (b2.__ = u, b2.__b = u.__b + 1, (x2 = A(b2, I, w2 = p2 + H, j)) === -1 ? _ = c : (_ = I[x2] || c, I[x2] = undefined, j--), L(n, b2, _, i, o, r, f, e, a, v2), g2 = b2.__e, (y2 = b2.ref) && _.ref != y2 && (_.ref && O(_.ref, null, b2), v2.push(y2, b2.__c || g2, b2)), g2 != null && (m2 == null && (m2 = g2), S = !(P2 = _ === c || _.__v === null) && x2 === w2, P2 ? x2 == -1 && H-- : x2 !== w2 && (x2 === w2 + 1 ? (H++, S = true) : x2 > w2 ? j > z - w2 ? (H += x2 - w2, S = true) : H-- : H = x2 < w2 && x2 == w2 - 1 ? x2 - w2 : 0), w2 = p2 + H, S = S || x2 == p2 && !P2, typeof b2.type != "function" || x2 === w2 && _.__k !== b2.__k ? typeof b2.type == "function" || S ? b2.__d !== undefined ? (e = b2.__d, b2.__d = undefined) : e = g2.nextSibling : e = $(n, g2, e) : e = C(b2, e, n), typeof u.type == "function" && (u.__d = e)));
  for (u.__e = m2, p2 = T;p2--; )
    I[p2] != null && (typeof u.type == "function" && I[p2].__e != null && I[p2].__e == u.__d && (u.__d = I[p2].__e.nextSibling), q(I[p2], I[p2]));
};
var C = function(n, l, u) {
  for (var t, i = n.__k, o = 0;i && o < i.length; o++)
    (t = i[o]) && (t.__ = n, l = typeof t.type == "function" ? C(t, l, u) : $(u, t.__e, l));
  return l;
};
var S = function(n, l) {
  return l = l || [], n == null || typeof n == "boolean" || (h(n) ? n.some(function(n2) {
    S(n2, l);
  }) : l.push(n)), l;
};
var $ = function(n, l, u) {
  return u == null || u.parentNode !== n ? n.insertBefore(l, null) : l == u && l.parentNode != null || n.insertBefore(l, u), l.nextSibling;
};
var A = function(n, l, u, t) {
  var { key: i, type: o } = n, r = u - 1, f = u + 1, e = l[u];
  if (e === null || e && i == e.key && o === e.type)
    return u;
  if (t > (e != null ? 1 : 0))
    for (;r >= 0 || f < l.length; ) {
      if (r >= 0) {
        if ((e = l[r]) && i == e.key && o === e.type)
          return r;
        r--;
      }
      if (f < l.length) {
        if ((e = l[f]) && i == e.key && o === e.type)
          return f;
        f++;
      }
    }
  return -1;
};
var H = function(n, l, u, t, i) {
  var o;
  for (o in u)
    o === "children" || o === "key" || (o in l) || T(n, o, null, u[o], t);
  for (o in l)
    i && typeof l[o] != "function" || o === "children" || o === "key" || o === "value" || o === "checked" || u[o] === l[o] || T(n, o, l[o], u[o], t);
};
var I = function(n, l, u) {
  l[0] === "-" ? n.setProperty(l, u == null ? "" : u) : n[l] = u == null ? "" : typeof u != "number" || a.test(l) ? u : u + "px";
};
var T = function(n, l, u, t, i) {
  var o;
  n:
    if (l === "style")
      if (typeof u == "string")
        n.style.cssText = u;
      else {
        if (typeof t == "string" && (n.style.cssText = t = ""), t)
          for (l in t)
            u && (l in u) || I(n.style, l, "");
        if (u)
          for (l in u)
            t && u[l] === t[l] || I(n.style, l, u[l]);
      }
    else if (l[0] === "o" && l[1] === "n")
      o = l !== (l = l.replace(/Capture$/, "")), l = (l.toLowerCase() in n) ? l.toLowerCase().slice(2) : l.slice(2), n.l || (n.l = {}), n.l[l + o] = u, u ? t || n.addEventListener(l, o ? z : j, o) : n.removeEventListener(l, o ? z : j, o);
    else if (l !== "dangerouslySetInnerHTML") {
      if (i)
        l = l.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (l !== "width" && l !== "height" && l !== "href" && l !== "list" && l !== "form" && l !== "tabIndex" && l !== "download" && l !== "rowSpan" && l !== "colSpan" && (l in n))
        try {
          n[l] = u == null ? "" : u;
          break n;
        } catch (n2) {
        }
      typeof u == "function" || (u == null || u === false && l[4] !== "-" ? n.removeAttribute(l) : n.setAttribute(l, u));
    }
};
var j = function(n) {
  return this.l[n.type + false](l.event ? l.event(n) : n);
};
var z = function(n) {
  return this.l[n.type + true](l.event ? l.event(n) : n);
};
var L = function(n, u, t, i, o, r, f, e, c, s) {
  var a, p2, y2, d2, _, g2, m2, w2, x2, C2, S2, $2, A2, H2, I2, T2 = u.type;
  if (u.constructor !== undefined)
    return null;
  t.__h != null && (c = t.__h, e = u.__e = t.__e, u.__h = null, r = [e]), (a = l.__b) && a(u);
  try {
    n:
      if (typeof T2 == "function") {
        if (w2 = u.props, x2 = (a = T2.contextType) && i[a.__c], C2 = a ? x2 ? x2.props.value : a.__ : i, t.__c ? m2 = (p2 = u.__c = t.__c).__ = p2.__E : (("prototype" in T2) && T2.prototype.render ? u.__c = p2 = new T2(w2, C2) : (u.__c = p2 = new b(w2, C2), p2.constructor = T2, p2.render = B), x2 && x2.sub(p2), p2.props = w2, p2.state || (p2.state = {}), p2.context = C2, p2.__n = i, y2 = p2.__d = true, p2.__h = [], p2._sb = []), p2.__s == null && (p2.__s = p2.state), T2.getDerivedStateFromProps != null && (p2.__s == p2.state && (p2.__s = v({}, p2.__s)), v(p2.__s, T2.getDerivedStateFromProps(w2, p2.__s))), d2 = p2.props, _ = p2.state, p2.__v = u, y2)
          T2.getDerivedStateFromProps == null && p2.componentWillMount != null && p2.componentWillMount(), p2.componentDidMount != null && p2.__h.push(p2.componentDidMount);
        else {
          if (T2.getDerivedStateFromProps == null && w2 !== d2 && p2.componentWillReceiveProps != null && p2.componentWillReceiveProps(w2, C2), !p2.__e && (p2.shouldComponentUpdate != null && p2.shouldComponentUpdate(w2, p2.__s, C2) === false || u.__v === t.__v)) {
            for (u.__v !== t.__v && (p2.props = w2, p2.state = p2.__s, p2.__d = false), u.__e = t.__e, u.__k = t.__k, u.__k.forEach(function(n2) {
              n2 && (n2.__ = u);
            }), S2 = 0;S2 < p2._sb.length; S2++)
              p2.__h.push(p2._sb[S2]);
            p2._sb = [], p2.__h.length && f.push(p2);
            break n;
          }
          p2.componentWillUpdate != null && p2.componentWillUpdate(w2, p2.__s, C2), p2.componentDidUpdate != null && p2.__h.push(function() {
            p2.componentDidUpdate(d2, _, g2);
          });
        }
        if (p2.context = C2, p2.props = w2, p2.__P = n, p2.__e = false, $2 = l.__r, A2 = 0, ("prototype" in T2) && T2.prototype.render) {
          for (p2.state = p2.__s, p2.__d = false, $2 && $2(u), a = p2.render(p2.props, p2.state, p2.context), H2 = 0;H2 < p2._sb.length; H2++)
            p2.__h.push(p2._sb[H2]);
          p2._sb = [];
        } else
          do {
            p2.__d = false, $2 && $2(u), a = p2.render(p2.props, p2.state, p2.context), p2.state = p2.__s;
          } while (p2.__d && ++A2 < 25);
        p2.state = p2.__s, p2.getChildContext != null && (i = v(v({}, i), p2.getChildContext())), y2 || p2.getSnapshotBeforeUpdate == null || (g2 = p2.getSnapshotBeforeUpdate(d2, _)), P(n, h(I2 = a != null && a.type === k && a.key == null ? a.props.children : a) ? I2 : [I2], u, t, i, o, r, f, e, c, s), p2.base = u.__e, u.__h = null, p2.__h.length && f.push(p2), m2 && (p2.__E = p2.__ = null);
      } else
        r == null && u.__v === t.__v ? (u.__k = t.__k, u.__e = t.__e) : u.__e = N(t.__e, u, t, i, o, r, f, c, s);
    (a = l.diffed) && a(u);
  } catch (n2) {
    u.__v = null, (c || r != null) && (u.__e = e, u.__h = !!c, r[r.indexOf(e)] = null), l.__e(n2, u, t);
  }
};
var M = function(n, u, t) {
  for (var i = 0;i < t.length; i++)
    O(t[i], t[++i], t[++i]);
  l.__c && l.__c(u, n), n.some(function(u2) {
    try {
      n = u2.__h, u2.__h = [], n.some(function(n2) {
        n2.call(u2);
      });
    } catch (n2) {
      l.__e(n2, u2.__v);
    }
  });
};
var N = function(l, u, t, i, o, r, f, e, s) {
  var a, v2, y2, d2 = t.props, _ = u.props, k2 = u.type, b2 = 0;
  if (k2 === "svg" && (o = true), r != null) {
    for (;b2 < r.length; b2++)
      if ((a = r[b2]) && ("setAttribute" in a) == !!k2 && (k2 ? a.localName === k2 : a.nodeType === 3)) {
        l = a, r[b2] = null;
        break;
      }
  }
  if (l == null) {
    if (k2 === null)
      return document.createTextNode(_);
    l = o ? document.createElementNS("http://www.w3.org/2000/svg", k2) : document.createElement(k2, _.is && _), r = null, e = false;
  }
  if (k2 === null)
    d2 === _ || e && l.data === _ || (l.data = _);
  else {
    if (r = r && n.call(l.childNodes), v2 = (d2 = t.props || c).dangerouslySetInnerHTML, y2 = _.dangerouslySetInnerHTML, !e) {
      if (r != null)
        for (d2 = {}, b2 = 0;b2 < l.attributes.length; b2++)
          d2[l.attributes[b2].name] = l.attributes[b2].value;
      (y2 || v2) && (y2 && (v2 && y2.__html == v2.__html || y2.__html === l.innerHTML) || (l.innerHTML = y2 && y2.__html || ""));
    }
    if (H(l, _, d2, o, e), y2)
      u.__k = [];
    else if (P(l, h(b2 = u.props.children) ? b2 : [b2], u, t, i, o && k2 !== "foreignObject", r, f, r ? r[0] : t.__k && g(t, 0), e, s), r != null)
      for (b2 = r.length;b2--; )
        r[b2] != null && p(r[b2]);
    e || (("value" in _) && (b2 = _.value) !== undefined && (b2 !== l.value || k2 === "progress" && !b2 || k2 === "option" && b2 !== d2.value) && T(l, "value", b2, d2.value, false), ("checked" in _) && (b2 = _.checked) !== undefined && b2 !== l.checked && T(l, "checked", b2, d2.checked, false));
  }
  return l;
};
var O = function(n, u, t) {
  try {
    typeof n == "function" ? n(u) : n.current = u;
  } catch (n2) {
    l.__e(n2, t);
  }
};
var q = function(n, u, t) {
  var i, o;
  if (l.unmount && l.unmount(n), (i = n.ref) && (i.current && i.current !== n.__e || O(i, null, u)), (i = n.__c) != null) {
    if (i.componentWillUnmount)
      try {
        i.componentWillUnmount();
      } catch (n2) {
        l.__e(n2, u);
      }
    i.base = i.__P = null, n.__c = undefined;
  }
  if (i = n.__k)
    for (o = 0;o < i.length; o++)
      i[o] && q(i[o], u, t || typeof n.type != "function");
  t || n.__e == null || p(n.__e), n.__ = n.__e = n.__d = undefined;
};
var B = function(n, l, u) {
  return this.constructor(n, u);
};
var n;
var l;
var u;
var t;
var i;
var o;
var r;
var f;
var e;
var c = {};
var s = [];
var a = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
var h = Array.isArray;
n = s.slice, l = { __e: function(n2, l2, u2, t2) {
  for (var i2, o2, r2;l2 = l2.__; )
    if ((i2 = l2.__c) && !i2.__)
      try {
        if ((o2 = i2.constructor) && o2.getDerivedStateFromError != null && (i2.setState(o2.getDerivedStateFromError(n2)), r2 = i2.__d), i2.componentDidCatch != null && (i2.componentDidCatch(n2, t2 || {}), r2 = i2.__d), r2)
          return i2.__E = i2;
      } catch (l3) {
        n2 = l3;
      }
  throw n2;
} }, u = 0, t = function(n2) {
  return n2 != null && n2.constructor === undefined;
}, b.prototype.setState = function(n2, l2) {
  var u2;
  u2 = this.__s != null && this.__s !== this.state ? this.__s : this.__s = v({}, this.state), typeof n2 == "function" && (n2 = n2(v({}, u2), this.props)), n2 && v(u2, n2), n2 != null && this.__v && (l2 && this._sb.push(l2), w(this));
}, b.prototype.forceUpdate = function(n2) {
  this.__v && (this.__e = true, n2 && this.__h.push(n2), w(this));
}, b.prototype.render = k, i = [], r = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, f = function(n2, l2) {
  return n2.__v.__b - l2.__v.__b;
}, x.__r = 0, e = 0;
// node_modules/preact/hooks/dist/hooks.module.js
var d2 = function(t2, u2) {
  l.__h && l.__h(r2, t2, o2 || u2), o2 = 0;
  var i2 = r2.__H || (r2.__H = { __: [], __h: [] });
  return t2 >= i2.__.length && i2.__.push({ __V: c2 }), i2.__[t2];
};
var p2 = function(u2, i2) {
  var o2 = d2(t2++, 3);
  !l.__s && z2(o2.__H, i2) && (o2.__ = u2, o2.i = i2, r2.__H.__h.push(o2));
};
var b2 = function() {
  for (var t2;t2 = f2.shift(); )
    if (t2.__P && t2.__H)
      try {
        t2.__H.__h.forEach(k2), t2.__H.__h.forEach(w2), t2.__H.__h = [];
      } catch (r2) {
        t2.__H.__h = [], l.__e(r2, t2.__v);
      }
};
var j2 = function(n2) {
  var t2, r2 = function() {
    clearTimeout(u2), g2 && cancelAnimationFrame(t2), setTimeout(n2);
  }, u2 = setTimeout(r2, 100);
  g2 && (t2 = requestAnimationFrame(r2));
};
var k2 = function(n2) {
  var t2 = r2, u2 = n2.__c;
  typeof u2 == "function" && (n2.__c = undefined, u2()), r2 = t2;
};
var w2 = function(n2) {
  var t2 = r2;
  n2.__c = n2.__(), r2 = t2;
};
var z2 = function(n2, t2) {
  return !n2 || n2.length !== t2.length || t2.some(function(t3, r2) {
    return t3 !== n2[r2];
  });
};
var t2;
var r2;
var u2;
var i2;
var o2 = 0;
var f2 = [];
var c2 = [];
var e2 = l.__b;
var a2 = l.__r;
var v2 = l.diffed;
var l2 = l.__c;
var m2 = l.unmount;
l.__b = function(n2) {
  r2 = null, e2 && e2(n2);
}, l.__r = function(n2) {
  a2 && a2(n2), t2 = 0;
  var i3 = (r2 = n2.__c).__H;
  i3 && (u2 === r2 ? (i3.__h = [], r2.__h = [], i3.__.forEach(function(n3) {
    n3.__N && (n3.__ = n3.__N), n3.__V = c2, n3.__N = n3.i = undefined;
  })) : (i3.__h.forEach(k2), i3.__h.forEach(w2), i3.__h = [], t2 = 0)), u2 = r2;
}, l.diffed = function(t3) {
  v2 && v2(t3);
  var o3 = t3.__c;
  o3 && o3.__H && (o3.__H.__h.length && (f2.push(o3) !== 1 && i2 === l.requestAnimationFrame || ((i2 = l.requestAnimationFrame) || j2)(b2)), o3.__H.__.forEach(function(n2) {
    n2.i && (n2.__H = n2.i), n2.__V !== c2 && (n2.__ = n2.__V), n2.i = undefined, n2.__V = c2;
  })), u2 = r2 = null;
}, l.__c = function(t3, r3) {
  r3.some(function(t4) {
    try {
      t4.__h.forEach(k2), t4.__h = t4.__h.filter(function(n2) {
        return !n2.__ || w2(n2);
      });
    } catch (u3) {
      r3.some(function(n2) {
        n2.__h && (n2.__h = []);
      }), r3 = [], l.__e(u3, t4.__v);
    }
  }), l2 && l2(t3, r3);
}, l.unmount = function(t3) {
  m2 && m2(t3);
  var r3, u3 = t3.__c;
  u3 && u3.__H && (u3.__H.__.forEach(function(n2) {
    try {
      k2(n2);
    } catch (n3) {
      r3 = n3;
    }
  }), u3.__H = undefined, r3 && l.__e(r3, u3.__v));
};
var g2 = typeof requestAnimationFrame == "function";

// node_modules/preact/compat/dist/compat.module.js
var g3 = function(n2, t3) {
  for (var e3 in t3)
    n2[e3] = t3[e3];
  return n2;
};
var C2 = function(n2, t3) {
  for (var e3 in n2)
    if (e3 !== "__source" && !(e3 in t3))
      return true;
  for (var r3 in t3)
    if (r3 !== "__source" && n2[r3] !== t3[r3])
      return true;
  return false;
};
var w3 = function(n2) {
  this.props = n2;
};
var L2 = function(n2, t3, e3) {
  return n2 && (n2.__c && n2.__c.__H && (n2.__c.__H.__.forEach(function(n3) {
    typeof n3.__c == "function" && n3.__c();
  }), n2.__c.__H = null), (n2 = g3({}, n2)).__c != null && (n2.__c.__P === e3 && (n2.__c.__P = t3), n2.__c = null), n2.__k = n2.__k && n2.__k.map(function(n3) {
    return L2(n3, t3, e3);
  })), n2;
};
var U = function(n2, t3, e3) {
  return n2 && (n2.__v = null, n2.__k = n2.__k && n2.__k.map(function(n3) {
    return U(n3, t3, e3);
  }), n2.__c && n2.__c.__P === t3 && (n2.__e && e3.insertBefore(n2.__e, n2.__d), n2.__c.__e = true, n2.__c.__P = e3)), n2;
};
var D2 = function() {
  this.__u = 0, this.t = null, this.__b = null;
};
var F3 = function(n2) {
  var t3 = n2.__.__c;
  return t3 && t3.__a && t3.__a(n2);
};
var V2 = function() {
  this.u = null, this.o = null;
};
var Q = function() {
};
var X = function() {
  return this.cancelBubble;
};
var nn = function() {
  return this.defaultPrevented;
};
(w3.prototype = new b).isPureReactComponent = true, w3.prototype.shouldComponentUpdate = function(n2, t3) {
  return C2(this.props, n2) || C2(this.state, t3);
};
var R = l.__b;
l.__b = function(n2) {
  n2.type && n2.type.__f && n2.ref && (n2.props.ref = n2.ref, n2.ref = null), R && R(n2);
};
var N2 = typeof Symbol != "undefined" && Symbol.for && Symbol.for("react.forward_ref") || 3911;
var T3 = l.__e;
l.__e = function(n2, t3, e3, r3) {
  if (n2.then) {
    for (var u3, o3 = t3;o3 = o3.__; )
      if ((u3 = o3.__c) && u3.__c)
        return t3.__e == null && (t3.__e = e3.__e, t3.__k = e3.__k), u3.__c(n2, t3);
  }
  T3(n2, t3, e3, r3);
};
var I2 = l.unmount;
l.unmount = function(n2) {
  var t3 = n2.__c;
  t3 && t3.__R && t3.__R(), t3 && n2.__h === true && (n2.type = null), I2 && I2(n2);
}, (D2.prototype = new b).__c = function(n2, t3) {
  var e3 = t3.__c, r3 = this;
  r3.t == null && (r3.t = []), r3.t.push(e3);
  var u3 = F3(r3.__v), o3 = false, i3 = function() {
    o3 || (o3 = true, e3.__R = null, u3 ? u3(l3) : l3());
  };
  e3.__R = i3;
  var l3 = function() {
    if (!--r3.__u) {
      if (r3.state.__a) {
        var n3 = r3.state.__a;
        r3.__v.__k[0] = U(n3, n3.__c.__P, n3.__c.__O);
      }
      var t4;
      for (r3.setState({ __a: r3.__b = null });t4 = r3.t.pop(); )
        t4.forceUpdate();
    }
  }, c3 = t3.__h === true;
  r3.__u++ || c3 || r3.setState({ __a: r3.__b = r3.__v.__k[0] }), n2.then(i3, i3);
}, D2.prototype.componentWillUnmount = function() {
  this.t = [];
}, D2.prototype.render = function(n2, e3) {
  if (this.__b) {
    if (this.__v.__k) {
      var r3 = document.createElement("div"), o3 = this.__v.__k[0].__c;
      this.__v.__k[0] = L2(this.__b, r3, o3.__O = o3.__P);
    }
    this.__b = null;
  }
  var i3 = e3.__a && y(k, null, n2.fallback);
  return i3 && (i3.__h = null), [y(k, null, e3.__a ? null : n2.children), i3];
};
var W = function(n2, t3, e3) {
  if (++e3[1] === e3[0] && n2.o.delete(t3), n2.props.revealOrder && (n2.props.revealOrder[0] !== "t" || !n2.o.size))
    for (e3 = n2.u;e3; ) {
      for (;e3.length > 3; )
        e3.pop()();
      if (e3[1] < e3[0])
        break;
      n2.u = e3 = e3[2];
    }
};
(V2.prototype = new b).__a = function(n2) {
  var t3 = this, e3 = F3(t3.__v), r3 = t3.o.get(n2);
  return r3[0]++, function(u3) {
    var o3 = function() {
      t3.props.revealOrder ? (r3.push(u3), W(t3, n2, r3)) : u3();
    };
    e3 ? e3(o3) : o3();
  };
}, V2.prototype.render = function(n2) {
  this.u = null, this.o = new Map;
  var t3 = S(n2.children);
  n2.revealOrder && n2.revealOrder[0] === "b" && t3.reverse();
  for (var e3 = t3.length;e3--; )
    this.o.set(t3[e3], this.u = [1, 0, this.u]);
  return n2.children;
}, V2.prototype.componentDidUpdate = V2.prototype.componentDidMount = function() {
  var n2 = this;
  this.o.forEach(function(t3, e3) {
    W(n2, e3, t3);
  });
};
var B2 = typeof Symbol != "undefined" && Symbol.for && Symbol.for("react.element") || 60103;
var H2 = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/;
var Z = /^on(Ani|Tra|Tou|BeforeInp|Compo)/;
var Y = /[A-Z0-9]/g;
var $2 = typeof document != "undefined";
var q3 = function(n2) {
  return (typeof Symbol != "undefined" && typeof Symbol() == "symbol" ? /fil|che|rad/ : /fil|che|ra/).test(n2);
};
b.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(t3) {
  Object.defineProperty(b.prototype, t3, { configurable: true, get: function() {
    return this["UNSAFE_" + t3];
  }, set: function(n2) {
    Object.defineProperty(this, t3, { configurable: true, writable: true, value: n2 });
  } });
});
var K = l.event;
l.event = function(n2) {
  return K && (n2 = K(n2)), n2.persist = Q, n2.isPropagationStopped = X, n2.isDefaultPrevented = nn, n2.nativeEvent = n2;
};
var tn;
var en = { enumerable: false, configurable: true, get: function() {
  return this.class;
} };
var rn = l.vnode;
l.vnode = function(n2) {
  typeof n2.type == "string" && function(n3) {
    var { props: t3, type: e3 } = n3, u3 = {};
    for (var o3 in t3) {
      var i3 = t3[o3];
      if (!(o3 === "value" && ("defaultValue" in t3) && i3 == null || $2 && o3 === "children" && e3 === "noscript" || o3 === "class" || o3 === "className")) {
        var l3 = o3.toLowerCase();
        o3 === "defaultValue" && ("value" in t3) && t3.value == null ? o3 = "value" : o3 === "download" && i3 === true ? i3 = "" : l3 === "ondoubleclick" ? o3 = "ondblclick" : l3 !== "onchange" || e3 !== "input" && e3 !== "textarea" || q3(t3.type) ? l3 === "onfocus" ? o3 = "onfocusin" : l3 === "onblur" ? o3 = "onfocusout" : Z.test(o3) ? o3 = l3 : e3.indexOf("-") === -1 && H2.test(o3) ? o3 = o3.replace(Y, "-$&").toLowerCase() : i3 === null && (i3 = undefined) : l3 = o3 = "oninput", l3 === "oninput" && u3[o3 = l3] && (o3 = "oninputCapture"), u3[o3] = i3;
      }
    }
    e3 == "select" && u3.multiple && Array.isArray(u3.value) && (u3.value = S(t3.children).forEach(function(n4) {
      n4.props.selected = u3.value.indexOf(n4.props.value) != -1;
    })), e3 == "select" && u3.defaultValue != null && (u3.value = S(t3.children).forEach(function(n4) {
      n4.props.selected = u3.multiple ? u3.defaultValue.indexOf(n4.props.value) != -1 : u3.defaultValue == n4.props.value;
    })), t3.class && !t3.className ? (u3.class = t3.class, Object.defineProperty(u3, "className", en)) : (t3.className && !t3.class || t3.class && t3.className) && (u3.class = u3.className = t3.className), n3.props = u3;
  }(n2), n2.$$typeof = B2, rn && rn(n2);
};
var un = l.__r;
l.__r = function(n2) {
  un && un(n2), tn = n2.__c;
};
var on = l.diffed;
l.diffed = function(n2) {
  on && on(n2);
  var { props: t3, __e: e3 } = n2;
  e3 != null && n2.type === "textarea" && ("value" in t3) && t3.value !== e3.value && (e3.value = t3.value == null ? "" : t3.value), tn = null;
};

// node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js
var o3 = function(o4, e3, n2, t3, f3, l3) {
  var s3, u3, a3 = {};
  for (u3 in e3)
    u3 == "ref" ? s3 = e3[u3] : a3[u3] = e3[u3];
  var i3 = { type: o4, props: a3, key: n2, ref: s3, __k: null, __: null, __b: 0, __e: null, __d: undefined, __c: null, __h: null, constructor: undefined, __v: --_3, __source: f3, __self: l3 };
  if (typeof o4 == "function" && (s3 = o4.defaultProps))
    for (u3 in s3)
      a3[u3] === undefined && (a3[u3] = s3[u3]);
  return l.vnode && l.vnode(i3), i3;
};
var _3 = 0;

// src/test.tsx
var Test = () => {
  p2(() => {
    console.log("test");
  }, []);
  return o3("div", {
    children: "test"
  }, undefined, false, undefined, this);
};
export {
  Test
};
