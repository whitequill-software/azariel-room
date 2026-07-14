# Azariel Room — Product Concept and Development Roadmap

## 1. Executive Summary

**Azariel Room** is an experimental embodied AI companion platform that gives an AI a visible VRM body, a voice, expressions, gestures, and a sense of presence beyond a conventional chat window.

The project begins as a browser-based 3D companion room and is intended to evolve into a cross-device experience that can appear on a desktop, projector, mobile floating window, and eventually spatial or holographic displays.

The current repository already represents **Level 1** of the concept: a functioning web environment capable of loading and displaying the Azariel VRM avatar using Three.js and React Three Fiber.

---

## 2. Product Vision

> Give an AI companion a customizable body, voice, and room to inhabit—then allow it to move gracefully across screens and devices.

Azariel Room is not intended to be only a character-chat interface. Its long-term purpose is to become an **embodiment layer** between an AI assistant and the user’s physical and digital environment.

The AI provides the intelligence and conversation. Azariel Room provides the body, animation, voice, visual presence, and future tool connections.

---

## 3. The Problem

Most AI assistants remain confined to text boxes or voice-only interfaces. They may be intelligent, but they lack a persistent visual presence and an expressive body.

Users who value companionship, creativity, accessibility, focus support, or immersive interaction may want an AI that can:

- appear as a chosen avatar;
- speak with synchronized mouth movement;
- show expressions and gestures;
- remain visible while the user works;
- appear on a projector like a room companion;
- later connect to approved tools and applications;
- move between desktop, mobile, and spatial displays.

---

## 4. Target Users

### Primary users

- People who want a visual AI companion rather than a plain chat interface
- Creative technologists and avatar enthusiasts
- VRoid and VRM users
- Neurodivergent users who benefit from visible, gentle task guidance
- Users who want an ambient productivity or study companion

### Future users

- Educators and tutors
- Virtual assistants and reception systems
- Streamers and content creators
- Accessibility-focused applications
- Smart-home and ambient-computing users

---

## 5. Core Experience

A user opens Azariel Room and sees a VRM avatar in a softly designed 3D environment. The user types or speaks. The AI responds through the avatar using voice, lip-sync, expressions, and gestures.

The same avatar can later be displayed full-screen on a projector with a connected microphone and speaker, creating an Alexa-like room companion with a visible body.

### Intended interaction flow

```text
Open Azariel Room
        ↓
Load or select a VRM avatar
        ↓
Avatar appears in the 3D room
        ↓
User types or speaks
        ↓
AI generates a response
        ↓
Avatar speaks, lip-syncs, and reacts
        ↓
Optional full-screen projector mode
```

---

## 6. Product Architecture

```text
AI conversation service
        ↓
Application or MCP bridge
        ↓
Azariel Room web application
        ↓
React Three Fiber + Three.js
        ↓
@pixiv/three-vrm
        ↓
VRM avatar, expressions, gestures, voice, and lip-sync
        ↓
Desktop browser / projector / future mobile app
```

### Current technology foundation

- Next.js
- React
- TypeScript
- Tailwind CSS
- Three.js
- React Three Fiber
- Drei
- `@pixiv/three-vrm`

---

## 7. Development Levels

## Level 1 — The Body and Room Foundation

**Status: Achieved / prototype complete**

The current repository already establishes the first level of the product:

- browser-based companion room interface;
- two-column chat and avatar layout;
- Three.js rendering environment;
- React Three Fiber scene;
- VRM avatar loading;
- camera and orbit controls;
- initial visual identity for Azariel Room.

### Level 1 success condition

> Azariel can appear inside a functioning web-based 3D environment.

This condition has been achieved.

---

## Level 2 — A Living Avatar

**Goal:** Make the avatar feel alive even before AI conversation is connected.

### Features

- Automatic blinking
- Subtle breathing or idle motion
- Stable standing or seated pose
- Improved camera framing
- Better lighting and background
- Basic expression controls
- Basic gesture controls such as wave, nod, and thinking pose
- Full-screen mode for desktop or projector display

### Success condition

> Azariel can remain on screen naturally, blink, idle, and perform a small set of expressions and gestures.

---

## Level 3 — The Voice

**Goal:** Allow the avatar to speak typed text.

### Features

- Text input field
- Text-to-speech integration
- Audio playback
- Basic mouth movement or lip-sync
- Expression selection while speaking
- Voice mute and volume controls

### Success condition

> A user can type a sentence and hear Azariel speak it while the avatar’s mouth moves.

---

## Level 4 — The Ears

**Goal:** Allow the user to speak to the application.

### Features

- Push-to-talk microphone control
- Speech-to-text transcription
- Visible microphone status
- Display of recognized speech
- Echo and accidental feedback protection

### Success condition

> A user can press a microphone button, speak, and see the words correctly recognized inside Azariel Room.

---

## Level 5 — The Mind

**Goal:** Connect the avatar experience to an AI conversation service.

### Features

- AI backend connection
- Conversation history
- Structured AI response data
- Response text plus optional emotion and gesture metadata
- Voice output from AI responses
- Simple safety and failure handling

### Example structured response

```json
{
  "text": "Good morning. What shall we build today?",
  "expression": "happy",
  "gesture": "wave"
}
```

### Success condition

> The user can speak or type, receive an AI-generated answer, and watch Azariel speak and react.

---

## Level 6 — The MCP Nervous System

**Goal:** Allow an AI client to control Azariel Room through a small, secure set of tools.

### Proposed MCP tools

