	 //滚动图片导航按钮响应事件
	$("div.mui-indicator").click(function(){
		var index = $(this).index();
		$(this).addClass("mui-active").siblings().removeClass("mui-active");
		// var _node =$("div.mui-slider-item").eq(index+1);
		// _node.addClass("mui-active").siblings().removeClass("mui-active");
		mui(".mui-slider").slider().gotoItem(index);
	});