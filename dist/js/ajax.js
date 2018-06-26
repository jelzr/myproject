"use strict";

/*function ajax(type,url,fnSucess,fnFail,data){
	//对于非必须参数的处理
	//考虑参数过多的情况
	xhr.open(type,url,true)
}*/
//{type:"get",url:"demo.php",fnSuccess:foo,fnFail:bar,data:data}
//data{username:"aaaa",password:1111}=>"username=aaaa&password=1111"
function ajax(obj) {

	var xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
	var str = "";
	if (obj.data) {
		for (var attr in obj.data) {
			str += attr + "=" + obj.data[attr] + "&";
		}
		str = str.replace(/&$/, "");
	}

	//避免传递的实参有小写的情形
	if (obj.type.toUpperCase() == "GET") {
		if (obj.data) {
			xhr.open("get", obj.url + "?" + str, true);
		} else {
			xhr.open("get", obj.url, true);
		}
		xhr.send();
	}
	if (obj.type.toUpperCase() == "POST") {
		xhr.open("post", obj.url, true);
		xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		xhr.send(str);
	}

	xhr.onreadystatechange = function () {
		if (xhr.readyState == 4) {
			if (xhr.status == 200) {
				var data = xhr.responseText;
				obj.fnSuccess(data);
			} else {
				obj.fnFail();
			}
		}
	};
}