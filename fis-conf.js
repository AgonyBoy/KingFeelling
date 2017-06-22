
/*框架发布配置*/

fis.match("/components/*",{
	release:"/components/$0"
});

/*server端静态目录配置*/
fis.set("statics","/assets");
