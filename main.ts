import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
const text = `Rain has fallen on this roof for a hundred years, and the roof does not mind. Downstairs, a kettle cools. The tide goes out without asking, and comes in. Tonight's light left its star before there were eyes. Nothing is waiting for you. Nothing is late.`;
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outputDir || '.', { recursive: true });
writeFileSync(join(outputDir, 'entry.txt'), text, 'utf8');
