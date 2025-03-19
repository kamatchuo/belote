let totalEquipe1 = 0;
let totalEquipe2 = 0;
let round = 1;
let scoreFinal = 500; // Valeur par défaut

function modifierScoreFinal() {
    let nouveauScore = parseInt(document.getElementById("scoreFinal").value);

    if (!isNaN(nouveauScore) && nouveauScore >= 100) {
        scoreFinal = nouveauScore;
        afficherPointsRestants();
        
        // Met à jour l'affichage du score final dans l'input
        document.getElementById("scoreFinal").value = scoreFinal;

    } else {
        alert("Veuillez entrer un score valide (minimum 100).");
    }
}


function ajouterScore() {
    let score1 = parseInt(document.getElementById("scoreEquipe1").value) || 0;
    let score2 = parseInt(document.getElementById("scoreEquipe2").value) || 0;

    let table = document.getElementById("scoreTable");
    let newRow = table.insertRow();

    newRow.innerHTML = `<td>${round}</td>
                        <td contenteditable="true" oninput="mettreAJourScores()">${score1}</td>
                        <td contenteditable="true" oninput="mettreAJourScores()">${score2}</td>`;

    document.getElementById("scoreEquipe1").value = "";
    document.getElementById("scoreEquipe2").value = "";
    round++;

    mettreAJourScores();
}

function mettreAJourScores() {
    let table = document.getElementById("scoreTable");
    let rows = table.getElementsByTagName("tr");

    totalEquipe1 = 0;
    totalEquipe2 = 0;

    for (let i = 0; i < rows.length; i++) {
        let cells = rows[i].getElementsByTagName("td");
        if (cells.length > 2) {
            let score1 = parseInt(cells[1].textContent) || 0;
            let score2 = parseInt(cells[2].textContent) || 0;

            totalEquipe1 += score1;
            totalEquipe2 += score2;
        }
    }

    document.getElementById("totalEquipe1").textContent = totalEquipe1;
    document.getElementById("totalEquipe2").textContent = totalEquipe2;

    verifierGagnant();
    afficherPointsRestants();
}

function verifierGagnant() {
    if (totalEquipe1 >= scoreFinal) {
        document.getElementById("winnerMessage").innerHTML = "🏆 Équipe 1 a gagné la partie !";
    } else if (totalEquipe2 >= scoreFinal) {
        document.getElementById("winnerMessage").innerHTML = "🏆 Équipe 2 a gagné la partie !";
    } else {
        document.getElementById("winnerMessage").innerHTML = "";
    }
}

function afficherPointsRestants() {
    let pointsRestants1 = Math.max(scoreFinal - totalEquipe1, 0);
    let pointsRestants2 = Math.max(scoreFinal - totalEquipe2, 0);

    document.getElementById("pointsRestants").innerHTML =
        `🔹 Équipe 1: ${pointsRestants1} points restants | 🔹 Équipe 2: ${pointsRestants2} points restants`;
}

function resetScores() {
    totalEquipe1 = 0;
    totalEquipe2 = 0;
    round = 1;
    scoreFinal = 500;

    document.getElementById("scoreTable").innerHTML = "";
    document.getElementById("totalEquipe1").textContent = "0";
    document.getElementById("totalEquipe2").textContent = "0";
    document.getElementById("winnerMessage").innerHTML = "";
    document.getElementById("pointsRestants").innerHTML = "";

    document.getElementById("scoreFinal").value = "";
}
