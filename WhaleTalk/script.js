let input = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"

// Whales only speak with the vowels, “a”, “e”, “i”, “o”, and “u”. Using these lowercase letters, create an array named vowels. This array will not be updated so be sure to choose the appropriate declaration keyword.
//Note: The use of this array will be more apparent within the following steps.

let vowels = ['a', 'e', 'i', 'o', 'u'];

// Create a variable named resultArray and set it equal to an empty array: []. This will serve as a place to store the vowels from the input string.

let resultArray = [];

// Create a loop to iterate through each letter of the input variable text. In a later step, we will compare each letter with our vowels array.

for(let i = 0 ; i < input.length ; i++){ 
    for(let j = 0 ; j < vowels.length ; j++ ){
        if(input[i] === vowels[j]){
            resultArray.push(input[i])
            console.log(vowels[j])
        }
    }
}