/* This exercise should be moved before 17-Your first loop? */

// Declare and write your function here:

function standardsMaker(){
    let letter = "I will write questions if I'm stuck";
    return letter;
}

// Calling the function: 
standardsMaker();
for(var i = 0; i < 301; i++)
{
    console.log(standardsMaker());
}