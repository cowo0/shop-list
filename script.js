var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var liList = document.querySelectorAll("li");



function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
	li.addEventListener("click", addLineThrough);
	addDelete(li);
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function addLineThrough() {
	this.classList.toggle("done");
}

// ADDING DELETE BUTTON

function addDelete (el) {
	var delButton = document.createElement("button");
	var text = document.createTextNode("Delete")
	delButton.appendChild(text);
	delButton.addEventListener("click", deleteLi);
	el.appendChild(delButton);
}

function deleteLi () {
	this.parentNode.remove();
}

// LINE THROUGH LOOP

for (var i = 0; i < liList.length; i++) {
	liList[i].addEventListener("click", addLineThrough);
	addDelete(liList[i]);
}

// CALLS

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);



