# 💝 Valentine's Card for Bethel - React Project

An interactive, animated Valentine's Day card featuring a cute minion character asking "Will you be my Valentine?"

## ✨ Features

- 🎯 Animated minion character with moving eyes and bouncing animation
- 💕 Floating hearts background
- 🎮 Interactive buttons with fun mechanics:
  - "No" button runs away and shrinks when clicked
  - "Yes" button grows bigger each time "No" is clicked
  - "No" button fades away after multiple attempts
- 🎉 Confetti celebration when accepted
- 📱 Fully responsive and mobile-friendly
- ⚡ Built with React and Vite for fast performance

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone or create the project folder**
2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start development server:**
   ```bash
   npm run dev
   ```

4. **Open in browser:**
   - Navigate to `http://localhost:5173`
   - The card will be live with hot-reload!

## 📁 Project Structure

```
valentine-card/
├── public/
├── src/
│   ├── components/
│   │   ├── Minion.jsx              # Minion character component
│   │   ├── FloatingHearts.jsx      # Background floating hearts
│   │   └── ConfettiCelebration.jsx # Celebration confetti
│   ├── styles/
│   │   ├── App.css                 # Main app styles
│   │   ├── Minion.css              # Minion character styles
│   │   └── FloatingHearts.css      # Floating hearts styles
│   ├── App.jsx                     # Main app component
│   └── main.jsx                    # Entry point
├── index.html                      # HTML template
├── package.json                    # Dependencies
├── vite.config.js                  # Vite configuration
└── README.md                       # This file
```

## 🎨 Customization

### Change the Name
In `src/App.jsx`, line 76:
```jsx
Hey <span className="name">Bethel</span>, would you be my Valentine? 💝
```

### Change Colors
Edit the CSS variables in `src/styles/App.css`:
```css
/* Primary color */
.yes-btn {
  background: #ff1744; /* Change this */
}

/* Background gradient */
body {
  background: linear-gradient(135deg, #ff9a9e 0%, #fad0c4 50%, #ffd1ff 100%);
}
```

### Change Messages
In `src/App.jsx`, the `noMessages` array (line 15):
```jsx
const noMessages = [
  "Are you sure? 🥺",
  "Think again! 💔",
  // Add your own messages here
];
```

### Change Acceptance Message
In `src/App.jsx`, the `handleYes` function (line 27):
```jsx
✨ Of course you would!! ✨
💖🌹😍🎉💕🥰💝✨🌸💘
```

## 🛠️ Build for Production

```bash
npm run build
```

This creates an optimized build in the `dist/` folder.

## 🌐 Deployment Options

### Option 1: Netlify (Recommended - Easiest!)
1. Build the project: `npm run build`
2. Go to [netlify.com](https://netlify.com)
3. Drag and drop the `dist` folder
4. Get your link and share it! 🎉

### Option 2: Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts
4. Get your deployed URL!

### Option 3: GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json scripts:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d dist"
   ```
3. Run: `npm run deploy`

## 🐛 Troubleshooting

### Port already in use
```bash
npm run dev -- --port 3001
```

### Changes not showing
- Hard refresh: `Ctrl + Shift + R` (Windows) or `Cmd + Shift + R` (Mac)
- Clear browser cache
- Restart dev server

### Module not found errors
```bash
npm install
# or
npm ci
```

## 📦 Technologies Used

- **React** - UI library
- **Vite** - Build tool and dev server
- **CSS3** - Animations and styling
- **JavaScript ES6+** - Modern JavaScript features

## 💡 Tips

- The "No" button starts running away after 3 clicks
- The "No" button fades away after 6 clicks
- Auto-accepts after 10 "No" clicks
- All animations are CSS-based for smooth performance
- Fully keyboard accessible

## 📝 License

Free to use for personal Valentine's Day proposals! 💕

## 🤝 Contributing

Feel free to fork and customize for your own Valentine! Share the love! ❤️

---

Made with ❤️ for Bethel

**Good luck with your proposal! 💝**