# Valentine's Card for Bethel - React Project Setup Guide

## Step-by-Step Guide to Create This Project in VSCode

### Prerequisites
Before you begin, make sure you have:
- **Node.js** installed (version 14 or higher) - Download from https://nodejs.org/
- **VSCode** installed - Download from https://code.visualstudio.com/
- Basic knowledge of terminal/command prompt

---

## Step 1: Create the React Project

1. **Open VSCode**

2. **Open Terminal** in VSCode:
   - Click `Terminal` → `New Terminal` (or press `` Ctrl + ` ``)

3. **Navigate to where you want to create the project**:
   ```bash
   cd Desktop
   # Or wherever you want to create the project
   ```

4. **Create a new React app using Vite** (faster than Create React App):
   ```bash
   npm create vite@latest valentine-card -- --template react
   ```
   
   Or if you prefer Create React App:
   ```bash
   npx create-react-app valentine-card
   ```

5. **Navigate into the project folder**:
   ```bash
   cd valentine-card
   ```

6. **Install dependencies**:
   ```bash
   npm install
   ```

---

## Step 2: Project Structure Setup

Your project structure should look like this:

```
valentine-card/
├── public/
├── src/
│   ├── components/
│   │   ├── Minion.jsx
│   │   ├── FloatingHearts.jsx
│   │   └── ConfettiCelebration.jsx
│   ├── styles/
│   │   ├── App.css
│   │   ├── Minion.css
│   │   └── FloatingHearts.css
│   ├── App.jsx
│   └── main.jsx
├── package.json
└── README.md
```

---

## Step 3: Create Component Files

### 3.1 Create the components folder
In the terminal:
```bash
mkdir src/components
mkdir src/styles
```

Or manually:
- Right-click on `src` folder in VSCode
- Select `New Folder`
- Name it `components` and `styles`

---

## Step 4: Copy the Code Files

I'll provide you with all the files. Create each file in VSCode:

### File 1: `src/App.jsx` (Main Component)
- Click on `src` folder
- Right-click → New File
- Name: `App.jsx`
- Copy the code I'll provide below

### File 2: `src/components/Minion.jsx`
- Click on `src/components` folder
- Right-click → New File
- Name: `Minion.jsx`

### File 3: `src/components/FloatingHearts.jsx`
- Same process, create `FloatingHearts.jsx`

### File 4: `src/components/ConfettiCelebration.jsx`
- Same process, create `ConfettiCelebration.jsx`

### File 5: `src/styles/App.css`
- Click on `src/styles` folder
- Create `App.css`

### File 6: `src/styles/Minion.css`
- Create `Minion.css`

### File 7: `src/styles/FloatingHearts.css`
- Create `FloatingHearts.css`

---

## Step 5: Run the Development Server

1. **Start the development server**:
   ```bash
   npm run dev
   ```
   
   (For Create React App, use: `npm start`)

2. **Open in browser**:
   - Vite will show you a URL like `http://localhost:5173`
   - Create React App uses `http://localhost:3000`
   - Open this URL in your browser

3. **See live changes**:
   - Any changes you make will automatically reload in the browser!

---

## Step 6: Build for Production

When you're ready to share:

1. **Create production build**:
   ```bash
   npm run build
   ```

2. **The build files** will be in the `dist` folder (Vite) or `build` folder (CRA)

3. **Deploy options**:
   - **Netlify**: Drag and drop the `dist/build` folder to netlify.com
   - **Vercel**: Connect your GitHub repo to vercel.com
   - **GitHub Pages**: Use `gh-pages` package

---

## Step 7: Deploy to Netlify (Easiest Method)

1. **Build the project**:
   ```bash
   npm run build
   ```

2. **Go to** https://netlify.com

3. **Sign up/Login** (free)

4. **Drag and drop** the `dist` or `build` folder into Netlify

5. **Get your link** - Share it with Bethel! 💕

---

## Troubleshooting

### Issue: "npm not found"
- **Solution**: Install Node.js from https://nodejs.org/

### Issue: Port already in use
- **Solution**: 
  ```bash
  # Kill the process on that port
  npx kill-port 5173
  # Or use a different port
  npm run dev -- --port 3001
  ```

### Issue: Changes not showing
- **Solution**: 
  - Hard refresh: `Ctrl + Shift + R` (Windows) or `Cmd + Shift + R` (Mac)
  - Clear browser cache
  - Restart dev server

### Issue: Module not found
- **Solution**: Make sure all imports match file names exactly (case-sensitive!)

---

## VSCode Extensions (Recommended)

Install these for better development experience:

1. **ES7+ React/Redux/React-Native snippets** - Quick React code snippets
2. **Prettier - Code formatter** - Auto-format your code
3. **Auto Rename Tag** - Automatically rename paired tags
4. **Color Highlight** - Preview colors in CSS
5. **Path Intellisense** - Auto-complete file paths

To install:
- Click Extensions icon in VSCode (left sidebar)
- Search for extension name
- Click Install

---

## Quick Commands Reference

```bash
# Start development server
npm run dev          # Vite
npm start            # Create React App

# Build for production
npm run build

# Install a new package
npm install package-name

# Run tests (if configured)
npm test
```

---

## Next Steps

1. Follow the steps above to set up the project
2. Copy all the code files I'll provide next
3. Run `npm run dev`
4. Open in browser and test!
5. Make it your own - customize colors, messages, etc.
6. Build and deploy to share with Bethel! 💝

---

## Tips for Customization

- **Change colors**: Edit the CSS variables in `App.css`
- **Change messages**: Edit the `noMessages` array in `App.jsx`
- **Change name**: Replace "Bethel" with another name
- **Add music**: Import and play a romantic song on load
- **Add more animations**: Explore CSS animations and React Spring library

---

Good luck! 🚀💕