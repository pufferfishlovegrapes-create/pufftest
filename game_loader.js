(function () {

  const container = document.createElement("div");
  container.style.width = "100%";
  container.style.height = "700px";

  const iframe = document.createElement("iframe");

  iframe.src =
  "https://pufferfishlovegrapes-create.github.io/pufftest/";

  iframe.style.width = "100%";
  iframe.style.height = "100%";
  iframe.style.border = "none";

  container.appendChild(iframe);

  document.currentScript.parentNode.insertBefore(
    container,
    document.currentScript
  );

})();
