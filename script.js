const aliments = {
  "Poulet": { calories: 165, proteines: 31 },
  "Riz cuit": { calories: 130, proteines: 2.7 },
  "Pâtes cuites": { calories: 158, proteines: 5.8 },
  "Banane": { calories: 89, proteines: 1.1 },
  "Fromage blanc 0%": { calories: 45, proteines: 8 },
  "Steak haché 5%": { calories: 137, proteines: 21 },
  "Œuf": { calories: 143, proteines: 13 },
  "Saumon": { calories: 208, proteines: 20 },
  "Pomme": { calories: 52, proteines: 0.3 },
  "Brocoli": { calories: 34, proteines: 2.8 }
};

const objectif = 2300;

const select = document.getElementById("aliment");
const resultat = document.getElementById("resultat");

for (const aliment in aliments) {
  const option = document.createElement("option");
  option.value = aliment;
  option.textContent = aliment;
  select.appendChild(option);
}

function calculerCalories() {
  const aliment = select.value;
  const grammes = parseFloat(document.getElementById("grammes").value);

  if (!grammes || grammes <= 0) {
    resultat.textContent = "Veuillez saisir une quantité valide.";
    return;
  }

  const kcal = (aliments[aliment].calories * grammes) / 100;
  const proteines = (aliments[aliment].proteines * grammes) / 100;

  resultat.innerHTML =
    "<strong>" + Math.round(kcal) + " kcal</strong><br>" +
    "Protéines : " + proteines.toFixed(1) + " g";
}
