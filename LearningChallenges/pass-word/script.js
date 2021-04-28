// ESTE BLOQUE DEFINE LAS VARIABLES QUE SE UTILIZAR PARA MOSTRAR INFORMACIÓN

let console_display = document.getElementById("console_id");
let timer_display = document.getElementById("timer");
let correct_display = document.getElementById("correct");
let incorrect_display = document.getElementById("incorrect");
let remaining_display = document.getElementById("remaining");
let bloking_image = document.getElementById("bloking_image_id");
let bloking_gif = document.getElementById("waiting_gif_id");
let current_letter_display=document.getElementById("current_letter_grid");
let current_definition_display=document.getElementById("definition_text_id");

let game_status="preparing";    //Esta función controla el estado del juego. Puede ser - preparing, gaming o game_finished.
let player_name;
let regressive_control,game_control;        //Estas dos variables se utilizan para controla los temporizadores
let time=null;      //Esta variable se utiliza para controlar desde donde comienza la cuenta regresiva de los temporizadores
let letter_control; //Esta variable sirve para acceder a la letra correspodiente, según el array words (0=A, 1=B, etc.)
let level=2;        //Esta variable sirve para definir el nivel de difucultad del juego, hay tres niveles posibles (0, 1, 2)
let correct=0, incorrect=0, remaining=27;
let game_result="";
let current_game_questions = [];    //Array que almacena el resultado de cada palabra -Correct, incorrect o unanswered
let blink_letter;   //Esta variable se utiliza para controlar el parpadeo de cada letra en el roscon
let letter_id="letter_a";   //Identifica el id de cada letra. El valor que aparece aquí es el inicial
let letter_class="letter_a_grid";   //Identifica la clase de cada letra. El valor que aparece aquí es el inicial

document.getElementById("start").addEventListener("click",()=>start_game());
document.getElementById("reset").addEventListener("click",()=>reset_game());
document.getElementById("submit_answer").addEventListener("click",()=>check_answer());
document.getElementById("skip_letter").addEventListener("click",()=>skip_letter());

document.getElementById("bloking_image_id").className="bloking_image  opacity_control_95 z_index_control_0";    // Inicialmente colocamos una imagen que bloquea el rosco.
document.getElementById("waiting_gif_id").className="waiting_gif opacity_control_100 z_index_control_1";    //Inicialmente colocamos un gif que bloquea el rosco.

set_initial_letters_color();    //Seteamos el color de fondo de cada letra

function start_game(){  //Función que inicia la ejecución del juego
 
    if(game_status==="preparing"){  //Si no estamos ya jugando o con el juego recien finalizado...

        let ok_to_start = check_valid_name();   //Comprobamos que se introduzca un nombre válido

        if(ok_to_start===false){    //Si no se ha introducido un nombre, pedimos que se introduzca uno y se vuelva a presionar "start"

            console_hightlight();   //Destello de la consola de juego
            console_display.innerHTML="Please insert a valid name first!";

            return

        }

        if(time===null){    //Si game_status="preparing" y time = null quiere decir que estamos ante la primera partida tras cargar la web

            setup_current_game_questions(); //Inicializamos tods las respuestas a "unaswered"
            time=11;
            regressive_control=setInterval(regressive_count,1000);  //Damos 10 segundos de preparación
            game_control=setTimeout(initiate_game,11000);   //Iniciamos la cuenta regresiva del juego.

        } else {

            console_hightlight();
            console_display.innerHTML="The game is already loading!";   //Caso en el que ya hayamos presionado "start" y estemos ane la cuenta regresiva de  de preparación 10 segundos
        
        }

    } else if(game_status==="game_finished"){   //si la partida ha terminado, es necesario presionar el boton reset antes de iniciar otra partida

        console_hightlight();
        console_display.innerHTML="Please reset the game first!";


    } else {    //Si game_status="gaming" se indica que ya se está jugando

        console_hightlight();
        console_display.innerHTML="You are already playing!";

        return

    }

}

function check_valid_name(){    //Función para controla que se introduzca un nombre

    let dim=0;

    player_name=document.getElementById("Your_name").value;

    for (let i=0; i<player_name.length;i++){       //Comprobamos si se han introducido solo espacios

        dim = (player_name.charAt(i)===" ") ? dim+1:dim ;
        
    }
    
    if (dim===player_name.length){

        dim = false;
        
    } else {

        dim = 0;

    } if ( 0 === player_name.length || dim===false){

        return false

    } else {

        return true

    }

}

