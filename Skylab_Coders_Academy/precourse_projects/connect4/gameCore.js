let consoleDisplay = document.getElementById("consoleId");
let playerOneDisplay = document.getElementById("player1NameId");
let playerTwoDisplay = document.getElementById("player2NameId");

let game={};
let gameBoard = [];

let timeControl;
let cpuThinking;

let clockAngle;
let gamingCountDown;

let winnerAnimation;

let cpuBestOption;

document.getElementById("gameControlsButtonsResetId").addEventListener("click",()=>gameReset());
document.getElementById("gameControlsButtonsStartId").addEventListener("click",()=>prepareNewGame());
document.getElementById("gameControlsButtonsFinishId").addEventListener("click",()=>finishCurrentGame());

initializateArrowsClass();

gameReset();

frameRateProcessing();

function gameReset (){

    for (let i=0 ; i<6; i++){

        gameBoard[i]=[];
    
        for (j=0 ; j<7; j++){
    
            gameBoard[i][j]="empty";
    
        }
    }

    game.status="reseted";

    clearInterval(winnerAnimation);

    document.getElementById("playerOneTextBoxId").className ="playerOneTextBox backgroundColorControlSolid zIndexMinusTwo opacityMin";
    document.getElementById("playerTwoTextBoxId").className ="playerTwoTextBox backgroundColorControlSolid zIndexMinusTwo opacityMin";
    document.getElementById("gameMatrixFlexGridId").className ="gameMatrixFlexGrid backgroundColorControlTransparent";

    document.getElementById("consoleId").className ="console backgroundColorControlSolid opacityMin";
    
    document.getElementById("player1NameId").className="playerName zIndexMinusTwo opacityMin";
    document.getElementById("player2NameId").className="playerName zIndexMinusTwo opacityMin";

    document.getElementById("gameControlsId").className="gameControls zIndexMinusTwo opacityMin";

    document.getElementById("gameControlsButtonsFinishId").className="gameControlsButtons opacityMin";
    document.getElementById("gameControlsButtonsFinishId").disabled = true;

    document.getElementById("gameControlsButtonsResetId").className="gameControlsButtons opacityMin";
    document.getElementById("gameControlsButtonsResetId").disabled = true;

    setTimeout(()=>{

        document.getElementById("consoleId").className ="console backgroundColorControlSolid opacityMax";
        consoleDisplay.innerHTML = 'Welcome to the connect 4 game.<br><br> - To start a new game, insert the name of the two players. <br>- If you want to play against the CPU, insert "CPU" as the second player´s name';

        for (let i=1 ; i<8 ; i++){

            idBuffer = `arrowId1${i}`

            document.getElementById(idBuffer).className = "arrow";

        }

        for (let i=2 ; i<8 ; i++){

            for(let j=1; j<8;j++){

                idBuffer = `circleId${i}${j}`

                document.getElementById(idBuffer).className = "circle";
            
            }

        }


    },2500);

    setTimeout(()=>{

        document.getElementById("playerOneTextBoxId").className ="playerOneTextBox backgroundColorControlSolid zIndexZero opacityMax";
        document.getElementById("playerTwoTextBoxId").className ="playerTwoTextBox backgroundColorControlSolid zIndexZero opacityMax";

        document.getElementById("consoleId").className ="console backgroundColorControlSolid opacityMax";

        document.getElementById("gameControlsId").className="gameControls zIndexZero opacityMax";
        document.getElementById("gameControlsButtonsStartId").className="gameControlsButtons zIndexZero opacityMax";
        document.getElementById("gameControlsButtonsStartId").disabled = false;

        


    },10000);

    return;

}

