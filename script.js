/**
 * Created by h205p3 on 9/28/17.
 */
//problem 11
function firstLast6(array) {
    var b = array[0];
    var c = array[(array.length - 1)];
    if((b == 6) || (c == 6) ){
        return true;
    }else{
        return false;
    }
}

//problem 12
function has23(x) {
    for(var i = 0; i < x.length; i++){
        if((x[i] == 2) || (x[i] == 3)){
            return true;
        }
    }
    return false;

}


//problem 13
function fix23(y){
    var x = y;
    var first = x[0];
    var second = x[1];
    var third = x[2];
    if((first == 2) && (second == 3)){
        x[1] = 0;
        return x;
    }else{
        if((second == 2) && (third == 3)){
            x[2] = 0;
            return x;
        }else{
            return x;
        }
    }

}

//problem 14
function countYZ(string){
    var x = string;
    var last = x.length - 1;
    var count = 0;
    for( var i = 0; i < (x.length); i ++){
        if((x[i] == "y") || (x[i] == "z") || (x[i] == "Y") || (x[i] == "Z")) {
            if(x[i + 1] == " ") {
                count++
            }else{
                if(i == (last)){
                    count++;
                }
            }
        }
    }
    return count;
}

//problem 15
function endOther(x, y){
    var xBigy = false;
    var yBigx = false;
    var same = false;
    var xStr = x.toLowerCase();
    var yStr = y.toLowerCase();
    var result = false;
    var sameStr = "";
    if(x.length > y.length){
        xBigy = true;
    }
    if(x.length < y.length){
        yBigx = true;

    }
    if(xBigy == true){
        var temp = xStr.match(yStr);
        if((temp == yStr) && (yStr[yStr.length-1] == xStr[xStr.length - 1])){
            result = true;
            return result;
        }else{
            return result;
        }

    }else{
        if(yBigx == true){
            var temp = yStr.match(xStr);
            if((temp == xStr) && (yStr[yStr.length-1] == xStr[xStr.length - 1])){
                result = true;
                return result;
            }else{
                return result;
            }
        }else{
            if(xStr == yStr){
                result = true;
                return result;
            }else{
                return result;
            }
        }
    }
}


// problem 16
function starOut(string){
    var result = "";
    for(var i = 0; i < string.length; i++){
        if((string[i] !== "*") && (string[(i - 1)] !== "*") && (string[(i + 1)] !== "*")){
            result += string[i];
        }
    }
    return result;

}



//problem 17 (test)
/*function getSandwich(string){
    var result = "";
    var str = string.toLowerCase();
    var matchTemp = str.match(/bread/g);
    var numBrd = matchTemp.length;
    var piece = "";
    if(numBrd <= 1){
        return result;
    }else{
        piece = str.slice( (str.search(/bread/g) ), (str.length) );
        for(var i = 0; i < (numBrd); i++){
            var x = (piece.match(/bread/g));
          if(x.length > 1){
              piece = piece.slice(5, (piece.length));
          }

      }
      piece = piece.slice(0, (piece.search("bread")))
      result = piece;
      return result;
    }
}*/

//problem 17
function getSandwich(string){
    var result = "";
    var str = string;
    var matchTemp = str.match(/bread/g);
    var numBrd = matchTemp.length;
    var piece = "";
    if(numBrd <= 1){
        return result;
    }else{
        piece = str.slice( (str.search(/bread/g) ), (str.length) );
        piece = piece.slice(5, (piece.length));
        var temp = piece.match(/bread/g);
        if(temp.length > 1){
            var count = temp.length;
            piece = piece.slice(5, piece.length);
            for(var i = temp.length; i > 2; i--){
                piece = piece.slice(5, piece.length);
            }
            piece = piece.slice(0, (piece.search("bread")));
            var extra = "";
            for(var b = 0; b < (temp.length - 1); b++){
                extra += "bread";
            }
            extra += piece;
            result = extra;
            return result;
        }else {
            piece = piece.slice(0, (piece.search("bread")))
        }
        result = piece;
        return result;
    }
}



