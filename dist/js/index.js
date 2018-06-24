"use strict";

/*$.ajax({
	type:"get",
	url:"http://datainfo.duapp.com/shopdata/getGoods.php",
	async:true,
	success:function(data){
		console.log(data);
	}
});*/
$(function () {
	$("#top_nav li.change").mouseover(function () {
		//console.log("aaa");
		$(this).addClass("hover");
		$(this).find("ul").css("display", "block");
	});
	$("#top_nav li.change").mouseout(function () {
		//console.log("aaa");
		$(this).removeClass("hover");
		$(this).find("ul").hide();
	});
	/*$.ajax({
 type:"get",
 url:"http://datainfo.duapp.com/shopdata/getclass.php",
 async:true,
 success:function(data){
 	console.log(data);
 }
 });*/
	//轮播
	var oBanner = document.getElementById("banner_a");
	var oUl = document.getElementById("_ul");
	var aList = oUl.children;
	var len = aList.length;
	var oImg1 = aList[0].offsetWidth;
	oUl.style.width = oImg1 * len + "px";
	var oUl1 = document.getElementById("_ul1");
	var aList1 = oUl1.children;
	var i = 0;
	var time = setInterval(function () {
		move();
	}, 4000);

	function move() {
		i++;
		if (i == len) {
			oUl.style.left = 0;
			i = 1;
		}
		if (i == -1) {
			oUl.style.left = -oImg1 * (len - 1) + "px";
			i = len - 2;
		}
		for (var j = 0; j < aList1.length; j++) {
			aList1[j].className = "";
		}
		if (i == len - 1) {
			aList1[0].className = "hover";
		} else {
			aList1[i].className = "hover";
		}
		startMove(oUl, { left: -oImg1 * i });
	}

	var _loop = function _loop(k) {
		aList1[k].onmouseover = function () {
			i = k - 1;
			move();
		};
	};

	for (var k = 0; k < aList1.length; k++) {
		_loop(k);
	}

	oBanner.onmouseover = function () {
		clearInterval(time);
	};
	oBanner.onmouseout = function () {
		time = setInterval(function () {
			move();
		}, 2000);
	};
});