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
}; // window.onload= function(){
//     var mySwiper = new mySwiper('.swiper-container',{
//         direction:'vertical',
//         loop:true,
//         pagination:'.swiper-pagination',
//         nextButtn:'.swiper-button-next',
//         preButtn:'.swiper-button-grew',
//         scrollbar:'.swiper-scrollbar',
//     })
// } 轮播图


var num = 1;
var content = document.querySelector('.content_car');

window.onload = function () {
  ajax({
    url: "../cars.json",
    type: "get",
    success: function success(data) {
      var json = JSON.parse(data);

      for (var a = 0; a < json.length; a++) {
        console.log(json[a]);
        var str = "\n            <ul>\n                <h3>".concat(json[a].series, "</h3>\n                <li><a href=\"#\"><img src=\"").concat(json[a].img, "\" alt=\"\"></a></li>\n                <li>\u5EFA\u8BAE\u96F6\u552E\u4EF7\uFF1A").concat(json[a].price, "</li>\n                <li><span>\u4E86\u89E3\u66F4\u591A</span></li>\n                <li><span>\u4E2A\u6027\u5316\u914D\u7F6E</span></li>\n            </ul> ");
        content.append(str);
      }
    }
  });
};