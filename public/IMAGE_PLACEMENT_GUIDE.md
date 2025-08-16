# 📁 Image Placement Guide for RAMA G DECOR Website

## Where to Add Your Images

All images should be placed in the `/public` folder of your Next.js project. The folder structure has been created for you:

```
📁 public/
├── 📄 hero-bg.jpg                    ✅ (ALREADY EXISTS as hero-bg.png)
├── 📄 about-image.jpg               ❌ NEEDED
├── 📄 about-showcase.jpg            ❌ NEEDED (used in About component)
├── 📄 hero-showcase.jpg             ❌ NEEDED (used in Hero component)
├── 📄 og-image.jpg                  ❌ NEEDED
├── 📄 favicon.ico                   ❌ NEEDED
│
├── 📁 about/
│   ├── 📄 our-story.jpg             ❌ NEEDED
│   └── 📄 polywood-partnership.jpg  ❌ NEEDED
│
├── 📁 products/
│   ├── 📄 spc-flooring.jpg          ❌ NEEDED
│   ├── 📄 upvc-windows.jpg          ❌ NEEDED
│   ├── 📄 fluted-panels.jpg         ❌ NEEDED
│   ├── 📄 pvc-doors.jpg             ❌ NEEDED
│   ├── 📄 modular-kitchens.jpg      ❌ NEEDED
│   ├── 📄 window-sections.jpg       ❌ NEEDED
│   ├── 📄 spc-flooring-hero.jpg     ❌ NEEDED
│   ├── 📄 upvc-windows-hero.jpg     ❌ NEEDED
│   ├── 📄 fluted-panels-hero.jpg    ❌ NEEDED
│   ├── 📄 pvc-doors-hero.jpg        ❌ NEEDED
│   ├── 📄 modular-kitchens-hero.jpg ❌ NEEDED
│   └── 📄 window-sections-hero.jpg  ❌ NEEDED
│
├── 📁 services/
│   ├── 📄 flooring-install.jpg      ❌ NEEDED
│   ├── 📄 window-install.jpg        ❌ NEEDED
│   ├── 📄 kitchen-install.jpg       ❌ NEEDED
│   ├── 📄 panel-install.jpg         ❌ NEEDED
│   ├── 📄 door-install.jpg          ❌ NEEDED
│   └── 📄 quality-check.jpg         ❌ NEEDED
│
├── 📁 team/
│   ├── 📄 founder.jpg               ❌ NEEDED
│   ├── 📄 operations.jpg            ❌ NEEDED
│   └── 📄 design.jpg                ❌ NEEDED
│
└── 📁 testimonials/
    ├── 📄 customer1.jpg             ❌ NEEDED
    ├── 📄 customer2.jpg             ❌ NEEDED
    ├── 📄 customer3.jpg             ❌ NEEDED
    └── 📄 customer4.jpg             ❌ NEEDED
```

## 🎯 Priority Images (Most Important)

### **Immediate Priority:**
1. **`/public/hero-showcase.jpg`** - Used in Hero section (floating product showcase)
2. **`/public/about-showcase.jpg`** - Used in About section (main company image)
3. **`/public/products/*.jpg`** - All 6 product images for the Products section

### **Secondary Priority:**
4. **`/public/services/*.jpg`** - Service process images
5. **`/public/testimonials/*.jpg`** - Customer photos

### **Optional:**
6. **`/public/team/*.jpg`** - Team member photos
7. **`/public/about/*.jpg`** - Additional about section images

## 📋 How to Add Images

### **Method 1: Drag & Drop (Easiest)**
1. Open File Explorer to your image files
2. Open VS Code with the project
3. Drag images directly into the appropriate `/public` subfolder

### **Method 2: Copy & Paste**
1. Copy your image files
2. Navigate to `C:\Users\amangal\Downloads\Rama G Decor\public\`
3. Paste into the appropriate subfolder

### **Method 3: Terminal**
```bash
# Example: Copy an image to the products folder
copy "path\to\your\image.jpg" "C:\Users\amangal\Downloads\Rama G Decor\public\products\"
```

## ⚠️ Important Notes

1. **File Naming**: Use exact names as listed above (case-sensitive)
2. **File Format**: `.jpg`, `.png`, or `.webp` are supported
3. **Image Size**: Recommended minimum 1920px width for hero images
4. **Optimization**: Compress images before adding to improve site performance
5. **Current Status**: You already have `hero-bg.png` which is being used

## 🔄 After Adding Images

The website will automatically use your images once they're placed in the correct folders. The Next.js Image component will handle optimization and loading.

## 🎨 Temporary Placeholders

Currently, the website uses placeholder image paths. Once you add the actual images, they will replace the placeholders automatically.
