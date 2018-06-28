//  ---购物车----------------------------------------------
$(function(){

		$.getJSON("http://datainfo.duapp.com/shopdata/getCar.php?callback=?",{userID:$.cookie("username")},function(data){
			//console.log(data);	
		var str = "";
		
		for(let i =0;i<data.length;i++){
			str += ` 
		<tr><td><input type="checkbox" class="goods_id" checked="checked"/></td><td><a	href="detail.html?id=${data[i].goodsID}" class="shop_title" data_id="${data[i].goodsID}"><img src="${data[i].goodsListImg}" alt="" />${data[i].goodsName}</a></td><td><p>颜色：石灰白</p><p>尺码：XL</p></td><td>${data[i].price}</td><td><span class="jian"> -  </span><input type="text" class="num" value="${data[i].number}" /><span class="add"> + </span>	</td><td class="price">${data[i].price}</td><td><dd><input type="button" name="" class="remove" value="删除" /></dd></td></tr>`
			
		}				
		$("#tbody").html(str); 	 
	
//购物车 增删改查----------------------------

//全选----------

			//全选选中时 其他都选中
			$("thead input").on("click",function(){
				$("tbody input.goods_id").prop("checked",$("thead input").prop("checked"));
				num();
			});
			
			//判断是否全选
			
			$("tbody input.goods_id").on("click",function(){
				//console.log($("tbody input.goods_id:checked").length);
				if($("tbody input.goods_id:checked").length == $("tbody input.goods_id").length){
				//console.log("aaa");	
				$("thead input").prop("checked",true);
			}else{				
				$("thead input").prop("checked",false);
				}
				num();
			});
			
		
			//判断数量
			num();
		function num(){
			var num = 0;
			var totalPrice =0 ;
			for(let i=0;i<$("tbody input.goods_id").length;i++){
				
				//console.log("aaa");
				if($("tbody input.goods_id").eq(i).prop("checked")){
					num += Number($(".num").eq(i).val());
					totalPrice += Number($(".num").eq(i).val())*Number($("tbody td.price").eq(i).html());
					//console.log(Number($("tbody td.price").eq(i).html()));
				}
				
			} 
			
			$("#shop_total").html(num);//购物车商品个数
			$(".zj_price").html(totalPrice);
			//console.log(num);
			//$(".dt_cart").html(num);
			//console.log($(".dt_cart"));
		}
				
//加减------------------------------	
		
	for(let i=0; i<$("tbody tr").length;i++){
		
		$("tbody tr").eq(i).find(".add").on("click",function(){
			//console.log("aa");
			var Num = $("tbody tr").eq(i).find(".num").val();
			Num++;
			//console.log(Num);
			$("tbody tr").eq(i).find(".num").val(Num);
			num(); 
			//console.log($("tbody tr").eq(i).find("input.num"));
			
			//后台更新------------
			var goodsid1 = $(this).parent().siblings().find("a").attr("data_id");
			//console.log($(this).parent().siblings().find("a"));
			$.get("http://datainfo.duapp.com/shopdata/updatecar.php",{userID:$.cookie("username"),goodsID:goodsid1,number:Num},function(data){
			if(data== 1){
				console.log("更新成功");
				//console.log(goodsid1);
				
			}else{
				console.log("更新失败")
			}
		})
	})
		
		$("tbody tr").eq(i).find(".jian").on("click",function(){
			var Num1 = $("tbody tr").eq(i).find(".num").val();
			//console.log("aa");
			Num1--;
			//console.log(Num);
			if(Num1 <=1){
				Num1=1;
			}
			$("tbody tr").eq(i).find(".num").val(Num1); 
			num();
			//后台更新--------------
			var goodsid2 = $(this).parent().siblings().find("a").attr("data_id");
			//console.log($(this).parent().siblings().find("a"));
			$.get("http://datainfo.duapp.com/shopdata/updatecar.php",{userID:$.cookie("username"),goodsID:goodsid2,number:Num1},function(data){
			if(data== 1){
				console.log("更新成功")
			}else{
				console.log("更新失败")
			}
		})
			
			
			
			//console.log($("tbody tr").eq(i).find("input.num"));
		})
		
//删除----------------------------------------------------
		$("tbody tr").eq(i).find(".remove").on("click",function(){
		var goodsid = $(this).parent().parent().siblings().find("a").attr("data_id");
		//console.log(goodsid);
		$.get("http://datainfo.duapp.com/shopdata/updatecar.php",{userID:$.cookie("username"),goodsID:goodsid,number:0},function(data){
			if(data== 1){
				console.log("更新成功")
			}else{
				console.log("更新失败")
			}
		})
			
		//DOM中删除
			$(this).parents("tr").remove();
			num();/**/
		
	})
		
		
		
		
}		

		
		
		
		
	


})



	
	
	
	
	
	
	
	
	
	
	
	

})
