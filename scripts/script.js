/* Stap 1: Selecteer de knop */
let expandButton = document.querySelector('button')

/* Stap 2: Wacht tot iemand op die knop klikt */
expandButton.addEventListener('click', function() {

  /* Stap 3: Verander een class zodra iemand op die knop klikt */
  document.body.classList.toggle('is-expanded')
})

let dlLijst = document.querySelectorAll('dl')
let navigatieknoppen = document.querySelectorAll("nav > button")

dlLijst.forEach(el => verbergElement(el));
toonDefinitieLijst(0);

navigatieknoppen.forEach((knop, nummer) => {
  knop.addEventListener("click", () => {
    toonDefinitieLijst(nummer)
  })
  
})

function toonDefinitieLijst(nummer) {
  navigatieknoppen.forEach((knop, i) => {
    if (i === nummer) {
      knop.classList.add('actief')
    }
    else {
      knop.classList.remove('actief')
    }
  })
  
  
  dlLijst.forEach((dl, i) => {
    if (i === nummer) {
      toonElement(dl);
    }
    else {
      verbergElement(dl);
    }
  })
}

function toonElement(element) {
  element.removeAttribute("style");
}

function verbergElement(element) {
  element.setAttribute("style", "display: none;")
}



