let display=document.getElementById("display");     
let console_steps=document.getElementById("console");
let sign_sequence=document.getElementById("sign_sequence");

// La variable status se utiliza para definir si la calculadora comienza a utilizarse . Puede valer:
// -Initial: Este estado indica que la calculadora se acaba de iniciar o que se a presionado el botton AC (reiniciado).
// -Calcuation: Este estado indica que se están introduciendo numéros o realizando algún cálculo.

let status="initial"; 

let num={       //En este objeto se almacena el número que el usuario introduce para operar con él y que operación se ha indicado realizar.
    value: null,        //Aquí se va colocando el número según los digitos que el usuario va presionando
    coma_status: "Number without coma", //Esta variable se utiliza para indicar si el usuario ha presionado el boton ",". Esto es necesario porque la forma de añadir digitos es diferente si se trata de un decimal
    coma_order_magnitude: 1, //Esta variable indica la posición decimal que corresponde al dígito introducido cono múltiplo de 10 (1=primera posicion, 10=segunda posicion, 100=tercera posicion, etc.)
    operation: null, //Aquí se indica la operación que el usuario ha presionado
    negative_or_possitive: 1 //Aquí se indica si el número es positivo (-1) o negativo (-1). Por defecto, cada número introducido es positivo. Su signo puede ser cambiado presionando el boton +/- de la calculadora
    };

let numbers_to_calculate=[]; //Este array almacena cada número (num) introducido. Se utiliza para, una vez presionado el boton "=" realizar los calculos

// FUNCIONES A LANZAR AL APRETAR CADA BOTÓN DE LA CALCULADORA

document.getElementById("zero").addEventListener("click",() =>getnumber(0));
document.getElementById("one").addEventListener("click",() =>getnumber(1));
document.getElementById("two").addEventListener("click",() =>getnumber(2));
document.getElementById("three").addEventListener("click",() =>getnumber(3));
document.getElementById("four").addEventListener("click",() =>getnumber(4));
document.getElementById("five").addEventListener("click",() =>getnumber(5));
document.getElementById("six").addEventListener("click",() =>getnumber(6));
document.getElementById("seven").addEventListener("click",() =>getnumber(7));
document.getElementById("eight").addEventListener("click",() =>getnumber(8));
document.getElementById("nine").addEventListener("click",() =>getnumber(9));
document.getElementById("coma").addEventListener("click",() =>getnumber("coma_request"));
document.getElementById("negative_possitive").addEventListener("click",() =>negative_possitive());    

document.getElementById("divide").addEventListener("click",() =>calculation_2b_done(":"));
document.getElementById("multiply").addEventListener("click",() =>calculation_2b_done("x"));
document.getElementById("substract").addEventListener("click",() =>calculation_2b_done("-"));
document.getElementById("add").addEventListener("click",() =>calculation_2b_done("+"));

document.getElementById("equal").addEventListener("click",() =>calculate());

document.getElementById("ac").addEventListener("click",() =>ac());
document.getElementById("c").addEventListener("click",() =>c());

function getnumber(input) { //Esta función almacena los dígitos que se presionan y los va agrupando para formar el núemro que el usuario quiere introducir

    let excess=too_many_digits();   //Primero comprobamos que queda espacio en el display para seguir metiendo números

    if(excess===true){

        console_steps.innerHTML="Too many digits on the display!";        

        return

    }
    
    if (input==="coma_request"){ //Si el dígito presionado es la coma ","...

        if(status==="initial" || display.innerHTML.length===0){   //La coma no puede ser el primer valor a introducir!
                    
            
            console_steps.innerHTML="Enter first a number";

            return;

        }

        if (num.coma_status==="coma_added"){ //Comprobamos si el número tiene ya una coma

            console_steps.innerHTML="The number has already a coma";

            return;

        }

        if(operation_check()===true){   //Comprobamos si se está intentando introducir una coma justo despues de un signo de operación

            console_steps.innerHTML="Insert first the integer part of the number";

            return;
        }

        num.coma_status="coma_added";   //Se indica que el número tiene una coma...

        display.innerHTML=display.innerHTML.concat(",");    //Y se muestra en el display de la calculadora
        
        console_steps.innerHTML="Coma added to the number";

        return;
        
    }   else {  //Si no es una coma lo que se a apretado, si no un dígito...

            if(status==="initial"){   //Si es el primer digito que se introduce, lo almacenamos y mostramos en el display y actualizamos el estado
                
                num.value=input;
                display.innerHTML=input.toString();
                status="calculation";

                console_steps.innerHTML="Digit added to the number";
                sign_sequence.innerHTML="";

                return;
            
            } else if (status==="calculation"){  //Si ya no estamos ante el primer digito presionado...
                
                if(num.coma_status==="coma_added") { //Averiguamos si el digito a añadir es un número decimal y llamamos a la función correspodiente.
                    
                    num.coma_order_magnitude=num.coma_order_magnitude*10; //Incrementa la posición a la que se colocará el nuevo dígito decimal
                    
                    add_digit_after_coma(num["value"],num["coma_order_magnitude"],input);

                    console_steps.innerHTML="Decimal digit added to the number";

                    return;                    

                } else {

                    add_digit(num["value"],input);

                    console_steps.innerHTML="Digit added to the number";

                    return;
                    
                }
            }
        }
}

