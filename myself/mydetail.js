let myFriend = require('../myfriend/myfriend');

let aboutMe = {
    name: 'Adeoye temitope',
    age: 90,
    hobby: 'music and sporty games (pes,fifa)',
    complexion: 'dark',
    address: 'H20 ilero street'
}


function sayName() {
    return `My name is ${aboutMe.name}, i am ${aboutMe.age} years old. I'm a lover of ${aboutMe.hobby}. I'm a native of ifaki Ekiti. The name of my friend is ${myFriend.myFriendInfo.name}, he is ${myFriend.myFriendInfo.complexion} in complexion. He's a lover of God and ${myFriend.myFriendInfo.hobby}.`;

}
console.log(sayName());
module.exports.sayName = sayName;