export function parseStream(text) {
  const lines = text.trim().split('\n')

  return {
    title: lines[0].split(',').slice(1).join(',').trim(),
    referrer: lines.find(l => l.includes('http-referrer='))?.split('=').slice(1).join('='),
    userAgent: lines.find(l => l.toLowerCase().includes('http-user-agent='))?.split('=').slice(1).join('='),
    url: lines.find(l => l.startsWith('http'))
  }
}
