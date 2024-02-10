let wordsObject = {
    1: { word: 'resolute', seen: false },
    2: { word: 'quintessential', seen: false },
    3: { word: 'mellifluous', seen: false },
    4: { word: 'mellifluent', seen: false },
    5: { word: 'mellifluence', seen: false },
    6: { word: 'labyrinthine', seen: false },
    7: { word: 'effervescent', seen: false },
    8: { word: 'diligence', seen: false },
    9: { word: 'zephyr', seen: false },
    10: { word: 'verbose', seen: false },
    11: { word: 'tranquil', seen: false },
    12: { word: 'serenity', seen: false },
    13: { word: 'serendipity', seen: false },
    14: { word: 'seraphim', seen: false },
    15: { word: 'seraphic', seen: false },
    16: { word: 'salubrious', seen: false },
    17: { word: 'resplendent', seen: false },
    18: { word: 'resplendencies', seen: false },
    19: { word: 'resplendence', seen: false },
    20: { word: 'resonance', seen: false },
    21: { word: 'resolutely', seen: false },
    22: { word: 'quizzically', seen: false },
    23: { word: 'quizzicality', seen: false },
    24: { word: 'quixotic', seen: false },
    25: { word: 'quintessence', seen: false },
    26: { word: 'quiescent', seen: false },
    27: { word: 'quiescence', seen: false },
    28: { word: 'quandary', seen: false },
    29: { word: 'perspicaciousness', seen: false },
    30: { word: 'obfuscative', seen: false },
    31: { word: 'obfuscate', seen: false },
    32: { word: 'obelistic', seen: false },
    33: { word: 'obelisk', seen: false },
    34: { word: 'nebulousness', seen: false },
    35: { word: 'nebulously', seen: false },
    36: { word: 'nebulous', seen: false },
    37: { word: 'nebulated', seen: false },
    38: { word: 'nebulas', seen: false },
    39: { word: 'nebular', seen: false },
    40: { word: 'nebulaic', seen: false },
    41: { word: 'nebulaes', seen: false },
    42: { word: 'nebulae', seen: false },
    43: { word: 'nebula', seen: false },
    44: { word: 'mellisonant', seen: false },
    45: { word: 'mellifluousness', seen: false },
    46: { word: 'melancholy', seen: false },
    47: { word: 'lustrously', seen: false },
    48: { word: 'lustrate', seen: false },
    49: { word: 'luminous', seen: false },
    50: { word: 'luminosity', seen: false },
    51: { word: 'oblivious', seen: false },
    52: { word: 'intrinsic', seen: false },
    53: { word: 'ineffable', seen: false },
    54: { word: 'ineffability', seen: false },
    55: { word: 'incandescence', seen: false },
    56: { word: 'ether', seen: false },
    57: { word: 'ephemeral', seen: false },
    58: { word: 'eloquent', seen: false },
    59: { word: 'cynosure', seen: false },
    60: { word: 'cacophony', seen: false },
    61: { word: 'appreciate', seen: false },
    62: { word: 'apologize', seen: false },
    63: { word: 'zephyrous', seen: false },
    64: { word: 'swaggering', seen: false },
    65: { word: 'appreciative', seen: false },
    66: { word: 'vivacity', seen: false },
    67: { word: 'vivacious', seen: false },
    68: { word: 'vicissitudinous', seen: false },
    69: { word: 'vicissitude', seen: false },
    70: { word: 'unique', seen: false },
    71: { word: 'serpent', seen: false },
    72: { word: 'serpentine', seen: false },
    73: { word: 'serene', seen: false },
    74: { word: 'serendipitous', seen: false },
    75: { word: 'seraphicity', seen: false },
    76: { word: 'seraphically', seen: false },
    77: { word: 'salubriousnesses', seen: false },
    78: { word: 'salubriousness', seen: false },
    79: { word: 'salubriously', seen: false },
    80: { word: 'salients', seen: false },
    81: { word: 'salient', seen: false },
    82: { word: 'revised', seen: false },
    83: { word: 'resplendency', seen: false },
    84: { word: 'resiliently', seen: false },
    85: { word: 'resilient', seen: false },
    86: { word: 'repetitious', seen: false },
    87: { word: 'repetitions', seen: false },
    88: { word: 'quotidianly', seen: false },
    89: { word: 'quotidian', seen: false },
    90: { word: 'quandaries', seen: false },
    91: { word: 'quaintly', seen: false },
    92: { word: 'quaint', seen: false },
    93: { word: 'pointing', seen: false },
    94: { word: 'poignant', seen: false },
    95: { word: 'perspicacity', seen: false },
    96: { word: 'pernicious', seen: false },
    97: { word: 'oversight', seen: false },
    98: { word: 'outasign', seen: false },
    99: { word: 'incarcerated', seen: false },
    100: { word: 'oblivion', seen: false },
    101: { word: 'obfuscation', seen: false },
    102: { word: 'nebulosity', seen: false },
    103: { word: 'nebulizing', seen: false },
    104: { word: 'nebulize', seen: false },
    105: { word: 'lustrous', seen: false },
    106: { word: 'luminously', seen: false },
    107: { word: 'labyrinth', seen: false },
    108: { word: 'intricacies', seen: false },
    109: { word: 'incarcerate', seen: false },
    110: { word: 'incantatory', seen: false },
    111: { word: 'incantations', seen: false },
    112: { word: 'incantation', seen: false },
    113: { word: 'obutuse', seen: false },
    114: { word: 'evangelion', seen: false },
    115: { word: "enchant", seen: false },
    116: { word: 'uniquely', seen: false },
    117: { word: 'evanescent', seen: false },
    118: { word: 'equanimity', seen: false },
    119: { word: 'ephemeron', seen: false },
    120: { word: 'ephemerally', seen: false },
    121: { word: 'ephemeralize', seen: false },
    122: { word: 'enigmatic', seen: false },
    123: { word: 'enigma', seen: false },
    124: { word: 'eloquence', seen: false },
    125: { word: 'effulgent', seen: false },
    126: { word: 'cynosures', seen: false },
    127: { word: 'cynosural', seen: false },
    128: { word: 'capitulation', seen: false },
    129: { word: 'capitulate', seen: false },
    130: { word: 'cacophonic', seen: false },
  };

