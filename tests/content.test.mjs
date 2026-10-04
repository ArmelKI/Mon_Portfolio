import test from 'node:test';
import assert from 'node:assert/strict';
import { projects, notableProjects, privateProjects, validateProjects } from '../src/data/projects.js';
import { certifications } from '../src/data/certifications.js';
import { selectedCredentialIds } from '../src/data/portfolio.js';

test('featured project selection stays factual and ordered', () => {
  assert.deepEqual(validateProjects(), []);
  assert.equal(projects[0].slug, 'ankata');
  assert.equal(projects[1].slug, 'axinafa-ai');
  assert.equal(projects.filter((item) => item.tier === 'selected').length, 2);
});

test('notable work remains visually secondary', () => {
  assert.equal(notableProjects.length, 8);
  assert.ok(notableProjects.every((item) => item.privateDemo || item.url.startsWith('https://github.com/ArmelKI/')));
  assert.ok(notableProjects.filter((item) => item.privateDemo).every((item) => !item.url));
});

test('private work never exposes a fake repository link', () => {
  assert.equal(privateProjects.length, 4);
  assert.ok(privateProjects.every((item) => !('url' in item) && !('repoUrl' in item)));
});

test('five credentials lead to the complete library', () => {
  assert.equal(selectedCredentialIds.length, 5);
  assert.ok(certifications.length >= 30);
  assert.ok(selectedCredentialIds.every((id) => certifications.some((item) => item.id === id)));
});

test('unsupported claims are absent from public project copy', () => {
  const publicCopy = JSON.stringify({ projects, notableProjects, privateProjects });
  for (const claim of ['production-ready', 'multi-agent', 'RAG', 'vrais utilisateurs', 'real users']) {
    assert.equal(publicCopy.includes(claim), false, claim);
  }
});
