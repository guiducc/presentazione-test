const data = {
  nord: ["Piemonte", "Lombardia"],
  centro: ["Lazio", "Toscana"],
  sud: ["Campania", "Sicilia"]
};

let zone = "";
let region = "";

// NAVIGATION
function show(id) {
  document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

function goHome() {
  show("home");
}

function goMap() {
  show("map");
}

function selectZone(z) {
  zone = z;

  document.getElementById("zoneTitle").innerText =
    "Zona: " + z.toUpperCase();

  const list = document.getElementById("regionsList");
  list.innerHTML = "";

  data[z].forEach(r => {
    const btn = document.createElement("button");
    btn.innerText = r;

    btn.onclick = () => {
      region = r;
      show("category");
    };

    list.appendChild(btn);
  });

  show("regions");
}

function backRegions() {
  show("map");
}

function selectCategory(cat) {
  document.getElementById("title").innerText =
    region + " - " + cat;

  document.getElementById("img").src =
    "https://via.placeholder.com/300";

  document.getElementById("name").innerText =
    "Moto principale: Demo Bike";

  document.getElementById("desc").innerText =
    "Analisi semplificata della regione " + region;

  document.getElementById("stats").innerText =
    "Potenza: 100 CV | Uso: 40% | Prezzo: €10.000";

  show("analysis");
}

function backCategory() {
  show("category");
}
