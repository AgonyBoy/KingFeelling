function generateUid(e) {
	function t() {
		return (65536 * (1 + Math.random()) | 0).toString(16).substring(1)
	}
	var i = e || "-";
	return t() + t() + i + t() + i + t() + i + t() + i + t() + t() + t()
}
function setCookie(e, t) {
	var i = new Date;
	i.setTime(i.getTime() + 864e5), document.cookie = e + "=" + t + ";expires=" + i.toUTCString() + ";domain=datagrand.com"
}
function getCookie(e) {
	var t = document.cookie.match("(^|;) ?" + e + "=([^;]*)(;|$)");
	return t ? t[2] : null
}
function hexToRgb(e) {
	var t = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
	e = e.replace(t, function(e, t, i, a) {
		return t + t + i + i + a + a
	});
	var i = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
	return i ? {
		r: parseInt(i[1], 16),
		g: parseInt(i[2], 16),
		b: parseInt(i[3], 16)
	} : null
}
function clamp(e, t, i) {
	return Math.min(Math.max(e, t), i)
}
function isInArray(e, t) {
	return t.indexOf(e) > -1
}
var dgLazyLoad;
!
function(e) {
	function t(e, t) {
		var i = [],
			a = [];
		if (t) {
			i = document.querySelectorAll(e);
			for (var n = 0; n < i.length; n++) a.push(i[n]);
			return a
		}
		return document.querySelector(e)
	}
	function i(e) {
		var i, a = document.documentElement.clientHeight;
		return "string" == typeof e && (e = t(e)), i = e.getBoundingClientRect().top, i + a / 3 < 0
	}
	function a(e) {
		var i, a = document.documentElement.clientHeight;
		return "string" == typeof e && (e = t(e)), i = e.getBoundingClientRect().top, i < a + 700
	}
	function n(e, a) {
		var s = "dg-hide",
			r = null,
			o = [];
		e.length > a && (e[a] instanceof Array ? e[a].forEach(function(e) {
			o.push(t(e))
		}) : "object" == typeof e[a] && "mutli" == e[a].type ? o = t(e[a].class, !0) : r = t(e[a]), o.length > 0 && o[0].classList.contains(s) ? (o.forEach(function(e) {
			e.classList.remove(s), i(e) || e.classList.add("fadeInUp", "animated")
		}), setTimeout(function() {
			n(e, ++a)
		}, 500)) : r && r.classList.contains(s) && (r.classList.remove(s), i(r) || r.classList.add("fadeInUp", "animated"), setTimeout(function() {
			n(e, ++a)
		}, 300)))
	}
	e.animateTrigger = function() {
		arguments.length > 0 && n(arguments, 0)
	}, e.ifInScreen = function(e) {
		var i = t(e).getBoundingClientRect().top,
			a = document.documentElement.clientHeight;
		return a / 3 * 2 > i
	}, e.lazyLoadImgs = function(e) {
		for (var t = [], i = 0; i < e.length; i++) t.push(e[i]);
		t.forEach(function(e) {
			!e.getAttribute("src") && a(e) && e.setAttribute("src", e.getAttribute("lazy-load-src"))
		})
	}
}(dgLazyLoad || (dgLazyLoad = {}));
var pJS = function(e, t) {
		var i = document.querySelector("#" + e + " > .particles-js-canvas-el");
		this.pJS = {
			canvas: {
				el: i,
				w: i.offsetWidth,
				h: i.offsetHeight
			},
			particles: {
				number: {
					value: 400,
					density: {
						enable: !0,
						value_area: 800
					}
				},
				color: {
					value: "#fff"
				},
				shape: {
					type: "circle",
					stroke: {
						width: 0,
						color: "#ff0000"
					},
					polygon: {
						nb_sides: 5
					},
					image: {
						src: "",
						width: 100,
						height: 100
					}
				},
				opacity: {
					value: 1,
					random: !1,
					anim: {
						enable: !1,
						speed: 2,
						opacity_min: 0,
						sync: !1
					}
				},
				size: {
					value: 20,
					random: !1,
					anim: {
						enable: !1,
						speed: 20,
						size_min: 0,
						sync: !1
					}
				},
				line_linked: {
					enable: !0,
					distance: 100,
					color: "#fff",
					opacity: 1,
					width: 1
				},
				move: {
					enable: !0,
					speed: 2,
					direction: "none",
					random: !1,
					straight: !1,
					out_mode: "out",
					bounce: !1,
					attract: {
						enable: !1,
						rotateX: 3e3,
						rotateY: 3e3
					}
				},
				array: []
			},
			interactivity: {
				detect_on: "canvas",
				events: {
					onhover: {
						enable: !0,
						mode: "grab"
					},
					onclick: {
						enable: !0,
						mode: "push"
					},
					resize: !0
				},
				modes: {
					grab: {
						distance: 100,
						line_linked: {
							opacity: 1
						}
					},
					bubble: {
						distance: 200,
						size: 80,
						duration: .4
					},
					repulse: {
						distance: 200,
						duration: .4
					},
					push: {
						particles_nb: 4
					},
					remove: {
						particles_nb: 2
					}
				},
				mouse: {}
			},
			retina_detect: !1,
			fn: {
				interact: {},
				modes: {},
				vendors: {}
			},
			tmp: {}
		};
		var a = this.pJS;
		t && Object.deepExtend(a, t), a.tmp.obj = {
			size_value: a.particles.size.value,
			size_anim_speed: a.particles.size.anim.speed,
			move_speed: a.particles.move.speed,
			line_linked_distance: a.particles.line_linked.distance,
			line_linked_width: a.particles.line_linked.width,
			mode_grab_distance: a.interactivity.modes.grab.distance,
			mode_bubble_distance: a.interactivity.modes.bubble.distance,
			mode_bubble_size: a.interactivity.modes.bubble.size,
			mode_repulse_distance: a.interactivity.modes.repulse.distance
		}, a.fn.retinaInit = function() {
			a.retina_detect && window.devicePixelRatio > 1 ? (a.canvas.pxratio = window.devicePixelRatio, a.tmp.retina = !0) : (a.canvas.pxratio = 1, a.tmp.retina = !1), a.canvas.w = a.canvas.el.offsetWidth * a.canvas.pxratio, a.canvas.h = a.canvas.el.offsetHeight * a.canvas.pxratio, a.particles.size.value = a.tmp.obj.size_value * a.canvas.pxratio, a.particles.size.anim.speed = a.tmp.obj.size_anim_speed * a.canvas.pxratio, a.particles.move.speed = a.tmp.obj.move_speed * a.canvas.pxratio, a.particles.line_linked.distance = a.tmp.obj.line_linked_distance * a.canvas.pxratio, a.interactivity.modes.grab.distance = a.tmp.obj.mode_grab_distance * a.canvas.pxratio, a.interactivity.modes.bubble.distance = a.tmp.obj.mode_bubble_distance * a.canvas.pxratio, a.particles.line_linked.width = a.tmp.obj.line_linked_width * a.canvas.pxratio, a.interactivity.modes.bubble.size = a.tmp.obj.mode_bubble_size * a.canvas.pxratio, a.interactivity.modes.repulse.distance = a.tmp.obj.mode_repulse_distance * a.canvas.pxratio
		}, a.fn.canvasInit = function() {
			a.canvas.ctx = a.canvas.el.getContext("2d")
		}, a.fn.canvasSize = function() {
			a.canvas.el.width = a.canvas.w, a.canvas.el.height = a.canvas.h, a && a.interactivity.events.resize && window.addEventListener("resize", function() {
				a.canvas.w = a.canvas.el.offsetWidth, a.canvas.h = a.canvas.el.offsetHeight, a.tmp.retina && (a.canvas.w *= a.canvas.pxratio, a.canvas.h *= a.canvas.pxratio), a.canvas.el.width = a.canvas.w, a.canvas.el.height = a.canvas.h, a.particles.move.enable || (a.fn.particlesEmpty(), a.fn.particlesCreate(), a.fn.particlesDraw(), a.fn.vendors.densityAutoParticles()), a.fn.vendors.densityAutoParticles()
			})
		}, a.fn.canvasPaint = function() {
			a.canvas.ctx.fillRect(0, 0, a.canvas.w, a.canvas.h)
		}, a.fn.canvasClear = function() {
			a.canvas.ctx.clearRect(0, 0, a.canvas.w, a.canvas.h)
		}, a.fn.particle = function(e, t, i) {
			if (this.radius = (a.particles.size.random ? Math.random() : 1) * a.particles.size.value, a.particles.size.anim.enable && (this.size_status = !1, this.vs = a.particles.size.anim.speed / 100, a.particles.size.anim.sync || (this.vs = this.vs * Math.random())), this.x = i ? i.x : Math.random() * a.canvas.w, this.y = i ? i.y : Math.random() * a.canvas.h, this.x > a.canvas.w - 2 * this.radius ? this.x = this.x - this.radius : this.x < 2 * this.radius && (this.x = this.x + this.radius), this.y > a.canvas.h - 2 * this.radius ? this.y = this.y - this.radius : this.y < 2 * this.radius && (this.y = this.y + this.radius), a.particles.move.bounce && a.fn.vendors.checkOverlap(this, i), this.color = {}, "object" == typeof e.value) if (e.value instanceof Array) {
				var n = e.value[Math.floor(Math.random() * a.particles.color.value.length)];
				this.color.rgb = hexToRgb(n)
			} else void 0 != e.value.r && void 0 != e.value.g && void 0 != e.value.b && (this.color.rgb = {
				r: e.value.r,
				g: e.value.g,
				b: e.value.b
			}), void 0 != e.value.h && void 0 != e.value.s && void 0 != e.value.l && (this.color.hsl = {
				h: e.value.h,
				s: e.value.s,
				l: e.value.l
			});
			else "random" == e.value ? this.color.rgb = {
				r: Math.floor(256 * Math.random()) + 0,
				g: Math.floor(256 * Math.random()) + 0,
				b: Math.floor(256 * Math.random()) + 0
			} : "string" == typeof e.value && (this.color = e, this.color.rgb = hexToRgb(this.color.value));
			this.opacity = (a.particles.opacity.random ? Math.random() : 1) * a.particles.opacity.value, a.particles.opacity.anim.enable && (this.opacity_status = !1, this.vo = a.particles.opacity.anim.speed / 100, a.particles.opacity.anim.sync || (this.vo = this.vo * Math.random()));
			var s = {};
			switch (a.particles.move.direction) {
			case "top":
				s = {
					x: 0,
					y: -1
				};
				break;
			case "top-right":
				s = {
					x: .5,
					y: -.5
				};
				break;
			case "right":
				s = {
					x: 1,
					y: -0
				};
				break;
			case "bottom-right":
				s = {
					x: .5,
					y: .5
				};
				break;
			case "bottom":
				s = {
					x: 0,
					y: 1
				};
				break;
			case "bottom-left":
				s = {
					x: -.5,
					y: 1
				};
				break;
			case "left":
				s = {
					x: -1,
					y: 0
				};
				break;
			case "top-left":
				s = {
					x: -.5,
					y: -.5
				};
				break;
			default:
				s = {
					x: 0,
					y: 0
				}
			}
			a.particles.move.straight ? (this.vx = s.x, this.vy = s.y, a.particles.move.random && (this.vx = this.vx * Math.random(), this.vy = this.vy * Math.random())) : (this.vx = s.x + Math.random() - .5, this.vy = s.y + Math.random() - .5), this.vx_i = this.vx, this.vy_i = this.vy;
			var r = a.particles.shape.type;
			if ("object" == typeof r) {
				if (r instanceof Array) {
					var o = r[Math.floor(Math.random() * r.length)];
					this.shape = o
				}
			} else this.shape = r;
			if ("image" == this.shape) {
				var c = a.particles.shape;
				this.img = {
					src: c.image.src,
					ratio: c.image.width / c.image.height
				}, this.img.ratio || (this.img.ratio = 1), "svg" == a.tmp.img_type && void 0 != a.tmp.source_svg && (a.fn.vendors.createSvgImg(this), a.tmp.pushing && (this.img.loaded = !1))
			}
		}, a.fn.particle.prototype.draw = function() {
			function e() {
				a.canvas.ctx.drawImage(r, t.x - i, t.y - i, 2 * i, 2 * i / t.img.ratio)
			}
			var t = this;
			if (void 0 != t.radius_bubble) var i = t.radius_bubble;
			else var i = t.radius;
			if (void 0 != t.opacity_bubble) var n = t.opacity_bubble;
			else var n = t.opacity;
			if (t.color.rgb) var s = "rgba(" + t.color.rgb.r + "," + t.color.rgb.g + "," + t.color.rgb.b + "," + n + ")";
			else var s = "hsla(" + t.color.hsl.h + "," + t.color.hsl.s + "%," + t.color.hsl.l + "%," + n + ")";
			switch (a.canvas.ctx.fillStyle = s, a.canvas.ctx.beginPath(), t.shape) {
			case "circle":
				a.canvas.ctx.arc(t.x, t.y, i, 0, 2 * Math.PI, !1);
				break;
			case "edge":
				a.canvas.ctx.rect(t.x - i, t.y - i, 2 * i, 2 * i);
				break;
			case "triangle":
				a.fn.vendors.drawShape(a.canvas.ctx, t.x - i, t.y + i / 1.66, 2 * i, 3, 2);
				break;
			case "polygon":
				a.fn.vendors.drawShape(a.canvas.ctx, t.x - i / (a.particles.shape.polygon.nb_sides / 3.5), t.y - i / .76, 2.66 * i / (a.particles.shape.polygon.nb_sides / 3), a.particles.shape.polygon.nb_sides, 1);
				break;
			case "star":
				a.fn.vendors.drawShape(a.canvas.ctx, t.x - 2 * i / (a.particles.shape.polygon.nb_sides / 4), t.y - i / 1.52, 2 * i * 2.66 / (a.particles.shape.polygon.nb_sides / 3), a.particles.shape.polygon.nb_sides, 2);
				break;
			case "image":
				if ("svg" == a.tmp.img_type) var r = t.img.obj;
				else var r = a.tmp.img_obj;
				r && e()
			}
			a.canvas.ctx.closePath(), a.particles.shape.stroke.width > 0 && (a.canvas.ctx.strokeStyle = a.particles.shape.stroke.color, a.canvas.ctx.lineWidth = a.particles.shape.stroke.width, a.canvas.ctx.stroke()), a.canvas.ctx.fill()
		}, a.fn.particlesCreate = function() {
			for (var e = 0; e < a.particles.number.value; e++) a.particles.array.push(new a.fn.particle(a.particles.color, a.particles.opacity.value))
		}, a.fn.particlesUpdate = function() {
			for (var e = 0; e < a.particles.array.length; e++) {
				var t = a.particles.array[e];
				if (a.particles.move.enable) {
					var i = a.particles.move.speed / 2;
					t.x += t.vx * i, t.y += t.vy * i
				}
				if (a.particles.opacity.anim.enable && (1 == t.opacity_status ? (t.opacity >= a.particles.opacity.value && (t.opacity_status = !1), t.opacity += t.vo) : (t.opacity <= a.particles.opacity.anim.opacity_min && (t.opacity_status = !0), t.opacity -= t.vo), t.opacity < 0 && (t.opacity = 0)), a.particles.size.anim.enable && (1 == t.size_status ? (t.radius >= a.particles.size.value && (t.size_status = !1), t.radius += t.vs) : (t.radius <= a.particles.size.anim.size_min && (t.size_status = !0), t.radius -= t.vs), t.radius < 0 && (t.radius = 0)), "bounce" == a.particles.move.out_mode) var n = {
					x_left: t.radius,
					x_right: a.canvas.w,
					y_top: t.radius,
					y_bottom: a.canvas.h
				};
				else var n = {
					x_left: -t.radius,
					x_right: a.canvas.w + t.radius,
					y_top: -t.radius,
					y_bottom: a.canvas.h + t.radius
				};
				switch (t.x - t.radius > a.canvas.w ? (t.x = n.x_left, t.y = Math.random() * a.canvas.h) : t.x + t.radius < 0 && (t.x = n.x_right, t.y = Math.random() * a.canvas.h), t.y - t.radius > a.canvas.h ? (t.y = n.y_top, t.x = Math.random() * a.canvas.w) : t.y + t.radius < 0 && (t.y = n.y_bottom, t.x = Math.random() * a.canvas.w), a.particles.move.out_mode) {
				case "bounce":
					t.x + t.radius > a.canvas.w ? t.vx = -t.vx : t.x - t.radius < 0 && (t.vx = -t.vx), t.y + t.radius > a.canvas.h ? t.vy = -t.vy : t.y - t.radius < 0 && (t.vy = -t.vy)
				}
				if (isInArray("grab", a.interactivity.events.onhover.mode) && a.fn.modes.grabParticle(t), (isInArray("bubble", a.interactivity.events.onhover.mode) || isInArray("bubble", a.interactivity.events.onclick.mode)) && a.fn.modes.bubbleParticle(t), (isInArray("repulse", a.interactivity.events.onhover.mode) || isInArray("repulse", a.interactivity.events.onclick.mode)) && a.fn.modes.repulseParticle(t), a.particles.line_linked.enable || a.particles.move.attract.enable) for (var s = e + 1; s < a.particles.array.length; s++) {
					var r = a.particles.array[s];
					a.particles.line_linked.enable && a.fn.interact.linkParticles(t, r), a.particles.move.attract.enable && a.fn.interact.attractParticles(t, r), a.particles.move.bounce && a.fn.interact.bounceParticles(t, r)
				}
			}
		}, a.fn.particlesDraw = function() {
			a.canvas.ctx.clearRect(0, 0, a.canvas.w, a.canvas.h), a.fn.particlesUpdate();
			for (var e = 0; e < a.particles.array.length; e++) {
				var t = a.particles.array[e];
				t.draw()
			}
		}, a.fn.particlesEmpty = function() {
			a.particles.array = []
		}, a.fn.particlesRefresh = function() {
			cancelRequestAnimFrame(a.fn.checkAnimFrame), cancelRequestAnimFrame(a.fn.drawAnimFrame), a.tmp.source_svg = void 0, a.tmp.img_obj = void 0, a.tmp.count_svg = 0, a.fn.particlesEmpty(), a.fn.canvasClear(), a.fn.vendors.start()
		}, a.fn.interact.linkParticles = function(e, t) {
			var i = e.x - t.x,
				n = e.y - t.y,
				s = Math.sqrt(i * i + n * n);
			if (s <= a.particles.line_linked.distance) {
				var r = a.particles.line_linked.opacity - s / (1 / a.particles.line_linked.opacity) / a.particles.line_linked.distance;
				if (r > 0) {
					var o = a.particles.line_linked.color_rgb_line;
					a.canvas.ctx.strokeStyle = "rgba(" + o.r + "," + o.g + "," + o.b + "," + r + ")", a.canvas.ctx.lineWidth = a.particles.line_linked.width, a.canvas.ctx.beginPath(), a.canvas.ctx.moveTo(e.x, e.y), a.canvas.ctx.lineTo(t.x, t.y), a.canvas.ctx.stroke(), a.canvas.ctx.closePath()
				}
			}
		}, a.fn.interact.attractParticles = function(e, t) {
			var i = e.x - t.x,
				n = e.y - t.y,
				s = Math.sqrt(i * i + n * n);
			if (s <= a.particles.line_linked.distance) {
				var r = i / (1e3 * a.particles.move.attract.rotateX),
					o = n / (1e3 * a.particles.move.attract.rotateY);
				e.vx -= r, e.vy -= o, t.vx += r, t.vy += o
			}
		}, a.fn.interact.bounceParticles = function(e, t) {
			var i = e.x - t.x,
				a = e.y - t.y,
				n = Math.sqrt(i * i + a * a),
				s = e.radius + t.radius;
			s >= n && (e.vx = -e.vx, e.vy = -e.vy, t.vx = -t.vx, t.vy = -t.vy)
		}, a.fn.modes.pushParticles = function(e, t) {
			a.tmp.pushing = !0;
			for (var i = 0; e > i; i++) a.particles.array.push(new a.fn.particle(a.particles.color, a.particles.opacity.value, {
				x: t ? t.pos_x : Math.random() * a.canvas.w,
				y: t ? t.pos_y : Math.random() * a.canvas.h
			})), i == e - 1 && (a.particles.move.enable || a.fn.particlesDraw(), a.tmp.pushing = !1)
		}, a.fn.modes.removeParticles = function(e) {
			a.particles.array.splice(0, e), a.particles.move.enable || a.fn.particlesDraw()
		}, a.fn.modes.bubbleParticle = function(e) {
			function t() {
				e.opacity_bubble = e.opacity, e.radius_bubble = e.radius
			}
			function i(t, i, n, s, o) {
				if (t != i) if (a.tmp.bubble_duration_end) {
					if (void 0 != n) {
						var c = s - v * (s - t) / a.interactivity.modes.bubble.duration,
							l = t - c;
						p = t + l, "size" == o && (e.radius_bubble = p), "opacity" == o && (e.opacity_bubble = p)
					}
				} else if (r <= a.interactivity.modes.bubble.distance) {
					if (void 0 != n) var d = n;
					else var d = s;
					if (d != t) {
						var p = s - v * (s - t) / a.interactivity.modes.bubble.duration;
						"size" == o && (e.radius_bubble = p), "opacity" == o && (e.opacity_bubble = p)
					}
				} else "size" == o && (e.radius_bubble = void 0), "opacity" == o && (e.opacity_bubble = void 0)
			}
			if (a.interactivity.events.onhover.enable && isInArray("bubble", a.interactivity.events.onhover.mode)) {
				var n = e.x - a.interactivity.mouse.pos_x,
					s = e.y - a.interactivity.mouse.pos_y,
					r = Math.sqrt(n * n + s * s),
					o = 1 - r / a.interactivity.modes.bubble.distance;
				if (r <= a.interactivity.modes.bubble.distance) {
					if (o >= 0 && "mousemove" == a.interactivity.status) {
						if (a.interactivity.modes.bubble.size != a.particles.size.value) if (a.interactivity.modes.bubble.size > a.particles.size.value) {
							var c = e.radius + a.interactivity.modes.bubble.size * o;
							c >= 0 && (e.radius_bubble = c)
						} else {
							var l = e.radius - a.interactivity.modes.bubble.size,
								c = e.radius - l * o;
							c > 0 ? e.radius_bubble = c : e.radius_bubble = 0
						}
						if (a.interactivity.modes.bubble.opacity != a.particles.opacity.value) if (a.interactivity.modes.bubble.opacity > a.particles.opacity.value) {
							var d = a.interactivity.modes.bubble.opacity * o;
							d > e.opacity && d <= a.interactivity.modes.bubble.opacity && (e.opacity_bubble = d)
						} else {
							var d = e.opacity - (a.particles.opacity.value - a.interactivity.modes.bubble.opacity) * o;
							d < e.opacity && d >= a.interactivity.modes.bubble.opacity && (e.opacity_bubble = d)
						}
					}
				} else t();
				"mouseleave" == a.interactivity.status && t()
			} else if (a.interactivity.events.onclick.enable && isInArray("bubble", a.interactivity.events.onclick.mode)) {
				if (a.tmp.bubble_clicking) {
					var n = e.x - a.interactivity.mouse.click_pos_x,
						s = e.y - a.interactivity.mouse.click_pos_y,
						r = Math.sqrt(n * n + s * s),
						v = ((new Date).getTime() - a.interactivity.mouse.click_time) / 1e3;
					v > a.interactivity.modes.bubble.duration && (a.tmp.bubble_duration_end = !0), v > 2 * a.interactivity.modes.bubble.duration && (a.tmp.bubble_clicking = !1, a.tmp.bubble_duration_end = !1)
				}
				a.tmp.bubble_clicking && (i(a.interactivity.modes.bubble.size, a.particles.size.value, e.radius_bubble, e.radius, "size"), i(a.interactivity.modes.bubble.opacity, a.particles.opacity.value, e.opacity_bubble, e.opacity, "opacity"))
			}
		}, a.fn.modes.repulseParticle = function(e) {
			function t() {
				var t = Math.atan2(p, v);
				if (e.vx = u * Math.cos(t), e.vy = u * Math.sin(t), "bounce" == a.particles.move.out_mode) {
					var i = {
						x: e.x + e.vx,
						y: e.y + e.vy
					};
					i.x + e.radius > a.canvas.w ? e.vx = -e.vx : i.x - e.radius < 0 && (e.vx = -e.vx), i.y + e.radius > a.canvas.h ? e.vy = -e.vy : i.y - e.radius < 0 && (e.vy = -e.vy)
				}
			}
			if (a.interactivity.events.onhover.enable && isInArray("repulse", a.interactivity.events.onhover.mode) && "mousemove" == a.interactivity.status) {
				var i = e.x - a.interactivity.mouse.pos_x,
					n = e.y - a.interactivity.mouse.pos_y,
					s = Math.sqrt(i * i + n * n),
					r = {
						x: i / s,
						y: n / s
					},
					o = a.interactivity.modes.repulse.distance,
					c = 100,
					l = clamp(1 / o * (-1 * Math.pow(s / o, 2) + 1) * o * c, 0, 50),
					d = {
						x: e.x + r.x * l,
						y: e.y + r.y * l
					};
				"bounce" == a.particles.move.out_mode ? (d.x - e.radius > 0 && d.x + e.radius < a.canvas.w && (e.x = d.x), d.y - e.radius > 0 && d.y + e.radius < a.canvas.h && (e.y = d.y)) : (e.x = d.x, e.y = d.y)
			} else if (a.interactivity.events.onclick.enable && isInArray("repulse", a.interactivity.events.onclick.mode)) if (a.tmp.repulse_finish || (a.tmp.repulse_count++, a.tmp.repulse_count == a.particles.array.length && (a.tmp.repulse_finish = !0)), a.tmp.repulse_clicking) {
				var o = Math.pow(a.interactivity.modes.repulse.distance / 6, 3),
					v = a.interactivity.mouse.click_pos_x - e.x,
					p = a.interactivity.mouse.click_pos_y - e.y,
					m = v * v + p * p,
					u = -o / m * 1;
				o >= m && t()
			} else 0 == a.tmp.repulse_clicking && (e.vx = e.vx_i, e.vy = e.vy_i)
		}, a.fn.modes.grabParticle = function(e) {
			if (a.interactivity.events.onhover.enable && "mousemove" == a.interactivity.status) {
				var t = e.x - a.interactivity.mouse.pos_x,
					i = e.y - a.interactivity.mouse.pos_y,
					n = Math.sqrt(t * t + i * i);
				if (n <= a.interactivity.modes.grab.distance) {
					var s = a.interactivity.modes.grab.line_linked.opacity - n / (1 / a.interactivity.modes.grab.line_linked.opacity) / a.interactivity.modes.grab.distance;
					if (s > 0) {
						var r = a.particles.line_linked.color_rgb_line;
						a.canvas.ctx.strokeStyle = "rgba(" + r.r + "," + r.g + "," + r.b + "," + s + ")", a.canvas.ctx.lineWidth = a.particles.line_linked.width, a.canvas.ctx.beginPath(), a.canvas.ctx.moveTo(e.x, e.y), a.canvas.ctx.lineTo(a.interactivity.mouse.pos_x, a.interactivity.mouse.pos_y), a.canvas.ctx.stroke(), a.canvas.ctx.closePath()
					}
				}
			}
		}, a.fn.vendors.eventsListeners = function() {
			"window" == a.interactivity.detect_on ? a.interactivity.el = window : a.interactivity.el = a.canvas.el, (a.interactivity.events.onhover.enable || a.interactivity.events.onclick.enable) && (a.interactivity.el.addEventListener("mousemove", function(e) {
				if (a.interactivity.el == window) var t = e.clientX,
					i = e.clientY;
				else var t = e.offsetX || e.clientX,
					i = e.offsetY || e.clientY;
				a.interactivity.mouse.pos_x = t, a.interactivity.mouse.pos_y = i, a.tmp.retina && (a.interactivity.mouse.pos_x *= a.canvas.pxratio, a.interactivity.mouse.pos_y *= a.canvas.pxratio), a.interactivity.status = "mousemove"
			}), a.interactivity.el.addEventListener("mouseleave", function(e) {
				a.interactivity.mouse.pos_x = null, a.interactivity.mouse.pos_y = null, a.interactivity.status = "mouseleave"
			})), a.interactivity.events.onclick.enable && a.interactivity.el.addEventListener("click", function() {
				if (a.interactivity.mouse.click_pos_x = a.interactivity.mouse.pos_x, a.interactivity.mouse.click_pos_y = a.interactivity.mouse.pos_y, a.interactivity.mouse.click_time = (new Date).getTime(), a.interactivity.events.onclick.enable) switch (a.interactivity.events.onclick.mode) {
				case "push":
					a.particles.move.enable ? a.fn.modes.pushParticles(a.interactivity.modes.push.particles_nb, a.interactivity.mouse) : 1 == a.interactivity.modes.push.particles_nb ? a.fn.modes.pushParticles(a.interactivity.modes.push.particles_nb, a.interactivity.mouse) : a.interactivity.modes.push.particles_nb > 1 && a.fn.modes.pushParticles(a.interactivity.modes.push.particles_nb);
					break;
				case "remove":
					a.fn.modes.removeParticles(a.interactivity.modes.remove.particles_nb);
					break;
				case "bubble":
					a.tmp.bubble_clicking = !0;
					break;
				case "repulse":
					a.tmp.repulse_clicking = !0, a.tmp.repulse_count = 0, a.tmp.repulse_finish = !1, setTimeout(function() {
						a.tmp.repulse_clicking = !1
					}, 1e3 * a.interactivity.modes.repulse.duration)
				}
			})
		}, a.fn.vendors.densityAutoParticles = function() {
			if (a.particles.number.density.enable) {
				var e = a.canvas.el.width * a.canvas.el.height / 1e3;
				a.tmp.retina && (e /= 2 * a.canvas.pxratio);
				var t = e * a.particles.number.value / a.particles.number.density.value_area,
					i = a.particles.array.length - t;
				0 > i ? a.fn.modes.pushParticles(Math.abs(i)) : a.fn.modes.removeParticles(i)
			}
		}, a.fn.vendors.checkOverlap = function(e, t) {
			for (var i = 0; i < a.particles.array.length; i++) {
				var n = a.particles.array[i],
					s = e.x - n.x,
					r = e.y - n.y,
					o = Math.sqrt(s * s + r * r);
				o <= e.radius + n.radius && (e.x = t ? t.x : Math.random() * a.canvas.w, e.y = t ? t.y : Math.random() * a.canvas.h, a.fn.vendors.checkOverlap(e))
			}
		}, a.fn.vendors.createSvgImg = function(e) {
			var t = a.tmp.source_svg,
				i = /#([0-9A-F]{3,6})/gi,
				n = t.replace(i, function(t, i, a, n) {
					if (e.color.rgb) var s = "rgba(" + e.color.rgb.r + "," + e.color.rgb.g + "," + e.color.rgb.b + "," + e.opacity + ")";
					else var s = "hsla(" + e.color.hsl.h + "," + e.color.hsl.s + "%," + e.color.hsl.l + "%," + e.opacity + ")";
					return s
				}),
				s = new Blob([n], {
					type: "image/svg+xml;charset=utf-8"
				}),
				r = window.URL || window.webkitURL || window,
				o = r.createObjectURL(s),
				c = new Image;
			c.addEventListener("load", function() {
				e.img.obj = c, e.img.loaded = !0, r.revokeObjectURL(o), a.tmp.count_svg++
			}), c.src = o
		}, a.fn.vendors.destroypJS = function() {
			cancelAnimationFrame(a.fn.drawAnimFrame), i.remove(), pJSDom = null
		}, a.fn.vendors.drawShape = function(e, t, i, a, n, s) {
			var r = n * s,
				o = n / s,
				c = 180 * (o - 2) / o,
				l = Math.PI - Math.PI * c / 180;
			e.save(), e.beginPath(), e.translate(t, i), e.moveTo(0, 0);
			for (var d = 0; r > d; d++) e.lineTo(a, 0), e.translate(a, 0), e.rotate(l);
			e.fill(), e.restore()
		}, a.fn.vendors.exportImg = function() {
			window.open(a.canvas.el.toDataURL("image/png"), "_blank")
		}, a.fn.vendors.loadImg = function(e) {
			if (a.tmp.img_error = void 0, "" != a.particles.shape.image.src) if ("svg" == e) {
				var t = new XMLHttpRequest;
				t.open("GET", a.particles.shape.image.src), t.onreadystatechange = function(e) {
					4 == t.readyState && (200 == t.status ? (a.tmp.source_svg = e.currentTarget.response, a.fn.vendors.checkBeforeDraw()) : (console.log("Error pJS - Image not found"), a.tmp.img_error = !0))
				}, t.send()
			} else {
				var i = new Image;
				i.addEventListener("load", function() {
					a.tmp.img_obj = i, a.fn.vendors.checkBeforeDraw()
				}), i.src = a.particles.shape.image.src
			} else console.log("Error pJS - No image.src"), a.tmp.img_error = !0
		}, a.fn.vendors.draw = function() {
			"image" == a.particles.shape.type ? "svg" == a.tmp.img_type ? a.tmp.count_svg >= a.particles.number.value ? (a.fn.particlesDraw(), a.particles.move.enable ? a.fn.drawAnimFrame = requestAnimFrame(a.fn.vendors.draw) : cancelRequestAnimFrame(a.fn.drawAnimFrame)) : a.tmp.img_error || (a.fn.drawAnimFrame = requestAnimFrame(a.fn.vendors.draw)) : void 0 != a.tmp.img_obj ? (a.fn.particlesDraw(), a.particles.move.enable ? a.fn.drawAnimFrame = requestAnimFrame(a.fn.vendors.draw) : cancelRequestAnimFrame(a.fn.drawAnimFrame)) : a.tmp.img_error || (a.fn.drawAnimFrame = requestAnimFrame(a.fn.vendors.draw)) : (a.fn.particlesDraw(), a.particles.move.enable ? a.fn.drawAnimFrame = requestAnimFrame(a.fn.vendors.draw) : cancelRequestAnimFrame(a.fn.drawAnimFrame))
		}, a.fn.vendors.checkBeforeDraw = function() {
			"image" == a.particles.shape.type ? "svg" == a.tmp.img_type && void 0 == a.tmp.source_svg ? a.tmp.checkAnimFrame = requestAnimFrame(check) : (cancelRequestAnimFrame(a.tmp.checkAnimFrame), a.tmp.img_error || (a.fn.vendors.init(), a.fn.vendors.draw())) : (a.fn.vendors.init(), a.fn.vendors.draw())
		}, a.fn.vendors.init = function() {
			a.fn.retinaInit(), a.fn.canvasInit(), a.fn.canvasSize(), a.fn.canvasPaint(), a.fn.particlesCreate(), a.fn.vendors.densityAutoParticles(), a.particles.line_linked.color_rgb_line = hexToRgb(a.particles.line_linked.color)
		}, a.fn.vendors.start = function() {
			isInArray("image", a.particles.shape.type) ? (a.tmp.img_type = a.particles.shape.image.src.substr(a.particles.shape.image.src.length - 3), a.fn.vendors.loadImg(a.tmp.img_type)) : a.fn.vendors.checkBeforeDraw()
		}, a.fn.vendors.eventsListeners(), a.fn.vendors.start()
	};
