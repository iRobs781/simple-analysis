# Simple Analysis — Website

## How to update your website

All content lives in **`content.js`** — open that file to make any changes.

---

### Update services, products or hero text
Open `content.js`, find the relevant section and edit the text. Save and push to GitHub.

---

### Add a testimonial

1. Open `content.js` and find the `testimonials` array
2. Copy this block and paste it inside the array:

```js
{
  name: "Jane Smith",
  role: "Director",
  company: "Acme Ltd",
  logo: "acme-logo.png",
  quote: "Working with Simple Analysis has been brilliant."
},
```

3. Upload their company logo to `images/testimonials/` and name it to match the `logo` field
4. Push to GitHub — done!

---

### Folder structure

```
simple-analysis/
├── index.html          ← Page structure (don't edit)
├── style.css           ← Design (don't edit)
├── app.js              ← Logic (don't edit)
├── content.js          ← YOUR CONTENT — edit this!
├── CNAME               ← Domain config (don't edit)
└── images/
    ├── logo.png                ← Your logo
    └── testimonials/           ← Client logos go here
        └── example-logo.png
```

---

### Push changes to GitHub (command line)

```bash
git add .
git commit -m "Update content"
git push
```

Changes go live within ~60 seconds.