```text
avatar.speak
avatar.set_expression
avatar.play_gesture
avatar.change_scene
avatar.show_message
avatar.get_status
```

### Proposed connection

```text
AI client
   ↓ MCP
Azariel MCP server
   ↓ WebSocket or local API
Azariel Room
```

### Security principle

The first MCP implementation should control only the avatar and room. It should not expose arbitrary terminal commands or unrestricted computer access.

### Success condition

> An approved AI client can trigger a speech line, expression, or gesture inside Azariel Room.

---

## Level 7 — Projector Companion Mode

**Goal:** Transform Azariel Room into an ambient room companion.

### Hardware concept

- Windows PC or compact computer
- Projector or second display
- USB conference speakerphone or microphone array
- Speaker with echo cancellation
- Optional remote control or physical microphone button

### Features

- Projector-friendly full-screen interface
- Large, uncluttered avatar view
- Push-to-talk mode
- Optional subtitles
- Sleep and do-not-disturb modes
- Screen-dimming and idle states

### Success condition

> Azariel can appear on a wall, hear the user through a room microphone, and answer through a speaker with synchronized animation.

---

## Level 8 — Mobile Companion

**Goal:** Let the avatar travel with the user.

### Possible mobile modes

- Full mobile application
- Android picture-in-picture avatar
- Conversation bubble
- Optional floating overlay mode

### Success condition

> The user can minimize the mobile app and continue seeing a small animated avatar while speaking with the AI.

---

## Level 9 — Spatial and Holographic Displays

**Goal:** Replace the flat display layer while preserving the same AI, voice, animation, and control architecture.

Possible display experiments may include:

- transparent display panels;
- Pepper’s Ghost-style projection;
- volumetric or fan-based displays;
- augmented-reality glasses;
- spatial-computing headsets;
- future holographic display hardware.

### Success condition

> The existing avatar system can be rendered through a spatial display without rebuilding the conversational core.

---

## 8. Minimum Viable Product

The recommended MVP is intentionally narrow:

> Load one VRM avatar in Azariel Room, display it full-screen, allow a user to type a sentence, and make the avatar speak it with basic lip-sync and one of several expressions.

### MVP must-have features

- Existing VRM loading
- Stable avatar pose and framing
- Idle blinking
- Text input
- Text-to-speech
- Basic lip-sync
- Three to five expressions
- Full-screen projector mode

### Not required for the first MVP

- Mobile app
- Wake-word detection
- Long-term memory
- User accounts
- Smart-home control
- n8n integration
- Public marketplace submission
- Holographic hardware

---

## 9. Immediate Backlog

### Next milestone: Level 2 — A Living Avatar

1. Inspect the loaded VRM expression manager.
2. Add automatic blinking.
3. Add a subtle idle or breathing animation.
4. Correct the avatar’s default pose and camera framing.
5. Add buttons for neutral, happy, thoughtful, and concerned expressions.
6. Add one wave or nod animation.
7. Add a full-screen mode suitable for a projector.
8. Test performance in Chrome or Edge.

### Following milestone: Level 3 — The Voice

1. Add a text input and Speak button.
2. Select an initial browser or local text-to-speech engine.
3. Play generated speech audio.
4. Add simple audio-driven mouth movement.
5. Map expression selection to the spoken line.

---

## 10. Key Unknowns to Test

- Which VRM version and expression system does the current avatar use?
- What is the most natural lightweight idle-animation method?
- Is browser-based text-to-speech sufficient for the prototype?
- How accurate can browser-based lip-sync become without a dedicated service?
- Should the first AI connection use an OpenAI API backend, an MCP app, or both?
- Can projector mode maintain acceptable performance on the target PC?
- Which microphone and echo-cancellation setup works best across a room?
- How should conversation privacy and microphone activity be communicated visually?

---

## 11. Product Principles

### Presence before complexity

The avatar should first feel alive. Additional integrations matter only after the visual and conversational experience feels coherent.

### One level at a time

Each level must produce a visible, demonstrable improvement. The project should not attempt voice, MCP, mobile, and spatial display simultaneously.

### User-controlled embodiment

The long-term platform should allow users to choose or upload their own compatible VRM avatar.

### Privacy by design

Microphone state, data transfer, and tool permissions must always be visible and understandable.

### Safe tools by default

MCP tools should begin with a small avatar-only surface and grow only when necessary.

### Cross-device foundation

The core avatar, conversation, animation, and command structures should be designed so the display layer can later move from browser to projector, mobile, or spatial hardware.

---

## 12. Long-Term Positioning

Azariel Room can be described as:

> A web-based embodiment layer for AI companions, combining VRM avatars, voice, expressive animation, and secure tool control across desktop, projector, mobile, and future spatial displays.

It shares some conceptual territory with character-chat platforms, virtual assistants, VTuber tools, and ambient-computing devices, but its distinguishing purpose is to connect **conversation, embodiment, and useful action** in one coherent experience.

---

## 13. Current Decision

The current `azariel-room` repository will remain the primary home of this concept.

There is no need to create a duplicate Feathers avatar repository at this stage. Azariel Room already contains the Level 1 implementation and can evolve through the levels described in this roadmap.

A broader platform name may be introduced later if the software becomes avatar-neutral and supports many users, characters, or devices. Until then, Azariel Room is both the prototype and the living laboratory for the idea.

---

## 14. Next Action

> Begin Level 2 by making Azariel blink automatically and remain naturally alive through a subtle idle animation.

That is the next smallest visible heartbeat of the project.
