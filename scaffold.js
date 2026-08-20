const fs = require('fs');
const path = require('path');

const routes = [
  'about-me', 'academy', 'accessibility-statement', 'blog', 'case-studies',
  'coaching', 'corporate-training', 'courses', 'insights', 'privacy-policy',
  'public-classes', 'refund-policy', 'terms-of-use', 'training', 'work',
  'login', 'register'
];

const basePath = path.join(__dirname, 'src', 'app', 'user');

routes.forEach(route => {
  const routePath = path.join(basePath, route);
  const componentsPath = path.join(routePath, 'components');
  
  // Create directories
  fs.mkdirSync(componentsPath, { recursive: true });
  
  // Create a placeholder page.tsx
  const title = route.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
  const pageContent = `import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function ${title.replace(/\s+/g, '')}Page() {
  return (
    <main className="min-h-screen bg-bg text-text selection:bg-accent/30 flex flex-col">
      <Navbar />
      <div className="flex-grow flex items-center justify-center pt-24 pb-12">
        <h1 className="text-4xl font-serif text-accent">${title} - Premium Page Placeholder</h1>
      </div>
      <Footer />
    </main>
  );
}
`;
  
  fs.writeFileSync(path.join(routePath, 'page.tsx'), pageContent, 'utf8');
});

console.log('Scaffolding complete.');
