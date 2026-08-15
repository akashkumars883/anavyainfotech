import fs from 'fs';
import path from 'path';

function scanDir(dir) {
  const files = fs.readdirSync(dir, { recursive: true });
  const issues = [];

  for (const file of files) {
    if (/\.(jsx|tsx)$/.test(file)) {
      const fullPath = path.join(dir, file);
      const content = fs.readFileSync(fullPath, 'utf8');
      const lines = content.split('\n');

      lines.forEach((line, idx) => {
        // Check for hardcoded large fixed widths like w-[500px] or min-w-[600px] without max-w-full
        if (/w-\[\d{3,4}px\]/.test(line) && !line.includes('max-w-') && !line.includes('hidden') && !line.includes('pointer-events-none') && !line.includes('h-')) {
          issues.push({ file: fullPath, lineNum: idx + 1, issue: 'Hardcoded large width (w-[px])', code: line.trim() });
        }
        // Check for min-w-[px] without mobile flex-wrap/overflow
        if (/min-w-\[\d{3,4}px\]/.test(line) && !line.includes('overflow-') && !line.includes('hidden')) {
          issues.push({ file: fullPath, lineNum: idx + 1, issue: 'min-w-[px] without overflow container', code: line.trim() });
        }
        // Check for grid without grid-cols-1 mobile fallback
        if (line.includes('grid-cols-2') && !line.includes('grid-cols-1') && !line.includes('sm:grid-cols-2') && !line.includes('md:grid-cols-2')) {
          issues.push({ file: fullPath, lineNum: idx + 1, issue: 'Grid cols-2 missing mobile single column fallback', code: line.trim() });
        }
      });
    }
  }
  return issues;
}

const allIssues = scanDir('./app').concat(scanDir('./components'));
console.log('Found responsive issues count:', allIssues.length);
console.log(JSON.stringify(allIssues, null, 2));
