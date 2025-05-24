# Personal Dashboard - Modern Portfolio Website

A beautifully designed, responsive personal dashboard built with Next.js and Tailwind CSS. This portfolio website showcases professional experience, skills, and projects in an elegant and interactive way.

## Features

- 🎨 Modern, minimalist design with attention to detail
- 🌓 Dark/light mode with system preference detection
- 📱 Fully responsive across all devices
- ⚡ Fast and optimized performance
- 🔄 Smooth scrolling and animations
- 🎯 Clear section navigation
- 📊 Visual skill progress indicators
- 🖼️ Project showcase with images
- 📝 Detailed experience timeline

## Sections

- **Profile**: Personal information, bio, and contact details
- **Experience**: Professional background and education timeline
- **Skills**: Technical skills with proficiency indicators
- **Projects**: Featured projects with descriptions and technologies
- **Additional**: Goals, interests, and certifications

## Tech Stack

- **Framework**: Next.js 13 with App Router
- **Styling**: Tailwind CSS
- **Components**: shadcn/ui
- **Icons**: Lucide React
- **Typography**: Inter font (Google Fonts)
- **Animations**: Tailwind CSS animations
- **Theme**: Next-themes for dark/light mode

## Getting Started

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd personal-dashboard
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   ├── layout/
│   │   ├── header.tsx
│   │   ├── footer.tsx
│   │   └── scroll-to-top.tsx
│   ├── sections/
│   │   ├── profile.tsx
│   │   ├── experience.tsx
│   │   ├── skills.tsx
│   │   ├── projects.tsx
│   │   └── additional.tsx
│   └── ui/
│       └── [shadcn-ui components]
├── lib/
│   ├── data.ts
│   └── utils.ts
└── public/
```

## Customization

1. Update personal information in `lib/data.ts`
2. Modify theme colors in `app/globals.css`
3. Adjust component layouts in respective files under `components/`

## Building for Production

```bash
npm run build
```

This will create an optimized production build in the `.next` directory.

## Deployment

This project is configured for static exports and can be deployed to any static hosting platform:

1. Build the project:
   ```bash
   npm run build
   ```

2. Deploy the `out` directory to your hosting platform of choice (Vercel, Netlify, etc.)

## Performance Optimization

- Images are optimized using Next.js Image component
- Fonts are preloaded using Next.js font optimization
- Components are client/server split for optimal loading
- CSS is purged and minimized in production

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.