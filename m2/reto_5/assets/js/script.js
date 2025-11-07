let number = 0;
const pElement = document.querySelector("p");

pElement.onclick = () => {
  number++;
  pElement.textContent = number;
}