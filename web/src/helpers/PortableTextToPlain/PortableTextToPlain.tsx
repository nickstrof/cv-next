'use client'
import { PortableText, PortableTextComponents } from '@portabletext/react'
import type { PortableTextBlock } from 'sanity'
interface Props {
  value: PortableTextBlock[]
}

const components: PortableTextComponents = {
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc ml-6">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal ml-6">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => <li>{children}</li>,
    number: ({ children }) => <li>{children}</li>,
  },
  marks: {
    link: ({ value, children }) => {
      const href = value?.href || '#';
      return (
        <a href={href} className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      );
    },
  },
  block: {
    h1: ({ children }) => (
      <h1 className="text-4xl font-bold mt-8 mb-4">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-3xl font-semibold mt-6 mb-3">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-2xl font-medium mt-4 mb-2">{children}</h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-xl font-medium mt-3 mb-2">{children}</h4>
    ),
    normal: ({ children }) => (
      <p className="text-base leading-relaxed mb-4">{children}</p>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-600 my-4">
        {children}
      </blockquote>
    ),
  }
};

export default function PortableTextRenderer({ value }: Props) {
  if (!value) return null
  return <PortableText value={value} components={components} />
}