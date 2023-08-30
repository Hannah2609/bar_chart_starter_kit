const list = document.querySelector("ul");

function barChart() {
// random nummer
  let rndNumber = Math.floor(Math.random() * 100 + 1);
  console.log("randomnr", rndNumber);

//   laver nyt list element og tilføjer til listen
  const li = document.createElement("li");
  list.appendChild(li);

// sætter højden efter random nummer
  li.style.setProperty("--height", `${rndNumber}`);

//   fjerner første list element hvis der er over 20
  if (list.children.length > 20) {
    list.removeChild(list.children[0]);
  }
}
// kører funktionen hvert sekundt
setInterval(barChart, 1000);
