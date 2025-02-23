// Elements
const introScreen = document.getElementById("intro-screen");
const modeSelection = document.getElementById("mode-selection");
const gameScreen = document.getElementById("game-screen");
const startBtn = document.getElementById("start-btn");
const modeButtons = document.querySelectorAll(".mode-btn");
const gameTitle = document.getElementById("game-title");
const promptText = document.getElementById("prompt-text");
const nextBtn = document.getElementById("next-btn");
const restartBtn = document.createElement("button");

// Game Modes with Prompts
const gameModes = {
    friends: [
        "Drink if you've ever laughed so hard you peed a little.",
        "The last person to touch their nose drinks.",
        "Drink if you've ever sent a risky text while drunk.",
        "Whoever has the longest hair drinks.",
        "Drink if you still don’t understand how taxes work.",
        "Send your ex a you up, message or drink.",
        "Drink if you still don’t understand how taxes work.",
        "Add your exes in a group chat and ask what went wrong, or take 4 shots",
        "Let the group go through your browser history or take a shot.",
        "WATERFALLLLLLL!!!!!",
        "Drink if you still don’t understand how taxes work.",
        "Drink if you still don’t understand how taxes work."
    ],
    adults: [
        "Take a shot if you've ever lied about your age to get into a club.",
        "The person wearing the least clothes drinks.",
        "Whisper something dirty to the person on your right.",
        "Drink if you've ever been kicked out of a bar.",
        "Whoever has the most unread messages drinks.",
        "The last person to say 'cheers' drinks."
    ],
    couples: [
        "Kiss your partner or take two shots.",
        "Take a drink if you’ve ever sent a spicy text.",
        "Whisper something naughty to your partner, or both take a drink.",
        "Whoever made the first move in your relationship drinks.",
        "Moan for 20 seconds or drink",
        "Kiss your 3 favourite parts on your partners body.",
        "One can i say that will get you flustered.",
        "Do I taste good?",
        "Dry hump for 90 seconds or drink.",
        "Take a shot if you've ever faked being asleep to avoid intimacy.",
        "Le me go through your search history or drink.",
        "Do a strip tease or drink.",
        "Take off your clothes for the rest of the game or drink.",
        "Touch yourself for 60 seconds or drink.",
        "Lick any liquid off my body, neck to... uh... you know.",
        "Turn me on without touching me or drink.",
        "Let me play with your private part for 30 seconds or drink.",
        "pell a word on my body using your tongue."
    ]
};


// State
let currentGameMode = [];
let selectedMode = "";
let usedPrompts = [];

// Start Game Button
startBtn.addEventListener("click", () => {
    introScreen.classList.add("hidden");
    modeSelection.classList.remove("hidden");
});

// Select Game Mode
modeButtons.forEach(button => {
    button.addEventListener("click", (event) => {
        selectedMode = event.target.id;
        if (selectedMode === "friends-mode") {
            currentGameMode = [...gameModes.friends];
            gameTitle.textContent = "Friends Mode";
            gameScreen.style.backgroundColor = "#4CAF50"; // Green
        } else if (selectedMode === "adults-mode") {
            currentGameMode = [...gameModes.adults];
            gameTitle.textContent = "18+ Friends Mode";
            gameScreen.style.backgroundColor = "#FF5722"; // Orange-Red
        } else if (selectedMode === "couples-mode") {
            currentGameMode = [...gameModes.couples];
            gameTitle.textContent = "Couples Mode";
            gameScreen.style.backgroundColor = "#E91E63"; // Pink
        }

        modeSelection.classList.add("hidden");
        gameScreen.classList.remove("hidden");

        usedPrompts = []; // Reset used prompts
        nextBtn.style.display = "block"; // Ensure Next button is visible
        restartBtn.remove(); // Remove restart button if it's there
        showNextPrompt();
    });
});

// Function to Show Next Prompt
function showNextPrompt() {
    if (currentGameMode.length === 0) {
        promptText.textContent = "No more prompts! Click Restart to play again.";
        nextBtn.style.display = "none"; // Hide Next button

        // Create and show restart button
        restartBtn.textContent = "Restart Game";
        restartBtn.style.marginTop = "15px";
        restartBtn.style.padding = "10px 20px";
        restartBtn.style.fontSize = "16px";
        restartBtn.style.cursor = "pointer";
        restartBtn.style.border = "none";
        restartBtn.style.borderRadius = "5px";
        restartBtn.style.backgroundColor = "#FFCC00";
        restartBtn.style.color = "black";

        restartBtn.addEventListener("click", restartGame);
        gameScreen.appendChild(restartBtn);
        return;
    }

    const randomIndex = Math.floor(Math.random() * currentGameMode.length);
    const nextPrompt = currentGameMode.splice(randomIndex, 1)[0];

    usedPrompts.push(nextPrompt);
    promptText.textContent = nextPrompt;
}

// Next Button
nextBtn.addEventListener("click", showNextPrompt);

// Restart Game Function
function restartGame() {
    currentGameMode = [...gameModes[selectedMode.replace("-mode", "")]];
    usedPrompts = [];
    nextBtn.style.display = "block"; // Show Next button again
    restartBtn.remove(); // Remove restart button
    showNextPrompt();
}