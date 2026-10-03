import { access, readFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { certifications } from '../src/data/certifications.js';
import { projects, notableProjects } from '../src/data/projects.js';

const missing = [];
for (const item of certifications) {
  if (!item.pdf?.startsWith('/')) continue;
  try { await access(resolve('public', item.pdf.slice(1))); } catch { missing.push(item.pdf); }
}
for (const project of [...projects, ...notableProjects]) {
  if (!project.media?.src?.startsWith('/')) continue;
  try { await access(resolve('public', project.media.src.slice(1))); } catch { missing.push(project.media.src); }
}
const index = await readFile('index.html', 'utf8');
for (const path of ['/favicon.svg', '/site.webmanifest', '/assets/images/og-armel-ki.png']) {
  if (!index.includes(path)) missing.push(`index reference: ${path}`);
}
try { await access(resolve('public', 'assets/images/armel-portrait.webp')); } catch { missing.push('/assets/images/armel-portrait.webp'); }
if (missing.length) throw new Error(`Missing local links:\n${missing.join('\n')}`);
console.log(`Checked ${certifications.length} credentials, ${projects.length + notableProjects.length} public projects and core metadata assets.`);