function prepareNewGame(){   

    game.playerOne = document.getElementById("firstPlayerNameid").value;
    game.playerTwo = document.getElementById("secondPlayerNameid").value;

    if ( checkIfValidNames(game.playerOne,game.playerTwo) === false){

        return

    }

    if (game.playerTwo.toLowerCase()==="cpu"){

        game.againstMachine = true;
        game.playerTwo="CPU";

    }

    document.getElementById("gameControlsButtonsStartId").className="gameControlsButtons zIndexMinusTwo opacityMin";
    document.getElementById("gameControlsButtonsStartId").disabled = true;

    document.getElementById("playerOneTextBoxId").className ="playerOneTextBox backgroundColorControlSolid opacityMin";
    document.getElementById("playerTwoTextBoxId").className ="playerTwoTextBox backgroundColorControlSolid opacityMin";

    setTimeout(()=>{

        document.getElementById("playerOneTextBoxId").className ="playerOneTextBox backgroundColorControlSolid zIndexMinusTwo opacityMin";
        document.getElementById("playerTwoTextBoxId").className ="playerTwoTextBox backgroundColorControlSolid zIndexMinusTwo opacityMin";

    },1000)

    backgroundHighlight();

    consoleDisplay.innerHTML = 'Get ready';

    game.status="countDown";
    timeControl=10;
    let countDown = setInterval(()=>{

        backgroundHighlight();

        consoleDisplay.innerHTML = consoleDisplay.innerHTML.concat(" .");

        timeControl--;

        if (timeControl===0){

            setTimeout(()=>{game.status="gaming"},50);
            
            clearInterval(countDown);

            backgroundHighlight();
            consoleDisplay.innerHTML = `GO! - ${game.playerOne} begins!`;

            setArrowsListeners();


            playerOneDisplay.innerHTML = game.playerOne;
            playerTwoDisplay.innerHTML = game.playerTwo;

            playerOneDisplay.className="playerName zIndexZero opacityMax";
            playerTwoDisplay.className="playerName zIndexZero opacityMax";

            document.getElementById("gameMatrixFlexGridId").className ="gameMatrixFlexGrid backgroundColorControlSolid";

            game.turn="player1";

            unblockArrowsInGame(game.turn)

            document.getElementById("gameControlsButtonsFinishId").className="gameControlsButtons zIndexZero opacityMax";
            document.getElementById("gameControlsButtonsFinishId").disabled = false;

            gaming();
        }
    
    },1000);

    return
}

function mightyCPU(){

    removeArrowsListeners();

    blockArrowsInGame(game.turn);


    cpuBestOption=[]
    
    let timeCpuThinking=(2+5*Math.random())*1000;

    console.log(timeCpuThinking);

    cpuThinking=setTimeout(()=>{

        let count=1;

        while(count<8){ //Looks for the possition where, if the CPU plays, it makes connect 4

            if (insertToken(count,"simulation", game.turn, "lookForWinning")){

                insertToken(count, "real", game.turn, "playerMove");

                return

            }

            count++;

        }

        count=1;

        while(count<8){ //Looks for the possition where, if the player1 plays, it makes connect 4

            if (insertToken(count,"simulation", "player1","lookForBlocking")){

                insertToken(count, "real", game.turn, "playerMove");

                unblockArrowsInGame(game.turn);

                setArrowsListeners()

                return

            }

            count++;

        }

        for (let i=1; i<8; i++){    //Looks for the possition where, if the cpu plays, it makes one of the longest conection possible

            insertToken(i,"simulation", game.turn, "lookingForBestThrow");
            
        }

        cpuBestOption=checkfactibleMoves(cpuBestOption);

        let randomPos = Math.trunc(Math.random()*(cpuBestOption.length-1));

        insertToken(cpuBestOption[randomPos].column, "real", game.turn, "playerMove");

        cpuBestOption=[];

        unblockArrowsInGame(game.turn);
        
        setArrowsListeners();

        
    },timeCpuThinking);

}

