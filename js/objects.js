// Objects in JS have properties and things they can do(methods)

// Object literal notation
// const blogs = [
//     { title: 'why mac and cheese rules', likes: 30 },
//     { title: 'wTen things to make with marmit', likes: 50 }
// ]

let user = {
    name: 'crystal',
    age: 30,
    email: 'cyrstal@gmail.com',
    location: 'Berlin',
    blogs: [
        { title: 'why mac and cheese rules', likes: 30 },
        { title: 'wTen things to make with marmit', likes: 50 }
    ],
    login: function () { // This is method.A function designated in an object
        console.log("The user logged in")
    },
    logout: function () { // This is method.A function designated in an object
        console.log("The user logged out")
    },
    logBlogs: function () { // This is method.A function designated in an object
        console.log("This user has written about the following things")
        this.blogs.forEach(blog => {
            console.log(blog.title, blog.likes);
        })
    }
};

console.log(user);
console.log(user.name);

// make her 35
user.age = 35;
console.log(user.age);

console.log(user['name']);
user['name'] = 'Lamar';
console.log(user['name']);

console.log(typeof user);

// Math Object

console.log(Math);
console.log(Math.PI);
console.log(Math.E);

const area = 7.7;

console.log(Math.round(area));// Does actual rounding
console.log(Math.floor(area)); // Rounds down
console.log(Math.ceil(area)); // rounds up
console.log(Math.trunc(area)); // truncates decimal

// random numbers generator
const random = Math.random();
console.log(Math.round(random * 100)); // Produces a random number between 0 and 100

