let timerFirstPlayersketch = new p5 ((sketch) => {

    let opacityLevel = 0;

    let dynamic_width, dynamic_height;

    let dimX, dimY;

    let noiseControl = 0;

    sketch.setup = () => {

      let sketchFont = sketch.loadFont('MontserratExtraLight.ttf');
      sketch.textFont(sketchFont);

      dynamic_width = document.getElementById("flexboxGridTimerFirstPlayerId").offsetWidth;
      dynamic_height = document.getElementById("flexboxGridTimerFirstPlayerId").offsetHeight;

      sketch.createCanvas(dynamic_width, dynamic_height);

      dimX=0.5;
      dimY=0.5;
    
      sketch.noStroke();

      sketch.clear();

    }

    sketch.windowResized = () => {

      dynamic_width = document.getElementById("flexboxGridTimerFirstPlayerId").offsetWidth;
      dynamic_height = document.getElementById("flexboxGridTimerFirstPlayerId").offsetHeight;

      sketch.resizeCanvas(dynamic_width, dynamic_height);

    }

    sketch.draw = () => {

      if (game.status==="countDown"){

        sketch.clear();

        if (timeControl!==0){
              
          sketch.fill(player1Color(opacityLevel));      
          sketch.ellipse(sketch.width*0.5 , sketch.height*0.5, sketch.width*0.8 , sketch.width*0.8);  
          
          sketch.fill(0);
          sketch.textSize(50);
          sketch.textAlign(sketch.CENTER, sketch.CENTER);
          sketch.text(timeControl, sketch.width*0.5 , sketch.height*0.5 );

          opacityLevel = opacityLevel + 0.75;

        } else {

          sketch.fill(player1Color(255));      
          sketch.ellipse(sketch.width*0.5 , sketch.height*0.5, sketch.width*0.8, sketch.width*0.8);  

          sketch.fill(0);
          sketch.textSize(50);
          sketch.textAlign(sketch.CENTER, sketch.CENTER);
          sketch.text(timeControl, sketch.width*0.5 , sketch.height*0.5 );

        }

      }

      else if (game.status==="gaming"){

        opacityLevel = 50;

        if(game.turn==="player1"){

          if(timeControl!==0){

          sketch.fill(player1Color(opacityLevel));      
          sketch.ellipse(sketch.width*0.5 , sketch.height*0.5, sketch.width*0.8 , sketch.width*0.8); 
          
          sketch.fill(0); 
          sketch.textSize(50);
          sketch.textAlign(sketch.CENTER, sketch.CENTER);
          sketch.text(timeControl, sketch.width*0.5 , sketch.height*0.5 + sketch.width*0.5*0.65);

          sketch.stroke(0);
          sketch.line(sketch.width*0.5,sketch.height*0.5,sketch.width*0.5 + 100*Math.cos(clockAngle),sketch.height*0.5 + 100*Math.sin(clockAngle));

          } 

        } else {

          sketch.fill(player1Color(255));      
          sketch.ellipse(sketch.width*0.5 , sketch.height*0.5, sketch.width*0.8 , sketch.width*0.8); 

          sketch.fill(0);
          sketch.textSize(50);
          sketch.textAlign(sketch.CENTER, sketch.CENTER);
          sketch.text("Wait", sketch.width*0.5 , sketch.height*0.5 );

        }

    }

    else if (game.status==="winner"){

      dimX=sketch.width*0.8;
      dimY=sketch.width*0.8;

      if( game.winer === game.playerOne){

        sketch.fill(player1Color(255));      
        sketch.ellipse(sketch.width*0.5 , sketch.height*0.5, sketch.width*0.8 , sketch.width*0.8); 

        sketch.fill(0);
        sketch.textSize(30);
        sketch.textAlign(sketch.CENTER, sketch.CENTER);
        sketch.text("Congrats!", sketch.width*0.5 , sketch.height*0.5 );

      } else {

        sketch.fill(player1Color(255));      
        sketch.ellipse(sketch.width*0.5 , sketch.height*0.5, sketch.width*0.8 , sketch.width*0.8); 

        sketch.fill(0);
        sketch.textSize(30);
        sketch.textAlign(sketch.CENTER, sketch.CENTER);
        sketch.text(":(", sketch.width*0.5 , sketch.height*0.5 );

      }

    } else if(game.status==="reseted"){

        sketch.clear();

        if(dimX>1 && dimY>1){

          sketch.fill(player1Color(255));
          sketch.ellipse(sketch.width*0.5 , sketch.height*0.5,dimX , dimY); 

          dimX = dimX - 5;
          dimY = dimY - 5;

        }

    } else if(game.status==="interrupted"){

      sketch.clear();

      sketch.fill(player1Color(255));
      sketch.ellipse(sketch.width*0.5 , sketch.height*0.5, sketch.width*0.8 , sketch.width*0.8);

      sketch.fill(0);
      sketch.textSize(60);
      sketch.textAlign(sketch.CENTER, sketch.CENTER);
      sketch.text("!", sketch.width*0.5 + sketch.map(sketch.noise(noiseControl),0,1,-sketch.width*0.1,sketch.width*0.1) , sketch.height*0.5 + sketch.map(sketch.noise(noiseControl*0.9),0,1,-sketch.width*0.1,sketch.width*0.1) );

      noiseControl = noiseControl + 0.01;

    }

  }

  function player1Color(transparency){
    
    return sketch.color(255, 204, 0, transparency)
  
  }

  function player2Color(transparency){
    
    return sketch.color(166, 43, 43, transparency)
  
  }
    
},document.getElementById("flexboxGridTimerFirstPlayerId"));