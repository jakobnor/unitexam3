import fetch from 'node-fetch';
const playerEmail = "jakobno@uia.no";

async function startPuzzle() {
  const url = 'https://alchemy-kd0l.onrender.com/start?player=${encodeURIComponent(playerEmail)}';
  const res = await fetch(url);
  const data = await res.json();
  console.log("Puzzle started:", data);
}

startPuzzle().catch(console.error);