'use client';
import dynamic from 'next/dynamic';

const NetworkCanvas = dynamic(() => import('./NetworkCanvas'), { ssr: false });

export default function NetworkCanvasWrapper() {
  return <NetworkCanvas />;
}
