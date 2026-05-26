import React from 'react';

/**
 * Parses inline markdown-like formatting in article text:
 * **bold** → <strong>
 * *italic* → <em>
 * `code` → <code>
 */
export function formatInline(text: string): React.ReactNode[] {
  const parts: React.ReactNode[] = [];
  // Combined pattern: **bold**, *italic*, `code`
  const pattern = /(\*\*(.+?)\*\*)|(\*(.+?)\*)|(`(.+?)`)/g;
  let last = 0;
  let match: RegExpExecArray | null;

  while ((match = pattern.exec(text)) !== null) {
    if (match.index > last) {
      parts.push(text.slice(last, match.index));
    }
    if (match[1]) {
      // **bold**
      parts.push(<strong key={match.index}>{match[2]}</strong>);
    } else if (match[3]) {
      // *italic*
      parts.push(<em key={match.index}>{match[4]}</em>);
    } else if (match[5]) {
      // `code`
      parts.push(<code key={match.index}>{match[6]}</code>);
    }
    last = match.index + match[0].length;
  }

  if (last < text.length) {
    parts.push(text.slice(last));
  }

  return parts;
}
