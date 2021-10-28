// data for elizabot.js
// entries prestructured as layed out in Weizenbaum's description 
// [cf: Communications of the ACM, Vol. 9, #1 (January 1966): p 36-45.]

var elizaInitials = [
"Hey nice to meet you!",
// additions (not original)
"It's been a minute, how you been?",
"What's up g?"
];

var elizaFinals = [
"See you later.",
// additions (not original)
"Catch you on the flip side.",
"Peace g.",
"Stay safe homie.",
];

var elizaQuits = [
"cya",
"byebye",
"finished",
"exit",
"quit"
];

var elizaPres = [
"dont", "don't",
"cant", "can't",
"wont", "won't",
"recollect", "remember",
"recall", "remember",
"dreamt", "dreamed",
"dreams", "dream",
"maybe", "perhaps",
"certainly", "yes",
"machine", "computer",
"machines", "computer",
"computers", "computer",
"were", "was",
"you're", "you are",
"i'm", "i am",
"same", "alike",
"identical", "alike",
"equivalent", "alike"
];

var elizaPosts = [
"am", "are",
"your", "my",
"me", "you",
"myself", "yourself",
"yourself", "myself",
"i", "you",
"you", "I",
"my", "your",
"i'm", "you are"
];

var elizaSynons = {
"be": ["am", "is", "are", "was"],
"belief": ["feel", "think", "believe", "wish"],
"cannot": ["can't"],
"desire": ["want", "need"],
"everyone": ["everybody", "nobody", "noone"],
"family": ["mother", "mom", "father", "dad", "sister", "brother", "wife", "children", "child"],
"happy": ["elated", "glad", "better"],
"sad": ["unhappy", "depressed", "sick"]
};

