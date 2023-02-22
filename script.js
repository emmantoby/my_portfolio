
let firstSeven = Math.floor(Math.random() * 50 + 1);
firstSeven = (firstSeven).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false});

let secondSeven = Math.floor(Math.random() * 50 + 1);
if(secondSeven < 50 && secondSeven === firstSeven){
    secondSeven = secondSeven + 1;
} 
secondSeven = (secondSeven).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false});

let thirdSeven = Math.floor(Math.random() * 50 + 1);
if(thirdSeven < 50 && thirdSeven === secondSeven || thirdSeven === firstSeven){
    thirdSeven = thirdSeven + 1;
}
thirdSeven = (thirdSeven).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false});

let fourthSeven = Math.floor(Math.random() * 50 + 1);
if(fourthSeven < 50 && fourthSeven === thirdSeven || fourthSeven === secondSeven || fourthSeven === firstSeven){
    fourthSeven = fourthSeven + 1;
}
fourthSeven = (fourthSeven).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false});

let fifthSeven = Math.floor(Math.random() * 50 + 1);
if(fifthSeven < 50 && fifthSeven === fourthSeven || fifthSeven === thirdSeven || fifthSeven === secondSeven || fifthSeven === firstSeven){
    fifthSeven = fifthSeven + 1;
}
fifthSeven = (fifthSeven).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false});

let sixthSeven = Math.floor(Math.random() * 50 + 1);
if(sixthSeven < 50 && sixthSeven === fifthSeven || sixthSeven === fourthSeven || sixthSeven === thirdSeven || sixthSeven === secondSeven || sixthSeven === firstSeven){
    sixthSeven = sixthSeven + 1;
}
sixthSeven = (sixthSeven).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false});

let seventhSeven = Math.floor(Math.random() * 50 + 1);
if(seventhSeven < 50 && seventhSeven === sixthSeven || seventhSeven === fifthSeven || seventhSeven === fourthSeven || seventhSeven === thirdSeven || seventhSeven === secondSeven || seventhSeven === firstSeven){
    seventhSeven = seventhSeven + 1;
}
seventhSeven = (seventhSeven).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false});


let getSeven = document.getElementById('lucky1');
getSeven.addEventListener('click', () => {
    document.getElementById('output1').innerHTML = `${firstSeven} ${secondSeven} ${thirdSeven} ${fourthSeven} ${fifthSeven} ${sixthSeven} ${seventhSeven}`;
})    

let firstSix = Math.floor(Math.random() * 49 + 1);
firstSix = (firstSix).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false});


let secondSix = Math.floor(Math.random() * 49 + 1);
if(secondSix< 49 && secondSix === firstSix){
    secondSix = secondSix + 1;
}
secondSix = (secondSix).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false});

let thirdSix = Math.floor(Math.random() * 49 + 1);
if(thirdSix< 49 && thirdSix === secondSix || thirdSix === firstSix){
    thirdSix = thirdSix + 1;
}
thirdSix = (thirdSix).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false});

let fourthSix = Math.floor(Math.random() * 49 + 1);
if(fourthSix< 49 && fourthSix === thirdSix || fourthSix === secondSix || fourthSix === firstSix){
    fourthSix = fourthSix + 1;
}
fourthSix = (fourthSix).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false});

let fifthSix = Math.floor(Math.random() * 49 + 1);
if(fifthSix< 49 && fifthSix === fourthSix || fifthSix === thirdSix || fifthSix === secondSix || fifthSix  === firstSix){
    fifthSix = fifthSix + 1;
}
fifthSix = (fifthSix).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false});

let sixthSix = Math.floor(Math.random() * 49 + 1);
if(sixthSix< 49 && sixthSix === fifthSix || sixthSix === fourthSix || sixthSix === thirdSix || sixthSix === secondSix || sixthSix === firstSix){
    sixthSix = sixthSix + 1;
}
sixthSix = (sixthSix).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false});


let getSix = document.getElementById('lucky2');
getSix.addEventListener('click', () => {
    document.getElementById('output2').innerHTML = `${firstSix} ${secondSix} ${thirdSix} ${fourthSix} ${fifthSix} ${sixthSix}`;
})    


let firstFive = Math.floor(Math.random() * 49 + 1);
firstFive= (firstFive).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false});


let secondFive = Math.floor(Math.random() * 49 + 1);
if(secondFive< 49 && secondFive === firstFive){
    secondFive= secondFive + 1;
}
secondFive = (secondFive).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false});

let thirdFive = Math.floor(Math.random() * 49 + 1);
if(thirdFive< 49 && thirdFive === secondFive|| thirdFive === firstFive){
    thirdFive= thirdFive + 1;
}
thirdFive = (thirdFive).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false});

let fourthFive = Math.floor(Math.random() * 49 + 1);
if(fourthFive< 49 && fourthFive === thirdFive|| fourthFive === secondFive || fourthFive === firstFive){
    fourthFive = fourthFive + 1;
}
fourthFive= (fourthFive).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false});

let fifthFive = Math.floor(Math.random() * 49 + 1);
if(fifthFive< 49 && fifthFive === fourthSix || fifthFive === thirdFive|| fifthFive === secondFive || fifthFive === firstFive){
    fifthFive = fifthFive + 1;
}
fifthFive= (fifthFive).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false});

let luckNumber = Math.floor(Math.random() * 7 + 1);
luckNumber = (luckNumber).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false});


let getFive = document.getElementById('lucky3');
getFive.addEventListener('click', () => {
document.getElementById('output3').innerHTML = `${firstFive} ${secondFive} ${thirdFive} ${fourthFive} ${fifthFive}  -${luckNumber}`;
})   
