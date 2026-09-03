const aliments = {
  "Poulet": { calories: 165 },
  "Riz cuit": { calories: 130 },
  "Pâtes cuites": { calories: 158 },
  "Banane": { calories: 89 },
  "Fromage blanc 0%": { calories: 45 }
};

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
    resultat.textContent = "Veuillez saisir un poids valide.";
    return;
  }

  const calories = (aliments[aliment].calories * grammes) / 100;

  resultat.textContent =
    `${grammes} g de ${aliment} = ${Math.round(calories)} kcal`;
}
