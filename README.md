# README.md

# Blue Rat Smoke Shop Website

A modern, responsive website for Blue Rat Smoke Shop - Georgia's premier destination for handcrafted smoking accessories.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- pnpm (recommended) or npm

### Installation
```bash
# Clone the repository
git clone [your-repo-url]
cd bluerat-website

# Install dependencies
pnpm install

# Start development server
pnpm run dev
```

### Build for Production
```bash
# Build the project
pnpm run build

# Preview production build
pnpm run preview
```

## 📦 Deployment

### Vercel (Recommended)
1. Push code to GitHub repository
2. Connect repository to Vercel
3. Vercel will automatically detect Vite and deploy

### Manual Deployment
1. Run `pnpm run build`
2. Deploy the `dist/` folder to your hosting provider

## 🏗️ Project Structure

```
bluerat-website/
├── src/
│   ├── components/ui/     # Reusable UI components
│   ├── lib/
│   │   ├── constants.js   # Business data (locations, info)
│   │   └── utils.js       # Utility functions
│   ├── assets/           # Images and static files
│   ├── App.jsx           # Main application component
│   ├── App.css           # Custom styles
│   └── main.jsx          # Application entry point
├── public/               # Static assets
├── package.json          # Dependencies and scripts
├── vite.config.js        # Vite configuration
└── vercel.json           # Vercel deployment config
```

## 🎨 Features

- **Modern Design**: Clean, Apple-inspired aesthetic
- **Responsive**: Optimized for desktop, tablet, and mobile
- **Fast**: Built with Vite for optimal performance
- **SEO Optimized**: Proper meta tags and semantic HTML
- **Interactive**: Smooth animations and hover effects
- **Accessible**: WCAG compliant design

## 📍 Business Information

The website includes accurate information for all four Blue Rat locations:
- Atlanta (Cheshire Bridge Rd)
- Suwanee (Lawrenceville-Suwanee Rd)
- Athens (Baxter St)
- Roswell (Marietta Hwy)

All phone numbers, addresses, and hours are current as of the build date.

## 🛠️ Tech Stack

- **React 19** - UI framework
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Component library
- **Lucide React** - Icon library
- **Framer Motion** - Animation library

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

This is a client project. For updates or modifications, please contact the development team.

## 📄 License

Private project - All rights reserved.

