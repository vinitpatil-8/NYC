# NYC — Not Your Calc 🧮

### Your calculations. Our judgment.

A calculator that does more than calculate. It watches, judges, and occasionally questions your mathematical decisions.

<p align="center">
  <a href="https://notyourcalc.vercel.app/">
    <img src="https://img.shields.io/badge/TRY%20NYC-Live%20Demo-F96E46?style=for-the-badge" alt="Live Demo"/>
  </a>
  <img src="https://img.shields.io/badge/React-2026-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React"/>
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript"/>
  <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite"/>
  <img src="https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind CSS"/>
</p>

---

## 👀 What is NYC?

**NYC (Not Your Calc)** is a playful, interactive calculator with a personality of its own.

It performs ordinary mathematical operations, but the experience is anything but ordinary. Instead of simply displaying an answer, NYC is designed to react to the way you calculate, deliver context-aware roasts, and make even the most questionable arithmetic entertaining.

Think of it as a calculator with opinions.

No complicated dashboards. No accounts. No unnecessary features. Just calculations, expressions, a pair of expressive eyes, and a little bit of attitude.

🔗 **Live Demo:** https://notyourcalc.vercel.app/

---

## 💭 The story behind it

A few years ago, I built a basic calculator by following a YouTube tutorial.

It was one of those little beginner projects that you build, learn from, and eventually move on from.

Fast forward a few years, and I found myself building a calculator again.

My dad was amused that I was making a calculator all over again. But this time, I didn't want to build just another calculator.

I wanted to give it a personality.

What started as a small weekend project during Diwali turned into an experiment with React, TypeScript, animations, component libraries, expressive UI elements, and a rather unusual idea:

**What if your calculator had something to say about your calculations?**

And that's how NYC came to life.

---

## ✨ Features

### 🧮 The calculator
- Standard arithmetic operations: addition, subtraction, multiplication, and division.
- Parentheses for more complex expressions.
- Decimal number support.
- Unary negative number support.
- Clear and delete functionality.
- Mathematical expression evaluation powered by `mathjs`.
- Calculation history to support contextual interactions.

### 💬 The roast system
NYC isn't supposed to give the same generic response after every calculation.

The goal is to make its reactions depend on what you actually calculate.

The roast system is currently being refined, with ideas including:
- Context-aware reactions to calculations.
- Different roast categories and response styles.
- Reactions to interesting, unusual, or questionable results.
- Expressive eye animations that respond to the roast.
- A playful experience that evolves as you keep calculating.

### 👁️ Expressive eyes
The eyes are more than decoration.

They bring some personality to the interface, with cursor tracking and the ability to react to the calculator's changing mood.

### 🎨 UI and experience
- Custom light and dark themes.
- A retro-inspired comic aesthetic.
- Responsive layouts for mobile, tablet, and desktop.
- Animated headings and comic-style text.
- Custom loading screen.
- Subtle background effects.
- A playful interface built around a distinctive color palette.

---

## 🎬 The interaction I'm building

One of the main ideas behind NYC is that the interface itself should react to the user's first calculation.

The intended experience:

1. **The first impression:** The calculator appears centered on the screen, giving the interface a clean starting point.
2. **The first equals (`=`):** Once the user completes their first calculation, the calculator smoothly transitions into its assigned position.
3. **The reveal:** The roast section appears, introducing NYC's personality.
4. **What happens next:** The calculator stays in its assigned position while subsequent calculations trigger new reactions.

The transition is meant to make the roast feel like something the user discovers, rather than something competing for attention from the beginning.

This interaction and the roast engine are the primary areas I'm working on.

---

## 🛠️ Built with

NYC is built with a combination of frontend technologies and third-party UI components.

| Technology | Purpose |
|---|---|
| [React](https://react.dev/) | Component-based UI |
| [TypeScript](https://www.typescriptlang.org/) | Type safety |
| [Vite](https://vite.dev/) | Development and build tooling |
| [Tailwind CSS](https://tailwindcss.com/) | Styling and responsive layouts |
| [mathjs](https://mathjs.org/) | Mathematical expression evaluation |
| [Motion](https://motion.dev/) | Animations and transitions |
| [Lucide](https://lucide.dev/) | Interface icons |
| [Font Awesome](https://fontawesome.com/) | Additional icons |

### UI components and inspiration

NYC also uses several community-built components:

| Component | Source | Usage |
|---|---|---|
| FuzzyText | [React Bits](https://reactbits.dev/) | Animated heading |
| ComicText | [Magic UI](https://magicui.design/) | Comic-style text |
| Eye Tracking | [Craftwork.design](https://craftwork.design/) / [Componentry](https://github.com/harshjdhv/componentry) | Interactive eyes |
| Dark/Light Mode | [Lightswind UI](https://lightswind.com/) | Theme switching |

A big thank-you to the creators and maintainers of these tools and components. ❤️

---

## 🎨 Color palette

NYC uses a playful palette built around warm backgrounds, bold accents, and charcoal typography.

| Color | Hex | Role |
|---|---|---|
| Charcoal | `#545863` | Primary text |
| Electric Aqua | `#00E8FC` | Interactive accents |
| Burnt Peach | `#F96E46` | Primary accent |
| Tuscan Sun | `#F9C846` | Highlights |
| Soft Blush | `#FFE3E3` | Light theme surfaces |
| Light Background | `#FFF8F8` | Light theme background |
| Dark Background | `#0F1016` | Dark theme background |
| Dark Surface | `#1E2028` | Dark theme surfaces |

The idea was to keep the interface expressive without making it overwhelmingly neon or visually noisy.

---

## 🚀 Getting started

Want to run NYC locally?

### Prerequisites

- Node.js
- npm
- Git

### 1. Clone the repository

```bash
git clone <YOUR_GITHUB_REPOSITORY_URL>
```

### 2. Navigate into the project

```bash
cd <YOUR_PROJECT_FOLDER>
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

Vite will provide a local URL where you can explore NYC.

### 5. Build for production

```bash
npm run build
```

---

## 🙌 Acknowledgements

This project wouldn't look the way it does without the work of several amazing creators and open-source projects.

Special thanks to:

- [React Bits](https://reactbits.dev/) for FuzzyText.
- [Magic UI](https://magicui.design/) for ComicText.
- [Craftwork.design](https://craftwork.design/) for the eye-tracking component inspiration.
- [Harsh Jadhav / Componentry](https://github.com/harshjdhv/componentry) for the Eye Tracking implementation.
- [Lightswind UI](https://lightswind.com/) for the dark/light mode component.
- [mathjs](https://mathjs.org/) for mathematical expression evaluation.
- [Lucide](https://lucide.dev/) and [Font Awesome](https://fontawesome.com/) for icons.
- The React and frontend communities for making projects like this possible.

**Eye Tracking component attribution:**

The Eye Tracking component from Componentry by Harsh Jadhav is licensed under the MIT License.

Source: https://github.com/harshjdhv/componentry  
Commit: `0fd9e13`  
License: https://github.com/harshjdhv/componentry/blob/main/LICENSE

Third-party components and libraries retain their respective licenses.

---

## 💡 Why build another calculator?

Because not every project needs to solve a serious problem.

Sometimes, building something just because the idea makes you smile is enough.

NYC is a small experiment in frontend development, interaction design, animation, and giving personality to an otherwise ordinary interface.

And honestly?

**Maybe your calculation is correct. NYC just doesn't have to agree.**

<p align="center">
  <b>NYC — Not Your Calc</b><br/>
  Your calculations. Our judgment. 🧮
</p>