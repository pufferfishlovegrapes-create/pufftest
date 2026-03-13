(function () {

    const base = "https://cdn.jsdelivr.net/gh/pufferfishlovegrapes-create/pufftest@gh-pages/";
  
    function loadScript(src, type) {
      const s = document.createElement("script");
      s.src = base + src;
      if (type) s.type = type;
      document.body.appendChild(s);
    }
  
    function loadCSS(src) {
      const l = document.createElement("link");
      l.rel = "stylesheet";
      l.href = base + src;
      document.head.appendChild(l);
    }
  
    // load styles
    loadCSS("style.css");
  
    // load scripts in order
    loadScript("scripts/supportcheck.js");
    loadScript("scripts/main.js", "module");
  
  })();