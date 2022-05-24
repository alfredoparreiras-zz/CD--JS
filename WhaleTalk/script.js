let input = "Carolina Praticidade Alfredo Simplicidade"

// Whales only speak with the vowels, “a”, “e”, “i”, “o”, and “u”. Using these lowercase letters, create an array named vowels. This array will not be updated so be sure to choose the appropriate declaration keyword.
//Note: The use of this array will be more apparent within the following steps.

let vowels = ['a', 'e', 'i', 'o', 'u'];

// Create a variable named resultArray and set it equal to an empty array: []. This will serve as a place to store the vowels from the input string.

let resultArray = [];

// Create a loop to iterate through each letter of the input variable text. In a later step, we will compare each letter with our vowels array and add them to resultArray;
//Whales double their e‘s and the u‘s in their language.
// Write an if statement that checks if each letter in the input string is equal to 'e'. If so, use the .push() method to add input[i] to the resultArray.
// Note: This statement belongs before the inner for loop block inside the outer for loop. This is because you only want to perform this check once for every letter in the input.

for(let i = 0 ; i < input.length ; i++){ 
    if(input[i] === 'e'){
        resultArray.push(input[i])
    } else if (input[i] === 'u'){
        resultArray.push(input[i])
    }
    for(let j = 0 ; j < vowels.length ; j++ ){
        if(input[i] === vowels[j]){
            resultArray.push(vowels[j])
        }
    }
}

// Currently, resultArray outputs an array of characters. To produce proper whale language, we want to capitalize the array elements and put them together as one string.
// Declare a variable resultString that joins our resultArray into a single string and capitalizes all of it’s letters.

let resultString = resultArray.join('').toUpperCase();

console.log(resultString);