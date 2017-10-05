console.log('main');



window.onload = function() {
    Gifffer();
    backgroundSound();
}
function  backgroundSound() {
          var sound = document.getElementById("background");
          sound.play()
}
function chipSound() {
          var sound = document.getElementById("audio");
          sound.play()
}
function spinSound() {
          var sound = document.getElementById("roulette-spin");
          sound.play()
}
function clearBetSound() {
          var sound = document.getElementById("clear-bet");
          sound.play()
}
function winSound() {
          var sound = document.getElementById("win-sound");
          sound.play()
}

let theWin;
let amountOfTimes
////to get the winning number
const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}
////to generate the winning number
$( "#generate-number" ).click(function() {


  setTimeout(function(){
  $('#MAGICAL-NUMBER').text(getRandomInt(0, 36))
  theWin = winningNumber();
   },8000);
  spinSound();
});

/////to get the winning number
const winningNumber = () => {
	return parseInt($("#MAGICAL-NUMBER").text());
}



/// get an array of the bet numbers
const betNumbers = [];

$(".odd, .even, .zero").click(function( e ) {
	betNumbers.push(parseInt($(e.currentTarget).text()));
	console.log(parseInt($(e.currentTarget).text()));
	dan.balance --;
	   $('h5').text("Balance: " + dan.balance)  

    if(dan.balance <= -1){
         alert('you broke the game. you ran out of money. refresh the page.')
    };

  $('#report').text(betNumbers);
  produceChips();
});

const produceChips = () => {
  console.log('being called.')
  const $img = $('<img />');
  $img[0].src = 'https://www.pokerstore.nl/media/catalog/product/cache/5/image/650x/040ec09b1e35df139433887a97daa66f/d/o/dollar_poker_chips_4.png'
  $img.addClass('chip-icons')

  $('#balance').append($img)
  if(betNumbers.length === 5){
    $( ".chip-icons" ).remove();
    $('#balance').append($("<img src='http://dfwpokerparties.com/img/5DollarChip.png'>").addClass('chip-icons'))}
  if(betNumbers.length === 10){
    $( ".chip-icons" ).remove();
    $('#balance').append($("<img src='https://www.pokerstore.nl/media/catalog/product/cache/5/small_image/295x295/9df78eab33525d08d6e5fb8d27136e95/t/o/toernooi_chips_poker_10.png'>").addClass('chip-icons'))}
  if(betNumbers.length === 15){
    $( ".chip-icons" ).remove();
    $('#balance').append($("<img src='https://www.pokerstore.nl/media/catalog/product/cache/5/small_image/295x295/9df78eab33525d08d6e5fb8d27136e95/t/o/toernooi_chips_poker_10.png'>").addClass('chip-icons'))
    $('#balance').append($("<img src='http://dfwpokerparties.com/img/5DollarChip.png'>").addClass('chip-icons'))}

    if(betNumbers.length === 20){

    $( ".chip-icons" ).remove();
    $('#balance').append($("<img src='https://www.pokerstore.nl/media/catalog/product/cache/5/small_image/295x295/9df78eab33525d08d6e5fb8d27136e95/t/o/toernooi_chips_poker_10.png'>").addClass('chip-icons'))
    $('#balance').append($("<img src='https://www.pokerstore.nl/media/catalog/product/cache/5/small_image/295x295/9df78eab33525d08d6e5fb8d27136e95/t/o/toernooi_chips_poker_10.png'>").addClass('chip-icons'))}
             if(betNumbers.length === 25){
    $( ".chip-icons" ).remove();
    $('#balance').append($("<img src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/%2425_chip.svg/1000px-%2425_chip.svg.png'>").addClass('chip-icons'))}
}


/////this empties out the betNumbers array
const clearNumbers = () => {
  $( ".chip-icons" ).remove();
	betNumbers.length = 0

}

/////to seee if i won or lost and increment balance
const checkWinnings = () => {
	for(let i = 0; i < betNumbers.length; i++){
		if(betNumbers[i] === theWin){
			console.log(betNumbers[i] + " is a winning number")
			dan.balance += 36;
			amountOfTimes = countInArray(betNumbers, theWin)
			$('h5').text("Balance: " + dan.balance)
			$('#report').text("You won" + (35 * amountOfTimes))
		}
		else{
			console.log("sorry you didnt pick the winning number")
		}
	}
  $( ".chip-icons" ).remove();
}


////this is how i get hte amount of times the number pops out
const countInArray = (betNumbers, theWin) => {
    var count = 0;
    for (var i = 0; i < betNumbers.length; i++) {
        if (betNumbers[i] === theWin) {
            count++;
        }
    }
    return count
};






$('#spin-time').click(function (e) {
  checkWinnings();
  countInArray(betNumbers, theWin)
  clearNumbers();
  returnBorder();
  winSound();
});


$('#clear-bets').click(function (e) {
  clearBetSound();
  clearNumbers();
  $('#report').text(betNumbers);
  returnBorder();
});




class Player {
	constructor(){
		this.balance = 25
	}
}

const dan = new Player

$('h5').text("Balance: " + dan.balance)

///kinda lets people know whats clicked
$(".odd, .even, .zero").click(function (e) {
  $(this).css('border', '2px dashed white');
  chipSound();
})



const returnBorder = () => {
	$(".odd, .even").css('border', '2px solid green');
	$(".zero").css('border', '2px solid grey');		
}

































////drag chips

// $('#chip-1, #chip-5, #chip-10, #chip-25, #chip-100').mousedown(function(){
//    original = true;
// });

// $('#chip-1, #chip-5, #chip-10, #chip-25, #chip-100').draggable({
//     helper : "clone",
// });

// $( ".number" ).droppable({
//     drop: function( event, ui ) {
//         if(original){
//              ui.helper.removeClass('ui-draggable-dragging');
//              var newDiv = $(ui.helper).clone().removeClass('ui-draggable-dragging');
//              newDiv.draggable();
//              $(this).append(newDiv);
//              original = false;
//         }
//       }  
// });












