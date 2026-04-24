import { spawn } from 'node:child_process'
import { readdir, readFile } from 'node:fs/promises'
import path from 'node:path'
const archiveDir = path.join(process.cwd(), 'public', 'newsletters')
const requestedFile = process.argv[2]

function copyToClipboard(text) {
  return new Promise((resolve, reject) => {
    const child = spawn('pbcopy')

    child.on('error', reject)
    child.on('close', (code) => {
      if (code === 0) {
        resolve()
        return
      }

      reject(new Error(`pbcopy exited with code ${code}.`))
    })

    child.stdin.end(text)
  })
}

async function latestNewsletterPath() {
  const files = await readdir(archiveDir)
  const newsletters = files
    .filter((file) => /^newsletter-\d{4}-\d{2}-\d{2}\.html$/.test(file))
    .sort()

  if (newsletters.length === 0) {
    throw new Error('No archived newsletters found in public/newsletters/.')
  }

  return path.join(archiveDir, newsletters.at(-1))
}

const filePath = requestedFile
  ? path.resolve(process.cwd(), requestedFile)
  : await latestNewsletterPath()

const html = await readFile(filePath, 'utf8')
await copyToClipboard(html)

console.log(`Copied ${path.relative(process.cwd(), filePath)} to the clipboard.`)
