convert = function(){

    var numeroDecimal = document.getElementById('decimal').value;
    var decimal = 0;
    var numeroRomano = document.getElementById('romano').value; 
    
    var element = document.getElementById('resposta');                      
    
        function converToDecimal(){            
            var romano = numeroRomano.toUpperCase();

            if(isNaN(numeroRomano)){                                       
                    
                    let romanoArray = romano.split('');
                    
                    while(romanoArray[0] === 'M'){
                        decimal = decimal + 1000;
                        romanoArray.shift();
                    }

                        while(romanoArray[0] === 'C' && romanoArray[1] === 'M'){
                            decimal = decimal + 900;
                            romanoArray.shift();
                            romanoArray.shift();
                        }
                    
                    while(romanoArray[0] === 'D'){
                        decimal = decimal + 500;
                        romanoArray.shift();
                    }

                        while(romanoArray[0] === 'C' && romanoArray[1] === 'D'){
                            decimal = decimal + 400;
                            romanoArray.shift();
                            romanoArray.shift();
                        }

                    while(romanoArray[0] === 'C'){
                        decimal = decimal + 100;
                        romanoArray.shift();
                    }

                        while(romanoArray[0] === 'X' && romanoArray[1] === 'C'){
                            decimal = decimal + 90;
                            romanoArray.shift();
                            romanoArray.shift();
                        }

                    while(romanoArray[0] === 'L'){
                        decimal = decimal + 50;
                        romanoArray.shift();
                    }

                        while(romanoArray[0] === 'X' && romanoArray[1] === 'L'){
                            decimal = decimal + 40;
                            romanoArray.shift();
                            romanoArray.shift();
                        }
                    
                    while(romanoArray[0] === 'X'){
                        decimal = decimal + 10;
                        romanoArray.shift();
                    }

                        while(romanoArray[0] === 'I' && romanoArray[1] === 'X'){
                            decimal = decimal + 9;
                            romanoArray.shift();
                            romanoArray.shift();
                        }

                    while(romanoArray[0] === 'V'){
                        decimal = decimal + 5;
                        romanoArray.shift();
                    }

                        while(romanoArray[0] === 'I' && romanoArray[1] === 'V'){
                            decimal = decimal + 4;
                            romanoArray.shift();
                            romanoArray.shift();
                        }

                    while(romanoArray[0] === 'I'){
                        decimal = decimal + 1;
                        romanoArray.shift();
                    }                    
                    
                    element.innerHTML= `${decimal}`;                                       
            }
            else{
                alert('Apenas números romanos');
            }            
        }

        function convertToRoman(){            

            if(isNaN(numeroDecimal)){
                alert('Apenas Número Decimal')
            }
            else{
                while(numeroDecimal >= 1000){
                    numeroDecimal = numeroDecimal - 1000;
                    numeroRomano = numeroRomano + 'M';
                }

                    while(numeroDecimal >=900 && numeroDecimal < 1000){
                        numeroDecimal = numeroDecimal - 900;
                        numeroRomano = numeroRomano + 'CM'
                    }

                while(numeroDecimal >=500 && numeroDecimal < 1000){
                    numeroDecimal = numeroDecimal - 500;
                    numeroRomano = numeroRomano + 'D'
                } 

                    while(numeroDecimal >=400 && numeroDecimal < 600){
                        numeroDecimal = numeroDecimal - 400;
                        numeroRomano = numeroRomano + 'CD'
                    }
                
                while(numeroDecimal >= 100 && numeroDecimal < 500){
                    numeroDecimal = numeroDecimal - 100;
                    numeroRomano = numeroRomano + 'C'
                }
                
                    while(numeroDecimal >= 90 && numeroDecimal < 200){
                        numeroDecimal = numeroDecimal - 90;
                        numeroRomano = numeroRomano + 'XC'
                    }

                while(numeroDecimal >= 50 && numeroDecimal < 100){
                    numeroDecimal = numeroDecimal - 50;
                    numeroRomano = numeroRomano + 'L'
                }

                    while(numeroDecimal >= 40 && numeroDecimal < 100){
                        numeroDecimal = numeroDecimal - 40;
                        numeroRomano = numeroRomano + 'XL'
                    }

                while(numeroDecimal >= 10 && numeroDecimal < 50){
                    numeroDecimal = numeroDecimal - 10;
                    numeroRomano = numeroRomano + 'X'
                }
                
                    while(numeroDecimal >= 9 && numeroDecimal < 20){
                        numeroDecimal = numeroDecimal - 9;
                        numeroRomano = numeroRomano + 'IX'
                    }
                
                while(numeroDecimal >= 5 && numeroDecimal < 10){
                    numeroDecimal = numeroDecimal - 5;
                    numeroRomano = numeroRomano + 'V'
                }

                    while(numeroDecimal >= 4 && numeroDecimal < 10){
                        numeroDecimal = numeroDecimal - 4;
                        numeroRomano = numeroRomano + 'IV'
                    }
                
                while(numeroDecimal >= 1 && numeroDecimal < 5){
                    numeroDecimal = numeroDecimal - 1;
                    numeroRomano = numeroRomano + 'I'
                } 
                
                element.innerHTML= `${numeroRomano}`;                
            }           
            
        }

    if(numeroDecimal == '' && numeroRomano != ''){
        converToDecimal(); 
        document.getElementById('romano').value = '';      
    }
    
    else if(numeroRomano == '' && numeroDecimal != undefined){        
        convertToRoman();  
        document.getElementById('decimal').value = '';     
    }

    else{
        alert('Apenas um campo por vez');        
    }
}

