let theWin;
////to get the winning number
const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}
////to generate the winning number
$( "#generate-number" ).click(function() {
	$('#MAGICAL-NUMBER').text(getRandomInt(0, 36))
	theWin = winningNumber();
});

/////to get the winning number
const winningNumber = () => {
	return parseInt($("#MAGICAL-NUMBER").text());
}



/// get an array of the bet numbers
const betNumbers = [];

$(".number").click(function( e ) {
	betNumbers.push(parseInt($(e.currentTarget).text()));
	console.log(parseInt($(e.currentTarget).text()));
	dan.balance --;
	$('#balance').text(dan.balance)
});


/////this empties out the betNumbers array
const clearNumbers = () => {
	betNumbers.length = 0

}

/////to seee if i won or lost and increment balance
const checkWinnings = () => {
	for(let i = 0; i < betNumbers.length; i++){
		console.log(betNumbers[i])
		if(betNumbers[i] === theWin){
			console.log(betNumbers[i] + " is a winning number")
			dan.balance += 36;
			$('#balance').text(dan.balance)
		}
		else{
			console.log("sorry you didnt pick the winning number")
		}
	}
}

$('#spin-time').click(function (e) {
  checkWinnings();
  clearNumbers();
})




class Player {
	constructor(){
		this.balance = 25
	}
}

const dan = new Player

$('#balance').text(dan.balance)

////math
// 35:1 when the chip is on the actual number
// winnings = amountOfChips * 35 + amountOfChips

// 17:1 when the chip is on a half bet
// winnings = amountOfChips * 17 + amountOfChips

// 8:1 when the chip is on a corner bet
// winning = amountOfChips * 8 + amountOfChips

// 2:1 when the chip is on the row bet
// winning = amountOfChips * 3 + amountOfChips



///kinda lets people know whats clicked
$('.number').click(function (e) {
  $(this).css('border', '2px dashed white');
})








////drag chips

$('#chip-1, #chip-5, #chip-10, #chip-25, #chip-100').mousedown(function(){
   original = true;
});

$('#chip-1, #chip-5, #chip-10, #chip-25, #chip-100').draggable({
    helper : "clone",
});

$( ".number" ).droppable({
    drop: function( event, ui ) {
        if(original){
             ui.helper.removeClass('ui-draggable-dragging');
             var newDiv = $(ui.helper).clone().removeClass('ui-draggable-dragging');
             newDiv.draggable();
             $(this).append(newDiv);
             original = false;
        }
      }  
});












