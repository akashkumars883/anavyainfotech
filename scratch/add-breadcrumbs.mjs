import fs from 'fs';
import path from 'path';

function addBreadcrumbsToDir(dir, sectionName, sectionPath) {
  const folders = fs.readdirSync(dir);
  for (const folder of folders) {
    const fullPath = path.join(dir, folder, 'page.jsx');
    if (fs.existsSync(fullPath)) {
      let content = fs.readFileSync(fullPath, 'utf8');
      if (!content.includes('Breadcrumbs')) {
        const formattedTitle = folder.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
        content = `import Breadcrumbs from "@/components/Breadcrumbs";\n` + content;
        const targetStr = '<div className="max-w-7xl mx-auto space-y-6">';
        if (content.includes(targetStr)) {
          const breadcrumbJsx = `<Breadcrumbs items={[{ label: "${sectionName}", href: "/#${sectionPath}" }, { label: "${formattedTitle}", href: "/${sectionPath}/${folder}" }]} />`;
          content = content.replace(targetStr, `${targetStr}\n          ${breadcrumbJsx}`);
          fs.writeFileSync(fullPath, content, 'utf8');
          console.log('Added Breadcrumbs to:', fullPath);
        }
      }
    }
  }
}

addBreadcrumbsToDir('./app/services', 'Services', 'services');
addBreadcrumbsToDir('./app/solutions', 'Solutions', 'solutions');
