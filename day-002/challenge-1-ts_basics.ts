let age: number = 18;
for (let i = 1; i <= age; i++) {
    console.log(i);
}

if (age > 18)
    console.log('Age is greater than 18');
else
    console.log('Age is 18 or lower than 18');

let score: number = 0;

if (score != 0)
    console.log('Score is available');

if (score)
    console.log('Score is evaluated as truthy');
else
    console.log('Score is evaluated as falsy');

// Step 7
let username: string = "";
if (username)
    console.log(`Username is available`);

if (Boolean(username) == false)
    console.log('Username is evaluated as falsy');
else
    console.log('Username is evaluated as truthy');

// Step 10
let isAdmin: boolean = false;
if (isAdmin)
    console.log('isAdmin is evaluated as truthy');
else
    console.log('isAdmin is evaluated as falsy');

if (isAdmin === false)
    console.log('isAdmin is false');


