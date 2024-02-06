/*
Who's Buying Lunch? Code Challenge
You are going to write a function which will select a random name from a list of names.
The person selected will have to pay for everybody's food bill.

Important: The output should e returned from the function and you do not need alert, prompt or console.log.
The output should match the example output exactly, including capitalisation and punctuation.

Example Input:

["Angela", "Ben", "Jenny", "Michael", "Chloe"]
Example Output:

Michael is going to buy lunch today!

*/

function whosPaying(names) {
    
    //Write your code here.
    
    var numberOfPosition=names.length;
    var randomPersonPosition=Math.floor(Math.random()*numberOfPosition);
    var randomPerson=names[randomPersonPosition];
    
    return randomPerson+" is going to buy lunch today!";
    
}
