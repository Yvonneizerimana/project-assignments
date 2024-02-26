
//input string
const string="turpentine and turtles";

//create array that store vowels because whale talk language use vowels
const vowels=["a","e","i","o","u"];

//create empty array that will store the result of whale talk from our input
let resultArray=[];

//iterate to the input
for(i=0;i<string.length;i++){

    //iterate to the vowels
    for(j=0;j<vowels.length;j++){

        //compare each character in input and each vowels in array
if(string[i]===vowels[j]){
   resultArray.push(string[i]);

   //because whale talk languwage we double e and u and push it again to the result array
   if(string[i]=='e'){
resultArray.push(string[i]);
   }
   if (string[i]=="u"){
    resultArray.push(string[i]);
   }
   
}

}

}

//print the the output of resultArray as a string and put it in uppercase letter.

console.log(resultArray.join("").toUpperCase());