let docTitle = document.title;
window.addEventListener("blur", () => {
          document.title ="💔Please don't Go, come back💔";
})
window.addEventListener("focus", () => {
          document.title = docTitle;
})