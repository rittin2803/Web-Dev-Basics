const modal = document.querySelector('.modal')
const loginBtn = document.querySelector('.login-btn')
const closeBtn = document.querySelector('.close')

loginBtn.addEventListener('click', openModal)
closeBtn.addEventListener('click', closeModal)
window.addEventListener('click', outsideClick)

function openModal() {
  modal.style.display = 'block'
}

function closeModal() {
  modal.style.display = 'none'
}

function outsideClick(e) {
  if (e.target == modal) {
    closeModal()
  }
}

let captchaText = document.querySelector('#captcha');
let userText = document.querySelector('#textBox');
let submit= document.querySelector('#submit');
let output = document.querySelector('#output');
let refreshButton = document.querySelector('#refresh');

let alphaNums = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
let emptyArr = [];
for(let i = 1; i <= 7; i++) {
	emptyArr.push(alphaNums[Math.floor(Math.random() * alphaNums.length)]);
}
captchaText.innerHTML = emptyArr.join('');

userText.addEventListener('keyup', function(e) {
	if(e.keyCode === 13) {
		if(userText.value === captchaText.innerHTML) {
			output.classList.add("greenText");
			output.innerHTML = "Correct!";
            location.replace("https://www.geeksforgeeks.org/");
		} else {
			output.classList.add("redText");
			output.innerHTML = "Incorrect, please try again";
			window.location.reload(3);
		}
	}
});

submit.addEventListener('click',  function() {
	if(userText.value === captchaText.innerHTML) {
		output.classList.add("greenText");
		output.innerHTML = "Correct!";
        location.replace("https://www.geeksforgeeks.org/");
	} else {
		output.classList.add("redText");
		output.innerHTML = "Incorrect, please try again";
		window.location.reload(3);
	}
});

refreshButton.addEventListener('click', function () {
	userText.value = "";
	let refreshArr = [];
	for(let j = 1; j <= 7; j++) {
		refreshArr.push(alphaNums[Math.floor(Math.random() * alphaNums.length)]);
	}
	captchaText.innerHTML = refreshArr.join('');
	output.innerHTML = "";
});

submit.addEventListener('keyup', function(e) {
	if(e.keyCode === 13) {
	if(userText.value === captchaText.innerHTML) {
		console.log("correct!");
		output.classList.add("greenText");
		output.innerHTML = "Correct!";
        location.replace("https://www.geeksforgeeks.org/");
	} else {
		output.classList.add("redText");
		output.innerHTML = "Incorrect, please try again";
		window.location.reload(3);
	}
	}
});
