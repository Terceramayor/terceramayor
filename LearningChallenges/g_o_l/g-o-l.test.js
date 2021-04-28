const dummyMatrixForChekTesting=   [[false,false,false,false,false,false,false,false,false,false],
                                    [false,false,false,false,false,false,false,false,false,false],
                                    [false,false,false,false,false,false,false,false,false,false],
                                    [false,false,false,false,false,false,false,false,false,false],
                                    [false,false,false,false,true,false,false,false,false,false],
                                    [false,false,false,false,false,false,false,false,false,false],
                                    [false,false,false,false,false,false,false,false,false,false],
                                    [false,false,false,false,false,false,false,false,false,false],
                                    [false,false,false,false,false,false,false,false,false,false],
                                    [false,false,false,false,false,false,false,false,false,false],];




function up(row,col,matrixDimensions){

    return (row===0)? false:true 

}

function checkUp(row,col,currentMatrixCheck){

    return (currentMatrixCheck[row-1][col]===true)? 1:0 

}

function upRight(row,col,matrixDimensions){

    return (row===0 || col===matrixDimensions[1]-1)? false:true 

}

function checkUpRight(row,col,currentMatrixCheck){

    return (currentMatrixCheck[row-1][col+1]===true)? 1:0 

}

function right(row,col,matrixDimensions){

    return (col===matrixDimensions[1]-1)? false:true 

}

function checkRight(row,col,currentMatrixCheck){

    return (currentMatrixCheck[row][col+1]===true)? 1:0 

}

function downRight(row,col,matrixDimensions){

    return (row===matrixDimensions[0]-1 || col===matrixDimensions[1]-1)? false:true 

}

function checkDownRight(row,col,currentMatrixCheck){

    return (currentMatrixCheck[row+1][col+1]===true)? 1:0 

}

function down(row,col,matrixDimensions){

    return (row===matrixDimensions[0]-1)? false:true 

}

function checkDown(row,col,currentMatrixCheck){

    return (currentMatrixCheck[row+1][col]===true)? 1:0 

}

function downLeft(row,col,matrixDimensions){

    return (row===matrixDimensions[0]-1 || col===0)? false:true 

}

function checkDownLeft(row,col,currentMatrixCheck){

    return (currentMatrixCheck[row+1][col-1]===true)? 1:0 

}

function left(row,col,matrixDimensions){

    return (col===0)? false:true 

}

function checkLeft(row,col,currentMatrixCheck){

    return (currentMatrixCheck[row][col-1]===true)? 1:0 

}

function upLeft(row,col,matrixDimensions){

    return (row===0 || col===0)? false:true 

}

function checkUpLeft(row,col,currentMatrixCheck){

    return (currentMatrixCheck[row-1][col-1]===true)? 1:0 

}










// TESTS SECCTION - Addjacent possition checkers

