 // Aquí tu código
const addBtn = document.getElementById("agregar");
const list = document.getElementById("lista");

addBtn.addEventListener("click", function() {
  const item = prompt("Type your text here:");
  console.log(item);



if (item) {
    const li = document.createElement("li");
    li.textContent = item;
    list.appendChild(li);
  }
});
