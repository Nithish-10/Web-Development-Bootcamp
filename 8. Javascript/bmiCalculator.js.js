//Create your function below this line.
//The first parameter should be the weight and the second should be the height.
/* If my weight is 65Kg and my height is 1.8m, I should be able to call your function like this:
var bmi = bmiCalculator(65, 1.8); 
bmi should equal 20 when it's rounded to the nearest whole number.
*/
/*
var weight = prompt("Enter your weight in kilograms:");
var height = prompt("Enter your height in meters:");
var result = bmiCalculator(weight, height);

console.log("BMI:", result);


function bmiCalculator(weight, height) {
    var bmi=weight/(height*height);
    return bmi;
}

*/

///BMI Calculator Advanced using If / Else codition


function bmiCalculator (weight, height) {
    var bmi=weight/(height*height);
    if(bmi<18.5)
    {
        return "Your BMI is "+bmi+", so you are underweight.";
    }
    else if(bmi>18.5 && bmi<24.9){
        return "Your BMI is "+bmi+", so you have a normal weight.";
    }
    else{
        return "Your BMI is "+bmi+", so you are overweight.";
    }
}
var weight1=prompt("Your weight:");
var height1=prompt("Your height:");


var result=bmiCalculator(weight1,height1);
result;

