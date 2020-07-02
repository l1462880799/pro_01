"use strict";

var curindex = 0;
var maxlen = document.getElementById("banner").getElementsByTagName("li").length - 1;
var timer = null;
var width = 486;
setTimeout(change_auto(), 3000);

function change_auto() {
  if (curindex < maxlen) {
    curindex++;
    get_next();
  } else {
    curindex = 0;
    get_reset();
  }
}

function get_next() {
  var totalbanner = document.getElementById("banner");
  totalbanner.style.marginLeft = "-" + width * curindex + "px";
  totalbanner.style.transition = 0.3 + "s";
}

function get_reset() {
  var totalbanner = document.getElementById("banner");
  totalbanner.style.marginLeft = "0px";
  totalbanner.style.transition = "0s";
} // 轮播图


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