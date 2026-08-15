import fs from 'fs';
import path from 'path';

function fixUseClientInDir(dir) {
  const files = fs.readdirSync(dir, { recursive: true });
  for (const file of files) {
    if (file.endsWith('page.jsx')) {
      const fullPath = path.join(dir, file);
      let content = fs.readFileSync(fullPath, 'utf8');
      if (content.startsWith('import Breadcrumbs from "@/components/Breadcrumbs";\n"use client";')) {
        content = content.replace('import Breadcrumbs from "@/components/Breadcrumbs";\n"use client";', '"use client";\nimport Breadcrumbs from "@/components/Breadcrumbs";');
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log('Fixed "use client" ordering in:', fullPath);
      }
    }
  }
}

fixUseClientInDir('./app');
