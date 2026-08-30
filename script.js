function checkQuiz() {

    let score = 0;

    let answers = [
        "q1",
        "q2",
        "q3",
        "q4",
        "q5"
    ];

    answers.forEach(function(question) {

        let selected = document.querySelector(
            'input[name="' + question + '"]:checked'
        );

        if (selected && selected.value === "correct") {
            score++;
        }

    });


    let result = document.getElementById("result");

    result.innerHTML =
        "Your Score: " + score + " / 5";

}
function newQuote() {

    let quotes = [
        "Believe in yourself and keep moving forward.",
        "Every day is a new opportunity to learn.",
        "Small steps can lead to big achievements.",
        "Do not be afraid to make mistakes.",
        "Your effort today builds your success tomorrow.",
        "Learning never stops.",
        "Dream big and work hard."
    ];

    let authors = [
        "LearnHub",
        "LearnHub",
        "LearnHub",
        "LearnHub",
        "LearnHub",
        "LearnHub",
        "LearnHub"
    ];

    let randomNumber = Math.floor(Math.random() * quotes.length);

    document.getElementById("quoteText").innerHTML =
        quotes[randomNumber];

    document.getElementById("quoteAuthor").innerHTML =
        "— " + authors[randomNumber];
}
function sendMessage(event) {

    event.preventDefault();

    let name = document.getElementById("name").value;

    document.getElementById("messageResult").innerHTML =
        "Thank you, " + name + "! Your message has been received.";

}
function loginUser(event) {

    event.preventDefault();

    let email = document.getElementById("loginEmail").value;

    document.getElementById("loginResult").innerHTML =
        "Login successful! Welcome to LearnHub.";

}
function registerUser(event) {

    event.preventDefault();

    let name = document.getElementById("registerName").value;
    let password = document.getElementById("registerPassword").value;
    let confirmPassword = document.getElementById("confirmPassword").value;

    let result = document.getElementById("registerResult");

    if (password !== confirmPassword) {

        result.innerHTML = "Passwords do not match.";

    } else {

        result.innerHTML =
            "Registration successful! Welcome, " + name + ".";

    }

}
function submitFeedback(event) {

    event.preventDefault();

    let name = document.getElementById("feedbackName").value;

    document.getElementById("feedbackResult").innerHTML =
        "Thank you, " + name + "! Your feedback has been submitted.";

}
function searchPage() {

    let search = document.getElementById("searchInput").value.toLowerCase();

    if (search.includes("course")) {
        window.location.href = "courses.html";
    }
    else if (search.includes("quiz")) {
        window.location.href = "quiz.html";
    }
    else if (search.includes("video")) {
        window.location.href = "videos.html";
    }
    else if (search.includes("gallery")) {
        window.location.href = "gallery.html";
    }
    else if (search.includes("quote")) {
        window.location.href = "quotes.html";
    }
    else if (search.includes("resource")) {
        window.location.href = "resources.html";
    }
    else if (search.includes("contact")) {
        window.location.href = "contact.html";
    }
    else {
        alert("Sorry! Page not found.");
    }

}