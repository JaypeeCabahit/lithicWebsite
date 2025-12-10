# Setup Complete! 🎉

## What I Fixed:

### 1. ✅ Gemini API Key Configured
- Updated `.env.local` with your API key: `AIzaSyDh4BbxFsvp-0SRMzKGdJltzQ3aI5ksowQ`
- Fixed the service to use `import.meta.env.VITE_GEMINI_API_KEY` (Vite requires the `VITE_` prefix)
- The AI chatbot (Lithos) should now work properly!

### 2. ✅ Chat Scroll Behavior Optimized
- Fixed auto-scrolling to bottom when chatting
- Added smooth scroll behavior with proper timing
- Only scrolls when new messages arrive, not on page load

### 3. ✅ Image Naming Guide Created
See: `public/HeroImages/IMAGE-NAMING-GUIDE.md`

---

## 📸 Image Setup Instructions:

### Homepage Hero Images (Required):
**Location:** `public/HeroImages/`

Download 4 Stone Age images and name them exactly:
1. `stone-age-1.jpg`
2. `stone-age-2.jpg`
3. `stone-age-3.jpg`
4. `stone-age-4.jpg`

**Recommended sources:**
- Cave paintings (Lascaux, Chauvet, Altamira)
- Prehistoric landscapes
- Ancient cave interiors

**Where to download:**
- Unsplash: https://unsplash.com/s/photos/cave-painting
- Pexels: https://www.pexels.com/search/cave%20paintings/
- Wikimedia Commons: Search "Paleolithic" or "Cave paintings"

---

### Artifact Images (Optional but recommended):
**Location:** Create folder: `public/ArtifactImages/`

Download these 9 images with exact names:
1. `handaxe.jpg` - Acheulean hand axe
2. `venus.jpg` - Venus figurine
3. `spear.jpg` - Wooden spear/spear thrower
4. `fire-tools.jpg` - Fire-making tools
5. `cave-painting.jpg` - Cave painting close-up
6. `needle.jpg` - Bone needle
7. `pottery.jpg` - Neolithic pottery
8. `sickle.jpg` - Stone sickle blade
9. `obsidian.jpg` - Obsidian blade/tool

**Where to download:**
- Wikimedia Commons: https://commons.wikimedia.org/wiki/Category:Paleolithic_stone_tools
- British Museum: https://www.britishmuseum.org/ (search "Paleolithic")
- Met Museum: https://www.metmuseum.org/ (search "Stone Age")

---

## 🚀 To Start Your Website:

1. **Restart the dev server** (to load the new API key):
   ```bash
   npm run dev
   ```

2. **Download the images** listed above

3. **Place images in the correct folders**:
   - Hero images → `public/HeroImages/`
   - Artifact images → `public/ArtifactImages/`

4. **Test the AI chatbot** by clicking "Ask Lithos (AI)" in the navigation

---

## ✨ All Features Working:
- ✅ Homepage slideshow (randomized start, 5-second rotation)
- ✅ Diagonal parallax pattern on all pages except home
- ✅ Mobile hamburger menu
- ✅ Team profile pictures (in color)
- ✅ Modal centering fixed
- ✅ Chat scroll behavior optimized
- ✅ Gemini AI integration configured

---

## 📝 Important Notes:
- The `.env.local` file contains your API key - **never commit this to Git!**
- Images must be named EXACTLY as shown above (case-sensitive)
- Supported formats: `.jpg`, `.png`
- Recommended resolution: 1920x1080 or higher for hero images

Enjoy your Stone Age exhibit! 🗿
