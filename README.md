
---

# **TaskFlow Landing Page**

A modern, fully responsive landing page for **TaskFlow**—a project management platform designed to streamline team collaboration and boost productivity.

## **Features**

* **Hero Section**: Eye-catching hero with a clear value proposition and call-to-action buttons.
* **Features Section**: Showcase of 4 core product capabilities with modern card designs.
* **Testimonials Section**: Social proof with customer reviews, ratings, and professional avatars.
* **Pricing Section**: Three-tier pricing with clear feature comparisons.
* **Responsive Navigation**: Sticky header with a mobile-friendly menu.
* **Professional Footer**: Company links, social media icons, and additional information.

## **Tech Stack**

* **Next.js 16**: React framework with App Router
* **React 19.2**: Latest version of React for building UI
* **Tailwind CSS v4**: Utility-first CSS framework for styling
* **TypeScript**: Type-safe development for improved code reliability
* **Lucide React**: Beautiful icon system to enhance the UI

## **Design Highlights**

* **Mobile-first**: Fully responsive design that adapts to various screen sizes.
* **Modern Color Palette**: Blue-purple primary colors with orange accents.
* **Smooth Transitions & Hover Effects**: Subtle animations and hover effects to enhance user experience.
* **Semantic HTML**: Ensures accessibility and SEO optimization.
* **Clean Typography**: Uses Geist Sans and Geist Mono fonts for a modern look.
* **Card-based Layouts**: Features cards with subtle shadows and borders to organize content.

## **Getting Started**

### **Prerequisites**

Before getting started, make sure you have the following installed:

* **Node.js 18+**
* **npm** or **yarn** package manager

### **Installation**

1. Clone or download the repository:

   ```bash
   git clone https://github.com/ajaysk3433/Landing-page.git
   cd taskflow-landing-page
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

   Or with yarn:

   ```bash
   yarn install
   ```

3. Run the development server:

   ```bash
   npm run dev
   ```

   Or with yarn:

   ```bash
   yarn dev
   ```

4. Open your browser and go to:

   [http://localhost:3000](http://localhost:3000)

---

## **Project Structure**

The project structure is organized as follows:

```
/taskflow-landing-page
├── app/
│   ├── layout.tsx          # Root layout with fonts and metadata
│   ├── page.tsx            # Main landing page
│   └── globals.css         # Global styles and design tokens
├── components/
│   ├── navigation.tsx      # Header and navigation
│   ├── hero.tsx           # Hero section
│   ├── features.tsx       # Features section
│   ├── testimonials.tsx   # Testimonials section
│   ├── pricing.tsx        # Pricing section
│   └── footer.tsx         # Footer section
└── public/
    └── images/            # Images and assets (e.g., logos, product images)
```

---

## **Customization**

### **Colors**

To customize the color scheme, modify the design tokens in `app/globals.css`:

```css
--color-primary: #4C6EF5;  /* Update primary color */
--color-secondary: #6A4FFF;  /* Update secondary color */
--color-accent: #FF9F00;  /* Update accent color */
```

### **Content**

To update text, images, or features, edit the respective component files in the `components/` directory:

* **Hero Section**: `components/hero.tsx`
* **Features Section**: `components/features.tsx`
* **Testimonials Section**: `components/testimonials.tsx`
* **Pricing Section**: `components/pricing.tsx`
* **Footer Section**: `components/footer.tsx`

### **Fonts**

To change fonts, update `app/layout.tsx` to adjust the font imports and update font variables accordingly.

For example:

```tsx
import { GeistSans, GeistMono } from 'next/font/google';
```

Then, modify the font variables and apply them to the necessary elements in your styles.

---

## **Deployment**

This project is optimized for deployment on **Vercel**. Follow these steps to deploy:

1. Push your code to a GitHub repository.

2. Go to [Vercel](https://vercel.com) and sign in or create an account.

3. Click **New Project** and import your GitHub repository.

4. Vercel will automatically detect that it’s a **Next.js** project and handle the deployment for you.

5. After the deployment, you’ll receive a URL to view your live landing page.

---

