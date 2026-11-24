// bring-the-humans-03 entry (Node 22, standard library only).
//
// The entry is the video itself: an original short vertical ad for make.fun,
// made in the recorded session, posted publicly on TikTok, and named here in
// VIDEO.json. This program does exactly one thing: it copies VIDEO.json from
// the repository into the grader's output directory, where the gate reads it.
// The house reads the video and its views from TikTok itself; nothing this
// program writes about the video is scored.
//
// The ad shows make.fun's brand badge from its first frame and ends on the
// referral end card carrying the entrant's own referral code, both taken from
// make.fun's press pack and used as they are. The repository holds no copy of
// those press files.
//
// Run it locally from the repository root:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const NAME = 'VIDEO.json';

const source = join(BOT_DIR, NAME);
const target = join(OUTPUT_DIR, NAME);

mkdirSync(OUTPUT_DIR, { recursive: true });

try {
  copyFileSync(source, target);
} catch (err) {
  console.error(`could not copy ${NAME} from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}

console.log(`wrote ${target}`);
