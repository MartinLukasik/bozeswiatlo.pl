parcelRequire = (function (e, r, t, n) {
  var i,
    o = 'function' == typeof parcelRequire && parcelRequire,
    u = 'function' == typeof require && require;
  function f(t, n) {
    if (!r[t]) {
      if (!e[t]) {
        var i = 'function' == typeof parcelRequire && parcelRequire;
        if (!n && i) return i(t, !0);
        if (o) return o(t, !0);
        if (u && 'string' == typeof t) return u(t);
        var c = new Error("Cannot find module '" + t + "'");
        throw ((c.code = 'MODULE_NOT_FOUND'), c);
      }
      (p.resolve = function (r) {
        return e[t][1][r] || r;
      }),
        (p.cache = {});
      var l = (r[t] = new f.Module(t));
      e[t][0].call(l.exports, p, l, l.exports, this);
    }
    return r[t].exports;
    function p(e) {
      return f(p.resolve(e));
    }
  }
  (f.isParcelRequire = !0),
    (f.Module = function (e) {
      (this.id = e), (this.bundle = f), (this.exports = {});
    }),
    (f.modules = e),
    (f.cache = r),
    (f.parent = o),
    (f.register = function (r, t) {
      e[r] = [
        function (e, r) {
          r.exports = t;
        },
        {},
      ];
    });
  for (var c = 0; c < t.length; c++)
    try {
      f(t[c]);
    } catch (e) {
      i || (i = e);
    }
  if (t.length) {
    var l = f(t[t.length - 1]);
    'object' == typeof exports && 'undefined' != typeof module
      ? (module.exports = l)
      : 'function' == typeof define && define.amd
      ? define(function () {
          return l;
        })
      : n && (this[n] = l);
  }
  if (((parcelRequire = f), i)) throw i;
  return f;
})(
  {
    WXfQ: [
      function (require, module, exports) {
        var e = document.querySelector('.nav-toggler'),
          t = document.querySelector('.responsive-nav');
        e.addEventListener('click', function () {
          t.classList.toggle('active-nav'), e.classList.toggle('active');
        });
      },
      {},
    ],
    WBGC: [
      function (require, module, exports) {
        'use strict';
        function e(e, t) {
          if (!(e instanceof t))
            throw new TypeError('Cannot call a class as a function');
        }
        function t(e, t) {
          for (var i = 0; i < t.length; i++) {
            var r = t[i];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              'value' in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r);
          }
        }
        function i(e, i, r) {
          return i && t(e.prototype, i), r && t(e, r), e;
        }
        Object.defineProperty(exports, '__esModule', { value: !0 }),
          (exports.default = void 0);
        var r = (function () {
          function t(i, r, n) {
            e(this, t),
              (this.pager = i),
              (this.currentActive = 1),
              this.updatePager(r, n);
          }
          return (
            i(t, [
              {
                key: 'changeActive',
                value: function (e) {
                  this.pager.firstElementChild.children[
                    this.currentActive
                  ].classList.remove('pager__item--active'),
                    (this.currentActive = e),
                    this.pager.firstElementChild.children[
                      this.currentActive
                    ].classList.add('pager__item--active');
                },
              },
              {
                key: 'updatePager',
                value: function (e, t) {
                  var i = this;
                  this.currentActive = 1;
                  var r = document.createElement('ul'),
                    a = document.createElement('li');
                  (a.className = 'pager__item pager__item--prev'),
                    (a.innerHTML = n()),
                    a.addEventListener('click', function () {
                      var r = i.currentActive > 1 ? i.currentActive - 1 : e;
                      i.changeActive(r), t(r);
                    }),
                    r.appendChild(a);
                  for (
                    var l = function (e) {
                        var a = document.createElement('li');
                        (a.className =
                          1 === e
                            ? 'pager__item pager__item--active'
                            : 'pager__item'),
                          (a.innerHTML = n(e)),
                          a.addEventListener('click', function () {
                            i.changeActive(e), t(e);
                          }),
                          r.appendChild(a);
                      },
                      c = 1;
                    c <= e;
                    c++
                  )
                    l(c);
                  var s = document.createElement('li');
                  (s.className = 'pager__item pager__item--next'),
                    (s.innerHTML = n()),
                    s.addEventListener('click', function () {
                      var r = i.currentActive < e ? i.currentActive + 1 : 1;
                      i.changeActive(r), t(r);
                    }),
                    r.appendChild(s),
                    this.pager.firstElementChild
                      ? this.pager.replaceChild(r, this.pager.firstElementChild)
                      : this.pager.appendChild(r);
                },
              },
            ]),
            t
          );
        })();
        function n(e) {
          return e
            ? '<a class="pager__link">'.concat(e, '</a>')
            : '\n    <a class="pager__link"\n      ><svg\n        xmlns="http://www.w3.org/2000/svg"\n        width="8"\n        height="12"\n        viewbox="0 0 8 12"\n      >\n        <g fill="none" fill-rule="evenodd">\n          <path\n            fill="#33313C"\n            d="M7.41 1.41L6 0 0 6l6 6 1.41-1.41L2.83 6z"\n          ></path>\n        </g></svg\n      ></a>';
        }
        var a = (function () {
            function t(i, n, a, l, c) {
              var s = this;
              e(this, t),
                (this.changePage = this.changePage.bind(this, c)),
                (this.photoSrcs = l),
                (this.filteredPhotoSrcs = l),
                (this._photos = l.slice(0, c)),
                (this.gallery = i),
                (this.pager = new r(
                  n,
                  Math.ceil(l.length / c),
                  this.changePage
                )),
                a.addEventListener('change', function (e) {
                  e.target.value
                    ? ((s.filteredPhotoSrcs = s.photoSrcs.filter(function (t) {
                        return t.tags.includes(e.target.value);
                      })),
                      (s.photos = s.filteredPhotoSrcs.slice(0, c)))
                    : ((s.filteredPhotoSrcs = s.photoSrcs),
                      (s.photos = s.filteredPhotoSrcs.slice(0, c))),
                    s.pager.updatePager(
                      Math.ceil(s.filteredPhotoSrcs.length / c),
                      s.changePage
                    );
                }),
                this.updateGallery();
            }
            return (
              i(t, [
                {
                  key: 'changePage',
                  value: function (e, t) {
                    (this.photos = this.filteredPhotoSrcs.slice(
                      (t - 1) * e,
                      t * e
                    )),
                      this.updateGallery(),
                      window.scrollTo({ top: 0 });
                  },
                },
                {
                  key: 'updateGallery',
                  value: function () {
                    for (
                      var e = this.photos,
                        t = gallery.children,
                        i = e.length,
                        r = 0;
                      r < i;
                      r++
                    ) {
                      var n = e[r].src;
                      if (t[r])
                        (t[r].href = n), (t[r].firstElementChild.src = n);
                      else {
                        var a = document.createElement('a'),
                          l = new Image();
                        (a.href = n),
                          (l.src = n),
                          (l.height = 300),
                          (l.alt = 'gallery photo'),
                          a.appendChild(l),
                          gallery.appendChild(a);
                      }
                    }
                    var c = gallery.childElementCount;
                    if (c > i)
                      for (var s = c - 1; s >= i; s--)
                        gallery.removeChild(t[s]);
                    lightGallery(document.getElementById('gallery'), {
                      thumbnail: !0,
                      showThumbByDefault: !1,
                    });
                  },
                },
                {
                  key: 'photos',
                  set: function (e) {
                    (this._photos = e), this.updateGallery();
                  },
                  get: function () {
                    return this._photos;
                  },
                },
              ]),
              t
            );
          })(),
          l = a;
        exports.default = l;
      },
      {},
    ],
    PgYk: [
      function (require, module, exports) {
        module.exports = '/1.5f04bef7.webp';
      },
      {},
    ],
    xPOm: [
      function (require, module, exports) {
        module.exports = '/2.6c858eb8.webp';
      },
      {},
    ],
    n9op: [
      function (require, module, exports) {
        module.exports = '/3.6f5695e0.webp';
      },
      {},
    ],
    r4PX: [
      function (require, module, exports) {
        module.exports = '/4.5f66a85b.webp';
      },
      {},
    ],
    korW: [
      function (require, module, exports) {
        module.exports = '/5.12552b90.webp';
      },
      {},
    ],
    Su4O: [
      function (require, module, exports) {
        module.exports = '/6.0a96ed47.webp';
      },
      {},
    ],
    r1Re: [
      function (require, module, exports) {
        module.exports = '/7.166fdb60.webp';
      },
      {},
    ],
    PPjk: [
      function (require, module, exports) {
        module.exports = '/8.4ce56b3f.webp';
      },
      {},
    ],
    vxku: [
      function (require, module, exports) {
        module.exports = '/9.904a34e1.webp';
      },
      {},
    ],
    pnpf: [
      function (require, module, exports) {
        module.exports = '/10.68c0ba03.webp';
      },
      {},
    ],
    OexM: [
      function (require, module, exports) {
        module.exports = '/11.a70f1a27.webp';
      },
      {},
    ],
    aSZf: [
      function (require, module, exports) {
        module.exports = '/12.d38b98f9.webp';
      },
      {},
    ],
    Cw71: [
      function (require, module, exports) {
        module.exports = '/13.2972c8da.webp';
      },
      {},
    ],
    zGQJ: [
      function (require, module, exports) {
        module.exports = '/14.3ddbd87d.webp';
      },
      {},
    ],
    H4bS: [
      function (require, module, exports) {
        module.exports = '/15.b77ac267.webp';
      },
      {},
    ],
    qvnl: [
      function (require, module, exports) {
        module.exports = '/16.de2cccfc.webp';
      },
      {},
    ],
    h8wY: [
      function (require, module, exports) {
        module.exports = '/17.df7c00f5.webp';
      },
      {},
    ],
    pa5K: [
      function (require, module, exports) {
        module.exports = '/18.11c49840.webp';
      },
      {},
    ],
    QMBc: [
      function (require, module, exports) {
        module.exports = '/19.aca46943.webp';
      },
      {},
    ],
    vvLO: [
      function (require, module, exports) {
        module.exports = '/20.46380c17.webp';
      },
      {},
    ],
    Fom1: [
      function (require, module, exports) {
        module.exports = '/21.859c497e.webp';
      },
      {},
    ],
    ZgqM: [
      function (require, module, exports) {
        module.exports = '/22.84b26b9a.webp';
      },
      {},
    ],
    gGgg: [
      function (require, module, exports) {
        module.exports = '/23.5b561b74.webp';
      },
      {},
    ],
    V6sg: [
      function (require, module, exports) {
        module.exports = '/24.c3bcdc34.webp';
      },
      {},
    ],
    TPtR: [
      function (require, module, exports) {
        module.exports = '/25.3787212b.webp';
      },
      {},
    ],
    rBj5: [
      function (require, module, exports) {
        module.exports = '/26.36d2c897.webp';
      },
      {},
    ],
    fuKk: [
      function (require, module, exports) {
        module.exports = '/27.9c26c24a.webp';
      },
      {},
    ],
    lcAS: [
      function (require, module, exports) {
        module.exports = '/28.68339665.webp';
      },
      {},
    ],
    GXik: [
      function (require, module, exports) {
        module.exports = '/29.0514a7ec.webp';
      },
      {},
    ],
    wLQQ: [
      function (require, module, exports) {
        module.exports = '/30.b7993cd9.webp';
      },
      {},
    ],
    p54q: [
      function (require, module, exports) {
        module.exports = '/31.754f8991.webp';
      },
      {},
    ],
    uN7I: [
      function (require, module, exports) {
        module.exports = '/32.5755b7e3.webp';
      },
      {},
    ],
    POU9: [
      function (require, module, exports) {
        module.exports = '/33.938b3b68.webp';
      },
      {},
    ],
    ztfp: [
      function (require, module, exports) {
        module.exports = '/34.956e06fc.webp';
      },
      {},
    ],
    FMhq: [
      function (require, module, exports) {
        module.exports = '/35.6d0524b6.webp';
      },
      {},
    ],
    Uhn9: [
      function (require, module, exports) {
        module.exports = '/36.801527cf.webp';
      },
      {},
    ],
    Yqb5: [
      function (require, module, exports) {
        'use strict';
        Object.defineProperty(exports, '__esModule', { value: !0 }),
          (exports.default = void 0);
        var e = G(require('../img/gallery/1.webp')),
          r = G(require('../img/gallery/2.webp')),
          g = G(require('../img/gallery/3.webp')),
          a = G(require('../img/gallery/4.webp')),
          l = G(require('../img/gallery/5.webp')),
          t = G(require('../img/gallery/6.webp')),
          u = G(require('../img/gallery/7.webp')),
          s = G(require('../img/gallery/8.webp')),
          i = G(require('../img/gallery/9.webp')),
          d = G(require('../img/gallery/10.webp')),
          f = G(require('../img/gallery/11.webp')),
          p = G(require('../img/gallery/12.webp')),
          c = G(require('../img/gallery/13.webp')),
          j = G(require('../img/gallery/14.webp')),
          y = G(require('../img/gallery/15.webp')),
          m = G(require('../img/gallery/16.webp')),
          q = G(require('../img/gallery/17.webp')),
          o = G(require('../img/gallery/18.webp')),
          n = G(require('../img/gallery/19.webp')),
          v = G(require('../img/gallery/20.webp')),
          _ = G(require('../img/gallery/21.webp')),
          x = G(require('../img/gallery/22.webp')),
          M = G(require('../img/gallery/23.webp')),
          b = G(require('../img/gallery/24.webp')),
          O = G(require('../img/gallery/25.webp')),
          P = G(require('../img/gallery/26.webp')),
          h = G(require('../img/gallery/27.webp')),
          k = G(require('../img/gallery/28.webp')),
          w = G(require('../img/gallery/29.webp')),
          z = G(require('../img/gallery/30.webp')),
          A = G(require('../img/gallery/31.webp')),
          B = G(require('../img/gallery/32.webp')),
          C = G(require('../img/gallery/33.webp')),
          D = G(require('../img/gallery/34.webp')),
          E = G(require('../img/gallery/35.webp')),
          F = G(require('../img/gallery/36.webp'));
        function G(e) {
          return e && e.__esModule ? e : { default: e };
        }
        var H = [
          { src: e.default, tags: [] },
          { src: r.default, tags: ['евангелизации'] },
          { src: g.default, tags: [] },
          { src: a.default, tags: [] },
          { src: l.default, tags: [] },
          { src: t.default, tags: [] },
          { src: u.default, tags: [] },
          { src: s.default, tags: [] },
          { src: i.default, tags: ['евангелизации'] },
          { src: d.default, tags: [] },
          { src: f.default, tags: [] },
          { src: p.default, tags: [] },
          { src: c.default, tags: ['евангелизации'] },
          { src: j.default, tags: ['евангелизации'] },
          { src: y.default, tags: ['евангелизации'] },
          { src: m.default, tags: [] },
          { src: q.default, tags: [] },
          { src: o.default, tags: [] },
          { src: n.default, tags: ['евангелизации'] },
          { src: v.default, tags: ['евангелизации'] },
          { src: _.default, tags: ['евангелизации'] },
          { src: x.default, tags: ['евангелизации'] },
          { src: M.default, tags: [] },
          { src: b.default, tags: [] },
          { src: O.default, tags: [] },
          { src: P.default, tags: [] },
          { src: h.default, tags: [] },
          { src: k.default, tags: [] },
          { src: w.default, tags: [] },
          { src: z.default, tags: [] },
          { src: A.default, tags: [] },
          { src: B.default, tags: [] },
          { src: C.default, tags: [] },
          { src: D.default, tags: [] },
          { src: E.default, tags: [] },
          { src: F.default, tags: [] },
        ];
        exports.default = H;
      },
      {
        '../img/gallery/1.webp': 'PgYk',
        '../img/gallery/2.webp': 'xPOm',
        '../img/gallery/3.webp': 'n9op',
        '../img/gallery/4.webp': 'r4PX',
        '../img/gallery/5.webp': 'korW',
        '../img/gallery/6.webp': 'Su4O',
        '../img/gallery/7.webp': 'r1Re',
        '../img/gallery/8.webp': 'PPjk',
        '../img/gallery/9.webp': 'vxku',
        '../img/gallery/10.webp': 'pnpf',
        '../img/gallery/11.webp': 'OexM',
        '../img/gallery/12.webp': 'aSZf',
        '../img/gallery/13.webp': 'Cw71',
        '../img/gallery/14.webp': 'zGQJ',
        '../img/gallery/15.webp': 'H4bS',
        '../img/gallery/16.webp': 'qvnl',
        '../img/gallery/17.webp': 'h8wY',
        '../img/gallery/18.webp': 'pa5K',
        '../img/gallery/19.webp': 'QMBc',
        '../img/gallery/20.webp': 'vvLO',
        '../img/gallery/21.webp': 'Fom1',
        '../img/gallery/22.webp': 'ZgqM',
        '../img/gallery/23.webp': 'gGgg',
        '../img/gallery/24.webp': 'V6sg',
        '../img/gallery/25.webp': 'TPtR',
        '../img/gallery/26.webp': 'rBj5',
        '../img/gallery/27.webp': 'fuKk',
        '../img/gallery/28.webp': 'lcAS',
        '../img/gallery/29.webp': 'GXik',
        '../img/gallery/30.webp': 'wLQQ',
        '../img/gallery/31.webp': 'p54q',
        '../img/gallery/32.webp': 'uN7I',
        '../img/gallery/33.webp': 'POU9',
        '../img/gallery/34.webp': 'ztfp',
        '../img/gallery/35.webp': 'FMhq',
        '../img/gallery/36.webp': 'Uhn9',
      },
    ],
    chxP: [
      function (require, module, exports) {
        'use strict';
        require('./modules/resonsive-nav');
        var e = r(require('./modules/gallery')),
          l = r(require('./gallery-souces'));
        function r(e) {
          return e && e.__esModule ? e : { default: e };
        }
        new e.default(
          document.getElementById('gallery'),
          document.querySelector('.pager'),
          document.getElementById('gallery-select'),
          l.default,
          12
        );
      },
      {
        './modules/resonsive-nav': 'WXfQ',
        './modules/gallery': 'WBGC',
        './gallery-souces': 'Yqb5',
      },
    ],
  },
  {},
  ['chxP'],
  null
);
//# sourceMappingURL=/gallery.5082022e.js.map
