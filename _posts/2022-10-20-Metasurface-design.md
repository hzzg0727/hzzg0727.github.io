---
title: "Metasurface design"
date: 2022-10-20 09-32-00 +0800
tags: ["meta", "FDTD"]
categories: ["optics"]
---

<!-- # Metasurface design -->
## Achromatic focusing theory
To achromatically focus a broadband incident light in a diffraction limited spot, a metalens must impart a spatially and frequency-dependent phase profile given by

$$
\begin{equation}
    \varphi(r, \omega) = -\frac{\omega}{c}(\sqrt{r^2+f^2}-f)
\end{equation}
$$

where $\varphi$, $\omega$, $c$, $r$, and $f$ are phase, radial coordinate, velocity in the backgroud, angular frequency, and focal length, respectively. 

Eq (1) can be further written as

$$
\begin{equation}
    \varphi(r, \omega) = -\frac{\omega}{c}(\sqrt{r^2+f^2}-f) + C(\omega)
\end{equation}
$$

where $C(\omega)$ is a reference phase whose value depends on the angular frequency only. This value offers an extra degree of freedom for multi-wavelength design, but has no influence on the focus effect of metalens.

The Taylor expansion of $\varphi(r, \omega)$ can be written as

$$
\begin{equation}
    \varphi(r, \omega) = \varphi(r, \omega_{d}) + \left. \frac{\partial \varphi}{\partial \omega}\right |_{\omega = \omega_{d}}(\omega - \omega_{d}) + \left. \frac{\partial^2\varphi}{\partial \omega^2} \right |_{\omega = \omega_{d}} \frac{(\omega - \omega_{d})^2}{2} + ...
\end{equation}
$$

where the three terms in the right are the required phase, group delay, and group delay dispersion, respectively.

Compare Eq (3) with Eq (1), we have

$$
\begin{equation}
    \varphi(r, \omega_{d})=-\frac{\omega_{d}}{c}(\sqrt{r^2+f^2}-f)
\end{equation}
$$

$$
\begin{equation}
    \left. \frac{\partial \varphi}{\partial \omega} \right |_{\omega = \omega_{d}} = -\frac{1}{c}(\sqrt{r^2+f^2}-f)
\end{equation}
$$

$$
\begin{equation}
    \left. \frac{\partial^2\varphi}{\partial \omega^2} \right |_{\omega = \omega_{d}} = 0
\end{equation}
$$

Compare Eq (3) with Eq (2), we have

$$
\begin{equation}
    \varphi(r, \omega_{d}) = -\frac{\omega_{d}}{c}(\sqrt{r^2+f^2}-f) + C(\omega_{d})
\end{equation}
$$

$$
\begin{equation}
    \left. \frac{\partial \varphi}{\partial \omega} \right |_{\omega = \omega_{d}} = -\frac{1}{c}(\sqrt{r^2+f^2}-f) + \left. C'(\omega) \right |_{\omega=\omega_d}
\end{equation}
$$

$$
\begin{equation}
    \left. \frac{\partial^2\varphi}{\partial \omega^2} \right |_{\omega = \omega_{d}} = \left. C''(\omega) \right |_{\omega=\omega_d}
\end{equation}
$$

Eq (7-9) provide more design freedom than Eq (4-6).


## Forward modelling
### Full wave solvers
The design of these metasurfaces requires a full solution of Maxwell’s equations in three dimensions. For such sub-wavelength calculations there are (in general) no exact solutions. Their design is thus done by numerical method, known as **full-wave solvers**. Some of the most common methods are FEM, FDTD and RCWA.

### FDTD vs RCWA
FDTD and RCWA both model the same underlying physical laws, and solve the Maxwell equations via a different mathematical and numerical approach. In FDTD the Maxwell equations are discretized directly in both time and space. RCWA first transforms the equations to the frequency domain (both time-frequency and spatial frequency). Nevertheless, the solutions found by both methods should be the same.

In a single frequency calculation, the RCWA calculation will be much faster because it is naturally suited to single frequency calculations. Time domain methods (FDTD) automatically calculate multiple frequencies, but the downside is that this calculation will be slower when only a few wavelengths are of interest.

### RCWA
RCWA is a rigorous method and is able to provide any information you want, such as transmission, reflection, diffraction, field profiles, etc. Since it decomposes fields into set of plane waves, it is most efficient when the field profile approaches that of plane waves. This happens in structures with low to moderate index contrast, but the method can also be applied to metal structures albeit less efficiently. This means you can get very accurate results with very few terms to be solved so the simulations are fast. It is also very good for layered media. You will see it applied to diffraction gratings, resonant gratings, and sometimes to photonic crystals.

