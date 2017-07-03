
/*框架发布配置*/

		fis.match("/components/**",{
			release:"/assets/$0"
		});

		fis.match("/static/**",{
			release:"/assets/$0"
	});

/*js，css，png，jpg，gif等文件签名*/

		fis.match('/static/**.{js,css,png,jpg,gif}', {
		  useHash: true
		});

/*js,css,png,jpg,gif等文件压缩*/

		fis.match('/static/js/*.js', {
		  optimizer: fis.plugin("uglify-js"),
		  release: '/assets/$0'
		});

		fis.match('/static/css/*.css', {
		  // fis-optimizer-clean-css 插件进行压缩，已内置
		  optimizer: fis.plugin('clean-css')
		});

		fis.match('/static/img/*.{jpg,gif,png}', {
		  // fis-optimizer-png-compressor 插件进行压缩，已内置
		  optimizer: fis.plugin('png-compressor')
		});

/*fis.match('/static/css/*.css',{
	deploy:[
		fis.plugin('release',{
			from:'/static/css/',
			to:'../../assets/static/css'
		}),
		fis.plugin('local-deliver')
	]
});
*/
/*排除不用发布的文件*/
fis.match('*.md',{
	release:false
});