var peopleArray = JSON.parse(people);

$("body").append('<main></main>');
$("main").css({
    "display":"flex",
    "flex-flow": "row wrap",
    "justify-content": "center"
});
for (let index = 0; index < peopleArray.length; index++) {
    $("main").append(`<div id="div${index}">
    <img id="image${index}" src=${peopleArray[index].image}.jpg></img>
    <br>
    <label>${peopleArray[index].name}</label><br>
    <div id= "name${index}"></div>
    <div id= "hobby${index}"</div>
    </div>`);
}
for (let i = 0; i < peopleArray.length; i++) {
    $("#image"+i).on("click", function(){
        $("#name"+i).html(`<label>${peopleArray[i].relation}</label>`);
        $("#hobby"+i).html(`<label>${peopleArray[i].hobby}</label>`);
    })
}
for (let i = 0; i < peopleArray.length; i++) {
    $("#image"+i).on("dblclick", function(){
        $("#name"+i).html(``);
        $("#hobby"+i).html(``);
    })
}


//<label>${peopleArray[index].relation}</label>


/*
for (let index = 0; index < peopleArray.length; index++) {
    if (peopleArray[index].close_family) {
        $(`#div${index}`).css("background-color","blue");
    } else {
        $(`#div${index}`).css("background-color","pink");
    }   
}*/

/*
var boxes = $("main > div");
for (let index = 0; index < peopleArray.length; index++) {
    if (peopleArray[index].close_family) {
        boxes[index].style.backgroundColor = "blue";
    } else {
        boxes[index].style.backgroundColor = "pink";
    }   
}
*/