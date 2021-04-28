let backgroundSketch = new p5 ((sketch) => {

    let expanded_space_x;
    let creation_trigger;
    let runners=[];
    let circleSize = 50;

    runners[0]=[];
    runners[1]=[];
    runners[2]=[];
    runners[3]=[];
    runners[4]=[];

    let velX;

    let player1Color, player2Color, bigCircleBackground;

    let dynamic_width, dynamic_height;

    sketch.setup = () => {

      let sketchFont = sketch.loadFont('MontserratExtraLight.ttf');
      sketch.textFont(sketchFont);

      player1Color=sketch.color(255, 204, 0, 255);
      player2Color=sketch.color(166, 43, 43, 255);
      bigCircleBackground=sketch.color(29, 52, 97, 255);

      dynamic_width = document.getElementById("canvasGridContainerId").offsetWidth;
      dynamic_height = document.getElementById("canvasGridContainerId").offsetHeight;

      escaper_posY = dynamic_height*0.5;

      sketch.createCanvas(dynamic_width, dynamic_height);
      
      expanded_space_x=1.5*sketch.width;

      sketch.background(0);
      sketch.noStroke();

    }

    sketch.windowResized = () => {

      dynamic_width = document.getElementById("canvasGridContainerId").offsetWidth;
      dynamic_height = document.getElementById("canvasGridContainerId").offsetHeight;

      sketch.resizeCanvas(dynamic_width, dynamic_height);

      expanded_space_x=1.5*sketch.width;

    }

    sketch.draw = () => {

      if(game.status==="reseted" || game.status==="countDown") {

        velX = (game.status==="gaming")? 7 : 3;

        sketch.background(0);

        creation_trigger=sketch.random(0,2);
      

        if (creation_trigger>1.97 && creation_trigger<1.98){

          sketch.create_runner(0);

        } else if(creation_trigger>1.95 && creation_trigger<1.97){

          sketch.create_runner(1);

        } else if (creation_trigger>1.93 && creation_trigger<1.95){

          sketch.create_runner(2);

        } else if (creation_trigger>1.91 && creation_trigger<1.93){

          sketch.create_runner(3);

        } else if(creation_trigger>1.999){

          sketch.create_runner(4);

        }
        
        sketch.move_runners();

        sketch.draw_runners();

        sketch.delete_runners();

      } else if (game.status==="gaming"){

        sketch.background(0,30);
        
        runners=[];

        runners[0]=[];
        runners[1]=[];
        runners[2]=[];
        runners[3]=[];
        runners[4]=[];

      } else if(game.status==="winner"){

        sketch.background(0,30);

      }

    }

    sketch.create_runner = (layer) => {

    
      let speed, r, noise;

      switch (layer){

        case 0:

          speed = velX;
          r=circleSize*2;
          noise=sketch.random(1,2);

        break;

        case 1:

          speed = 0.5*velX;
          r=circleSize*0.5;
          noise=sketch.random(1,2);

          break;

        case 2:

          speed = 0.25*velX;
          r=circleSize*0.25;
          noise=sketch.random(1,2);
        
          break;

        case 3:

          speed = 0.1*velX;
          r=circleSize*0.125;
          noise=sketch.random(1,2);
      
          break;

        case 4:

          speed = 0.05*velX;
          r=circleSize*15;
          noise=sketch.random(1,2);

          break;
      
      }

      let posX_each = expanded_space_x;
      let posY_each =  sketch.random(r,dynamic_height-r);

      let runnerColor, colorText;

      if(sketch.random(0,1)>0.5){

        runnerColor = player1Color;
        colorText = player2Color;

      } else {

        runnerColor = player2Color;
        colorText = player1Color;

      }

      let textCounter=0;
      let letters="";

      for (let i=0; i<4;i++){

        switch(textCounter){

          case 0:
            letters="Con";
            textCounter++
          break

          case 1:
            letters="nec";
            textCounter++
          break

          case 2:
            letters="ta";
            textCounter++
          break

          default:
            letters="4";
            textCounter=0;
        }

        runners[layer].push({

          posX: posX_each,
          posY:posY_each,
          radius: r,
          vel: speed,
          noiseControl: noise,
          fillColor: runnerColor,
          text:letters,
          textColor: colorText

          });

          posX_each=posX_each+r*1.25;

          noise = noise - 0.3;

        }

    }

    sketch.move_runners = () => {

      if (runners.length>0){
        
        for(let i=0;i<runners.length;i++){

          for(let j=0;j<runners[i].length;j++){
        
            runners[i][j].posX = runners[i][j].posX - runners[i][j].vel;
            runners[i][j].posY =  runners[i][j].posY + 0.5*(1/(i+1))*sketch.map(sketch.noise(runners[i][j].noiseControl),0,1,-1,1);
            runners[i][j].noiseControl = runners[i][j].noiseControl + 0.05;

          }

        }
        
      }

    }

    sketch.draw_runners = () => {

      if (runners.length!==0){

        for(let i=runners.length-1;i>-1;i--){

          for(let j=0;j<runners[i].length;j++){

            if (i===0){

              sketch.fill(runners[i][j].fillColor);          

            }else if (i===1){

              sketch.fill(runners[i][j].fillColor);          

            }else if (i===2){

              sketch.fill(runners[i][j].fillColor);          
              
            }else if (i===3){

              sketch.fill(runners[i][j].fillColor);          
              
            } else if (i===4){

              sketch.fill(bigCircleBackground);          
              
            } 

            sketch.ellipse(runners[i][j].posX,runners[i][j].posY,runners[i][j].radius,runners[i][j].radius);

            if(i===4){

              sketch.fill(255,255,255);

            } else {

              sketch.fill(runners[i][j].textColor);

            }

            sketch.textSize(0.3*runners[i][j].radius);
            sketch.text(runners[i][j].text,runners[i][j].posX-runners[i][j].radius*0.15,runners[i][j].posY+runners[i][j].radius*0.1);

          }

        }
        
      }

    }

    sketch.delete_runners = () => {


      if (runners.length!==0){

        for(let i=0;i<runners.length;i++){

          for (let j=0;j<runners[i].length;j++) {

            if(runners[i][j].posX+runners[i][j].radius<0){

              runners[i].splice(j,1);

            }

          }

        }
        
      }

    }

}, document.getElementById("canvasGridContainerId"));