const OG = wordsObject;
let wordText = document.getElementById("word-text");
let scoreText = document.getElementById("score-count");
let livesText = document.getElementById("hearts");
let wordID;
let wordName;
let wordSeen;
let lives = 3;
let score = 0;
let reuse = 1;
document.getElementById("seen").disabled = true;
document.getElementById("not-seen").disabled = true;

  function startGame() {
    document.getElementById("seen").disabled = false;
   document.getElementById("not-seen").disabled = false;
    console.log("started");
    lives = 3;
    score = 0;
    wordsObject = OG;
    document.getElementById("card").classList.add("visible");
    document.getElementById("start").classList.add("invisible");
    newWord();
    updateScreen();
  };
  
  function newWord() {
    let random = Math.floor(Math.random() * 5);
    if(reuse == random) {
      wordID = Math.floor(Math.random() * 129) + 1;
      if(wordsObject[wordID].seen == true) {
        wordName = wordsObject[wordID].word;
        console.log(wordName);
        wordSeen = wordsObject[wordID].seen;
        console.log(wordSeen);
        wordText.innerText = wordName;
      } else {
        newWord();
      }
    } else {
      wordID = Math.floor(Math.random() * 129) + 1;
      console.log(wordID);
      wordName = wordsObject[wordID].word;
      console.log(wordName);
      wordSeen = wordsObject[wordID].seen;
      console.log(wordSeen);
      wordText.innerText = wordName;
    }
  }
  
  function submitGuessSeen() {
    if (wordSeen == true) {
      score++;
      wordsObject[wordID].seen = true;
      newWord();
      updateScreen();
    
    } else if (wordSeen == false) {
      lives--;
      wordsObject[wordID].seen = true;
      newWord();
      updateScreen();
      if (lives == 0) {
        endGame();
      }
    }
    reuse++;
  }

  function submitGuessNotSeen() {
    if (wordSeen == false) {
      score++;
      wordsObject[wordID].seen = true;
      newWord();
      updateScreen();
    } else if (wordSeen == true) {
      lives--;
      newWord();
      updateScreen();
      if (lives == 0) {
        endGame();
      }
    }
    reuse++;
  }

  function updateScreen() {
    scoreText.innerText = score;
    switch(lives) {
      case 3:
        livesText.innerText = "❤️  ❤️ ❤️";
        break;
      case 2:
        livesText.innerText = "❤️ ❤️ ";
        break;
      case 1:
        livesText.innerText = "❤️";
        break;
      case 0:
        livesText.innerText = "";
        break;
    }
  }

  function endGame() {
    let popup = document.getElementById("popup");
    popup.classList.add("open-popup");
    let scorePopup = document.getElementById("summary");
    scorePopup.innerText = score + " words"
  }

  function closePopup() {
    let popup = document.getElementById("popup");
    popup.classList.remove("open-popup");
    startGame();
  }


