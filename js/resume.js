var content1 = document.querySelector(".content1");
var nav = document.querySelector(".nav");
var skill = document.querySelector(".skill");
var height = document.body.clientHeight;
var state = true;		
var btn = document.querySelector("#bt");
var _menu = document.querySelector("._menu");
var _menu1 = document.querySelector("._menu1");
var _li = document.querySelectorAll("._li a");
window.onscroll = function(){
	//content1 距离上边框的距离
	var _menuTop = _menu.offsetTop - window.scrollY;
	var _top = content1.offsetTop - window.scrollY;	
	var _skill = skill.offsetTop - window.scrollY;
	if(_top<=0){				
		nav.style.position = "fixed";
		nav.style.top = 0;				
	}else{				
		nav.style.position = "";	
	}

	if(_menuTop <= 80){
		_menu1.style.position = "fixed";
		_menu1.style.top = "80px";
	}else{
		_menu1.style.position = "";
	}
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

function getCanvas(id,num,num_id){//canvas id,画圆百分比,中间数字百分比id
	var percent = document.querySelector(num_id);
	var cvs = document.querySelector(id);
	var ctx = cvs.getContext("2d");//拿到画笔
	var _num = num/100 * 360;
	var per = 0;
	var index = 0;			
	ctx.lineWidth = 10;
	ctx.strokeStyle = "red";
	var sid = setInterval(function(){
		if(_num<=index){					
			clearInterval(sid);
		}else{					
			ctx.clearRect(0,0,240,240);//开始 结束坐标
			ctx.beginPath();
			ctx.arc(190,80,60,Math.PI/180 * - 90,Math.PI/180 * (index - 90),false);
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

// $('.VivaTimeline').vivaTimeline();
btn.onclick=function(){
	if(_menu.style.visibility == "hidden" || _menu.style.visibility == ""){
		_menu.style.visibility = "visible";
		console.log(_menu.style.visibility);
	}else{
		_menu.style.visibility = "hidden";
		console.log(_menu.style.visibility);
	}	
}
_li.forEach(function(c,i){
	c.onclick=function(){
		_menu.style.visibility = "hidden";
	}
})

