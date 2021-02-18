let guests = prompt('How many people are coming to your wedding?');
let price=' ';
function getPrice(guests){
     cost = 0;
    // Your code here    
    if (guests <= 50) {
    cost = 4000;
    } 
    if (guests <= 100) {
     cost = 10000;
    } 
    if (guests <= 200) {
     cost = 15000;
    } else{
       cost = 20000;
    }

    return cost;
    price = cost;
}
    
    console.log('Your wedding will cost '+price+' dollars');
    return(price);
   
