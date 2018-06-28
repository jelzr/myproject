"use strict";

$(function () {
	//top
	$("#top_nav li.change").mouseover(function () {
		$(this).addClass("hover");
		$(this).find("ul").css("display", "block");
	});
	$("#top_nav li.change").mouseout(function () {
		$(this).removeClass("hover");
		$(this).find("ul").hide();
	});

	//账号登陆验证
	$("#lg_1").on("blur", function () {
		$("#lg_ass_xinxi").show();
		var val = $(this).val();
		var reg1 = /^[a-zA-Z]\w+@\w+(\.\w+)+$/;
		var reg2 = /^1(3|5|7|8)\d{9}$/;
		if (val == "" || val == null) {
			$("#lg_ass_xinxi").html("请输入账号");
		} else if (reg1.test(val) || reg2.test(val)) {
			$("#lg_ass_xinxi").html("正确!");
		} else {
			$("#lg_ass_xinxi").html("格式错误");
		}
	});
	$("#lg_2").on("blur", function () {

		var val = $(this).val();

		if (val == "" || val == null) {
			$("#lg_psw_xinxi").show();
			$("#lg_psw_xinxi").html("请输入密码");
		}
	});
	$("#lg_3").on("blur", function () {
		$("#lg_ass_xinxi").show();
		var val = $(this).val();
		var reg1 = /^1(3|5|7|8)\d{9}$/;
		if (val == "" || val == null) {
			$("#lg_ass_xinxi").html("请输入手机号");
		} else if (reg1.test(val)) {
			$("#lg_ass_xinxi").html("正确!");
		} else {
			$("#lg_ass_xinxi").html("格式错误");
		}
	});
	$("#lg_4").on("blur", function () {
		$("#lg_psw_xinxi").show();
		var val = $(this).val();
		if (val == "" || val == null) {
			$("#lg_psw_xinxi").html("请输入验证码");
		}
	});
	$("#lg_btn").on("click", function () {

		$.get("http://datainfo.duapp.com/shopdata/userinfo.php", { status: "login", userID: $("#lg_1").val(), passward: $("#lg_2").val() }, function (data) {
			data = JSON.parse(data);
			//console.log(data);
			if (data == 0) {
				$("#lg_ass_xinxi").html("用户名不存在");
			} else if (data == 2) {
				$("#lg_psw_xinxi").show();
				$("#lg_psw_xinxi").html("用户名或者密码错误");
			} else {
				$.cookie("username", data.userID, { expires: 7, path: "/" });
				location.href = "index.html";
			}
		});
	});

	//--------------------------------------------------------------
	//注册验证
	$("#rg_1").on("blur", function () {
		$("#rg_ass_xinxi").show();
		$("#rg_ass").css("border-color", "red");
		var val = $(this).val();
		var reg1 = /^1(3|5|7|8)\d{9}$/;
		if (val == "" || val == null) {
			$("#rg_ass_xinxi").html("请输入手机号");
		} else if (reg1.test(val)) {
			$("#rg_ass_xinxi").html("正确!");
		} else {
			$("#rg_ass_xinxi").html("格式错误");
		}
	});

	//#rg_psw_mobile1  #rg_ass,#rg_psw
	$("#rg_2").on("blur", function () {
		$("#rg_psw_xinxi").show();
		$("#rg_psw_mobile1").css("border-color", "red");
		var val = $(this).val();
		if (val == "" || val == null) {
			$("#rg_psw_xinxi").html("请输入验证码");
		}
	});
	$("#rg_3").on("blur", function () {
		$(".rgaa").show();
		$(this).parent().css("border-color", "red");
		var val = $(this).val();
		if (val == "" || val == null) {
			$(".rgaa").html("请输入验证码");
		}
	});
	$("#rg_4").on("blur", function () {
		$(".rgbb").show();
		$(this).parent().css("border-color", "red");
		var val = $(this).val();
		var reg = /\w{6,25}/;

		if (val == "" || val == null) {
			$(".rgbb").html("密码不能为空!");
		} else if (reg.test(val)) {
			$(".rgbb").html("正确!");
		} else {
			$(".rgbb").html("格式错误!");
		}

		$("#rg_5").on("blur", function () {
			$(".rgcc").show();
			$(this).parent().css("border-color", "red");
			var val1 = $(this).val();

			if (val1 == "" || val1 == null) {
				$(".rgcc").html("密码不能为空!");
			} else if (val === val1) {
				$(".rgcc").html("正确!");
			} else {
				$(".rgcc").html("两次输入不同!");
			}
		});
	});

	$("#rg_btn").on("click", function () {

		$.get("http://datainfo.duapp.com/shopdata/userinfo.php", { status: "register", userID: $("#rg_1").val(), passward: $("#rg_4").val() }, function (data) {
			data = JSON.parse(data);

			if (data == 0) {
				$("#rg_ass_xinxi").html("  用    户  名  重  名  !   !    !");
			} else if (data == 1) {
				location.href = "login_psw.html";
			} else {
				$("#rg_ass_xinxi").html("注册失败，请重试  !");
			}
		});
	});

	$("#xiala").on("click", function () {
		$("#xiala_a").show();
	});

	$("#mail").on("click", function () {
		$(".rg_remove").hide();
		$("#xiala_a").hide();
		$("#sj1").html("邮箱");
		$("#rg_1").attr("placeholder", "不建议填写Gmail、Hotmail、qq邮箱");
		$("#yzm").find("img").attr("src", "img/yzm1.png");
		$("#rg_form div.rg_b").css("border-color", "#e3e2e2");
		$("#rg_psw_mobile1").css("border-color", "#e3e2e2");
		$("#rg_psw_xinxi").hide();
		$("#rg_ass_xinxi").hide();
		$("#rg_1,#rg_2,#rg_3,#rg_4,#rg_5").val("");
		$("#rg_1").on("blur", function () {
			$("#rg_ass_xinxi").show();
			$("#rg_ass").css("border-color", "red");
			var val = $(this).val();
			var reg1 = /^[a-zA-Z]\w+@\w+(\.\w+)+$/;
			if (val == "" || val == null) {
				$("#rg_ass_xinxi").html("请输入邮箱");
			} else if (reg1.test(val)) {
				$("#rg_ass_xinxi").html("正确!");
			} else {
				$("#rg_ass_xinxi").html("格式错误");
			}
		});
		$("#lg_btn").on("click", function () {
			var val1 = $("#lg_1").val();
			var val2 = $("#lg_2").val();
			$.get("http://datainfo.duapp.com/shopdata/userinfo.php", { status: "register", userID: "val1", passward: "val2" }, function (data) {
				console.log(data);
				if (data == 0) {
					$("#rg_ass_xinxi").html("  用    户  名  重  名  !   !    !");
				} else if (data == 1) {
					location.href = "login_psw.html";
				} else {
					$("#lg_psw_xinxi").show();
					$("#rg_psw_xinxi").html("注册失败，请重试");
				}
				//			if(data==0){
				//				$("#lg_ass_xinxi").html("用 户 名 已 存 在  !  ! ");
				//				
				//			}else if(data==2){
				//				$("#lg_psw_xinxi").show();
				//				$("#lg_psw_xinxi").html("密码错误");  
				//			}
			});
		});
	});
	$("#sj").on("click", function () {
		$("#xiala_a").hide();
		$("#sj1").html("手机号");
		$("#yzm").find("img").attr("src", "img/yzm.png");
		$("#rg_1").attr("placeholder", "请输入你的手机号");
		$(".rg_remove").css("display", "block");
		$("#rg_form div.rg_b").css("border-color", "#e3e2e2");
		$("#rg_psw_mobile1").css("border-color", "#e3e2e2");
		$("#rg_psw_xinxi").hide();
		$("#rg_ass_xinxi").hide();
		$("#rg_1,#rg_2,#rg_3,#rg_4,#rg_5").val("");
	});
});