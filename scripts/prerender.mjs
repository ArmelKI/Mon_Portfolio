import { readFile, writeFile } from 'node:fs/promises';
import { privateProjects, projects } from '../src/data/projects.js';

const path = new URL('../dist/index.html', import.meta.url);
const html = await readFile(path, 'utf8');
const projectLinks = projects.map((project) => `<li><a href="#${project.slug}">${project.title.fr}</a><span>${project.status.fr}</span></li>`).join('');
const privateLinks = privateProjects.map((project) => `<li>${project.title.fr ?? project.title}<span>${project.status.fr}</span></li>`).join('');
const snapshot = `<div id="root"><main style="max-width:1120px;margin:auto;padding:48px 20px;font-family:system-ui;color:#241438"><header><p>Armel KI · Software &amp; AI Engineer</p><p>Apprenti ingénieur IA chez Sopra Steria Next · jusqu’en août 2028</p><h1>Je conçois des produits où logiciel et IA avancent ensemble.</h1><p>Applications web et mobile, APIs, données et automatisation : je transforme un besoin en parcours fonctionnel.</p></header><section><h2>Des idées transformées en produits.</h2><ul>${projectLinks}</ul></section><section><h2>Des projets privés, visibles autrement.</h2><ul>${privateLinks}</ul></section><section><h2>Ce que je sais relier.</h2><p>Applications web et mobile · Backends, APIs et données · Data et intelligence artificielle · Automatisation et intégrations</p></section><section><h2>Certifications et apprentissages.</h2><p>Une sélection utile au regard des projets, avec l’ensemble des certificats disponible à la consultation.</p></section></main></div>`;
await writeFile(path, html.replace('<div id="root"></div>', snapshot));
