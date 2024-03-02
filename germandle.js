//words object
var words = [
    {
        "word": "Sitzfleisch",
        "type": "noun",
        "def": "'sitting flesh', a term for one's bottom",
        "real": true
    },
    {
        "word": "Antibabypille",
        "type": "noun",
        "def": "contraceptive pills",
        "real": true
    }, 
    {
        "word": "Kabelsalat",
        "type": "noun",
        "def": "that mess of tangled cables you have behind your TV",
        "real": true
    },
    {
        "word": "Drübertapezieren",
        "type": "verb",
        "def": "to cover something up by pasting wallpaper over it",
        "real": true
    },
    {
        "word": "Schadenfreude",
        "type": "noun",
        "def": "pleasure derived by someone from another person's misfortune",
        "real": true
    },
    {
        "word": "Kummerspeck",
        "type": "noun",
        "def": "excess weight or body fat gained due to emotional overeating",
        "real": true   
    },
    {
        "word": "Backpfeifengesicht",
        "type": "noun",
        "def": "a face that's badly in need of a fist",
        "real": true   
    },
    {
        "word": "Wortfindungsfähigkeit",
        "type": "noun",
        "def": "the german's ability to construct new words (for ridiculous things)",
        "real": true 
    },
    {
        "word": "Innerer Schweinehund",
        "type": "noun",
        "def": "'inner pig dog', the term used to describe the feeling of laziness that keeps you from reaching your goals",
        "real": true
    },
        {
            "word": "Hodenkobold",
            "type": "noun",
            "def": "'testicle goblin', someone who is annoying and face looks like a pair of testicles",
            "real": true
        },
        {
            "word": "Pommespanzer",
            "type": "noun",
            "def": "'french fry tank', a person who is fat like a tank and eats a lot of unhealthy food",
            "real": true
        },
        {
            "word": "Saufzwerg",
            "type": "noun",
            "def": "'drinking dwarf', a small person who always gets drunk way too quickly",
            "real": true
        },
        {
            "word": "Kampfzwerg",
            "type": "noun",
            "def": "'fighting dwarf', a small person with serious anger issues ready to take on every fight they get",
            "real": true
        },
        {
            "word": "Gehwegpanzer",
            "type": "noun",
            "def": "'sidewalk tank', a term for a fat and big person",
            "real": true
        },
        {
            "word": "Randalekobolt",
            "type": "noun",
            "def": "'riot goblin', a small person who has serious aggression problems",
            "real": false
        },
        {
            "word": "Wolkenwiegenlied",
            "type": "noun",
            "def": "'cloud lullaby', a soothing melody associated with the gentle snores heard on cloudy nights",
            "real": false
        },
        {
            "word": "Plüschpinguin",
            "type": "noun",
            "def": "'plush penguin', a plush toy modeled after the incredibly soft and cuddly Antarctic bird",
            "real": false
        },
        {
            "word": "Tanzmarmelade",
            "type": "noun",
            "def": "'dance jam', a sweet spread that seems to inspire spontaneous dance moves",
            "real": false
        },
        {
            "word": "Kicherkanonade",
            "type": "noun",
            "def": "'giggle cannonade', a burst of infectious laughter reminiscent of a joyful explosion",
            "real": false
        },
        {
            "word": "Schlummerwurst",
            "type": "noun",
            "def": "'slumber sausage', a pillow-shaped sausage designed for optimal comfort during naps",
            "real": false
        },
        {
            "word": "Flauschigurke",
            "type": "noun",
            "def": "'fluffy cucumber', a whimsically soft and huggable vegetable variety grown in the german countryside",
            "real": false
        },
        {
            "word": "Schnarchblumenstrauss",
            "type": "noun",
            "def": "'snore flower bouquet', a charming arrangement that mimics the gentle sounds of snoring",
            "real": false
        },
        {
            "word": "Klatschbanane",
            "type": "noun",
            "def": "'gossip banana', someone who tells the most useless lies for no reasons",
            "real": false
        },
        {
            "word": "Zauberzahnfee",
            "type": "noun",
            "def": "'magic tooth fairy', a mythical figure believed to bring enchantment along with exchanged teeth",
            "real": false
        },
        {
            "word": "Wackelohrschnecke",
            "type": "verb",
            "def": "'wobbly ear snail', used when a dog's ears perk up upon hearing a command",
            "real": false
        },
        {
            "word": "Nudelgrinsekatze",
            "type": "noun",
            "def": "'noodle-grinning cat', a feline's ability to sense the starch present in pasta",
            "real": false
        },
        {
            "word": "Kicherblitz",
            "type": "noun",
            "def": "'giggle flash', a sudden burst of laughter with the intensity of a quick and joyous spark",
            "real": false
        },
        {
            "word": "Schlappohrgeist",
            "type": "noun",
            "def": "'floppy ear spirit', the personality of pets with floppy ears",
            "real": false
        },
        {
            "word": "Wirbelwindel",
            "type": "noun",
            "def": "'whirlwind diaper', a whimsical term for a diaper that seems to change magically with a twirl",
            "real": false
        }, 
            {
                "word": "Kuschelwölkchen",
                "type": "noun",
                "def": "'cuddle cloudlet', a fluffy, imaginary cloud that spreads warmth and hugs",
                "real": false
            },
            {
                "word": "Pupspinguin",
                "type": "noun",
                "def": "'fart penguin', a comical bird known for its giggly and musical toots popular in german children's cartoons",
                "real": false
            },
            {
                "word": "Plüschregenbogen",
                "type": "noun",
                "def": "'plush rainbow', a soft and cuddly rainbow that appears after rain showers",
                "real": false
            },
            {
                "word": "Zauberknuddel",
                "type": "noun",
                "def": "'magic cuddle', a spell that turns any hug into a magical, heartwarming embrace",
                "real": false
            },
            {
                "word": "Schlummerglühwürmchen",
                "type": "noun",
                "def": "'slumber firefly', a tiny glowing friend that lights up bedtime with dreams",
                "real": false
            },
            {
                "word": "Flauschschlüsselblume",
                "type": "noun",
                "def": "'fluffy blanket', how your comforter feels straight out of the dryer",
                "real": false
            },
            {
                "word": "Zirkuswirbelwind",
                "type": "noun",
                "def": "'circus whirlwind', a playful wind that carries circus music and confetti",
                "real": false
            },
            {
                "word": "Schnuckelpony",
                "type": "noun",
                "def": "'cuddly pony', a popular german children's toy which sings rhymes",
                "real": false
            },
            {
                "word": "Plapperquakenteich",
                "type": "noun",
                "def": "'chatter quack pond', a pond where talkative ducks exchange funny tales",
                "real": false
            },
            {
                "word": "Kringelzauberstift",
                "type": "noun",
                "def": "'curl magic pen', the NASA pen developed to be used in space as an alternative to the traditional ballpoint pen",
                "real": false
            },
            {
                "word": "Schnippelschnitzelhaus",
                "type": "noun",
                "def": "'snip-snap house', a whimsical dwelling made of colorful paper cutouts",
                "real": false
            },
            {
                "word": "Lachlolly",
                "type": "noun",
                "def": "'laughter lollipop', the big rainbow swirl lollipop",
                "real": false
            },
            {
                "word": "Zauberbienenwiese",
                "type": "noun",
                "def": "'magic bee meadow', a field where bees hum enchanting tunes and share sweet nectar spells",
                "real": false
            },
            {
                "word": "Kuschelkakao",
                "type": "noun",
                "def": "'cuddle cocoa', the feeling of sipping a hot drink on a snowy day",
                "real": false
            },
            {
                "word": "Hüpfkissenburg",
                "type": "noun",
                "def": "'bouncy pillow castle', a fortress made of pillows where bouncing is not just allowed but encouraged",
                "real": false
            },
            {
                "word": "Flatterblumengarten",
                "type": "noun",
                "def": "'flutter flower garden', a magical plot where flowers playfully dance in the breeze",
                "real": false
            },
            {
                "word": "Schnarcheinhorn",
                "type": "noun",
                "def": "'snore unicorn', used to describe one who often snores in their sleep",
                "real": false
            },
            {
                "word": "Kicherzahnfee",
                "type": "noun",
                "def": "'giggle tooth fairy', the german tooth fairy which makes you laugh",
                "real": false
            },
            {
                "word": "Plüschdelfinchen",
                "type": "noun",
                "def": "'plush dolphinlet', a little dolphin plushie that brings joy with every squeak",
                "real": false
            },
            {
                "word": "Schnarchenschnuffelwolke",
                "type": "noun",
                "def": "'snore-snuggle cloud', when you turn your pillow over in the middle of the night and it's icy cold",
                "real": false
            }, 
                {
                    "word": "Flirtflausch",
                    "type": "noun",
                    "def": "'flirt fluff', the art of charmingly engaging in light, playful banter with a touch of mischief",
                    "real": false
                },
                {
                    "word": "Schnapszirkelei",
                    "type": "noun",
                    "def": "'booze doodles', the amusing and slightly absurd sketches created under the influence of alchohol",
                    "real": false
                },
                {
                    "word": "Schmunzelmuff",
                    "type": "noun",
                    "def": "'smile funk', a mysterious and delightful aura that appears during moments of cheeky humor",
                    "real": false
                },
                {
                    "word": "Kuschelträumer",
                    "type": "noun",
                    "def": "'cuddle dreamer', a person who indulges in cozy daydreams, often with a mischievous twist",
                    "real": false
                },
                {
                    "word": "Plauschpantoffel",
                    "type": "noun",
                    "def": "'chat slipper', a comfortable and easygoing pair of slippers perfect for laid-back conversations",
                    "real": false
                },
                {
                    "word": "Gigglegrapscher",
                    "type": "noun",
                    "def": "'giggle groper', someone who playfully teases with a good-natured, mischievous touch",
                    "real": false
                },
                {
                    "word": "Schabernacksekt",
                    "type": "noun",
                    "def": "'prank champagne', a bubbly non-alchoholic beverage designed for children to use for toasts during new years",
                    "real": false
                },
                {
                    "word": "Kicherkerlchen",
                    "type": "noun",
                    "def": "'giggle guy', a person who brings laughter with a dash of charming mischief",
                    "real": false
                },
                {
                    "word": "Flirtfeder",
                    "type": "noun",
                    "def": "'flirt feather', a playful and subtle way of dropping hints or engaging in a bit of romantic banter",
                    "real": false
                },
                {
                    "word": "Schnuckelrätsel",
                    "type": "noun",
                    "def": "'cuddle puzzle', a child's jigsaw puzzle",
                    "real": false
                },
                {
                    "word": "Schmeichelgurke",
                    "type": "noun",
                    "def": "'compliment cucumber', a term of endearment for someone who skillfully delivers flattering remarks",
                    "real": false
                },
                {
                    "word": "Biele Biele",
                    "type": "noun",
                    "def": "a way to call ducks when they are hungry",
                    "real": true
                },
                {
                    "word": "Korbschmunzeln",
                    "type": "noun",
                    "def": "'gnome tickler', a person who cannot refrain from tickling short people's stomach",
                    "real": false
                },
                {
                    "word": "Pläuschlein",
                    "type": "noun",
                    "def": "'little chat', a cozy and intimate conversation filled with light-hearted banter",
                    "real": false
                },
                {
                    "word": "Zungenkitzler",
                    "type": "noun",
                    "def": "'tongue tickler', a witty phrase or remark that playfully stimulates the senses",
                    "real": false
                },
                {
                    "word": "Knickerschmunz",
                    "type": "noun",
                    "def": "'bend laugh', the light-hearted chuckle that accompanies a spontaneous and amusing twist",
                    "real": false
                },
                {
                    "word": "Schelmenschlürfer",
                    "type": "noun",
                    "def": "'rogue sipper', someone who enjoys sipping drinks with a cheeky and mischievous spirit",
                    "real": false
                },
                {
                    "word": "Lustkissen",
                    "type": "noun",
                    "def": "'pleasure cushion', a comfortable and inviting spot reserved for lighthearted and playful moments",
                    "real": false
                },
                {
                    "word": "Flirtgebäck",
                    "type": "noun",
                    "def": "'flirt pastry', a sweet and playful treat enjoyed during charming encounters",
                    "real": false
                }  
]