function regressive_count(){    //Esta función controla la cuenta regresiva, ya sea la de 10s de preparación o la del juego. Se ejecuta cada segundo

    time=time-1;

    if (time>-1){   //Si aún no hemos llegado a 0 en la cuenta atra...

        if(game_status==="preparing"){ //Si estamos preparandonos para el juego...

            console_hightlight();
            console_display.innerHTML=`Welcome ${player_name}, get ready... The game begins in ${time} seconds!`;
            timer_display.innerHTML=`${time} s`

        } else{ 

            timer_display.innerHTML=`${time} s`

        }

    } else{ //Si el contador ya ha llegado a cero

        if(game_status==="preparing"){  //Si estábamos en fase de preparación, desactivamos el contador

            clearInterval(regressive_control);

        } else{ //Si no estábamos en preparación significa que estábamos en pleno juego, por lo que el tiempo de juego ha acabado

            fade_in();  //Mostramos la imagen y gif que cubren el roscón

            stop_blink();   //Detenemos el parpadeo de las letras

            clearInterval(regressive_control);  //Detenemos el contador regresivo de juego

            console_hightlight();
            console_display.innerHTML="TIIME IS OVER!";

            timer_display.innerHTML=`-`;
            current_letter_display.innerHTML=`-`;
            current_definition_display.innerHTML=`-`;

            ranking();  //calculamos la puntuación y actualizamos el ranking

            setTimeout(show_result_on_console,2000);    //Damos un par de segundos antes de mostrar el resultado en la consola

        }
 
    } 

}

function initiate_game(){ //Esta función ejecuta el inicio del juego

    fade_out(); //Hacemos desaparecer el gif y la imagen que bloquean el roscón

    clearInterval(regressive_control);  //Paramos la cuentra regresiva de preparación

    remaining_display.innerHTML = remaining;    //Mostramos las palabras que quedan por responder, siempre serán 27

    game_status="gaming";   //Actualizamos el estado

    console_hightlight();
    console_display.innerHTML=`GO!!!!`;
    timer_display.innerHTML=`-`;
    time=27*10+1;   //Damos 10 segundos por palabra - facil!

    regressive_control=setInterval(regressive_count,1000);  //Vamos actualizando casa segundo el tiempo disponible

    letter_control=0;   //Comenzamos por la primera letra

    blink_current_letter(); //La hacemos parpadear

    show_next_leter();  //Mostramos la letra y su definición

}

function show_next_leter(){ //Mostramos la letra y su definición

    current_letter_display.innerHTML=questions[letter_control][level].letter.toUpperCase();
    current_definition_display.innerHTML=questions[letter_control][level].question;
    
}

function check_answer(){    //Esta función comprueba si la respuesta introducida es correcta

    let player_answer=document.getElementById("text_answer").value.toLowerCase(); //Por defecto convertimos la respuesta a minúsculas

    document.getElementById("text_answer").value="";    //Vaciamos el campo de texto
    

    if (questions[letter_control][level].answer.toLowerCase()===player_answer){ //Si la respuesta introducida es correcta...

        current_game_questions[letter_control] = "correct";

        console_hightlight();
        console_display.innerHTML=`CORRECT!`;

        remaining=remaining-1;
        correct=correct+1;
        remaining_display.innerHTML=remaining;
        correct_display.innerHTML=correct;

    } else{ //Si la respuesta no es correcta...

        current_game_questions[letter_control] = "incorrect";

        console_hightlight();
        console_display.innerHTML=`INCORRECT! => ${questions[letter_control][level].answer}`; //Mostramos la respuesta correcta

        remaining=remaining-1;
        incorrect=incorrect+1;
        remaining_display.innerHTML=remaining;
        incorrect_display.innerHTML=incorrect;

    }

    stop_blink();   //Detenemos el partadeo de la letra cuya palabra acabamos de introducir

    let left=remaining_letters();   //Comprobamos si quedan palabras por responder
    
    if (left === true) {

        return

    }
    
    letter_control=letter_control+1;    //Pasamos a la siguiente

    letter_control = (letter_control===27)? 0:letter_control;   //Comprobamos si hemos llegado al final del rosco

    while(current_game_questions[letter_control] !=="unanswered"){  //Comprobamos si la siguiente letra a sido contestada ya, si no saltamos a la siguiente y repetimos la comprobación

        letter_control=letter_control+1;

        // let left=remaining_letters();

        letter_control = (letter_control===27)? 0:letter_control; //Comprobamos si hemos llegado al final del rosco
    
        // if (left === true) {

        //     return
            
        // }

    }

    blink_current_letter(); //Hacemos parpadear la siguiente letra

    show_next_leter(); //mostramos la siguiente letra y definición

}

