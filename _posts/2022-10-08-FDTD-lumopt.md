---
title: "FDTD Note: LumOpt"
date: 2022-10-08 09-32-00 +0800
tags: ["FDTD", "lumopt", "meta"]
categories: ["optics"]
---

<!-- # LumOpt Notes -->
## Install
### 1. Choose your install directory and run

```
git clone https://github.com/chriskeraly/LumOpt.git
python setup.py -develop
```

### 2. Add the Lumerical API lumapi to your Python path
In the LumOpt install directory, go into the "lumopt" directory, and then open "__init__.py". Modify the path of `lumapi` according to your platform and install directory, as follows.
```python
# __init__.py
# ...
if current_platform == 'Windows':
        default_api_path = '/Program Files/Lumerical/v202/api/python'
    elif current_platform == 'Darwin':
        default_api_path = '/Applications/Lumerical/FDTD/FDTD.app/Contents/MacOS/'
    elif current_platform == 'Linux':
        default_api_path = '/opt/lumerical/fdtd/api/python'
# ...
```

*Notes:*
* Some code in Lumopt (utilities/plotter.py) is not compatible with the matplotlib3.5.3. It can be solved through a new environment with python3.6 as the interpreter and relative packages installed.

