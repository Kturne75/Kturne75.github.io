document.addEventListener("DOMContentLoaded", function () {
    const correctAnswers = {
        q1: "b", // Bill Russell
        q2: "a", // 1946
        q3: "c", // LeBron James
        q4: "b", // Boston Celtics
        q5: "c"  // Wilt Chamberlain
    };

    function checkAnswers() {
        let score = 0;
        let totalQuestions = Object.keys(correctAnswers).length;
        let resultMessage = "";

        Object.keys(correctAnswers).forEach((question) => { // Added parentheses around arrow function parameter
            let selectedOption = document.querySelector(`input[name="${question}"]:checked`);

            if (selectedOption) {
                let userAnswer = selectedOption.value;
                let parentDiv = selectedOption.closest(".question");

                if (userAnswer === correctAnswers[question]) {
                    parentDiv.style.backgroundColor = "#55917F"; // Green for correct
                    score++;
                } else {
                    parentDiv.style.backgroundColor = "#8B0000"; // Red for incorrect
                    parentDiv.innerHTML += `<p class="correct-answer">Correct answer: ${correctAnswers[question].toUpperCase()}</p>`;
                }
            }
        });

        resultMessage = `You scored ${score} out of ${totalQuestions}!`;

        document.getElementById("result").innerText = resultMessage;
    }

    document.querySelector("button").addEventListener("click", checkAnswers);
});
