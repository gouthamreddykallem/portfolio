# Personal Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS. Features a dark theme, smooth animations, and interactive components to showcase professional experience, projects, and skills.

![Portfolio Preview](/public/portfolio-preview.png)

## ✨ Features

- **Responsive Design**: Fully responsive layout that works on all devices
- **Dark Theme**: Modern dark theme with a professional color scheme
- **Smooth Animations**: Page transitions and scroll animations using Framer Motion
- **Interactive Components**: Dynamic navigation and interactive UI elements
- **Contact Form**: Integrated email contact form using EmailJS
- **Performance Optimized**: Built with Next.js for optimal performance and SEO
- **TypeScript**: Type-safe code with TypeScript
- **Modular Architecture**: Well-organized component structure


## 🛠️ Tech Stack

- [Next.js](https://nextjs.org/) - React framework for production
- [TypeScript](https://www.typescriptlang.org/) - Static type checking
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [EmailJS](https://www.emailjs.com/) - Email integration
- [Lucide React](https://lucide.dev/) - Icon library
- [Headless UI](https://headlessui.dev/) - Unstyled UI components

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn or pnpm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/gouthamreddykallem/portfolio.git
```

2. Navigate to the project directory:
```bash
cd portfolio
```

3. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

4. Create a `.env.local` file in the root directory and add your EmailJS credentials:
```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

5. Start the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## 📦 Project Structure

```
portfolio/
├── src/
│   ├── app/
│   │   ├── components/     # React components
│   │   ├── utils/          # Utility functions
│   │   ├── globals.css     # Global styles
│   │   ├── layout.tsx      # Root layout
│   │   └── page.tsx        # Home page
│   └── ...
├── public/                 # Static assets
├── package.json
├── tailwind.config.ts     # Tailwind configuration
└── tsconfig.json          # TypeScript configuration
```

## 🔧 Configuration

### Tailwind CSS

The project uses Tailwind CSS for styling. You can customize the theme in `tailwind.config.ts`:

```typescript
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx# Personal Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS. Features a dark theme, smooth animations, and interactive components to showcase professional experience, projects, and skills.

![Portfolio Preview](/public/portfolio-preview.png)

## ✨ Features

- **Responsive Design**: Fully responsive layout that works on all devices
- **Dark Theme**: Modern dark theme with a professional color scheme
- **Smooth Animations**: Page transitions and scroll animations using Framer Motion
- **Interactive Components**: Dynamic navigation and interactive UI elements
- **Contact Form**: Integrated email contact form using EmailJS
- **Performance Optimized**: Built with Next.js for optimal performance and SEO
- **TypeScript**: Type-safe code with TypeScript
- **Modular Architecture**: Well-organized component structure

## 🛠️ Tech Stack

- [Next.js](https://nextjs.org/) - React framework for production
- [TypeScript](https://www.typescriptlang.org/) - Static type checking
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [EmailJS](https://www.emailjs.com/) - Email integration
- [Lucide React](https://lucide.dev/) - Icon library
- [Headless UI](https://headlessui.dev/) - Unstyled UI components
