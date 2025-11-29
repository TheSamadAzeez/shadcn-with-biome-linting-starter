module.exports = {
  '*.{js,jsx,ts,tsx,json,css}': (filenames) => {
    const files = filenames.filter((f) => !f.includes('src/components/ui'))
    if (files.length === 0) return []
    return `biome check --write --no-errors-on-unmatched ${files.join(' ')}`
  },
}
