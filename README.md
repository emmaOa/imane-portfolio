# Imane Ouazzani Chahdi - Portfolio Website

A professional, modern, and responsive portfolio website built with Next.js and Tailwind CSS for Imane Ouazzani Chahdi, a Full Stack Developer from Fes, Morocco.

## Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Modern UI/UX**: Clean and professional design with smooth animations
- **SEO Optimized**: Proper meta tags and semantic HTML structure
- **Accessibility**: WCAG guidelines compliance with proper contrast and keyboard navigation
- **Performance**: Fast loading with optimized components and assets

## Sections

1. **Home**: Hero section with name, title, and call-to-action buttons
2. **About**: Personal information, summary, and LinkedIn profile link
3. **Projects**: Showcase of 4 main projects with technologies and GitHub links
4. **Skills**: Grid of technical skills with icons and highlighted specializations
5. **Education**: Information about 1337 Coding School experience
6. **Contact**: Contact form and social media links

## Tech Stack

- **Framework**: Next.js 14
- **Styling**: Tailwind CSS
- **Icons**: React Icons
- **Language**: TypeScript
- **Deployment**: Static export ready

## Getting Started

### Prerequisites

- Node.js 18+ installed on your machine
- npm or yarn package manager

### Installation

1. Clone the repository or download the files
2. Install dependencies:
   ```bash
   npm install
   ```

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Build for Production

To create an optimized production build:

```bash
npm run build
```

This will generate a static export in the `out` directory that can be hosted on any static hosting service.

### Deployment

The portfolio is configured for static export and can be deployed to:
- Vercel
- Netlify
- GitHub Pages
- Any static hosting service

## Customization

### Personal Information
Update the personal information in the component files:
- `components/AboutSection.tsx` - Personal details and summary
- `components/ContactSection.tsx` - Contact information
- `components/ProjectsSection.tsx` - Projects and descriptions

### Styling
- Colors and themes can be customized in `tailwind.config.js`
- Global styles are in `app/globals.css`
- Component-specific styles are within each component file

### Content
- Projects: Edit the projects array in `ProjectsSection.tsx`
- Skills: Modify the skills array in `SkillsSection.tsx`
- Education: Update content in `EducationSection.tsx`

## Contact

- **Email**: imaneouazzani.pro@gmail.com
- **Phone**: +212 641323891
- **LinkedIn**: [Imane Ouazzani Chahdi](https://www.linkedin.com/in/imane-ouazzani-chahdi)
- **GitHub**: [emmaOa](https://github.com/emmaOa)

## License

This project is open source and available under the [MIT License](LICENSE).