To get a deeper understanding, it is necessary to know a little more about the method.  It is a semi-analytical technique, meaning it picks one direction (longitudinal) to solve analytically and the other two (transverse) to be solved numerically.  RCWA uses a discrete Fourier transform to discretize the fields in the transverse direction. This means it represents the fields and materials as a set of plane waves (or planar gratings), so RCWA is extremely fast and efficient for devices with low to moderate index contrast where the waves are more like pure plane waves. The longitudinal direction is solved analytically so the layers can be any thickness without affecting the computational burden. A layer can be picometers to megameters without affecting speed for efficiency at all. It can also very efficiently handle multilayer devices and devices with thousands or even millions of layers.

### Convergence test
In practice the appropriate discretization level is determined by a convergence test. That is to simulate the same configuration with increasingly small discretization steps until the calculation result no longer changes. The discretization can then be set to the level which gives an acceptable deviation from the converged result.

In the case of RCWA, the controlling parameter is the truncation of the spatial frequency series (determined by the Accuracy setting). In FDTD, the resolution is controlled by the spatial step size in three dimensions x, y, and z (The stepsize in time is derived from the spatial discretization stepsize).


## Metalens Design Process
### 1. Target phase definition
How to define the target phase profile for the metalens?
* (common lens types) Analytical solving.
* (complex systems) Designing the ideal phase (the spatial phase data on a rectilinear grid) mask in OpticStudio using the ray tracing and optimization capabilities.

In OpticStudio, the metasurface can be described by the diffractive surface type, which applies an additional phase on top of the base refractive or reflective surface.

### 2. Unit cell simulations
The parameters of unit cells are optimized to satisfy the desired transmission and phase properties. The phase and field vs. radius results are then saved to build a meta-atom library.

The RCWA solver is introduced as a recommended/complementary tool for unit cell simulations, and a comparison is made with FDTD for verification.

### 3. Full lens design
How to design and analyse the full metalens?
#### Direct simulations
Construct and simulate the full metalens in FDTD based on the  target phase profile and the phase vs. radius data from the previous step. 

While this approach is more straightforward, it can pose challenges in terms of memory and simulation time, especially for larger metalens. 

The nearfield from the simulation can be exported to a `.ZBF` file for further propagation in the Ansys OpticStudio for farfield analysis.

#### Reconstruction of full fields
The nearfield/farfield of the full metalens can be reconstructed with a script using the nearfield library from the meta-atom library, which avoids the time-consuming simulation of the full lens and hence can be much more efficient than the direct simulation approach. 

### 4. Propagation of imported beam (nearfield $\rightarrow$ farfield)
Once the near-field for the metalens is exported to a `.ZBF` file, the Physical Optics Propagation (POP) tool in OpticStudio can be used to propagate the beam through the entire system, even including any bulk optical elements as well. Using POP, the phase and irradiance profile can be analyzed at every surface, and the system performance can be evaluated.

The actual beam can be compared with an ideal beam propagated through the target phase mask in OpticStudio to verify the metalens model. If necessary, the optical setup can be re-optimized in OpticStudio based on the propagation results. 

### 5. GDS export
Once the design of the physical shapes and the positions of the meta-atoms over the whole lens is finished, the pattern is typically exported to a `GDS` format for fabrication. 

## Porlarization
### Porlarized source and response simulation
To create a circular polarized source, we can combine an x polarized plane wave source with its phase set to 0, and a y polarized plane wave source with its phase set to 90 degrees.

*A recommended way:*

It is possible to obtain the response of a system to a beam with arbitrary polarization by running two simulations (each with a single source). The point is that any polarization can be combined with x polarization and y polarization components.

*My idea:* 

Jones matrix can be utilized to realize polarization synthesis and decomposition. For instance, in this way, a x polarization plane wave (or a y polarization plane wave) can be decomposed into left circularly polarized light and right circularly polarized light to make further analysis.


## Reference
[1] Getting accurate and fast nano-structure simulations: A benchmark of RCWA and FDTD for meta-surface calculation: https://planopsim.com/simulation/getting-accurate-and-fast-nano-structure-simulations-a-benchmark-of-rcwa-and-fdtd-for-meta-surface-calculation/#:~:text=FDTD%20and%20RCWA%20both%20model%20the%20same%20underlying,the%20frequency%20domain%20%28both%20time-frequency%20and%20spatial%20frequency%29.

[2] What is the advantages of Rigorous Coupled Wave Analysis (RCWA) for simulation of electromagnetic field in periodic structures?: https://www.researchgate.net/post/What_is_the_advantages_of_Rigorous_Coupled_Wave_Analysis_RCWA_for_simulation_of_electromagnetic_field_in_periodic_structures