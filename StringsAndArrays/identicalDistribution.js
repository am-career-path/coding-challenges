//An e-commerce company specializes in cards with sports figures on them.
//Each sport has different categories of cards. For instance, there might be
//more desirable cards with the most popular sports personalities, others with
//small pieces of a player's jersey attached and so on. They have a number of
//each category of card, and want to make some number of packets that contain equal
//numbers of any type of card. To do this, they will add more cards of each type until
//each can be divided equally among same number of packets.

//Determine the minimum number of additional cards needed to create a number of packets
//with equal type distribution

//Example:
//n = 5
// cardTypes=[4, 7, 5, 11, 15]

//In order to make 2 matching packets, the following numbers of additional cards of each
//type must be added: [0, 1, 1, 1, 1]. This sums 4 additional cards. The numbers od cards
//would then be [4, 8, 6 ,12, 16] and they can be evenly divided among 2 packets

function cardPackets(cardTypes) {
  let n = cardTypes.length;

  let diffArray = [];

  if (cardTypes.reduce((a, b) => a + b, 0) % n === 0) {
    diffArray.push(0);
  } else {
    for (let i = 0; i < n; i++) {
      diffArray.push(cardTypes[i] % 2);
    }
  }

  return diffArray.reduce((a, b) => a + b, 0);
}

let testArray = [5, 10, 15, 20, 5];

console.log(cardPackets(testArray));
