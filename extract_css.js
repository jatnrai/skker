const fs = require('fs');
const path = require('path');

const htmlPath = path.join(__dirname, '..', 'skker-website-frontend', 'index.html');
const cssPath = path.join(__dirname, 'src', 'app', 'globals.css');

const htmlContent = fs.readFileSync(htmlPath, 'utf8');

// Extract everything between <style> and </style>
const styleMatch = htmlContent.match(/<style>([\s\S]*?)<\/style>/);

if (styleMatch && styleMatch[1]) {
  const customCSS = styleMatch[1];
  const newCSSContent = `@import "tailwindcss";\n\n@plugin "tailwindcss-animate";\n\n@custom-variant dark (&:is(.dark *));\n\n` + customCSS;
  
  fs.writeFileSync(cssPath, newCSSContent, 'utf8');
  console.log('Successfully extracted CSS and updated globals.css');
} else {
  console.error('Failed to find <style> block in index.html');
}
