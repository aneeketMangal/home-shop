# 🖼️ Image References in RAMA G DECOR Website Code

## 📍 Where Images Are Currently Referenced

### **🏠 Homepage Components**

#### **🎯 Hero Component** (`src/components/Hero.tsx`)
- **Line 93:** `src="/hero-showcase.jpg"` - Main product showcase image

#### **ℹ️ About Component** (`src/components/About.tsx`)
- **Line 56:** `src="/about-showcase.jpg"` - Company showcase image

#### **🛋️ Products Component** (`src/components/Products.tsx`)
- **Line 11:** `image: '/products/spc-flooring.jpg'` - SPC Flooring
- **Line 19:** `image: '/products/upvc-windows.jpg'` - uPVC Windows  
- **Line 27:** `image: '/products/fluted-panels.jpg'` - Fluted Wall Panels
- **Line 35:** `image: '/products/pvc-doors.jpg'` - PVC Doors
- **Line 43:** `image: '/products/modular-kitchens.jpg'` - Modular Kitchens
- **Line 51:** `image: '/products/window-sections.jpg'` - Window Sections

#### **💬 Testimonials Component** (`src/components/Testimonials.tsx`)
- **Line 13:** `image: '/testimonials/customer1.jpg'` - Priya Sharma
- **Line 22:** `image: '/testimonials/customer2.jpg'` - Rajesh Kumar  
- **Line 32:** `image: '/testimonials/customer3.jpg'` - Anita Patel
- **Line 41:** `image: '/testimonials/customer4.jpg'` - Vikram Singh

---

### **📄 Individual Pages**

#### **🌐 SEO Images** (`src/app/layout.tsx`)
- **Line 24:** `url: '/og-image.jpg'` - Open Graph image for social sharing
- **Line 37:** `images: ['/og-image.jpg']` - Twitter card image

#### **ℹ️ About Page** (`src/app/about/page.tsx`)
- **Line 51:** `src="/about/our-story.jpg"` - Our story section
- **Line 76:** `src="/about/polywood-partnership.jpg"` - Partnership section
- **Line 201:** `src="/team/founder.jpg"` - Founder photo
- **Line 217:** `src="/team/operations.jpg"` - Operations manager photo  
- **Line 233:** `src="/team/design.jpg"` - Design team photo

#### **🛋️ Products Page** (`src/app/products/page.tsx`)
- **Line 18:** `image: '/products/spc-flooring-hero.jpg'` - SPC Flooring hero
- **Line 42:** `image: '/products/upvc-windows-hero.jpg'` - uPVC Windows hero
- **Line 66:** `image: '/products/fluted-panels-hero.jpg'` - Fluted Panels hero
- **Line 90:** `image: '/products/pvc-doors-hero.jpg'` - PVC Doors hero
- **Line 114:** `image: '/products/modular-kitchens-hero.jpg'` - Modular Kitchens hero
- **Line 138:** `image: '/products/window-sections-hero.jpg'` - Window Sections hero

#### **🔧 Services Page** (`src/app/services/page.tsx`)
- **Line 208:** `image: '/services/flooring-install.jpg'` - Flooring installation
- **Line 213:** `image: '/services/window-install.jpg'` - Window installation
- **Line 218:** `image: '/services/kitchen-install.jpg'` - Kitchen installation
- **Line 223:** `image: '/services/panel-install.jpg'` - Panel installation
- **Line 228:** `image: '/services/door-install.jpg'` - Door installation
- **Line 233:** `image: '/services/quality-check.jpg'` - Quality check process

---

## 📊 **Summary Count**

| **Category** | **Count** | **Status** |
|-------------|-----------|------------|
| **SEO Images** | 1 | ❌ Missing |
| **Hero Images** | 1 | ❌ Missing |
| **About Images** | 3 | ❌ Missing |
| **Product Images** | 12 | ❌ Missing |
| **Service Images** | 6 | ❌ Missing |
| **Team Images** | 3 | ❌ Missing |
| **Customer Images** | 4 | ❌ Missing |
| **TOTAL** | **30** | **❌ All Missing** |

---

## 🎯 **Priority Order for Adding Images**

### **🔥 Critical (Website Won't Look Right Without These):**
1. **`/public/hero-showcase.jpg`** - Main hero image
2. **`/public/about-showcase.jpg`** - About section image
3. **All 6 product images in `/public/products/`**

### **🚀 High Priority:**
4. **All 4 customer photos in `/public/testimonials/`**
5. **All 6 service images in `/public/services/`**

### **⭐ Medium Priority:**
6. **All 3 team photos in `/public/team/`**
7. **Additional about images in `/public/about/`**
8. **Hero versions of products in `/public/products/`**

### **📱 SEO/Social:**
9. **`/public/og-image.jpg`** - For social media sharing

---

## ⚡ **How Images Are Used**

- **Next.js Image Component:** All images use `<Image>` for optimization
- **Automatic Optimization:** Images are automatically compressed and served in modern formats
- **Lazy Loading:** Images load only when they come into view
- **Blur Placeholders:** Built-in blur effects while images load
- **Responsive:** Images automatically scale for different screen sizes

---

## 🔧 **What Happens When You Add Images**

1. **Immediate Display:** Once you place an image with the correct filename, it appears instantly
2. **No Code Changes:** You don't need to modify any code files
3. **Automatic Optimization:** Next.js handles all performance optimizations
4. **Progressive Loading:** Images load smoothly with built-in blur effects

---

*💡 **Tip:** Start with the hero and product images first - these will have the biggest visual impact on your website!*
