import fetch from 'node-fetch';

const BASE_URL = 'https://alchemy-kd0l.onrender.com';
const myPlayer = 'jakobno@uia.no';

async function initiatePuzzle() {
  const url = `${BASE_URL}/start?player=${encodeURIComponent(myPlayer)}`;
  try {
    const resp = await fetch(url);
    const puzzleData = await resp.json();
    console.log("Puzzle begun:", puzzleData);
    return puzzleData;
  } catch (err) {
    console.error("Couldn’t start puzzle:", err);
  }
}

async function requestClue() {
  const clueUrl = `${BASE_URL}/clue?player=${encodeURIComponent(myPlayer)}`;
  try {
    const res = await fetch(clueUrl);
    const clueContent = await res.text();
    console.log("Clue content:", clueContent);
    return clueContent;
  } catch (err) {
    console.error("Couldn’t retrieve clue:", err);
  }
}

async function sendAnswer(answerVal) {
  const answerEndpoint = `${BASE_URL}/answer`;
  try {
    const res = await fetch(answerEndpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        player: myPlayer,
        answer: answerVal
      })
    });
    const reply = await res.json();
    console.log("Answer reply:", reply);
    return reply;
  } catch (err) {
    console.error("Failed to submit answer:", err);
  }
}

async function runAll() {
  const initialPuzzle = await initiatePuzzle();

  const puzzleResponse = await sendAnswer("ARGON");

  if (puzzleResponse && puzzleResponse.nextChallenge) {
    console.log("Upcoming puzzle:", puzzleResponse.nextChallenge);
  }
}

runAll().catch(console.error);
