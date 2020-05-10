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

// Adding Methods


