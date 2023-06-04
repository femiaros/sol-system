# Solar System

---

This is a scrollable webpage that displays stack of 3d models. This was achieved with the extensive usage of tools listed below:

### Tools

- React-Three-Fiber
- Framer-motion
- Intersection-Observer API
- React-Leaflet
- Tailwind-css

### Usage

**[Framer-motion]** Animating of page-sections while navigating between them

**[React-Three-Fiber]** Creation of canvas (_WebGL scene_), to render content (_3D-Models_)

**[Intersection-Observer-API]** To detect when an element containing a canva appears on screen, so to initiate new canva creation and to intentionally lose _WEBGL_context_ when element leaves screen, by popping canva off DOM

**[React-Leaflet]** Rendering satellite/aerial imagery-map of earth, to show the current position of the International Space Station (ISS)

**[Tailwind-css]** Styling the webpage Layout

🌐Demo:

[![Demo live](/src/images/project-banner.png)](https://solstem.netlify.app/)