function add_digit(current_number,input){   //Funcion para añadir un digito entero a nuetro número (num.value)

    num.value = current_number*10+input;

    display.innerHTML=display.innerHTML.concat(input.toString());  

    return;  

}

function add_digit_after_coma(current_number,decimals,input){ //Funcion para añadir un digito decimal a nuetro número (num.value)

    num.value = (current_number*decimals+input)/(decimals);

    display.innerHTML = display.innerHTML.concat(input.toString()) ;

    return;
    
}

function calculation_2b_done(what_2do){ //Una vez presionado un boton de operacion (":", "x", "+"" o "-""), se almacena el número en el array "numbers_to_calculate" haciendo un push y hacemos que el objeto num apunte de nuevo a un objeto con los valores iniciales de cada campo

    if(status==="initial" || display.innerHTML.length===0){   //Comprobamos si se presiona algun signo de operacion antes de haber introducido algún número
                        
                
        console_steps.innerHTML="Enter first a number";

        return;

    }

    let excess=too_many_digits();   //Comprobamos si queda espacio para mostrar la operación solicitada en el display

    if(excess===true){

        console_steps.innerHTML="Too many digits on the display!";        

        return

    }
    
    if(operation_check()  ===true){     //Comprobamos si estamos intentando introducir dos operaciones seguidas

        console_steps.innerHTML = "Calculation step already introduced";
        
        return

    } else if (display.innerHTML.charAt(display.innerHTML.length-1)===  ","){ //Comprobamos si estamos intentando introducir una operación justo después de haber introeducido una coma

        console_steps.innerHTML = "Insert first the decimal part or delete the coma";

        return

    } else {

    num.operation=what_2do; //Actualizamos num con la operacion que deberá realizar

    display.innerHTML=display.innerHTML.toString().concat(what_2do); 

    numbers_to_calculate.push(num); 

    if (sign_sequence.innerHTML.charAt(sign_sequence.innerHTML.length-1)!==")"){ // Comprobamos si ya se ha mostrado el signo del número en el sign sequence (esto será así solo si se ha cambiado el sigono del número)

        let sign = (num.negative_or_possitive===-1)? "(-)":"(+)";
        sign_sequence.innerHTML = sign_sequence.innerHTML.concat(sign);

    }

    sign_sequence.innerHTML = sign_sequence.innerHTML.concat(what_2do); //Mostramos la operacion en el sign_sequence

    num={       
    value: null,                
    coma_status: "Number without coma",
    coma_order_magnitude: 1,
    operation: null,
    negative_or_possitive: 1 
    };

    console_steps.innerHTML="Calculation step added";

    return

    }
    
};

