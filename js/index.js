var navparent = document.querySelector(".nav-parent");
var nav = document.querySelector(".nav");
var skill = document.querySelector(".skill");
var height = document.body.clientHeight;
var state = true;
window.onscroll = function(){
	console.log(123);
	var _top = navparent.offsetTop - window.scrollY;
	var _skill = skill.offsetTop - window.scrollY;
	console.log(_top);
	if(_top<=0){				
		nav.style.position = "fixed";
		nav.style.top = 0;				
	}else{				
		nav.style.position = "";			
	}
	// 自动加载canvas百分比
	if(_skill<height && state == true){
		getCanvas("#canvas1",75,"#num1");				
		getCanvas("#canvas2",80,"#num2");
		getCanvas("#canvas3",85,"#num3");
		getCanvas("#canvas4",80,"#num4");
		getCanvas("#canvas5",90,"#num5");
		state = false;
	}
}
$('.goto').click(function () {
    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
    return false;
});

//canvas
function getCanvas(id,num,num_id){//canvas id,画圆百分比,中间数字百分比id
	var percent = document.querySelector(num_id);
	var cvs = document.querySelector(id);
	var ctx = cvs.getContext("2d");//拿到画笔
	var _num = num/100 * 360;
	var per = 0;
	var index = 0;			
	ctx.lineWidth = 15;
	ctx.strokeStyle = "red";
	var sid = setInterval(function(){
		if(_num<=index){					
			clearInterval(sid);
		}else{					
			ctx.clearRect(0,0,400,400);//开始 结束坐标
			ctx.beginPath();
			ctx.arc(160,80,60,Math.PI/180 * - 90,Math.PI/180 * (index - 90),false);
			ctx.stroke();
			index+=3;
			if(per==num){
				per = num;
			}else{
				per++;
			}
		}
		percent.textContent = per + "%";				
	},1000/60);
}

$(document).ready(function(e){
    $('.cntl').cntl();
});