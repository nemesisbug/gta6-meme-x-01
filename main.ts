// Entry for make.fun's "Post a GTA 6 meme on X" (gta6-meme-x-01).
//
// The entry itself is the X post: a GTA 6 meme picturing make.fun's ghost
// as a WANTED poster in Vice City, posted from a public X account with
// make.fun and the entrant's play code in its text. Nothing this program
// writes is judged — the house reads the post from X and hands its first
// picture and its text to the judge. So this program does one small job:
// copy POST.json from the repository root to /output, where the gate reads
// the post's address from it.
//
// POST.json holds a placeholder until the meme is posted; the placeholder
// is no post's address, so the gate refuses it as it stands. After the
// post is up, POST.json is replaced with its real address, and the entry
// is submitted with the transcripts of the sessions that made the meme:
//   {"url": "https://x.com/<handle>/status/<id>"}
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR
// stand in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(OUTPUT_DIR, { recursive: true });

// Validate the URL before copying: a placeholder is no post's address,
// so refuse to hand in POST.json while it still holds "<handle>" or "<id>".
const postUrl = (JSON.parse(readFileSync(join(BOT_DIR, 'POST.json'), 'utf8')) as { url?: unknown }).url;
if (typeof postUrl !== 'string' || postUrl.includes('<handle>') || postUrl.includes('<id>')) {
  console.error('POST.json still holds a placeholder URL ("<handle>" or "<id>") — post the meme on X and put its real address in POST.json first.');
  process.exit(1);
}

try {
  copyFileSync(join(BOT_DIR, 'POST.json'), join(OUTPUT_DIR, 'POST.json'));
} catch (err) {
  console.error(`POST.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}

// Read the copied file back and verify it: it must be JSON with a string
// "url" field, and the address being submitted is printed for the record.
const copied = JSON.parse(readFileSync(join(OUTPUT_DIR, 'POST.json'), 'utf8')) as { url?: unknown };
if (typeof copied.url !== 'string' || copied.url.length === 0) {
  console.error('Copied POST.json has no string "url" field — refusing to submit an empty address.');
  process.exit(1);
}
console.log(`Submitting post: ${copied.url}`);