//chosen word vars
var chosenIndex;
var chosenWord;
var chosenType;
var chosenDef;
var real;

//stat vars
var livesCount = 3;
var scoreCount = 0;

function choose() {
    chosenIndex = Math.floor(Math.random() * words.length);
    chosenWord = words[chosenIndex].word;
    chosenType = words[chosenIndex].type;
    chosenDef = words[chosenIndex].def;
    real = words[chosenIndex].real;
    updateScreen();
}

function calc(guess) {
    if(real == true) {
        submit(guess, true);
    } else if(real == false) {
        submit(guess, false);
    }
}
function submit(guess, tf) {
    if(guess == tf) {
        scoreCount++;
    } else if (guess !== tf){
        switch (livesCount) {
            case 3:
                livesCount--;
                break;
            case 2:
                livesCount--;
                break;
            case 1: 
                livesCount--;
                break;
            case 0:
                endGame();
                break;
        }
    }
    choose();
    updateScreen();
}

function endGame() {
    let popup = document.getElementById("popup");
    popup.classList.add("open-popup");
    let winDisplay = document.getElementById("winner-display");
    winDisplay.innerText = "You lost.";
    let summaryDisplay = document.getElementById("summary");
    summaryDisplay.innerText = "The country was " + chosen + ".";
}

function newGame() {
    location.reload();
}

function updateScreen() {
    var word = document.getElementById("word");
    word.innerText = chosenWord;
    var description = document.getElementById("definition");
    description.innerText = chosenDef
    var type = document.getElementById("type");
    type.innerText = chosenType + " ";
    var lives = document.getElementById("lives");
    lives.innerText = livesCount;
    var score = document.getElementById("score");
    score.innerText = scoreCount;
}

//int game on window load
window.onload = () => {
    choose();
}