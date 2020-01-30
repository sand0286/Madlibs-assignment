
const littleRed = {
    color: 'yellow',
    pluralNouns: ['dogs', 'caps', 'dinner', 'bases'],
    adjective: 'giant',
    exclamation: 'ow',
    sillyword: 'guy',
    verb: ['agree', 'gain', 'hail']
  }
  
  console.log(`One day, Little ${littleRed.color} Riding Hood was going through the forest carrying a 
    basket of ${littleRed.pluralNouns[0]} for her grandmother.Suddenly, she met a big
    ${littleRed.adjective} wolf.
    
    ${littleRed.exclamation} said the wolf. "Where are you going little ${littleRed.sillyword}?"
  
  "I'm going to my grandmother's house," she said.Then the wolf
  ${littleRed.verb[0]} away.
  
  When Miss Riding Hood got to her grandmother's house, the wolf was in bed 
  dressed like her grandmother.
    
    "My, Grandmother," she said. "What big ${littleRed.pluralNouns[1]} you have."
  
  "The better to ${littleRed.verb[1]} you with," said the wolf.
    
    "And, Grandmother," she said, "what big ${littleRed.pluralNouns[2]}" you have."
  
  The wolf said, "The better to ${littleRed.verb[2]} you with."
  
  And then she said, "What big ${littleRed.pluralNouns[3]}" you have, Grandmother." But 
  the wolf said nothing.He had just died of indigestion from eating Grandmother`)
  
  // part2
  
  littleRed.color = 'blue'
  littleRed.pluralNouns[2] = 'grapes'
  littleRed.exclamation = '!'
  littleRed.verb[1] = 'nail'
  
  console.log(`One day, Little ${littleRed.color} Riding Hood was going through the forest carrying a 
  basket of ${littleRed.pluralNouns[0]} for her grandmother.Suddenly, she met a big
  ${littleRed.adjective} wolf.
  
  ${littleRed.exclamation} said the wolf. "Where are you going little ${littleRed.sillyword}?"
  
  "I'm going to my grandmother's house," she said.Then the wolf
  ${littleRed.verb[0]} away.
  
  When Miss Riding Hood got to her grandmother's house, the wolf was in bed 
  dressed like her grandmother.
  
  "My, Grandmother," she said. "What big ${littleRed.pluralNouns[1]} you have."
  
  "The better to ${littleRed.verb[1]} you with," said the wolf.
  
  "And, Grandmother," she said, "what big ${littleRed.pluralNouns[2]}" you have."
  
  The wolf said, "The better to ${littleRed.verb[2]} you with."
  
  And then she said, "What big ${littleRed.pluralNouns[3]}" you have, Grandmother." But 
  the wolf said nothing.He had just died of indigestion from eating Grandmother`)
  
  // Snow White
  // part1
  
  let snowWhite = {
    pluralNoun: ['car', 'fine'],
    number: 8,
    adjective: ['dark', 'mad', 'bad'],
    noun: ['tiger', 'deer', 'herb', 'series', 'rat'],
    color: 'brown',
    partOfTheBody: 'kneck',
    adVerb: 'peaceful'
  }
  
  console.log(`One of the most popular fairy ${snowWhite.pluralNoun[0]} of all time is Snow White and the 
  ${snowWhite.number} ${snowWhite.pluralNoun[1]}.
  
  Snow White is a princess whose ${snowWhite.adjective[0]} beauty threatens her stepmother, 
  the queen. Snow White is forced to flee from the ${snowWhite.noun[0]} in which she lives 
  and hide in a nearby ${snowWhite.noun[1]}.
  
  Once there, she is discovered by ${snowWhite.adjective[1]} animals who guide her to the 
  ${snowWhite.adjective[2]} cottage of the seven dwarfs. The dwarfs take care of her until 
  the prince, who has traveled the four corners of the ${snowWhite.noun[2]} in search of 
  Snow ${snowWhite.color}, arrives and gives her a magical ${snowWhite.noun[3]} on her 
  ${snowWhite.partOfTheBody}, which miraculously bring her back to life after she eats 
  a poisonous ${snowWhite.noun[4]}. Snow White and the prince live ${snowWhite.adverb} ever after.`)
  
  // part2
  
  snowWhite.number = 4
  snowWhite.adjective[0] = 'terrible'
  snowWhite.noun[1] = 'palace'
  snowWhite.noun[3] = 'scared'
  snowWhite.color = 'white'
  
  // console.log(snowWhite)
  console.log(`One of the most popular fairy ${snowWhite.pluralNoun[0]} of all time is Snow White and the 
  ${snowWhite.number} ${snowWhite.pluralNoun[1]}.
  
  Snow White is a princess whose ${snowWhite.adjective[0]} beauty threatens her stepmother, 
  the queen. Snow White is forced to flee from the ${snowWhite.noun[0]} in which she lives 
  and hide in a nearby ${snowWhite.noun[1]}.
  
  Once there, she is discovered by ${snowWhite.adjective[1]} animals who guide her to the 
  ${snowWhite.adjective[2]} cottage of the seven dwarfs. The dwarfs take care of her until 
  the prince, who has traveled the four corners of the ${snowWhite.noun[2]} in search of 
  Snow ${snowWhite.color}, arrives and gives her a magical ${snowWhite.noun[3]} on her 
  ${snowWhite.partOfTheBody}, which miraculously bring her back to life after she eats 
  a poisonous ${snowWhite.noun[4]}. Snow White and the prince live ${snowWhite.adverb} ever after.`)