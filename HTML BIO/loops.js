console.log("\nfor loop:");

for( let i = 1; i <= 5; i++){
    console.log("Count:",i);
}
    
    console.log("\nwhileloop: ");
     let counter = 3;
     while(counter > 0){
         console.log("T-minus:", counter);
         counter--;
     }

     console.log("\ndo-while loop:");
     let num;
     do{
         num = Math.floor(Math.random() * 5);
         console.log("Random number:", num);
     } while (num !== 0);


     console.log("\nBreak Example:" );
     for(let i = 1; i <=10; i++) {
         if (i === 6) {
             console.log("Stopping at 6!");
             break;
         }
         console.log(i);
     }
     
     console.log("\nContinue Example:");
     for (let i=1 ; i <=5; i++){
         if (i===3){
             console.log("skipping 3");
             continue;
         }
         console.log(i);
     }


