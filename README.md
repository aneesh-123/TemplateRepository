# 🎉 Father's Day Template

A beautiful, interactive Father's Day webpage template built with Next.js, React, and Tailwind CSS. Create a personalized Father's Day message with confetti, animations, and a cute bear family!

## ✨ Features

- **Spinning Profile Picture** - Click to spin and trigger confetti
- **Interactive Envelope** - Click to reveal your personal message
- **Confetti Animation** - Celebratory confetti on page load and interactions
- **Cute Bear Family** - Animated bear family in the background
- **Responsive Design** - Works on desktop and mobile
- **Glassmorphic Design** - Modern, beautiful UI elements

## 🚀 Quick Start

### 1. Clone or Download
```bash
git clone [your-repo-url]
cd fathers-day-template
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Customize Your Content

#### **Add Your Dad's Photo**
1. Replace `/public/assets/dad-photo.jpg` with your dad's picture
2. Keep the filename as `dad-photo.jpg` or update the path in `src/app/page.tsx`

#### **Customize Your Message**
Edit `src/app/page.tsx` and find these sections:

**Main Title (line ~180):**
```jsx
<h1 className="text-4xl md:text-6xl font-bold text-green-800 text-center whitespace-nowrap">
  Happy Father's Day, Dad!  {/* Change this */}
</h1>
```

**Personal Message (lines ~250-265):**
```jsx
<p className="text-gray-700 leading-relaxed">
  [Write your personal message here]  {/* Replace with your message */}
  <br /><br />
  Thank you for being an amazing father! Your love, wisdom, and support 
  have shaped who I am today. You&apos;ve been my hero, my guide, and my inspiration. 
  Happy Father&apos;s Day to the best dad in the world! 🎉
</p>
```

**Signature (line ~270):**
```jsx
<p className="text-green-800 font-medium">
  With all my love ❤️
  <br />
  [Your name here]  {/* Replace with your name */}
</p>
```

### 4. Run Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your Father's Day page!

### 5. Build for Production
```bash
npm run build
npm start
```

## 🎨 Customization Options

### Colors
The template uses a green color scheme. To change colors, edit the Tailwind classes in `src/app/page.tsx`:
- `text-green-800` - Text color
- `bg-green-800` - Background color
- `border-green-800` - Border color

### Background Image
Replace `/public/assets/wallpaper.jpg` with your preferred background image.

### Bear Family
To remove or modify the bear family, edit the "Simple Bear Family with Bodies" section in `src/app/page.tsx` (lines ~110-170).

### Animations
- **Confetti**: Modify settings in the `<Confetti>` component (lines ~280-300)
- **Spinning**: Adjust the `spinOnce` animation in the `<style jsx>` section (lines ~80-90)

## 📱 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy automatically!

### Other Platforms
- **Netlify**: Drag and drop the `build` folder
- **GitHub Pages**: Use `npm run build` and deploy the `out` folder

## 🛠️ Tech Stack

- **Next.js 15** - React framework
- **React 19** - UI library
- **Tailwind CSS 4** - Styling
- **TypeScript** - Type safety
- **react-confetti** - Confetti animations
- **react-use** - Utility hooks

## 📝 Important Notes

### Apostrophes in JSX
When writing your message, use `&apos;` instead of `'` to avoid ESLint errors:
```jsx
// ❌ Wrong
You're the best dad!

// ✅ Correct
You&apos;re the best dad!
```

### Image Requirements
- **Dad's Photo**: 1:1 aspect ratio (square) works best
- **Background**: High resolution (1920x1080 or higher) recommended
- **Formats**: JPG, PNG, WebP supported

## 🎁 Ideas for Personalization

- Add your dad's favorite colors
- Include inside jokes or family memories
- Add more family photos
- Customize the bear family to represent your family
- Add your dad's favorite music (with autoplay considerations)
- Include a photo gallery
- Add dad's favorite quotes

## 🐛 Troubleshooting

### Build Errors
- Check for unescaped apostrophes (`'` should be `&apos;`)
- Ensure all images exist in the `public` folder
- Run `npm run lint` to check for issues

### Images Not Loading
- Verify image paths start with `/` (e.g., `/assets/dad-photo.jpg`)
- Check file names match exactly (case-sensitive)
- Ensure images are in the `public` folder

## 📄 License

This template is free to use for personal projects. Feel free to modify and share!

## 💝 Made with Love

Created to help families celebrate their amazing dads. Happy Father's Day! 🎉

---

**Need help?** Open an issue or reach out for support!