function checkfactibleMoves(cpuBestOptionToCheck){

    let cpuBestOptionFiltered=[];

    let col, row, countRow;

    for (let i=0;i<cpuBestOptionToCheck.length;i++){

        col=cpuBestOptionToCheck[i].column-1;
        row=0;

        loop:

        while(gameBoard[row][col]==="empty"){
            
            row++;

            if(row===6){

                break loop;

            }

        }

        row=row-1;

        switch (cpuBestOptionToCheck[i].direction){

            case "horizontal":

                for(let count=cpuBestOptionToCheck[i].boardPosX; count<cpuBestOptionToCheck[i].boardPosX+cpuBestOptionToCheck[i].score; count++){

                    if (row===cpuBestOptionToCheck[i].boardPosY && col===count){

                        cpuBestOptionFiltered.push({
                            
                            score: cpuBestOptionToCheck[i].score,
                            boardPosY: cpuBestOptionToCheck[i].boardPosY,
                            boardPosX:cpuBestOptionToCheck[i].boardPosX, 
                            column: cpuBestOptionToCheck[i].column,
                            direction: cpuBestOptionToCheck[i].direction})

                    }
                }

            break;

            case "vertical":

                for(let count=cpuBestOptionToCheck[i].boardPosY; count<cpuBestOptionToCheck[i].boardPosY+cpuBestOptionToCheck[i].score; count++){

                    if (row===count && col===cpuBestOptionToCheck[i].boardPosX){

                        cpuBestOptionFiltered.push({
                            
                            score: cpuBestOptionToCheck[i].score,
                            boardPosY: cpuBestOptionToCheck[i].boardPosY,
                            boardPosX:cpuBestOptionToCheck[i].boardPosX, 
                            column: cpuBestOptionToCheck[i].column,
                            direction: cpuBestOptionToCheck[i].direction})

                    }
                }

            break;

            case "LeftTopRightBottom":

                countRow = cpuBestOptionToCheck[i].boardPosY;

                for(let countCol=cpuBestOptionToCheck[i].boardPosX; countCol<cpuBestOptionToCheck[i].boardPosX+cpuBestOptionToCheck[i].score; countCol++){

                    if (row===countRow && col===countCol){

                        cpuBestOptionFiltered.push({
                            
                            score: cpuBestOptionToCheck[i].score,
                            boardPosY: cpuBestOptionToCheck[i].boardPosY,
                            boardPosX:cpuBestOptionToCheck[i].boardPosX, 
                            column: cpuBestOptionToCheck[i].column,
                            direction: cpuBestOptionToCheck[i].direction})

                    }

                    countRow++;

                }

            break;

            case "RightTopLeftBottom":

                countRow = cpuBestOptionToCheck[i].boardPosY;

                for(let countCol=cpuBestOptionToCheck[i].boardPosX; countCol>cpuBestOptionToCheck[i].boardPosX-cpuBestOptionToCheck[i].score; countCol--){

                    if (row===countRow && col===countCol){

                        cpuBestOptionFiltered.push({
                            
                            score: cpuBestOptionToCheck[i].score,
                            boardPosY: cpuBestOptionToCheck[i].boardPosY,
                            boardPosX:cpuBestOptionToCheck[i].boardPosX, 
                            column: cpuBestOptionToCheck[i].column,
                            direction: cpuBestOptionToCheck[i].direction})

                    }

                    countRow++;

                }


            break;

        }

    }
    
    cpuBestOptionFiltered.sort(function(a,b){return b.score-a.score});

    for(let i=cpuBestOptionFiltered.length-1;i>=0;i--){

        if(cpuBestOptionFiltered[i].score!==cpuBestOptionFiltered[0].score){

            cpuBestOptionFiltered.pop();

        }

    }

    return cpuBestOptionFiltered

}

function checkIfValidNames(nameOne, nameTwo){
    
    names=[nameOne, nameTwo];

    let dim=0;

    for (let i=0; i<2; i++){

        for (let j=0; j<names[i].length;j++){       

            dim = (names[i].charAt(j)===" ") ? dim+1:dim ;
            
        }
        
        if (dim===names[i].length){

            dim = false;
            
        } else {

            dim = 0;

        } 
        
        if (0 === names[i].length || dim===false || names[i]==="null"){

            backgroundHighlight();

            consoleDisplay.innerHTML = 'Please insert two valid names and press "Start" again';
            
            return false;

        }

    }

    return true;

}

function backgroundHighlight(){

    consoleDisplay.className="console backgroundHighlight";
    setTimeout(()=>{consoleDisplay.className="console backgroundColorControlSolid"},100);

}

function gaming(){

    clearInterval(gamingCountDown);

    timeControl = 30;

    clockAngle = toRadians(90);

    if(game.turn==="player2" && game.playerTwo==="CPU" ){

        mightyCPU(game.turn);

    }

    if(game.status==="winner"){

        return

    }
    
    gamingCountDown=setInterval(()=>{

        timeControl--;

        clockAngle = clockAngle - toRadians(12);

        if(timeControl===0){

            setTimeout(()=>{
                
                game.turn=(game.turn==="player1")? "player2":"player1";

                clearInterval(gamingCountDown);

                gaming();

            },50);

        }

    },1000)

}

