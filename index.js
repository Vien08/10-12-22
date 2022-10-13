//CLEAR INPUTS
const ClearFields = function(){
    document.getElementById("floatingInput1").value = "";
    document.getElementById("floatingInput2").value = ""; 
};

const kiloFunction = function(){
    let num1 = document.getElementById("floatingInput1").value ;
   //  let num2 = document.getElementById("floatingInput2").value ;
    let result = Number(num1) * (2.205) ;
    let result_final = parseFloat(result).toFixed(4);
    return result_final;
};


const dollarFunction = function(){
    let num1 = document.getElementById("floatingInput1").value ;
   //  let num2 = document.getElementById("floatingInput2").value ;
    let result = Number(num1) * (58.97) ;
    let result_final = parseFloat(result).toFixed(2);
    return result_final;
};

const gramFunction = function(){
    let num1 = document.getElementById("floatingInput1").value ;
   //  let num2 = document.getElementById("floatingInput2").value ;
    let result = Number(num1) / (1000) ;
    let result_final = parseFloat(result).toFixed(3);
    return result_final;
};

const paoFunction = function () {
    let select = document.getElementById('selection');
    let value1 = select.options[select.selectedIndex].value;

        if (value1 == '1') {
            document.getElementById('label1').innerHTML = 'From :'+ ' ' + 'kilograms' ;
            document.getElementById('label2').innerHTML = 'To :'+ ' ' + 'Pounds' ;
            document.getElementById('formula').innerHTML = 'Formula' + ' ' + ':' + ' ' + 'Multiply the value by ( 2.205 )';
            document.getElementById('floatingInput2').value = (kiloFunction());
        } else if (value1 == '2') {
            document.getElementById('label1').innerHTML = 'From :'+ ' ' + 'Dollar' ;
            document.getElementById('label2').innerHTML = 'To :'+ ' ' + 'Peso' ;
            document.getElementById('formula').innerHTML = 'Formula' + ' ' + ':' + ' ' + 'Multiply the value by ( 58.93) ';
            document.getElementById('floatingInput2').value = (dollarFunction());
        } else if (value1 == '3') {
            document.getElementById('label1').innerHTML = 'From :'+ ' ' + 'Gram' ;
            document.getElementById('label2').innerHTML = 'To :'+ ' ' + 'Miligram' ;
            document.getElementById('formula').innerHTML = 'Formula' + ' ' + ':' + ' ' + 'Divide the value by ( 1000 )';
            document.getElementById('floatingInput2').value = (gramFunction());
        } else if (value1 == '0') {
            document.getElementById('label1').innerHTML = 'From :' ;
            document.getElementById('label2').innerHTML = 'To :' ;
            document.getElementById('formula').innerHTML = 'Formula';
            document.getElementById('floatingInput2').value = ' ';
        };
};

const paoFunction2 = function(){
   let any = document.getElementById('floatingInput1').value;
    if (any != ""){
        (paoFunction());

        }else {
            document.getElementById('floatingInput1').value = '';
            document.getElementById('floatingInput2').value = '';
        
        }

};