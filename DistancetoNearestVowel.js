// Distance to Nearest Vowel 3.4.24

/*
Write a function that takes in a string and for each character, returns the distance to the nearest vowel in the string. If the character is a vowel itself, return 0.

Examples
distanceToNearestVowel("aaaaa") ➞ [0, 0, 0, 0, 0]

distanceToNearestVowel("babbb") ➞ [1, 0, 1, 2, 3]

distanceToNearestVowel("abcdabcd") ➞ [0, 1, 2, 1, 0, 1, 2, 3]

distanceToNearestVowel("shopper") ➞ [2, 1, 0, 1, 1, 0, 1]
Notes
All input strings will contain at least one vowel.
Strings will be lowercased.
Vowels are: a, e, i, o, u.
*/

// Code

function distanceToNearestVowel(str) {
    const vowels = ["a", "e", "i", "o", "u"]

    const arr = str.split("");
    let distances = [];

    arr.forEach((element, index) => {
        for (let i = 0; i <= arr.length - 1; i++) {
            if (vowels.includes(arr[index + i]) || vowels.includes(arr[index - i])) {
                distances.push(i);
                break;
            }
        }
    });

    console.log(distances);
}

distanceToNearestVowel("aaaaa"); // [0, 0, 0, 0, 0]
distanceToNearestVowel("babbb"); // [1, 0, 1, 2, 3]
distanceToNearestVowel("abcdabcd"); // [0, 1, 2, 1, 0, 1, 2, 3]
distanceToNearestVowel("shopper"); // [2, 1, 0, 1, 1, 0, 1]