function toRadians (degrees) {

    return degrees * (Math.PI / 180);

  }

  function insertToken(col, mode, player,caseControl) {

    let rowTarget = "columnFull";

    let i=5;

    while(i>-1 && rowTarget==="columnFull"){

        if(gameBoard[i][col-1]==="empty"){

            rowTarget=i+1;

        }

        i--;

    }
    
    if (rowTarget !== "columnFull") {

        gameBoard[rowTarget-1][col-1] = player;

        if(mode==="real"){

        document.getElementById(`circleId${rowTarget+1}${col}`).className = (game.turn==="player1")? "circle circlePlayerOne" : "circle circlePlayerTwo";

        clearInterval(gamingCountDown);

        }

        if (checkIfConnect4(player,mode,col,caseControl)){
                
            if(mode==="simulation"){

                gameBoard[rowTarget-1][col-1] = "empty";

                return true

            }

            removeArrowsListeners();

            blockArrowsInGame(game.turn);

            document.getElementById("gameControlsButtonsFinishId").className="gameControlsButtons opacityMin";
            document.getElementById("gameControlsButtonsFinishId").disabled = true;    

            clearInterval(gamingCountDown);

            game.status = "winner";

            game.winer = (player==="player1")? game.playerOne : game.playerTwo;

            backgroundHighlight();

            if (game.playerTwo==="CPU" && player==="player2"){

                consoleDisplay.innerHTML = `The CPU wins!`;

            } else {

                consoleDisplay.innerHTML = `Congratulations ${game.winer}! You are the winner`;

            }

            setTimeout(()=>{

                backgroundHighlight();
                consoleDisplay.innerHTML = `Ckick reset before starting a new game`;

                document.getElementById("gameControlsButtonsResetId").className="gameControlsButtons zIndexZero opacityMax";
                document.getElementById("gameControlsButtonsResetId").disabled = false;

            },3000);

            return

        };

        if(mode==="simulation"){

            gameBoard[rowTarget-1][col-1] = "empty";

        }

        if(mode==="real"){

            game.turn=(player==="player1")? "player2":"player1";

            unblockArrowsInGame(game.turn);

            if (game.turn === "player1"){

                backgroundHighlight();

                consoleDisplay.innerHTML = `It's ${game.playerOne} turn`;

            } else{

                backgroundHighlight();

                consoleDisplay.innerHTML = `It's ${game.playerTwo} turn`;

            }

            gaming();

        }     

    } else {

        backgroundHighlight();

        consoleDisplay.innerHTML = `The column is already full! Chose another one`;

    }    

  }

