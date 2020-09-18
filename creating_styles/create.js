function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

var loadFile = function(event) {
	var image = document.getElementById('output');
	image.src = URL.createObjectURL(event.target.files[0]);
};

function image(){
	var v = output.src;
	var h = textone.value;
	document.getElementById('firstone').src=v;
	document.getElementById('paraone').innerHTML=h;
	document.getElementById('textone').value="";
	document.getElementById('file').value=null;
	//output.parentNode.removeChild(output);
	document.getElementById('output').src="";
}
