"use strict";

var pinpai = document.querySelector(".wrap-left li:nth-child(2)");
var chexin = document.querySelector(".wrap-left li:nth-child(3)");
var xinwen = document.querySelector(".wrap-left li:nth-child(4)");
var fuwu = document.querySelector(".wrap-left li:nth-child(5)");
var gongju = document.querySelector(".wrap-left li:nth-child(6)");
var pinpai_ex = document.querySelector(".wrap_left_01");
var chexing_ex = document.querySelector(".wrap_left_02");
var xinwen_ex = document.querySelector(".wrap_left_03");
var fuwu_ex = document.querySelector(".wrap_left_04");
var gongju_ex = document.querySelector(".wrap_left_05");

pinpai.onmouseover = function () {
  pinpai_ex.style.display = "flex";
  console.log("这里通过");
};

pinpai_ex.onmouseleave = function () {
  pinpai_ex.style.display = "none";
}; // 品牌


chexin.onmouseover = function () {
  chexing_ex.style.display = "flex";
};

chexin.onmouseleave = function () {
  chexing_ex.style.display = "none";
}; // 车型


xinwen.onmouseover = function () {
  xinwen_ex.style.display = "flex";
};

xinwen.onmouseleave = function () {
  xinwen_ex.style.display = "none";
}; //新闻


fuwu.onmouseover = function () {
  fuwu_ex.style.display = "flex";
};

fuwu.onmouseleave = function () {
  fuwu_ex.style.display = "none";
}; //服务


gongju.onmouseover = function () {
  gongju_ex.style.display = "flex";
};

gongju.onmouseleave = function () {
  gongju_ex.style.display = "none";
}; //工具
//登录


var user = document.querySelector("#username");
var tel = document.querySelector("#phone_num");
var check = document.querySelector('#chk');
var btn = document.querySelector('#btn1');

btn.onclick = function () {
  if (user.value == "" || tel.value == "") {
    return alert("名字或电话号码不能为空");
  }

  if (!check.checked) {
    return alert("请阅读相关隐私条例");
  }

  ajax({
    url: "../login.php",
    type: "get",
    data: {
      user: user.value,
      tel: tel.value
    },
    success: function success(data) {
      var json = JSON.parse(data);
      console.log(json);
    }
  });

  if (user === "xiaoming" && tel === "88888888") {
    location.href = '../html/index.html';
  } else {
    alert("提交申请失败，您未有试驾资格");
  }
};