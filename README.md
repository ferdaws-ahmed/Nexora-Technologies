# Nexora Technologies

A modern, high-performance corporate website built with Next.js 16, featuring cutting-edge AI/ML services showcase with stunning animations and responsive design.

## 🚀 Features

- **Modern Tech Stack**: Built with Next.js 16, React 19, and Tailwind CSS 4
- **Animated Hero Section**: Full-screen slider with Framer Motion animations
- **Dark/Light Theme**: Seamless theme switching with next-themes
- **Responsive Design**: Fully optimized for all devices
- **Service Showcase**: 6 core services with detailed feature lists
- **Interactive Components**: FAQ accordion, contact forms, brand slider
- **Performance Optimized**: Geist fonts, optimized images, lazy loading
- **Accessibility**: WCAG compliant with semantic HTML

## 🛠️ Tech Stack

### Frontend Framework
- **Next.js 16.1.1** - React framework with App Router
- **React 19.2.3** - UI library
- **TypeScript** - Type-safe development

### Styling & UI
- **Tailwind CSS 4** - Utility-first CSS framework
- **DaisyUI 5.5.14** - Component library
- **next-themes 0.4.6** - Theme management

### Animation & Interactions
- **Framer Motion 12.31.1** - Production-ready motion library
- **GSAP 3.14.2** - Professional animation platform
- **Swiper 12.0.3** - Touch slider framework

### Icons & Utilities
- **Lucide React 0.562.0** - Beautiful icon library
- **React Icons 5.5.0** - Comprehensive icon set
- **React Hot Toast 2.6.0** - Toast notifications
- **Sonner 2.0.7** - Modern toast component

### Development Tools
- **ESLint 9** - Code linting
- **Babel React Compiler 1.0.0** - React compiler optimization

## 📦 Installation

1. **Clone the repository**
```bash
git clone https://github.com/your-username/Nexora-Technologies.git
cd Nexora-Technologies
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. **Set up environment variables**
Create a `.env.local` file in the root directory:
```env
# Add your environment variables here
NEXT_PUBLIC_API_URL=your_api_url
```

## 🏃 Development

### Start the development server
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website in your browser.

### Build for production
```bash
npm run build
```

### Start production server
```bash
npm start
```

### Lint code
```bash
npm run lint
```

## 📁 Project Structure

```
Nexora-Technologies/
├── public/                 # Static assets (images, fonts, icons)
├── src/
│   ├── app/               # Next.js App Router pages
│   │   ├── about-us/      # About us page
│   │   ├── careers/       # Careers page
│   │   ├── contact/       # Contact page
│   │   ├── demo/          # Demo page
│   │   ├── projects/      # Projects page
│   │   ├── services/      # Services page
│   │   ├── layout.jsx     # Root layout with theme provider
│   │   ├── page.jsx       # Home page
│   │   └── globals.css    # Global styles
│   ├── components/        # Reusable components
│   │   ├── About/         # About section components
│   │   ├── Careers/       # Careers section components
│   │   ├── Contact/       # Contact form components
│   │   ├── Landing/       # Landing page components
│   │   ├── Projects/      # Projects section components
│   │   ├── Services/      # Services section components
│   │   ├── ThemeProvider.jsx  # Theme context provider
│   │   └── data/          # Component data (JSON-like)
│   └── assets/            # Additional assets
├── .env.local            # Environment variables
├── .gitignore            # Git ignore rules
├── eslint.config.mjs     # ESLint configuration
├── next.config.mjs       # Next.js configuration
├── package.json          # Dependencies and scripts
├── postcss.config.mjs    # PostCSS configuration
├── tailwind.config.js    # Tailwind CSS configuration
└── README.md             # Project documentation
```

## 🎨 Pages & Sections

### Home Page (`/`)
- Hero slider with 4 animated slides
- Brand logo slider
- Features showcase
- Contact form
- FAQ accordion

### Services Page (`/services`)
- 6 core services with detailed descriptions
- Feature lists for each service
- Technology stacks used
- Interactive cards with hover effects

### Projects Page (`/projects`)
- Project portfolio showcase
- Project details and case studies
- Technology highlights

### About Us Page (`/about-us`)
- Company information
- Team details
- Mission and vision

### Careers Page (`/careers`)
- Job listings
- Application form
- Company culture

### Contact Page (`/contact`)
- Contact form
- Location information
- Social media links

## 🌐 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Import project in [Vercel](https://vercel.com/new)
3. Deploy automatically

### Other Platforms
The project can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## 🔧 Configuration

### Tailwind CSS
Customize colors and themes in `tailwind.config.js`

### Next.js
Modify build settings in `next.config.mjs`

### Environment Variables
Add production variables in your deployment platform's dashboard

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 📞 Contact

For inquiries and support:
- Website: [nexora-technologies.com](https://nexora-technologies.com)
- Email: contact@nexora-technologies.com

---

Built with ❤️ using Next.js and modern web technologies
