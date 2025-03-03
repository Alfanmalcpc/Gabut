// Data nama dan kata bijak
const names = ["Budi", "Siti", "Joko", "Dewi", "Agus", "Rina"];
const quotes = [
    "Kesuksesan dimulai dari mimpi yang besar.",
    "Jangan takut gagal, takutlah untuk tidak mencoba.",
    "Waktu adalah uang, manfaatkan dengan bijak.",
    "Tidak ada usaha yang sia-sia."
];

// Fungsi untuk generate nama acak
function generateName() {
    const randomName = names[Math.floor(Math.random() * names.length)];
    document.getElementById('nameResult').innerText = randomName;
}

// Fungsi untuk generate kata bijak acak
function generateQuote() {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    document.getElementById('quoteResult').innerText = randomQuote;
}

// Game Klik
let clickCount = 0;
function clickGame() {
    clickCount++;
    document.getElementById('clickCount').innerText = "Klik: " + clickCount;
}

// Quiz Random
const quizQuestions = [
    { question: "Apakah langit berwarna biru?", answer: "Ya" },
    { question: "Berapa hasil dari 2 + 2?", answer: "4" },
    { question: "Apakah air bisa terbakar?", answer: "Tidak" }
];

function startQuiz() {
    const randomIndex = Math.floor(Math.random() * quizQuestions.length);
    const question = quizQuestions[randomIndex];
    const userAnswer = prompt(question.question);
    if (userAnswer && userAnswer.toLowerCase() === question.answer.toLowerCase()) {
        document.getElementById('quizResult').innerText = "Jawaban benar!";
    } else {
        document.getElementById('quizResult').innerText = "Jawaban salah!";
    }
}
