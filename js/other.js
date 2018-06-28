$(function(){
	
	  
//列表和详情的商品列表
$("#qbfl").on("mouseover",function(){ 
		$(".list_xq").show();
	$(".list_xq").on("mouseover",function(){
		$(".list_xq").show();
		$(".list_xq").on("mouseout",function(){
	
		$(".list_xq").hide();
	})	
	})  

})


//商品列表 

/*$.getJSON("http://datainfo.duapp.com/shopdata/getGoods.php",{},function(data){
	console.log(data);
})
*/
	


//获取商品或列表-------------------------------------------------

var classid = location.search.split("=")[1];
$.getJSON("http://datainfo.duapp.com/shopdata/getGoods.php?callback=?",{classID:classid},function(data){
	//console.log(data);
	var str = "";
	//console.log(JSON.parse(data));
	for(var i=0;i<data.length;i++){
		
		str += "<div class='sp_1'><a href='detail.html?id="+data[i].goodsID+"'><img src='"+data[i].goodsListImg+"' /><span><a href='detail.html?id="+data[i].goodsID+"'>"+data[i].goodsName+"</a></span><strong>￥"+data[i].price+"</strong></a></div>"      
					
	} 
	//console.log(str); 
	$("#sp_list").html(str);
	
	
})








		
			
  
//商品详情获取-------------------------------------


var goodsid = location.search.split("=")[1];
					$.getJSON("http://datainfo.duapp.com/shopdata/getGoods.php?callback=?",{goodsID:goodsid},function(data){
						//console.log(data);
						
						var str = `<img src="${data[0].goodsListImg}" class="zoom_img"/>`;
						
						var str1 = `<h1><a href="">${data[0].goodsName}</a></h1><strong>￥${data[0].price}</strong>`;
						
						$(".dt_img").append(str);						
						$(".dt_img1").html(str);
						$("#cart_1").before(str1);
				
						$("#cart_2").click(function(){
							$.get("http://datainfo.duapp.com/shopdata/updatecar.php",{userID:$.cookie("username"),goodsID:data[0].goodsID},function(data){
								console.log(data);
								if(data==0){
									$("#cart_1").find("span").text("添加失败");
								}
								if(data == 1){
									
									$("#cart_1").find("span").text("添加成功");
								}
							})
						})

//商品详情放大镜-------------------------------获取DOM元素需要放到回调函数里面

		
			var oBox = document.getElementById("dt_left"),
				oBox1 = document.getElementsByClassName("dt_img")[0],
				oZoom = document.getElementById("zoom"),
				oBox2 = document.getElementsByClassName("dt_img1")[0],
				//oImg = document.getElementsByClassName("zoom_img")[0];
 
				oImg = oBox2.children[0];
				//console.log(oBox1,oBox2);
			oBox1.onmouseover = function(){
				oZoom.style.display = "block";
				oBox2.style.display = "block";
			}
			oBox1.onmousemove = function (e){ 
				
				var evt = e || event;
				var x = evt.pageX  - oBox.offsetLeft;
				var y = evt.pageY - oBox.offsetTop;
				
				var _left = x - oZoom.offsetWidth/2;
				var _top = y - oZoom.offsetHeight/2;
				if(_left<=0){
					_left = 0;
				}
				if(_top<=0){
					_top=0;
				}
				if(_left>=oBox1.offsetWidth-oZoom.offsetWidth){
					_left = oBox1.offsetWidth-oZoom.offsetWidth;
				}
				if(_top>= oBox1.offsetHeight-oZoom.offsetHeight){
					
					_top= oBox1.offsetHeight-oZoom.offsetHeight;
				}
				oZoom.style.left = _left +"px";
				oZoom.style.top = _top + "px";
				
				oImg.style.left = -oZoom.offsetLeft/oBox1.offsetWidth*oImg.offsetWidth +"px";
				oImg.style.top = -oZoom.offsetTop/oBox1.offsetHeight*oImg.offsetHeight +"px";
				
			
			} 
			
			oBox1.onmouseout = function (){
				oZoom.style.display = "none";
				oBox2.style.display = "none";
			}
	
		
	});

/**/





	 
})