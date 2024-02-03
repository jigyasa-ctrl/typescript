// type Alias - easier to use type alias rather than again and again passing type definitions in each function

type User = {
    name: string;
    email: string;
    isActive: boolean
}

// function crete

// const User = {
//     name: "jigyasa",
//     email: "j@gmail.com",
//     isActive : true
// }

function createUser(user: User): User{
    return {name: "", email: "", isActive : true}
}
// let user = {name: "jigyasa", isPaid: true , email: "h@history.com"}
createUser({name: "jigyasa", isActive: true , email: "h@history.com"})

function createCourse():{name: string, price: number}{
    return {
        name: "reactjs",
        price: 400
    }
}

export {}
