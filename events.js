console.log("this is guinea pig");

var message = document.getElementById("output-target");
var articleItems = document.getElementsByClassName("article-section");

console.log("article-section", articleItems);

function handleClick(event){
  console.log(event);
  var elementText = event.target.innerHTML;
  message.innerHTML = "You clicked on the " + elementText;
}
for (var i = 0; i < articleItems.length; i++){
  articleItems.item(i).addEventListener("click", handleClick);
}

var header = document.getElementById("page-header");

function handleHeaderMouseOver(event){
  message.innerHTML = "You moved your mouse over the header";
}

function handleHeaderMouseOut(event){
  message.innerHTML = "You left me";
}

header.addEventListener("mouseover", handleHeaderMouseOver);
header.addEventListener("mouseout", handleHeaderMouseOut);

var inputArea = document.getElementById("keypress-input");

inputArea.addEventListener("keyup", function(event){
  console.log("event", event);
  message.innerHTML = event.target.value;
});

var littleHog = document.getElementById("guinea-pig");

document.getElementById("add-color")
  .addEventListener("click", function(){
    littleHog.classList.toggle("blue");
  });

  document.getElementById("make-large")
  .addEventListener("click", function(){
    littleHog.classList.toggle("large");
  });

  document.getElementById("add-border")
  .addEventListener("click", function(){
    littleHog.classList.toggle("addBorder");
  });

  document.getElementById("add-rounding")
  .addEventListener("click", function(){
    littleHog.classList.toggle("rounded");
  });










