# How to Add Your Specific Lottie Animation

I've fixed the critical issues (CSS loading and animation URLs), but to add your specific animation from:
https://lottiefiles.com/free-animation/future-tech-ui-YWWiZHebYs

Follow these steps:

## Step 1: Get the JSON URL

1. Go to: https://lottiefiles.com/free-animation/future-tech-ui-YWWiZHebYs
2. Click the "Download" button or look for embedding options
3. Look for one of these options:
   - **Lottie JSON URL** (starts with `https://lottie.host/...`)
   - **Download JSON** button (downloads a .json file)
   - **Embed** option that shows a URL

## Step 2: Update the Animation in Your Code

### Option A: If you got a direct URL
Open `script.js` and find line 1727. Replace:
```javascript
hero: 'https://lottie.host/4db68bbd-31f6-4cd8-84eb-189de081159a/IGmMCqhzpt.json',
```

With your animation URL:
```javascript
hero: 'YOUR_ANIMATION_URL_HERE',
```

### Option B: If you downloaded a JSON file
1. Upload the JSON file to a hosting service (GitHub, your server, or https://lottie.host/)
2. Use that hosted URL in the code above

## Step 3: Commit and Push
```bash
git add script.js
git commit -m "Update hero animation to future tech UI"
git push origin main
```

## Quick Fix - Use This Working Animation Instead

If you want a similar futuristic tech animation that works right now, I can update it to one of these verified working ones:
- Circuit board animation
- Tech HUD interface
- Data processing animation

Let me know which style you prefer!

---

**Note:** The current fixes ensure:
✅ CSS loads properly (background is fixed)
✅ Animations work (using placeholder tech animations)
✅ Professional design is visible

You just need to swap in your preferred animation URL!
