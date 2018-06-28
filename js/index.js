
$(function(){   
		$("#top_nav li.change").mouseover(function(){
		$(this).addClass("hover");
		$(this).find("ul").css("display","block");
	});
	$("#top_nav li.change").mouseout(function(){
		$(this).removeClass("hover");
		$(this).find("ul").hide();
	});
	
	//轮播
	var oBanner = document.getElementById("banner_a");
			var oUl = document.getElementById("_ul");	
	if(oUl!==null){
		var aList = oUl.children;
			var len = aList.length;
			var oImg1 = aList[0].offsetWidth;
			oUl.style.width = oImg1 * len + "px";
			var oUl1 = document.getElementById("_ul1");
			var aList1 = oUl1.children;
			var i = 0;
			var time = setInterval(function(){
				move();
			},4000)
			
			
			function move(){
				i++;
				if(i == len ){
					oUl.style.left = 0;
					i=1;
				}
				if(i == -1){
					oUl.style.left = -oImg1 * (len-1) + "px";
					i=len-2;
				}
				for(var j= 0;j<aList1.length;j++){
					aList1[j].className = "";
				}
				if (i==len-1){
					aList1[0].className ="hover";
				}else{
					aList1[i].className = "hover";
				}
				startMove(oUl,{left:-oImg1*i})
			}
			
			for(let k=0;k<aList1.length;k++){
				aList1[k].onmouseover = function(){
					i=k-1;
					move();
				}	
			}
		
			oBanner.onmouseover = function (){
				clearInterval(time);
			}
			oBanner.onmouseout = function(){
				time = setInterval(function(){
					move()
				},3000)
			}
		$("#main1_lb_1").on("click",function(){
			$(".main1_lunbo1,.main1_lunbo2").css("left","-980px")
		})
		$("#main1_lb_2").on("click",function(){
			$(".main1_lunbo1,.main1_lunbo2").css("left","-0px")
		})
}
			




//main6
$("#main6_bottom #main6_left").find("li").hover(function(){
	$(this).addClass('hover').siblings().removeClass("hover");
	var $index = $(this).index();
	
	$(".main6_right").eq($index).addClass("hover").siblings().removeClass("hover");
});

$("#dg_link_1_box  a:gt(23)").css("border-bottom","1px solid #eee"); 


//搜索框

/*$("#search").on("input",function(){
	var val = $(this).val();
	console.log(val);
	$.getJSON("http://datainfo.duapp.com/shopdata/selectGoodes.php?callback=?",{selectText:"val",pageCode:"0",linenumber:"20"},function(data){
			console.log(data);
			
	}); 

})*/


$("#search").on("input",function(){
	$("#search_list").show();
	
	var val = $(this).val();
	$("#sousuo_1").click(function(){
		$(this).attr("href","http://www.yougou.com/sr/searchKey.sc?keyword="+val+"")
	})
	
	
	var url = "https://suggest.taobao.com/sug?code=utf-8&q="+val+"&k=1&area=c2c&bucketid=13"
      $.ajax(url, {
        type:"post", 
        dataType: 'jsonp',
        crossDomain: true,
        success: function(data) {
        	let oTxt = document.getElementById("search");
			let oList = document.getElementById("search_list");
          	
          	let data1 = data.result;
					let str = "";
					for(let i in data1){
						str += "<li><a href='http://www.yougou.com/sr/searchKey.sc?keyword="+data1[i][0]+"'>"+data1[i][0]+"</a></li>";
						oList.innerHTML = str;
			
					}	 
				
				
				  }
				}) 
     
      	    $("#search").on("blur",function(){
      	    	$("#search_list li").on("click",function(){
      	    		var value = $(this).text();
      	    		console.log(value);
      	    		$("#search").val(value);
      	    		$("#search_list").hide();
      	    	})
			        
			});  

	});  


//商品分类
$.get("http://datainfo.duapp.com/shopdata/getclass.php",function(data){
	var data = JSON.parse(data);
	//console.log(data);
	var str ="";
	var str1 = "";
	for(var i = 0;i<data.length;i++){
		//console.log(data[i].className);	  
		str+='<li><a href="shop_list.html?classID='+data[i].classID+'">'+data[i].className+'</a></li>'
		  
	}    
	for(var i =data.length-1;i>=0;i--){	  
		str1+='<li><a href="shop_list.html?classID='+data[i].classID+'">'+data[i].className+'</a></li>'
		  
	} 
		
		$(".list_first:odd").find("ul").html(str1);
		$(".list_first:even").find("ul").html(str);
		
	$(".list_first").on("mouseover",function(){ 
		$(this).addClass("list_hover").siblings().removeClass("list_hover");
		$(this).find(".bgt").css("background-position-x","-53px").parents(".list_first").siblings().find(".bgt").css("background-position-x","0px");
		  
		/*$(".list_first:even").find("ul").html(str);
		$(".list_first:odd").find("ul").html(str1);*/
		$(this).find("ul").show(); 
		
		$(this).on("mouseout",function(){
			$(this).find("ul").hide();
		})
	})
	$(".list_first").on("mouseout",function(){
		$(this).find(".bgt").css("background-position-x","-52px");
	})

 
})  


//首页-----------------------------------------------


var classid = location.search.split("=")[1];
$.getJSON("http://datainfo.duapp.com/shopdata/getGoods.php?callback=?",{classID:classid},function(data){
	//console.log(data);
	var str = "";
	
	for(var i=5;i<9;i++){
		str += `<li><a  href="shop_list.html?classID="${data[i].goodsID}"><img src='${data[i].goodsListImg}' /></a></li>`
		
	} 
	//console.log(str); 
	$(".m1_2").html(str);
	
	
})













})



