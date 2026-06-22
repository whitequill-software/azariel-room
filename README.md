# Azariel Room

Azariel Room is an experimental Next.js interface for a soft AI companion room. It combines a web chat layout with a 3D avatar scene, exploring how an AI companion could feel more spatial, present, and emotionally grounded.

This project is an early Phase 1 prototype focused on layout, avatar loading, and the foundation for future chat + voice + avatar interaction.

---

## Project Status

**Status:** Phase 1 prototype  
**Frontend:** Next.js / React  
**3D:** React Three Fiber + Three.js  
**Avatar Format:** VRM

The current prototype displays a two-column layout:

- Left side: planned chat UI panel
- Right side: 3D avatar scene

---

## What It Does

Azariel Room currently sets up:

- A dark, room-like web interface
- A titled page for **Azariel Room**
- A Phase 1 label for **Chat + Avatar**
- A two-column layout for chat and avatar scene
- A Three.js canvas for rendering a VRM avatar
- Orbit controls for viewing the avatar

---

## Technical Notes

The main page defines the room layout and splits the interface into chat and avatar sections.

The avatar scene uses:

- `@react-three/fiber`
- `@react-three/drei`
- `three`
- `@pixiv/three-vrm`
- `GLTFLoader`
- `VRMLoaderPlugin`

The VRM avatar is loaded from:

```text
/public/avatars/Azariel.vrm
```

---

## Tech Stack

- Next.js
- React
- TypeScript
- Tailwind CSS
- Three.js
- React Three Fiber
- Drei
- Pixiv three-vrm

---

## Run Locally

### Install dependencies

```bash
npm install
```

### Start development server

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

---

## My Role

**AI Companion Concept Designer • Frontend Prototyper • 3D Interaction Explorer**

For this project, I explored:

- Designing an AI companion room interface
- Planning a chat + avatar layout
- Loading a VRM avatar into a web scene
- Using React Three Fiber and Three.js for browser-based 3D interaction
- Creating an early foundation for a future AI avatar companion

---

## Roadmap

- Build the chat UI panel
- Connect chat to an AI backend
- Add memory / RAG support
- Add voice input and text-to-speech output
- Improve avatar pose, idle animation, and expressions
- Add room environment and lighting polish
- Explore local AI integration

---

## Portfolio Note

This is an early prototype. Its value is in the concept, interface direction, and technical exploration of web-based AI avatar interaction.
