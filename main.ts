import { mkdirSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';

const outputDir = resolve(process.env.MAKEFUN_OUTPUT_DIR || '/output');
// One-Liner Laugh Lab entry: The Dryer's Advice.
const entry = 'The dryer said to leave the other sock so you two would blame each other.';

mkdirSync(outputDir, { recursive: true });
writeFileSync(resolve(outputDir, 'entry.txt'), entry, 'utf8');
