"use strict";

$(function () {

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
		var val1 = $("#lg_1").val();
		var val2 = $("#lg_2").val();
		$.get("http://datainfo.duapp.com/shopdata/userinfo.php", { status: "login", userID: "val1", passward: "val2" }, function (data) {
			if (data == 0) {
				$("#lg_ass_xinxi").html("用户名已存在");
			} else if (data == 2) {
				$("#lg_psw_xinxi").show();
				$("#lg_psw_xinxi").html("密码错误");
			}
		});
	});

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
		console.log("aa");
		var val1 = $("#rg_1").val();
		var val2 = $("#rg_4").val();
		$.get("http://datainfo.duapp.com/shopdata/userinfo.php", { status: "login", userID: "val1", passward: "val2" }, function (data) {
			if (data == 0) {
				$("#rg_ass_xinxi").html("此 账 户 已 注 册 !!!");
			} else if (data == 2) {
				$("#rg_ass_xinxi").html("出错");
			}
		});
	});

	$("#xiala").on("click", function () {
		$("#xiala_a").css("display", "block");
	});
	$("#mail").on("click", function () {
		$(".rg_remove").css("display", "none");
		$("#xiala_a").hide();
		$("#sj1").html("邮箱");
	});
	$("#sj").on("click", function () {
		$(".rg_remove").css("display", "block");
		$("#xiala_a").css("display", "none");
	});
});