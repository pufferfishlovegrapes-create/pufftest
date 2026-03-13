(function () {

    const iframe = document.createElement("iframe");
    
    iframe.src = "https://cdn.jsdelivr.net/gh/pufferfishlovegrapes-create/pufftest@gh-pages/index.html";
    
    iframe.style.width = "100%";
    iframe.style.height = "700px";
    iframe.style.border = "none";
    
    document.currentScript.parentNode.insertBefore(
    iframe,
    document.currentScript
    );
    
    })();
    