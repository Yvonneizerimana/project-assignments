//array declaration

let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

//lenght of array
console.log(secretMessage.length);

//adding two element at the end of array
secretMessage.push('i','agree');

//replace element from easily to right
for(i=0; i<secretMessage.length;i++){
    if(secretMessage[i]==='easily'){
        let change=secretMessage[i]='right';
        console.log(change);
        
    }

}

//remove first element from an array
secretMessage.shift();

//add element to the first index in array
secretMessage.unshift('programming');

//replace all element in array from get up to time by single word called know
for(i=0; i<secretMessage.length;i++){
    if(secretMessage[i]==='get'){
       let index= secretMessage.indexOf(secretMessage[i]);
secretMessage.splice(index,5,'know');
    }
}

//print and join the array element
console.log(secretMessage.join(" "));
