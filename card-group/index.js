/**
 * @param {number[]} deck
 * @return {boolean}
 */
var hasGroupsSizeX = function(deck) {
    if (deck.length <= 1) return false;
    const deckObj = {};
    for (let i = 0; i < deck.length; ++i) {
        deckObj[deck[i]] = deckObj[deck[i]] ? deckObj[deck[i]] + 1 : 1;
    }
    console.log('deckObj',deckObj);
    const arr = Object.values(deckObj);
    if (arr.length === 1) return true;
    let minNum = arr.reduce((prev, current) => {
        return Math.min(prev, current);
    });
    let index = 2;
    while (index <= minNum) {
       let aliquotNum = 0;
       for (let j = 0 ; j < arr.length; ++j) {
           if (arr[j] % index === 0) {
               aliquotNum += 1;
           } else {
               break;
           }
       }
       if (aliquotNum === arr.length) {
           return true;
       }
       index > 2 ? index += 2 : index += 1;
    }
    return false;
    
};

console.log(hasGroupsSizeX([1,1,2,2,2,2]))