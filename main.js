const alchemySymbols = {
    '☉': 'Gold',
    '☿': 'Mercury',
    '☽': 'Silver',
    '♂': 'Iron'
  };
  
  function decipherAlchemicalCode(codeString) {
    let metals = [];
    for (const symbol of codeString) {
      if (alchemySymbols[symbol]) {
        metals.push(alchemySymbols[symbol]);
      }
    }
    return metals.join(" ");
  }
  
  async function submitPuzzleSolution(codeStr) {
    const puzzleAnswer = decipherAlchemicalCode(codeStr);
    const url = "https://alchemy-kd0l.onrender.com/answer";
    const playerEmail = "jakobno@uia.no";
  
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        player: playerEmail,
        answer: puzzleAnswer
      })
    });
    const data = await response.json();
    console.log("Server response:", data);
  }
  
  submitPuzzleSolution("Gold Quicksilver Silver Iron Gold").catch(console.error);