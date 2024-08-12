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
      },{
        "title": "FDTD Note: Advanced FDTD",
        "excerpt":" 1. Determine the optimum resource configuration  The key parameter is Processes. See Ref. [1].   Reference (Resources)  [1] https://optics.ansys.com/hc/en-us/articles/6491711906195-Determine-the-optimum-resource-configuration-to-run-Lumerical-FDTD-simulations  ","categories": ["optics"],
        "tags": ["FDTD","meta"],
        "url": "/optics/2022/10/26/FDTD-advanced.html",
        "teaser": null
      },{
        "title": "Ubuntu 22.04 with VMWare virtual machine",
        "excerpt":"Installation Configuration: Main system: Windows 11 Ubuntu 22.04 LTS VMWare Workstation 16 问题描述 安装时可能遇到的问题是，若 Windows 开启了 Hyper-V 服务，会与虚拟机的虚拟化发生冲突，可能导致系统关机会引发 vcpu-0 等多个不可恢复错误。 解决方案 实际上，对此问题，VMWare Workstation 已有合适的解决方案。选择修复（Windows 应用管理）或者重装（因为修复需要管理员权限，但是难以定位应用程序无法赋予），会发现 VMWare Workstation 会自动检测到此问题和提示解决方案（开启 Windows 功能中的某一项，可能需要重启生效）。 Configuration 换源 Ubuntu 22.04 已支持图形界面换源。选择 Software &amp; Updates -&gt; Ubuntu Software 选项卡，在 Download from 选项选择 Other，而后在中国区域内选择合适的源。可以自动测试中国区域内速度最快的源。 中文输入法 参考 [1] 和...","categories": ["code"],
        "tags": ["linux","ubuntu"],
        "url": "/code/2022/11/06/ubuntu-virtual-machine.html",
        "teaser": null
      },{
        "title": "文献阅读管理环境配置不完全指南",
        "excerpt":"Part1. 文献阅读 1.1 精读文献 BookxNote Pro：参见 Ref. [1]. 1.2 速读外文文献 知云文献翻译：参见 Ref. [2]. Part2. 文献管理 2.0 Zotero 简介 几个要点： Zotero 的组成：PC 等设备上的独立程序 &amp; 浏览器扩展 （&amp; Microsoft Word 插件） 优点1：支持从浏览器网页直接获取文献信息建立文献索引，避免文献信息录入之苦 优点2：借助 Zotero 的 Word 插件，方便地撰写和修改论文的参考文献部分内容 优点3：与网盘配合可实现跨设备的协同 优点4：功能丰富强大 优点5：开源免费 2.1 Zotero 安装和一些基本配置 2.1.1 下载安装文件 下载地址：参见 Ref. [3]. 备注：右侧的 Zotero Connector（浏览器插件）可先不安装。 2.1.2 安装应用程序和浏览器插件...","categories": ["others"],
        "tags": ["文献阅读","文献管理"],
        "url": "/others/2022/12/06/%E6%96%87%E7%8C%AE%E9%98%85%E8%AF%BB%E7%AE%A1%E7%90%86%E7%8E%AF%E5%A2%83%E9%85%8D%E7%BD%AE.html",
        "teaser": null
      },{
        "title": "WSL Installation and Use",
        "excerpt":"Installation Configuration: Main system: Windows 11 启用 Windows 功能 运行启用或关闭 Windows 功能，开启以下功能： Windows 虚拟机监控程序平台 适用于 Linux 的 Windows 子系统 虚拟机平台 注：若未执行此步骤，直接安装 WSL 会有请求超时的报错。 安装 WSL Powershell 运行如下命令 wsl --install 如果没有默认安装 Ubuntu，则按照提示使用如下命令选择想要的 Linux 发行版即可。 wsl --install -d &lt;Distribution Name&gt; 设置 WSL 开发环境 参考 WSL 设置开发环境的官方教程。 Installing MEEP on Linux Subsystem 在...","categories": ["code"],
        "tags": ["linux","ubuntu"],
        "url": "/code/2024/08/12/WSL.html",
        "teaser": null
      }]
