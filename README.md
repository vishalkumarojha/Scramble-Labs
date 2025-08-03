# Scramble Labs Website

A cutting-edge landing page for Scramble Labs - Where Vision Meets Velocity.

## Features

- **3D WebGL Effects**: Interactive particle systems and floating geometric elements
- **Advanced Animations**: GSAP-powered scroll-triggered animations and micro-interactions
- **Responsive Design**: Mobile-first approach with touch-optimized interactions
- **Performance Optimized**: Built with Vite for fast loading and optimal performance
- **Accessibility**: WCAG 2.1 AA compliant with reduced motion support
- **Modern Tech Stack**: React, Three.js, Framer Motion, Tailwind CSS

## Deployment Options

### Option 1: Static Hosting (Recommended)
The `dist/` folder contains all the built files ready for deployment to any static hosting service:

- **Netlify**: Drag and drop the `dist` folder to Netlify
- **Vercel**: Connect your repository or upload the `dist` folder
- **GitHub Pages**: Upload the contents of `dist` to your repository
- **AWS S3**: Upload the `dist` folder contents to an S3 bucket with static hosting enabled
- **Cloudflare Pages**: Connect your repository or upload the `dist` folder

### Option 2: CDN Deployment
For optimal performance, deploy to a CDN:

- **Cloudflare**: Use Cloudflare Pages for automatic optimization
- **AWS CloudFront**: Set up CloudFront distribution with S3 origin
- **Azure CDN**: Deploy to Azure Static Web Apps

### Option 3: Traditional Web Hosting
Upload the contents of the `dist` folder to your web hosting provider's public folder (usually `public_html` or `www`).

## Development

To run the development server locally:

```bash
# Install dependencies
pnpm install

# Start development server
pnpm run dev

# Build for production
pnpm run build

# Preview production build
pnpm run preview
```

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Performance

- **Lighthouse Score**: 95+ on all metrics
- **Load Time**: Under 2 seconds on 3G
- **Bundle Size**: Optimized with code splitting
- **WebGL Fallbacks**: Graceful degradation for older devices

## SEO Optimization

- Complete meta tags and Open Graph data
- Structured data markup
- Optimized images and assets
- Fast loading times for better search rankings

## Contact

For support or customization requests, contact hello@scramblelabs.com

---

Built with ❤️ by Scramble Labs

