const response = {
  total_summary: {
    total_cefr: "C1.1",
    num_sentences: 4,
    total_num_words: 86,
    mean_words_per_sentence: 21,
    total_word_list_by_cefr: {
      A1: [
        "as",
        "with",
        "a",
        "that",
        "in",
        "of",
        "their",
        "one",
        "and",
        "the",
        "will",
        "do",
        "money",
        "not",
        "have",
        "to",
        "into",
        "or",
        "does",
        "has",
        "on",
      ],
      A2: ["include", "fall", "while", "that", "stronger", "could", "mean"],
      B1: [
        "fairly",
        "former",
        "continue",
        "gain",
        "provide",
        "up-to-date",
        "issue",
        "argue",
      ],
      B2: [
        "authorities",
        "such",
        "budget",
        "distribute",
        "supplies",
        "equally",
        "assistance",
        "donating",
        "necessarily",
        "latter",
        "poverty",
        "naturally",
        "citizens",
        "nations",
        "appropriately",
        "wealth",
        "nation",
        "grip",
        "assisting",
      ],
      C1: ["tendency", "corrupt", "aid"],
      C2: ["officials", "intensify", "regimes", "retain", "riches"],
      unk: [],
      stopwords: [
        "as",
        "with",
        "a",
        "that",
        "in",
        "of",
        "their",
        "and",
        "while",
        "the",
        "will",
        "such",
        "do",
        "not",
        "have",
        "to",
        "into",
        "or",
        "does",
        "has",
        "on",
      ],
    },
    total_word_count_by_cefr: {
      A1: 38,
      A2: 8,
      B1: 8,
      B2: 23,
      C1: 4,
      C2: 5,
      unk: 0,
      stopwords: 39,
    },
    total_word_distribution_by_cefr: {
      A1: 44.2,
      A2: 9.3,
      B1: 9.3,
      B2: 26.7,
      C1: 4.7,
      C2: 5.8,
      unk: 0.0,
      stopwords: 45.3,
    },
  },
  sents_detail: [
    {
      sent_idx: 0,
      raw_sentence:
        "The up-to-date issue has a tendency to intensify in nations with corrupt officials that do not budget or distribute the nation's riches equally and appropriately.",
      sentence:
        "the up-to-date issue has a tendency to intensify in nations with corrupt officials that do not budget or distribute the nation riches equally and appropriately",
      sentence_summary: {
        sentence_num_words: 25,
        sentence_cefr: "C1.6",
        sentence_word_list_by_cefr: {
          A1: [
            "or",
            "and",
            "do",
            "not",
            "with",
            "has",
            "a",
            "that",
            "to",
            "in",
            "the",
          ],
          A2: [],
          B1: ["up-to-date", "issue"],
          B2: [
            "budget",
            "distribute",
            "equally",
            "nations",
            "appropriately",
            "nation",
          ],
          C1: ["tendency", "corrupt"],
          C2: ["intensify", "officials", "riches"],
          unk: [],
          stopwords: [
            "or",
            "and",
            "do",
            "not",
            "with",
            "has",
            "a",
            "that",
            "to",
            "in",
            "the",
          ],
        },
        sentence_word_count_by_cefr: {
          A1: 12,
          A2: 0,
          B1: 2,
          B2: 6,
          C1: 2,
          C2: 3,
          unk: 0,
          stopwords: 12,
        },
        sentence_word_distribution_by_cefr: {
          A1: 48.0,
          A2: 0.0,
          B1: 8.0,
          B2: 24.0,
          C1: 8.0,
          C2: 12.0,
          unk: 0.0,
          stopwords: 48.0,
        },
      },
      words_detail: [
        {
          word_idx: 0,
          raw_word: "The",
          cefr: "A1",
          stopword: true,
          word: "the",
          lemma: "the",
          pos: "det.",
          html_description:
            '<div class="card_content_item" align="left"><div class="_pronoun">the (determiner.)</div><p class="_txt">used before nouns to refer to particular things or people that have already been talked about or are already known</p><span class="_ex">Usage</span><ul class="_list"><li>I bought a shirt and some shoes. The shirt was expensive, but the shoes weren\'t.</li><li>Could you pass the salt, please?</li><li>I\'ll pick you up at the station.</li><li>I really enjoyed the book I just read.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">the (determiner.)</div><p class="_txt">used before nouns when only one of something exists</p><span class="_ex">Usage</span><ul class="_list"><li>Have you seen the Eiffel Tower?</li><li>What will happen in the future?</li><li>She\'s traveling around the world.</li><li>They live in the north of Spain.</li><li>Ed Koch was for many years the mayor of New York.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">the (determiner.)</div><p class="_txt">used before some nouns that refer to place when you want to mention that type of place, without showing exactly which example of the place you mean</p><span class="_ex">Usage</span><ul class="_list"><li>We spent all day at the beach.</li><li>Shall we go to the movies this evening?</li><li>I must go to the bank.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">the (determiner.)</div><p class="_txt">used before superlatives and other words, such as \'first\' or \'only\' or numbers showing something\'s position in a list, which refer to only one thing or person</p><span class="_ex">Usage</span><ul class="_list"><li>That was one of the best movies I\'ve ever seen.</li><li>What\'s the highest mountain in Europe?</li><li>I shall never forget the first time we met.</li><li>You\'re the fifth person to ask me that question.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">the (determiner.)</div><p class="_txt">used before numbers that refer to periods of ten years</p><span class="_ex">Usage</span><ul class="_list"><li>the sixties</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">the (determiner.)</div><p class="_txt">used instead of a possessive adjective such as "your," "her," or "my"</p><span class="_ex">Usage</span><ul class="_list"><li>He held her by the arm.</li><li>Where did I park the car?</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">the (determiner.)</div><p class="_txt">used before each of two adjectives or adverbs to show how one thing changes depending on another</p><span class="_ex">Usage</span><ul class="_list"><li> The longer we live here, the more we like it. </li></ul></div>',
          description: [
            {
              level: "A1",
              pos: "determiner",
              guideword: "PARTICULAR",
              definition:
                "used before nouns to refer to particular things or people that have already been talked about or are already known",
              dictionary_example: [
                "I bought a shirt and some shoes. The shirt was expensive, but the shoes weren't.",
                "Could you pass the salt, please?",
                "I'll pick you up at the station.",
                "I really enjoyed the book I just read.",
              ],
              learner_example: [
                "I like fresh food from my garden[.] I like [a]lso [to] work in the garden. (Skills for Life (Entry 1); A1; Polish)",
              ],
            },
            {
              level: "A1",
              pos: "determiner",
              guideword: "ONLY ONE",
              definition: "used before nouns when only one of something exists",
              dictionary_example: [
                "Have you seen the Eiffel Tower?",
                "What will happen in the future?",
                "She's traveling around the world.",
                "They live in the north of Spain.",
                "Ed Koch was for many years the mayor of New York.",
              ],
              learner_example: [
                "That day is [also] the Chinese New Year. (Skills for Life (Entry 1); A1; Chinese)",
              ],
            },
            {
              level: "A1",
              pos: "determiner",
              guideword: "PLACE",
              definition:
                "used before some nouns that refer to place when you want to mention that type of place, without showing exactly which example of the place you mean",
              dictionary_example: [
                "We spent all day at the beach.",
                "Shall we go to the movies this evening?",
                "I must go to the bank.",
              ],
              learner_example: [
                "I like to go to swimming and go to the beach. (Skills for Life (Entry 1); A1; Thai)",
              ],
            },
            {
              level: "A2",
              pos: "determiner",
              guideword: "BEFORE SUPERLATIVES, ETC.",
              definition:
                "used before superlatives and other words, such as 'first' or 'only' or numbers showing something's position in a list, which refer to only one thing or person",
              dictionary_example: [
                "That was one of the best movies I've ever seen.",
                "What's the highest mountain in Europe?",
                "I shall never forget the first time we met.",
                "You're the fifth person to ask me that question.",
              ],
              learner_example: [
                "The best present I have ever got was a car from my grandma. (Key English Test; A2; Portuguese)",
              ],
            },
            {
              level: "B2",
              pos: "determiner",
              guideword: "TIME",
              definition:
                "used before numbers that refer to periods of ten years",
              dictionary_example: ["the sixties"],
              learner_example: [
                "For example, people in the 1950s who didn't have computers are likely to have had difficulty in checking information, booking tickets, and communicating with each other. (First Certificate in English; B2; Korean)",
              ],
            },
            {
              level: "B1",
              pos: "determiner",
              guideword: "YOUR",
              definition:
                'used instead of a possessive adjective such as "your," "her," or "my"',
              dictionary_example: [
                "He held her by the arm.",
                "Where did I park the car?",
              ],
              learner_example: [
                "There [are] a lot of people, and there are a lot of cars, so you would have problems find[ing] a place to park the car. (Preliminary English Test; B1; Spanish)",
              ],
            },
            {
              level: "B2",
              pos: "determiner",
              guideword: "COMPARE",
              definition:
                "used before each of two adjectives or adverbs to show how one thing changes depending on another",
              dictionary_example: [
                " The longer we live here, the more we like it. ",
              ],
              learner_example: [
                "In many cases, the more things you learn, the less things you know. (First Certificate in English; B2; French)",
              ],
            },
          ],
          synonym: [],
        },
        {
          word_idx: 1,
          raw_word: "up-to-date",
          cefr: "B1",
          stopword: false,
          word: "up-to-date",
          lemma: "up-to-date",
          pos: "adj.",
          html_description:
            '<div class="card_content_item" align="left"><div class="_pronoun">up-to-date (adjective.)</div><p class="_txt">modern, recent, or containing the latest information</p><span class="_ex">Usage</span><ul class="_list"><li>Visit our website for up-to-date information on movie times.</li><li>It is essential to have an up-to-date dictionary.</li><li> The Internet keeps us up to date. </li></ul></div>',
          description: [
            {
              level: "B1",
              pos: "adjective",
              guideword: "",
              definition:
                "modern, recent, or containing the latest information",
              dictionary_example: [
                "Visit our website for up-to-date information on movie times.",
                "It is essential to have an up-to-date dictionary.",
                " The Internet keeps us up to date. ",
              ],
              learner_example: [
                "I will write more later - I do need to give you up-to-date information on my love life! (First Certificate in English; B2; Czech)",
              ],
            },
          ],
          synonym: [],
        },
        {
          word_idx: 2,
          raw_word: "issue",
          cefr: "B1",
          stopword: false,
          word: "issue",
          lemma: "issue",
          pos: "n.",
          html_description:
            '<div class="card_content_item" align="left"><div class="_pronoun">issue (noun.)</div><p class="_txt">a subject or problem which people are thinking and talking about</p><span class="_ex">Usage</span><ul class="_list"><li>environmental/moral/personal issues</li><li>As employers we need to be seen to be addressing these issues sympathetically.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">issue (noun.)</div><p class="_txt">the newspaper, magazine, etc. that is produced on a particular day/week/month</p><span class="_ex">Usage</span><ul class="_list"><li>Have you seen the latest issue of Computer World?</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">issue (verb.)</div><p class="_txt">to officially say something or give someone something</p><span class="_ex">Usage</span><ul class="_list"><li>The office will be issuing parking permits on Tuesday and Thursday mornings.</li><li>The fire department issued a statement about its plans.</li></ul></div>',
          description: [
            {
              level: "B1",
              pos: "noun",
              guideword: "SUBJECT",
              definition:
                "a subject or problem which people are thinking and talking about",
              dictionary_example: [
                "environmental/moral/personal issues",
                "As employers we need to be seen to be addressing these issues sympathetically.",
              ],
              learner_example: [
                "You're a student so this should be a very important issue for you. (Preliminary English Test; B1; Lithuanian)",
              ],
            },
            {
              level: "B2",
              pos: "noun",
              guideword: "MAGAZINE",
              definition:
                "the newspaper, magazine, etc. that is produced on a particular day/week/month",
              dictionary_example: [
                "Have you seen the latest issue of Computer World?",
              ],
              learner_example: [
                "Having seen your advertisement in the 4th issue of Asahi News, I hasten to write this letter. (First Certificate in English; B2; Japanese)",
              ],
            },
            {
              level: "C2",
              pos: "verb",
              guideword: "",
              definition:
                "to officially say something or give someone something",
              dictionary_example: [
                "The office will be issuing parking permits on Tuesday and Thursday mornings.",
                "The fire department issued a statement about its plans.",
              ],
              learner_example: [
                "Finally, the doctors issued an ultimatum. (Certificate of Proficiency in English; C2; Dutch)",
              ],
            },
          ],
          synonym: [
            {
              word: "subject",
              cefr: "A1.7",
              html_description:
                '<div class="card_content_item" align="left"><div class="_pronoun">subject (noun.)</div><p class="_txt">an area of knowledge which is studied in school or college</p><span class="_ex">Usage</span><ul class="_list"><li>My favorite subjects are history and geography.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">subject (noun.)</div><p class="_txt">the person or thing which performs the action described by the verb</p><span class="_ex">Usage</span><ul class="_list"><li>"Bob" is the subject of the sentence "Bob threw the ball."</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">subject (noun.)</div><p class="_txt">what someone is writing or talking about</p><span class="_ex">Usage</span><ul class="_list"><li>Our subject for discussion is homelessness.</li><li>She has made a series of documentaries on the subject of family relationships.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">subject (adjective.)</div><p class="_txt">a person who is written about in a book or who is shown in a picture</p><span class="_ex">Usage</span><ul class="_list"><li>Rembrandt is the subject of her latest novel.</li></ul></div>',
            },
            {
              word: "return",
              cefr: "A2.3",
              html_description:
                '<div class="card_content_item" align="left"><div class="_pronoun">return (verb.)</div><p class="_txt">to go or come back to a place where you were before</p><span class="_ex">Usage</span><ul class="_list"><li> He returned to Nigeria in 2009.</li><li>She\'ll return home from a business trip tomorrow.</li><li>She left Sweden at the age of 25 and never returned.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">return (verb.)</div><p class="_txt">to give, send, or put something back where it came from</p><span class="_ex">Usage</span><ul class="_list"><li> I have to return the book by Friday.</li><li> He immediately returned the records to the files.</li><li>The new TV broke so they returned it to the store.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">return (verb.)</div><p class="_txt">to react to something that someone does or says by doing or saying the same</p><span class="_ex">Usage</span><ul class="_list"><li> I returned his smile.</li><li> I have to return Michael\'s call.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">return (verb.)</div><p class="_txt">to happen again or start to exist again</p><span class="_ex">Usage</span><ul class="_list"><li>You should call the doctor if the pain returns.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">return (noun.)</div><p class="_txt">when someone goes or comes back to a place where they were before</p><span class="_ex">Usage</span><ul class="_list"><li>The whole town came out to celebrate his return from the war.</li><li> On his return to Sydney, he started up a business.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">return (noun.)</div><p class="_txt">a key on a computer keyboard that is used to make the computer accept information or to start a new line in a document</p><span class="_ex">Usage</span><ul class="_list"><li> Type in the password and press return. </li></ul></div>',
            },
            {
              word: "egress",
              cefr: "B2.1",
              html_description:
                '<div class="card_content_item" align="left"><div class="_pronoun">egress</div><p class="_txt">the act or way of leaving a place: </p><span class="_ex">Usage</span><ul class="_list">The main egress from the restaurant had been blocked off.</ul></div>',
            },
            {
              word: "publication",
              cefr: "B2.8",
              html_description:
                '<div class="card_content_item" align="left"><div class="_pronoun">publication (noun.)</div><p class="_txt">a book, magazine, newspaper or document in which information or stories are published</p><span class="_ex">Usage</span><ul class="_list"><li>Our latest publication is a magazine for surfers.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">publication (noun.)</div><p class="_txt">the act of making information or stories available to people in a printed form</p><span class="_ex">Usage</span><ul class="_list"><li>The brochure will be ready for publication in September.</li><li>Will you arrange for publication of the names of the winners?</li><li>When is the publication date?</li></ul></div>',
            },
            {
              word: "outcome",
              cefr: "C1.6",
              html_description:
                '<div class="card_content_item" align="left"><div class="_pronoun">outcome (noun.)</div><p class="_txt">the final result of an activity or process</p><span class="_ex">Usage</span><ul class="_list"><li>It\'s too early to predict the outcome of the meeting.</li></ul></div>',
            },
          ],
        },
        {
          word_idx: 3,
          raw_word: "has",
          cefr: "A1",
          stopword: true,
          word: "has",
          lemma: "have",
          pos: "v.",
          html_description:
            '<div class="card_content_item" align="left"><div class="_pronoun">have (auxiliary verb.)</div><p class="_txt">used with the past participle of another verb to form the present and past perfect tenses</p><span class="_ex">Usage</span><ul class="_list"><li> Have you seen Jake? </li><li> He hasn\'t visited us yet.</li><li> I\'ve met his wife before.</li><li> It would have been better to tell the truth.</li><li> He\'s been working in Denver for two years now.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">have (verb.)</div><p class="_txt">to own or possess</p><span class="_ex">Usage</span><ul class="_list"><li>They have a big house.</li><li>He has blue eyes.</li><li>She has a lot of experience.</li><li>Do you have time to finish the report today?</li><li>I\'ve got two brothers.</li><li>He\'s got a degree in journalism.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">have (verb.)</div><p class="_txt">If you have a particular illness, you suffer from it.</p><span class="_ex">Usage</span><ul class="_list"><li>I have a cold.</li><li>Have you ever had the measles?</li><li>Dad has a headache.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">have (verb.)</div><p class="_txt">to eat or drink something</p><span class="_ex">Usage</span><ul class="_list"><li>I had a turkey sandwich for lunch.</li><li>Can I have a drink of water?</li><li>Let\'s have a snack before the movie.</li><li>When are we having dinner?</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">have (verb.)</div><p class="_txt">to give birth to a baby</p><span class="_ex">Usage</span><ul class="_list"><li>Elaine had a baby girl yesterday.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">have (verb.)</div><p class="_txt">to cause something to be in a particular state</p><span class="_ex">Usage</span><ul class="_list"><li>He had dinner ready by the time we got home.</li><li>We had the tent up within ten minutes.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">have (verb.)</div><p class="_txt">used to say that someone is holding something, or that someone or something is with them</p><span class="_ex">Usage</span><ul class="_list"><li>He had a pen in his hand.</li><li>She had a little boy with her.</li></ul></div>',
          description: [
            {
              level: "A2",
              pos: "auxiliary verb",
              guideword: "",
              definition:
                "used with the past participle of another verb to form the present and past perfect tenses",
              dictionary_example: [
                " Have you seen Jake? ",
                " He hasn't visited us yet.",
                " I've met his wife before.",
                " It would have been better to tell the truth.",
                " He's been working in Denver for two years now.",
              ],
              learner_example: [
                "Dear Jo, Sorry I haven't written sooner. (Key English Test; A2; Spanish)",
              ],
            },
            {
              level: "A1",
              pos: "verb",
              guideword: "POSSESS",
              definition: "to own or possess",
              dictionary_example: [
                "They have a big house.",
                "He has blue eyes.",
                "She has a lot of experience.",
                "Do you have time to finish the report today?",
                "I've got two brothers.",
                "He's got a degree in journalism.",
              ],
              learner_example: [
                "I had [a] big house in Somalia, now I hav[e] [a] small house. (Skills for Life (Entry 1); A1; Somali)",
              ],
            },
            {
              level: "A1",
              pos: "verb",
              guideword: "BE ILL",
              definition:
                "If you have a particular illness, you suffer from it.",
              dictionary_example: [
                "I have a cold.",
                "Have you ever had the measles?",
                "Dad has a headache.",
              ],
              learner_example: [
                "I know you had [the] flu. (Key English Test; A2; Spanish)",
              ],
            },
            {
              level: "A1",
              pos: "verb",
              guideword: "EAT/DRINK",
              definition: "to eat or drink something",
              dictionary_example: [
                "I had a turkey sandwich for lunch.",
                "Can I have a drink of water?",
                "Let's have a snack before the movie.",
                "When are we having dinner?",
              ],
              learner_example: [
                "I have dinner [at] 5 pm. (Skills for Life (Entry 1); A1; French)",
              ],
            },
            {
              level: "A2",
              pos: "verb",
              guideword: "BABY",
              definition: "to give birth to a baby",
              dictionary_example: ["Elaine had a baby girl yesterday."],
              learner_example: [
                "And later, we can go [to] Mary's house, because she has had a baby, and I would like to see her. (Key English Test; A2; Spanish)",
              ],
            },
            {
              level: "B1",
              pos: "verb",
              guideword: "CAUSE",
              definition: "to cause something to be in a particular state",
              dictionary_example: [
                "He had dinner ready by the time we got home.",
                "We had the tent up within ten minutes.",
              ],
              learner_example: [
                "We had everything ready in case of an emergency or a chaos situation. (First Certificate in English; B2; Spanish)",
              ],
            },
            {
              level: "B1",
              pos: "verb",
              guideword: "HOLD",
              definition:
                "used to say that someone is holding something, or that someone or something is with them",
              dictionary_example: [
                "He had a pen in his hand.",
                "She had a little boy with her.",
              ],
              learner_example: [
                "Maria had the phone in her hand. (Preliminary English Test; B1; Spanish)",
              ],
            },
          ],
          synonym: [],
        },
        {
          word_idx: 4,
          raw_word: "a",
          cefr: "A1",
          stopword: true,
          word: "a",
          lemma: "a",
          pos: "det.",
          html_description:
            '<div class="card_content_item" align="left"><div class="_pronoun">a (determiner.)</div><p class="_txt">used before a noun to refer to a single thing or person but not a particular thing or person or not one that you have referred to before</p><span class="_ex">Usage</span><ul class="_list"><li>She\'s got a boyfriend.</li><li>Someone left an umbrella here yesterday.</li><li>Is he a friend of yours?</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">a (determiner.)</div><p class="_txt">used to mean any or every thing or person of the type you are referring to</p><span class="_ex">Usage</span><ul class="_list"><li>Can you ride a bike?</li><li>A child needs love.</li><li>A cheetah can run faster than a lion.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">a (determiner.)</div><p class="_txt">one</p><span class="_ex">Usage</span><ul class="_list"><li>a hundred dollars</li><li>a dozen eggs</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">a (determiner.)</div><p class="_txt">used to state what type of thing or person something or someone is</p><span class="_ex">Usage</span><ul class="_list"><li>Sally\'s an engineer.</li><li>It\'s a rabbit.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">a (determiner.)</div><p class="_txt">used before some phrases saying how much of something there is</p><span class="_ex">Usage</span><ul class="_list"><li>a few days</li><li>a little bit of yarn</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">a (determiner.)</div><p class="_txt">used before some action nouns when referring to one example of the action</p><span class="_ex">Usage</span><ul class="_list"><li>Take a look at this, Jez.</li><li>I\'m just going to take a ride.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">a (determiner.)</div><p class="_txt">used before the first but not the second of two nouns that are often used together</p><span class="_ex">Usage</span><ul class="_list"><li>a cup and saucer</li><li>a knife and fork</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">a (determiner.)</div><p class="_txt">used when referring to a unit of something, especially something you eat or drink</p><span class="_ex">Usage</span><ul class="_list"><li>I\'d love a coffee.</li><li>All I had for lunch was a yogurt.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">a (determiner.)</div><p class="_txt">used between a fraction and a unit of measurement</p><span class="_ex">Usage</span><ul class="_list"><li>half a mile</li><li>a quarter of a kilo</li><li>three-quarters of an hour</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">a (determiner.)</div><p class="_txt">used when referring to a certain period of time</p><span class="_ex">Usage</span><ul class="_list"><li>Take one tablet three times a day.</li><li>She earns $100,000 a year.</li></ul></div>',
          description: [
            {
              level: "A1",
              pos: "determiner",
              guideword: "NOT PARTICULAR",
              definition:
                "used before a noun to refer to a single thing or person but not a particular thing or person or not one that you have referred to before",
              dictionary_example: [
                "She's got a boyfriend.",
                "Someone left an umbrella here yesterday.",
                "Is he a friend of yours?",
              ],
              learner_example: [
                "You can make a quick snack, for example a sandwich. (Skills for Life (Entry 1); A1; German)",
              ],
            },
            {
              level: "A1",
              pos: "determiner",
              guideword: "ANY/EVERY",
              definition:
                "used to mean any or every thing or person of the type you are referring to",
              dictionary_example: [
                "Can you ride a bike?",
                "A child needs love.",
                "A cheetah can run faster than a lion.",
              ],
              learner_example: [
                "I don't need it because I'm too old to have a doll. (Key English Test; A2; French)",
              ],
            },
            {
              level: "A1",
              pos: "determiner",
              guideword: "ONE",
              definition: "one",
              dictionary_example: ["a hundred dollars", "a dozen eggs"],
              learner_example: [
                "Dear Ally, All my friends [from] school were here, more than a hundred people. (Key English Test; A2; Portuguese)",
              ],
            },
            {
              level: "A1",
              pos: "determiner",
              guideword: "TYPE",
              definition:
                "used to state what type of thing or person something or someone is",
              dictionary_example: ["Sally's an engineer.", "It's a rabbit."],
              learner_example: [
                "She's a teacher. (Skills for Life (Entry 1); A1; Tamil)",
              ],
            },
            {
              level: "A2",
              pos: "determiner",
              guideword: "AMOUNTS",
              definition:
                "used before some phrases saying how much of something there is",
              dictionary_example: ["a few days", "a little bit of yarn"],
              learner_example: [
                "Usually people in Poland are very busy so we do not have a lot of time for cooking. (Skills for Life (Entry 2); A2; Slovak)",
              ],
            },
            {
              level: "A2",
              pos: "determiner",
              guideword: "AN ACTION",
              definition:
                "used before some action nouns when referring to one example of the action",
              dictionary_example: [
                "Take a look at this, Jez.",
                "I'm just going to take a ride.",
              ],
              learner_example: [
                "I took a shower and ate my breakfast. (Preliminary English Test; B1; Thai)",
              ],
            },
            {
              level: "A2",
              pos: "determiner",
              guideword: "TWO NOUNS",
              definition:
                "used before the first but not the second of two nouns that are often used together",
              dictionary_example: ["a cup and saucer", "a knife and fork"],
              learner_example: [
                "I like a clean fork and knife. (Preliminary English Test; B1; Polish)",
              ],
            },
            {
              level: "A2",
              pos: "determiner",
              guideword: "UNIT",
              definition:
                "used when referring to a unit of something, especially something you eat or drink",
              dictionary_example: [
                "I'd love a coffee.",
                "All I had for lunch was a yogurt.",
              ],
              learner_example: [
                "We both had a coke and a hot dog. (Preliminary English Test; B1; German)",
              ],
            },
            {
              level: "A2",
              pos: "determiner",
              guideword: "WITH FRACTION",
              definition: "used between a fraction and a unit of measurement",
              dictionary_example: [
                "half a mile",
                "a quarter of a kilo",
                "three-quarters of an hour",
              ],
              learner_example: [
                "The lesson is half an hour but you have to be ther[e] 10 minutes before. (Key English Test; A2; Greek)",
              ],
            },
            {
              level: "A2",
              pos: "determiner",
              guideword: "PERIOD OF TIME",
              definition: "used when referring to a certain period of time",
              dictionary_example: [
                "Take one tablet three times a day.",
                "She earns $100,000 a year.",
              ],
              learner_example: [
                "I can write to him or her twice a week. (Key English Test; A2; Chinese)",
              ],
            },
          ],
          synonym: [],
        },
        {
          word_idx: 5,
          raw_word: "tendency",
          cefr: "C1",
          stopword: false,
          word: "tendency",
          lemma: "tendency",
          pos: "n.",
          html_description:
            '<div class="card_content_item" align="left"><div class="_pronoun">tendency (noun.)</div><p class="_txt">something that someone often does, or something that often happens</p><span class="_ex">Usage</span><ul class="_list"><li> She has a tendency to talk for too long. </li><li> There is a growing tendency for companies to employ people on short contracts. </li></ul></div>',
          description: [
            {
              level: "C1",
              pos: "noun",
              guideword: "",
              definition:
                "something that someone often does, or something that often happens",
              dictionary_example: [
                " She has a tendency to talk for too long. ",
                " There is a growing tendency for companies to employ people on short contracts. ",
              ],
              learner_example: [
                "There is a tendency to choose canned and preserved foods instead of fresh ones. (Certificate in Advanced English; C1; Polish)",
              ],
            },
          ],
          synonym: [
            {
              word: "trend",
              cefr: "B2.2",
              html_description:
                '<div class="card_content_item" align="left"><div class="_pronoun">trend (noun.)</div><p class="_txt">a general development or change in a situation or in the way that people are behaving</p><span class="_ex">Usage</span><ul class="_list"><li>I\'m not familiar with the latest trends in teaching methodology.</li><li>The trend at the moment is toward a more natural and less made-up look.</li><li>Surveys show a trend away from home-ownership and toward rented accommodations.</li><li>There\'s been a downward/upward trend in sales in the last few years.</li></ul></div>',
            },
            {
              word: "leaning",
              cefr: "C1.3",
              html_description:
                '<div class="card_content_item" align="left"><div class="_pronoun">leaning</div><p class="_txt">a particular set of beliefs, opinions, etc. that someone prefers: </p><span class="_ex">Usage</span><ul class="_list">I don\'t know what his political leanings are.</ul></div>',
            },
            {
              word: "propensity",
              cefr: "C2.5",
              html_description:
                '<div class="card_content_item" align="left"><div class="_pronoun">propensity</div><p class="_txt">the fact that someone is likely to behave in a particular way, especially a bad way: </p><span class="_ex">Usage</span><ul class="_list">She\'s inherited from her father a propensity to talk too much.</ul></div>',
            },
            {
              word: "disposition",
              cefr: "C2.7",
              html_description:
                '<div class="card_content_item" align="left"><div class="_pronoun">disposition (noun.)</div><p class="_txt">the type of character someone has</p><span class="_ex">Usage</span><ul class="_list"><li>a cheerful/nervous disposition</li></ul></div>',
            },
            {
              word: "inclination",
              cefr: "C2.8",
              html_description:
                '<div class="card_content_item" align="left"><div class="_pronoun">inclination (noun.)</div><p class="_txt">what you usually are like or prefer, or the feeling that makes you want to do something</p><span class="_ex">Usage</span><ul class="_list"><li>Tony has a strong inclination toward the arts.</li><li>My inclination is to look for another job.</li><li>She showed no inclination to leave.</li></ul></div>',
            },
          ],
        },
        {
          word_idx: 6,
          raw_word: "to",
          cefr: "A1",
          stopword: true,
          word: "to",
          lemma: "to",
          pos: "infinitive marker",
          html_description:
            '<div class="card_content_item" align="left"><div class="_pronoun">to (infinitive marker.)</div><p class="_txt">used with a verb to make an infinitive</p><span class="_ex">Usage</span><ul class="_list"><li>She agreed to help.</li><li>We were starting to feel cold.</li><li>I don\'t know what to do.</li><li>Can you tell me how to get there?</li><li>It\'s not likely to happen.</li><li>He told me to wait.</li><li>Did anyone ask Daniel to book the room?</li><li>There\'s an awful lot of work to be done.</li><li>I need to eat something first.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">to (infinitive marker.)</div><p class="_txt">used to give the purpose of something or the reason for doing something</p><span class="_ex">Usage</span><ul class="_list"><li>I\'m going there to see my sister.</li><li>This tool is used to make holes in leather.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">to (infinitive marker.)</div><p class="_txt">used instead of repeating a verb clause</p><span class="_ex">Usage</span><ul class="_list"><li>"Are you going tonight?" "I\'m certainly hoping to."</li><li>"Would you like to come?" "I\'d love to."</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">to (preposition.)</div><p class="_txt">used to talk about a place or an event where someone goes</p><span class="_ex">Usage</span><ul class="_list"><li>We went to California last year.</li><li>We could go to town on the bus.</li><li>I have to go to the dentist this morning.</li><li>We received another invitation to a wedding this morning.</li><li>I\'ve asked Helen and Ben to dinner next week.</li><li>You can walk from here to the station in under ten minutes.</li><li>She walked over to the window.</li><li>He went up to a complete stranger and started talking.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">to (preposition.)</div><p class="_txt">used to say "before" the hour when you are saying what time it is</p><span class="_ex">Usage</span><ul class="_list"><li> It\'s five to three. </li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">to (preposition.)</div><p class="_txt">used to show who receives something or experiences an action</p><span class="_ex">Usage</span><ul class="_list"><li>I gave the money to my sister.</li><li>Give the gun to me.</li><li> Anna was speaking to her mother on the phone. </li><li>I lent my bike to my brother.</li><li>Who\'s the letter addressed to?</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">to (preposition.)</div><p class="_txt">used to show the position of someone or something</p><span class="_ex">Usage</span><ul class="_list"><li> She stood with her back to the window. </li><li>I had my back to them, so I couldn\'t see what they were doing.</li><li>John\'s standing to the left of Adrian in the photo.</li><li>The national park is twenty miles to the north of the city.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">to (preposition.)</div><p class="_txt">used to say who is treated in a particular way or who or what is affected by something</p><span class="_ex">Usage</span><ul class="_list"><li>What have you done to your hair?</li><li>Her evidence was very helpful to the police.</li><li>She was very kind to us.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">to (preposition.)</div><p class="_txt">used to show a relationship with someone</p><span class="_ex">Usage</span><ul class="_list"><li>I\'ve been married to Peter for nine years.</li><li>She was an assistant to the chief executive.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">to (preposition.)</div><p class="_txt">used to compare two things</p><span class="_ex">Usage</span><ul class="_list"><li> I prefer football to basketball. </li><li>She\'s earning a reasonable wage, but nothing to what she could make in a big company.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">to (preposition.)</div><p class="_txt">until a particular time, state or level is reached</p><span class="_ex">Usage</span><ul class="_list"><li>It\'s only two weeks to Christmas.</li><li>Unemployment has risen to almost eight million.</li><li>She nursed me back to health.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">to (preposition.)</div><p class="_txt">used to say where something is fastened or connected</p><span class="_ex">Usage</span><ul class="_list"><li>The paper was fastened to the wall with tape.</li><li>A high-speed rail service connects us to the city.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">to (preposition.)</div><p class="_txt">used in phrases which show a range</p><span class="_ex">Usage</span><ul class="_list"><li>There must have been thirty to thirty-five people there.</li></ul></div>',
          description: [
            {
              level: "A1",
              pos: "infinitive marker",
              guideword: "INFINITIVE",
              definition: "used with a verb to make an infinitive",
              dictionary_example: [
                "She agreed to help.",
                "We were starting to feel cold.",
                "I don't know what to do.",
                "Can you tell me how to get there?",
                "It's not likely to happen.",
                "He told me to wait.",
                "Did anyone ask Daniel to book the room?",
                "There's an awful lot of work to be done.",
                "I need to eat something first.",
              ],
              learner_example: [
                "She likes to go shopping with friend[s]. (Skills for Life (Entry 1); A1; Bulgarian)",
              ],
            },
            {
              level: "A2",
              pos: "infinitive marker",
              guideword: "REASON",
              definition:
                "used to give the purpose of something or the reason for doing something",
              dictionary_example: [
                "I'm going there to see my sister.",
                "This tool is used to make holes in leather.",
              ],
              learner_example: [
                "Dear Robbie, I'm writing to tell you some information about what we['re going to] do. (Key English Test; A2; Greek)",
              ],
            },
            {
              level: "A2",
              pos: "infinitive marker",
              guideword: "INSTEAD OF VERB",
              definition: "used instead of repeating a verb clause",
              dictionary_example: [
                '"Are you going tonight?" "I\'m certainly hoping to."',
                '"Would you like to come?" "I\'d love to."',
              ],
              learner_example: [
                "Yes, I'd love to. (Key English Test; A2; Portuguese)",
              ],
            },
            {
              level: "A1",
              pos: "preposition",
              guideword: "PLACE",
              definition:
                "used to talk about a place or an event where someone goes",
              dictionary_example: [
                "We went to California last year.",
                "We could go to town on the bus.",
                "I have to go to the dentist this morning.",
                "We received another invitation to a wedding this morning.",
                "I've asked Helen and Ben to dinner next week.",
                "You can walk from here to the station in under ten minutes.",
                "She walked over to the window.",
                "He went up to a complete stranger and started talking.",
              ],
              learner_example: [
                "I like go[ing] to London. (Skills for Life (Entry 1); A1; Portuguese)",
              ],
            },
            {
              level: "A1",
              pos: "preposition",
              guideword: "TELLING THE TIME",
              definition:
                'used to say "before" the hour when you are saying what time it is',
              dictionary_example: [" It's five to three. "],
              learner_example: [""],
            },
            {
              level: "A2",
              pos: "preposition",
              guideword: "RECEIVING",
              definition:
                "used to show who receives something or experiences an action",
              dictionary_example: [
                "I gave the money to my sister.",
                "Give the gun to me.",
                " Anna was speaking to her mother on the phone. ",
                "I lent my bike to my brother.",
                "Who's the letter addressed to?",
              ],
              learner_example: [
                "Please bring it to me tomorrow, because I have to return it to my brother. (Key English Test; A2; Portuguese)",
              ],
            },
            {
              level: "B1",
              pos: "preposition",
              guideword: "POSITION",
              definition: "used to show the position of someone or something",
              dictionary_example: [
                " She stood with her back to the window. ",
                "I had my back to them, so I couldn't see what they were doing.",
                "John's standing to the left of Adrian in the photo.",
                "The national park is twenty miles to the north of the city.",
              ],
              learner_example: [
                "My town is situated to the south of Paris. (First Certificate in English; B2; French)",
              ],
            },
            {
              level: "B1",
              pos: "preposition",
              guideword: "AFFECTED",
              definition:
                "used to say who is treated in a particular way or who or what is affected by something",
              dictionary_example: [
                "What have you done to your hair?",
                "Her evidence was very helpful to the police.",
                "She was very kind to us.",
              ],
              learner_example: [
                "The waiter was really kind to us. We gave him the key of the car and he drove us home. (First Certificate in English; B2; Portuguese)",
              ],
            },
            {
              level: "B1",
              pos: "preposition",
              guideword: "RELATIONSHIP",
              definition: "used to show a relationship with someone",
              dictionary_example: [
                "I've been married to Peter for nine years.",
                "She was an assistant to the chief executive.",
              ],
              learner_example: [
                "She's 38 years old and she's married to a Spanish engineer. (Preliminary English Test; B1; Italian)",
              ],
            },
            {
              level: "B1",
              pos: "preposition",
              guideword: "COMPARE",
              definition: "used to compare two things",
              dictionary_example: [
                " I prefer football to basketball. ",
                "She's earning a reasonable wage, but nothing to what she could make in a big company.",
              ],
              learner_example: [
                "I prefer homemade food to re[s]taurant meals. (Preliminary English Test; B1; Russian)",
              ],
            },
            {
              level: "B1",
              pos: "preposition",
              guideword: "UNTIL",
              definition: "until a particular time, state or level is reached",
              dictionary_example: [
                "It's only two weeks to Christmas.",
                "Unemployment has risen to almost eight million.",
                "She nursed me back to health.",
              ],
              learner_example: [""],
            },
            {
              level: "B1",
              pos: "preposition",
              guideword: "CONNECTED",
              definition:
                "used to say where something is fastened or connected",
              dictionary_example: [
                "The paper was fastened to the wall with tape.",
                "A high-speed rail service connects us to the city.",
              ],
              learner_example: [
                "My mouth became so dry that my tongue stuck to my palate. (First Certificate in English; B2; French)",
              ],
            },
            {
              level: "B2",
              pos: "preposition",
              guideword: "RANGE",
              definition: "used in phrases which show a range",
              dictionary_example: [
                "There must have been thirty to thirty-five people there.",
              ],
              learner_example: [""],
            },
          ],
          synonym: [],
        },
        {
          word_idx: 7,
          raw_word: "intensify",
          cefr: "C2",
          stopword: false,
          word: "intensify",
          lemma: "intensify",
          pos: "v.",
          html_description:
            '<div class="card_content_item" align="left"><div class="_pronoun">intensify (verb.)</div><p class="_txt">to become greater, more serious, or more extreme, or to make something do this</p><span class="_ex">Usage</span><ul class="_list"><li> The fighting has intensified in the last two weeks.</li></ul></div>',
          description: [
            {
              level: "C2",
              pos: "verb",
              guideword: "",
              definition:
                "to become greater, more serious, or more extreme, or to make something do this",
              dictionary_example: [
                " The fighting has intensified in the last two weeks.",
              ],
              learner_example: [
                "This feeling is intensified when the relationship between Jack and Ralph develops to antagonism. (Certificate of Proficiency in English; C2; German)",
              ],
            },
          ],
          synonym: [
            {
              word: "compound",
              cefr: "C1.6",
              html_description:
                '<div class="card_content_item" align="left"><div class="_pronoun">compound</div><p class="_txt">a chemical that combines two or more elements: </p><span class="_ex">Usage</span><ul class="_list">Salt is a compound of sodium and chlorine.</ul></div>',
            },
            {
              word: "deepen",
              cefr: "C2.1",
              html_description:
                '<div class="card_content_item" align="left"><div class="_pronoun">deepen (verb.)</div><p class="_txt">if someone\'s knowledge or understanding deepens, it increases.</p><span class="_ex">Usage</span><ul class="_list"><li>It certainly helped to deepen my understanding of the situation.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">deepen (verb.)</div><p class="_txt">to become worse or stronger, or to make something become worse or stronger</p><span class="_ex">Usage</span><ul class="_list"><li>The economic crisis has deepened.</li></ul></div>',
            },
            {
              word: "escalate",
              cefr: "C2.2",
              html_description:
                '<div class="card_content_item" align="left"><div class="_pronoun">escalate</div><p class="_txt">to become or make something become greater or more serious: </p><span class="_ex">Usage</span><ul class="_list">His financial problems escalated after he became unemployed.</ul></div>',
            },
            {
              word: "heighten",
              cefr: "C2.2",
              html_description:
                '<div class="card_content_item" align="left"><div class="_pronoun">heighten</div><p class="_txt">to increase or make something increase, especially an emotion or effect: </p><span class="_ex">Usage</span><ul class="_list">The strong police presence only heightened the tension among the crowd.</ul></div>',
            },
          ],
        },
        {
          word_idx: 8,
          raw_word: "in",
          cefr: "A1",
          stopword: true,
          word: "in",
          lemma: "in",
          pos: "prep.",
          html_description:
            '<div class="card_content_item" align="left"><div class="_pronoun">in (preposition.)</div><p class="_txt">inside a container, place, or area, or surrounded or closed off by something</p><span class="_ex">Usage</span><ul class="_list"><li>Is Mark still in bed?</li><li>I got stuck in a traffic jam for half an hour.</li><li>They live in a charming old house.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">in (preposition.)</div><p class="_txt">into something</p><span class="_ex">Usage</span><ul class="_list"><li>Come on, we\'re late - get in the car.</li><li>Put the milk back in the fridge when you\'ve finished with it.</li><li>They threw him in the swimming pool.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">in (preposition.)</div><p class="_txt">forming a part of something</p><span class="_ex">Usage</span><ul class="_list"><li>He used to be the lead singer in a rock band.</li><li>There are too many spelling mistakes in this essay.</li><li>I\'ve been waiting in this queue for ages.</li></ul></div>',
          description: [
            {
              level: "A1",
              pos: "preposition",
              guideword: "INSIDE",
              definition:
                "inside a container, place, or area, or surrounded or closed off by something",
              dictionary_example: [
                "Is Mark still in bed?",
                "I got stuck in a traffic jam for half an hour.",
                "They live in a charming old house.",
              ],
              learner_example: [],
            },
            {
              level: "A1",
              pos: "preposition",
              guideword: "INTO",
              definition: "into something",
              dictionary_example: [
                "Come on, we're late - get in the car.",
                "Put the milk back in the fridge when you've finished with it.",
                "They threw him in the swimming pool.",
              ],
              learner_example: [],
            },
            {
              level: "A2",
              pos: "preposition",
              guideword: "PART",
              definition: "forming a part of something",
              dictionary_example: [
                "He used to be the lead singer in a rock band.",
                "There are too many spelling mistakes in this essay.",
                "I've been waiting in this queue for ages.",
              ],
              learner_example: [],
            },
          ],
          synonym: [],
        },
        {
          word_idx: 9,
          raw_word: "nations",
          cefr: "B2",
          stopword: false,
          word: "nations",
          lemma: "nation",
          pos: "n.",
          html_description:
            '<div class="card_content_item" align="left"><div class="_pronoun">nation (noun.)</div><p class="_txt">a country or the people living in a country</p><span class="_ex">Usage</span><ul class="_list"><li>the industrialized nations</li><li>All the nations of the world will be represented at the conference.</li><li>Practically the whole nation watched the ceremony on television.</li></ul></div>',
          description: [
            {
              level: "B2",
              pos: "noun",
              guideword: "",
              definition: "a country or the people living in a country",
              dictionary_example: [
                "the industrialized nations",
                "All the nations of the world will be represented at the conference.",
                "Practically the whole nation watched the ceremony on television.",
              ],
              learner_example: [
                "At that time, everyone should have devoted their life to the nation. (First Certificate in English; B2; Japanese)",
              ],
            },
          ],
          synonym: [
            {
              word: "country",
              cefr: "A1.4",
              html_description:
                '<div class="card_content_item" align="left"><div class="_pronoun">country (noun.)</div><p class="_txt">an area of land that has its own government, army, etc.</p><span class="_ex">Usage</span><ul class="_list"><li>Which is the largest country in South America?</li><li>Sri Lanka is my native country, but I\'ve been living in Belgium for the past five years.</li><li>The climate is cooler in the eastern part of the country.</li></ul></div>',
            },
            {
              word: "state",
              cefr: "B1.1",
              html_description:
                '<div class="card_content_item" align="left"><div class="_pronoun">state (noun.)</div><p class="_txt">the condition that something or someone is in</p><span class="_ex">Usage</span><ul class="_list"><li>The building is in a terrible state.</li><li>After the accident I was in a state of shock.</li><li>The kitchen was in its original state, with a 1920s sink and stove.</li><li>It\'s a sad state of affairs when our rivers are so endangered.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">state (noun.)</div><p class="_txt">a part of a large country with its own government, such as in Brazil, Mexico, or the US</p><span class="_ex">Usage</span><ul class="_list"><li>Alaska is the largest state in the US.</li><li>Representatives are elected from each state.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">state (noun.)</div><p class="_txt">a country or its government</p><span class="_ex">Usage</span><ul class="_list"><li>The drought is worst in the central African states.</li><li>Britain is one of the member states of the European Union.</li><li>The government was determined to reduce the number of state-owned industries.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">state (verb.)</div><p class="_txt">to officially say or write something</p><span class="_ex">Usage</span><ul class="_list"><li>Our warranty clearly states the limits of our liability.</li><li>His will states (that) the property is to be sold.</li><li>Please state why you are applying for this grant.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">state (adjective.)</div><p class="_txt">provided, created, or done by a state in a country, or by the government of a country</p><span class="_ex">Usage</span><ul class="_list"><li>a state government/legislature/law</li><li>a state school/college/university</li><li>state control</li><li>state funding</li></ul></div>',
            },
            {
              word: "land",
              cefr: "B1.1",
              html_description:
                '<div class="card_content_item" align="left"><div class="_pronoun">land (noun.)</div><p class="_txt">an area of ground, especially when used for a particular purpose such as farming or building</p><span class="_ex">Usage</span><ul class="_list"><li>This land here is good for growing potatoes.</li><li>We want to buy a plot of land to build a house.</li><li>They just bought 150 acres of land in Idaho.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">land (noun.)</div><p class="_txt">the surface of the earth that is not sea</p><span class="_ex">Usage</span><ul class="_list"><li>It is cheaper to drill for oil on land than at sea.</li><li>The treaty led to a dramatic reduction in the number of land-based missiles.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">land (noun.)</div><p class="_txt">a country</p><span class="_ex">Usage</span><ul class="_list"><li>Ireland was my grandmother\u2019s native land.</li><li>a land of ice and snow</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">land (verb.)</div><p class="_txt">to arrive at a place in a plane or a boat, or to make a plane or a boat reach the land</p><span class="_ex">Usage</span><ul class="_list"><li>We should land in Madrid at 7:00 a.m.</li><li>The pilot said we would land in about 20 minutes.</li><li>We\u2019d been sailing for three weeks by the time we landed at Miami.</li><li>We landed at Port Said in the early evening.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">land (verb.)</div><p class="_txt">to get or achieve something, usually something good</p><span class="_ex">Usage</span><ul class="_list"><li>He\'s just landed a new job.</li></ul></div>',
            },
            {
              word: "nation",
              cefr: "B2.3",
              html_description:
                '<div class="card_content_item" align="left"><div class="_pronoun">nation (noun.)</div><p class="_txt">a country or the people living in a country</p><span class="_ex">Usage</span><ul class="_list"><li>the industrialized nations</li><li>All the nations of the world will be represented at the conference.</li><li>Practically the whole nation watched the ceremony on television.</li></ul></div>',
            },
            {
              word: "commonwealth",
              cefr: "C2.2",
              html_description:
                '<div class="card_content_item" align="left"><div class="_pronoun">commonwealth</div><p class="_txt">a group of countries with the same political or economic aims: </p><span class="_ex">Usage</span><ul class="_list">the Commonwealth of Independent States</ul></div>',
            },
          ],
        },
        {
          word_idx: 10,
          raw_word: "with",
          cefr: "A1",
          stopword: true,
          word: "with",
          lemma: "with",
          pos: "prep.",
          html_description:
            '<div class="card_content_item" align="left"><div class="_pronoun">with (preposition.)</div><p class="_txt">used to say that people or things are in a place together or are doing something together</p><span class="_ex">Usage</span><ul class="_list"><li>I was with Sylvia at the time.</li><li>He lives with his grandmother.</li><li>I\'m going to Mexico with a couple of friends.</li><li>Ingrid Bergman starred with Humphrey Bogart in the film \'Casablanca\'.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">with (preposition.)</div><p class="_txt">having or including something</p><span class="_ex">Usage</span><ul class="_list"><li>a house with a swimming pool</li><li>a woman with brown eyes</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">with (preposition.)</div><p class="_txt">using something</p><span class="_ex">Usage</span><ul class="_list"><li>She hit him over the head with a tennis racket.</li><li>Fix the two pieces together with glue.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">with (preposition.)</div><p class="_txt">used to say what fills, covers, etc. something</p><span class="_ex">Usage</span><ul class="_list"><li>a bucket filled with water</li><li>She filled the pitcher with cream.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">with (preposition.)</div><p class="_txt">used to describe the way someone does something</p><span class="_ex">Usage</span><ul class="_list"><li>He plays with great skill.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">with (preposition.)</div><p class="_txt">because of something</p><span class="_ex">Usage</span><ul class="_list"><li>I was shaking with fear.</li><li>I can\'t work with all that noise going on.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">with (preposition.)</div><p class="_txt">relating to something or someone</p><span class="_ex">Usage</span><ul class="_list"><li>There\'s something wrong with the car.</li></ul></div>',
          description: [
            {
              level: "A1",
              pos: "preposition",
              guideword: "TOGETHER",
              definition:
                "used to say that people or things are in a place together or are doing something together",
              dictionary_example: [
                "I was with Sylvia at the time.",
                "He lives with his grandmother.",
                "I'm going to Mexico with a couple of friends.",
                "Ingrid Bergman starred with Humphrey Bogart in the film 'Casablanca'.",
              ],
              learner_example: [
                "On Sunday afternoon, she goes with her husband and her son to the swim[m]ing pool. (Skills for Life (Entry 1); A1; Russian)",
              ],
            },
            {
              level: "A1",
              pos: "preposition",
              guideword: "HAVING",
              definition: "having or including something",
              dictionary_example: [
                "a house with a swimming pool",
                "a woman with brown eyes",
              ],
              learner_example: [
                "I want you to cook rice with fish and olives. (Skills for Life (Entry 1); A1; Russian)",
              ],
            },
            {
              level: "A2",
              pos: "preposition",
              guideword: "USING",
              definition: "using something",
              dictionary_example: [
                "She hit him over the head with a tennis racket.",
                "Fix the two pieces together with glue.",
              ],
              learner_example: [
                "I can print [the] advertisement and tickets with my computer. (Key English Test; A2; French)",
              ],
            },
            {
              level: "B1",
              pos: "preposition",
              guideword: "WHAT",
              definition: "used to say what fills, covers, etc. something",
              dictionary_example: [
                "a bucket filled with water",
                "She filled the pitcher with cream.",
              ],
              learner_example: [
                "It was like throwing her into a pool filled with ice. (Preliminary English Test; B1; Farsi)",
              ],
            },
            {
              level: "B1",
              pos: "preposition",
              guideword: "HOW",
              definition: "used to describe the way someone does something",
              dictionary_example: ["He plays with great skill."],
              learner_example: [
                "People can do more things and with more energy when [they are] listening to music. (First Certificate in English; B2; Spanish)",
              ],
            },
            {
              level: "B2",
              pos: "preposition",
              guideword: "CAUSE",
              definition: "because of something",
              dictionary_example: [
                "I was shaking with fear.",
                "I can't work with all that noise going on.",
              ],
              learner_example: [
                "It was Tuesday the 13th and the fact that I was very superstitious made me tremble with fear. (First Certificate in English; B2; Greek)",
              ],
            },
            {
              level: "B2",
              pos: "preposition",
              guideword: "RELATING TO",
              definition: "relating to something or someone",
              dictionary_example: ["There's something wrong with the car."],
              learner_example: [
                "[It]'s such a shame when people use [computers] badly, just for damaging and making things worse, because if there's something wrong with them, almost everything is wrong [with] us too. (First Certificate in English; B2; Spanish)",
              ],
            },
          ],
          synonym: [],
        },
        {
          word_idx: 11,
          raw_word: "corrupt",
          cefr: "C1",
          stopword: false,
          word: "corrupt",
          lemma: "corrupt",
          pos: "adj.",
          html_description:
            '<div class="card_content_item" align="left"><div class="_pronoun">corrupt (adjective.)</div><p class="_txt">dishonest or illegal</p><span class="_ex">Usage</span><ul class="_list"><li> a corrupt government </li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">corrupt (verb.)</div><p class="_txt">to make someone or something become dishonest or immoral</p><span class="_ex">Usage</span><ul class="_list"><li> He became corrupted by power and money. </li></ul></div>',
          description: [
            {
              level: "C1",
              pos: "adjective",
              guideword: "",
              definition: "dishonest or illegal",
              dictionary_example: [" a corrupt government "],
              learner_example: [
                "I am not saying he is corrupt - I don't believe that - but he com[m]ands many corrupt people. (Certificate in Advanced English; C1; Portuguese)",
              ],
            },
            {
              level: "C1",
              pos: "verb",
              guideword: "",
              definition:
                "to make someone or something become dishonest or immoral",
              dictionary_example: [" He became corrupted by power and money. "],
              learner_example: [
                "Maybe wealth can corrupt people's mind[s] and make people weak. (International English Language Testing System; C1; Chinese)",
              ],
            },
          ],
          synonym: [
            {
              word: "debase",
              cefr: "B2.7",
              html_description:
                '<div class="card_content_item" align="left"><div class="_pronoun">debase</div><p class="_txt">to reduce the quality or value of something: </p><span class="_ex">Usage</span><ul class="_list">Some argue that money has debased football.</ul></div>',
            },
            {
              word: "sully",
              cefr: "C1.2",
              html_description:
                '<div class="card_content_item" align="left"><div class="_pronoun">sully</div><p class="_txt">to spoil something that is pure or someone\'s perfect reputation</p><span class="_ex">Usage</span><ul class="_list">His reputation, he said, had been unfairly sullied by half-truths and innuendos.</ul></div>',
            },
            {
              word: "defile",
              cefr: "C1.2",
              html_description:
                '<div class="card_content_item" align="left"><div class="_pronoun">defile</div><p class="_txt">to spoil something or someone so that that thing or person is less beautiful or pure: </p><span class="_ex">Usage</span><ul class="_list">It\'s a shame that such a beautiful area has been defiled by a rubbish dump.</ul></div>',
            },
            {
              word: "taint",
              cefr: "C1.9",
              html_description:
                '<div class="card_content_item" align="left"><div class="_pronoun">taint</div><p class="_txt">to spoil something or give it an unpleasant quality: </p><span class="_ex">Usage</span><ul class="_list">His reputation was permanently tainted by the financial scandal.</ul></div>',
            },
            {
              word: "subvert",
              cefr: "C2.2",
              html_description:
                '<div class="card_content_item" align="left"><div class="_pronoun">subvert</div><p class="_txt">to try to destroy or damage something, especially an established political system: </p><span class="_ex">Usage</span><ul class="_list">The rebel army is attempting to subvert the government.</ul></div>',
            },
          ],
        },
        {
          word_idx: 12,
          raw_word: "officials",
          cefr: "C2",
          stopword: false,
          word: "officials",
          lemma: "official",
          pos: "n.",
          html_description:
            '<div class="card_content_item" align="left"><div class="_pronoun">official (adjective.)</div><p class="_txt">approved by the government or someone in authority</p><span class="_ex">Usage</span><ul class="_list"><li>the official language of Singapore</li><li>an official document</li><li>There will be an official investigation into the incident.</li><li>We were invited to the official opening of the exhibit.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">official (adjective.)</div><p class="_txt">connected with or arranged by someone in a position of responsibility</p><span class="_ex">Usage</span><ul class="_list"><li>an official visit</li><li>An official announcement is expected this afternoon.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">official (adjective.)</div><p class="_txt">known by the public</p><span class="_ex">Usage</span><ul class="_list"><li>Their engagement is now official.</li><li>Inflation has fallen below 2%, and that\'s official.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">official (adjective.)</div><p class="_txt">An official explanation or statement is one that is given, but which may not be true.</p><span class="_ex">Usage</span><ul class="_list"><li>The official reason for the delay is bad weather.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">official (noun.)</div><p class="_txt">a person who has a position of responsibility in a government or organization</p><span class="_ex">Usage</span><ul class="_list"><li>a UN official</li><li>a senior official</li></ul></div>',
          description: [
            {
              level: "B2",
              pos: "adjective",
              guideword: "APPROVED",
              definition: "approved by the government or someone in authority",
              dictionary_example: [
                "the official language of Singapore",
                "an official document",
                "There will be an official investigation into the incident.",
                "We were invited to the official opening of the exhibit.",
              ],
              learner_example: [
                "I have worked as an official translator in [the] British Embass[y] in Seoul. (First Certificate in English; B2; Korean)",
              ],
            },
            {
              level: "C2",
              pos: "adjective",
              guideword: "ARRANGED",
              definition:
                "connected with or arranged by someone in a position of responsibility",
              dictionary_example: [
                "an official visit",
                "An official announcement is expected this afternoon.",
              ],
              learner_example: [
                "For exactly that reason official reports are issued by doctors or psychologists in court in order to check the person's mental health and respons[i]bility for the crime. (Certificate of Proficiency in English; C2; German)",
              ],
            },
            {
              level: "C2",
              pos: "adjective",
              guideword: "KNOWN",
              definition: "known by the public",
              dictionary_example: [
                "Their engagement is now official.",
                "Inflation has fallen below 2%, and that's official.",
              ],
              learner_example: [
                "It was now official, she was the most beautiful girl of the school. (First Certificate in English; B2; French)",
              ],
            },
            {
              level: "C2",
              pos: "adjective",
              guideword: "GIVEN EXPLANATION",
              definition:
                "An official explanation or statement is one that is given, but which may not be true.",
              dictionary_example: [
                "The official reason for the delay is bad weather.",
              ],
              learner_example: [
                "Well, this was the official reason to explain his stay, [but] the truth - which I had learned later - was that Martin was a broken man. (Certificate of Proficiency in English; C2; French)",
              ],
            },
            {
              level: "C2",
              pos: "noun",
              guideword: "",
              definition:
                "a person who has a position of responsibility in a government or organization",
              dictionary_example: ["a UN official", "a senior official"],
              learner_example: [
                "As to city officials, if they manage the whole event fine, this feat is bound to boost their chances at the next elections. (Certificate of Proficiency in English; C2; Romanian)",
              ],
            },
          ],
          synonym: [
            {
              word: "official",
              cefr: "B1.7",
              html_description:
                '<div class="card_content_item" align="left"><div class="_pronoun">official (adjective.)</div><p class="_txt">approved by the government or someone in authority</p><span class="_ex">Usage</span><ul class="_list"><li>the official language of Singapore</li><li>an official document</li><li>There will be an official investigation into the incident.</li><li>We were invited to the official opening of the exhibit.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">official (adjective.)</div><p class="_txt">connected with or arranged by someone in a position of responsibility</p><span class="_ex">Usage</span><ul class="_list"><li>an official visit</li><li>An official announcement is expected this afternoon.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">official (adjective.)</div><p class="_txt">known by the public</p><span class="_ex">Usage</span><ul class="_list"><li>Their engagement is now official.</li><li>Inflation has fallen below 2%, and that\'s official.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">official (adjective.)</div><p class="_txt">An official explanation or statement is one that is given, but which may not be true.</p><span class="_ex">Usage</span><ul class="_list"><li>The official reason for the delay is bad weather.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">official (noun.)</div><p class="_txt">a person who has a position of responsibility in a government or organization</p><span class="_ex">Usage</span><ul class="_list"><li>a UN official</li><li>a senior official</li></ul></div>',
            },
            {
              word: "functionary",
              cefr: "B2.8",
              html_description:
                '<div class="card_content_item" align="left"><div class="_pronoun">functionary</div><p class="_txt">a person who has official duties, especially in a government or political party: </p><span class="_ex">Usage</span><ul class="_list">The visitors were met by a functionary who escorted them to the director\'s office.</ul></div>',
            },
          ],
        },
        {
          word_idx: 13,
          raw_word: "that",
          cefr: "A1",
          stopword: true,
          word: "that",
          lemma: "that",
          pos: "det.",
          html_description:
            '<div class="card_content_item" align="left"><div class="_pronoun">that (determiner.)</div><p class="_txt">used to refer to something or someone that can be seen or pointed to</p><span class="_ex">Usage</span><ul class="_list"><li>Did you know that woman in the post office?</li><li>How much are those shoes?</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">that (determiner.)</div><p class="_txt">used to refer to something or someone that has already been talked about or seen</p><span class="_ex">Usage</span><ul class="_list"><li>Where\'s that pen gone?</li><li>She lives in that house by the bus station.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">that (conjunction.)</div><p class="_txt">used after some verbs, nouns, and adjectives to introduce a new part of a sentence</p><span class="_ex">Usage</span><ul class="_list"><li>She said (that) she\'d collect it for me after work.</li><li>Is it true (that) she\'s gone back to teaching?</li><li>We\'ll be there at about 7.30, provided/providing (that) there\'s a suitable train.</li><li>It was so dark (that) I couldn\'t see anything.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">that (pronoun.)</div><p class="_txt">used to refer to something that can be seen or pointed to</p><span class="_ex">Usage</span><ul class="_list"><li> What\'s that in the corner?</li><li>I\'d like some of those.</li><li> That looks heavy.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">that (pronoun.)</div><p class="_txt">used to refer to something that has already been talked about or seen</p><span class="_ex">Usage</span><ul class="_list"><li>If you do that, you\'ll be sorry.</li><li>I don\'t think you should put up with that.</li><li>You can\'t wear those to a wedding.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">that (pronoun.)</div><p class="_txt">used to make a connection with an earlier statement</p><span class="_ex">Usage</span><ul class="_list"><li>My usual train was cancelled. That\'s why I\'m so late.</li><li>She tricked him, and that\'s what really upset him.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">that (pronoun.)</div><p class="_txt">used at the beginning of a relative clause to show what thing is being referred to</p><span class="_ex">Usage</span><ul class="_list"><li>They liked the restaurant that they ate lunch at.</li><li>I brought you the book that you wanted.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">that (pronoun.)</div><p class="_txt">used to refer to events or experiences in the past</p><span class="_ex">Usage</span><ul class="_list"><li>That was before we had a car.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">that (pronoun.)</div><p class="_txt">used to express a reaction to something</p><span class="_ex">Usage</span><ul class="_list"><li>I didn\'t know she\'d been so ill. That\'s terrible.</li><li>Turn the engine on, then put the car in gear. That\'s right.</li><li>Smile for the camera. That\'s more like it.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">that (adverb.)</div><p class="_txt">used when describing the size, amount, or state of something or someone</p><span class="_ex">Usage</span><ul class="_list"><li>She\'s too young to walk that far.</li><li>It wasn\'t (all) that good.</li></ul></div>',
          description: [
            {
              level: "A1",
              pos: "determiner",
              guideword: "CAN BE SEEN",
              definition:
                "used to refer to something or someone that can be seen or pointed to",
              dictionary_example: [
                "Did you know that woman in the post office?",
                "How much are those shoes?",
              ],
              learner_example: [""],
            },
            {
              level: "A1",
              pos: "determiner",
              guideword: "ALREADY MENTIONED",
              definition:
                "used to refer to something or someone that has already been talked about or seen",
              dictionary_example: [
                "Where's that pen gone?",
                "She lives in that house by the bus station.",
              ],
              learner_example: [
                "I like that place be[cause] I like swim[m]ing in [the] sea. (Skills for Life (Entry 1); A1; Polish)",
              ],
            },
            {
              level: "A2",
              pos: "conjunction",
              guideword: "",
              definition:
                "used after some verbs, nouns, and adjectives to introduce a new part of a sentence",
              dictionary_example: [
                "She said (that) she'd collect it for me after work.",
                "Is it true (that) she's gone back to teaching?",
                "We'll be there at about 7.30, provided/providing (that) there's a suitable train.",
                "It was so dark (that) I couldn't see anything.",
              ],
              learner_example: [
                "It's great that you are coming next week. (Key English Test; A2; Portuguese)",
              ],
            },
            {
              level: "A1",
              pos: "pronoun",
              guideword: "CAN BE SEEN",
              definition:
                "used to refer to something that can be seen or pointed to",
              dictionary_example: [
                " What's that in the corner?",
                "I'd like some of those.",
                " That looks heavy.",
              ],
              learner_example: [""],
            },
            {
              level: "A1",
              pos: "pronoun",
              guideword: "ALREADY MENTIONED",
              definition:
                "used to refer to something that has already been talked about or seen",
              dictionary_example: [
                "If you do that, you'll be sorry.",
                "I don't think you should put up with that.",
                "You can't wear those to a wedding.",
              ],
              learner_example: [
                "After that we have a break. (Skills for Life (Entry 1); A1; Polish)",
              ],
            },
            {
              level: "A2",
              pos: "pronoun",
              guideword: "REFERRING BACK",
              definition: "used to make a connection with an earlier statement",
              dictionary_example: [
                "My usual train was cancelled. That's why I'm so late.",
                "She tricked him, and that's what really upset him.",
              ],
              learner_example: [
                "I decided [not to] play football any more! That is why I want to sell them. (Key English Test; A2; Turkish)",
              ],
            },
            {
              level: "A2",
              pos: "pronoun",
              guideword: "REFERRING TO SOMETHING",
              definition:
                "used at the beginning of a relative clause to show what thing is being referred to",
              dictionary_example: [
                "They liked the restaurant that they ate lunch at.",
                "I brought you the book that you wanted.",
              ],
              learner_example: [
                "I want to sell my armchair that is 50 years old. (Key English Test; A2; Italian)",
              ],
            },
            {
              level: "B2",
              pos: "pronoun",
              guideword: "PAST",
              definition: "used to refer to events or experiences in the past",
              dictionary_example: ["That was before we had a car."],
              learner_example: [
                "That was when I went to live in Barcelona by myself in a student residence. (First Certificate in English; B2; Catalan)",
              ],
            },
            {
              level: "B2",
              pos: "pronoun",
              guideword: "REACTION",
              definition: "used to express a reaction to something",
              dictionary_example: [
                "I didn't know she'd been so ill. That's terrible.",
                "Turn the engine on, then put the car in gear. That's right.",
                "Smile for the camera. That's more like it.",
              ],
              learner_example: [""],
            },
            {
              level: "B2",
              pos: "adverb",
              guideword: "",
              definition:
                "used when describing the size, amount, or state of something or someone",
              dictionary_example: [
                "She's too young to walk that far.",
                "It wasn't (all) that good.",
              ],
              learner_example: [
                "My English isn't that bad, actually I have been taught English in school for six years. (First Certificate in English; B2; Dutch)",
              ],
            },
          ],
          synonym: [],
        },
        {
          word_idx: 14,
          raw_word: "do",
          cefr: "A1",
          stopword: true,
          word: "do",
          lemma: "do",
          pos: "v.",
          html_description:
            '<div class="card_content_item" align="left"><div class="_pronoun">do (auxiliary verb.)</div><p class="_txt">used with another verb to form questions and negative phrases</p><span class="_ex">Usage</span><ul class="_list"><li>Do you speak English?</li><li>Where do you work?</li><li>When does your train leave?</li><li>Why did you say that?</li><li>I don\'t know.</li><li>He doesn\'t eat meat.</li><li>I didn\'t see her there.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">do (auxiliary verb.)</div><p class="_txt">used to avoid repeating a verb that has just been used</p><span class="_ex">Usage</span><ul class="_list"><li>She runs much faster than he does.</li><li>Maria looks much healthier than she did.</li><li>"I hate that song!" "So do I."</li><li>"I don\'t like the heat." "Neither do I."</li><li>"May I join you?" "Please do!"</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">do (auxiliary verb.)</div><p class="_txt">used to give extra force to the main verb</p><span class="_ex">Usage</span><ul class="_list"><li>Do let me know if you need anything.</li><li>He does like you - he\'s just shy.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">do (verb.)</div><p class="_txt">to perform an action</p><span class="_ex">Usage</span><ul class="_list"><li>What should we do?</li><li>What are you doing tonight?</li><li>Have you done your homework?</li><li>We did a lot of talking.</li><li>I\'ve got nothing to do.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">do (verb.)</div><p class="_txt">to make or produce something</p><span class="_ex">Usage</span><ul class="_list"><li>I\'ve done 20 copies of the handout.</li><li>That bakery does a really good lemon cake.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">do (verb.)</div><p class="_txt">used for talking or asking about someone and whether they are healthy, happy, or succeeding</p><span class="_ex">Usage</span><ul class="_list"><li>Hi, how are you doing?</li><li>"How is Freya doing?" "She\'s doing really well, thanks."</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">do (verb.)</div><p class="_txt">to perform a sports activity</p><span class="_ex">Usage</span><ul class="_list"><li>She does yoga in her spare time.</li></ul></div>',
          description: [
            {
              level: "A1",
              pos: "auxiliary verb",
              guideword: "QUESTIONS/NEGATIVES",
              definition:
                "used with another verb to form questions and negative phrases",
              dictionary_example: [
                "Do you speak English?",
                "Where do you work?",
                "When does your train leave?",
                "Why did you say that?",
                "I don't know.",
                "He doesn't eat meat.",
                "I didn't see her there.",
              ],
              learner_example: [
                "What did you do at [the] party? (Key English Test; A2; Italian)",
              ],
            },
            {
              level: "B1",
              pos: "auxiliary verb",
              guideword: "AVOID REPEATING",
              definition:
                "used to avoid repeating a verb that has just been used",
              dictionary_example: [
                "She runs much faster than he does.",
                "Maria looks much healthier than she did.",
                '"I hate that song!" "So do I."',
                '"I don\'t like the heat." "Neither do I."',
                '"May I join you?" "Please do!"',
              ],
              learner_example: [
                "I like Brad Pitt a lot, and so does she. (Preliminary English Test; B1; Italian)",
              ],
            },
            {
              level: "B2",
              pos: "auxiliary verb",
              guideword: "FOR EMPHASIS",
              definition: "used to give extra force to the main verb",
              dictionary_example: [
                "Do let me know if you need anything.",
                "He does like you - he's just shy.",
              ],
              learner_example: [
                "I real[l]y do love to be a volunteer, to help people as much as I can. (Skills for Life (Level 1); B2; Romanian)",
              ],
            },
            {
              level: "A1",
              pos: "verb",
              guideword: "ACTION",
              definition: "to perform an action",
              dictionary_example: [
                "What should we do?",
                "What are you doing tonight?",
                "Have you done your homework?",
                "We did a lot of talking.",
                "I've got nothing to do.",
              ],
              learner_example: [
                "I have nothing to do. (Key English Test; A2; Chinese)",
              ],
            },
            {
              level: "A2",
              pos: "verb",
              guideword: "MAKE",
              definition: "to make or produce something",
              dictionary_example: [
                "I've done 20 copies of the handout.",
                "That bakery does a really good lemon cake.",
              ],
              learner_example: [
                "[On] any sp[e]cial day [like] Devali they do some sp[e]cial sweet food. (Skills for Life (Entry 2); A2; Arabic)",
              ],
            },
            {
              level: "A2",
              pos: "verb",
              guideword: "HEALTHY/HAPPY",
              definition:
                "used for talking or asking about someone and whether they are healthy, happy, or succeeding",
              dictionary_example: [
                "Hi, how are you doing?",
                '"How is Freya doing?" "She\'s doing really well, thanks."',
              ],
              learner_example: [
                "I'm doing fine. (Preliminary English Test; B1; Estonian)",
              ],
            },
            {
              level: "A2",
              pos: "verb",
              guideword: "SPORT, ETC.",
              definition: "to perform a sports activity",
              dictionary_example: ["She does yoga in her spare time."],
              learner_example: [
                "[At the club,] I can swim, do karate [or] yoga, play soccer, tennis, squash and table-tennis. (Preliminary English Test; B1; Portuguese)",
              ],
            },
          ],
          synonym: [],
        },
        {
          word_idx: 15,
          raw_word: "not",
          cefr: "A1",
          stopword: true,
          word: "not",
          lemma: "not",
          pos: "adv.",
          html_description:
            '<div class="card_content_item" align="left"><div class="_pronoun">not (adverb.)</div><p class="_txt">used to form a negative phrase after verbs like "be," "can," "have," "\'will," "must," etc., usually used in the short form "n\'t" in speech</p><span class="_ex">Usage</span><ul class="_list"><li>He\'s not fat!</li><li>I won\'t tell her.</li><li>I can\'t go.</li><li>Don\'t you like her?</li><li>It isn\'t difficult.</li><li>I\'m just not interested.</li><li>He\'s not bad-looking!</li><li>He\'s not as tall as his father.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">not (adverb.)</div><p class="_txt">used to give the next word or group of words a negative meaning</p><span class="_ex">Usage</span><ul class="_list"><li>I told you not to do that.</li><li>I like most vegetables but not cabbage.</li><li>"Come and play football, Dad." "Not now, Jamie."</li><li>It was Yuko who said that, not Richard.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">not (adverb.)</div><p class="_txt">used after verbs like "be afraid," "hope," "suspect," etc. in short, negative replies</p><span class="_ex">Usage</span><ul class="_list"><li>"Is he coming with us?" "I hope not."</li><li>"Have you finished?" "I\'m afraid not."</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">not (adverb.)</div><p class="_txt">used to form questions when you think the answer will be "yes," using the short form "n\'t"</p><span class="_ex">Usage</span><ul class="_list"><li>She\'s very pretty, isn\'t she?</li><li>You like cheese, don\'t you?</li></ul></div>',
          description: [
            {
              level: "A1",
              pos: "adverb",
              guideword: "AFTER BE/CAN, ETC.",
              definition:
                'used to form a negative phrase after verbs like "be," "can," "have," "\'will," "must," etc., usually used in the short form "n\'t" in speech',
              dictionary_example: [
                "He's not fat!",
                "I won't tell her.",
                "I can't go.",
                "Don't you like her?",
                "It isn't difficult.",
                "I'm just not interested.",
                "He's not bad-looking!",
                "He's not as tall as his father.",
              ],
              learner_example: [
                "It's not a problem for me. (Skills for Life (Entry 1); A1; French)",
              ],
            },
            {
              level: "A1",
              pos: "adverb",
              guideword: "NEGATIVE WORD/S",
              definition:
                "used to give the next word or group of words a negative meaning",
              dictionary_example: [
                "I told you not to do that.",
                "I like most vegetables but not cabbage.",
                '"Come and play football, Dad." "Not now, Jamie."',
                "It was Yuko who said that, not Richard.",
              ],
              learner_example: [
                "You know I go to college [but] not every day. (Skills for Life (Entry 1); A1; Cantonese)",
              ],
            },
            {
              level: "A2",
              pos: "adverb",
              guideword: "AFTER HOPE/SUSPECT, ETC.",
              definition:
                'used after verbs like "be afraid," "hope," "suspect," etc. in short, negative replies',
              dictionary_example: [
                '"Is he coming with us?" "I hope not."',
                '"Have you finished?" "I\'m afraid not."',
              ],
              learner_example: [""],
            },
            {
              level: "B1",
              pos: "adverb",
              guideword: "QUESTIONS",
              definition:
                'used to form questions when you think the answer will be "yes," using the short form "n\'t"',
              dictionary_example: [
                "She's very pretty, isn't she?",
                "You like cheese, don't you?",
              ],
              learner_example: [
                "I know that you love horror movies, don't you? (Preliminary English Test; B1; Portuguese)",
              ],
            },
          ],
          synonym: [],
        },
        {
          word_idx: 16,
          raw_word: "budget",
          cefr: "B2",
          stopword: false,
          word: "budget",
          lemma: "budget",
          pos: "n.",
          html_description:
            '<div class="card_content_item" align="left"><div class="_pronoun">budget (noun.)</div><p class="_txt">the amount of money a person or organization has available to spend</p><span class="_ex">Usage</span><ul class="_list"><li>an annual budget of $40 million</li><li> They are over/under/on/within budget.</li><li>They have a very tight budget.</li></ul></div>',
          description: [
            {
              level: "B2",
              pos: "noun",
              guideword: "",
              definition:
                "the amount of money a person or organization has available to spend",
              dictionary_example: [
                "an annual budget of $40 million",
                " They are over/under/on/within budget.",
                "They have a very tight budget.",
              ],
              learner_example: [
                "Finally, as I am a student on a very tight budget I would prefer a cheap B and B or a family rather than a local campsite. (First Certificate in English; B2; Polish)",
              ],
            },
          ],
          synonym: [],
        },
        {
          word_idx: 17,
          raw_word: "or",
          cefr: "A1",
          stopword: true,
          word: "or",
          lemma: "or",
          pos: "conj.",
          html_description:
            '<div class="card_content_item" align="left"><div class="_pronoun">or (conjunction.)</div><p class="_txt">used between possibilities, or before the last in a list of possibilities</p><span class="_ex">Usage</span><ul class="_list"><li>Would you like tea or coffee?</li><li>Is that a boy or a girl?</li><li>You can have beer, wine or mineral water.</li><li>It was either 1982 or 1983 - I can\'t remember which.</li><li>There were ten or twelve people in the room.</li><li>It will only take three or four days.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">or (conjunction.)</div><p class="_txt">used after a negative verb to mean not one thing and also not another</p><span class="_ex">Usage</span><ul class="_list"><li>Tim doesn\'t eat meat or fish.</li><li>She doesn\'t have a telephone or a computer.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">or (conjunction.)</div><p class="_txt">used to give someone a warning or advice</p><span class="_ex">Usage</span><ul class="_list"><li>You should eat more, or you\'ll get sick.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">or (conjunction.)</div><p class="_txt">used to change or correct something you have said</p><span class="_ex">Usage</span><ul class="_list"><li>We told the truth, or most of it.</li><li>Eleanor, or Ellie to her friends, took the initiative.</li><li>Things have been going well recently. Or they were, up until two days ago.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">or (conjunction.)</div><p class="_txt">used to give a reason for, explain, or correct something you have said</p><span class="_ex">Usage</span><ul class="_list"><li>Things were going well, or seemed to be, but the relationship had already begun to change.</li><li>She must love her work or she wouldn\'t have kept at it all these years.</li></ul></div>',
          description: [
            {
              level: "A1",
              pos: "conjunction",
              guideword: "POSSIBILITIES",
              definition:
                "used between possibilities, or before the last in a list of possibilities",
              dictionary_example: [
                "Would you like tea or coffee?",
                "Is that a boy or a girl?",
                "You can have beer, wine or mineral water.",
                "It was either 1982 or 1983 - I can't remember which.",
                "There were ten or twelve people in the room.",
                "It will only take three or four days.",
              ],
              learner_example: [
                "I like to eat pasta or pizza, but I'm easy about food, I can eat anything. (Skills for Life (Entry 1); A1; French)",
              ],
            },
            {
              level: "A2",
              pos: "conjunction",
              guideword: "NOT EITHER",
              definition:
                "used after a negative verb to mean not one thing and also not another",
              dictionary_example: [
                "Tim doesn't eat meat or fish.",
                "She doesn't have a telephone or a computer.",
              ],
              learner_example: [
                "OH! and please don't wear jeans or white clothes. (Key English Test; A2; Thai)",
              ],
            },
            {
              level: "B1",
              pos: "conjunction",
              guideword: "WARNING",
              definition: "used to give someone a warning or advice",
              dictionary_example: ["You should eat more, or you'll get sick."],
              learner_example: [
                'She called "Bill, come here or you\'ll be in trouble". (Preliminary English Test; B1; Farsi)',
              ],
            },
            {
              level: "B2",
              pos: "conjunction",
              guideword: "CHANGE",
              definition: "used to change or correct something you have said",
              dictionary_example: [
                "We told the truth, or most of it.",
                "Eleanor, or Ellie to her friends, took the initiative.",
                "Things have been going well recently. Or they were, up until two days ago.",
              ],
              learner_example: [
                "She is the one [who goes] around with all Rebecca's secrets. Or, almost all the secrets. (First Certificate in English; B2; Danish)",
              ],
            },
            {
              level: "C2",
              pos: "conjunction",
              guideword: "EXPLAIN",
              definition:
                "used to give a reason for, explain, or correct something you have said",
              dictionary_example: [
                "Things were going well, or seemed to be, but the relationship had already begun to change.",
                "She must love her work or she wouldn't have kept at it all these years.",
              ],
              learner_example: [
                "I [have] stud[ied] music since I was twelve or, in other words, I started to learn how to read music and how to play an instrument about ten years ago. (Certificate of Proficiency in English; C2; Catalan)",
              ],
            },
          ],
          synonym: [],
        },
        {
          word_idx: 18,
          raw_word: "distribute",
          cefr: "B2",
          stopword: false,
          word: "distribute",
          lemma: "distribute",
          pos: "v.",
          html_description:
            '<div class="card_content_item" align="left"><div class="_pronoun">distribute (verb.)</div><p class="_txt">to give something out to several people</p><span class="_ex">Usage</span><ul class="_list"><li>The books will be distributed free to local schools.</li><li>Several people were arrested for distributing racist leaflets to the spectators.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">distribute (verb.)</div><p class="_txt">to supply goods to shops and companies</p><span class="_ex">Usage</span><ul class="_list"><li>The company manufactures and distributes computer equipment worldwide.</li></ul></div>',
          description: [
            {
              level: "B2",
              pos: "verb",
              guideword: "GIVE OUT",
              definition: "to give something out to several people",
              dictionary_example: [
                "The books will be distributed free to local schools.",
                "Several people were arrested for distributing racist leaflets to the spectators.",
              ],
              learner_example: [
                "I also had to distribute the flyers [at the concert]. (First Certificate in English; B2; Korean)",
              ],
            },
            {
              level: "C1",
              pos: "verb",
              guideword: "SUPPLY",
              definition: "to supply goods to shops and companies",
              dictionary_example: [
                "The company manufactures and distributes computer equipment worldwide.",
              ],
              learner_example: [
                "Our company imports all the merchand[i]se from [the] Far East and then distribute[s] those products in high quantities to different customers. (Certificate in Advanced English; C1; Greek)",
              ],
            },
          ],
          synonym: [
            {
              word: "administer",
              cefr: "C1.9",
              html_description:
                '<div class="card_content_item" align="left"><div class="_pronoun">administer</div><p class="_txt">to control the operation or arrangement of something: </p><span class="_ex">Usage</span><ul class="_list">The economy has been badly administered by the present government.</ul></div>',
            },
            {
              word: "propagate",
              cefr: "C2.0",
              html_description:
                '<div class="card_content_item" align="left"><div class="_pronoun">propagate</div><p class="_txt">to produce a new plant using a parent plant: </p><span class="_ex">Usage</span><ul class="_list">Most house plants can be propagated from stem cuttings.</ul></div>',
            },
            {
              word: "dispense",
              cefr: "C2.5",
              html_description:
                '<div class="card_content_item" align="left"><div class="_pronoun">dispense</div><p class="_txt">to give out things, especially products, services, or amounts of money: </p><span class="_ex">Usage</span><ul class="_list">There is a vending machine on the platform that dispenses snacks.</ul></div>',
            },
            {
              word: "stagger",
              cefr: "C2.7",
              html_description:
                '<div class="card_content_item" align="left"><div class="_pronoun">stagger (verb.)</div><p class="_txt">to walk as if you might fall</p><span class="_ex">Usage</span><ul class="_list"><li>He staggered drunkenly towards the door.</li></ul></div>',
            },
            {
              word: "circularize",
              cefr: "unk",
              html_description: "",
            },
          ],
        },
        {
          word_idx: 19,
          raw_word: "the",
          cefr: "A1",
          stopword: true,
          word: "the",
          lemma: "the",
          pos: "det.",
          html_description:
            '<div class="card_content_item" align="left"><div class="_pronoun">the (determiner.)</div><p class="_txt">used before nouns to refer to particular things or people that have already been talked about or are already known</p><span class="_ex">Usage</span><ul class="_list"><li>I bought a shirt and some shoes. The shirt was expensive, but the shoes weren\'t.</li><li>Could you pass the salt, please?</li><li>I\'ll pick you up at the station.</li><li>I really enjoyed the book I just read.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">the (determiner.)</div><p class="_txt">used before nouns when only one of something exists</p><span class="_ex">Usage</span><ul class="_list"><li>Have you seen the Eiffel Tower?</li><li>What will happen in the future?</li><li>She\'s traveling around the world.</li><li>They live in the north of Spain.</li><li>Ed Koch was for many years the mayor of New York.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">the (determiner.)</div><p class="_txt">used before some nouns that refer to place when you want to mention that type of place, without showing exactly which example of the place you mean</p><span class="_ex">Usage</span><ul class="_list"><li>We spent all day at the beach.</li><li>Shall we go to the movies this evening?</li><li>I must go to the bank.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">the (determiner.)</div><p class="_txt">used before superlatives and other words, such as \'first\' or \'only\' or numbers showing something\'s position in a list, which refer to only one thing or person</p><span class="_ex">Usage</span><ul class="_list"><li>That was one of the best movies I\'ve ever seen.</li><li>What\'s the highest mountain in Europe?</li><li>I shall never forget the first time we met.</li><li>You\'re the fifth person to ask me that question.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">the (determiner.)</div><p class="_txt">used before numbers that refer to periods of ten years</p><span class="_ex">Usage</span><ul class="_list"><li>the sixties</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">the (determiner.)</div><p class="_txt">used instead of a possessive adjective such as "your," "her," or "my"</p><span class="_ex">Usage</span><ul class="_list"><li>He held her by the arm.</li><li>Where did I park the car?</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">the (determiner.)</div><p class="_txt">used before each of two adjectives or adverbs to show how one thing changes depending on another</p><span class="_ex">Usage</span><ul class="_list"><li> The longer we live here, the more we like it. </li></ul></div>',
          description: [
            {
              level: "A1",
              pos: "determiner",
              guideword: "PARTICULAR",
              definition:
                "used before nouns to refer to particular things or people that have already been talked about or are already known",
              dictionary_example: [
                "I bought a shirt and some shoes. The shirt was expensive, but the shoes weren't.",
                "Could you pass the salt, please?",
                "I'll pick you up at the station.",
                "I really enjoyed the book I just read.",
              ],
              learner_example: [
                "I like fresh food from my garden[.] I like [a]lso [to] work in the garden. (Skills for Life (Entry 1); A1; Polish)",
              ],
            },
            {
              level: "A1",
              pos: "determiner",
              guideword: "ONLY ONE",
              definition: "used before nouns when only one of something exists",
              dictionary_example: [
                "Have you seen the Eiffel Tower?",
                "What will happen in the future?",
                "She's traveling around the world.",
                "They live in the north of Spain.",
                "Ed Koch was for many years the mayor of New York.",
              ],
              learner_example: [
                "That day is [also] the Chinese New Year. (Skills for Life (Entry 1); A1; Chinese)",
              ],
            },
            {
              level: "A1",
              pos: "determiner",
              guideword: "PLACE",
              definition:
                "used before some nouns that refer to place when you want to mention that type of place, without showing exactly which example of the place you mean",
              dictionary_example: [
                "We spent all day at the beach.",
                "Shall we go to the movies this evening?",
                "I must go to the bank.",
              ],
              learner_example: [
                "I like to go to swimming and go to the beach. (Skills for Life (Entry 1); A1; Thai)",
              ],
            },
            {
              level: "A2",
              pos: "determiner",
              guideword: "BEFORE SUPERLATIVES, ETC.",
              definition:
                "used before superlatives and other words, such as 'first' or 'only' or numbers showing something's position in a list, which refer to only one thing or person",
              dictionary_example: [
                "That was one of the best movies I've ever seen.",
                "What's the highest mountain in Europe?",
                "I shall never forget the first time we met.",
                "You're the fifth person to ask me that question.",
              ],
              learner_example: [
                "The best present I have ever got was a car from my grandma. (Key English Test; A2; Portuguese)",
              ],
            },
            {
              level: "B2",
              pos: "determiner",
              guideword: "TIME",
              definition:
                "used before numbers that refer to periods of ten years",
              dictionary_example: ["the sixties"],
              learner_example: [
                "For example, people in the 1950s who didn't have computers are likely to have had difficulty in checking information, booking tickets, and communicating with each other. (First Certificate in English; B2; Korean)",
              ],
            },
            {
              level: "B1",
              pos: "determiner",
              guideword: "YOUR",
              definition:
                'used instead of a possessive adjective such as "your," "her," or "my"',
              dictionary_example: [
                "He held her by the arm.",
                "Where did I park the car?",
              ],
              learner_example: [
                "There [are] a lot of people, and there are a lot of cars, so you would have problems find[ing] a place to park the car. (Preliminary English Test; B1; Spanish)",
              ],
            },
            {
              level: "B2",
              pos: "determiner",
              guideword: "COMPARE",
              definition:
                "used before each of two adjectives or adverbs to show how one thing changes depending on another",
              dictionary_example: [
                " The longer we live here, the more we like it. ",
              ],
              learner_example: [
                "In many cases, the more things you learn, the less things you know. (First Certificate in English; B2; French)",
              ],
            },
          ],
          synonym: [],
        },
        {
          word_idx: 20,
          raw_word: "nation's",
          cefr: "B2",
          stopword: false,
          word: "nation",
          lemma: "nation",
          pos: "n.",
          html_description:
            '<div class="card_content_item" align="left"><div class="_pronoun">nation (noun.)</div><p class="_txt">a country or the people living in a country</p><span class="_ex">Usage</span><ul class="_list"><li>the industrialized nations</li><li>All the nations of the world will be represented at the conference.</li><li>Practically the whole nation watched the ceremony on television.</li></ul></div>',
          description: [
            {
              level: "B2",
              pos: "noun",
              guideword: "",
              definition: "a country or the people living in a country",
              dictionary_example: [
                "the industrialized nations",
                "All the nations of the world will be represented at the conference.",
                "Practically the whole nation watched the ceremony on television.",
              ],
              learner_example: [
                "At that time, everyone should have devoted their life to the nation. (First Certificate in English; B2; Japanese)",
              ],
            },
          ],
          synonym: [
            {
              word: "country",
              cefr: "A1.4",
              html_description:
                '<div class="card_content_item" align="left"><div class="_pronoun">country (noun.)</div><p class="_txt">an area of land that has its own government, army, etc.</p><span class="_ex">Usage</span><ul class="_list"><li>Which is the largest country in South America?</li><li>Sri Lanka is my native country, but I\'ve been living in Belgium for the past five years.</li><li>The climate is cooler in the eastern part of the country.</li></ul></div>',
            },
            {
              word: "state",
              cefr: "B1.1",
              html_description:
                '<div class="card_content_item" align="left"><div class="_pronoun">state (noun.)</div><p class="_txt">the condition that something or someone is in</p><span class="_ex">Usage</span><ul class="_list"><li>The building is in a terrible state.</li><li>After the accident I was in a state of shock.</li><li>The kitchen was in its original state, with a 1920s sink and stove.</li><li>It\'s a sad state of affairs when our rivers are so endangered.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">state (noun.)</div><p class="_txt">a part of a large country with its own government, such as in Brazil, Mexico, or the US</p><span class="_ex">Usage</span><ul class="_list"><li>Alaska is the largest state in the US.</li><li>Representatives are elected from each state.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">state (noun.)</div><p class="_txt">a country or its government</p><span class="_ex">Usage</span><ul class="_list"><li>The drought is worst in the central African states.</li><li>Britain is one of the member states of the European Union.</li><li>The government was determined to reduce the number of state-owned industries.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">state (verb.)</div><p class="_txt">to officially say or write something</p><span class="_ex">Usage</span><ul class="_list"><li>Our warranty clearly states the limits of our liability.</li><li>His will states (that) the property is to be sold.</li><li>Please state why you are applying for this grant.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">state (adjective.)</div><p class="_txt">provided, created, or done by a state in a country, or by the government of a country</p><span class="_ex">Usage</span><ul class="_list"><li>a state government/legislature/law</li><li>a state school/college/university</li><li>state control</li><li>state funding</li></ul></div>',
            },
            {
              word: "land",
              cefr: "B1.1",
              html_description:
                '<div class="card_content_item" align="left"><div class="_pronoun">land (noun.)</div><p class="_txt">an area of ground, especially when used for a particular purpose such as farming or building</p><span class="_ex">Usage</span><ul class="_list"><li>This land here is good for growing potatoes.</li><li>We want to buy a plot of land to build a house.</li><li>They just bought 150 acres of land in Idaho.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">land (noun.)</div><p class="_txt">the surface of the earth that is not sea</p><span class="_ex">Usage</span><ul class="_list"><li>It is cheaper to drill for oil on land than at sea.</li><li>The treaty led to a dramatic reduction in the number of land-based missiles.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">land (noun.)</div><p class="_txt">a country</p><span class="_ex">Usage</span><ul class="_list"><li>Ireland was my grandmother\u2019s native land.</li><li>a land of ice and snow</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">land (verb.)</div><p class="_txt">to arrive at a place in a plane or a boat, or to make a plane or a boat reach the land</p><span class="_ex">Usage</span><ul class="_list"><li>We should land in Madrid at 7:00 a.m.</li><li>The pilot said we would land in about 20 minutes.</li><li>We\u2019d been sailing for three weeks by the time we landed at Miami.</li><li>We landed at Port Said in the early evening.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">land (verb.)</div><p class="_txt">to get or achieve something, usually something good</p><span class="_ex">Usage</span><ul class="_list"><li>He\'s just landed a new job.</li></ul></div>',
            },
            {
              word: "nation",
              cefr: "B2.3",
              html_description:
                '<div class="card_content_item" align="left"><div class="_pronoun">nation (noun.)</div><p class="_txt">a country or the people living in a country</p><span class="_ex">Usage</span><ul class="_list"><li>the industrialized nations</li><li>All the nations of the world will be represented at the conference.</li><li>Practically the whole nation watched the ceremony on television.</li></ul></div>',
            },
            {
              word: "commonwealth",
              cefr: "C2.2",
              html_description:
                '<div class="card_content_item" align="left"><div class="_pronoun">commonwealth</div><p class="_txt">a group of countries with the same political or economic aims: </p><span class="_ex">Usage</span><ul class="_list">the Commonwealth of Independent States</ul></div>',
            },
          ],
        },
        {
          word_idx: 21,
          raw_word: "riches",
          cefr: "C2",
          stopword: false,
          word: "riches",
          lemma: "riches",
          pos: "n.",
          html_description:
            '<div class="card_content_item" align="left"><div class="_pronoun">riches (noun.)</div><p class="_txt">a lot of money or valuable objects</p><span class="_ex">Usage</span><ul class="_list"><li>To her, $500 seemed like untold riches.</li><li>oil/mineral riches</li></ul></div>',
          description: [
            {
              level: "C2",
              pos: "noun",
              guideword: "",
              definition: "a lot of money or valuable objects",
              dictionary_example: [
                "To her, $500 seemed like untold riches.",
                "oil/mineral riches",
              ],
              learner_example: [
                'First, her career can be regarded as the typical rise from "rags to riches." (Certificate of Proficiency in English; C2; German)',
              ],
            },
          ],
          synonym: [
            {
              word: "rich",
              cefr: "A2.7",
              html_description:
                '<div class="card_content_item" align="left"><div class="_pronoun">rich (adjective.)</div><p class="_txt">having much more money than most people, or owning things that could be sold for a lot of money</p><span class="_ex">Usage</span><ul class="_list"><li>She\'s from a very rich family.</li><li>He\'s the third richest man in the country.</li><li>They\'re one of the world\'s richest nations.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">rich (adjective.)</div><p class="_txt">Rich food has a lot of fat, oil or eggs in it.</p><span class="_ex">Usage</span><ul class="_list"><li> a rich sauce</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">rich (adjective.)</div><p class="_txt">containing a lot of something that is important or valuable</p><span class="_ex">Usage</span><ul class="_list"><li>The region is rich in minerals and coal deposits.</li><li> Both foods are rich in Vitamin C.</li><li>The country has vast oil reserves and rich deposits of other minerals.</li></ul></div>',
            },
            {
              word: "wealth",
              cefr: "B2.4",
              html_description:
                '<div class="card_content_item" align="left"><div class="_pronoun">wealth (noun.)</div><p class="_txt">a large amount of money or valuable possessions that someone has</p><span class="_ex">Usage</span><ul class="_list"><li>During a successful business career, she accumulated a great amount of wealth.</li></ul></div>',
            },
          ],
        },
        {
          word_idx: 22,
          raw_word: "equally",
          cefr: "B2",
          stopword: false,
          word: "equally",
          lemma: "equally",
          pos: "adv.",
          html_description:
            '<div class="card_content_item" align="left"><div class="_pronoun">equally (adverb.)</div><p class="_txt">fairly and in the same way</p><span class="_ex">Usage</span><ul class="_list"><li>Everyone should be treated equally.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">equally (adverb.)</div><p class="_txt">into amounts or parts that are the same size</p><span class="_ex">Usage</span><ul class="_list"><li>She shared the money equally between the four children.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">equally (adverb.)</div><p class="_txt">to the same degree or level</p><span class="_ex">Usage</span><ul class="_list"><li>an equally important question</li><li>She did equally well in the competition last year.</li></ul></div>',
          description: [
            {
              level: "B2",
              pos: "adverb",
              guideword: "SAME WAY",
              definition: "fairly and in the same way",
              dictionary_example: ["Everyone should be treated equally."],
              learner_example: [
                "In [the] festival, all the performers were treated equally. (First Certificate in English; B2; Chinese)",
              ],
            },
            {
              level: "C1",
              pos: "adverb",
              guideword: "SAME AMOUNTS",
              definition: "into amounts or parts that are the same size",
              dictionary_example: [
                "She shared the money equally between the four children.",
              ],
              learner_example: [
                "The obligations should be divided equally between the members of the gro[u]p. (International English Language Testing System; C1; Turkish)",
              ],
            },
            {
              level: "C1",
              pos: "adverb",
              guideword: "SAME DEGREE",
              definition: "to the same degree or level",
              dictionary_example: [
                "an equally important question",
                "She did equally well in the competition last year.",
              ],
              learner_example: [
                "I think the choice of a good organization, which can provide good facilities and social conditions, along with good teaching, is equally important. (Certificate in Advanced English; C1; Italian)",
              ],
            },
          ],
          synonym: [
            {
              word: "as",
              cefr: "A1.5",
              html_description:
                '<div class="card_content_item" align="left"><div class="_pronoun">as (adverb; preposition.)</div><p class="_txt">used to talk about the job someone has</p><span class="_ex">Usage</span><ul class="_list"><li>She works as a waitress.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">as (adverb; preposition.)</div><p class="_txt">like or in the same way</p><span class="_ex">Usage</span><ul class="_list"><li>We used the box as a table.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">as (adverb; preposition.)</div><p class="_txt">being or appearing to be a particular thing</p><span class="_ex">Usage</span><ul class="_list"><li>He was dressed as a pirate.</li><li>As a young man, he was very lonely.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">as (conjunction.)</div><p class="_txt">because</p><span class="_ex">Usage</span><ul class="_list"><li>As it was getting late, I decided to check into a hotel.</li><li>You can go first as you\'re the oldest.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">as (conjunction.)</div><p class="_txt">while or during the time that</p><span class="_ex">Usage</span><ul class="_list"><li>I saw him as I was coming into the building.</li><li>He gets more attractive as he gets older.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">as (conjunction.)</div><p class="_txt">in the same way</p><span class="_ex">Usage</span><ul class="_list"><li>He got divorced, (just) as his parents had done years before.</li><li>This year, as in previous years, tickets sold very quickly.</li><li>As with his earlier movies, the special effects in his latest movie are brilliant.</li></ul></div>',
            },
            {
              word: "evenly",
              cefr: "C1.4",
              html_description:
                '<div class="card_content_item" align="left"><div class="_pronoun">evenly</div><p class="_txt">If you say something evenly, you speak without showing emotion in your voice although you are angry or not satisfied in some way: </p><span class="_ex">Usage</span><ul class="_list">"We are not terrorists," he said evenly. "We are freedom fighters."</ul></div>',
            },
          ],
        },
        {
          word_idx: 23,
          raw_word: "and",
          cefr: "A1",
          stopword: true,
          word: "and",
          lemma: "and",
          pos: "conj.",
          html_description:
            '<div class="card_content_item" align="left"><div class="_pronoun">and (conjunction.)</div><p class="_txt">used to join two words, phrases, parts of sentences or related statements together</p><span class="_ex">Usage</span><ul class="_list"><li>Ann and Jim</li><li>knives and forks</li><li>We kissed and hugged each other.</li><li>Straighten up your room. And don\'t forget to make your bed!</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">and (conjunction.)</div><p class="_txt">used to say that one thing happens after another thing</p><span class="_ex">Usage</span><ul class="_list"><li>I got dressed and had my breakfast.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">and (conjunction.)</div><p class="_txt">used when saying or adding numbers</p><span class="_ex">Usage</span><ul class="_list"><li>It cost a hundred and twenty dollars.</li><li>Two and three equals five.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">and (conjunction.)</div><p class="_txt">used instead of "to" after some verbs, such as "try" and "go"</p><span class="_ex">Usage</span><ul class="_list"><li>Try and eat something.</li><li>I asked him to go and find my glasses.</li><li> Wait and see what happens.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">and (conjunction.)</div><p class="_txt">used between two words which are the same to make their meaning stronger</p><span class="_ex">Usage</span><ul class="_list"><li>She spends hours and hours on the telephone.</li><li>The sound grew louder and louder.</li><li>We laughed and laughed.</li></ul></div>',
          description: [
            {
              level: "A1",
              pos: "conjunction",
              guideword: "ALSO",
              definition:
                "used to join two words, phrases, parts of sentences or related statements together",
              dictionary_example: [
                "Ann and Jim",
                "knives and forks",
                "We kissed and hugged each other.",
                "Straighten up your room. And don't forget to make your bed!",
              ],
              learner_example: [
                "I have got [a] nice bed, [a] mirror, [a] sofa and a table. (Skills for Life (Entry 1); A1; Slovak)",
              ],
            },
            {
              level: "A1",
              pos: "conjunction",
              guideword: "AFTER",
              definition:
                "used to say that one thing happens after another thing",
              dictionary_example: ["I got dressed and had my breakfast."],
              learner_example: [
                "I get up early [in the] morning and I have breakfast. (Skills for Life (Entry 1); A1; Somali)",
              ],
            },
            {
              level: "A1",
              pos: "conjunction",
              guideword: "NUMBERS",
              definition: "used when saying or adding numbers",
              dictionary_example: [
                "It cost a hundred and twenty dollars.",
                "Two and three equals five.",
              ],
              learner_example: [
                "It's about two and a half hours. (Key English Test; A2; Greek)",
              ],
            },
            {
              level: "A2",
              pos: "conjunction",
              guideword: "AFTER VERB",
              definition:
                'used instead of "to" after some verbs, such as "try" and "go"',
              dictionary_example: [
                "Try and eat something.",
                "I asked him to go and find my glasses.",
                " Wait and see what happens.",
              ],
              learner_example: [
                "I hope [to] go and see Disneyland. (Key English Test; A2; French)",
              ],
            },
            {
              level: "B1",
              pos: "conjunction",
              guideword: "EMPHASIZE",
              definition:
                "used between two words which are the same to make their meaning stronger",
              dictionary_example: [
                "She spends hours and hours on the telephone.",
                "The sound grew louder and louder.",
                "We laughed and laughed.",
              ],
              learner_example: [
                "The situation became harder and harder. (Preliminary English Test; B1; Swiss German)",
              ],
            },
          ],
          synonym: [],
        },
        {
          word_idx: 24,
          raw_word: "appropriately.",
          cefr: "B2",
          stopword: false,
          word: "appropriately",
          lemma: "appropriately",
          pos: "adv.",
          html_description:
            '<div class="card_content_item" align="left"><div class="_pronoun">appropriately (adverb.)</div><p class="_txt">in a way that is appropriate</p><span class="_ex">Usage</span><ul class="_list"><li>She didn\'t think we were appropriately dressed for a wedding.</li></ul></div>',
          description: [
            {
              level: "B2",
              pos: "adverb",
              guideword: "",
              definition: "in a way that is appropriate",
              dictionary_example: [
                "She didn't think we were appropriately dressed for a wedding.",
              ],
              learner_example: [
                "I enjoyed reading it and I think it appropriately describes the atmosphere of that lovely town. (First Certificate in English; B2; French)",
              ],
            },
          ],
          synonym: [
            {
              word: "suitably",
              cefr: "C1.0",
              html_description:
                '<div class="card_content_item" align="left"><div class="_pronoun">suitably (adverb.)</div><p class="_txt">in a way that is acceptable or right</p><span class="_ex">Usage</span><ul class="_list"><li>I believe the committee was suitably impressed by his r\u00e9sum\u00e9.</li><li>This book is interesting and suitably challenging for an eight-year-old.</li></ul></div>',
            },
            {
              word: "befittingly",
              cefr: "unk",
              html_description: "",
            },
            {
              word: "fitly",
              cefr: "unk",
              html_description: "",
            },
            {
              word: "fittingly",
              cefr: "unk",
              html_description: "",
            },
          ],
        },
      ],
    },
    {
      sent_idx: 1,
      raw_sentence:
        "Donating money or supplies doesn't necessarily mean that the authorities of such corrupt nations retain and distribute the aid fairly.",
      sentence:
        "donating money or supplies does not necessarily mean that the authorities of such corrupt nations retain and distribute the aid fairly",
      sentence_summary: {
        sentence_num_words: 21,
        sentence_cefr: "B2.10",
        sentence_word_list_by_cefr: {
          A1: ["or", "does", "of", "and", "money", "not", "the"],
          A2: ["mean", "that"],
          B1: ["fairly"],
          B2: [
            "authorities",
            "such",
            "distribute",
            "supplies",
            "donating",
            "necessarily",
            "nations",
          ],
          C1: ["corrupt", "aid"],
          C2: ["retain"],
          unk: [],
          stopwords: ["or", "does", "of", "such", "and", "not", "that", "the"],
        },
        sentence_word_count_by_cefr: {
          A1: 8,
          A2: 2,
          B1: 1,
          B2: 7,
          C1: 2,
          C2: 1,
          unk: 0,
          stopwords: 9,
        },
        sentence_word_distribution_by_cefr: {
          A1: 38.1,
          A2: 9.5,
          B1: 4.8,
          B2: 33.3,
          C1: 9.5,
          C2: 4.8,
          unk: 0.0,
          stopwords: 42.9,
        },
      },
      words_detail: [
        {
          word_idx: 0,
          raw_word: "Donating",
          cefr: "B2",
          stopword: false,
          word: "donating",
          lemma: "donate",
          pos: "v.",
          html_description:
            '<div class="card_content_item" align="left"><div class="_pronoun">donate (verb.)</div><p class="_txt">to give money or goods to help a person or organization</p><span class="_ex">Usage</span><ul class="_list"><li>An anonymous businesswoman donated one million dollars to the charity.</li><li>Please donate generously.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">donate (verb.)</div><p class="_txt">to allow some of your blood or part of your body to be used for medical purposes</p><span class="_ex">Usage</span><ul class="_list"><li>He donated a kidney to his sister.</li></ul></div>',
          description: [
            {
              level: "B2",
              pos: "verb",
              guideword: "GIVE MONEY",
              definition:
                "to give money or goods to help a person or organization",
              dictionary_example: [
                "An anonymous businesswoman donated one million dollars to the charity.",
                "Please donate generously.",
              ],
              learner_example: [
                "You don't have to pay for [it] but you can donate some money if you wish. (First Certificate in English; B2; Polish)",
              ],
            },
            {
              level: "C1",
              pos: "verb",
              guideword: "BLOOD/ORGANS",
              definition:
                "to allow some of your blood or part of your body to be used for medical purposes",
              dictionary_example: ["He donated a kidney to his sister."],
              learner_example: [
                "For example, he once saved my life, putting his in danger by donating a large quantity of blood. (Certificate in Advanced English; C1; Romanian)",
              ],
            },
          ],
          synonym: [
            {
              word: "donate",
              cefr: "B2.8",
              html_description:
                '<div class="card_content_item" align="left"><div class="_pronoun">donate (verb.)</div><p class="_txt">to give money or goods to help a person or organization</p><span class="_ex">Usage</span><ul class="_list"><li>An anonymous businesswoman donated one million dollars to the charity.</li><li>Please donate generously.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">donate (verb.)</div><p class="_txt">to allow some of your blood or part of your body to be used for medical purposes</p><span class="_ex">Usage</span><ul class="_list"><li>He donated a kidney to his sister.</li></ul></div>',
            },
          ],
        },
        {
          word_idx: 1,
          raw_word: "money",
          cefr: "A1",
          stopword: false,
          word: "money",
          lemma: "money",
          pos: "n.",
          html_description:
            '<div class="card_content_item" align="left"><div class="_pronoun">money (noun.)</div><p class="_txt">the coins or bills that are used to buy things</p><span class="_ex">Usage</span><ul class="_list"><li>How much money do you have?</li><li>I don\'t have much money on me.</li><li>I spent a lot of money.</li><li>Roger wanted to buy it but it cost too much money.</li><li> The company isn\'t making any money this year.</li><li>Try to save some money for your vacation.</li></ul></div>',
          description: [
            {
              level: "A1",
              pos: "noun",
              guideword: "",
              definition: "the coins or bills that are used to buy things",
              dictionary_example: [
                "How much money do you have?",
                "I don't have much money on me.",
                "I spent a lot of money.",
                "Roger wanted to buy it but it cost too much money.",
                " The company isn't making any money this year.",
                "Try to save some money for your vacation.",
              ],
              learner_example: [
                "He is from England and he is very friendly and he work[s] a lot because he likes money. (Skills for Life (Entry 1); A1; Amharic)",
              ],
            },
          ],
          synonym: [],
        },
        {
          word_idx: 2,
          raw_word: "or",
          cefr: "A1",
          stopword: true,
          word: "or",
          lemma: "or",
          pos: "conj.",
          html_description:
            '<div class="card_content_item" align="left"><div class="_pronoun">or (conjunction.)</div><p class="_txt">used between possibilities, or before the last in a list of possibilities</p><span class="_ex">Usage</span><ul class="_list"><li>Would you like tea or coffee?</li><li>Is that a boy or a girl?</li><li>You can have beer, wine or mineral water.</li><li>It was either 1982 or 1983 - I can\'t remember which.</li><li>There were ten or twelve people in the room.</li><li>It will only take three or four days.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">or (conjunction.)</div><p class="_txt">used after a negative verb to mean not one thing and also not another</p><span class="_ex">Usage</span><ul class="_list"><li>Tim doesn\'t eat meat or fish.</li><li>She doesn\'t have a telephone or a computer.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">or (conjunction.)</div><p class="_txt">used to give someone a warning or advice</p><span class="_ex">Usage</span><ul class="_list"><li>You should eat more, or you\'ll get sick.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">or (conjunction.)</div><p class="_txt">used to change or correct something you have said</p><span class="_ex">Usage</span><ul class="_list"><li>We told the truth, or most of it.</li><li>Eleanor, or Ellie to her friends, took the initiative.</li><li>Things have been going well recently. Or they were, up until two days ago.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">or (conjunction.)</div><p class="_txt">used to give a reason for, explain, or correct something you have said</p><span class="_ex">Usage</span><ul class="_list"><li>Things were going well, or seemed to be, but the relationship had already begun to change.</li><li>She must love her work or she wouldn\'t have kept at it all these years.</li></ul></div>',
          description: [
            {
              level: "A1",
              pos: "conjunction",
              guideword: "POSSIBILITIES",
              definition:
                "used between possibilities, or before the last in a list of possibilities",
              dictionary_example: [
                "Would you like tea or coffee?",
                "Is that a boy or a girl?",
                "You can have beer, wine or mineral water.",
                "It was either 1982 or 1983 - I can't remember which.",
                "There were ten or twelve people in the room.",
                "It will only take three or four days.",
              ],
              learner_example: [
                "I like to eat pasta or pizza, but I'm easy about food, I can eat anything. (Skills for Life (Entry 1); A1; French)",
              ],
            },
            {
              level: "A2",
              pos: "conjunction",
              guideword: "NOT EITHER",
              definition:
                "used after a negative verb to mean not one thing and also not another",
              dictionary_example: [
                "Tim doesn't eat meat or fish.",
                "She doesn't have a telephone or a computer.",
              ],
              learner_example: [
                "OH! and please don't wear jeans or white clothes. (Key English Test; A2; Thai)",
              ],
            },
            {
              level: "B1",
              pos: "conjunction",
              guideword: "WARNING",
              definition: "used to give someone a warning or advice",
              dictionary_example: ["You should eat more, or you'll get sick."],
              learner_example: [
                'She called "Bill, come here or you\'ll be in trouble". (Preliminary English Test; B1; Farsi)',
              ],
            },
            {
              level: "B2",
              pos: "conjunction",
              guideword: "CHANGE",
              definition: "used to change or correct something you have said",
              dictionary_example: [
                "We told the truth, or most of it.",
                "Eleanor, or Ellie to her friends, took the initiative.",
                "Things have been going well recently. Or they were, up until two days ago.",
              ],
              learner_example: [
                "She is the one [who goes] around with all Rebecca's secrets. Or, almost all the secrets. (First Certificate in English; B2; Danish)",
              ],
            },
            {
              level: "C2",
              pos: "conjunction",
              guideword: "EXPLAIN",
              definition:
                "used to give a reason for, explain, or correct something you have said",
              dictionary_example: [
                "Things were going well, or seemed to be, but the relationship had already begun to change.",
                "She must love her work or she wouldn't have kept at it all these years.",
              ],
              learner_example: [
                "I [have] stud[ied] music since I was twelve or, in other words, I started to learn how to read music and how to play an instrument about ten years ago. (Certificate of Proficiency in English; C2; Catalan)",
              ],
            },
          ],
          synonym: [],
        },
        {
          word_idx: 3,
          raw_word: "supplies",
          cefr: "B2",
          stopword: false,
          word: "supplies",
          lemma: "supply",
          pos: "n.",
          html_description:
            '<div class="card_content_item" align="left"><div class="_pronoun">supply (noun.)</div><p class="_txt">an amount of something that is available for use</p><span class="_ex">Usage</span><ul class="_list"><li>the water supply</li><li>Medical supplies were desperately needed in areas hit by the earthquake.</li><li>Demand for cheap housing far outstrips supply.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">supply (verb.)</div><p class="_txt">to provide things that people want or need, often over a long period of time</p><span class="_ex">Usage</span><ul class="_list"><li>Fran supplied the sandwiches for the party.</li><li>The dam supplies water and power to San Francisco.</li><li>At the beginning of term, students are supplied with a list of books that they are expected to read.</li></ul></div>',
          description: [
            {
              level: "B2",
              pos: "noun",
              guideword: "",
              definition: "an amount of something that is available for use",
              dictionary_example: [
                "the water supply",
                "Medical supplies were desperately needed in areas hit by the earthquake.",
                "Demand for cheap housing far outstrips supply.",
              ],
              learner_example: [
                "Please send me a list of [the] clothes [needed] and/or supplies. (First Certificate in English; B2; French)",
              ],
            },
            {
              level: "B2",
              pos: "verb",
              guideword: "",
              definition:
                "to provide things that people want or need, often over a long period of time",
              dictionary_example: [
                "Fran supplied the sandwiches for the party.",
                "The dam supplies water and power to San Francisco.",
                "At the beginning of term, students are supplied with a list of books that they are expected to read.",
              ],
              learner_example: [
                "I would be able to supply you with [a] reference from my employer. (First Certificate in English; B2; Russian)",
              ],
            },
          ],
          synonym: [
            {
              word: "append",
              cefr: "B2.1",
              html_description:
                '<div class="card_content_item" align="left"><div class="_pronoun">append</div><p class="_txt">to add something to the end of a piece of writing: </p><span class="_ex">Usage</span><ul class="_list">The author appends a short footnote to the text explaining the point.</ul></div>',
            },
            {
              word: "supply",
              cefr: "B2.3",
              html_description:
                '<div class="card_content_item" align="left"><div class="_pronoun">supply (noun.)</div><p class="_txt">an amount of something that is available for use</p><span class="_ex">Usage</span><ul class="_list"><li>the water supply</li><li>Medical supplies were desperately needed in areas hit by the earthquake.</li><li>Demand for cheap housing far outstrips supply.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">supply (verb.)</div><p class="_txt">to provide things that people want or need, often over a long period of time</p><span class="_ex">Usage</span><ul class="_list"><li>Fran supplied the sandwiches for the party.</li><li>The dam supplies water and power to San Francisco.</li><li>At the beginning of term, students are supplied with a list of books that they are expected to read.</li></ul></div>',
            },
            {
              word: "provision",
              cefr: "C1.8",
              html_description:
                '<div class="card_content_item" align="left"><div class="_pronoun">provision (noun.)</div><p class="_txt">when something is provided</p><span class="_ex">Usage</span><ul class="_list"><li> The provision of good public transportation will be essential for developing the area.</li><li>When designing buildings in this area, you have to make provisions for earthquakes.</li></ul></div>',
            },
            {
              word: "furnish",
              cefr: "C1.9",
              html_description:
                '<div class="card_content_item" align="left"><div class="_pronoun">furnish</div><p class="_txt">to put furniture in something: </p><span class="_ex">Usage</span><ul class="_list">They\'ve furnished the room very simply.</ul></div>',
            },
            {
              word: "cater",
              cefr: "C2.0",
              html_description:
                '<div class="card_content_item" align="left"><div class="_pronoun">cater (verb.)</div><p class="_txt">to provide and often serve food and drinks for a particular event</p><span class="_ex">Usage</span><ul class="_list"><li> We hired a local chef to cater our parents\' anniversary party.</li></ul></div>',
            },
          ],
        },
        {
          word_idx: 4,
          raw_word: "doesn't",
          cefr: "A1",
          stopword: true,
          word: "does",
          lemma: "do",
          pos: "v.",
          html_description:
            '<div class="card_content_item" align="left"><div class="_pronoun">do (auxiliary verb.)</div><p class="_txt">used with another verb to form questions and negative phrases</p><span class="_ex">Usage</span><ul class="_list"><li>Do you speak English?</li><li>Where do you work?</li><li>When does your train leave?</li><li>Why did you say that?</li><li>I don\'t know.</li><li>He doesn\'t eat meat.</li><li>I didn\'t see her there.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">do (auxiliary verb.)</div><p class="_txt">used to avoid repeating a verb that has just been used</p><span class="_ex">Usage</span><ul class="_list"><li>She runs much faster than he does.</li><li>Maria looks much healthier than she did.</li><li>"I hate that song!" "So do I."</li><li>"I don\'t like the heat." "Neither do I."</li><li>"May I join you?" "Please do!"</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">do (auxiliary verb.)</div><p class="_txt">used to give extra force to the main verb</p><span class="_ex">Usage</span><ul class="_list"><li>Do let me know if you need anything.</li><li>He does like you - he\'s just shy.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">do (verb.)</div><p class="_txt">to perform an action</p><span class="_ex">Usage</span><ul class="_list"><li>What should we do?</li><li>What are you doing tonight?</li><li>Have you done your homework?</li><li>We did a lot of talking.</li><li>I\'ve got nothing to do.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">do (verb.)</div><p class="_txt">to make or produce something</p><span class="_ex">Usage</span><ul class="_list"><li>I\'ve done 20 copies of the handout.</li><li>That bakery does a really good lemon cake.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">do (verb.)</div><p class="_txt">used for talking or asking about someone and whether they are healthy, happy, or succeeding</p><span class="_ex">Usage</span><ul class="_list"><li>Hi, how are you doing?</li><li>"How is Freya doing?" "She\'s doing really well, thanks."</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">do (verb.)</div><p class="_txt">to perform a sports activity</p><span class="_ex">Usage</span><ul class="_list"><li>She does yoga in her spare time.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">not (adverb.)</div><p class="_txt">used to form a negative phrase after verbs like "be," "can," "have," "\'will," "must," etc., usually used in the short form "n\'t" in speech</p><span class="_ex">Usage</span><ul class="_list"><li>He\'s not fat!</li><li>I won\'t tell her.</li><li>I can\'t go.</li><li>Don\'t you like her?</li><li>It isn\'t difficult.</li><li>I\'m just not interested.</li><li>He\'s not bad-looking!</li><li>He\'s not as tall as his father.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">not (adverb.)</div><p class="_txt">used to give the next word or group of words a negative meaning</p><span class="_ex">Usage</span><ul class="_list"><li>I told you not to do that.</li><li>I like most vegetables but not cabbage.</li><li>"Come and play football, Dad." "Not now, Jamie."</li><li>It was Yuko who said that, not Richard.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">not (adverb.)</div><p class="_txt">used after verbs like "be afraid," "hope," "suspect," etc. in short, negative replies</p><span class="_ex">Usage</span><ul class="_list"><li>"Is he coming with us?" "I hope not."</li><li>"Have you finished?" "I\'m afraid not."</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">not (adverb.)</div><p class="_txt">used to form questions when you think the answer will be "yes," using the short form "n\'t"</p><span class="_ex">Usage</span><ul class="_list"><li>She\'s very pretty, isn\'t she?</li><li>You like cheese, don\'t you?</li></ul></div>',
          description: [
            {
              level: "A1",
              pos: "auxiliary verb",
              guideword: "QUESTIONS/NEGATIVES",
              definition:
                "used with another verb to form questions and negative phrases",
              dictionary_example: [
                "Do you speak English?",
                "Where do you work?",
                "When does your train leave?",
                "Why did you say that?",
                "I don't know.",
                "He doesn't eat meat.",
                "I didn't see her there.",
              ],
              learner_example: [
                "What did you do at [the] party? (Key English Test; A2; Italian)",
              ],
            },
            {
              level: "B1",
              pos: "auxiliary verb",
              guideword: "AVOID REPEATING",
              definition:
                "used to avoid repeating a verb that has just been used",
              dictionary_example: [
                "She runs much faster than he does.",
                "Maria looks much healthier than she did.",
                '"I hate that song!" "So do I."',
                '"I don\'t like the heat." "Neither do I."',
                '"May I join you?" "Please do!"',
              ],
              learner_example: [
                "I like Brad Pitt a lot, and so does she. (Preliminary English Test; B1; Italian)",
              ],
            },
            {
              level: "B2",
              pos: "auxiliary verb",
              guideword: "FOR EMPHASIS",
              definition: "used to give extra force to the main verb",
              dictionary_example: [
                "Do let me know if you need anything.",
                "He does like you - he's just shy.",
              ],
              learner_example: [
                "I real[l]y do love to be a volunteer, to help people as much as I can. (Skills for Life (Level 1); B2; Romanian)",
              ],
            },
            {
              level: "A1",
              pos: "verb",
              guideword: "ACTION",
              definition: "to perform an action",
              dictionary_example: [
                "What should we do?",
                "What are you doing tonight?",
                "Have you done your homework?",
                "We did a lot of talking.",
                "I've got nothing to do.",
              ],
              learner_example: [
                "I have nothing to do. (Key English Test; A2; Chinese)",
              ],
            },
            {
              level: "A2",
              pos: "verb",
              guideword: "MAKE",
              definition: "to make or produce something",
              dictionary_example: [
                "I've done 20 copies of the handout.",
                "That bakery does a really good lemon cake.",
              ],
              learner_example: [
                "[On] any sp[e]cial day [like] Devali they do some sp[e]cial sweet food. (Skills for Life (Entry 2); A2; Arabic)",
              ],
            },
            {
              level: "A2",
              pos: "verb",
              guideword: "HEALTHY/HAPPY",
              definition:
                "used for talking or asking about someone and whether they are healthy, happy, or succeeding",
              dictionary_example: [
                "Hi, how are you doing?",
                '"How is Freya doing?" "She\'s doing really well, thanks."',
              ],
              learner_example: [
                "I'm doing fine. (Preliminary English Test; B1; Estonian)",
              ],
            },
            {
              level: "A2",
              pos: "verb",
              guideword: "SPORT, ETC.",
              definition: "to perform a sports activity",
              dictionary_example: ["She does yoga in her spare time."],
              learner_example: [
                "[At the club,] I can swim, do karate [or] yoga, play soccer, tennis, squash and table-tennis. (Preliminary English Test; B1; Portuguese)",
              ],
            },
          ],
          synonym: [],
        },
        {
          word_idx: 4,
          raw_word: "doesn't",
          cefr: "A1",
          stopword: true,
          word: "not",
          lemma: "not",
          pos: "adv.",
          html_description:
            '<div class="card_content_item" align="left"><div class="_pronoun">do (auxiliary verb.)</div><p class="_txt">used with another verb to form questions and negative phrases</p><span class="_ex">Usage</span><ul class="_list"><li>Do you speak English?</li><li>Where do you work?</li><li>When does your train leave?</li><li>Why did you say that?</li><li>I don\'t know.</li><li>He doesn\'t eat meat.</li><li>I didn\'t see her there.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">do (auxiliary verb.)</div><p class="_txt">used to avoid repeating a verb that has just been used</p><span class="_ex">Usage</span><ul class="_list"><li>She runs much faster than he does.</li><li>Maria looks much healthier than she did.</li><li>"I hate that song!" "So do I."</li><li>"I don\'t like the heat." "Neither do I."</li><li>"May I join you?" "Please do!"</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">do (auxiliary verb.)</div><p class="_txt">used to give extra force to the main verb</p><span class="_ex">Usage</span><ul class="_list"><li>Do let me know if you need anything.</li><li>He does like you - he\'s just shy.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">do (verb.)</div><p class="_txt">to perform an action</p><span class="_ex">Usage</span><ul class="_list"><li>What should we do?</li><li>What are you doing tonight?</li><li>Have you done your homework?</li><li>We did a lot of talking.</li><li>I\'ve got nothing to do.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">do (verb.)</div><p class="_txt">to make or produce something</p><span class="_ex">Usage</span><ul class="_list"><li>I\'ve done 20 copies of the handout.</li><li>That bakery does a really good lemon cake.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">do (verb.)</div><p class="_txt">used for talking or asking about someone and whether they are healthy, happy, or succeeding</p><span class="_ex">Usage</span><ul class="_list"><li>Hi, how are you doing?</li><li>"How is Freya doing?" "She\'s doing really well, thanks."</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">do (verb.)</div><p class="_txt">to perform a sports activity</p><span class="_ex">Usage</span><ul class="_list"><li>She does yoga in her spare time.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">not (adverb.)</div><p class="_txt">used to form a negative phrase after verbs like "be," "can," "have," "\'will," "must," etc., usually used in the short form "n\'t" in speech</p><span class="_ex">Usage</span><ul class="_list"><li>He\'s not fat!</li><li>I won\'t tell her.</li><li>I can\'t go.</li><li>Don\'t you like her?</li><li>It isn\'t difficult.</li><li>I\'m just not interested.</li><li>He\'s not bad-looking!</li><li>He\'s not as tall as his father.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">not (adverb.)</div><p class="_txt">used to give the next word or group of words a negative meaning</p><span class="_ex">Usage</span><ul class="_list"><li>I told you not to do that.</li><li>I like most vegetables but not cabbage.</li><li>"Come and play football, Dad." "Not now, Jamie."</li><li>It was Yuko who said that, not Richard.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">not (adverb.)</div><p class="_txt">used after verbs like "be afraid," "hope," "suspect," etc. in short, negative replies</p><span class="_ex">Usage</span><ul class="_list"><li>"Is he coming with us?" "I hope not."</li><li>"Have you finished?" "I\'m afraid not."</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">not (adverb.)</div><p class="_txt">used to form questions when you think the answer will be "yes," using the short form "n\'t"</p><span class="_ex">Usage</span><ul class="_list"><li>She\'s very pretty, isn\'t she?</li><li>You like cheese, don\'t you?</li></ul></div>',
          description: [
            {
              level: "A1",
              pos: "adverb",
              guideword: "AFTER BE/CAN, ETC.",
              definition:
                'used to form a negative phrase after verbs like "be," "can," "have," "\'will," "must," etc., usually used in the short form "n\'t" in speech',
              dictionary_example: [
                "He's not fat!",
                "I won't tell her.",
                "I can't go.",
                "Don't you like her?",
                "It isn't difficult.",
                "I'm just not interested.",
                "He's not bad-looking!",
                "He's not as tall as his father.",
              ],
              learner_example: [
                "It's not a problem for me. (Skills for Life (Entry 1); A1; French)",
              ],
            },
            {
              level: "A1",
              pos: "adverb",
              guideword: "NEGATIVE WORD/S",
              definition:
                "used to give the next word or group of words a negative meaning",
              dictionary_example: [
                "I told you not to do that.",
                "I like most vegetables but not cabbage.",
                '"Come and play football, Dad." "Not now, Jamie."',
                "It was Yuko who said that, not Richard.",
              ],
              learner_example: [
                "You know I go to college [but] not every day. (Skills for Life (Entry 1); A1; Cantonese)",
              ],
            },
            {
              level: "A2",
              pos: "adverb",
              guideword: "AFTER HOPE/SUSPECT, ETC.",
              definition:
                'used after verbs like "be afraid," "hope," "suspect," etc. in short, negative replies',
              dictionary_example: [
                '"Is he coming with us?" "I hope not."',
                '"Have you finished?" "I\'m afraid not."',
              ],
              learner_example: [""],
            },
            {
              level: "B1",
              pos: "adverb",
              guideword: "QUESTIONS",
              definition:
                'used to form questions when you think the answer will be "yes," using the short form "n\'t"',
              dictionary_example: [
                "She's very pretty, isn't she?",
                "You like cheese, don't you?",
              ],
              learner_example: [
                "I know that you love horror movies, don't you? (Preliminary English Test; B1; Portuguese)",
              ],
            },
          ],
          synonym: [],
        },
        {
          word_idx: 5,
          raw_word: "necessarily",
          cefr: "B2",
          stopword: false,
          word: "necessarily",
          lemma: "necessarily",
          pos: "adv.",
          html_description:
            '<div class="card_content_item" align="left"><div class="_pronoun">necessarily (adverb.)</div><p class="_txt">used in negatives to mean "in every case" or "therefore"</p><span class="_ex">Usage</span><ul class="_list"><li>That\'s not necessarily true.</li><li>The fact that something is cheap doesn\'t necessarily mean it\'s of low quality.</li><li>You may love someone without necessarily wanting to marry them.</li></ul></div>',
          description: [
            {
              level: "B2",
              pos: "adverb",
              guideword: "",
              definition:
                'used in negatives to mean "in every case" or "therefore"',
              dictionary_example: [
                "That's not necessarily true.",
                "The fact that something is cheap doesn't necessarily mean it's of low quality.",
                "You may love someone without necessarily wanting to marry them.",
              ],
              learner_example: [
                "The most important point in a job interview is to give a good impression, which does not necessarily mean how you look. (First Certificate in English; B2; Catalan)",
              ],
            },
          ],
          synonym: [
            {
              word: "needs",
              cefr: "B1.6",
              html_description:
                '<div class="card_content_item" align="left"><div class="_pronoun">needs</div><p class="_txt">the things you must have for a satisfactory life: </p><span class="_ex">Usage</span><ul class="_list">the special needs of the disabled</ul></div>',
            },
            {
              word: "inevitably",
              cefr: "C1.8",
              html_description:
                '<div class="card_content_item" align="left"><div class="_pronoun">inevitably (adverb.)</div><p class="_txt">in a way that cannot be avoided</p><span class="_ex">Usage</span><ul class="_list"><li>Their arguments inevitably end in tears.</li></ul></div>',
            },
            {
              word: "needfully",
              cefr: "unk",
              html_description: "",
            },
          ],
        },
        {
          word_idx: 6,
          raw_word: "mean",
          cefr: "A2",
          stopword: false,
          word: "mean",
          lemma: "mean",
          pos: "v.",
          html_description:
            '<div class="card_content_item" align="left"><div class="_pronoun">mean (verb.)</div><p class="_txt">to have a particular meaning</p><span class="_ex">Usage</span><ul class="_list"><li> What does "gather" mean?</li><li> The red light means stop.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">mean (verb.)</div><p class="_txt">to intend to express a fact or opinion</p><span class="_ex">Usage</span><ul class="_list"><li> I didn\'t mean that as a criticism. </li><li> That\'s what I meant when I said he\'s been acting oddly. </li><li> What exactly do you mean by "old-fashioned"? </li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">mean (verb.)</div><p class="_txt">to have an important emotional effect on someone</p><span class="_ex">Usage</span><ul class="_list"><li>It wasn\'t a valuable picture but it meant a lot to me.</li><li>Possessions mean nothing to him.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">mean (verb.)</div><p class="_txt">to intend</p><span class="_ex">Usage</span><ul class="_list"><li>I think she meant 8 o\u2019clock, although she said 7 o\u2019clock.</li><li>Sorry, I didn\'t mean to interrupt.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">mean (verb.)</div><p class="_txt">to have or need a particular result</p><span class="_ex">Usage</span><ul class="_list"><li>Lower costs mean lower prices.</li><li> These changes will mean better health care for everyone. </li><li>Advances in electronics mean that the technology is already available.</li><li>If we want to catch the 7:30 train, that will mean leaving the house at 6:00.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">mean (adjective.)</div><p class="_txt">unkind or unpleasant</p><span class="_ex">Usage</span><ul class="_list"><li>Stop being so mean to me!</li><li>She just said it to be mean.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">mean (adjective.)</div><p class="_txt">In math, a mean number is the average number you get by adding a group of numbers together and then dividing the result by how many numbers are in the group</p><span class="_ex">Usage</span><ul class="_list"><li>The mean temperature this month was warmer than usual for January.</li></ul></div>',
          description: [
            {
              level: "A2",
              pos: "verb",
              guideword: "MEANING",
              definition: "to have a particular meaning",
              dictionary_example: [
                ' What does "gather" mean?',
                " The red light means stop.",
              ],
              learner_example: [
                "Because, in my opinion, blue means freedom. (Key English Test; A2; Turkish)",
              ],
            },
            {
              level: "B1",
              pos: "verb",
              guideword: "EXPRESS",
              definition: "to intend to express a fact or opinion",
              dictionary_example: [
                " I didn't mean that as a criticism. ",
                " That's what I meant when I said he's been acting oddly. ",
                ' What exactly do you mean by "old-fashioned"? ',
              ],
              learner_example: [
                "Now I know what you mean when you say this island is wonderful. (Preliminary English Test; B1; Swedish)",
              ],
            },
            {
              level: "B1",
              pos: "verb",
              guideword: "HAVE IMPORTANCE",
              definition: "to have an important emotional effect on someone",
              dictionary_example: [
                "It wasn't a valuable picture but it meant a lot to me.",
                "Possessions mean nothing to him.",
              ],
              learner_example: [
                "It's my grandfather's birthday and he means a lot to me. (Preliminary English Test; B1; Spanish)",
              ],
            },
            {
              level: "B1",
              pos: "verb",
              guideword: "INTEND",
              definition: "to intend",
              dictionary_example: [
                "I think she meant 8 o\u2019clock, although she said 7 o\u2019clock.",
                "Sorry, I didn't mean to interrupt.",
              ],
              learner_example: [
                "But I didn't mean to scare you. (Skills for Life (Entry 3); B1; Polish)",
              ],
            },
            {
              level: "B1",
              pos: "verb",
              guideword: "HAVE RESULT",
              definition: "to have or need a particular result",
              dictionary_example: [
                "Lower costs mean lower prices.",
                " These changes will mean better health care for everyone. ",
                "Advances in electronics mean that the technology is already available.",
                "If we want to catch the 7:30 train, that will mean leaving the house at 6:00.",
              ],
              learner_example: [
                "This doesn't mean that you won't be able to enjoy the countryside, in fact most of these cities are surrounded by nature, so you'll have wonderful views. (Preliminary English Test; B1; Italian)",
              ],
            },
            {
              level: "B2",
              pos: "adjective",
              guideword: "NOT KIND",
              definition: "unkind or unpleasant",
              dictionary_example: [
                "Stop being so mean to me!",
                "She just said it to be mean.",
              ],
              learner_example: [
                "On the other hand people, when driving a car, can be very mean and wicked, and they sure don't have a bit of respect for the next man. (First Certificate in English; B2; Portuguese)",
              ],
            },
            {
              level: "C2",
              pos: "adjective",
              guideword: "AVERAGE",
              definition:
                "In math, a mean number is the average number you get by adding a group of numbers together and then dividing the result by how many numbers are in the group",
              dictionary_example: [
                "The mean temperature this month was warmer than usual for January.",
              ],
              learner_example: [
                "Better living conditions and significant advances in medicine have greatly contributed to an increase in the mean age of death and a decrease in deaths at birth. (Certificate of Proficiency in English; C2; Portuguese)",
              ],
            },
          ],
          synonym: [
            {
              word: "think",
              cefr: "A1.0",
              html_description:
                '<div class="card_content_item" align="left"><div class="_pronoun">think (verb.)</div><p class="_txt">to believe that something is true, or to expect that something will happen, although you are not sure</p><span class="_ex">Usage</span><ul class="_list"><li> I think she\'s called Joanna. </li><li> "Does this train stop at Oxford?" "Yes, I think so." </li><li> I never thought (that) I would see Steven again. </li><li>I think we\'ve met before.</li><li> Do you think it\'s going to rain? </li><li> I don\'t think Emma will get the job.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">think (verb.)</div><p class="_txt">to have an opinion about something or someone</p><span class="_ex">Usage</span><ul class="_list"><li> What did you think of the movie? </li><li> What do you think about modern art? </li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">think (verb.)</div><p class="_txt">to consider doing something</p><span class="_ex">Usage</span><ul class="_list"><li>I\'m thinking of taking up running.</li><li>I think (that) I\'ll go swimming after lunch.</li><li>I\'m thinking about buying a new car.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">think (verb.)</div><p class="_txt">to use the brain to plan something, solve a problem, understand a situation, etc.</p><span class="_ex">Usage</span><ul class="_list"><li> He thought for a few seconds before answering. </li><li> You should think about where you want to live. </li><li>I\'m so sorry I upset you - I just wasn\'t thinking.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">think (verb.)</div><p class="_txt">to remember someone or something</p><span class="_ex">Usage</span><ul class="_list"><li>I was just thinking about you when you phoned.</li><li>I often think of our time in Egypt.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">think (verb.)</div><p class="_txt">to consider a person\'s needs or wishes</p><span class="_ex">Usage</span><ul class="_list"><li>She\'s always thinking of others.</li></ul></div>',
            },
            {
              word: "intend",
              cefr: "B1.7",
              html_description:
                '<div class="card_content_item" align="left"><div class="_pronoun">intend (verb.)</div><p class="_txt">to have as a plan or purpose</p><span class="_ex">Usage</span><ul class="_list"><li>We intend to go to Australia next year.</li><li>Somehow I offended him, which wasn\'t what I\'d intended.</li><li>I don\'t think she intended me to hear the remark.</li><li>It was intended as a compliment, honestly!</li></ul></div>',
            },
            {
              word: "beggarly",
              cefr: "B2.8",
              html_description:
                '<div class="card_content_item" align="left"><div class="_pronoun">beggarly</div><p class="_txt">small in amount and not at all generous: </p><span class="_ex">Usage</span><ul class="_list">The council voted to give the new project a beggarly amount of money.</ul></div>',
            },
            {
              word: "entail",
              cefr: "C2.5",
              html_description:
                '<div class="card_content_item" align="left"><div class="_pronoun">entail</div><p class="_txt">to make something necessary, or to involve something: </p><span class="_ex">Usage</span><ul class="_list">Such a large investment inevitably entails some risk.</ul></div>',
            },
            {
              word: "bastardly",
              cefr: "unk",
              html_description: "",
            },
          ],
        },
        {
          word_idx: 7,
          raw_word: "that",
          cefr: "A2",
          stopword: true,
          word: "that",
          lemma: "that",
          pos: "conj.",
          html_description:
            '<div class="card_content_item" align="left"><div class="_pronoun">that (determiner.)</div><p class="_txt">used to refer to something or someone that can be seen or pointed to</p><span class="_ex">Usage</span><ul class="_list"><li>Did you know that woman in the post office?</li><li>How much are those shoes?</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">that (determiner.)</div><p class="_txt">used to refer to something or someone that has already been talked about or seen</p><span class="_ex">Usage</span><ul class="_list"><li>Where\'s that pen gone?</li><li>She lives in that house by the bus station.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">that (conjunction.)</div><p class="_txt">used after some verbs, nouns, and adjectives to introduce a new part of a sentence</p><span class="_ex">Usage</span><ul class="_list"><li>She said (that) she\'d collect it for me after work.</li><li>Is it true (that) she\'s gone back to teaching?</li><li>We\'ll be there at about 7.30, provided/providing (that) there\'s a suitable train.</li><li>It was so dark (that) I couldn\'t see anything.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">that (pronoun.)</div><p class="_txt">used to refer to something that can be seen or pointed to</p><span class="_ex">Usage</span><ul class="_list"><li> What\'s that in the corner?</li><li>I\'d like some of those.</li><li> That looks heavy.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">that (pronoun.)</div><p class="_txt">used to refer to something that has already been talked about or seen</p><span class="_ex">Usage</span><ul class="_list"><li>If you do that, you\'ll be sorry.</li><li>I don\'t think you should put up with that.</li><li>You can\'t wear those to a wedding.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">that (pronoun.)</div><p class="_txt">used to make a connection with an earlier statement</p><span class="_ex">Usage</span><ul class="_list"><li>My usual train was cancelled. That\'s why I\'m so late.</li><li>She tricked him, and that\'s what really upset him.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">that (pronoun.)</div><p class="_txt">used at the beginning of a relative clause to show what thing is being referred to</p><span class="_ex">Usage</span><ul class="_list"><li>They liked the restaurant that they ate lunch at.</li><li>I brought you the book that you wanted.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">that (pronoun.)</div><p class="_txt">used to refer to events or experiences in the past</p><span class="_ex">Usage</span><ul class="_list"><li>That was before we had a car.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">that (pronoun.)</div><p class="_txt">used to express a reaction to something</p><span class="_ex">Usage</span><ul class="_list"><li>I didn\'t know she\'d been so ill. That\'s terrible.</li><li>Turn the engine on, then put the car in gear. That\'s right.</li><li>Smile for the camera. That\'s more like it.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">that (adverb.)</div><p class="_txt">used when describing the size, amount, or state of something or someone</p><span class="_ex">Usage</span><ul class="_list"><li>She\'s too young to walk that far.</li><li>It wasn\'t (all) that good.</li></ul></div>',
          description: [
            {
              level: "A1",
              pos: "determiner",
              guideword: "CAN BE SEEN",
              definition:
                "used to refer to something or someone that can be seen or pointed to",
              dictionary_example: [
                "Did you know that woman in the post office?",
                "How much are those shoes?",
              ],
              learner_example: [""],
            },
            {
              level: "A1",
              pos: "determiner",
              guideword: "ALREADY MENTIONED",
              definition:
                "used to refer to something or someone that has already been talked about or seen",
              dictionary_example: [
                "Where's that pen gone?",
                "She lives in that house by the bus station.",
              ],
              learner_example: [
                "I like that place be[cause] I like swim[m]ing in [the] sea. (Skills for Life (Entry 1); A1; Polish)",
              ],
            },
            {
              level: "A2",
              pos: "conjunction",
              guideword: "",
              definition:
                "used after some verbs, nouns, and adjectives to introduce a new part of a sentence",
              dictionary_example: [
                "She said (that) she'd collect it for me after work.",
                "Is it true (that) she's gone back to teaching?",
                "We'll be there at about 7.30, provided/providing (that) there's a suitable train.",
                "It was so dark (that) I couldn't see anything.",
              ],
              learner_example: [
                "It's great that you are coming next week. (Key English Test; A2; Portuguese)",
              ],
            },
            {
              level: "A1",
              pos: "pronoun",
              guideword: "CAN BE SEEN",
              definition:
                "used to refer to something that can be seen or pointed to",
              dictionary_example: [
                " What's that in the corner?",
                "I'd like some of those.",
                " That looks heavy.",
              ],
              learner_example: [""],
            },
            {
              level: "A1",
              pos: "pronoun",
              guideword: "ALREADY MENTIONED",
              definition:
                "used to refer to something that has already been talked about or seen",
              dictionary_example: [
                "If you do that, you'll be sorry.",
                "I don't think you should put up with that.",
                "You can't wear those to a wedding.",
              ],
              learner_example: [
                "After that we have a break. (Skills for Life (Entry 1); A1; Polish)",
              ],
            },
            {
              level: "A2",
              pos: "pronoun",
              guideword: "REFERRING BACK",
              definition: "used to make a connection with an earlier statement",
              dictionary_example: [
                "My usual train was cancelled. That's why I'm so late.",
                "She tricked him, and that's what really upset him.",
              ],
              learner_example: [
                "I decided [not to] play football any more! That is why I want to sell them. (Key English Test; A2; Turkish)",
              ],
            },
            {
              level: "A2",
              pos: "pronoun",
              guideword: "REFERRING TO SOMETHING",
              definition:
                "used at the beginning of a relative clause to show what thing is being referred to",
              dictionary_example: [
                "They liked the restaurant that they ate lunch at.",
                "I brought you the book that you wanted.",
              ],
              learner_example: [
                "I want to sell my armchair that is 50 years old. (Key English Test; A2; Italian)",
              ],
            },
            {
              level: "B2",
              pos: "pronoun",
              guideword: "PAST",
              definition: "used to refer to events or experiences in the past",
              dictionary_example: ["That was before we had a car."],
              learner_example: [
                "That was when I went to live in Barcelona by myself in a student residence. (First Certificate in English; B2; Catalan)",
              ],
            },
            {
              level: "B2",
              pos: "pronoun",
              guideword: "REACTION",
              definition: "used to express a reaction to something",
              dictionary_example: [
                "I didn't know she'd been so ill. That's terrible.",
                "Turn the engine on, then put the car in gear. That's right.",
                "Smile for the camera. That's more like it.",
              ],
              learner_example: [""],
            },
            {
              level: "B2",
              pos: "adverb",
              guideword: "",
              definition:
                "used when describing the size, amount, or state of something or someone",
              dictionary_example: [
                "She's too young to walk that far.",
                "It wasn't (all) that good.",
              ],
              learner_example: [
                "My English isn't that bad, actually I have been taught English in school for six years. (First Certificate in English; B2; Dutch)",
              ],
            },
          ],
          synonym: [],
        },
        {
          word_idx: 8,
          raw_word: "the",
          cefr: "A1",
          stopword: true,
          word: "the",
          lemma: "the",
          pos: "det.",
          html_description:
            '<div class="card_content_item" align="left"><div class="_pronoun">the (determiner.)</div><p class="_txt">used before nouns to refer to particular things or people that have already been talked about or are already known</p><span class="_ex">Usage</span><ul class="_list"><li>I bought a shirt and some shoes. The shirt was expensive, but the shoes weren\'t.</li><li>Could you pass the salt, please?</li><li>I\'ll pick you up at the station.</li><li>I really enjoyed the book I just read.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">the (determiner.)</div><p class="_txt">used before nouns when only one of something exists</p><span class="_ex">Usage</span><ul class="_list"><li>Have you seen the Eiffel Tower?</li><li>What will happen in the future?</li><li>She\'s traveling around the world.</li><li>They live in the north of Spain.</li><li>Ed Koch was for many years the mayor of New York.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">the (determiner.)</div><p class="_txt">used before some nouns that refer to place when you want to mention that type of place, without showing exactly which example of the place you mean</p><span class="_ex">Usage</span><ul class="_list"><li>We spent all day at the beach.</li><li>Shall we go to the movies this evening?</li><li>I must go to the bank.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">the (determiner.)</div><p class="_txt">used before superlatives and other words, such as \'first\' or \'only\' or numbers showing something\'s position in a list, which refer to only one thing or person</p><span class="_ex">Usage</span><ul class="_list"><li>That was one of the best movies I\'ve ever seen.</li><li>What\'s the highest mountain in Europe?</li><li>I shall never forget the first time we met.</li><li>You\'re the fifth person to ask me that question.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">the (determiner.)</div><p class="_txt">used before numbers that refer to periods of ten years</p><span class="_ex">Usage</span><ul class="_list"><li>the sixties</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">the (determiner.)</div><p class="_txt">used instead of a possessive adjective such as "your," "her," or "my"</p><span class="_ex">Usage</span><ul class="_list"><li>He held her by the arm.</li><li>Where did I park the car?</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">the (determiner.)</div><p class="_txt">used before each of two adjectives or adverbs to show how one thing changes depending on another</p><span class="_ex">Usage</span><ul class="_list"><li> The longer we live here, the more we like it. </li></ul></div>',
          description: [
            {
              level: "A1",
              pos: "determiner",
              guideword: "PARTICULAR",
              definition:
                "used before nouns to refer to particular things or people that have already been talked about or are already known",
              dictionary_example: [
                "I bought a shirt and some shoes. The shirt was expensive, but the shoes weren't.",
                "Could you pass the salt, please?",
                "I'll pick you up at the station.",
                "I really enjoyed the book I just read.",
              ],
              learner_example: [
                "I like fresh food from my garden[.] I like [a]lso [to] work in the garden. (Skills for Life (Entry 1); A1; Polish)",
              ],
            },
            {
              level: "A1",
              pos: "determiner",
              guideword: "ONLY ONE",
              definition: "used before nouns when only one of something exists",
              dictionary_example: [
                "Have you seen the Eiffel Tower?",
                "What will happen in the future?",
                "She's traveling around the world.",
                "They live in the north of Spain.",
                "Ed Koch was for many years the mayor of New York.",
              ],
              learner_example: [
                "That day is [also] the Chinese New Year. (Skills for Life (Entry 1); A1; Chinese)",
              ],
            },
            {
              level: "A1",
              pos: "determiner",
              guideword: "PLACE",
              definition:
                "used before some nouns that refer to place when you want to mention that type of place, without showing exactly which example of the place you mean",
              dictionary_example: [
                "We spent all day at the beach.",
                "Shall we go to the movies this evening?",
                "I must go to the bank.",
              ],
              learner_example: [
                "I like to go to swimming and go to the beach. (Skills for Life (Entry 1); A1; Thai)",
              ],
            },
            {
              level: "A2",
              pos: "determiner",
              guideword: "BEFORE SUPERLATIVES, ETC.",
              definition:
                "used before superlatives and other words, such as 'first' or 'only' or numbers showing something's position in a list, which refer to only one thing or person",
              dictionary_example: [
                "That was one of the best movies I've ever seen.",
                "What's the highest mountain in Europe?",
                "I shall never forget the first time we met.",
                "You're the fifth person to ask me that question.",
              ],
              learner_example: [
                "The best present I have ever got was a car from my grandma. (Key English Test; A2; Portuguese)",
              ],
            },
            {
              level: "B2",
              pos: "determiner",
              guideword: "TIME",
              definition:
                "used before numbers that refer to periods of ten years",
              dictionary_example: ["the sixties"],
              learner_example: [
                "For example, people in the 1950s who didn't have computers are likely to have had difficulty in checking information, booking tickets, and communicating with each other. (First Certificate in English; B2; Korean)",
              ],
            },
            {
              level: "B1",
              pos: "determiner",
              guideword: "YOUR",
              definition:
                'used instead of a possessive adjective such as "your," "her," or "my"',
              dictionary_example: [
                "He held her by the arm.",
                "Where did I park the car?",
              ],
              learner_example: [
                "There [are] a lot of people, and there are a lot of cars, so you would have problems find[ing] a place to park the car. (Preliminary English Test; B1; Spanish)",
              ],
            },
            {
              level: "B2",
              pos: "determiner",
              guideword: "COMPARE",
              definition:
                "used before each of two adjectives or adverbs to show how one thing changes depending on another",
              dictionary_example: [
                " The longer we live here, the more we like it. ",
              ],
              learner_example: [
                "In many cases, the more things you learn, the less things you know. (First Certificate in English; B2; French)",
              ],
            },
          ],
          synonym: [],
        },
        {
          word_idx: 9,
          raw_word: "authorities",
          cefr: "B2",
          stopword: false,
          word: "authorities",
          lemma: "authority",
          pos: "n.",
          html_description:
            '<div class="card_content_item" align="left"><div class="_pronoun">authority (noun.)</div><p class="_txt">the power to make decisions or to control other people</p><span class="_ex">Usage</span><ul class="_list"><li>The United Nations has used its authority to restore peace in the area.</li><li>We need to get the support of someone in authority.</li><li>They have the authority to examine the company\'s records.</li><li>The problem is that teachers feel they no longer have authority over their pupils.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">authority (noun.)</div><p class="_txt">someone with official power to control a particular type of activity</p><span class="_ex">Usage</span><ul class="_list"><li>local/health/school autorities</li></ul></div>',
          description: [
            {
              level: "B2",
              pos: "noun",
              guideword: "POWER",
              definition:
                "the power to make decisions or to control other people",
              dictionary_example: [
                "The United Nations has used its authority to restore peace in the area.",
                "We need to get the support of someone in authority.",
                "They have the authority to examine the company's records.",
                "The problem is that teachers feel they no longer have authority over their pupils.",
              ],
              learner_example: [
                "Their parents have lost almost all their authority. (First Certificate in English; B2; French)",
              ],
            },
            {
              level: "C1",
              pos: "noun",
              guideword: "OFFICIAL",
              definition:
                "someone with official power to control a particular type of activity",
              dictionary_example: ["local/health/school autorities"],
              learner_example: [
                "Air pollution and traffic congestions are major issues that have been raised by local authorities very recently. (International English Language Testing System; C1; French)",
              ],
            },
          ],
          synonym: [
            {
              word: "government",
              cefr: "B1.3",
              html_description:
                '<div class="card_content_item" align="left"><div class="_pronoun">government (noun.)</div><p class="_txt">the group of people who officially control a country</p><span class="_ex">Usage</span><ul class="_list"><li>The government has recently cut taxes.</li><li>senior government officials</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">government (noun.)</div><p class="_txt">the method or process of governing a country</p><span class="_ex">Usage</span><ul class="_list"><li>a new style of government</li></ul></div>',
            },
            {
              word: "sureness",
              cefr: "B2.4",
              html_description:
                '<div class="card_content_item" align="left"><div class="_pronoun">sureness</div><p class="_txt">confidence and control: </p><span class="_ex">Usage</span><ul class="_list">We admired the sureness of the orchestra\'s playing.</ul></div>',
            },
            {
              word: "authorization",
              cefr: "C1.8",
              html_description:
                '<div class="card_content_item" align="left"><div class="_pronoun">authorization</div><p class="_txt">official permission for something to happen, or the act of giving someone official permission to do something: </p><span class="_ex">Usage</span><ul class="_list">Medical records cannot be disclosed without authorization from the patient.</ul></div>',
            },
            {
              word: "dominance",
              cefr: "C2.8",
              html_description:
                '<div class="card_content_item" align="left"><div class="_pronoun">dominance (noun.)</div><p class="_txt">power, influence, and control</p><span class="_ex">Usage</span><ul class="_list"><li>the company\'s dominance in the software industry</li></ul></div>',
            },
            {
              word: "sanction",
              cefr: "C2.9",
              html_description:
                '<div class="card_content_item" align="left"><div class="_pronoun">sanction (noun.)</div><p class="_txt">a punishment for not obeying a rule or a law</p><span class="_ex">Usage</span><ul class="_list"><li> economic/trade sanctions against a country</li></ul></div>',
            },
          ],
        },
        {
          word_idx: 10,
          raw_word: "of",
          cefr: "A1",
          stopword: true,
          word: "of",
          lemma: "of",
          pos: "prep.",
          html_description:
            '<div class="card_content_item" align="left"><div class="_pronoun">of (preposition.)</div><p class="_txt">belonging or relating to someone or something</p><span class="_ex">Usage</span><ul class="_list"><li>a friend of mine</li><li>the color of her hair</li><li>part of the problem</li><li>employees of the company</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">of (preposition.)</div><p class="_txt">used after words that show an amount</p><span class="_ex">Usage</span><ul class="_list"><li>a pound of potatoes</li><li>loads of food</li><li>hundreds of people</li><li>most of them</li><li>none of them</li><li>both of us</li><li>a third of all people</li><li>a drop of rain</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">of (preposition.)</div><p class="_txt">containing</p><span class="_ex">Usage</span><ul class="_list"><li>a bag of popcorn</li><li>a bottle of water</li><li>a book of short stories</li><li>bags of groceries</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">of (preposition.)</div><p class="_txt">used with numbers, ages and dates</p><span class="_ex">Usage</span><ul class="_list"><li>an essay of 500 words</li><li>a boy of six</li><li>the 14th of February 2005</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">of (preposition.)</div><p class="_txt">used in expressions showing position</p><span class="_ex">Usage</span><ul class="_list"><li>the top of his head</li><li>the back of your dress</li><li>on the corner of the street</li><li>the front of the line</li><li>They live in a suburb west of Toronto.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">of (preposition.)</div><p class="_txt">showing someone or something</p><span class="_ex">Usage</span><ul class="_list"><li>a map of downtown</li><li>a photo of my family</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">of (preposition.)</div><p class="_txt">used when comparing related things</p><span class="_ex">Usage</span><ul class="_list"><li>Worst of all was the food!</li><li>He\'s the oldest of the three brothers.</li><li>I think that of all his films, this one is my favorite.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">of (preposition.)</div><p class="_txt">used to show who or what does something</p><span class="_ex">Usage</span><ul class="_list"><li>the works of Shakespeare</li><li>the arrival of the rainy season</li><li>the music of Spain</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">of (preposition.)</div><p class="_txt">showing a reason or cause</p><span class="_ex">Usage</span><ul class="_list"><li>He died of cancer.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">of (preposition.)</div><p class="_txt">used after an adjective when judging someone\'s behavior</p><span class="_ex">Usage</span><ul class="_list"><li>It was very nice of you to think of us.</li><li>It was a bit mean of him to say that!</li><li>Thank you so much for my present. How thoughtful of you.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">of (preposition.)</div><p class="_txt">about or relating to</p><span class="_ex">Usage</span><ul class="_list"><li>Speaking of Elizabeth, here she is.</li><li>Let us consider the events of the last five months.</li><li>We know very little of her childhood.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">of (preposition.)</div><p class="_txt">used to say "before" the hour when you are saying what time it is</p><span class="_ex">Usage</span><ul class="_list"><li>It\'s ten of five.</li></ul></div>',
          description: [
            {
              level: "A1",
              pos: "preposition",
              guideword: "BELONG",
              definition: "belonging or relating to someone or something",
              dictionary_example: [
                "a friend of mine",
                "the color of her hair",
                "part of the problem",
                "employees of the company",
              ],
              learner_example: [
                "The name of my friend is Maria. (Skills for Life (Entry 1); A1; Arabic)",
              ],
            },
            {
              level: "A1",
              pos: "preposition",
              guideword: "AMOUNT",
              definition: "used after words that show an amount",
              dictionary_example: [
                "a pound of potatoes",
                "loads of food",
                "hundreds of people",
                "most of them",
                "none of them",
                "both of us",
                "a third of all people",
                "a drop of rain",
              ],
              learner_example: [
                "She has a lot of flowers in her room. (Skills for Life (Entry 1); A1; French)",
              ],
            },
            {
              level: "A1",
              pos: "preposition",
              guideword: "CONTAINING",
              definition: "containing",
              dictionary_example: [
                "a bag of popcorn",
                "a bottle of water",
                "a book of short stories",
                "bags of groceries",
              ],
              learner_example: [
                "I like cups of tea, I like noodles, but I don't like beef. (Skills for Life (Entry 1); A1; Mandarin)",
              ],
            },
            {
              level: "A1",
              pos: "preposition",
              guideword: "NUMBER",
              definition: "used with numbers, ages and dates",
              dictionary_example: [
                "an essay of 500 words",
                "a boy of six",
                "the 14th of February 2005",
              ],
              learner_example: [
                "The class started [on] the 2nd of June at half past five. (Key English Test; A2; Spanish)",
              ],
            },
            {
              level: "A2",
              pos: "preposition",
              guideword: "POSITION",
              definition: "used in expressions showing position",
              dictionary_example: [
                "the top of his head",
                "the back of your dress",
                "on the corner of the street",
                "the front of the line",
                "They live in a suburb west of Toronto.",
              ],
              learner_example: [
                "First you [go] pas[t] [a] big supermarket on the corner of my street. (Skills for Life (Entry 2); A2; Polish)",
              ],
            },
            {
              level: "A2",
              pos: "preposition",
              guideword: "SHOW",
              definition: "showing someone or something",
              dictionary_example: ["a map of downtown", "a photo of my family"],
              learner_example: [
                "Tony gave me a photo of Henry. (Key English Test; A2; Chinese)",
              ],
            },
            {
              level: "A2",
              pos: "preposition",
              guideword: "COMPARING",
              definition: "used when comparing related things",
              dictionary_example: [
                "Worst of all was the food!",
                "He's the oldest of the three brothers.",
                "I think that of all his films, this one is my favorite.",
              ],
              learner_example: [
                "The best of all was a necklace. (Key English Test; A2; Russian)",
              ],
            },
            {
              level: "B1",
              pos: "preposition",
              guideword: "WHO/WHAT",
              definition: "used to show who or what does something",
              dictionary_example: [
                "the works of Shakespeare",
                "the arrival of the rainy season",
                "the music of Spain",
              ],
              learner_example: [
                'They often cover the music of "The Beatles" or "The Rolling Stones". (Preliminary English Test; B1; German)',
              ],
            },
            {
              level: "B1",
              pos: "preposition",
              guideword: "CAUSE",
              definition: "showing a reason or cause",
              dictionary_example: ["He died of cancer."],
              learner_example: [
                "But, three months later, after walk[ing] in the rain he died of pneumonia. (Preliminary English Test; B1; Portuguese)",
              ],
            },
            {
              level: "B2",
              pos: "preposition",
              guideword: "JUDGMENT",
              definition:
                "used after an adjective when judging someone's behavior",
              dictionary_example: [
                "It was very nice of you to think of us.",
                "It was a bit mean of him to say that!",
                "Thank you so much for my present. How thoughtful of you.",
              ],
              learner_example: [
                "It was most thoughtful of you to invite us and I warmly appreciate your hospitality. (First Certificate in English; B2; Polish)",
              ],
            },
            {
              level: "C1",
              pos: "preposition",
              guideword: "RELATING TO",
              definition: "about or relating to",
              dictionary_example: [
                "Speaking of Elizabeth, here she is.",
                "Let us consider the events of the last five months.",
                "We know very little of her childhood.",
              ],
              learner_example: [
                "Speaking of sightseeing, many thought that visiting other sights - like the Folk Museum - should not be compulsory. (Certificate in Advanced English; C1; Danish)",
              ],
            },
            {
              level: "C1",
              pos: "preposition",
              guideword: "BEFORE",
              definition:
                'used to say "before" the hour when you are saying what time it is',
              dictionary_example: ["It's ten of five."],
              learner_example: [""],
            },
          ],
          synonym: [],
        },
        {
          word_idx: 11,
          raw_word: "such",
          cefr: "B2",
          stopword: true,
          word: "such",
          lemma: "such",
          pos: "det.",
          html_description:
            '<div class="card_content_item" align="left"><div class="_pronoun">such (determiner.)</div><p class="_txt">used to refer to something or someone that you were just talking about, or something or someone of that type</p><span class="_ex">Usage</span><ul class="_list"><li>It\'s difficult to know how to treat such cases.</li><li>I tried to tell her in such a way that she wouldn\'t be upset.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">such (pronoun.)</div><p class="_txt">used to refer to something or someone that you were just talking about, or something or someone of that type</p><span class="_ex">Usage</span><ul class="_list"><li>Our lunch was such that we don\'t really need an evening meal.</li><li>He is an employee of this company, and should be treated as such.</li><li>His circumstances are such that he has no need to work.</li></ul></div>',
          description: [
            {
              level: "B2",
              pos: "determiner",
              guideword: "",
              definition:
                "used to refer to something or someone that you were just talking about, or something or someone of that type",
              dictionary_example: [
                "It's difficult to know how to treat such cases.",
                "I tried to tell her in such a way that she wouldn't be upset.",
              ],
              learner_example: [
                "Moreover we can plan different events where we invite people who aren't members [and] we can use such events [to bring in] new members. (First Certificate in English; B2; German)",
              ],
            },
            {
              level: "C1",
              pos: "pronoun",
              guideword: "",
              definition:
                "used to refer to something or someone that you were just talking about, or something or someone of that type",
              dictionary_example: [
                "Our lunch was such that we don't really need an evening meal.",
                "He is an employee of this company, and should be treated as such.",
                "His circumstances are such that he has no need to work.",
              ],
              learner_example: [
                "In my opinion the Microwave oven is the eight[h] wonder of the world and should be celebrated as such. (Certificate of Proficiency in English; C2; Swedish)",
              ],
            },
          ],
          synonym: [],
        },
        {
          word_idx: 12,
          raw_word: "corrupt",
          cefr: "C1",
          stopword: false,
          word: "corrupt",
          lemma: "corrupt",
          pos: "adj.",
          html_description:
            '<div class="card_content_item" align="left"><div class="_pronoun">corrupt (adjective.)</div><p class="_txt">dishonest or illegal</p><span class="_ex">Usage</span><ul class="_list"><li> a corrupt government </li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">corrupt (verb.)</div><p class="_txt">to make someone or something become dishonest or immoral</p><span class="_ex">Usage</span><ul class="_list"><li> He became corrupted by power and money. </li></ul></div>',
          description: [
            {
              level: "C1",
              pos: "adjective",
              guideword: "",
              definition: "dishonest or illegal",
              dictionary_example: [" a corrupt government "],
              learner_example: [
                "I am not saying he is corrupt - I don't believe that - but he com[m]ands many corrupt people. (Certificate in Advanced English; C1; Portuguese)",
              ],
            },
            {
              level: "C1",
              pos: "verb",
              guideword: "",
              definition:
                "to make someone or something become dishonest or immoral",
              dictionary_example: [" He became corrupted by power and money. "],
              learner_example: [
                "Maybe wealth can corrupt people's mind[s] and make people weak. (International English Language Testing System; C1; Chinese)",
              ],
            },
          ],
          synonym: [
            {
              word: "debase",
              cefr: "B2.7",
              html_description:
                '<div class="card_content_item" align="left"><div class="_pronoun">debase</div><p class="_txt">to reduce the quality or value of something: </p><span class="_ex">Usage</span><ul class="_list">Some argue that money has debased football.</ul></div>',
            },
            {
              word: "sully",
              cefr: "C1.2",
              html_description:
                '<div class="card_content_item" align="left"><div class="_pronoun">sully</div><p class="_txt">to spoil something that is pure or someone\'s perfect reputation</p><span class="_ex">Usage</span><ul class="_list">His reputation, he said, had been unfairly sullied by half-truths and innuendos.</ul></div>',
            },
            {
              word: "defile",
              cefr: "C1.2",
              html_description:
                '<div class="card_content_item" align="left"><div class="_pronoun">defile</div><p class="_txt">to spoil something or someone so that that thing or person is less beautiful or pure: </p><span class="_ex">Usage</span><ul class="_list">It\'s a shame that such a beautiful area has been defiled by a rubbish dump.</ul></div>',
            },
            {
              word: "taint",
              cefr: "C1.9",
              html_description:
                '<div class="card_content_item" align="left"><div class="_pronoun">taint</div><p class="_txt">to spoil something or give it an unpleasant quality: </p><span class="_ex">Usage</span><ul class="_list">His reputation was permanently tainted by the financial scandal.</ul></div>',
            },
            {
              word: "subvert",
              cefr: "C2.2",
              html_description:
                '<div class="card_content_item" align="left"><div class="_pronoun">subvert</div><p class="_txt">to try to destroy or damage something, especially an established political system: </p><span class="_ex">Usage</span><ul class="_list">The rebel army is attempting to subvert the government.</ul></div>',
            },
          ],
        },
        {
          word_idx: 13,
          raw_word: "nations",
          cefr: "B2",
          stopword: false,
          word: "nations",
          lemma: "nation",
          pos: "n.",
          html_description:
            '<div class="card_content_item" align="left"><div class="_pronoun">nation (noun.)</div><p class="_txt">a country or the people living in a country</p><span class="_ex">Usage</span><ul class="_list"><li>the industrialized nations</li><li>All the nations of the world will be represented at the conference.</li><li>Practically the whole nation watched the ceremony on television.</li></ul></div>',
          description: [
            {
              level: "B2",
              pos: "noun",
              guideword: "",
              definition: "a country or the people living in a country",
              dictionary_example: [
                "the industrialized nations",
                "All the nations of the world will be represented at the conference.",
                "Practically the whole nation watched the ceremony on television.",
              ],
              learner_example: [
                "At that time, everyone should have devoted their life to the nation. (First Certificate in English; B2; Japanese)",
              ],
            },
          ],
          synonym: [
            {
              word: "country",
              cefr: "A1.4",
              html_description:
                '<div class="card_content_item" align="left"><div class="_pronoun">country (noun.)</div><p class="_txt">an area of land that has its own government, army, etc.</p><span class="_ex">Usage</span><ul class="_list"><li>Which is the largest country in South America?</li><li>Sri Lanka is my native country, but I\'ve been living in Belgium for the past five years.</li><li>The climate is cooler in the eastern part of the country.</li></ul></div>',
            },
            {
              word: "state",
              cefr: "B1.1",
              html_description:
                '<div class="card_content_item" align="left"><div class="_pronoun">state (noun.)</div><p class="_txt">the condition that something or someone is in</p><span class="_ex">Usage</span><ul class="_list"><li>The building is in a terrible state.</li><li>After the accident I was in a state of shock.</li><li>The kitchen was in its original state, with a 1920s sink and stove.</li><li>It\'s a sad state of affairs when our rivers are so endangered.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">state (noun.)</div><p class="_txt">a part of a large country with its own government, such as in Brazil, Mexico, or the US</p><span class="_ex">Usage</span><ul class="_list"><li>Alaska is the largest state in the US.</li><li>Representatives are elected from each state.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">state (noun.)</div><p class="_txt">a country or its government</p><span class="_ex">Usage</span><ul class="_list"><li>The drought is worst in the central African states.</li><li>Britain is one of the member states of the European Union.</li><li>The government was determined to reduce the number of state-owned industries.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">state (verb.)</div><p class="_txt">to officially say or write something</p><span class="_ex">Usage</span><ul class="_list"><li>Our warranty clearly states the limits of our liability.</li><li>His will states (that) the property is to be sold.</li><li>Please state why you are applying for this grant.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">state (adjective.)</div><p class="_txt">provided, created, or done by a state in a country, or by the government of a country</p><span class="_ex">Usage</span><ul class="_list"><li>a state government/legislature/law</li><li>a state school/college/university</li><li>state control</li><li>state funding</li></ul></div>',
            },
            {
              word: "land",
              cefr: "B1.1",
              html_description:
                '<div class="card_content_item" align="left"><div class="_pronoun">land (noun.)</div><p class="_txt">an area of ground, especially when used for a particular purpose such as farming or building</p><span class="_ex">Usage</span><ul class="_list"><li>This land here is good for growing potatoes.</li><li>We want to buy a plot of land to build a house.</li><li>They just bought 150 acres of land in Idaho.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">land (noun.)</div><p class="_txt">the surface of the earth that is not sea</p><span class="_ex">Usage</span><ul class="_list"><li>It is cheaper to drill for oil on land than at sea.</li><li>The treaty led to a dramatic reduction in the number of land-based missiles.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">land (noun.)</div><p class="_txt">a country</p><span class="_ex">Usage</span><ul class="_list"><li>Ireland was my grandmother\u2019s native land.</li><li>a land of ice and snow</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">land (verb.)</div><p class="_txt">to arrive at a place in a plane or a boat, or to make a plane or a boat reach the land</p><span class="_ex">Usage</span><ul class="_list"><li>We should land in Madrid at 7:00 a.m.</li><li>The pilot said we would land in about 20 minutes.</li><li>We\u2019d been sailing for three weeks by the time we landed at Miami.</li><li>We landed at Port Said in the early evening.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">land (verb.)</div><p class="_txt">to get or achieve something, usually something good</p><span class="_ex">Usage</span><ul class="_list"><li>He\'s just landed a new job.</li></ul></div>',
            },
            {
              word: "nation",
              cefr: "B2.3",
              html_description:
                '<div class="card_content_item" align="left"><div class="_pronoun">nation (noun.)</div><p class="_txt">a country or the people living in a country</p><span class="_ex">Usage</span><ul class="_list"><li>the industrialized nations</li><li>All the nations of the world will be represented at the conference.</li><li>Practically the whole nation watched the ceremony on television.</li></ul></div>',
            },
            {
              word: "commonwealth",
              cefr: "C2.2",
              html_description:
                '<div class="card_content_item" align="left"><div class="_pronoun">commonwealth</div><p class="_txt">a group of countries with the same political or economic aims: </p><span class="_ex">Usage</span><ul class="_list">the Commonwealth of Independent States</ul></div>',
            },
          ],
        },
        {
          word_idx: 14,
          raw_word: "retain",
          cefr: "C2",
          stopword: false,
          word: "retain",
          lemma: "retain",
          pos: "v.",
          html_description:
            '<div class="card_content_item" align="left"><div class="_pronoun">retain (verb.)</div><p class="_txt">to continue to keep something</p><span class="_ex">Usage</span><ul class="_list"><li>Francis retained control of the company.</li></ul></div>',
          description: [
            {
              level: "C2",
              pos: "verb",
              guideword: "",
              definition: "to continue to keep something",
              dictionary_example: ["Francis retained control of the company."],
              learner_example: [
                "But, one might claim, this could also be good, as people retain their local customs, lifestyle, etc. and do not have the anxiety or stress of living in cities. (Certificate of Proficiency in English; C2; Greek)",
              ],
            },
          ],
          synonym: [
            {
              word: "keep",
              cefr: "A1.9",
              html_description:
                '<div class="card_content_item" align="left"><div class="_pronoun">keep (verb.)</div><p class="_txt">to have something permanently or for the whole of a period of time</p><span class="_ex">Usage</span><ul class="_list"><li>Do you want this photograph back or can I keep it?</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">keep (verb.)</div><p class="_txt">to (cause to) stay in a particular place or condition</p><span class="_ex">Usage</span><ul class="_list"><li>I wish you\'d keep quiet.</li><li>I like to keep busy.</li><li>Keep left/right at the traffic light.</li><li>It was difficult for us to keep warm because the house had no heating.</li><li>He goes jogging twice a week to keep in shape.</li><li>John keeps the car spotlessly clean.</li><li>The noise from their party kept me awake half the night.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">keep (verb.)</div><p class="_txt">to delay someone or prevent them from doing something</p><span class="_ex">Usage</span><ul class="_list"><li>He\'s very late, what\'s keeping him?</li><li>She kept me talking on the phone for half an hour.</li><li>Don\'t let me keep you from your work.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">keep (verb.)</div><p class="_txt">If food or drink keeps, it remains fresh.</p><span class="_ex">Usage</span><ul class="_list"><li>Once opened, this product will keep for three days if refrigerated.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">keep (verb.)</div><p class="_txt">to have and look after animals</p><span class="_ex">Usage</span><ul class="_list"><li>Our neighbors keep chickens.</li></ul></div>',
            },
            {
              word: "hold",
              cefr: "A2.2",
              html_description:
                '<div class="card_content_item" align="left"><div class="_pronoun">hold (verb.)</div><p class="_txt">to have something in your hand or arms</p><span class="_ex">Usage</span><ul class="_list"><li> He was holding a glass of wine. </li><li> She held the baby in her arms. </li><li> They were holding hands and kissing. </li><li>Can you hold the bag while I open the door?</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">hold (verb.)</div><p class="_txt">to keep something in a particular position</p><span class="_ex">Usage</span><ul class="_list"><li> Can you hold the door open, please? </li><li> Hold your hand up if you know the answer.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">hold (verb.)</div><p class="_txt">to organize an event</p><span class="_ex">Usage</span><ul class="_list"><li> to hold talks/an election</li><li>A music festival is held there in July.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">hold (verb.)</div><p class="_txt">to contain or be able to contain something</p><span class="_ex">Usage</span><ul class="_list"><li>This pitcher holds up to two quarts.</li><li>Don\'t pack more than one suitcase will hold.</li><li>Computers can hold huge amounts of information.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">hold (verb.)</div><p class="_txt">to keep someone in a place so that they cannot leave</p><span class="_ex">Usage</span><ul class="_list"><li>The terrorists held him hostage for 18 months.</li><li>I was held prisoner in a tiny attic room.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">hold (verb.)</div><p class="_txt">to have a particular job, position, diploma, etc.</p><span class="_ex">Usage</span><ul class="_list"><li>He currently holds the position of managing editor.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">hold (verb.)</div><p class="_txt">to have a particular position in a competition</p><span class="_ex">Usage</span><ul class="_list"><li>to hold the world record</li><li>The team held the lead until the 89th minute.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">hold (noun.)</div><p class="_txt">when you hold something or someone, or the way you do this</p><span class="_ex">Usage</span><ul class="_list"><li>Keep a tight hold on your tickets.</li></ul></div>',
            },
            {
              word: "continue",
              cefr: "B1.2",
              html_description:
                '<div class="card_content_item" align="left"><div class="_pronoun">continue (verb.)</div><p class="_txt">to keep happening, existing or doing something</p><span class="_ex">Usage</span><ul class="_list"><li>It continued to snow heavily for two days.</li><li>If the rain continues, we\'ll have to cancel tonight\'s plans.</li><li>The article continues on page ten.</li><li>I\'ll continue working until the end of June.</li><li>Should I continue with this job? </li><li>Sally Palmer will be continuing as chairperson this fall.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">continue (verb.)</div><p class="_txt">to start doing or saying something again, after stopping for a short period</p><span class="_ex">Usage</span><ul class="_list"><li>We\'ll have to continue this discussion tomorrow.</li><li>It\'s getting late - why don\'t we continue tomorrow?</li><li>After stopping for a quick snack, they continued on their way.</li><li>He paused for a moment to listen and then continued eating.</li></ul></div>',
            },
          ],
        },
        {
          word_idx: 15,
          raw_word: "and",
          cefr: "A1",
          stopword: true,
          word: "and",
          lemma: "and",
          pos: "conj.",
          html_description:
            '<div class="card_content_item" align="left"><div class="_pronoun">and (conjunction.)</div><p class="_txt">used to join two words, phrases, parts of sentences or related statements together</p><span class="_ex">Usage</span><ul class="_list"><li>Ann and Jim</li><li>knives and forks</li><li>We kissed and hugged each other.</li><li>Straighten up your room. And don\'t forget to make your bed!</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">and (conjunction.)</div><p class="_txt">used to say that one thing happens after another thing</p><span class="_ex">Usage</span><ul class="_list"><li>I got dressed and had my breakfast.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">and (conjunction.)</div><p class="_txt">used when saying or adding numbers</p><span class="_ex">Usage</span><ul class="_list"><li>It cost a hundred and twenty dollars.</li><li>Two and three equals five.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">and (conjunction.)</div><p class="_txt">used instead of "to" after some verbs, such as "try" and "go"</p><span class="_ex">Usage</span><ul class="_list"><li>Try and eat something.</li><li>I asked him to go and find my glasses.</li><li> Wait and see what happens.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">and (conjunction.)</div><p class="_txt">used between two words which are the same to make their meaning stronger</p><span class="_ex">Usage</span><ul class="_list"><li>She spends hours and hours on the telephone.</li><li>The sound grew louder and louder.</li><li>We laughed and laughed.</li></ul></div>',
          description: [
            {
              level: "A1",
              pos: "conjunction",
              guideword: "ALSO",
              definition:
                "used to join two words, phrases, parts of sentences or related statements together",
              dictionary_example: [
                "Ann and Jim",
                "knives and forks",
                "We kissed and hugged each other.",
                "Straighten up your room. And don't forget to make your bed!",
              ],
              learner_example: [
                "I have got [a] nice bed, [a] mirror, [a] sofa and a table. (Skills for Life (Entry 1); A1; Slovak)",
              ],
            },
            {
              level: "A1",
              pos: "conjunction",
              guideword: "AFTER",
              definition:
                "used to say that one thing happens after another thing",
              dictionary_example: ["I got dressed and had my breakfast."],
              learner_example: [
                "I get up early [in the] morning and I have breakfast. (Skills for Life (Entry 1); A1; Somali)",
              ],
            },
            {
              level: "A1",
              pos: "conjunction",
              guideword: "NUMBERS",
              definition: "used when saying or adding numbers",
              dictionary_example: [
                "It cost a hundred and twenty dollars.",
                "Two and three equals five.",
              ],
              learner_example: [
                "It's about two and a half hours. (Key English Test; A2; Greek)",
              ],
            },
            {
              level: "A2",
              pos: "conjunction",
              guideword: "AFTER VERB",
              definition:
                'used instead of "to" after some verbs, such as "try" and "go"',
              dictionary_example: [
                "Try and eat something.",
                "I asked him to go and find my glasses.",
                " Wait and see what happens.",
              ],
              learner_example: [
                "I hope [to] go and see Disneyland. (Key English Test; A2; French)",
              ],
            },
            {
              level: "B1",
              pos: "conjunction",
              guideword: "EMPHASIZE",
              definition:
                "used between two words which are the same to make their meaning stronger",
              dictionary_example: [
                "She spends hours and hours on the telephone.",
                "The sound grew louder and louder.",
                "We laughed and laughed.",
              ],
              learner_example: [
                "The situation became harder and harder. (Preliminary English Test; B1; Swiss German)",
              ],
            },
          ],
          synonym: [],
        },
        {
          word_idx: 16,
          raw_word: "distribute",
          cefr: "B2",
          stopword: false,
          word: "distribute",
          lemma: "distribute",
          pos: "v.",
          html_description:
            '<div class="card_content_item" align="left"><div class="_pronoun">distribute (verb.)</div><p class="_txt">to give something out to several people</p><span class="_ex">Usage</span><ul class="_list"><li>The books will be distributed free to local schools.</li><li>Several people were arrested for distributing racist leaflets to the spectators.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">distribute (verb.)</div><p class="_txt">to supply goods to shops and companies</p><span class="_ex">Usage</span><ul class="_list"><li>The company manufactures and distributes computer equipment worldwide.</li></ul></div>',
          description: [
            {
              level: "B2",
              pos: "verb",
              guideword: "GIVE OUT",
              definition: "to give something out to several people",
              dictionary_example: [
                "The books will be distributed free to local schools.",
                "Several people were arrested for distributing racist leaflets to the spectators.",
              ],
              learner_example: [
                "I also had to distribute the flyers [at the concert]. (First Certificate in English; B2; Korean)",
              ],
            },
            {
              level: "C1",
              pos: "verb",
              guideword: "SUPPLY",
              definition: "to supply goods to shops and companies",
              dictionary_example: [
                "The company manufactures and distributes computer equipment worldwide.",
              ],
              learner_example: [
                "Our company imports all the merchand[i]se from [the] Far East and then distribute[s] those products in high quantities to different customers. (Certificate in Advanced English; C1; Greek)",
              ],
            },
          ],
          synonym: [
            {
              word: "administer",
              cefr: "C1.9",
              html_description:
                '<div class="card_content_item" align="left"><div class="_pronoun">administer</div><p class="_txt">to control the operation or arrangement of something: </p><span class="_ex">Usage</span><ul class="_list">The economy has been badly administered by the present government.</ul></div>',
            },
            {
              word: "propagate",
              cefr: "C2.0",
              html_description:
                '<div class="card_content_item" align="left"><div class="_pronoun">propagate</div><p class="_txt">to produce a new plant using a parent plant: </p><span class="_ex">Usage</span><ul class="_list">Most house plants can be propagated from stem cuttings.</ul></div>',
            },
            {
              word: "dispense",
              cefr: "C2.5",
              html_description:
                '<div class="card_content_item" align="left"><div class="_pronoun">dispense</div><p class="_txt">to give out things, especially products, services, or amounts of money: </p><span class="_ex">Usage</span><ul class="_list">There is a vending machine on the platform that dispenses snacks.</ul></div>',
            },
            {
              word: "stagger",
              cefr: "C2.7",
              html_description:
                '<div class="card_content_item" align="left"><div class="_pronoun">stagger (verb.)</div><p class="_txt">to walk as if you might fall</p><span class="_ex">Usage</span><ul class="_list"><li>He staggered drunkenly towards the door.</li></ul></div>',
            },
            {
              word: "circularize",
              cefr: "unk",
              html_description: "",
            },
          ],
        },
        {
          word_idx: 17,
          raw_word: "the",
          cefr: "A1",
          stopword: true,
          word: "the",
          lemma: "the",
          pos: "det.",
          html_description:
            '<div class="card_content_item" align="left"><div class="_pronoun">the (determiner.)</div><p class="_txt">used before nouns to refer to particular things or people that have already been talked about or are already known</p><span class="_ex">Usage</span><ul class="_list"><li>I bought a shirt and some shoes. The shirt was expensive, but the shoes weren\'t.</li><li>Could you pass the salt, please?</li><li>I\'ll pick you up at the station.</li><li>I really enjoyed the book I just read.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">the (determiner.)</div><p class="_txt">used before nouns when only one of something exists</p><span class="_ex">Usage</span><ul class="_list"><li>Have you seen the Eiffel Tower?</li><li>What will happen in the future?</li><li>She\'s traveling around the world.</li><li>They live in the north of Spain.</li><li>Ed Koch was for many years the mayor of New York.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">the (determiner.)</div><p class="_txt">used before some nouns that refer to place when you want to mention that type of place, without showing exactly which example of the place you mean</p><span class="_ex">Usage</span><ul class="_list"><li>We spent all day at the beach.</li><li>Shall we go to the movies this evening?</li><li>I must go to the bank.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">the (determiner.)</div><p class="_txt">used before superlatives and other words, such as \'first\' or \'only\' or numbers showing something\'s position in a list, which refer to only one thing or person</p><span class="_ex">Usage</span><ul class="_list"><li>That was one of the best movies I\'ve ever seen.</li><li>What\'s the highest mountain in Europe?</li><li>I shall never forget the first time we met.</li><li>You\'re the fifth person to ask me that question.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">the (determiner.)</div><p class="_txt">used before numbers that refer to periods of ten years</p><span class="_ex">Usage</span><ul class="_list"><li>the sixties</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">the (determiner.)</div><p class="_txt">used instead of a possessive adjective such as "your," "her," or "my"</p><span class="_ex">Usage</span><ul class="_list"><li>He held her by the arm.</li><li>Where did I park the car?</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">the (determiner.)</div><p class="_txt">used before each of two adjectives or adverbs to show how one thing changes depending on another</p><span class="_ex">Usage</span><ul class="_list"><li> The longer we live here, the more we like it. </li></ul></div>',
          description: [
            {
              level: "A1",
              pos: "determiner",
              guideword: "PARTICULAR",
              definition:
                "used before nouns to refer to particular things or people that have already been talked about or are already known",
              dictionary_example: [
                "I bought a shirt and some shoes. The shirt was expensive, but the shoes weren't.",
                "Could you pass the salt, please?",
                "I'll pick you up at the station.",
                "I really enjoyed the book I just read.",
              ],
              learner_example: [
                "I like fresh food from my garden[.] I like [a]lso [to] work in the garden. (Skills for Life (Entry 1); A1; Polish)",
              ],
            },
            {
              level: "A1",
              pos: "determiner",
              guideword: "ONLY ONE",
              definition: "used before nouns when only one of something exists",
              dictionary_example: [
                "Have you seen the Eiffel Tower?",
                "What will happen in the future?",
                "She's traveling around the world.",
                "They live in the north of Spain.",
                "Ed Koch was for many years the mayor of New York.",
              ],
              learner_example: [
                "That day is [also] the Chinese New Year. (Skills for Life (Entry 1); A1; Chinese)",
              ],
            },
            {
              level: "A1",
              pos: "determiner",
              guideword: "PLACE",
              definition:
                "used before some nouns that refer to place when you want to mention that type of place, without showing exactly which example of the place you mean",
              dictionary_example: [
                "We spent all day at the beach.",
                "Shall we go to the movies this evening?",
                "I must go to the bank.",
              ],
              learner_example: [
                "I like to go to swimming and go to the beach. (Skills for Life (Entry 1); A1; Thai)",
              ],
            },
            {
              level: "A2",
              pos: "determiner",
              guideword: "BEFORE SUPERLATIVES, ETC.",
              definition:
                "used before superlatives and other words, such as 'first' or 'only' or numbers showing something's position in a list, which refer to only one thing or person",
              dictionary_example: [
                "That was one of the best movies I've ever seen.",
                "What's the highest mountain in Europe?",
                "I shall never forget the first time we met.",
                "You're the fifth person to ask me that question.",
              ],
              learner_example: [
                "The best present I have ever got was a car from my grandma. (Key English Test; A2; Portuguese)",
              ],
            },
            {
              level: "B2",
              pos: "determiner",
              guideword: "TIME",
              definition:
                "used before numbers that refer to periods of ten years",
              dictionary_example: ["the sixties"],
              learner_example: [
                "For example, people in the 1950s who didn't have computers are likely to have had difficulty in checking information, booking tickets, and communicating with each other. (First Certificate in English; B2; Korean)",
              ],
            },
            {
              level: "B1",
              pos: "determiner",
              guideword: "YOUR",
              definition:
                'used instead of a possessive adjective such as "your," "her," or "my"',
              dictionary_example: [
                "He held her by the arm.",
                "Where did I park the car?",
              ],
              learner_example: [
                "There [are] a lot of people, and there are a lot of cars, so you would have problems find[ing] a place to park the car. (Preliminary English Test; B1; Spanish)",
              ],
            },
            {
              level: "B2",
              pos: "determiner",
              guideword: "COMPARE",
              definition:
                "used before each of two adjectives or adverbs to show how one thing changes depending on another",
              dictionary_example: [
                " The longer we live here, the more we like it. ",
              ],
              learner_example: [
                "In many cases, the more things you learn, the less things you know. (First Certificate in English; B2; French)",
              ],
            },
          ],
          synonym: [],
        },
        {
          word_idx: 18,
          raw_word: "aid",
          cefr: "C1",
          stopword: false,
          word: "aid",
          lemma: "aid",
          pos: "n.",
          html_description:
            '<div class="card_content_item" align="left"><div class="_pronoun">aid (noun.)</div><p class="_txt">help or support</p><span class="_ex">Usage</span><ul class="_list"><li>She went to the aid of a man trapped in his car.</li><li>He applied for financial aid for college.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">aid (noun.)</div><p class="_txt">money, food, or equipment that is given to help a country or group of people</p><span class="_ex">Usage</span><ul class="_list"><li>Emergency aid was sent to the flood victims.</li><li>foreign aid</li><li>aid workers</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">aid (noun.)</div><p class="_txt">a piece of equipment that helps you to do something</p><span class="_ex">Usage</span><ul class="_list"><li>teaching aids such as books and videos</li><li>A good dictionary can be a useful aid to understanding a new language.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">aid (verb.)</div><p class="_txt">to help someone</p><span class="_ex">Usage</span><ul class="_list"><li>The project is designed to aid the homeless.</li><li>He was aided in his research by his knowledge of Greek.</li></ul></div>',
          description: [
            {
              level: "C1",
              pos: "noun",
              guideword: "HELP",
              definition: "help or support",
              dictionary_example: [
                "She went to the aid of a man trapped in his car.",
                "He applied for financial aid for college.",
              ],
              learner_example: [
                "If you have any trouble with something do not hesitate [i]n requesting my aid. (Certificate in Advanced English; C1; Spanish)",
              ],
            },
            {
              level: "C1",
              pos: "noun",
              guideword: "SUPPLIES",
              definition:
                "money, food, or equipment that is given to help a country or group of people",
              dictionary_example: [
                "Emergency aid was sent to the flood victims.",
                "foreign aid",
                "aid workers",
              ],
              learner_example: [
                "Another thing which they say is that in the past they gave aid to poorer countries for different projects. (International English Language Testing System; C1; Panjabi)",
              ],
            },
            {
              level: "C1",
              pos: "noun",
              guideword: "EQUIPMENT",
              definition: "a piece of equipment that helps you to do something",
              dictionary_example: [
                "teaching aids such as books and videos",
                "A good dictionary can be a useful aid to understanding a new language.",
              ],
              learner_example: [
                "In particular, the magazine could be considered as a rather good additional aid for someone studying the Greek language and culture. (Certificate in Advanced English; C1; Greek)",
              ],
            },
            {
              level: "C1",
              pos: "verb",
              guideword: "",
              definition: "to help someone",
              dictionary_example: [
                "The project is designed to aid the homeless.",
                "He was aided in his research by his knowledge of Greek.",
              ],
              learner_example: [
                "This kind of bad publicity will not aid the hospital in any way, but will instead keep people away from future events. (Certificate in Advanced English; C1; Swedish)",
              ],
            },
          ],
          synonym: [
            {
              word: "help",
              cefr: "A1.2",
              html_description:
                '<div class="card_content_item" align="left"><div class="_pronoun">help (verb.)</div><p class="_txt">to make it easier for someone to do something by doing part of the work yourself</p><span class="_ex">Usage</span><ul class="_list"><li> Thank you for helping. </li><li> Can I help you make dinner? </li><li> Dad always helps me with my homework. </li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">help (verb.)</div><p class="_txt">to provide advice, money, support, etc. to make it possible or easier for someone to do something</p><span class="_ex">Usage</span><ul class="_list"><li>I wonder if you could help me - I\'d like some information about flights to New Zealand.</li><li>My dad said he would help with the cost of buying a car.</li><li>I feel that learning English will help my chances of promotion at work.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">help (verb.)</div><p class="_txt">to make something better</p><span class="_ex">Usage</span><ul class="_list"><li> When you\'re nervous or scared, it helps to breathe slowly and deeply. </li><li>The drugs didn\'t seem to help (the pain).</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">help (noun.)</div><p class="_txt">when someone helps another person</p><span class="_ex">Usage</span><ul class="_list"><li> I was too embarrassed to ask for help. </li><li>Do you need any help with those boxes?</li><li>I could use some help with the cleaning.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">help (noun.)</div><p class="_txt">something or someone that helps</p><span class="_ex">Usage</span><ul class="_list"><li>Having a new computer would be a help.</li><li>He was a great help (to me) while my husband was away.</li></ul></div>',
            },
            {
              word: "attention",
              cefr: "B1.3",
              html_description:
                '<div class="card_content_item" align="left"><div class="_pronoun">attention (noun.)</div><p class="_txt">when you watch, listen to, or think about something carefully or with interest</p><span class="_ex">Usage</span><ul class="_list"><li>Ladies and gentlemen, could I have your attention, please?</li><li>Wait a moment and I\'ll give you my full attention.</li><li>After an hour, my attention started to wander.</li></ul></div>',
            },
            {
              word: "assistance",
              cefr: "B2.5",
              html_description:
                '<div class="card_content_item" align="left"><div class="_pronoun">assistance (noun.)</div><p class="_txt">help</p><span class="_ex">Usage</span><ul class="_list"><li>Can I be of any assistance?</li><li>Teachers can\'t give pupils any assistance during exams.</li></ul></div>',
            },
            {
              word: "assist",
              cefr: "B2.7",
              html_description:
                '<div class="card_content_item" align="left"><div class="_pronoun">assist (verb.)</div><p class="_txt">to help</p><span class="_ex">Usage</span><ul class="_list"><li>The army arrived to assist in the search.</li><li>You will be expected to assist the editor with the selection of illustrations for the book.</li></ul></div>',
            },
            {
              word: "tending",
              cefr: "C2.2",
              html_description:
                '<div class="card_content_item" align="left"><div class="_pronoun">tending</div><p class="_txt">present participle of  tend </p><span class="_ex">Usage</span><ul class="_list">nan</ul></div>',
            },
          ],
        },
        {
          word_idx: 19,
          raw_word: "fairly.",
          cefr: "B1",
          stopword: false,
          word: "fairly",
          lemma: "fairly",
          pos: "adv.",
          html_description:
            '<div class="card_content_item" align="left"><div class="_pronoun">fairly (adverb.)</div><p class="_txt">more than average, but less than very</p><span class="_ex">Usage</span><ul class="_list"><li>a fairly big family</li><li>She\'s fairly tall.</li><li>We get along fairly well.</li><li>I saw her fairly recently.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">fairly (adverb.)</div><p class="_txt">If you do something fairly, you do it in a way which is right and reasonable and treats people equally.</p><span class="_ex">Usage</span><ul class="_list"><li>He claimed that he hadn\'t been treated fairly by his employers.</li><li>Officials will ensure that the election is carried out fairly.</li></ul></div>',
          description: [
            {
              level: "B1",
              pos: "adverb",
              guideword: "QUITE",
              definition: "more than average, but less than very",
              dictionary_example: [
                "a fairly big family",
                "She's fairly tall.",
                "We get along fairly well.",
                "I saw her fairly recently.",
              ],
              learner_example: [
                "The weather was fairly warm. (Preliminary English Test; B1; French)",
              ],
            },
            {
              level: "B2",
              pos: "adverb",
              guideword: "IN THE RIGHT WAY",
              definition:
                "If you do something fairly, you do it in a way which is right and reasonable and treats people equally.",
              dictionary_example: [
                "He claimed that he hadn't been treated fairly by his employers.",
                "Officials will ensure that the election is carried out fairly.",
              ],
              learner_example: [""],
            },
          ],
          synonym: [
            {
              word: "pretty",
              cefr: "A2.1",
              html_description:
                '<div class="card_content_item" align="left"><div class="_pronoun">pretty (adjective.)</div><p class="_txt">If a woman or girl is pretty, she is attractive.</p><span class="_ex">Usage</span><ul class="_list"><li>She\'s got such a pretty daughter.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">pretty (adjective.)</div><p class="_txt">If a place or an object is pretty, it is pleasant to look at.</p><span class="_ex">Usage</span><ul class="_list"><li>That\'s a pretty hat you\'re wearing.</li><li> a pretty little village </li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">pretty (adverb.)</div><p class="_txt">quite, but not extremely or not completely</p><span class="_ex">Usage</span><ul class="_list"><li>The house has four bedrooms, so it\'s pretty big.</li><li>I\'m pretty sure it was her.</li><li>I\'ve got a pretty good idea of how to get there.</li></ul></div>',
            },
            {
              word: "passably",
              cefr: "C1.1",
              html_description:
                '<div class="card_content_item" align="left"><div class="_pronoun">passably</div><p class="_txt">in a way that is satisfactory but not excellent</p><span class="_ex">Usage</span><ul class="_list">nan</ul></div>',
            },
            {
              word: "middling",
              cefr: "C1.2",
              html_description:
                '<div class="card_content_item" align="left"><div class="_pronoun">middling</div><p class="_txt">medium or average; neither very good nor very bad: </p><span class="_ex">Usage</span><ul class="_list">a man of about middling height</ul></div>',
            },
            {
              word: "moderately",
              cefr: "C2.6",
              html_description:
                '<div class="card_content_item" align="left"><div class="_pronoun">moderately (adverb.)</div><p class="_txt">to a degree that is average but not very great</p><span class="_ex">Usage</span><ul class="_list"><li>There\'s very little moderately priced housing in this area.</li><li>The company remains moderately profitable, but it is not making as much money as it should.</li></ul></div>',
            },
            {
              word: "evenhandedly",
              cefr: "unk",
              html_description: "",
            },
          ],
        },
      ],
    },
    {
      sent_idx: 2,
      raw_sentence:
        "Continue to provide that assistance, and regimes will have a stronger grip on their citizens as the former gain their wealth while the latter fall into poverty.",
      sentence:
        "continue to provide that assistance and regimes will have a stronger grip on their citizens as the former gain their wealth while the latter fall into poverty",
      sentence_summary: {
        sentence_num_words: 27,
        sentence_cefr: "B1.9",
        sentence_word_list_by_cefr: {
          A1: [
            "their",
            "into",
            "will",
            "and",
            "as",
            "a",
            "that",
            "have",
            "to",
            "the",
            "on",
          ],
          A2: ["fall", "while", "stronger"],
          B1: ["gain", "provide", "continue", "former"],
          B2: ["assistance", "latter", "poverty", "citizens", "wealth", "grip"],
          C1: [],
          C2: ["regimes"],
          unk: [],
          stopwords: [
            "their",
            "into",
            "will",
            "and",
            "as",
            "while",
            "a",
            "that",
            "have",
            "to",
            "the",
            "on",
          ],
        },
        sentence_word_count_by_cefr: {
          A1: 13,
          A2: 3,
          B1: 4,
          B2: 6,
          C1: 0,
          C2: 1,
          unk: 0,
          stopwords: 14,
        },
        sentence_word_distribution_by_cefr: {
          A1: 48.1,
          A2: 11.1,
          B1: 14.8,
          B2: 22.2,
          C1: 0.0,
          C2: 3.7,
          unk: 0.0,
          stopwords: 51.9,
        },
      },
      words_detail: [
        {
          word_idx: 0,
          raw_word: "Continue",
          cefr: "B1",
          stopword: false,
          word: "continue",
          lemma: "continue",
          pos: "v.",
          html_description:
            '<div class="card_content_item" align="left"><div class="_pronoun">continue (verb.)</div><p class="_txt">to keep happening, existing or doing something</p><span class="_ex">Usage</span><ul class="_list"><li>It continued to snow heavily for two days.</li><li>If the rain continues, we\'ll have to cancel tonight\'s plans.</li><li>The article continues on page ten.</li><li>I\'ll continue working until the end of June.</li><li>Should I continue with this job? </li><li>Sally Palmer will be continuing as chairperson this fall.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">continue (verb.)</div><p class="_txt">to start doing or saying something again, after stopping for a short period</p><span class="_ex">Usage</span><ul class="_list"><li>We\'ll have to continue this discussion tomorrow.</li><li>It\'s getting late - why don\'t we continue tomorrow?</li><li>After stopping for a quick snack, they continued on their way.</li><li>He paused for a moment to listen and then continued eating.</li></ul></div>',
          description: [
            {
              level: "B1",
              pos: "verb",
              guideword: "NEVER STOP",
              definition: "to keep happening, existing or doing something",
              dictionary_example: [
                "It continued to snow heavily for two days.",
                "If the rain continues, we'll have to cancel tonight's plans.",
                "The article continues on page ten.",
                "I'll continue working until the end of June.",
                "Should I continue with this job? ",
                "Sally Palmer will be continuing as chairperson this fall.",
              ],
              learner_example: [
                "I t[h]ought that he wasn't calling me, so I continued walking to the car. (Preliminary English Test; B1; Catalan)",
              ],
            },
            {
              level: "B1",
              pos: "verb",
              guideword: "BEGIN AGAIN",
              definition:
                "to start doing or saying something again, after stopping for a short period",
              dictionary_example: [
                "We'll have to continue this discussion tomorrow.",
                "It's getting late - why don't we continue tomorrow?",
                "After stopping for a quick snack, they continued on their way.",
                "He paused for a moment to listen and then continued eating.",
              ],
              learner_example: [
                "We continued our journey early in the morning. (Preliminary English Test; B1; Swiss German)",
              ],
            },
          ],
          synonym: [
            {
              word: "keep",
              cefr: "A1.9",
              html_description:
                '<div class="card_content_item" align="left"><div class="_pronoun">keep (verb.)</div><p class="_txt">to have something permanently or for the whole of a period of time</p><span class="_ex">Usage</span><ul class="_list"><li>Do you want this photograph back or can I keep it?</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">keep (verb.)</div><p class="_txt">to (cause to) stay in a particular place or condition</p><span class="_ex">Usage</span><ul class="_list"><li>I wish you\'d keep quiet.</li><li>I like to keep busy.</li><li>Keep left/right at the traffic light.</li><li>It was difficult for us to keep warm because the house had no heating.</li><li>He goes jogging twice a week to keep in shape.</li><li>John keeps the car spotlessly clean.</li><li>The noise from their party kept me awake half the night.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">keep (verb.)</div><p class="_txt">to delay someone or prevent them from doing something</p><span class="_ex">Usage</span><ul class="_list"><li>He\'s very late, what\'s keeping him?</li><li>She kept me talking on the phone for half an hour.</li><li>Don\'t let me keep you from your work.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">keep (verb.)</div><p class="_txt">If food or drink keeps, it remains fresh.</p><span class="_ex">Usage</span><ul class="_list"><li>Once opened, this product will keep for three days if refrigerated.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">keep (verb.)</div><p class="_txt">to have and look after animals</p><span class="_ex">Usage</span><ul class="_list"><li>Our neighbors keep chickens.</li></ul></div>',
            },
            {
              word: "remain",
              cefr: "B2.1",
              html_description:
                '<div class="card_content_item" align="left"><div class="_pronoun">remain (verb.)</div><p class="_txt">to continue to exist, especially after other things or people have gone</p><span class="_ex">Usage</span><ul class="_list"><li>Only a few hundred of these animals remain today.</li><li>After the flood, nothing remained of the waterfront park.</li></ul></div>',
            },
            {
              word: "extend",
              cefr: "B2.6",
              html_description:
                '<div class="card_content_item" align="left"><div class="_pronoun">extend (verb.)</div><p class="_txt">to make something bigger or to make something last for a longer time</p><span class="_ex">Usage</span><ul class="_list"><li>We have plans to extend the deck.</li><li>They\'ve extended their range of products.</li><li>A lot of department stores have extended their hours.</li><li>I need to extend my visa.</li></ul></div>',
            },
            {
              word: "retain",
              cefr: "C2.5",
              html_description:
                '<div class="card_content_item" align="left"><div class="_pronoun">retain (verb.)</div><p class="_txt">to continue to keep something</p><span class="_ex">Usage</span><ul class="_list"><li>Francis retained control of the company.</li></ul></div>',
            },
            {
              word: "uphold",
              cefr: "C2.7",
              html_description:
                '<div class="card_content_item" align="left"><div class="_pronoun">uphold (verb.)</div><p class="_txt">to agree with a decision, especially a legal one, and say it was correct</p><span class="_ex">Usage</span><ul class="_list"><li> The court upheld the ruling. </li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">uphold (verb.)</div><p class="_txt">to support a decision, principle, or law</p><span class="_ex">Usage</span><ul class="_list"><li> Police officers are expected to uphold the law. </li></ul></div>',
            },
          ],
        },
        {
          word_idx: 1,
          raw_word: "to",
          cefr: "A1",
          stopword: true,
          word: "to",
          lemma: "to",
          pos: "infinitive marker",
          html_description:
            '<div class="card_content_item" align="left"><div class="_pronoun">to (infinitive marker.)</div><p class="_txt">used with a verb to make an infinitive</p><span class="_ex">Usage</span><ul class="_list"><li>She agreed to help.</li><li>We were starting to feel cold.</li><li>I don\'t know what to do.</li><li>Can you tell me how to get there?</li><li>It\'s not likely to happen.</li><li>He told me to wait.</li><li>Did anyone ask Daniel to book the room?</li><li>There\'s an awful lot of work to be done.</li><li>I need to eat something first.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">to (infinitive marker.)</div><p class="_txt">used to give the purpose of something or the reason for doing something</p><span class="_ex">Usage</span><ul class="_list"><li>I\'m going there to see my sister.</li><li>This tool is used to make holes in leather.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">to (infinitive marker.)</div><p class="_txt">used instead of repeating a verb clause</p><span class="_ex">Usage</span><ul class="_list"><li>"Are you going tonight?" "I\'m certainly hoping to."</li><li>"Would you like to come?" "I\'d love to."</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">to (preposition.)</div><p class="_txt">used to talk about a place or an event where someone goes</p><span class="_ex">Usage</span><ul class="_list"><li>We went to California last year.</li><li>We could go to town on the bus.</li><li>I have to go to the dentist this morning.</li><li>We received another invitation to a wedding this morning.</li><li>I\'ve asked Helen and Ben to dinner next week.</li><li>You can walk from here to the station in under ten minutes.</li><li>She walked over to the window.</li><li>He went up to a complete stranger and started talking.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">to (preposition.)</div><p class="_txt">used to say "before" the hour when you are saying what time it is</p><span class="_ex">Usage</span><ul class="_list"><li> It\'s five to three. </li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">to (preposition.)</div><p class="_txt">used to show who receives something or experiences an action</p><span class="_ex">Usage</span><ul class="_list"><li>I gave the money to my sister.</li><li>Give the gun to me.</li><li> Anna was speaking to her mother on the phone. </li><li>I lent my bike to my brother.</li><li>Who\'s the letter addressed to?</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">to (preposition.)</div><p class="_txt">used to show the position of someone or something</p><span class="_ex">Usage</span><ul class="_list"><li> She stood with her back to the window. </li><li>I had my back to them, so I couldn\'t see what they were doing.</li><li>John\'s standing to the left of Adrian in the photo.</li><li>The national park is twenty miles to the north of the city.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">to (preposition.)</div><p class="_txt">used to say who is treated in a particular way or who or what is affected by something</p><span class="_ex">Usage</span><ul class="_list"><li>What have you done to your hair?</li><li>Her evidence was very helpful to the police.</li><li>She was very kind to us.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">to (preposition.)</div><p class="_txt">used to show a relationship with someone</p><span class="_ex">Usage</span><ul class="_list"><li>I\'ve been married to Peter for nine years.</li><li>She was an assistant to the chief executive.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">to (preposition.)</div><p class="_txt">used to compare two things</p><span class="_ex">Usage</span><ul class="_list"><li> I prefer football to basketball. </li><li>She\'s earning a reasonable wage, but nothing to what she could make in a big company.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">to (preposition.)</div><p class="_txt">until a particular time, state or level is reached</p><span class="_ex">Usage</span><ul class="_list"><li>It\'s only two weeks to Christmas.</li><li>Unemployment has risen to almost eight million.</li><li>She nursed me back to health.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">to (preposition.)</div><p class="_txt">used to say where something is fastened or connected</p><span class="_ex">Usage</span><ul class="_list"><li>The paper was fastened to the wall with tape.</li><li>A high-speed rail service connects us to the city.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">to (preposition.)</div><p class="_txt">used in phrases which show a range</p><span class="_ex">Usage</span><ul class="_list"><li>There must have been thirty to thirty-five people there.</li></ul></div>',
          description: [
            {
              level: "A1",
              pos: "infinitive marker",
              guideword: "INFINITIVE",
              definition: "used with a verb to make an infinitive",
              dictionary_example: [
                "She agreed to help.",
                "We were starting to feel cold.",
                "I don't know what to do.",
                "Can you tell me how to get there?",
                "It's not likely to happen.",
                "He told me to wait.",
                "Did anyone ask Daniel to book the room?",
                "There's an awful lot of work to be done.",
                "I need to eat something first.",
              ],
              learner_example: [
                "She likes to go shopping with friend[s]. (Skills for Life (Entry 1); A1; Bulgarian)",
              ],
            },
            {
              level: "A2",
              pos: "infinitive marker",
              guideword: "REASON",
              definition:
                "used to give the purpose of something or the reason for doing something",
              dictionary_example: [
                "I'm going there to see my sister.",
                "This tool is used to make holes in leather.",
              ],
              learner_example: [
                "Dear Robbie, I'm writing to tell you some information about what we['re going to] do. (Key English Test; A2; Greek)",
              ],
            },
            {
              level: "A2",
              pos: "infinitive marker",
              guideword: "INSTEAD OF VERB",
              definition: "used instead of repeating a verb clause",
              dictionary_example: [
                '"Are you going tonight?" "I\'m certainly hoping to."',
                '"Would you like to come?" "I\'d love to."',
              ],
              learner_example: [
                "Yes, I'd love to. (Key English Test; A2; Portuguese)",
              ],
            },
            {
              level: "A1",
              pos: "preposition",
              guideword: "PLACE",
              definition:
                "used to talk about a place or an event where someone goes",
              dictionary_example: [
                "We went to California last year.",
                "We could go to town on the bus.",
                "I have to go to the dentist this morning.",
                "We received another invitation to a wedding this morning.",
                "I've asked Helen and Ben to dinner next week.",
                "You can walk from here to the station in under ten minutes.",
                "She walked over to the window.",
                "He went up to a complete stranger and started talking.",
              ],
              learner_example: [
                "I like go[ing] to London. (Skills for Life (Entry 1); A1; Portuguese)",
              ],
            },
            {
              level: "A1",
              pos: "preposition",
              guideword: "TELLING THE TIME",
              definition:
                'used to say "before" the hour when you are saying what time it is',
              dictionary_example: [" It's five to three. "],
              learner_example: [""],
            },
            {
              level: "A2",
              pos: "preposition",
              guideword: "RECEIVING",
              definition:
                "used to show who receives something or experiences an action",
              dictionary_example: [
                "I gave the money to my sister.",
                "Give the gun to me.",
                " Anna was speaking to her mother on the phone. ",
                "I lent my bike to my brother.",
                "Who's the letter addressed to?",
              ],
              learner_example: [
                "Please bring it to me tomorrow, because I have to return it to my brother. (Key English Test; A2; Portuguese)",
              ],
            },
            {
              level: "B1",
              pos: "preposition",
              guideword: "POSITION",
              definition: "used to show the position of someone or something",
              dictionary_example: [
                " She stood with her back to the window. ",
                "I had my back to them, so I couldn't see what they were doing.",
                "John's standing to the left of Adrian in the photo.",
                "The national park is twenty miles to the north of the city.",
              ],
              learner_example: [
                "My town is situated to the south of Paris. (First Certificate in English; B2; French)",
              ],
            },
            {
              level: "B1",
              pos: "preposition",
              guideword: "AFFECTED",
              definition:
                "used to say who is treated in a particular way or who or what is affected by something",
              dictionary_example: [
                "What have you done to your hair?",
                "Her evidence was very helpful to the police.",
                "She was very kind to us.",
              ],
              learner_example: [
                "The waiter was really kind to us. We gave him the key of the car and he drove us home. (First Certificate in English; B2; Portuguese)",
              ],
            },
            {
              level: "B1",
              pos: "preposition",
              guideword: "RELATIONSHIP",
              definition: "used to show a relationship with someone",
              dictionary_example: [
                "I've been married to Peter for nine years.",
                "She was an assistant to the chief executive.",
              ],
              learner_example: [
                "She's 38 years old and she's married to a Spanish engineer. (Preliminary English Test; B1; Italian)",
              ],
            },
            {
              level: "B1",
              pos: "preposition",
              guideword: "COMPARE",
              definition: "used to compare two things",
              dictionary_example: [
                " I prefer football to basketball. ",
                "She's earning a reasonable wage, but nothing to what she could make in a big company.",
              ],
              learner_example: [
                "I prefer homemade food to re[s]taurant meals. (Preliminary English Test; B1; Russian)",
              ],
            },
            {
              level: "B1",
              pos: "preposition",
              guideword: "UNTIL",
              definition: "until a particular time, state or level is reached",
              dictionary_example: [
                "It's only two weeks to Christmas.",
                "Unemployment has risen to almost eight million.",
                "She nursed me back to health.",
              ],
              learner_example: [""],
            },
            {
              level: "B1",
              pos: "preposition",
              guideword: "CONNECTED",
              definition:
                "used to say where something is fastened or connected",
              dictionary_example: [
                "The paper was fastened to the wall with tape.",
                "A high-speed rail service connects us to the city.",
              ],
              learner_example: [
                "My mouth became so dry that my tongue stuck to my palate. (First Certificate in English; B2; French)",
              ],
            },
            {
              level: "B2",
              pos: "preposition",
              guideword: "RANGE",
              definition: "used in phrases which show a range",
              dictionary_example: [
                "There must have been thirty to thirty-five people there.",
              ],
              learner_example: [""],
            },
          ],
          synonym: [],
        },
        {
          word_idx: 2,
          raw_word: "provide",
          cefr: "B1",
          stopword: false,
          word: "provide",
          lemma: "provide",
          pos: "v.",
          html_description:
            '<div class="card_content_item" align="left"><div class="_pronoun">provide (verb.)</div><p class="_txt">to give someone something that they need</p><span class="_ex">Usage</span><ul class="_list"><li>This brochure provides useful information about/on the new health insurance plans.</li><li>Coffee and tea are provided during the break.</li></ul></div>',
          description: [
            {
              level: "B1",
              pos: "verb",
              guideword: "",
              definition: "to give someone something that they need",
              dictionary_example: [
                "This brochure provides useful information about/on the new health insurance plans.",
                "Coffee and tea are provided during the break.",
              ],
              learner_example: [
                "The restaurant provides excellent service. (Preliminary English Test; B1; Chinese)",
              ],
            },
          ],
          synonym: [
            {
              word: "leave",
              cefr: "A1.3",
              html_description:
                '<div class="card_content_item" align="left"><div class="_pronoun">leave (verb.)</div><p class="_txt">to go away from a place or a situation, either permanently or for a temporary period</p><span class="_ex">Usage</span><ul class="_list"><li>The bus leaves in five minutes.</li><li>I\'ll be leaving at seven o\'clock tomorrow morning.</li><li>He left the house by the back door.</li><li>She left the group of people she was with and came over to speak to us.</li><li>"Does Trevor still work there?" "No, he left last month."</li><li>She left school early.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">leave (verb.)</div><p class="_txt">to put something in a place and forget to take it with you when you go</p><span class="_ex">Usage</span><ul class="_list"><li>Hey, you\'ve left your keys on the table.</li><li>That\'s the second umbrella I\'ve left on the train!</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">leave (verb.)</div><p class="_txt">to put something in a place where it will stay</p><span class="_ex">Usage</span><ul class="_list"><li>You can leave your bags by the desk.</li><li>Why don\'t you leave the kids with me on Friday?</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">leave (verb.)</div><p class="_txt">to put something somewhere for another person to have later</p><span class="_ex">Usage</span><ul class="_list"><li>I left some sandwiches for them to have later.</li><li>Can I leave a message for Sue?</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">leave (verb.)</div><p class="_txt">to not use all of something</p><span class="_ex">Usage</span><ul class="_list"><li>They ate all the cake but left some cookies.</li><li>Are there any sandwiches left?</li><li>Please leave some coffee for me.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">leave (verb.)</div><p class="_txt">to end a relationship with a husband, wife, or partner</p><span class="_ex">Usage</span><ul class="_list"><li>He said he\'d never leave.</li><li>She left him.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">leave (verb.)</div><p class="_txt">to cause something to stay in a particular condition</p><span class="_ex">Usage</span><ul class="_list"><li>Leave that chair where it is.</li><li>Leave the light on in the living room.</li><li>I have to go back - I think I left the iron on.</li><li>You can leave the window open.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">leave (verb.)</div><p class="_txt">to produce a particular, often bad, situation</p><span class="_ex">Usage</span><ul class="_list"><li>Far from improving things, the new law has left many people worse off than before.</li><li>Storms have left areas of Britain without electricity.</li><li>The family were left homeless.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">leave (verb.)</div><p class="_txt">to do something later that you could do immediately</p><span class="_ex">Usage</span><ul class="_list"><li>Don\'t leave your packing till the night before you go.</li><li>I\'ll leave these letters till Monday.</li><li>Don\'t leave it too late.</li><li>They left booking their holiday till/to the last minute.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">leave (verb.)</div><p class="_txt">to arrange for someone to receive something after you die</p><span class="_ex">Usage</span><ul class="_list"><li>He left his nieces all his money./He left all his money to his nieces.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">leave (noun.)</div><p class="_txt">time allowed away from work for illness or another special purpose</p><span class="_ex">Usage</span><ul class="_list"><li>maternity/sick leave</li><li>She\'s (gone) on leave.</li><li>I\'ve asked if I can take a week\'s unpaid leave.</li></ul></div>',
            },
            {
              word: "allow",
              cefr: "B1.1",
              html_description:
                '<div class="card_content_item" align="left"><div class="_pronoun">allow (verb.)</div><p class="_txt">to give someone permission for something</p><span class="_ex">Usage</span><ul class="_list"><li>You\'re not allowed to talk during the exam.</li><li>Pets aren\'t allowed in this hotel.</li><li>The referee decided to allow the goal.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">allow (verb.)</div><p class="_txt">to plan to use a particular amount of money, time, etc., for something</p><span class="_ex">Usage</span><ul class="_list"><li>Allow three hours for the whole trip.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">allow (verb.)</div><p class="_txt">to make it possible for someone to do something</p><span class="_ex">Usage</span><ul class="_list"><li>The extra money will allow me to upgrade my computer.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">allow (verb.)</div><p class="_txt">to not prevent something from happening</p><span class="_ex">Usage</span><ul class="_list"><li>They have allowed the problem to get worse.</li></ul></div>',
            },
            {
              word: "supply",
              cefr: "B2.3",
              html_description:
                '<div class="card_content_item" align="left"><div class="_pronoun">supply (noun.)</div><p class="_txt">an amount of something that is available for use</p><span class="_ex">Usage</span><ul class="_list"><li>the water supply</li><li>Medical supplies were desperately needed in areas hit by the earthquake.</li><li>Demand for cheap housing far outstrips supply.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">supply (verb.)</div><p class="_txt">to provide things that people want or need, often over a long period of time</p><span class="_ex">Usage</span><ul class="_list"><li>Fran supplied the sandwiches for the party.</li><li>The dam supplies water and power to San Francisco.</li><li>At the beginning of term, students are supplied with a list of books that they are expected to read.</li></ul></div>',
            },
            {
              word: "ply",
              cefr: "B2.3",
              html_description:
                '<div class="card_content_item" align="left"><div class="_pronoun">ply</div><p class="_txt">to sell or to work regularly at something, especially at a job that involves selling things: </p><span class="_ex">Usage</span><ul class="_list">Fishermen in small boats ply their trade up and down the coast.</ul></div>',
            },
            {
              word: "furnish",
              cefr: "C1.9",
              html_description:
                '<div class="card_content_item" align="left"><div class="_pronoun">furnish</div><p class="_txt">to put furniture in something: </p><span class="_ex">Usage</span><ul class="_list">They\'ve furnished the room very simply.</ul></div>',
            },
          ],
        },
        {
          word_idx: 3,
          raw_word: "that",
          cefr: "A1",
          stopword: true,
          word: "that",
          lemma: "that",
          pos: "det.",
          html_description:
            '<div class="card_content_item" align="left"><div class="_pronoun">that (determiner.)</div><p class="_txt">used to refer to something or someone that can be seen or pointed to</p><span class="_ex">Usage</span><ul class="_list"><li>Did you know that woman in the post office?</li><li>How much are those shoes?</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">that (determiner.)</div><p class="_txt">used to refer to something or someone that has already been talked about or seen</p><span class="_ex">Usage</span><ul class="_list"><li>Where\'s that pen gone?</li><li>She lives in that house by the bus station.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">that (conjunction.)</div><p class="_txt">used after some verbs, nouns, and adjectives to introduce a new part of a sentence</p><span class="_ex">Usage</span><ul class="_list"><li>She said (that) she\'d collect it for me after work.</li><li>Is it true (that) she\'s gone back to teaching?</li><li>We\'ll be there at about 7.30, provided/providing (that) there\'s a suitable train.</li><li>It was so dark (that) I couldn\'t see anything.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">that (pronoun.)</div><p class="_txt">used to refer to something that can be seen or pointed to</p><span class="_ex">Usage</span><ul class="_list"><li> What\'s that in the corner?</li><li>I\'d like some of those.</li><li> That looks heavy.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">that (pronoun.)</div><p class="_txt">used to refer to something that has already been talked about or seen</p><span class="_ex">Usage</span><ul class="_list"><li>If you do that, you\'ll be sorry.</li><li>I don\'t think you should put up with that.</li><li>You can\'t wear those to a wedding.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">that (pronoun.)</div><p class="_txt">used to make a connection with an earlier statement</p><span class="_ex">Usage</span><ul class="_list"><li>My usual train was cancelled. That\'s why I\'m so late.</li><li>She tricked him, and that\'s what really upset him.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">that (pronoun.)</div><p class="_txt">used at the beginning of a relative clause to show what thing is being referred to</p><span class="_ex">Usage</span><ul class="_list"><li>They liked the restaurant that they ate lunch at.</li><li>I brought you the book that you wanted.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">that (pronoun.)</div><p class="_txt">used to refer to events or experiences in the past</p><span class="_ex">Usage</span><ul class="_list"><li>That was before we had a car.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">that (pronoun.)</div><p class="_txt">used to express a reaction to something</p><span class="_ex">Usage</span><ul class="_list"><li>I didn\'t know she\'d been so ill. That\'s terrible.</li><li>Turn the engine on, then put the car in gear. That\'s right.</li><li>Smile for the camera. That\'s more like it.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">that (adverb.)</div><p class="_txt">used when describing the size, amount, or state of something or someone</p><span class="_ex">Usage</span><ul class="_list"><li>She\'s too young to walk that far.</li><li>It wasn\'t (all) that good.</li></ul></div>',
          description: [
            {
              level: "A1",
              pos: "determiner",
              guideword: "CAN BE SEEN",
              definition:
                "used to refer to something or someone that can be seen or pointed to",
              dictionary_example: [
                "Did you know that woman in the post office?",
                "How much are those shoes?",
              ],
              learner_example: [""],
            },
            {
              level: "A1",
              pos: "determiner",
              guideword: "ALREADY MENTIONED",
              definition:
                "used to refer to something or someone that has already been talked about or seen",
              dictionary_example: [
                "Where's that pen gone?",
                "She lives in that house by the bus station.",
              ],
              learner_example: [
                "I like that place be[cause] I like swim[m]ing in [the] sea. (Skills for Life (Entry 1); A1; Polish)",
              ],
            },
            {
              level: "A2",
              pos: "conjunction",
              guideword: "",
              definition:
                "used after some verbs, nouns, and adjectives to introduce a new part of a sentence",
              dictionary_example: [
                "She said (that) she'd collect it for me after work.",
                "Is it true (that) she's gone back to teaching?",
                "We'll be there at about 7.30, provided/providing (that) there's a suitable train.",
                "It was so dark (that) I couldn't see anything.",
              ],
              learner_example: [
                "It's great that you are coming next week. (Key English Test; A2; Portuguese)",
              ],
            },
            {
              level: "A1",
              pos: "pronoun",
              guideword: "CAN BE SEEN",
              definition:
                "used to refer to something that can be seen or pointed to",
              dictionary_example: [
                " What's that in the corner?",
                "I'd like some of those.",
                " That looks heavy.",
              ],
              learner_example: [""],
            },
            {
              level: "A1",
              pos: "pronoun",
              guideword: "ALREADY MENTIONED",
              definition:
                "used to refer to something that has already been talked about or seen",
              dictionary_example: [
                "If you do that, you'll be sorry.",
                "I don't think you should put up with that.",
                "You can't wear those to a wedding.",
              ],
              learner_example: [
                "After that we have a break. (Skills for Life (Entry 1); A1; Polish)",
              ],
            },
            {
              level: "A2",
              pos: "pronoun",
              guideword: "REFERRING BACK",
              definition: "used to make a connection with an earlier statement",
              dictionary_example: [
                "My usual train was cancelled. That's why I'm so late.",
                "She tricked him, and that's what really upset him.",
              ],
              learner_example: [
                "I decided [not to] play football any more! That is why I want to sell them. (Key English Test; A2; Turkish)",
              ],
            },
            {
              level: "A2",
              pos: "pronoun",
              guideword: "REFERRING TO SOMETHING",
              definition:
                "used at the beginning of a relative clause to show what thing is being referred to",
              dictionary_example: [
                "They liked the restaurant that they ate lunch at.",
                "I brought you the book that you wanted.",
              ],
              learner_example: [
                "I want to sell my armchair that is 50 years old. (Key English Test; A2; Italian)",
              ],
            },
            {
              level: "B2",
              pos: "pronoun",
              guideword: "PAST",
              definition: "used to refer to events or experiences in the past",
              dictionary_example: ["That was before we had a car."],
              learner_example: [
                "That was when I went to live in Barcelona by myself in a student residence. (First Certificate in English; B2; Catalan)",
              ],
            },
            {
              level: "B2",
              pos: "pronoun",
              guideword: "REACTION",
              definition: "used to express a reaction to something",
              dictionary_example: [
                "I didn't know she'd been so ill. That's terrible.",
                "Turn the engine on, then put the car in gear. That's right.",
                "Smile for the camera. That's more like it.",
              ],
              learner_example: [""],
            },
            {
              level: "B2",
              pos: "adverb",
              guideword: "",
              definition:
                "used when describing the size, amount, or state of something or someone",
              dictionary_example: [
                "She's too young to walk that far.",
                "It wasn't (all) that good.",
              ],
              learner_example: [
                "My English isn't that bad, actually I have been taught English in school for six years. (First Certificate in English; B2; Dutch)",
              ],
            },
          ],
          synonym: [],
        },
        {
          word_idx: 4,
          raw_word: "assistance,",
          cefr: "B2",
          stopword: false,
          word: "assistance",
          lemma: "assistance",
          pos: "n.",
          html_description:
            '<div class="card_content_item" align="left"><div class="_pronoun">assistance (noun.)</div><p class="_txt">help</p><span class="_ex">Usage</span><ul class="_list"><li>Can I be of any assistance?</li><li>Teachers can\'t give pupils any assistance during exams.</li></ul></div>',
          description: [
            {
              level: "B2",
              pos: "noun",
              guideword: "",
              definition: "help",
              dictionary_example: [
                "Can I be of any assistance?",
                "Teachers can't give pupils any assistance during exams.",
              ],
              learner_example: [
                "Thank you for your assistance. (First Certificate in English; B2; Greek)",
              ],
            },
          ],
          synonym: [
            {
              word: "help",
              cefr: "A1.2",
              html_description:
                '<div class="card_content_item" align="left"><div class="_pronoun">help (verb.)</div><p class="_txt">to make it easier for someone to do something by doing part of the work yourself</p><span class="_ex">Usage</span><ul class="_list"><li> Thank you for helping. </li><li> Can I help you make dinner? </li><li> Dad always helps me with my homework. </li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">help (verb.)</div><p class="_txt">to provide advice, money, support, etc. to make it possible or easier for someone to do something</p><span class="_ex">Usage</span><ul class="_list"><li>I wonder if you could help me - I\'d like some information about flights to New Zealand.</li><li>My dad said he would help with the cost of buying a car.</li><li>I feel that learning English will help my chances of promotion at work.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">help (verb.)</div><p class="_txt">to make something better</p><span class="_ex">Usage</span><ul class="_list"><li> When you\'re nervous or scared, it helps to breathe slowly and deeply. </li><li>The drugs didn\'t seem to help (the pain).</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">help (noun.)</div><p class="_txt">when someone helps another person</p><span class="_ex">Usage</span><ul class="_list"><li> I was too embarrassed to ask for help. </li><li>Do you need any help with those boxes?</li><li>I could use some help with the cleaning.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">help (noun.)</div><p class="_txt">something or someone that helps</p><span class="_ex">Usage</span><ul class="_list"><li>Having a new computer would be a help.</li><li>He was a great help (to me) while my husband was away.</li></ul></div>',
            },
            {
              word: "aid",
              cefr: "B2.1",
              html_description:
                '<div class="card_content_item" align="left"><div class="_pronoun">aid (noun.)</div><p class="_txt">help or support</p><span class="_ex">Usage</span><ul class="_list"><li>She went to the aid of a man trapped in his car.</li><li>He applied for financial aid for college.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">aid (noun.)</div><p class="_txt">money, food, or equipment that is given to help a country or group of people</p><span class="_ex">Usage</span><ul class="_list"><li>Emergency aid was sent to the flood victims.</li><li>foreign aid</li><li>aid workers</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">aid (noun.)</div><p class="_txt">a piece of equipment that helps you to do something</p><span class="_ex">Usage</span><ul class="_list"><li>teaching aids such as books and videos</li><li>A good dictionary can be a useful aid to understanding a new language.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">aid (verb.)</div><p class="_txt">to help someone</p><span class="_ex">Usage</span><ul class="_list"><li>The project is designed to aid the homeless.</li><li>He was aided in his research by his knowledge of Greek.</li></ul></div>',
            },
            {
              word: "assist",
              cefr: "B2.7",
              html_description:
                '<div class="card_content_item" align="left"><div class="_pronoun">assist (verb.)</div><p class="_txt">to help</p><span class="_ex">Usage</span><ul class="_list"><li>The army arrived to assist in the search.</li><li>You will be expected to assist the editor with the selection of illustrations for the book.</li></ul></div>',
            },
          ],
        },
        {
          word_idx: 5,
          raw_word: "and",
          cefr: "A1",
          stopword: true,
          word: "and",
          lemma: "and",
          pos: "conj.",
          html_description:
            '<div class="card_content_item" align="left"><div class="_pronoun">and (conjunction.)</div><p class="_txt">used to join two words, phrases, parts of sentences or related statements together</p><span class="_ex">Usage</span><ul class="_list"><li>Ann and Jim</li><li>knives and forks</li><li>We kissed and hugged each other.</li><li>Straighten up your room. And don\'t forget to make your bed!</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">and (conjunction.)</div><p class="_txt">used to say that one thing happens after another thing</p><span class="_ex">Usage</span><ul class="_list"><li>I got dressed and had my breakfast.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">and (conjunction.)</div><p class="_txt">used when saying or adding numbers</p><span class="_ex">Usage</span><ul class="_list"><li>It cost a hundred and twenty dollars.</li><li>Two and three equals five.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">and (conjunction.)</div><p class="_txt">used instead of "to" after some verbs, such as "try" and "go"</p><span class="_ex">Usage</span><ul class="_list"><li>Try and eat something.</li><li>I asked him to go and find my glasses.</li><li> Wait and see what happens.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">and (conjunction.)</div><p class="_txt">used between two words which are the same to make their meaning stronger</p><span class="_ex">Usage</span><ul class="_list"><li>She spends hours and hours on the telephone.</li><li>The sound grew louder and louder.</li><li>We laughed and laughed.</li></ul></div>',
          description: [
            {
              level: "A1",
              pos: "conjunction",
              guideword: "ALSO",
              definition:
                "used to join two words, phrases, parts of sentences or related statements together",
              dictionary_example: [
                "Ann and Jim",
                "knives and forks",
                "We kissed and hugged each other.",
                "Straighten up your room. And don't forget to make your bed!",
              ],
              learner_example: [
                "I have got [a] nice bed, [a] mirror, [a] sofa and a table. (Skills for Life (Entry 1); A1; Slovak)",
              ],
            },
            {
              level: "A1",
              pos: "conjunction",
              guideword: "AFTER",
              definition:
                "used to say that one thing happens after another thing",
              dictionary_example: ["I got dressed and had my breakfast."],
              learner_example: [
                "I get up early [in the] morning and I have breakfast. (Skills for Life (Entry 1); A1; Somali)",
              ],
            },
            {
              level: "A1",
              pos: "conjunction",
              guideword: "NUMBERS",
              definition: "used when saying or adding numbers",
              dictionary_example: [
                "It cost a hundred and twenty dollars.",
                "Two and three equals five.",
              ],
              learner_example: [
                "It's about two and a half hours. (Key English Test; A2; Greek)",
              ],
            },
            {
              level: "A2",
              pos: "conjunction",
              guideword: "AFTER VERB",
              definition:
                'used instead of "to" after some verbs, such as "try" and "go"',
              dictionary_example: [
                "Try and eat something.",
                "I asked him to go and find my glasses.",
                " Wait and see what happens.",
              ],
              learner_example: [
                "I hope [to] go and see Disneyland. (Key English Test; A2; French)",
              ],
            },
            {
              level: "B1",
              pos: "conjunction",
              guideword: "EMPHASIZE",
              definition:
                "used between two words which are the same to make their meaning stronger",
              dictionary_example: [
                "She spends hours and hours on the telephone.",
                "The sound grew louder and louder.",
                "We laughed and laughed.",
              ],
              learner_example: [
                "The situation became harder and harder. (Preliminary English Test; B1; Swiss German)",
              ],
            },
          ],
          synonym: [],
        },
        {
          word_idx: 6,
          raw_word: "regimes",
          cefr: "C2",
          stopword: false,
          word: "regimes",
          lemma: "regime",
          pos: "n.",
          html_description:
            '<div class="card_content_item" align="left"><div class="_pronoun">regime (noun.)</div><p class="_txt">a system of government or other control, especially one that people do not approve of</p><span class="_ex">Usage</span><ul class="_list"><li>the former Communist regime</li></ul></div>',
          description: [
            {
              level: "C2",
              pos: "noun",
              guideword: "",
              definition:
                "a system of government or other control, especially one that people do not approve of",
              dictionary_example: ["the former Communist regime"],
              learner_example: [
                "To my mind this film is highly recommendable to Germans who want to learn more about their history and to everybody who wants to learn about the consequences of a totalitarian political regime. (Certificate of Proficiency in English; C2; German)",
              ],
            },
          ],
          synonym: [
            {
              word: "government",
              cefr: "B1.3",
              html_description:
                '<div class="card_content_item" align="left"><div class="_pronoun">government (noun.)</div><p class="_txt">the group of people who officially control a country</p><span class="_ex">Usage</span><ul class="_list"><li>The government has recently cut taxes.</li><li>senior government officials</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">government (noun.)</div><p class="_txt">the method or process of governing a country</p><span class="_ex">Usage</span><ul class="_list"><li>a new style of government</li></ul></div>',
            },
            {
              word: "authorities",
              cefr: "B2.6",
              html_description:
                '<div class="card_content_item" align="left"><div class="_pronoun">authorities</div><p class="_txt">the group of people with official legal power to make decisions or make people obey the laws in a particular area, such as the police or a local government department: </p><span class="_ex">Usage</span><ul class="_list">I\'m going to report these potholes to the authorities.</ul></div>',
            },
            {
              word: "regimen",
              cefr: "C1.7",
              html_description:
                '<div class="card_content_item" align="left"><div class="_pronoun">regimen</div><p class="_txt">any set of rules about food and exercise that someone follows, especially in order to improve their health: </p><span class="_ex">Usage</span><ul class="_list">After his heart attack the doctor put him on a strict regimen.</ul></div>',
            },
            {
              word: "regime",
              cefr: "C2.7",
              html_description:
                '<div class="card_content_item" align="left"><div class="_pronoun">regime (noun.)</div><p class="_txt">a system of government or other control, especially one that people do not approve of</p><span class="_ex">Usage</span><ul class="_list"><li>the former Communist regime</li></ul></div>',
            },
          ],
        },
        {
          word_idx: 7,
          raw_word: "will",
          cefr: "A1",
          stopword: true,
          word: "will",
          lemma: "will",
          pos: "modal v.",
          html_description:
            '<div class="card_content_item" align="left"><div class="_pronoun">will (modal verb.)</div><p class="_txt">used to talk about what is going to happen in the future, especially things that you are certain about</p><span class="_ex">Usage</span><ul class="_list"><li>Ben will be five years old next month.</li><li>The train leaves at 8:58, so we\'ll be in Boston by early afternoon.</li><li>I\'ll see him on Saturday.</li><li>Will Susie be there?</li><li>It won\'t be easy to find another secretary.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">will (modal verb.)</div><p class="_txt">used to talk about what someone or something is able or willing to do</p><span class="_ex">Usage</span><ul class="_list"><li>I\'ll give you a ride.</li><li>I\'ve asked her but she won\'t come.</li><li>The car won\'t start.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">will (modal verb.)</div><p class="_txt">used to ask someone to do something</p><span class="_ex">Usage</span><ul class="_list"><li>Will you give me her address?</li><li>Will you give that to Tony when you see him, please?</li><li>Will you join us for a drink, Evie?</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">will (modal verb.)</div><p class="_txt">used in conditional sentences that start with \'if\' and use the present tense</p><span class="_ex">Usage</span><ul class="_list"><li>If he\'s late again, I\'ll be very angry.</li><li>I won\'t be surprised if she cancels the trip.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">will (noun.)</div><p class="_txt">the mental power used to control and direct your thoughts and actions, or a determination to do something, despite any difficulties or opposition</p><span class="_ex">Usage</span><ul class="_list"><li>From an early age she had a very strong will.</li><li>After six months in the hospital she began to lose the will to live.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">will (noun.)</div><p class="_txt">what someone wants to happen</p><span class="_ex">Usage</span><ul class="_list"><li> Against their will, they were forced to hold a meeting.</li><li>The state can\'t just impose its will on local communities.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">will (noun.)</div><p class="_txt">an official statement of what a person has decided should be done with their money and property after their death</p><span class="_ex">Usage</span><ul class="_list"><li>Have you made a will yet?</li><li>She left me some money in her will.</li></ul></div>',
          description: [
            {
              level: "A2",
              pos: "modal verb",
              guideword: "FUTURE",
              definition:
                "used to talk about what is going to happen in the future, especially things that you are certain about",
              dictionary_example: [
                "Ben will be five years old next month.",
                "The train leaves at 8:58, so we'll be in Boston by early afternoon.",
                "I'll see him on Saturday.",
                "Will Susie be there?",
                "It won't be easy to find another secretary.",
              ],
              learner_example: [
                "I will arrive at 8 o'clock. (Key English Test; A2; Turkish)",
              ],
            },
            {
              level: "A1",
              pos: "modal verb",
              guideword: "ABLE/WILLING",
              definition:
                "used to talk about what someone or something is able or willing to do",
              dictionary_example: [
                "I'll give you a ride.",
                "I've asked her but she won't come.",
                "The car won't start.",
              ],
              learner_example: [
                "I'll cook for you. (Skills for Life (Entry 2); A2; Italian)",
              ],
            },
            {
              level: "A2",
              pos: "modal verb",
              guideword: "ASK",
              definition: "used to ask someone to do something",
              dictionary_example: [
                "Will you give me her address?",
                "Will you give that to Tony when you see him, please?",
                "Will you join us for a drink, Evie?",
              ],
              learner_example: [
                "Will you help me to [paint] my bedroom? (Key English Test; A2; Bengali)",
              ],
            },
            {
              level: "A2",
              pos: "modal verb",
              guideword: "IF",
              definition:
                "used in conditional sentences that start with 'if' and use the present tense",
              dictionary_example: [
                "If he's late again, I'll be very angry.",
                "I won't be surprised if she cancels the trip.",
              ],
              learner_example: [
                "If you want [me] to, I'll bring you some of my CDs. (Key English Test; A2; Swiss German)",
              ],
            },
            {
              level: "B2",
              pos: "noun",
              guideword: "MENTAL POWER",
              definition:
                "the mental power used to control and direct your thoughts and actions, or a determination to do something, despite any difficulties or opposition",
              dictionary_example: [
                "From an early age she had a very strong will.",
                "After six months in the hospital she began to lose the will to live.",
              ],
              learner_example: [
                "How would you find the will to look for another job? (First Certificate in English; B2; French)",
              ],
            },
            {
              level: "C1",
              pos: "noun",
              guideword: "WHAT SOMEONE WANTS",
              definition: "what someone wants to happen",
              dictionary_example: [
                " Against their will, they were forced to hold a meeting.",
                "The state can't just impose its will on local communities.",
              ],
              learner_example: [
                "But if you go [and] learn a language against your will, then it's better not to go at all. (Certificate in Advanced English; C1; Portuguese)",
              ],
            },
            {
              level: "C2",
              pos: "noun",
              guideword: "DOCUMENT",
              definition:
                "an official statement of what a person has decided should be done with their money and property after their death",
              dictionary_example: [
                "Have you made a will yet?",
                "She left me some money in her will.",
              ],
              learner_example: [
                "This uncle of mine, rich as he was, decided to make a will some years before his death. (Certificate of Proficiency in English; C2; Greek)",
              ],
            },
          ],
          synonym: [],
        },
        {
          word_idx: 8,
          raw_word: "have",
          cefr: "A1",
          stopword: true,
          word: "have",
          lemma: "have",
          pos: "v.",
          html_description:
            '<div class="card_content_item" align="left"><div class="_pronoun">have (auxiliary verb.)</div><p class="_txt">used with the past participle of another verb to form the present and past perfect tenses</p><span class="_ex">Usage</span><ul class="_list"><li> Have you seen Jake? </li><li> He hasn\'t visited us yet.</li><li> I\'ve met his wife before.</li><li> It would have been better to tell the truth.</li><li> He\'s been working in Denver for two years now.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">have (verb.)</div><p class="_txt">to own or possess</p><span class="_ex">Usage</span><ul class="_list"><li>They have a big house.</li><li>He has blue eyes.</li><li>She has a lot of experience.</li><li>Do you have time to finish the report today?</li><li>I\'ve got two brothers.</li><li>He\'s got a degree in journalism.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">have (verb.)</div><p class="_txt">If you have a particular illness, you suffer from it.</p><span class="_ex">Usage</span><ul class="_list"><li>I have a cold.</li><li>Have you ever had the measles?</li><li>Dad has a headache.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">have (verb.)</div><p class="_txt">to eat or drink something</p><span class="_ex">Usage</span><ul class="_list"><li>I had a turkey sandwich for lunch.</li><li>Can I have a drink of water?</li><li>Let\'s have a snack before the movie.</li><li>When are we having dinner?</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">have (verb.)</div><p class="_txt">to give birth to a baby</p><span class="_ex">Usage</span><ul class="_list"><li>Elaine had a baby girl yesterday.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">have (verb.)</div><p class="_txt">to cause something to be in a particular state</p><span class="_ex">Usage</span><ul class="_list"><li>He had dinner ready by the time we got home.</li><li>We had the tent up within ten minutes.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">have (verb.)</div><p class="_txt">used to say that someone is holding something, or that someone or something is with them</p><span class="_ex">Usage</span><ul class="_list"><li>He had a pen in his hand.</li><li>She had a little boy with her.</li></ul></div>',
          description: [
            {
              level: "A2",
              pos: "auxiliary verb",
              guideword: "",
              definition:
                "used with the past participle of another verb to form the present and past perfect tenses",
              dictionary_example: [
                " Have you seen Jake? ",
                " He hasn't visited us yet.",
                " I've met his wife before.",
                " It would have been better to tell the truth.",
                " He's been working in Denver for two years now.",
              ],
              learner_example: [
                "Dear Jo, Sorry I haven't written sooner. (Key English Test; A2; Spanish)",
              ],
            },
            {
              level: "A1",
              pos: "verb",
              guideword: "POSSESS",
              definition: "to own or possess",
              dictionary_example: [
                "They have a big house.",
                "He has blue eyes.",
                "She has a lot of experience.",
                "Do you have time to finish the report today?",
                "I've got two brothers.",
                "He's got a degree in journalism.",
              ],
              learner_example: [
                "I had [a] big house in Somalia, now I hav[e] [a] small house. (Skills for Life (Entry 1); A1; Somali)",
              ],
            },
            {
              level: "A1",
              pos: "verb",
              guideword: "BE ILL",
              definition:
                "If you have a particular illness, you suffer from it.",
              dictionary_example: [
                "I have a cold.",
                "Have you ever had the measles?",
                "Dad has a headache.",
              ],
              learner_example: [
                "I know you had [the] flu. (Key English Test; A2; Spanish)",
              ],
            },
            {
              level: "A1",
              pos: "verb",
              guideword: "EAT/DRINK",
              definition: "to eat or drink something",
              dictionary_example: [
                "I had a turkey sandwich for lunch.",
                "Can I have a drink of water?",
                "Let's have a snack before the movie.",
                "When are we having dinner?",
              ],
              learner_example: [
                "I have dinner [at] 5 pm. (Skills for Life (Entry 1); A1; French)",
              ],
            },
            {
              level: "A2",
              pos: "verb",
              guideword: "BABY",
              definition: "to give birth to a baby",
              dictionary_example: ["Elaine had a baby girl yesterday."],
              learner_example: [
                "And later, we can go [to] Mary's house, because she has had a baby, and I would like to see her. (Key English Test; A2; Spanish)",
              ],
            },
            {
              level: "B1",
              pos: "verb",
              guideword: "CAUSE",
              definition: "to cause something to be in a particular state",
              dictionary_example: [
                "He had dinner ready by the time we got home.",
                "We had the tent up within ten minutes.",
              ],
              learner_example: [
                "We had everything ready in case of an emergency or a chaos situation. (First Certificate in English; B2; Spanish)",
              ],
            },
            {
              level: "B1",
              pos: "verb",
              guideword: "HOLD",
              definition:
                "used to say that someone is holding something, or that someone or something is with them",
              dictionary_example: [
                "He had a pen in his hand.",
                "She had a little boy with her.",
              ],
              learner_example: [
                "Maria had the phone in her hand. (Preliminary English Test; B1; Spanish)",
              ],
            },
          ],
          synonym: [],
        },
        {
          word_idx: 9,
          raw_word: "a",
          cefr: "A1",
          stopword: true,
          word: "a",
          lemma: "a",
          pos: "det.",
          html_description:
            '<div class="card_content_item" align="left"><div class="_pronoun">a (determiner.)</div><p class="_txt">used before a noun to refer to a single thing or person but not a particular thing or person or not one that you have referred to before</p><span class="_ex">Usage</span><ul class="_list"><li>She\'s got a boyfriend.</li><li>Someone left an umbrella here yesterday.</li><li>Is he a friend of yours?</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">a (determiner.)</div><p class="_txt">used to mean any or every thing or person of the type you are referring to</p><span class="_ex">Usage</span><ul class="_list"><li>Can you ride a bike?</li><li>A child needs love.</li><li>A cheetah can run faster than a lion.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">a (determiner.)</div><p class="_txt">one</p><span class="_ex">Usage</span><ul class="_list"><li>a hundred dollars</li><li>a dozen eggs</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">a (determiner.)</div><p class="_txt">used to state what type of thing or person something or someone is</p><span class="_ex">Usage</span><ul class="_list"><li>Sally\'s an engineer.</li><li>It\'s a rabbit.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">a (determiner.)</div><p class="_txt">used before some phrases saying how much of something there is</p><span class="_ex">Usage</span><ul class="_list"><li>a few days</li><li>a little bit of yarn</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">a (determiner.)</div><p class="_txt">used before some action nouns when referring to one example of the action</p><span class="_ex">Usage</span><ul class="_list"><li>Take a look at this, Jez.</li><li>I\'m just going to take a ride.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">a (determiner.)</div><p class="_txt">used before the first but not the second of two nouns that are often used together</p><span class="_ex">Usage</span><ul class="_list"><li>a cup and saucer</li><li>a knife and fork</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">a (determiner.)</div><p class="_txt">used when referring to a unit of something, especially something you eat or drink</p><span class="_ex">Usage</span><ul class="_list"><li>I\'d love a coffee.</li><li>All I had for lunch was a yogurt.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">a (determiner.)</div><p class="_txt">used between a fraction and a unit of measurement</p><span class="_ex">Usage</span><ul class="_list"><li>half a mile</li><li>a quarter of a kilo</li><li>three-quarters of an hour</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">a (determiner.)</div><p class="_txt">used when referring to a certain period of time</p><span class="_ex">Usage</span><ul class="_list"><li>Take one tablet three times a day.</li><li>She earns $100,000 a year.</li></ul></div>',
          description: [
            {
              level: "A1",
              pos: "determiner",
              guideword: "NOT PARTICULAR",
              definition:
                "used before a noun to refer to a single thing or person but not a particular thing or person or not one that you have referred to before",
              dictionary_example: [
                "She's got a boyfriend.",
                "Someone left an umbrella here yesterday.",
                "Is he a friend of yours?",
              ],
              learner_example: [
                "You can make a quick snack, for example a sandwich. (Skills for Life (Entry 1); A1; German)",
              ],
            },
            {
              level: "A1",
              pos: "determiner",
              guideword: "ANY/EVERY",
              definition:
                "used to mean any or every thing or person of the type you are referring to",
              dictionary_example: [
                "Can you ride a bike?",
                "A child needs love.",
                "A cheetah can run faster than a lion.",
              ],
              learner_example: [
                "I don't need it because I'm too old to have a doll. (Key English Test; A2; French)",
              ],
            },
            {
              level: "A1",
              pos: "determiner",
              guideword: "ONE",
              definition: "one",
              dictionary_example: ["a hundred dollars", "a dozen eggs"],
              learner_example: [
                "Dear Ally, All my friends [from] school were here, more than a hundred people. (Key English Test; A2; Portuguese)",
              ],
            },
            {
              level: "A1",
              pos: "determiner",
              guideword: "TYPE",
              definition:
                "used to state what type of thing or person something or someone is",
              dictionary_example: ["Sally's an engineer.", "It's a rabbit."],
              learner_example: [
                "She's a teacher. (Skills for Life (Entry 1); A1; Tamil)",
              ],
            },
            {
              level: "A2",
              pos: "determiner",
              guideword: "AMOUNTS",
              definition:
                "used before some phrases saying how much of something there is",
              dictionary_example: ["a few days", "a little bit of yarn"],
              learner_example: [
                "Usually people in Poland are very busy so we do not have a lot of time for cooking. (Skills for Life (Entry 2); A2; Slovak)",
              ],
            },
            {
              level: "A2",
              pos: "determiner",
              guideword: "AN ACTION",
              definition:
                "used before some action nouns when referring to one example of the action",
              dictionary_example: [
                "Take a look at this, Jez.",
                "I'm just going to take a ride.",
              ],
              learner_example: [
                "I took a shower and ate my breakfast. (Preliminary English Test; B1; Thai)",
              ],
            },
            {
              level: "A2",
              pos: "determiner",
              guideword: "TWO NOUNS",
              definition:
                "used before the first but not the second of two nouns that are often used together",
              dictionary_example: ["a cup and saucer", "a knife and fork"],
              learner_example: [
                "I like a clean fork and knife. (Preliminary English Test; B1; Polish)",
              ],
            },
            {
              level: "A2",
              pos: "determiner",
              guideword: "UNIT",
              definition:
                "used when referring to a unit of something, especially something you eat or drink",
              dictionary_example: [
                "I'd love a coffee.",
                "All I had for lunch was a yogurt.",
              ],
              learner_example: [
                "We both had a coke and a hot dog. (Preliminary English Test; B1; German)",
              ],
            },
            {
              level: "A2",
              pos: "determiner",
              guideword: "WITH FRACTION",
              definition: "used between a fraction and a unit of measurement",
              dictionary_example: [
                "half a mile",
                "a quarter of a kilo",
                "three-quarters of an hour",
              ],
              learner_example: [
                "The lesson is half an hour but you have to be ther[e] 10 minutes before. (Key English Test; A2; Greek)",
              ],
            },
            {
              level: "A2",
              pos: "determiner",
              guideword: "PERIOD OF TIME",
              definition: "used when referring to a certain period of time",
              dictionary_example: [
                "Take one tablet three times a day.",
                "She earns $100,000 a year.",
              ],
              learner_example: [
                "I can write to him or her twice a week. (Key English Test; A2; Chinese)",
              ],
            },
          ],
          synonym: [],
        },
        {
          word_idx: 10,
          raw_word: "stronger",
          cefr: "A2",
          stopword: false,
          word: "stronger",
          lemma: "strong",
          pos: "adj.",
          html_description:
            '<div class="card_content_item" align="left"><div class="_pronoun">strong (adjective.)</div><p class="_txt">A strong person or animal is physically powerful.</p><span class="_ex">Usage</span><ul class="_list"><li>strong arms/legs</li><li>Are you strong enough to lift this table by yourself?</li><li>She must be very strong to carry that much weight in her backpack.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">strong (adjective.)</div><p class="_txt">A strong object does not break or get damaged easily.</p><span class="_ex">Usage</span><ul class="_list"><li>a strong box/chair</li><li>The table is made with very strong glass.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">strong (adjective.)</div><p class="_txt">very noticeable or powerful</p><span class="_ex">Usage</span><ul class="_list"><li>strong coffee</li><li>There\'s a strong smell of gas!</li><li>I can give you a stronger pain-killing medication if you need it.</li><li>It\'s surprising what strong memories a photograph can produce.</li><li>He bears a strong resemblance to his brother.</li><li>My grandmother had a strong influence on me.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">strong (adjective.)</div><p class="_txt">produced using a lot of power</p><span class="_ex">Usage</span><ul class="_list"><li>a strong kick/blow</li><li>Her voice was clear and strong.</li><li>Strong winds are forecast in the area for the next few days.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">strong (adjective.)</div><p class="_txt">Strong relationships last for a long time, and are not easily spoiled.</p><span class="_ex">Usage</span><ul class="_list"><li>strong relationships</li><li>We have very strong family ties.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">strong (adjective.)</div><p class="_txt">of a good quality or level and likely to be successful or effective</p><span class="_ex">Usage</span><ul class="_list"><li>a strong economy</li><li>They\'re a very strong team.</li><li>She\'s the strongest candidate we\'ve interviewed for the job.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">strong (adjective.)</div><p class="_txt">A strong feeling, belief, or opinion is felt in a very deep and serious way.</p><span class="_ex">Usage</span><ul class="_list"><li>She has strong opinions/views.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">strong (adjective.)</div><p class="_txt">If a person or their personality is strong, they are confident and able to deal with problems well.</p><span class="_ex">Usage</span><ul class="_list"><li>All my aunts are strong women.</li><li>He has a strong personality, but don\'t let him frighten you.</li></ul></div>',
          description: [
            {
              level: "A2",
              pos: "adjective",
              guideword: "PHYSICALLY POWERFUL",
              definition: "A strong person or animal is physically powerful.",
              dictionary_example: [
                "strong arms/legs",
                "Are you strong enough to lift this table by yourself?",
                "She must be very strong to carry that much weight in her backpack.",
              ],
              learner_example: [
                "I like this game because the story is very good end the p[rotagon]ist is so strong! (Key English Test; A2; Italian)",
              ],
            },
            {
              level: "B1",
              pos: "adjective",
              guideword: "DIFFICULT TO BREAK",
              definition:
                "A strong object does not break or get damaged easily.",
              dictionary_example: [
                "a strong box/chair",
                "The table is made with very strong glass.",
              ],
              learner_example: [
                "In winter I wear big jackets, gloves, warm trousers and strong boots. (Preliminary English Test; B1; Spanish)",
              ],
            },
            {
              level: "B1",
              pos: "adjective",
              guideword: "NOTICEABLE",
              definition: "very noticeable or powerful",
              dictionary_example: [
                "strong coffee",
                "There's a strong smell of gas!",
                "I can give you a stronger pain-killing medication if you need it.",
                "It's surprising what strong memories a photograph can produce.",
                "He bears a strong resemblance to his brother.",
                "My grandmother had a strong influence on me.",
              ],
              learner_example: [
                "We took a lot of food and water, because of the weather which was very hot, with a strong sun. (Preliminary English Test; B1; Portuguese)",
              ],
            },
            {
              level: "B1",
              pos: "adjective",
              guideword: "PRODUCED WITH POWER",
              definition: "produced using a lot of power",
              dictionary_example: [
                "a strong kick/blow",
                "Her voice was clear and strong.",
                "Strong winds are forecast in the area for the next few days.",
              ],
              learner_example: [
                "Unluck[i]ly, the rest of the days were cloudy and with strong winds. (Preliminary English Test; B1; Spanish)",
              ],
            },
            {
              level: "B1",
              pos: "adjective",
              guideword: "RELATIONSHIP",
              definition:
                "Strong relationships last for a long time, and are not easily spoiled.",
              dictionary_example: [
                "strong relationships",
                "We have very strong family ties.",
              ],
              learner_example: [
                "Actually, now our relationship is very strong. (Preliminary English Test; B1; Italian)",
              ],
            },
            {
              level: "B2",
              pos: "adjective",
              guideword: "GOOD QUALITY",
              definition:
                "of a good quality or level and likely to be successful or effective",
              dictionary_example: [
                "a strong economy",
                "They're a very strong team.",
                "She's the strongest candidate we've interviewed for the job.",
              ],
              learner_example: [
                "My reason for applying for this trip is that I am very interested in meeting people from different countries and as I have a strong background in languages I would be very helpful in the communication field. (First Certificate in English; B2; Portuguese)",
              ],
            },
            {
              level: "B2",
              pos: "adjective",
              guideword: "DETERMINED",
              definition:
                "A strong feeling, belief, or opinion is felt in a very deep and serious way.",
              dictionary_example: ["She has strong opinions/views."],
              learner_example: [
                "Nowadays the importance of family life is a matter which arouses fierce[ly] strong passions. (First Certificate in English; B2; Greek)",
              ],
            },
            {
              level: "B2",
              pos: "adjective",
              guideword: "PERSONALITY",
              definition:
                "If a person or their personality is strong, they are confident and able to deal with problems well.",
              dictionary_example: [
                "All my aunts are strong women.",
                "He has a strong personality, but don't let him frighten you.",
              ],
              learner_example: [
                "Mary was a strong and intelligent woman. She was stronger and her personality was more developed than her aunt['s]. (First Certificate in English; B2; German)",
              ],
            },
          ],
          synonym: [
            {
              word: "warm",
              cefr: "A1.4",
              html_description:
                '<div class="card_content_item" align="left"><div class="_pronoun">warm (adjective.)</div><p class="_txt">having a temperature between cool and hot</p><span class="_ex">Usage</span><ul class="_list"><li>Are you warm enough or should I turn up the heat?</li><li>She had her hands in her pockets to keep them warm.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">warm (adjective.)</div><p class="_txt">describes clothes and covers made of a material that keeps you warm</p><span class="_ex">Usage</span><ul class="_list"><li>I don\'t have a warm winter coat.</li><li>Those gloves look nice and warm.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">warm (adjective.)</div><p class="_txt">friendly and loving</p><span class="_ex">Usage</span><ul class="_list"><li>They\'re a very warm family.</li><li>He has a nice, warm smile.</li><li>I\'d like to give a warm welcome to our guests this evening.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">warm (verb.)</div><p class="_txt">to become warm or make something become warm</p><span class="_ex">Usage</span><ul class="_list"><li>When the weather warms up, we\'ll go camping.</li><li>Rub the oil between your hands to warm it.</li><li>It takes a little while to warm up the house.</li></ul></div>',
            },
            {
              word: "strong",
              cefr: "A2.3",
              html_description:
                '<div class="card_content_item" align="left"><div class="_pronoun">strong (adjective.)</div><p class="_txt">A strong person or animal is physically powerful.</p><span class="_ex">Usage</span><ul class="_list"><li>strong arms/legs</li><li>Are you strong enough to lift this table by yourself?</li><li>She must be very strong to carry that much weight in her backpack.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">strong (adjective.)</div><p class="_txt">A strong object does not break or get damaged easily.</p><span class="_ex">Usage</span><ul class="_list"><li>a strong box/chair</li><li>The table is made with very strong glass.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">strong (adjective.)</div><p class="_txt">very noticeable or powerful</p><span class="_ex">Usage</span><ul class="_list"><li>strong coffee</li><li>There\'s a strong smell of gas!</li><li>I can give you a stronger pain-killing medication if you need it.</li><li>It\'s surprising what strong memories a photograph can produce.</li><li>He bears a strong resemblance to his brother.</li><li>My grandmother had a strong influence on me.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">strong (adjective.)</div><p class="_txt">produced using a lot of power</p><span class="_ex">Usage</span><ul class="_list"><li>a strong kick/blow</li><li>Her voice was clear and strong.</li><li>Strong winds are forecast in the area for the next few days.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">strong (adjective.)</div><p class="_txt">Strong relationships last for a long time, and are not easily spoiled.</p><span class="_ex">Usage</span><ul class="_list"><li>strong relationships</li><li>We have very strong family ties.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">strong (adjective.)</div><p class="_txt">of a good quality or level and likely to be successful or effective</p><span class="_ex">Usage</span><ul class="_list"><li>a strong economy</li><li>They\'re a very strong team.</li><li>She\'s the strongest candidate we\'ve interviewed for the job.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">strong (adjective.)</div><p class="_txt">A strong feeling, belief, or opinion is felt in a very deep and serious way.</p><span class="_ex">Usage</span><ul class="_list"><li>She has strong opinions/views.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">strong (adjective.)</div><p class="_txt">If a person or their personality is strong, they are confident and able to deal with problems well.</p><span class="_ex">Usage</span><ul class="_list"><li>All my aunts are strong women.</li><li>He has a strong personality, but don\'t let him frighten you.</li></ul></div>',
            },
            {
              word: "substantial",
              cefr: "B2.9",
              html_description:
                '<div class="card_content_item" align="left"><div class="_pronoun">substantial (adjective.)</div><p class="_txt">large in amount</p><span class="_ex">Usage</span><ul class="_list"><li>a substantial sum of money</li><li>The first draft of his novel needed a substantial amount of rewriting.</li><li>The findings show a substantial difference between the opinions of men and women.</li></ul></div>',
            },
            {
              word: "impregnable",
              cefr: "C2.1",
              html_description:
                '<div class="card_content_item" align="left"><div class="_pronoun">impregnable</div><p class="_txt">A building or other place that is impregnable is so strongly built and/or defended that it cannot be entered by force: </p><span class="_ex">Usage</span><ul class="_list">Despite burglar alarms and window locks, homes are never impregnable against determined thieves.</ul></div>',
            },
            {
              word: "unattackable",
              cefr: "unk",
              html_description: "",
            },
          ],
        },
        {
          word_idx: 11,
          raw_word: "grip",
          cefr: "B2",
          stopword: false,
          word: "grip",
          lemma: "grip",
          pos: "n.",
          html_description:
            '<div class="card_content_item" align="left"><div class="_pronoun">grip (verb.)</div><p class="_txt">to hold something very tightly</p><span class="_ex">Usage</span><ul class="_list"><li>The baby gripped my finger with her tiny hand.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">grip (verb.)</div><p class="_txt">When an emotion grips you, you feel it very strongly.</p><span class="_ex">Usage</span><ul class="_list"><li>He was gripped by fear.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">grip (verb.)</div><p class="_txt">to keep someone\'s attention completely</p><span class="_ex">Usage</span><ul class="_list"><li>This trial has gripped the whole nation.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">grip (noun.)</div><p class="_txt">when you hold something tightly</p><span class="_ex">Usage</span><ul class="_list"><li>She tightened her grip on my arm.</li></ul></div>',
          description: [
            {
              level: "B2",
              pos: "verb",
              guideword: "HOLD",
              definition: "to hold something very tightly",
              dictionary_example: [
                "The baby gripped my finger with her tiny hand.",
              ],
              learner_example: [
                "I gripped the steering wheel, fixed my eyes firmly on the road, and bravely drove up to Scotland. (First Certificate in English; B2; French)",
              ],
            },
            {
              level: "C2",
              pos: "verb",
              guideword: "EMOTION",
              definition:
                "When an emotion grips you, you feel it very strongly.",
              dictionary_example: ["He was gripped by fear."],
              learner_example: [
                "But when she found out, a cold fe[e]ling of shock gripped her. (Certificate of Proficiency in English; C2; Spanish)",
              ],
            },
            {
              level: "C2",
              pos: "verb",
              guideword: "INTEREST",
              definition: "to keep someone's attention completely",
              dictionary_example: ["This trial has gripped the whole nation."],
              learner_example: [
                "I was gazing at the stage and was completely gripped by the music. (Certificate of Proficiency in English; C2; Portuguese)",
              ],
            },
            {
              level: "B2",
              pos: "noun",
              guideword: "",
              definition: "when you hold something tightly",
              dictionary_example: ["She tightened her grip on my arm."],
              learner_example: [
                "Then suddenly I lost [my] grip o[n] the papers and they all dropped to the floor and landed in a great heap. (First Certificate in English; B2; Swedish)",
              ],
            },
          ],
          synonym: [
            {
              word: "handle",
              cefr: "B1.4",
              html_description:
                '<div class="card_content_item" align="left"><div class="_pronoun">handle (verb.)</div><p class="_txt">to deal with something</p><span class="_ex">Usage</span><ul class="_list"><li>I thought he handled the problem/situation very well.</li><li>If you can\'t handle the job I\'ll get someone else to do it.</li><li>Who handles the marketing in your company?</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">handle (verb.)</div><p class="_txt">to touch, hold, or pick up something</p><span class="_ex">Usage</span><ul class="_list"><li>You must wash your hands before handling food.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">handle (noun.)</div><p class="_txt">the part of something that you use to hold it or open it</p><span class="_ex">Usage</span><ul class="_list"><li>a door handle</li><li>I can\'t pick the kettle up - the handle\'s too hot.</li><li>She turned the handle and slowly opened the door.</li></ul></div>',
            },
            {
              word: "transfix",
              cefr: "B2.5",
              html_description:
                '<div class="card_content_item" align="left"><div class="_pronoun">transfix</div><p class="_txt">to make a person or animal unable to move or stop looking at something because they are so interested, surprised, or frightened: </p><span class="_ex">Usage</span><ul class="_list">The conference delegates were transfixed by her speech.</ul></div>',
            },
            {
              word: "clench",
              cefr: "C1.3",
              html_description:
                '<div class="card_content_item" align="left"><div class="_pronoun">clench</div><p class="_txt">to close or hold something very tightly, often in a determined or angry way: </p><span class="_ex">Usage</span><ul class="_list">The old man clenched his fist and waved it angrily at us.</ul></div>',
            },
            {
              word: "traction",
              cefr: "C1.8",
              html_description:
                '<div class="card_content_item" align="left"><div class="_pronoun">traction</div><p class="_txt">the ability of a wheel or tyre to hold the ground without sliding: </p><span class="_ex">Usage</span><ul class="_list">In deep snow, people should use snow tyres on their vehicles to give them better traction.</ul></div>',
            },
            {
              word: "spellbind",
              cefr: "unk",
              html_description: "",
            },
          ],
        },
        {
          word_idx: 12,
          raw_word: "on",
          cefr: "A1",
          stopword: true,
          word: "on",
          lemma: "on",
          pos: "prep.",
          html_description:
            '<div class="card_content_item" align="left"><div class="_pronoun">on (preposition.)</div><p class="_txt">on or onto a surface</p><span class="_ex">Usage</span><ul class="_list"><li>Ouch! You stepped on my foot.</li><li>I dropped my pen on the floor.</li><li>Look at all the books on your desk!</li><li>We put any medicines on a high shelf.</li><li>Your suitcase is on a shelf in the closet.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">on (preposition.)</div><p class="_txt">used to show the day or date when something happens</p><span class="_ex">Usage</span><ul class="_list"><li>Some of the stores aren\'t open on Sundays.</li><li>What are you doing on Friday?</li><li>My birthday\'s on the 30th of May.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">on (preposition.)</div><p class="_txt">covering, touching, attached to or hanging from something</p><span class="_ex">Usage</span><ul class="_list"><li>You\'ve got blood on your shirt.</li><li>Which finger do you wear your ring on?</li><li>We could hang this picture on the wall next to the door.</li><li>Dogs should be kept on a leash at all times.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">on (preposition.)</div><p class="_txt">used to refer to a place when giving directions</p><span class="_ex">Usage</span><ul class="_list"><li>Our house is the first on the left after the post office.</li><li>Turn right on Broadway.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">on (preposition.)</div><p class="_txt">used for showing some methods of traveling</p><span class="_ex">Usage</span><ul class="_list"><li>He called to say he\'s on the bus and will be here in a few minutes.</li><li>She\'ll be arriving on the five-thirty train.</li><li>We went to France on the ferry.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">on (preposition.)</div><p class="_txt">in a particular place</p><span class="_ex">Usage</span><ul class="_list"><li>the diagram on page 22</li><li>They lived on a farm.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">on (preposition.)</div><p class="_txt">used to show the way in which something is recorded or broadcast</p><span class="_ex">Usage</span><ul class="_list"><li>What\'s on television tonight?</li><li>When\'s that movie coming out on DVD?</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">on (preposition.)</div><p class="_txt">used to show what money or time is used for</p><span class="_ex">Usage</span><ul class="_list"><li>She refuses to spend more than $30 on a pair of shoes.</li><li>I\'ve wasted too much time on this already.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">on (preposition.)</div><p class="_txt">about</p><span class="_ex">Usage</span><ul class="_list"><li>a book on plants</li><li>Her thesis is on Italian women\'s literature.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">on (preposition.)</div><p class="_txt">next to or along the side of a place or area</p><span class="_ex">Usage</span><ul class="_list"><li>New York is on the Hudson River.</li><li>Our house was on Sturton Street.</li><li>Strasbourg is on the border of France and Germany.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">on (preposition.)</div><p class="_txt">using something</p><span class="_ex">Usage</span><ul class="_list"><li>I do all my bookkeeping on the computer.</li><li>That\'s Chris on drums and Mike on guitar.</li><li>I\'m on the phone.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">on (preposition.)</div><p class="_txt">used to show what happens as a result of touching or hitting against something</p><span class="_ex">Usage</span><ul class="_list"><li>You\'ll cut yourself on that knife if you\'re not careful.</li><li>I hit my head on the shelf as I was standing up.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">on (preposition.)</div><p class="_txt">used to show something which is used as food or fuel</p><span class="_ex">Usage</span><ul class="_list"><li>What do frogs live on?</li><li>Does this radio run on batteries?</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">on (adverb.)</div><p class="_txt">If you have something on, you are wearing it.</p><span class="_ex">Usage</span><ul class="_list"><li>She has on a black coat.</li><li>Why don\'t you put your new dress on?</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">on (adverb.)</div><p class="_txt">into a bus, train, plane, etc. or onto a horse</p><span class="_ex">Usage</span><ul class="_list"><li>It\u2019s time to get on the bus.</li><li>The train suddenly started moving as I was stepping on.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">on (adverb.)</div><p class="_txt">happening or planned</p><span class="_ex">Usage</span><ul class="_list"><li>I\'m busy this afternoon, but I don\'t have anything on tomorrow.</li><li>Do you know what\'s on at the movies?</li><li>Is the party still on for tomorrow?</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">on (adverb.)</div><p class="_txt">working or being used</p><span class="_ex">Usage</span><ul class="_list"><li>The heating has been on all day.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">on (adverb.)</div><p class="_txt">performing</p><span class="_ex">Usage</span><ul class="_list"><li>Hurry up with the make-up - I\'m on in ten minutes.</li><li>The audience cheered as the band came on.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">on (adverb.)</div><p class="_txt">in a way which results in forward movement</p><span class="_ex">Usage</span><ul class="_list"><li>You continue on and I\'ll catch up.</li><li>Move on, please, and let the ambulance through.</li></ul></div>',
          description: [
            {
              level: "A1",
              pos: "preposition",
              guideword: "SURFACE",
              definition: "on or onto a surface",
              dictionary_example: [
                "Ouch! You stepped on my foot.",
                "I dropped my pen on the floor.",
                "Look at all the books on your desk!",
                "We put any medicines on a high shelf.",
                "Your suitcase is on a shelf in the closet.",
              ],
              learner_example: [
                "I can read the book, listen to music, watch TV or just sit on my sofa and drink a hot [cup of] tea. (Skills for Life (Entry 1); A1; Polish)",
              ],
            },
            {
              level: "A1",
              pos: "preposition",
              guideword: "DAY/DATE",
              definition: "used to show the day or date when something happens",
              dictionary_example: [
                "Some of the stores aren't open on Sundays.",
                "What are you doing on Friday?",
                "My birthday's on the 30th of May.",
              ],
              learner_example: [
                "Dinner will be on Friday at 7:00. (Skills for Life (Entry 1); A1; Polish)",
              ],
            },
            {
              level: "A1",
              pos: "preposition",
              guideword: "CONNECTED",
              definition:
                "covering, touching, attached to or hanging from something",
              dictionary_example: [
                "You've got blood on your shirt.",
                "Which finger do you wear your ring on?",
                "We could hang this picture on the wall next to the door.",
                "Dogs should be kept on a leash at all times.",
              ],
              learner_example: [
                "I like my bedroom, because there are [a] lot of windows, two armchair[s], a lamp next to the bed, a table under the window, [and] some pictures on the wall. (Skills for Life (Entry 1); A1; Arabic)",
              ],
            },
            {
              level: "A2",
              pos: "preposition",
              guideword: "DIRECTIONS",
              definition: "used to refer to a place when giving directions",
              dictionary_example: [
                "Our house is the first on the left after the post office.",
                "Turn right on Broadway.",
              ],
              learner_example: [
                "My house is the first one on the left. (Skills for Life (Entry 2); A2; Slovak)",
              ],
            },
            {
              level: "A2",
              pos: "preposition",
              guideword: "TRAVEL",
              definition: "used for showing some methods of traveling",
              dictionary_example: [
                "He called to say he's on the bus and will be here in a few minutes.",
                "She'll be arriving on the five-thirty train.",
                "We went to France on the ferry.",
              ],
              learner_example: [
                "I will travel on a train and then I will take [a] taxi to your home. (Key English Test; A2; Tamil)",
              ],
            },
            {
              level: "A2",
              pos: "preposition",
              guideword: "PLACE",
              definition: "in a particular place",
              dictionary_example: [
                "the diagram on page 22",
                "They lived on a farm.",
              ],
              learner_example: [
                "I live on a farm in the Emmental. (Preliminary English Test; B1; Swiss German)",
              ],
            },
            {
              level: "A2",
              pos: "preposition",
              guideword: "RECORDING",
              definition:
                "used to show the way in which something is recorded or broadcast",
              dictionary_example: [
                "What's on television tonight?",
                "When's that movie coming out on DVD?",
              ],
              learner_example: [
                "I watched ice hockey on cable TV at night. (Key English Test; A2; Czech)",
              ],
            },
            {
              level: "A2",
              pos: "preposition",
              guideword: "TIME/MONEY",
              definition: "used to show what money or time is used for",
              dictionary_example: [
                "She refuses to spend more than $30 on a pair of shoes.",
                "I've wasted too much time on this already.",
              ],
              learner_example: [
                "I love it and I spend all my time on it. (Key English Test; A2; Greek)",
              ],
            },
            {
              level: "B1",
              pos: "preposition",
              guideword: "ABOUT",
              definition: "about",
              dictionary_example: [
                "a book on plants",
                "Her thesis is on Italian women's literature.",
              ],
              learner_example: [
                "The other one is a book on dogs and cats. (Preliminary English Test; B1; Italian)",
              ],
            },
            {
              level: "B1",
              pos: "preposition",
              guideword: "NEXT TO",
              definition: "next to or along the side of a place or area",
              dictionary_example: [
                "New York is on the Hudson River.",
                "Our house was on Sturton Street.",
                "Strasbourg is on the border of France and Germany.",
              ],
              learner_example: [
                "Remember our meeting is in the Golden Crown, next to the tall building on 67th street. (Preliminary English Test; B1; Spanish)",
              ],
            },
            {
              level: "B1",
              pos: "preposition",
              guideword: "USING",
              definition: "using something",
              dictionary_example: [
                "I do all my bookkeeping on the computer.",
                "That's Chris on drums and Mike on guitar.",
                "I'm on the phone.",
              ],
              learner_example: [
                "I was in the pizza shop to order some food for my family and I was on the phone. (Skills for Life (Entry 3); B1; Farsi)",
              ],
            },
            {
              level: "B2",
              pos: "preposition",
              guideword: "TOUCH/HIT",
              definition:
                "used to show what happens as a result of touching or hitting against something",
              dictionary_example: [
                "You'll cut yourself on that knife if you're not careful.",
                "I hit my head on the shelf as I was standing up.",
              ],
              learner_example: [
                "Suddenly I hit my head on the bed as the man was talking. (First Certificate in English; B2; Portuguese)",
              ],
            },
            {
              level: "B2",
              pos: "preposition",
              guideword: "FOOD/FUEL",
              definition:
                "used to show something which is used as food or fuel",
              dictionary_example: [
                "What do frogs live on?",
                "Does this radio run on batteries?",
              ],
              learner_example: [
                "All new cars run on unleaded fuel w[h]ich is a benefit to the environment. (First Certificate in English; B2; Portuguese)",
              ],
            },
            {
              level: "A2",
              pos: "adverb",
              guideword: "WEAR",
              definition: "If you have something on, you are wearing it.",
              dictionary_example: [
                "She has on a black coat.",
                "Why don't you put your new dress on?",
              ],
              learner_example: [
                "And I want you to put on some baggy clothes, so that you'll feel comfortable while working. (Key English Test; A2; Rajasthani)",
              ],
            },
            {
              level: "B1",
              pos: "adverb",
              guideword: "MOVEMENT/POSITION",
              definition: "into a bus, train, plane, etc. or onto a horse",
              dictionary_example: [
                "It\u2019s time to get on the bus.",
                "The train suddenly started moving as I was stepping on.",
              ],
              learner_example: [""],
            },
            {
              level: "B2",
              pos: "adverb",
              guideword: "HAPPENING",
              definition: "happening or planned",
              dictionary_example: [
                "I'm busy this afternoon, but I don't have anything on tomorrow.",
                "Do you know what's on at the movies?",
                "Is the party still on for tomorrow?",
              ],
              learner_example: [""],
            },
            {
              level: "B2",
              pos: "adverb",
              guideword: "WORKING",
              definition: "working or being used",
              dictionary_example: ["The heating has been on all day."],
              learner_example: [
                "For example, the staff shouldn't leave the lights [on] and the heating's on when they don't need to use it. (Skills for Life (Level 1); B2; Arabic)",
              ],
            },
            {
              level: "C2",
              pos: "adverb",
              guideword: "PERFORMING",
              definition: "performing",
              dictionary_example: [
                "Hurry up with the make-up - I'm on in ten minutes.",
                "The audience cheered as the band came on.",
              ],
              learner_example: [
                "My faith in youth started to fade but then a boy named Josh came on. (Certificate of Proficiency in English; C2; Swedish)",
              ],
            },
            {
              level: "B2",
              pos: "adverb",
              guideword: "MOVING FORWARD",
              definition: "in a way which results in forward movement",
              dictionary_example: [
                "You continue on and I'll catch up.",
                "Move on, please, and let the ambulance through.",
              ],
              learner_example: [
                "I had just got[ten] [o]n the subway when it stopped and didn't move on. (First Certificate in English; B2; Portuguese)",
              ],
            },
          ],
          synonym: [],
        },
        {
          word_idx: 13,
          raw_word: "their",
          cefr: "A1",
          stopword: true,
          word: "their",
          lemma: "their",
          pos: "det.",
          html_description:
            '<div class="card_content_item" align="left"><div class="_pronoun">their (determiner.)</div><p class="_txt">belonging to or relating to a group of people, animals, or things that have already been talked about</p><span class="_ex">Usage</span><ul class="_list"><li>He gave them their coats.</li><li>Anyway, that\'s their problem.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">their (determiner.)</div><p class="_txt">used to refer to what belongs to or relates to a person when you want to avoid saying "his" or "her" or when you do not know if the person is male or female</p><span class="_ex">Usage</span><ul class="_list"><li>One of the students has left their book behind.</li><li>So did this person give their name?</li></ul></div>',
          description: [
            {
              level: "A1",
              pos: "determiner",
              guideword: "BELONGING TO GROUP",
              definition:
                "belonging to or relating to a group of people, animals, or things that have already been talked about",
              dictionary_example: [
                "He gave them their coats.",
                "Anyway, that's their problem.",
              ],
              learner_example: [
                "In the afte[r]noon [he] goes with his wife [and] visits their friends. (Skills for Life (Entry 1); A1; Polish)",
              ],
            },
            {
              level: "B1",
              pos: "determiner",
              guideword: "TO AVOID HIS/HERS",
              definition:
                'used to refer to what belongs to or relates to a person when you want to avoid saying "his" or "her" or when you do not know if the person is male or female',
              dictionary_example: [
                "One of the students has left their book behind.",
                "So did this person give their name?",
              ],
              learner_example: [""],
            },
          ],
          synonym: [],
        },
        {
          word_idx: 14,
          raw_word: "citizens",
          cefr: "B2",
          stopword: false,
          word: "citizens",
          lemma: "citizen",
          pos: "n.",
          html_description:
            '<div class="card_content_item" align="left"><div class="_pronoun">citizen (noun.)</div><p class="_txt">someone who lives in a particular town or city</p><span class="_ex">Usage</span><ul class="_list"><li>The citizens of Moscow woke up this morning to find they had a new government.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">citizen (noun.)</div><p class="_txt">someone who has a legal right to live in a particular country</p><span class="_ex">Usage</span><ul class="_list"><li>He applied to become an American citizen.</li></ul></div>',
          description: [
            {
              level: "B2",
              pos: "noun",
              guideword: "TOWN/CITY",
              definition: "someone who lives in a particular town or city",
              dictionary_example: [
                "The citizens of Moscow woke up this morning to find they had a new government.",
              ],
              learner_example: [
                "I think that it is a really good idea to make a film about our town and its citizens. (First Certificate in English; B2; Polish)",
              ],
            },
            {
              level: "B2",
              pos: "noun",
              guideword: "LEGAL RIGHT",
              definition:
                "someone who has a legal right to live in a particular country",
              dictionary_example: ["He applied to become an American citizen."],
              learner_example: [
                "I'm an American citizen because my mother comes from Queens, New York. (First Certificate in English; B2; Italian)",
              ],
            },
          ],
          synonym: [
            {
              word: "citizen",
              cefr: "B2.3",
              html_description:
                '<div class="card_content_item" align="left"><div class="_pronoun">citizen (noun.)</div><p class="_txt">someone who lives in a particular town or city</p><span class="_ex">Usage</span><ul class="_list"><li>The citizens of Moscow woke up this morning to find they had a new government.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">citizen (noun.)</div><p class="_txt">someone who has a legal right to live in a particular country</p><span class="_ex">Usage</span><ul class="_list"><li>He applied to become an American citizen.</li></ul></div>',
            },
          ],
        },
        {
          word_idx: 15,
          raw_word: "as",
          cefr: "A1",
          stopword: true,
          word: "as",
          lemma: "a",
          pos: "det.",
          html_description:
            '<div class="card_content_item" align="left"><div class="_pronoun">a (determiner.)</div><p class="_txt">used before a noun to refer to a single thing or person but not a particular thing or person or not one that you have referred to before</p><span class="_ex">Usage</span><ul class="_list"><li>She\'s got a boyfriend.</li><li>Someone left an umbrella here yesterday.</li><li>Is he a friend of yours?</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">a (determiner.)</div><p class="_txt">used to mean any or every thing or person of the type you are referring to</p><span class="_ex">Usage</span><ul class="_list"><li>Can you ride a bike?</li><li>A child needs love.</li><li>A cheetah can run faster than a lion.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">a (determiner.)</div><p class="_txt">one</p><span class="_ex">Usage</span><ul class="_list"><li>a hundred dollars</li><li>a dozen eggs</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">a (determiner.)</div><p class="_txt">used to state what type of thing or person something or someone is</p><span class="_ex">Usage</span><ul class="_list"><li>Sally\'s an engineer.</li><li>It\'s a rabbit.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">a (determiner.)</div><p class="_txt">used before some phrases saying how much of something there is</p><span class="_ex">Usage</span><ul class="_list"><li>a few days</li><li>a little bit of yarn</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">a (determiner.)</div><p class="_txt">used before some action nouns when referring to one example of the action</p><span class="_ex">Usage</span><ul class="_list"><li>Take a look at this, Jez.</li><li>I\'m just going to take a ride.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">a (determiner.)</div><p class="_txt">used before the first but not the second of two nouns that are often used together</p><span class="_ex">Usage</span><ul class="_list"><li>a cup and saucer</li><li>a knife and fork</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">a (determiner.)</div><p class="_txt">used when referring to a unit of something, especially something you eat or drink</p><span class="_ex">Usage</span><ul class="_list"><li>I\'d love a coffee.</li><li>All I had for lunch was a yogurt.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">a (determiner.)</div><p class="_txt">used between a fraction and a unit of measurement</p><span class="_ex">Usage</span><ul class="_list"><li>half a mile</li><li>a quarter of a kilo</li><li>three-quarters of an hour</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">a (determiner.)</div><p class="_txt">used when referring to a certain period of time</p><span class="_ex">Usage</span><ul class="_list"><li>Take one tablet three times a day.</li><li>She earns $100,000 a year.</li></ul></div>',
          description: [
            {
              level: "A1",
              pos: "determiner",
              guideword: "NOT PARTICULAR",
              definition:
                "used before a noun to refer to a single thing or person but not a particular thing or person or not one that you have referred to before",
              dictionary_example: [
                "She's got a boyfriend.",
                "Someone left an umbrella here yesterday.",
                "Is he a friend of yours?",
              ],
              learner_example: [
                "You can make a quick snack, for example a sandwich. (Skills for Life (Entry 1); A1; German)",
              ],
            },
            {
              level: "A1",
              pos: "determiner",
              guideword: "ANY/EVERY",
              definition:
                "used to mean any or every thing or person of the type you are referring to",
              dictionary_example: [
                "Can you ride a bike?",
                "A child needs love.",
                "A cheetah can run faster than a lion.",
              ],
              learner_example: [
                "I don't need it because I'm too old to have a doll. (Key English Test; A2; French)",
              ],
            },
            {
              level: "A1",
              pos: "determiner",
              guideword: "ONE",
              definition: "one",
              dictionary_example: ["a hundred dollars", "a dozen eggs"],
              learner_example: [
                "Dear Ally, All my friends [from] school were here, more than a hundred people. (Key English Test; A2; Portuguese)",
              ],
            },
            {
              level: "A1",
              pos: "determiner",
              guideword: "TYPE",
              definition:
                "used to state what type of thing or person something or someone is",
              dictionary_example: ["Sally's an engineer.", "It's a rabbit."],
              learner_example: [
                "She's a teacher. (Skills for Life (Entry 1); A1; Tamil)",
              ],
            },
            {
              level: "A2",
              pos: "determiner",
              guideword: "AMOUNTS",
              definition:
                "used before some phrases saying how much of something there is",
              dictionary_example: ["a few days", "a little bit of yarn"],
              learner_example: [
                "Usually people in Poland are very busy so we do not have a lot of time for cooking. (Skills for Life (Entry 2); A2; Slovak)",
              ],
            },
            {
              level: "A2",
              pos: "determiner",
              guideword: "AN ACTION",
              definition:
                "used before some action nouns when referring to one example of the action",
              dictionary_example: [
                "Take a look at this, Jez.",
                "I'm just going to take a ride.",
              ],
              learner_example: [
                "I took a shower and ate my breakfast. (Preliminary English Test; B1; Thai)",
              ],
            },
            {
              level: "A2",
              pos: "determiner",
              guideword: "TWO NOUNS",
              definition:
                "used before the first but not the second of two nouns that are often used together",
              dictionary_example: ["a cup and saucer", "a knife and fork"],
              learner_example: [
                "I like a clean fork and knife. (Preliminary English Test; B1; Polish)",
              ],
            },
            {
              level: "A2",
              pos: "determiner",
              guideword: "UNIT",
              definition:
                "used when referring to a unit of something, especially something you eat or drink",
              dictionary_example: [
                "I'd love a coffee.",
                "All I had for lunch was a yogurt.",
              ],
              learner_example: [
                "We both had a coke and a hot dog. (Preliminary English Test; B1; German)",
              ],
            },
            {
              level: "A2",
              pos: "determiner",
              guideword: "WITH FRACTION",
              definition: "used between a fraction and a unit of measurement",
              dictionary_example: [
                "half a mile",
                "a quarter of a kilo",
                "three-quarters of an hour",
              ],
              learner_example: [
                "The lesson is half an hour but you have to be ther[e] 10 minutes before. (Key English Test; A2; Greek)",
              ],
            },
            {
              level: "A2",
              pos: "determiner",
              guideword: "PERIOD OF TIME",
              definition: "used when referring to a certain period of time",
              dictionary_example: [
                "Take one tablet three times a day.",
                "She earns $100,000 a year.",
              ],
              learner_example: [
                "I can write to him or her twice a week. (Key English Test; A2; Chinese)",
              ],
            },
          ],
          synonym: [],
        },
        {
          word_idx: 16,
          raw_word: "the",
          cefr: "A1",
          stopword: true,
          word: "the",
          lemma: "the",
          pos: "det.",
          html_description:
            '<div class="card_content_item" align="left"><div class="_pronoun">the (determiner.)</div><p class="_txt">used before nouns to refer to particular things or people that have already been talked about or are already known</p><span class="_ex">Usage</span><ul class="_list"><li>I bought a shirt and some shoes. The shirt was expensive, but the shoes weren\'t.</li><li>Could you pass the salt, please?</li><li>I\'ll pick you up at the station.</li><li>I really enjoyed the book I just read.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">the (determiner.)</div><p class="_txt">used before nouns when only one of something exists</p><span class="_ex">Usage</span><ul class="_list"><li>Have you seen the Eiffel Tower?</li><li>What will happen in the future?</li><li>She\'s traveling around the world.</li><li>They live in the north of Spain.</li><li>Ed Koch was for many years the mayor of New York.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">the (determiner.)</div><p class="_txt">used before some nouns that refer to place when you want to mention that type of place, without showing exactly which example of the place you mean</p><span class="_ex">Usage</span><ul class="_list"><li>We spent all day at the beach.</li><li>Shall we go to the movies this evening?</li><li>I must go to the bank.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">the (determiner.)</div><p class="_txt">used before superlatives and other words, such as \'first\' or \'only\' or numbers showing something\'s position in a list, which refer to only one thing or person</p><span class="_ex">Usage</span><ul class="_list"><li>That was one of the best movies I\'ve ever seen.</li><li>What\'s the highest mountain in Europe?</li><li>I shall never forget the first time we met.</li><li>You\'re the fifth person to ask me that question.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">the (determiner.)</div><p class="_txt">used before numbers that refer to periods of ten years</p><span class="_ex">Usage</span><ul class="_list"><li>the sixties</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">the (determiner.)</div><p class="_txt">used instead of a possessive adjective such as "your," "her," or "my"</p><span class="_ex">Usage</span><ul class="_list"><li>He held her by the arm.</li><li>Where did I park the car?</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">the (determiner.)</div><p class="_txt">used before each of two adjectives or adverbs to show how one thing changes depending on another</p><span class="_ex">Usage</span><ul class="_list"><li> The longer we live here, the more we like it. </li></ul></div>',
          description: [
            {
              level: "A1",
              pos: "determiner",
              guideword: "PARTICULAR",
              definition:
                "used before nouns to refer to particular things or people that have already been talked about or are already known",
              dictionary_example: [
                "I bought a shirt and some shoes. The shirt was expensive, but the shoes weren't.",
                "Could you pass the salt, please?",
                "I'll pick you up at the station.",
                "I really enjoyed the book I just read.",
              ],
              learner_example: [
                "I like fresh food from my garden[.] I like [a]lso [to] work in the garden. (Skills for Life (Entry 1); A1; Polish)",
              ],
            },
            {
              level: "A1",
              pos: "determiner",
              guideword: "ONLY ONE",
              definition: "used before nouns when only one of something exists",
              dictionary_example: [
                "Have you seen the Eiffel Tower?",
                "What will happen in the future?",
                "She's traveling around the world.",
                "They live in the north of Spain.",
                "Ed Koch was for many years the mayor of New York.",
              ],
              learner_example: [
                "That day is [also] the Chinese New Year. (Skills for Life (Entry 1); A1; Chinese)",
              ],
            },
            {
              level: "A1",
              pos: "determiner",
              guideword: "PLACE",
              definition:
                "used before some nouns that refer to place when you want to mention that type of place, without showing exactly which example of the place you mean",
              dictionary_example: [
                "We spent all day at the beach.",
                "Shall we go to the movies this evening?",
                "I must go to the bank.",
              ],
              learner_example: [
                "I like to go to swimming and go to the beach. (Skills for Life (Entry 1); A1; Thai)",
              ],
            },
            {
              level: "A2",
              pos: "determiner",
              guideword: "BEFORE SUPERLATIVES, ETC.",
              definition:
                "used before superlatives and other words, such as 'first' or 'only' or numbers showing something's position in a list, which refer to only one thing or person",
              dictionary_example: [
                "That was one of the best movies I've ever seen.",
                "What's the highest mountain in Europe?",
                "I shall never forget the first time we met.",
                "You're the fifth person to ask me that question.",
              ],
              learner_example: [
                "The best present I have ever got was a car from my grandma. (Key English Test; A2; Portuguese)",
              ],
            },
            {
              level: "B2",
              pos: "determiner",
              guideword: "TIME",
              definition:
                "used before numbers that refer to periods of ten years",
              dictionary_example: ["the sixties"],
              learner_example: [
                "For example, people in the 1950s who didn't have computers are likely to have had difficulty in checking information, booking tickets, and communicating with each other. (First Certificate in English; B2; Korean)",
              ],
            },
            {
              level: "B1",
              pos: "determiner",
              guideword: "YOUR",
              definition:
                'used instead of a possessive adjective such as "your," "her," or "my"',
              dictionary_example: [
                "He held her by the arm.",
                "Where did I park the car?",
              ],
              learner_example: [
                "There [are] a lot of people, and there are a lot of cars, so you would have problems find[ing] a place to park the car. (Preliminary English Test; B1; Spanish)",
              ],
            },
            {
              level: "B2",
              pos: "determiner",
              guideword: "COMPARE",
              definition:
                "used before each of two adjectives or adverbs to show how one thing changes depending on another",
              dictionary_example: [
                " The longer we live here, the more we like it. ",
              ],
              learner_example: [
                "In many cases, the more things you learn, the less things you know. (First Certificate in English; B2; French)",
              ],
            },
          ],
          synonym: [],
        },
        {
          word_idx: 17,
          raw_word: "former",
          cefr: "B1",
          stopword: false,
          word: "former",
          lemma: "former",
          pos: "adj.",
          html_description:
            '<div class="card_content_item" align="left"><div class="_pronoun">former (adjective.)</div><p class="_txt">happening, existing or true in the past but not now</p><span class="_ex">Usage</span><ul class="_list"><li>his former wife</li><li>a former employer</li><li>the former president of the United States</li></ul></div>',
          description: [
            {
              level: "B1",
              pos: "adjective",
              guideword: "",
              definition: "happening, existing or true in the past but not now",
              dictionary_example: [
                "his former wife",
                "a former employer",
                "the former president of the United States",
              ],
              learner_example: [
                "And in my town [there] is also a new Italian restaurant. It's own[ed] by my mother's former colleague. (Preliminary English Test; B1; Thai)",
              ],
            },
          ],
          synonym: [
            {
              word: "other",
              cefr: "A1.4",
              html_description:
                '<div class="card_content_item" align="left"><div class="_pronoun">other (determiner.)</div><p class="_txt">as well as the person or thing already mentioned</p><span class="_ex">Usage</span><ul class="_list"><li>There is only one other person who could help us.</li><li>Are there any other people we should tell?</li><li>The product has many other features.</li><li>There is no other work available at this time.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">other (determiner.)</div><p class="_txt">used to talk about the remaining members of a group or items in a set</p><span class="_ex">Usage</span><ul class="_list"><li>Mario and Anna sat down to watch the other dancers.</li><li>I\'ve found one earring - do you know where the other one is?</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">other (determiner.)</div><p class="_txt">different from the thing or person already mentioned</p><span class="_ex">Usage</span><ul class="_list"><li>I don\'t have any cash - is there no other way of paying?</li><li>Ask me some other time when I\'m not so busy.</li><li>He likes traveling and learning about other people\'s customs and traditions.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">other (pronoun.)</div><p class="_txt">used to refer to a person or thing which belongs to a group or set that you have already talked about</p><span class="_ex">Usage</span><ul class="_list"><li>Hold the racket in one hand and the ball in the other.</li><li>She gave me one book last week and promised to bring the others on Wednesday.</li><li>Some people prefer living in the city, but others perfer the suburbs.</li></ul></div>',
            },
            {
              word: "early",
              cefr: "A1.6",
              html_description:
                '<div class="card_content_item" align="left"><div class="_pronoun">early (adverb.)</div><p class="_txt">near the beginning of a period of time, process, etc.</p><span class="_ex">Usage</span><ul class="_list"><li>I get up early during the week.</li><li>She starts work fairly early.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">early (adverb.)</div><p class="_txt">before the usual time or the time that was arranged</p><span class="_ex">Usage</span><ul class="_list"><li>If you finish early, you can go home.</li><li>The plane arrived ten minutes early.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">early (adjective.)</div><p class="_txt">near the beginning of a period of time, process, etc.</p><span class="_ex">Usage</span><ul class="_list"><li>the early 1980s</li><li>My earliest memory is of being shown around our new house.</li><li>Detroit has been an automotive center since the early days/years of car manufacturing.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">early (adjective.)</div><p class="_txt">before the usual time or the time that was arranged</p><span class="_ex">Usage</span><ul class="_list"><li>I\'m going to have an early night.</li><li>She took early retirement.</li></ul></div>',
            },
            {
              word: "sometime",
              cefr: "B1.3",
              html_description:
                '<div class="card_content_item" align="left"><div class="_pronoun">sometime</div><p class="_txt">at a time in the future or the past that is not known or not stated: </p><span class="_ex">Usage</span><ul class="_list">sometime before June</ul></div>',
            },
            {
              word: "previous",
              cefr: "B1.6",
              html_description:
                '<div class="card_content_item" align="left"><div class="_pronoun">previous (adjective.)</div><p class="_txt">existing or happening before something or someone else</p><span class="_ex">Usage</span><ul class="_list"><li> the previous day/week/month/year</li><li> I learned valuable skills in my previous job.</li></ul></div>',
            },
            {
              word: "erstwhile",
              cefr: "C2.3",
              html_description:
                '<div class="card_content_item" align="left"><div class="_pronoun">erstwhile</div><p class="_txt">previous</p><span class="_ex">Usage</span><ul class="_list">nan</ul></div>',
            },
          ],
        },
        {
          word_idx: 18,
          raw_word: "gain",
          cefr: "B1",
          stopword: false,
          word: "gain",
          lemma: "gain",
          pos: "v.",
          html_description:
            '<div class="card_content_item" align="left"><div class="_pronoun">gain (verb.)</div><p class="_txt">to get something useful or positive, especially over a period of time</p><span class="_ex">Usage</span><ul class="_list"><li>After you\'ve gained some experience teaching abroad you can come home and get a job.</li><li>What do you hope to gain from the course?</li><li>So who will gain from the venture?</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">gain (verb.)</div><p class="_txt">to increase in something such as size, weight, or amount</p><span class="_ex">Usage</span><ul class="_list"><li>He\'s gained a lot of weight in the last few months.</li><li>The car gained speed going down the hill.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">gain (noun.)</div><p class="_txt">when you get something useful or positive</p><span class="_ex">Usage</span><ul class="_list"><li> financial/personal gain</li><li>There are huge gains in terms of the number of lives saved.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">gain (noun.)</div><p class="_txt">an increase in something such as size, weight, or amount</p><span class="_ex">Usage</span><ul class="_list"><li>Side effects of the medication may include tiredness, headaches or weight gain.</li></ul></div>',
          description: [
            {
              level: "B1",
              pos: "verb",
              guideword: "GET",
              definition:
                "to get something useful or positive, especially over a period of time",
              dictionary_example: [
                "After you've gained some experience teaching abroad you can come home and get a job.",
                "What do you hope to gain from the course?",
                "So who will gain from the venture?",
              ],
              learner_example: [
                "You must explain to them that you need to gain some experience. (Preliminary English Test; B1; Portuguese)",
              ],
            },
            {
              level: "B1",
              pos: "verb",
              guideword: "INCREASE",
              definition:
                "to increase in something such as size, weight, or amount",
              dictionary_example: [
                "He's gained a lot of weight in the last few months.",
                "The car gained speed going down the hill.",
              ],
              learner_example: [
                "I'm sure it is one of the best ways not to gain weight. (Preliminary English Test; B1; Russian)",
              ],
            },
            {
              level: "C1",
              pos: "noun",
              guideword: "SOMETHING OBTAINED",
              definition: "when you get something useful or positive",
              dictionary_example: [
                " financial/personal gain",
                "There are huge gains in terms of the number of lives saved.",
              ],
              learner_example: [
                "The aim of this report is to describe the gain or loss of respect of some jobs in Spain, explaining why this has occurred and talking about the future changes in job status. (Certificate in Advanced English; C1; Catalan)",
              ],
            },
            {
              level: "C1",
              pos: "noun",
              guideword: "INCREASE",
              definition:
                "an increase in something such as size, weight, or amount",
              dictionary_example: [
                "Side effects of the medication may include tiredness, headaches or weight gain.",
              ],
              learner_example: [
                "Consumption of pre-cooked meals, fast food, [and] canned food not only results in weight gain but also cause[s] health problems. (International English Language Testing System; C1; Turkish)",
              ],
            },
          ],
          synonym: [
            {
              word: "win",
              cefr: "A2.5",
              html_description:
                '<div class="card_content_item" align="left"><div class="_pronoun">win (verb.)</div><p class="_txt">to get the most points in a competition or game</p><span class="_ex">Usage</span><ul class="_list"><li>Which team won the Superbowl last year?</li><li>Do you think the Denver Broncos will win?</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">win (verb.)</div><p class="_txt">to get a prize in a game or competition</p><span class="_ex">Usage</span><ul class="_list"><li>He won $1,000 for his short story.</li><li>This is the third medal she\'s won this season.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">win (verb.)</div><p class="_txt">to get the most votes in an election</p><span class="_ex">Usage</span><ul class="_list"><li>Who do you think will win the election?</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">win (verb.)</div><p class="_txt">to be successful in a war, fight, or argument</p><span class="_ex">Usage</span><ul class="_list"><li>They won the war, but with heavy losses.</li><li>Everyone likes winning an argument.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">win (noun.)</div><p class="_txt">when someone wins a game, competition or election</p><span class="_ex">Usage</span><ul class="_list"><li>It was the team\'s sixth consecutive win this season.</li><li>Everyone was predicting a big win at the last election but it didn\'t happen.</li></ul></div>',
            },
            {
              word: "realize",
              cefr: "B1.3",
              html_description:
                '<div class="card_content_item" align="left"><div class="_pronoun">realize (verb.)</div><p class="_txt">to notice or understand something that you did not notice or understand before</p><span class="_ex">Usage</span><ul class="_list"><li>I didn\'t realize how unhappy she was.</li><li> I suddenly realized I\'d met her before.</li><li>They didn\'t realize the danger they were in.</li><li>Do you realize that this is the third time you\'ve forgotten?</li></ul></div>',
            },
            {
              word: "gather",
              cefr: "B2.3",
              html_description:
                '<div class="card_content_item" align="left"><div class="_pronoun">gather (verb.)</div><p class="_txt">to join other people somewhere to make a group, or to bring people together into a group</p><span class="_ex">Usage</span><ul class="_list"><li>A crowd had gathered to hear her speak.</li><li>Crowds of fans gathered outside the stadium for the big game.</li><li>She gathered the children together and began to tell them a story.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">gather (verb.)</div><p class="_txt">to collect several things, often from different places or people</p><span class="_ex">Usage</span><ul class="_list"><li>We gathered our things together and left quickly.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">gather (verb.)</div><p class="_txt">to believe something because of information you have heard or seen</p><span class="_ex">Usage</span><ul class="_list"><li>From the look on their faces, she gathered (that) they were annoyed with her.</li><li>I gather they haven\'t sold their house yet.</li></ul></div>',
            },
            {
              word: "attain",
              cefr: "C2.0",
              html_description:
                '<div class="card_content_item" align="left"><div class="_pronoun">attain (verb.)</div><p class="_txt">to achieve something, especially after a lot of work</p><span class="_ex">Usage</span><ul class="_list"><li>She\'s attained a high level of fitness.</li></ul></div>',
            },
            {
              word: "derive",
              cefr: "C2.2",
              html_description:
                '<div class="card_content_item" align="left"><div class="_pronoun">derive</div><p class="_txt">to get something from something else: </p><span class="_ex">Usage</span><ul class="_list">The institute derives all its money from foreign investments.</ul></div>',
            },
          ],
        },
        {
          word_idx: 19,
          raw_word: "their",
          cefr: "A1",
          stopword: true,
          word: "their",
          lemma: "their",
          pos: "det.",
          html_description:
            '<div class="card_content_item" align="left"><div class="_pronoun">their (determiner.)</div><p class="_txt">belonging to or relating to a group of people, animals, or things that have already been talked about</p><span class="_ex">Usage</span><ul class="_list"><li>He gave them their coats.</li><li>Anyway, that\'s their problem.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">their (determiner.)</div><p class="_txt">used to refer to what belongs to or relates to a person when you want to avoid saying "his" or "her" or when you do not know if the person is male or female</p><span class="_ex">Usage</span><ul class="_list"><li>One of the students has left their book behind.</li><li>So did this person give their name?</li></ul></div>',
          description: [
            {
              level: "A1",
              pos: "determiner",
              guideword: "BELONGING TO GROUP",
              definition:
                "belonging to or relating to a group of people, animals, or things that have already been talked about",
              dictionary_example: [
                "He gave them their coats.",
                "Anyway, that's their problem.",
              ],
              learner_example: [
                "In the afte[r]noon [he] goes with his wife [and] visits their friends. (Skills for Life (Entry 1); A1; Polish)",
              ],
            },
            {
              level: "B1",
              pos: "determiner",
              guideword: "TO AVOID HIS/HERS",
              definition:
                'used to refer to what belongs to or relates to a person when you want to avoid saying "his" or "her" or when you do not know if the person is male or female',
              dictionary_example: [
                "One of the students has left their book behind.",
                "So did this person give their name?",
              ],
              learner_example: [""],
            },
          ],
          synonym: [],
        },
        {
          word_idx: 20,
          raw_word: "wealth",
          cefr: "B2",
          stopword: false,
          word: "wealth",
          lemma: "wealth",
          pos: "n.",
          html_description:
            '<div class="card_content_item" align="left"><div class="_pronoun">wealth (noun.)</div><p class="_txt">a large amount of money or valuable possessions that someone has</p><span class="_ex">Usage</span><ul class="_list"><li>During a successful business career, she accumulated a great amount of wealth.</li></ul></div>',
          description: [
            {
              level: "B2",
              pos: "noun",
              guideword: "",
              definition:
                "a large amount of money or valuable possessions that someone has",
              dictionary_example: [
                "During a successful business career, she accumulated a great amount of wealth.",
              ],
              learner_example: [
                "On the other hand, having a mobile phone can also create social distinctions between people as it can [be] a sign of wealth. (First Certificate in English; B2; French)",
              ],
            },
          ],
          synonym: [
            {
              word: "riches",
              cefr: "C2.4",
              html_description:
                '<div class="card_content_item" align="left"><div class="_pronoun">riches (noun.)</div><p class="_txt">a lot of money or valuable objects</p><span class="_ex">Usage</span><ul class="_list"><li>To her, $500 seemed like untold riches.</li><li>oil/mineral riches</li></ul></div>',
            },
            {
              word: "wealthiness",
              cefr: "unk",
              html_description: "",
            },
          ],
        },
        {
          word_idx: 21,
          raw_word: "while",
          cefr: "A2",
          stopword: true,
          word: "while",
          lemma: "while",
          pos: "conj.",
          html_description:
            '<div class="card_content_item" align="left"><div class="_pronoun">while (conjunction.)</div><p class="_txt">during the time that, or at the same time as</p><span class="_ex">Usage</span><ul class="_list"><li>I read it while you were drying your hair.</li><li>While I was in Italy, I went to see Alessandro.</li><li>I thought I heard him come in while we were having dinner.</li><li>"I\'m going to the post office." "While you\'re there, can you get me some stamps?"</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">while (conjunction.)</div><p class="_txt">used to compare two different facts or situations</p><span class="_ex">Usage</span><ul class="_list"><li>He earns seventy thousand dollars a year while I earn only forty!</li><li>Tom is very confident while Katy is shy and quiet.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">while (conjunction.)</div><p class="_txt">despite the fact that; although</p><span class="_ex">Usage</span><ul class="_list"><li>While I accept that he\'s not perfect in many respects, I do actually like the man.</li><li>While I fully understand your point of view, I also have some sympathy for Michael\'s.</li></ul></div>',
          description: [
            {
              level: "A2",
              pos: "conjunction",
              guideword: "DURING",
              definition: "during the time that, or at the same time as",
              dictionary_example: [
                "I read it while you were drying your hair.",
                "While I was in Italy, I went to see Alessandro.",
                "I thought I heard him come in while we were having dinner.",
                '"I\'m going to the post office." "While you\'re there, can you get me some stamps?"',
              ],
              learner_example: [
                "My mother gave it to me yesterday evening while I was playing [a] comp[u]ter game. (Key English Test; A2; Chinese)",
              ],
            },
            {
              level: "B1",
              pos: "conjunction",
              guideword: "COMPARING",
              definition: "used to compare two different facts or situations",
              dictionary_example: [
                "He earns seventy thousand dollars a year while I earn only forty!",
                "Tom is very confident while Katy is shy and quiet.",
              ],
              learner_example: [
                "In Italy, weddings [are] very traditional! The girls [wear] a long, white dress, while the boys, normally, [wear] dark [clothes]. (Preliminary English Test; B1; Italian)",
              ],
            },
            {
              level: "B2",
              pos: "conjunction",
              guideword: "ALTHOUGH",
              definition: "despite the fact that; although",
              dictionary_example: [
                "While I accept that he's not perfect in many respects, I do actually like the man.",
                "While I fully understand your point of view, I also have some sympathy for Michael's.",
              ],
              learner_example: [
                "While it is true that everyone should have a computer at home because it is useful, on the other hand hardly anybody [can] afford [one]. (First Certificate in English; B2; Italian)",
              ],
            },
          ],
          synonym: [],
        },
        {
          word_idx: 22,
          raw_word: "the",
          cefr: "A1",
          stopword: true,
          word: "the",
          lemma: "the",
          pos: "det.",
          html_description:
            '<div class="card_content_item" align="left"><div class="_pronoun">the (determiner.)</div><p class="_txt">used before nouns to refer to particular things or people that have already been talked about or are already known</p><span class="_ex">Usage</span><ul class="_list"><li>I bought a shirt and some shoes. The shirt was expensive, but the shoes weren\'t.</li><li>Could you pass the salt, please?</li><li>I\'ll pick you up at the station.</li><li>I really enjoyed the book I just read.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">the (determiner.)</div><p class="_txt">used before nouns when only one of something exists</p><span class="_ex">Usage</span><ul class="_list"><li>Have you seen the Eiffel Tower?</li><li>What will happen in the future?</li><li>She\'s traveling around the world.</li><li>They live in the north of Spain.</li><li>Ed Koch was for many years the mayor of New York.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">the (determiner.)</div><p class="_txt">used before some nouns that refer to place when you want to mention that type of place, without showing exactly which example of the place you mean</p><span class="_ex">Usage</span><ul class="_list"><li>We spent all day at the beach.</li><li>Shall we go to the movies this evening?</li><li>I must go to the bank.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">the (determiner.)</div><p class="_txt">used before superlatives and other words, such as \'first\' or \'only\' or numbers showing something\'s position in a list, which refer to only one thing or person</p><span class="_ex">Usage</span><ul class="_list"><li>That was one of the best movies I\'ve ever seen.</li><li>What\'s the highest mountain in Europe?</li><li>I shall never forget the first time we met.</li><li>You\'re the fifth person to ask me that question.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">the (determiner.)</div><p class="_txt">used before numbers that refer to periods of ten years</p><span class="_ex">Usage</span><ul class="_list"><li>the sixties</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">the (determiner.)</div><p class="_txt">used instead of a possessive adjective such as "your," "her," or "my"</p><span class="_ex">Usage</span><ul class="_list"><li>He held her by the arm.</li><li>Where did I park the car?</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">the (determiner.)</div><p class="_txt">used before each of two adjectives or adverbs to show how one thing changes depending on another</p><span class="_ex">Usage</span><ul class="_list"><li> The longer we live here, the more we like it. </li></ul></div>',
          description: [
            {
              level: "A1",
              pos: "determiner",
              guideword: "PARTICULAR",
              definition:
                "used before nouns to refer to particular things or people that have already been talked about or are already known",
              dictionary_example: [
                "I bought a shirt and some shoes. The shirt was expensive, but the shoes weren't.",
                "Could you pass the salt, please?",
                "I'll pick you up at the station.",
                "I really enjoyed the book I just read.",
              ],
              learner_example: [
                "I like fresh food from my garden[.] I like [a]lso [to] work in the garden. (Skills for Life (Entry 1); A1; Polish)",
              ],
            },
            {
              level: "A1",
              pos: "determiner",
              guideword: "ONLY ONE",
              definition: "used before nouns when only one of something exists",
              dictionary_example: [
                "Have you seen the Eiffel Tower?",
                "What will happen in the future?",
                "She's traveling around the world.",
                "They live in the north of Spain.",
                "Ed Koch was for many years the mayor of New York.",
              ],
              learner_example: [
                "That day is [also] the Chinese New Year. (Skills for Life (Entry 1); A1; Chinese)",
              ],
            },
            {
              level: "A1",
              pos: "determiner",
              guideword: "PLACE",
              definition:
                "used before some nouns that refer to place when you want to mention that type of place, without showing exactly which example of the place you mean",
              dictionary_example: [
                "We spent all day at the beach.",
                "Shall we go to the movies this evening?",
                "I must go to the bank.",
              ],
              learner_example: [
                "I like to go to swimming and go to the beach. (Skills for Life (Entry 1); A1; Thai)",
              ],
            },
            {
              level: "A2",
              pos: "determiner",
              guideword: "BEFORE SUPERLATIVES, ETC.",
              definition:
                "used before superlatives and other words, such as 'first' or 'only' or numbers showing something's position in a list, which refer to only one thing or person",
              dictionary_example: [
                "That was one of the best movies I've ever seen.",
                "What's the highest mountain in Europe?",
                "I shall never forget the first time we met.",
                "You're the fifth person to ask me that question.",
              ],
              learner_example: [
                "The best present I have ever got was a car from my grandma. (Key English Test; A2; Portuguese)",
              ],
            },
            {
              level: "B2",
              pos: "determiner",
              guideword: "TIME",
              definition:
                "used before numbers that refer to periods of ten years",
              dictionary_example: ["the sixties"],
              learner_example: [
                "For example, people in the 1950s who didn't have computers are likely to have had difficulty in checking information, booking tickets, and communicating with each other. (First Certificate in English; B2; Korean)",
              ],
            },
            {
              level: "B1",
              pos: "determiner",
              guideword: "YOUR",
              definition:
                'used instead of a possessive adjective such as "your," "her," or "my"',
              dictionary_example: [
                "He held her by the arm.",
                "Where did I park the car?",
              ],
              learner_example: [
                "There [are] a lot of people, and there are a lot of cars, so you would have problems find[ing] a place to park the car. (Preliminary English Test; B1; Spanish)",
              ],
            },
            {
              level: "B2",
              pos: "determiner",
              guideword: "COMPARE",
              definition:
                "used before each of two adjectives or adverbs to show how one thing changes depending on another",
              dictionary_example: [
                " The longer we live here, the more we like it. ",
              ],
              learner_example: [
                "In many cases, the more things you learn, the less things you know. (First Certificate in English; B2; French)",
              ],
            },
          ],
          synonym: [],
        },
        {
          word_idx: 23,
          raw_word: "latter",
          cefr: "B2",
          stopword: false,
          word: "latter",
          lemma: "latter",
          pos: "adj.",
          html_description:
            '<div class="card_content_item" align="left"><div class="_pronoun">latter (adjective.)</div><p class="_txt">near or toward the end of something</p><span class="_ex">Usage</span><ul class="_list"><li>Construction on the new library should begin in the latter part of next year.</li><li>In the latter stages of the race he began to tire.</li></ul></div>',
          description: [
            {
              level: "B2",
              pos: "adjective",
              guideword: "",
              definition: "near or toward the end of something",
              dictionary_example: [
                "Construction on the new library should begin in the latter part of next year.",
                "In the latter stages of the race he began to tire.",
              ],
              learner_example: [
                "I agree with the latter opinion. (First Certificate in English; B2; Greek)",
              ],
            },
          ],
          synonym: [],
        },
        {
          word_idx: 24,
          raw_word: "fall",
          cefr: "A2",
          stopword: false,
          word: "fall",
          lemma: "fall",
          pos: "n.",
          html_description:
            '<div class="card_content_item" align="left"><div class="_pronoun">fall (verb.)</div><p class="_txt">to move down toward the ground, sometimes by accident</p><span class="_ex">Usage</span><ul class="_list"><li>The path\'s very steep, so be careful you don\'t fall.</li><li>He fell and broke his leg.</li><li>I fell down the stairs and injured my back.</li><li>He fell to his death climbing the Matterhorn.</li><li>By winter, all the leaves had fallen off the trees.</li><li>The snow had been falling steadily all day.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">fall (verb.)</div><p class="_txt">to become lower in size, amount or strength</p><span class="_ex">Usage</span><ul class="_list"><li>Demand for new cars has fallen recently.</li><li>The quality of his work has fallen during the year.</li><li>The temperature could fall below zero tonight.</li><li>Average temperatures fell by ten degrees.</li><li>The pound has fallen to its lowest-ever level against the dollar.</li><li>Stock prices fell sharply this week.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">fall (verb.)</div><p class="_txt">to be defeated and start to be controlled by a different leader</p><span class="_ex">Usage</span><ul class="_list"><li>The city fell to the enemy.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">fall (verb.)</div><p class="_txt">to become worse, or start to be in a bad situation or condition</p><span class="_ex">Usage</span><ul class="_list"><li>Education standards are continuing to fall.</li><li>Empty for 30 years, the building had fallen into ruin.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">fall (verb.)</div><p class="_txt">to hang down</p><span class="_ex">Usage</span><ul class="_list"><li>Her long hair fell softly over her shoulders.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">fall (noun.)</div><p class="_txt">the season of the year between summer and winter, when leaves fall from the trees</p><span class="_ex">Usage</span><ul class="_list"><li>We like to travel in the fall when there are fewer tourists.</li><li>Last fall we went to Vermont.</li><li>fall colors/leaves</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">fall (noun.)</div><p class="_txt">when the size, amount or strength of something gets lower</p><span class="_ex">Usage</span><ul class="_list"><li>the recent fall in the price of gas</li><li>a fall in the unemployment rate</li><li>We could hear the rise and fall of voices in the other room.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">fall (noun.)</div><p class="_txt">when someone or something falls down to the ground, often without intending to or by accident</p><span class="_ex">Usage</span><ul class="_list"><li>He had a nasty fall and hurt his back.</li><li>The boulder smashed several small trees during its fall.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">fall (noun.)</div><p class="_txt">when a city, government, leader, etc. loses power or control</p><span class="_ex">Usage</span><ul class="_list"><li>the fall of the Roman Empire</li></ul></div>',
          description: [
            {
              level: "A2",
              pos: "verb",
              guideword: "MOVE DOWN",
              definition:
                "to move down toward the ground, sometimes by accident",
              dictionary_example: [
                "The path's very steep, so be careful you don't fall.",
                "He fell and broke his leg.",
                "I fell down the stairs and injured my back.",
                "He fell to his death climbing the Matterhorn.",
                "By winter, all the leaves had fallen off the trees.",
                "The snow had been falling steadily all day.",
              ],
              learner_example: [
                "You['d] better wear your cheap clothes as paint may fall on you. (Key English Test; A2; Tamil)",
              ],
            },
            {
              level: "B1",
              pos: "verb",
              guideword: "BECOME LOWER",
              definition: "to become lower in size, amount or strength",
              dictionary_example: [
                "Demand for new cars has fallen recently.",
                "The quality of his work has fallen during the year.",
                "The temperature could fall below zero tonight.",
                "Average temperatures fell by ten degrees.",
                "The pound has fallen to its lowest-ever level against the dollar.",
                "Stock prices fell sharply this week.",
              ],
              learner_example: [
                "It fell steadily until 1960, and remained [at] 3% until 1987. (International English Language Testing System; ; Chinese)",
              ],
            },
            {
              level: "C2",
              pos: "verb",
              guideword: "BE DEFEATED",
              definition:
                "to be defeated and start to be controlled by a different leader",
              dictionary_example: ["The city fell to the enemy."],
              learner_example: [""],
            },
            {
              level: "C2",
              pos: "verb",
              guideword: "BECOME WORSE",
              definition:
                "to become worse, or start to be in a bad situation or condition",
              dictionary_example: [
                "Education standards are continuing to fall.",
                "Empty for 30 years, the building had fallen into ruin.",
              ],
              learner_example: [
                "This impressive, massive 18th-century building which accommodated the Town Hall until recently (5 years ago) has now fallen into disuse. (Certificate of Proficiency in English; C2; Greek)",
              ],
            },
            {
              level: "C2",
              pos: "verb",
              guideword: "HANG DOWN",
              definition: "to hang down",
              dictionary_example: [
                "Her long hair fell softly over her shoulders.",
              ],
              learner_example: [
                "She had gorgeous black hair falling down her back, a creamy complexion and a figure models dream of. (Certificate of Proficiency in English; C2; Greek)",
              ],
            },
            {
              level: "A2",
              pos: "noun",
              guideword: "TIME OF YEAR",
              definition:
                "the season of the year between summer and winter, when leaves fall from the trees",
              dictionary_example: [
                "We like to travel in the fall when there are fewer tourists.",
                "Last fall we went to Vermont.",
                "fall colors/leaves",
              ],
              learner_example: [
                "You come here in the fall and I think it's best to spend our time in the city be[cau]se [the] countryside is very cold. (Preliminary English Test; B1; Farsi)",
              ],
            },
            {
              level: "B1",
              pos: "noun",
              guideword: "LOWER AMOUNT",
              definition:
                "when the size, amount or strength of something gets lower",
              dictionary_example: [
                "the recent fall in the price of gas",
                "a fall in the unemployment rate",
                "We could hear the rise and fall of voices in the other room.",
              ],
              learner_example: [
                "There is a fall in job vacancies. (International English Language Testing System; ; Turkish)",
              ],
            },
            {
              level: "B2",
              pos: "noun",
              guideword: "MOVEMENT",
              definition:
                "when someone or something falls down to the ground, often without intending to or by accident",
              dictionary_example: [
                "He had a nasty fall and hurt his back.",
                "The boulder smashed several small trees during its fall.",
              ],
              learner_example: [
                "I was terrified and I heard the noise of a fall just by my side. (First Certificate in English; B2; French)",
              ],
            },
            {
              level: "C1",
              pos: "noun",
              guideword: "DEFEAT",
              definition:
                "when a city, government, leader, etc. loses power or control",
              dictionary_example: ["the fall of the Roman Empire"],
              learner_example: [
                "After the fall of the previous system everything changed. (Certificate in Advanced English; C1; Polish)",
              ],
            },
          ],
          synonym: [
            {
              word: "fall",
              cefr: "A2.1",
              html_description:
                '<div class="card_content_item" align="left"><div class="_pronoun">fall (verb.)</div><p class="_txt">to move down toward the ground, sometimes by accident</p><span class="_ex">Usage</span><ul class="_list"><li>The path\'s very steep, so be careful you don\'t fall.</li><li>He fell and broke his leg.</li><li>I fell down the stairs and injured my back.</li><li>He fell to his death climbing the Matterhorn.</li><li>By winter, all the leaves had fallen off the trees.</li><li>The snow had been falling steadily all day.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">fall (verb.)</div><p class="_txt">to become lower in size, amount or strength</p><span class="_ex">Usage</span><ul class="_list"><li>Demand for new cars has fallen recently.</li><li>The quality of his work has fallen during the year.</li><li>The temperature could fall below zero tonight.</li><li>Average temperatures fell by ten degrees.</li><li>The pound has fallen to its lowest-ever level against the dollar.</li><li>Stock prices fell sharply this week.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">fall (verb.)</div><p class="_txt">to be defeated and start to be controlled by a different leader</p><span class="_ex">Usage</span><ul class="_list"><li>The city fell to the enemy.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">fall (verb.)</div><p class="_txt">to become worse, or start to be in a bad situation or condition</p><span class="_ex">Usage</span><ul class="_list"><li>Education standards are continuing to fall.</li><li>Empty for 30 years, the building had fallen into ruin.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">fall (verb.)</div><p class="_txt">to hang down</p><span class="_ex">Usage</span><ul class="_list"><li>Her long hair fell softly over her shoulders.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">fall (noun.)</div><p class="_txt">the season of the year between summer and winter, when leaves fall from the trees</p><span class="_ex">Usage</span><ul class="_list"><li>We like to travel in the fall when there are fewer tourists.</li><li>Last fall we went to Vermont.</li><li>fall colors/leaves</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">fall (noun.)</div><p class="_txt">when the size, amount or strength of something gets lower</p><span class="_ex">Usage</span><ul class="_list"><li>the recent fall in the price of gas</li><li>a fall in the unemployment rate</li><li>We could hear the rise and fall of voices in the other room.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">fall (noun.)</div><p class="_txt">when someone or something falls down to the ground, often without intending to or by accident</p><span class="_ex">Usage</span><ul class="_list"><li>He had a nasty fall and hurt his back.</li><li>The boulder smashed several small trees during its fall.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">fall (noun.)</div><p class="_txt">when a city, government, leader, etc. loses power or control</p><span class="_ex">Usage</span><ul class="_list"><li>the fall of the Roman Empire</li></ul></div>',
            },
            {
              word: "pin",
              cefr: "B1.4",
              html_description:
                '<div class="card_content_item" align="left"><div class="_pronoun">pin (noun.)</div><p class="_txt">a small, thin piece of metal with a sharp point used for temporarily holding pieces of cloth together</p><span class="_ex">Usage</span><ul class="_list"><li>I\'ll keep the patch in place on the jeans with pins while I sew it on.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">pin (verb.)</div><p class="_txt">to fasten something with a pin</p><span class="_ex">Usage</span><ul class="_list"><li>You can pin the notice to/(up) on the bulletin board.</li></ul></div>',
            },
            {
              word: "gloaming",
              cefr: "C1.1",
              html_description:
                '<div class="card_content_item" align="left"><div class="_pronoun">gloaming</div><p class="_txt">the time of day when it is becoming dark but is not yet fully dark: </p><span class="_ex">Usage</span><ul class="_list">I walked home in the gloaming, with the city lights coming on.</ul></div>',
            },
            {
              word: "downfall",
              cefr: "C1.8",
              html_description:
                '<div class="card_content_item" align="left"><div class="_pronoun">downfall</div><p class="_txt">(something that causes) the usually sudden destruction of a person, organization, or government and their loss of power, money, or health: </p><span class="_ex">Usage</span><ul class="_list">Rampant corruption brought about the downfall of the government.</ul></div>',
            },
            {
              word: "capitulation",
              cefr: "C1.8",
              html_description:
                '<div class="card_content_item" align="left"><div class="_pronoun">capitulation</div><p class="_txt">the act of accepting defeat: </p><span class="_ex">Usage</span><ul class="_list">To withdraw the remaining troops would have been a humiliating capitulation. </ul></div>',
            },
          ],
        },
        {
          word_idx: 25,
          raw_word: "into",
          cefr: "A1",
          stopword: true,
          word: "into",
          lemma: "into",
          pos: "prep.",
          html_description:
            '<div class="card_content_item" align="left"><div class="_pronoun">into (preposition.)</div><p class="_txt">toward the inside or middle of something</p><span class="_ex">Usage</span><ul class="_list"><li>He\'s gone into a store across the street.</li><li>Let\'s go into the living room.</li><li>Stop running around and get into bed!</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">into (preposition.)</div><p class="_txt">used to show when a person or thing changes from one form or condition to another</p><span class="_ex">Usage</span><ul class="_list"><li>Peel the cucumber and chop it into small cubes.</li><li>Her novels have been translated into nineteen languages.</li><li>We\'re planning to turn the smallest bedroom into an office.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">into (preposition.)</div><p class="_txt">moving toward something or someone and hitting them</p><span class="_ex">Usage</span><ul class="_list"><li>He\'s always walking into things when he doesn\'t have his glasses on.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">into (preposition.)</div><p class="_txt">in the direction of something or someone</p><span class="_ex">Usage</span><ul class="_list"><li>She was looking straight into his eyes.</li></ul></div>',
          description: [
            {
              level: "A1",
              pos: "preposition",
              guideword: "IN",
              definition: "toward the inside or middle of something",
              dictionary_example: [
                "He's gone into a store across the street.",
                "Let's go into the living room.",
                "Stop running around and get into bed!",
              ],
              learner_example: [
                "I think I left my watch in the kitchen of your house, before we went into the swimming-pool. (Key English Test; A2; Spanish)",
              ],
            },
            {
              level: "A2",
              pos: "preposition",
              guideword: "CHANGE",
              definition:
                "used to show when a person or thing changes from one form or condition to another",
              dictionary_example: [
                "Peel the cucumber and chop it into small cubes.",
                "Her novels have been translated into nineteen languages.",
                "We're planning to turn the smallest bedroom into an office.",
              ],
              learner_example: [
                "I like it very much because now I can convert any language into Bengali. (Key English Test; A2; Bengali)",
              ],
            },
            {
              level: "B1",
              pos: "preposition",
              guideword: "HIT",
              definition: "moving toward something or someone and hitting them",
              dictionary_example: [
                "He's always walking into things when he doesn't have his glasses on.",
              ],
              learner_example: [
                "Then I bumped into a man... What a surprise! [It] was Thom Yorke. (Preliminary English Test; B1; Italian)",
              ],
            },
            {
              level: "B1",
              pos: "preposition",
              guideword: "TOWARD",
              definition: "in the direction of something or someone",
              dictionary_example: ["She was looking straight into his eyes."],
              learner_example: [
                'After we ate Peter looked into my eyes and said: "Sarah I love you", and he kissed me. (Preliminary English Test; B1; Portuguese)',
              ],
            },
          ],
          synonym: [],
        },
        {
          word_idx: 26,
          raw_word: "poverty.",
          cefr: "B2",
          stopword: false,
          word: "poverty",
          lemma: "poverty",
          pos: "n.",
          html_description:
            '<div class="card_content_item" align="left"><div class="_pronoun">poverty (noun.)</div><p class="_txt">the condition of being extremely poor</p><span class="_ex">Usage</span><ul class="_list"><li>Two million people in the city live in poverty.</li><li>He emigrated to Australia to escape the poverty of his birthplace.</li></ul></div>',
          description: [
            {
              level: "B2",
              pos: "noun",
              guideword: "",
              definition: "the condition of being extremely poor",
              dictionary_example: [
                "Two million people in the city live in poverty.",
                "He emigrated to Australia to escape the poverty of his birthplace.",
              ],
              learner_example: [
                "First of all, I think that our grandparents lived in poverty without amen[i]ties. (First Certificate in English; B2; Greek)",
              ],
            },
          ],
          synonym: [
            {
              word: "impoverishment",
              cefr: "C2.3",
              html_description:
                '<div class="card_content_item" align="left"><div class="_pronoun">impoverishment</div><p class="_txt">the condition of being or becoming very poor, or the act of making someone very poor: </p><span class="_ex">Usage</span><ul class="_list">The drought reduced many farmers to impoverishment.</ul></div>',
            },
            {
              word: "poorness",
              cefr: "unk",
              html_description: "",
            },
          ],
        },
      ],
    },
    {
      sent_idx: 3,
      raw_sentence:
        "Naturally, one could argue that assisting a nation does not include donating money.",
      sentence:
        "naturally one could argue that assisting a nation does not include donating money",
      sentence_summary: {
        sentence_num_words: 13,
        sentence_cefr: "B1.8",
        sentence_word_list_by_cefr: {
          A1: ["one", "does", "money", "not", "a"],
          A2: ["could", "that", "include"],
          B1: ["argue"],
          B2: ["naturally", "nation", "donating", "assisting"],
          C1: [],
          C2: [],
          unk: [],
          stopwords: ["a", "that", "does", "not"],
        },
        sentence_word_count_by_cefr: {
          A1: 5,
          A2: 3,
          B1: 1,
          B2: 4,
          C1: 0,
          C2: 0,
          unk: 0,
          stopwords: 4,
        },
        sentence_word_distribution_by_cefr: {
          A1: 38.5,
          A2: 23.1,
          B1: 7.7,
          B2: 30.8,
          C1: 0.0,
          C2: 0.0,
          unk: 0.0,
          stopwords: 30.8,
        },
      },
      words_detail: [
        {
          word_idx: 0,
          raw_word: "Naturally,",
          cefr: "B2",
          stopword: false,
          word: "naturally",
          lemma: "naturally",
          pos: "adv.",
          html_description:
            '<div class="card_content_item" align="left"><div class="_pronoun">naturally (adverb.)</div><p class="_txt">as you would expect</p><span class="_ex">Usage</span><ul class="_list"><li>Naturally, he was very disappointed.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">naturally (adverb.)</div><p class="_txt">in a normal way</p><span class="_ex">Usage</span><ul class="_list"><li>Relax and try to behave naturally.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">naturally (adverb.)</div><p class="_txt">happening or existing as part of nature and not made or done by people</p><span class="_ex">Usage</span><ul class="_list"><li>A healthy body will be able to fight off the illness naturally without the use of medicine.</li><li>He has naturally blonde hair.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">naturally (adverb.)</div><p class="_txt">having been born with a characteristic</p><span class="_ex">Usage</span><ul class="_list"><li>naturally aggressive/funny/slim</li></ul></div>',
          description: [
            {
              level: "B2",
              pos: "adverb",
              guideword: "AS EXPECTED",
              definition: "as you would expect",
              dictionary_example: ["Naturally, he was very disappointed."],
              learner_example: [
                "Naturally we had to take his word for it. (First Certificate in English; B2; Japanese)",
              ],
            },
            {
              level: "B2",
              pos: "adverb",
              guideword: "NORMALLY",
              definition: "in a normal way",
              dictionary_example: ["Relax and try to behave naturally."],
              learner_example: [
                "As a result they can't behave naturally at all and become sick. (First Certificate in English; B2; Dutch)",
              ],
            },
            {
              level: "C1",
              pos: "adverb",
              guideword: "LIFE",
              definition:
                "happening or existing as part of nature and not made or done by people",
              dictionary_example: [
                "A healthy body will be able to fight off the illness naturally without the use of medicine.",
                "He has naturally blonde hair.",
              ],
              learner_example: [
                "Sometimes people say women are naturally stronger tha[n] men. (Skills for Life (Level 2); C1; French)",
              ],
            },
            {
              level: "C2",
              pos: "adverb",
              guideword: "FROM BIRTH",
              definition: "having been born with a characteristic",
              dictionary_example: ["naturally aggressive/funny/slim"],
              learner_example: [
                "Clarisse McClellan is a spontane[o]us and naturally curious teenager who even enjoys simple things. (Certificate of Proficiency in English; C2; German)",
              ],
            },
          ],
          synonym: [
            {
              word: "course",
              cefr: "A1.3",
              html_description:
                '<div class="card_content_item" align="left"><div class="_pronoun">course (noun.)</div><p class="_txt">a set of classes or a plan of study in a particular subject, usually a part of a program of study for a diploma, certificate, or degree</p><span class="_ex">Usage</span><ul class="_list"><li>a writing/math/English, etc. course </li><li>Mike\'s six-month paralegal course ends in December.</li><li>Which course did you register for/enroll in?</li><li>Judy is taking an online course in medical records management.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">course (noun.)</div><p class="_txt">a part of a meal which is served separately from the other parts</p><span class="_ex">Usage</span><ul class="_list"><li>a four-course lunch</li><li>For my main course, I had fish.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">course (noun.)</div><p class="_txt">an area of land or water used for a sports event</p><span class="_ex">Usage</span><ul class="_list"><li>a golf course</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">course (noun.)</div><p class="_txt">the route that a car, ship, aircraft, etc., is following or the route a river flows along</p><span class="_ex">Usage</span><ul class="_list"><li>During the storm, the boat was blown off course.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">course (noun.)</div><p class="_txt">the way something develops, usually over a long time</p><span class="_ex">Usage</span><ul class="_list"><li>Nuclear weapons have changed the course of modern history.</li></ul></div>',
            },
          ],
        },
        {
          word_idx: 1,
          raw_word: "one",
          cefr: "A1",
          stopword: false,
          word: "one",
          lemma: "one",
          pos: "number",
          html_description:
            '<div class="card_content_item" align="left"><div class="_pronoun">one (number.)</div><p class="_txt">the number 1</p><span class="_ex">Usage</span><ul class="_list"><li>You have three bags and I only have one.</li><li>one hundred and ninety-one people</li><li>Four packages came this morning, but only one was for Mark.</li><li>Paint one side, leave it to dry, and then paint the other.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">one (pronoun.)</div><p class="_txt">used to refer to a particular person or thing in a group that has already been talked about</p><span class="_ex">Usage</span><ul class="_list"><li>I\'ve got a few books on Chinese cooking. You can borrow one if you like.</li><li>Which one would you like?</li><li>Would you make a copy for everybody in the office and a few extras for the visitors?</li><li>"Which cupcake would you like?" "The one in the front."</li><li>There were lots of people standing watching, and not one of them offered to help.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">one (pronoun.)</div><p class="_txt">any person in general</p><span class="_ex">Usage</span><ul class="_list"><li>One ought to respect one\'s parents.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">one (determiner.)</div><p class="_txt">used to refer to a particular person or thing in a group</p><span class="_ex">Usage</span><ul class="_list"><li>One drawback is the cost of housing in the area.</li><li> One of our daughters just got married.</li><li>Our organization is just one of many charities that are providing famine relief in the region.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">one (determiner.)</div><p class="_txt">used to refer to a time in the future that is not yet decided</p><span class="_ex">Usage</span><ul class="_list"><li>Why don\'t we meet for lunch one day next week?</li><li>I\'d like to go skiing one Christmas.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">one (determiner.)</div><p class="_txt">used to refer to a particular occasion while avoiding stating the exact moment</p><span class="_ex">Usage</span><ul class="_list"><li>I met him one day in the park.</li><li>One night we stayed up talking till dawn.</li><li>He was attacked as he was walking home from work late one afternoon.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">one (determiner.)</div><p class="_txt">a single thing</p><span class="_ex">Usage</span><ul class="_list"><li>Do you think five of us will manage to squeeze into one car?</li><li>There\'s too much data to fit onto just one disk.</li><li>I think we should paint the bedroom all one color.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">one (determiner.)</div><p class="_txt">used when saying there is no other person or thing</p><span class="_ex">Usage</span><ul class="_list"><li>He\'s the one person you can rely on in an emergency.</li><li>This may be your one and only opportunity to meet her.</li><li>My final guest on tonight\'s show needs no introduction. Please welcome the one and only Michael Jordan!</li></ul></div>',
          description: [
            {
              level: "A1",
              pos: "number",
              guideword: "",
              definition: "the number 1",
              dictionary_example: [
                "You have three bags and I only have one.",
                "one hundred and ninety-one people",
                "Four packages came this morning, but only one was for Mark.",
                "Paint one side, leave it to dry, and then paint the other.",
              ],
              learner_example: [
                "She has got three da[ug]hters and one son. (Skills for Life (Entry 1); A1; Urdu)",
              ],
            },
            {
              level: "A2",
              pos: "pronoun",
              guideword: "PARTICULAR PERSON/THING",
              definition:
                "used to refer to a particular person or thing in a group that has already been talked about",
              dictionary_example: [
                "I've got a few books on Chinese cooking. You can borrow one if you like.",
                "Which one would you like?",
                "Would you make a copy for everybody in the office and a few extras for the visitors?",
                '"Which cupcake would you like?" "The one in the front."',
                "There were lots of people standing watching, and not one of them offered to help.",
              ],
              learner_example: [
                "I got a lot of presents, but the best one was a watch from my sister. (Key English Test; A2; Spanish)",
              ],
            },
            {
              level: "C1",
              pos: "pronoun",
              guideword: "ANY PERSON",
              definition: "any person in general",
              dictionary_example: ["One ought to respect one's parents."],
              learner_example: [
                'One can learn the beauty of the Greek language by simply reading the headings and will [soon] find that "The Step" is the best newspaper of all. (Certificate in Advanced English; C1; Greek)',
              ],
            },
            {
              level: "A2",
              pos: "determiner",
              guideword: "PARTICULAR PERSON/THING",
              definition:
                "used to refer to a particular person or thing in a group",
              dictionary_example: [
                "One drawback is the cost of housing in the area.",
                " One of our daughters just got married.",
                "Our organization is just one of many charities that are providing famine relief in the region.",
              ],
              learner_example: [
                "One of my presents was a dog! (Key English Test; A2; Spanish)",
              ],
            },
            {
              level: "B2",
              pos: "determiner",
              guideword: "FUTURE TIME",
              definition:
                "used to refer to a time in the future that is not yet decided",
              dictionary_example: [
                "Why don't we meet for lunch one day next week?",
                "I'd like to go skiing one Christmas.",
              ],
              learner_example: [
                "I would be very glad if Enrico could stay with you one summer. (First Certificate in English; B2; Swedish)",
              ],
            },
            {
              level: "B2",
              pos: "determiner",
              guideword: "PARTICULAR TIME",
              definition:
                "used to refer to a particular occasion while avoiding stating the exact moment",
              dictionary_example: [
                "I met him one day in the park.",
                "One night we stayed up talking till dawn.",
                "He was attacked as he was walking home from work late one afternoon.",
              ],
              learner_example: [
                "But one night, with the moon [br]ight, they felt encouraged to continue their walk. (First Certificate in English; B2; Italian)",
              ],
            },
            {
              level: "B2",
              pos: "determiner",
              guideword: "SINGLE",
              definition: "a single thing",
              dictionary_example: [
                "Do you think five of us will manage to squeeze into one car?",
                "There's too much data to fit onto just one disk.",
                "I think we should paint the bedroom all one color.",
              ],
              learner_example: [
                "I would recommend just the one hotel: Riverside Hotel, which offers great value. (First Certificate in English; B2; Spanish)",
              ],
            },
            {
              level: "B2",
              pos: "determiner",
              guideword: "ONLY",
              definition: "used when saying there is no other person or thing",
              dictionary_example: [
                "He's the one person you can rely on in an emergency.",
                "This may be your one and only opportunity to meet her.",
                "My final guest on tonight's show needs no introduction. Please welcome the one and only Michael Jordan!",
              ],
              learner_example: [
                "Often it's the one and only possibility for young children to see wild animals or unknown animals from the other side of the world in real life. (First Certificate in English; B2; German)",
              ],
            },
          ],
          synonym: [
            {
              word: "peerless",
              cefr: "B2.9",
              html_description:
                '<div class="card_content_item" align="left"><div class="_pronoun">peerless</div><p class="_txt">Something that is peerless is better than any other of its type: </p><span class="_ex">Usage</span><ul class="_list">peerless beauty/ability</ul></div>',
            },
            {
              word: "matchless",
              cefr: "C1.3",
              html_description:
                '<div class="card_content_item" align="left"><div class="_pronoun">matchless</div><p class="_txt">of a very high standard or quality and better than everything else: </p><span class="_ex">Usage</span><ul class="_list">her matchless beauty</ul></div>',
            },
            {
              word: "unrivaled",
              cefr: "C1.4",
              html_description:
                '<div class="card_content_item" align="left"><div class="_pronoun">unrivaled</div><p class="_txt">having no equal; better than any other of the same type: </p><span class="_ex">Usage</span><ul class="_list">The museum boasts an unrivaled collection of French porcelain.</ul></div>',
            },
            {
              word: "unitary",
              cefr: "C1.8",
              html_description:
                '<div class="card_content_item" align="left"><div class="_pronoun">unitary</div><p class="_txt">of a system of local government in the UK in which official power is given to one organization that deals with all matters in a local area instead of to several organizations that each deal with only a few matters: </p><span class="_ex">Usage</span><ul class="_list">Wales will be divided into 21 unitary authorities instead of eight counties and 37 districts.</ul></div>',
            },
            {
              word: "1",
              cefr: "unk",
              html_description: "",
            },
          ],
        },
        {
          word_idx: 2,
          raw_word: "could",
          cefr: "A2",
          stopword: false,
          word: "could",
          lemma: "could",
          pos: "modal v.",
          html_description:
            '<div class="card_content_item" align="left"><div class="_pronoun">could (modal verb.)</div><p class="_txt">used as the past form of "can" to talk about what someone or something was able to do</p><span class="_ex">Usage</span><ul class="_list"><li>When I was younger I could stay up all night and not get tired.</li><li>It was so noisy that we couldn\'t hear ourselves talk.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">could (modal verb.)</div><p class="_txt">used as a more polite form of "can" when asking someone to provide something or do something</p><span class="_ex">Usage</span><ul class="_list"><li>Could you lend me $5?</li><li>Could you turn the music down a little, please?</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">could (modal verb.)</div><p class="_txt">used for making a suggestion</p><span class="_ex">Usage</span><ul class="_list"><li>We could go for a drink after work tomorrow, if you like.</li><li>You could always call Susie and see if she would babysit.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">could (modal verb.)</div><p class="_txt">used to talk about what will possibly happen or is possibly true</p><span class="_ex">Usage</span><ul class="_list"><li>She could arrive any time now.</li><li>A lot of crime could be prevented.</li><li>This new drug could be an important step in the fight against cancer.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">could (modal verb.)</div><p class="_txt">used as a more polite form of "can" when asking for permission</p><span class="_ex">Usage</span><ul class="_list"><li>Could I speak to Mr. Davis, please?</li><li>Excuse me, could I just say something here?</li></ul></div>',
          description: [
            {
              level: "A2",
              pos: "modal verb",
              guideword: "PAST ABILITY",
              definition:
                'used as the past form of "can" to talk about what someone or something was able to do',
              dictionary_example: [
                "When I was younger I could stay up all night and not get tired.",
                "It was so noisy that we couldn't hear ourselves talk.",
              ],
              learner_example: [
                "I couldn't find the information [either] but I phoned the school. (Key English Test; A2; Turkish)",
              ],
            },
            {
              level: "A2",
              pos: "modal verb",
              guideword: "REQUEST",
              definition:
                'used as a more polite form of "can" when asking someone to provide something or do something',
              dictionary_example: [
                "Could you lend me $5?",
                "Could you turn the music down a little, please?",
              ],
              learner_example: [
                "Could you please send it? (Key English Test; A2; French)",
              ],
            },
            {
              level: "B1",
              pos: "modal verb",
              guideword: "SUGGESTION",
              definition: "used for making a suggestion",
              dictionary_example: [
                "We could go for a drink after work tomorrow, if you like.",
                "You could always call Susie and see if she would babysit.",
              ],
              learner_example: [
                "I could take you to a nice hotel. (Preliminary English Test; B1; Hungarian)",
              ],
            },
            {
              level: "B1",
              pos: "modal verb",
              guideword: "POSSIBLY HAPPEN",
              definition:
                "used to talk about what will possibly happen or is possibly true",
              dictionary_example: [
                "She could arrive any time now.",
                "A lot of crime could be prevented.",
                "This new drug could be an important step in the fight against cancer.",
              ],
              learner_example: [
                "This could be a big advantage but on the other [hand], books contain more details and sometimes some parts of the book are cut out [in] the film. (First Certificate in English; B2; Italian)",
              ],
            },
            {
              level: "B1",
              pos: "modal verb",
              guideword: "ASK PERMISSION",
              definition:
                'used as a more polite form of "can" when asking for permission',
              dictionary_example: [
                "Could I speak to Mr. Davis, please?",
                "Excuse me, could I just say something here?",
              ],
              learner_example: [
                "Could I bring you the missing work [to the] next class? (Preliminary English Test; B1; Spanish)",
              ],
            },
          ],
          synonym: [],
        },
        {
          word_idx: 3,
          raw_word: "argue",
          cefr: "B1",
          stopword: false,
          word: "argue",
          lemma: "argue",
          pos: "v.",
          html_description:
            '<div class="card_content_item" align="left"><div class="_pronoun">argue (verb.)</div><p class="_txt">to speak angrily to someone, telling them that you disagree with them</p><span class="_ex">Usage</span><ul class="_list"><li>My parents are always arguing.</li><li>Kids, will you stop arguing with each other?</li><li>They were arguing over/about which movie to go see.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">argue (verb.)</div><p class="_txt">to give reasons to support or oppose an idea, action, etc.</p><span class="_ex">Usage</span><ul class="_list"><li>Several people argued in favor of creating bike lanes on the avenue.</li><li>She argued against tax cuts.</li><li>The mayor argued that cuts in all departments are needed to balance the budget.</li></ul></div>',
          description: [
            {
              level: "B1",
              pos: "verb",
              guideword: "DISAGREE",
              definition:
                "to speak angrily to someone, telling them that you disagree with them",
              dictionary_example: [
                "My parents are always arguing.",
                "Kids, will you stop arguing with each other?",
                "They were arguing over/about which movie to go see.",
              ],
              learner_example: [
                "Peter told her his parents had argued and he came with his mother to London. (Preliminary English Test; B1; Spanish)",
              ],
            },
            {
              level: "B2",
              pos: "verb",
              guideword: "GIVE REASONS",
              definition:
                "to give reasons to support or oppose an idea, action, etc.",
              dictionary_example: [
                "Several people argued in favor of creating bike lanes on the avenue.",
                "She argued against tax cuts.",
                "The mayor argued that cuts in all departments are needed to balance the budget.",
              ],
              learner_example: [
                "It is often argued that family life is not important. (First Certificate in English; B2; Greek)",
              ],
            },
          ],
          synonym: [
            {
              word: "reason",
              cefr: "A2.3",
              html_description:
                '<div class="card_content_item" align="left"><div class="_pronoun">reason (noun.)</div><p class="_txt">the facts about why something happens or why someone does something</p><span class="_ex">Usage</span><ul class="_list"><li>The reason I\'m calling is to ask you a favor.</li><li> That was the reason for telling her.</li><li>There must be a reason why she\u2019s not here yet.</li><li>The long commute we have now is one of the reasons that we want to move to the city.</li><li>They moved here for good reason - better schools.</li><li> For some reason, he\'s decided to quit.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">reason (noun.)</div><p class="_txt">something that makes it right for you to think or do something</p><span class="_ex">Usage</span><ul class="_list"><li> I think we have reason to be concerned.</li><li>They cancelled their vacation for some reason.</li><li>She suddenly left, for no reason.</li></ul></div>',
            },
            {
              word: "fence",
              cefr: "B2.4",
              html_description:
                '<div class="card_content_item" align="left"><div class="_pronoun">fence (noun.)</div><p class="_txt">a wood, wire or metal structure which divides or goes around an area of land</p><span class="_ex">Usage</span><ul class="_list"><li>a garden fence</li></ul></div>',
            },
            {
              word: "debate",
              cefr: "B2.6",
              html_description:
                '<div class="card_content_item" align="left"><div class="_pronoun">debate (noun.)</div><p class="_txt">(a) discussion or argument about a subject in which many people take part</p><span class="_ex">Usage</span><ul class="_list"><li>Education is the current focus of public debate.</li><li>How we proceed from here is a matter for debate.</li><li>Over the year we have had several debates about future policy.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">debate (verb.)</div><p class="_txt">to discuss a subject in a formal way</p><span class="_ex">Usage</span><ul class="_list"><li>These issues need to be debated openly.</li></ul></div>',
            },
            {
              word: "indicate",
              cefr: "B2.6",
              html_description:
                '<div class="card_content_item" align="left"><div class="_pronoun">indicate (verb.)</div><p class="_txt">to say something or give a signal to show what you mean or what you intend to do</p><span class="_ex">Usage</span><ul class="_list"><li>Please indicate which free gift you would like to receive.</li><li>She indicated to me (that) she didn\'t want me to say anything.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">indicate (verb.)</div><p class="_txt">to show that something exists or is likely to be true</p><span class="_ex">Usage</span><ul class="_list"><li>Recent evidence indicates that the skeleton is about 3 million years old.</li><li>These statistics might indicate quality problems.</li></ul></div>',
            },
            {
              word: "contend",
              cefr: "C2.0",
              html_description:
                '<div class="card_content_item" align="left"><div class="_pronoun">contend</div><p class="_txt">to compete in order to win something: </p><span class="_ex">Usage</span><ul class="_list">There are three world-class tennis players contending for this title.</ul></div>',
            },
          ],
        },
        {
          word_idx: 4,
          raw_word: "that",
          cefr: "A2",
          stopword: true,
          word: "that",
          lemma: "that",
          pos: "conj.",
          html_description:
            '<div class="card_content_item" align="left"><div class="_pronoun">that (determiner.)</div><p class="_txt">used to refer to something or someone that can be seen or pointed to</p><span class="_ex">Usage</span><ul class="_list"><li>Did you know that woman in the post office?</li><li>How much are those shoes?</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">that (determiner.)</div><p class="_txt">used to refer to something or someone that has already been talked about or seen</p><span class="_ex">Usage</span><ul class="_list"><li>Where\'s that pen gone?</li><li>She lives in that house by the bus station.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">that (conjunction.)</div><p class="_txt">used after some verbs, nouns, and adjectives to introduce a new part of a sentence</p><span class="_ex">Usage</span><ul class="_list"><li>She said (that) she\'d collect it for me after work.</li><li>Is it true (that) she\'s gone back to teaching?</li><li>We\'ll be there at about 7.30, provided/providing (that) there\'s a suitable train.</li><li>It was so dark (that) I couldn\'t see anything.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">that (pronoun.)</div><p class="_txt">used to refer to something that can be seen or pointed to</p><span class="_ex">Usage</span><ul class="_list"><li> What\'s that in the corner?</li><li>I\'d like some of those.</li><li> That looks heavy.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">that (pronoun.)</div><p class="_txt">used to refer to something that has already been talked about or seen</p><span class="_ex">Usage</span><ul class="_list"><li>If you do that, you\'ll be sorry.</li><li>I don\'t think you should put up with that.</li><li>You can\'t wear those to a wedding.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">that (pronoun.)</div><p class="_txt">used to make a connection with an earlier statement</p><span class="_ex">Usage</span><ul class="_list"><li>My usual train was cancelled. That\'s why I\'m so late.</li><li>She tricked him, and that\'s what really upset him.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">that (pronoun.)</div><p class="_txt">used at the beginning of a relative clause to show what thing is being referred to</p><span class="_ex">Usage</span><ul class="_list"><li>They liked the restaurant that they ate lunch at.</li><li>I brought you the book that you wanted.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">that (pronoun.)</div><p class="_txt">used to refer to events or experiences in the past</p><span class="_ex">Usage</span><ul class="_list"><li>That was before we had a car.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">that (pronoun.)</div><p class="_txt">used to express a reaction to something</p><span class="_ex">Usage</span><ul class="_list"><li>I didn\'t know she\'d been so ill. That\'s terrible.</li><li>Turn the engine on, then put the car in gear. That\'s right.</li><li>Smile for the camera. That\'s more like it.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">that (adverb.)</div><p class="_txt">used when describing the size, amount, or state of something or someone</p><span class="_ex">Usage</span><ul class="_list"><li>She\'s too young to walk that far.</li><li>It wasn\'t (all) that good.</li></ul></div>',
          description: [
            {
              level: "A1",
              pos: "determiner",
              guideword: "CAN BE SEEN",
              definition:
                "used to refer to something or someone that can be seen or pointed to",
              dictionary_example: [
                "Did you know that woman in the post office?",
                "How much are those shoes?",
              ],
              learner_example: [""],
            },
            {
              level: "A1",
              pos: "determiner",
              guideword: "ALREADY MENTIONED",
              definition:
                "used to refer to something or someone that has already been talked about or seen",
              dictionary_example: [
                "Where's that pen gone?",
                "She lives in that house by the bus station.",
              ],
              learner_example: [
                "I like that place be[cause] I like swim[m]ing in [the] sea. (Skills for Life (Entry 1); A1; Polish)",
              ],
            },
            {
              level: "A2",
              pos: "conjunction",
              guideword: "",
              definition:
                "used after some verbs, nouns, and adjectives to introduce a new part of a sentence",
              dictionary_example: [
                "She said (that) she'd collect it for me after work.",
                "Is it true (that) she's gone back to teaching?",
                "We'll be there at about 7.30, provided/providing (that) there's a suitable train.",
                "It was so dark (that) I couldn't see anything.",
              ],
              learner_example: [
                "It's great that you are coming next week. (Key English Test; A2; Portuguese)",
              ],
            },
            {
              level: "A1",
              pos: "pronoun",
              guideword: "CAN BE SEEN",
              definition:
                "used to refer to something that can be seen or pointed to",
              dictionary_example: [
                " What's that in the corner?",
                "I'd like some of those.",
                " That looks heavy.",
              ],
              learner_example: [""],
            },
            {
              level: "A1",
              pos: "pronoun",
              guideword: "ALREADY MENTIONED",
              definition:
                "used to refer to something that has already been talked about or seen",
              dictionary_example: [
                "If you do that, you'll be sorry.",
                "I don't think you should put up with that.",
                "You can't wear those to a wedding.",
              ],
              learner_example: [
                "After that we have a break. (Skills for Life (Entry 1); A1; Polish)",
              ],
            },
            {
              level: "A2",
              pos: "pronoun",
              guideword: "REFERRING BACK",
              definition: "used to make a connection with an earlier statement",
              dictionary_example: [
                "My usual train was cancelled. That's why I'm so late.",
                "She tricked him, and that's what really upset him.",
              ],
              learner_example: [
                "I decided [not to] play football any more! That is why I want to sell them. (Key English Test; A2; Turkish)",
              ],
            },
            {
              level: "A2",
              pos: "pronoun",
              guideword: "REFERRING TO SOMETHING",
              definition:
                "used at the beginning of a relative clause to show what thing is being referred to",
              dictionary_example: [
                "They liked the restaurant that they ate lunch at.",
                "I brought you the book that you wanted.",
              ],
              learner_example: [
                "I want to sell my armchair that is 50 years old. (Key English Test; A2; Italian)",
              ],
            },
            {
              level: "B2",
              pos: "pronoun",
              guideword: "PAST",
              definition: "used to refer to events or experiences in the past",
              dictionary_example: ["That was before we had a car."],
              learner_example: [
                "That was when I went to live in Barcelona by myself in a student residence. (First Certificate in English; B2; Catalan)",
              ],
            },
            {
              level: "B2",
              pos: "pronoun",
              guideword: "REACTION",
              definition: "used to express a reaction to something",
              dictionary_example: [
                "I didn't know she'd been so ill. That's terrible.",
                "Turn the engine on, then put the car in gear. That's right.",
                "Smile for the camera. That's more like it.",
              ],
              learner_example: [""],
            },
            {
              level: "B2",
              pos: "adverb",
              guideword: "",
              definition:
                "used when describing the size, amount, or state of something or someone",
              dictionary_example: [
                "She's too young to walk that far.",
                "It wasn't (all) that good.",
              ],
              learner_example: [
                "My English isn't that bad, actually I have been taught English in school for six years. (First Certificate in English; B2; Dutch)",
              ],
            },
          ],
          synonym: [],
        },
        {
          word_idx: 5,
          raw_word: "assisting",
          cefr: "B2",
          stopword: false,
          word: "assisting",
          lemma: "assist",
          pos: "v.",
          html_description:
            '<div class="card_content_item" align="left"><div class="_pronoun">assist (verb.)</div><p class="_txt">to help</p><span class="_ex">Usage</span><ul class="_list"><li>The army arrived to assist in the search.</li><li>You will be expected to assist the editor with the selection of illustrations for the book.</li></ul></div>',
          description: [
            {
              level: "B2",
              pos: "verb",
              guideword: "",
              definition: "to help",
              dictionary_example: [
                "The army arrived to assist in the search.",
                "You will be expected to assist the editor with the selection of illustrations for the book.",
              ],
              learner_example: [
                "However, I used to assist my brother, who is a photographer. (First Certificate in English; B2; Turkish)",
              ],
            },
          ],
          synonym: [
            {
              word: "help",
              cefr: "A1.2",
              html_description:
                '<div class="card_content_item" align="left"><div class="_pronoun">help (verb.)</div><p class="_txt">to make it easier for someone to do something by doing part of the work yourself</p><span class="_ex">Usage</span><ul class="_list"><li> Thank you for helping. </li><li> Can I help you make dinner? </li><li> Dad always helps me with my homework. </li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">help (verb.)</div><p class="_txt">to provide advice, money, support, etc. to make it possible or easier for someone to do something</p><span class="_ex">Usage</span><ul class="_list"><li>I wonder if you could help me - I\'d like some information about flights to New Zealand.</li><li>My dad said he would help with the cost of buying a car.</li><li>I feel that learning English will help my chances of promotion at work.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">help (verb.)</div><p class="_txt">to make something better</p><span class="_ex">Usage</span><ul class="_list"><li> When you\'re nervous or scared, it helps to breathe slowly and deeply. </li><li>The drugs didn\'t seem to help (the pain).</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">help (noun.)</div><p class="_txt">when someone helps another person</p><span class="_ex">Usage</span><ul class="_list"><li> I was too embarrassed to ask for help. </li><li>Do you need any help with those boxes?</li><li>I could use some help with the cleaning.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">help (noun.)</div><p class="_txt">something or someone that helps</p><span class="_ex">Usage</span><ul class="_list"><li>Having a new computer would be a help.</li><li>He was a great help (to me) while my husband was away.</li></ul></div>',
            },
            {
              word: "serve",
              cefr: "A2.5",
              html_description:
                '<div class="card_content_item" align="left"><div class="_pronoun">serve (verb.)</div><p class="_txt">to give someone food or drink, especially guests or customers in a restaurant or bar</p><span class="_ex">Usage</span><ul class="_list"><li>Do they serve brunch on the weekend?</li><li>Breakfast is served between 7 and 9.</li><li>All recipes in this book will serve 4 to 5 people.</li><li>Serve the pie with vanilla ice cream.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">serve (verb.)</div><p class="_txt">to be useful as something</p><span class="_ex">Usage</span><ul class="_list"><li>It\'s a very entertaining movie but it also serves an educational purpose.</li><li>The study also serves as a spare bedroom.</li><li>Those discussions only served to reinforce her fears.</li><li>He hopes his son\'s death will serve to warn others about the dangers of owning a gun.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">serve (verb.)</div><p class="_txt">to do work that helps society, for example in an organization such as the army or the government</p><span class="_ex">Usage</span><ul class="_list"><li>to serve in the army</li><li>to serve on a committee/jury</li><li>He served as mayor for 5 years.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">serve (verb.)</div><p class="_txt">to be in prison for a period of time</p><span class="_ex">Usage</span><ul class="_list"><li>Williams, 42, is serving a four-year jail sentence.</li></ul></div>',
            },
            {
              word: "attend",
              cefr: "B1.6",
              html_description:
                '<div class="card_content_item" align="left"><div class="_pronoun">attend (verb.)</div><p class="_txt">to go to an event, place, etc.</p><span class="_ex">Usage</span><ul class="_list"><li>Over two hundred people attended the funeral.</li><li>The meeting is on the fifth and we\'re hoping everyone will attend.</li></ul></div>',
            },
            {
              word: "aid",
              cefr: "B2.1",
              html_description:
                '<div class="card_content_item" align="left"><div class="_pronoun">aid (noun.)</div><p class="_txt">help or support</p><span class="_ex">Usage</span><ul class="_list"><li>She went to the aid of a man trapped in his car.</li><li>He applied for financial aid for college.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">aid (noun.)</div><p class="_txt">money, food, or equipment that is given to help a country or group of people</p><span class="_ex">Usage</span><ul class="_list"><li>Emergency aid was sent to the flood victims.</li><li>foreign aid</li><li>aid workers</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">aid (noun.)</div><p class="_txt">a piece of equipment that helps you to do something</p><span class="_ex">Usage</span><ul class="_list"><li>teaching aids such as books and videos</li><li>A good dictionary can be a useful aid to understanding a new language.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">aid (verb.)</div><p class="_txt">to help someone</p><span class="_ex">Usage</span><ul class="_list"><li>The project is designed to aid the homeless.</li><li>He was aided in his research by his knowledge of Greek.</li></ul></div>',
            },
            {
              word: "assist",
              cefr: "B2.7",
              html_description:
                '<div class="card_content_item" align="left"><div class="_pronoun">assist (verb.)</div><p class="_txt">to help</p><span class="_ex">Usage</span><ul class="_list"><li>The army arrived to assist in the search.</li><li>You will be expected to assist the editor with the selection of illustrations for the book.</li></ul></div>',
            },
          ],
        },
        {
          word_idx: 6,
          raw_word: "a",
          cefr: "A1",
          stopword: true,
          word: "a",
          lemma: "a",
          pos: "det.",
          html_description:
            '<div class="card_content_item" align="left"><div class="_pronoun">a (determiner.)</div><p class="_txt">used before a noun to refer to a single thing or person but not a particular thing or person or not one that you have referred to before</p><span class="_ex">Usage</span><ul class="_list"><li>She\'s got a boyfriend.</li><li>Someone left an umbrella here yesterday.</li><li>Is he a friend of yours?</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">a (determiner.)</div><p class="_txt">used to mean any or every thing or person of the type you are referring to</p><span class="_ex">Usage</span><ul class="_list"><li>Can you ride a bike?</li><li>A child needs love.</li><li>A cheetah can run faster than a lion.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">a (determiner.)</div><p class="_txt">one</p><span class="_ex">Usage</span><ul class="_list"><li>a hundred dollars</li><li>a dozen eggs</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">a (determiner.)</div><p class="_txt">used to state what type of thing or person something or someone is</p><span class="_ex">Usage</span><ul class="_list"><li>Sally\'s an engineer.</li><li>It\'s a rabbit.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">a (determiner.)</div><p class="_txt">used before some phrases saying how much of something there is</p><span class="_ex">Usage</span><ul class="_list"><li>a few days</li><li>a little bit of yarn</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">a (determiner.)</div><p class="_txt">used before some action nouns when referring to one example of the action</p><span class="_ex">Usage</span><ul class="_list"><li>Take a look at this, Jez.</li><li>I\'m just going to take a ride.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">a (determiner.)</div><p class="_txt">used before the first but not the second of two nouns that are often used together</p><span class="_ex">Usage</span><ul class="_list"><li>a cup and saucer</li><li>a knife and fork</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">a (determiner.)</div><p class="_txt">used when referring to a unit of something, especially something you eat or drink</p><span class="_ex">Usage</span><ul class="_list"><li>I\'d love a coffee.</li><li>All I had for lunch was a yogurt.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">a (determiner.)</div><p class="_txt">used between a fraction and a unit of measurement</p><span class="_ex">Usage</span><ul class="_list"><li>half a mile</li><li>a quarter of a kilo</li><li>three-quarters of an hour</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">a (determiner.)</div><p class="_txt">used when referring to a certain period of time</p><span class="_ex">Usage</span><ul class="_list"><li>Take one tablet three times a day.</li><li>She earns $100,000 a year.</li></ul></div>',
          description: [
            {
              level: "A1",
              pos: "determiner",
              guideword: "NOT PARTICULAR",
              definition:
                "used before a noun to refer to a single thing or person but not a particular thing or person or not one that you have referred to before",
              dictionary_example: [
                "She's got a boyfriend.",
                "Someone left an umbrella here yesterday.",
                "Is he a friend of yours?",
              ],
              learner_example: [
                "You can make a quick snack, for example a sandwich. (Skills for Life (Entry 1); A1; German)",
              ],
            },
            {
              level: "A1",
              pos: "determiner",
              guideword: "ANY/EVERY",
              definition:
                "used to mean any or every thing or person of the type you are referring to",
              dictionary_example: [
                "Can you ride a bike?",
                "A child needs love.",
                "A cheetah can run faster than a lion.",
              ],
              learner_example: [
                "I don't need it because I'm too old to have a doll. (Key English Test; A2; French)",
              ],
            },
            {
              level: "A1",
              pos: "determiner",
              guideword: "ONE",
              definition: "one",
              dictionary_example: ["a hundred dollars", "a dozen eggs"],
              learner_example: [
                "Dear Ally, All my friends [from] school were here, more than a hundred people. (Key English Test; A2; Portuguese)",
              ],
            },
            {
              level: "A1",
              pos: "determiner",
              guideword: "TYPE",
              definition:
                "used to state what type of thing or person something or someone is",
              dictionary_example: ["Sally's an engineer.", "It's a rabbit."],
              learner_example: [
                "She's a teacher. (Skills for Life (Entry 1); A1; Tamil)",
              ],
            },
            {
              level: "A2",
              pos: "determiner",
              guideword: "AMOUNTS",
              definition:
                "used before some phrases saying how much of something there is",
              dictionary_example: ["a few days", "a little bit of yarn"],
              learner_example: [
                "Usually people in Poland are very busy so we do not have a lot of time for cooking. (Skills for Life (Entry 2); A2; Slovak)",
              ],
            },
            {
              level: "A2",
              pos: "determiner",
              guideword: "AN ACTION",
              definition:
                "used before some action nouns when referring to one example of the action",
              dictionary_example: [
                "Take a look at this, Jez.",
                "I'm just going to take a ride.",
              ],
              learner_example: [
                "I took a shower and ate my breakfast. (Preliminary English Test; B1; Thai)",
              ],
            },
            {
              level: "A2",
              pos: "determiner",
              guideword: "TWO NOUNS",
              definition:
                "used before the first but not the second of two nouns that are often used together",
              dictionary_example: ["a cup and saucer", "a knife and fork"],
              learner_example: [
                "I like a clean fork and knife. (Preliminary English Test; B1; Polish)",
              ],
            },
            {
              level: "A2",
              pos: "determiner",
              guideword: "UNIT",
              definition:
                "used when referring to a unit of something, especially something you eat or drink",
              dictionary_example: [
                "I'd love a coffee.",
                "All I had for lunch was a yogurt.",
              ],
              learner_example: [
                "We both had a coke and a hot dog. (Preliminary English Test; B1; German)",
              ],
            },
            {
              level: "A2",
              pos: "determiner",
              guideword: "WITH FRACTION",
              definition: "used between a fraction and a unit of measurement",
              dictionary_example: [
                "half a mile",
                "a quarter of a kilo",
                "three-quarters of an hour",
              ],
              learner_example: [
                "The lesson is half an hour but you have to be ther[e] 10 minutes before. (Key English Test; A2; Greek)",
              ],
            },
            {
              level: "A2",
              pos: "determiner",
              guideword: "PERIOD OF TIME",
              definition: "used when referring to a certain period of time",
              dictionary_example: [
                "Take one tablet three times a day.",
                "She earns $100,000 a year.",
              ],
              learner_example: [
                "I can write to him or her twice a week. (Key English Test; A2; Chinese)",
              ],
            },
          ],
          synonym: [],
        },
        {
          word_idx: 7,
          raw_word: "nation",
          cefr: "B2",
          stopword: false,
          word: "nation",
          lemma: "nation",
          pos: "n.",
          html_description:
            '<div class="card_content_item" align="left"><div class="_pronoun">nation (noun.)</div><p class="_txt">a country or the people living in a country</p><span class="_ex">Usage</span><ul class="_list"><li>the industrialized nations</li><li>All the nations of the world will be represented at the conference.</li><li>Practically the whole nation watched the ceremony on television.</li></ul></div>',
          description: [
            {
              level: "B2",
              pos: "noun",
              guideword: "",
              definition: "a country or the people living in a country",
              dictionary_example: [
                "the industrialized nations",
                "All the nations of the world will be represented at the conference.",
                "Practically the whole nation watched the ceremony on television.",
              ],
              learner_example: [
                "At that time, everyone should have devoted their life to the nation. (First Certificate in English; B2; Japanese)",
              ],
            },
          ],
          synonym: [
            {
              word: "country",
              cefr: "A1.4",
              html_description:
                '<div class="card_content_item" align="left"><div class="_pronoun">country (noun.)</div><p class="_txt">an area of land that has its own government, army, etc.</p><span class="_ex">Usage</span><ul class="_list"><li>Which is the largest country in South America?</li><li>Sri Lanka is my native country, but I\'ve been living in Belgium for the past five years.</li><li>The climate is cooler in the eastern part of the country.</li></ul></div>',
            },
            {
              word: "state",
              cefr: "B1.1",
              html_description:
                '<div class="card_content_item" align="left"><div class="_pronoun">state (noun.)</div><p class="_txt">the condition that something or someone is in</p><span class="_ex">Usage</span><ul class="_list"><li>The building is in a terrible state.</li><li>After the accident I was in a state of shock.</li><li>The kitchen was in its original state, with a 1920s sink and stove.</li><li>It\'s a sad state of affairs when our rivers are so endangered.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">state (noun.)</div><p class="_txt">a part of a large country with its own government, such as in Brazil, Mexico, or the US</p><span class="_ex">Usage</span><ul class="_list"><li>Alaska is the largest state in the US.</li><li>Representatives are elected from each state.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">state (noun.)</div><p class="_txt">a country or its government</p><span class="_ex">Usage</span><ul class="_list"><li>The drought is worst in the central African states.</li><li>Britain is one of the member states of the European Union.</li><li>The government was determined to reduce the number of state-owned industries.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">state (verb.)</div><p class="_txt">to officially say or write something</p><span class="_ex">Usage</span><ul class="_list"><li>Our warranty clearly states the limits of our liability.</li><li>His will states (that) the property is to be sold.</li><li>Please state why you are applying for this grant.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">state (adjective.)</div><p class="_txt">provided, created, or done by a state in a country, or by the government of a country</p><span class="_ex">Usage</span><ul class="_list"><li>a state government/legislature/law</li><li>a state school/college/university</li><li>state control</li><li>state funding</li></ul></div>',
            },
            {
              word: "land",
              cefr: "B1.1",
              html_description:
                '<div class="card_content_item" align="left"><div class="_pronoun">land (noun.)</div><p class="_txt">an area of ground, especially when used for a particular purpose such as farming or building</p><span class="_ex">Usage</span><ul class="_list"><li>This land here is good for growing potatoes.</li><li>We want to buy a plot of land to build a house.</li><li>They just bought 150 acres of land in Idaho.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">land (noun.)</div><p class="_txt">the surface of the earth that is not sea</p><span class="_ex">Usage</span><ul class="_list"><li>It is cheaper to drill for oil on land than at sea.</li><li>The treaty led to a dramatic reduction in the number of land-based missiles.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">land (noun.)</div><p class="_txt">a country</p><span class="_ex">Usage</span><ul class="_list"><li>Ireland was my grandmother\u2019s native land.</li><li>a land of ice and snow</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">land (verb.)</div><p class="_txt">to arrive at a place in a plane or a boat, or to make a plane or a boat reach the land</p><span class="_ex">Usage</span><ul class="_list"><li>We should land in Madrid at 7:00 a.m.</li><li>The pilot said we would land in about 20 minutes.</li><li>We\u2019d been sailing for three weeks by the time we landed at Miami.</li><li>We landed at Port Said in the early evening.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">land (verb.)</div><p class="_txt">to get or achieve something, usually something good</p><span class="_ex">Usage</span><ul class="_list"><li>He\'s just landed a new job.</li></ul></div>',
            },
            {
              word: "nation",
              cefr: "B2.3",
              html_description:
                '<div class="card_content_item" align="left"><div class="_pronoun">nation (noun.)</div><p class="_txt">a country or the people living in a country</p><span class="_ex">Usage</span><ul class="_list"><li>the industrialized nations</li><li>All the nations of the world will be represented at the conference.</li><li>Practically the whole nation watched the ceremony on television.</li></ul></div>',
            },
            {
              word: "commonwealth",
              cefr: "C2.2",
              html_description:
                '<div class="card_content_item" align="left"><div class="_pronoun">commonwealth</div><p class="_txt">a group of countries with the same political or economic aims: </p><span class="_ex">Usage</span><ul class="_list">the Commonwealth of Independent States</ul></div>',
            },
          ],
        },
        {
          word_idx: 8,
          raw_word: "does",
          cefr: "A1",
          stopword: true,
          word: "does",
          lemma: "do",
          pos: "v.",
          html_description:
            '<div class="card_content_item" align="left"><div class="_pronoun">do (auxiliary verb.)</div><p class="_txt">used with another verb to form questions and negative phrases</p><span class="_ex">Usage</span><ul class="_list"><li>Do you speak English?</li><li>Where do you work?</li><li>When does your train leave?</li><li>Why did you say that?</li><li>I don\'t know.</li><li>He doesn\'t eat meat.</li><li>I didn\'t see her there.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">do (auxiliary verb.)</div><p class="_txt">used to avoid repeating a verb that has just been used</p><span class="_ex">Usage</span><ul class="_list"><li>She runs much faster than he does.</li><li>Maria looks much healthier than she did.</li><li>"I hate that song!" "So do I."</li><li>"I don\'t like the heat." "Neither do I."</li><li>"May I join you?" "Please do!"</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">do (auxiliary verb.)</div><p class="_txt">used to give extra force to the main verb</p><span class="_ex">Usage</span><ul class="_list"><li>Do let me know if you need anything.</li><li>He does like you - he\'s just shy.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">do (verb.)</div><p class="_txt">to perform an action</p><span class="_ex">Usage</span><ul class="_list"><li>What should we do?</li><li>What are you doing tonight?</li><li>Have you done your homework?</li><li>We did a lot of talking.</li><li>I\'ve got nothing to do.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">do (verb.)</div><p class="_txt">to make or produce something</p><span class="_ex">Usage</span><ul class="_list"><li>I\'ve done 20 copies of the handout.</li><li>That bakery does a really good lemon cake.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">do (verb.)</div><p class="_txt">used for talking or asking about someone and whether they are healthy, happy, or succeeding</p><span class="_ex">Usage</span><ul class="_list"><li>Hi, how are you doing?</li><li>"How is Freya doing?" "She\'s doing really well, thanks."</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">do (verb.)</div><p class="_txt">to perform a sports activity</p><span class="_ex">Usage</span><ul class="_list"><li>She does yoga in her spare time.</li></ul></div>',
          description: [
            {
              level: "A1",
              pos: "auxiliary verb",
              guideword: "QUESTIONS/NEGATIVES",
              definition:
                "used with another verb to form questions and negative phrases",
              dictionary_example: [
                "Do you speak English?",
                "Where do you work?",
                "When does your train leave?",
                "Why did you say that?",
                "I don't know.",
                "He doesn't eat meat.",
                "I didn't see her there.",
              ],
              learner_example: [
                "What did you do at [the] party? (Key English Test; A2; Italian)",
              ],
            },
            {
              level: "B1",
              pos: "auxiliary verb",
              guideword: "AVOID REPEATING",
              definition:
                "used to avoid repeating a verb that has just been used",
              dictionary_example: [
                "She runs much faster than he does.",
                "Maria looks much healthier than she did.",
                '"I hate that song!" "So do I."',
                '"I don\'t like the heat." "Neither do I."',
                '"May I join you?" "Please do!"',
              ],
              learner_example: [
                "I like Brad Pitt a lot, and so does she. (Preliminary English Test; B1; Italian)",
              ],
            },
            {
              level: "B2",
              pos: "auxiliary verb",
              guideword: "FOR EMPHASIS",
              definition: "used to give extra force to the main verb",
              dictionary_example: [
                "Do let me know if you need anything.",
                "He does like you - he's just shy.",
              ],
              learner_example: [
                "I real[l]y do love to be a volunteer, to help people as much as I can. (Skills for Life (Level 1); B2; Romanian)",
              ],
            },
            {
              level: "A1",
              pos: "verb",
              guideword: "ACTION",
              definition: "to perform an action",
              dictionary_example: [
                "What should we do?",
                "What are you doing tonight?",
                "Have you done your homework?",
                "We did a lot of talking.",
                "I've got nothing to do.",
              ],
              learner_example: [
                "I have nothing to do. (Key English Test; A2; Chinese)",
              ],
            },
            {
              level: "A2",
              pos: "verb",
              guideword: "MAKE",
              definition: "to make or produce something",
              dictionary_example: [
                "I've done 20 copies of the handout.",
                "That bakery does a really good lemon cake.",
              ],
              learner_example: [
                "[On] any sp[e]cial day [like] Devali they do some sp[e]cial sweet food. (Skills for Life (Entry 2); A2; Arabic)",
              ],
            },
            {
              level: "A2",
              pos: "verb",
              guideword: "HEALTHY/HAPPY",
              definition:
                "used for talking or asking about someone and whether they are healthy, happy, or succeeding",
              dictionary_example: [
                "Hi, how are you doing?",
                '"How is Freya doing?" "She\'s doing really well, thanks."',
              ],
              learner_example: [
                "I'm doing fine. (Preliminary English Test; B1; Estonian)",
              ],
            },
            {
              level: "A2",
              pos: "verb",
              guideword: "SPORT, ETC.",
              definition: "to perform a sports activity",
              dictionary_example: ["She does yoga in her spare time."],
              learner_example: [
                "[At the club,] I can swim, do karate [or] yoga, play soccer, tennis, squash and table-tennis. (Preliminary English Test; B1; Portuguese)",
              ],
            },
          ],
          synonym: [],
        },
        {
          word_idx: 9,
          raw_word: "not",
          cefr: "A1",
          stopword: true,
          word: "not",
          lemma: "not",
          pos: "adv.",
          html_description:
            '<div class="card_content_item" align="left"><div class="_pronoun">not (adverb.)</div><p class="_txt">used to form a negative phrase after verbs like "be," "can," "have," "\'will," "must," etc., usually used in the short form "n\'t" in speech</p><span class="_ex">Usage</span><ul class="_list"><li>He\'s not fat!</li><li>I won\'t tell her.</li><li>I can\'t go.</li><li>Don\'t you like her?</li><li>It isn\'t difficult.</li><li>I\'m just not interested.</li><li>He\'s not bad-looking!</li><li>He\'s not as tall as his father.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">not (adverb.)</div><p class="_txt">used to give the next word or group of words a negative meaning</p><span class="_ex">Usage</span><ul class="_list"><li>I told you not to do that.</li><li>I like most vegetables but not cabbage.</li><li>"Come and play football, Dad." "Not now, Jamie."</li><li>It was Yuko who said that, not Richard.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">not (adverb.)</div><p class="_txt">used after verbs like "be afraid," "hope," "suspect," etc. in short, negative replies</p><span class="_ex">Usage</span><ul class="_list"><li>"Is he coming with us?" "I hope not."</li><li>"Have you finished?" "I\'m afraid not."</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">not (adverb.)</div><p class="_txt">used to form questions when you think the answer will be "yes," using the short form "n\'t"</p><span class="_ex">Usage</span><ul class="_list"><li>She\'s very pretty, isn\'t she?</li><li>You like cheese, don\'t you?</li></ul></div>',
          description: [
            {
              level: "A1",
              pos: "adverb",
              guideword: "AFTER BE/CAN, ETC.",
              definition:
                'used to form a negative phrase after verbs like "be," "can," "have," "\'will," "must," etc., usually used in the short form "n\'t" in speech',
              dictionary_example: [
                "He's not fat!",
                "I won't tell her.",
                "I can't go.",
                "Don't you like her?",
                "It isn't difficult.",
                "I'm just not interested.",
                "He's not bad-looking!",
                "He's not as tall as his father.",
              ],
              learner_example: [
                "It's not a problem for me. (Skills for Life (Entry 1); A1; French)",
              ],
            },
            {
              level: "A1",
              pos: "adverb",
              guideword: "NEGATIVE WORD/S",
              definition:
                "used to give the next word or group of words a negative meaning",
              dictionary_example: [
                "I told you not to do that.",
                "I like most vegetables but not cabbage.",
                '"Come and play football, Dad." "Not now, Jamie."',
                "It was Yuko who said that, not Richard.",
              ],
              learner_example: [
                "You know I go to college [but] not every day. (Skills for Life (Entry 1); A1; Cantonese)",
              ],
            },
            {
              level: "A2",
              pos: "adverb",
              guideword: "AFTER HOPE/SUSPECT, ETC.",
              definition:
                'used after verbs like "be afraid," "hope," "suspect," etc. in short, negative replies',
              dictionary_example: [
                '"Is he coming with us?" "I hope not."',
                '"Have you finished?" "I\'m afraid not."',
              ],
              learner_example: [""],
            },
            {
              level: "B1",
              pos: "adverb",
              guideword: "QUESTIONS",
              definition:
                'used to form questions when you think the answer will be "yes," using the short form "n\'t"',
              dictionary_example: [
                "She's very pretty, isn't she?",
                "You like cheese, don't you?",
              ],
              learner_example: [
                "I know that you love horror movies, don't you? (Preliminary English Test; B1; Portuguese)",
              ],
            },
          ],
          synonym: [],
        },
        {
          word_idx: 10,
          raw_word: "include",
          cefr: "A2",
          stopword: false,
          word: "include",
          lemma: "include",
          pos: "v.",
          html_description:
            '<div class="card_content_item" align="left"><div class="_pronoun">include (verb.)</div><p class="_txt">to contain something or someone as a part, or to make something or someone part of something</p><span class="_ex">Usage</span><ul class="_list"><li>The bill includes tax and tip.</li><li>Tax and tip are included in the bill.</li><li>Sheila asked to be included among the people going on the tour.</li><li>Your responsibilities will include making appointments on my behalf.</li></ul></div>',
          description: [
            {
              level: "A2",
              pos: "verb",
              guideword: "",
              definition:
                "to contain something or someone as a part, or to make something or someone part of something",
              dictionary_example: [
                "The bill includes tax and tip.",
                "Tax and tip are included in the bill.",
                "Sheila asked to be included among the people going on the tour.",
                "Your responsibilities will include making appointments on my behalf.",
              ],
              learner_example: [
                "It includes some songs. (Key English Test; A2; Turkish)",
              ],
            },
          ],
          synonym: [
            {
              word: "admit",
              cefr: "B1.1",
              html_description:
                '<div class="card_content_item" align="left"><div class="_pronoun">admit (verb.)</div><p class="_txt">to agree that something is true, especially unwillingly</p><span class="_ex">Usage</span><ul class="_list"><li>He admitted his mistake.</li><li>She admitted (that) she would rather just stay at home.</li><li>I wasn\'t entirely honest with him, I admit, but I didn\'t actually tell him any lies.</li></ul></div>',
            },
          ],
        },
        {
          word_idx: 11,
          raw_word: "donating",
          cefr: "B2",
          stopword: false,
          word: "donating",
          lemma: "donate",
          pos: "v.",
          html_description:
            '<div class="card_content_item" align="left"><div class="_pronoun">donate (verb.)</div><p class="_txt">to give money or goods to help a person or organization</p><span class="_ex">Usage</span><ul class="_list"><li>An anonymous businesswoman donated one million dollars to the charity.</li><li>Please donate generously.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">donate (verb.)</div><p class="_txt">to allow some of your blood or part of your body to be used for medical purposes</p><span class="_ex">Usage</span><ul class="_list"><li>He donated a kidney to his sister.</li></ul></div>',
          description: [
            {
              level: "B2",
              pos: "verb",
              guideword: "GIVE MONEY",
              definition:
                "to give money or goods to help a person or organization",
              dictionary_example: [
                "An anonymous businesswoman donated one million dollars to the charity.",
                "Please donate generously.",
              ],
              learner_example: [
                "You don't have to pay for [it] but you can donate some money if you wish. (First Certificate in English; B2; Polish)",
              ],
            },
            {
              level: "C1",
              pos: "verb",
              guideword: "BLOOD/ORGANS",
              definition:
                "to allow some of your blood or part of your body to be used for medical purposes",
              dictionary_example: ["He donated a kidney to his sister."],
              learner_example: [
                "For example, he once saved my life, putting his in danger by donating a large quantity of blood. (Certificate in Advanced English; C1; Romanian)",
              ],
            },
          ],
          synonym: [
            {
              word: "donate",
              cefr: "B2.8",
              html_description:
                '<div class="card_content_item" align="left"><div class="_pronoun">donate (verb.)</div><p class="_txt">to give money or goods to help a person or organization</p><span class="_ex">Usage</span><ul class="_list"><li>An anonymous businesswoman donated one million dollars to the charity.</li><li>Please donate generously.</li></ul></div><div class="card_content_item" align="left"><div class="_pronoun">donate (verb.)</div><p class="_txt">to allow some of your blood or part of your body to be used for medical purposes</p><span class="_ex">Usage</span><ul class="_list"><li>He donated a kidney to his sister.</li></ul></div>',
            },
          ],
        },
        {
          word_idx: 12,
          raw_word: "money.",
          cefr: "A1",
          stopword: false,
          word: "money",
          lemma: "money",
          pos: "n.",
          html_description:
            '<div class="card_content_item" align="left"><div class="_pronoun">money (noun.)</div><p class="_txt">the coins or bills that are used to buy things</p><span class="_ex">Usage</span><ul class="_list"><li>How much money do you have?</li><li>I don\'t have much money on me.</li><li>I spent a lot of money.</li><li>Roger wanted to buy it but it cost too much money.</li><li> The company isn\'t making any money this year.</li><li>Try to save some money for your vacation.</li></ul></div>',
          description: [
            {
              level: "A1",
              pos: "noun",
              guideword: "",
              definition: "the coins or bills that are used to buy things",
              dictionary_example: [
                "How much money do you have?",
                "I don't have much money on me.",
                "I spent a lot of money.",
                "Roger wanted to buy it but it cost too much money.",
                " The company isn't making any money this year.",
                "Try to save some money for your vacation.",
              ],
              learner_example: [
                "He is from England and he is very friendly and he work[s] a lot because he likes money. (Skills for Life (Entry 1); A1; Amharic)",
              ],
            },
          ],
          synonym: [],
        },
      ],
    },
  ],
};

export default response;
