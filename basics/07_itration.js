/* for (let i=1; i<=10; i++ ) {
    for(let j=0; j<=10; j++ ) {
        //console.log(10*i);
        
    }

  console.log(i*10);
} */

//........................................

// break and continue

/* for(i=0; i<10; i++ ) {
     if(i==7) {
        console.log("7 is skipped");
        continue; // skips the rest of the loop for this iteration
    }    

    if(i==7) {
        console.log("7 is breaked");
        break; // exits the loop entirely
    }  

    console.log(i);
    
} */

//........................................

 /*const numbers = [1, 2, , 4, 5];
for(const num of numbers) {
    console.log(num);
    
} */

    const myObject= {
        name :"rao",
        rollno :123,
        age :23,
        contactno: 342321313
    };

    for(const key in myObject) {
        console.log(`  my key are ${key} and value is ${myObject[key]} okk done`)
    }