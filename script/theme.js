const themeBtn = document.getElementById("themeBtn");
const body = document.querySelector("body");
console.log(body);

themeBtn.addEventListener("change", () => {
  let light = body.classList.contains("light");
  console.log(light);
  if (light) {
    body.classList.remove("light");
    body.classList.add("dark");
  } else {
    body.classList.remove("dark");
    body.classList.add("light");
  }
});
