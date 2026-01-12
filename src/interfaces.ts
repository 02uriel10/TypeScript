interface IdName{
    id: number;
    name: string;
}
const user: IdName = {
    id: 1,
    name: "John Dereer"
}
const user2: IdName = {
    id: 2,
    name: "Johnny Walker"
}
const users: IdName[]= [
    user,
    user2,
    {
        id: 3,
        name: "Jean Paul Gaultier"
    }
];
console.log(user);
console.log(user2);
console.log(users);