---
title: "Meta relatives"
date: 2022-10-08 09-32-00 +0800
tags: ["meta"]
categories: ["optics"]
---

<!-- # Meta Relatives -->
## Optimization
### Deterministic and stochastic optimization methods
![1](/assets/images/2022-10-08-Meta-relatives-1.svg)

For more, see Ref.[1].

## Complex permittivity $\leftrightarrow$ complex refractive index
Assume dealing with optical frequencies, in which case we can treat $\mu_r=1$, due to most materials of interest being non-magnetic at optical frequencies. 

In this case, the relationship between the complex relative permittivity (also known as the complex dialectric constant) and the complex refractive index is given by

$$
\begin{equation}
    \epsilon_{\mathrm{real}} + i\ \epsilon_{\mathrm{im}} = (n + i\ k)^2
\end{equation}
$$

$$
\begin{equation}
    \epsilon_{\mathrm{real}} = n^2 - k^2
\end{equation}
$$

$$
\begin{equation}
    \epsilon_{\mathrm{im}} = 2nk
\end{equation}
$$

From Ref.[2].

## References
[1] Deterministic and Stochastic Optimization Methods: https://www.baeldung.com/cs/deterministic-stochastic-optimization#:~:text=Thus%2C%20deterministic%20optimization%20refers%20to%20complete%20or%20rigorous,a%20finite%20execution%20time%20and%20considering%20predefined%20tolerances

[2] https://physics.stackexchange.com/questions/397483/converting-a-complex-index-of-refraction-to-a-complex-dielectric-constant#:~:text=In%20that%20case%2C%20the%20relationship%20between%20the%20complex,for%20contributing%20an%20answer%20to%20Physics%20Stack%20Exchange%21
