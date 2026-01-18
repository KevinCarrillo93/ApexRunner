# 👟 Apex Runner – 3D Shoe Customizer

**Apex Runner** is an interactive 3D shoe customization experience built for the web.  
It allows users to personalize different parts of a sneaker in real time by selecting colors, providing an immersive and product-oriented UI similar to modern e-commerce configurators.

> _Design it your way. Wear it your style._

---

## ✨ Features

- 🎨 **Real-time color customization** of individual shoe parts
- 🧩 **Modular architecture** for scalable customization logic
- 🧠 **Context-based state management** (React Context API)
- 🧵 **Mesh-level material control** using Three.js
- 💡 **Data-driven configuration** (no hardcoded UI logic)
- 🖱️ Smooth, intuitive UI with clear visual feedback
- 🟢 Live engine status indicator with animated feedback
- 🛒 Product-style layout ready for e-commerce extension

---

## 🧱 Customizable Parts

Each shoe section can be customized independently:

- Midsole
- Heel Tab
- Quarter Overlay
- Laces
- Side Panels

All parts are defined through a single configuration object, making it easy to extend or modify.

---

## 🛠️ Tech Stack

- **React**
- **@react-three/fiber**
- **@react-three/drei**
- **Three.js**
- **GLTF 3D models**
- **CSS (custom UI styling)**
- **React Context API**

---

## 🧠 Architecture Overview

### Customization System

All customizable parts are defined in a central configuration object:

```js
SHOE_CUSTOMIZATION = {
  Midsole: {
    label: "Midsole",
    meshNames: ["Object_10"],
    colors: [...]
  },
  ...
}
```