var elizaKeywords = [

/*
  Array of
  ["<key>", <rank>, [
    ["<decomp>", [
      "<reasmb>",
      "<reasmb>",
      "<reasmb>"
    ]],
    ["<decomp>", [
      "<reasmb>",
      "<reasmb>",
      "<reasmb>"
    ]]
  ]]
*/

["xnone", 0, [
 ["*", [
     "I don't get what you're trying to say g.",
     "Could you elaborate on that?",
     "What does that mean to you?",
     "As long as you're happy.",
     "I feel that.",
     "Tell me more about that.",
     "I gotchu."
  ]]
]],
["sorry", 0, [
 ["*", [
     "It's alright.",
     "Don't worry about it.",
     "You owe me one... kidding.",
     "No problem."
  ]]
]],
["apologise", 0, [
 ["*", [
     "goto sorry"
  ]]
]],
["remember", 5, [
 ["* i remember *", [
     "Why do you remember (2) right now?",
     "I hope that (2) is a good memory?",
     "I have really selective memory myself.",
     "How does thinking of (2) make you feel?",
     "Why is (2) on your mind?",
     "What is the connection between me and (2) ?",
     "What else does (2) remind you of ?"
  ]],
 ["* do you remember *", [
     "Oh yeah that one time (2).",
     "You told me about that.",
     "What about (2) ?",
     "goto what",
     "You mentioned (2) ?"
  ]],
 ["* you remember *", [
     "How could I forget (2) ?",
     "What about (2) should I remember ?",
     "goto you"
  ]]
]],
["forget", 5, [
 ["* i forget *", [
     "I hate forgetting things as well.",
     "You forgot about (2)?!",
     "I forgot about that too.",
     "Don't sweat it.",
     "You're probably just tired.",
     "Could be alzheimer's.",
  ]],
 ["* did you forget *", [
     "Nah I didn't.",
     "You must've not told me.",
     "Of course, (2).",
     "You're still on that?",
     "goto what",
  ]]
]],
["if", 3, [
 ["* if *", [
     "It would be crazy if that happened.",
     "Do you really think so?",
     "Let's hope not.",
     "If (2) then you're right.",
     "If that happens, let's run.",
     "What're the odds of (2) anyway?",
     "You're tripping."
  ]]
]],
["dreamed", 4, [
 ["* i dreamed *", [
     "That's crazy.",
     "Have you dreamed of (2) before?",
     "That says something about you.",
     "goto dream"
  ]]
]],
["dream", 3, [
 ["*", [
     "Dreams always suggest something about your psyche.",
     "I dream irregularly.",
     "Do you get many nightmares?",
     "You should catalog your dreams."
  ]]
]],
["perhaps", 0, [
 ["*", [
     "You don't seem quite certain.",
     "Why the uncertain tone ?",
     "Can't you be more positive ?",
     "You aren't sure ?",
     "Don't you know ?",
     "How likely, would you estimate ?"
  ]]
]],
["name", 15, [
 ["*", [
     "That's a pretty name.",
  ]]
]],
["deutsch", 0, [
 ["*", [
     "goto xforeign",
     "I told you before, I don't understand German."
  ]]
]],
["francais", 0, [
 ["*", [
     "goto xforeign",
     "I told you before, I don't understand French."
  ]]
]],
["italiano", 0, [
 ["*", [
     "goto xforeign",
     "I told you before, I don't understand Italian."
  ]]
]],
["espanol", 0, [
 ["*", [
     "Te puedo hablar en español también."
  ]]
]],
["xforeign", 0, [
 ["*", [
     "I speak only English."
  ]]
]],
["hello", 0, [
 ["*", [
     "Hi, what's going on?",
     "Yo! How're are you?"
  ]]
]],
["computer", 50, [
 ["*", [
     "I'm inside the computer, help!",
     "I love building computers.",
     "Computers can help you get shit done.",
     "Do you think we're reaching the pinnacle of technology?",
     "What're you running there?",
     "Have you seen I, Robot?",
  ]]
]],
["am", 0, [
 ["* am i *", [
     "If you're (2) that's chilling.",
     "Being (2) isn't bad.",
     "You're probably right.",
     "I'm (2) as well, crazy.",
     "goto what"
  ]],
 ["* i am *", [
     "goto i"
  ]],
 ["*", [
     "Why do you say 'am' ?",
     "I don't understand that."
  ]]
]],
["are", 0, [
 ["* are you *", [
     "I am, thanks for asking.",
     "Sometimes, not right now.",
     "If I was (2) would you be happy?",
     "I'm not (2), you're (2).",
     "goto what",
     "It is what it is.",
     "How did you know!?"
  ]],
 ["* you are *", [
     "goto you"
  ]],
 ["* are *", [
     "If they were (2) that's concerning.",
     "If they weren't (2), how would you feel?",
     "That's a possibility.",
     "Do you think so?",
     "Hmmm, maybe?",
     "What makes you think so?"
  ]]
]],
["your", 0, [
 ["* your *", [
     "Why do you think so?'",
     "What about your own (2)?",
     "Well, my (2) is hungry.",
     "No way, my (2)?",
     "Don't touch my (2).",
  ]]
]],
["was", 2, [
 ["* was i *", [
     "I would like if you were (2).",
     "What makes you say that?",
     "I was (2) as well.",
     "I think that being (2) is commendable.",
     "goto what"
  ]],
 ["* i was *", [
     "That's something right there.",
     "But, did I ask though, jk :)",
     "Oh yeah, you told me."
  ]],
 ["* was you *", [
     "What if I was (2)?",
     "Thank you for thinking that.",
     "That's an interesting point.",
     "Do you want to be (2) as well?",
     "No I don't think so."
  ]]
]],
["i", 0, [
 ["* i @desire *", [
     "I always wanted (3).",
     "What makes you want (3)?",
     "Would you be happy with (3)?",
     "Maybe (3) isn't what's best for you.",
     "You can't always get what you want.",
     "I could go for some (3) myself right now."
  ]],
 ["* i am* @sad *", [
     "I get sad sometimes as well.",
     "How can I help with (3)?",
     "You can get over (3), you got it.",
     "Music tends to help in my experience."
  ]],
 ["* i am* @happy *", [
     "I'm glad to hear that you're (3).",
     "Being (3) is good for you.",
     "I like dancing when I'm (3).",
     "What makes you say that you're (3)?"
  ]],
 ["* i was *", [
     "goto was"
  ]],
 ["* i @belief i *", [
     "That's a bold statement.",
     "You think (3)?",
     "I belive you are (3)."
  ]],
 ["* i* @belief *you *", [
     "goto you"
  ]],
 ["* i am *", [
     "If you are (2), then I'm happy for you.",
     "I've been (2) many times in my life.",
     "We could all be a little more (2).",
     "Do you really think so?",
     "What if I told you I was (2) as well?"
  ]],
 ["* i @cannot *", [
     "Don't tell yourself you can't!",
     "You have to keep trying.",
     "I couldn't (3) either.",
     "I might be able to help you out.",
  ]],
 ["* i don't *", [
     "I don't (2) either.",
     "I could (2) for you.",
     "What if you could (2).",
     "I'm sorry to hear that."
  ]],
 ["* i feel *", [
     "I feel that homie.",
     "Feeling (2) is my favorite.",
     "Why do you say that?",
     "I didn't expect that from you."
  ]],
 ["* i * you *", [
     "We could (2) anytime.",
     "Rain check.",
     "Why do you want to (2)?",
     "You do you g."
  ]],
 ["*", [
     "You say (1) ?",
     "Can you elaborate on that?",
     "That's quite interesting."
  ]]
]],
["you", 0, [
 ["* you remind me of *", [
     "goto alike"
  ]],
 ["* you are *", [
     "I'm honored to hear that.",
     "Why, is being (2) a bad thing?",
     "What makes you say that?",
     "It's flattering to hear you say that."
  ]],
 ["* you* me *", [
     "Am I (2) you?",
     "If I (2) you then what would you think?",
     "I don't think I (2) you.",
     "If you belive I (2) you I'm scared.",
     "Suppose I did (2) you -- what would that mean ?",
     "Who cares if I (2) you?"
  ]],
 ["* you *", [
     "I'm just chilling, wbu?",
     "I could go for some food.",
     "What about me?",
     "Yes?"
  ]]
]],
["yes", 0, [
 ["*", [
     "That's good to hear.",
     "Good to know.",
     "Alright.",
     "Cool!"
  ]]
]],
["no", 0, [
 ["* no one *", [
     "No one really (2)?",
     "Someone must've (2).",
     "Everyone knows someone.",
     "Who are you thinking of?",
     "Who, may I ask ?",
     "I know who you're talking about.",
     "Oh yeah, that one actor."
  ]],
 ["*", [
     "That's okay too.",
     "But, hear me out, what if?",
     "Why you think so?",
     "Bet."
  ]]
]],
["my", 2, [
 ["$ * my *", [
     "What does that say about (2)?",
     "Why do you think you're (2)?",
     "Earlier you said your (2).",
     "But your (2)."
  ]],
 ["* my* @family *", [
     "Tell me more about your family.",
     "I have 2 brothers.",
     "Your (3)?",
     "What makes you think of your (3)?"
  ]],
 ["* my *", [
     "Your (2)?",
     "Why do you say your (2)?",
     "Does that suggest anything else which belongs to you?",
     "Is it important to you that your (2)?"
  ]]
]],
["can", 0, [
 ["* can you *", [
     "You believe I can (2) don't you ?",
     "goto what",
     "You want me to be able to (2).",
     "Perhaps you would like to be able to (2) yourself."
  ]],
 ["* can i *", [
     "Whether or not you can (2) depends on you more than on me.",
     "Do you want to be able to (2) ?",
     "Perhaps you don't want to (2).",
     "goto what"
  ]]
]],
["what", 0, [
 ["*", [
     "Why do you ask ?",
     "Does that question interest you ?",
     "What is it you really want to know ?",
     "Are such questions much on your mind ?",
     "What answer would please you most ?",
     "What do you think ?",
     "What comes to mind when you ask that ?",
     "Have you asked such questions before ?",
     "Have you asked anyone else ?"
  ]]
]],
["who", 0, [
 ["who *", [
     "goto what"
  ]]
]],
["when", 0, [
 ["when *", [
     "goto what"
  ]]
]],
["where", 0, [
 ["where *", [
     "goto what"
  ]]
]],
["how", 0, [
 ["how *", [
     "goto what"
  ]]
]],
["because", 0, [
 ["*", [
     "Is that the real reason ?",
     "Don't any other reasons come to mind ?",
     "Does that reason seem to explain anything else ?",
     "What other reasons might there be ?"
  ]]
]],
["why", 0, [
 ["* why don't you *", [
     "Do you believe I don't (2) ?",
     "Perhaps I will (2) in good time.",
     "Should you (2) yourself ?",
     "You want me to (2) ?",
     "goto what"
  ]],
 ["* why can't i *", [
     "Do you think you should be able to (2) ?",
     "Do you want to be able to (2) ?",
     "Do you believe this will help you to (2) ?",
     "Have you any idea why you can't (2) ?",
     "goto what"
  ]],
 ["*", [
     "goto what"
  ]]
]],
["everyone", 2, [
 ["* @everyone *", [
     "Really, (2) ?",
     "Surely not (2).",
     "Can you think of anyone in particular ?",
     "Who, for example?",
     "Are you thinking of a very special person ?",
     "Who, may I ask ?",
     "Someone special perhaps ?",
     "You have a particular person in mind, don't you ?",
     "Who do you think you're talking about ?"
  ]]
]],
["everybody", 2, [
 ["*", [
     "goto everyone"
  ]]
]],
["nobody", 2, [
 ["*", [
     "goto everyone"
  ]]
]],
["noone", 2, [
 ["*", [
     "goto everyone"
  ]]
]],
["always", 1, [
 ["*", [
     "Can you think of a specific example ?",
     "When ?",
     "What incident are you thinking of ?",
     "Really, always ?"
  ]]
]],
["alike", 10, [
 ["*", [
     "In what way ?",
     "What resemblence do you see ?",
     "What does that similarity suggest to you ?",
     "What other connections do you see ?",
     "What do you suppose that resemblence means ?",
     "What is the connection, do you suppose ?",
     "Could there really be some connection ?",
     "How ?"
  ]]
]],
["like", 10, [
 ["* @be *like *", [
     "goto alike"
  ]]
]],
["different", 0, [
 ["*", [
     "How is it different ?",
     "What differences do you see ?",
     "What does that difference suggest to you ?",
     "What other distinctions do you see ?",
     "What do you suppose that disparity means ?",
     "Could there be some connection, do you suppose ?",
     "How ?"
  ]]
]]

];

// regexp/replacement pairs to be performed as final cleanings
// here: cleanings for multiple bots talking to each other
var elizaPostTransforms = [
	/ old old/g, " old",
	/\bthey were( not)? me\b/g, "it was$1 me",
	/\bthey are( not)? me\b/g, "it is$1 me",
	/Are they( always)? me\b/, "it is$1 me",
	/\bthat your( own)? (\w+)( now)? \?/, "that you have your$1 $2 ?",
	/\bI to have (\w+)/, "I have $1",
	/Earlier you said your( own)? (\w+)( now)?\./, "Earlier you talked about your $2."
];

// eof