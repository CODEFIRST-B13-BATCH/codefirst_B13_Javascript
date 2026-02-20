const playerInfo = {
    id:10,
    name:"Sachin",
    style:"right-hand-batsman",
    team:"India"
}

const info = JSON.stringify(playerInfo);
localStorage.setItem("playerInfo", info );

const getPlayerInfo = localStorage.getItem("playerInfo");
console.log(JSON.parse(getPlayerInfo));




// const playerInfo = {
//     id: 10,
//     name: "Sachin",
//     style: "right-hand-batsman",
//     team: "India"
// };

// // convert object → string
// const info = JSON.stringify(playerInfo);
// localStorage.setItem("playerInfo", info);

// // retrieve and parse back to object
// const getPlayerInfo = localStorage.getItem("playerInfo");
// console.log(JSON.parse(getPlayerInfo));