//problem 18 v1
/*function canBalance(array){
    if(((array.length) % 2) === 0){
        var tempA = array.slice(0, ((array.length / 2) - 1));
        var tempB = array.slice((array.length / 2), (array.length - 1));
        var sumA = 0;
        var sumB = 0;
        for(var i = 0; i < tempA.length; i++){
            sumA += tempA[i];
        }
        for(var b = 0; b < tempB.length; b++){
            sumB += tempB[b];
        }
        return (sumB === sumA);
    }else{
        var temp1 = (Math.floor(array.length - 1) - 1) ;
        var temp2 = (Math.floor(array.length - 1) - 2);
        var temp3A = array.slice(0, temp1 );
        var temp3B = array.slice(0, temp2 );
        var temp4A = array.slice(temp1, (array.length ));
        var temp4B = array.slice(temp2, (array.length ));
        var sum1A = 0;
        var sum1B = 0;
        var sum2A = 0;
        var sum2B = 0;
        for(var c = 0; c < temp3A.length; c++){
            sum1A += temp3A[c];
        }
        for(var d = 0; d < temp4A.length; d++){
            sum1B += temp4A[d];
        }
        for(var f = 0; f < temp3B.length; f++){
            sum2A += temp3B[f];
        }
        for(var g = 0; g < temp4B.length; g++){

            sum2B += temp4B[g];
        }



        return ((sum1A === sum1B) || (sum2A=== sum2B));
    }
}*/


function sumOfArray(array){
    var sum = 0;
    for(var i = 0; i < array.length; i++){
        sum += array[i];
    }
    return sum;
}
//problem 18v2
function canBalance(array){
    var sum = 0;
    for(var i = 0; i < array.length; i++){
        sum += array[i];
    }
    var half = sum / 2;
    var count = 0;
    var tempSum1 = 0;
    var tempSum2 = 0;
    if(sum % 2 === 0){
        while(tempSum1 < half){
            tempSum1 += array[count];
            count ++;
        }
        while(tempSum2 < half){
            tempSum2 += array[count];
            count ++;
        }
        return(tempSum1 === tempSum2);

    }else{
        return false;
    }


}


//problem 19 a
/*function countClumps(array){
    var count = 0;
    if(array.length %2 === 0){
        for(var i = 1; i < array.length; i += 2){
            if((array[i] === array[i+1]) || (array[i] === array[i-1])){
                if((array[i] === array[i+1]) && (array[i] === array[i-1])){
                    count += 0;
                }else{
                    count++;
                }
            }
        }
    }else{
        for(var i = 0; i < array.length.)
        for(var b = 1; b < (array.length - 1); b += 2){
            if((array[b] === array[b+1]) || (array[b] === array[b-1])){
                if((array[b] === array[b+1]) && (array[b] === array[b-1])){
                    count += 0;
                }else{
                    count++;
                }
            }
        }
    }

    return count;
}
*/

//problem 19b
function countClumps(array){
    var count = 0;

        for(var i = 0; i < array.length; i++){
            if((array[i] === array[i+1]) && (array[i] === array[i+2])){
                count--;
            }
        }
        for(var b = 0; b < (array.length); b++){
            if((array[b] === array[b + 1])){
                count++;
            }
        }
    return count;
}


//problem 20
function evenlySpaced(a, b, c){
    var array = [a, b, c];
    var sml = Math.min.apply(null, array);
    var med = 0;
    var big = Math.max.apply(null, array);
    for(var i = 0; i < 3; i++){
      if((array[i] !== sml) && (array[i] !== big)){
          med += array[i];
      }
    }
    var difAB = (sml - med);
    var difBC = (med - big);
    var ctrlAB = Math.abs(difAB);
    var ctrlBC = Math.abs(difBC);
    return (ctrlAB === ctrlBC);
}

function tester() {

    //document.getElementById("output").innerHTML = firstLast6([1, 4 ,33 7, 5, 6, 8, 6]);
    //document.getElementById("output").innerHTML = has23([4, 3, 5 ,3 ,6 ,4, 2, 1]);
    //document.getElementById("output").innerHTML = fix23([1, 2, 3]);
        //document.getElementById("output").innerHTML = countYZ("string abz");
    //document.getElementById("output").innerHTML = endOther("Hiabc", "abc");
    //document.getElementById("output").innerHTML = starOut("sm*eilly);
    //document.getElementById("output").innerHTML = getSandwich("xxbreadbreadjambreadyy");
    document.getElementById("output").innerHTML = canBalance([1, 1, 1, 1, 4]);
    //document.getElementById("output").innerHTML = countClumps([1, 1, 2, 1, 1]);
    //document.getElementById("output").innerHTML = evenlySpaced(4, 6, 2);

}
