"use strict";
//菜单下拉图片
$(".header-nav .nav-ul .menu_li").hover(function(){
    $(this).children("div").addClass("showlist");
},function(){
    $(this).children("div").removeClass("showlist");
})
//搜索框焦点
$("#search").focus(function(){
    $("#search").css("border","1px solid #ff6700");
    $("#search-btn").css("border","1px solid #ff6700");
   $(".hot-words").hide();
   $(".word-list").show();
})
$("#search").blur(function(){
    $("#search").css("border","1px solid #F0F0F0");
    $("#search-btn").css("border","1px solid #F0F0F0");
    $(".hot-words").show();
    $(".word-list").hide();
})

//判断搜索框是否有值
$("#search").blur(function() {
    var value = $(this).val();
    value = $.trim(value);
    if (value == '') {
        $(".hot-words").css("display","block");
        return false;
    }else{
      $(".hot-words").css("display","none");
      return false;
    };
})

//导航列表右拉菜单
$("#menu-list").children().hover(function(){
    $(this).css("background","#ff6700");
    $(this).children(".children").show();
},function(){
    $(this).css("background","none");
    $(this).children(".children").hide();
})
$(".cart-menu").hover(function(){
    $(this).show();
},function(){
    $(this).css("background","none");
    $(this).children(".children").hide();
})
//轮播图
  $(function() {
  //小圆点
  var $btn = $('.slider-pager i');
  var now = 0;

  $btn.on('click',function() {
    now = $(this).index();
    tab();
  });


  function tab() {
    $btn.removeClass('active');
    $('.slider-wrap a').stop().fadeOut(50);
    $btn.eq(now).addClass('active');
    $('.slider-wrap a').eq(now).stop().show();
  }

  function prev() {
    now--;  //-1
    if(now == -1) {
      now = $('.slider-wrap a').length - 1;
    }
    tab();
  }
  function next() {
    now++;
    if(now == $('.slider-wrap a').length) {
      now = 0;
    }
    tab();
  }
  //左右按钮
  $('.slider-prev').on('click',prev);
  $('.slider-next').on('click',next);

  //自动轮播
  var time = null;
  var time = setInterval(next, 3000);

  //鼠标放上去,停止
  $('.slider-wrap').on('mouseover',function() {
    clearInterval(time);
  });
  $('.slider-wrap').on('mouseout',function() {
    time = setInterval(next, 3000);
  });

});
//明星产品按钮点击
function btnStyleChang(boxx,num,arrow){
	$(boxx + " .goods-list").css("margin-left",num+"px");
	$(boxx + " .more a").removeClass("disabled");
	$(boxx + arrow).addClass("disabled");
}
$("#xmstar .goods-left").click(function(){
  btnStyleChang("#xmstar","0",".goods-left");
})
$("#xmstar .goods-right").click(function(){
  btnStyleChang("#xmstar ","-1240",".goods-right");
})
//为你推荐
$("#recommend .goods-left").click(function(){
  btnStyleChang("#recommend ","0",".goods-left");
})
$("#recommend .goods-right").click(function(){
  btnStyleChang("#recommend ","-1240",".goods-right");
})


//明星产品图片切换
var ulArray = new Array("0px","-1240px");
var ii = 1;

$('#xmstar .goods-list').css("margin-left","0px");
ulChange();

function ulChange(){
	ii = 1 - ii;
	$("#xmstar .goods-list").css("margin-left",ulArray[ii]);
	$("#xmstar .more a").removeClass("disabled");
	if(ii==0){
		$("#xmstar .goods-left").addClass("disabled");
	}else{
		$("#xmstar .goods-right").addClass("disabled");
	}
	setTimeout(ulChange, 9000);
}

//产品评论
$(".page-main .list-main li").hover(function(){
	$(this).children(".review-wrapper").css("height", "80px");
	$(this).children(".review-wrapper").css("opacity", "1");
},function(){
	$(this).children(".review-wrapper").css("height", "0px");
	$(this).children(".review-wrapper").css("opacity", "0");
});

function tablist(box){
	$(box + " .more li").hover(function(){
	var index = $(this).index();
	 $(this).addClass("tab-active").siblings().removeClass("tab-active");
	 $(box + " .main-wrapper").find("ul").eq(index).show().siblings().hide();
	})
}
tablist("#homeelec");

tablist("#smart");

//明星产品按钮点击
function liChange(box,num,arrow,maxMargin){
var liIndex = 0;
var linum = $(box + " .box-wr").children("li").length;

	$(box + " .controls" + arrow).click(function(){
		var leftnum =  parseInt($(box).find(".box-wr").css("margin-left"));
		var  allnum = leftnum + num;

		var liActive = $(box).find(".active").index();
		//小于0则为右按钮
		if(maxMargin < -1){
			liActive++;
			if(liActive < linum-1){
				$(box + " .pagers li").removeClass("active");
				$(box + " .pagers li").eq(liActive).addClass("active");
				allnum = leftnum + num;
				$(box + " .box-wr").css("margin-left",allnum+"px");
			}else{
				$(box + " .pagers li").removeClass("active");
				$(box + " .pagers li").eq(linum-1).addClass("active");
				$(box + " .controls a").removeClass("eno");
		  		$(box + " .controls .ctrl-right").addClass("eno");
		  		$(box + " .box-wr").css("margin-left",maxMargin+"px");
			}
		}else{
			liActive--;
			if(liActive < linum-1  && liActive > 0){
				$(box + " .pagers li").removeClass("active");
				$(box + " .pagers li").eq(liActive).addClass("active");
				$(box + " .box-wr").css("margin-left",allnum+"px");
			}else{
				$(box + " .pagers li").removeClass("active");
				$(box + " .pagers li").eq(0).addClass("active");
				$(box + " .controls a").removeClass("eno");
		  		$(box + " .controls .ctrl-left").addClass("eno");
		  		$(box + " .box-wr").css("margin-left","0px");
			}
		}
	})

	$(box + " .pagers li").click(function(){
		var liActive = $(this).index();
		var marginNum = -296
		var limar = liActive*marginNum;
		$(box + " .box-wr").css("margin-left",limar+"px");
		$(box + " .pagers li").removeClass("active");
		$(this).addClass("active");
	})
}
liChange(".tushu",-296," .ctrl-right",-592);
liChange(".tushu",296," .ctrl-left",0);

liChange(".zhuti",-296," .ctrl-right",-888);
liChange(".zhuti",296," .ctrl-left",0);

liChange(".youxi",-296," .ctrl-right",-592);
liChange(".youxi",296," .ctrl-left",0);

liChange(".yingyong",-296," .ctrl-right",-888);
liChange(".yingyong",296," .ctrl-left",0);

// 视频
function videoShow(box,vi){
  $(box).click(function(){
    $(".bg-pop").css("display","block");
    $(vi).css("display","block");
  })
}
videoShow(".videoa",".video-a");
videoShow(".videob",".video-b");
videoShow(".videoc",".video-c");
videoShow(".videod",".video-d");

$(".playv").click(function(){
  $(this).nextAll(".videoimg").css("display","none");
  $(this).css("display","none");
  $(this).nextAll(".videocrt").trigger("play");
})
$(".pop-close").click(function(){
  $(".bg-pop").css("display","none");
  $(".pop").css("display","none");
  $(".videocrt").trigger("pause");
})
