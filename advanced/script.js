$(document).ready(function(){
		$(".card").css({
			"width":"40px",
			"height":"70px",
			"margin":"1px",
			"position":"relative",
			"border":"1px solid black",
			"border-style":"dashed",
			"border-radius":"5px"
		})

		

		let values = [
			  "1",
			  "2",
			  "3",
			  "4",
			  "5",
			  "6",
			  "7",
			  "8",
			  "9",
			  "10",
];

let randomCards = [];

    for (let x = 1; x < 11; x++) {
    	var r = (Math.floor(Math.random()*values.length));
    	randomCards.push(values[r]);
    	values.splice(r,1);
    }

   for (i = 0; i < 10; i++) {
   		$(".topcardSlots").append(`<div class="topCard" id="card${i}">${randomCards[i]}</div>`)
   		
   }

   $(".topCard").css({
			"width":"40px",
			"height":"70px",
			"margin":"1px",
			"position":"relative",
			"border":"1px solid black",
			"background-color":"grey",
			"border-radius":"5px"
		})



    $( "#card0" ).draggable();
    $( "#bottomCard1" ).droppable({
      drop: function( event, ui ) {
        $( this ).addClass( "ui-state-highlight" );
         $( this ).find( "#bottomCard1" );
          $( this ).html( "Dropped!" );
      }});


});