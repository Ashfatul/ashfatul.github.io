// Typing animation
// document.addEventListener('DOMContentLoaded',function(event){
//     var dataText = [ "Diploma Engineer (Civil)", "Site Engineer", "Surveyor", "Estimator", "Front End Web Developer", "Freelancer", "SQA Engineer"];
//     function typeWriter(text, i, fnCallback) {
//       if (i < (text.length)) {
//        document.querySelector("h2.type-writer").innerHTML = text.substring(0, i+1) +'<span aria-hidden="true" class="cursor"></span>';
//         setTimeout(function() {
//           typeWriter(text, i + 1, fnCallback)
//         }, 100);
//       }
//       else if (typeof fnCallback == 'function') {
//         setTimeout(fnCallback, 1000);
//       }
//     }
//      function StartTextAnimation(i) {
//        if (typeof dataText[i] == 'undefined'){
//           setTimeout(function() {
//             StartTextAnimation(0);
//           }, 1000);
//        }
//       if (i < dataText[i].length) {
//        typeWriter(dataText[i], 0, function(){
//          StartTextAnimation(i + 1);
//        });
//       }
//     }
//     StartTextAnimation(0);
//   });

//   Typing animetion end