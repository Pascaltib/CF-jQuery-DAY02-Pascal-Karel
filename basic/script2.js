$(document).ready(function(){
  for (i=1 ; i < 5 ; i++){
	 $("#santa"+i).on("click", function(){
      $(this).hide();

   })}
});