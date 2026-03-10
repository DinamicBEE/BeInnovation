'use client';

import { useEffect, useState } from 'react';
import FloatingLines from './FloatingLines';
import type { FloatingLinesProps } from './FloatingLines';

export default function ClientOnlyFloatingLines(props: FloatingLinesProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return <div style={{ width: '100%', height: '100%', position: 'absolute' }} />;
  }

  return <FloatingLines {...props} />;
}