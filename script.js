const characters = [
    { name: "Tanjiro Kamado", img: "images/tanjiro.jpg" },
    { name: "Yuji Itadori", img: "images/yuji.jpg" },
    { name: "Satoru Gojo", img: "images/gojo.jpg" },
    { name: "Loid Forger", img: "images/loid.jpg" },
    { name: "Denji", img: "images/denji.jpg" }
];

function pickCharacter() {
    const input = document.getElementById("charNumber").value;
    const index = parseInt(input) - 1; // Convert 1-5 to 0-4 array index

    if (index >= 0 && index < characters.length) {
        const character = characters[index];
        document.getElementById("result").innerText = "You are: " + character.name + "!";
        document.getElementById("characterImage").src = character.img;
        document.getElementById("characterImage").alt = character.name;
    } else {
        alert("Please enter a number between 1 and 5!");
    }
}
