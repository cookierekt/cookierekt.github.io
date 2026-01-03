# 🎬 Lottie Animations Setup Guide

This website uses Lottie animations from [LottieFiles](https://lottiefiles.com) to create engaging visual effects.

## 📍 Current Animation Locations

### 1. **Hero Section** (Main landing area)
- **Location:** Hero profile card (right side of page)
- **Recommended:** Circuit board, microchip, or tech-themed animation
- **Size:** 400x400px
- **File:** `script.js` line 1727

### 2. **Service Cards** (4 animations in Services section)
- **Firmware Development:** Chip/processor animation
- **PCB Design:** Circuit board/electronics animation
- **IoT Solutions:** Network/connectivity animation
- **Consulting:** Rocket/speed animation
- **Size:** 120x120px each
- **Files:** `script.js` lines 1730-1733

### 3. **Floating Background** (3 subtle animations)
- **Float 1:** Top left corner
- **Float 2:** Right side
- **Float 3:** Bottom left
- **Size:** 150-200px
- **Files:** `script.js` lines 1736-1738

## 🎨 How to Customize Animations

### Step 1: Find Your Animations on LottieFiles

1. Visit [https://lottiefiles.com/free-animations/scifi](https://lottiefiles.com/free-animations/scifi)
2. Browse categories:
   - **Sci-Fi** - Futuristic tech animations
   - **Technology** - Chips, circuits, data
   - **Business** - Professional icons
   - **Loading** - Spinners and loaders

### Step 2: Get the Animation URL

For each animation you want to use:

1. Click on the animation
2. Click **"Embed"** or **"Use in web"**
3. Copy the **Lottie URL** (ends in `.json`)
4. Example: `https://lottie.host/xxxxx-xxxxx-xxxxx/yyyyyyy.json`

### Step 3: Update the Code

Open `script.js` and find the `animationConfigs` object (around line 1725):

```javascript
this.animationConfigs = {
    // Replace these URLs with your chosen animations
    hero: 'YOUR_HERO_ANIMATION_URL.json',

    firmware: 'YOUR_FIRMWARE_ANIMATION_URL.json',
    pcb: 'YOUR_PCB_ANIMATION_URL.json',
    iot: 'YOUR_IOT_ANIMATION_URL.json',
    consulting: 'YOUR_CONSULTING_ANIMATION_URL.json',

    float1: 'YOUR_BACKGROUND_ANIMATION_1_URL.json',
    float2: 'YOUR_BACKGROUND_ANIMATION_2_URL.json',
    float3: 'YOUR_BACKGROUND_ANIMATION_3_URL.json'
};
```

### Step 4: Test Your Changes

1. Save `script.js`
2. Refresh your website
3. Check browser console for any errors (F12 → Console)
4. If an animation fails to load, it will show a fallback emoji

## 🎯 Recommended Animations from LottieFiles

Search for these keywords on LottieFiles:

### Hero Section
- "circuit board animation"
- "microchip animation"
- "tech hologram"
- "digital brain"
- "AI technology"

### Service Cards
- **Firmware:** "chip", "processor", "code", "binary"
- **PCB:** "circuit", "electronics", "motherboard"
- **IoT:** "network", "connectivity", "wireless", "smart home"
- **Consulting:** "rocket", "speed", "graph", "growth"

### Background Floaters
- "particles"
- "dots floating"
- "abstract tech"
- "geometric shapes"

## 🔧 Advanced Customization

### Change Animation Speed

In `script.js`, find the `loadServiceAnimations()` function and modify:

```javascript
card.addEventListener('mouseenter', () => {
    animation.setSpeed(2.0);  // Change from 1.5 to your preference
});
```

### Disable Floating Animations

In `styles.css`, add:

```css
.floating-lottie {
    display: none;
}
```

### Add More Service Animations

1. Add a new service card in `index.html` with:
   ```html
   <div class="service-animation" data-animation="yourname"></div>
   ```

2. Add the animation URL in `script.js`:
   ```javascript
   yourname: 'YOUR_ANIMATION_URL.json'
   ```

## 📱 Mobile Performance

Animations automatically reduce complexity on mobile devices. The floating background animations are disabled on mobile for better performance.

## 🆘 Troubleshooting

**Animation not showing:**
1. Check browser console (F12) for errors
2. Verify the animation URL is correct
3. Check that Lottie library is loaded (should see "Lottie animations: Active" in console)
4. Try a different animation URL

**Animation is too fast/slow:**
- Adjust `setSpeed()` values in the hover effects
- Change default speed: `animation.setSpeed(0.5)` for slower

**Want static images instead:**
- Remove the Lottie script from `index.html`
- Replace animation containers with `<i class="fas fa-icon-name"></i>` Font Awesome icons

## 🎨 Free Animation Resources

- [LottieFiles](https://lottiefiles.com) - Largest collection
- [IconScout Lottie](https://iconscout.com/lottie-animations) - Premium quality
- [Lordicon](https://lordicon.com) - Animated icons

## 💡 Tips

1. Keep animations under 100KB for fast loading
2. Use SVG renderer for best quality
3. Choose loops carefully - some animations work better looping, others don't
4. Match animation colors to your site theme (blue/purple for this site)
5. Test on mobile devices - some complex animations may lag

---

**Need help?** Check the browser console for detailed error messages or animation status logs.