function calculate(){   //Esta funcion realiza la secuencia de cálculos indicada
    
    if(status==="initial" || display.innerHTML.length===0){ //Comprobamos si se presiona la tecla "=" sin haber introducido nu¡ingún número

        console_steps.innerHTML="Nothing to be calculated!";        

        return
    }
    
    let last_element=display.innerHTML.charAt(display.innerHTML.length-1);

    if(last_element!=="+" && last_element!=="-" && last_element!=="x" && last_element!==":"){   //Comprobamos si estamos apretando "=" sin haber introducido, como último elemento, un signo de operación, en cuyo caso necesitamos hacer push del numero (num) al array que contiene todos los número a calcular "numbers_to_calculate"

        numbers_to_calculate.push(num);

    }   

    let result=numbers_to_calculate[0].value*numbers_to_calculate[0].negative_or_possitive;

    for(let i=0; i<numbers_to_calculate.length-1;i++){  //Se recorre el objeto numbers_to_calculate tomando cada "value", se multiplica cada uno por su signo y se realiza la operación indicada en el campo "operation"
       
        switch (numbers_to_calculate[i].operation){

            case ":":
                result=result/(numbers_to_calculate[i+1].value*numbers_to_calculate[i+1].negative_or_possitive); 
            break;

            case "x":
                result=result*numbers_to_calculate[i+1].value*numbers_to_calculate[i+1].negative_or_possitive;
            break;
 
            case "-":
                result=result-numbers_to_calculate[i+1].value*numbers_to_calculate[i+1].negative_or_possitive;
            break;
 
            case "+":
                result=result+numbers_to_calculate[i+1].value*numbers_to_calculate[i+1].negative_or_possitive; 
            break;
    
        }

    }

    display.innerHTML=result.toFixed(2).toString(); //Se muestra el resultado en pantalla

    console_steps.innerHTML="Calculation done!";

    numbers_to_calculate=[];    //Se vacia el array de números
    
    num={   //Se reinicia el numero
        value: null,   
        coma_status: "Number without coma",
        coma_order_magnitude: 1, 
        operation: null, 
        negative_or_possitive: 1
    };

    status="initial"; "Se reinicia el estado de la calculadora"

    sign_sequence.innerHTML= (result>=0)? "(+)":"(-)";

    return;
}

function ac(){  //Esta función resetea la calculadora, retornando a su status inicial

    status="initial";

    num={
        value: null,
        coma_status: "Number without coma",
        coma_order_magnitude: 1,
        operation:null, 
        negative_or_possitive: 1
        };
    
    numbers_to_calculate=[];

    display.innerHTML="Restarted!";
    console_steps.innerHTML="Calculator reseted";
    sign_sequence.innerHTML="";

    return;

}

function c(){   //Esta función elimina el úlimo elemento introducido.

    let last_element=display.innerHTML.charAt(display.innerHTML.length-1); //Almacenamos el último elemento introducido
    let value_to_string;

    if(status==="initial" || display.innerHTML.length===0){ //Comprobamos si hay algo que borrar en el display

        display.innerHTML="";
        console_steps.innerHTML="There´s nothing to delete"; 
        sign_sequence.innerHTML="";       

        return
    }
    
    if (last_element==="+" || last_element==="-" || last_element==="x" || last_element===":"){ //Si lo último que se había introducido era un signo de operacion, hay que sacar el número del array "numbers_to_calculate" haciendo un pop y seguir modificandolo, para lo cual se hace una copia de este número antes.

               
        num.value=numbers_to_calculate[numbers_to_calculate.length-1].value;     
        num.coma_status=numbers_to_calculate[numbers_to_calculate.length-1].coma_status;
        num.coma_order_magnitude=numbers_to_calculate[numbers_to_calculate.length-1].coma_order_magnitude;
        num.operation=null;
        num.negative_or_possitive=numbers_to_calculate[numbers_to_calculate.length-1].negative_or_possitive;

        if (sign_sequence.innerHTML.charAt(sign_sequence.innerHTML.length-1)===")"){ //Actualizamos la secuencia de signos

            sign_sequence.innerHTML=sign_sequence.innerHTML.slice(0,-3);

        } else {

            sign_sequence.innerHTML=sign_sequence.innerHTML.slice(0,-1);


        }
        
        numbers_to_calculate.pop();
       
        console_steps.innerHTML="Calculation step deleted";

    } else{

        if(display.innerHTML.charAt(display.innerHTML.length-1)===","){  //Si el último elemento añadido es la coma decimal, hay que añadirlo explicitamente a la varible value_to_tring, ya que al no haber decimales, el valor del número no contiene la coma

            value_to_string=num.value.toString().concat(",");   //Convierte a string el último número introducido (no todo lo que aparece en el display), incluyendo la coma

        }else{

            value_to_string=num.value.toString(); //Convierte a string el último número introducido (no todod lo que aparece en el display)

        }

        if (display.innerHTML.length===1 && num.coma_status==="Number without coma"){ //Si solo hay un número en el display y ademas el número no tiene coma, quiere decir se trata de un número entero

            num={      
                value: null,        
                coma_status: "Number without coma",
                coma_order_magnitude: 1, 
                operation: null,
                negative_or_possitive: 1
                };

                if (sign_sequence.innerHTML.charAt(sign_sequence.innerHTML.length-1)===")"){
                    sign_sequence.innerHTML="";
                }

                console_steps.innerHTML="Digit deleted. No digits on display.";   

        } else if (display.innerHTML.charAt(display.innerHTML.length-1)===","){  //Caso en el que el último caracter que aparece en el display es una coma

            num={      
                value: parseFloat(value_to_string.slice(0,-1)),        
                coma_status: "Number without coma",
                coma_order_magnitude: 1, 
                operation: null,
                negative_or_possitive: num.negative_or_possitive
                };

                console_steps.innerHTML="Coma deleted";
                
                
        } else if (display.innerHTML.charAt(display.innerHTML.length-1) ==="0" && num.coma_status==="coma_added") { //Caso en el que eliminamos un "0" decimal. En este caso solo decrementamos la posición de la coma, pero no eliminamos ningún valor del número (porque los que en string es, por ejemplo 7,0000 en valor matemático se almacena como 7)
        
            num={      
                value: num.value,  
                coma_status: "coma_added",
                coma_order_magnitude: num.coma_order_magnitude*0.1, 
                operation: null,
                negative_or_possitive: num.negative_or_possitive
                };

                console_steps.innerHTML="Decimal digit deleted";

        } else if (display.innerHTML.charAt(display.innerHTML.length-1) !=="0" && num.coma_status==="coma_added"){ //Caso en el que eliminamos un numero decimal distinto de cero

            num={      
                value: parseFloat(value_to_string.slice(0,-1)),        
                coma_status: "coma_added",
                coma_order_magnitude: num.coma_order_magnitude*0.1, 
                operation: null,
                negative_or_possitive: num.negative_or_possitive
                };

                console_steps.innerHTML="Decimal digit deleted";

        } else {   //Caso en el que eliminamos un dígito de un número entero, sin ser el primer dígito del display

            if(value_to_string.length===1){     //Caso en el que es el último dígito del último número introducido

                num={      
                    value: null,        
                     coma_status: "Number without coma",
                     coma_order_magnitude: 1, 
                     operation: null,
                     negative_or_possitive: num.negative_or_possitive
                     };

                    if (num.negative_or_possitive===-1){

                        num.negative_or_possitive=num.negative_or_possitive*(-1);
                        sign_sequence.innerHTML=sign_sequence.innerHTML.slice(0,-3);
    
                    }

                    console_steps.innerHTML="Last digit of the current number deleted";

            }else{  //Caso en el que no es el último dígito del último número introducido

                num={      
                    value: parseFloat(value_to_string.slice(0,-1)),        
                     coma_status: "Number without coma",
                     coma_order_magnitude: 1, 
                     operation: null,
                     negative_or_possitive: num.negative_or_possitive
                     };

                     console_steps.innerHTML="Digit deleted";

            }

        }

    }
    
    display.innerHTML=display.innerHTML.slice(0,-1);    //Borramos el último caracter del display

    return;

}