function checkIfConnect4(forPlayer,mode,col, caseControl){

    if (horizontal(forPlayer,mode,col,caseControl)){

        return true

    } else if (vertical(forPlayer,mode,col,caseControl)){

        return true

    } else if (LeftTopRightBottom(forPlayer,mode,col,caseControl)){

        return true

    } else if (RightTopLeftBottom(forPlayer,mode,col,caseControl)){

        return true

    } else {

        return false

    }

    function horizontal(forPlayer,mode,col, caseControl){
        
        let j=0, count=0;

        let columnCounterControl = j;

        let searchLimitHorizontal = (caseControl==="lookingForBestThrow")? 7: 4;

        for (let i=0;i<6;i++){
        
            while(j < searchLimitHorizontal){

                innerLoop:
    
                while(gameBoard[i][j]===forPlayer){
    
                    count++

                    if (count===4){

                            if (mode==="real"){

                            let className = (forPlayer==="player1")? "circle circlePlayerOne" : "circle circlePlayerTwo";

                            let classSwitch = 0;

                            winnerAnimation = setInterval(()=>{

                                for (let k=j;k>j-4;k--){

                                    if(classSwitch===0){

                                    document.getElementById(`circleId${i+2}${k+1}`).className = className;

                                    }else{

                                    document.getElementById(`circleId${i+2}${k+1}`).className = "circle circleWiner";

                                    }

                                }

                            classSwitch = (classSwitch===0)? 1:0;

                            },500)
                                            
                            return true

                        } else if(mode==="simulation"){

                            return true

                        }
    
                    }

                    j++

                    if (j===searchLimitHorizontal && caseControl==="lookingForBestThrow"){

                        break innerLoop;

                    }
    
                }

                if(count>0 && mode==="simulation" && caseControl==="lookingForBestThrow" ){

                    cpuBestOption.push({score: count,
                                        boardPosY: i,
                                        boardPosX:columnCounterControl, 
                                        column: col,
                                        direction: "horizontal"})

                    }
    
                count = 0;
                j++;
                columnCounterControl=j;
    
            }
    
            j=0;
            columnCounterControl=j;
    
        }
    
    }


    function vertical(forPlayer,mode,col, caseControl){ 
        
        let i=0, count=0;

        let rowCounterControl = i;

        let searchLimitVertical = (caseControl==="lookingForBestThrow")? 6: 3;

        for (let j=0;j<7;j++){
        
            while(i<searchLimitVertical){

                innerLoop:

                while(gameBoard[i][j]===forPlayer){
    
                    count++
    
                    if (count===4){

                        if (mode==="real"){

                        let className = (forPlayer==="player1")? "circle circlePlayerOne" : "circle circlePlayerTwo";

                        let classSwitch = 0;

                        winnerAnimation = setInterval(()=>{

                            for (let k=i;k>i-4;k--){

                                if(classSwitch===0){

                                document.getElementById(`circleId${k+2}${j+1}`).className = className;

                                }else{

                                document.getElementById(`circleId${k+2}${j+1}`).className = "circle circleWiner";

                                }

                            }

                            classSwitch = (classSwitch===0)? 1:0;

                            },250)
                        
                            return true

                        } else if (mode==="simulation"){

                            return true

                        }
    
                    }

                    i++

                   if (i===searchLimitVertical && caseControl==="lookingForBestThrow"){

                       break innerLoop;

                   }
    
                }

                if(count>0 && mode==="simulation" && caseControl==="lookingForBestThrow" ){

                    cpuBestOption.push({score: count,
                                        boardPosY: rowCounterControl,
                                        boardPosX:j, 
                                        column: col,
                                        direction: "vertical"})

                    }
    
                count = 0;
                i++;
                rowCounterControl = i;
    
            }
    
            i=0;
            rowCounterControl = i;
    
        }
    
    }


    function LeftTopRightBottom(forPlayer,mode,col, caseControl){ 
        
        let count=0;
    
        let rowCounter, colCounter;

        let fromColumn, toColumn;

        fromColumn = 0;
        toColumn = 3;

        let searchLimitVertical = (caseControl==="lookingForBestThrow")? 6: 3;
    
        for (let i=0;i<searchLimitVertical;i++){

            if(caseControl==="lookingForBestThrow"){

                switch (i){

                    case 0:
                        fromColumn = 0;
                        toColumn = 3;
                        break;

                    case 1:
                        fromColumn = 0;
                        toColumn = 4;
                        break;

                    case 2:
                        fromColumn = 0;
                        toColumn = 5;
                        break;

                    case 3:
                        fromColumn = 1;
                        toColumn = 6;
                        break;

                    case 4:
                        fromColumn = 2;
                        toColumn = 6;
                        break;

                    case 5:
                        fromColumn = 3;
                        toColumn = 6;
                        break;

                }

            }

            j=fromColumn;    
            rowCounter=i;
            colCounter=fromColumn;
        
            while(colCounter<=toColumn){

                innerLoop:
                
                while(gameBoard[rowCounter][j]===forPlayer){
    
                    count++;
    
                    if (count===4){

                        if (mode==="real"){

                            let className = (forPlayer==="player1")? "circle circlePlayerOne" : "circle circlePlayerTwo";

                            let classSwitch = 0;

                            winnerAnimation = setInterval(()=>{

                                p=j;

                                for (let k=rowCounter;k>rowCounter-4;k--){

                                        if(classSwitch===0){

                                        document.getElementById(`circleId${k+2}${p+1}`).className = className;

                                        }else{

                                        document.getElementById(`circleId${k+2}${p+1}`).className = "circle circleWiner";

                                        }
                    
                                    p--;

                                }

                            classSwitch = (classSwitch===0)? 1:0;

                            },250)

                            return true

                        } else if(mode==="simulation"){

                            return true 

                        }
    
                    }

                    j++;
                    rowCounter++;

                    if ((rowCounter===searchLimitVertical || j===toColumn+1) && caseControl==="lookingForBestThrow"){
                       
                        break innerLoop;
 
                    }
                    
                }

                if(count>0 && mode==="simulation" && caseControl==="lookingForBestThrow" ){

                    cpuBestOption.push({score: count,
                                        boardPosY: i,
                                        boardPosX:colCounter, 
                                        column: col,
                                        direction: "LeftTopRightBottom"})

                    }
    
                count = 0;
                colCounter++;
                j=colCounter;
                rowCounter=i;
    
            }
    
        }
    
    }


    function RightTopLeftBottom(forPlayer,mode,col){ 
        
        let count=0; 

        let rowCounter, colCounter;

        let fromColumn, toColumn;

        fromColumn = 6;
        toColumn = 3;

        let searchLimitVertical = (caseControl==="lookingForBestThrow")? 6: 3;
    
        for (let i=0;i<searchLimitVertical;i++){

            if(caseControl==="lookingForBestThrow"){

                switch (i){

                    case 0:
                        fromColumn = 6;
                        toColumn = 3;
                        break;

                    case 1:
                        fromColumn = 6;
                        toColumn = 2;
                        break;

                    case 2:
                        fromColumn = 6;
                        toColumn = 1;
                        break;

                    case 3:
                        fromColumn = 5;
                        toColumn = 0;
                        break;

                    case 4:
                        fromColumn = 4;
                        toColumn = 0;
                        break;

                    case 5:
                        fromColumn = 3;
                        toColumn = 0;
                        break;

                }

            }
    
            j=fromColumn;
            rowCounter=i;
            colCounter=fromColumn;
        
            while(colCounter>=toColumn){

                innerLoop:
    
                while(gameBoard[rowCounter][j]===forPlayer){
    
                    count++;
    
                    if (count===4){

                        if (mode==="real"){

                            let className = (forPlayer==="player1")? "circle circlePlayerOne" : "circle circlePlayerTwo";

                            let classSwitch = 0;

                            winnerAnimation = setInterval(()=>{

                                p=j;

                                for (let k=rowCounter;k>rowCounter-4;k--){

                                        if(classSwitch===0){

                                        document.getElementById(`circleId${k+2}${p+1}`).className = className;

                                        }else{

                                        document.getElementById(`circleId${k+2}${p+1}`).className = "circle circleWiner";

                                        }
                    
                                    p++;

                                }

                            classSwitch = (classSwitch===0)? 1:0;

                            },250)
                        
                            return true

                        } else if(mode==="simulation"){

                            return true

                        }
    
                    }

                    j--;
                    rowCounter++;

                    if ((rowCounter===searchLimitVertical || j===toColumn-1) && caseControl==="lookingForBestThrow"){

                        break innerLoop;
 
                    }
    
                }

                if(count>0 && mode==="simulation" && caseControl==="lookingForBestThrow" ){

                    cpuBestOption.push({score: count,
                                        boardPosY: i,
                                        boardPosX:colCounter, 
                                        column: col,
                                        direction: "RightTopLeftBottom"})

                    }
    
                count = 0;
                colCounter--;
                j=colCounter;
                rowCounter=i;
    
            }
    
        }
    
    }

}

