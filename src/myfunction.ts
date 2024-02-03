function addTwo(num: number): number{ 

    //this function should always return a number
    return num + 2;
}

//in arrow function 
const getHello = (s: string) : string => {
return "" // should always return something
}

//same as above

const getHelloo = (s: string) : string => ""

function getUpper(val: string){
    return val.toUpperCase()
}

let loginUser =(name: string, email: string, isPaid: boolean  = false) => {} // false in isPaid here is a default value, thi is how you can give default value


function gesignUpUserUpper(name: string, email: string, isPaid: boolean){
   
}


//map scenerios

const heros = ["spiderman", "hulk", "CA"]

heros.map((hero): string => {
    return `hero is ${hero}`
    // return 1 , this will fail because string is expected
})


// when you dont wan tthe function to return anything , add void i return type

function consoleError(msg : string): void {
    console.log(msg)
    // return 1;  this will fail
}

// when handeling errors use never in the return type, recomedded in doc

function handleError(err: string): never {
    throw new Error(err)
}

let myval = addTwo(5)
addTwo(5)
getUpper("abc")
gesignUpUserUpper("jigyasa", "jigyas@gmial.io", true)
loginUser("jigyasa", "jigyas@gmial.io")


export{}