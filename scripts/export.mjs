#!/usr/bin/env node
/**
 * Regenerate the included HSK 3.0 levels 1–3 Vietnamese dataset.
 *
 * Sources are expected from the HocChu site repository:
 *   HSK_SOURCE  path to data/content/hsk.json
 *   VI_DEFS     path to data/i18n/vi/hsk-definitions.json
 *
 *   HSK_SOURCE=../nihaolearn/data/content/hsk.json \
 *   VI_DEFS=../nihaolearn/data/i18n/vi/hsk-definitions.json \
 *   node scripts/export.mjs
 */
import fs from 'node:fs'
import path from 'node:path'

const sourceFile = process.env.HSK_SOURCE
const viFile = process.env.VI_DEFS
if (!sourceFile || !viFile) {
  console.error('Set HSK_SOURCE and VI_DEFS.')
  process.exit(1)
}

const hsk = JSON.parse(fs.readFileSync(sourceFile, 'utf8'))
const vi = JSON.parse(fs.readFileSync(viFile, 'utf8'))
const words = []

for (const level of [1, 2, 3]) {
  for (const word of hsk['3.0']?.[String(level)] ?? []) {
    if (!word.d) continue
    const vietnamese = vi.words?.[word.w]
    if (!vietnamese) throw new Error(`Missing Vietnamese definition for ${word.w} (HSK ${level})`)
    words.push({
      level,
      word: word.w,
      pinyin: word.p ?? '',
      partOfSpeech: word.pos ?? null,
      vietnamese,
      englishSource: word.d,
    })
  }
}

const data = {
  meta: {
    title: 'HSK 3.0 Vietnamese vocabulary (levels 1–3)',
    locale: 'vi',
    standard: 'HSK 3.0 (2021)',
    levels: [1, 2, 3],
    count: words.length,
    status: 'draft',
    reviewed: false,
    aiReview: 'completed',
    generatedAt: new Date().toISOString().slice(0, 10),
    website: 'https://hocchu.com/',
    wordListLicense: 'MIT (complete-hsk-vocabulary)',
    definitionLicense: 'CC BY-SA 4.0 (translation of CC-CEDICT definitions)',
    note: 'AI-edited draft. A Vietnamese native-speaker review is still required.',
  },
  words,
}

fs.mkdirSync(path.join(process.cwd(), 'data'), { recursive: true })
fs.writeFileSync(
  path.join(process.cwd(), 'data/hsk-3.0-vi-levels-1-3.json'),
  `${JSON.stringify(data, null, 2)}\n`,
)

const esc = (value) => {
  const text = value == null ? '' : String(value)
  return /[",\n]/.test(text) ? `"${text.replaceAll('"', '""')}"` : text
}
const csv = [
  [
    'level',
    'word',
    'pinyin',
    'part_of_speech',
    'vietnamese_definition',
    'english_source_definition',
  ],
  ...words.map((w) => [
    w.level,
    w.word,
    w.pinyin,
    w.partOfSpeech,
    w.vietnamese,
    w.englishSource,
  ]),
]
  .map((row) => row.map(esc).join(','))
  .join('\n')
fs.writeFileSync(
  path.join(process.cwd(), 'data/hsk-3.0-vi-levels-1-3.csv'),
  `${csv}\n`,
)

console.log(`Wrote ${words.length} words.`)
