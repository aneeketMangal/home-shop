# RAMA G DECOR - Premium Home Decor Website

A premium Next.js website for RAMA G DECOR, an authorized Polywood distributor offering comprehensive home decor solutions.

## 🏠 About RAMA G DECOR

**Tagline:** *"Your one stop shop for all your home decor needs."*

RAMA G DECOR is an authorized distributor of Polywood, offering premium home improvement solutions including:
- SPC Flooring
- uPVC Windows  
- Fluted Wall Panels
- PVC Doors
- Modular Kitchens
- Window Sections

We provide both high-quality products and professional installation services.

## 🚀 Technology Stack

- **Framework:** Next.js 14 with App Router
- **Styling:** Tailwind CSS
- **TypeScript:** For type safety
- **Images:** Next.js optimized images
- **SEO:** Built-in metadata and structured data
- **Fonts:** Google Fonts (Inter & Playfair Display)

## 📱 Features

### 🎨 Design
- Premium, minimalistic design
- Responsive across all devices
- Modern typography and clean whitespace
- Custom color palette with brand colors
- Smooth animations and transitions

### 🔍 SEO Optimized
- Semantic HTML structure
- Meta tags and Open Graph data
- Structured data (JSON-LD)
- Sitemap and robots.txt
- Optimized images with alt text
- Fast loading performance

### 📄 Pages
- **Homepage:** Hero, About, Products, Why Choose Us, Testimonials
- **About:** Company story, Polywood partnership, values, team
- **Products:** Detailed product catalog with specifications
- **Services:** Installation process and service offerings
- **Contact:** Contact form, business info, location map

### 🛠️ Components
- Responsive navigation
- Hero section with CTAs
- Product showcase grids
- Testimonial carousel
- Contact forms
- Footer with all links

## 🎨 Brand Colors

- **Primary Navy:** `#0A192F`
- **Primary Green:** `#064E3B`
- **Secondary Gold:** `#C9A227`
- **Secondary Bronze:** `#B8860B`
- **Background:** `#FFFFFF` / `#F9FAFB`

## 📁 Project Structure

```
src/
├── app/
│   ├── about/page.tsx
│   ├── contact/page.tsx
│   ├── products/page.tsx
│   ├── services/page.tsx
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
│   ├── robots.ts
│   └── sitemap.ts
├── components/
│   ├── About.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── Products.tsx
│   ├── Testimonials.tsx
│   └── WhyChooseUs.tsx
public/
├── products/
├── services/
├── testimonials/
└── IMAGE_REQUIREMENTS.md
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn or pnpm

### Installation

1. **Clone the repository**
   ```bash
   git clone [repository-url]
   cd rama-g-decor
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Add images**
   - Replace placeholder images in `/public` folder
   - See `public/IMAGE_REQUIREMENTS.md` for detailed image specifications

4. **Run development server**
   ```bash
   npm run dev
   ```

5. **Open in browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 📝 Configuration

### Environment Variables
Create a `.env.local` file for any environment-specific configurations:

```env
NEXT_PUBLIC_SITE_URL=https://ramagdecor.com
NEXT_PUBLIC_CONTACT_EMAIL=info@ramagdecor.com
NEXT_PUBLIC_PHONE=+919876543210
```

### Contact Form
The contact form is currently set up as a demo. To make it functional:

1. **Using EmailJS:**
   - Sign up at [EmailJS](https://www.emailjs.com/)
   - Configure email templates
   - Add EmailJS configuration

2. **Using Formspree:**
   - Sign up at [Formspree](https://formspree.io/)
   - Create a form endpoint
   - Update form action

3. **Custom Backend:**
   - Set up API routes in Next.js
   - Configure email service (SendGrid, Nodemailer, etc.)

## 🔧 Customization

### Colors
Update colors in `tailwind.config.js`:

```javascript
colors: {
  primary: {
    navy: '#0A192F',
    green: '#064E3B',
  },
  secondary: {
    gold: '#C9A227',
    bronze: '#B8860B',
  }
}
```

### Content
- Update business information in components
- Modify product details in `/products/page.tsx`
- Update contact details in `/contact/page.tsx`
- Customize testimonials in `Testimonials.tsx`

## 📊 Performance

Target Lighthouse Scores:
- **Performance:** 90+
- **Accessibility:** 95+
- **Best Practices:** 95+
- **SEO:** 100

## 🚀 Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Connect repository to Vercel
3. Configure domain settings
4. Set environment variables

### Other Platforms
- Netlify
- AWS Amplify
- DigitalOcean App Platform

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 📞 Contact Information

**RAMA G DECOR**  
📍 123 Main Street, Business District, Mumbai - 400001  
📞 +91 98765 43210  
📧 info@ramagdecor.com  
🌐 [ramagdecor.com](https://ramagdecor.com)

## 📄 License

This project is proprietary and confidential. All rights reserved by RAMA G DECOR.

## 🤝 Support

For technical support or questions about this website, please contact the development team.

---

**Built with ❤️ for RAMA G DECOR**
