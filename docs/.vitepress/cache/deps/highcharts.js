import {
  __commonJS
} from "./chunk-Y2F7D3TJ.js";

// ../packages/epicenter-vue-components/node_modules/highcharts/highcharts.js
var require_highcharts = __commonJS({
  "../packages/epicenter-vue-components/node_modules/highcharts/highcharts.js"(exports, module) {
    (function(X, N) {
      "object" === typeof module && module.exports ? (N["default"] = N, module.exports = X.document ? N(X) : N) : "function" === typeof define && define.amd ? define("highcharts/highcharts", function() {
        return N(X);
      }) : (X.Highcharts && X.Highcharts.error(16, true), X.Highcharts = N(X));
    })("undefined" !== typeof window ? window : exports, function(X) {
      function N(f, h, m2, z) {
        f.hasOwnProperty(h) || (f[h] = z.apply(null, m2));
      }
      var m = {};
      N(m, "Core/Globals.js", [], function() {
        var f = "undefined" !== typeof X ? X : "undefined" !== typeof window ? window : {}, h = f.document, m2 = f.navigator && f.navigator.userAgent || "", z = h && h.createElementNS && !!h.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect, F = /(edge|msie|trident)/i.test(m2) && !f.opera, L = -1 !== m2.indexOf("Firefox"), K = -1 !== m2.indexOf("Chrome"), C = L && 4 > parseInt(m2.split("Firefox/")[1], 10);
        return {
          product: "Highcharts",
          version: "8.2.2",
          deg2rad: 2 * Math.PI / 360,
          doc: h,
          hasBidiBug: C,
          hasTouch: !!f.TouchEvent,
          isMS: F,
          isWebKit: -1 !== m2.indexOf("AppleWebKit"),
          isFirefox: L,
          isChrome: K,
          isSafari: !K && -1 !== m2.indexOf("Safari"),
          isTouchDevice: /(Mobile|Android|Windows Phone)/.test(m2),
          SVG_NS: "http://www.w3.org/2000/svg",
          chartCount: 0,
          seriesTypes: {},
          symbolSizes: {},
          svg: z,
          win: f,
          marginNames: ["plotTop", "marginRight", "marginBottom", "plotLeft"],
          noop: function() {
          },
          charts: [],
          dateFormats: {}
        };
      });
      N(m, "Core/Utilities.js", [m["Core/Globals.js"]], function(f) {
        function h(b2, k2, t2, a2) {
          var u2 = k2 ? "Highcharts error" : "Highcharts warning";
          32 === b2 && (b2 = u2 + ": Deprecated member");
          var c2 = l(b2), H2 = c2 ? u2 + " #" + b2 + ": www.highcharts.com/errors/" + b2 + "/" : b2.toString();
          u2 = function() {
            if (k2)
              throw Error(H2);
            e.console && -1 === h.messages.indexOf(H2) && console.log(H2);
          };
          if ("undefined" !== typeof a2) {
            var d2 = "";
            c2 && (H2 += "?");
            S(a2, function(b3, k3) {
              d2 += "\n - " + k3 + ": " + b3;
              c2 && (H2 += encodeURI(k3) + "=" + encodeURI(b3));
            });
            H2 += d2;
          }
          t2 ? ca(t2, "displayError", { code: b2, message: H2, params: a2 }, u2) : u2();
          h.messages.push(H2);
        }
        function m2() {
          var b2, k2 = arguments, t2 = {}, a2 = function(b3, k3) {
            "object" !== typeof b3 && (b3 = {});
            S(k3, function(t3, u3) {
              !z(t3, true) || n(t3) || D(t3) ? b3[u3] = k3[u3] : b3[u3] = a2(b3[u3] || {}, t3);
            });
            return b3;
          };
          true === k2[0] && (t2 = k2[1], k2 = Array.prototype.slice.call(k2, 2));
          var u2 = k2.length;
          for (b2 = 0; b2 < u2; b2++)
            t2 = a2(t2, k2[b2]);
          return t2;
        }
        function z(b2, k2) {
          return !!b2 && "object" === typeof b2 && (!k2 || !x(b2));
        }
        function F(b2, k2, t2) {
          var a2;
          v(k2) ? w(t2) ? b2.setAttribute(k2, t2) : b2 && b2.getAttribute && ((a2 = b2.getAttribute(k2)) || "class" !== k2 || (a2 = b2.getAttribute(k2 + "Name"))) : S(k2, function(k3, t3) {
            b2.setAttribute(t3, k3);
          });
          return a2;
        }
        function L() {
          for (var b2 = arguments, k2 = b2.length, t2 = 0; t2 < k2; t2++) {
            var a2 = b2[t2];
            if ("undefined" !== typeof a2 && null !== a2)
              return a2;
          }
        }
        function K(b2, k2) {
          if (!b2)
            return k2;
          var t2 = b2.split(".").reverse();
          if (1 === t2.length)
            return k2[b2];
          for (b2 = t2.pop(); "undefined" !== typeof b2 && "undefined" !== typeof k2 && null !== k2; )
            k2 = k2[b2], b2 = t2.pop();
          return k2;
        }
        f.timers = [];
        var C = f.charts, y = f.doc, e = f.win;
        (h || (h = {})).messages = [];
        f.error = h;
        f.merge = m2;
        var I = f.pInt = function(b2, k2) {
          return parseInt(b2, k2 || 10);
        }, v = f.isString = function(b2) {
          return "string" === typeof b2;
        }, x = f.isArray = function(b2) {
          b2 = Object.prototype.toString.call(b2);
          return "[object Array]" === b2 || "[object Array Iterator]" === b2;
        };
        f.isObject = z;
        var D = f.isDOMElement = function(b2) {
          return z(b2) && "number" === typeof b2.nodeType;
        }, n = f.isClass = function(b2) {
          var k2 = b2 && b2.constructor;
          return !(!z(b2, true) || D(b2) || !k2 || !k2.name || "Object" === k2.name);
        }, l = f.isNumber = function(b2) {
          return "number" === typeof b2 && !isNaN(b2) && Infinity > b2 && -Infinity < b2;
        }, J = f.erase = function(b2, k2) {
          for (var t2 = b2.length; t2--; )
            if (b2[t2] === k2) {
              b2.splice(t2, 1);
              break;
            }
        }, w = f.defined = function(b2) {
          return "undefined" !== typeof b2 && null !== b2;
        };
        f.attr = F;
        var r = f.splat = function(b2) {
          return x(b2) ? b2 : [b2];
        }, d = f.syncTimeout = function(b2, k2, t2) {
          if (0 < k2)
            return setTimeout(b2, k2, t2);
          b2.call(0, t2);
          return -1;
        }, g = f.clearTimeout = function(b2) {
          w(b2) && clearTimeout(b2);
        }, c = f.extend = function(b2, k2) {
          var t2;
          b2 || (b2 = {});
          for (t2 in k2)
            b2[t2] = k2[t2];
          return b2;
        };
        f.pick = L;
        var a = f.css = function(b2, k2) {
          f.isMS && !f.svg && k2 && "undefined" !== typeof k2.opacity && (k2.filter = "alpha(opacity=" + 100 * k2.opacity + ")");
          c(b2.style, k2);
        }, q = f.createElement = function(b2, k2, t2, u2, H2) {
          b2 = y.createElement(b2);
          k2 && c(b2, k2);
          H2 && a(b2, { padding: "0", border: "none", margin: "0" });
          t2 && a(b2, t2);
          u2 && u2.appendChild(b2);
          return b2;
        }, p = f.extendClass = function(b2, k2) {
          var t2 = function() {
          };
          t2.prototype = new b2();
          c(t2.prototype, k2);
          return t2;
        }, B = f.pad = function(b2, k2, t2) {
          return Array((k2 || 2) + 1 - String(b2).replace("-", "").length).join(t2 || "0") + b2;
        }, A = f.relativeLength = function(b2, k2, t2) {
          return /%$/.test(b2) ? k2 * parseFloat(b2) / 100 + (t2 || 0) : parseFloat(b2);
        }, G = f.wrap = function(b2, k2, t2) {
          var a2 = b2[k2];
          b2[k2] = function() {
            var b3 = Array.prototype.slice.call(arguments), k3 = arguments, u2 = this;
            u2.proceed = function() {
              a2.apply(u2, arguments.length ? arguments : k3);
            };
            b3.unshift(a2);
            b3 = t2.apply(this, b3);
            u2.proceed = null;
            return b3;
          };
        }, M = f.format = function(b2, k2, t2) {
          var a2 = "{", u2 = false, H2 = [], c2 = /f$/, d2 = /\.([0-9])/, g2 = f.defaultOptions.lang, p2 = t2 && t2.time || f.time;
          for (t2 = t2 && t2.numberFormatter || R; b2; ) {
            var q2 = b2.indexOf(a2);
            if (-1 === q2)
              break;
            var U2 = b2.slice(0, q2);
            if (u2) {
              U2 = U2.split(":");
              a2 = K(U2.shift() || "", k2);
              if (U2.length && "number" === typeof a2)
                if (U2 = U2.join(":"), c2.test(U2)) {
                  var r2 = parseInt((U2.match(d2) || ["", "-1"])[1], 10);
                  null !== a2 && (a2 = t2(a2, r2, g2.decimalPoint, -1 < U2.indexOf(",") ? g2.thousandsSep : ""));
                } else
                  a2 = p2.dateFormat(U2, a2);
              H2.push(a2);
            } else
              H2.push(U2);
            b2 = b2.slice(q2 + 1);
            a2 = (u2 = !u2) ? "}" : "{";
          }
          H2.push(b2);
          return H2.join("");
        }, T = f.getMagnitude = function(b2) {
          return Math.pow(10, Math.floor(Math.log(b2) / Math.LN10));
        }, Q = f.normalizeTickInterval = function(b2, k2, a2, u2, H2) {
          var c2 = b2;
          a2 = L(
            a2,
            1
          );
          var d2 = b2 / a2;
          k2 || (k2 = H2 ? [1, 1.2, 1.5, 2, 2.5, 3, 4, 5, 6, 8, 10] : [1, 2, 2.5, 5, 10], false === u2 && (1 === a2 ? k2 = k2.filter(function(b3) {
            return 0 === b3 % 1;
          }) : 0.1 >= a2 && (k2 = [1 / a2])));
          for (u2 = 0; u2 < k2.length && !(c2 = k2[u2], H2 && c2 * a2 >= b2 || !H2 && d2 <= (k2[u2] + (k2[u2 + 1] || k2[u2])) / 2); u2++)
            ;
          return c2 = t(c2 * a2, -Math.round(Math.log(1e-3) / Math.LN10));
        }, O = f.stableSort = function(b2, k2) {
          var t2 = b2.length, a2, u2;
          for (u2 = 0; u2 < t2; u2++)
            b2[u2].safeI = u2;
          b2.sort(function(b3, t3) {
            a2 = k2(b3, t3);
            return 0 === a2 ? b3.safeI - t3.safeI : a2;
          });
          for (u2 = 0; u2 < t2; u2++)
            delete b2[u2].safeI;
        }, E = f.arrayMin = function(b2) {
          for (var k2 = b2.length, t2 = b2[0]; k2--; )
            b2[k2] < t2 && (t2 = b2[k2]);
          return t2;
        }, u = f.arrayMax = function(b2) {
          for (var k2 = b2.length, t2 = b2[0]; k2--; )
            b2[k2] > t2 && (t2 = b2[k2]);
          return t2;
        }, b = f.destroyObjectProperties = function(b2, k2) {
          S(b2, function(t2, a2) {
            t2 && t2 !== k2 && t2.destroy && t2.destroy();
            delete b2[a2];
          });
        }, k = f.discardElement = function(b2) {
          var k2 = f.garbageBin;
          k2 || (k2 = q("div"));
          b2 && k2.appendChild(b2);
          k2.innerHTML = "";
        }, t = f.correctFloat = function(b2, k2) {
          return parseFloat(b2.toPrecision(k2 || 14));
        }, H = f.timeUnits = { millisecond: 1, second: 1e3, minute: 6e4, hour: 36e5, day: 864e5, week: 6048e5, month: 24192e5, year: 314496e5 }, R = f.numberFormat = function(b2, k2, t2, a2) {
          b2 = +b2 || 0;
          k2 = +k2;
          var u2 = f.defaultOptions.lang, H2 = (b2.toString().split(".")[1] || "").split("e")[0].length, c2 = b2.toString().split("e");
          if (-1 === k2)
            k2 = Math.min(H2, 20);
          else if (!l(k2))
            k2 = 2;
          else if (k2 && c2[1] && 0 > c2[1]) {
            var d2 = k2 + +c2[1];
            0 <= d2 ? (c2[0] = (+c2[0]).toExponential(d2).split("e")[0], k2 = d2) : (c2[0] = c2[0].split(".")[0] || 0, b2 = 20 > k2 ? (c2[0] * Math.pow(10, c2[1])).toFixed(k2) : 0, c2[1] = 0);
          }
          var g2 = (Math.abs(c2[1] ? c2[0] : b2) + Math.pow(10, -Math.max(k2, H2) - 1)).toFixed(k2);
          H2 = String(I(g2));
          d2 = 3 < H2.length ? H2.length % 3 : 0;
          t2 = L(t2, u2.decimalPoint);
          a2 = L(a2, u2.thousandsSep);
          b2 = (0 > b2 ? "-" : "") + (d2 ? H2.substr(0, d2) + a2 : "");
          b2 += H2.substr(d2).replace(/(\d{3})(?=\d)/g, "$1" + a2);
          k2 && (b2 += t2 + g2.slice(-k2));
          c2[1] && 0 !== +b2 && (b2 += "e" + c2[1]);
          return b2;
        };
        Math.easeInOutSine = function(b2) {
          return -0.5 * (Math.cos(Math.PI * b2) - 1);
        };
        var U = f.getStyle = function(b2, k2, t2) {
          if ("width" === k2)
            return k2 = Math.min(b2.offsetWidth, b2.scrollWidth), t2 = b2.getBoundingClientRect && b2.getBoundingClientRect().width, t2 < k2 && t2 >= k2 - 1 && (k2 = Math.floor(t2)), Math.max(0, k2 - f.getStyle(b2, "padding-left") - f.getStyle(b2, "padding-right"));
          if ("height" === k2)
            return Math.max(0, Math.min(b2.offsetHeight, b2.scrollHeight) - f.getStyle(b2, "padding-top") - f.getStyle(b2, "padding-bottom"));
          e.getComputedStyle || h(27, true);
          if (b2 = e.getComputedStyle(b2, void 0))
            b2 = b2.getPropertyValue(k2), L(t2, "opacity" !== k2) && (b2 = I(b2));
          return b2;
        }, Z = f.inArray = function(b2, k2, t2) {
          h(32, false, void 0, { "Highcharts.inArray": "use Array.indexOf" });
          return k2.indexOf(b2, t2);
        }, aa = f.find = Array.prototype.find ? function(b2, k2) {
          return b2.find(k2);
        } : function(b2, k2) {
          var t2, a2 = b2.length;
          for (t2 = 0; t2 < a2; t2++)
            if (k2(b2[t2], t2))
              return b2[t2];
        };
        f.keys = function(b2) {
          h(
            32,
            false,
            void 0,
            { "Highcharts.keys": "use Object.keys" }
          );
          return Object.keys(b2);
        };
        var ba = f.offset = function(b2) {
          var k2 = y.documentElement;
          b2 = b2.parentElement || b2.parentNode ? b2.getBoundingClientRect() : { top: 0, left: 0 };
          return { top: b2.top + (e.pageYOffset || k2.scrollTop) - (k2.clientTop || 0), left: b2.left + (e.pageXOffset || k2.scrollLeft) - (k2.clientLeft || 0) };
        }, S = f.objectEach = function(b2, k2, t2) {
          for (var a2 in b2)
            Object.hasOwnProperty.call(b2, a2) && k2.call(t2 || b2[a2], b2[a2], a2, b2);
        };
        S({ map: "map", each: "forEach", grep: "filter", reduce: "reduce", some: "some" }, function(b2, k2) {
          f[k2] = function(t2) {
            var a2;
            h(32, false, void 0, (a2 = {}, a2["Highcharts." + k2] = "use Array." + b2, a2));
            return Array.prototype[b2].apply(t2, [].slice.call(arguments, 1));
          };
        });
        var Y = f.addEvent = function(b2, k2, t2, a2) {
          void 0 === a2 && (a2 = {});
          var u2 = b2.addEventListener || f.addEventListenerPolyfill;
          var c2 = "function" === typeof b2 && b2.prototype ? b2.prototype.protoEvents = b2.prototype.protoEvents || {} : b2.hcEvents = b2.hcEvents || {};
          f.Point && b2 instanceof f.Point && b2.series && b2.series.chart && (b2.series.chart.runTrackerClick = true);
          u2 && u2.call(b2, k2, t2, false);
          c2[k2] || (c2[k2] = []);
          c2[k2].push({ fn: t2, order: "number" === typeof a2.order ? a2.order : Infinity });
          c2[k2].sort(function(b3, k3) {
            return b3.order - k3.order;
          });
          return function() {
            W(b2, k2, t2);
          };
        }, W = f.removeEvent = function(b2, k2, t2) {
          function a2(k3, t3) {
            var a3 = b2.removeEventListener || f.removeEventListenerPolyfill;
            a3 && a3.call(b2, k3, t3, false);
          }
          function u2(t3) {
            var u3;
            if (b2.nodeName) {
              if (k2) {
                var c3 = {};
                c3[k2] = true;
              } else
                c3 = t3;
              S(c3, function(b3, k3) {
                if (t3[k3])
                  for (u3 = t3[k3].length; u3--; )
                    a2(k3, t3[k3][u3].fn);
              });
            }
          }
          var c2;
          ["protoEvents", "hcEvents"].forEach(function(H2, d2) {
            var g2 = (d2 = d2 ? b2 : b2.prototype) && d2[H2];
            g2 && (k2 ? (c2 = g2[k2] || [], t2 ? (g2[k2] = c2.filter(function(b3) {
              return t2 !== b3.fn;
            }), a2(k2, t2)) : (u2(g2), g2[k2] = [])) : (u2(g2), d2[H2] = {}));
          });
        }, ca = f.fireEvent = function(b2, k2, t2, a2) {
          var u2;
          t2 = t2 || {};
          if (y.createEvent && (b2.dispatchEvent || b2.fireEvent)) {
            var H2 = y.createEvent("Events");
            H2.initEvent(k2, true, true);
            c(H2, t2);
            b2.dispatchEvent ? b2.dispatchEvent(H2) : b2.fireEvent(k2, H2);
          } else
            t2.target || c(t2, { preventDefault: function() {
              t2.defaultPrevented = true;
            }, target: b2, type: k2 }), function(k3, a3) {
              void 0 === k3 && (k3 = []);
              void 0 === a3 && (a3 = []);
              var c2 = 0, H3 = 0, d2 = k3.length + a3.length;
              for (u2 = 0; u2 < d2; u2++)
                false === (k3[c2] ? a3[H3] ? k3[c2].order <= a3[H3].order ? k3[c2++] : a3[H3++] : k3[c2++] : a3[H3++]).fn.call(b2, t2) && t2.preventDefault();
            }(b2.protoEvents && b2.protoEvents[k2], b2.hcEvents && b2.hcEvents[k2]);
          a2 && !t2.defaultPrevented && a2.call(b2, t2);
        }, V, da = f.uniqueKey = function() {
          var b2 = Math.random().toString(36).substring(2, 9) + "-", k2 = 0;
          return function() {
            return "highcharts-" + (V ? "" : b2) + k2++;
          };
        }(), ea = f.useSerialIds = function(b2) {
          return V = L(b2, V);
        }, fa = f.isFunction = function(b2) {
          return "function" === typeof b2;
        }, ha = f.getOptions = function() {
          return f.defaultOptions;
        }, ia = f.setOptions = function(b2) {
          f.defaultOptions = m2(true, f.defaultOptions, b2);
          (b2.time || b2.global) && f.time.update(m2(f.defaultOptions.global, f.defaultOptions.time, b2.global, b2.time));
          return f.defaultOptions;
        };
        e.jQuery && (e.jQuery.fn.highcharts = function() {
          var b2 = [].slice.call(arguments);
          if (this[0])
            return b2[0] ? (new f[v(b2[0]) ? b2.shift() : "Chart"](this[0], b2[0], b2[1]), this) : C[F(this[0], "data-highcharts-chart")];
        });
        return {
          addEvent: Y,
          arrayMax: u,
          arrayMin: E,
          attr: F,
          clamp: function(b2, k2, t2) {
            return b2 > k2 ? b2 < t2 ? b2 : t2 : k2;
          },
          clearTimeout: g,
          correctFloat: t,
          createElement: q,
          css: a,
          defined: w,
          destroyObjectProperties: b,
          discardElement: k,
          erase: J,
          error: h,
          extend: c,
          extendClass: p,
          find: aa,
          fireEvent: ca,
          format: M,
          getMagnitude: T,
          getNestedProperty: K,
          getOptions: ha,
          getStyle: U,
          inArray: Z,
          isArray: x,
          isClass: n,
          isDOMElement: D,
          isFunction: fa,
          isNumber: l,
          isObject: z,
          isString: v,
          merge: m2,
          normalizeTickInterval: Q,
          numberFormat: R,
          objectEach: S,
          offset: ba,
          pad: B,
          pick: L,
          pInt: I,
          relativeLength: A,
          removeEvent: W,
          setOptions: ia,
          splat: r,
          stableSort: O,
          syncTimeout: d,
          timeUnits: H,
          uniqueKey: da,
          useSerialIds: ea,
          wrap: G
        };
      });
      N(m, "Core/Color/Color.js", [m["Core/Globals.js"], m["Core/Utilities.js"]], function(f, h) {
        var m2 = h.isNumber, z = h.merge, F = h.pInt;
        "";
        h = function() {
          function h2(K) {
            this.parsers = [{ regex: /rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]?(?:\.[0-9]+)?)\s*\)/, parse: function(h3) {
              return [F(h3[1]), F(h3[2]), F(h3[3]), parseFloat(h3[4], 10)];
            } }, { regex: /rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/, parse: function(h3) {
              return [F(h3[1]), F(h3[2]), F(h3[3]), 1];
            } }];
            this.rgba = [];
            if (f.Color !== h2)
              return new f.Color(K);
            if (!(this instanceof h2))
              return new h2(K);
            this.init(K);
          }
          h2.parse = function(f2) {
            return new h2(f2);
          };
          h2.prototype.init = function(f2) {
            var C, y;
            if ((this.input = f2 = h2.names[f2 && f2.toLowerCase ? f2.toLowerCase() : ""] || f2) && f2.stops)
              this.stops = f2.stops.map(function(v) {
                return new h2(v[1]);
              });
            else {
              if (f2 && f2.charAt && "#" === f2.charAt()) {
                var e = f2.length;
                f2 = parseInt(f2.substr(1), 16);
                7 === e ? C = [(f2 & 16711680) >> 16, (f2 & 65280) >> 8, f2 & 255, 1] : 4 === e && (C = [(f2 & 3840) >> 4 | (f2 & 3840) >> 8, (f2 & 240) >> 4 | f2 & 240, (f2 & 15) << 4 | f2 & 15, 1]);
              }
              if (!C)
                for (y = this.parsers.length; y-- && !C; ) {
                  var I = this.parsers[y];
                  (e = I.regex.exec(f2)) && (C = I.parse(e));
                }
            }
            this.rgba = C || [];
          };
          h2.prototype.get = function(f2) {
            var h3 = this.input, y = this.rgba;
            if ("undefined" !== typeof this.stops) {
              var e = z(h3);
              e.stops = [].concat(e.stops);
              this.stops.forEach(function(I, v) {
                e.stops[v] = [e.stops[v][0], I.get(f2)];
              });
            } else
              e = y && m2(y[0]) ? "rgb" === f2 || !f2 && 1 === y[3] ? "rgb(" + y[0] + "," + y[1] + "," + y[2] + ")" : "a" === f2 ? y[3] : "rgba(" + y.join(",") + ")" : h3;
            return e;
          };
          h2.prototype.brighten = function(f2) {
            var h3, y = this.rgba;
            if (this.stops)
              this.stops.forEach(function(e) {
                e.brighten(f2);
              });
            else if (m2(f2) && 0 !== f2)
              for (h3 = 0; 3 > h3; h3++)
                y[h3] += F(255 * f2), 0 > y[h3] && (y[h3] = 0), 255 < y[h3] && (y[h3] = 255);
            return this;
          };
          h2.prototype.setOpacity = function(f2) {
            this.rgba[3] = f2;
            return this;
          };
          h2.prototype.tweenTo = function(f2, h3) {
            var y = this.rgba, e = f2.rgba;
            e.length && y && y.length ? (f2 = 1 !== e[3] || 1 !== y[3], h3 = (f2 ? "rgba(" : "rgb(") + Math.round(e[0] + (y[0] - e[0]) * (1 - h3)) + "," + Math.round(e[1] + (y[1] - e[1]) * (1 - h3)) + "," + Math.round(e[2] + (y[2] - e[2]) * (1 - h3)) + (f2 ? "," + (e[3] + (y[3] - e[3]) * (1 - h3)) : "") + ")") : h3 = f2.input || "none";
            return h3;
          };
          h2.names = { white: "#ffffff", black: "#000000" };
          return h2;
        }();
        f.Color = h;
        f.color = h.parse;
        return h;
      });
      N(m, "Core/Animation/Fx.js", [m["Core/Globals.js"], m["Core/Utilities.js"]], function(f, h) {
        var m2 = f.win, z = h.isNumber, F = h.objectEach;
        h = function() {
          function h2(f2, h3, y) {
            this.pos = NaN;
            this.options = h3;
            this.elem = f2;
            this.prop = y;
          }
          h2.prototype.dSetter = function() {
            var f2 = this.paths, h3 = f2 && f2[0];
            f2 = f2 && f2[1];
            var y = [], e = this.now || 0;
            if (1 !== e && h3 && f2)
              if (h3.length === f2.length && 1 > e)
                for (var I = 0; I < f2.length; I++) {
                  for (var v = h3[I], x = f2[I], D = [], n = 0; n < x.length; n++) {
                    var l = v[n], J = x[n];
                    D[n] = "number" === typeof l && "number" === typeof J && ("A" !== x[0] || 4 !== n && 5 !== n) ? l + e * (J - l) : J;
                  }
                  y.push(D);
                }
              else
                y = f2;
            else
              y = this.toD || [];
            this.elem.attr("d", y, void 0, true);
          };
          h2.prototype.update = function() {
            var f2 = this.elem, h3 = this.prop, y = this.now, e = this.options.step;
            if (this[h3 + "Setter"])
              this[h3 + "Setter"]();
            else
              f2.attr ? f2.element && f2.attr(h3, y, null, true) : f2.style[h3] = y + this.unit;
            e && e.call(f2, y, this);
          };
          h2.prototype.run = function(h3, C, y) {
            var e = this, I = e.options, v = function(n) {
              return v.stopped ? false : e.step(n);
            }, x = m2.requestAnimationFrame || function(n) {
              setTimeout(
                n,
                13
              );
            }, D = function() {
              for (var n = 0; n < f.timers.length; n++)
                f.timers[n]() || f.timers.splice(n--, 1);
              f.timers.length && x(D);
            };
            h3 !== C || this.elem["forceAnimate:" + this.prop] ? (this.startTime = +/* @__PURE__ */ new Date(), this.start = h3, this.end = C, this.unit = y, this.now = this.start, this.pos = 0, v.elem = this.elem, v.prop = this.prop, v() && 1 === f.timers.push(v) && x(D)) : (delete I.curAnim[this.prop], I.complete && 0 === Object.keys(I.curAnim).length && I.complete.call(this.elem));
          };
          h2.prototype.step = function(f2) {
            var h3 = +/* @__PURE__ */ new Date(), y = this.options, e = this.elem, I = y.complete, v = y.duration, x = y.curAnim;
            if (e.attr && !e.element)
              f2 = false;
            else if (f2 || h3 >= v + this.startTime) {
              this.now = this.end;
              this.pos = 1;
              this.update();
              var D = x[this.prop] = true;
              F(x, function(n) {
                true !== n && (D = false);
              });
              D && I && I.call(e);
              f2 = false;
            } else
              this.pos = y.easing((h3 - this.startTime) / v), this.now = this.start + (this.end - this.start) * this.pos, this.update(), f2 = true;
            return f2;
          };
          h2.prototype.initPath = function(f2, h3, y) {
            function e(r, d) {
              for (; r.length < w; ) {
                var g = r[0], c = d[w - r.length];
                c && "M" === g[0] && (r[0] = "C" === c[0] ? ["C", g[1], g[2], g[1], g[2], g[1], g[2]] : [
                  "L",
                  g[1],
                  g[2]
                ]);
                r.unshift(g);
                D && r.push(r[r.length - 1]);
              }
            }
            function I(r, d) {
              for (; r.length < w; )
                if (d = r[r.length / n - 1].slice(), "C" === d[0] && (d[1] = d[5], d[2] = d[6]), D) {
                  var g = r[r.length / n].slice();
                  r.splice(r.length / 2, 0, d, g);
                } else
                  r.push(d);
            }
            var v = f2.startX, x = f2.endX;
            h3 = h3 && h3.slice();
            y = y.slice();
            var D = f2.isArea, n = D ? 2 : 1;
            if (!h3)
              return [y, y];
            if (v && x) {
              for (f2 = 0; f2 < v.length; f2++)
                if (v[f2] === x[0]) {
                  var l = f2;
                  break;
                } else if (v[0] === x[x.length - v.length + f2]) {
                  l = f2;
                  var J = true;
                  break;
                } else if (v[v.length - 1] === x[x.length - v.length + f2]) {
                  l = v.length - f2;
                  break;
                }
              "undefined" === typeof l && (h3 = []);
            }
            if (h3.length && z(l)) {
              var w = y.length + l * n;
              J ? (e(h3, y), I(y, h3)) : (e(y, h3), I(h3, y));
            }
            return [h3, y];
          };
          h2.prototype.fillSetter = function() {
            h2.prototype.strokeSetter.apply(this, arguments);
          };
          h2.prototype.strokeSetter = function() {
            this.elem.attr(this.prop, f.color(this.start).tweenTo(f.color(this.end), this.pos), null, true);
          };
          return h2;
        }();
        return f.Fx = h;
      });
      N(m, "Core/Animation/AnimationUtilities.js", [m["Core/Animation/Fx.js"], m["Core/Globals.js"], m["Core/Utilities.js"]], function(f, h, m2) {
        var z = m2.defined, P = m2.getStyle, L = m2.isArray, K = m2.isNumber, C = m2.isObject, y = m2.merge, e = m2.objectEach, I = m2.pick;
        m2 = h.setAnimation = function(l, n2) {
          n2.renderer.globalAnimation = I(l, n2.options.chart.animation, true);
        };
        var v = h.animObject = function(l) {
          return C(l) ? h.merge({ duration: 500, defer: 0 }, l) : { duration: l ? 500 : 0, defer: 0 };
        }, x = h.getDeferredAnimation = function(l, n2, w) {
          var r = v(n2), d = 0, g = 0;
          (w ? [w] : l.series).forEach(function(c) {
            c = v(c.options.animation);
            d = n2 && z(n2.defer) ? r.defer : Math.max(d, c.duration + c.defer);
            g = Math.min(r.duration, c.duration);
          });
          l.renderer.forExport && (d = 0);
          return { defer: Math.max(0, d - g), duration: Math.min(d, g) };
        }, D = h.animate = function(l, v2, w) {
          var r, d = "", g, c;
          if (!C(w)) {
            var a = arguments;
            w = { duration: a[2], easing: a[3], complete: a[4] };
          }
          K(w.duration) || (w.duration = 400);
          w.easing = "function" === typeof w.easing ? w.easing : Math[w.easing] || Math.easeInOutSine;
          w.curAnim = y(v2);
          e(v2, function(a2, p) {
            n(l, p);
            c = new f(l, w, p);
            g = null;
            "d" === p && L(v2.d) ? (c.paths = c.initPath(l, l.pathArray, v2.d), c.toD = v2.d, r = 0, g = 1) : l.attr ? r = l.attr(p) : (r = parseFloat(P(l, p)) || 0, "opacity" !== p && (d = "px"));
            g || (g = a2);
            g && g.match && g.match("px") && (g = g.replace(/px/g, ""));
            c.run(r, g, d);
          });
        }, n = h.stop = function(l, n2) {
          for (var w = h.timers.length; w--; )
            h.timers[w].elem !== l || n2 && n2 !== h.timers[w].prop || (h.timers[w].stopped = true);
        };
        return { animate: D, animObject: v, getDeferredAnimation: x, setAnimation: m2, stop: n };
      });
      N(m, "Core/Renderer/SVG/SVGElement.js", [m["Core/Animation/AnimationUtilities.js"], m["Core/Color/Color.js"], m["Core/Globals.js"], m["Core/Utilities.js"]], function(f, h, m2, z) {
        var F = f.animate, P = f.animObject, K = f.stop, C = m2.deg2rad, y = m2.doc, e = m2.hasTouch, I = m2.isFirefox, v = m2.noop, x = m2.svg, D = m2.SVG_NS, n = m2.win, l = z.attr, J = z.createElement, w = z.css, r = z.defined, d = z.erase, g = z.extend, c = z.fireEvent, a = z.isArray, q = z.isFunction, p = z.isNumber, B = z.isString, A = z.merge, G = z.objectEach, M = z.pick, T = z.pInt, Q = z.syncTimeout, O = z.uniqueKey;
        "";
        f = function() {
          function E() {
            this.height = this.element = void 0;
            this.opacity = 1;
            this.renderer = void 0;
            this.SVG_NS = D;
            this.symbolCustomAttribs = "x y width height r start end innerR anchorX anchorY rounded".split(" ");
            this.width = void 0;
          }
          E.prototype._defaultGetter = function(a2) {
            a2 = M(this[a2 + "Value"], this[a2], this.element ? this.element.getAttribute(a2) : null, 0);
            /^[\-0-9\.]+$/.test(a2) && (a2 = parseFloat(a2));
            return a2;
          };
          E.prototype._defaultSetter = function(a2, b, k) {
            k.setAttribute(b, a2);
          };
          E.prototype.add = function(a2) {
            var b = this.renderer, k = this.element;
            a2 && (this.parentGroup = a2);
            this.parentInverted = a2 && a2.inverted;
            "undefined" !== typeof this.textStr && "text" === this.element.nodeName && b.buildText(this);
            this.added = true;
            if (!a2 || a2.handleZ || this.zIndex)
              var t = this.zIndexSetter();
            t || (a2 ? a2.element : b.box).appendChild(k);
            if (this.onAdd)
              this.onAdd();
            return this;
          };
          E.prototype.addClass = function(a2, b) {
            var k = b ? "" : this.attr("class") || "";
            a2 = (a2 || "").split(/ /g).reduce(function(b2, a3) {
              -1 === k.indexOf(a3) && b2.push(a3);
              return b2;
            }, k ? [k] : []).join(" ");
            a2 !== k && this.attr("class", a2);
            return this;
          };
          E.prototype.afterSetters = function() {
            this.doTransform && (this.updateTransform(), this.doTransform = false);
          };
          E.prototype.align = function(a2, b, k) {
            var t, c2 = {};
            var u = this.renderer;
            var g2 = u.alignedObjects;
            var p2, q2;
            if (a2) {
              if (this.alignOptions = a2, this.alignByTranslate = b, !k || B(k))
                this.alignTo = t = k || "renderer", d(g2, this), g2.push(this), k = void 0;
            } else
              a2 = this.alignOptions, b = this.alignByTranslate, t = this.alignTo;
            k = M(k, u[t], u);
            t = a2.align;
            u = a2.verticalAlign;
            g2 = (k.x || 0) + (a2.x || 0);
            var r2 = (k.y || 0) + (a2.y || 0);
            "right" === t ? p2 = 1 : "center" === t && (p2 = 2);
            p2 && (g2 += (k.width - (a2.width || 0)) / p2);
            c2[b ? "translateX" : "x"] = Math.round(g2);
            "bottom" === u ? q2 = 1 : "middle" === u && (q2 = 2);
            q2 && (r2 += (k.height - (a2.height || 0)) / q2);
            c2[b ? "translateY" : "y"] = Math.round(r2);
            this[this.placed ? "animate" : "attr"](c2);
            this.placed = true;
            this.alignAttr = c2;
            return this;
          };
          E.prototype.alignSetter = function(a2) {
            var b = { left: "start", center: "middle", right: "end" };
            b[a2] && (this.alignValue = a2, this.element.setAttribute("text-anchor", b[a2]));
          };
          E.prototype.animate = function(a2, b, k) {
            var t = this, c2 = P(M(b, this.renderer.globalAnimation, true));
            b = c2.defer;
            M(y.hidden, y.msHidden, y.webkitHidden, false) && (c2.duration = 0);
            0 !== c2.duration ? (k && (c2.complete = k), Q(function() {
              t.element && F(t, a2, c2);
            }, b)) : (this.attr(a2, void 0, k), G(a2, function(b2, k2) {
              c2.step && c2.step.call(this, b2, { prop: k2, pos: 1 });
            }, this));
            return this;
          };
          E.prototype.applyTextOutline = function(a2) {
            var b = this.element, k;
            -1 !== a2.indexOf("contrast") && (a2 = a2.replace(/contrast/g, this.renderer.getContrast(b.style.fill)));
            a2 = a2.split(" ");
            var t = a2[a2.length - 1];
            if ((k = a2[0]) && "none" !== k && m2.svg) {
              this.fakeTS = true;
              a2 = [].slice.call(b.getElementsByTagName("tspan"));
              this.ySetter = this.xSetter;
              k = k.replace(/(^[\d\.]+)(.*?)$/g, function(b2, k2, t2) {
                return 2 * k2 + t2;
              });
              this.removeTextOutline(a2);
              var c2 = b.textContent ? /^[\u0591-\u065F\u066A-\u07FF\uFB1D-\uFDFD\uFE70-\uFEFC]/.test(b.textContent) : false;
              var u = b.firstChild;
              a2.forEach(function(a3, H) {
                0 === H && (a3.setAttribute("x", b.getAttribute("x")), H = b.getAttribute("y"), a3.setAttribute("y", H || 0), null === H && b.setAttribute("y", 0));
                H = a3.cloneNode(true);
                l(c2 && !I ? a3 : H, { "class": "highcharts-text-outline", fill: t, stroke: t, "stroke-width": k, "stroke-linejoin": "round" });
                b.insertBefore(H, u);
              });
              c2 && I && a2[0] && (a2 = a2[0].cloneNode(true), a2.textContent = " ", b.insertBefore(a2, u));
            }
          };
          E.prototype.attr = function(a2, b, k, t) {
            var c2 = this.element, u, d2 = this, g2, p2, q2 = this.symbolCustomAttribs;
            if ("string" === typeof a2 && "undefined" !== typeof b) {
              var r2 = a2;
              a2 = {};
              a2[r2] = b;
            }
            "string" === typeof a2 ? d2 = (this[a2 + "Getter"] || this._defaultGetter).call(this, a2, c2) : (G(a2, function(b2, k2) {
              g2 = false;
              t || K(this, k2);
              this.symbolName && -1 !== q2.indexOf(k2) && (u || (this.symbolAttr(a2), u = true), g2 = true);
              !this.rotation || "x" !== k2 && "y" !== k2 || (this.doTransform = true);
              g2 || (p2 = this[k2 + "Setter"] || this._defaultSetter, p2.call(this, b2, k2, c2), !this.styledMode && this.shadows && /^(width|height|visibility|x|y|d|transform|cx|cy|r)$/.test(k2) && this.updateShadows(k2, b2, p2));
            }, this), this.afterSetters());
            k && k.call(this);
            return d2;
          };
          E.prototype.clip = function(a2) {
            return this.attr("clip-path", a2 ? "url(" + this.renderer.url + "#" + a2.id + ")" : "none");
          };
          E.prototype.crisp = function(a2, b) {
            b = b || a2.strokeWidth || 0;
            var k = Math.round(b) % 2 / 2;
            a2.x = Math.floor(a2.x || this.x || 0) + k;
            a2.y = Math.floor(a2.y || this.y || 0) + k;
            a2.width = Math.floor((a2.width || this.width || 0) - 2 * k);
            a2.height = Math.floor((a2.height || this.height || 0) - 2 * k);
            r(a2.strokeWidth) && (a2.strokeWidth = b);
            return a2;
          };
          E.prototype.complexColor = function(u, b, k) {
            var t = this.renderer, H, d2, g2, p2, q2, B2, l2, n2, w2, E2, V = [], v2;
            c(this.renderer, "complexColor", { args: arguments }, function() {
              u.radialGradient ? d2 = "radialGradient" : u.linearGradient && (d2 = "linearGradient");
              if (d2) {
                g2 = u[d2];
                q2 = t.gradients;
                B2 = u.stops;
                w2 = k.radialReference;
                a(g2) && (u[d2] = g2 = { x1: g2[0], y1: g2[1], x2: g2[2], y2: g2[3], gradientUnits: "userSpaceOnUse" });
                "radialGradient" === d2 && w2 && !r(g2.gradientUnits) && (p2 = g2, g2 = A(g2, t.getRadialAttr(w2, p2), { gradientUnits: "userSpaceOnUse" }));
                G(g2, function(b2, k2) {
                  "id" !== k2 && V.push(k2, b2);
                });
                G(B2, function(b2) {
                  V.push(b2);
                });
                V = V.join(",");
                if (q2[V])
                  E2 = q2[V].attr("id");
                else {
                  g2.id = E2 = O();
                  var c2 = q2[V] = t.createElement(d2).attr(g2).add(t.defs);
                  c2.radAttr = p2;
                  c2.stops = [];
                  B2.forEach(function(b2) {
                    0 === b2[1].indexOf("rgba") ? (H = h.parse(b2[1]), l2 = H.get("rgb"), n2 = H.get("a")) : (l2 = b2[1], n2 = 1);
                    b2 = t.createElement("stop").attr({ offset: b2[0], "stop-color": l2, "stop-opacity": n2 }).add(c2);
                    c2.stops.push(b2);
                  });
                }
                v2 = "url(" + t.url + "#" + E2 + ")";
                k.setAttribute(b, v2);
                k.gradient = V;
                u.toString = function() {
                  return v2;
                };
              }
            });
          };
          E.prototype.css = function(a2) {
            var b = this.styles, k = {}, t = this.element, c2 = "", d2 = !b, u = ["textOutline", "textOverflow", "width"];
            a2 && a2.color && (a2.fill = a2.color);
            b && G(a2, function(a3, t2) {
              b && b[t2] !== a3 && (k[t2] = a3, d2 = true);
            });
            if (d2) {
              b && (a2 = g(b, k));
              if (a2) {
                if (null === a2.width || "auto" === a2.width)
                  delete this.textWidth;
                else if ("text" === t.nodeName.toLowerCase() && a2.width)
                  var p2 = this.textWidth = T(a2.width);
              }
              this.styles = a2;
              p2 && !x && this.renderer.forExport && delete a2.width;
              if (t.namespaceURI === this.SVG_NS) {
                var q2 = function(b2, k2) {
                  return "-" + k2.toLowerCase();
                };
                G(a2, function(b2, k2) {
                  -1 === u.indexOf(k2) && (c2 += k2.replace(/([A-Z])/g, q2) + ":" + b2 + ";");
                });
                c2 && l(t, "style", c2);
              } else
                w(t, a2);
              this.added && ("text" === this.element.nodeName && this.renderer.buildText(this), a2 && a2.textOutline && this.applyTextOutline(a2.textOutline));
            }
            return this;
          };
          E.prototype.dashstyleSetter = function(a2) {
            var b = this["stroke-width"];
            "inherit" === b && (b = 1);
            if (a2 = a2 && a2.toLowerCase()) {
              var k = a2.replace("shortdashdotdot", "3,1,1,1,1,1,").replace("shortdashdot", "3,1,1,1").replace("shortdot", "1,1,").replace("shortdash", "3,1,").replace("longdash", "8,3,").replace(/dot/g, "1,3,").replace("dash", "4,3,").replace(/,$/, "").split(",");
              for (a2 = k.length; a2--; )
                k[a2] = "" + T(k[a2]) * M(b, NaN);
              a2 = k.join(",").replace(/NaN/g, "none");
              this.element.setAttribute("stroke-dasharray", a2);
            }
          };
          E.prototype.destroy = function() {
            var a2 = this, b = a2.element || {}, k = a2.renderer, t = k.isSVG && "SPAN" === b.nodeName && a2.parentGroup || void 0, c2 = b.ownerSVGElement;
            b.onclick = b.onmouseout = b.onmouseover = b.onmousemove = b.point = null;
            K(a2);
            if (a2.clipPath && c2) {
              var g2 = a2.clipPath;
              [].forEach.call(c2.querySelectorAll("[clip-path],[CLIP-PATH]"), function(b2) {
                -1 < b2.getAttribute("clip-path").indexOf(g2.element.id) && b2.removeAttribute("clip-path");
              });
              a2.clipPath = g2.destroy();
            }
            if (a2.stops) {
              for (c2 = 0; c2 < a2.stops.length; c2++)
                a2.stops[c2].destroy();
              a2.stops.length = 0;
              a2.stops = void 0;
            }
            a2.safeRemoveChild(b);
            for (k.styledMode || a2.destroyShadows(); t && t.div && 0 === t.div.childNodes.length; )
              b = t.parentGroup, a2.safeRemoveChild(t.div), delete t.div, t = b;
            a2.alignTo && d(k.alignedObjects, a2);
            G(a2, function(b2, k2) {
              a2[k2] && a2[k2].parentGroup === a2 && a2[k2].destroy && a2[k2].destroy();
              delete a2[k2];
            });
          };
          E.prototype.destroyShadows = function() {
            (this.shadows || []).forEach(function(a2) {
              this.safeRemoveChild(a2);
            }, this);
            this.shadows = void 0;
          };
          E.prototype.destroyTextPath = function(a2, b) {
            var k = a2.getElementsByTagName("text")[0];
            if (k) {
              if (k.removeAttribute("dx"), k.removeAttribute("dy"), b.element.setAttribute("id", ""), this.textPathWrapper && k.getElementsByTagName("textPath").length) {
                for (a2 = this.textPathWrapper.element.childNodes; a2.length; )
                  k.appendChild(a2[0]);
                k.removeChild(this.textPathWrapper.element);
              }
            } else if (a2.getAttribute("dx") || a2.getAttribute("dy"))
              a2.removeAttribute("dx"), a2.removeAttribute("dy");
            this.textPathWrapper && (this.textPathWrapper = this.textPathWrapper.destroy());
          };
          E.prototype.dSetter = function(c2, b, k) {
            a(c2) && ("string" === typeof c2[0] && (c2 = this.renderer.pathToSegments(c2)), this.pathArray = c2, c2 = c2.reduce(function(b2, k2, a2) {
              return k2 && k2.join ? (a2 ? b2 + " " : "") + k2.join(" ") : (k2 || "").toString();
            }, ""));
            /(NaN| {2}|^$)/.test(c2) && (c2 = "M 0 0");
            this[b] !== c2 && (k.setAttribute(b, c2), this[b] = c2);
          };
          E.prototype.fadeOut = function(a2) {
            var b = this;
            b.animate({ opacity: 0 }, { duration: M(a2, 150), complete: function() {
              b.attr({ y: -9999 }).hide();
            } });
          };
          E.prototype.fillSetter = function(a2, b, k) {
            "string" === typeof a2 ? k.setAttribute(b, a2) : a2 && this.complexColor(a2, b, k);
          };
          E.prototype.getBBox = function(a2, b) {
            var k, t = this.renderer, c2 = this.element, d2 = this.styles, p2 = this.textStr, u = t.cache, B2 = t.cacheKeys, A2 = c2.namespaceURI === this.SVG_NS;
            b = M(b, this.rotation, 0);
            var l2 = t.styledMode ? c2 && E.prototype.getStyle.call(c2, "font-size") : d2 && d2.fontSize;
            if (r(p2)) {
              var n2 = p2.toString();
              -1 === n2.indexOf("<") && (n2 = n2.replace(/[0-9]/g, "0"));
              n2 += ["", b, l2, this.textWidth, d2 && d2.textOverflow, d2 && d2.fontWeight].join();
            }
            n2 && !a2 && (k = u[n2]);
            if (!k) {
              if (A2 || t.forExport) {
                try {
                  var w2 = this.fakeTS && function(b2) {
                    [].forEach.call(c2.querySelectorAll(".highcharts-text-outline"), function(k2) {
                      k2.style.display = b2;
                    });
                  };
                  q(w2) && w2("none");
                  k = c2.getBBox ? g({}, c2.getBBox()) : { width: c2.offsetWidth, height: c2.offsetHeight };
                  q(w2) && w2("");
                } catch (ca) {
                  "";
                }
                if (!k || 0 > k.width)
                  k = { width: 0, height: 0 };
              } else
                k = this.htmlGetBBox();
              t.isSVG && (a2 = k.width, t = k.height, A2 && (k.height = t = { "11px,17": 14, "13px,20": 16 }[d2 && d2.fontSize + "," + Math.round(t)] || t), b && (d2 = b * C, k.width = Math.abs(t * Math.sin(d2)) + Math.abs(a2 * Math.cos(d2)), k.height = Math.abs(t * Math.cos(d2)) + Math.abs(a2 * Math.sin(d2))));
              if (n2 && 0 < k.height) {
                for (; 250 < B2.length; )
                  delete u[B2.shift()];
                u[n2] || B2.push(n2);
                u[n2] = k;
              }
            }
            return k;
          };
          E.prototype.getStyle = function(a2) {
            return n.getComputedStyle(this.element || this, "").getPropertyValue(a2);
          };
          E.prototype.hasClass = function(a2) {
            return -1 !== ("" + this.attr("class")).split(" ").indexOf(a2);
          };
          E.prototype.hide = function(a2) {
            a2 ? this.attr({ y: -9999 }) : this.attr({ visibility: "hidden" });
            return this;
          };
          E.prototype.htmlGetBBox = function() {
            return { height: 0, width: 0, x: 0, y: 0 };
          };
          E.prototype.init = function(a2, b) {
            this.element = "span" === b ? J(b) : y.createElementNS(this.SVG_NS, b);
            this.renderer = a2;
            c(this, "afterInit");
          };
          E.prototype.invert = function(a2) {
            this.inverted = a2;
            this.updateTransform();
            return this;
          };
          E.prototype.on = function(a2, b) {
            var k, t, c2 = this.element, d2;
            e && "click" === a2 ? (c2.ontouchstart = function(b2) {
              k = b2.touches[0].clientX;
              t = b2.touches[0].clientY;
            }, c2.ontouchend = function(a3) {
              k && 4 <= Math.sqrt(Math.pow(k - a3.changedTouches[0].clientX, 2) + Math.pow(t - a3.changedTouches[0].clientY, 2)) || b.call(c2, a3);
              d2 = true;
              false !== a3.cancelable && a3.preventDefault();
            }, c2.onclick = function(k2) {
              d2 || b.call(c2, k2);
            }) : c2["on" + a2] = b;
            return this;
          };
          E.prototype.opacitySetter = function(a2, b, k) {
            this.opacity = a2 = Number(Number(a2).toFixed(3));
            k.setAttribute(b, a2);
          };
          E.prototype.removeClass = function(a2) {
            return this.attr("class", ("" + this.attr("class")).replace(B(a2) ? new RegExp("(^| )" + a2 + "( |$)") : a2, " ").replace(/ +/g, " ").trim());
          };
          E.prototype.removeTextOutline = function(a2) {
            for (var b = a2.length, k; b--; )
              k = a2[b], "highcharts-text-outline" === k.getAttribute("class") && d(a2, this.element.removeChild(k));
          };
          E.prototype.safeRemoveChild = function(a2) {
            var b = a2.parentNode;
            b && b.removeChild(a2);
          };
          E.prototype.setRadialReference = function(a2) {
            var b = this.element.gradient && this.renderer.gradients[this.element.gradient];
            this.element.radialReference = a2;
            b && b.radAttr && b.animate(this.renderer.getRadialAttr(a2, b.radAttr));
            return this;
          };
          E.prototype.setTextPath = function(a2, b) {
            var k = this.element, t = { textAnchor: "text-anchor" }, c2 = false, d2 = this.textPathWrapper, g2 = !d2;
            b = A(true, { enabled: true, attributes: { dy: -5, startOffset: "50%", textAnchor: "middle" } }, b);
            var q2 = b.attributes;
            if (a2 && b && b.enabled) {
              d2 && null === d2.element.parentNode ? (g2 = true, d2 = d2.destroy()) : d2 && this.removeTextOutline.call(d2.parentGroup, [].slice.call(k.getElementsByTagName("tspan")));
              this.options && this.options.padding && (q2.dx = -this.options.padding);
              d2 || (this.textPathWrapper = d2 = this.renderer.createElement("textPath"), c2 = true);
              var u = d2.element;
              (b = a2.element.getAttribute("id")) || a2.element.setAttribute("id", b = O());
              if (g2)
                for (a2 = k.getElementsByTagName("tspan"); a2.length; )
                  a2[0].setAttribute("y", 0), p(q2.dx) && a2[0].setAttribute("x", -q2.dx), u.appendChild(a2[0]);
              c2 && d2 && d2.add({ element: this.text ? this.text.element : k });
              u.setAttributeNS("http://www.w3.org/1999/xlink", "href", this.renderer.url + "#" + b);
              r(q2.dy) && (u.parentNode.setAttribute("dy", q2.dy), delete q2.dy);
              r(q2.dx) && (u.parentNode.setAttribute("dx", q2.dx), delete q2.dx);
              G(q2, function(b2, k2) {
                u.setAttribute(t[k2] || k2, b2);
              });
              k.removeAttribute("transform");
              this.removeTextOutline.call(d2, [].slice.call(k.getElementsByTagName("tspan")));
              this.text && !this.renderer.styledMode && this.attr({ fill: "none", "stroke-width": 0 });
              this.applyTextOutline = this.updateTransform = v;
            } else
              d2 && (delete this.updateTransform, delete this.applyTextOutline, this.destroyTextPath(k, a2), this.updateTransform(), this.options && this.options.rotation && this.applyTextOutline(this.options.style.textOutline));
            return this;
          };
          E.prototype.shadow = function(a2, b, k) {
            var t = [], c2 = this.element, d2 = false, p2 = this.oldShadowOptions;
            var q2 = { color: "#000000", offsetX: 1, offsetY: 1, opacity: 0.15, width: 3 };
            var u;
            true === a2 ? u = q2 : "object" === typeof a2 && (u = g(q2, a2));
            u && (u && p2 && G(u, function(b2, k2) {
              b2 !== p2[k2] && (d2 = true);
            }), d2 && this.destroyShadows(), this.oldShadowOptions = u);
            if (!u)
              this.destroyShadows();
            else if (!this.shadows) {
              var r2 = u.opacity / u.width;
              var B2 = this.parentInverted ? "translate(-1,-1)" : "translate(" + u.offsetX + ", " + u.offsetY + ")";
              for (q2 = 1; q2 <= u.width; q2++) {
                var A2 = c2.cloneNode(false);
                var n2 = 2 * u.width + 1 - 2 * q2;
                l(A2, { stroke: a2.color || "#000000", "stroke-opacity": r2 * q2, "stroke-width": n2, transform: B2, fill: "none" });
                A2.setAttribute("class", (A2.getAttribute("class") || "") + " highcharts-shadow");
                k && (l(A2, "height", Math.max(l(A2, "height") - n2, 0)), A2.cutHeight = n2);
                b ? b.element.appendChild(A2) : c2.parentNode && c2.parentNode.insertBefore(A2, c2);
                t.push(A2);
              }
              this.shadows = t;
            }
            return this;
          };
          E.prototype.show = function(a2) {
            return this.attr({ visibility: a2 ? "inherit" : "visible" });
          };
          E.prototype.strokeSetter = function(a2, b, k) {
            this[b] = a2;
            this.stroke && this["stroke-width"] ? (E.prototype.fillSetter.call(this, this.stroke, "stroke", k), k.setAttribute("stroke-width", this["stroke-width"]), this.hasStroke = true) : "stroke-width" === b && 0 === a2 && this.hasStroke ? (k.removeAttribute("stroke"), this.hasStroke = false) : this.renderer.styledMode && this["stroke-width"] && (k.setAttribute("stroke-width", this["stroke-width"]), this.hasStroke = true);
          };
          E.prototype.strokeWidth = function() {
            if (!this.renderer.styledMode)
              return this["stroke-width"] || 0;
            var a2 = this.getStyle("stroke-width"), b = 0;
            if (a2.indexOf("px") === a2.length - 2)
              b = T(a2);
            else if ("" !== a2) {
              var k = y.createElementNS(D, "rect");
              l(k, { width: a2, "stroke-width": 0 });
              this.element.parentNode.appendChild(k);
              b = k.getBBox().width;
              k.parentNode.removeChild(k);
            }
            return b;
          };
          E.prototype.symbolAttr = function(a2) {
            var b = this;
            "x y r start end width height innerR anchorX anchorY clockwise".split(" ").forEach(function(k) {
              b[k] = M(a2[k], b[k]);
            });
            b.attr({ d: b.renderer.symbols[b.symbolName](b.x, b.y, b.width, b.height, b) });
          };
          E.prototype.textSetter = function(a2) {
            a2 !== this.textStr && (delete this.textPxLength, this.textStr = a2, this.added && this.renderer.buildText(this));
          };
          E.prototype.titleSetter = function(a2) {
            var b = this.element.getElementsByTagName("title")[0];
            b || (b = y.createElementNS(this.SVG_NS, "title"), this.element.appendChild(b));
            b.firstChild && b.removeChild(b.firstChild);
            b.appendChild(y.createTextNode(String(M(a2, "")).replace(/<[^>]*>/g, "").replace(
              /&lt;/g,
              "<"
            ).replace(/&gt;/g, ">")));
          };
          E.prototype.toFront = function() {
            var a2 = this.element;
            a2.parentNode.appendChild(a2);
            return this;
          };
          E.prototype.translate = function(a2, b) {
            return this.attr({ translateX: a2, translateY: b });
          };
          E.prototype.updateShadows = function(a2, b, k) {
            var t = this.shadows;
            if (t)
              for (var c2 = t.length; c2--; )
                k.call(t[c2], "height" === a2 ? Math.max(b - (t[c2].cutHeight || 0), 0) : "d" === a2 ? this.d : b, a2, t[c2]);
          };
          E.prototype.updateTransform = function() {
            var a2 = this.translateX || 0, b = this.translateY || 0, k = this.scaleX, t = this.scaleY, c2 = this.inverted, d2 = this.rotation, g2 = this.matrix, p2 = this.element;
            c2 && (a2 += this.width, b += this.height);
            a2 = ["translate(" + a2 + "," + b + ")"];
            r(g2) && a2.push("matrix(" + g2.join(",") + ")");
            c2 ? a2.push("rotate(90) scale(-1,1)") : d2 && a2.push("rotate(" + d2 + " " + M(this.rotationOriginX, p2.getAttribute("x"), 0) + " " + M(this.rotationOriginY, p2.getAttribute("y") || 0) + ")");
            (r(k) || r(t)) && a2.push("scale(" + M(k, 1) + " " + M(t, 1) + ")");
            a2.length && p2.setAttribute("transform", a2.join(" "));
          };
          E.prototype.visibilitySetter = function(a2, b, k) {
            "inherit" === a2 ? k.removeAttribute(b) : this[b] !== a2 && k.setAttribute(b, a2);
            this[b] = a2;
          };
          E.prototype.xGetter = function(a2) {
            "circle" === this.element.nodeName && ("x" === a2 ? a2 = "cx" : "y" === a2 && (a2 = "cy"));
            return this._defaultGetter(a2);
          };
          E.prototype.zIndexSetter = function(a2, b) {
            var k = this.renderer, t = this.parentGroup, c2 = (t || k).element || k.box, d2 = this.element, g2 = false;
            k = c2 === k.box;
            var p2 = this.added;
            var q2;
            r(a2) ? (d2.setAttribute("data-z-index", a2), a2 = +a2, this[b] === a2 && (p2 = false)) : r(this[b]) && d2.removeAttribute("data-z-index");
            this[b] = a2;
            if (p2) {
              (a2 = this.zIndex) && t && (t.handleZ = true);
              b = c2.childNodes;
              for (q2 = b.length - 1; 0 <= q2 && !g2; q2--) {
                t = b[q2];
                p2 = t.getAttribute("data-z-index");
                var u = !r(p2);
                if (t !== d2) {
                  if (0 > a2 && u && !k && !q2)
                    c2.insertBefore(d2, b[q2]), g2 = true;
                  else if (T(p2) <= a2 || u && (!r(a2) || 0 <= a2))
                    c2.insertBefore(d2, b[q2 + 1] || null), g2 = true;
                }
              }
              g2 || (c2.insertBefore(d2, b[k ? 3 : 0] || null), g2 = true);
            }
            return g2;
          };
          return E;
        }();
        f.prototype["stroke-widthSetter"] = f.prototype.strokeSetter;
        f.prototype.yGetter = f.prototype.xGetter;
        f.prototype.matrixSetter = f.prototype.rotationOriginXSetter = f.prototype.rotationOriginYSetter = f.prototype.rotationSetter = f.prototype.scaleXSetter = f.prototype.scaleYSetter = f.prototype.translateXSetter = f.prototype.translateYSetter = f.prototype.verticalAlignSetter = function(a2, c2) {
          this[c2] = a2;
          this.doTransform = true;
        };
        m2.SVGElement = f;
        return m2.SVGElement;
      });
      N(m, "Core/Renderer/SVG/SVGLabel.js", [m["Core/Renderer/SVG/SVGElement.js"], m["Core/Utilities.js"]], function(f, h) {
        var m2 = this && this.__extends || /* @__PURE__ */ function() {
          var f2 = function(e, I) {
            f2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(v, e2) {
              v.__proto__ = e2;
            } || function(v, e2) {
              for (var f3 in e2)
                e2.hasOwnProperty(f3) && (v[f3] = e2[f3]);
            };
            return f2(e, I);
          };
          return function(e, I) {
            function v() {
              this.constructor = e;
            }
            f2(e, I);
            e.prototype = null === I ? Object.create(I) : (v.prototype = I.prototype, new v());
          };
        }(), z = h.defined, F = h.extend, L = h.isNumber, K = h.merge, C = h.removeEvent;
        return function(h2) {
          function e(f2, v, x, D, n, l, J, w, r, d) {
            var g = h2.call(this) || this;
            g.init(f2, "g");
            g.textStr = v;
            g.x = x;
            g.y = D;
            g.anchorX = l;
            g.anchorY = J;
            g.baseline = r;
            g.className = d;
            "button" !== d && g.addClass("highcharts-label");
            d && g.addClass("highcharts-" + d);
            g.text = f2.text("", 0, 0, w).attr({ zIndex: 1 });
            if ("string" === typeof n) {
              var c = /^url\((.*?)\)$/.test(n);
              if (g.renderer.symbols[n] || c)
                g.symbolKey = n;
            }
            g.bBox = e.emptyBBox;
            g.padding = 3;
            g.paddingLeft = 0;
            g.baselineOffset = 0;
            g.needsBox = f2.styledMode || c;
            g.deferredAttr = {};
            g.alignFactor = 0;
            return g;
          }
          m2(e, h2);
          e.prototype.alignSetter = function(e2) {
            e2 = { left: 0, center: 0.5, right: 1 }[e2];
            e2 !== this.alignFactor && (this.alignFactor = e2, this.bBox && L(this.xSetting) && this.attr({ x: this.xSetting }));
          };
          e.prototype.anchorXSetter = function(e2, v) {
            this.anchorX = e2;
            this.boxAttr(v, Math.round(e2) - this.getCrispAdjust() - this.xSetting);
          };
          e.prototype.anchorYSetter = function(e2, v) {
            this.anchorY = e2;
            this.boxAttr(v, e2 - this.ySetting);
          };
          e.prototype.boxAttr = function(e2, v) {
            this.box ? this.box.attr(e2, v) : this.deferredAttr[e2] = v;
          };
          e.prototype.css = function(h3) {
            if (h3) {
              var v = {};
              h3 = K(h3);
              e.textProps.forEach(function(e2) {
                "undefined" !== typeof h3[e2] && (v[e2] = h3[e2], delete h3[e2]);
              });
              this.text.css(v);
              var I = "fontSize" in v || "fontWeight" in v;
              if ("width" in v || I)
                this.updateBoxSize(), I && this.updateTextPadding();
            }
            return f.prototype.css.call(this, h3);
          };
          e.prototype.destroy = function() {
            C(this.element, "mouseenter");
            C(this.element, "mouseleave");
            this.text && this.text.destroy();
            this.box && (this.box = this.box.destroy());
            f.prototype.destroy.call(this);
          };
          e.prototype.fillSetter = function(e2, v) {
            e2 && (this.needsBox = true);
            this.fill = e2;
            this.boxAttr(v, e2);
          };
          e.prototype.getBBox = function() {
            var e2 = this.bBox, v = this.padding;
            return { width: e2.width + 2 * v, height: e2.height + 2 * v, x: e2.x - v, y: e2.y - v };
          };
          e.prototype.getCrispAdjust = function() {
            return this.renderer.styledMode && this.box ? this.box.strokeWidth() % 2 / 2 : (this["stroke-width"] ? parseInt(this["stroke-width"], 10) : 0) % 2 / 2;
          };
          e.prototype.heightSetter = function(e2) {
            this.heightSetting = e2;
          };
          e.prototype.on = function(e2, v) {
            var h3 = this, D = h3.text, n = D && "SPAN" === D.element.tagName ? D : void 0;
            if (n) {
              var l = function(l2) {
                ("mouseenter" === e2 || "mouseleave" === e2) && l2.relatedTarget instanceof Element && (h3.element.contains(l2.relatedTarget) || n.element.contains(l2.relatedTarget)) || v.call(h3.element, l2);
              };
              n.on(e2, l);
            }
            f.prototype.on.call(h3, e2, l || v);
            return h3;
          };
          e.prototype.onAdd = function() {
            var e2 = this.textStr;
            this.text.add(this);
            this.attr({ text: z(e2) ? e2 : "", x: this.x, y: this.y });
            this.box && z(this.anchorX) && this.attr({ anchorX: this.anchorX, anchorY: this.anchorY });
          };
          e.prototype.paddingSetter = function(e2) {
            z(e2) && e2 !== this.padding && (this.padding = e2, this.updateTextPadding());
          };
          e.prototype.paddingLeftSetter = function(e2) {
            z(e2) && e2 !== this.paddingLeft && (this.paddingLeft = e2, this.updateTextPadding());
          };
          e.prototype.rSetter = function(e2, v) {
            this.boxAttr(v, e2);
          };
          e.prototype.shadow = function(e2) {
            e2 && !this.renderer.styledMode && (this.updateBoxSize(), this.box && this.box.shadow(e2));
            return this;
          };
          e.prototype.strokeSetter = function(e2, v) {
            this.stroke = e2;
            this.boxAttr(v, e2);
          };
          e.prototype["stroke-widthSetter"] = function(e2, v) {
            e2 && (this.needsBox = true);
            this["stroke-width"] = e2;
            this.boxAttr(v, e2);
          };
          e.prototype["text-alignSetter"] = function(e2) {
            this.textAlign = e2;
          };
          e.prototype.textSetter = function(e2) {
            "undefined" !== typeof e2 && this.text.attr({ text: e2 });
            this.updateBoxSize();
            this.updateTextPadding();
          };
          e.prototype.updateBoxSize = function() {
            var f2 = this.text.element.style, v = {}, h3 = this.padding, D = this.paddingLeft, n = L(this.widthSetting) && L(this.heightSetting) && !this.textAlign || !z(this.text.textStr) ? e.emptyBBox : this.text.getBBox();
            this.width = (this.widthSetting || n.width || 0) + 2 * h3 + D;
            this.height = (this.heightSetting || n.height || 0) + 2 * h3;
            this.baselineOffset = h3 + Math.min(this.renderer.fontMetrics(f2 && f2.fontSize, this.text).b, n.height || Infinity);
            this.needsBox && (this.box || (f2 = this.box = this.symbolKey ? this.renderer.symbol(this.symbolKey) : this.renderer.rect(), f2.addClass(("button" === this.className ? "" : "highcharts-label-box") + (this.className ? " highcharts-" + this.className + "-box" : "")), f2.add(this), f2 = this.getCrispAdjust(), v.x = f2, v.y = (this.baseline ? -this.baselineOffset : 0) + f2), v.width = Math.round(this.width), v.height = Math.round(this.height), this.box.attr(F(v, this.deferredAttr)), this.deferredAttr = {});
            this.bBox = n;
          };
          e.prototype.updateTextPadding = function() {
            var e2 = this.text, f2 = this.baseline ? 0 : this.baselineOffset, h3 = this.paddingLeft + this.padding;
            z(this.widthSetting) && this.bBox && ("center" === this.textAlign || "right" === this.textAlign) && (h3 += { center: 0.5, right: 1 }[this.textAlign] * (this.widthSetting - this.bBox.width));
            if (h3 !== e2.x || f2 !== e2.y)
              e2.attr("x", h3), e2.hasBoxWidthChanged && (this.bBox = e2.getBBox(true), this.updateBoxSize()), "undefined" !== typeof f2 && e2.attr("y", f2);
            e2.x = h3;
            e2.y = f2;
          };
          e.prototype.widthSetter = function(e2) {
            this.widthSetting = L(e2) ? e2 : void 0;
          };
          e.prototype.xSetter = function(e2) {
            this.x = e2;
            this.alignFactor && (e2 -= this.alignFactor * ((this.widthSetting || this.bBox.width) + 2 * this.padding), this["forceAnimate:x"] = true);
            this.xSetting = Math.round(e2);
            this.attr("translateX", this.xSetting);
          };
          e.prototype.ySetter = function(e2) {
            this.ySetting = this.y = Math.round(e2);
            this.attr("translateY", this.ySetting);
          };
          e.emptyBBox = { width: 0, height: 0, x: 0, y: 0 };
          e.textProps = "color cursor direction fontFamily fontSize fontStyle fontWeight lineHeight textAlign textDecoration textOutline textOverflow width".split(" ");
          return e;
        }(f);
      });
      N(m, "Core/Renderer/SVG/SVGRenderer.js", [m["Core/Color/Color.js"], m["Core/Globals.js"], m["Core/Renderer/SVG/SVGElement.js"], m["Core/Renderer/SVG/SVGLabel.js"], m["Core/Utilities.js"]], function(f, h, m2, z, F) {
        var P = F.addEvent, K = F.attr, C = F.createElement, y = F.css, e = F.defined, I = F.destroyObjectProperties, v = F.extend, x = F.isArray, D = F.isNumber, n = F.isObject, l = F.isString, J = F.merge, w = F.objectEach, r = F.pick, d = F.pInt, g = F.splat, c = F.uniqueKey, a = h.charts, q = h.deg2rad, p = h.doc, B = h.isFirefox, A = h.isMS, G = h.isWebKit;
        F = h.noop;
        var M = h.svg, T = h.SVG_NS, Q = h.symbolSizes, O = h.win, E = function() {
          function u(b, k, a2, c2, d2, g2, p2) {
            this.width = this.url = this.style = this.isSVG = this.imgCount = this.height = this.gradients = this.globalAnimation = this.defs = this.chartIndex = this.cacheKeys = this.cache = this.boxWrapper = this.box = this.alignedObjects = void 0;
            this.init(b, k, a2, c2, d2, g2, p2);
          }
          u.prototype.init = function(b, k, a2, c2, d2, g2, q2) {
            var t = this.createElement("svg").attr({ version: "1.1", "class": "highcharts-root" });
            q2 || t.css(this.getStyle(c2));
            c2 = t.element;
            b.appendChild(c2);
            K(b, "dir", "ltr");
            -1 === b.innerHTML.indexOf("xmlns") && K(c2, "xmlns", this.SVG_NS);
            this.isSVG = true;
            this.box = c2;
            this.boxWrapper = t;
            this.alignedObjects = [];
            this.url = (B || G) && p.getElementsByTagName("base").length ? O.location.href.split("#")[0].replace(
              /<[^>]*>/g,
              ""
            ).replace(/([\('\)])/g, "\\$1").replace(/ /g, "%20") : "";
            this.createElement("desc").add().element.appendChild(p.createTextNode("Created with Highcharts 8.2.2"));
            this.defs = this.createElement("defs").add();
            this.allowHTML = g2;
            this.forExport = d2;
            this.styledMode = q2;
            this.gradients = {};
            this.cache = {};
            this.cacheKeys = [];
            this.imgCount = 0;
            this.setSize(k, a2, false);
            var H;
            B && b.getBoundingClientRect && (k = function() {
              y(b, { left: 0, top: 0 });
              H = b.getBoundingClientRect();
              y(b, { left: Math.ceil(H.left) - H.left + "px", top: Math.ceil(H.top) - H.top + "px" });
            }, k(), this.unSubPixelFix = P(O, "resize", k));
          };
          u.prototype.definition = function(b) {
            function k(b2, t) {
              var c2;
              g(b2).forEach(function(b3) {
                var d2 = a2.createElement(b3.tagName), g2 = {};
                w(b3, function(b4, k2) {
                  "tagName" !== k2 && "children" !== k2 && "textContent" !== k2 && (g2[k2] = b4);
                });
                d2.attr(g2);
                d2.add(t || a2.defs);
                b3.textContent && d2.element.appendChild(p.createTextNode(b3.textContent));
                k(b3.children || [], d2);
                c2 = d2;
              });
              return c2;
            }
            var a2 = this;
            return k(b);
          };
          u.prototype.getStyle = function(b) {
            return this.style = v({
              fontFamily: '"Lucida Grande", "Lucida Sans Unicode", Arial, Helvetica, sans-serif',
              fontSize: "12px"
            }, b);
          };
          u.prototype.setStyle = function(b) {
            this.boxWrapper.css(this.getStyle(b));
          };
          u.prototype.isHidden = function() {
            return !this.boxWrapper.getBBox().width;
          };
          u.prototype.destroy = function() {
            var b = this.defs;
            this.box = null;
            this.boxWrapper = this.boxWrapper.destroy();
            I(this.gradients || {});
            this.gradients = null;
            b && (this.defs = b.destroy());
            this.unSubPixelFix && this.unSubPixelFix();
            return this.alignedObjects = null;
          };
          u.prototype.createElement = function(b) {
            var k = new this.Element();
            k.init(this, b);
            return k;
          };
          u.prototype.getRadialAttr = function(b, k) {
            return { cx: b[0] - b[2] / 2 + k.cx * b[2], cy: b[1] - b[2] / 2 + k.cy * b[2], r: k.r * b[2] };
          };
          u.prototype.truncate = function(b, k, a2, c2, d2, g2, q2) {
            var t = this, H = b.rotation, R, u2 = c2 ? 1 : 0, A2 = (a2 || c2).length, r2 = A2, B2 = [], n2 = function(b2) {
              k.firstChild && k.removeChild(k.firstChild);
              b2 && k.appendChild(p.createTextNode(b2));
            }, l2 = function(g3, p2) {
              p2 = p2 || g3;
              if ("undefined" === typeof B2[p2])
                if (k.getSubStringLength)
                  try {
                    B2[p2] = d2 + k.getSubStringLength(0, c2 ? p2 + 1 : p2);
                  } catch (ja) {
                    "";
                  }
                else
                  t.getSpanWidth && (n2(q2(a2 || c2, g3)), B2[p2] = d2 + t.getSpanWidth(b, k));
              return B2[p2];
            }, e2;
            b.rotation = 0;
            var w2 = l2(k.textContent.length);
            if (e2 = d2 + w2 > g2) {
              for (; u2 <= A2; )
                r2 = Math.ceil((u2 + A2) / 2), c2 && (R = q2(c2, r2)), w2 = l2(r2, R && R.length - 1), u2 === A2 ? u2 = A2 + 1 : w2 > g2 ? A2 = r2 - 1 : u2 = r2;
              0 === A2 ? n2("") : a2 && A2 === a2.length - 1 || n2(R || q2(a2 || c2, r2));
            }
            c2 && c2.splice(0, r2);
            b.actualWidth = w2;
            b.rotation = H;
            return e2;
          };
          u.prototype.buildText = function(b) {
            var k = b.element, a2 = this, c2 = a2.forExport, g2 = r(b.textStr, "").toString(), q2 = -1 !== g2.indexOf("<"), u2 = k.childNodes, A2, B2 = K(k, "x"), n2 = b.styles, e2 = b.textWidth, G2 = n2 && n2.lineHeight, f2 = n2 && n2.textOutline, V = n2 && "ellipsis" === n2.textOverflow, E2 = n2 && "nowrap" === n2.whiteSpace, h2 = n2 && n2.fontSize, v2, D2 = u2.length;
            n2 = e2 && !b.added && this.box;
            var O2 = function(b2) {
              var t;
              a2.styledMode || (t = /(px|em)$/.test(b2 && b2.style.fontSize) ? b2.style.fontSize : h2 || a2.style.fontSize || 12);
              return G2 ? d(G2) : a2.fontMetrics(t, b2.getAttribute("style") ? b2 : k).h;
            }, J2 = function(b2, k2) {
              w(a2.escapes, function(a3, t) {
                k2 && -1 !== k2.indexOf(a3) || (b2 = b2.toString().replace(new RegExp(a3, "g"), t));
              });
              return b2;
            }, x2 = function(b2, k2) {
              var a3 = b2.indexOf("<");
              b2 = b2.substring(a3, b2.indexOf(">") - a3);
              a3 = b2.indexOf(k2 + "=");
              if (-1 !== a3 && (a3 = a3 + k2.length + 1, k2 = b2.charAt(a3), '"' === k2 || "'" === k2))
                return b2 = b2.substring(a3 + 1), b2.substring(0, b2.indexOf(k2));
            }, I2 = /<br.*?>/g;
            var m3 = [g2, V, E2, G2, f2, h2, e2].join();
            if (m3 !== b.textCache) {
              for (b.textCache = m3; D2--; )
                k.removeChild(u2[D2]);
              q2 || f2 || V || e2 || -1 !== g2.indexOf(" ") && (!E2 || I2.test(g2)) ? (n2 && n2.appendChild(k), q2 ? (g2 = a2.styledMode ? g2.replace(/<(b|strong)>/g, '<span class="highcharts-strong">').replace(/<(i|em)>/g, '<span class="highcharts-emphasized">') : g2.replace(/<(b|strong)>/g, '<span style="font-weight:bold">').replace(/<(i|em)>/g, '<span style="font-style:italic">'), g2 = g2.replace(/<a/g, "<span").replace(/<\/(b|strong|i|em|a)>/g, "</span>").split(I2)) : g2 = [g2], g2 = g2.filter(function(b2) {
                return "" !== b2;
              }), g2.forEach(function(t, d2) {
                var g3 = 0, H = 0;
                t = t.replace(/^\s+|\s+$/g, "").replace(/<span/g, "|||<span").replace(/<\/span>/g, "</span>|||");
                var q3 = t.split("|||");
                q3.forEach(function(t2) {
                  if ("" !== t2 || 1 === q3.length) {
                    var R = {}, u3 = p.createElementNS(a2.SVG_NS, "tspan"), n3, r2;
                    (n3 = x2(t2, "class")) && K(u3, "class", n3);
                    if (n3 = x2(t2, "style"))
                      n3 = n3.replace(/(;| |^)color([ :])/, "$1fill$2"), K(u3, "style", n3);
                    if ((r2 = x2(t2, "href")) && !c2 && -1 === r2.split(":")[0].toLowerCase().indexOf("javascript")) {
                      var l2 = p.createElementNS(a2.SVG_NS, "a");
                      K(l2, "href", r2);
                      K(u3, "class", "highcharts-anchor");
                      l2.appendChild(u3);
                      a2.styledMode || y(u3, { cursor: "pointer" });
                    }
                    t2 = J2(t2.replace(/<[a-zA-Z\/](.|\n)*?>/g, "") || " ");
                    if (" " !== t2) {
                      u3.appendChild(p.createTextNode(t2));
                      g3 ? R.dx = 0 : d2 && null !== B2 && (R.x = B2);
                      K(u3, R);
                      k.appendChild(l2 || u3);
                      !g3 && v2 && (!M && c2 && y(u3, { display: "block" }), K(u3, "dy", O2(u3)));
                      if (e2) {
                        var w2 = t2.replace(/([^\^])-/g, "$1- ").split(" ");
                        R = !E2 && (1 < q3.length || d2 || 1 < w2.length);
                        l2 = 0;
                        r2 = O2(u3);
                        if (V)
                          A2 = a2.truncate(b, u3, t2, void 0, 0, Math.max(0, e2 - parseInt(h2 || 12, 10)), function(b2, k2) {
                            return b2.substring(0, k2) + "…";
                          });
                        else if (R)
                          for (; w2.length; )
                            w2.length && !E2 && 0 < l2 && (u3 = p.createElementNS(T, "tspan"), K(u3, { dy: r2, x: B2 }), n3 && K(u3, "style", n3), u3.appendChild(p.createTextNode(w2.join(" ").replace(/- /g, "-"))), k.appendChild(u3)), a2.truncate(b, u3, null, w2, 0 === l2 ? H : 0, e2, function(b2, k2) {
                              return w2.slice(0, k2).join(" ").replace(/- /g, "-");
                            }), H = b.actualWidth, l2++;
                      }
                      g3++;
                    }
                  }
                });
                v2 = v2 || k.childNodes.length;
              }), V && A2 && b.attr("title", J2(
                b.textStr || "",
                ["&lt;", "&gt;"]
              )), n2 && n2.removeChild(k), l(f2) && b.applyTextOutline && b.applyTextOutline(f2)) : k.appendChild(p.createTextNode(J2(g2)));
            }
          };
          u.prototype.getContrast = function(b) {
            b = f.parse(b).rgba;
            b[0] *= 1;
            b[1] *= 1.2;
            b[2] *= 0.5;
            return 459 < b[0] + b[1] + b[2] ? "#000000" : "#FFFFFF";
          };
          u.prototype.button = function(b, k, a2, c2, d2, g2, p2, q2, u2, n2) {
            var t = this.label(b, k, a2, u2, void 0, void 0, n2, void 0, "button"), H = 0, R = this.styledMode;
            b = (d2 = d2 ? J(d2) : d2) && d2.style || {};
            d2 && d2.style && delete d2.style;
            t.attr(J({ padding: 8, r: 2 }, d2));
            if (!R) {
              d2 = J({
                fill: "#f7f7f7",
                stroke: "#cccccc",
                "stroke-width": 1,
                style: { color: "#333333", cursor: "pointer", fontWeight: "normal" }
              }, { style: b }, d2);
              var r2 = d2.style;
              delete d2.style;
              g2 = J(d2, { fill: "#e6e6e6" }, g2);
              var B2 = g2.style;
              delete g2.style;
              p2 = J(d2, { fill: "#e6ebf5", style: { color: "#000000", fontWeight: "bold" } }, p2);
              var l2 = p2.style;
              delete p2.style;
              q2 = J(d2, { style: { color: "#cccccc" } }, q2);
              var e2 = q2.style;
              delete q2.style;
            }
            P(t.element, A ? "mouseover" : "mouseenter", function() {
              3 !== H && t.setState(1);
            });
            P(t.element, A ? "mouseout" : "mouseleave", function() {
              3 !== H && t.setState(H);
            });
            t.setState = function(b2) {
              1 !== b2 && (t.state = H = b2);
              t.removeClass(/highcharts-button-(normal|hover|pressed|disabled)/).addClass("highcharts-button-" + ["normal", "hover", "pressed", "disabled"][b2 || 0]);
              R || t.attr([d2, g2, p2, q2][b2 || 0]).css([r2, B2, l2, e2][b2 || 0]);
            };
            R || t.attr(d2).css(v({ cursor: "default" }, r2));
            return t.on("click", function(b2) {
              3 !== H && c2.call(t, b2);
            });
          };
          u.prototype.crispLine = function(b, k, a2) {
            void 0 === a2 && (a2 = "round");
            var t = b[0], c2 = b[1];
            t[1] === c2[1] && (t[1] = c2[1] = Math[a2](t[1]) - k % 2 / 2);
            t[2] === c2[2] && (t[2] = c2[2] = Math[a2](t[2]) + k % 2 / 2);
            return b;
          };
          u.prototype.path = function(b) {
            var k = this.styledMode ? {} : { fill: "none" };
            x(b) ? k.d = b : n(b) && v(k, b);
            return this.createElement("path").attr(k);
          };
          u.prototype.circle = function(b, k, a2) {
            b = n(b) ? b : "undefined" === typeof b ? {} : { x: b, y: k, r: a2 };
            k = this.createElement("circle");
            k.xSetter = k.ySetter = function(b2, k2, a3) {
              a3.setAttribute("c" + k2, b2);
            };
            return k.attr(b);
          };
          u.prototype.arc = function(b, k, a2, c2, d2, g2) {
            n(b) ? (c2 = b, k = c2.y, a2 = c2.r, b = c2.x) : c2 = { innerR: c2, start: d2, end: g2 };
            b = this.symbol("arc", b, k, a2, a2, c2);
            b.r = a2;
            return b;
          };
          u.prototype.rect = function(b, k, a2, c2, d2, g2) {
            d2 = n(b) ? b.r : d2;
            var t = this.createElement("rect");
            b = n(b) ? b : "undefined" === typeof b ? {} : { x: b, y: k, width: Math.max(a2, 0), height: Math.max(c2, 0) };
            this.styledMode || ("undefined" !== typeof g2 && (b.strokeWidth = g2, b = t.crisp(b)), b.fill = "none");
            d2 && (b.r = d2);
            t.rSetter = function(b2, k2, a3) {
              t.r = b2;
              K(a3, { rx: b2, ry: b2 });
            };
            t.rGetter = function() {
              return t.r;
            };
            return t.attr(b);
          };
          u.prototype.setSize = function(b, k, a2) {
            var t = this.alignedObjects, c2 = t.length;
            this.width = b;
            this.height = k;
            for (this.boxWrapper.animate({ width: b, height: k }, { step: function() {
              this.attr({ viewBox: "0 0 " + this.attr("width") + " " + this.attr("height") });
            }, duration: r(a2, true) ? void 0 : 0 }); c2--; )
              t[c2].align();
          };
          u.prototype.g = function(b) {
            var k = this.createElement("g");
            return b ? k.attr({ "class": "highcharts-" + b }) : k;
          };
          u.prototype.image = function(b, k, a2, c2, d2, g2) {
            var t = { preserveAspectRatio: "none" }, p2 = function(b2, k2) {
              b2.setAttributeNS ? b2.setAttributeNS("http://www.w3.org/1999/xlink", "href", k2) : b2.setAttribute("hc-svg-href", k2);
            }, q2 = function(k2) {
              p2(H.element, b);
              g2.call(H, k2);
            };
            1 < arguments.length && v(t, { x: k, y: a2, width: c2, height: d2 });
            var H = this.createElement("image").attr(t);
            g2 ? (p2(H.element, "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="), t = new O.Image(), P(t, "load", q2), t.src = b, t.complete && q2({})) : p2(H.element, b);
            return H;
          };
          u.prototype.symbol = function(b, k, t, c2, d2, g2) {
            var q2 = this, H = /^url\((.*?)\)$/, u2 = H.test(b), R = !u2 && (this.symbols[b] ? b : "circle"), n2 = R && this.symbols[R], A2;
            if (n2) {
              "number" === typeof k && (A2 = n2.call(this.symbols, Math.round(k || 0), Math.round(t || 0), c2 || 0, d2 || 0, g2));
              var B2 = this.path(A2);
              q2.styledMode || B2.attr("fill", "none");
              v(B2, {
                symbolName: R,
                x: k,
                y: t,
                width: c2,
                height: d2
              });
              g2 && v(B2, g2);
            } else if (u2) {
              var l2 = b.match(H)[1];
              B2 = this.image(l2);
              B2.imgwidth = r(Q[l2] && Q[l2].width, g2 && g2.width);
              B2.imgheight = r(Q[l2] && Q[l2].height, g2 && g2.height);
              var w2 = function() {
                B2.attr({ width: B2.width, height: B2.height });
              };
              ["width", "height"].forEach(function(b2) {
                B2[b2 + "Setter"] = function(b3, k2) {
                  var a2 = {}, t2 = this["img" + k2], c3 = "width" === k2 ? "translateX" : "translateY";
                  this[k2] = b3;
                  e(t2) && (g2 && "within" === g2.backgroundSize && this.width && this.height && (t2 = Math.round(t2 * Math.min(this.width / this.imgwidth, this.height / this.imgheight))), this.element && this.element.setAttribute(k2, t2), this.alignByTranslate || (a2[c3] = ((this[k2] || 0) - t2) / 2, this.attr(a2)));
                };
              });
              e(k) && B2.attr({ x: k, y: t });
              B2.isImg = true;
              e(B2.imgwidth) && e(B2.imgheight) ? w2() : (B2.attr({ width: 0, height: 0 }), C("img", { onload: function() {
                var b2 = a[q2.chartIndex];
                0 === this.width && (y(this, { position: "absolute", top: "-999em" }), p.body.appendChild(this));
                Q[l2] = { width: this.width, height: this.height };
                B2.imgwidth = this.width;
                B2.imgheight = this.height;
                B2.element && w2();
                this.parentNode && this.parentNode.removeChild(this);
                q2.imgCount--;
                if (!q2.imgCount && b2 && !b2.hasLoaded)
                  b2.onload();
              }, src: l2 }), this.imgCount++);
            }
            return B2;
          };
          u.prototype.clipRect = function(b, k, a2, d2) {
            var t = c() + "-", g2 = this.createElement("clipPath").attr({ id: t }).add(this.defs);
            b = this.rect(b, k, a2, d2, 0).add(g2);
            b.id = t;
            b.clipPath = g2;
            b.count = 0;
            return b;
          };
          u.prototype.text = function(b, k, a2, c2) {
            var t = {};
            if (c2 && (this.allowHTML || !this.forExport))
              return this.html(b, k, a2);
            t.x = Math.round(k || 0);
            a2 && (t.y = Math.round(a2));
            e(b) && (t.text = b);
            b = this.createElement("text").attr(t);
            c2 || (b.xSetter = function(b2, k2, a3) {
              var t2 = a3.getElementsByTagName("tspan"), c3 = a3.getAttribute(k2), d2;
              for (d2 = 0; d2 < t2.length; d2++) {
                var g2 = t2[d2];
                g2.getAttribute(k2) === c3 && g2.setAttribute(k2, b2);
              }
              a3.setAttribute(k2, b2);
            });
            return b;
          };
          u.prototype.fontMetrics = function(b, k) {
            b = !this.styledMode && /px/.test(b) || !O.getComputedStyle ? b || k && k.style && k.style.fontSize || this.style && this.style.fontSize : k && m2.prototype.getStyle.call(k, "font-size");
            b = /px/.test(b) ? d(b) : 12;
            k = 24 > b ? b + 3 : Math.round(1.2 * b);
            return { h: k, b: Math.round(0.8 * k), f: b };
          };
          u.prototype.rotCorr = function(b, k, a2) {
            var t = b;
            k && a2 && (t = Math.max(t * Math.cos(k * q), 4));
            return { x: -b / 3 * Math.sin(k * q), y: t };
          };
          u.prototype.pathToSegments = function(b) {
            for (var k = [], a2 = [], c2 = { A: 8, C: 7, H: 2, L: 3, M: 3, Q: 5, S: 5, T: 3, V: 2 }, d2 = 0; d2 < b.length; d2++)
              l(a2[0]) && D(b[d2]) && a2.length === c2[a2[0].toUpperCase()] && b.splice(d2, 0, a2[0].replace("M", "L").replace("m", "l")), "string" === typeof b[d2] && (a2.length && k.push(a2.slice(0)), a2.length = 0), a2.push(b[d2]);
            k.push(a2.slice(0));
            return k;
          };
          u.prototype.label = function(b, k, a2, c2, d2, g2, p2, q2, u2) {
            return new z(this, b, k, a2, c2, d2, g2, p2, q2, u2);
          };
          return u;
        }();
        E.prototype.Element = m2;
        E.prototype.SVG_NS = T;
        E.prototype.draw = F;
        E.prototype.escapes = { "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" };
        E.prototype.symbols = { circle: function(a2, b, k, t) {
          return this.arc(a2 + k / 2, b + t / 2, k / 2, t / 2, { start: 0.5 * Math.PI, end: 2.5 * Math.PI, open: false });
        }, square: function(a2, b, k, t) {
          return [["M", a2, b], ["L", a2 + k, b], ["L", a2 + k, b + t], ["L", a2, b + t], ["Z"]];
        }, triangle: function(a2, b, k, t) {
          return [["M", a2 + k / 2, b], ["L", a2 + k, b + t], ["L", a2, b + t], ["Z"]];
        }, "triangle-down": function(a2, b, k, t) {
          return [["M", a2, b], ["L", a2 + k, b], ["L", a2 + k / 2, b + t], ["Z"]];
        }, diamond: function(a2, b, k, t) {
          return [["M", a2 + k / 2, b], ["L", a2 + k, b + t / 2], ["L", a2 + k / 2, b + t], ["L", a2, b + t / 2], ["Z"]];
        }, arc: function(a2, b, k, t, c2) {
          var d2 = [];
          if (c2) {
            var g2 = c2.start || 0, p2 = c2.end || 0, q2 = c2.r || k;
            k = c2.r || t || k;
            var H = 1e-3 > Math.abs(p2 - g2 - 2 * Math.PI);
            p2 -= 1e-3;
            t = c2.innerR;
            H = r(c2.open, H);
            var u = Math.cos(g2), B2 = Math.sin(g2), n2 = Math.cos(p2), A2 = Math.sin(p2);
            g2 = r(c2.longArc, 1e-3 > p2 - g2 - Math.PI ? 0 : 1);
            d2.push(["M", a2 + q2 * u, b + k * B2], ["A", q2, k, 0, g2, r(c2.clockwise, 1), a2 + q2 * n2, b + k * A2]);
            e(t) && d2.push(H ? ["M", a2 + t * n2, b + t * A2] : ["L", a2 + t * n2, b + t * A2], ["A", t, t, 0, g2, e(c2.clockwise) ? 1 - c2.clockwise : 0, a2 + t * u, b + t * B2]);
            H || d2.push(["Z"]);
          }
          return d2;
        }, callout: function(a2, b, k, t, c2) {
          var d2 = Math.min(c2 && c2.r || 0, k, t), g2 = d2 + 6, p2 = c2 && c2.anchorX || 0;
          c2 = c2 && c2.anchorY || 0;
          var q2 = [["M", a2 + d2, b], ["L", a2 + k - d2, b], ["C", a2 + k, b, a2 + k, b, a2 + k, b + d2], ["L", a2 + k, b + t - d2], ["C", a2 + k, b + t, a2 + k, b + t, a2 + k - d2, b + t], ["L", a2 + d2, b + t], ["C", a2, b + t, a2, b + t, a2, b + t - d2], ["L", a2, b + d2], ["C", a2, b, a2, b, a2 + d2, b]];
          p2 && p2 > k ? c2 > b + g2 && c2 < b + t - g2 ? q2.splice(3, 1, ["L", a2 + k, c2 - 6], ["L", a2 + k + 6, c2], ["L", a2 + k, c2 + 6], ["L", a2 + k, b + t - d2]) : q2.splice(3, 1, ["L", a2 + k, t / 2], ["L", p2, c2], ["L", a2 + k, t / 2], ["L", a2 + k, b + t - d2]) : p2 && 0 > p2 ? c2 > b + g2 && c2 < b + t - g2 ? q2.splice(7, 1, ["L", a2, c2 + 6], ["L", a2 - 6, c2], ["L", a2, c2 - 6], ["L", a2, b + d2]) : q2.splice(7, 1, ["L", a2, t / 2], ["L", p2, c2], ["L", a2, t / 2], ["L", a2, b + d2]) : c2 && c2 > t && p2 > a2 + g2 && p2 < a2 + k - g2 ? q2.splice(5, 1, ["L", p2 + 6, b + t], ["L", p2, b + t + 6], ["L", p2 - 6, b + t], ["L", a2 + d2, b + t]) : c2 && 0 > c2 && p2 > a2 + g2 && p2 < a2 + k - g2 && q2.splice(1, 1, ["L", p2 - 6, b], ["L", p2, b - 6], ["L", p2 + 6, b], ["L", k - d2, b]);
          return q2;
        } };
        h.SVGRenderer = E;
        h.Renderer = h.SVGRenderer;
        return h.Renderer;
      });
      N(m, "Core/Renderer/HTML/HTMLElement.js", [m["Core/Globals.js"], m["Core/Renderer/SVG/SVGElement.js"], m["Core/Utilities.js"]], function(f, h, m2) {
        var z = m2.css, F = m2.defined, P = m2.extend, K = m2.pick, C = m2.pInt, y = f.isFirefox;
        P(h.prototype, {
          htmlCss: function(e) {
            var f2 = "SPAN" === this.element.tagName && e && "width" in e, h2 = K(f2 && e.width, void 0);
            if (f2) {
              delete e.width;
              this.textWidth = h2;
              var x = true;
            }
            e && "ellipsis" === e.textOverflow && (e.whiteSpace = "nowrap", e.overflow = "hidden");
            this.styles = P(this.styles, e);
            z(this.element, e);
            x && this.htmlUpdateTransform();
            return this;
          },
          htmlGetBBox: function() {
            var e = this.element;
            return { x: e.offsetLeft, y: e.offsetTop, width: e.offsetWidth, height: e.offsetHeight };
          },
          htmlUpdateTransform: function() {
            if (this.added) {
              var e = this.renderer, f2 = this.element, h2 = this.translateX || 0, x = this.translateY || 0, D = this.x || 0, n = this.y || 0, l = this.textAlign || "left", J = { left: 0, center: 0.5, right: 1 }[l], w = this.styles, r = w && w.whiteSpace;
              z(f2, { marginLeft: h2, marginTop: x });
              !e.styledMode && this.shadows && this.shadows.forEach(function(a) {
                z(a, { marginLeft: h2 + 1, marginTop: x + 1 });
              });
              this.inverted && [].forEach.call(f2.childNodes, function(a) {
                e.invertChild(a, f2);
              });
              if ("SPAN" === f2.tagName) {
                w = this.rotation;
                var d = this.textWidth && C(this.textWidth), g = [w, l, f2.innerHTML, this.textWidth, this.textAlign].join(), c;
                (c = d !== this.oldTextWidth) && !(c = d > this.oldTextWidth) && ((c = this.textPxLength) || (z(f2, { width: "", whiteSpace: r || "nowrap" }), c = f2.offsetWidth), c = c > d);
                c && (/[ \-]/.test(f2.textContent || f2.innerText) || "ellipsis" === f2.style.textOverflow) ? (z(f2, { width: d + "px", display: "block", whiteSpace: r || "normal" }), this.oldTextWidth = d, this.hasBoxWidthChanged = true) : this.hasBoxWidthChanged = false;
                g !== this.cTT && (r = e.fontMetrics(f2.style.fontSize, f2).b, !F(w) || w === (this.oldRotation || 0) && l === this.oldAlign || this.setSpanRotation(w, J, r), this.getSpanCorrection(!F(w) && this.textPxLength || f2.offsetWidth, r, J, w, l));
                z(f2, { left: D + (this.xCorr || 0) + "px", top: n + (this.yCorr || 0) + "px" });
                this.cTT = g;
                this.oldRotation = w;
                this.oldAlign = l;
              }
            } else
              this.alignOnAdd = true;
          },
          setSpanRotation: function(e, f2, h2) {
            var v = {}, D = this.renderer.getTransformKey();
            v[D] = v.transform = "rotate(" + e + "deg)";
            v[D + (y ? "Origin" : "-origin")] = v.transformOrigin = 100 * f2 + "% " + h2 + "px";
            z(this.element, v);
          },
          getSpanCorrection: function(e, f2, h2) {
            this.xCorr = -e * h2;
            this.yCorr = -f2;
          }
        });
        return h;
      });
      N(m, "Core/Renderer/HTML/HTMLRenderer.js", [m["Core/Globals.js"], m["Core/Renderer/SVG/SVGElement.js"], m["Core/Renderer/SVG/SVGRenderer.js"], m["Core/Utilities.js"]], function(f, h, m2, z) {
        var F = f.isFirefox, P = f.isMS, K = f.isWebKit, C = f.win, y = z.attr, e = z.createElement, I = z.extend, v = z.pick;
        I(m2.prototype, { getTransformKey: function() {
          return P && !/Edge/.test(C.navigator.userAgent) ? "-ms-transform" : K ? "-webkit-transform" : F ? "MozTransform" : C.opera ? "-o-transform" : "";
        }, html: function(f2, D, n) {
          var l = this.createElement("span"), J = l.element, w = l.renderer, r = w.isSVG, d = function(d2, c) {
            ["opacity", "visibility"].forEach(function(a) {
              d2[a + "Setter"] = function(g, p, B) {
                var q = d2.div ? d2.div.style : c;
                h.prototype[a + "Setter"].call(this, g, p, B);
                q && (q[p] = g);
              };
            });
            d2.addedSetters = true;
          };
          l.textSetter = function(d2) {
            d2 !== J.innerHTML && (delete this.bBox, delete this.oldTextWidth);
            this.textStr = d2;
            J.innerHTML = v(d2, "");
            l.doTransform = true;
          };
          r && d(l, l.element.style);
          l.xSetter = l.ySetter = l.alignSetter = l.rotationSetter = function(d2, c) {
            "align" === c ? l.alignValue = l.textAlign = d2 : l[c] = d2;
            l.doTransform = true;
          };
          l.afterSetters = function() {
            this.doTransform && (this.htmlUpdateTransform(), this.doTransform = false);
          };
          l.attr({ text: f2, x: Math.round(D), y: Math.round(n) }).css({ position: "absolute" });
          w.styledMode || l.css({ fontFamily: this.style.fontFamily, fontSize: this.style.fontSize });
          J.style.whiteSpace = "nowrap";
          l.css = l.htmlCss;
          r && (l.add = function(g) {
            var c = w.box.parentNode, a = [];
            if (this.parentGroup = g) {
              var q = g.div;
              if (!q) {
                for (; g; )
                  a.push(g), g = g.parentGroup;
                a.reverse().forEach(function(g2) {
                  function p(a2, c2) {
                    g2[c2] = a2;
                    "translateX" === c2 ? r2.left = a2 + "px" : r2.top = a2 + "px";
                    g2.doTransform = true;
                  }
                  var n2 = y(g2.element, "class");
                  q = g2.div = g2.div || e("div", n2 ? { className: n2 } : void 0, { position: "absolute", left: (g2.translateX || 0) + "px", top: (g2.translateY || 0) + "px", display: g2.display, opacity: g2.opacity, pointerEvents: g2.styles && g2.styles.pointerEvents }, q || c);
                  var r2 = q.style;
                  I(g2, { classSetter: /* @__PURE__ */ function(a2) {
                    return function(c2) {
                      this.element.setAttribute("class", c2);
                      a2.className = c2;
                    };
                  }(q), on: function() {
                    a[0].div && l.on.apply({ element: a[0].div }, arguments);
                    return g2;
                  }, translateXSetter: p, translateYSetter: p });
                  g2.addedSetters || d(g2);
                });
              }
            } else
              q = c;
            q.appendChild(J);
            l.added = true;
            l.alignOnAdd && l.htmlUpdateTransform();
            return l;
          });
          return l;
        } });
        return m2;
      });
      N(m, "Core/Axis/Tick.js", [m["Core/Globals.js"], m["Core/Utilities.js"]], function(f, h) {
        var m2 = h.clamp, z = h.correctFloat, F = h.defined, L = h.destroyObjectProperties, K = h.extend, C = h.fireEvent, y = h.isNumber, e = h.merge, I = h.objectEach, v = h.pick, x = f.deg2rad;
        h = function() {
          function f2(n, l, e2, w, r) {
            this.isNewLabel = this.isNew = true;
            this.axis = n;
            this.pos = l;
            this.type = e2 || "";
            this.parameters = r || {};
            this.tickmarkOffset = this.parameters.tickmarkOffset;
            this.options = this.parameters.options;
            C(this, "init");
            e2 || w || this.addLabel();
          }
          f2.prototype.addLabel = function() {
            var n = this, l = n.axis, e2 = l.options, w = l.chart, r = l.categories, d = l.logarithmic, g = l.names, c = n.pos, a = v(n.options && n.options.labels, e2.labels), q = l.tickPositions, p = c === q[0], B = c === q[q.length - 1];
            g = this.parameters.category || (r ? v(r[c], g[c], c) : c);
            var A = n.label;
            r = (!a.step || 1 === a.step) && 1 === l.tickInterval;
            q = q.info;
            var f3, h2;
            if (l.dateTime && q) {
              var D = w.time.resolveDTLFormat(e2.dateTimeLabelFormats[!e2.grid && q.higherRanks[c] || q.unitName]);
              var x2 = D.main;
            }
            n.isFirst = p;
            n.isLast = B;
            n.formatCtx = { axis: l, chart: w, isFirst: p, isLast: B, dateTimeLabelFormat: x2, tickPositionInfo: q, value: d ? z(d.lin2log(g)) : g, pos: c };
            e2 = l.labelFormatter.call(n.formatCtx, this.formatCtx);
            if (h2 = D && D.list)
              n.shortenLabel = function() {
                for (f3 = 0; f3 < h2.length; f3++)
                  if (A.attr({ text: l.labelFormatter.call(K(n.formatCtx, { dateTimeLabelFormat: h2[f3] })) }), A.getBBox().width < l.getSlotWidth(n) - 2 * v(a.padding, 5))
                    return;
                A.attr({ text: "" });
              };
            r && l._addedPlotLB && n.moveLabel(e2, a);
            F(A) || n.movedLabel ? A && A.textStr !== e2 && !r && (!A.textWidth || a.style && a.style.width || A.styles.width || A.css({ width: null }), A.attr({ text: e2 }), A.textPxLength = A.getBBox().width) : (n.label = A = n.createLabel({ x: 0, y: 0 }, e2, a), n.rotation = 0);
          };
          f2.prototype.createLabel = function(n, l, f3) {
            var w = this.axis, r = w.chart;
            if (n = F(l) && f3.enabled ? r.renderer.text(l, n.x, n.y, f3.useHTML).add(w.labelGroup) : null)
              r.styledMode || n.css(e(f3.style)), n.textPxLength = n.getBBox().width;
            return n;
          };
          f2.prototype.destroy = function() {
            L(this, this.axis);
          };
          f2.prototype.getPosition = function(n, l, e2, w) {
            var r = this.axis, d = r.chart, g = w && d.oldChartHeight || d.chartHeight;
            n = { x: n ? z(r.translate(l + e2, null, null, w) + r.transB) : r.left + r.offset + (r.opposite ? (w && d.oldChartWidth || d.chartWidth) - r.right - r.left : 0), y: n ? g - r.bottom + r.offset - (r.opposite ? r.height : 0) : z(g - r.translate(l + e2, null, null, w) - r.transB) };
            n.y = m2(n.y, -1e5, 1e5);
            C(this, "afterGetPosition", { pos: n });
            return n;
          };
          f2.prototype.getLabelPosition = function(n, l, e2, w, r, d, g, c) {
            var a = this.axis, q = a.transA, p = a.isLinked && a.linkedParent ? a.linkedParent.reversed : a.reversed, B = a.staggerLines, A = a.tickRotCorr || { x: 0, y: 0 }, f3 = r.y, h2 = w || a.reserveSpaceDefault ? 0 : -a.labelOffset * ("center" === a.labelAlign ? 0.5 : 1), v2 = {};
            F(f3) || (f3 = 0 === a.side ? e2.rotation ? -8 : -e2.getBBox().height : 2 === a.side ? A.y + 8 : Math.cos(e2.rotation * x) * (A.y - e2.getBBox(false, 0).height / 2));
            n = n + r.x + h2 + A.x - (d && w ? d * q * (p ? -1 : 1) : 0);
            l = l + f3 - (d && !w ? d * q * (p ? 1 : -1) : 0);
            B && (e2 = g / (c || 1) % B, a.opposite && (e2 = B - e2 - 1), l += a.labelOffset / B * e2);
            v2.x = n;
            v2.y = Math.round(l);
            C(this, "afterGetLabelPosition", { pos: v2, tickmarkOffset: d, index: g });
            return v2;
          };
          f2.prototype.getLabelSize = function() {
            return this.label ? this.label.getBBox()[this.axis.horiz ? "height" : "width"] : 0;
          };
          f2.prototype.getMarkPath = function(n, e2, f3, w, r, d) {
            return d.crispLine([["M", n, e2], ["L", n + (r ? 0 : -f3), e2 + (r ? f3 : 0)]], w);
          };
          f2.prototype.handleOverflow = function(n) {
            var e2 = this.axis, f3 = e2.options.labels, w = n.x, r = e2.chart.chartWidth, d = e2.chart.spacing, g = v(e2.labelLeft, Math.min(e2.pos, d[3]));
            d = v(e2.labelRight, Math.max(e2.isRadial ? 0 : e2.pos + e2.len, r - d[1]));
            var c = this.label, a = this.rotation, q = { left: 0, center: 0.5, right: 1 }[e2.labelAlign || c.attr("align")], p = c.getBBox().width, B = e2.getSlotWidth(this), A = B, G = 1, h2, D = {};
            if (a || "justify" !== v(f3.overflow, "justify"))
              0 > a && w - q * p < g ? h2 = Math.round(w / Math.cos(a * x) - g) : 0 < a && w + q * p > d && (h2 = Math.round((r - w) / Math.cos(a * x)));
            else if (r = w + (1 - q) * p, w - q * p < g ? A = n.x + A * (1 - q) - g : r > d && (A = d - n.x + A * q, G = -1), A = Math.min(B, A), A < B && "center" === e2.labelAlign && (n.x += G * (B - A - q * (B - Math.min(p, A)))), p > A || e2.autoRotation && (c.styles || {}).width)
              h2 = A;
            h2 && (this.shortenLabel ? this.shortenLabel() : (D.width = Math.floor(h2) + "px", (f3.style || {}).textOverflow || (D.textOverflow = "ellipsis"), c.css(D)));
          };
          f2.prototype.moveLabel = function(n, e2) {
            var l = this, w = l.label, r = false, d = l.axis, g = d.reversed;
            w && w.textStr === n ? (l.movedLabel = w, r = true, delete l.label) : I(d.ticks, function(a) {
              r || a.isNew || a === l || !a.label || a.label.textStr !== n || (l.movedLabel = a.label, r = true, a.labelPos = l.movedLabel.xy, delete a.label);
            });
            if (!r && (l.labelPos || w)) {
              var c = l.labelPos || w.xy;
              w = d.horiz ? g ? 0 : d.width + d.left : c.x;
              d = d.horiz ? c.y : g ? d.width + d.left : 0;
              l.movedLabel = l.createLabel({ x: w, y: d }, n, e2);
              l.movedLabel && l.movedLabel.attr({ opacity: 0 });
            }
          };
          f2.prototype.render = function(e2, l, f3) {
            var n = this.axis, r = n.horiz, d = this.pos, g = v(this.tickmarkOffset, n.tickmarkOffset);
            d = this.getPosition(r, d, g, l);
            g = d.x;
            var c = d.y;
            n = r && g === n.pos + n.len || !r && c === n.pos ? -1 : 1;
            f3 = v(f3, 1);
            this.isActive = true;
            this.renderGridLine(l, f3, n);
            this.renderMark(d, f3, n);
            this.renderLabel(d, l, f3, e2);
            this.isNew = false;
            C(this, "afterRender");
          };
          f2.prototype.renderGridLine = function(n, e2, f3) {
            var l = this.axis, r = l.options, d = this.gridLine, g = {}, c = this.pos, a = this.type, q = v(this.tickmarkOffset, l.tickmarkOffset), p = l.chart.renderer, B = a ? a + "Grid" : "grid", A = r[B + "LineWidth"], G = r[B + "LineColor"];
            r = r[B + "LineDashStyle"];
            d || (l.chart.styledMode || (g.stroke = G, g["stroke-width"] = A, r && (g.dashstyle = r)), a || (g.zIndex = 1), n && (e2 = 0), this.gridLine = d = p.path().attr(g).addClass("highcharts-" + (a ? a + "-" : "") + "grid-line").add(l.gridGroup));
            if (d && (f3 = l.getPlotLinePath({ value: c + q, lineWidth: d.strokeWidth() * f3, force: "pass", old: n })))
              d[n || this.isNew ? "attr" : "animate"]({ d: f3, opacity: e2 });
          };
          f2.prototype.renderMark = function(n, e2, f3) {
            var l = this.axis, r = l.options, d = l.chart.renderer, g = this.type, c = g ? g + "Tick" : "tick", a = l.tickSize(c), q = this.mark, p = !q, B = n.x;
            n = n.y;
            var A = v(r[c + "Width"], !g && l.isXAxis ? 1 : 0);
            r = r[c + "Color"];
            a && (l.opposite && (a[0] = -a[0]), p && (this.mark = q = d.path().addClass("highcharts-" + (g ? g + "-" : "") + "tick").add(l.axisGroup), l.chart.styledMode || q.attr({ stroke: r, "stroke-width": A })), q[p ? "attr" : "animate"]({ d: this.getMarkPath(B, n, a[0], q.strokeWidth() * f3, l.horiz, d), opacity: e2 }));
          };
          f2.prototype.renderLabel = function(e2, l, f3, w) {
            var n = this.axis, d = n.horiz, g = n.options, c = this.label, a = g.labels, q = a.step;
            n = v(this.tickmarkOffset, n.tickmarkOffset);
            var p = true, B = e2.x;
            e2 = e2.y;
            c && y(B) && (c.xy = e2 = this.getLabelPosition(B, e2, c, d, a, n, w, q), this.isFirst && !this.isLast && !v(g.showFirstLabel, 1) || this.isLast && !this.isFirst && !v(g.showLastLabel, 1) ? p = false : !d || a.step || a.rotation || l || 0 === f3 || this.handleOverflow(e2), q && w % q && (p = false), p && y(e2.y) ? (e2.opacity = f3, c[this.isNewLabel ? "attr" : "animate"](e2), this.isNewLabel = false) : (c.attr("y", -9999), this.isNewLabel = true));
          };
          f2.prototype.replaceMovedLabel = function() {
            var e2 = this.label, l = this.axis, f3 = l.reversed;
            if (e2 && !this.isNew) {
              var w = l.horiz ? f3 ? l.left : l.width + l.left : e2.xy.x;
              f3 = l.horiz ? e2.xy.y : f3 ? l.width + l.top : l.top;
              e2.animate({ x: w, y: f3, opacity: 0 }, void 0, e2.destroy);
              delete this.label;
            }
            l.isDirty = true;
            this.label = this.movedLabel;
            delete this.movedLabel;
          };
          return f2;
        }();
        f.Tick = h;
        return f.Tick;
      });
      N(m, "Core/Time.js", [m["Core/Globals.js"], m["Core/Utilities.js"]], function(f, h) {
        var m2 = h.defined, z = h.error, F = h.extend, L = h.isObject, K = h.merge, C = h.objectEach, y = h.pad, e = h.pick, I = h.splat, v = h.timeUnits, x = f.win;
        h = function() {
          function h2(e2) {
            this.options = {};
            this.variableTimezone = this.useUTC = false;
            this.Date = x.Date;
            this.getTimezoneOffset = this.timezoneOffsetFunction();
            this.update(e2);
          }
          h2.prototype.get = function(e2, l) {
            if (this.variableTimezone || this.timezoneOffset) {
              var n = l.getTime(), f2 = n - this.getTimezoneOffset(l);
              l.setTime(f2);
              e2 = l["getUTC" + e2]();
              l.setTime(n);
              return e2;
            }
            return this.useUTC ? l["getUTC" + e2]() : l["get" + e2]();
          };
          h2.prototype.set = function(e2, l, f2) {
            if (this.variableTimezone || this.timezoneOffset) {
              if ("Milliseconds" === e2 || "Seconds" === e2 || "Minutes" === e2)
                return l["setUTC" + e2](f2);
              var n = this.getTimezoneOffset(l);
              n = l.getTime() - n;
              l.setTime(n);
              l["setUTC" + e2](f2);
              e2 = this.getTimezoneOffset(l);
              n = l.getTime() + e2;
              return l.setTime(n);
            }
            return this.useUTC ? l["setUTC" + e2](f2) : l["set" + e2](f2);
          };
          h2.prototype.update = function(n) {
            var l = e(n && n.useUTC, true);
            this.options = n = K(true, this.options || {}, n);
            this.Date = n.Date || x.Date || Date;
            this.timezoneOffset = (this.useUTC = l) && n.timezoneOffset;
            this.getTimezoneOffset = this.timezoneOffsetFunction();
            this.variableTimezone = !(l && !n.getTimezoneOffset && !n.timezone);
          };
          h2.prototype.makeTime = function(n, l, h3, w, r, d) {
            if (this.useUTC) {
              var g = this.Date.UTC.apply(0, arguments);
              var c = this.getTimezoneOffset(g);
              g += c;
              var a = this.getTimezoneOffset(g);
              c !== a ? g += a - c : c - 36e5 !== this.getTimezoneOffset(g - 36e5) || f.isSafari || (g -= 36e5);
            } else
              g = new this.Date(n, l, e(h3, 1), e(w, 0), e(r, 0), e(d, 0)).getTime();
            return g;
          };
          h2.prototype.timezoneOffsetFunction = function() {
            var e2 = this, l = this.options, f2 = l.moment || x.moment;
            if (!this.useUTC)
              return function(e3) {
                return 6e4 * new Date(e3.toString()).getTimezoneOffset();
              };
            if (l.timezone) {
              if (f2)
                return function(e3) {
                  return 6e4 * -f2.tz(e3, l.timezone).utcOffset();
                };
              z(25);
            }
            return this.useUTC && l.getTimezoneOffset ? function(e3) {
              return 6e4 * l.getTimezoneOffset(e3.valueOf());
            } : function() {
              return 6e4 * (e2.timezoneOffset || 0);
            };
          };
          h2.prototype.dateFormat = function(n, l, h3) {
            var w;
            if (!m2(l) || isNaN(l))
              return (null === (w = f.defaultOptions.lang) || void 0 === w ? void 0 : w.invalidDate) || "";
            n = e(n, "%Y-%m-%d %H:%M:%S");
            var r = this;
            w = new this.Date(l);
            var d = this.get("Hours", w), g = this.get("Day", w), c = this.get("Date", w), a = this.get("Month", w), q = this.get("FullYear", w), p = f.defaultOptions.lang, B = null === p || void 0 === p ? void 0 : p.weekdays, A = null === p || void 0 === p ? void 0 : p.shortWeekdays;
            w = F({ a: A ? A[g] : B[g].substr(0, 3), A: B[g], d: y(c), e: y(c, 2, " "), w: g, b: p.shortMonths[a], B: p.months[a], m: y(a + 1), o: a + 1, y: q.toString().substr(2, 2), Y: q, H: y(d), k: d, I: y(d % 12 || 12), l: d % 12 || 12, M: y(this.get("Minutes", w)), p: 12 > d ? "AM" : "PM", P: 12 > d ? "am" : "pm", S: y(w.getSeconds()), L: y(Math.floor(l % 1e3), 3) }, f.dateFormats);
            C(w, function(a2, c2) {
              for (; -1 !== n.indexOf("%" + c2); )
                n = n.replace("%" + c2, "function" === typeof a2 ? a2.call(r, l) : a2);
            });
            return h3 ? n.substr(
              0,
              1
            ).toUpperCase() + n.substr(1) : n;
          };
          h2.prototype.resolveDTLFormat = function(e2) {
            return L(e2, true) ? e2 : (e2 = I(e2), { main: e2[0], from: e2[1], to: e2[2] });
          };
          h2.prototype.getTimeTicks = function(n, l, f2, h3) {
            var r = this, d = [], g = {};
            var c = new r.Date(l);
            var a = n.unitRange, q = n.count || 1, p;
            h3 = e(h3, 1);
            if (m2(l)) {
              r.set("Milliseconds", c, a >= v.second ? 0 : q * Math.floor(r.get("Milliseconds", c) / q));
              a >= v.second && r.set("Seconds", c, a >= v.minute ? 0 : q * Math.floor(r.get("Seconds", c) / q));
              a >= v.minute && r.set("Minutes", c, a >= v.hour ? 0 : q * Math.floor(r.get("Minutes", c) / q));
              a >= v.hour && r.set("Hours", c, a >= v.day ? 0 : q * Math.floor(r.get("Hours", c) / q));
              a >= v.day && r.set("Date", c, a >= v.month ? 1 : Math.max(1, q * Math.floor(r.get("Date", c) / q)));
              if (a >= v.month) {
                r.set("Month", c, a >= v.year ? 0 : q * Math.floor(r.get("Month", c) / q));
                var B = r.get("FullYear", c);
              }
              a >= v.year && r.set("FullYear", c, B - B % q);
              a === v.week && (B = r.get("Day", c), r.set("Date", c, r.get("Date", c) - B + h3 + (B < h3 ? -7 : 0)));
              B = r.get("FullYear", c);
              h3 = r.get("Month", c);
              var A = r.get("Date", c), w = r.get("Hours", c);
              l = c.getTime();
              r.variableTimezone && (p = f2 - l > 4 * v.month || r.getTimezoneOffset(l) !== r.getTimezoneOffset(f2));
              l = c.getTime();
              for (c = 1; l < f2; )
                d.push(l), l = a === v.year ? r.makeTime(B + c * q, 0) : a === v.month ? r.makeTime(B, h3 + c * q) : !p || a !== v.day && a !== v.week ? p && a === v.hour && 1 < q ? r.makeTime(B, h3, A, w + c * q) : l + a * q : r.makeTime(B, h3, A + c * q * (a === v.day ? 1 : 7)), c++;
              d.push(l);
              a <= v.hour && 1e4 > d.length && d.forEach(function(a2) {
                0 === a2 % 18e5 && "000000000" === r.dateFormat("%H%M%S%L", a2) && (g[a2] = "day");
              });
            }
            d.info = F(n, { higherRanks: g, totalRange: a * q });
            return d;
          };
          return h2;
        }();
        f.Time = h;
        return f.Time;
      });
      N(
        m,
        "Core/Options.js",
        [m["Core/Globals.js"], m["Core/Color/Color.js"], m["Core/Time.js"], m["Core/Utilities.js"]],
        function(f, h, m2, z) {
          var F = f.isTouchDevice, P = f.svg;
          h = h.parse;
          z = z.merge;
          "";
          f.defaultOptions = { colors: "#7cb5ec #434348 #90ed7d #f7a35c #8085e9 #f15c80 #e4d354 #2b908f #f45b5b #91e8e1".split(" "), symbols: ["circle", "diamond", "square", "triangle", "triangle-down"], lang: {
            loading: "Loading...",
            months: "January February March April May June July August September October November December".split(" "),
            shortMonths: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
            weekdays: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
            decimalPoint: ".",
            numericSymbols: "kMGTPE".split(""),
            resetZoom: "Reset zoom",
            resetZoomTitle: "Reset zoom level 1:1",
            thousandsSep: " "
          }, global: {}, time: { Date: void 0, getTimezoneOffset: void 0, timezone: void 0, timezoneOffset: 0, useUTC: true }, chart: {
            styledMode: false,
            borderRadius: 0,
            colorCount: 10,
            defaultSeriesType: "line",
            ignoreHiddenSeries: true,
            spacing: [10, 10, 15, 10],
            resetZoomButton: { theme: { zIndex: 6 }, position: { align: "right", x: -10, y: 10 } },
            width: null,
            height: null,
            borderColor: "#335cad",
            backgroundColor: "#ffffff",
            plotBorderColor: "#cccccc"
          }, title: { text: "Chart title", align: "center", margin: 15, widthAdjust: -44 }, subtitle: { text: "", align: "center", widthAdjust: -44 }, caption: { margin: 15, text: "", align: "left", verticalAlign: "bottom" }, plotOptions: {}, labels: { style: { position: "absolute", color: "#333333" } }, legend: { enabled: true, align: "center", alignColumns: true, layout: "horizontal", labelFormatter: function() {
            return this.name;
          }, borderColor: "#999999", borderRadius: 0, navigation: {
            activeColor: "#003399",
            inactiveColor: "#cccccc"
          }, itemStyle: { color: "#333333", cursor: "pointer", fontSize: "12px", fontWeight: "bold", textOverflow: "ellipsis" }, itemHoverStyle: { color: "#000000" }, itemHiddenStyle: { color: "#cccccc" }, shadow: false, itemCheckboxStyle: { position: "absolute", width: "13px", height: "13px" }, squareSymbol: true, symbolPadding: 5, verticalAlign: "bottom", x: 0, y: 0, title: { style: { fontWeight: "bold" } } }, loading: { labelStyle: { fontWeight: "bold", position: "relative", top: "45%" }, style: {
            position: "absolute",
            backgroundColor: "#ffffff",
            opacity: 0.5,
            textAlign: "center"
          } }, tooltip: {
            enabled: true,
            animation: P,
            borderRadius: 3,
            dateTimeLabelFormats: { millisecond: "%A, %b %e, %H:%M:%S.%L", second: "%A, %b %e, %H:%M:%S", minute: "%A, %b %e, %H:%M", hour: "%A, %b %e, %H:%M", day: "%A, %b %e, %Y", week: "Week from %A, %b %e, %Y", month: "%B %Y", year: "%Y" },
            footerFormat: "",
            padding: 8,
            snap: F ? 25 : 10,
            headerFormat: '<span style="font-size: 10px">{point.key}</span><br/>',
            pointFormat: '<span style="color:{point.color}">●</span> {series.name}: <b>{point.y}</b><br/>',
            backgroundColor: h("#f7f7f7").setOpacity(0.85).get(),
            borderWidth: 1,
            shadow: true,
            style: { color: "#333333", cursor: "default", fontSize: "12px", whiteSpace: "nowrap" }
          }, credits: { enabled: true, href: "https://www.highcharts.com?credits", position: { align: "right", x: -10, verticalAlign: "bottom", y: -5 }, style: { cursor: "pointer", color: "#999999", fontSize: "9px" }, text: "Highcharts.com" } };
          "";
          f.time = new m2(z(f.defaultOptions.global, f.defaultOptions.time));
          f.dateFormat = function(h2, m3, y) {
            return f.time.dateFormat(h2, m3, y);
          };
          return { dateFormat: f.dateFormat, defaultOptions: f.defaultOptions, time: f.time };
        }
      );
      N(m, "Core/Axis/Axis.js", [m["Core/Animation/AnimationUtilities.js"], m["Core/Color/Color.js"], m["Core/Globals.js"], m["Core/Axis/Tick.js"], m["Core/Utilities.js"], m["Core/Options.js"]], function(f, h, m2, z, F, L) {
        var K = f.animObject, C = F.addEvent, y = F.arrayMax, e = F.arrayMin, I = F.clamp, v = F.correctFloat, x = F.defined, D = F.destroyObjectProperties, n = F.error, l = F.extend, J = F.fireEvent, w = F.format, r = F.getMagnitude, d = F.isArray, g = F.isFunction, c = F.isNumber, a = F.isString, q = F.merge, p = F.normalizeTickInterval, B = F.objectEach, A = F.pick, G = F.relativeLength, M = F.removeEvent, T = F.splat, Q = F.syncTimeout, O = L.defaultOptions, E = m2.deg2rad;
        f = function() {
          function u(b, k) {
            this.zoomEnabled = this.width = this.visible = this.userOptions = this.translationSlope = this.transB = this.transA = this.top = this.ticks = this.tickRotCorr = this.tickPositions = this.tickmarkOffset = this.tickInterval = this.tickAmount = this.side = this.series = this.right = this.positiveValuesOnly = this.pos = this.pointRangePadding = this.pointRange = this.plotLinesAndBandsGroups = this.plotLinesAndBands = this.paddedTicks = this.overlap = this.options = this.oldMin = this.oldMax = this.offset = this.names = this.minPixelPadding = this.minorTicks = this.minorTickInterval = this.min = this.maxLabelLength = this.max = this.len = this.left = this.labelFormatter = this.labelEdge = this.isLinked = this.height = this.hasVisibleSeries = this.hasNames = this.coll = this.closestPointRange = this.chart = this.categories = this.bottom = this.alternateBands = void 0;
            this.init(b, k);
          }
          u.prototype.init = function(b, k) {
            var a2 = k.isX, c2 = this;
            c2.chart = b;
            c2.horiz = b.inverted && !c2.isZAxis ? !a2 : a2;
            c2.isXAxis = a2;
            c2.coll = c2.coll || (a2 ? "xAxis" : "yAxis");
            J(this, "init", { userOptions: k });
            c2.opposite = k.opposite;
            c2.side = k.side || (c2.horiz ? c2.opposite ? 0 : 2 : c2.opposite ? 1 : 3);
            c2.setOptions(k);
            var d2 = this.options, p2 = d2.type;
            c2.labelFormatter = d2.labels.formatter || c2.defaultLabelFormatter;
            c2.userOptions = k;
            c2.minPixelPadding = 0;
            c2.reversed = d2.reversed;
            c2.visible = false !== d2.visible;
            c2.zoomEnabled = false !== d2.zoomEnabled;
            c2.hasNames = "category" === p2 || true === d2.categories;
            c2.categories = d2.categories || c2.hasNames;
            c2.names || (c2.names = [], c2.names.keys = {});
            c2.plotLinesAndBandsGroups = {};
            c2.positiveValuesOnly = !!c2.logarithmic;
            c2.isLinked = x(d2.linkedTo);
            c2.ticks = {};
            c2.labelEdge = [];
            c2.minorTicks = {};
            c2.plotLinesAndBands = [];
            c2.alternateBands = {};
            c2.len = 0;
            c2.minRange = c2.userMinRange = d2.minRange || d2.maxZoom;
            c2.range = d2.range;
            c2.offset = d2.offset || 0;
            c2.max = null;
            c2.min = null;
            c2.crosshair = A(d2.crosshair, T(b.options.tooltip.crosshairs)[a2 ? 0 : 1], false);
            k = c2.options.events;
            -1 === b.axes.indexOf(c2) && (a2 ? b.axes.splice(b.xAxis.length, 0, c2) : b.axes.push(c2), b[c2.coll].push(c2));
            c2.series = c2.series || [];
            b.inverted && !c2.isZAxis && a2 && "undefined" === typeof c2.reversed && (c2.reversed = true);
            c2.labelRotation = c2.options.labels.rotation;
            B(k, function(b2, k2) {
              g(b2) && C(c2, k2, b2);
            });
            J(this, "afterInit");
          };
          u.prototype.setOptions = function(b) {
            this.options = q(u.defaultOptions, "yAxis" === this.coll && u.defaultYAxisOptions, [u.defaultTopAxisOptions, u.defaultRightAxisOptions, u.defaultBottomAxisOptions, u.defaultLeftAxisOptions][this.side], q(O[this.coll], b));
            J(this, "afterSetOptions", { userOptions: b });
          };
          u.prototype.defaultLabelFormatter = function() {
            var b = this.axis, k = c(this.value) ? this.value : NaN, a2 = b.chart.time, d2 = b.categories, g2 = this.dateTimeLabelFormat, p2 = O.lang, q2 = p2.numericSymbols;
            p2 = p2.numericSymbolMagnitude || 1e3;
            var e2 = q2 && q2.length, u2 = b.options.labels.format;
            b = b.logarithmic ? Math.abs(k) : b.tickInterval;
            var B2 = this.chart, l2 = B2.numberFormatter;
            if (u2)
              var A2 = w(u2, this, B2);
            else if (d2)
              A2 = "" + this.value;
            else if (g2)
              A2 = a2.dateFormat(g2, k);
            else if (e2 && 1e3 <= b)
              for (; e2-- && "undefined" === typeof A2; )
                a2 = Math.pow(p2, e2 + 1), b >= a2 && 0 === 10 * k % a2 && null !== q2[e2] && 0 !== k && (A2 = l2(k / a2, -1) + q2[e2]);
            "undefined" === typeof A2 && (A2 = 1e4 <= Math.abs(k) ? l2(k, -1) : l2(k, -1, void 0, ""));
            return A2;
          };
          u.prototype.getSeriesExtremes = function() {
            var b = this, k = b.chart, a2;
            J(this, "getSeriesExtremes", null, function() {
              b.hasVisibleSeries = false;
              b.dataMin = b.dataMax = b.threshold = null;
              b.softThreshold = !b.isXAxis;
              b.stacking && b.stacking.buildStacks();
              b.series.forEach(function(t) {
                if (t.visible || !k.options.chart.ignoreHiddenSeries) {
                  var d2 = t.options, g2 = d2.threshold;
                  b.hasVisibleSeries = true;
                  b.positiveValuesOnly && 0 >= g2 && (g2 = null);
                  if (b.isXAxis) {
                    if (d2 = t.xData, d2.length) {
                      d2 = b.logarithmic ? d2.filter(b.validatePositiveValue) : d2;
                      a2 = t.getXExtremes(d2);
                      var p2 = a2.min;
                      var q2 = a2.max;
                      c(p2) || p2 instanceof Date || (d2 = d2.filter(c), a2 = t.getXExtremes(d2), p2 = a2.min, q2 = a2.max);
                      d2.length && (b.dataMin = Math.min(A(b.dataMin, p2), p2), b.dataMax = Math.max(A(b.dataMax, q2), q2));
                    }
                  } else if (t = t.applyExtremes(), c(t.dataMin) && (p2 = t.dataMin, b.dataMin = Math.min(A(b.dataMin, p2), p2)), c(t.dataMax) && (q2 = t.dataMax, b.dataMax = Math.max(A(b.dataMax, q2), q2)), x(g2) && (b.threshold = g2), !d2.softThreshold || b.positiveValuesOnly)
                    b.softThreshold = false;
                }
              });
            });
            J(this, "afterGetSeriesExtremes");
          };
          u.prototype.translate = function(b, a2, t, d2, g2, p2) {
            var k = this.linkedParent || this, q2 = 1, e2 = 0, H = d2 ? k.oldTransA : k.transA;
            d2 = d2 ? k.oldMin : k.min;
            var u2 = k.minPixelPadding;
            g2 = (k.isOrdinal || k.brokenAxis && k.brokenAxis.hasBreaks || k.logarithmic && g2) && k.lin2val;
            H || (H = k.transA);
            t && (q2 *= -1, e2 = k.len);
            k.reversed && (q2 *= -1, e2 -= q2 * (k.sector || k.len));
            a2 ? (b = (b * q2 + e2 - u2) / H + d2, g2 && (b = k.lin2val(b))) : (g2 && (b = k.val2lin(b)), b = c(d2) ? q2 * (b - d2) * H + e2 + q2 * u2 + (c(p2) ? H * p2 : 0) : void 0);
            return b;
          };
          u.prototype.toPixels = function(b, k) {
            return this.translate(b, false, !this.horiz, null, true) + (k ? 0 : this.pos);
          };
          u.prototype.toValue = function(b, k) {
            return this.translate(b - (k ? 0 : this.pos), true, !this.horiz, null, true);
          };
          u.prototype.getPlotLinePath = function(b) {
            function k(b2, a3, k2) {
              if ("pass" !== l2 && b2 < a3 || b2 > k2)
                l2 ? b2 = I(b2, a3, k2) : E2 = true;
              return b2;
            }
            var a2 = this, d2 = a2.chart, g2 = a2.left, p2 = a2.top, q2 = b.old, e2 = b.value, u2 = b.translatedValue, B2 = b.lineWidth, l2 = b.force, r2, n2, f2, h2, w2 = q2 && d2.oldChartHeight || d2.chartHeight, G2 = q2 && d2.oldChartWidth || d2.chartWidth, E2, v2 = a2.transB;
            b = { value: e2, lineWidth: B2, old: q2, force: l2, acrossPanes: b.acrossPanes, translatedValue: u2 };
            J(
              this,
              "getPlotLinePath",
              b,
              function(b2) {
                u2 = A(u2, a2.translate(e2, null, null, q2));
                u2 = I(u2, -1e5, 1e5);
                r2 = f2 = Math.round(u2 + v2);
                n2 = h2 = Math.round(w2 - u2 - v2);
                c(u2) ? a2.horiz ? (n2 = p2, h2 = w2 - a2.bottom, r2 = f2 = k(r2, g2, g2 + a2.width)) : (r2 = g2, f2 = G2 - a2.right, n2 = h2 = k(n2, p2, p2 + a2.height)) : (E2 = true, l2 = false);
                b2.path = E2 && !l2 ? null : d2.renderer.crispLine([["M", r2, n2], ["L", f2, h2]], B2 || 1);
              }
            );
            return b.path;
          };
          u.prototype.getLinearTickPositions = function(b, a2, c2) {
            var k = v(Math.floor(a2 / b) * b);
            c2 = v(Math.ceil(c2 / b) * b);
            var t = [], d2;
            v(k + b) === k && (d2 = 20);
            if (this.single)
              return [a2];
            for (a2 = k; a2 <= c2; ) {
              t.push(a2);
              a2 = v(a2 + b, d2);
              if (a2 === g2)
                break;
              var g2 = a2;
            }
            return t;
          };
          u.prototype.getMinorTickInterval = function() {
            var b = this.options;
            return true === b.minorTicks ? A(b.minorTickInterval, "auto") : false === b.minorTicks ? null : b.minorTickInterval;
          };
          u.prototype.getMinorTickPositions = function() {
            var b = this.options, a2 = this.tickPositions, c2 = this.minorTickInterval, d2 = [], g2 = this.pointRangePadding || 0, p2 = this.min - g2;
            g2 = this.max + g2;
            var q2 = g2 - p2;
            if (q2 && q2 / c2 < this.len / 3) {
              var e2 = this.logarithmic;
              if (e2)
                this.paddedTicks.forEach(function(b2, a3, k) {
                  a3 && d2.push.apply(d2, e2.getLogTickPositions(
                    c2,
                    k[a3 - 1],
                    k[a3],
                    true
                  ));
                });
              else if (this.dateTime && "auto" === this.getMinorTickInterval())
                d2 = d2.concat(this.getTimeTicks(this.dateTime.normalizeTimeTickInterval(c2), p2, g2, b.startOfWeek));
              else
                for (b = p2 + (a2[0] - p2) % c2; b <= g2 && b !== d2[0]; b += c2)
                  d2.push(b);
            }
            0 !== d2.length && this.trimTicks(d2);
            return d2;
          };
          u.prototype.adjustForMinRange = function() {
            var b = this.options, a2 = this.min, c2 = this.max, d2 = this.logarithmic, g2, p2, q2, u2, B2;
            this.isXAxis && "undefined" === typeof this.minRange && !d2 && (x(b.min) || x(b.max) ? this.minRange = null : (this.series.forEach(function(b2) {
              u2 = b2.xData;
              for (p2 = B2 = b2.xIncrement ? 1 : u2.length - 1; 0 < p2; p2--)
                if (q2 = u2[p2] - u2[p2 - 1], "undefined" === typeof g2 || q2 < g2)
                  g2 = q2;
            }), this.minRange = Math.min(5 * g2, this.dataMax - this.dataMin)));
            if (c2 - a2 < this.minRange) {
              var l2 = this.dataMax - this.dataMin >= this.minRange;
              var r2 = this.minRange;
              var n2 = (r2 - c2 + a2) / 2;
              n2 = [a2 - n2, A(b.min, a2 - n2)];
              l2 && (n2[2] = this.logarithmic ? this.logarithmic.log2lin(this.dataMin) : this.dataMin);
              a2 = y(n2);
              c2 = [a2 + r2, A(b.max, a2 + r2)];
              l2 && (c2[2] = d2 ? d2.log2lin(this.dataMax) : this.dataMax);
              c2 = e(c2);
              c2 - a2 < r2 && (n2[0] = c2 - r2, n2[1] = A(b.min, c2 - r2), a2 = y(n2));
            }
            this.min = a2;
            this.max = c2;
          };
          u.prototype.getClosest = function() {
            var b;
            this.categories ? b = 1 : this.series.forEach(function(a2) {
              var k = a2.closestPointRange, c2 = a2.visible || !a2.chart.options.chart.ignoreHiddenSeries;
              !a2.noSharedTooltip && x(k) && c2 && (b = x(b) ? Math.min(b, k) : k);
            });
            return b;
          };
          u.prototype.nameToX = function(b) {
            var a2 = d(this.categories), c2 = a2 ? this.categories : this.names, g2 = b.options.x;
            b.series.requireSorting = false;
            x(g2) || (g2 = false === this.options.uniqueNames ? b.series.autoIncrement() : a2 ? c2.indexOf(b.name) : A(c2.keys[b.name], -1));
            if (-1 === g2) {
              if (!a2)
                var p2 = c2.length;
            } else
              p2 = g2;
            "undefined" !== typeof p2 && (this.names[p2] = b.name, this.names.keys[b.name] = p2);
            return p2;
          };
          u.prototype.updateNames = function() {
            var b = this, a2 = this.names;
            0 < a2.length && (Object.keys(a2.keys).forEach(function(b2) {
              delete a2.keys[b2];
            }), a2.length = 0, this.minRange = this.userMinRange, (this.series || []).forEach(function(a3) {
              a3.xIncrement = null;
              if (!a3.points || a3.isDirtyData)
                b.max = Math.max(b.max, a3.xData.length - 1), a3.processData(), a3.generatePoints();
              a3.data.forEach(function(k, c2) {
                if (k && k.options && "undefined" !== typeof k.name) {
                  var d2 = b.nameToX(k);
                  "undefined" !== typeof d2 && d2 !== k.x && (k.x = d2, a3.xData[c2] = d2);
                }
              });
            }));
          };
          u.prototype.setAxisTranslation = function(b) {
            var k = this, c2 = k.max - k.min, d2 = k.axisPointRange || 0, g2 = 0, p2 = 0, q2 = k.linkedParent, e2 = !!k.categories, u2 = k.transA, B2 = k.isXAxis;
            if (B2 || e2 || d2) {
              var l2 = k.getClosest();
              q2 ? (g2 = q2.minPointOffset, p2 = q2.pointRangePadding) : k.series.forEach(function(b2) {
                var c3 = e2 ? 1 : B2 ? A(b2.options.pointRange, l2, 0) : k.axisPointRange || 0, t = b2.options.pointPlacement;
                d2 = Math.max(d2, c3);
                if (!k.single || e2)
                  b2 = b2.is("xrange") ? !B2 : B2, g2 = Math.max(g2, b2 && a(t) ? 0 : c3 / 2), p2 = Math.max(
                    p2,
                    b2 && "on" === t ? 0 : c3
                  );
              });
              q2 = k.ordinal && k.ordinal.slope && l2 ? k.ordinal.slope / l2 : 1;
              k.minPointOffset = g2 *= q2;
              k.pointRangePadding = p2 *= q2;
              k.pointRange = Math.min(d2, k.single && e2 ? 1 : c2);
              B2 && (k.closestPointRange = l2);
            }
            b && (k.oldTransA = u2);
            k.translationSlope = k.transA = u2 = k.staticScale || k.len / (c2 + p2 || 1);
            k.transB = k.horiz ? k.left : k.bottom;
            k.minPixelPadding = u2 * g2;
            J(this, "afterSetAxisTranslation");
          };
          u.prototype.minFromRange = function() {
            return this.max - this.range;
          };
          u.prototype.setTickInterval = function(b) {
            var a2 = this, d2 = a2.chart, g2 = a2.logarithmic, q2 = a2.options, e2 = a2.isXAxis, u2 = a2.isLinked, B2 = q2.maxPadding, l2 = q2.minPadding, f2 = q2.tickInterval, h2 = q2.tickPixelInterval, w2 = a2.categories, G2 = c(a2.threshold) ? a2.threshold : null, E2 = a2.softThreshold;
            a2.dateTime || w2 || u2 || this.getTickAmount();
            var O2 = A(a2.userMin, q2.min);
            var D2 = A(a2.userMax, q2.max);
            if (u2) {
              a2.linkedParent = d2[a2.coll][q2.linkedTo];
              var M2 = a2.linkedParent.getExtremes();
              a2.min = A(M2.min, M2.dataMin);
              a2.max = A(M2.max, M2.dataMax);
              q2.type !== a2.linkedParent.options.type && n(11, 1, d2);
            } else {
              if (E2 && x(G2)) {
                if (a2.dataMin >= G2)
                  M2 = G2, l2 = 0;
                else if (a2.dataMax <= G2) {
                  var m3 = G2;
                  B2 = 0;
                }
              }
              a2.min = A(O2, M2, a2.dataMin);
              a2.max = A(D2, m3, a2.dataMax);
            }
            g2 && (a2.positiveValuesOnly && !b && 0 >= Math.min(a2.min, A(a2.dataMin, a2.min)) && n(10, 1, d2), a2.min = v(g2.log2lin(a2.min), 16), a2.max = v(g2.log2lin(a2.max), 16));
            a2.range && x(a2.max) && (a2.userMin = a2.min = O2 = Math.max(a2.dataMin, a2.minFromRange()), a2.userMax = D2 = a2.max, a2.range = null);
            J(a2, "foundExtremes");
            a2.beforePadding && a2.beforePadding();
            a2.adjustForMinRange();
            !(w2 || a2.axisPointRange || a2.stacking && a2.stacking.usePercentage || u2) && x(a2.min) && x(a2.max) && (d2 = a2.max - a2.min) && (!x(O2) && l2 && (a2.min -= d2 * l2), !x(D2) && B2 && (a2.max += d2 * B2));
            c(a2.userMin) || (c(q2.softMin) && q2.softMin < a2.min && (a2.min = O2 = q2.softMin), c(q2.floor) && (a2.min = Math.max(a2.min, q2.floor)));
            c(a2.userMax) || (c(q2.softMax) && q2.softMax > a2.max && (a2.max = D2 = q2.softMax), c(q2.ceiling) && (a2.max = Math.min(a2.max, q2.ceiling)));
            E2 && x(a2.dataMin) && (G2 = G2 || 0, !x(O2) && a2.min < G2 && a2.dataMin >= G2 ? a2.min = a2.options.minRange ? Math.min(G2, a2.max - a2.minRange) : G2 : !x(D2) && a2.max > G2 && a2.dataMax <= G2 && (a2.max = a2.options.minRange ? Math.max(G2, a2.min + a2.minRange) : G2));
            a2.tickInterval = a2.min === a2.max || "undefined" === typeof a2.min || "undefined" === typeof a2.max ? 1 : u2 && !f2 && h2 === a2.linkedParent.options.tickPixelInterval ? f2 = a2.linkedParent.tickInterval : A(f2, this.tickAmount ? (a2.max - a2.min) / Math.max(this.tickAmount - 1, 1) : void 0, w2 ? 1 : (a2.max - a2.min) * h2 / Math.max(a2.len, h2));
            e2 && !b && a2.series.forEach(function(b2) {
              b2.processData(a2.min !== a2.oldMin || a2.max !== a2.oldMax);
            });
            a2.setAxisTranslation(true);
            J(this, "initialAxisTranslation");
            a2.pointRange && !f2 && (a2.tickInterval = Math.max(a2.pointRange, a2.tickInterval));
            b = A(q2.minTickInterval, a2.dateTime && !a2.series.some(function(b2) {
              return b2.noSharedTooltip;
            }) ? a2.closestPointRange : 0);
            !f2 && a2.tickInterval < b && (a2.tickInterval = b);
            a2.dateTime || a2.logarithmic || f2 || (a2.tickInterval = p(a2.tickInterval, void 0, r(a2.tickInterval), A(q2.allowDecimals, 0.5 > a2.tickInterval || void 0 !== this.tickAmount), !!this.tickAmount));
            this.tickAmount || (a2.tickInterval = a2.unsquish());
            this.setTickPositions();
          };
          u.prototype.setTickPositions = function() {
            var b = this.options, a2 = b.tickPositions;
            var c2 = this.getMinorTickInterval();
            var d2 = b.tickPositioner, g2 = this.hasVerticalPanning(), p2 = "colorAxis" === this.coll, q2 = (p2 || !g2) && b.startOnTick;
            g2 = (p2 || !g2) && b.endOnTick;
            this.tickmarkOffset = this.categories && "between" === b.tickmarkPlacement && 1 === this.tickInterval ? 0.5 : 0;
            this.minorTickInterval = "auto" === c2 && this.tickInterval ? this.tickInterval / 5 : c2;
            this.single = this.min === this.max && x(this.min) && !this.tickAmount && (parseInt(this.min, 10) === this.min || false !== b.allowDecimals);
            this.tickPositions = c2 = a2 && a2.slice();
            !c2 && (this.ordinal && this.ordinal.positions || !((this.max - this.min) / this.tickInterval > Math.max(2 * this.len, 200)) ? c2 = this.dateTime ? this.getTimeTicks(this.dateTime.normalizeTimeTickInterval(
              this.tickInterval,
              b.units
            ), this.min, this.max, b.startOfWeek, this.ordinal && this.ordinal.positions, this.closestPointRange, true) : this.logarithmic ? this.logarithmic.getLogTickPositions(this.tickInterval, this.min, this.max) : this.getLinearTickPositions(this.tickInterval, this.min, this.max) : (c2 = [this.min, this.max], n(19, false, this.chart)), c2.length > this.len && (c2 = [c2[0], c2.pop()], c2[0] === c2[1] && (c2.length = 1)), this.tickPositions = c2, d2 && (d2 = d2.apply(this, [this.min, this.max]))) && (this.tickPositions = c2 = d2);
            this.paddedTicks = c2.slice(0);
            this.trimTicks(
              c2,
              q2,
              g2
            );
            this.isLinked || (this.single && 2 > c2.length && !this.categories && !this.series.some(function(b2) {
              return b2.is("heatmap") && "between" === b2.options.pointPlacement;
            }) && (this.min -= 0.5, this.max += 0.5), a2 || d2 || this.adjustTickAmount());
            J(this, "afterSetTickPositions");
          };
          u.prototype.trimTicks = function(b, a2, c2) {
            var k = b[0], d2 = b[b.length - 1], t = !this.isOrdinal && this.minPointOffset || 0;
            J(this, "trimTicks");
            if (!this.isLinked) {
              if (a2 && -Infinity !== k)
                this.min = k;
              else
                for (; this.min - t > b[0]; )
                  b.shift();
              if (c2)
                this.max = d2;
              else
                for (; this.max + t < b[b.length - 1]; )
                  b.pop();
              0 === b.length && x(k) && !this.options.tickPositions && b.push((d2 + k) / 2);
            }
          };
          u.prototype.alignToOthers = function() {
            var b = {}, a2, c2 = this.options;
            false === this.chart.options.chart.alignTicks || false === c2.alignTicks || false === c2.startOnTick || false === c2.endOnTick || this.logarithmic || this.chart[this.coll].forEach(function(k) {
              var c3 = k.options;
              c3 = [k.horiz ? c3.left : c3.top, c3.width, c3.height, c3.pane].join();
              k.series.length && (b[c3] ? a2 = true : b[c3] = 1);
            });
            return a2;
          };
          u.prototype.getTickAmount = function() {
            var b = this.options, a2 = b.tickAmount, c2 = b.tickPixelInterval;
            !x(b.tickInterval) && !a2 && this.len < c2 && !this.isRadial && !this.logarithmic && b.startOnTick && b.endOnTick && (a2 = 2);
            !a2 && this.alignToOthers() && (a2 = Math.ceil(this.len / c2) + 1);
            4 > a2 && (this.finalTickAmt = a2, a2 = 5);
            this.tickAmount = a2;
          };
          u.prototype.adjustTickAmount = function() {
            var b = this.options, a2 = this.tickInterval, c2 = this.tickPositions, d2 = this.tickAmount, g2 = this.finalTickAmt, p2 = c2 && c2.length, q2 = A(this.threshold, this.softThreshold ? 0 : null), e2;
            if (this.hasData()) {
              if (p2 < d2) {
                for (e2 = this.min; c2.length < d2; )
                  c2.length % 2 || e2 === q2 ? c2.push(v(c2[c2.length - 1] + a2)) : c2.unshift(v(c2[0] - a2));
                this.transA *= (p2 - 1) / (d2 - 1);
                this.min = b.startOnTick ? c2[0] : Math.min(this.min, c2[0]);
                this.max = b.endOnTick ? c2[c2.length - 1] : Math.max(this.max, c2[c2.length - 1]);
              } else
                p2 > d2 && (this.tickInterval *= 2, this.setTickPositions());
              if (x(g2)) {
                for (a2 = b = c2.length; a2--; )
                  (3 === g2 && 1 === a2 % 2 || 2 >= g2 && 0 < a2 && a2 < b - 1) && c2.splice(a2, 1);
                this.finalTickAmt = void 0;
              }
            }
          };
          u.prototype.setScale = function() {
            var b, a2 = false, c2 = false;
            this.series.forEach(function(b2) {
              var k;
              a2 = a2 || b2.isDirtyData || b2.isDirty;
              c2 = c2 || (null === (k = b2.xAxis) || void 0 === k ? void 0 : k.isDirty) || false;
            });
            this.oldMin = this.min;
            this.oldMax = this.max;
            this.oldAxisLength = this.len;
            this.setAxisSize();
            (b = this.len !== this.oldAxisLength) || a2 || c2 || this.isLinked || this.forceRedraw || this.userMin !== this.oldUserMin || this.userMax !== this.oldUserMax || this.alignToOthers() ? (this.stacking && this.stacking.resetStacks(), this.forceRedraw = false, this.getSeriesExtremes(), this.setTickInterval(), this.oldUserMin = this.userMin, this.oldUserMax = this.userMax, this.isDirty || (this.isDirty = b || this.min !== this.oldMin || this.max !== this.oldMax)) : this.stacking && this.stacking.cleanStacks();
            a2 && this.panningState && (this.panningState.isDirty = true);
            J(this, "afterSetScale");
          };
          u.prototype.setExtremes = function(b, a2, c2, d2, g2) {
            var k = this, t = k.chart;
            c2 = A(c2, true);
            k.series.forEach(function(b2) {
              delete b2.kdTree;
            });
            g2 = l(g2, { min: b, max: a2 });
            J(k, "setExtremes", g2, function() {
              k.userMin = b;
              k.userMax = a2;
              k.eventArgs = g2;
              c2 && t.redraw(d2);
            });
          };
          u.prototype.zoom = function(b, a2) {
            var k = this, c2 = this.dataMin, d2 = this.dataMax, g2 = this.options, p2 = Math.min(c2, A(g2.min, c2)), q2 = Math.max(
              d2,
              A(g2.max, d2)
            );
            b = { newMin: b, newMax: a2 };
            J(this, "zoom", b, function(b2) {
              var a3 = b2.newMin, g3 = b2.newMax;
              if (a3 !== k.min || g3 !== k.max)
                k.allowZoomOutside || (x(c2) && (a3 < p2 && (a3 = p2), a3 > q2 && (a3 = q2)), x(d2) && (g3 < p2 && (g3 = p2), g3 > q2 && (g3 = q2))), k.displayBtn = "undefined" !== typeof a3 || "undefined" !== typeof g3, k.setExtremes(a3, g3, false, void 0, { trigger: "zoom" });
              b2.zoomed = true;
            });
            return b.zoomed;
          };
          u.prototype.setAxisSize = function() {
            var b = this.chart, a2 = this.options, c2 = a2.offsets || [0, 0, 0, 0], d2 = this.horiz, g2 = this.width = Math.round(G(A(a2.width, b.plotWidth - c2[3] + c2[1]), b.plotWidth)), p2 = this.height = Math.round(G(A(a2.height, b.plotHeight - c2[0] + c2[2]), b.plotHeight)), q2 = this.top = Math.round(G(A(a2.top, b.plotTop + c2[0]), b.plotHeight, b.plotTop));
            a2 = this.left = Math.round(G(A(a2.left, b.plotLeft + c2[3]), b.plotWidth, b.plotLeft));
            this.bottom = b.chartHeight - p2 - q2;
            this.right = b.chartWidth - g2 - a2;
            this.len = Math.max(d2 ? g2 : p2, 0);
            this.pos = d2 ? a2 : q2;
          };
          u.prototype.getExtremes = function() {
            var b = this.logarithmic;
            return {
              min: b ? v(b.lin2log(this.min)) : this.min,
              max: b ? v(b.lin2log(this.max)) : this.max,
              dataMin: this.dataMin,
              dataMax: this.dataMax,
              userMin: this.userMin,
              userMax: this.userMax
            };
          };
          u.prototype.getThreshold = function(b) {
            var a2 = this.logarithmic, c2 = a2 ? a2.lin2log(this.min) : this.min;
            a2 = a2 ? a2.lin2log(this.max) : this.max;
            null === b || -Infinity === b ? b = c2 : Infinity === b ? b = a2 : c2 > b ? b = c2 : a2 < b && (b = a2);
            return this.translate(b, 0, 1, 0, 1);
          };
          u.prototype.autoLabelAlign = function(b) {
            var a2 = (A(b, 0) - 90 * this.side + 720) % 360;
            b = { align: "center" };
            J(this, "autoLabelAlign", b, function(b2) {
              15 < a2 && 165 > a2 ? b2.align = "right" : 195 < a2 && 345 > a2 && (b2.align = "left");
            });
            return b.align;
          };
          u.prototype.tickSize = function(b) {
            var a2 = this.options, c2 = a2["tick" === b ? "tickLength" : "minorTickLength"], d2 = A(a2["tick" === b ? "tickWidth" : "minorTickWidth"], "tick" === b && this.isXAxis && !this.categories ? 1 : 0);
            if (d2 && c2) {
              "inside" === a2[b + "Position"] && (c2 = -c2);
              var g2 = [c2, d2];
            }
            b = { tickSize: g2 };
            J(this, "afterTickSize", b);
            return b.tickSize;
          };
          u.prototype.labelMetrics = function() {
            var b = this.tickPositions && this.tickPositions[0] || 0;
            return this.chart.renderer.fontMetrics(this.options.labels.style && this.options.labels.style.fontSize, this.ticks[b] && this.ticks[b].label);
          };
          u.prototype.unsquish = function() {
            var b = this.options.labels, a2 = this.horiz, c2 = this.tickInterval, d2 = c2, g2 = this.len / (((this.categories ? 1 : 0) + this.max - this.min) / c2), p2, q2 = b.rotation, e2 = this.labelMetrics(), u2, B2 = Number.MAX_VALUE, l2, r2 = this.max - this.min, n2 = function(b2) {
              var a3 = b2 / (g2 || 1);
              a3 = 1 < a3 ? Math.ceil(a3) : 1;
              a3 * c2 > r2 && Infinity !== b2 && Infinity !== g2 && r2 && (a3 = Math.ceil(r2 / c2));
              return v(a3 * c2);
            };
            a2 ? (l2 = !b.staggerLines && !b.step && (x(q2) ? [q2] : g2 < A(b.autoRotationLimit, 80) && b.autoRotation)) && l2.forEach(function(b2) {
              if (b2 === q2 || b2 && -90 <= b2 && 90 >= b2) {
                u2 = n2(Math.abs(e2.h / Math.sin(E * b2)));
                var a3 = u2 + Math.abs(b2 / 360);
                a3 < B2 && (B2 = a3, p2 = b2, d2 = u2);
              }
            }) : b.step || (d2 = n2(e2.h));
            this.autoRotation = l2;
            this.labelRotation = A(p2, q2);
            return d2;
          };
          u.prototype.getSlotWidth = function(b) {
            var a2, d2 = this.chart, g2 = this.horiz, p2 = this.options.labels, q2 = Math.max(this.tickPositions.length - (this.categories ? 0 : 1), 1), e2 = d2.margin[3];
            if (b && c(b.slotWidth))
              return b.slotWidth;
            if (g2 && p2 && 2 > (p2.step || 0))
              return p2.rotation ? 0 : (this.staggerLines || 1) * this.len / q2;
            if (!g2) {
              b = null === (a2 = null === p2 || void 0 === p2 ? void 0 : p2.style) || void 0 === a2 ? void 0 : a2.width;
              if (void 0 !== b)
                return parseInt(
                  b,
                  10
                );
              if (e2)
                return e2 - d2.spacing[3];
            }
            return 0.33 * d2.chartWidth;
          };
          u.prototype.renderUnsquish = function() {
            var b = this.chart, k = b.renderer, c2 = this.tickPositions, d2 = this.ticks, g2 = this.options.labels, p2 = g2 && g2.style || {}, q2 = this.horiz, e2 = this.getSlotWidth(), u2 = Math.max(1, Math.round(e2 - 2 * (g2.padding || 5))), B2 = {}, l2 = this.labelMetrics(), r2 = g2.style && g2.style.textOverflow, n2 = 0;
            a(g2.rotation) || (B2.rotation = g2.rotation || 0);
            c2.forEach(function(b2) {
              b2 = d2[b2];
              b2.movedLabel && b2.replaceMovedLabel();
              b2 && b2.label && b2.label.textPxLength > n2 && (n2 = b2.label.textPxLength);
            });
            this.maxLabelLength = n2;
            if (this.autoRotation)
              n2 > u2 && n2 > l2.h ? B2.rotation = this.labelRotation : this.labelRotation = 0;
            else if (e2) {
              var A2 = u2;
              if (!r2) {
                var f2 = "clip";
                for (u2 = c2.length; !q2 && u2--; ) {
                  var h2 = c2[u2];
                  if (h2 = d2[h2].label)
                    h2.styles && "ellipsis" === h2.styles.textOverflow ? h2.css({ textOverflow: "clip" }) : h2.textPxLength > e2 && h2.css({ width: e2 + "px" }), h2.getBBox().height > this.len / c2.length - (l2.h - l2.f) && (h2.specificTextOverflow = "ellipsis");
                }
              }
            }
            B2.rotation && (A2 = n2 > 0.5 * b.chartHeight ? 0.33 * b.chartHeight : n2, r2 || (f2 = "ellipsis"));
            if (this.labelAlign = g2.align || this.autoLabelAlign(this.labelRotation))
              B2.align = this.labelAlign;
            c2.forEach(function(b2) {
              var a2 = (b2 = d2[b2]) && b2.label, k2 = p2.width, c3 = {};
              a2 && (a2.attr(B2), b2.shortenLabel ? b2.shortenLabel() : A2 && !k2 && "nowrap" !== p2.whiteSpace && (A2 < a2.textPxLength || "SPAN" === a2.element.tagName) ? (c3.width = A2 + "px", r2 || (c3.textOverflow = a2.specificTextOverflow || f2), a2.css(c3)) : a2.styles && a2.styles.width && !c3.width && !k2 && a2.css({ width: null }), delete a2.specificTextOverflow, b2.rotation = B2.rotation);
            }, this);
            this.tickRotCorr = k.rotCorr(l2.b, this.labelRotation || 0, 0 !== this.side);
          };
          u.prototype.hasData = function() {
            return this.series.some(function(b) {
              return b.hasData();
            }) || this.options.showEmpty && x(this.min) && x(this.max);
          };
          u.prototype.addTitle = function(b) {
            var a2 = this.chart.renderer, c2 = this.horiz, d2 = this.opposite, g2 = this.options.title, p2, e2 = this.chart.styledMode;
            this.axisTitle || ((p2 = g2.textAlign) || (p2 = (c2 ? { low: "left", middle: "center", high: "right" } : { low: d2 ? "right" : "left", middle: "center", high: d2 ? "left" : "right" })[g2.align]), this.axisTitle = a2.text(g2.text, 0, 0, g2.useHTML).attr({ zIndex: 7, rotation: g2.rotation || 0, align: p2 }).addClass("highcharts-axis-title"), e2 || this.axisTitle.css(q(g2.style)), this.axisTitle.add(this.axisGroup), this.axisTitle.isNew = true);
            e2 || g2.style.width || this.isRadial || this.axisTitle.css({ width: this.len + "px" });
            this.axisTitle[b ? "show" : "hide"](b);
          };
          u.prototype.generateTick = function(b) {
            var a2 = this.ticks;
            a2[b] ? a2[b].addLabel() : a2[b] = new z(this, b);
          };
          u.prototype.getOffset = function() {
            var b = this, a2 = b.chart, c2 = a2.renderer, d2 = b.options, g2 = b.tickPositions, p2 = b.ticks, q2 = b.horiz, e2 = b.side, u2 = a2.inverted && !b.isZAxis ? [1, 0, 3, 2][e2] : e2, l2, n2 = 0, r2 = 0, f2 = d2.title, h2 = d2.labels, G2 = 0, w2 = a2.axisOffset;
            a2 = a2.clipOffset;
            var E2 = [-1, 1, 1, -1][e2], v2 = d2.className, O2 = b.axisParent;
            var D2 = b.hasData();
            b.showAxis = l2 = D2 || A(d2.showEmpty, true);
            b.staggerLines = b.horiz && h2.staggerLines;
            b.axisGroup || (b.gridGroup = c2.g("grid").attr({ zIndex: d2.gridZIndex || 1 }).addClass("highcharts-" + this.coll.toLowerCase() + "-grid " + (v2 || "")).add(O2), b.axisGroup = c2.g("axis").attr({ zIndex: d2.zIndex || 2 }).addClass("highcharts-" + this.coll.toLowerCase() + " " + (v2 || "")).add(O2), b.labelGroup = c2.g("axis-labels").attr({ zIndex: h2.zIndex || 7 }).addClass("highcharts-" + b.coll.toLowerCase() + "-labels " + (v2 || "")).add(O2));
            D2 || b.isLinked ? (g2.forEach(function(a3, c3) {
              b.generateTick(a3, c3);
            }), b.renderUnsquish(), b.reserveSpaceDefault = 0 === e2 || 2 === e2 || { 1: "left", 3: "right" }[e2] === b.labelAlign, A(h2.reserveSpace, "center" === b.labelAlign ? true : null, b.reserveSpaceDefault) && g2.forEach(function(b2) {
              G2 = Math.max(p2[b2].getLabelSize(), G2);
            }), b.staggerLines && (G2 *= b.staggerLines), b.labelOffset = G2 * (b.opposite ? -1 : 1)) : B(p2, function(b2, a3) {
              b2.destroy();
              delete p2[a3];
            });
            if (f2 && f2.text && false !== f2.enabled && (b.addTitle(l2), l2 && false !== f2.reserveSpace)) {
              b.titleOffset = n2 = b.axisTitle.getBBox()[q2 ? "height" : "width"];
              var M2 = f2.offset;
              r2 = x(M2) ? 0 : A(f2.margin, q2 ? 5 : 10);
            }
            b.renderLine();
            b.offset = E2 * A(d2.offset, w2[e2] ? w2[e2] + (d2.margin || 0) : 0);
            b.tickRotCorr = b.tickRotCorr || { x: 0, y: 0 };
            c2 = 0 === e2 ? -b.labelMetrics().h : 2 === e2 ? b.tickRotCorr.y : 0;
            r2 = Math.abs(G2) + r2;
            G2 && (r2 = r2 - c2 + E2 * (q2 ? A(h2.y, b.tickRotCorr.y + 8 * E2) : h2.x));
            b.axisTitleMargin = A(M2, r2);
            b.getMaxLabelDimensions && (b.maxLabelDimensions = b.getMaxLabelDimensions(p2, g2));
            q2 = this.tickSize("tick");
            w2[e2] = Math.max(w2[e2], b.axisTitleMargin + n2 + E2 * b.offset, r2, g2 && g2.length && q2 ? q2[0] + E2 * b.offset : 0);
            d2 = d2.offset ? 0 : 2 * Math.floor(b.axisLine.strokeWidth() / 2);
            a2[u2] = Math.max(a2[u2], d2);
            J(this, "afterGetOffset");
          };
          u.prototype.getLinePath = function(b) {
            var a2 = this.chart, c2 = this.opposite, d2 = this.offset, g2 = this.horiz, p2 = this.left + (c2 ? this.width : 0) + d2;
            d2 = a2.chartHeight - this.bottom - (c2 ? this.height : 0) + d2;
            c2 && (b *= -1);
            return a2.renderer.crispLine([["M", g2 ? this.left : p2, g2 ? d2 : this.top], ["L", g2 ? a2.chartWidth - this.right : p2, g2 ? d2 : a2.chartHeight - this.bottom]], b);
          };
          u.prototype.renderLine = function() {
            this.axisLine || (this.axisLine = this.chart.renderer.path().addClass("highcharts-axis-line").add(this.axisGroup), this.chart.styledMode || this.axisLine.attr({ stroke: this.options.lineColor, "stroke-width": this.options.lineWidth, zIndex: 7 }));
          };
          u.prototype.getTitlePosition = function() {
            var b = this.horiz, a2 = this.left, c2 = this.top, d2 = this.len, g2 = this.options.title, p2 = b ? a2 : c2, q2 = this.opposite, e2 = this.offset, u2 = g2.x || 0, B2 = g2.y || 0, l2 = this.axisTitle, r2 = this.chart.renderer.fontMetrics(g2.style && g2.style.fontSize, l2);
            l2 = Math.max(l2.getBBox(null, 0).height - r2.h - 1, 0);
            d2 = { low: p2 + (b ? 0 : d2), middle: p2 + d2 / 2, high: p2 + (b ? d2 : 0) }[g2.align];
            a2 = (b ? c2 + this.height : a2) + (b ? 1 : -1) * (q2 ? -1 : 1) * this.axisTitleMargin + [-l2, l2, r2.f, -l2][this.side];
            b = { x: b ? d2 + u2 : a2 + (q2 ? this.width : 0) + e2 + u2, y: b ? a2 + B2 - (q2 ? this.height : 0) + e2 : d2 + B2 };
            J(this, "afterGetTitlePosition", { titlePosition: b });
            return b;
          };
          u.prototype.renderMinorTick = function(b) {
            var a2 = this.chart.hasRendered && c(this.oldMin), d2 = this.minorTicks;
            d2[b] || (d2[b] = new z(this, b, "minor"));
            a2 && d2[b].isNew && d2[b].render(null, true);
            d2[b].render(null, false, 1);
          };
          u.prototype.renderTick = function(b, a2) {
            var k, d2 = this.isLinked, g2 = this.ticks, p2 = this.chart.hasRendered && c(this.oldMin);
            if (!d2 || b >= this.min && b <= this.max || (null === (k = this.grid) || void 0 === k ? 0 : k.isColumn))
              g2[b] || (g2[b] = new z(this, b)), p2 && g2[b].isNew && g2[b].render(a2, true, -1), g2[b].render(a2);
          };
          u.prototype.render = function() {
            var b = this, a2 = b.chart, d2 = b.logarithmic, g2 = b.options, p2 = b.isLinked, q2 = b.tickPositions, e2 = b.axisTitle, u2 = b.ticks, l2 = b.minorTicks, r2 = b.alternateBands, n2 = g2.stackLabels, f2 = g2.alternateGridColor, A2 = b.tickmarkOffset, h2 = b.axisLine, G2 = b.showAxis, w2 = K(a2.renderer.globalAnimation), E2, v2;
            b.labelEdge.length = 0;
            b.overlap = false;
            [u2, l2, r2].forEach(function(b2) {
              B(
                b2,
                function(b3) {
                  b3.isActive = false;
                }
              );
            });
            if (b.hasData() || p2)
              b.minorTickInterval && !b.categories && b.getMinorTickPositions().forEach(function(a3) {
                b.renderMinorTick(a3);
              }), q2.length && (q2.forEach(function(a3, c2) {
                b.renderTick(a3, c2);
              }), A2 && (0 === b.min || b.single) && (u2[-1] || (u2[-1] = new z(b, -1, null, true)), u2[-1].render(-1))), f2 && q2.forEach(function(c2, k) {
                v2 = "undefined" !== typeof q2[k + 1] ? q2[k + 1] + A2 : b.max - A2;
                0 === k % 2 && c2 < b.max && v2 <= b.max + (a2.polar ? -A2 : A2) && (r2[c2] || (r2[c2] = new m2.PlotLineOrBand(b)), E2 = c2 + A2, r2[c2].options = { from: d2 ? d2.lin2log(E2) : E2, to: d2 ? d2.lin2log(v2) : v2, color: f2, className: "highcharts-alternate-grid" }, r2[c2].render(), r2[c2].isActive = true);
              }), b._addedPlotLB || ((g2.plotLines || []).concat(g2.plotBands || []).forEach(function(a3) {
                b.addPlotBandOrLine(a3);
              }), b._addedPlotLB = true);
            [u2, l2, r2].forEach(function(b2) {
              var c2, k = [], d3 = w2.duration;
              B(b2, function(b3, a3) {
                b3.isActive || (b3.render(a3, false, 0), b3.isActive = false, k.push(a3));
              });
              Q(function() {
                for (c2 = k.length; c2--; )
                  b2[k[c2]] && !b2[k[c2]].isActive && (b2[k[c2]].destroy(), delete b2[k[c2]]);
              }, b2 !== r2 && a2.hasRendered && d3 ? d3 : 0);
            });
            h2 && (h2[h2.isPlaced ? "animate" : "attr"]({ d: this.getLinePath(h2.strokeWidth()) }), h2.isPlaced = true, h2[G2 ? "show" : "hide"](G2));
            e2 && G2 && (g2 = b.getTitlePosition(), c(g2.y) ? (e2[e2.isNew ? "attr" : "animate"](g2), e2.isNew = false) : (e2.attr("y", -9999), e2.isNew = true));
            n2 && n2.enabled && b.stacking && b.stacking.renderStackTotals();
            b.isDirty = false;
            J(this, "afterRender");
          };
          u.prototype.redraw = function() {
            this.visible && (this.render(), this.plotLinesAndBands.forEach(function(b) {
              b.render();
            }));
            this.series.forEach(function(b) {
              b.isDirty = true;
            });
          };
          u.prototype.getKeepProps = function() {
            return this.keepProps || u.keepProps;
          };
          u.prototype.destroy = function(b) {
            var a2 = this, c2 = a2.plotLinesAndBands, d2;
            J(this, "destroy", { keepEvents: b });
            b || M(a2);
            [a2.ticks, a2.minorTicks, a2.alternateBands].forEach(function(b2) {
              D(b2);
            });
            if (c2)
              for (b = c2.length; b--; )
                c2[b].destroy();
            "axisLine axisTitle axisGroup gridGroup labelGroup cross scrollbar".split(" ").forEach(function(b2) {
              a2[b2] && (a2[b2] = a2[b2].destroy());
            });
            for (d2 in a2.plotLinesAndBandsGroups)
              a2.plotLinesAndBandsGroups[d2] = a2.plotLinesAndBandsGroups[d2].destroy();
            B(a2, function(b2, c3) {
              -1 === a2.getKeepProps().indexOf(c3) && delete a2[c3];
            });
          };
          u.prototype.drawCrosshair = function(b, a2) {
            var c2 = this.crosshair, k = A(c2.snap, true), d2, g2 = this.cross, p2 = this.chart;
            J(this, "drawCrosshair", { e: b, point: a2 });
            b || (b = this.cross && this.cross.e);
            if (this.crosshair && false !== (x(a2) || !k)) {
              k ? x(a2) && (d2 = A("colorAxis" !== this.coll ? a2.crosshairPos : null, this.isXAxis ? a2.plotX : this.len - a2.plotY)) : d2 = b && (this.horiz ? b.chartX - this.pos : this.len - b.chartY + this.pos);
              if (x(d2)) {
                var q2 = { value: a2 && (this.isXAxis ? a2.x : A(a2.stackY, a2.y)), translatedValue: d2 };
                p2.polar && l(q2, { isCrosshair: true, chartX: b && b.chartX, chartY: b && b.chartY, point: a2 });
                q2 = this.getPlotLinePath(q2) || null;
              }
              if (!x(q2)) {
                this.hideCrosshair();
                return;
              }
              k = this.categories && !this.isRadial;
              g2 || (this.cross = g2 = p2.renderer.path().addClass("highcharts-crosshair highcharts-crosshair-" + (k ? "category " : "thin ") + c2.className).attr({ zIndex: A(c2.zIndex, 2) }).add(), p2.styledMode || (g2.attr({ stroke: c2.color || (k ? h.parse("#ccd6eb").setOpacity(0.25).get() : "#cccccc"), "stroke-width": A(c2.width, 1) }).css({ "pointer-events": "none" }), c2.dashStyle && g2.attr({ dashstyle: c2.dashStyle })));
              g2.show().attr({ d: q2 });
              k && !c2.width && g2.attr({ "stroke-width": this.transA });
              this.cross.e = b;
            } else
              this.hideCrosshair();
            J(this, "afterDrawCrosshair", { e: b, point: a2 });
          };
          u.prototype.hideCrosshair = function() {
            this.cross && this.cross.hide();
            J(this, "afterHideCrosshair");
          };
          u.prototype.hasVerticalPanning = function() {
            var b, a2;
            return /y/.test((null === (a2 = null === (b = this.chart.options.chart) || void 0 === b ? void 0 : b.panning) || void 0 === a2 ? void 0 : a2.type) || "");
          };
          u.prototype.validatePositiveValue = function(b) {
            return c(b) && 0 < b;
          };
          u.defaultOptions = { dateTimeLabelFormats: {
            millisecond: { main: "%H:%M:%S.%L", range: false },
            second: { main: "%H:%M:%S", range: false },
            minute: { main: "%H:%M", range: false },
            hour: { main: "%H:%M", range: false },
            day: { main: "%e. %b" },
            week: { main: "%e. %b" },
            month: { main: "%b '%y" },
            year: { main: "%Y" }
          }, endOnTick: false, labels: { enabled: true, indentation: 10, x: 0, style: { color: "#666666", cursor: "default", fontSize: "11px" } }, maxPadding: 0.01, minorTickLength: 2, minorTickPosition: "outside", minPadding: 0.01, showEmpty: true, startOfWeek: 1, startOnTick: false, tickLength: 10, tickPixelInterval: 100, tickmarkPlacement: "between", tickPosition: "outside", title: {
            align: "middle",
            style: { color: "#666666" }
          }, type: "linear", minorGridLineColor: "#f2f2f2", minorGridLineWidth: 1, minorTickColor: "#999999", lineColor: "#ccd6eb", lineWidth: 1, gridLineColor: "#e6e6e6", tickColor: "#ccd6eb" };
          u.defaultYAxisOptions = { endOnTick: true, maxPadding: 0.05, minPadding: 0.05, tickPixelInterval: 72, showLastLabel: true, labels: { x: -8 }, startOnTick: true, title: { rotation: 270, text: "Values" }, stackLabels: { animation: {}, allowOverlap: false, enabled: false, crop: true, overflow: "justify", formatter: function() {
            var b = this.axis.chart.numberFormatter;
            return b(
              this.total,
              -1
            );
          }, style: { color: "#000000", fontSize: "11px", fontWeight: "bold", textOutline: "1px contrast" } }, gridLineWidth: 1, lineWidth: 0 };
          u.defaultLeftAxisOptions = { labels: { x: -15 }, title: { rotation: 270 } };
          u.defaultRightAxisOptions = { labels: { x: 15 }, title: { rotation: 90 } };
          u.defaultBottomAxisOptions = { labels: { autoRotation: [-45], x: 0 }, margin: 15, title: { rotation: 0 } };
          u.defaultTopAxisOptions = { labels: { autoRotation: [-45], x: 0 }, margin: 15, title: { rotation: 0 } };
          u.keepProps = "extKey hcEvents names series userMax userMin".split(" ");
          return u;
        }();
        m2.Axis = f;
        return m2.Axis;
      });
      N(m, "Core/Axis/DateTimeAxis.js", [m["Core/Axis/Axis.js"], m["Core/Utilities.js"]], function(f, h) {
        var m2 = h.addEvent, z = h.getMagnitude, F = h.normalizeTickInterval, L = h.timeUnits, K = function() {
          function f2(f3) {
            this.axis = f3;
          }
          f2.prototype.normalizeTimeTickInterval = function(f3, e) {
            var h2 = e || [["millisecond", [1, 2, 5, 10, 20, 25, 50, 100, 200, 500]], ["second", [1, 2, 5, 10, 15, 30]], ["minute", [1, 2, 5, 10, 15, 30]], ["hour", [1, 2, 3, 4, 6, 8, 12]], ["day", [1, 2]], ["week", [1, 2]], ["month", [1, 2, 3, 4, 6]], ["year", null]];
            e = h2[h2.length - 1];
            var v = L[e[0]], x = e[1], D;
            for (D = 0; D < h2.length && !(e = h2[D], v = L[e[0]], x = e[1], h2[D + 1] && f3 <= (v * x[x.length - 1] + L[h2[D + 1][0]]) / 2); D++)
              ;
            v === L.year && f3 < 5 * v && (x = [1, 2, 5]);
            f3 = F(f3 / v, x, "year" === e[0] ? Math.max(z(f3 / v), 1) : 1);
            return { unitRange: v, count: f3, unitName: e[0] };
          };
          return f2;
        }();
        h = function() {
          function f2() {
          }
          f2.compose = function(f3) {
            f3.keepProps.push("dateTime");
            f3.prototype.getTimeTicks = function() {
              return this.chart.time.getTimeTicks.apply(this.chart.time, arguments);
            };
            m2(f3, "init", function(e) {
              "datetime" !== e.userOptions.type ? this.dateTime = void 0 : this.dateTime || (this.dateTime = new K(this));
            });
          };
          f2.AdditionsClass = K;
          return f2;
        }();
        h.compose(f);
        return h;
      });
      N(m, "Core/Axis/LogarithmicAxis.js", [m["Core/Axis/Axis.js"], m["Core/Utilities.js"]], function(f, h) {
        var m2 = h.addEvent, z = h.getMagnitude, F = h.normalizeTickInterval, L = h.pick, K = function() {
          function f2(f3) {
            this.axis = f3;
          }
          f2.prototype.getLogTickPositions = function(f3, e, h2, v) {
            var x = this.axis, D = x.len, n = x.options, l = [];
            v || (this.minorAutoInterval = void 0);
            if (0.5 <= f3)
              f3 = Math.round(f3), l = x.getLinearTickPositions(f3, e, h2);
            else if (0.08 <= f3) {
              n = Math.floor(e);
              var m3, w;
              for (D = 0.3 < f3 ? [1, 2, 4] : 0.15 < f3 ? [1, 2, 4, 6, 8] : [1, 2, 3, 4, 5, 6, 7, 8, 9]; n < h2 + 1 && !w; n++) {
                var r = D.length;
                for (m3 = 0; m3 < r && !w; m3++) {
                  var d = this.log2lin(this.lin2log(n) * D[m3]);
                  d > e && (!v || g <= h2) && "undefined" !== typeof g && l.push(g);
                  g > h2 && (w = true);
                  var g = d;
                }
              }
            } else
              e = this.lin2log(e), h2 = this.lin2log(h2), f3 = v ? x.getMinorTickInterval() : n.tickInterval, f3 = L("auto" === f3 ? null : f3, this.minorAutoInterval, n.tickPixelInterval / (v ? 5 : 1) * (h2 - e) / ((v ? D / x.tickPositions.length : D) || 1)), f3 = F(f3, void 0, z(f3)), l = x.getLinearTickPositions(f3, e, h2).map(this.log2lin), v || (this.minorAutoInterval = f3 / 5);
            v || (x.tickInterval = f3);
            return l;
          };
          f2.prototype.lin2log = function(f3) {
            return Math.pow(10, f3);
          };
          f2.prototype.log2lin = function(f3) {
            return Math.log(f3) / Math.LN10;
          };
          return f2;
        }();
        h = function() {
          function f2() {
          }
          f2.compose = function(f3) {
            f3.keepProps.push("logarithmic");
            var e = f3.prototype, h2 = K.prototype;
            e.log2lin = h2.log2lin;
            e.lin2log = h2.lin2log;
            m2(f3, "init", function(e2) {
              var f4 = this.logarithmic;
              "logarithmic" !== e2.userOptions.type ? this.logarithmic = void 0 : (f4 || (f4 = this.logarithmic = new K(this)), this.log2lin !== f4.log2lin && (f4.log2lin = this.log2lin.bind(this)), this.lin2log !== f4.lin2log && (f4.lin2log = this.lin2log.bind(this)));
            });
            m2(f3, "afterInit", function() {
              var e2 = this.logarithmic;
              e2 && (this.lin2val = function(f4) {
                return e2.lin2log(f4);
              }, this.val2lin = function(f4) {
                return e2.log2lin(f4);
              });
            });
          };
          return f2;
        }();
        h.compose(f);
        return h;
      });
      N(m, "Core/Axis/PlotLineOrBand.js", [m["Core/Axis/Axis.js"], m["Core/Globals.js"], m["Core/Utilities.js"]], function(f, h, m2) {
        var z = m2.arrayMax, F = m2.arrayMin, P = m2.defined, K = m2.destroyObjectProperties, C = m2.erase, y = m2.extend, e = m2.merge, I = m2.objectEach, v = m2.pick;
        m2 = function() {
          function f2(e2, f3) {
            this.axis = e2;
            f3 && (this.options = f3, this.id = f3.id);
          }
          f2.prototype.render = function() {
            h.fireEvent(this, "render");
            var f3 = this, n = f3.axis, l = n.horiz, m3 = n.logarithmic, w = f3.options, r = w.label, d = f3.label, g = w.to, c = w.from, a = w.value, q = P(c) && P(g), p = P(a), B = f3.svgElem, A = !B, G = [], M = w.color, x = v(w.zIndex, 0), Q = w.events;
            G = { "class": "highcharts-plot-" + (q ? "band " : "line ") + (w.className || "") };
            var O = {}, E = n.chart.renderer, u = q ? "bands" : "lines";
            m3 && (c = m3.log2lin(c), g = m3.log2lin(g), a = m3.log2lin(a));
            n.chart.styledMode || (p ? (G.stroke = M || "#999999", G["stroke-width"] = v(w.width, 1), w.dashStyle && (G.dashstyle = w.dashStyle)) : q && (G.fill = M || "#e6ebf5", w.borderWidth && (G.stroke = w.borderColor, G["stroke-width"] = w.borderWidth)));
            O.zIndex = x;
            u += "-" + x;
            (m3 = n.plotLinesAndBandsGroups[u]) || (n.plotLinesAndBandsGroups[u] = m3 = E.g("plot-" + u).attr(O).add());
            A && (f3.svgElem = B = E.path().attr(G).add(m3));
            if (p)
              G = n.getPlotLinePath({ value: a, lineWidth: B.strokeWidth(), acrossPanes: w.acrossPanes });
            else if (q)
              G = n.getPlotBandPath(
                c,
                g,
                w
              );
            else
              return;
            !f3.eventsAdded && Q && (I(Q, function(b, a2) {
              B.on(a2, function(b2) {
                Q[a2].apply(f3, [b2]);
              });
            }), f3.eventsAdded = true);
            (A || !B.d) && G && G.length ? B.attr({ d: G }) : B && (G ? (B.show(true), B.animate({ d: G })) : B.d && (B.hide(), d && (f3.label = d = d.destroy())));
            r && (P(r.text) || P(r.formatter)) && G && G.length && 0 < n.width && 0 < n.height && !G.isFlat ? (r = e({ align: l && q && "center", x: l ? !q && 4 : 10, verticalAlign: !l && q && "middle", y: l ? q ? 16 : 10 : q ? 6 : -4, rotation: l && !q && 90 }, r), this.renderLabel(r, G, q, x)) : d && d.hide();
            return f3;
          };
          f2.prototype.renderLabel = function(e2, f3, l, h2) {
            var n = this.label, r = this.axis.chart.renderer;
            n || (n = { align: e2.textAlign || e2.align, rotation: e2.rotation, "class": "highcharts-plot-" + (l ? "band" : "line") + "-label " + (e2.className || "") }, n.zIndex = h2, h2 = this.getLabelText(e2), this.label = n = r.text(h2, 0, 0, e2.useHTML).attr(n).add(), this.axis.chart.styledMode || n.css(e2.style));
            r = f3.xBounds || [f3[0][1], f3[1][1], l ? f3[2][1] : f3[0][1]];
            f3 = f3.yBounds || [f3[0][2], f3[1][2], l ? f3[2][2] : f3[0][2]];
            l = F(r);
            h2 = F(f3);
            n.align(e2, false, { x: l, y: h2, width: z(r) - l, height: z(f3) - h2 });
            n.show(true);
          };
          f2.prototype.getLabelText = function(e2) {
            return P(e2.formatter) ? e2.formatter.call(this) : e2.text;
          };
          f2.prototype.destroy = function() {
            C(this.axis.plotLinesAndBands, this);
            delete this.axis;
            K(this);
          };
          return f2;
        }();
        y(f.prototype, {
          getPlotBandPath: function(e2, f2, n) {
            void 0 === n && (n = this.options);
            var l = this.getPlotLinePath({ value: f2, force: true, acrossPanes: n.acrossPanes });
            n = this.getPlotLinePath({ value: e2, force: true, acrossPanes: n.acrossPanes });
            var h2 = [], w = this.horiz, r = 1;
            e2 = e2 < this.min && f2 < this.min || e2 > this.max && f2 > this.max;
            if (n && l) {
              if (e2) {
                var d = n.toString() === l.toString();
                r = 0;
              }
              for (e2 = 0; e2 < n.length; e2 += 2) {
                f2 = n[e2];
                var g = n[e2 + 1], c = l[e2], a = l[e2 + 1];
                "M" !== f2[0] && "L" !== f2[0] || "M" !== g[0] && "L" !== g[0] || "M" !== c[0] && "L" !== c[0] || "M" !== a[0] && "L" !== a[0] || (w && c[1] === f2[1] ? (c[1] += r, a[1] += r) : w || c[2] !== f2[2] || (c[2] += r, a[2] += r), h2.push(["M", f2[1], f2[2]], ["L", g[1], g[2]], ["L", a[1], a[2]], ["L", c[1], c[2]], ["Z"]));
                h2.isFlat = d;
              }
            }
            return h2;
          },
          addPlotBand: function(e2) {
            return this.addPlotBandOrLine(e2, "plotBands");
          },
          addPlotLine: function(e2) {
            return this.addPlotBandOrLine(e2, "plotLines");
          },
          addPlotBandOrLine: function(e2, f2) {
            var n = new h.PlotLineOrBand(this, e2), l = this.userOptions;
            this.visible && (n = n.render());
            if (n) {
              if (f2) {
                var v2 = l[f2] || [];
                v2.push(e2);
                l[f2] = v2;
              }
              this.plotLinesAndBands.push(n);
              this._addedPlotLB = true;
            }
            return n;
          },
          removePlotBandOrLine: function(e2) {
            for (var f2 = this.plotLinesAndBands, n = this.options, l = this.userOptions, h2 = f2.length; h2--; )
              f2[h2].id === e2 && f2[h2].destroy();
            [n.plotLines || [], l.plotLines || [], n.plotBands || [], l.plotBands || []].forEach(function(f3) {
              for (h2 = f3.length; h2--; )
                (f3[h2] || {}).id === e2 && C(f3, f3[h2]);
            });
          },
          removePlotBand: function(e2) {
            this.removePlotBandOrLine(e2);
          },
          removePlotLine: function(e2) {
            this.removePlotBandOrLine(e2);
          }
        });
        h.PlotLineOrBand = m2;
        return h.PlotLineOrBand;
      });
      N(m, "Core/Tooltip.js", [m["Core/Globals.js"], m["Core/Utilities.js"]], function(f, h) {
        var m2 = f.doc, z = h.clamp, F = h.css, L = h.defined, K = h.discardElement, C = h.extend, y = h.fireEvent, e = h.format, I = h.isNumber, v = h.isString, x = h.merge, D = h.pick, n = h.splat, l = h.syncTimeout, J = h.timeUnits;
        "";
        var w = function() {
          function r(d, g) {
            this.container = void 0;
            this.crosshairs = [];
            this.distance = 0;
            this.isHidden = true;
            this.isSticky = false;
            this.now = {};
            this.options = {};
            this.outside = false;
            this.chart = d;
            this.init(d, g);
          }
          r.prototype.applyFilter = function() {
            var d = this.chart;
            d.renderer.definition({ tagName: "filter", id: "drop-shadow-" + d.index, opacity: 0.5, children: [{ tagName: "feGaussianBlur", "in": "SourceAlpha", stdDeviation: 1 }, { tagName: "feOffset", dx: 1, dy: 1 }, { tagName: "feComponentTransfer", children: [{ tagName: "feFuncA", type: "linear", slope: 0.3 }] }, { tagName: "feMerge", children: [{ tagName: "feMergeNode" }, { tagName: "feMergeNode", "in": "SourceGraphic" }] }] });
            d.renderer.definition({
              tagName: "style",
              textContent: ".highcharts-tooltip-" + d.index + "{filter:url(#drop-shadow-" + d.index + ")}"
            });
          };
          r.prototype.bodyFormatter = function(d) {
            return d.map(function(d2) {
              var c = d2.series.tooltipOptions;
              return (c[(d2.point.formatPrefix || "point") + "Formatter"] || d2.point.tooltipFormatter).call(d2.point, c[(d2.point.formatPrefix || "point") + "Format"] || "");
            });
          };
          r.prototype.cleanSplit = function(d) {
            this.chart.series.forEach(function(g) {
              var c = g && g.tt;
              c && (!c.isActive || d ? g.tt = c.destroy() : c.isActive = false);
            });
          };
          r.prototype.defaultFormatter = function(d) {
            var g = this.points || n(this);
            var c = [d.tooltipFooterHeaderFormatter(g[0])];
            c = c.concat(d.bodyFormatter(g));
            c.push(d.tooltipFooterHeaderFormatter(g[0], true));
            return c;
          };
          r.prototype.destroy = function() {
            this.label && (this.label = this.label.destroy());
            this.split && this.tt && (this.cleanSplit(this.chart, true), this.tt = this.tt.destroy());
            this.renderer && (this.renderer = this.renderer.destroy(), K(this.container));
            h.clearTimeout(this.hideTimer);
            h.clearTimeout(this.tooltipTimeout);
          };
          r.prototype.getAnchor = function(d, g) {
            var c = this.chart, a = c.pointer, q = c.inverted, p = c.plotTop, e2 = c.plotLeft, f2 = 0, l2 = 0, r2, h2;
            d = n(d);
            this.followPointer && g ? ("undefined" === typeof g.chartX && (g = a.normalize(g)), d = [g.chartX - e2, g.chartY - p]) : d[0].tooltipPos ? d = d[0].tooltipPos : (d.forEach(function(a2) {
              r2 = a2.series.yAxis;
              h2 = a2.series.xAxis;
              f2 += a2.plotX + (!q && h2 ? h2.left - e2 : 0);
              l2 += (a2.plotLow ? (a2.plotLow + a2.plotHigh) / 2 : a2.plotY) + (!q && r2 ? r2.top - p : 0);
            }), f2 /= d.length, l2 /= d.length, d = [q ? c.plotWidth - l2 : f2, this.shared && !q && 1 < d.length && g ? g.chartY - p : q ? c.plotHeight - f2 : l2]);
            return d.map(Math.round);
          };
          r.prototype.getDateFormat = function(d, g, c, a) {
            var q = this.chart.time, p = q.dateFormat("%m-%d %H:%M:%S.%L", g), e2 = { millisecond: 15, second: 12, minute: 9, hour: 6, day: 3 }, f2 = "millisecond";
            for (l2 in J) {
              if (d === J.week && +q.dateFormat("%w", g) === c && "00:00:00.000" === p.substr(6)) {
                var l2 = "week";
                break;
              }
              if (J[l2] > d) {
                l2 = f2;
                break;
              }
              if (e2[l2] && p.substr(e2[l2]) !== "01-01 00:00:00.000".substr(e2[l2]))
                break;
              "week" !== l2 && (f2 = l2);
            }
            if (l2)
              var r2 = q.resolveDTLFormat(a[l2]).main;
            return r2;
          };
          r.prototype.getLabel = function() {
            var d, g, c = this, a = this.chart.renderer, q = this.chart.styledMode, p = this.options, e2 = "tooltip" + (L(p.className) ? " " + p.className : ""), l2 = (null === (d = p.style) || void 0 === d ? void 0 : d.pointerEvents) || (!this.followPointer && p.stickOnContact ? "auto" : "none"), r2;
            d = function() {
              c.inContact = true;
            };
            var n2 = function() {
              var a2 = c.chart.hoverSeries;
              c.inContact = false;
              if (a2 && a2.onMouseOut)
                a2.onMouseOut();
            };
            if (!this.label) {
              this.outside && (this.container = r2 = f.doc.createElement("div"), r2.className = "highcharts-tooltip-container", F(r2, { position: "absolute", top: "1px", pointerEvents: l2, zIndex: 3 }), f.doc.body.appendChild(r2), this.renderer = a = new f.Renderer(r2, 0, 0, null === (g = this.chart.options.chart) || void 0 === g ? void 0 : g.style, void 0, void 0, a.styledMode));
              this.split ? this.label = a.g(e2) : (this.label = a.label("", 0, 0, p.shape || "callout", null, null, p.useHTML, null, e2).attr({ padding: p.padding, r: p.borderRadius }), q || this.label.attr({ fill: p.backgroundColor, "stroke-width": p.borderWidth }).css(p.style).css({ pointerEvents: l2 }).shadow(p.shadow));
              q && (this.applyFilter(), this.label.addClass("highcharts-tooltip-" + this.chart.index));
              if (c.outside && !c.split) {
                var h2 = this.label, w2 = h2.xSetter, v2 = h2.ySetter;
                h2.xSetter = function(a2) {
                  w2.call(h2, c.distance);
                  r2.style.left = a2 + "px";
                };
                h2.ySetter = function(a2) {
                  v2.call(h2, c.distance);
                  r2.style.top = a2 + "px";
                };
              }
              this.label.on("mouseenter", d).on("mouseleave", n2).attr({ zIndex: 8 }).add();
            }
            return this.label;
          };
          r.prototype.getPosition = function(d, g, c) {
            var a = this.chart, q = this.distance, p = {}, e2 = a.inverted && c.h || 0, f2, l2 = this.outside, r2 = l2 ? m2.documentElement.clientWidth - 2 * q : a.chartWidth, n2 = l2 ? Math.max(
              m2.body.scrollHeight,
              m2.documentElement.scrollHeight,
              m2.body.offsetHeight,
              m2.documentElement.offsetHeight,
              m2.documentElement.clientHeight
            ) : a.chartHeight, h2 = a.pointer.getChartPosition(), w2 = a.containerScaling, E = function(b2) {
              return w2 ? b2 * w2.scaleX : b2;
            }, u = function(b2) {
              return w2 ? b2 * w2.scaleY : b2;
            }, b = function(b2) {
              var k2 = "x" === b2;
              return [b2, k2 ? r2 : n2, k2 ? d : g].concat(l2 ? [k2 ? E(d) : u(g), k2 ? h2.left - q + E(c.plotX + a.plotLeft) : h2.top - q + u(c.plotY + a.plotTop), 0, k2 ? r2 : n2] : [k2 ? d : g, k2 ? c.plotX + a.plotLeft : c.plotY + a.plotTop, k2 ? a.plotLeft : a.plotTop, k2 ? a.plotLeft + a.plotWidth : a.plotTop + a.plotHeight]);
            }, k = b("y"), t = b("x"), H = !this.followPointer && D(c.ttBelow, !a.inverted === !!c.negative), v2 = function(b2, a2, c2, k2, d2, g2, t2) {
              var f3 = "y" === b2 ? u(q) : E(q), l3 = (c2 - k2) / 2, r3 = k2 < d2 - q, B = d2 + q + k2 < a2, n3 = d2 - f3 - c2 + l3;
              d2 = d2 + f3 - l3;
              if (H && B)
                p[b2] = d2;
              else if (!H && r3)
                p[b2] = n3;
              else if (r3)
                p[b2] = Math.min(t2 - k2, 0 > n3 - e2 ? n3 : n3 - e2);
              else if (B)
                p[b2] = Math.max(g2, d2 + e2 + c2 > a2 ? d2 : d2 + e2);
              else
                return false;
            }, U = function(b2, a2, c2, k2, d2) {
              var g2;
              d2 < q || d2 > a2 - q ? g2 = false : p[b2] = d2 < c2 / 2 ? 1 : d2 > a2 - k2 / 2 ? a2 - k2 - 2 : d2 - c2 / 2;
              return g2;
            }, x2 = function(b2) {
              var a2 = k;
              k = t;
              t = a2;
              f2 = b2;
            }, I2 = function() {
              false !== v2.apply(0, k) ? false !== U.apply(0, t) || f2 || (x2(true), I2()) : f2 ? p.x = p.y = 0 : (x2(true), I2());
            };
            (a.inverted || 1 < this.len) && x2();
            I2();
            return p;
          };
          r.prototype.getXDateFormat = function(d, g, c) {
            g = g.dateTimeLabelFormats;
            var a = c && c.closestPointRange;
            return (a ? this.getDateFormat(a, d.x, c.options.startOfWeek, g) : g.day) || g.year;
          };
          r.prototype.hide = function(d) {
            var g = this;
            h.clearTimeout(this.hideTimer);
            d = D(d, this.options.hideDelay, 500);
            this.isHidden || (this.hideTimer = l(function() {
              g.getLabel().fadeOut(d ? void 0 : d);
              g.isHidden = true;
            }, d));
          };
          r.prototype.init = function(d, g) {
            this.chart = d;
            this.options = g;
            this.crosshairs = [];
            this.now = { x: 0, y: 0 };
            this.isHidden = true;
            this.split = g.split && !d.inverted && !d.polar;
            this.shared = g.shared || this.split;
            this.outside = D(g.outside, !(!d.scrollablePixelsX && !d.scrollablePixelsY));
          };
          r.prototype.isStickyOnContact = function() {
            return !(this.followPointer || !this.options.stickOnContact || !this.inContact);
          };
          r.prototype.move = function(d, g, c, a) {
            var q = this, p = q.now, e2 = false !== q.options.animation && !q.isHidden && (1 < Math.abs(d - p.x) || 1 < Math.abs(g - p.y)), f2 = q.followPointer || 1 < q.len;
            C(p, { x: e2 ? (2 * p.x + d) / 3 : d, y: e2 ? (p.y + g) / 2 : g, anchorX: f2 ? void 0 : e2 ? (2 * p.anchorX + c) / 3 : c, anchorY: f2 ? void 0 : e2 ? (p.anchorY + a) / 2 : a });
            q.getLabel().attr(p);
            q.drawTracker();
            e2 && (h.clearTimeout(this.tooltipTimeout), this.tooltipTimeout = setTimeout(function() {
              q && q.move(d, g, c, a);
            }, 32));
          };
          r.prototype.refresh = function(d, g) {
            var c = this.chart, a = this.options, q = d, p = {}, e2 = [], f2 = a.formatter || this.defaultFormatter;
            p = this.shared;
            var l2 = c.styledMode;
            if (a.enabled) {
              h.clearTimeout(this.hideTimer);
              this.followPointer = n(q)[0].series.tooltipOptions.followPointer;
              var r2 = this.getAnchor(q, g);
              g = r2[0];
              var w2 = r2[1];
              !p || q.series && q.series.noSharedTooltip ? p = q.getLabelConfig() : (c.pointer.applyInactiveState(q), q.forEach(function(a2) {
                a2.setState("hover");
                e2.push(a2.getLabelConfig());
              }), p = { x: q[0].category, y: q[0].y }, p.points = e2, q = q[0]);
              this.len = e2.length;
              c = f2.call(p, this);
              f2 = q.series;
              this.distance = D(f2.tooltipOptions.distance, 16);
              false === c ? this.hide() : (this.split ? this.renderSplit(c, n(d)) : (d = this.getLabel(), a.style.width && !l2 || d.css({ width: this.chart.spacingBox.width + "px" }), d.attr({ text: c && c.join ? c.join("") : c }), d.removeClass(/highcharts-color-[\d]+/g).addClass("highcharts-color-" + D(q.colorIndex, f2.colorIndex)), l2 || d.attr({ stroke: a.borderColor || q.color || f2.color || "#666666" }), this.updatePosition({ plotX: g, plotY: w2, negative: q.negative, ttBelow: q.ttBelow, h: r2[2] || 0 })), this.isHidden && this.label && this.label.attr({ opacity: 1 }).show(), this.isHidden = false);
              y(this, "refresh");
            }
          };
          r.prototype.renderSplit = function(d, g) {
            function c(b2, a2, c2, d2, g2) {
              void 0 === g2 && (g2 = true);
              c2 ? (a2 = I2 ? 0 : F2, b2 = z(b2 - d2 / 2, m3.left, m3.right - d2)) : (a2 -= y2, b2 = g2 ? b2 - d2 - k : b2 + k, b2 = z(b2, g2 ? b2 : m3.left, m3.right));
              return { x: b2, y: a2 };
            }
            var a = this, q = a.chart, p = a.chart, e2 = p.plotHeight, l2 = p.plotLeft, r2 = p.plotTop, n2 = p.pointer, h2 = p.renderer, w2 = p.scrollablePixelsY, O = void 0 === w2 ? 0 : w2;
            w2 = p.scrollingContainer;
            w2 = void 0 === w2 ? { scrollLeft: 0, scrollTop: 0 } : w2;
            var E = w2.scrollLeft, u = w2.scrollTop, b = p.styledMode, k = a.distance, t = a.options, H = a.options.positioner, m3 = { left: E, right: E + p.chartWidth, top: u, bottom: u + p.chartHeight }, x2 = a.getLabel(), I2 = !(!q.xAxis[0] || !q.xAxis[0].opposite), y2 = r2 + u, J2 = 0, F2 = e2 - O;
            v(d) && (d = [false, d]);
            d = d.slice(0, g.length + 1).reduce(function(d2, p2, q2) {
              if (false !== p2 && "" !== p2) {
                q2 = g[q2 - 1] || {
                  isHeader: true,
                  plotX: g[0].plotX,
                  plotY: e2,
                  series: {}
                };
                var f2 = q2.isHeader, n3 = f2 ? a : q2.series, B = n3.tt, A = q2.isHeader;
                var w3 = q2.series;
                var E2 = "highcharts-color-" + D(q2.colorIndex, w3.colorIndex, "none");
                B || (B = { padding: t.padding, r: t.borderRadius }, b || (B.fill = t.backgroundColor, B["stroke-width"] = t.borderWidth), B = h2.label("", 0, 0, t[A ? "headerShape" : "shape"] || "callout", void 0, void 0, t.useHTML).addClass((A ? "highcharts-tooltip-header " : "") + "highcharts-tooltip-box " + E2).attr(B).add(x2));
                B.isActive = true;
                B.attr({ text: p2 });
                b || B.css(t.style).shadow(t.shadow).attr({ stroke: t.borderColor || q2.color || w3.color || "#333333" });
                p2 = n3.tt = B;
                A = p2.getBBox();
                n3 = A.width + p2.strokeWidth();
                f2 && (J2 = A.height, F2 += J2, I2 && (y2 -= J2));
                w3 = q2.plotX;
                w3 = void 0 === w3 ? 0 : w3;
                E2 = q2.plotY;
                E2 = void 0 === E2 ? 0 : E2;
                var v2 = q2.series;
                if (q2.isHeader) {
                  w3 = l2 + w3;
                  var G = r2 + e2 / 2;
                } else
                  B = v2.xAxis, v2 = v2.yAxis, w3 = B.pos + z(w3, -k, B.len + k), v2.pos + E2 >= u + r2 && v2.pos + E2 <= u + r2 + e2 - O && (G = v2.pos + E2);
                w3 = z(w3, m3.left - k, m3.right + k);
                "number" === typeof G ? (A = A.height + 1, E2 = H ? H.call(a, n3, A, q2) : c(w3, G, f2, n3), d2.push({
                  align: H ? 0 : void 0,
                  anchorX: w3,
                  anchorY: G,
                  boxWidth: n3,
                  point: q2,
                  rank: D(E2.rank, f2 ? 1 : 0),
                  size: A,
                  target: E2.y,
                  tt: p2,
                  x: E2.x
                })) : p2.isActive = false;
              }
              return d2;
            }, []);
            !H && d.some(function(b2) {
              return b2.x < m3.left;
            }) && (d = d.map(function(b2) {
              var a2 = c(b2.anchorX, b2.anchorY, b2.point.isHeader, b2.boxWidth, false);
              return C(b2, { target: a2.y, x: a2.x });
            }));
            a.cleanSplit();
            f.distribute(d, F2);
            d.forEach(function(b2) {
              var a2 = b2.pos;
              b2.tt.attr({ visibility: "undefined" === typeof a2 ? "hidden" : "inherit", x: b2.x, y: a2 + y2, anchorX: b2.anchorX, anchorY: b2.anchorY });
            });
            d = a.container;
            q = a.renderer;
            a.outside && d && q && (p = x2.getBBox(), q.setSize(p.width + p.x, p.height + p.y, false), n2 = n2.getChartPosition(), d.style.left = n2.left + "px", d.style.top = n2.top + "px");
          };
          r.prototype.drawTracker = function() {
            if (this.followPointer || !this.options.stickOnContact)
              this.tracker && this.tracker.destroy();
            else {
              var d = this.chart, g = this.label, c = d.hoverPoint;
              if (g && c) {
                var a = { x: 0, y: 0, width: 0, height: 0 };
                c = this.getAnchor(c);
                var q = g.getBBox();
                c[0] += d.plotLeft - g.translateX;
                c[1] += d.plotTop - g.translateY;
                a.x = Math.min(0, c[0]);
                a.y = Math.min(0, c[1]);
                a.width = 0 > c[0] ? Math.max(Math.abs(c[0]), q.width - c[0]) : Math.max(Math.abs(c[0]), q.width);
                a.height = 0 > c[1] ? Math.max(
                  Math.abs(c[1]),
                  q.height - Math.abs(c[1])
                ) : Math.max(Math.abs(c[1]), q.height);
                this.tracker ? this.tracker.attr(a) : (this.tracker = g.renderer.rect(a).addClass("highcharts-tracker").add(g), d.styledMode || this.tracker.attr({ fill: "rgba(0,0,0,0)" }));
              }
            }
          };
          r.prototype.styledModeFormat = function(d) {
            return d.replace('style="font-size: 10px"', 'class="highcharts-header"').replace(/style="color:{(point|series)\.color}"/g, 'class="highcharts-color-{$1.colorIndex}"');
          };
          r.prototype.tooltipFooterHeaderFormatter = function(d, g) {
            var c = g ? "footer" : "header", a = d.series, q = a.tooltipOptions, p = q.xDateFormat, f2 = a.xAxis, l2 = f2 && "datetime" === f2.options.type && I(d.key), r2 = q[c + "Format"];
            g = { isFooter: g, labelConfig: d };
            y(this, "headerFormatter", g, function(c2) {
              l2 && !p && (p = this.getXDateFormat(d, q, f2));
              l2 && p && (d.point && d.point.tooltipDateKeys || ["key"]).forEach(function(a2) {
                r2 = r2.replace("{point." + a2 + "}", "{point." + a2 + ":" + p + "}");
              });
              a.chart.styledMode && (r2 = this.styledModeFormat(r2));
              c2.text = e(r2, { point: d, series: a }, this.chart);
            });
            return g.text;
          };
          r.prototype.update = function(d) {
            this.destroy();
            x(true, this.chart.options.tooltip.userOptions, d);
            this.init(this.chart, x(true, this.options, d));
          };
          r.prototype.updatePosition = function(d) {
            var g = this.chart, c = g.pointer, a = this.getLabel(), q = d.plotX + g.plotLeft, p = d.plotY + g.plotTop;
            c = c.getChartPosition();
            d = (this.options.positioner || this.getPosition).call(this, a.width, a.height, d);
            if (this.outside) {
              var e2 = (this.options.borderWidth || 0) + 2 * this.distance;
              this.renderer.setSize(a.width + e2, a.height + e2, false);
              if (g = g.containerScaling)
                F(this.container, { transform: "scale(" + g.scaleX + ", " + g.scaleY + ")" }), q *= g.scaleX, p *= g.scaleY;
              q += c.left - d.x;
              p += c.top - d.y;
            }
            this.move(Math.round(d.x), Math.round(d.y || 0), q, p);
          };
          return r;
        }();
        f.Tooltip = w;
        return f.Tooltip;
      });
      N(m, "Core/Pointer.js", [m["Core/Color/Color.js"], m["Core/Globals.js"], m["Core/Tooltip.js"], m["Core/Utilities.js"]], function(f, h, m2, z) {
        var F = f.parse, P = h.charts, K = h.noop, C = z.addEvent, y = z.attr, e = z.css, I = z.defined, v = z.extend, x = z.find, D = z.fireEvent, n = z.isNumber, l = z.isObject, J = z.objectEach, w = z.offset, r = z.pick, d = z.splat;
        "";
        f = function() {
          function g(c, a) {
            this.lastValidTouch = {};
            this.pinchDown = [];
            this.runChartClick = false;
            this.chart = c;
            this.hasDragged = false;
            this.options = a;
            this.unbindContainerMouseLeave = function() {
            };
            this.unbindContainerMouseEnter = function() {
            };
            this.init(c, a);
          }
          g.prototype.applyInactiveState = function(c) {
            var a = [], d2;
            (c || []).forEach(function(c2) {
              d2 = c2.series;
              a.push(d2);
              d2.linkedParent && a.push(d2.linkedParent);
              d2.linkedSeries && (a = a.concat(d2.linkedSeries));
              d2.navigatorSeries && a.push(d2.navigatorSeries);
            });
            this.chart.series.forEach(function(c2) {
              -1 === a.indexOf(c2) ? c2.setState("inactive", true) : c2.options.inactiveOtherPoints && c2.setAllPointsToState("inactive");
            });
          };
          g.prototype.destroy = function() {
            var c = this;
            "undefined" !== typeof c.unDocMouseMove && c.unDocMouseMove();
            this.unbindContainerMouseLeave();
            h.chartCount || (h.unbindDocumentMouseUp && (h.unbindDocumentMouseUp = h.unbindDocumentMouseUp()), h.unbindDocumentTouchEnd && (h.unbindDocumentTouchEnd = h.unbindDocumentTouchEnd()));
            clearInterval(c.tooltipTimeout);
            J(c, function(a, d2) {
              c[d2] = void 0;
            });
          };
          g.prototype.drag = function(c) {
            var a = this.chart, d2 = a.options.chart, g2 = c.chartX, e2 = c.chartY, f2 = this.zoomHor, r2 = this.zoomVert, n2 = a.plotLeft, h2 = a.plotTop, w2 = a.plotWidth, v2 = a.plotHeight, E = this.selectionMarker, u = this.mouseDownX || 0, b = this.mouseDownY || 0, k = l(d2.panning) ? d2.panning && d2.panning.enabled : d2.panning, t = d2.panKey && c[d2.panKey + "Key"];
            if (!E || !E.touch) {
              if (g2 < n2 ? g2 = n2 : g2 > n2 + w2 && (g2 = n2 + w2), e2 < h2 ? e2 = h2 : e2 > h2 + v2 && (e2 = h2 + v2), this.hasDragged = Math.sqrt(Math.pow(u - g2, 2) + Math.pow(b - e2, 2)), 10 < this.hasDragged) {
                var H = a.isInsidePlot(u - n2, b - h2);
                a.hasCartesianSeries && (this.zoomX || this.zoomY) && H && !t && !E && (this.selectionMarker = E = a.renderer.rect(n2, h2, f2 ? 1 : w2, r2 ? 1 : v2, 0).attr({ "class": "highcharts-selection-marker", zIndex: 7 }).add(), a.styledMode || E.attr({ fill: d2.selectionMarkerFill || F("#335cad").setOpacity(0.25).get() }));
                E && f2 && (g2 -= u, E.attr({ width: Math.abs(g2), x: (0 < g2 ? 0 : g2) + u }));
                E && r2 && (g2 = e2 - b, E.attr({ height: Math.abs(g2), y: (0 < g2 ? 0 : g2) + b }));
                H && !E && k && a.pan(c, d2.panning);
              }
            }
          };
          g.prototype.dragStart = function(c) {
            var a = this.chart;
            a.mouseIsDown = c.type;
            a.cancelClick = false;
            a.mouseDownX = this.mouseDownX = c.chartX;
            a.mouseDownY = this.mouseDownY = c.chartY;
          };
          g.prototype.drop = function(c) {
            var a = this, d2 = this.chart, g2 = this.hasPinched;
            if (this.selectionMarker) {
              var f2 = { originalEvent: c, xAxis: [], yAxis: [] }, l2 = this.selectionMarker, r2 = l2.attr ? l2.attr("x") : l2.x, h2 = l2.attr ? l2.attr("y") : l2.y, w2 = l2.attr ? l2.attr("width") : l2.width, m3 = l2.attr ? l2.attr("height") : l2.height, O;
              if (this.hasDragged || g2)
                d2.axes.forEach(function(d3) {
                  if (d3.zoomEnabled && I(d3.min) && (g2 || a[{ xAxis: "zoomX", yAxis: "zoomY" }[d3.coll]]) && n(r2) && n(h2)) {
                    var p = d3.horiz, b = "touchend" === c.type ? d3.minPixelPadding : 0, k = d3.toValue((p ? r2 : h2) + b);
                    p = d3.toValue((p ? r2 + w2 : h2 + m3) - b);
                    f2[d3.coll].push({ axis: d3, min: Math.min(k, p), max: Math.max(k, p) });
                    O = true;
                  }
                }), O && D(d2, "selection", f2, function(a2) {
                  d2.zoom(v(a2, g2 ? { animation: false } : null));
                });
              n(d2.index) && (this.selectionMarker = this.selectionMarker.destroy());
              g2 && this.scaleGroups();
            }
            d2 && n(d2.index) && (e(d2.container, { cursor: d2._cursor }), d2.cancelClick = 10 < this.hasDragged, d2.mouseIsDown = this.hasDragged = this.hasPinched = false, this.pinchDown = []);
          };
          g.prototype.findNearestKDPoint = function(c, a, d2) {
            var g2 = this.chart, q = g2.hoverPoint;
            g2 = g2.tooltip;
            if (q && g2 && g2.isStickyOnContact())
              return q;
            var e2;
            c.forEach(function(c2) {
              var g3 = !(c2.noSharedTooltip && a) && 0 > c2.options.findNearestPointBy.indexOf("y");
              c2 = c2.searchPoint(d2, g3);
              if ((g3 = l(c2, true)) && !(g3 = !l(e2, true))) {
                g3 = e2.distX - c2.distX;
                var p = e2.dist - c2.dist, q2 = (c2.series.group && c2.series.group.zIndex) - (e2.series.group && e2.series.group.zIndex);
                g3 = 0 < (0 !== g3 && a ? g3 : 0 !== p ? p : 0 !== q2 ? q2 : e2.series.index > c2.series.index ? -1 : 1);
              }
              g3 && (e2 = c2);
            });
            return e2;
          };
          g.prototype.getChartCoordinatesFromPoint = function(c, a) {
            var d2 = c.series, g2 = d2.xAxis;
            d2 = d2.yAxis;
            var e2 = r(
              c.clientX,
              c.plotX
            ), f2 = c.shapeArgs;
            if (g2 && d2)
              return a ? { chartX: g2.len + g2.pos - e2, chartY: d2.len + d2.pos - c.plotY } : { chartX: e2 + g2.pos, chartY: c.plotY + d2.pos };
            if (f2 && f2.x && f2.y)
              return { chartX: f2.x, chartY: f2.y };
          };
          g.prototype.getChartPosition = function() {
            return this.chartPosition || (this.chartPosition = w(this.chart.container));
          };
          g.prototype.getCoordinates = function(c) {
            var a = { xAxis: [], yAxis: [] };
            this.chart.axes.forEach(function(d2) {
              a[d2.isXAxis ? "xAxis" : "yAxis"].push({ axis: d2, value: d2.toValue(c[d2.horiz ? "chartX" : "chartY"]) });
            });
            return a;
          };
          g.prototype.getHoverData = function(c, a, d2, g2, e2, f2) {
            var p, q = [];
            g2 = !(!g2 || !c);
            var n2 = a && !a.stickyTracking, h2 = { chartX: f2 ? f2.chartX : void 0, chartY: f2 ? f2.chartY : void 0, shared: e2 };
            D(this, "beforeGetHoverData", h2);
            n2 = n2 ? [a] : d2.filter(function(a2) {
              return h2.filter ? h2.filter(a2) : a2.visible && !(!e2 && a2.directTouch) && r(a2.options.enableMouseTracking, true) && a2.stickyTracking;
            });
            a = (p = g2 || !f2 ? c : this.findNearestKDPoint(n2, e2, f2)) && p.series;
            p && (e2 && !a.noSharedTooltip ? (n2 = d2.filter(function(a2) {
              return h2.filter ? h2.filter(a2) : a2.visible && !(!e2 && a2.directTouch) && r(
                a2.options.enableMouseTracking,
                true
              ) && !a2.noSharedTooltip;
            }), n2.forEach(function(a2) {
              var c2 = x(a2.points, function(a3) {
                return a3.x === p.x && !a3.isNull;
              });
              l(c2) && (a2.chart.isBoosting && (c2 = a2.getPoint(c2)), q.push(c2));
            })) : q.push(p));
            h2 = { hoverPoint: p };
            D(this, "afterGetHoverData", h2);
            return { hoverPoint: h2.hoverPoint, hoverSeries: a, hoverPoints: q };
          };
          g.prototype.getPointFromEvent = function(c) {
            c = c.target;
            for (var a; c && !a; )
              a = c.point, c = c.parentNode;
            return a;
          };
          g.prototype.onTrackerMouseOut = function(c) {
            c = c.relatedTarget || c.toElement;
            var a = this.chart.hoverSeries;
            this.isDirectTouch = false;
            if (!(!a || !c || a.stickyTracking || this.inClass(c, "highcharts-tooltip") || this.inClass(c, "highcharts-series-" + a.index) && this.inClass(c, "highcharts-tracker")))
              a.onMouseOut();
          };
          g.prototype.inClass = function(c, a) {
            for (var d2; c; ) {
              if (d2 = y(c, "class")) {
                if (-1 !== d2.indexOf(a))
                  return true;
                if (-1 !== d2.indexOf("highcharts-container"))
                  return false;
              }
              c = c.parentNode;
            }
          };
          g.prototype.init = function(c, a) {
            this.options = a;
            this.chart = c;
            this.runChartClick = a.chart.events && !!a.chart.events.click;
            this.pinchDown = [];
            this.lastValidTouch = {};
            m2 && (c.tooltip = new m2(c, a.tooltip), this.followTouchMove = r(a.tooltip.followTouchMove, true));
            this.setDOMEvents();
          };
          g.prototype.normalize = function(c, a) {
            var d2 = c.touches, g2 = d2 ? d2.length ? d2.item(0) : r(d2.changedTouches, c.changedTouches)[0] : c;
            a || (a = this.getChartPosition());
            d2 = g2.pageX - a.left;
            a = g2.pageY - a.top;
            if (g2 = this.chart.containerScaling)
              d2 /= g2.scaleX, a /= g2.scaleY;
            return v(c, { chartX: Math.round(d2), chartY: Math.round(a) });
          };
          g.prototype.onContainerClick = function(c) {
            var a = this.chart, d2 = a.hoverPoint;
            c = this.normalize(c);
            var g2 = a.plotLeft, e2 = a.plotTop;
            a.cancelClick || (d2 && this.inClass(c.target, "highcharts-tracker") ? (D(d2.series, "click", v(c, { point: d2 })), a.hoverPoint && d2.firePointEvent("click", c)) : (v(c, this.getCoordinates(c)), a.isInsidePlot(c.chartX - g2, c.chartY - e2) && D(a, "click", c)));
          };
          g.prototype.onContainerMouseDown = function(c) {
            var a = 1 === ((c.buttons || c.button) & 1);
            c = this.normalize(c);
            if (h.isFirefox && 0 !== c.button)
              this.onContainerMouseMove(c);
            if ("undefined" === typeof c.button || a)
              this.zoomOption(c), a && c.preventDefault && c.preventDefault(), this.dragStart(c);
          };
          g.prototype.onContainerMouseLeave = function(c) {
            var a = P[r(h.hoverChartIndex, -1)], d2 = this.chart.tooltip;
            c = this.normalize(c);
            a && (c.relatedTarget || c.toElement) && (a.pointer.reset(), a.pointer.chartPosition = void 0);
            d2 && !d2.isHidden && this.reset();
          };
          g.prototype.onContainerMouseEnter = function(c) {
            delete this.chartPosition;
          };
          g.prototype.onContainerMouseMove = function(c) {
            var a = this.chart;
            c = this.normalize(c);
            this.setHoverChartIndex();
            c.preventDefault || (c.returnValue = false);
            "mousedown" === a.mouseIsDown && this.drag(c);
            a.openMenu || !this.inClass(c.target, "highcharts-tracker") && !a.isInsidePlot(c.chartX - a.plotLeft, c.chartY - a.plotTop) || this.runPointActions(c);
          };
          g.prototype.onDocumentTouchEnd = function(c) {
            P[h.hoverChartIndex] && P[h.hoverChartIndex].pointer.drop(c);
          };
          g.prototype.onContainerTouchMove = function(c) {
            this.touch(c);
          };
          g.prototype.onContainerTouchStart = function(c) {
            this.zoomOption(c);
            this.touch(c, true);
          };
          g.prototype.onDocumentMouseMove = function(c) {
            var a = this.chart, d2 = this.chartPosition;
            c = this.normalize(c, d2);
            var g2 = a.tooltip;
            !d2 || g2 && g2.isStickyOnContact() || a.isInsidePlot(c.chartX - a.plotLeft, c.chartY - a.plotTop) || this.inClass(c.target, "highcharts-tracker") || this.reset();
          };
          g.prototype.onDocumentMouseUp = function(c) {
            var a = P[r(h.hoverChartIndex, -1)];
            a && a.pointer.drop(c);
          };
          g.prototype.pinch = function(c) {
            var a = this, d2 = a.chart, g2 = a.pinchDown, e2 = c.touches || [], f2 = e2.length, l2 = a.lastValidTouch, n2 = a.hasZoom, h2 = a.selectionMarker, w2 = {}, m3 = 1 === f2 && (a.inClass(c.target, "highcharts-tracker") && d2.runTrackerClick || a.runChartClick), E = {};
            1 < f2 && (a.initiated = true);
            n2 && a.initiated && !m3 && false !== c.cancelable && c.preventDefault();
            [].map.call(e2, function(c2) {
              return a.normalize(c2);
            });
            "touchstart" === c.type ? ([].forEach.call(e2, function(a2, b) {
              g2[b] = { chartX: a2.chartX, chartY: a2.chartY };
            }), l2.x = [g2[0].chartX, g2[1] && g2[1].chartX], l2.y = [g2[0].chartY, g2[1] && g2[1].chartY], d2.axes.forEach(function(a2) {
              if (a2.zoomEnabled) {
                var b = d2.bounds[a2.horiz ? "h" : "v"], c2 = a2.minPixelPadding, g3 = a2.toPixels(Math.min(r(a2.options.min, a2.dataMin), a2.dataMin)), p = a2.toPixels(Math.max(r(a2.options.max, a2.dataMax), a2.dataMax)), q = Math.max(
                  g3,
                  p
                );
                b.min = Math.min(a2.pos, Math.min(g3, p) - c2);
                b.max = Math.max(a2.pos + a2.len, q + c2);
              }
            }), a.res = true) : a.followTouchMove && 1 === f2 ? this.runPointActions(a.normalize(c)) : g2.length && (h2 || (a.selectionMarker = h2 = v({ destroy: K, touch: true }, d2.plotBox)), a.pinchTranslate(g2, e2, w2, h2, E, l2), a.hasPinched = n2, a.scaleGroups(w2, E), a.res && (a.res = false, this.reset(false, 0)));
          };
          g.prototype.pinchTranslate = function(c, a, d2, g2, e2, f2) {
            this.zoomHor && this.pinchTranslateDirection(true, c, a, d2, g2, e2, f2);
            this.zoomVert && this.pinchTranslateDirection(false, c, a, d2, g2, e2, f2);
          };
          g.prototype.pinchTranslateDirection = function(c, a, d2, g2, e2, f2, l2, r2) {
            var p = this.chart, q = c ? "x" : "y", n2 = c ? "X" : "Y", h2 = "chart" + n2, u = c ? "width" : "height", b = p["plot" + (c ? "Left" : "Top")], k, t, B = r2 || 1, w2 = p.inverted, A = p.bounds[c ? "h" : "v"], v2 = 1 === a.length, G = a[0][h2], m3 = d2[0][h2], D2 = !v2 && a[1][h2], M = !v2 && d2[1][h2];
            d2 = function() {
              "number" === typeof M && 20 < Math.abs(G - D2) && (B = r2 || Math.abs(m3 - M) / Math.abs(G - D2));
              t = (b - m3) / B + G;
              k = p["plot" + (c ? "Width" : "Height")] / B;
            };
            d2();
            a = t;
            if (a < A.min) {
              a = A.min;
              var x2 = true;
            } else
              a + k > A.max && (a = A.max - k, x2 = true);
            x2 ? (m3 -= 0.8 * (m3 - l2[q][0]), "number" === typeof M && (M -= 0.8 * (M - l2[q][1])), d2()) : l2[q] = [m3, M];
            w2 || (f2[q] = t - b, f2[u] = k);
            f2 = w2 ? 1 / B : B;
            e2[u] = k;
            e2[q] = a;
            g2[w2 ? c ? "scaleY" : "scaleX" : "scale" + n2] = B;
            g2["translate" + n2] = f2 * b + (m3 - f2 * G);
          };
          g.prototype.reset = function(c, a) {
            var g2 = this.chart, p = g2.hoverSeries, e2 = g2.hoverPoint, f2 = g2.hoverPoints, l2 = g2.tooltip, r2 = l2 && l2.shared ? f2 : e2;
            c && r2 && d(r2).forEach(function(a2) {
              a2.series.isCartesian && "undefined" === typeof a2.plotX && (c = false);
            });
            if (c)
              l2 && r2 && d(r2).length && (l2.refresh(r2), l2.shared && f2 ? f2.forEach(function(a2) {
                a2.setState(a2.state, true);
                a2.series.isCartesian && (a2.series.xAxis.crosshair && a2.series.xAxis.drawCrosshair(
                  null,
                  a2
                ), a2.series.yAxis.crosshair && a2.series.yAxis.drawCrosshair(null, a2));
              }) : e2 && (e2.setState(e2.state, true), g2.axes.forEach(function(a2) {
                a2.crosshair && e2.series[a2.coll] === a2 && a2.drawCrosshair(null, e2);
              })));
            else {
              if (e2)
                e2.onMouseOut();
              f2 && f2.forEach(function(a2) {
                a2.setState();
              });
              if (p)
                p.onMouseOut();
              l2 && l2.hide(a);
              this.unDocMouseMove && (this.unDocMouseMove = this.unDocMouseMove());
              g2.axes.forEach(function(a2) {
                a2.hideCrosshair();
              });
              this.hoverX = g2.hoverPoints = g2.hoverPoint = null;
            }
          };
          g.prototype.runPointActions = function(c, a) {
            var d2 = this.chart, g2 = d2.tooltip && d2.tooltip.options.enabled ? d2.tooltip : void 0, e2 = g2 ? g2.shared : false, f2 = a || d2.hoverPoint, l2 = f2 && f2.series || d2.hoverSeries;
            l2 = this.getHoverData(f2, l2, d2.series, (!c || "touchmove" !== c.type) && (!!a || l2 && l2.directTouch && this.isDirectTouch), e2, c);
            f2 = l2.hoverPoint;
            var n2 = l2.hoverPoints;
            a = (l2 = l2.hoverSeries) && l2.tooltipOptions.followPointer;
            e2 = e2 && l2 && !l2.noSharedTooltip;
            if (f2 && (f2 !== d2.hoverPoint || g2 && g2.isHidden)) {
              (d2.hoverPoints || []).forEach(function(a2) {
                -1 === n2.indexOf(a2) && a2.setState();
              });
              if (d2.hoverSeries !== l2)
                l2.onMouseOver();
              this.applyInactiveState(n2);
              (n2 || []).forEach(function(a2) {
                a2.setState("hover");
              });
              d2.hoverPoint && d2.hoverPoint.firePointEvent("mouseOut");
              if (!f2.series)
                return;
              d2.hoverPoints = n2;
              d2.hoverPoint = f2;
              f2.firePointEvent("mouseOver");
              g2 && g2.refresh(e2 ? n2 : f2, c);
            } else
              a && g2 && !g2.isHidden && (f2 = g2.getAnchor([{}], c), g2.updatePosition({ plotX: f2[0], plotY: f2[1] }));
            this.unDocMouseMove || (this.unDocMouseMove = C(d2.container.ownerDocument, "mousemove", function(a2) {
              var c2 = P[h.hoverChartIndex];
              if (c2)
                c2.pointer.onDocumentMouseMove(a2);
            }));
            d2.axes.forEach(function(a2) {
              var g3 = r((a2.crosshair || {}).snap, true), p;
              g3 && ((p = d2.hoverPoint) && p.series[a2.coll] === a2 || (p = x(n2, function(c2) {
                return c2.series[a2.coll] === a2;
              })));
              p || !g3 ? a2.drawCrosshair(c, p) : a2.hideCrosshair();
            });
          };
          g.prototype.scaleGroups = function(c, a) {
            var d2 = this.chart, g2;
            d2.series.forEach(function(p) {
              g2 = c || p.getPlotBox();
              p.xAxis && p.xAxis.zoomEnabled && p.group && (p.group.attr(g2), p.markerGroup && (p.markerGroup.attr(g2), p.markerGroup.clip(a ? d2.clipRect : null)), p.dataLabelsGroup && p.dataLabelsGroup.attr(g2));
            });
            d2.clipRect.attr(a || d2.clipBox);
          };
          g.prototype.setDOMEvents = function() {
            var c = this.chart.container, a = c.ownerDocument;
            c.onmousedown = this.onContainerMouseDown.bind(this);
            c.onmousemove = this.onContainerMouseMove.bind(this);
            c.onclick = this.onContainerClick.bind(this);
            this.unbindContainerMouseEnter = C(c, "mouseenter", this.onContainerMouseEnter.bind(this));
            this.unbindContainerMouseLeave = C(c, "mouseleave", this.onContainerMouseLeave.bind(this));
            h.unbindDocumentMouseUp || (h.unbindDocumentMouseUp = C(a, "mouseup", this.onDocumentMouseUp.bind(this)));
            h.hasTouch && (C(
              c,
              "touchstart",
              this.onContainerTouchStart.bind(this)
            ), C(c, "touchmove", this.onContainerTouchMove.bind(this)), h.unbindDocumentTouchEnd || (h.unbindDocumentTouchEnd = C(a, "touchend", this.onDocumentTouchEnd.bind(this))));
          };
          g.prototype.setHoverChartIndex = function() {
            var c = this.chart, a = h.charts[r(h.hoverChartIndex, -1)];
            if (a && a !== c)
              a.pointer.onContainerMouseLeave({ relatedTarget: true });
            a && a.mouseIsDown || (h.hoverChartIndex = c.index);
          };
          g.prototype.touch = function(c, a) {
            var d2 = this.chart, g2;
            this.setHoverChartIndex();
            if (1 === c.touches.length)
              if (c = this.normalize(c), (g2 = d2.isInsidePlot(c.chartX - d2.plotLeft, c.chartY - d2.plotTop)) && !d2.openMenu) {
                a && this.runPointActions(c);
                if ("touchmove" === c.type) {
                  a = this.pinchDown;
                  var e2 = a[0] ? 4 <= Math.sqrt(Math.pow(a[0].chartX - c.chartX, 2) + Math.pow(a[0].chartY - c.chartY, 2)) : false;
                }
                r(e2, true) && this.pinch(c);
              } else
                a && this.reset();
            else
              2 === c.touches.length && this.pinch(c);
          };
          g.prototype.zoomOption = function(c) {
            var a = this.chart, d2 = a.options.chart, g2 = d2.zoomType || "";
            a = a.inverted;
            /touch/.test(c.type) && (g2 = r(d2.pinchType, g2));
            this.zoomX = c = /x/.test(g2);
            this.zoomY = g2 = /y/.test(g2);
            this.zoomHor = c && !a || g2 && a;
            this.zoomVert = g2 && !a || c && a;
            this.hasZoom = c || g2;
          };
          return g;
        }();
        return h.Pointer = f;
      });
      N(m, "Core/MSPointer.js", [m["Core/Globals.js"], m["Core/Pointer.js"], m["Core/Utilities.js"]], function(f, h, m2) {
        function z() {
          var e2 = [];
          e2.item = function(e3) {
            return this[e3];
          };
          v(D, function(f2) {
            e2.push({ pageX: f2.pageX, pageY: f2.pageY, target: f2.target });
          });
          return e2;
        }
        function F(e2, n2, h2, r) {
          "touch" !== e2.pointerType && e2.pointerType !== e2.MSPOINTER_TYPE_TOUCH || !K[f.hoverChartIndex] || (r(e2), r = K[f.hoverChartIndex].pointer, r[n2]({ type: h2, target: e2.currentTarget, preventDefault: y, touches: z() }));
        }
        var P = this && this.__extends || /* @__PURE__ */ function() {
          var e2 = function(f2, l) {
            e2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e3, d) {
              e3.__proto__ = d;
            } || function(e3, d) {
              for (var g in d)
                d.hasOwnProperty(g) && (e3[g] = d[g]);
            };
            return e2(f2, l);
          };
          return function(f2, l) {
            function r() {
              this.constructor = f2;
            }
            e2(f2, l);
            f2.prototype = null === l ? Object.create(l) : (r.prototype = l.prototype, new r());
          };
        }(), K = f.charts, C = f.doc, y = f.noop, e = m2.addEvent, I = m2.css, v = m2.objectEach, x = m2.removeEvent, D = {}, n = !!f.win.PointerEvent;
        return function(f2) {
          function l() {
            return null !== f2 && f2.apply(this, arguments) || this;
          }
          P(l, f2);
          l.prototype.batchMSEvents = function(e2) {
            e2(this.chart.container, n ? "pointerdown" : "MSPointerDown", this.onContainerPointerDown);
            e2(this.chart.container, n ? "pointermove" : "MSPointerMove", this.onContainerPointerMove);
            e2(C, n ? "pointerup" : "MSPointerUp", this.onDocumentPointerUp);
          };
          l.prototype.destroy = function() {
            this.batchMSEvents(x);
            f2.prototype.destroy.call(this);
          };
          l.prototype.init = function(e2, l2) {
            f2.prototype.init.call(
              this,
              e2,
              l2
            );
            this.hasZoom && I(e2.container, { "-ms-touch-action": "none", "touch-action": "none" });
          };
          l.prototype.onContainerPointerDown = function(e2) {
            F(e2, "onContainerTouchStart", "touchstart", function(e3) {
              D[e3.pointerId] = { pageX: e3.pageX, pageY: e3.pageY, target: e3.currentTarget };
            });
          };
          l.prototype.onContainerPointerMove = function(e2) {
            F(e2, "onContainerTouchMove", "touchmove", function(e3) {
              D[e3.pointerId] = { pageX: e3.pageX, pageY: e3.pageY };
              D[e3.pointerId].target || (D[e3.pointerId].target = e3.currentTarget);
            });
          };
          l.prototype.onDocumentPointerUp = function(e2) {
            F(
              e2,
              "onDocumentTouchEnd",
              "touchend",
              function(e3) {
                delete D[e3.pointerId];
              }
            );
          };
          l.prototype.setDOMEvents = function() {
            f2.prototype.setDOMEvents.call(this);
            (this.hasZoom || this.followTouchMove) && this.batchMSEvents(e);
          };
          return l;
        }(h);
      });
      N(m, "Core/Legend.js", [m["Core/Animation/AnimationUtilities.js"], m["Core/Globals.js"], m["Core/Utilities.js"]], function(f, h, m2) {
        var z = f.animObject, F = f.setAnimation, L = m2.addEvent, K = m2.css, C = m2.defined, y = m2.discardElement, e = m2.find, I = m2.fireEvent, v = m2.format, x = m2.isNumber, D = m2.merge, n = m2.pick, l = m2.relativeLength, J = m2.stableSort, w = m2.syncTimeout;
        f = m2.wrap;
        m2 = h.isFirefox;
        var r = h.marginNames, d = h.win, g = function() {
          function c(a, c2) {
            this.allItems = [];
            this.contentGroup = this.box = void 0;
            this.display = false;
            this.group = void 0;
            this.offsetWidth = this.maxLegendWidth = this.maxItemWidth = this.legendWidth = this.legendHeight = this.lastLineHeight = this.lastItemY = this.itemY = this.itemX = this.itemMarginTop = this.itemMarginBottom = this.itemHeight = this.initialItemY = 0;
            this.options = {};
            this.padding = 0;
            this.pages = [];
            this.proximate = false;
            this.scrollGroup = void 0;
            this.widthOption = this.totalItemWidth = this.titleHeight = this.symbolWidth = this.symbolHeight = 0;
            this.chart = a;
            this.init(a, c2);
          }
          c.prototype.init = function(a, c2) {
            this.chart = a;
            this.setOptions(c2);
            c2.enabled && (this.render(), L(this.chart, "endResize", function() {
              this.legend.positionCheckboxes();
            }), this.proximate ? this.unchartrender = L(this.chart, "render", function() {
              this.legend.proximatePositions();
              this.legend.positionItems();
            }) : this.unchartrender && this.unchartrender());
          };
          c.prototype.setOptions = function(a) {
            var c2 = n(
              a.padding,
              8
            );
            this.options = a;
            this.chart.styledMode || (this.itemStyle = a.itemStyle, this.itemHiddenStyle = D(this.itemStyle, a.itemHiddenStyle));
            this.itemMarginTop = a.itemMarginTop || 0;
            this.itemMarginBottom = a.itemMarginBottom || 0;
            this.padding = c2;
            this.initialItemY = c2 - 5;
            this.symbolWidth = n(a.symbolWidth, 16);
            this.pages = [];
            this.proximate = "proximate" === a.layout && !this.chart.inverted;
            this.baseline = void 0;
          };
          c.prototype.update = function(a, c2) {
            var d2 = this.chart;
            this.setOptions(D(true, this.options, a));
            this.destroy();
            d2.isDirtyLegend = d2.isDirtyBox = true;
            n(c2, true) && d2.redraw();
            I(this, "afterUpdate");
          };
          c.prototype.colorizeItem = function(a, c2) {
            a.legendGroup[c2 ? "removeClass" : "addClass"]("highcharts-legend-item-hidden");
            if (!this.chart.styledMode) {
              var d2 = this.options, g2 = a.legendItem, e2 = a.legendLine, f2 = a.legendSymbol, q = this.itemHiddenStyle.color;
              d2 = c2 ? d2.itemStyle.color : q;
              var l2 = c2 ? a.color || q : q, r2 = a.options && a.options.marker, n2 = { fill: l2 };
              g2 && g2.css({ fill: d2, color: d2 });
              e2 && e2.attr({ stroke: l2 });
              f2 && (r2 && f2.isMarker && (n2 = a.pointAttribs(), c2 || (n2.stroke = n2.fill = q)), f2.attr(n2));
            }
            I(
              this,
              "afterColorizeItem",
              { item: a, visible: c2 }
            );
          };
          c.prototype.positionItems = function() {
            this.allItems.forEach(this.positionItem, this);
            this.chart.isResizing || this.positionCheckboxes();
          };
          c.prototype.positionItem = function(a) {
            var c2 = this, d2 = this.options, g2 = d2.symbolPadding, e2 = !d2.rtl, f2 = a._legendItemPos;
            d2 = f2[0];
            f2 = f2[1];
            var l2 = a.checkbox, n2 = a.legendGroup;
            n2 && n2.element && (g2 = { translateX: e2 ? d2 : this.legendWidth - d2 - 2 * g2 - 4, translateY: f2 }, e2 = function() {
              I(c2, "afterPositionItem", { item: a });
            }, C(n2.translateY) ? n2.animate(g2, void 0, e2) : (n2.attr(g2), e2()));
            l2 && (l2.x = d2, l2.y = f2);
          };
          c.prototype.destroyItem = function(a) {
            var c2 = a.checkbox;
            ["legendItem", "legendLine", "legendSymbol", "legendGroup"].forEach(function(c3) {
              a[c3] && (a[c3] = a[c3].destroy());
            });
            c2 && y(a.checkbox);
          };
          c.prototype.destroy = function() {
            function a(a2) {
              this[a2] && (this[a2] = this[a2].destroy());
            }
            this.getAllItems().forEach(function(c2) {
              ["legendItem", "legendGroup"].forEach(a, c2);
            });
            "clipRect up down pager nav box title group".split(" ").forEach(a, this);
            this.display = null;
          };
          c.prototype.positionCheckboxes = function() {
            var a = this.group && this.group.alignAttr, c2 = this.clipHeight || this.legendHeight, d2 = this.titleHeight;
            if (a) {
              var g2 = a.translateY;
              this.allItems.forEach(function(e2) {
                var p = e2.checkbox;
                if (p) {
                  var f2 = g2 + d2 + p.y + (this.scrollOffset || 0) + 3;
                  K(p, { left: a.translateX + e2.checkboxOffset + p.x - 20 + "px", top: f2 + "px", display: this.proximate || f2 > g2 - 6 && f2 < g2 + c2 - 6 ? "" : "none" });
                }
              }, this);
            }
          };
          c.prototype.renderTitle = function() {
            var a = this.options, c2 = this.padding, d2 = a.title, g2 = 0;
            d2.text && (this.title || (this.title = this.chart.renderer.label(d2.text, c2 - 3, c2 - 4, null, null, null, a.useHTML, null, "legend-title").attr({ zIndex: 1 }), this.chart.styledMode || this.title.css(d2.style), this.title.add(this.group)), d2.width || this.title.css({ width: this.maxLegendWidth + "px" }), a = this.title.getBBox(), g2 = a.height, this.offsetWidth = a.width, this.contentGroup.attr({ translateY: g2 }));
            this.titleHeight = g2;
          };
          c.prototype.setText = function(a) {
            var c2 = this.options;
            a.legendItem.attr({ text: c2.labelFormat ? v(c2.labelFormat, a, this.chart) : c2.labelFormatter.call(a) });
          };
          c.prototype.renderItem = function(a) {
            var c2 = this.chart, d2 = c2.renderer, g2 = this.options, e2 = this.symbolWidth, f2 = g2.symbolPadding, l2 = this.itemStyle, r2 = this.itemHiddenStyle, h2 = "horizontal" === g2.layout ? n(g2.itemDistance, 20) : 0, w2 = !g2.rtl, v2 = a.legendItem, u = !a.series, b = !u && a.series.drawLegendSymbol ? a.series : a, k = b.options;
            k = this.createCheckboxForItem && k && k.showCheckbox;
            h2 = e2 + f2 + h2 + (k ? 20 : 0);
            var t = g2.useHTML, H = a.options.className;
            v2 || (a.legendGroup = d2.g("legend-item").addClass("highcharts-" + b.type + "-series highcharts-color-" + a.colorIndex + (H ? " " + H : "") + (u ? " highcharts-series-" + a.index : "")).attr({ zIndex: 1 }).add(this.scrollGroup), a.legendItem = v2 = d2.text(
              "",
              w2 ? e2 + f2 : -f2,
              this.baseline || 0,
              t
            ), c2.styledMode || v2.css(D(a.visible ? l2 : r2)), v2.attr({ align: w2 ? "left" : "right", zIndex: 2 }).add(a.legendGroup), this.baseline || (this.fontMetrics = d2.fontMetrics(c2.styledMode ? 12 : l2.fontSize, v2), this.baseline = this.fontMetrics.f + 3 + this.itemMarginTop, v2.attr("y", this.baseline)), this.symbolHeight = g2.symbolHeight || this.fontMetrics.f, b.drawLegendSymbol(this, a), this.setItemEvents && this.setItemEvents(a, v2, t));
            k && !a.checkbox && this.createCheckboxForItem && this.createCheckboxForItem(a);
            this.colorizeItem(
              a,
              a.visible
            );
            !c2.styledMode && l2.width || v2.css({ width: (g2.itemWidth || this.widthOption || c2.spacingBox.width) - h2 + "px" });
            this.setText(a);
            c2 = v2.getBBox();
            a.itemWidth = a.checkboxOffset = g2.itemWidth || a.legendItemWidth || c2.width + h2;
            this.maxItemWidth = Math.max(this.maxItemWidth, a.itemWidth);
            this.totalItemWidth += a.itemWidth;
            this.itemHeight = a.itemHeight = Math.round(a.legendItemHeight || c2.height || this.symbolHeight);
          };
          c.prototype.layoutItem = function(a) {
            var c2 = this.options, d2 = this.padding, g2 = "horizontal" === c2.layout, e2 = a.itemHeight, f2 = this.itemMarginBottom, l2 = this.itemMarginTop, r2 = g2 ? n(c2.itemDistance, 20) : 0, h2 = this.maxLegendWidth;
            c2 = c2.alignColumns && this.totalItemWidth > h2 ? this.maxItemWidth : a.itemWidth;
            g2 && this.itemX - d2 + c2 > h2 && (this.itemX = d2, this.lastLineHeight && (this.itemY += l2 + this.lastLineHeight + f2), this.lastLineHeight = 0);
            this.lastItemY = l2 + this.itemY + f2;
            this.lastLineHeight = Math.max(e2, this.lastLineHeight);
            a._legendItemPos = [this.itemX, this.itemY];
            g2 ? this.itemX += c2 : (this.itemY += l2 + e2 + f2, this.lastLineHeight = e2);
            this.offsetWidth = this.widthOption || Math.max((g2 ? this.itemX - d2 - (a.checkbox ? 0 : r2) : c2) + d2, this.offsetWidth);
          };
          c.prototype.getAllItems = function() {
            var a = [];
            this.chart.series.forEach(function(c2) {
              var d2 = c2 && c2.options;
              c2 && n(d2.showInLegend, C(d2.linkedTo) ? false : void 0, true) && (a = a.concat(c2.legendItems || ("point" === d2.legendType ? c2.data : c2)));
            });
            I(this, "afterGetAllItems", { allItems: a });
            return a;
          };
          c.prototype.getAlignment = function() {
            var a = this.options;
            return this.proximate ? a.align.charAt(0) + "tv" : a.floating ? "" : a.align.charAt(0) + a.verticalAlign.charAt(0) + a.layout.charAt(0);
          };
          c.prototype.adjustMargins = function(a, c2) {
            var d2 = this.chart, g2 = this.options, e2 = this.getAlignment();
            e2 && [/(lth|ct|rth)/, /(rtv|rm|rbv)/, /(rbh|cb|lbh)/, /(lbv|lm|ltv)/].forEach(function(f2, p) {
              f2.test(e2) && !C(a[p]) && (d2[r[p]] = Math.max(d2[r[p]], d2.legend[(p + 1) % 2 ? "legendHeight" : "legendWidth"] + [1, -1, -1, 1][p] * g2[p % 2 ? "x" : "y"] + n(g2.margin, 12) + c2[p] + (d2.titleOffset[p] || 0)));
            });
          };
          c.prototype.proximatePositions = function() {
            var a = this.chart, c2 = [], d2 = "left" === this.options.align;
            this.allItems.forEach(function(g2) {
              var f2;
              var p = d2;
              if (g2.yAxis) {
                g2.xAxis.options.reversed && (p = !p);
                g2.points && (f2 = e(p ? g2.points : g2.points.slice(0).reverse(), function(a2) {
                  return x(a2.plotY);
                }));
                p = this.itemMarginTop + g2.legendItem.getBBox().height + this.itemMarginBottom;
                var q = g2.yAxis.top - a.plotTop;
                g2.visible ? (f2 = f2 ? f2.plotY : g2.yAxis.height, f2 += q - 0.3 * p) : f2 = q + g2.yAxis.height;
                c2.push({ target: f2, size: p, item: g2 });
              }
            }, this);
            h.distribute(c2, a.plotHeight);
            c2.forEach(function(c3) {
              c3.item._legendItemPos[1] = a.plotTop - a.spacing[0] + c3.pos;
            });
          };
          c.prototype.render = function() {
            var a = this.chart, c2 = a.renderer, d2 = this.group, g2 = this.box, e2 = this.options, f2 = this.padding;
            this.itemX = f2;
            this.itemY = this.initialItemY;
            this.lastItemY = this.offsetWidth = 0;
            this.widthOption = l(e2.width, a.spacingBox.width - f2);
            var n2 = a.spacingBox.width - 2 * f2 - e2.x;
            -1 < ["rm", "lm"].indexOf(this.getAlignment().substring(0, 2)) && (n2 /= 2);
            this.maxLegendWidth = this.widthOption || n2;
            d2 || (this.group = d2 = c2.g("legend").attr({ zIndex: 7 }).add(), this.contentGroup = c2.g().attr({ zIndex: 1 }).add(d2), this.scrollGroup = c2.g().add(this.contentGroup));
            this.renderTitle();
            var r2 = this.getAllItems();
            J(r2, function(a2, c3) {
              return (a2.options && a2.options.legendIndex || 0) - (c3.options && c3.options.legendIndex || 0);
            });
            e2.reversed && r2.reverse();
            this.allItems = r2;
            this.display = n2 = !!r2.length;
            this.itemHeight = this.totalItemWidth = this.maxItemWidth = this.lastLineHeight = 0;
            r2.forEach(this.renderItem, this);
            r2.forEach(this.layoutItem, this);
            r2 = (this.widthOption || this.offsetWidth) + f2;
            var h2 = this.lastItemY + this.lastLineHeight + this.titleHeight;
            h2 = this.handleOverflow(h2);
            h2 += f2;
            g2 || (this.box = g2 = c2.rect().addClass("highcharts-legend-box").attr({ r: e2.borderRadius }).add(d2), g2.isNew = true);
            a.styledMode || g2.attr({ stroke: e2.borderColor, "stroke-width": e2.borderWidth || 0, fill: e2.backgroundColor || "none" }).shadow(e2.shadow);
            0 < r2 && 0 < h2 && (g2[g2.isNew ? "attr" : "animate"](g2.crisp.call({}, { x: 0, y: 0, width: r2, height: h2 }, g2.strokeWidth())), g2.isNew = false);
            g2[n2 ? "show" : "hide"]();
            a.styledMode && "none" === d2.getStyle("display") && (r2 = h2 = 0);
            this.legendWidth = r2;
            this.legendHeight = h2;
            n2 && this.align();
            this.proximate || this.positionItems();
            I(this, "afterRender");
          };
          c.prototype.align = function(a) {
            void 0 === a && (a = this.chart.spacingBox);
            var c2 = this.chart, d2 = this.options, g2 = a.y;
            /(lth|ct|rth)/.test(this.getAlignment()) && 0 < c2.titleOffset[0] ? g2 += c2.titleOffset[0] : /(lbh|cb|rbh)/.test(this.getAlignment()) && 0 < c2.titleOffset[2] && (g2 -= c2.titleOffset[2]);
            g2 !== a.y && (a = D(a, { y: g2 }));
            this.group.align(D(d2, { width: this.legendWidth, height: this.legendHeight, verticalAlign: this.proximate ? "top" : d2.verticalAlign }), true, a);
          };
          c.prototype.handleOverflow = function(a) {
            var c2 = this, d2 = this.chart, g2 = d2.renderer, e2 = this.options, f2 = e2.y, l2 = this.padding;
            f2 = d2.spacingBox.height + ("top" === e2.verticalAlign ? -f2 : f2) - l2;
            var r2 = e2.maxHeight, h2, w2 = this.clipRect, v2 = e2.navigation, u = n(v2.animation, true), b = v2.arrowSize || 12, k = this.nav, t = this.pages, H, m3 = this.allItems, D2 = function(a2) {
              "number" === typeof a2 ? w2.attr({ height: a2 }) : w2 && (c2.clipRect = w2.destroy(), c2.contentGroup.clip());
              c2.contentGroup.div && (c2.contentGroup.div.style.clip = a2 ? "rect(" + l2 + "px,9999px," + (l2 + a2) + "px,0)" : "auto");
            }, x2 = function(a2) {
              c2[a2] = g2.circle(0, 0, 1.3 * b).translate(b / 2, b / 2).add(k);
              d2.styledMode || c2[a2].attr("fill", "rgba(0,0,0,0.0001)");
              return c2[a2];
            };
            "horizontal" !== e2.layout || "middle" === e2.verticalAlign || e2.floating || (f2 /= 2);
            r2 && (f2 = Math.min(f2, r2));
            t.length = 0;
            a > f2 && false !== v2.enabled ? (this.clipHeight = h2 = Math.max(f2 - 20 - this.titleHeight - l2, 0), this.currentPage = n(this.currentPage, 1), this.fullHeight = a, m3.forEach(function(a2, b2) {
              var c3 = a2._legendItemPos[1], d3 = Math.round(a2.legendItem.getBBox().height), g3 = t.length;
              if (!g3 || c3 - t[g3 - 1] > h2 && (H || c3) !== t[g3 - 1])
                t.push(H || c3), g3++;
              a2.pageIx = g3 - 1;
              H && (m3[b2 - 1].pageIx = g3 - 1);
              b2 === m3.length - 1 && c3 + d3 - t[g3 - 1] > h2 && c3 !== H && (t.push(c3), a2.pageIx = g3);
              c3 !== H && (H = c3);
            }), w2 || (w2 = c2.clipRect = g2.clipRect(
              0,
              l2,
              9999,
              0
            ), c2.contentGroup.clip(w2)), D2(h2), k || (this.nav = k = g2.g().attr({ zIndex: 1 }).add(this.group), this.up = g2.symbol("triangle", 0, 0, b, b).add(k), x2("upTracker").on("click", function() {
              c2.scroll(-1, u);
            }), this.pager = g2.text("", 15, 10).addClass("highcharts-legend-navigation"), d2.styledMode || this.pager.css(v2.style), this.pager.add(k), this.down = g2.symbol("triangle-down", 0, 0, b, b).add(k), x2("downTracker").on("click", function() {
              c2.scroll(1, u);
            })), c2.scroll(0), a = f2) : k && (D2(), this.nav = k.destroy(), this.scrollGroup.attr({ translateY: 1 }), this.clipHeight = 0);
            return a;
          };
          c.prototype.scroll = function(a, c2) {
            var d2 = this, g2 = this.chart, e2 = this.pages, f2 = e2.length, l2 = this.currentPage + a;
            a = this.clipHeight;
            var q = this.options.navigation, r2 = this.pager, h2 = this.padding;
            l2 > f2 && (l2 = f2);
            0 < l2 && ("undefined" !== typeof c2 && F(c2, g2), this.nav.attr({ translateX: h2, translateY: a + this.padding + 7 + this.titleHeight, visibility: "visible" }), [this.up, this.upTracker].forEach(function(a2) {
              a2.attr({ "class": 1 === l2 ? "highcharts-legend-nav-inactive" : "highcharts-legend-nav-active" });
            }), r2.attr({ text: l2 + "/" + f2 }), [
              this.down,
              this.downTracker
            ].forEach(function(a2) {
              a2.attr({ x: 18 + this.pager.getBBox().width, "class": l2 === f2 ? "highcharts-legend-nav-inactive" : "highcharts-legend-nav-active" });
            }, this), g2.styledMode || (this.up.attr({ fill: 1 === l2 ? q.inactiveColor : q.activeColor }), this.upTracker.css({ cursor: 1 === l2 ? "default" : "pointer" }), this.down.attr({ fill: l2 === f2 ? q.inactiveColor : q.activeColor }), this.downTracker.css({ cursor: l2 === f2 ? "default" : "pointer" })), this.scrollOffset = -e2[l2 - 1] + this.initialItemY, this.scrollGroup.animate({ translateY: this.scrollOffset }), this.currentPage = l2, this.positionCheckboxes(), c2 = z(n(c2, g2.renderer.globalAnimation, true)), w(function() {
              I(d2, "afterScroll", { currentPage: l2 });
            }, c2.duration));
          };
          return c;
        }();
        (/Trident\/7\.0/.test(d.navigator && d.navigator.userAgent) || m2) && f(g.prototype, "positionItem", function(c, a) {
          var d2 = this, g2 = function() {
            a._legendItemPos && c.call(d2, a);
          };
          g2();
          d2.bubbleLegend || setTimeout(g2);
        });
        h.Legend = g;
        return h.Legend;
      });
      N(
        m,
        "Core/Series/Point.js",
        [m["Core/Animation/AnimationUtilities.js"], m["Core/Globals.js"], m["Core/Utilities.js"]],
        function(f, h, m2) {
          var z = f.animObject, F = m2.defined, L = m2.erase, K = m2.extend, C = m2.fireEvent, y = m2.format, e = m2.getNestedProperty, I = m2.isArray, v = m2.isNumber, x = m2.isObject, D = m2.syncTimeout, n = m2.pick, l = m2.removeEvent, J = m2.uniqueKey;
          "";
          f = function() {
            function f2() {
              this.colorIndex = this.category = void 0;
              this.formatPrefix = "point";
              this.id = void 0;
              this.isNull = false;
              this.percentage = this.options = this.name = void 0;
              this.selected = false;
              this.total = this.series = void 0;
              this.visible = true;
              this.x = void 0;
            }
            f2.prototype.animateBeforeDestroy = function() {
              var e2 = this, d = { x: e2.startXPos, opacity: 0 }, g, c = e2.getGraphicalProps();
              c.singular.forEach(function(a) {
                g = "dataLabel" === a;
                e2[a] = e2[a].animate(g ? { x: e2[a].startXPos, y: e2[a].startYPos, opacity: 0 } : d);
              });
              c.plural.forEach(function(a) {
                e2[a].forEach(function(a2) {
                  a2.element && a2.animate(K({ x: e2.startXPos }, a2.startYPos ? { x: a2.startXPos, y: a2.startYPos } : {}));
                });
              });
            };
            f2.prototype.applyOptions = function(e2, d) {
              var g = this.series, c = g.options.pointValKey || g.pointValKey;
              e2 = f2.prototype.optionsToObject.call(this, e2);
              K(this, e2);
              this.options = this.options ? K(
                this.options,
                e2
              ) : e2;
              e2.group && delete this.group;
              e2.dataLabels && delete this.dataLabels;
              c && (this.y = f2.prototype.getNestedProperty.call(this, c));
              this.formatPrefix = (this.isNull = n(this.isValid && !this.isValid(), null === this.x || !v(this.y))) ? "null" : "point";
              this.selected && (this.state = "select");
              "name" in this && "undefined" === typeof d && g.xAxis && g.xAxis.hasNames && (this.x = g.xAxis.nameToX(this));
              "undefined" === typeof this.x && g && (this.x = "undefined" === typeof d ? g.autoIncrement(this) : d);
              return this;
            };
            f2.prototype.destroy = function() {
              function e2() {
                if (d.graphic || d.dataLabel || d.dataLabels)
                  l(d), d.destroyElements();
                for (p in d)
                  d[p] = null;
              }
              var d = this, g = d.series, c = g.chart;
              g = g.options.dataSorting;
              var a = c.hoverPoints, f3 = z(d.series.chart.renderer.globalAnimation), p;
              d.legendItem && c.legend.destroyItem(d);
              a && (d.setState(), L(a, d), a.length || (c.hoverPoints = null));
              if (d === c.hoverPoint)
                d.onMouseOut();
              g && g.enabled ? (this.animateBeforeDestroy(), D(e2, f3.duration)) : e2();
              c.pointCount--;
            };
            f2.prototype.destroyElements = function(e2) {
              var d = this;
              e2 = d.getGraphicalProps(e2);
              e2.singular.forEach(function(g) {
                d[g] = d[g].destroy();
              });
              e2.plural.forEach(function(g) {
                d[g].forEach(function(c) {
                  c.element && c.destroy();
                });
                delete d[g];
              });
            };
            f2.prototype.firePointEvent = function(e2, d, g) {
              var c = this, a = this.series.options;
              (a.point.events[e2] || c.options && c.options.events && c.options.events[e2]) && c.importEvents();
              "click" === e2 && a.allowPointSelect && (g = function(a2) {
                c.select && c.select(null, a2.ctrlKey || a2.metaKey || a2.shiftKey);
              });
              C(c, e2, d, g);
            };
            f2.prototype.getClassName = function() {
              return "highcharts-point" + (this.selected ? " highcharts-point-select" : "") + (this.negative ? " highcharts-negative" : "") + (this.isNull ? " highcharts-null-point" : "") + ("undefined" !== typeof this.colorIndex ? " highcharts-color-" + this.colorIndex : "") + (this.options.className ? " " + this.options.className : "") + (this.zone && this.zone.className ? " " + this.zone.className.replace("highcharts-negative", "") : "");
            };
            f2.prototype.getGraphicalProps = function(e2) {
              var d = this, g = [], c, a = { singular: [], plural: [] };
              e2 = e2 || { graphic: 1, dataLabel: 1 };
              e2.graphic && g.push("graphic", "shadowGroup");
              e2.dataLabel && g.push(
                "dataLabel",
                "dataLabelUpper",
                "connector"
              );
              for (c = g.length; c--; ) {
                var f3 = g[c];
                d[f3] && a.singular.push(f3);
              }
              ["dataLabel", "connector"].forEach(function(c2) {
                var g2 = c2 + "s";
                e2[c2] && d[g2] && a.plural.push(g2);
              });
              return a;
            };
            f2.prototype.getLabelConfig = function() {
              return { x: this.category, y: this.y, color: this.color, colorIndex: this.colorIndex, key: this.name || this.category, series: this.series, point: this, percentage: this.percentage, total: this.total || this.stackTotal };
            };
            f2.prototype.getNestedProperty = function(f3) {
              if (f3)
                return 0 === f3.indexOf("custom.") ? e(f3, this.options) : this[f3];
            };
            f2.prototype.getZone = function() {
              var e2 = this.series, d = e2.zones;
              e2 = e2.zoneAxis || "y";
              var g = 0, c;
              for (c = d[g]; this[e2] >= c.value; )
                c = d[++g];
              this.nonZonedColor || (this.nonZonedColor = this.color);
              this.color = c && c.color && !this.options.color ? c.color : this.nonZonedColor;
              return c;
            };
            f2.prototype.hasNewShapeType = function() {
              return (this.graphic && (this.graphic.symbolName || this.graphic.element.nodeName)) !== this.shapeType;
            };
            f2.prototype.init = function(e2, d, g) {
              this.series = e2;
              this.applyOptions(d, g);
              this.id = F(this.id) ? this.id : J();
              this.resolveColor();
              e2.chart.pointCount++;
              C(this, "afterInit");
              return this;
            };
            f2.prototype.optionsToObject = function(e2) {
              var d = {}, g = this.series, c = g.options.keys, a = c || g.pointArrayMap || ["y"], l2 = a.length, p = 0, n2 = 0;
              if (v(e2) || null === e2)
                d[a[0]] = e2;
              else if (I(e2))
                for (!c && e2.length > l2 && (g = typeof e2[0], "string" === g ? d.name = e2[0] : "number" === g && (d.x = e2[0]), p++); n2 < l2; )
                  c && "undefined" === typeof e2[p] || (0 < a[n2].indexOf(".") ? f2.prototype.setNestedProperty(d, e2[p], a[n2]) : d[a[n2]] = e2[p]), p++, n2++;
              else
                "object" === typeof e2 && (d = e2, e2.dataLabels && (g._hasPointLabels = true), e2.marker && (g._hasPointMarkers = true));
              return d;
            };
            f2.prototype.resolveColor = function() {
              var e2 = this.series;
              var d = e2.chart.options.chart.colorCount;
              var g = e2.chart.styledMode;
              delete this.nonZonedColor;
              g || this.options.color || (this.color = e2.color);
              e2.options.colorByPoint ? (g || (d = e2.options.colors || e2.chart.options.colors, this.color = this.color || d[e2.colorCounter], d = d.length), g = e2.colorCounter, e2.colorCounter++, e2.colorCounter === d && (e2.colorCounter = 0)) : g = e2.colorIndex;
              this.colorIndex = n(
                this.colorIndex,
                g
              );
            };
            f2.prototype.setNestedProperty = function(e2, d, g) {
              g.split(".").reduce(function(c, a, g2, e3) {
                c[a] = e3.length - 1 === g2 ? d : x(c[a], true) ? c[a] : {};
                return c[a];
              }, e2);
              return e2;
            };
            f2.prototype.tooltipFormatter = function(e2) {
              var d = this.series, g = d.tooltipOptions, c = n(g.valueDecimals, ""), a = g.valuePrefix || "", f3 = g.valueSuffix || "";
              d.chart.styledMode && (e2 = d.chart.tooltip.styledModeFormat(e2));
              (d.pointArrayMap || ["y"]).forEach(function(d2) {
                d2 = "{point." + d2;
                if (a || f3)
                  e2 = e2.replace(RegExp(d2 + "}", "g"), a + d2 + "}" + f3);
                e2 = e2.replace(RegExp(d2 + "}", "g"), d2 + ":,." + c + "f}");
              });
              return y(e2, { point: this, series: this.series }, d.chart);
            };
            return f2;
          }();
          return h.Point = f;
        }
      );
      N(m, "Core/Series/Series.js", [m["Core/Globals.js"], m["Core/Series/Point.js"], m["Core/Utilities.js"]], function(f, h, m2) {
        var z = m2.error, F = m2.extendClass, L = m2.fireEvent, K = m2.getOptions, C = m2.isObject, y = m2.merge, e = m2.objectEach;
        m2 = function() {
          function f2(e2, h2) {
            var v = y(f2.defaultOptions, h2);
            this.chart = e2;
            this._i = e2.series.length;
            e2.series.push(this);
            this.options = v;
            this.userOptions = y(h2);
          }
          f2.addSeries = function(e2, h2) {
            f2.seriesTypes[e2] = h2;
          };
          f2.cleanRecursively = function(h2, m3) {
            var v = {};
            e(h2, function(e2, l) {
              if (C(h2[l], true) && !h2.nodeType && m3[l])
                e2 = f2.cleanRecursively(h2[l], m3[l]), Object.keys(e2).length && (v[l] = e2);
              else if (C(h2[l]) || h2[l] !== m3[l])
                v[l] = h2[l];
            });
            return v;
          };
          f2.getSeries = function(e2, h2) {
            void 0 === h2 && (h2 = {});
            var v = e2.options.chart;
            v = h2.type || v.type || v.defaultSeriesType || "";
            var n = f2.seriesTypes[v];
            n || z(17, true, e2, { missingModuleFor: v });
            return new n(e2, h2);
          };
          f2.seriesType = function(e2, m3, D, n, l) {
            var v = K().plotOptions || {}, w = f2.seriesTypes;
            m3 = m3 || "";
            v[e2] = y(v[m3], D);
            f2.addSeries(
              e2,
              F(w[m3] || function() {
              }, n)
            );
            w[e2].prototype.type = e2;
            l && (w[e2].prototype.pointClass = F(h, l));
            return w[e2];
          };
          f2.prototype.update = function(e2, h2) {
            void 0 === h2 && (h2 = true);
            var m3 = this;
            e2 = f2.cleanRecursively(e2, this.userOptions);
            var n = e2.type;
            "undefined" !== typeof n && n !== m3.type && (m3 = f2.getSeries(m3.chart, e2));
            L(m3, "update", { newOptions: e2 });
            m3.userOptions = y(e2);
            L(m3, "afterUpdate", { newOptions: e2 });
            h2 && m3.chart.redraw();
            return m3;
          };
          f2.defaultOptions = { type: "base" };
          f2.seriesTypes = {};
          return f2;
        }();
        m2.prototype.pointClass = h;
        f.seriesType = m2.seriesType;
        f.seriesTypes = m2.seriesTypes;
        return m2;
      });
      N(m, "Core/Chart/Chart.js", [m["Core/Animation/AnimationUtilities.js"], m["Core/Axis/Axis.js"], m["Core/Series/Series.js"], m["Core/Globals.js"], m["Core/Legend.js"], m["Core/MSPointer.js"], m["Core/Options.js"], m["Core/Pointer.js"], m["Core/Time.js"], m["Core/Utilities.js"]], function(f, h, m2, z, F, L, K, C, y, e) {
        var I = f.animate, v = f.animObject, x = f.setAnimation, D = z.charts, n = z.doc, l = z.win, J = K.defaultOptions, w = e.addEvent, r = e.attr, d = e.createElement, g = e.css, c = e.defined, a = e.discardElement, q = e.erase, p = e.error, B = e.extend, A = e.find, G = e.fireEvent, M = e.getStyle, T = e.isArray, Q = e.isFunction, O = e.isNumber, E = e.isObject, u = e.isString, b = e.merge, k = e.numberFormat, t = e.objectEach, H = e.pick, R = e.pInt, U = e.relativeLength, Z = e.removeEvent, aa = e.splat, ba = e.syncTimeout, S = e.uniqueKey, Y = z.marginNames, W = function() {
          function f2(a2, b2, c2) {
            this.yAxis = this.xAxis = this.userOptions = this.titleOffset = this.time = this.symbolCounter = this.spacingBox = this.spacing = this.series = this.renderTo = this.renderer = this.pointer = this.pointCount = this.plotWidth = this.plotTop = this.plotLeft = this.plotHeight = this.plotBox = this.options = this.numberFormatter = this.margin = this.legend = this.labelCollectors = this.isResizing = this.index = this.container = this.colorCounter = this.clipBox = this.chartWidth = this.chartHeight = this.bounds = this.axisOffset = this.axes = void 0;
            this.getArgs(a2, b2, c2);
          }
          f2.prototype.getArgs = function(a2, b2, c2) {
            u(a2) || a2.nodeName ? (this.renderTo = a2, this.init(b2, c2)) : this.init(a2, b2);
          };
          f2.prototype.init = function(a2, c2) {
            var d2, g2 = a2.series, e2 = a2.plotOptions || {};
            G(
              this,
              "init",
              { args: arguments },
              function() {
                a2.series = null;
                d2 = b(J, a2);
                var f3 = d2.chart || {};
                t(d2.plotOptions, function(a3, c3) {
                  E(a3) && (a3.tooltip = e2[c3] && b(e2[c3].tooltip) || void 0);
                });
                d2.tooltip.userOptions = a2.chart && a2.chart.forExport && a2.tooltip.userOptions || a2.tooltip;
                d2.series = a2.series = g2;
                this.userOptions = a2;
                var p2 = f3.events;
                this.margin = [];
                this.spacing = [];
                this.bounds = { h: {}, v: {} };
                this.labelCollectors = [];
                this.callback = c2;
                this.isResizing = 0;
                this.options = d2;
                this.axes = [];
                this.series = [];
                this.time = a2.time && Object.keys(a2.time).length ? new y(a2.time) : z.time;
                this.numberFormatter = f3.numberFormatter || k;
                this.styledMode = f3.styledMode;
                this.hasCartesianSeries = f3.showAxes;
                var l2 = this;
                l2.index = D.length;
                D.push(l2);
                z.chartCount++;
                p2 && t(p2, function(a3, b2) {
                  Q(a3) && w(l2, b2, a3);
                });
                l2.xAxis = [];
                l2.yAxis = [];
                l2.pointCount = l2.colorCounter = l2.symbolCounter = 0;
                G(l2, "afterInit");
                l2.firstRender();
              }
            );
          };
          f2.prototype.initSeries = function(a2) {
            var b2 = this.options.chart;
            b2 = a2.type || b2.type || b2.defaultSeriesType;
            var c2 = m2.seriesTypes[b2];
            c2 || p(17, true, this, { missingModuleFor: b2 });
            b2 = new c2(this, a2);
            "function" === typeof b2.init && b2.init(this, a2);
            return b2;
          };
          f2.prototype.setSeriesData = function() {
            this.getSeriesOrderByLinks().forEach(function(a2) {
              a2.points || a2.data || !a2.enabledDataSorting || a2.setData(a2.options.data, false);
            });
          };
          f2.prototype.getSeriesOrderByLinks = function() {
            return this.series.concat().sort(function(a2, b2) {
              return a2.linkedSeries.length || b2.linkedSeries.length ? b2.linkedSeries.length - a2.linkedSeries.length : 0;
            });
          };
          f2.prototype.orderSeries = function(a2) {
            var b2 = this.series;
            for (a2 = a2 || 0; a2 < b2.length; a2++)
              b2[a2] && (b2[a2].index = a2, b2[a2].name = b2[a2].getName());
          };
          f2.prototype.isInsidePlot = function(a2, b2, c2) {
            var d2 = c2 ? b2 : a2;
            a2 = c2 ? a2 : b2;
            d2 = { x: d2, y: a2, isInsidePlot: 0 <= d2 && d2 <= this.plotWidth && 0 <= a2 && a2 <= this.plotHeight };
            G(this, "afterIsInsidePlot", d2);
            return d2.isInsidePlot;
          };
          f2.prototype.redraw = function(a2) {
            G(this, "beforeRedraw");
            var b2 = this, c2 = b2.axes, d2 = b2.series, g2 = b2.pointer, k2 = b2.legend, e2 = b2.userOptions.legend, f3 = b2.isDirtyLegend, t2 = b2.hasCartesianSeries, p2 = b2.isDirtyBox, l2 = b2.renderer, q2 = l2.isHidden(), h2 = [];
            b2.setResponsive && b2.setResponsive(false);
            x(b2.hasRendered ? a2 : false, b2);
            q2 && b2.temporaryDisplay();
            b2.layOutTitles();
            for (a2 = d2.length; a2--; ) {
              var n2 = d2[a2];
              if (n2.options.stacking) {
                var u2 = true;
                if (n2.isDirty) {
                  var r2 = true;
                  break;
                }
              }
            }
            if (r2)
              for (a2 = d2.length; a2--; )
                n2 = d2[a2], n2.options.stacking && (n2.isDirty = true);
            d2.forEach(function(a3) {
              a3.isDirty && ("point" === a3.options.legendType ? ("function" === typeof a3.updateTotals && a3.updateTotals(), f3 = true) : e2 && (e2.labelFormatter || e2.labelFormat) && (f3 = true));
              a3.isDirtyData && G(a3, "updatedData");
            });
            f3 && k2 && k2.options.enabled && (k2.render(), b2.isDirtyLegend = false);
            u2 && b2.getStacks();
            t2 && c2.forEach(function(a3) {
              b2.isResizing && O(a3.min) || (a3.updateNames(), a3.setScale());
            });
            b2.getMargins();
            t2 && (c2.forEach(function(a3) {
              a3.isDirty && (p2 = true);
            }), c2.forEach(function(a3) {
              var b3 = a3.min + "," + a3.max;
              a3.extKey !== b3 && (a3.extKey = b3, h2.push(function() {
                G(a3, "afterSetExtremes", B(a3.eventArgs, a3.getExtremes()));
                delete a3.eventArgs;
              }));
              (p2 || u2) && a3.redraw();
            }));
            p2 && b2.drawChartBox();
            G(b2, "predraw");
            d2.forEach(function(a3) {
              (p2 || a3.isDirty) && a3.visible && a3.redraw();
              a3.isDirtyData = false;
            });
            g2 && g2.reset(true);
            l2.draw();
            G(b2, "redraw");
            G(b2, "render");
            q2 && b2.temporaryDisplay(true);
            h2.forEach(function(a3) {
              a3.call();
            });
          };
          f2.prototype.get = function(a2) {
            function b2(b3) {
              return b3.id === a2 || b3.options && b3.options.id === a2;
            }
            var c2 = this.series, d2;
            var g2 = A(this.axes, b2) || A(this.series, b2);
            for (d2 = 0; !g2 && d2 < c2.length; d2++)
              g2 = A(c2[d2].points || [], b2);
            return g2;
          };
          f2.prototype.getAxes = function() {
            var a2 = this, b2 = this.options, c2 = b2.xAxis = aa(b2.xAxis || {});
            b2 = b2.yAxis = aa(b2.yAxis || {});
            G(this, "getAxes");
            c2.forEach(function(a3, b3) {
              a3.index = b3;
              a3.isX = true;
            });
            b2.forEach(function(a3, b3) {
              a3.index = b3;
            });
            c2.concat(b2).forEach(function(b3) {
              new h(a2, b3);
            });
            G(this, "afterGetAxes");
          };
          f2.prototype.getSelectedPoints = function() {
            var a2 = [];
            this.series.forEach(function(b2) {
              a2 = a2.concat(b2.getPointsCollection().filter(function(a3) {
                return H(a3.selectedStaging, a3.selected);
              }));
            });
            return a2;
          };
          f2.prototype.getSelectedSeries = function() {
            return this.series.filter(function(a2) {
              return a2.selected;
            });
          };
          f2.prototype.setTitle = function(a2, b2, c2) {
            this.applyDescription("title", a2);
            this.applyDescription("subtitle", b2);
            this.applyDescription("caption", void 0);
            this.layOutTitles(c2);
          };
          f2.prototype.applyDescription = function(a2, c2) {
            var d2 = this, g2 = "title" === a2 ? { color: "#333333", fontSize: this.options.isStock ? "16px" : "18px" } : { color: "#666666" };
            g2 = this.options[a2] = b(!this.styledMode && { style: g2 }, this.options[a2], c2);
            var k2 = this[a2];
            k2 && c2 && (this[a2] = k2 = k2.destroy());
            g2 && !k2 && (k2 = this.renderer.text(g2.text, 0, 0, g2.useHTML).attr({ align: g2.align, "class": "highcharts-" + a2, zIndex: g2.zIndex || 4 }).add(), k2.update = function(b2) {
              d2[{ title: "setTitle", subtitle: "setSubtitle", caption: "setCaption" }[a2]](b2);
            }, this.styledMode || k2.css(g2.style), this[a2] = k2);
          };
          f2.prototype.layOutTitles = function(a2) {
            var b2 = [0, 0, 0], c2 = this.renderer, d2 = this.spacingBox;
            ["title", "subtitle", "caption"].forEach(function(a3) {
              var g3 = this[a3], k2 = this.options[a3], e2 = k2.verticalAlign || "top";
              a3 = "title" === a3 ? -3 : "top" === e2 ? b2[0] + 2 : 0;
              if (g3) {
                if (!this.styledMode)
                  var f3 = k2.style.fontSize;
                f3 = c2.fontMetrics(f3, g3).b;
                g3.css({ width: (k2.width || d2.width + (k2.widthAdjust || 0)) + "px" });
                var t2 = Math.round(g3.getBBox(k2.useHTML).height);
                g3.align(B({ y: "bottom" === e2 ? f3 : a3 + f3, height: t2 }, k2), false, "spacingBox");
                k2.floating || ("top" === e2 ? b2[0] = Math.ceil(b2[0] + t2) : "bottom" === e2 && (b2[2] = Math.ceil(b2[2] + t2)));
              }
            }, this);
            b2[0] && "top" === (this.options.title.verticalAlign || "top") && (b2[0] += this.options.title.margin);
            b2[2] && "bottom" === this.options.caption.verticalAlign && (b2[2] += this.options.caption.margin);
            var g2 = !this.titleOffset || this.titleOffset.join(",") !== b2.join(",");
            this.titleOffset = b2;
            G(this, "afterLayOutTitles");
            !this.isDirtyBox && g2 && (this.isDirtyBox = this.isDirtyLegend = g2, this.hasRendered && H(a2, true) && this.isDirtyBox && this.redraw());
          };
          f2.prototype.getChartSize = function() {
            var a2 = this.options.chart, b2 = a2.width;
            a2 = a2.height;
            var d2 = this.renderTo;
            c(b2) || (this.containerWidth = M(d2, "width"));
            c(a2) || (this.containerHeight = M(d2, "height"));
            this.chartWidth = Math.max(0, b2 || this.containerWidth || 600);
            this.chartHeight = Math.max(0, U(a2, this.chartWidth) || (1 < this.containerHeight ? this.containerHeight : 400));
          };
          f2.prototype.temporaryDisplay = function(a2) {
            var b2 = this.renderTo;
            if (a2)
              for (; b2 && b2.style; )
                b2.hcOrigStyle && (g(b2, b2.hcOrigStyle), delete b2.hcOrigStyle), b2.hcOrigDetached && (n.body.removeChild(b2), b2.hcOrigDetached = false), b2 = b2.parentNode;
            else
              for (; b2 && b2.style; ) {
                n.body.contains(b2) || b2.parentNode || (b2.hcOrigDetached = true, n.body.appendChild(b2));
                if ("none" === M(
                  b2,
                  "display",
                  false
                ) || b2.hcOricDetached)
                  b2.hcOrigStyle = { display: b2.style.display, height: b2.style.height, overflow: b2.style.overflow }, a2 = { display: "block", overflow: "hidden" }, b2 !== this.renderTo && (a2.height = 0), g(b2, a2), b2.offsetWidth || b2.style.setProperty("display", "block", "important");
                b2 = b2.parentNode;
                if (b2 === n.body)
                  break;
              }
          };
          f2.prototype.setClassName = function(a2) {
            this.container.className = "highcharts-container " + (a2 || "");
          };
          f2.prototype.getContainer = function() {
            var a2 = this.options, b2 = a2.chart;
            var c2 = this.renderTo;
            var k2 = S(), e2, f3;
            c2 || (this.renderTo = c2 = b2.renderTo);
            u(c2) && (this.renderTo = c2 = n.getElementById(c2));
            c2 || p(13, true, this);
            var t2 = R(r(c2, "data-highcharts-chart"));
            O(t2) && D[t2] && D[t2].hasRendered && D[t2].destroy();
            r(c2, "data-highcharts-chart", this.index);
            c2.innerHTML = "";
            b2.skipClone || c2.offsetWidth || this.temporaryDisplay();
            this.getChartSize();
            t2 = this.chartWidth;
            var l2 = this.chartHeight;
            g(c2, { overflow: "hidden" });
            this.styledMode || (e2 = B({
              position: "relative",
              overflow: "hidden",
              width: t2 + "px",
              height: l2 + "px",
              textAlign: "left",
              lineHeight: "normal",
              zIndex: 0,
              "-webkit-tap-highlight-color": "rgba(0,0,0,0)",
              userSelect: "none"
            }, b2.style));
            this.container = c2 = d("div", { id: k2 }, e2, c2);
            this._cursor = c2.style.cursor;
            this.renderer = new (z[b2.renderer] || z.Renderer)(c2, t2, l2, null, b2.forExport, a2.exporting && a2.exporting.allowHTML, this.styledMode);
            x(void 0, this);
            this.setClassName(b2.className);
            if (this.styledMode)
              for (f3 in a2.defs)
                this.renderer.definition(a2.defs[f3]);
            else
              this.renderer.setStyle(b2.style);
            this.renderer.chartIndex = this.index;
            G(this, "afterGetContainer");
          };
          f2.prototype.getMargins = function(a2) {
            var b2 = this.spacing, d2 = this.margin, g2 = this.titleOffset;
            this.resetMargins();
            g2[0] && !c(d2[0]) && (this.plotTop = Math.max(this.plotTop, g2[0] + b2[0]));
            g2[2] && !c(d2[2]) && (this.marginBottom = Math.max(this.marginBottom, g2[2] + b2[2]));
            this.legend && this.legend.display && this.legend.adjustMargins(d2, b2);
            G(this, "getMargins");
            a2 || this.getAxisMargins();
          };
          f2.prototype.getAxisMargins = function() {
            var a2 = this, b2 = a2.axisOffset = [0, 0, 0, 0], d2 = a2.colorAxis, g2 = a2.margin, k2 = function(a3) {
              a3.forEach(function(a4) {
                a4.visible && a4.getOffset();
              });
            };
            a2.hasCartesianSeries ? k2(a2.axes) : d2 && d2.length && k2(d2);
            Y.forEach(function(d3, k3) {
              c(g2[k3]) || (a2[d3] += b2[k3]);
            });
            a2.setChartSize();
          };
          f2.prototype.reflow = function(a2) {
            var b2 = this, d2 = b2.options.chart, g2 = b2.renderTo, k2 = c(d2.width) && c(d2.height), f3 = d2.width || M(g2, "width");
            d2 = d2.height || M(g2, "height");
            g2 = a2 ? a2.target : l;
            if (!k2 && !b2.isPrinting && f3 && d2 && (g2 === l || g2 === n)) {
              if (f3 !== b2.containerWidth || d2 !== b2.containerHeight)
                e.clearTimeout(b2.reflowTimeout), b2.reflowTimeout = ba(function() {
                  b2.container && b2.setSize(void 0, void 0, false);
                }, a2 ? 100 : 0);
              b2.containerWidth = f3;
              b2.containerHeight = d2;
            }
          };
          f2.prototype.setReflow = function(a2) {
            var b2 = this;
            false === a2 || this.unbindReflow ? false === a2 && this.unbindReflow && (this.unbindReflow = this.unbindReflow()) : (this.unbindReflow = w(l, "resize", function(a3) {
              b2.options && b2.reflow(a3);
            }), w(this, "destroy", this.unbindReflow));
          };
          f2.prototype.setSize = function(a2, b2, c2) {
            var d2 = this, k2 = d2.renderer;
            d2.isResizing += 1;
            x(c2, d2);
            c2 = k2.globalAnimation;
            d2.oldChartHeight = d2.chartHeight;
            d2.oldChartWidth = d2.chartWidth;
            "undefined" !== typeof a2 && (d2.options.chart.width = a2);
            "undefined" !== typeof b2 && (d2.options.chart.height = b2);
            d2.getChartSize();
            d2.styledMode || (c2 ? I : g)(d2.container, { width: d2.chartWidth + "px", height: d2.chartHeight + "px" }, c2);
            d2.setChartSize(true);
            k2.setSize(d2.chartWidth, d2.chartHeight, c2);
            d2.axes.forEach(function(a3) {
              a3.isDirty = true;
              a3.setScale();
            });
            d2.isDirtyLegend = true;
            d2.isDirtyBox = true;
            d2.layOutTitles();
            d2.getMargins();
            d2.redraw(c2);
            d2.oldChartHeight = null;
            G(d2, "resize");
            ba(function() {
              d2 && G(d2, "endResize", null, function() {
                --d2.isResizing;
              });
            }, v(c2).duration);
          };
          f2.prototype.setChartSize = function(a2) {
            var b2 = this.inverted, c2 = this.renderer, d2 = this.chartWidth, g2 = this.chartHeight, k2 = this.options.chart, e2 = this.spacing, f3 = this.clipOffset, t2, p2, l2, q2;
            this.plotLeft = t2 = Math.round(this.plotLeft);
            this.plotTop = p2 = Math.round(this.plotTop);
            this.plotWidth = l2 = Math.max(0, Math.round(d2 - t2 - this.marginRight));
            this.plotHeight = q2 = Math.max(0, Math.round(g2 - p2 - this.marginBottom));
            this.plotSizeX = b2 ? q2 : l2;
            this.plotSizeY = b2 ? l2 : q2;
            this.plotBorderWidth = k2.plotBorderWidth || 0;
            this.spacingBox = c2.spacingBox = { x: e2[3], y: e2[0], width: d2 - e2[3] - e2[1], height: g2 - e2[0] - e2[2] };
            this.plotBox = c2.plotBox = { x: t2, y: p2, width: l2, height: q2 };
            d2 = 2 * Math.floor(this.plotBorderWidth / 2);
            b2 = Math.ceil(Math.max(d2, f3[3]) / 2);
            c2 = Math.ceil(Math.max(d2, f3[0]) / 2);
            this.clipBox = { x: b2, y: c2, width: Math.floor(this.plotSizeX - Math.max(d2, f3[1]) / 2 - b2), height: Math.max(0, Math.floor(this.plotSizeY - Math.max(d2, f3[2]) / 2 - c2)) };
            a2 || this.axes.forEach(function(a3) {
              a3.setAxisSize();
              a3.setAxisTranslation();
            });
            G(this, "afterSetChartSize", { skipAxes: a2 });
          };
          f2.prototype.resetMargins = function() {
            G(this, "resetMargins");
            var a2 = this, b2 = a2.options.chart;
            ["margin", "spacing"].forEach(function(c2) {
              var d2 = b2[c2], g2 = E(d2) ? d2 : [d2, d2, d2, d2];
              [
                "Top",
                "Right",
                "Bottom",
                "Left"
              ].forEach(function(d3, k2) {
                a2[c2][k2] = H(b2[c2 + d3], g2[k2]);
              });
            });
            Y.forEach(function(b3, c2) {
              a2[b3] = H(a2.margin[c2], a2.spacing[c2]);
            });
            a2.axisOffset = [0, 0, 0, 0];
            a2.clipOffset = [0, 0, 0, 0];
          };
          f2.prototype.drawChartBox = function() {
            var a2 = this.options.chart, b2 = this.renderer, c2 = this.chartWidth, d2 = this.chartHeight, g2 = this.chartBackground, k2 = this.plotBackground, e2 = this.plotBorder, f3 = this.styledMode, t2 = this.plotBGImage, p2 = a2.backgroundColor, l2 = a2.plotBackgroundColor, q2 = a2.plotBackgroundImage, h2, n2 = this.plotLeft, u2 = this.plotTop, r2 = this.plotWidth, m3 = this.plotHeight, w2 = this.plotBox, v2 = this.clipRect, H2 = this.clipBox, B2 = "animate";
            g2 || (this.chartBackground = g2 = b2.rect().addClass("highcharts-background").add(), B2 = "attr");
            if (f3)
              var A2 = h2 = g2.strokeWidth();
            else {
              A2 = a2.borderWidth || 0;
              h2 = A2 + (a2.shadow ? 8 : 0);
              p2 = { fill: p2 || "none" };
              if (A2 || g2["stroke-width"])
                p2.stroke = a2.borderColor, p2["stroke-width"] = A2;
              g2.attr(p2).shadow(a2.shadow);
            }
            g2[B2]({ x: h2 / 2, y: h2 / 2, width: c2 - h2 - A2 % 2, height: d2 - h2 - A2 % 2, r: a2.borderRadius });
            B2 = "animate";
            k2 || (B2 = "attr", this.plotBackground = k2 = b2.rect().addClass("highcharts-plot-background").add());
            k2[B2](w2);
            f3 || (k2.attr({ fill: l2 || "none" }).shadow(a2.plotShadow), q2 && (t2 ? (q2 !== t2.attr("href") && t2.attr("href", q2), t2.animate(w2)) : this.plotBGImage = b2.image(q2, n2, u2, r2, m3).add()));
            v2 ? v2.animate({ width: H2.width, height: H2.height }) : this.clipRect = b2.clipRect(H2);
            B2 = "animate";
            e2 || (B2 = "attr", this.plotBorder = e2 = b2.rect().addClass("highcharts-plot-border").attr({ zIndex: 1 }).add());
            f3 || e2.attr({ stroke: a2.plotBorderColor, "stroke-width": a2.plotBorderWidth || 0, fill: "none" });
            e2[B2](e2.crisp({ x: n2, y: u2, width: r2, height: m3 }, -e2.strokeWidth()));
            this.isDirtyBox = false;
            G(this, "afterDrawChartBox");
          };
          f2.prototype.propFromSeries = function() {
            var a2 = this, b2 = a2.options.chart, c2, d2 = a2.options.series, g2, k2;
            ["inverted", "angular", "polar"].forEach(function(e2) {
              c2 = m2.seriesTypes[b2.type || b2.defaultSeriesType];
              k2 = b2[e2] || c2 && c2.prototype[e2];
              for (g2 = d2 && d2.length; !k2 && g2--; )
                (c2 = m2.seriesTypes[d2[g2].type]) && c2.prototype[e2] && (k2 = true);
              a2[e2] = k2;
            });
          };
          f2.prototype.linkSeries = function() {
            var a2 = this, b2 = a2.series;
            b2.forEach(function(a3) {
              a3.linkedSeries.length = 0;
            });
            b2.forEach(function(b3) {
              var c2 = b3.options.linkedTo;
              u(c2) && (c2 = ":previous" === c2 ? a2.series[b3.index - 1] : a2.get(c2)) && c2.linkedParent !== b3 && (c2.linkedSeries.push(b3), b3.linkedParent = c2, c2.enabledDataSorting && b3.setDataSortingOptions(), b3.visible = H(b3.options.visible, c2.options.visible, b3.visible));
            });
            G(this, "afterLinkSeries");
          };
          f2.prototype.renderSeries = function() {
            this.series.forEach(function(a2) {
              a2.translate();
              a2.render();
            });
          };
          f2.prototype.renderLabels = function() {
            var a2 = this, b2 = a2.options.labels;
            b2.items && b2.items.forEach(function(c2) {
              var d2 = B(b2.style, c2.style), g2 = R(d2.left) + a2.plotLeft, k2 = R(d2.top) + a2.plotTop + 12;
              delete d2.left;
              delete d2.top;
              a2.renderer.text(c2.html, g2, k2).attr({ zIndex: 2 }).css(d2).add();
            });
          };
          f2.prototype.render = function() {
            var a2 = this.axes, b2 = this.colorAxis, c2 = this.renderer, d2 = this.options, g2 = 0, k2 = function(a3) {
              a3.forEach(function(a4) {
                a4.visible && a4.render();
              });
            };
            this.setTitle();
            this.legend = new F(this, d2.legend);
            this.getStacks && this.getStacks();
            this.getMargins(true);
            this.setChartSize();
            d2 = this.plotWidth;
            a2.some(function(a3) {
              if (a3.horiz && a3.visible && a3.options.labels.enabled && a3.series.length)
                return g2 = 21, true;
            });
            var e2 = this.plotHeight = Math.max(this.plotHeight - g2, 0);
            a2.forEach(function(a3) {
              a3.setScale();
            });
            this.getAxisMargins();
            var f3 = 1.1 < d2 / this.plotWidth;
            var t2 = 1.05 < e2 / this.plotHeight;
            if (f3 || t2)
              a2.forEach(function(a3) {
                (a3.horiz && f3 || !a3.horiz && t2) && a3.setTickInterval(true);
              }), this.getMargins();
            this.drawChartBox();
            this.hasCartesianSeries ? k2(a2) : b2 && b2.length && k2(b2);
            this.seriesGroup || (this.seriesGroup = c2.g("series-group").attr({ zIndex: 3 }).add());
            this.renderSeries();
            this.renderLabels();
            this.addCredits();
            this.setResponsive && this.setResponsive();
            this.updateContainerScaling();
            this.hasRendered = true;
          };
          f2.prototype.addCredits = function(a2) {
            var c2 = this, d2 = b(true, this.options.credits, a2);
            d2.enabled && !this.credits && (this.credits = this.renderer.text(d2.text + (this.mapCredits || ""), 0, 0).addClass("highcharts-credits").on("click", function() {
              d2.href && (l.location.href = d2.href);
            }).attr({ align: d2.position.align, zIndex: 8 }), c2.styledMode || this.credits.css(d2.style), this.credits.add().align(d2.position), this.credits.update = function(a3) {
              c2.credits = c2.credits.destroy();
              c2.addCredits(a3);
            });
          };
          f2.prototype.updateContainerScaling = function() {
            var a2 = this.container;
            if (2 < a2.offsetWidth && 2 < a2.offsetHeight && a2.getBoundingClientRect) {
              var b2 = a2.getBoundingClientRect(), c2 = b2.width / a2.offsetWidth;
              a2 = b2.height / a2.offsetHeight;
              1 !== c2 || 1 !== a2 ? this.containerScaling = { scaleX: c2, scaleY: a2 } : delete this.containerScaling;
            }
          };
          f2.prototype.destroy = function() {
            var b2 = this, c2 = b2.axes, d2 = b2.series, g2 = b2.container, k2, e2 = g2 && g2.parentNode;
            G(b2, "destroy");
            b2.renderer.forExport ? q(D, b2) : D[b2.index] = void 0;
            z.chartCount--;
            b2.renderTo.removeAttribute("data-highcharts-chart");
            Z(b2);
            for (k2 = c2.length; k2--; )
              c2[k2] = c2[k2].destroy();
            this.scroller && this.scroller.destroy && this.scroller.destroy();
            for (k2 = d2.length; k2--; )
              d2[k2] = d2[k2].destroy();
            "title subtitle chartBackground plotBackground plotBGImage plotBorder seriesGroup clipRect credits pointer rangeSelector legend resetZoomButton tooltip renderer".split(" ").forEach(function(a2) {
              var c3 = b2[a2];
              c3 && c3.destroy && (b2[a2] = c3.destroy());
            });
            g2 && (g2.innerHTML = "", Z(g2), e2 && a(g2));
            t(b2, function(a2, c3) {
              delete b2[c3];
            });
          };
          f2.prototype.firstRender = function() {
            var a2 = this, b2 = a2.options;
            if (!a2.isReadyToRender || a2.isReadyToRender()) {
              a2.getContainer();
              a2.resetMargins();
              a2.setChartSize();
              a2.propFromSeries();
              a2.getAxes();
              (T(b2.series) ? b2.series : []).forEach(function(b3) {
                a2.initSeries(b3);
              });
              a2.linkSeries();
              a2.setSeriesData();
              G(a2, "beforeRender");
              C && (a2.pointer = z.hasTouch || !l.PointerEvent && !l.MSPointerEvent ? new C(a2, b2) : new L(a2, b2));
              a2.render();
              if (!a2.renderer.imgCount && !a2.hasLoaded)
                a2.onload();
              a2.temporaryDisplay(true);
            }
          };
          f2.prototype.onload = function() {
            this.callbacks.concat([this.callback]).forEach(function(a2) {
              a2 && "undefined" !== typeof this.index && a2.apply(this, [this]);
            }, this);
            G(this, "load");
            G(this, "render");
            c(this.index) && this.setReflow(this.options.chart.reflow);
            this.hasLoaded = true;
          };
          return f2;
        }();
        W.prototype.callbacks = [];
        z.chart = function(a2, b2, c2) {
          return new W(a2, b2, c2);
        };
        return z.Chart = W;
      });
      N(m, "Extensions/ScrollablePlotArea.js", [m["Core/Animation/AnimationUtilities.js"], m["Core/Chart/Chart.js"], m["Core/Globals.js"], m["Core/Utilities.js"]], function(f, h, m2, z) {
        var F = f.stop, L = z.addEvent, K = z.createElement, C = z.pick;
        "";
        L(h, "afterSetChartSize", function(f2) {
          var e = this.options.chart.scrollablePlotArea, h2 = e && e.minWidth;
          e = e && e.minHeight;
          if (!this.renderer.forExport) {
            if (h2) {
              if (this.scrollablePixelsX = h2 = Math.max(0, h2 - this.chartWidth)) {
                this.plotWidth += h2;
                this.inverted ? (this.clipBox.height += h2, this.plotBox.height += h2) : (this.clipBox.width += h2, this.plotBox.width += h2);
                var v = { 1: { name: "right", value: h2 } };
              }
            } else
              e && (this.scrollablePixelsY = h2 = Math.max(0, e - this.chartHeight)) && (this.plotHeight += h2, this.inverted ? (this.clipBox.width += h2, this.plotBox.width += h2) : (this.clipBox.height += h2, this.plotBox.height += h2), v = { 2: { name: "bottom", value: h2 } });
            v && !f2.skipAxes && this.axes.forEach(function(e2) {
              v[e2.side] ? e2.getPlotLinePath = function() {
                var f3 = v[e2.side].name, h3 = this[f3];
                this[f3] = h3 - v[e2.side].value;
                var l = m2.Axis.prototype.getPlotLinePath.apply(this, arguments);
                this[f3] = h3;
                return l;
              } : (e2.setAxisSize(), e2.setAxisTranslation());
            });
          }
        });
        L(h, "render", function() {
          this.scrollablePixelsX || this.scrollablePixelsY ? (this.setUpScrolling && this.setUpScrolling(), this.applyFixed()) : this.fixedDiv && this.applyFixed();
        });
        h.prototype.setUpScrolling = function() {
          var f2 = this, e = { WebkitOverflowScrolling: "touch", overflowX: "hidden", overflowY: "hidden" };
          this.scrollablePixelsX && (e.overflowX = "auto");
          this.scrollablePixelsY && (e.overflowY = "auto");
          this.scrollingParent = K("div", { className: "highcharts-scrolling-parent" }, { position: "relative" }, this.renderTo);
          this.scrollingContainer = K("div", { className: "highcharts-scrolling" }, e, this.scrollingParent);
          L(this.scrollingContainer, "scroll", function() {
            f2.pointer && delete f2.pointer.chartPosition;
          });
          this.innerContainer = K(
            "div",
            { className: "highcharts-inner-container" },
            null,
            this.scrollingContainer
          );
          this.innerContainer.appendChild(this.container);
          this.setUpScrolling = null;
        };
        h.prototype.moveFixedElements = function() {
          var f2 = this.container, e = this.fixedRenderer, h2 = ".highcharts-contextbutton .highcharts-credits .highcharts-legend .highcharts-legend-checkbox .highcharts-navigator-series .highcharts-navigator-xaxis .highcharts-navigator-yaxis .highcharts-navigator .highcharts-reset-zoom .highcharts-scrollbar .highcharts-subtitle .highcharts-title".split(" "), m3;
          this.scrollablePixelsX && !this.inverted ? m3 = ".highcharts-yaxis" : this.scrollablePixelsX && this.inverted ? m3 = ".highcharts-xaxis" : this.scrollablePixelsY && !this.inverted ? m3 = ".highcharts-xaxis" : this.scrollablePixelsY && this.inverted && (m3 = ".highcharts-yaxis");
          h2.push(m3, m3 + "-labels");
          h2.forEach(function(h3) {
            [].forEach.call(f2.querySelectorAll(h3), function(f3) {
              (f3.namespaceURI === e.SVG_NS ? e.box : e.box.parentNode).appendChild(f3);
              f3.style.pointerEvents = "auto";
            });
          });
        };
        h.prototype.applyFixed = function() {
          var f2, e, h2 = !this.fixedDiv, v = this.options.chart.scrollablePlotArea;
          h2 ? (this.fixedDiv = K("div", { className: "highcharts-fixed" }, { position: "absolute", overflow: "hidden", pointerEvents: "none", zIndex: 2, top: 0 }, null, true), null === (f2 = this.scrollingContainer) || void 0 === f2 ? void 0 : f2.parentNode.insertBefore(this.fixedDiv, this.scrollingContainer), this.renderTo.style.overflow = "visible", this.fixedRenderer = f2 = new m2.Renderer(this.fixedDiv, this.chartWidth, this.chartHeight, null === (e = this.options.chart) || void 0 === e ? void 0 : e.style), this.scrollableMask = f2.path().attr({ fill: this.options.chart.backgroundColor || "#fff", "fill-opacity": C(v.opacity, 0.85), zIndex: -1 }).addClass("highcharts-scrollable-mask").add(), this.moveFixedElements(), L(this, "afterShowResetZoom", this.moveFixedElements), L(this, "afterLayOutTitles", this.moveFixedElements)) : this.fixedRenderer.setSize(this.chartWidth, this.chartHeight);
          e = this.chartWidth + (this.scrollablePixelsX || 0);
          f2 = this.chartHeight + (this.scrollablePixelsY || 0);
          F(this.container);
          this.container.style.width = e + "px";
          this.container.style.height = f2 + "px";
          this.renderer.boxWrapper.attr({
            width: e,
            height: f2,
            viewBox: [0, 0, e, f2].join(" ")
          });
          this.chartBackground.attr({ width: e, height: f2 });
          this.scrollingContainer.style.height = this.chartHeight + "px";
          h2 && (v.scrollPositionX && (this.scrollingContainer.scrollLeft = this.scrollablePixelsX * v.scrollPositionX), v.scrollPositionY && (this.scrollingContainer.scrollTop = this.scrollablePixelsY * v.scrollPositionY));
          f2 = this.axisOffset;
          h2 = this.plotTop - f2[0] - 1;
          v = this.plotLeft - f2[3] - 1;
          e = this.plotTop + this.plotHeight + f2[2] + 1;
          f2 = this.plotLeft + this.plotWidth + f2[1] + 1;
          var x = this.plotLeft + this.plotWidth - (this.scrollablePixelsX || 0), D = this.plotTop + this.plotHeight - (this.scrollablePixelsY || 0);
          h2 = this.scrollablePixelsX ? [["M", 0, h2], ["L", this.plotLeft - 1, h2], ["L", this.plotLeft - 1, e], ["L", 0, e], ["Z"], ["M", x, h2], ["L", this.chartWidth, h2], ["L", this.chartWidth, e], ["L", x, e], ["Z"]] : this.scrollablePixelsY ? [["M", v, 0], ["L", v, this.plotTop - 1], ["L", f2, this.plotTop - 1], ["L", f2, 0], ["Z"], ["M", v, D], ["L", v, this.chartHeight], ["L", f2, this.chartHeight], ["L", f2, D], ["Z"]] : [["M", 0, 0]];
          "adjustHeight" !== this.redrawTrigger && this.scrollableMask.attr({ d: h2 });
        };
      });
      N(m, "Core/Axis/StackingAxis.js", [m["Core/Animation/AnimationUtilities.js"], m["Core/Utilities.js"]], function(f, h) {
        var m2 = f.getDeferredAnimation, z = h.addEvent, F = h.destroyObjectProperties, L = h.fireEvent, K = h.objectEach, C = h.pick, y = function() {
          function e(e2) {
            this.oldStacks = {};
            this.stacks = {};
            this.stacksTouched = 0;
            this.axis = e2;
          }
          e.prototype.buildStacks = function() {
            var e2 = this.axis, f2 = e2.series, h2 = C(e2.options.reversedStacks, true), m3 = f2.length, n;
            if (!e2.isXAxis) {
              this.usePercentage = false;
              for (n = m3; n--; ) {
                var l = f2[h2 ? n : m3 - n - 1];
                l.setStackedPoints();
                l.setGroupedPoints();
              }
              for (n = 0; n < m3; n++)
                f2[n].modifyStacks();
              L(e2, "afterBuildStacks");
            }
          };
          e.prototype.cleanStacks = function() {
            if (!this.axis.isXAxis) {
              if (this.oldStacks)
                var e2 = this.stacks = this.oldStacks;
              K(e2, function(e3) {
                K(e3, function(e4) {
                  e4.cumulative = e4.total;
                });
              });
            }
          };
          e.prototype.resetStacks = function() {
            var e2 = this, f2 = e2.stacks;
            e2.axis.isXAxis || K(f2, function(f3) {
              K(f3, function(h2, n) {
                h2.touched < e2.stacksTouched ? (h2.destroy(), delete f3[n]) : (h2.total = null, h2.cumulative = null);
              });
            });
          };
          e.prototype.renderStackTotals = function() {
            var e2 = this.axis, f2 = e2.chart, h2 = f2.renderer, D = this.stacks;
            e2 = m2(f2, e2.options.stackLabels.animation);
            var n = this.stackTotalGroup = this.stackTotalGroup || h2.g("stack-labels").attr({ visibility: "visible", zIndex: 6, opacity: 0 }).add();
            n.translate(f2.plotLeft, f2.plotTop);
            K(D, function(e3) {
              K(e3, function(e4) {
                e4.render(n);
              });
            });
            n.animate({ opacity: 1 }, e2);
          };
          return e;
        }();
        return function() {
          function e() {
          }
          e.compose = function(f2) {
            z(f2, "init", e.onInit);
            z(f2, "destroy", e.onDestroy);
          };
          e.onDestroy = function() {
            var e2 = this.stacking;
            if (e2) {
              var f2 = e2.stacks;
              K(f2, function(e3, h2) {
                F(e3);
                f2[h2] = null;
              });
              e2 && e2.stackTotalGroup && e2.stackTotalGroup.destroy();
            }
          };
          e.onInit = function() {
            this.stacking || (this.stacking = new y(this));
          };
          return e;
        }();
      });
      N(m, "Mixins/LegendSymbol.js", [m["Core/Globals.js"], m["Core/Utilities.js"]], function(f, h) {
        var m2 = h.merge, z = h.pick;
        return f.LegendSymbolMixin = {
          drawRectangle: function(f2, h2) {
            var m3 = f2.symbolHeight, C = f2.options.squareSymbol;
            h2.legendSymbol = this.chart.renderer.rect(C ? (f2.symbolWidth - m3) / 2 : 0, f2.baseline - m3 + 1, C ? m3 : f2.symbolWidth, m3, z(f2.options.symbolRadius, m3 / 2)).addClass("highcharts-point").attr({ zIndex: 3 }).add(h2.legendGroup);
          },
          drawLineMarker: function(f2) {
            var h2 = this.options, F = h2.marker, C = f2.symbolWidth, y = f2.symbolHeight, e = y / 2, I = this.chart.renderer, v = this.legendGroup;
            f2 = f2.baseline - Math.round(0.3 * f2.fontMetrics.b);
            var x = {};
            this.chart.styledMode || (x = { "stroke-width": h2.lineWidth || 0 }, h2.dashStyle && (x.dashstyle = h2.dashStyle));
            this.legendLine = I.path([["M", 0, f2], ["L", C, f2]]).addClass("highcharts-graph").attr(x).add(v);
            F && false !== F.enabled && C && (h2 = Math.min(z(F.radius, e), e), 0 === this.symbol.indexOf("url") && (F = m2(F, { width: y, height: y }), h2 = 0), this.legendSymbol = F = I.symbol(this.symbol, C / 2 - h2, f2 - h2, 2 * h2, 2 * h2, F).addClass("highcharts-point").add(v), F.isMarker = true);
          }
        };
      });
      N(m, "Core/Series/CartesianSeries.js", [m["Core/Animation/AnimationUtilities.js"], m["Core/Series/Series.js"], m["Core/Globals.js"], m["Mixins/LegendSymbol.js"], m["Core/Options.js"], m["Core/Series/Point.js"], m["Core/Renderer/SVG/SVGElement.js"], m["Core/Utilities.js"]], function(f, h, m2, z, F, L, K, C) {
        var y = f.animObject, e = F.defaultOptions, I = C.addEvent, v = C.arrayMax, x = C.arrayMin, D = C.clamp, n = C.correctFloat, l = C.defined, J = C.erase, w = C.error, r = C.extend, d = C.find, g = C.fireEvent, c = C.getNestedProperty, a = C.isArray, q = C.isFunction, p = C.isNumber, B = C.isString, A = C.merge, G = C.objectEach, M = C.pick, T = C.removeEvent, Q = C.splat, O = C.syncTimeout;
        "";
        var E = h.seriesTypes, u = m2.win;
        f = h.seriesType("line", void 0, { lineWidth: 2, allowPointSelect: false, crisp: true, showCheckbox: false, animation: { duration: 1e3 }, events: {}, marker: { enabledThreshold: 2, lineColor: "#ffffff", lineWidth: 0, radius: 4, states: { normal: { animation: true }, hover: {
          animation: { duration: 50 },
          enabled: true,
          radiusPlus: 2,
          lineWidthPlus: 1
        }, select: { fillColor: "#cccccc", lineColor: "#000000", lineWidth: 2 } } }, point: { events: {} }, dataLabels: { animation: {}, align: "center", defer: true, formatter: function() {
          var a2 = this.series.chart.numberFormatter;
          return "number" !== typeof this.y ? "" : a2(this.y, -1);
        }, padding: 5, style: { fontSize: "11px", fontWeight: "bold", color: "contrast", textOutline: "1px contrast" }, verticalAlign: "bottom", x: 0, y: 0 }, cropThreshold: 300, opacity: 1, pointRange: 0, softThreshold: true, states: { normal: { animation: true }, hover: {
          animation: { duration: 50 },
          lineWidthPlus: 1,
          marker: {},
          halo: { size: 10, opacity: 0.25 }
        }, select: { animation: { duration: 0 } }, inactive: { animation: { duration: 50 }, opacity: 0.2 } }, stickyTracking: true, turboThreshold: 1e3, findNearestPointBy: "x" }, { axisTypes: ["xAxis", "yAxis"], coll: "series", colorCounter: 0, cropShoulder: 1, directTouch: false, isCartesian: true, parallelArrays: ["x", "y"], pointClass: L, requireSorting: true, sorted: true, init: function(a2, c2) {
          g(this, "init", { options: c2 });
          var b = this, d2 = a2.series, k;
          this.eventOptions = this.eventOptions || {};
          this.eventsToUnbind = [];
          b.chart = a2;
          b.options = c2 = b.setOptions(c2);
          b.linkedSeries = [];
          b.bindAxes();
          r(b, { name: c2.name, state: "", visible: false !== c2.visible, selected: true === c2.selected });
          var e2 = c2.events;
          G(e2, function(a3, c3) {
            q(a3) && b.eventOptions[c3] !== a3 && (q(b.eventOptions[c3]) && T(b, c3, b.eventOptions[c3]), b.eventOptions[c3] = a3, I(b, c3, a3));
          });
          if (e2 && e2.click || c2.point && c2.point.events && c2.point.events.click || c2.allowPointSelect)
            a2.runTrackerClick = true;
          b.getColor();
          b.getSymbol();
          b.parallelArrays.forEach(function(a3) {
            b[a3 + "Data"] || (b[a3 + "Data"] = []);
          });
          b.isCartesian && (a2.hasCartesianSeries = true);
          d2.length && (k = d2[d2.length - 1]);
          b._i = M(k && k._i, -1) + 1;
          b.opacity = b.options.opacity;
          a2.orderSeries(this.insert(d2));
          c2.dataSorting && c2.dataSorting.enabled ? b.setDataSortingOptions() : b.points || b.data || b.setData(c2.data, false);
          g(this, "afterInit");
        }, is: function(a2) {
          return E[a2] && this instanceof E[a2];
        }, insert: function(a2) {
          var b = this.options.index, c2;
          if (p(b)) {
            for (c2 = a2.length; c2--; )
              if (b >= M(a2[c2].options.index, a2[c2]._i)) {
                a2.splice(c2 + 1, 0, this);
                break;
              }
            -1 === c2 && a2.unshift(this);
            c2 += 1;
          } else
            a2.push(this);
          return M(c2, a2.length - 1);
        }, bindAxes: function() {
          var a2 = this, c2 = a2.options, d2 = a2.chart, e2;
          g(this, "bindAxes", null, function() {
            (a2.axisTypes || []).forEach(function(b) {
              d2[b].forEach(function(d3) {
                e2 = d3.options;
                if (c2[b] === e2.index || "undefined" !== typeof c2[b] && c2[b] === e2.id || "undefined" === typeof c2[b] && 0 === e2.index)
                  a2.insert(d3.series), a2[b] = d3, d3.isDirty = true;
              });
              a2[b] || a2.optionalAxis === b || w(18, true, d2);
            });
          });
          g(this, "afterBindAxes");
        }, updateParallelArrays: function(a2, c2) {
          var b = a2.series, d2 = arguments, g2 = p(c2) ? function(d3) {
            var g3 = "y" === d3 && b.toYData ? b.toYData(a2) : a2[d3];
            b[d3 + "Data"][c2] = g3;
          } : function(a3) {
            Array.prototype[c2].apply(b[a3 + "Data"], Array.prototype.slice.call(d2, 2));
          };
          b.parallelArrays.forEach(g2);
        }, hasData: function() {
          return this.visible && "undefined" !== typeof this.dataMax && "undefined" !== typeof this.dataMin || this.visible && this.yData && 0 < this.yData.length;
        }, autoIncrement: function() {
          var a2 = this.options, c2 = this.xIncrement, d2, g2 = a2.pointIntervalUnit, e2 = this.chart.time;
          c2 = M(c2, a2.pointStart, 0);
          this.pointInterval = d2 = M(this.pointInterval, a2.pointInterval, 1);
          g2 && (a2 = new e2.Date(c2), "day" === g2 ? e2.set("Date", a2, e2.get("Date", a2) + d2) : "month" === g2 ? e2.set(
            "Month",
            a2,
            e2.get("Month", a2) + d2
          ) : "year" === g2 && e2.set("FullYear", a2, e2.get("FullYear", a2) + d2), d2 = a2.getTime() - c2);
          this.xIncrement = c2 + d2;
          return c2;
        }, setDataSortingOptions: function() {
          var a2 = this.options;
          r(this, { requireSorting: false, sorted: false, enabledDataSorting: true, allowDG: false });
          l(a2.pointRange) || (a2.pointRange = 1);
        }, setOptions: function(a2) {
          var b = this.chart, c2 = b.options, d2 = c2.plotOptions, f2 = b.userOptions || {};
          a2 = A(a2);
          b = b.styledMode;
          var p2 = { plotOptions: d2, userOptions: a2 };
          g(this, "setOptions", p2);
          var h2 = p2.plotOptions[this.type], q2 = f2.plotOptions || {};
          this.userOptions = p2.userOptions;
          f2 = A(h2, d2.series, f2.plotOptions && f2.plotOptions[this.type], a2);
          this.tooltipOptions = A(e.tooltip, e.plotOptions.series && e.plotOptions.series.tooltip, e.plotOptions[this.type].tooltip, c2.tooltip.userOptions, d2.series && d2.series.tooltip, d2[this.type].tooltip, a2.tooltip);
          this.stickyTracking = M(a2.stickyTracking, q2[this.type] && q2[this.type].stickyTracking, q2.series && q2.series.stickyTracking, this.tooltipOptions.shared && !this.noSharedTooltip ? true : f2.stickyTracking);
          null === h2.marker && delete f2.marker;
          this.zoneAxis = f2.zoneAxis;
          c2 = this.zones = (f2.zones || []).slice();
          !f2.negativeColor && !f2.negativeFillColor || f2.zones || (d2 = { value: f2[this.zoneAxis + "Threshold"] || f2.threshold || 0, className: "highcharts-negative" }, b || (d2.color = f2.negativeColor, d2.fillColor = f2.negativeFillColor), c2.push(d2));
          c2.length && l(c2[c2.length - 1].value) && c2.push(b ? {} : { color: this.color, fillColor: this.fillColor });
          g(this, "afterSetOptions", { options: f2 });
          return f2;
        }, getName: function() {
          return M(this.options.name, "Series " + (this.index + 1));
        }, getCyclic: function(a2, c2, d2) {
          var b = this.chart, g2 = this.userOptions, k = a2 + "Index", e2 = a2 + "Counter", f2 = d2 ? d2.length : M(b.options.chart[a2 + "Count"], b[a2 + "Count"]);
          if (!c2) {
            var p2 = M(g2[k], g2["_" + k]);
            l(p2) || (b.series.length || (b[e2] = 0), g2["_" + k] = p2 = b[e2] % f2, b[e2] += 1);
            d2 && (c2 = d2[p2]);
          }
          "undefined" !== typeof p2 && (this[k] = p2);
          this[a2] = c2;
        }, getColor: function() {
          this.chart.styledMode ? this.getCyclic("color") : this.options.colorByPoint ? this.options.color = null : this.getCyclic("color", this.options.color || e.plotOptions[this.type].color, this.chart.options.colors);
        }, getPointsCollection: function() {
          return (this.hasGroupedData ? this.points : this.data) || [];
        }, getSymbol: function() {
          this.getCyclic("symbol", this.options.marker.symbol, this.chart.options.symbols);
        }, findPointIndex: function(a2, c2) {
          var b = a2.id, g2 = a2.x, k = this.points, e2, f2 = this.options.dataSorting;
          if (b)
            var l2 = this.chart.get(b);
          else if (this.linkedParent || this.enabledDataSorting) {
            var h2 = f2 && f2.matchByName ? "name" : "index";
            l2 = d(k, function(b2) {
              return !b2.touched && b2[h2] === a2[h2];
            });
            if (!l2)
              return;
          }
          if (l2) {
            var q2 = l2 && l2.index;
            "undefined" !== typeof q2 && (e2 = true);
          }
          "undefined" === typeof q2 && p(g2) && (q2 = this.xData.indexOf(
            g2,
            c2
          ));
          -1 !== q2 && "undefined" !== typeof q2 && this.cropped && (q2 = q2 >= this.cropStart ? q2 - this.cropStart : q2);
          !e2 && k[q2] && k[q2].touched && (q2 = void 0);
          return q2;
        }, drawLegendSymbol: z.drawLineMarker, updateData: function(a2, c2) {
          var b = this.options, d2 = b.dataSorting, g2 = this.points, k = [], e2, f2, h2, q2 = this.requireSorting, n2 = a2.length === g2.length, u2 = true;
          this.xIncrement = null;
          a2.forEach(function(a3, c3) {
            var f3 = l(a3) && this.pointClass.prototype.optionsToObject.call({ series: this }, a3) || {};
            var t = f3.x;
            if (f3.id || p(t)) {
              if (t = this.findPointIndex(f3, h2), -1 === t || "undefined" === typeof t ? k.push(a3) : g2[t] && a3 !== b.data[t] ? (g2[t].update(a3, false, null, false), g2[t].touched = true, q2 && (h2 = t + 1)) : g2[t] && (g2[t].touched = true), !n2 || c3 !== t || d2 && d2.enabled || this.hasDerivedData)
                e2 = true;
            } else
              k.push(a3);
          }, this);
          if (e2)
            for (a2 = g2.length; a2--; )
              (f2 = g2[a2]) && !f2.touched && f2.remove && f2.remove(false, c2);
          else
            !n2 || d2 && d2.enabled ? u2 = false : (a2.forEach(function(a3, b2) {
              g2[b2].update && a3 !== g2[b2].y && g2[b2].update(a3, false, null, false);
            }), k.length = 0);
          g2.forEach(function(a3) {
            a3 && (a3.touched = false);
          });
          if (!u2)
            return false;
          k.forEach(function(a3) {
            this.addPoint(a3, false, null, null, false);
          }, this);
          null === this.xIncrement && this.xData && this.xData.length && (this.xIncrement = v(this.xData), this.autoIncrement());
          return true;
        }, setData: function(b, c2, d2, g2) {
          var k = this, e2 = k.points, f2 = e2 && e2.length || 0, t, l2 = k.options, h2 = k.chart, q2 = l2.dataSorting, n2 = null, u2 = k.xAxis;
          n2 = l2.turboThreshold;
          var r2 = this.xData, m3 = this.yData, A2 = (t = k.pointArrayMap) && t.length, v2 = l2.keys, E2 = 0, H = 1, O2;
          b = b || [];
          t = b.length;
          c2 = M(c2, true);
          q2 && q2.enabled && (b = this.sortData(b));
          false !== g2 && t && f2 && !k.cropped && !k.hasGroupedData && k.visible && !k.isSeriesBoosting && (O2 = this.updateData(b, d2));
          if (!O2) {
            k.xIncrement = null;
            k.colorCounter = 0;
            this.parallelArrays.forEach(function(a2) {
              k[a2 + "Data"].length = 0;
            });
            if (n2 && t > n2)
              if (n2 = k.getFirstValidPoint(b), p(n2))
                for (d2 = 0; d2 < t; d2++)
                  r2[d2] = this.autoIncrement(), m3[d2] = b[d2];
              else if (a(n2))
                if (A2)
                  for (d2 = 0; d2 < t; d2++)
                    g2 = b[d2], r2[d2] = g2[0], m3[d2] = g2.slice(1, A2 + 1);
                else
                  for (v2 && (E2 = v2.indexOf("x"), H = v2.indexOf("y"), E2 = 0 <= E2 ? E2 : 0, H = 0 <= H ? H : 1), d2 = 0; d2 < t; d2++)
                    g2 = b[d2], r2[d2] = g2[E2], m3[d2] = g2[H];
              else
                w(12, false, h2);
            else
              for (d2 = 0; d2 < t; d2++)
                "undefined" !== typeof b[d2] && (g2 = { series: k }, k.pointClass.prototype.applyOptions.apply(g2, [b[d2]]), k.updateParallelArrays(
                  g2,
                  d2
                ));
            m3 && B(m3[0]) && w(14, true, h2);
            k.data = [];
            k.options.data = k.userOptions.data = b;
            for (d2 = f2; d2--; )
              e2[d2] && e2[d2].destroy && e2[d2].destroy();
            u2 && (u2.minRange = u2.userMinRange);
            k.isDirty = h2.isDirtyBox = true;
            k.isDirtyData = !!e2;
            d2 = false;
          }
          "point" === l2.legendType && (this.processData(), this.generatePoints());
          c2 && h2.redraw(d2);
        }, sortData: function(a2) {
          var b = this, d2 = b.options.dataSorting.sortKey || "y", g2 = function(a3, b2) {
            return l(b2) && a3.pointClass.prototype.optionsToObject.call({ series: a3 }, b2) || {};
          };
          a2.forEach(function(c2, d3) {
            a2[d3] = g2(b, c2);
            a2[d3].index = d3;
          }, this);
          a2.concat().sort(function(a3, b2) {
            a3 = c(d2, a3);
            b2 = c(d2, b2);
            return b2 < a3 ? -1 : b2 > a3 ? 1 : 0;
          }).forEach(function(a3, b2) {
            a3.x = b2;
          }, this);
          b.linkedSeries && b.linkedSeries.forEach(function(b2) {
            var c2 = b2.options, d3 = c2.data;
            c2.dataSorting && c2.dataSorting.enabled || !d3 || (d3.forEach(function(c3, k) {
              d3[k] = g2(b2, c3);
              a2[k] && (d3[k].x = a2[k].x, d3[k].index = k);
            }), b2.setData(d3, false));
          });
          return a2;
        }, getProcessedData: function(a2) {
          var b = this.xData, c2 = this.yData, d2 = b.length;
          var g2 = 0;
          var e2 = this.xAxis, f2 = this.options;
          var p2 = f2.cropThreshold;
          var l2 = a2 || this.getExtremesFromAll || f2.getExtremesFromAll, h2 = this.isCartesian;
          a2 = e2 && e2.val2lin;
          f2 = !(!e2 || !e2.logarithmic);
          var q2 = this.requireSorting;
          if (e2) {
            e2 = e2.getExtremes();
            var n2 = e2.min;
            var u2 = e2.max;
          }
          if (h2 && this.sorted && !l2 && (!p2 || d2 > p2 || this.forceCrop)) {
            if (b[d2 - 1] < n2 || b[0] > u2)
              b = [], c2 = [];
            else if (this.yData && (b[0] < n2 || b[d2 - 1] > u2)) {
              g2 = this.cropData(this.xData, this.yData, n2, u2);
              b = g2.xData;
              c2 = g2.yData;
              g2 = g2.start;
              var r2 = true;
            }
          }
          for (p2 = b.length || 1; --p2; )
            if (d2 = f2 ? a2(b[p2]) - a2(b[p2 - 1]) : b[p2] - b[p2 - 1], 0 < d2 && ("undefined" === typeof m3 || d2 < m3))
              var m3 = d2;
            else
              0 > d2 && q2 && (w(15, false, this.chart), q2 = false);
          return {
            xData: b,
            yData: c2,
            cropped: r2,
            cropStart: g2,
            closestPointRange: m3
          };
        }, processData: function(a2) {
          var b = this.xAxis;
          if (this.isCartesian && !this.isDirty && !b.isDirty && !this.yAxis.isDirty && !a2)
            return false;
          a2 = this.getProcessedData();
          this.cropped = a2.cropped;
          this.cropStart = a2.cropStart;
          this.processedXData = a2.xData;
          this.processedYData = a2.yData;
          this.closestPointRange = this.basePointRange = a2.closestPointRange;
        }, cropData: function(a2, c2, d2, g2, e2) {
          var b = a2.length, k = 0, f2 = b, p2;
          e2 = M(e2, this.cropShoulder);
          for (p2 = 0; p2 < b; p2++)
            if (a2[p2] >= d2) {
              k = Math.max(0, p2 - e2);
              break;
            }
          for (d2 = p2; d2 < b; d2++)
            if (a2[d2] > g2) {
              f2 = d2 + e2;
              break;
            }
          return { xData: a2.slice(k, f2), yData: c2.slice(k, f2), start: k, end: f2 };
        }, generatePoints: function() {
          var a2 = this.options, c2 = a2.data, d2 = this.data, e2, f2 = this.processedXData, p2 = this.processedYData, l2 = this.pointClass, h2 = f2.length, q2 = this.cropStart || 0, n2 = this.hasGroupedData;
          a2 = a2.keys;
          var u2 = [], m3;
          d2 || n2 || (d2 = [], d2.length = c2.length, d2 = this.data = d2);
          a2 && n2 && (this.options.keys = false);
          for (m3 = 0; m3 < h2; m3++) {
            var w2 = q2 + m3;
            if (n2) {
              var v2 = new l2().init(this, [f2[m3]].concat(Q(p2[m3])));
              v2.dataGroup = this.groupMap[m3];
              v2.dataGroup.options && (v2.options = v2.dataGroup.options, r(v2, v2.dataGroup.options), delete v2.dataLabels);
            } else
              (v2 = d2[w2]) || "undefined" === typeof c2[w2] || (d2[w2] = v2 = new l2().init(this, c2[w2], f2[m3]));
            v2 && (v2.index = w2, u2[m3] = v2);
          }
          this.options.keys = a2;
          if (d2 && (h2 !== (e2 = d2.length) || n2))
            for (m3 = 0; m3 < e2; m3++)
              m3 !== q2 || n2 || (m3 += h2), d2[m3] && (d2[m3].destroyElements(), d2[m3].plotX = void 0);
          this.data = d2;
          this.points = u2;
          g(this, "afterGeneratePoints");
        }, getXExtremes: function(a2) {
          return { min: x(a2), max: v(a2) };
        }, getExtremes: function(b, c2) {
          var d2 = this.xAxis, k = this.yAxis, e2 = this.processedXData || this.xData, f2 = [], l2 = 0, h2 = 0;
          var q2 = 0;
          var n2 = this.requireSorting ? this.cropShoulder : 0, u2 = k ? k.positiveValuesOnly : false, r2;
          b = b || this.stackedYData || this.processedYData || [];
          k = b.length;
          d2 && (q2 = d2.getExtremes(), h2 = q2.min, q2 = q2.max);
          for (r2 = 0; r2 < k; r2++) {
            var m3 = e2[r2];
            var w2 = b[r2];
            var A2 = (p(w2) || a(w2)) && (w2.length || 0 < w2 || !u2);
            m3 = c2 || this.getExtremesFromAll || this.options.getExtremesFromAll || this.cropped || !d2 || (e2[r2 + n2] || m3) >= h2 && (e2[r2 - n2] || m3) <= q2;
            if (A2 && m3)
              if (A2 = w2.length)
                for (; A2--; )
                  p(w2[A2]) && (f2[l2++] = w2[A2]);
              else
                f2[l2++] = w2;
          }
          b = { dataMin: x(f2), dataMax: v(f2) };
          g(this, "afterGetExtremes", { dataExtremes: b });
          return b;
        }, applyExtremes: function() {
          var a2 = this.getExtremes();
          this.dataMin = a2.dataMin;
          this.dataMax = a2.dataMax;
          return a2;
        }, getFirstValidPoint: function(a2) {
          for (var b = null, c2 = a2.length, d2 = 0; null === b && d2 < c2; )
            b = a2[d2], d2++;
          return b;
        }, translate: function() {
          this.processedXData || this.processData();
          this.generatePoints();
          var b = this.options, c2 = b.stacking, d2 = this.xAxis, e2 = d2.categories, f2 = this.enabledDataSorting, h2 = this.yAxis, q2 = this.points, u2 = q2.length, r2 = !!this.modifyValue, m3, w2 = this.pointPlacementToXValue(), v2 = !!w2, A2 = b.threshold, B2 = b.startFromThreshold ? A2 : 0, E2, O2 = this.zoneAxis || "y", G2 = Number.MAX_VALUE;
          for (m3 = 0; m3 < u2; m3++) {
            var x2 = q2[m3], y2 = x2.x, z2 = x2.y, C2 = x2.low, J2 = c2 && h2.stacking && h2.stacking.stacks[(this.negStacks && z2 < (B2 ? 0 : A2) ? "-" : "") + this.stackKey];
            if (h2.positiveValuesOnly && !h2.validatePositiveValue(z2) || d2.positiveValuesOnly && !d2.validatePositiveValue(y2))
              x2.isNull = true;
            x2.plotX = E2 = n(D(d2.translate(y2, 0, 0, 0, 1, w2, "flags" === this.type), -1e5, 1e5));
            if (c2 && this.visible && J2 && J2[y2]) {
              var F2 = this.getStackIndicator(F2, y2, this.index);
              if (!x2.isNull) {
                var Q2 = J2[y2];
                var I2 = Q2.points[F2.key];
              }
            }
            a(I2) && (C2 = I2[0], z2 = I2[1], C2 === B2 && F2.key === J2[y2].base && (C2 = M(p(A2) && A2, h2.min)), h2.positiveValuesOnly && 0 >= C2 && (C2 = null), x2.total = x2.stackTotal = Q2.total, x2.percentage = Q2.total && x2.y / Q2.total * 100, x2.stackY = z2, this.irregularWidths || Q2.setOffset(this.pointXOffset || 0, this.barW || 0));
            x2.yBottom = l(C2) ? D(h2.translate(C2, 0, 1, 0, 1), -1e5, 1e5) : null;
            r2 && (z2 = this.modifyValue(z2, x2));
            x2.plotY = "number" === typeof z2 && Infinity !== z2 ? D(h2.translate(z2, 0, 1, 0, 1), -1e5, 1e5) : void 0;
            x2.isInside = this.isPointInside(x2);
            x2.clientX = v2 ? n(d2.translate(y2, 0, 0, 0, 1, w2)) : E2;
            x2.negative = x2[O2] < (b[O2 + "Threshold"] || A2 || 0);
            x2.category = e2 && "undefined" !== typeof e2[x2.x] ? e2[x2.x] : x2.x;
            if (!x2.isNull && false !== x2.visible) {
              "undefined" !== typeof K2 && (G2 = Math.min(G2, Math.abs(E2 - K2)));
              var K2 = E2;
            }
            x2.zone = this.zones.length && x2.getZone();
            !x2.graphic && this.group && f2 && (x2.isNew = true);
          }
          this.closestPointRangePx = G2;
          g(this, "afterTranslate");
        }, getValidPoints: function(a2, c2, d2) {
          var b = this.chart;
          return (a2 || this.points || []).filter(function(a3) {
            return c2 && !b.isInsidePlot(a3.plotX, a3.plotY, b.inverted) ? false : false !== a3.visible && (d2 || !a3.isNull);
          });
        }, getClipBox: function(a2, c2) {
          var b = this.options, d2 = this.chart, g2 = d2.inverted, k = this.xAxis, e2 = k && this.yAxis, f2 = d2.options.chart.scrollablePlotArea || {};
          a2 && false === b.clip && e2 ? a2 = g2 ? { y: -d2.chartWidth + e2.len + e2.pos, height: d2.chartWidth, width: d2.chartHeight, x: -d2.chartHeight + k.len + k.pos } : { y: -e2.pos, height: d2.chartHeight, width: d2.chartWidth, x: -k.pos } : (a2 = this.clipBox || d2.clipBox, c2 && (a2.width = d2.plotSizeX, a2.x = (d2.scrollablePixelsX || 0) * (f2.scrollPositionX || 0)));
          return c2 ? { width: a2.width, x: a2.x } : a2;
        }, setClip: function(a2) {
          var b = this.chart, c2 = this.options, d2 = b.renderer, g2 = b.inverted, e2 = this.clipBox, f2 = this.getClipBox(a2), p2 = this.sharedClipKey || ["_sharedClip", a2 && a2.duration, a2 && a2.easing, f2.height, c2.xAxis, c2.yAxis].join(), l2 = b[p2], h2 = b[p2 + "m"];
          a2 && (f2.width = 0, g2 && (f2.x = b.plotHeight + (false !== c2.clip ? 0 : b.plotTop)));
          l2 ? b.hasLoaded || l2.attr(f2) : (a2 && (b[p2 + "m"] = h2 = d2.clipRect(g2 ? b.plotSizeX + 99 : -99, g2 ? -b.plotLeft : -b.plotTop, 99, g2 ? b.chartWidth : b.chartHeight)), b[p2] = l2 = d2.clipRect(f2), l2.count = { length: 0 });
          a2 && !l2.count[this.index] && (l2.count[this.index] = true, l2.count.length += 1);
          if (false !== c2.clip || a2)
            this.group.clip(a2 || e2 ? l2 : b.clipRect), this.markerGroup.clip(h2), this.sharedClipKey = p2;
          a2 || (l2.count[this.index] && (delete l2.count[this.index], --l2.count.length), 0 === l2.count.length && p2 && b[p2] && (e2 || (b[p2] = b[p2].destroy()), b[p2 + "m"] && (b[p2 + "m"] = b[p2 + "m"].destroy())));
        }, animate: function(a2) {
          var b = this.chart, c2 = y(this.options.animation);
          if (!b.hasRendered)
            if (a2)
              this.setClip(c2);
            else {
              var d2 = this.sharedClipKey;
              a2 = b[d2];
              var g2 = this.getClipBox(c2, true);
              a2 && a2.animate(g2, c2);
              b[d2 + "m"] && b[d2 + "m"].animate({ width: g2.width + 99, x: g2.x - (b.inverted ? 0 : 99) }, c2);
            }
        }, afterAnimate: function() {
          this.setClip();
          g(this, "afterAnimate");
          this.finishedAnimating = true;
        }, drawPoints: function() {
          var a2 = this.points, c2 = this.chart, d2, g2, e2 = this.options.marker, f2 = this[this.specialGroup] || this.markerGroup, p2 = this.xAxis, l2 = M(e2.enabled, !p2 || p2.isRadial ? true : null, this.closestPointRangePx >= e2.enabledThreshold * e2.radius);
          if (false !== e2.enabled || this._hasPointMarkers)
            for (d2 = 0; d2 < a2.length; d2++) {
              var h2 = a2[d2];
              var q2 = (g2 = h2.graphic) ? "animate" : "attr";
              var n2 = h2.marker || {};
              var u2 = !!h2.marker;
              if ((l2 && "undefined" === typeof n2.enabled || n2.enabled) && !h2.isNull && false !== h2.visible) {
                var r2 = M(n2.symbol, this.symbol);
                var m3 = this.markerAttribs(h2, h2.selected && "select");
                this.enabledDataSorting && (h2.startXPos = p2.reversed ? -m3.width : p2.width);
                var w2 = false !== h2.isInside;
                g2 ? g2[w2 ? "show" : "hide"](w2).animate(m3) : w2 && (0 < m3.width || h2.hasImage) && (h2.graphic = g2 = c2.renderer.symbol(r2, m3.x, m3.y, m3.width, m3.height, u2 ? n2 : e2).add(f2), this.enabledDataSorting && c2.hasRendered && (g2.attr({ x: h2.startXPos }), q2 = "animate"));
                g2 && "animate" === q2 && g2[w2 ? "show" : "hide"](w2).animate(m3);
                if (g2 && !c2.styledMode)
                  g2[q2](this.pointAttribs(h2, h2.selected && "select"));
                g2 && g2.addClass(
                  h2.getClassName(),
                  true
                );
              } else
                g2 && (h2.graphic = g2.destroy());
            }
        }, markerAttribs: function(a2, c2) {
          var b = this.options, d2 = b.marker, g2 = a2.marker || {}, e2 = g2.symbol || d2.symbol, k = M(g2.radius, d2.radius);
          c2 && (d2 = d2.states[c2], c2 = g2.states && g2.states[c2], k = M(c2 && c2.radius, d2 && d2.radius, k + (d2 && d2.radiusPlus || 0)));
          a2.hasImage = e2 && 0 === e2.indexOf("url");
          a2.hasImage && (k = 0);
          a2 = { x: b.crisp ? Math.floor(a2.plotX) - k : a2.plotX - k, y: a2.plotY - k };
          k && (a2.width = a2.height = 2 * k);
          return a2;
        }, pointAttribs: function(a2, c2) {
          var b = this.options.marker, d2 = a2 && a2.options, g2 = d2 && d2.marker || {}, e2 = this.color, k = d2 && d2.color, f2 = a2 && a2.color;
          d2 = M(g2.lineWidth, b.lineWidth);
          var p2 = a2 && a2.zone && a2.zone.color;
          a2 = 1;
          e2 = k || p2 || f2 || e2;
          k = g2.fillColor || b.fillColor || e2;
          e2 = g2.lineColor || b.lineColor || e2;
          c2 = c2 || "normal";
          b = b.states[c2];
          c2 = g2.states && g2.states[c2] || {};
          d2 = M(c2.lineWidth, b.lineWidth, d2 + M(c2.lineWidthPlus, b.lineWidthPlus, 0));
          k = c2.fillColor || b.fillColor || k;
          e2 = c2.lineColor || b.lineColor || e2;
          a2 = M(c2.opacity, b.opacity, a2);
          return { stroke: e2, "stroke-width": d2, fill: k, opacity: a2 };
        }, destroy: function(a2) {
          var b = this, c2 = b.chart, d2 = /AppleWebKit\/533/.test(u.navigator.userAgent), e2, f2, p2 = b.data || [], h2, l2;
          g(b, "destroy");
          this.removeEvents(a2);
          (b.axisTypes || []).forEach(function(a3) {
            (l2 = b[a3]) && l2.series && (J(l2.series, b), l2.isDirty = l2.forceRedraw = true);
          });
          b.legendItem && b.chart.legend.destroyItem(b);
          for (f2 = p2.length; f2--; )
            (h2 = p2[f2]) && h2.destroy && h2.destroy();
          b.points = null;
          C.clearTimeout(b.animationTimeout);
          G(b, function(a3, b2) {
            a3 instanceof K && !a3.survive && (e2 = d2 && "group" === b2 ? "hide" : "destroy", a3[e2]());
          });
          c2.hoverSeries === b && (c2.hoverSeries = null);
          J(c2.series, b);
          c2.orderSeries();
          G(b, function(c3, d3) {
            a2 && "hcEvents" === d3 || delete b[d3];
          });
        }, getGraphPath: function(a2, c2, d2) {
          var b = this, g2 = b.options, e2 = g2.step, k, f2 = [], p2 = [], h2;
          a2 = a2 || b.points;
          (k = a2.reversed) && a2.reverse();
          (e2 = { right: 1, center: 2 }[e2] || e2 && 3) && k && (e2 = 4 - e2);
          a2 = this.getValidPoints(a2, false, !(g2.connectNulls && !c2 && !d2));
          a2.forEach(function(k2, q2) {
            var t = k2.plotX, n2 = k2.plotY, u2 = a2[q2 - 1];
            (k2.leftCliff || u2 && u2.rightCliff) && !d2 && (h2 = true);
            k2.isNull && !l(c2) && 0 < q2 ? h2 = !g2.connectNulls : k2.isNull && !c2 ? h2 = true : (0 === q2 || h2 ? q2 = [["M", k2.plotX, k2.plotY]] : b.getPointSpline ? q2 = [b.getPointSpline(a2, k2, q2)] : e2 ? (q2 = 1 === e2 ? [["L", u2.plotX, n2]] : 2 === e2 ? [["L", (u2.plotX + t) / 2, u2.plotY], ["L", (u2.plotX + t) / 2, n2]] : [["L", t, u2.plotY]], q2.push(["L", t, n2])) : q2 = [["L", t, n2]], p2.push(k2.x), e2 && (p2.push(k2.x), 2 === e2 && p2.push(k2.x)), f2.push.apply(f2, q2), h2 = false);
          });
          f2.xMap = p2;
          return b.graphPath = f2;
        }, drawGraph: function() {
          var a2 = this, c2 = this.options, d2 = (this.gappedPath || this.getGraphPath).call(this), g2 = this.chart.styledMode, e2 = [["graph", "highcharts-graph"]];
          g2 || e2[0].push(c2.lineColor || this.color || "#cccccc", c2.dashStyle);
          e2 = a2.getZonesGraphs(e2);
          e2.forEach(function(b, e3) {
            var k = b[0], f2 = a2[k], p2 = f2 ? "animate" : "attr";
            f2 ? (f2.endX = a2.preventGraphAnimation ? null : d2.xMap, f2.animate({ d: d2 })) : d2.length && (a2[k] = f2 = a2.chart.renderer.path(d2).addClass(b[1]).attr({ zIndex: 1 }).add(a2.group));
            f2 && !g2 && (k = { stroke: b[2], "stroke-width": c2.lineWidth, fill: a2.fillGraph && a2.color || "none" }, b[3] ? k.dashstyle = b[3] : "square" !== c2.linecap && (k["stroke-linecap"] = k["stroke-linejoin"] = "round"), f2[p2](k).shadow(2 > e3 && c2.shadow));
            f2 && (f2.startX = d2.xMap, f2.isArea = d2.isArea);
          });
        }, getZonesGraphs: function(a2) {
          this.zones.forEach(function(b, c2) {
            c2 = ["zone-graph-" + c2, "highcharts-graph highcharts-zone-graph-" + c2 + " " + (b.className || "")];
            this.chart.styledMode || c2.push(b.color || this.color, b.dashStyle || this.options.dashStyle);
            a2.push(c2);
          }, this);
          return a2;
        }, applyZones: function() {
          var a2 = this, c2 = this.chart, d2 = c2.renderer, g2 = this.zones, e2, f2, p2 = this.clips || [], h2, l2 = this.graph, q2 = this.area, n2 = Math.max(c2.chartWidth, c2.chartHeight), u2 = this[(this.zoneAxis || "y") + "Axis"], r2 = c2.inverted, m3, w2, v2, A2 = false, B2, E2;
          if (g2.length && (l2 || q2) && u2 && "undefined" !== typeof u2.min) {
            var O2 = u2.reversed;
            var G2 = u2.horiz;
            l2 && !this.showLine && l2.hide();
            q2 && q2.hide();
            var x2 = u2.getExtremes();
            g2.forEach(function(b, g3) {
              e2 = O2 ? G2 ? c2.plotWidth : 0 : G2 ? 0 : u2.toPixels(x2.min) || 0;
              e2 = D(M(f2, e2), 0, n2);
              f2 = D(Math.round(u2.toPixels(M(b.value, x2.max), true) || 0), 0, n2);
              A2 && (e2 = f2 = u2.toPixels(x2.max));
              m3 = Math.abs(e2 - f2);
              w2 = Math.min(e2, f2);
              v2 = Math.max(e2, f2);
              u2.isXAxis ? (h2 = { x: r2 ? v2 : w2, y: 0, width: m3, height: n2 }, G2 || (h2.x = c2.plotHeight - h2.x)) : (h2 = { x: 0, y: r2 ? v2 : w2, width: n2, height: m3 }, G2 && (h2.y = c2.plotWidth - h2.y));
              r2 && d2.isVML && (h2 = u2.isXAxis ? { x: 0, y: O2 ? w2 : v2, height: h2.width, width: c2.chartWidth } : { x: h2.y - c2.plotLeft - c2.spacingBox.x, y: 0, width: h2.height, height: c2.chartHeight });
              p2[g3] ? p2[g3].animate(h2) : p2[g3] = d2.clipRect(h2);
              B2 = a2["zone-area-" + g3];
              E2 = a2["zone-graph-" + g3];
              l2 && E2 && E2.clip(p2[g3]);
              q2 && B2 && B2.clip(p2[g3]);
              A2 = b.value > x2.max;
              a2.resetZones && 0 === f2 && (f2 = void 0);
            });
            this.clips = p2;
          } else
            a2.visible && (l2 && l2.show(true), q2 && q2.show(true));
        }, invertGroups: function(a2) {
          function b() {
            ["group", "markerGroup"].forEach(function(b2) {
              c2[b2] && (d2.renderer.isVML && c2[b2].attr({ width: c2.yAxis.len, height: c2.xAxis.len }), c2[b2].width = c2.yAxis.len, c2[b2].height = c2.xAxis.len, c2[b2].invert(c2.isRadialSeries ? false : a2));
            });
          }
          var c2 = this, d2 = c2.chart;
          c2.xAxis && (c2.eventsToUnbind.push(I(
            d2,
            "resize",
            b
          )), b(), c2.invertGroups = b);
        }, plotGroup: function(a2, c2, d2, g2, e2) {
          var b = this[a2], k = !b;
          d2 = { visibility: d2, zIndex: g2 || 0.1 };
          "undefined" === typeof this.opacity || this.chart.styledMode || "inactive" === this.state || (d2.opacity = this.opacity);
          k && (this[a2] = b = this.chart.renderer.g().add(e2));
          b.addClass("highcharts-" + c2 + " highcharts-series-" + this.index + " highcharts-" + this.type + "-series " + (l(this.colorIndex) ? "highcharts-color-" + this.colorIndex + " " : "") + (this.options.className || "") + (b.hasClass("highcharts-tracker") ? " highcharts-tracker" : ""), true);
          b.attr(d2)[k ? "attr" : "animate"](this.getPlotBox());
          return b;
        }, getPlotBox: function() {
          var a2 = this.chart, c2 = this.xAxis, d2 = this.yAxis;
          a2.inverted && (c2 = d2, d2 = this.xAxis);
          return { translateX: c2 ? c2.left : a2.plotLeft, translateY: d2 ? d2.top : a2.plotTop, scaleX: 1, scaleY: 1 };
        }, removeEvents: function(a2) {
          a2 ? this.eventsToUnbind.length && (this.eventsToUnbind.forEach(function(a3) {
            a3();
          }), this.eventsToUnbind.length = 0) : T(this);
        }, render: function() {
          var a2 = this, c2 = a2.chart, d2 = a2.options, e2 = y(d2.animation), f2 = !a2.finishedAnimating && c2.renderer.isSVG && e2.duration, p2 = a2.visible ? "inherit" : "hidden", h2 = d2.zIndex, l2 = a2.hasRendered, q2 = c2.seriesGroup, n2 = c2.inverted;
          g(this, "render");
          var u2 = a2.plotGroup("group", "series", p2, h2, q2);
          a2.markerGroup = a2.plotGroup("markerGroup", "markers", p2, h2, q2);
          f2 && a2.animate && a2.animate(true);
          u2.inverted = a2.isCartesian || a2.invertable ? n2 : false;
          a2.drawGraph && (a2.drawGraph(), a2.applyZones());
          a2.visible && a2.drawPoints();
          a2.drawDataLabels && a2.drawDataLabels();
          a2.redrawPoints && a2.redrawPoints();
          a2.drawTracker && false !== a2.options.enableMouseTracking && a2.drawTracker();
          a2.invertGroups(n2);
          false === d2.clip || a2.sharedClipKey || l2 || u2.clip(c2.clipRect);
          f2 && a2.animate && a2.animate();
          l2 || (f2 && e2.defer && (f2 += e2.defer), a2.animationTimeout = O(function() {
            a2.afterAnimate();
          }, f2 || 0));
          a2.isDirty = false;
          a2.hasRendered = true;
          g(a2, "afterRender");
        }, redraw: function() {
          var a2 = this.chart, c2 = this.isDirty || this.isDirtyData, d2 = this.group, g2 = this.xAxis, e2 = this.yAxis;
          d2 && (a2.inverted && d2.attr({ width: a2.plotWidth, height: a2.plotHeight }), d2.animate({ translateX: M(g2 && g2.left, a2.plotLeft), translateY: M(e2 && e2.top, a2.plotTop) }));
          this.translate();
          this.render();
          c2 && delete this.kdTree;
        }, kdAxisArray: ["clientX", "plotY"], searchPoint: function(a2, c2) {
          var b = this.xAxis, d2 = this.yAxis, g2 = this.chart.inverted;
          return this.searchKDTree({ clientX: g2 ? b.len - a2.chartY + b.pos : a2.chartX - b.pos, plotY: g2 ? d2.len - a2.chartX + d2.pos : a2.chartY - d2.pos }, c2, a2);
        }, buildKDTree: function(a2) {
          function b(a3, d3, g2) {
            var e2;
            if (e2 = a3 && a3.length) {
              var f2 = c2.kdAxisArray[d3 % g2];
              a3.sort(function(a4, b2) {
                return a4[f2] - b2[f2];
              });
              e2 = Math.floor(e2 / 2);
              return { point: a3[e2], left: b(a3.slice(0, e2), d3 + 1, g2), right: b(a3.slice(e2 + 1), d3 + 1, g2) };
            }
          }
          this.buildingKdTree = true;
          var c2 = this, d2 = -1 < c2.options.findNearestPointBy.indexOf("y") ? 2 : 1;
          delete c2.kdTree;
          O(function() {
            c2.kdTree = b(c2.getValidPoints(null, !c2.directTouch), d2, d2);
            c2.buildingKdTree = false;
          }, c2.options.kdNow || a2 && "touchstart" === a2.type ? 0 : 1);
        }, searchKDTree: function(a2, c2, d2) {
          function b(a3, c3, d3, p2) {
            var h2 = c3.point, q2 = g2.kdAxisArray[d3 % p2], n2 = h2;
            var u2 = l(a3[e2]) && l(h2[e2]) ? Math.pow(a3[e2] - h2[e2], 2) : null;
            var t = l(a3[f2]) && l(h2[f2]) ? Math.pow(a3[f2] - h2[f2], 2) : null;
            t = (u2 || 0) + (t || 0);
            h2.dist = l(t) ? Math.sqrt(t) : Number.MAX_VALUE;
            h2.distX = l(u2) ? Math.sqrt(u2) : Number.MAX_VALUE;
            q2 = a3[q2] - h2[q2];
            t = 0 > q2 ? "left" : "right";
            u2 = 0 > q2 ? "right" : "left";
            c3[t] && (t = b(a3, c3[t], d3 + 1, p2), n2 = t[k] < n2[k] ? t : h2);
            c3[u2] && Math.sqrt(q2 * q2) < n2[k] && (a3 = b(a3, c3[u2], d3 + 1, p2), n2 = a3[k] < n2[k] ? a3 : n2);
            return n2;
          }
          var g2 = this, e2 = this.kdAxisArray[0], f2 = this.kdAxisArray[1], k = c2 ? "distX" : "dist";
          c2 = -1 < g2.options.findNearestPointBy.indexOf("y") ? 2 : 1;
          this.kdTree || this.buildingKdTree || this.buildKDTree(d2);
          if (this.kdTree)
            return b(a2, this.kdTree, c2, c2);
        }, pointPlacementToXValue: function() {
          var a2 = this.options, c2 = a2.pointRange, d2 = this.xAxis;
          a2 = a2.pointPlacement;
          "between" === a2 && (a2 = d2.reversed ? -0.5 : 0.5);
          return p(a2) ? a2 * M(c2, d2.pointRange) : 0;
        }, isPointInside: function(a2) {
          return "undefined" !== typeof a2.plotY && "undefined" !== typeof a2.plotX && 0 <= a2.plotY && a2.plotY <= this.yAxis.len && 0 <= a2.plotX && a2.plotX <= this.xAxis.len;
        } });
        "";
        return f;
      });
      N(m, "Series/LineSeries.js", [m["Core/Series/CartesianSeries.js"], m["Core/Globals.js"]], function(f, h) {
        h.Series = f;
        return h.Series;
      });
      N(
        m,
        "Extensions/Stacking.js",
        [m["Core/Axis/Axis.js"], m["Core/Chart/Chart.js"], m["Core/Globals.js"], m["Core/Axis/StackingAxis.js"], m["Core/Utilities.js"]],
        function(f, h, m2, z, F) {
          var L = F.correctFloat, K = F.defined, C = F.destroyObjectProperties, y = F.format, e = F.isNumber, I = F.pick;
          "";
          var v = m2.Series, x = function() {
            function f2(e2, f3, h2, m3, r) {
              var d = e2.chart.inverted;
              this.axis = e2;
              this.isNegative = h2;
              this.options = f3 = f3 || {};
              this.x = m3;
              this.total = null;
              this.points = {};
              this.hasValidPoints = false;
              this.stack = r;
              this.rightCliff = this.leftCliff = 0;
              this.alignOptions = { align: f3.align || (d ? h2 ? "left" : "right" : "center"), verticalAlign: f3.verticalAlign || (d ? "middle" : h2 ? "bottom" : "top"), y: f3.y, x: f3.x };
              this.textAlign = f3.textAlign || (d ? h2 ? "right" : "left" : "center");
            }
            f2.prototype.destroy = function() {
              C(this, this.axis);
            };
            f2.prototype.render = function(e2) {
              var f3 = this.axis.chart, h2 = this.options, n = h2.format;
              n = n ? y(n, this, f3) : h2.formatter.call(this);
              this.label ? this.label.attr({ text: n, visibility: "hidden" }) : (this.label = f3.renderer.label(n, null, null, h2.shape, null, null, h2.useHTML, false, "stack-labels"), n = { r: h2.borderRadius || 0, text: n, rotation: h2.rotation, padding: I(h2.padding, 5), visibility: "hidden" }, f3.styledMode || (n.fill = h2.backgroundColor, n.stroke = h2.borderColor, n["stroke-width"] = h2.borderWidth, this.label.css(h2.style)), this.label.attr(n), this.label.added || this.label.add(e2));
              this.label.labelrank = f3.plotHeight;
            };
            f2.prototype.setOffset = function(f3, h2, m3, w, r) {
              var d = this.axis, g = d.chart;
              w = d.translate(d.stacking.usePercentage ? 100 : w ? w : this.total, 0, 0, 0, 1);
              m3 = d.translate(m3 ? m3 : 0);
              m3 = K(w) && Math.abs(w - m3);
              f3 = I(r, g.xAxis[0].translate(this.x)) + f3;
              d = K(w) && this.getStackBox(g, this, f3, w, h2, m3, d);
              h2 = this.label;
              m3 = this.isNegative;
              f3 = "justify" === I(this.options.overflow, "justify");
              var c = this.textAlign;
              h2 && d && (r = h2.getBBox(), w = h2.padding, c = "left" === c ? g.inverted ? -w : w : "right" === c ? r.width : g.inverted && "center" === c ? r.width / 2 : g.inverted ? m3 ? r.width + w : -w : r.width / 2, m3 = g.inverted ? r.height / 2 : m3 ? -w : r.height, this.alignOptions.x = I(this.options.x, 0), this.alignOptions.y = I(this.options.y, 0), d.x -= c, d.y -= m3, h2.align(this.alignOptions, null, d), g.isInsidePlot(h2.alignAttr.x + c - this.alignOptions.x, h2.alignAttr.y + m3 - this.alignOptions.y) ? h2.show() : (h2.alignAttr.y = -9999, f3 = false), f3 && v.prototype.justifyDataLabel.call(
                this.axis,
                h2,
                this.alignOptions,
                h2.alignAttr,
                r,
                d
              ), h2.attr({ x: h2.alignAttr.x, y: h2.alignAttr.y }), I(!f3 && this.options.crop, true) && ((g = e(h2.x) && e(h2.y) && g.isInsidePlot(h2.x - w + h2.width, h2.y) && g.isInsidePlot(h2.x + w, h2.y)) || h2.hide()));
            };
            f2.prototype.getStackBox = function(e2, f3, h2, m3, r, d, g) {
              var c = f3.axis.reversed, a = e2.inverted, q = g.height + g.pos - (a ? e2.plotLeft : e2.plotTop);
              f3 = f3.isNegative && !c || !f3.isNegative && c;
              return { x: a ? f3 ? m3 - g.right : m3 - d + g.pos - e2.plotLeft : h2 + e2.xAxis[0].transB - e2.plotLeft, y: a ? g.height - h2 - r : f3 ? q - m3 - d : q - m3, width: a ? d : r, height: a ? r : d };
            };
            return f2;
          }();
          h.prototype.getStacks = function() {
            var e2 = this, f2 = e2.inverted;
            e2.yAxis.forEach(function(e3) {
              e3.stacking && e3.stacking.stacks && e3.hasVisibleSeries && (e3.stacking.oldStacks = e3.stacking.stacks);
            });
            e2.series.forEach(function(h2) {
              var l = h2.xAxis && h2.xAxis.options || {};
              !h2.options.stacking || true !== h2.visible && false !== e2.options.chart.ignoreHiddenSeries || (h2.stackKey = [h2.type, I(h2.options.stack, ""), f2 ? l.top : l.left, f2 ? l.height : l.width].join());
            });
          };
          z.compose(f);
          v.prototype.setGroupedPoints = function() {
            this.options.centerInCategory && (this.is("column") || this.is("columnrange")) && !this.options.stacking && 1 < this.chart.series.length && v.prototype.setStackedPoints.call(this, "group");
          };
          v.prototype.setStackedPoints = function(e2) {
            var f2 = e2 || this.options.stacking;
            if (f2 && (true === this.visible || false === this.chart.options.chart.ignoreHiddenSeries)) {
              var h2 = this.processedXData, m3 = this.processedYData, w = [], r = m3.length, d = this.options, g = d.threshold, c = I(d.startFromThreshold && g, 0);
              d = d.stack;
              e2 = e2 ? this.type + "," + f2 : this.stackKey;
              var a = "-" + e2, q = this.negStacks, p = this.yAxis, v2 = p.stacking.stacks, A = p.stacking.oldStacks, G, D;
              p.stacking.stacksTouched += 1;
              for (D = 0; D < r; D++) {
                var y2 = h2[D];
                var z2 = m3[D];
                var O = this.getStackIndicator(O, y2, this.index);
                var E = O.key;
                var u = (G = q && z2 < (c ? 0 : g)) ? a : e2;
                v2[u] || (v2[u] = {});
                v2[u][y2] || (A[u] && A[u][y2] ? (v2[u][y2] = A[u][y2], v2[u][y2].total = null) : v2[u][y2] = new x(p, p.options.stackLabels, G, y2, d));
                u = v2[u][y2];
                null !== z2 ? (u.points[E] = u.points[this.index] = [I(u.cumulative, c)], K(u.cumulative) || (u.base = E), u.touched = p.stacking.stacksTouched, 0 < O.index && false === this.singleStacks && (u.points[E][0] = u.points[this.index + "," + y2 + ",0"][0])) : u.points[E] = u.points[this.index] = null;
                "percent" === f2 ? (G = G ? e2 : a, q && v2[G] && v2[G][y2] ? (G = v2[G][y2], u.total = G.total = Math.max(G.total, u.total) + Math.abs(z2) || 0) : u.total = L(u.total + (Math.abs(z2) || 0))) : "group" === f2 ? null !== z2 && (u.total = (u.total || 0) + 1) : u.total = L(u.total + (z2 || 0));
                u.cumulative = "group" === f2 ? (u.total || 1) - 1 : I(u.cumulative, c) + (z2 || 0);
                null !== z2 && (u.points[E].push(u.cumulative), w[D] = u.cumulative, u.hasValidPoints = true);
              }
              "percent" === f2 && (p.stacking.usePercentage = true);
              "group" !== f2 && (this.stackedYData = w);
              p.stacking.oldStacks = {};
            }
          };
          v.prototype.modifyStacks = function() {
            var e2 = this, f2 = e2.stackKey, h2 = e2.yAxis.stacking.stacks, m3 = e2.processedXData, w, r = e2.options.stacking;
            e2[r + "Stacker"] && [f2, "-" + f2].forEach(function(d) {
              for (var g = m3.length, c, a; g--; )
                if (c = m3[g], w = e2.getStackIndicator(w, c, e2.index, d), a = (c = h2[d] && h2[d][c]) && c.points[w.key])
                  e2[r + "Stacker"](a, c, g);
            });
          };
          v.prototype.percentStacker = function(e2, f2, h2) {
            f2 = f2.total ? 100 / f2.total : 0;
            e2[0] = L(e2[0] * f2);
            e2[1] = L(e2[1] * f2);
            this.stackedYData[h2] = e2[1];
          };
          v.prototype.getStackIndicator = function(e2, f2, h2, m3) {
            !K(e2) || e2.x !== f2 || m3 && e2.key !== m3 ? e2 = { x: f2, index: 0, key: m3 } : e2.index++;
            e2.key = [h2, f2, e2.index].join();
            return e2;
          };
          m2.StackItem = x;
          return m2.StackItem;
        }
      );
      N(m, "Core/Dynamics.js", [m["Core/Animation/AnimationUtilities.js"], m["Core/Axis/Axis.js"], m["Core/Series/Series.js"], m["Core/Chart/Chart.js"], m["Core/Globals.js"], m["Series/LineSeries.js"], m["Core/Options.js"], m["Core/Series/Point.js"], m["Core/Time.js"], m["Core/Utilities.js"]], function(f, h, m2, z, F, L, K, C, y, e) {
        var I = f.animate, v = f.setAnimation, x = m2.seriesTypes, D = K.time, n = e.addEvent, l = e.createElement, J = e.css, w = e.defined, r = e.erase, d = e.error, g = e.extend, c = e.fireEvent, a = e.isArray, q = e.isNumber, p = e.isObject, B = e.isString, A = e.merge, G = e.objectEach, M = e.pick, T = e.relativeLength, Q = e.splat;
        F.cleanRecursively = function(a2, c2) {
          var d2 = {};
          G(a2, function(b, g2) {
            if (p(a2[g2], true) && !a2.nodeType && c2[g2])
              b = F.cleanRecursively(a2[g2], c2[g2]), Object.keys(b).length && (d2[g2] = b);
            else if (p(a2[g2]) || a2[g2] !== c2[g2])
              d2[g2] = a2[g2];
          });
          return d2;
        };
        g(z.prototype, {
          addSeries: function(a2, d2, g2) {
            var b, e2 = this;
            a2 && (d2 = M(d2, true), c(e2, "addSeries", { options: a2 }, function() {
              b = e2.initSeries(a2);
              e2.isDirtyLegend = true;
              e2.linkSeries();
              b.enabledDataSorting && b.setData(a2.data, false);
              c(e2, "afterAddSeries", { series: b });
              d2 && e2.redraw(g2);
            }));
            return b;
          },
          addAxis: function(a2, c2, d2, b) {
            return this.createAxis(c2 ? "xAxis" : "yAxis", { axis: a2, redraw: d2, animation: b });
          },
          addColorAxis: function(a2, c2, d2) {
            return this.createAxis("colorAxis", { axis: a2, redraw: c2, animation: d2 });
          },
          createAxis: function(a2, c2) {
            var d2 = this.options, b = "colorAxis" === a2, g2 = c2.redraw, e2 = c2.animation;
            c2 = A(c2.axis, { index: this[a2].length, isX: "xAxis" === a2 });
            var f2 = b ? new F.ColorAxis(this, c2) : new h(this, c2);
            d2[a2] = Q(d2[a2] || {});
            d2[a2].push(c2);
            b && (this.isDirtyLegend = true, this.axes.forEach(function(a3) {
              a3.series = [];
            }), this.series.forEach(function(a3) {
              a3.bindAxes();
              a3.isDirtyData = true;
            }));
            M(g2, true) && this.redraw(e2);
            return f2;
          },
          showLoading: function(a2) {
            var c2 = this, d2 = c2.options, b = c2.loadingDiv, e2 = d2.loading, f2 = function() {
              b && J(b, { left: c2.plotLeft + "px", top: c2.plotTop + "px", width: c2.plotWidth + "px", height: c2.plotHeight + "px" });
            };
            b || (c2.loadingDiv = b = l("div", { className: "highcharts-loading highcharts-loading-hidden" }, null, c2.container), c2.loadingSpan = l("span", { className: "highcharts-loading-inner" }, null, b), n(c2, "redraw", f2));
            b.className = "highcharts-loading";
            c2.loadingSpan.innerHTML = M(a2, d2.lang.loading, "");
            c2.styledMode || (J(b, g(e2.style, { zIndex: 10 })), J(c2.loadingSpan, e2.labelStyle), c2.loadingShown || (J(b, { opacity: 0, display: "" }), I(b, { opacity: e2.style.opacity || 0.5 }, { duration: e2.showDuration || 0 })));
            c2.loadingShown = true;
            f2();
          },
          hideLoading: function() {
            var a2 = this.options, c2 = this.loadingDiv;
            c2 && (c2.className = "highcharts-loading highcharts-loading-hidden", this.styledMode || I(c2, { opacity: 0 }, { duration: a2.loading.hideDuration || 100, complete: function() {
              J(c2, { display: "none" });
            } }));
            this.loadingShown = false;
          },
          propsRequireDirtyBox: "backgroundColor borderColor borderWidth borderRadius plotBackgroundColor plotBackgroundImage plotBorderColor plotBorderWidth plotShadow shadow".split(" "),
          propsRequireReflow: "margin marginTop marginRight marginBottom marginLeft spacing spacingTop spacingRight spacingBottom spacingLeft".split(" "),
          propsRequireUpdateSeries: "chart.inverted chart.polar chart.ignoreHiddenSeries chart.type colors plotOptions time tooltip".split(" "),
          collectionsWithUpdate: ["xAxis", "yAxis", "zAxis", "series"],
          update: function(a2, d2, g2, b) {
            var e2 = this, f2 = { credits: "addCredits", title: "setTitle", subtitle: "setSubtitle", caption: "setCaption" }, p2, h2, l2, n2 = a2.isResponsiveOptions, u = [];
            c(e2, "update", { options: a2 });
            n2 || e2.setResponsive(false, true);
            a2 = F.cleanRecursively(a2, e2.options);
            A(true, e2.userOptions, a2);
            if (p2 = a2.chart) {
              A(true, e2.options.chart, p2);
              "className" in p2 && e2.setClassName(p2.className);
              "reflow" in p2 && e2.setReflow(p2.reflow);
              if ("inverted" in p2 || "polar" in p2 || "type" in p2) {
                e2.propFromSeries();
                var m3 = true;
              }
              "alignTicks" in p2 && (m3 = true);
              G(p2, function(a3, b2) {
                -1 !== e2.propsRequireUpdateSeries.indexOf("chart." + b2) && (h2 = true);
                -1 !== e2.propsRequireDirtyBox.indexOf(b2) && (e2.isDirtyBox = true);
                -1 !== e2.propsRequireReflow.indexOf(b2) && (n2 ? e2.isDirtyBox = true : l2 = true);
              });
              !e2.styledMode && "style" in p2 && e2.renderer.setStyle(p2.style);
            }
            !e2.styledMode && a2.colors && (this.options.colors = a2.colors);
            a2.time && (this.time === D && (this.time = new y(a2.time)), A(true, e2.options.time, a2.time));
            G(a2, function(b2, c2) {
              if (e2[c2] && "function" === typeof e2[c2].update)
                e2[c2].update(b2, false);
              else if ("function" === typeof e2[f2[c2]])
                e2[f2[c2]](b2);
              else
                "color" !== c2 && -1 === e2.collectionsWithUpdate.indexOf(c2) && A(true, e2.options[c2], a2[c2]);
              "chart" !== c2 && -1 !== e2.propsRequireUpdateSeries.indexOf(c2) && (h2 = true);
            });
            this.collectionsWithUpdate.forEach(function(b2) {
              if (a2[b2]) {
                if ("series" === b2) {
                  var c2 = [];
                  e2[b2].forEach(function(a3, b3) {
                    a3.options.isInternal || c2.push(M(a3.options.index, b3));
                  });
                }
                Q(a2[b2]).forEach(function(a3, d3) {
                  var f3 = w(a3.id), k;
                  f3 && (k = e2.get(a3.id));
                  k || (k = e2[b2][c2 ? c2[d3] : d3]) && f3 && w(k.options.id) && (k = void 0);
                  k && k.coll === b2 && (k.update(
                    a3,
                    false
                  ), g2 && (k.touched = true));
                  !k && g2 && e2.collectionsWithInit[b2] && (e2.collectionsWithInit[b2][0].apply(e2, [a3].concat(e2.collectionsWithInit[b2][1] || []).concat([false])).touched = true);
                });
                g2 && e2[b2].forEach(function(a3) {
                  a3.touched || a3.options.isInternal ? delete a3.touched : u.push(a3);
                });
              }
            });
            u.forEach(function(a3) {
              a3.remove && a3.remove(false);
            });
            m3 && e2.axes.forEach(function(a3) {
              a3.update({}, false);
            });
            h2 && e2.getSeriesOrderByLinks().forEach(function(a3) {
              a3.chart && a3.update({}, false);
            }, this);
            m3 = p2 && p2.width;
            p2 = p2 && p2.height;
            B(p2) && (p2 = T(p2, m3 || e2.chartWidth));
            l2 || q(m3) && m3 !== e2.chartWidth || q(p2) && p2 !== e2.chartHeight ? e2.setSize(m3, p2, b) : M(d2, true) && e2.redraw(b);
            c(e2, "afterUpdate", { options: a2, redraw: d2, animation: b });
          },
          setSubtitle: function(a2, c2) {
            this.applyDescription("subtitle", a2);
            this.layOutTitles(c2);
          },
          setCaption: function(a2, c2) {
            this.applyDescription("caption", a2);
            this.layOutTitles(c2);
          }
        });
        z.prototype.collectionsWithInit = { xAxis: [z.prototype.addAxis, [true]], yAxis: [z.prototype.addAxis, [false]], series: [z.prototype.addSeries] };
        g(C.prototype, { update: function(a2, c2, d2, b) {
          function g2() {
            e2.applyOptions(a2);
            var b2 = h2 && e2.hasDummyGraphic;
            b2 = null === e2.y ? !b2 : b2;
            h2 && b2 && (e2.graphic = h2.destroy(), delete e2.hasDummyGraphic);
            p(a2, true) && (h2 && h2.element && a2 && a2.marker && "undefined" !== typeof a2.marker.symbol && (e2.graphic = h2.destroy()), a2 && a2.dataLabels && e2.dataLabel && (e2.dataLabel = e2.dataLabel.destroy()), e2.connector && (e2.connector = e2.connector.destroy()));
            q2 = e2.index;
            f2.updateParallelArrays(e2, q2);
            n2.data[q2] = p(n2.data[q2], true) || p(a2, true) ? e2.options : M(a2, n2.data[q2]);
            f2.isDirty = f2.isDirtyData = true;
            !f2.fixedBox && f2.hasCartesianSeries && (l2.isDirtyBox = true);
            "point" === n2.legendType && (l2.isDirtyLegend = true);
            c2 && l2.redraw(d2);
          }
          var e2 = this, f2 = e2.series, h2 = e2.graphic, q2, l2 = f2.chart, n2 = f2.options;
          c2 = M(c2, true);
          false === b ? g2() : e2.firePointEvent("update", { options: a2 }, g2);
        }, remove: function(a2, c2) {
          this.series.removePoint(this.series.data.indexOf(this), a2, c2);
        } });
        g(L.prototype, { addPoint: function(a2, d2, g2, b, e2) {
          var f2 = this.options, k = this.data, p2 = this.chart, h2 = this.xAxis;
          h2 = h2 && h2.hasNames && h2.names;
          var q2 = f2.data, l2 = this.xData, n2;
          d2 = M(d2, true);
          var u = { series: this };
          this.pointClass.prototype.applyOptions.apply(u, [a2]);
          var m3 = u.x;
          var r2 = l2.length;
          if (this.requireSorting && m3 < l2[r2 - 1])
            for (n2 = true; r2 && l2[r2 - 1] > m3; )
              r2--;
          this.updateParallelArrays(u, "splice", r2, 0, 0);
          this.updateParallelArrays(u, r2);
          h2 && u.name && (h2[m3] = u.name);
          q2.splice(r2, 0, a2);
          n2 && (this.data.splice(r2, 0, null), this.processData());
          "point" === f2.legendType && this.generatePoints();
          g2 && (k[0] && k[0].remove ? k[0].remove(false) : (k.shift(), this.updateParallelArrays(u, "shift"), q2.shift()));
          false !== e2 && c(this, "addPoint", { point: u });
          this.isDirtyData = this.isDirty = true;
          d2 && p2.redraw(b);
        }, removePoint: function(a2, c2, d2) {
          var b = this, g2 = b.data, e2 = g2[a2], f2 = b.points, p2 = b.chart, h2 = function() {
            f2 && f2.length === g2.length && f2.splice(a2, 1);
            g2.splice(a2, 1);
            b.options.data.splice(a2, 1);
            b.updateParallelArrays(e2 || { series: b }, "splice", a2, 1);
            e2 && e2.destroy();
            b.isDirty = true;
            b.isDirtyData = true;
            c2 && p2.redraw();
          };
          v(d2, p2);
          c2 = M(c2, true);
          e2 ? e2.firePointEvent("remove", null, h2) : h2();
        }, remove: function(a2, d2, g2, b) {
          function e2() {
            f2.destroy(b);
            f2.remove = null;
            p2.isDirtyLegend = p2.isDirtyBox = true;
            p2.linkSeries();
            M(a2, true) && p2.redraw(d2);
          }
          var f2 = this, p2 = f2.chart;
          false !== g2 ? c(f2, "remove", null, e2) : e2();
        }, update: function(a2, e2) {
          a2 = F.cleanRecursively(
            a2,
            this.userOptions
          );
          c(this, "update", { options: a2 });
          var f2 = this, b = f2.chart, k = f2.userOptions, p2 = f2.initialType || f2.type, h2 = b.options.plotOptions, q2 = a2.type || k.type || b.options.chart.type, l2 = !(this.hasDerivedData || q2 && q2 !== this.type || "undefined" !== typeof a2.pointStart || "undefined" !== typeof a2.pointInterval || f2.hasOptionChanged("dataGrouping") || f2.hasOptionChanged("pointStart") || f2.hasOptionChanged("pointInterval") || f2.hasOptionChanged("pointIntervalUnit") || f2.hasOptionChanged("keys")), n2 = x[p2].prototype, m3, r2 = [
            "eventOptions",
            "navigatorSeries",
            "baseSeries"
          ], w2 = f2.finishedAnimating && { animation: false }, v2 = {};
          l2 && (r2.push("data", "isDirtyData", "points", "processedXData", "processedYData", "xIncrement", "cropped", "_hasPointMarkers", "_hasPointLabels", "mapMap", "mapData", "minY", "maxY", "minX", "maxX"), false !== a2.visible && r2.push("area", "graph"), f2.parallelArrays.forEach(function(a3) {
            r2.push(a3 + "Data");
          }), a2.data && (a2.dataSorting && g(f2.options.dataSorting, a2.dataSorting), this.setData(a2.data, false)));
          a2 = A(k, w2, { index: "undefined" === typeof k.index ? f2.index : k.index, pointStart: M(h2 && h2.series && h2.series.pointStart, k.pointStart, f2.xData[0]) }, !l2 && { data: f2.options.data }, a2);
          l2 && a2.data && (a2.data = f2.options.data);
          r2 = ["group", "markerGroup", "dataLabelsGroup", "transformGroup"].concat(r2);
          r2.forEach(function(a3) {
            r2[a3] = f2[a3];
            delete f2[a3];
          });
          f2.remove(false, null, false, true);
          for (m3 in n2)
            f2[m3] = void 0;
          x[q2 || p2] ? g(f2, x[q2 || p2].prototype) : d(17, true, b, { missingModuleFor: q2 || p2 });
          r2.forEach(function(a3) {
            f2[a3] = r2[a3];
          });
          f2.init(b, a2);
          if (l2 && this.points) {
            var B2 = f2.options;
            false === B2.visible ? (v2.graphic = 1, v2.dataLabel = 1) : f2._hasPointLabels || (a2 = B2.marker, k = B2.dataLabels, a2 && (false === a2.enabled || "symbol" in a2) && (v2.graphic = 1), k && false === k.enabled && (v2.dataLabel = 1));
            this.points.forEach(function(a3) {
              a3 && a3.series && (a3.resolveColor(), Object.keys(v2).length && a3.destroyElements(v2), false === B2.showInLegend && a3.legendItem && b.legend.destroyItem(a3));
            }, this);
          }
          f2.initialType = p2;
          b.linkSeries();
          c(this, "afterUpdate");
          M(e2, true) && b.redraw(l2 ? void 0 : false);
        }, setName: function(a2) {
          this.name = this.options.name = this.userOptions.name = a2;
          this.chart.isDirtyLegend = true;
        }, hasOptionChanged: function(a2) {
          var c2 = this.options[a2], d2 = this.chart.options.plotOptions, b = this.userOptions[a2];
          return b ? c2 !== b : c2 !== M(d2 && d2[this.type] && d2[this.type][a2], d2 && d2.series && d2.series[a2], c2);
        } });
        g(h.prototype, { update: function(a2, c2) {
          var d2 = this.chart, b = a2 && a2.events || {};
          a2 = A(this.userOptions, a2);
          d2.options[this.coll].indexOf && (d2.options[this.coll][d2.options[this.coll].indexOf(this.userOptions)] = a2);
          G(d2.options[this.coll].events, function(a3, c3) {
            "undefined" === typeof b[c3] && (b[c3] = void 0);
          });
          this.destroy(true);
          this.init(d2, g(a2, { events: b }));
          d2.isDirtyBox = true;
          M(c2, true) && d2.redraw();
        }, remove: function(c2) {
          for (var d2 = this.chart, g2 = this.coll, b = this.series, e2 = b.length; e2--; )
            b[e2] && b[e2].remove(false);
          r(d2.axes, this);
          r(d2[g2], this);
          a(d2.options[g2]) ? d2.options[g2].splice(this.options.index, 1) : delete d2.options[g2];
          d2[g2].forEach(function(a2, b2) {
            a2.options.index = a2.userOptions.index = b2;
          });
          this.destroy();
          d2.isDirtyBox = true;
          M(c2, true) && d2.redraw();
        }, setTitle: function(a2, c2) {
          this.update({ title: a2 }, c2);
        }, setCategories: function(a2, c2) {
          this.update({ categories: a2 }, c2);
        } });
      });
      N(m, "Series/AreaSeries.js", [
        m["Core/Series/Series.js"],
        m["Core/Color/Color.js"],
        m["Core/Globals.js"],
        m["Mixins/LegendSymbol.js"],
        m["Core/Utilities.js"]
      ], function(f, h, m2, z, F) {
        var L = h.parse, K = F.objectEach, C = F.pick, y = m2.Series;
        f.seriesType("area", "line", { threshold: 0 }, { singleStacks: false, getStackPoints: function(e) {
          var f2 = [], h2 = [], m3 = this.xAxis, D = this.yAxis, n = D.stacking.stacks[this.stackKey], l = {}, y2 = this.index, w = D.series, r = w.length, d = C(D.options.reversedStacks, true) ? 1 : -1, g;
          e = e || this.points;
          if (this.options.stacking) {
            for (g = 0; g < e.length; g++)
              e[g].leftNull = e[g].rightNull = void 0, l[e[g].x] = e[g];
            K(n, function(a, c2) {
              null !== a.total && h2.push(c2);
            });
            h2.sort(function(a, c2) {
              return a - c2;
            });
            var c = w.map(function(a) {
              return a.visible;
            });
            h2.forEach(function(a, e2) {
              var p = 0, q, w2;
              if (l[a] && !l[a].isNull)
                f2.push(l[a]), [-1, 1].forEach(function(f3) {
                  var p2 = 1 === f3 ? "rightNull" : "leftNull", m4 = 0, v = n[h2[e2 + f3]];
                  if (v)
                    for (g = y2; 0 <= g && g < r; )
                      q = v.points[g], q || (g === y2 ? l[a][p2] = true : c[g] && (w2 = n[a].points[g]) && (m4 -= w2[1] - w2[0])), g += d;
                  l[a][1 === f3 ? "rightCliff" : "leftCliff"] = m4;
                });
              else {
                for (g = y2; 0 <= g && g < r; ) {
                  if (q = n[a].points[g]) {
                    p = q[1];
                    break;
                  }
                  g += d;
                }
                p = D.translate(p, 0, 1, 0, 1);
                f2.push({
                  isNull: true,
                  plotX: m3.translate(a, 0, 0, 0, 1),
                  x: a,
                  plotY: p,
                  yBottom: p
                });
              }
            });
          }
          return f2;
        }, getGraphPath: function(e) {
          var f2 = y.prototype.getGraphPath, h2 = this.options, m3 = h2.stacking, D = this.yAxis, n, l = [], z2 = [], w = this.index, r = D.stacking.stacks[this.stackKey], d = h2.threshold, g = Math.round(D.getThreshold(h2.threshold));
          h2 = C(h2.connectNulls, "percent" === m3);
          var c = function(a2, c2, f3) {
            var p2 = e[a2];
            a2 = m3 && r[p2.x].points[w];
            var h3 = p2[f3 + "Null"] || 0;
            f3 = p2[f3 + "Cliff"] || 0;
            p2 = true;
            if (f3 || h3) {
              var n2 = (h3 ? a2[0] : a2[1]) + f3;
              var v = a2[0] + f3;
              p2 = !!h3;
            } else
              !m3 && e[c2] && e[c2].isNull && (n2 = v = d);
            "undefined" !== typeof n2 && (z2.push({ plotX: q, plotY: null === n2 ? g : D.getThreshold(n2), isNull: p2, isCliff: true }), l.push({ plotX: q, plotY: null === v ? g : D.getThreshold(v), doCurve: false }));
          };
          e = e || this.points;
          m3 && (e = this.getStackPoints(e));
          for (n = 0; n < e.length; n++) {
            m3 || (e[n].leftCliff = e[n].rightCliff = e[n].leftNull = e[n].rightNull = void 0);
            var a = e[n].isNull;
            var q = C(e[n].rectPlotX, e[n].plotX);
            var p = m3 ? e[n].yBottom : g;
            if (!a || h2)
              h2 || c(n, n - 1, "left"), a && !m3 && h2 || (z2.push(e[n]), l.push({ x: n, plotX: q, plotY: p })), h2 || c(n, n + 1, "right");
          }
          n = f2.call(this, z2, true, true);
          l.reversed = true;
          a = f2.call(this, l, true, true);
          (p = a[0]) && "M" === p[0] && (a[0] = ["L", p[1], p[2]]);
          a = n.concat(a);
          f2 = f2.call(this, z2, false, h2);
          a.xMap = n.xMap;
          this.areaPath = a;
          return f2;
        }, drawGraph: function() {
          this.areaPath = [];
          y.prototype.drawGraph.apply(this);
          var e = this, f2 = this.areaPath, h2 = this.options, m3 = [["area", "highcharts-area", this.color, h2.fillColor]];
          this.zones.forEach(function(f3, n) {
            m3.push(["zone-area-" + n, "highcharts-area highcharts-zone-area-" + n + " " + f3.className, f3.color || e.color, f3.fillColor || h2.fillColor]);
          });
          m3.forEach(function(m4) {
            var n = m4[0], l = e[n], v = l ? "animate" : "attr", w = {};
            l ? (l.endX = e.preventGraphAnimation ? null : f2.xMap, l.animate({ d: f2 })) : (w.zIndex = 0, l = e[n] = e.chart.renderer.path(f2).addClass(m4[1]).add(e.group), l.isArea = true);
            e.chart.styledMode || (w.fill = C(m4[3], L(m4[2]).setOpacity(C(h2.fillOpacity, 0.75)).get()));
            l[v](w);
            l.startX = f2.xMap;
            l.shiftUnit = h2.step ? 2 : 1;
          });
        }, drawLegendSymbol: z.drawRectangle });
        "";
      });
      N(m, "Series/SplineSeries.js", [m["Core/Series/Series.js"], m["Core/Utilities.js"]], function(f, h) {
        var m2 = h.pick;
        f.seriesType(
          "spline",
          "line",
          {},
          { getPointSpline: function(f2, h2, L) {
            var z = h2.plotX || 0, C = h2.plotY || 0, y = f2[L - 1];
            L = f2[L + 1];
            if (y && !y.isNull && false !== y.doCurve && !h2.isCliff && L && !L.isNull && false !== L.doCurve && !h2.isCliff) {
              f2 = y.plotY || 0;
              var e = L.plotX || 0;
              L = L.plotY || 0;
              var F = 0;
              var v = (1.5 * z + (y.plotX || 0)) / 2.5;
              var x = (1.5 * C + f2) / 2.5;
              e = (1.5 * z + e) / 2.5;
              var D = (1.5 * C + L) / 2.5;
              e !== v && (F = (D - x) * (e - z) / (e - v) + C - D);
              x += F;
              D += F;
              x > f2 && x > C ? (x = Math.max(f2, C), D = 2 * C - x) : x < f2 && x < C && (x = Math.min(f2, C), D = 2 * C - x);
              D > L && D > C ? (D = Math.max(L, C), x = 2 * C - D) : D < L && D < C && (D = Math.min(L, C), x = 2 * C - D);
              h2.rightContX = e;
              h2.rightContY = D;
            }
            h2 = ["C", m2(y.rightContX, y.plotX, 0), m2(y.rightContY, y.plotY, 0), m2(v, z, 0), m2(x, C, 0), z, C];
            y.rightContX = y.rightContY = void 0;
            return h2;
          } }
        );
        "";
      });
      N(m, "Series/AreaSplineSeries.js", [m["Core/Series/Series.js"], m["Mixins/LegendSymbol.js"], m["Core/Options.js"]], function(f, h, m2) {
        var z = f.seriesTypes.area.prototype;
        f.seriesType("areaspline", "spline", m2.defaultOptions.plotOptions.area, { getStackPoints: z.getStackPoints, getGraphPath: z.getGraphPath, drawGraph: z.drawGraph, drawLegendSymbol: h.drawRectangle });
        "";
      });
      N(m, "Series/ColumnSeries.js", [m["Core/Animation/AnimationUtilities.js"], m["Core/Series/Series.js"], m["Core/Color/Color.js"], m["Core/Globals.js"], m["Mixins/LegendSymbol.js"], m["Series/LineSeries.js"], m["Core/Utilities.js"]], function(f, h, m2, z, F, L, K) {
        var C = f.animObject, y = m2.parse;
        f = z.noop;
        var e = K.clamp, I = K.defined, v = K.extend, x = K.isArray, D = K.isNumber, n = K.merge, l = K.pick, J = K.objectEach;
        "";
        h = h.seriesType("column", "line", {
          borderRadius: 0,
          centerInCategory: false,
          groupPadding: 0.2,
          marker: null,
          pointPadding: 0.1,
          minPointLength: 0,
          cropThreshold: 50,
          pointRange: null,
          states: { hover: { halo: false, brightness: 0.1 }, select: { color: "#cccccc", borderColor: "#000000" } },
          dataLabels: { align: void 0, verticalAlign: void 0, y: void 0 },
          startFromThreshold: true,
          stickyTracking: false,
          tooltip: { distance: 6 },
          threshold: 0,
          borderColor: "#ffffff"
        }, { cropShoulder: 0, directTouch: true, trackerGroups: ["group", "dataLabelsGroup"], negStacks: true, init: function() {
          L.prototype.init.apply(this, arguments);
          var e2 = this, f2 = e2.chart;
          f2.hasRendered && f2.series.forEach(function(d) {
            d.type === e2.type && (d.isDirty = true);
          });
        }, getColumnMetrics: function() {
          var e2 = this, f2 = e2.options, d = e2.xAxis, g = e2.yAxis, c = d.options.reversedStacks;
          c = d.reversed && !c || !d.reversed && c;
          var a, h2 = {}, p = 0;
          false === f2.grouping ? p = 1 : e2.chart.series.forEach(function(c2) {
            var d2 = c2.yAxis, f3 = c2.options;
            if (c2.type === e2.type && (c2.visible || !e2.chart.options.chart.ignoreHiddenSeries) && g.len === d2.len && g.pos === d2.pos) {
              if (f3.stacking && "group" !== f3.stacking) {
                a = c2.stackKey;
                "undefined" === typeof h2[a] && (h2[a] = p++);
                var q = h2[a];
              } else
                false !== f3.grouping && (q = p++);
              c2.columnIndex = q;
            }
          });
          var n2 = Math.min(Math.abs(d.transA) * (d.ordinal && d.ordinal.slope || f2.pointRange || d.closestPointRange || d.tickInterval || 1), d.len), m3 = n2 * f2.groupPadding, v2 = (n2 - 2 * m3) / (p || 1);
          f2 = Math.min(f2.maxPointWidth || d.len, l(f2.pointWidth, v2 * (1 - 2 * f2.pointPadding)));
          e2.columnMetrics = { width: f2, offset: (v2 - f2) / 2 + (m3 + ((e2.columnIndex || 0) + (c ? 1 : 0)) * v2 - n2 / 2) * (c ? -1 : 1), paddedWidth: v2, columnCount: p };
          return e2.columnMetrics;
        }, crispCol: function(e2, f2, d, g) {
          var c = this.chart, a = this.borderWidth, h2 = -(a % 2 ? 0.5 : 0);
          a = a % 2 ? 0.5 : 1;
          c.inverted && c.renderer.isVML && (a += 1);
          this.options.crisp && (d = Math.round(e2 + d) + h2, e2 = Math.round(e2) + h2, d -= e2);
          g = Math.round(f2 + g) + a;
          h2 = 0.5 >= Math.abs(f2) && 0.5 < g;
          f2 = Math.round(f2) + a;
          g -= f2;
          h2 && g && (--f2, g += 1);
          return { x: e2, y: f2, width: d, height: g };
        }, adjustForMissingColumns: function(e2, f2, d, g) {
          var c = this, a = this.options.stacking;
          if (!d.isNull && 1 < g.columnCount) {
            var h2 = 0, p = 0;
            J(this.yAxis.stacking && this.yAxis.stacking.stacks, function(g2) {
              if ("number" === typeof d.x && (g2 = g2[d.x.toString()])) {
                var e3 = g2.points[c.index], f3 = g2.total;
                a ? (e3 && (h2 = p), g2.hasValidPoints && p++) : x(e3) && (h2 = e3[1], p = f3 || 0);
              }
            });
            e2 = (d.plotX || 0) + ((p - 1) * g.paddedWidth + f2) / 2 - f2 - h2 * g.paddedWidth;
          }
          return e2;
        }, translate: function() {
          var f2 = this, h2 = f2.chart, d = f2.options, g = f2.dense = 2 > f2.closestPointRange * f2.xAxis.transA;
          g = f2.borderWidth = l(d.borderWidth, g ? 0 : 1);
          var c = f2.xAxis, a = f2.yAxis, q = d.threshold, p = f2.translatedThreshold = a.getThreshold(q), n2 = l(d.minPointLength, 5), m3 = f2.getColumnMetrics(), v2 = m3.width, x2 = f2.barW = Math.max(v2, 1 + 2 * g), y2 = f2.pointXOffset = m3.offset, z2 = f2.dataMin, C2 = f2.dataMax;
          h2.inverted && (p -= 0.5);
          d.pointPadding && (x2 = Math.ceil(x2));
          L.prototype.translate.apply(f2);
          f2.points.forEach(function(g2) {
            var u = l(g2.yBottom, p), b = 999 + Math.abs(u), k = v2, t = g2.plotX || 0;
            b = e(g2.plotY, -b, a.len + b);
            var r = t + y2, w = x2, A = Math.min(b, u), B = Math.max(b, u) - A;
            if (n2 && Math.abs(B) < n2) {
              B = n2;
              var E = !a.reversed && !g2.negative || a.reversed && g2.negative;
              D(q) && D(C2) && g2.y === q && C2 <= q && (a.min || 0) < q && z2 !== C2 && (E = !E);
              A = Math.abs(A - p) > n2 ? u - n2 : p - (E ? n2 : 0);
            }
            I(g2.options.pointWidth) && (k = w = Math.ceil(g2.options.pointWidth), r -= Math.round((k - v2) / 2));
            d.centerInCategory && (r = f2.adjustForMissingColumns(r, k, g2, m3));
            g2.barX = r;
            g2.pointWidth = k;
            g2.tooltipPos = h2.inverted ? [a.len + a.pos - h2.plotLeft - b, c.len + c.pos - h2.plotTop - (t || 0) - y2 - w / 2, B] : [r + w / 2, b + a.pos - h2.plotTop, B];
            g2.shapeType = f2.pointClass.prototype.shapeType || "rect";
            g2.shapeArgs = f2.crispCol.apply(f2, g2.isNull ? [r, p, w, 0] : [r, A, w, B]);
          });
        }, getSymbol: f, drawLegendSymbol: F.drawRectangle, drawGraph: function() {
          this.group[this.dense ? "addClass" : "removeClass"]("highcharts-dense-data");
        }, pointAttribs: function(e2, f2) {
          var d = this.options, g = this.pointAttrToOptions || {};
          var c = g.stroke || "borderColor";
          var a = g["stroke-width"] || "borderWidth", h2 = e2 && e2.color || this.color, p = e2 && e2[c] || d[c] || this.color || h2, m3 = e2 && e2[a] || d[a] || this[a] || 0;
          g = e2 && e2.options.dashStyle || d.dashStyle;
          var r = l(e2 && e2.opacity, d.opacity, 1);
          if (e2 && this.zones.length) {
            var v2 = e2.getZone();
            h2 = e2.options.color || v2 && (v2.color || e2.nonZonedColor) || this.color;
            v2 && (p = v2.borderColor || p, g = v2.dashStyle || g, m3 = v2.borderWidth || m3);
          }
          f2 && e2 && (e2 = n(d.states[f2], e2.options.states && e2.options.states[f2] || {}), f2 = e2.brightness, h2 = e2.color || "undefined" !== typeof f2 && y(h2).brighten(e2.brightness).get() || h2, p = e2[c] || p, m3 = e2[a] || m3, g = e2.dashStyle || g, r = l(e2.opacity, r));
          c = {
            fill: h2,
            stroke: p,
            "stroke-width": m3,
            opacity: r
          };
          g && (c.dashstyle = g);
          return c;
        }, drawPoints: function() {
          var e2 = this, f2 = this.chart, d = e2.options, g = f2.renderer, c = d.animationLimit || 250, a;
          e2.points.forEach(function(h2) {
            var p = h2.graphic, l2 = !!p, q = p && f2.pointCount < c ? "animate" : "attr";
            if (D(h2.plotY) && null !== h2.y) {
              a = h2.shapeArgs;
              p && h2.hasNewShapeType() && (p = p.destroy());
              e2.enabledDataSorting && (h2.startXPos = e2.xAxis.reversed ? -(a ? a.width : 0) : e2.xAxis.width);
              p || (h2.graphic = p = g[h2.shapeType](a).add(h2.group || e2.group)) && e2.enabledDataSorting && f2.hasRendered && f2.pointCount < c && (p.attr({ x: h2.startXPos }), l2 = true, q = "animate");
              if (p && l2)
                p[q](n(a));
              if (d.borderRadius)
                p[q]({ r: d.borderRadius });
              f2.styledMode || p[q](e2.pointAttribs(h2, h2.selected && "select")).shadow(false !== h2.allowShadow && d.shadow, null, d.stacking && !d.borderRadius);
              p.addClass(h2.getClassName(), true);
            } else
              p && (h2.graphic = p.destroy());
          });
        }, animate: function(f2) {
          var h2 = this, d = this.yAxis, g = h2.options, c = this.chart.inverted, a = {}, l2 = c ? "translateX" : "translateY";
          if (f2)
            a.scaleY = 1e-3, f2 = e(d.toPixels(g.threshold), d.pos, d.pos + d.len), c ? a.translateX = f2 - d.len : a.translateY = f2, h2.clipBox && h2.setClip(), h2.group.attr(a);
          else {
            var p = h2.group.attr(l2);
            h2.group.animate({ scaleY: 1 }, v(C(h2.options.animation), { step: function(c2, g2) {
              h2.group && (a[l2] = p + g2.pos * (d.pos - p), h2.group.attr(a));
            } }));
          }
        }, remove: function() {
          var e2 = this, f2 = e2.chart;
          f2.hasRendered && f2.series.forEach(function(d) {
            d.type === e2.type && (d.isDirty = true);
          });
          L.prototype.remove.apply(e2, arguments);
        } });
        "";
        return h;
      });
      N(m, "Series/BarSeries.js", [m["Core/Series/Series.js"]], function(f) {
        f.seriesType("bar", "column", null, { inverted: true });
        "";
      });
      N(m, "Series/ScatterSeries.js", [m["Core/Series/Series.js"], m["Core/Globals.js"], m["Core/Utilities.js"]], function(f, h, m2) {
        m2 = m2.addEvent;
        var z = h.Series;
        f.seriesType("scatter", "line", { lineWidth: 0, findNearestPointBy: "xy", jitter: { x: 0, y: 0 }, marker: { enabled: true }, tooltip: { headerFormat: '<span style="color:{point.color}">●</span> <span style="font-size: 10px"> {series.name}</span><br/>', pointFormat: "x: <b>{point.x}</b><br/>y: <b>{point.y}</b><br/>" } }, { sorted: false, requireSorting: false, noSharedTooltip: true, trackerGroups: [
          "group",
          "markerGroup",
          "dataLabelsGroup"
        ], takeOrdinalPosition: false, drawGraph: function() {
          (this.options.lineWidth || 0 === this.options.lineWidth && this.graph && this.graph.strokeWidth()) && z.prototype.drawGraph.call(this);
        }, applyJitter: function() {
          var f2 = this, h2 = this.options.jitter, m3 = this.points.length;
          h2 && this.points.forEach(function(z2, y) {
            ["x", "y"].forEach(function(e, C) {
              var v = "plot" + e.toUpperCase();
              if (h2[e] && !z2.isNull) {
                var x = f2[e + "Axis"];
                var D = h2[e] * x.transA;
                if (x && !x.isLog) {
                  var n = Math.max(0, z2[v] - D);
                  x = Math.min(x.len, z2[v] + D);
                  C = 1e4 * Math.sin(y + C * m3);
                  z2[v] = n + (x - n) * (C - Math.floor(C));
                  "x" === e && (z2.clientX = z2.plotX);
                }
              }
            });
          });
        } });
        m2(z, "afterTranslate", function() {
          this.applyJitter && this.applyJitter();
        });
        "";
      });
      N(m, "Mixins/CenteredSeries.js", [m["Core/Globals.js"], m["Core/Utilities.js"]], function(f, h) {
        var m2 = h.isNumber, z = h.pick, F = h.relativeLength, L = f.deg2rad;
        return f.CenteredSeriesMixin = { getCenter: function() {
          var h2 = this.options, m3 = this.chart, y = 2 * (h2.slicedOffset || 0), e = m3.plotWidth - 2 * y, I = m3.plotHeight - 2 * y, v = h2.center, x = Math.min(e, I), D = h2.size, n = h2.innerSize || 0;
          "string" === typeof D && (D = parseFloat(D));
          "string" === typeof n && (n = parseFloat(n));
          h2 = [z(v[0], "50%"), z(v[1], "50%"), z(D && 0 > D ? void 0 : h2.size, "100%"), z(n && 0 > n ? void 0 : h2.innerSize || 0, "0%")];
          !m3.angular || this instanceof f.Series || (h2[3] = 0);
          for (v = 0; 4 > v; ++v)
            D = h2[v], m3 = 2 > v || 2 === v && /%$/.test(D), h2[v] = F(D, [e, I, x, h2[2]][v]) + (m3 ? y : 0);
          h2[3] > h2[2] && (h2[3] = h2[2]);
          return h2;
        }, getStartAndEndRadians: function(f2, h2) {
          f2 = m2(f2) ? f2 : 0;
          h2 = m2(h2) && h2 > f2 && 360 > h2 - f2 ? h2 : f2 + 360;
          return { start: L * (f2 + -90), end: L * (h2 + -90) };
        } };
      });
      N(m, "Series/PieSeries.js", [
        m["Core/Animation/AnimationUtilities.js"],
        m["Core/Series/Series.js"],
        m["Mixins/CenteredSeries.js"],
        m["Core/Globals.js"],
        m["Mixins/LegendSymbol.js"],
        m["Series/LineSeries.js"],
        m["Core/Series/Point.js"],
        m["Core/Renderer/SVG/SVGRenderer.js"],
        m["Core/Utilities.js"]
      ], function(f, h, m2, z, F, L, K, C, y) {
        var e = f.setAnimation, I = m2.getStartAndEndRadians;
        f = z.noop;
        var v = y.addEvent, x = y.clamp, D = y.defined, n = y.fireEvent, l = y.isNumber, J = y.merge, w = y.pick, r = y.relativeLength;
        h.seriesType("pie", "line", { center: [null, null], clip: false, colorByPoint: true, dataLabels: {
          allowOverlap: true,
          connectorPadding: 5,
          connectorShape: "fixedOffset",
          crookDistance: "70%",
          distance: 30,
          enabled: true,
          formatter: function() {
            return this.point.isNull ? void 0 : this.point.name;
          },
          softConnector: true,
          x: 0
        }, fillColor: void 0, ignoreHiddenPoint: true, inactiveOtherPoints: true, legendType: "point", marker: null, size: null, showInLegend: false, slicedOffset: 10, stickyTracking: false, tooltip: { followPointer: true }, borderColor: "#ffffff", borderWidth: 1, lineWidth: void 0, states: { hover: { brightness: 0.1 } } }, {
          isCartesian: false,
          requireSorting: false,
          directTouch: true,
          noSharedTooltip: true,
          trackerGroups: ["group", "dataLabelsGroup"],
          axisTypes: [],
          pointAttribs: h.seriesTypes.column.prototype.pointAttribs,
          animate: function(d) {
            var g = this, c = g.points, a = g.startAngleRad;
            d || c.forEach(function(c2) {
              var d2 = c2.graphic, e2 = c2.shapeArgs;
              d2 && e2 && (d2.attr({ r: w(c2.startR, g.center && g.center[3] / 2), start: a, end: a }), d2.animate({ r: e2.r, start: e2.start, end: e2.end }, g.options.animation));
            });
          },
          hasData: function() {
            return !!this.processedXData.length;
          },
          updateTotals: function() {
            var d, g = 0, c = this.points, a = c.length, e2 = this.options.ignoreHiddenPoint;
            for (d = 0; d < a; d++) {
              var f2 = c[d];
              g += e2 && !f2.visible ? 0 : f2.isNull ? 0 : f2.y;
            }
            this.total = g;
            for (d = 0; d < a; d++)
              f2 = c[d], f2.percentage = 0 < g && (f2.visible || !e2) ? f2.y / g * 100 : 0, f2.total = g;
          },
          generatePoints: function() {
            L.prototype.generatePoints.call(this);
            this.updateTotals();
          },
          getX: function(d, g, c) {
            var a = this.center, e2 = this.radii ? this.radii[c.index] : a[2] / 2;
            d = Math.asin(x((d - a[1]) / (e2 + c.labelDistance), -1, 1));
            return a[0] + (g ? -1 : 1) * Math.cos(d) * (e2 + c.labelDistance) + (0 < c.labelDistance ? (g ? -1 : 1) * this.options.dataLabels.padding : 0);
          },
          translate: function(d) {
            this.generatePoints();
            var g = 0, c = this.options, a = c.slicedOffset, e2 = a + (c.borderWidth || 0), f2 = I(c.startAngle, c.endAngle), h2 = this.startAngleRad = f2.start;
            f2 = (this.endAngleRad = f2.end) - h2;
            var l2 = this.points, m3 = c.dataLabels.distance;
            c = c.ignoreHiddenPoint;
            var v2, x2 = l2.length;
            d || (this.center = d = this.getCenter());
            for (v2 = 0; v2 < x2; v2++) {
              var y2 = l2[v2];
              var z2 = h2 + g * f2;
              if (!c || y2.visible)
                g += y2.percentage / 100;
              var E = h2 + g * f2;
              y2.shapeType = "arc";
              y2.shapeArgs = { x: d[0], y: d[1], r: d[2] / 2, innerR: d[3] / 2, start: Math.round(1e3 * z2) / 1e3, end: Math.round(1e3 * E) / 1e3 };
              y2.labelDistance = w(y2.options.dataLabels && y2.options.dataLabels.distance, m3);
              y2.labelDistance = r(y2.labelDistance, y2.shapeArgs.r);
              this.maxLabelDistance = Math.max(this.maxLabelDistance || 0, y2.labelDistance);
              E = (E + z2) / 2;
              E > 1.5 * Math.PI ? E -= 2 * Math.PI : E < -Math.PI / 2 && (E += 2 * Math.PI);
              y2.slicedTranslation = { translateX: Math.round(Math.cos(E) * a), translateY: Math.round(Math.sin(E) * a) };
              var u = Math.cos(E) * d[2] / 2;
              var b = Math.sin(E) * d[2] / 2;
              y2.tooltipPos = [d[0] + 0.7 * u, d[1] + 0.7 * b];
              y2.half = E < -Math.PI / 2 || E > Math.PI / 2 ? 1 : 0;
              y2.angle = E;
              z2 = Math.min(e2, y2.labelDistance / 5);
              y2.labelPosition = { natural: { x: d[0] + u + Math.cos(E) * y2.labelDistance, y: d[1] + b + Math.sin(E) * y2.labelDistance }, "final": {}, alignment: 0 > y2.labelDistance ? "center" : y2.half ? "right" : "left", connectorPosition: { breakAt: { x: d[0] + u + Math.cos(E) * z2, y: d[1] + b + Math.sin(E) * z2 }, touchingSliceAt: { x: d[0] + u, y: d[1] + b } } };
            }
            n(this, "afterTranslate");
          },
          drawEmpty: function() {
            var d = this.startAngleRad, g = this.endAngleRad, c = this.options;
            if (0 === this.total && this.center) {
              var a = this.center[0];
              var e2 = this.center[1];
              this.graph || (this.graph = this.chart.renderer.arc(
                a,
                e2,
                this.center[1] / 2,
                0,
                d,
                g
              ).addClass("highcharts-empty-series").add(this.group));
              this.graph.attr({ d: C.prototype.symbols.arc(a, e2, this.center[2] / 2, 0, { start: d, end: g, innerR: this.center[3] / 2 }) });
              this.chart.styledMode || this.graph.attr({ "stroke-width": c.borderWidth, fill: c.fillColor || "none", stroke: c.color || "#cccccc" });
            } else
              this.graph && (this.graph = this.graph.destroy());
          },
          redrawPoints: function() {
            var d = this, e2 = d.chart, c = e2.renderer, a, f2, h2, l2, n2 = d.options.shadow;
            this.drawEmpty();
            !n2 || d.shadowGroup || e2.styledMode || (d.shadowGroup = c.g("shadow").attr({ zIndex: -1 }).add(d.group));
            d.points.forEach(function(g) {
              var p = {};
              f2 = g.graphic;
              if (!g.isNull && f2) {
                l2 = g.shapeArgs;
                a = g.getTranslate();
                if (!e2.styledMode) {
                  var q = g.shadowGroup;
                  n2 && !q && (q = g.shadowGroup = c.g("shadow").add(d.shadowGroup));
                  q && q.attr(a);
                  h2 = d.pointAttribs(g, g.selected && "select");
                }
                g.delayedRendering ? (f2.setRadialReference(d.center).attr(l2).attr(a), e2.styledMode || f2.attr(h2).attr({ "stroke-linejoin": "round" }).shadow(n2, q), g.delayedRendering = false) : (f2.setRadialReference(d.center), e2.styledMode || J(true, p, h2), J(true, p, l2, a), f2.animate(p));
                f2.attr({ visibility: g.visible ? "inherit" : "hidden" });
                f2.addClass(g.getClassName());
              } else
                f2 && (g.graphic = f2.destroy());
            });
          },
          drawPoints: function() {
            var d = this.chart.renderer;
            this.points.forEach(function(e2) {
              e2.graphic && e2.hasNewShapeType() && (e2.graphic = e2.graphic.destroy());
              e2.graphic || (e2.graphic = d[e2.shapeType](e2.shapeArgs).add(e2.series.group), e2.delayedRendering = true);
            });
          },
          searchPoint: f,
          sortByAngle: function(d, e2) {
            d.sort(function(c, a) {
              return "undefined" !== typeof c.angle && (a.angle - c.angle) * e2;
            });
          },
          drawLegendSymbol: F.drawRectangle,
          getCenter: m2.getCenter,
          getSymbol: f,
          drawGraph: null
        }, { init: function() {
          K.prototype.init.apply(this, arguments);
          var d = this;
          d.name = w(d.name, "Slice");
          var e2 = function(c) {
            d.slice("select" === c.type);
          };
          v(d, "select", e2);
          v(d, "unselect", e2);
          return d;
        }, isValid: function() {
          return l(this.y) && 0 <= this.y;
        }, setVisible: function(d, e2) {
          var c = this, a = c.series, g = a.chart, f2 = a.options.ignoreHiddenPoint;
          e2 = w(e2, f2);
          d !== c.visible && (c.visible = c.options.visible = d = "undefined" === typeof d ? !c.visible : d, a.options.data[a.data.indexOf(c)] = c.options, [
            "graphic",
            "dataLabel",
            "connector",
            "shadowGroup"
          ].forEach(function(a2) {
            if (c[a2])
              c[a2][d ? "show" : "hide"](true);
          }), c.legendItem && g.legend.colorizeItem(c, d), d || "hover" !== c.state || c.setState(""), f2 && (a.isDirty = true), e2 && g.redraw());
        }, slice: function(d, g, c) {
          var a = this.series;
          e(c, a.chart);
          w(g, true);
          this.sliced = this.options.sliced = D(d) ? d : !this.sliced;
          a.options.data[a.data.indexOf(this)] = this.options;
          this.graphic && this.graphic.animate(this.getTranslate());
          this.shadowGroup && this.shadowGroup.animate(this.getTranslate());
        }, getTranslate: function() {
          return this.sliced ? this.slicedTranslation : { translateX: 0, translateY: 0 };
        }, haloPath: function(d) {
          var e2 = this.shapeArgs;
          return this.sliced || !this.visible ? [] : this.series.chart.renderer.symbols.arc(e2.x, e2.y, e2.r + d, e2.r + d, { innerR: e2.r - 1, start: e2.start, end: e2.end });
        }, connectorShapes: { fixedOffset: function(d, e2, c) {
          var a = e2.breakAt;
          e2 = e2.touchingSliceAt;
          return [["M", d.x, d.y], c.softConnector ? ["C", d.x + ("left" === d.alignment ? -5 : 5), d.y, 2 * a.x - e2.x, 2 * a.y - e2.y, a.x, a.y] : ["L", a.x, a.y], ["L", e2.x, e2.y]];
        }, straight: function(d, e2) {
          e2 = e2.touchingSliceAt;
          return [[
            "M",
            d.x,
            d.y
          ], ["L", e2.x, e2.y]];
        }, crookedLine: function(d, e2, c) {
          e2 = e2.touchingSliceAt;
          var a = this.series, g = a.center[0], f2 = a.chart.plotWidth, h2 = a.chart.plotLeft;
          a = d.alignment;
          var l2 = this.shapeArgs.r;
          c = r(c.crookDistance, 1);
          f2 = "left" === a ? g + l2 + (f2 + h2 - g - l2) * (1 - c) : h2 + (g - l2) * c;
          c = ["L", f2, d.y];
          g = true;
          if ("left" === a ? f2 > d.x || f2 < e2.x : f2 < d.x || f2 > e2.x)
            g = false;
          d = [["M", d.x, d.y]];
          g && d.push(c);
          d.push(["L", e2.x, e2.y]);
          return d;
        } }, getConnectorPath: function() {
          var d = this.labelPosition, e2 = this.series.options.dataLabels, c = e2.connectorShape, a = this.connectorShapes;
          a[c] && (c = a[c]);
          return c.call(this, { x: d.final.x, y: d.final.y, alignment: d.alignment }, d.connectorPosition, e2);
        } });
        "";
      });
      N(m, "Core/Series/DataLabels.js", [m["Core/Animation/AnimationUtilities.js"], m["Core/Globals.js"], m["Core/Series/CartesianSeries.js"], m["Core/Utilities.js"]], function(f, h, m2, z) {
        var F = f.getDeferredAnimation;
        f = h.noop;
        var L = h.seriesTypes, K = z.arrayMax, C = z.clamp, y = z.defined, e = z.extend, I = z.fireEvent, v = z.format, x = z.isArray, D = z.merge, n = z.objectEach, l = z.pick, J = z.relativeLength, w = z.splat, r = z.stableSort;
        "";
        h.distribute = function(d, e2, c) {
          function a(a2, c2) {
            return a2.target - c2.target;
          }
          var f2, g = true, n2 = d, m3 = [];
          var v2 = 0;
          var w2 = n2.reducedLen || e2;
          for (f2 = d.length; f2--; )
            v2 += d[f2].size;
          if (v2 > w2) {
            r(d, function(a2, c2) {
              return (c2.rank || 0) - (a2.rank || 0);
            });
            for (v2 = f2 = 0; v2 <= w2; )
              v2 += d[f2].size, f2++;
            m3 = d.splice(f2 - 1, d.length);
          }
          r(d, a);
          for (d = d.map(function(a2) {
            return { size: a2.size, targets: [a2.target], align: l(a2.align, 0.5) };
          }); g; ) {
            for (f2 = d.length; f2--; )
              g = d[f2], v2 = (Math.min.apply(0, g.targets) + Math.max.apply(0, g.targets)) / 2, g.pos = C(v2 - g.size * g.align, 0, e2 - g.size);
            f2 = d.length;
            for (g = false; f2--; )
              0 < f2 && d[f2 - 1].pos + d[f2 - 1].size > d[f2].pos && (d[f2 - 1].size += d[f2].size, d[f2 - 1].targets = d[f2 - 1].targets.concat(d[f2].targets), d[f2 - 1].align = 0.5, d[f2 - 1].pos + d[f2 - 1].size > e2 && (d[f2 - 1].pos = e2 - d[f2 - 1].size), d.splice(f2, 1), g = true);
          }
          n2.push.apply(n2, m3);
          f2 = 0;
          d.some(function(a2) {
            var d2 = 0;
            if (a2.targets.some(function() {
              n2[f2].pos = a2.pos + d2;
              if ("undefined" !== typeof c && Math.abs(n2[f2].pos - n2[f2].target) > c)
                return n2.slice(0, f2 + 1).forEach(function(a3) {
                  delete a3.pos;
                }), n2.reducedLen = (n2.reducedLen || e2) - 0.1 * e2, n2.reducedLen > 0.1 * e2 && h.distribute(n2, e2, c), true;
              d2 += n2[f2].size;
              f2++;
            }))
              return true;
          });
          r(n2, a);
        };
        m2.prototype.drawDataLabels = function() {
          function d(a2, c2) {
            var d2 = c2.filter;
            return d2 ? (c2 = d2.operator, a2 = a2[d2.property], d2 = d2.value, ">" === c2 && a2 > d2 || "<" === c2 && a2 < d2 || ">=" === c2 && a2 >= d2 || "<=" === c2 && a2 <= d2 || "==" === c2 && a2 == d2 || "===" === c2 && a2 === d2 ? true : false) : true;
          }
          function e2(a2, c2) {
            var d2 = [], b;
            if (x(a2) && !x(c2))
              d2 = a2.map(function(a3) {
                return D(a3, c2);
              });
            else if (x(c2) && !x(a2))
              d2 = c2.map(function(b2) {
                return D(a2, b2);
              });
            else if (x(a2) || x(c2))
              for (b = Math.max(a2.length, c2.length); b--; )
                d2[b] = D(a2[b], c2[b]);
            else
              d2 = D(a2, c2);
            return d2;
          }
          var c = this, a = c.chart, f2 = c.options, h2 = f2.dataLabels, m3 = c.points, r2, G = c.hasRendered || 0, z2 = h2.animation;
          z2 = h2.defer ? F(a, z2, c) : { defer: 0, duration: 0 };
          var C2 = a.renderer;
          h2 = e2(e2(a.options.plotOptions && a.options.plotOptions.series && a.options.plotOptions.series.dataLabels, a.options.plotOptions && a.options.plotOptions[c.type] && a.options.plotOptions[c.type].dataLabels), h2);
          I(this, "drawDataLabels");
          if (x(h2) || h2.enabled || c._hasPointLabels) {
            var J2 = c.plotGroup("dataLabelsGroup", "data-labels", G ? "inherit" : "hidden", h2.zIndex || 6);
            J2.attr({ opacity: +G });
            !G && (G = c.dataLabelsGroup) && (c.visible && J2.show(true), G[f2.animation ? "animate" : "attr"]({ opacity: 1 }, z2));
            m3.forEach(function(g) {
              r2 = w(e2(h2, g.dlOptions || g.options && g.options.dataLabels));
              r2.forEach(function(e3, h3) {
                var b = e3.enabled && (!g.isNull || g.dataLabelOnNull) && d(g, e3), k = g.dataLabels ? g.dataLabels[h3] : g.dataLabel, p = g.connectors ? g.connectors[h3] : g.connector, m4 = l(e3.distance, g.labelDistance), q = !k;
                if (b) {
                  var u = g.getLabelConfig();
                  var r3 = l(e3[g.formatPrefix + "Format"], e3.format);
                  u = y(r3) ? v(r3, u, a) : (e3[g.formatPrefix + "Formatter"] || e3.formatter).call(u, e3);
                  r3 = e3.style;
                  var A = e3.rotation;
                  a.styledMode || (r3.color = l(e3.color, r3.color, c.color, "#000000"), "contrast" === r3.color ? (g.contrastColor = C2.getContrast(g.color || c.color), r3.color = !y(m4) && e3.inside || 0 > m4 || f2.stacking ? g.contrastColor : "#000000") : delete g.contrastColor, f2.cursor && (r3.cursor = f2.cursor));
                  var w2 = { r: e3.borderRadius || 0, rotation: A, padding: e3.padding, zIndex: 1 };
                  a.styledMode || (w2.fill = e3.backgroundColor, w2.stroke = e3.borderColor, w2["stroke-width"] = e3.borderWidth);
                  n(w2, function(a2, b2) {
                    "undefined" === typeof a2 && delete w2[b2];
                  });
                }
                !k || b && y(u) ? b && y(u) && (k ? w2.text = u : (g.dataLabels = g.dataLabels || [], k = g.dataLabels[h3] = A ? C2.text(u, 0, -9999, e3.useHTML).addClass("highcharts-data-label") : C2.label(u, 0, -9999, e3.shape, null, null, e3.useHTML, null, "data-label"), h3 || (g.dataLabel = k), k.addClass(" highcharts-data-label-color-" + g.colorIndex + " " + (e3.className || "") + (e3.useHTML ? " highcharts-tracker" : ""))), k.options = e3, k.attr(w2), a.styledMode || k.css(r3).shadow(e3.shadow), k.added || k.add(J2), e3.textPath && !e3.useHTML && (k.setTextPath(g.getDataLabelPath && g.getDataLabelPath(k) || g.graphic, e3.textPath), g.dataLabelPath && !e3.textPath.enabled && (g.dataLabelPath = g.dataLabelPath.destroy())), c.alignDataLabel(g, k, e3, null, q)) : (g.dataLabel = g.dataLabel && g.dataLabel.destroy(), g.dataLabels && (1 === g.dataLabels.length ? delete g.dataLabels : delete g.dataLabels[h3]), h3 || delete g.dataLabel, p && (g.connector = g.connector.destroy(), g.connectors && (1 === g.connectors.length ? delete g.connectors : delete g.connectors[h3])));
              });
            });
          }
          I(this, "afterDrawDataLabels");
        };
        m2.prototype.alignDataLabel = function(d, g, c, a, f2) {
          var h2 = this, n2 = this.chart, m3 = this.isCartesian && n2.inverted, q = this.enabledDataSorting, r2 = l(d.dlBox && d.dlBox.centerX, d.plotX, -9999), v2 = l(d.plotY, -9999), w2 = g.getBBox(), x2 = c.rotation, y2 = c.align, u = n2.isInsidePlot(r2, Math.round(v2), m3), b = "justify" === l(c.overflow, q ? "none" : "justify"), k = this.visible && false !== d.visible && (d.series.forceDL || q && !b || u || c.inside && a && n2.isInsidePlot(r2, m3 ? a.x + 1 : a.y + a.height - 1, m3));
          var t = function(a2) {
            q && h2.xAxis && !b && h2.setDataLabelStartPos(d, g, f2, u, a2);
          };
          if (k) {
            var z2 = n2.renderer.fontMetrics(
              n2.styledMode ? void 0 : c.style.fontSize,
              g
            ).b;
            a = e({ x: m3 ? this.yAxis.len - v2 : r2, y: Math.round(m3 ? this.xAxis.len - r2 : v2), width: 0, height: 0 }, a);
            e(c, { width: w2.width, height: w2.height });
            x2 ? (b = false, r2 = n2.renderer.rotCorr(z2, x2), r2 = { x: a.x + (c.x || 0) + a.width / 2 + r2.x, y: a.y + (c.y || 0) + { top: 0, middle: 0.5, bottom: 1 }[c.verticalAlign] * a.height }, t(r2), g[f2 ? "attr" : "animate"](r2).attr({ align: y2 }), t = (x2 + 720) % 360, t = 180 < t && 360 > t, "left" === y2 ? r2.y -= t ? w2.height : 0 : "center" === y2 ? (r2.x -= w2.width / 2, r2.y -= w2.height / 2) : "right" === y2 && (r2.x -= w2.width, r2.y -= t ? 0 : w2.height), g.placed = true, g.alignAttr = r2) : (t(a), g.align(
              c,
              null,
              a
            ), r2 = g.alignAttr);
            b && 0 <= a.height ? this.justifyDataLabel(g, c, r2, w2, a, f2) : l(c.crop, true) && (k = n2.isInsidePlot(r2.x, r2.y) && n2.isInsidePlot(r2.x + w2.width, r2.y + w2.height));
            if (c.shape && !x2)
              g[f2 ? "attr" : "animate"]({ anchorX: m3 ? n2.plotWidth - d.plotY : d.plotX, anchorY: m3 ? n2.plotHeight - d.plotX : d.plotY });
          }
          f2 && q && (g.placed = false);
          k || q && !b || (g.hide(true), g.placed = false);
        };
        m2.prototype.setDataLabelStartPos = function(d, e2, c, a, f2) {
          var g = this.chart, h2 = g.inverted, l2 = this.xAxis, n2 = l2.reversed, m3 = h2 ? e2.height / 2 : e2.width / 2;
          d = (d = d.pointWidth) ? d / 2 : 0;
          l2 = h2 ? f2.x : n2 ? -m3 - d : l2.width - m3 + d;
          f2 = h2 ? n2 ? this.yAxis.height - m3 + d : -m3 - d : f2.y;
          e2.startXPos = l2;
          e2.startYPos = f2;
          a ? "hidden" === e2.visibility && (e2.show(), e2.attr({ opacity: 0 }).animate({ opacity: 1 })) : e2.attr({ opacity: 1 }).animate({ opacity: 0 }, void 0, e2.hide);
          g.hasRendered && (c && e2.attr({ x: e2.startXPos, y: e2.startYPos }), e2.placed = true);
        };
        m2.prototype.justifyDataLabel = function(d, e2, c, a, f2, h2) {
          var g = this.chart, p = e2.align, l2 = e2.verticalAlign, n2 = d.box ? 0 : d.padding || 0, m3 = e2.x;
          m3 = void 0 === m3 ? 0 : m3;
          var q = e2.y;
          var r2 = void 0 === q ? 0 : q;
          q = c.x + n2;
          if (0 > q) {
            "right" === p && 0 <= m3 ? (e2.align = "left", e2.inside = true) : m3 -= q;
            var v2 = true;
          }
          q = c.x + a.width - n2;
          q > g.plotWidth && ("left" === p && 0 >= m3 ? (e2.align = "right", e2.inside = true) : m3 += g.plotWidth - q, v2 = true);
          q = c.y + n2;
          0 > q && ("bottom" === l2 && 0 <= r2 ? (e2.verticalAlign = "top", e2.inside = true) : r2 -= q, v2 = true);
          q = c.y + a.height - n2;
          q > g.plotHeight && ("top" === l2 && 0 >= r2 ? (e2.verticalAlign = "bottom", e2.inside = true) : r2 += g.plotHeight - q, v2 = true);
          v2 && (e2.x = m3, e2.y = r2, d.placed = !h2, d.align(e2, void 0, f2));
          return v2;
        };
        L.pie && (L.pie.prototype.dataLabelPositioners = { radialDistributionY: function(d) {
          return d.top + d.distributeBox.pos;
        }, radialDistributionX: function(d, e2, c, a) {
          return d.getX(c < e2.top + 2 || c > e2.bottom - 2 ? a : c, e2.half, e2);
        }, justify: function(d, e2, c) {
          return c[0] + (d.half ? -1 : 1) * (e2 + d.labelDistance);
        }, alignToPlotEdges: function(d, e2, c, a) {
          d = d.getBBox().width;
          return e2 ? d + a : c - d - a;
        }, alignToConnectors: function(d, e2, c, a) {
          var f2 = 0, g;
          d.forEach(function(a2) {
            g = a2.dataLabel.getBBox().width;
            g > f2 && (f2 = g);
          });
          return e2 ? f2 + a : c - f2 - a;
        } }, L.pie.prototype.drawDataLabels = function() {
          var d = this, e2 = d.data, c, a = d.chart, f2 = d.options.dataLabels || {}, p = f2.connectorPadding, n2, r2 = a.plotWidth, v2 = a.plotHeight, w2 = a.plotLeft, x2 = Math.round(a.chartWidth / 3), z2, C2 = d.center, E = C2[2] / 2, u = C2[1], b, k, t, F2, I2 = [[], []], J2, L2, N2, P, S = [0, 0, 0, 0], Y = d.dataLabelPositioners, W;
          d.visible && (f2.enabled || d._hasPointLabels) && (e2.forEach(function(a2) {
            a2.dataLabel && a2.visible && a2.dataLabel.shortened && (a2.dataLabel.attr({ width: "auto" }).css({ width: "auto", textOverflow: "clip" }), a2.dataLabel.shortened = false);
          }), m2.prototype.drawDataLabels.apply(d), e2.forEach(function(a2) {
            a2.dataLabel && (a2.visible ? (I2[a2.half].push(a2), a2.dataLabel._pos = null, !y(f2.style.width) && !y(a2.options.dataLabels && a2.options.dataLabels.style && a2.options.dataLabels.style.width) && a2.dataLabel.getBBox().width > x2 && (a2.dataLabel.css({ width: Math.round(0.7 * x2) + "px" }), a2.dataLabel.shortened = true)) : (a2.dataLabel = a2.dataLabel.destroy(), a2.dataLabels && 1 === a2.dataLabels.length && delete a2.dataLabels));
          }), I2.forEach(function(e3, g) {
            var n3 = e3.length, m3 = [], q;
            if (n3) {
              d.sortByAngle(e3, g - 0.5);
              if (0 < d.maxLabelDistance) {
                var A = Math.max(0, u - E - d.maxLabelDistance);
                var B = Math.min(u + E + d.maxLabelDistance, a.plotHeight);
                e3.forEach(function(b2) {
                  0 < b2.labelDistance && b2.dataLabel && (b2.top = Math.max(0, u - E - b2.labelDistance), b2.bottom = Math.min(u + E + b2.labelDistance, a.plotHeight), q = b2.dataLabel.getBBox().height || 21, b2.distributeBox = { target: b2.labelPosition.natural.y - b2.top + q / 2, size: q, rank: b2.y }, m3.push(b2.distributeBox));
                });
                A = B + q - A;
                h.distribute(m3, A, A / 5);
              }
              for (P = 0; P < n3; P++) {
                c = e3[P];
                t = c.labelPosition;
                b = c.dataLabel;
                N2 = false === c.visible ? "hidden" : "inherit";
                L2 = A = t.natural.y;
                m3 && y(c.distributeBox) && ("undefined" === typeof c.distributeBox.pos ? N2 = "hidden" : (F2 = c.distributeBox.size, L2 = Y.radialDistributionY(c)));
                delete c.positionIndex;
                if (f2.justify)
                  J2 = Y.justify(c, E, C2);
                else
                  switch (f2.alignTo) {
                    case "connectors":
                      J2 = Y.alignToConnectors(e3, g, r2, w2);
                      break;
                    case "plotEdges":
                      J2 = Y.alignToPlotEdges(b, g, r2, w2);
                      break;
                    default:
                      J2 = Y.radialDistributionX(d, c, L2, A);
                  }
                b._attr = { visibility: N2, align: t.alignment };
                W = c.options.dataLabels || {};
                b._pos = { x: J2 + l(W.x, f2.x) + ({ left: p, right: -p }[t.alignment] || 0), y: L2 + l(W.y, f2.y) - 10 };
                t.final.x = J2;
                t.final.y = L2;
                l(f2.crop, true) && (k = b.getBBox().width, A = null, J2 - k < p && 1 === g ? (A = Math.round(k - J2 + p), S[3] = Math.max(A, S[3])) : J2 + k > r2 - p && 0 === g && (A = Math.round(J2 + k - r2 + p), S[1] = Math.max(A, S[1])), 0 > L2 - F2 / 2 ? S[0] = Math.max(Math.round(-L2 + F2 / 2), S[0]) : L2 + F2 / 2 > v2 && (S[2] = Math.max(Math.round(L2 + F2 / 2 - v2), S[2])), b.sideOverflow = A);
              }
            }
          }), 0 === K(S) || this.verifyDataLabelOverflow(S)) && (this.placeDataLabels(), this.points.forEach(function(c2) {
            W = D(f2, c2.options.dataLabels);
            if (n2 = l(W.connectorWidth, 1)) {
              var e3;
              z2 = c2.connector;
              if ((b = c2.dataLabel) && b._pos && c2.visible && 0 < c2.labelDistance) {
                N2 = b._attr.visibility;
                if (e3 = !z2)
                  c2.connector = z2 = a.renderer.path().addClass("highcharts-data-label-connector  highcharts-color-" + c2.colorIndex + (c2.className ? " " + c2.className : "")).add(d.dataLabelsGroup), a.styledMode || z2.attr({ "stroke-width": n2, stroke: W.connectorColor || c2.color || "#666666" });
                z2[e3 ? "attr" : "animate"]({ d: c2.getConnectorPath() });
                z2.attr("visibility", N2);
              } else
                z2 && (c2.connector = z2.destroy());
            }
          }));
        }, L.pie.prototype.placeDataLabels = function() {
          this.points.forEach(function(d) {
            var e2 = d.dataLabel, c;
            e2 && d.visible && ((c = e2._pos) ? (e2.sideOverflow && (e2._attr.width = Math.max(e2.getBBox().width - e2.sideOverflow, 0), e2.css({ width: e2._attr.width + "px", textOverflow: (this.options.dataLabels.style || {}).textOverflow || "ellipsis" }), e2.shortened = true), e2.attr(e2._attr), e2[e2.moved ? "animate" : "attr"](c), e2.moved = true) : e2 && e2.attr({ y: -9999 }));
            delete d.distributeBox;
          }, this);
        }, L.pie.prototype.alignDataLabel = f, L.pie.prototype.verifyDataLabelOverflow = function(d) {
          var e2 = this.center, c = this.options, a = c.center, f2 = c.minSize || 80, h2 = null !== c.size;
          if (!h2) {
            if (null !== a[0])
              var l2 = Math.max(e2[2] - Math.max(d[1], d[3]), f2);
            else
              l2 = Math.max(e2[2] - d[1] - d[3], f2), e2[0] += (d[3] - d[1]) / 2;
            null !== a[1] ? l2 = C(l2, f2, e2[2] - Math.max(d[0], d[2])) : (l2 = C(l2, f2, e2[2] - d[0] - d[2]), e2[1] += (d[0] - d[2]) / 2);
            l2 < e2[2] ? (e2[2] = l2, e2[3] = Math.min(J(c.innerSize || 0, l2), l2), this.translate(e2), this.drawDataLabels && this.drawDataLabels()) : h2 = true;
          }
          return h2;
        });
        L.column && (L.column.prototype.alignDataLabel = function(d, e2, c, a, f2) {
          var g = this.chart.inverted, h2 = d.series, n2 = d.dlBox || d.shapeArgs, q = l(d.below, d.plotY > l(this.translatedThreshold, h2.yAxis.len)), r2 = l(c.inside, !!this.options.stacking);
          n2 && (a = D(n2), 0 > a.y && (a.height += a.y, a.y = 0), n2 = a.y + a.height - h2.yAxis.len, 0 < n2 && n2 < a.height && (a.height -= n2), g && (a = { x: h2.yAxis.len - a.y - a.height, y: h2.xAxis.len - a.x - a.width, width: a.height, height: a.width }), r2 || (g ? (a.x += q ? 0 : a.width, a.width = 0) : (a.y += q ? a.height : 0, a.height = 0)));
          c.align = l(c.align, !g || r2 ? "center" : q ? "right" : "left");
          c.verticalAlign = l(c.verticalAlign, g || r2 ? "middle" : q ? "top" : "bottom");
          m2.prototype.alignDataLabel.call(this, d, e2, c, a, f2);
          c.inside && d.contrastColor && e2.css({ color: d.contrastColor });
        });
      });
      N(m, "Extensions/OverlappingDataLabels.js", [m["Core/Chart/Chart.js"], m["Core/Utilities.js"]], function(f, h) {
        var m2 = h.addEvent, z = h.fireEvent, F = h.isArray, L = h.isNumber, K = h.objectEach, C = h.pick;
        m2(f, "render", function() {
          var f2 = [];
          (this.labelCollectors || []).forEach(function(e) {
            f2 = f2.concat(e());
          });
          (this.yAxis || []).forEach(function(e) {
            e.stacking && e.options.stackLabels && !e.options.stackLabels.allowOverlap && K(e.stacking.stacks, function(e2) {
              K(e2, function(e3) {
                f2.push(e3.label);
              });
            });
          });
          (this.series || []).forEach(function(e) {
            var h2 = e.options.dataLabels;
            e.visible && (false !== h2.enabled || e._hasPointLabels) && (e.nodes || e.points).forEach(function(e2) {
              e2.visible && (F(e2.dataLabels) ? e2.dataLabels : e2.dataLabel ? [e2.dataLabel] : []).forEach(function(h3) {
                var m3 = h3.options;
                h3.labelrank = C(m3.labelrank, e2.labelrank, e2.shapeArgs && e2.shapeArgs.height);
                m3.allowOverlap || f2.push(h3);
              });
            });
          });
          this.hideOverlappingLabels(f2);
        });
        f.prototype.hideOverlappingLabels = function(f2) {
          var e = this, h2 = f2.length, m3 = e.renderer, x, y, n, l = false;
          var C2 = function(d) {
            var e2, c = d.box ? 0 : d.padding || 0, a = e2 = 0, f3;
            if (d && (!d.alignAttr || d.placed)) {
              var h3 = d.alignAttr || { x: d.attr("x"), y: d.attr("y") };
              var l2 = d.parentGroup;
              d.width || (e2 = d.getBBox(), d.width = e2.width, d.height = e2.height, e2 = m3.fontMetrics(null, d.element).h);
              var n2 = d.width - 2 * c;
              (f3 = { left: "0", center: "0.5", right: "1" }[d.alignValue]) ? a = +f3 * n2 : L(d.x) && Math.round(d.x) !== d.translateX && (a = d.x - d.translateX);
              return { x: h3.x + (l2.translateX || 0) + c - (a || 0), y: h3.y + (l2.translateY || 0) + c - e2, width: d.width - 2 * c, height: d.height - 2 * c };
            }
          };
          for (y = 0; y < h2; y++)
            if (x = f2[y])
              x.oldOpacity = x.opacity, x.newOpacity = 1, x.absoluteBox = C2(x);
          f2.sort(function(d, e2) {
            return (e2.labelrank || 0) - (d.labelrank || 0);
          });
          for (y = 0; y < h2; y++) {
            var w = (C2 = f2[y]) && C2.absoluteBox;
            for (x = y + 1; x < h2; ++x) {
              var r = (n = f2[x]) && n.absoluteBox;
              !w || !r || C2 === n || 0 === C2.newOpacity || 0 === n.newOpacity || r.x >= w.x + w.width || r.x + r.width <= w.x || r.y >= w.y + w.height || r.y + r.height <= w.y || ((C2.labelrank < n.labelrank ? C2 : n).newOpacity = 0);
            }
          }
          f2.forEach(function(d) {
            if (d) {
              var f3 = d.newOpacity;
              d.oldOpacity !== f3 && (d.alignAttr && d.placed ? (d[f3 ? "removeClass" : "addClass"]("highcharts-data-label-hidden"), l = true, d.alignAttr.opacity = f3, d[d.isOld ? "animate" : "attr"](d.alignAttr, null, function() {
                e.styledMode || d.css({ pointerEvents: f3 ? "auto" : "none" });
                d.visibility = f3 ? "inherit" : "hidden";
              }), z(e, "afterHideOverlappingLabel")) : d.attr({ opacity: f3 }));
              d.isOld = true;
            }
          });
          l && z(e, "afterHideAllOverlappingLabels");
        };
      });
      N(m, "Core/Interaction.js", [m["Core/Series/Series.js"], m["Core/Chart/Chart.js"], m["Core/Globals.js"], m["Core/Legend.js"], m["Series/LineSeries.js"], m["Core/Options.js"], m["Core/Series/Point.js"], m["Core/Utilities.js"]], function(f, h, m2, z, F, L, K, C) {
        f = f.seriesTypes;
        var y = m2.hasTouch, e = m2.svg, I = L.defaultOptions, v = C.addEvent, x = C.createElement, D = C.css, n = C.defined, l = C.extend, J = C.fireEvent, w = C.isArray, r = C.isFunction, d = C.isNumber, g = C.isObject, c = C.merge, a = C.objectEach, q = C.pick;
        "";
        m2 = m2.TrackerMixin = { drawTrackerPoint: function() {
          var a2 = this, c2 = a2.chart, d2 = c2.pointer, e2 = function(a3) {
            var c3 = d2.getPointFromEvent(a3);
            "undefined" !== typeof c3 && (d2.isDirectTouch = true, c3.onMouseOver(a3));
          }, f2;
          a2.points.forEach(function(a3) {
            f2 = w(a3.dataLabels) ? a3.dataLabels : a3.dataLabel ? [a3.dataLabel] : [];
            a3.graphic && (a3.graphic.element.point = a3);
            f2.forEach(function(c3) {
              c3.div ? c3.div.point = a3 : c3.element.point = a3;
            });
          });
          a2._hasTracking || (a2.trackerGroups.forEach(function(f3) {
            if (a2[f3]) {
              a2[f3].addClass("highcharts-tracker").on(
                "mouseover",
                e2
              ).on("mouseout", function(a3) {
                d2.onTrackerMouseOut(a3);
              });
              if (y)
                a2[f3].on("touchstart", e2);
              !c2.styledMode && a2.options.cursor && a2[f3].css(D).css({ cursor: a2.options.cursor });
            }
          }), a2._hasTracking = true);
          J(this, "afterDrawTracker");
        }, drawTrackerGraph: function() {
          var a2 = this, c2 = a2.options, d2 = c2.trackByArea, f2 = [].concat(d2 ? a2.areaPath : a2.graphPath), g2 = a2.chart, h2 = g2.pointer, l2 = g2.renderer, n2 = g2.options.tooltip.snap, m3 = a2.tracker, q2 = function(b2) {
            if (g2.hoverSeries !== a2)
              a2.onMouseOver();
          }, b = "rgba(192,192,192," + (e ? 1e-4 : 2e-3) + ")";
          m3 ? m3.attr({ d: f2 }) : a2.graph && (a2.tracker = l2.path(f2).attr({ visibility: a2.visible ? "visible" : "hidden", zIndex: 2 }).addClass(d2 ? "highcharts-tracker-area" : "highcharts-tracker-line").add(a2.group), g2.styledMode || a2.tracker.attr({ "stroke-linecap": "round", "stroke-linejoin": "round", stroke: b, fill: d2 ? b : "none", "stroke-width": a2.graph.strokeWidth() + (d2 ? 0 : 2 * n2) }), [a2.tracker, a2.markerGroup].forEach(function(a3) {
            a3.addClass("highcharts-tracker").on("mouseover", q2).on("mouseout", function(a4) {
              h2.onTrackerMouseOut(a4);
            });
            c2.cursor && !g2.styledMode && a3.css({ cursor: c2.cursor });
            if (y)
              a3.on("touchstart", q2);
          }));
          J(this, "afterDrawTracker");
        } };
        f.column && (f.column.prototype.drawTracker = m2.drawTrackerPoint);
        f.pie && (f.pie.prototype.drawTracker = m2.drawTrackerPoint);
        f.scatter && (f.scatter.prototype.drawTracker = m2.drawTrackerPoint);
        l(z.prototype, { setItemEvents: function(a2, d2, e2) {
          var f2 = this, g2 = f2.chart.renderer.boxWrapper, h2 = a2 instanceof K, p = "highcharts-legend-" + (h2 ? "point" : "series") + "-active", l2 = f2.chart.styledMode;
          (e2 ? [d2, a2.legendSymbol] : [a2.legendGroup]).forEach(function(e3) {
            if (e3)
              e3.on("mouseover", function() {
                a2.visible && f2.allItems.forEach(function(c2) {
                  a2 !== c2 && c2.setState("inactive", !h2);
                });
                a2.setState("hover");
                a2.visible && g2.addClass(p);
                l2 || d2.css(f2.options.itemHoverStyle);
              }).on("mouseout", function() {
                f2.chart.styledMode || d2.css(c(a2.visible ? f2.itemStyle : f2.itemHiddenStyle));
                f2.allItems.forEach(function(c2) {
                  a2 !== c2 && c2.setState("", !h2);
                });
                g2.removeClass(p);
                a2.setState();
              }).on("click", function(c2) {
                var b = function() {
                  a2.setVisible && a2.setVisible();
                  f2.allItems.forEach(function(b2) {
                    a2 !== b2 && b2.setState(a2.visible ? "inactive" : "", !h2);
                  });
                };
                g2.removeClass(p);
                c2 = { browserEvent: c2 };
                a2.firePointEvent ? a2.firePointEvent("legendItemClick", c2, b) : J(a2, "legendItemClick", c2, b);
              });
          });
        }, createCheckboxForItem: function(a2) {
          a2.checkbox = x("input", { type: "checkbox", className: "highcharts-legend-checkbox", checked: a2.selected, defaultChecked: a2.selected }, this.options.itemCheckboxStyle, this.chart.container);
          v(a2.checkbox, "click", function(c2) {
            J(a2.series || a2, "checkboxClick", { checked: c2.target.checked, item: a2 }, function() {
              a2.select();
            });
          });
        } });
        l(h.prototype, { showResetZoom: function() {
          function a2() {
            c2.zoomOut();
          }
          var c2 = this, d2 = I.lang, e2 = c2.options.chart.resetZoomButton, f2 = e2.theme, g2 = f2.states, h2 = "chart" === e2.relativeTo || "spaceBox" === e2.relativeTo ? null : "plotBox";
          J(this, "beforeShowResetZoom", null, function() {
            c2.resetZoomButton = c2.renderer.button(d2.resetZoom, null, null, a2, f2, g2 && g2.hover).attr({ align: e2.position.align, title: d2.resetZoomTitle }).addClass("highcharts-reset-zoom").add().align(e2.position, false, h2);
          });
          J(this, "afterShowResetZoom");
        }, zoomOut: function() {
          J(this, "selection", { resetSelection: true }, this.zoom);
        }, zoom: function(a2) {
          var c2 = this, d2, e2 = c2.pointer, f2 = false, h2 = c2.inverted ? e2.mouseDownX : e2.mouseDownY;
          !a2 || a2.resetSelection ? (c2.axes.forEach(function(a3) {
            d2 = a3.zoom();
          }), e2.initiated = false) : a2.xAxis.concat(a2.yAxis).forEach(function(a3) {
            var g2 = a3.axis, p2 = c2.inverted ? g2.left : g2.top, b = c2.inverted ? p2 + g2.width : p2 + g2.height, k = g2.isXAxis, l2 = false;
            if (!k && h2 >= p2 && h2 <= b || k || !n(h2))
              l2 = true;
            e2[k ? "zoomX" : "zoomY"] && l2 && (d2 = g2.zoom(a3.min, a3.max), g2.displayBtn && (f2 = true));
          });
          var p = c2.resetZoomButton;
          f2 && !p ? c2.showResetZoom() : !f2 && g(p) && (c2.resetZoomButton = p.destroy());
          d2 && c2.redraw(q(
            c2.options.chart.animation,
            a2 && a2.animation,
            100 > c2.pointCount
          ));
        }, pan: function(a2, c2) {
          var e2 = this, f2 = e2.hoverPoints, g2 = e2.options.chart, h2 = e2.options.mapNavigation && e2.options.mapNavigation.enabled, p;
          c2 = "object" === typeof c2 ? c2 : { enabled: c2, type: "x" };
          g2 && g2.panning && (g2.panning = c2);
          var l2 = c2.type;
          J(this, "pan", { originalEvent: a2 }, function() {
            f2 && f2.forEach(function(a3) {
              a3.setState();
            });
            var c3 = [1];
            "xy" === l2 ? c3 = [1, 0] : "y" === l2 && (c3 = [0]);
            c3.forEach(function(c4) {
              var b = e2[c4 ? "xAxis" : "yAxis"][0], f3 = b.horiz, g3 = a2[f3 ? "chartX" : "chartY"];
              f3 = f3 ? "mouseDownX" : "mouseDownY";
              var n2 = e2[f3], m3 = (b.pointRange || 0) / 2, r2 = b.reversed && !e2.inverted || !b.reversed && e2.inverted ? -1 : 1, u = b.getExtremes(), v2 = b.toValue(n2 - g3, true) + m3 * r2;
              r2 = b.toValue(n2 + b.len - g3, true) - m3 * r2;
              var w2 = r2 < v2;
              n2 = w2 ? r2 : v2;
              v2 = w2 ? v2 : r2;
              var A = b.hasVerticalPanning(), x2 = b.panningState;
              b.series.forEach(function(a3) {
                if (A && !c4 && (!x2 || x2.isDirty)) {
                  var b2 = a3.getProcessedData(true);
                  a3 = a3.getExtremes(b2.yData, true);
                  x2 || (x2 = { startMin: Number.MAX_VALUE, startMax: -Number.MAX_VALUE });
                  d(a3.dataMin) && d(a3.dataMax) && (x2.startMin = Math.min(a3.dataMin, x2.startMin), x2.startMax = Math.max(a3.dataMax, x2.startMax));
                }
              });
              r2 = Math.min(q(null === x2 || void 0 === x2 ? void 0 : x2.startMin, u.dataMin), m3 ? u.min : b.toValue(b.toPixels(u.min) - b.minPixelPadding));
              m3 = Math.max(q(null === x2 || void 0 === x2 ? void 0 : x2.startMax, u.dataMax), m3 ? u.max : b.toValue(b.toPixels(u.max) + b.minPixelPadding));
              b.panningState = x2;
              b.isOrdinal || (w2 = r2 - n2, 0 < w2 && (v2 += w2, n2 = r2), w2 = v2 - m3, 0 < w2 && (v2 = m3, n2 -= w2), b.series.length && n2 !== u.min && v2 !== u.max && n2 >= r2 && v2 <= m3 && (b.setExtremes(n2, v2, false, false, { trigger: "pan" }), e2.resetZoomButton || h2 || n2 === r2 || v2 === m3 || !l2.match("y") || (e2.showResetZoom(), b.displayBtn = false), p = true), e2[f3] = g3);
            });
            p && e2.redraw(false);
            D(e2.container, { cursor: "move" });
          });
        } });
        l(K.prototype, { select: function(a2, c2) {
          var d2 = this, e2 = d2.series, f2 = e2.chart;
          this.selectedStaging = a2 = q(a2, !d2.selected);
          d2.firePointEvent(a2 ? "select" : "unselect", { accumulate: c2 }, function() {
            d2.selected = d2.options.selected = a2;
            e2.options.data[e2.data.indexOf(d2)] = d2.options;
            d2.setState(a2 && "select");
            c2 || f2.getSelectedPoints().forEach(function(a3) {
              var c3 = a3.series;
              a3.selected && a3 !== d2 && (a3.selected = a3.options.selected = false, c3.options.data[c3.data.indexOf(a3)] = a3.options, a3.setState(f2.hoverPoints && c3.options.inactiveOtherPoints ? "inactive" : ""), a3.firePointEvent("unselect"));
            });
          });
          delete this.selectedStaging;
        }, onMouseOver: function(a2) {
          var c2 = this.series.chart, d2 = c2.pointer;
          a2 = a2 ? d2.normalize(a2) : d2.getChartCoordinatesFromPoint(this, c2.inverted);
          d2.runPointActions(a2, this);
        }, onMouseOut: function() {
          var a2 = this.series.chart;
          this.firePointEvent("mouseOut");
          this.series.options.inactiveOtherPoints || (a2.hoverPoints || []).forEach(function(a3) {
            a3.setState();
          });
          a2.hoverPoints = a2.hoverPoint = null;
        }, importEvents: function() {
          if (!this.hasImportedEvents) {
            var d2 = this, e2 = c(d2.series.options.point, d2.options).events;
            d2.events = e2;
            a(e2, function(a2, c2) {
              r(a2) && v(d2, c2, a2);
            });
            this.hasImportedEvents = true;
          }
        }, setState: function(a2, c2) {
          var d2 = this.series, e2 = this.state, f2 = d2.options.states[a2 || "normal"] || {}, g2 = I.plotOptions[d2.type].marker && d2.options.marker, h2 = g2 && false === g2.enabled, p = g2 && g2.states && g2.states[a2 || "normal"] || {}, n2 = false === p.enabled, m3 = d2.stateMarkerGraphic, b = this.marker || {}, k = d2.chart, r2 = d2.halo, v2, w2 = g2 && d2.markerAttribs;
          a2 = a2 || "";
          if (!(a2 === this.state && !c2 || this.selected && "select" !== a2 || false === f2.enabled || a2 && (n2 || h2 && false === p.enabled) || a2 && b.states && b.states[a2] && false === b.states[a2].enabled)) {
            this.state = a2;
            w2 && (v2 = d2.markerAttribs(this, a2));
            if (this.graphic) {
              e2 && this.graphic.removeClass("highcharts-point-" + e2);
              a2 && this.graphic.addClass("highcharts-point-" + a2);
              if (!k.styledMode) {
                var x2 = d2.pointAttribs(this, a2);
                var y2 = q(k.options.chart.animation, f2.animation);
                d2.options.inactiveOtherPoints && x2.opacity && ((this.dataLabels || []).forEach(function(a3) {
                  a3 && a3.animate({ opacity: x2.opacity }, y2);
                }), this.connector && this.connector.animate(
                  { opacity: x2.opacity },
                  y2
                ));
                this.graphic.animate(x2, y2);
              }
              v2 && this.graphic.animate(v2, q(k.options.chart.animation, p.animation, g2.animation));
              m3 && m3.hide();
            } else {
              if (a2 && p) {
                e2 = b.symbol || d2.symbol;
                m3 && m3.currentSymbol !== e2 && (m3 = m3.destroy());
                if (v2)
                  if (m3)
                    m3[c2 ? "animate" : "attr"]({ x: v2.x, y: v2.y });
                  else
                    e2 && (d2.stateMarkerGraphic = m3 = k.renderer.symbol(e2, v2.x, v2.y, v2.width, v2.height).add(d2.markerGroup), m3.currentSymbol = e2);
                !k.styledMode && m3 && m3.attr(d2.pointAttribs(this, a2));
              }
              m3 && (m3[a2 && this.isInside ? "show" : "hide"](), m3.element.point = this);
            }
            a2 = f2.halo;
            f2 = (m3 = this.graphic || m3) && m3.visibility || "inherit";
            a2 && a2.size && m3 && "hidden" !== f2 && !this.isCluster ? (r2 || (d2.halo = r2 = k.renderer.path().add(m3.parentGroup)), r2.show()[c2 ? "animate" : "attr"]({ d: this.haloPath(a2.size) }), r2.attr({ "class": "highcharts-halo highcharts-color-" + q(this.colorIndex, d2.colorIndex) + (this.className ? " " + this.className : ""), visibility: f2, zIndex: -1 }), r2.point = this, k.styledMode || r2.attr(l({ fill: this.color || d2.color, "fill-opacity": a2.opacity }, a2.attributes))) : r2 && r2.point && r2.point.haloPath && r2.animate({ d: r2.point.haloPath(0) }, null, r2.hide);
            J(this, "afterSetState");
          }
        }, haloPath: function(a2) {
          return this.series.chart.renderer.symbols.circle(Math.floor(this.plotX) - a2, this.plotY - a2, 2 * a2, 2 * a2);
        } });
        l(F.prototype, { onMouseOver: function() {
          var a2 = this.chart, c2 = a2.hoverSeries;
          a2.pointer.setHoverChartIndex();
          if (c2 && c2 !== this)
            c2.onMouseOut();
          this.options.events.mouseOver && J(this, "mouseOver");
          this.setState("hover");
          a2.hoverSeries = this;
        }, onMouseOut: function() {
          var a2 = this.options, c2 = this.chart, d2 = c2.tooltip, e2 = c2.hoverPoint;
          c2.hoverSeries = null;
          if (e2)
            e2.onMouseOut();
          this && a2.events.mouseOut && J(this, "mouseOut");
          !d2 || this.stickyTracking || d2.shared && !this.noSharedTooltip || d2.hide();
          c2.series.forEach(function(a3) {
            a3.setState("", true);
          });
        }, setState: function(a2, c2) {
          var d2 = this, e2 = d2.options, f2 = d2.graph, g2 = e2.inactiveOtherPoints, h2 = e2.states, l2 = e2.lineWidth, m3 = e2.opacity, n2 = q(h2[a2 || "normal"] && h2[a2 || "normal"].animation, d2.chart.options.chart.animation);
          e2 = 0;
          a2 = a2 || "";
          if (d2.state !== a2 && ([d2.group, d2.markerGroup, d2.dataLabelsGroup].forEach(function(b) {
            b && (d2.state && b.removeClass("highcharts-series-" + d2.state), a2 && b.addClass("highcharts-series-" + a2));
          }), d2.state = a2, !d2.chart.styledMode)) {
            if (h2[a2] && false === h2[a2].enabled)
              return;
            a2 && (l2 = h2[a2].lineWidth || l2 + (h2[a2].lineWidthPlus || 0), m3 = q(h2[a2].opacity, m3));
            if (f2 && !f2.dashstyle)
              for (h2 = { "stroke-width": l2 }, f2.animate(h2, n2); d2["zone-graph-" + e2]; )
                d2["zone-graph-" + e2].attr(h2), e2 += 1;
            g2 || [d2.group, d2.markerGroup, d2.dataLabelsGroup, d2.labelBySeries].forEach(function(a3) {
              a3 && a3.animate({ opacity: m3 }, n2);
            });
          }
          c2 && g2 && d2.points && d2.setAllPointsToState(a2);
        }, setAllPointsToState: function(a2) {
          this.points.forEach(function(c2) {
            c2.setState && c2.setState(a2);
          });
        }, setVisible: function(a2, c2) {
          var d2 = this, e2 = d2.chart, f2 = d2.legendItem, g2 = e2.options.chart.ignoreHiddenSeries, h2 = d2.visible;
          var l2 = (d2.visible = a2 = d2.options.visible = d2.userOptions.visible = "undefined" === typeof a2 ? !h2 : a2) ? "show" : "hide";
          ["group", "dataLabelsGroup", "markerGroup", "tracker", "tt"].forEach(function(a3) {
            if (d2[a3])
              d2[a3][l2]();
          });
          if (e2.hoverSeries === d2 || (e2.hoverPoint && e2.hoverPoint.series) === d2)
            d2.onMouseOut();
          f2 && e2.legend.colorizeItem(d2, a2);
          d2.isDirty = true;
          d2.options.stacking && e2.series.forEach(function(a3) {
            a3.options.stacking && a3.visible && (a3.isDirty = true);
          });
          d2.linkedSeries.forEach(function(c3) {
            c3.setVisible(a2, false);
          });
          g2 && (e2.isDirtyBox = true);
          J(d2, l2);
          false !== c2 && e2.redraw();
        }, show: function() {
          this.setVisible(true);
        }, hide: function() {
          this.setVisible(false);
        }, select: function(a2) {
          this.selected = a2 = this.options.selected = "undefined" === typeof a2 ? !this.selected : a2;
          this.checkbox && (this.checkbox.checked = a2);
          J(this, a2 ? "select" : "unselect");
        }, drawTracker: m2.drawTrackerGraph });
      });
      N(m, "Core/Responsive.js", [m["Core/Chart/Chart.js"], m["Core/Utilities.js"]], function(f, h) {
        var m2 = h.find, z = h.isArray, F = h.isObject, L = h.merge, K = h.objectEach, C = h.pick, y = h.splat, e = h.uniqueKey;
        f.prototype.setResponsive = function(f2, h2) {
          var v = this.options.responsive, y2 = [], n = this.currentResponsive;
          !h2 && v && v.rules && v.rules.forEach(function(f3) {
            "undefined" === typeof f3._id && (f3._id = e());
            this.matchResponsiveRule(f3, y2);
          }, this);
          h2 = L.apply(0, y2.map(function(e2) {
            return m2(v.rules, function(f3) {
              return f3._id === e2;
            }).chartOptions;
          }));
          h2.isResponsiveOptions = true;
          y2 = y2.toString() || void 0;
          y2 !== (n && n.ruleIds) && (n && this.update(n.undoOptions, f2, true), y2 ? (n = this.currentOptions(h2), n.isResponsiveOptions = true, this.currentResponsive = { ruleIds: y2, mergedOptions: h2, undoOptions: n }, this.update(h2, f2, true)) : this.currentResponsive = void 0);
        };
        f.prototype.matchResponsiveRule = function(e2, f2) {
          var h2 = e2.condition;
          (h2.callback || function() {
            return this.chartWidth <= C(h2.maxWidth, Number.MAX_VALUE) && this.chartHeight <= C(h2.maxHeight, Number.MAX_VALUE) && this.chartWidth >= C(h2.minWidth, 0) && this.chartHeight >= C(h2.minHeight, 0);
          }).call(this) && f2.push(e2._id);
        };
        f.prototype.currentOptions = function(e2) {
          function f2(e3, l, m4, v) {
            var n;
            K(e3, function(d, e4) {
              if (!v && -1 < h2.collectionsWithUpdate.indexOf(e4))
                for (d = y(d), m4[e4] = [], n = 0; n < Math.max(d.length, l[e4].length); n++)
                  l[e4][n] && (void 0 === d[n] ? m4[e4][n] = l[e4][n] : (m4[e4][n] = {}, f2(d[n], l[e4][n], m4[e4][n], v + 1)));
              else
                F(d) ? (m4[e4] = z(d) ? [] : {}, f2(d, l[e4] || {}, m4[e4], v + 1)) : m4[e4] = "undefined" === typeof l[e4] ? null : l[e4];
            });
          }
          var h2 = this, m3 = {};
          f2(e2, this.options, m3, 0);
          return m3;
        };
      });
      N(m, "masters/highcharts.src.js", [m["Core/Globals.js"]], function(f) {
        return f;
      });
      m["masters/highcharts.src.js"]._modules = m;
      return m["masters/highcharts.src.js"];
    });
  }
});
export default require_highcharts();
//# sourceMappingURL=highcharts.js.map
