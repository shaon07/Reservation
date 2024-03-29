import { globalStyles } from '@/globalStyles/index.css'
import React, { CSSProperties } from 'react'

interface HTMLHeadingElement {
  id?: string;
  className?: string;
  style?: string | CSSProperties;
  text: string;
}

export default function CardTitle({id, className, style, text, ...props}:HTMLHeadingElement) {
  return (
    <h2 {...props} className={`${globalStyles.typography.h2} border-[#5D5CFF] border-b-2 ${className}`}>
      {text}
    </h2>
  )
}
