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
        $(this ).addClass( "ui-state-highlight" );
         $(this).find( "#bottomCard1");
          $(this ).html( "Dropped!" );
      }});
    $( "#card1" ).draggable();
    $( "#bottomCard2" ).droppable({
      drop: function( event, ui ) {
        $( this ).addClass( "ui-state-highlight" );
         $( this ).find( "#bottomCard2" );
          $( this ).html( "Dropped!" );
      }});
    $( "#card2" ).draggable();
    $( "#bottomCard3" ).droppable({
      drop: function( event, ui ) {
        $( this ).addClass( "ui-state-highlight" );
         $( this ).find( "#bottomCard3" );
          $( this ).html( "Dropped!" );
      }});
    $( "#card3" ).draggable();
    $( "#bottomCard4" ).droppable({
      drop: function( event, ui ) {
        $( this ).addClass( "ui-state-highlight" );
         $( this ).find( "#bottomCard4" );
          $( this ).html( "Dropped!" );
      }});
    $( "#card4" ).draggable();
    $( "#bottomCard5" ).droppable({
      drop: function( event, ui ) {
        $( this ).addClass( "ui-state-highlight" );
         $( this ).find( "#bottomCard5" );
          $( this ).html( "Dropped!" );
      }});
    $( "#card5" ).draggable();
    $( "#bottomCard6" ).droppable({
      drop: function( event, ui ) {
        $( this ).addClass( "ui-state-highlight" );
         $( this ).find( "#bottomCard6" );
          $( this ).html( "Dropped!" );
      }});
    $( "#card6" ).draggable();
    $( "#bottomCard7" ).droppable({
      drop: function( event, ui ) {
        $( this ).addClass( "ui-state-highlight" );
         $( this ).find( "#bottomCard7" );
          $( this ).html( "Dropped!" );
      }});
    $( "#card7" ).draggable();
    $( "#bottomCard8" ).droppable({
      drop: function( event, ui ) {
        $( this ).addClass( "ui-state-highlight" );
         $( this ).find( "#bottomCard8" );
          $( this ).html( "Dropped!" );
      }});
    $( "#card8" ).draggable();
    $( "#bottomCard9" ).droppable({
      drop: function( event, ui ) {
        $( this ).addClass( "ui-state-highlight" );
         $( this ).find( "#bottomCard9" );
          $( this ).html( "Dropped!" );
      }});
    $( "#card9" ).draggable();
    $( "#bottomCard10" ).droppable({
      drop: function( event, ui ) {
        $( this ).addClass( "ui-state-highlight" );
         $( this ).find( "#bottomCard10" );
          $( this ).html( "Dropped!" );
      }});


});