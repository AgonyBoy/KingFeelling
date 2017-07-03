	 //滚动图片导航按钮响应事件
	$("div.mui-indicator").click(function(){
		var index = $(this).index();
		$(this).addClass("mui-active").siblings().removeClass("mui-active");
		// var _node =$("div.mui-slider-item").eq(index+1);
		// _node.addClass("mui-active").siblings().removeClass("mui-active");
		mui(".mui-slider").slider().gotoItem(index);
	});

	//添加回到顶部导航按钮
	$(window).scroll(function(){
		var _top =$(this).scrollTop();
		var _wd =$(this).width();
		if(_top > 1000 && _wd > 480){
			if($("a.nextop").length==0){$("body").append("<a href='#' class='nextop' title='回到顶部'><i class='kfl top0'></i></a>");}
		}else{
			$("a.nextop").remove();  //删除瞄点顶部按钮
		}
	});