function skip_letter(){

    stop_blink(); //Detenemos el partadeo de la letra cuya palabra acabamos de saltar

    console_hightlight();

    console_display.innerHTML="Letter skipped!";

    letter_control=letter_control+1;    //Pasamos a la siguiente

    letter_control = (letter_control===27)? 0:letter_control; //Comprobamos si hemos llegado al final del rosco

    while(current_game_questions[letter_control] !=="unanswered"){ //Comprobamos si la siguiente letra a sido contestada ya, si no saltamos a la siguiente y repetimos la comprobación

        letter_control=letter_control+1;

        letter_control = (letter_control===27)? 0:letter_control; //Comprobamos si hemos llegado al final del rosco

    }

    blink_current_letter(); //Hacemos parpadear la siguiente letra

    show_next_leter(); //mostramos la siguiente letra y definición

}

function remaining_letters(){   //Esta función comprueba si quedán palabras para responder

    if(remaining===0){ //Si ya las hemos respondido todas...

        fade_in(); //Hacemos aparecer el gif y la imagen que bloquean el roscón

        stop_blink(); //Detenemos el partadeo de la letra

        clearInterval(regressive_control); //Detenemos la cuenta atras
        
        timer_display.innerHTML=`-`;
        current_letter_display.innerHTML=`-`;
        current_definition_display.innerHTML=`-`;

        setTimeout(()=>{    //Mostramos con 1,5 segundos de desfase los resultados

            game_status="game_finished";
        
            ranking();
    
            setTimeout(show_result_on_console,2500);
    
            console_hightlight();
            console_display.innerHTML="ROSCON COMPLETED!";
    
            time=null;  
    
        },1500);    

        return true

    }

}

function reset_game(){ //Función que resetea el juego. Solo se puede resetear el juego si estamos jugando o si hemos terminado una partida
    
if (remaining==0){  //Controlamos que no suceda nada si apretamos el boton reset justo despues de que se haya completado el rosco pero aun no se haya mostrado el resudltado en la consola

    return;

}

    game_status="preparing";
    
    console_hightlight();
    console_display.innerHTML=`Game reseted - Enter your name and click "start" to begin a new game`;
    
    clearInterval(regressive_control);
    clearInterval(game_control);
 
    stop_blink();

    set_initial_letters_color();

    fade_in();

    correct_display.innerHTML = `-`;
    incorrect_display.innerHTML = `-`;
    remaining_display.innerHTML = `-`;
    timer_display.innerHTML=`-`;
    current_letter_display.innerHTML=`-`;
    current_definition_display.innerHTML=`-`;
    remaining=27;
    correct=0;
    incorrect=0;
    current_game_questions = [];
    time=null;

}

function ranking(){ //Función que calcula el resultado de la partida y actualiza el ranking

    let game_score=0;
    let current_ranking = [];
    let possition_name="";
    let possition_score="";
    let player_found=false;
    let score_improved=false;
    let player_score_improved=false;
    let player_current_score, player_current_position;
    
    for (i=0;i<questions.length;i++){     //Contamos el número de veces que hemos acertado

        if(current_game_questions[i]==="correct"){

            game_score=game_score+1;
            
        }

    }

    for(i=1;i<11;i++){

        possition_name="pos".concat(i.toString()).concat("_name");
        possition_score="pos".concat(i.toString()).concat("_score");

        current_ranking[i-1] = {    //En este objeto almacenamos la puntuación que ya existe en el ranking
            
            current_score: document.getElementById(possition_score).innerHTML ,
            
            current_player: document.getElementById(possition_name).innerHTML
        
        }

        if (document.getElementById(possition_name).innerHTML===player_name){   //Si encontramos el jugador en el ranking, miramos si ha mejorado si marca
            
            player_found=true;
            player_current_score=document.getElementById(possition_score).innerHTML;
            player_current_position=i-1;

            if(game_score>document.getElementById(possition_score).innerHTML){

                player_score_improved=true;

            }

        }

        if (game_score>document.getElementById(possition_score).innerHTML && score_improved===false){   //Si la puntuación de la partida mejora alguna puntuación del ranking y es la primera vez que lo detectamos
            
            score_improved=true;
            score_improved_position=i-1;

        }

        

    }

    //CADA CASO CORRESPONDE A UNA SITUACIÓN QUE QUEDA REFLEJADA EN LA VARIABLE game_result

    if(player_found===true) {

        if(player_score_improved===true){

            current_ranking[player_current_position] = {
            
                current_score: game_score ,
                
                current_player: player_name
            
        } 

        game_result="improved";

    }   else {

        game_result="not_improved";

        }


    } else{

        if(score_improved===true){

            current_ranking.splice(score_improved_position, 0, {
            
                current_score: game_score ,
                
                current_player: player_name
            
            })

            current_ranking.pop();  //Si es un jugador que ha entrado en el ranking, tenemos que eliminar el jugador que hay en la última posición

            game_result="newer";

        } else{

            game_result="toobad";
        
            }

    }

    current_ranking= current_ranking.sort(function(a,b){return (b["current_score"]-a["current_score"]);;}); //Reordenamos de mayor a menor el ranking
     
     for(i=1;i<11;i++){ //Mostramos en el ranking los datos actualizamos

        possition_name="pos".concat(i.toString()).concat("_name");
        possition_score="pos".concat(i.toString()).concat("_score");

        document.getElementById(possition_name).innerHTML=current_ranking[i-1].current_player;
        document.getElementById(possition_score).innerHTML=current_ranking[i-1].current_score;

     }
}

