import fs from 'fs';
import path from 'path';

function convertOrangeToDeepBlue(dir) {
  const files = fs.readdirSync(dir, { recursive: true });
  let count = 0;

  for (const file of files) {
    if (/\.(jsx|js|tsx|ts|css|html)$/.test(file)) {
      const fullPath = path.join(dir, file);
      let content = fs.readFileSync(fullPath, 'utf8');

      if (content.includes('orange')) {
        content = content
          .replaceAll('orange-600', 'blue-700')
          .replaceAll('orange-500', 'blue-700')
          .replaceAll('orange-700', 'blue-800')
          .replaceAll('orange-400', 'blue-600')
          .replaceAll('orange-300', 'blue-300')
          .replaceAll('orange-200', 'blue-200')
          .replaceAll('orange-100', 'blue-100')
          .replaceAll('orange-50', 'blue-50')
          .replaceAll('selection:bg-orange-500/20', 'selection:bg-blue-600/20')
          .replaceAll('selection:text-orange-900', 'selection:text-blue-950');

        fs.writeFileSync(fullPath, content, 'utf8');
        console.log('Converted orange to Deep Blue in:', fullPath);
        count++;
      }
    }
  }
  return count;
}

console.log('Converted in anavyainfotech count:', convertOrangeToDeepBlue('./app') + convertOrangeToDeepBlue('./components'));
