const items = document.querySelectorAll("ul#categories>li");
console.log("Number of categories:", items.length);
items.forEach((item) => {
  console.log("Category:", item.querySelector("h2").textContent);
  console.log("Elements:", item.querySelectorAll("ul>li").length);
});
