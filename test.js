let user = {
    name: 'fede',
    age: 30,
    email: 'fmnunezz@gmail.com',
    location: 'argentina',
    blog: ['aca va uno', 'aca va otro']
};

//console.log(user);
console.log(user.name);
user.age = 35;
console.log(user.age);
console.log(user['age']);