/*Upper to Lower && Lower to Upper*/
/*
var name="nithish";
//name.toUpperCase();
name=name.toUpperCase();
name=name.toLowerCase();
*/

//TASK 1:

/*
var name=prompt("What is your name: ");
alert("Hello "+name.toUpperCase());

*/

//TASK 2:

//1.Create a var that stores the name user enters via prompt.
var name=prompt("What is your name: ");
//2.Capitalize the first letter of their text.

//2a.isolate the first character.
var firstChar=name.slice(0,1);
//2b.Turn the first character to uppercase.
var upperCaseFirstChar=firstChar.toUpperCase();
//2c.Isolate the rest of character.
var restchar=name.slice(1,name.length);
//2d.Concatenate the first char with the rest of the character.
var concatenateName=upperCaseFirstChar+""+restchar;
//3. we use the capitalized version of their name to greet them using an alert.
alert("Hello"+" "+concatenateName);
