var buttonLength = document.querySelectorAll(".drum").length;

document.addEventListener("keydown", function (event) {
   music(event.key);
   buttonAnimation(event.key);

})

for (let i = 0; i < buttonLength; i++) {
   var buttonS = document.querySelectorAll(".drum")[i];
   buttonS.addEventListener("click", function () {
      let eventS = this.innerHTML;
      music(eventS);
      buttonAnimation(eventS);


   })
}
function music(eventS) {

   switch (eventS) {
      case 'w':
         var song = new Audio("sounds/tom-1.mp3");
         song.play();
         break;
      case 'a':
         var song = new Audio("sounds/tom-2.mp3");
         song.play();
         break;
      case 's':
         var song = new Audio("sounds/tom-3.mp3");
         song.play();
         break; case 'd':
         var song = new Audio("sounds/tom-4.mp3");
         song.play();
         break; case 'j':
         var song = new Audio("sounds/kick-bass.mp3");
         song.play();
         break; case 'k':
         var song = new Audio("sounds/crash.mp3");
         song.play();
         break; case 'l':
         var song = new Audio("sounds/snare.mp3");
         song.play();
         break;

      default:
         break;
   }
}
function buttonAnimation(currentKey) {
   var activatedButton=document.querySelector("."+currentKey);
   activatedButton.classList.add("pressed")
   setTimeout(() => {
      activatedButton.classList.remove("pressed")
   }, 100);
}
