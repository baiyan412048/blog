'use client'

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'

function Code({ className, ...props }: any) {
  const match = /language-(\w+)/.exec(className || '')
  return match ? (
    <SyntaxHighlighter language={match[1]} PreTag='div' {...props} />
  ) : (
    <code className={className} {...props} />
  )
}

export default Code
