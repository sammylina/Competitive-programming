/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function(s) {
    const word_list = s.split(' ');
    let temp;

    for (let i in word_list) {
        let smallest = i;
        for (let s = i; s < word_list.length; s++) {
            let search = word_list[s];
            let curr = word_list[smallest]
            if (search[search.length - 1] < curr[curr.length - 1]) {
                smallest = s;
                
            }
           
        }
        word_list[smallest] = word_list[smallest].slice(0, -1)
        temp = word_list[i];
        word_list[i] = word_list[smallest];
        word_list[smallest] = temp;
    }

    return word_list.join(' ');
};