Object.deepExtend = function(e, t) {
	for (var i in t) t[i] && t[i].constructor && t[i].constructor === Object ? (e[i] = e[i] || {}, arguments.callee(e[i], t[i])) : e[i] = t[i];
	return e
}, window.requestAnimFrame = function() {
	return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame ||
	function(e) {
		window.setTimeout(e, 1e3 / 60)
	}
}(), window.cancelRequestAnimFrame = function() {
	return window.cancelAnimationFrame || window.webkitCancelRequestAnimationFrame || window.mozCancelRequestAnimationFrame || window.oCancelRequestAnimationFrame || window.msCancelRequestAnimationFrame || clearTimeout
}(), window.pJSDom = [], window.particlesJS = function(e, t) {
	"string" != typeof e && (t = e, e = "particles-js"), e || (e = "particles-js");
	var i = document.getElementById(e),
		a = "particles-js-canvas-el",
		n = i.getElementsByClassName(a);
	if (n.length) for (; n.length > 0;) i.removeChild(n[0]);
	var s = document.createElement("canvas");
	s.className = a, s.style.width = "100%", s.style.height = "100%";
	var r = document.getElementById(e).appendChild(s);
	null != r && pJSDom.push(new pJS(e, t))
}, window.particlesJS.load = function(e, t, i) {
	var a = new XMLHttpRequest;
	a.open("GET", t), a.onreadystatechange = function(t) {
		if (4 == a.readyState) if (200 == a.status) {
			var n = JSON.parse(t.currentTarget.response);
			window.particlesJS(e, n), i && i()
		} else console.log("Error pJS - XMLHttpRequest status: " + a.status), console.log("Error pJS - File config not found")
	}, a.send()
}, !
function(e) {
	var t = e.onload;
	e.onload = function() {
		function i() {
			var e = document.getElementsByTagName("body")[0];
			e.clientWidth < 320 ? e.parentElement.style.fontSize = "32px" : e.clientWidth > 768 ? e.parentElement.style.fontSize = "76.8px" : e.parentElement.style.fontSize = e.clientWidth / 10 + "px"
		}
		document.querySelector("nav.navbar"), i();
		var a = e.onresize;
		e.onresize = function() {
			i(), a && a()
		}, t && t()
	}
}(window || {}), function(e) {
	function t(e) {
		return document.querySelector(e)
	}
	function i() {
		var e = t(".dg-nav"),
			i = document.body.scrollTop || document.documentElement.scrollTop;
		i > 70 ? e.classList.remove("dg-nav-transparent") : e.classList.add("dg-nav-transparent")
	}
	var a = e.onload,
		n = e.onscroll,
		s = !1;
	
}(window || {})