function finishCurrentGame(){

    clearInterval(gamingCountDown);
    clearTimeout(cpuThinking);

    document.getElementById("gameControlsButtonsFinishId").className="gameControlsButtons opacityMin";
    document.getElementById("gameControlsButtonsFinishId").disabled = true;

    playerOneDisplay.innerHTML = "Game interrupted by user";
    playerTwoDisplay.innerHTML = "Game interrupted by user";

    backgroundHighlight();

    consoleDisplay.innerHTML = 'Game finished by user';

    game.status = "interrupted";

    setTimeout(()=>{

        backgroundHighlight();
        consoleDisplay.innerHTML = `Ckick reset before starting a new game`;

        document.getElementById("gameControlsButtonsResetId").className="gameControlsButtons zIndexZero opacityMax";
        document.getElementById("gameControlsButtonsResetId").disabled = false;

    },5000);

        for (let i=1 ; i<8 ; i++){

            idBuffer = `arrowId1${i}`

            document.getElementById(idBuffer).className = "arrow opacityMin";

        }

        setTimeout(()=>{

            for (let i=1 ; i<8 ; i++){

                idBuffer = `arrowId1${i}`
    
                document.getElementById(idBuffer).className = "arrow zIndexMinusTwo opacityMin";
    
            }

        },100)

}

