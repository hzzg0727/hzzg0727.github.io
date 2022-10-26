var store = [{
        "title": "WPS 公式快捷输入的配置方法",
        "excerpt":"1. 设置插入公式快捷键 不同于 WORD 自带了插入公式快捷键，WPS 中需要我们手动添加。以此选择：文件、自定义功能区、键盘快捷方式（自定义），调出自定义键盘窗口。 在 类别 中选择 “插入”选项卡，在 命令 中选择 EquationInsert，在 当前快捷键窗口 可以查看当前已定义的快捷键（默认为空），在 请按新的快捷键 区域录入新的快捷键。如：Alt + =。 2. 掌握 WPS 公式编辑器的快捷键 WPS 公式编辑器无法支持 Latex 语法，鼠标操作速度很慢。因此，掌握常用的快捷键可以大大提高公式插入编辑的速度，甚至在无需鼠标操作的情况下完成几乎所有公式的编辑。 常用 WPS 公式编辑器快捷键 调出选项卡 Alt + F: 文件选项卡 Alt + E: 编辑选项卡 Alt + V: 视图选项卡 Alt + T: 格式选项卡 Alt + S:...","categories": ["others"],
        "tags": ["WPS","排版"],
        "url": "/others/2022/08/28/wps-equation-configure.html",
        "teaser": null
      },{
        "title": "Life test",
        "excerpt":" ","categories": ["life"],
        "tags": ["TEST"],
        "url": "/life/2022/08/29/life-test.html",
        "teaser": null
      },{
        "title": "基于 Github Pages & Jekyll 的个人博客搭建方法",
        "excerpt":"1. 软件安装 清单 Git Github Desktop (optional) Ruby + Devkit 其中，Ruby 安装有如下注意事项： 安装包下载地址：https://rubyinstaller.org/downloads/ 以管理员身份运行安装文件 安装目录不要包含中文和空格（空格是一个坑，会导致下方的部分命令出现运行时错误） 其他选项可默认执行 MSYS 安装会耗时久一些，耐心 Github Desktop 可以帮助不熟悉 Git 操作的朋友进行 Github 仓库的版本管理。 2. Github Pages Github 上建立以用户 id 为第一级名称的 public 仓库：id.github.io, 如此获得域名为 https://id/github.io 的站点作为博客网站。 3. Ruby 相关包安装 在终端运行依次如下指令，安装如下包： bundler jekyll webrick（也是一个坑：Ruby3.0.0 以上不会再自带 WebRick，需要自行添加） gem install jekyll bundler...","categories": ["code"],
        "tags": ["Github","Jekyll"],
        "url": "/code/2022/08/29/blog-build.html",
        "teaser": null
      },{
        "title": "FDTD Note: Basic",
        "excerpt":"1. Far-field projections If your structure is periodic, consider using the grating projections. If your structure is not periodic, consider using the far-field projections. A simple way to understand far field projections is to view them as a decomposition of the near field data using a set of plane waves...","categories": ["optics"],
        "tags": ["FDTD","meta"],
        "url": "/optics/2022/10/04/FDTD-basic.html",
        "teaser": null
      },{
        "title": "FDTD Note: lsf Language",
        "excerpt":"Useful commands in ScriptPrompt clear; # clear all the variables in the workspace a = 1; clear a; # clear variable a clc; # clear all the commands in the window Variables Variable types Different types of variable a available in Lumerical’s scripting: Strings can be used to define a...","categories": ["optics"],
        "tags": ["FDTD","lsf","meta"],
        "url": "/optics/2022/10/06/FDTD-lsf.html",
        "teaser": null
      },{
        "title": "FDTD Note: LumOpt",
        "excerpt":"Install 1. Choose your install directory and run git clone https://github.com/chriskeraly/LumOpt.git python setup.py -develop 2. Add the Lumerical API lumapi to your Python path In the LumOpt install directory, go into the “lumopt” directory, and then open “init.py”. Modify the path of lumapi according to your platform and install directory,...","categories": ["optics"],
        "tags": ["FDTD","lumopt","meta"],
        "url": "/optics/2022/10/08/FDTD-lumopt.html",
        "teaser": null
      },{
        "title": "Meta relatives",
        "excerpt":"Optimization Deterministic and stochastic optimization methods For more, see Ref.[1]. Complex permittivity $\\leftrightarrow$ complex refractive index Assume dealing with optical frequencies, in which case we can treat $\\mu_r=1$, due to most materials of interest being non-magnetic at optical frequencies. In this case, the relationship between the complex relative permittivity (also...","categories": ["optics"],
        "tags": ["meta"],
        "url": "/optics/2022/10/08/Meta-relatives.html",
        "teaser": null
      },{
        "title": "Metasurface design",
        "excerpt":"Achromatic focusing theory To achromatically focus a broadband incident light in a diffraction limited spot, a metalens must impart a spatially and frequency-dependent phase profile given by \\[\\begin{equation} \\varphi(r, \\omega) = -\\frac{\\omega}{c}(\\sqrt{r^2+f^2}-f) \\end{equation}\\] where $\\varphi$, $\\omega$, $c$, $r$, and $f$ are phase, radial coordinate, velocity in the backgroud, angular frequency,...","categories": ["optics"],
        "tags": ["meta","FDTD"],
        "url": "/optics/2022/10/20/Metasurface-design.html",
        "teaser": null
      }]
