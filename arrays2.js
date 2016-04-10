var nestedFriends = ["Kasia", "Monika", ["Irek", "Piotr"], "Paweł"];

console.log(nestedFriends[2]); 

nestedFriends[2].push("Bart"); // dodajemy Barta do zagnieżdżonej tablicy (która jest 3 elementem, na ost. miejsce)
console.log(nestedFriends);
console.log(nestedFriends[2]); // ["Kasia", "Monika", ["Irek", "Piotr", "Bart"], "Paweł"]


