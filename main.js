// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!



document.addEventListener("DOMContentLoaded", () => {
  document.addEventListener('Click', mimicServerCall)
  .then(response => response.json())
  .then(like => )
  .catch(() => {
     const removeHidden = document.getElementsByClassName('hidden');
     removeHidden = document.remove('hidden');
  document.getElementById("modal-message").innerHTML = err.message;
  setTimeout(() => removeHidden.innerHTML('hidden') , 3000);  

})
})



//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
