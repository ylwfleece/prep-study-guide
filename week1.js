// Primitive Data Types
// overview: there are six primitive data types in javascript, the main four you will encounter are:

// number
let num = 1;
let otherNum = 97;

//string
let string = 'Hello';
let otherString = 'world';

//boolean
let bool = true;
let otherBool = false;

//undefined 
let randomVariable; // this defaults to the value of undefined
console.log(randomVariable); // this will print 'undefined' in the browser




//Functions
// this function creates a h1 element with any given text passed in 
// text in ()'s is referred to as the parameter
// any example of text you pass in to the function is called an argument
// lines 21-28 is called a function definition
function createHeaderWithText(text) {
    // here we are creating the h1 element
    let header = document.createElement('h1');
    // setting the h1 element's innerHTML to the text we passed in as argument
    header.innerHTML = text;
    // returning the new h1 element to use elsewhere
    return header;
}

// now let's invoke our function with the argument, 'This is my header!'
let myHeader = createHeaderWithText('This is my header');
// now that we've saved a new header in our variable, myHeader, we can append it to our page if we want 
document.appendChild(myHeader);




// Looping
// loops are used to iterate through data for the sake of automating otherwise time-intensive tasks
// this loop could be used to loop through data from a Twitter  database
// in this case twitter data is an array of strings (the array has five elements)
let twitterData = ['tweetAt0thIndex', 'tweetAt1stIndex', 'tweetAt2ndIndex', 'tweetAt3rdIndex', 'tweetAt4thIndex']; // each data could be a tweet
// 
// now instead of hardcoding elements for each data, we want to loop through the data 
// and generate elements in a more automated way
for (let i = 0; i < twitterData.length; i++) {
    // ^this is effectively saying
    // start a count at 0 to start looping at the beginning of our array of data
    // for each element at each index in the array,
    // create a new element and add it to the news feed
    // we're going to use our above function to create h1's for tweets
    let tweet = createHeaderWithText(twitterData[0]);
    // ^this is saying: create a new header element using our function 
    // use the text from our twitter data array at the current index
    // then we'll add it to our feed using the following:
    document.body.appendChild(tweet);
}
// ^at the end of our loop, we should have five tweets appended to our feed
// notice how a loop kind of looks like a function, with the parenthesis and curly braces




// Conditionals
// are very important 
// in our above loop we use the condition 'i < twitterData.length' to tell the computer:
// only loop from the beginning to the end of our data
// in other words, it's saying: if our current index is less than our array length, 
// that means there's still data for us to loop over, so let's continue looping and creating elements
// otherwise (or 'else') we want to stop looping and creating elements
// we could add a conditional to our createHeaderWithText function in order to prevent people from tweeting 'fuck'
function createHeaderWithTextAndFilter(text) {
    // this is acting as a filter, filtering out the word 'fuck'
    // if someone calls (invokes) the function with any word other than 'fuck', 
    // then create the tweet
    if (text !== 'fuck') {
        // here we are creating the h1 element
        let header = document.createElement('h1');
        // setting the h1 element's innerHTML to the text we passed in as argument
        header.innerHTML = text;
        // returning the new h1 element to use elsewhere
        return header;
    // otherwise if someone invoked the function with the word 'fuck'
    // then don't create an element, just console log 'You cannot tweet the word, fuck'
    } else {
        console.log('You cannot tweet the word, fuck');
    }
}





// Objects and Arrays
// this is an example of an object
let obj = {
    property1: 'value1',
    property2: 'value2'
}
// or 
let moreComplexObj = {
    property1: 'value1',
    objFunction: function createHeader(text) {
        let header = document.createElement('h2');
        header.innerHTML = text;
        return header;
    }
}
// this is an example of an array
let arr = [1, 2, 3, 4];
// or 
let tweets = ['fook', 'shot', 'pees'];
// we usually use arrays in the context of looping
// we could have an array of objects 
let arrOfObjs = [obj, moreComplexObj];
// or an object with an array in it
let objWithArr = {
    array1: [1, 2, 3]
}





// Decomposition
// this is about accessing elements of an array or values of any object
// if we want to access the word 'shot' from our tweets array from above,
let word = tweets[1];
// ^this says: get the element at index 1 (i.e., the second element because arrays start at index 0)
// and save it into the variable called 'word'
// now if we want to print the word to the console, we can do
console.log(word);

// or we can access an objects properties like
let val = moreComplexObj.property1;
// here we are accessing and invoking the function property of the moreComplexObj
let otherVal = moreComplexObj.objFunction();





// Abstraction
// abstraction usually refers to the creation of abstract classes like this:
// i want to abstract the real-world attributes of fish into a digital construct
// for an aquarium application
// so i'll create a fish class
class Fish {
    // and fish have fins so i'll add that property
    hasFins = true;
    // and fish can swim so i'll add that behavior as a function
    swim() {
        console.log('The fish is swimming');
    }
}
// now we need to think about all the fish we'll include in the aquarium and how they differ
// so we'll make new classes for different types of fish
// we know all fish have fins and swim, so we'll inherit those attributes from our parent class, fish
class Shark extends Fish {
    // sharks are different from some other fish in that they have sharp teeth
    hasSharpTeeth = true;
    // and sometimes attack humans
    attackHumans() {
        // we'll set a variable to get a random number to determine if sharks will attack
        // if number is less than 0.01, then shark will attack
        let randomNum = Math.random();
        if (randomNum < 0.01) {
            console.log('Shark attack!');
        } 
    }
}
// other fish might be less interesting
class Tuna extends Fish {
    // we might care about the color 
    color = 'Gray';
    // or the average speed of swimming (in mph)
    swimSpeed = 10;
    // have a lack of effect on humans
    boreHumans() {
        console.log('The humans are bored of tuna');
    }
}