//Counter Start
const counters = document.querySelectorAll('.counter');
const speed = 500; // The lower the slower

counters.forEach(counter => {
	const updateCount = () => {
		const target = +counter.getAttribute('data-target');
		const count = +counter.innerText;

		// Lower inc to slow and higher to slow
		const inc = target / speed;

		// console.log(inc);
		// console.log(count);

		// Check if target is reached
		if (count < target) {
			// Add inc to count and output in counter
			counter.innerText = count + inc;
			// Call function every ms
			setTimeout(updateCount, 1);
		} else {
			counter.innerText = target;
		}
	};

	updateCount();
});
//Counter Completed
//BlurScreen Start
myBlurFunction = function(state) {
    
    var containerElement = document.getElementById('main_container');
    var overlayEle = document.getElementById('overlay');

    if (state) {
        overlayEle.style.display = 'block';
        containerElement.setAttribute('class', 'blur');
    } else {
        overlayEle.style.display = 'none';
        containerElement.setAttribute('class', null);
    }
};
//BlurScreen Completed
//Edit Start 
function myFunction11()  {
	var v = ta.value;
	document.getElementById('p11').innerHTML=v;
}
//Edit Finish
//Calc for Progress Start
var m=100000;
var c=350000;
var a;
var col;
col=Math.floor(c/m);
c=c-col*m;
a=100*(c/m);
//Calc for Progress Completed
//Stars Start
if(col==1){
	document.getElementById('progress-value').style.background='red';
	document.getElementById('one').classList.add("checked1");
}
if(col==2){
	document.getElementById('progress-value').style.background='blue';
	document.getElementById('one').classList.add("checked1");
	document.getElementById('two').classList.add("checked2");
}
if(col==3){
	document.getElementById('progress-value').style.background='green';
	document.getElementById('one').classList.add("checked1");
	document.getElementById('two').classList.add("checked2");
	document.getElementById('three').classList.add("checked3");
}
if(col==4){
	document.getElementById('progress-value').style.background='yellow';
	document.getElementById('one').classList.add("checked1");
	document.getElementById('two').classList.add("checked2");
	document.getElementById('three').classList.add("checked3");
	document.getElementById('four').classList.add("checked4");
}
if(col>=5){
	document.getElementById('progress-value').style.background='pink';
	document.getElementById('one').classList.add("checked1");
	document.getElementById('two').classList.add("checked2");
	document.getElementById('three').classList.add("checked3");
	document.getElementById('four').classList.add("checked4");
	document.getElementById('five').classList.add("checked5");
	a=100
}
//Stars End
//Progress Start
// if(a>0 && a<=10){
// 	document.getElementById('progress-value').style.width ='0%';
// }
// if(a>10 && a<=20){
// 	document.getElementById('progress-value').style.width ='10%';
// }
// if(a>20 && a<=30){
// 	document.getElementById('progress-value').style.width ='20%';
// }
// if(a>30 && a<=40){
// 	document.getElementById('progress-value').style.width ='30%';
// }
// if(a>40 && a<=50){
// 	document.getElementById('progress-value').style.width ='40%';
// }
// if(a>50 && a<=60){
// 	document.getElementById('progress-value').style.width ='50%';
// }
// if(a>60 && a<=70){
// 	document.getElementById('progress-value').style.width ='60%';
// }
// if(a>70 && a<=80){
// 	document.getElementById('progress-value').style.width ='70%';
// }
// if(a>80 && a<=90){
// 	document.getElementById('progress-value').style.width ='80%';
// }
// if(a>90 && a<=100){
// 	document.getElementById('progress-value').style.width ='90%';
// }
// if(a==100){
// 	document.getElementById('progress-value').style.width ='100%';
// }
var elem = document.getElementById("progress-value");
  var width = 1;
  var id = setInterval(frame, 40);
  function frame() {
    if (width >= a) {
      clearInterval(id);
    } else {
      width++;
	  elem.style.width = width + '%';
	  elem.innerHTML = width * 1  + '%';
    }
  }
//Progress End

