function dis(val) {
   
    valtemp = val.replace(/1234567890/)
    if (val == '/') {
        document.getElementById("result").value = "";
    }else if(val == '*'){
        document.getElementById("result").value = "";
    }
    else if(val == '-'){
        document.getElementById("result").value = "";
    }
    else if(val == '+'){
        document.getElementById("result").value = "";
    }else if(val == valtemp){
        document.getElementById("result").value += val; 
    }
    document.getElementById("resulthide").value += val; 
}

function solve() { 
    try {
        let x = document.getElementById("resulthide").value 
        if (x.length >= 8) {
            document.getElementById("result").value = 'Erro';
            alert('Mais de 8 caracteres')
        }else{
            let y = eval(x);
            if (y == null || y == undefined) {
                document.getElementById("result").value = "0";
            }else if(isNaN(y) || y == Infinity){
                document.getElementById("result").value = "";
                alert('Nao tente dividir por ZERO') 
            }else{
                document.getElementById("result").value = y; 
            }
        }
     }
     catch (e) {
        alert("Operação inválida");
     }
}

function clr() { 
    document.getElementById("result").value = "";
    document.getElementById("resulthide").value = "";
}

function convert(){
    let x = document.getElementById("resulthide").value;
    
    let y = eval(x);
    if(Math.sign(y) > 0){
        counter = Math.abs(y) * -1;
    }else{
        counter = Math.abs(y);
    }    
    if(isNaN(y)){
        document.getElementById("result").value = "0";
        alert("Campo vazio"); 
    }else{
        document.getElementById("result").value = counter;

    }
}
