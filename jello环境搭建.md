> 安装 jello

    npm install -g jello

> 安装插件

    npm install -g fis-parser-marked
    npm install -g fis-parser-utc 
    npm install -g _fis-parser-sass(已废弃)_ 新插件名：fis-parser-node-sass (如果安装失败，下载文件：https://github.com/sass/node-sass/releases/download/v3.13.0/win32-x64-48_binding.node【然后在dos命令行输入：set SASS_BINARY_PATH="下载文件路径"】)
    npm install -g fis-packager-depscombine
    npm install -g fis-preprocessor-cssprefixer


> 下载 demo

    git clone https://github.com/2betop/jello-demo.git


> 进入当前目录后发布代码

    jello release           //发布项目 ，可跟参数 -d + 路径来发布到指定目录
    jello server start      //内置启动服务