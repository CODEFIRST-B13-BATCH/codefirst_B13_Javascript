// storage;


const playerInfo = {
    id:10,
    name:'Sachin',
    style: "right-hand batsman",
    team: "India"
}

localStorage.setItem("playerInfo", JSON.stringify(playerInfo));
const getPlayerInfo = localStorage.getItem("playerInfo");
console.log(JSON.parse(getPlayerInfo));