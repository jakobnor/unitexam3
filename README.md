Alchemy Game
This project solves a puzzle-based challenge using the Alchemy API.
We will:
Call /start?player=MY_UIA_EMAIL to get the first puzzle.
Solve the puzzle in code.
Submit answers to /answer.
Use /clue if needed.

All major steps will be documented in this readme, and each commit will correspond to a puzzle or code improvement.

Commit #1: Project Initialization
Created alchemy-game folder and initialized Git (git init).

Ran npm init -y to generate package.json.

Installed node-fetch (v3) for API requests.

Set up main.js.

First commit: "Initial setup with npm, git, and node-fetch."

Puzzle 1: Decoding Alchemical Symbols
Received symbols: ☉☿☽♂☉. Researched their meanings:

☉ = Gold, ☿ = Quicksilver (Mercury), ☽ = Silver, ♂ = Iron.

Answer: Gold, Quicksilver, Silver, Iron, Gold.

Faced errors due to incorrect fetch syntax but fixed them using async-await.

Puzzle 2: Hidden Word in the Poem
Poem contained capitalized words:
Still, Icy, Lethe, Veiling, Eldritch, Rime → Spelling SILVER.

Initially submitted the full poem instead of just the keyword. Corrected and submitted "SILVER".

Puzzle 3: Deciphering the Numeric Code
Given numeric sequence, initially tried random substitutions.
Built a helper script to detect letter patterns. Decoded key alchemical substances:

Mercury, Copper, Sulfur, Fire, Salt, Water, Gold, Air.

Mistakenly submitted "Heat" instead of "Fire". Corrected and submitted symbols:
☿♀🜍🜂🜔🜄☉🜁

Puzzle 4: Final Matrix Puzzle
Deciphered a hint revealing a metal sequence:
Mercury, Gold, Silver, Copper.

Mapped this to the provided matrix. Initially misaligned rows/columns but corrected it.
Identified atomic number 18 (Argon) as the final answer.

This puzzle required careful rechecking, but persistence paid off.

Links: https://en.wikipedia.org/wiki/Alchemical_symbol
