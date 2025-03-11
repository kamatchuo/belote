let totalEquipe1 = 0;
let totalEquipe2 = 0;
let round = 1;

function ajouterScore() {
    let score1 = parseInt(document.getElementById("scoreEquipe1").value) || 0;
    let score2 = parseInt(document.getElementById("scoreEquipe2").value) || 0;

    // Ajout des points aux totaux cumulés
    totalEquipe1 += score1;
    totalEquipe2 += score2;

    // Ajout des données au tableau
    let table = document.getElementById("scoreTable");
    let newRow = table.insertRow();
    newRow.innerHTML = `<td>${round}</td><td>${score1}</td><td>${score2}</td>`;

    // Mise à jour de la ligne statique des totaux
    document.getElementById("totalEquipe1").textContent = totalEquipe1;
    document.getElementById("totalEquipe2").textContent = totalEquipe2;

    // Réinitialiser les champs de saisie
    document.getElementById("scoreEquipe1").value = "";
    document.getElementById("scoreEquipe2").value = "";
    round++;

    verifierGagnant();
}

function verifierGagnant() {
    if (totalEquipe1 >= 500) {
        document.getElementById("winnerMessage").innerHTML = "🏆 Équipe 1 a gagné la partie !";
        document.querySelector("button").disabled = true;
    } else if (totalEquipe2 >= 500) {
        document.getElementById("winnerMessage").innerHTML = "🏆 Équipe 2 a gagné la partie !";
        document.querySelector("button").disabled = true;
    }
}

function resetScores() {
    totalEquipe1 = 0;
    totalEquipe2 = 0;
    round = 1;

    document.getElementById("scoreTable").innerHTML = "";
    document.getElementById("totalEquipe1").textContent = "0";
    document.getElementById("totalEquipe2").textContent = "0";
    document.getElementById("winnerMessage").innerHTML = "";

    document.querySelector("button").disabled = false;
}
