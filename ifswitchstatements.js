let yourScore = 2550;
let highScore = 2375;

function checkScore() {
  if (yourScore > highScore) {
    console.log(`You have the Highscore`);
    alert(`HIGHSCORE`);
    highScore = yourScore;
    console.log(highScore);
  }
}
checkScore();

let phoneNumber = `9059005`;
let house;

function checkPhone() {
  switch (phoneNumber) {
    case `9059981`:
      house = "Mike & Sarah";
      break;
    
      case `9051806`:
      house = "Shop";
      break;
    
      case `9059346`:
      house = "Burkes";
      break;

      case `9059005`:
      house = "Home";
  }
 
  
}
checkPhone();
console.log(house);
