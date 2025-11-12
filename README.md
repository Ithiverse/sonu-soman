# Sonu Soman - Portfolio Website

A minimalist, elegant portfolio website built with React, Vite, and Space Grotesk font. Features smooth animations, responsive design, and optimized performance.

## 🚀 Features

- **Minimalist Design** - Clean, elegant interface with Space Grotesk typography
- **Fully Responsive** - Perfect display on all devices
- **Fast Performance** - Built with Vite for lightning-fast load times
- **Smooth Animations** - Subtle transitions and hover effects
- **SEO Optimized** - Meta tags and semantic HTML
- **Dark Theme** - Modern dark color scheme

## 📋 Sections

- **Hero** - Introduction with key metrics and CTAs
- **About** - Professional summary and core competencies
- **Projects** - Featured work with tech stacks and metrics
- **Experience** - Professional timeline
- **Contact** - Multiple contact methods

## 🛠️ Tech Stack

- **React 18** - UI framework
- **Vite** - Build tool and dev server
- **Lucide React** - Icon library
- **Space Grotesk** - Google Fonts typography
- **CSS3** - Custom styling with CSS variables

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/sonusofficial/portfolio-website.git
cd portfolio-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The site will be available at `http://localhost:5173`

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. **Install Vercel CLI** (optional):
```bash
npm install -g vercel
```

2. **Deploy via GitHub** (Easiest):
   - Push your code to GitHub
   - Go to [vercel.com](https://vercel.com)
   - Click "Import Project"
   - Select your GitHub repository
   - Vercel will auto-detect Vite and deploy

3. **Deploy via CLI**:
```bash
vercel
```

### Deploy to Render

1. Create a new **Static Site** on [render.com](https://render.com)
2. Connect your GitHub repository
3. Set build settings:
   - **Build Command**: `npm run build`
   - **Publish Directory**: `dist`
4. Click "Create Static Site"

### Deploy to Netlify

1. Go to [netlify.com](https://netlify.com)
2. Click "Add new site" > "Import an existing project"
3. Connect to GitHub and select your repository
4. Build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
5. Click "Deploy site"

## 📝 Customization

### Update Personal Information

Edit `src/App.jsx` to customize:

- **Projects** - Update the `projects` array
- **Experience** - Modify the `experience` array
- **Contact Info** - Change email, LinkedIn, GitHub links
- **Stats** - Update the hero stats section

### Update Styling

Edit `src/App.css` for style changes:

- **Colors** - Modify CSS variables in `src/index.css`
- **Typography** - Adjust font sizes and weights
- **Spacing** - Change padding and margins
- **Animations** - Customize transitions and hover effects

### Change Font

To use a different font, update the Google Fonts link in `index.html`:

```html
<link href="https://fonts.googleapis.com/css2?family=Your+Font:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```

Then update the font-family in `src/index.css`:

```css
body {
  font-family: 'Your Font', sans-serif;
}
```

## 📱 Responsive Breakpoints

- **Desktop**: 1200px and above
- **Tablet**: 968px - 1199px
- **Mobile**: 640px and below

## 🎨 Color Scheme

```css
--bg-primary: #0a0a0a (Dark background)
--bg-secondary: #111111 (Secondary background)
--text-primary: #ffffff (Primary text)
--text-secondary: #a0a0a0 (Secondary text)
--accent: #3b82f6 (Blue accent)
--border: #1f1f1f (Border color)
```

## 🔧 Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist` folder.

## 📄 License

MIT License - feel free to use this template for your own portfolio!

## 📬 Contact

- **Email**: sonusoman5790@gmail.com
- **LinkedIn**: [linkedin.com/in/sonusofficial](https://linkedin.com/in/sonusofficial)
- **GitHub**: [github.com/sonusofficial](https://github.com/sonusofficial)

---

Built with ❤️ using React + Vite
