// set my array in function


// set up button 
document.getElementById("clickBld").addEventListener("click", sunSet);


function sunSet(){
    let arrayBld = [3, 2, 4, 7, 6, 9];
    let tallest = arrayBld[0];
    let inSunAmt = 1;
    let inSunBld = [];
    inSunBld.push(tallest);

    for (let loop = 1; loop < arrayBld.length; loop++) {

        if (arrayBld[loop] > tallest) {
        inSunAmt++;
        inSunBld.push(arrayBld[loop]);
        tallest = arrayBld[loop];
        }
    }
    // document.getElementById("result").innerHTML = `inSunAmt + buildings in the sun.`
    document.getElementById("result").innerHTML = `${inSunAmt}`;
    document.getElementById("result2").innerHTML = `${inSunBld.join(', ')}`;
}

// extra credit
//  Add buttons and Get user's input

document.getElementById("clickBld2").addEventListener("click", sunSet2);
document.getElementById("clear").addEventListener("click", Clear);

function sunSet2(){
    let bld1 = parseInt(document.getElementById("input1").value);
    let bld2 = parseInt(document.getElementById("input2").value);
    let bld3 = parseInt(document.getElementById("input3").value);
    let bld4 = parseInt(document.getElementById("input4").value);
    let bld5 = parseInt(document.getElementById("input5").value);
    let bld6 = parseInt(document.getElementById("input6").value);

    // turn user data into an array
    // let allArrayar = parseInt(document.getElementById("input1","input2","input3","input4","input5","input6"))
    // let allBld = [bld1, bld2, bld3, bld4, bld5, bld6];
    // let allBld = new Array()
    let arrayBld2 = new Array();
    arrayBld2.push(bld1);
    arrayBld2.push(bld2);
    arrayBld2.push(bld3);
    arrayBld2.push(bld4);
    arrayBld2.push(bld5);
    arrayBld2.push(bld6);

    // create new array who will record the building heights. first building is always the max
    let maxHeight = arrayBld2[0];
    let viewers = new Array();
    viewers.push(maxHeight);

    // only if the current building is larger that the previous buildings will it be added to the array
    for(let loop=1; loop < arrayBld2.length; loop++){
        if(arrayBld2[loop] > maxHeight){
            maxHeight = arrayBld2[loop]
            viewers.push(maxHeight)
        }
    }

    // output
    document.getElementById("result3").innerText = ` ${viewers.join(', ')}`
}


function Clear(){
    document.getElementById("input1").value = "";
    document.getElementById("input2").value = "";
    document.getElementById("input3").value = "";
    document.getElementById("input4").value = "";
    document.getElementById("input5").value = "";
    document.getElementById("input6").value = "";
    document.getElementById("result3").innerText = "";

}