function blockArrowsInGame(player){
    
    let classPlayer=(player==="player1")?"arrowIngamePlayer1":"arrowIngamePlayer2";

    for (let i=1 ; i<8 ; i++){

        idBuffer = `arrowId1${i}`

        document.getElementById(idBuffer).className = `${classPlayer} opacityMin`;

    }

    setTimeout(()=>{

        document.getElementById(idBuffer).className = `${classPlayer} zIndexMinusTwo opacityMin`;


    },100)

}

function unblockArrowsInGame(player){

    let classPlayer=(player==="player1")?"arrowIngamePlayer1":"arrowIngamePlayer2";

    for (let i=1 ; i<8 ; i++){

        idBuffer = `arrowId1${i}`

        document.getElementById(idBuffer).className = `${classPlayer} zIndexZero opacityMax`;
    
    }

}

function initializateArrowsClass(){

    for (let i=1 ; i<8 ; i++){

        let idBuffer;

        idBuffer = `arrowId1${i}`
    
        document.getElementById(idBuffer).className = "arrow zIndexZero";
    
    }

}

function setArrowsListeners(){

document.getElementById("arrowId11").addEventListener("click",clickArrow1);
document.getElementById("arrowId12").addEventListener("click",clickArrow2);
document.getElementById("arrowId13").addEventListener("click",clickArrow3);
document.getElementById("arrowId14").addEventListener("click",clickArrow4);
document.getElementById("arrowId15").addEventListener("click",clickArrow5);
document.getElementById("arrowId16").addEventListener("click",clickArrow6);
document.getElementById("arrowId17").addEventListener("click",clickArrow7);

}

function removeArrowsListeners(){

    document.getElementById("arrowId11").removeEventListener("click",clickArrow1);
    document.getElementById("arrowId12").removeEventListener("click",clickArrow2);
    document.getElementById("arrowId13").removeEventListener("click",clickArrow3);
    document.getElementById("arrowId14").removeEventListener("click",clickArrow4);
    document.getElementById("arrowId15").removeEventListener("click",clickArrow5);
    document.getElementById("arrowId16").removeEventListener("click",clickArrow6);
    document.getElementById("arrowId17").removeEventListener("click",clickArrow7);

}

function clickArrow1(){

    insertToken(1,"real",game.turn, "playerMove");

}

function clickArrow2(){

    insertToken(2,"real",game.turn, "playerMove");

}

function clickArrow3(){

    insertToken(3,"real",game.turn, "playerMove");

}

function clickArrow4(){

    insertToken(4,"real",game.turn, "playerMove");

}

function clickArrow5(){

    insertToken(5,"real",game.turn, "playerMove");

}

function clickArrow6(){

    insertToken(6,"real",game.turn, "playerMove");

}

function clickArrow7(){

    insertToken(7,"real",game.turn, "playerMove");

}

function clickArrow8(){

    insertToken(8,"real",game.turn, "playerMove");

}

function frameRateProcessing(){

    let frBackground, frTimerPlayerOne, frTimerPlayerTwo

    setInterval(() => {

        frBackground = Math.trunc(backgroundSketch.frameRate());
        frTimerPlayerOne = Math.trunc(timerFirstPlayersketch.frameRate());
        frTimerPlayerTwo = Math.trunc(timerSecondPlayersketch.frameRate());

        document.getElementById("fpsBackground").innerHTML=`FR Background:   ${frBackground} fps`;
        document.getElementById("fpsTimer1").innerHTML=`FR Timer Player One:   ${frTimerPlayerOne} fps`;
        document.getElementById("fpsTimer2").innerHTML=`FR Timer Player One:   ${frTimerPlayerTwo} fps`;

    }, 500);


}