function show_result_on_console(){ //Según el resultado de la partida, mostramos info acorde en la consola

    if (game_result==="improved"){

        console_hightlight();
        console_display.innerHTML=`Congratulations ${player_name}, you improved your previous score ^-^! - Click reset before starting a new game`;

    } else if (game_result==="newer"){

        console_hightlight();
        console_display.innerHTML=`Congratulations ${player_name}, you made it into the ranking ^-^! - Click reset before starting a new game`;

    } else if (game_result==="not_improved"){

        console_hightlight();
        console_display.innerHTML=`Too bad ${player_name}, you didn't managed to improve your current score :( - Click reset before starting a new game`;

    } else {

        console_hightlight();
        console_display.innerHTML=`Too bad ${player_name}, you didn't managed to get into the ranking :( - Click reset before starting a new game`;

    }

    remaining=27;

    game_status="game_finished";

}

function setup_current_game_questions(){ //Esta función inicia todas las respuestas a "unanswered"

    for (i=0;i<questions.length;i++){

        current_game_questions[i]="unanswered";

    }

}

function fade_in(){ //Esta función hace aparecer la imagen y gif que bloquean el rosco

    document.getElementById("bloking_image_id").className="bloking_image  z_index_control_1";
    document.getElementById("waiting_gif_id").className="waiting_gif z_index_control_1";

    setTimeout(()=>{document.getElementById("bloking_image_id").className="bloking_image  opacity_control_95 z_index_control_1"},1000);
    setTimeout(()=>{document.getElementById("waiting_gif_id").className="waiting_gif opacity_control_100 z_index_control_1"},1000);

}

function fade_out(){ //Esta función hace desaparecer la imagen y gif que bloquean el rosco

    document.getElementById("bloking_image_id").className="bloking_image  opacity_control_0 ";
    document.getElementById("waiting_gif_id").className="waiting_gif opacity_control_0 ";

    setTimeout(()=>{document.getElementById("bloking_image_id").className="bloking_image  opacity_control_0 z_index_control_hidden"},1000);
    setTimeout(()=>{document.getElementById("waiting_gif_id").className="waiting_gif opacity_control_0 z_index_control_hidden"},1000);

}

function set_initial_letters_color(){ //Esta función fija el color inicial de las letras del rosco una vez dejan de parpadear

    for (i=65; i<91; i++){ 

    letter_id ="letter_".concat(String.fromCharCode(i).toLowerCase());
    letter_class=letter_id.concat("_grid");
   
    document.getElementById(letter_id).className=letter_class.concat(" control_color_blink_state_0");
        
    }

    document.getElementById("letter_ñ").className="letter_ñ_grid".concat(" control_color_blink_state_0");


}

function blink_current_letter(){   //Esta función hace parpadear una letra

    let blink_control=1;

    letter_id ="letter_".concat(questions[letter_control][level].letter.toLowerCase());
    letter_class = letter_id.concat("_grid");

    blink_letter=setInterval((even_odd,letter) => { //Cambiamos la clase de la letra cada 300ms

        if (blink_control ===1 ){

            document.getElementById(letter_id).className=letter_class.concat(" control_color_blink_state_0");


        } else {

            document.getElementById(letter_id).className=letter_class.concat(" control_color_blink_state_1");;

        }

        blink_control=blink_control*(-1);

    }, 300);    

}

function stop_blink(){ //Esta función detiene el parpadeo y deja marcada la palabra según se haya acertado o no

        if(current_game_questions[letter_control]==="correct"){

            document.getElementById(letter_id).className=letter_class.concat(" control_correct");

        }

        else if(current_game_questions[letter_control]==="incorrect"){

            document.getElementById(letter_id).className=letter_class.concat(" control_incorrect");

        } else{

            document.getElementById(letter_id).className=letter_class.concat(" control_color_blink_state_0");

        }

        clearInterval(blink_letter);

}

function console_hightlight(){ //esta función genera un leve destello de la consola de juego. Se utiliza para llamar la atención e indicar que hay nueva información mostrada en la consola

    document.getElementById("console_id").className=" console console_highlight";
    
    setTimeout(()=>{

    document.getElementById("console_id").className=" console console_normal";

    },50);


}