// function mutation(arr) {

//     const word1 = [...arr[0].toLowerCase()]
//     const word2 = [...arr[1].toLowerCase()]

//     // word1.forEach(c => c.toLowerCase())
//     const isWord1InWord2 = word2.every(word => word1.includes(word))
//     const isWord2InWord1 = word1.every(word => word2.includes(word))

//     if (isWord2InWord1 || isWord1InWord2)
//         return true
//     return false

// }

// console.log(mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]));


function mutation(arr) {
    var check = 0;
    for (i = 0; i < arr[1].length; i++) {
        check = arr[0].toLowerCase().indexOf(arr[1][i].toLowerCase());
        if (check == -1) {
            return false;
        }

    }
    return true;
}    