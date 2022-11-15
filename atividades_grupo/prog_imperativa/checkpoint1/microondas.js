console.log( `
Bem vindos ao Smart Microondas, digite o código do prato e o tempo:
     1 - Pipoca – 10 segundos ;
     2 - Macarrão – 8 segundos ;
     3 - Carne – 15 segundos ;
     4 - Feijão – 12 segundos ;
     5 - Brigadeiro – 8 segundos ; `)

     //criando função do microondas, com o código do prato e o tempo

     function microondas (prato, tempo){
      
      //Condição da pipoca
     if( prato == 1 && tempo >= 20 && tempo <30){
       console.log(`Sua pipoca queimou`)
     }else if ( prato == 1 && tempo>=10 && tempo < 20){
       console.log(`Sua pipoca está boa`)
     }else if ( prato == 1 && tempo < 10){
       console.log(`Que pena, sua pipoca não está pronta`)
     } else if (prato == 1 && tempo >= 30){
       console.log(`Kabumm!`)

       //Condição do macarrão
     }else if (prato == 2 && tempo >= 16 && tempo <24){
       console.log(`Seu macarrão queimou`)
     }else if (prato == 2 && tempo >= 8 && tempo < 16){
       console.log(`Seu macarrão ficou bom`)
     } else if (prato ==2 && tempo < 8){
       console.log(`Que pena, seu macarrão não ficou pronto`)
     } else if (prato == 2 && tempo >= 24){
       console.log(`Kabumm!`)

       //Condição da carne
     }else if (prato == 3 && tempo >= 30 && tempo < 45){
       console.log(`Sua carne queimou`)
     }else if (prato == 3 && tempo >= 15 && tempo <30){
       console.log(`Sua carne está boa`)
     }else if (prato == 3 && tempo < 15){
       console.log(`Sua carne não ficou pronta`)
     }else if (prato == 3 && tempo >= 45){
       console.log(`Kabumm!`)

       //Condição feijão
     }else if (prato == 4 && tempo >= 24 && tempo < 36){
       console.log(`Seu feijão queimou`)
     }else if (prato == 4 && tempo >=12 && tempo < 24){
       console.log(`Seu feijão está bom`)
     }else if (prato == 4 && tempo < 12){
       console.log(`Seu feijão não ficou pronto`)
     }else if (prato == 4 && tempo >= 36){
       console.log(`Kabumm!`)

       //Condição Brigadeiro
     }else if (prato == 5 && tempo >= 16 && tempo < 24){
       console.log(`Seu brigadeiro queimou`)
     }else if (prato == 5 && tempo >=8 && tempo < 16){
       console.log(`Seu brigadeiro ficou bom`)
     }else if (prato == 5 && tempo < 8){
       console.log(`Seu brigadeiro não ficou pronto`)
     }else if (prato == 5 && tempo >= 24){
       console.log(`Kabumm`)
     }else {

      //Condição invalido
       console.log(`Opção inválida`)
     }
   }

   microondas(5,10)
   console.log(`Finalizado! Bom apetite!`)