function operation_check(){  //Funcion que comprueba si ya hemos introducido una operacion

    let operation_check = false;

    if (display.innerHTML.charAt(display.innerHTML.length-1)==="+" || display.innerHTML.charAt(display.innerHTML.length-1)==="-" || display.innerHTML.charAt(display.innerHTML.length-1)===":" || display.innerHTML.charAt(display.innerHTML.length-1)==="x"){

        operation_check=true;
    
    }

    return operation_check;

}

function too_many_digits(){ //Funcion que comprueba si existe espacio en el display para poder seguir introduciendo dígitos

    let too_many_digits=false;

    if(display.innerHTML.length===9){

        too_many_digits=true;

    }

    return too_many_digits;

}

function negative_possitive(){  //Función que cambia de signo el número al presionar el botón correspondiente

        let sign = (num.negative_or_possitive===-1)? "(+)":"(-)"; //Se decide el nuevo signo que tendrá el número tras el cambio, respecto el que tiene antes del cambio

        if (status==="initial" || num.value===null){    //Comprobamos si hay algo a lo que cambiar el signo

            console_steps.innerHTML = "Enter first a number";

            return

        } else if (sign_sequence.innerHTML.charAt(sign_sequence.innerHTML.length-1)===")") {

            let shorten = sign_sequence.innerHTML.slice(0,-3);
            sign_sequence.innerHTML = shorten.concat(sign);
            console_steps.innerHTML = `Sign changed to ${sign} ${num.value}`;

        } else{

            sign_sequence.innerHTML = sign_sequence.innerHTML.concat(sign);
            console_steps.innerHTML = `Sign changed to ${sign} ${num.value}`;

        }

        num={      
            value: num.value,        
            coma_status: num.coma_status,
            coma_order_magnitude: num.coma_order_magnitude, 
            operation: num.operation,
            negative_or_possitive: num.negative_or_possitive*(-1)
            };

}