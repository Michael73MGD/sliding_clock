var size = 86;
var columns = Array.from(document.getElementsByClassName('column'));
var d = void 0,
    c = void 0;
var classList = ['visible', 'close', 'far', 'far', 'distant', 'distant'];
var use24HourClock = false;

var marble_array = [];
var marble_count = 0;



function padClock(p, n) {
	return p + ('0' + n).slice(-2);
}

function getClock() {
	d = new Date();
	return [use24HourClock ? d.getHours() : d.getHours() % 12 || 12, d.getMinutes(), d.getSeconds()].reduce(padClock, '');
}

function getClass(n, i2) {
	return classList.find(function (class_, classIndex) {
		return Math.abs(n - i2) === classIndex;
	}) || '';
}



function create_marble(){

	const marble = document.createElement('span');
	id = marble_count.toString();
	marble.innerHTML = '<span id = "marble'+id+'" class="dot"></span>';
	//	Format: x_velocity, y_velocity, x_acc, y_acc
	marble_array[marble_count] = [0, 100, 0, 0]
	marble_count+=1;
	const marbles = document.getElementById('marbles');
	marbles.appendChild(marble);
}

function move_marbles(){
	//for(var i = 0; i<marble_count; i++){
		var i =0;
		var id = 'marble'+i.toString();
		marble = document.getElementById(id);
		y_movement = marble_array[i][1];
		x_movement = marble_array[i][0];

		marble.style.transform = 'translate('+x_movement+'px,'+y_movement+'px)';
	//}
}











create_marble();
var i = 0;
id = 'marble'+i.toString();
marble = document.getElementById(id);
y_movement = marble_array[i][1];
x_movement = marble_array[i][0];

marble.style.transform = 'translate('+x_movement+'px,'+y_movement+'px)';

move_marbles();

var loop = setInterval(function () {
	c = getClock();

	columns.forEach(function (ele, i) {
		//move_marbles();
		var n = +c[i];
		var offset = -n * size;
		ele.style.transform = 'translateY(calc(50vh + ' + offset + 'px - ' + size / 2 + 'px))';
		Array.from(ele.children).forEach(function (ele2, i2) {
			ele2.className = 'num ' + getClass(n, i2);
		});
	});
}, 200 + Math.E * 10);