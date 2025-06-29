# Kanha Studio - Creative Design Portfolio

A beautiful, Krishna-inspired portfolio website for Kanha Studio with mobile-first responsive design and modern animations.

## Features

- 🎨 Krishna-inspired color palette with professional design
- 📱 Mobile-first responsive design
- ⚡ Fast loading with Vite build optimization
- 🎭 Custom animations and hover effects
- 🎯 SEO optimized with proper meta tags
- 🔗 Social media integration (Instagram, WhatsApp)

## Tech Stack

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS with custom Krishna color scheme
- **UI Components**: Radix UI + shadcn/ui
- **Routing**: Wouter
- **Animations**: CSS animations with custom effects

## Deployment

### Netlify Deployment

This project is optimized for Netlify deployment:

1. Connect your GitHub repository to Netlify
2. Use these build settings:
   - **Build command**: `vite build --outDir dist`
   - **Publish directory**: `dist`
   - **Node version**: 18

The `netlify.toml` configuration is already included for automatic deployment.

### Manual Deployment

```bash
# Install dependencies
npm install

# Build for production
npm run build

# The built files will be in the 'dist' directory
```

## Development

```bash
# Start development server
npm run dev

# Check TypeScript
npm run check
```

## Project Structure

```
├── client/
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/         # Page components
│   │   ├── lib/           # Utilities and helpers
│   │   └── assets/        # Static assets
│   └── public/            # Public assets (logo, etc.)
├── server/                # Express server (for development)
├── shared/                # Shared types and schemas
└── netlify.toml          # Netlify deployment config
```

## Color Palette

- **Midnight Blue**: `hsl(245, 58%, 51%)` - Primary brand color
- **Peacock Green**: `hsl(179, 67%, 29%)` - Accent color
- **Lotus Pink**: `hsl(348, 60%, 81%)` - Highlight color
- **Soft Gold**: `hsl(51, 66%, 53%)` - Secondary accent
- **Vrindavan Beige**: `hsl(48, 47%, 94%)` - Background color

## Pages

1. **Home** - Hero section with brand introduction
2. **About** - Studio story and philosophy
3. **Services** - Design services offered
4. **Portfolio** - Project showcase gallery
5. **Contact** - Contact information and social links

## License

MIT License - Feel free to use this project as inspiration for your own portfolio.