$(document).ready(function(){
	console.log("javascript running");

    $("#image1").on('click', function(){
    	$("#text").text("You clicked on the christmas bell!");
    })
   $("#image2").on("click", function(){
    	$("#text").text("You clicked on Santa Claus!");
    })
      $("#image3").on("click", function(){
    	$("#text").text("You clicked on the gift box!");
    })
});