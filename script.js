const aliments = {
"Poulet": { calories: 165, proteines: 31 },
"Dinde": { calories: 135, proteines: 30 },
"Steak haché 5%": { calories: 137, proteines: 21 },
"Steak haché 15%": { calories: 215, proteines: 19 },
"Jambon blanc": { calories: 120, proteines: 20 },
"Jambon de dinde": { calories: 110, proteines: 22 },
"Thon nature": { calories: 116, proteines: 26 },
"Saumon": { calories: 208, proteines: 20 },
"Cabillaud": { calories: 82, proteines: 18 },
"Colin": { calories: 90, proteines: 19 },
"Œuf": { calories: 143, proteines: 13 },
"Blanc d'œuf": { calories: 52, proteines: 11 },

"Riz blanc cuit": { calories: 130, proteines: 2.7 },
"Riz complet cuit": { calories: 124, proteines: 2.9 },
"Pâtes cuites": { calories: 158, proteines: 5.8 },
"Pâtes complètes": { calories: 149, proteines: 5.5 },
"Semoule cuite": { calories: 112, proteines: 3.8 },
"Quinoa cuit": { calories: 120, proteines: 4.4 },
"Pommes de terre": { calories: 85, proteines: 2 },
"Patate douce": { calories: 86, proteines: 1.6 },
"Pain blanc": { calories: 265, proteines: 8 },
"Pain complet": { calories: 247, proteines: 9 },
"Flocons d'avoine": { calories: 372, proteines: 13 },

"Brocoli": { calories: 34, proteines: 2.8 },
"Haricots verts": { calories: 31, proteines: 1.8 },
"Carottes": { calories: 41, proteines: 0.9 },
"Courgettes": { calories: 17, proteines: 1.2 },
"Tomates": { calories: 18, proteines: 0.9 },
"Concombre": { calories: 15, proteines: 0.7 },
"Salade verte": { calories: 14, proteines: 1.4 },
"Épinards": { calories: 23, proteines: 2.9 },
"Poivrons": { calories: 31, proteines: 1 },
"Champignons": { calories: 22, proteines: 3.1 },

"Banane": { calories: 89, proteines: 1.1 },
"Pomme": { calories: 52, proteines: 0.3 },
"Poire": { calories: 57, proteines: 0.4 },
"Orange": { calories: 47, proteines: 0.9 },
"Kiwi": { calories: 61, proteines: 1.1 },
"Fraises": { calories: 32, proteines: 0.7 },
"Raisin": { calories: 69, proteines: 0.7 },
"Ananas": { calories: 50, proteines: 0.5 },

"Fromage blanc 0%": { calories: 45, proteines: 8 },
"Skyr": { calories: 63, proteines: 11 },
"Yaourt nature": { calories: 61, proteines: 3.5 },
"Petit suisse 0%": { calories: 55, proteines: 8 },
"Lait demi-écrémé": { calories: 47, proteines: 3.3 },

"Huile d'olive": { calories: 884, proteines: 0 },
"Huile de colza": { calories: 884, proteines: 0 },
"Beurre": { calories: 717, proteines: 1 },
"Avocat": { calories: 160, proteines: 2 },

"Pizza": { calories: 266, proteines: 11 },
"Burger": { calories: 295, proteines: 17 },
"Frites": { calories: 312, proteines: 3.4 },
"Chocolat noir": { calories: 546, proteines: 4.9 },
"Croissant": { calories: 406, proteines: 8.2 },
"Pain au chocolat": { calories: 423, proteines: 7.6 },
"Chouquette": { calories: 420, proteines: 6 }
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
