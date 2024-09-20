

let userDetails = {
    name : "Ram" ,
    age : 23 , 
    
    

    printDetails:function(city , state) {
        console.log( this.name +" "+ city + " " + state );
    }

}

userDetails.printDetails ("Mumbai" , "Maharashtra");

let userDetails2 = {
    name : "Ajay" ,
    age : 23 , 
    

}


//call function
userDetails.printDetails.call(userDetails2 , "Pune" , "Maharashtra");

//apply
userDetails.printDetails.apply(userDetails2, ["Nagpur", "Maharashtra"]);

//bind
let newfun = userDetails.printDetails.bind(userDetails2 , "Pune" , "Maharashtra");

console.log(newfun ());

