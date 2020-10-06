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




   for (i = 0; i < 10; i++) {
   		$(".topcardSlots").append(`<div class="topCard" id="card${i}">${values[i]}</div>`)
   		
   }

   var shuffle = document.querySelector('.topcardSlots');
for (var i = shuffle.children.length; i >= 0; i--) {
    shuffle.appendChild(shuffle.children[Math.random() * i | 0]);
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