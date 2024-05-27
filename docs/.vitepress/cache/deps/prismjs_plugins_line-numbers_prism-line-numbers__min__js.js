// ../packages/epicenter-vue-components/node_modules/prismjs/plugins/line-numbers/prism-line-numbers.min.js
!function() {
  if ("undefined" != typeof Prism && "undefined" != typeof document) {
    var e = "line-numbers", n = /\n(?!$)/g, t = Prism.plugins.lineNumbers = { getLine: function(n2, t2) {
      if ("PRE" === n2.tagName && n2.classList.contains(e)) {
        var i2 = n2.querySelector(".line-numbers-rows");
        if (i2) {
          var r2 = parseInt(n2.getAttribute("data-start"), 10) || 1, s = r2 + (i2.children.length - 1);
          t2 < r2 && (t2 = r2), t2 > s && (t2 = s);
          var l = t2 - r2;
          return i2.children[l];
        }
      }
    }, resize: function(e2) {
      r([e2]);
    }, assumeViewportIndependence: true }, i = void 0;
    window.addEventListener("resize", function() {
      t.assumeViewportIndependence && i === window.innerWidth || (i = window.innerWidth, r(Array.prototype.slice.call(document.querySelectorAll("pre.line-numbers"))));
    }), Prism.hooks.add("complete", function(t2) {
      if (t2.code) {
        var i2 = t2.element, s = i2.parentNode;
        if (s && /pre/i.test(s.nodeName) && !i2.querySelector(".line-numbers-rows") && Prism.util.isActive(i2, e)) {
          i2.classList.remove(e), s.classList.add(e);
          var l, o = t2.code.match(n), a = o ? o.length + 1 : 1, u = new Array(a + 1).join("<span></span>");
          (l = document.createElement("span")).setAttribute("aria-hidden", "true"), l.className = "line-numbers-rows", l.innerHTML = u, s.hasAttribute("data-start") && (s.style.counterReset = "linenumber " + (parseInt(s.getAttribute("data-start"), 10) - 1)), t2.element.appendChild(l), r([s]), Prism.hooks.run("line-numbers", t2);
        }
      }
    }), Prism.hooks.add("line-numbers", function(e2) {
      e2.plugins = e2.plugins || {}, e2.plugins.lineNumbers = true;
    });
  }
  function r(e2) {
    if (0 != (e2 = e2.filter(function(e3) {
      var n2, t3 = (n2 = e3, n2 ? window.getComputedStyle ? getComputedStyle(n2) : n2.currentStyle || null : null)["white-space"];
      return "pre-wrap" === t3 || "pre-line" === t3;
    })).length) {
      var t2 = e2.map(function(e3) {
        var t3 = e3.querySelector("code"), i2 = e3.querySelector(".line-numbers-rows");
        if (t3 && i2) {
          var r2 = e3.querySelector(".line-numbers-sizer"), s = t3.textContent.split(n);
          r2 || ((r2 = document.createElement("span")).className = "line-numbers-sizer", t3.appendChild(r2)), r2.innerHTML = "0", r2.style.display = "block";
          var l = r2.getBoundingClientRect().height;
          return r2.innerHTML = "", { element: e3, lines: s, lineHeights: [], oneLinerHeight: l, sizer: r2 };
        }
      }).filter(Boolean);
      t2.forEach(function(e3) {
        var n2 = e3.sizer, t3 = e3.lines, i2 = e3.lineHeights, r2 = e3.oneLinerHeight;
        i2[t3.length - 1] = void 0, t3.forEach(function(e4, t4) {
          if (e4 && e4.length > 1) {
            var s = n2.appendChild(document.createElement("span"));
            s.style.display = "block", s.textContent = e4;
          } else
            i2[t4] = r2;
        });
      }), t2.forEach(function(e3) {
        for (var n2 = e3.sizer, t3 = e3.lineHeights, i2 = 0, r2 = 0; r2 < t3.length; r2++)
          void 0 === t3[r2] && (t3[r2] = n2.children[i2++].getBoundingClientRect().height);
      }), t2.forEach(function(e3) {
        var n2 = e3.sizer, t3 = e3.element.querySelector(".line-numbers-rows");
        n2.style.display = "none", n2.innerHTML = "", e3.lineHeights.forEach(function(e4, n3) {
          t3.children[n3].style.height = e4 + "px";
        });
      });
    }
  }
}();
//# sourceMappingURL=prismjs_plugins_line-numbers_prism-line-numbers__min__js.js.map
