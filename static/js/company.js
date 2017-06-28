
			//加载执行
			$(function(){


				var _width = $("div.company-zz").width();
				var _htm = $("#listImg")[0].innerHTML;
				var _size =0;
				var _length=$("#listImg").find("img").length;

				setTimeout(function(){
					setInterval(function(){
						slider();
					},50);
					showMap();
				},100);
					
				//执行滚动
				function slider(){
					var w1 =$("#listImg").outerWidth();
					var lef =--$("#listImg").position().left;
					var ft =$("#listImg").find("li").eq(0).outerWidth();

					if((w1+lef)<_width){
						$("#listImg").append(_htm);
					}

					if(Math.abs(lef)>ft){
						$("#listImg").find("li").eq(0).remove();
						lef =5;
					}
					$("#listImg").css({"left":lef+"px"});
				}


				//地图标记显示地理位置
				function showMap(){
					var map = new BMap.Map("map");          	  			// 创建地图实例  
					var point = new BMap.Point(103.99087, 30.633123);  		// 创建点坐标  
					map.centerAndZoom(point, 15);                 			// 初始化地图，设置中心点坐标和地图级别 
									
					/*创建定位控件*/
					var geolocationControl = new BMap.GeolocationControl();
					
				    map.addControl(geolocationControl);  					//向地图添加定位控件
				    map.addControl(new BMap.NavigationControl({type: BMAP_NAVIGATION_CONTROL_ZOOM})); //添加放大缩小控件
				    map.addOverlay(new BMap.Marker(point));    				//添加标注


					map.enableScrollWheelZoom();							//启用地图鼠标滑轮缩放
				    var infoWindow = new BMap.InfoWindow(mapModel.innerHTML);   // 创建信息窗口对象 
				    map.openInfoWindow(infoWindow, point);      			// 打开信息窗口
				    $("#map").click(function(){
					    var infoWindow = new BMap.InfoWindow(mapModel.innerHTML);   // 创建信息窗口对象 
					    map.openInfoWindow(infoWindow, point);      			// 打开信息窗口
				    });
				}

				//查看招聘职位信息
				$("button.mui-btn").click(function(){
					var _href = $(this).attr("href");
					if(_href!="more"){
						var _html = $("#"+_href)[0].innerHTML;
						$("#diaContent").empty().append(_html);
						$("#dialog").css("display","table");
					}else{
						//location.href="招聘网址";
					}
				});

			});