describe('++++++++++++Given a set of functions that check whether each of the eigth possible possition exists for an specific matrix possition++++++++++++', function(){

    describe('============When a function that check whether the upper position exists for a 10 by 10 game of life matrix============',function(){

            [
                {i: 0, j:0, matrixSize: [10,10], return: false},
                {i: 9, j:9, matrixSize: [10,10], return: true},
                {i: 0, j:9, matrixSize: [10,10], return: false},
                {i: 9, j:0, matrixSize: [10,10], return: true},
                

            ].forEach( function(testCombination){

                describe(`When invoked for the position row ${testCombination.i} and column ${testCombination.j}`, function() {

                    test(`Then the return should be ${testCombination.return}`, function(){

                        //act
                        let answer = up(testCombination.i,testCombination.j,testCombination.matrixSize);

                        //assert
                        expect(answer).toBe(testCombination.return);
                        
                    })

                })
            })

        })

        describe('============When a function that check whether the upper-right position exists for a 10 by 10 game of life matrix============',function(){

            [
                {i: 0, j:0, matrixSize: [10,10], return: false},
                {i: 9, j:9, matrixSize: [10,10], return: false},
                {i: 0, j:9, matrixSize: [10,10], return: false},
                {i: 9, j:0, matrixSize: [10,10], return: true},
                

            ].forEach( function(testCombination){

                describe(`When invoked for the position row ${testCombination.i} and column ${testCombination.j}`, function() {

                    test(`Then the return should be ${testCombination.return}`, function(){

                        //act
                        let answer = upRight(testCombination.i,testCombination.j,testCombination.matrixSize);

                        //assert
                        expect(answer).toBe(testCombination.return);
                        
                    })

                })
            })

        })

        describe('============When a function that check whether the right position exists for a 10 by 10 game of life matrix============',function(){

            [
                {i: 0, j:0, matrixSize: [10,10], return: true},
                {i: 9, j:9, matrixSize: [10,10], return: false},
                {i: 0, j:9, matrixSize: [10,10], return: false},
                {i: 9, j:0, matrixSize: [10,10], return: true},
                

            ].forEach( function(testCombination){

                describe(`When invoked for the position row ${testCombination.i} and column ${testCombination.j}`, function() {

                    test(`Then the return should be ${testCombination.return}`, function(){

                        //act
                        let answer = right(testCombination.i,testCombination.j,testCombination.matrixSize);

                        //assert
                        expect(answer).toBe(testCombination.return);
                        
                    })

                })
            })

        })

        describe('============When a function that check whether the downright position exists for a 10 by 10 game of life matrix============',function(){

            [
                {i: 0, j:0, matrixSize: [10,10], return: true},
                {i: 9, j:9, matrixSize: [10,10], return: false},
                {i: 0, j:9, matrixSize: [10,10], return: false},
                {i: 9, j:0, matrixSize: [10,10], return: false},
                

            ].forEach( function(testCombination){

                describe(`When invoked for the position row ${testCombination.i} and column ${testCombination.j}`, function() {

                    test(`Then the return should be ${testCombination.return}`, function(){

                        //act
                        let answer = downRight(testCombination.i,testCombination.j,testCombination.matrixSize);

                        //assert
                        expect(answer).toBe(testCombination.return);
                        
                    })

                })
            })

        })

        describe('============When a function that check whether the down position exists for a 10 by 10 game of life matrix============',function(){

            [
                {i: 0, j:0, matrixSize: [10,10], return: true},
                {i: 9, j:9, matrixSize: [10,10], return: false},
                {i: 0, j:9, matrixSize: [10,10], return: true},
                {i: 9, j:0, matrixSize: [10,10], return: false},
                

            ].forEach( function(testCombination){

                describe(`When invoked for the position row ${testCombination.i} and column ${testCombination.j}`, function() {

                    test(`Then the return should be ${testCombination.return}`, function(){

                        //act
                        let answer = down(testCombination.i,testCombination.j,testCombination.matrixSize);

                        //assert
                        expect(answer).toBe(testCombination.return);
                        
                    })

                })
            })

        })

        describe('============When a function that check whether the downleft position exists for a 10 by 10 game of life matrix============',function(){

            [
                {i: 0, j:0, matrixSize: [10,10], return: false},
                {i: 9, j:9, matrixSize: [10,10], return: false},
                {i: 0, j:9, matrixSize: [10,10], return: true},
                {i: 9, j:0, matrixSize: [10,10], return: false},
                

            ].forEach( function(testCombination){

                describe(`When invoked for the position row ${testCombination.i} and column ${testCombination.j}`, function() {

                    test(`Then the return should be ${testCombination.return}`, function(){

                        //act
                        let answer = downLeft(testCombination.i,testCombination.j,testCombination.matrixSize);

                        //assert
                        expect(answer).toBe(testCombination.return);
                        
                    })

                })
            })

        })

        describe('============When a function that check whether the left position exists for a 10 by 10 game of life matrix============',function(){

            [
                {i: 0, j:0, matrixSize: [10,10], return: false},
                {i: 9, j:9, matrixSize: [10,10], return: true},
                {i: 0, j:9, matrixSize: [10,10], return: true},
                {i: 9, j:0, matrixSize: [10,10], return: false},
                

            ].forEach( function(testCombination){

                describe(`When invoked for the position row ${testCombination.i} and column ${testCombination.j}`, function() {

                    test(`Then the return should be ${testCombination.return}`, function(){

                        //act
                        let answer = left(testCombination.i,testCombination.j,testCombination.matrixSize);

                        //assert
                        expect(answer).toBe(testCombination.return);
                        
                    })

                })
            })

        })

        describe('============When a function that check whether the upLeft position exists for a 10 by 10 game of life matrix============',function(){

            [
                {i: 0, j:0, matrixSize: [10,10], return: false},
                {i: 9, j:9, matrixSize: [10,10], return: true},
                {i: 0, j:9, matrixSize: [10,10], return: false},
                {i: 9, j:0, matrixSize: [10,10], return: false},
                

            ].forEach( function(testCombination){

                describe(`When invoked for the position row ${testCombination.i} and column ${testCombination.j}`, function() {

                    test(`Then the return should be ${testCombination.return}`, function(){

                        //act
                        let answer = upLeft(testCombination.i,testCombination.j,testCombination.matrixSize);

                        //assert
                        expect(answer).toBe(testCombination.return);
                        
                    })

                })
            })

        })

    })

    // TESTS SECCTION - Neighbour checkers

    describe('++++++++++++Given a set of functions that check whether each of the eigth possible neighbours exists for an specific matrix possition++++++++++++', function(){

        describe('============When a function that check whether the upper neighbour exists (Check dummy matrix)============',function(){
    
                [
                    {i: 5, j:4, return: 1},
                    {i: 5, j:5, return: 0},
                    
    
                ].forEach( function(testCombination){
    
                    describe(`When invoked for the possition row ${testCombination.i} and column ${testCombination.j}`, function() {
    
                        test(`Then the return should be ${testCombination.return}`, function(){
    
                            //act
                            let answer = checkUp(testCombination.i,testCombination.j,dummyMatrixForChekTesting);
    
                            //assert
                            expect(answer).toBe(testCombination.return);
                            
                        })
    
                    })
                })
    
            })
    
            describe('============When a function that check whether the upper-right neighbour exists (Check dummy matrix)============',function(){
    
                [
                    {i: 5, j:3, return: 1},
                    {i: 5, j:5, return: 0},
                    
    
                ].forEach( function(testCombination){
    
                    describe(`When invoked for the possition row ${testCombination.i} and column ${testCombination.j}`, function() {
    
                        test(`Then the return should be ${testCombination.return}`, function(){
    
                            //act
                            let answer = checkUpRight(testCombination.i,testCombination.j,dummyMatrixForChekTesting);
    
                            //assert
                            expect(answer).toBe(testCombination.return);
                            
                        })
    
                    })
                })
    
            })
    
            describe('============When a function that check whether the right neighbour exists (Check dummy matrix)============',function(){
    
                [
                    {i: 4, j:3, return: 1},
                    {i: 5, j:3, return: 0},
                    
    
                ].forEach( function(testCombination){
    
                    describe(`When invoked for the possition row ${testCombination.i} and column ${testCombination.j}`, function() {
    
                        test(`Then the return should be ${testCombination.return}`, function(){
    
                            //act
                            let answer = checkRight(testCombination.i,testCombination.j,dummyMatrixForChekTesting);
    
                            //assert
                            expect(answer).toBe(testCombination.return);
                            
                        })
    
                    })
                })
    
            })
    
            describe('============When a function that check whether the downright neighbour exists (Check dummy matrix)============',function(){
    
                [
                    {i: 3, j:3, return: 1},
                    {i: 5, j:5, return: 0},
                    
    
                ].forEach( function(testCombination){
    
                    describe(`When invoked for the possition row ${testCombination.i} and column ${testCombination.j}`, function() {
    
                        test(`Then the return should be ${testCombination.return}`, function(){
    
                            //act
                            let answer = checkDownRight(testCombination.i,testCombination.j,dummyMatrixForChekTesting);
    
                            //assert
                            expect(answer).toBe(testCombination.return);
                            
                        })
    
                    })
                })
    
            })
    
            describe('============When a function that check whether the down neighbour exists (Check dummy matrix)============',function(){
    
                [
                    {i: 3, j:4, return: 1},
                    {i: 5, j:4, return: 0},          
    
                ].forEach( function(testCombination){
    
                    describe(`When invoked for the possition row ${testCombination.i} and column ${testCombination.j}`, function() {
    
                        test(`Then the return should be ${testCombination.return}`, function(){
    
                            //act
                            let answer = checkDown(testCombination.i,testCombination.j,dummyMatrixForChekTesting);
    
                            //assert
                            expect(answer).toBe(testCombination.return);
                            
                        })
    
                    })
                })
    
            })
    
            describe('============When a function that check whether the downleft neighbour exists (Check dummy matrix)============',function(){
    
                [
                    {i: 3, j:5, return: 1},
                    {i: 5, j:5, return: 0},

                ].forEach( function(testCombination){
    
                    describe(`When invoked for the possition row ${testCombination.i} and column ${testCombination.j}`, function() {
    
                        test(`Then the return should be ${testCombination.return}`, function(){
    
                            //act
                            let answer = checkDownLeft(testCombination.i,testCombination.j,dummyMatrixForChekTesting);
    
                            //assert
                            expect(answer).toBe(testCombination.return);
                            
                        })
    
                    })
                })
    
            })
    
            describe('============When a function that check whether the left neighbour exists (Check dummy matrix)============',function(){
    
                [
                    {i: 4, j:5, return: 1},
                    {i: 3, j:5, return: 0},
    
                ].forEach( function(testCombination){
    
                    describe(`When invoked for the possition row ${testCombination.i} and column ${testCombination.j}`, function() {
    
                        test(`Then the return should be ${testCombination.return}`, function(){
    
                            //act
                            let answer = checkLeft(testCombination.i,testCombination.j,dummyMatrixForChekTesting);
    
                            //assert
                            expect(answer).toBe(testCombination.return);
                            
                        })
    
                    })
                })
    
            })
    
            describe('============When a function that check whether the upLeft neighbour exists (Check dummy matrix)============',function(){
    
                [
                    {i: 5, j:5, return: 1},
                    {i: 3, j:4, return: 0},
    
                ].forEach( function(testCombination){
    
                    describe(`When invoked for the possition row ${testCombination.i} and column ${testCombination.j}`, function() {
    
                        test(`Then the return should be ${testCombination.return}`, function(){
    
                            //act
                            let answer = checkUpLeft(testCombination.i,testCombination.j,dummyMatrixForChekTesting);
    
                            //assert
                            expect(answer).toBe(testCombination.return);
                            
                        })
    
                    })
                })
    
            })
    
        })