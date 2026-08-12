# 🚀 Modern 2-Column Portfolio Launchpad

A clean, ultra-modern, single-screen (**100vh / 100dvh, zero scroll**) landing page and redirection portal built with **pure HTML, CSS, and Vanilla JavaScript**.

Designed specifically for static hosting (such as **GitHub Pages**, Vercel, Netlify, or Cloudflare Pages), this launchpad features a 2-column layout with user profile information on the left and action link cards on the right.

---

## ✨ Features & Architecture

- **📐 2-Column Layout**: Left column displays status badge, avatar photo, name, title, bio, and location. Right column presents action link cards and featured portfolio destination.
- **🟢 Fixed Contained Status Dot**: Pulsating status dot (`Available for Hire`) is tightly contained within the badge pill with zero overflow or text shift.
- **🎨 Refined High-End Palette**: Deep midnight slate background (`#090d16`) with subtle ambient glow orbs and clean, subtle glass borders (`rgba(255, 255, 255, 0.08)`).
- **⚡ Zero Build Tools & Zero Dependencies**: Powered strictly by raw HTML5, CSS3, and modern JavaScript. No node modules, build scripts, or framework overhead required.
- **📱 100dvh Single Screen Viewport**: Fits perfectly within a single screen on any device (Desktop, Laptop, Tablet, Mobile) with zero vertical scrollbars.
- **⚙️ Dynamic Configuration (`config.js`)**: Easily update your name, bio, profile picture, location, and links from a single configuration file.
- **🙈 Smart Conditional Hiding**: If any field, link, or photo option is set to empty (`""`) or `enabled: false`, it is automatically hidden from the DOM without breaking the layout.
- **📷 Profile Photo Support**: Toggle photo display on/off with custom image path or external URL.
- **📋 One-Click Email Copying**: Built-in clipboard copying with instant toast popup feedback.
- **⏱️ Optional Auto-Redirection**: Enable automatic countdown timer to redirect visitors to your main portfolio after a specified delay (with a visual cancel button).

---

## 🛠️ How to Configure (`config.js`)

All content is managed through [`config.js`](file:///mnt/01DAAF995C961E10/personal_projects/ashfatul.github.io/config.js). Open `config.js` in any code editor to customize your details:

### 1. Personal Information (Left Column)
```javascript
window.CONFIG = {
  name: "Ashfatul Islam",
  title: "Full-Stack Web Developer & Engineer",
  bio: "Building modern web experiences, applications, & digital products.",
  location: "Bangladesh",
  ...
```

### 2. Profile Photo / Avatar
Toggle photo display on/off or change the URL:
```javascript
photo: {
  show: true, // set to false to hide avatar
  url: "res/img/ashfatul.jpg",
  alt: "Ashfatul Islam Profile Photo"
}
```

### 3. Primary Featured Destination (Main Portfolio)
Highlight your primary portfolio website:
```javascript
primaryFeatured: {
  enabled: true,
  badge: "MAIN PORTFOLIO",
  title: "Visit Full Interactive Portfolio",
  description: "Explore my interactive showcase of web apps & case studies.",
  url: "https://ashfatul-islam.web.app/",
  buttonText: "Launch Portfolio 🚀",
  icon: "globe"
}
```

### 4. Links & Action Cards (Right Column)
Add, edit, or disable links. Set `enabled: false` or leave `url: ""` to hide any link automatically:
```javascript
links: [
  {
    id: "resume",
    enabled: true,
    title: "Download Resume / CV",
    description: "Front-End & Engineering Resume",
    url: "https://drive.google.com/file/d/...",
    icon: "file-text",
    badge: "PDF"
  },
  {
    id: "github",
    enabled: true,
    title: "GitHub Profile",
    description: "@ashfatul • Repositories",
    url: "https://github.com/ashfatul",
    icon: "github",
    badge: "Code"
  },
  {
    id: "email",
    enabled: true,
    title: "Direct Email",
    description: "ashfatul.dev@gmail.com",
    url: "mailto:ashfatul.dev@gmail.com",
    emailAddress: "ashfatul.dev@gmail.com",
    icon: "mail",
    isEmail: true,
    badge: "Copy Email"
  }
]
```

---

## 🌐 Deployment (GitHub Pages)

Since this project relies purely on static files:

1. Push your changes to your GitHub repository:
   ```bash
   git add .
   git commit -m "Update portfolio launchpad to 2-column layout"
   git push origin main
   ```
2. Navigate to **Settings > Pages** in your GitHub repository.
3. Under **Build and deployment > Source**, select **Deploy from a branch**.
4. Choose the `main` (or `master`) branch and select root `/`.
5. Click **Save**. Your site will be live at `https://<username>.github.io`!

---

## 📁 File Structure

```
├── index.html       # 2-Column HTML markup & structure
├── config.js        # User configuration (Name, links, options)
├── app.js           # Dynamic JS engine & event handling
├── style.css        # Responsive 2-column CSS & refined color tokens
├── README.md        # Documentation & deployment guide
└── res/             # Assets (profile image, favicon)
```

---

## 📄 License
Open source and available under the [MIT License](LICENSE).
