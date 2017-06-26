
				var _wow = new WOW({		//初始化滚动条动画参数
					boxClass:"anm",
					animatedClass:"animated",
					offset:0,
					mobile:true,
					live:true,
					callback:function(box){
						
					},
					scrollContainer:null
				});


				/*加载执行*/
	            $(function() {

	            	_wow.init();									//初始化滚动条动画触发
	            	//mui("#slider").slider({interval: 15000});	//设置自动滚动banner

	                particlesJS("canvasView", {					//canvas动态背景绘画
	                    "particles": {
	                        "number": {
	                            "value": 50,
	                            "density": {
	                                "enable": true,
	                                "value_area": 800
	                            }
	                        },
	                        "color": {
	                            "value": "#fff"
	                        },
	                        "shape": {
	                            "type": "circle",
	                            "stroke": {
	                                "width": 0,
	                                "color": "#000000"
	                            },
	                            "polygon": {
	                                "nb_sides": 7
	                            },
	                            "image": {
	                                "src": "img/github.svg",
	                                "width": 100,
	                                "height": 100
	                            }
	                        },
	                        "opacity": {
	                            "value": 0.5,
	                            "random": false,
	                            "anim": {
	                                "enable": false,
	                                "speed": 1,
	                                "opacity_min": 0.5,
	                                "sync": false
	                            }
	                        },
	                        "size": {
	                            "value": 4,
	                            "random": true,
	                            "anim": {
	                                "enable": false,
	                                "speed": 40,
	                                "size_min": 4,
	                                "sync": false
	                            }
	                        },
	                        "line_linked": {
	                            "enable": true,
	                            "distance": 150,
	                            "color": "#65aae2",
	                            "opacity": 0.4,
	                            "width": 2
	                        },
	                        "move": {
	                            "enable": true,
	                            "speed": 3,
	                            "direction": "none",
	                            "random": true,
	                            "straight": false,
	                            "out_mode": "out",
	                            "bounce": false,
	                            "attract": {
	                                "enable": false,
	                                "rotateX": 600,
	                                "rotateY": 1200
	                            }
	                        }
	                    },
	                    "interactivity": {
	                        "events": {
	                            "onhover": {
	                                "enable": false
	                            },
	                            "onclick": {
	                                "enable": false
	                            }
	                        }
	                    },
	                    "retina_detect": true
	                });

	            });
