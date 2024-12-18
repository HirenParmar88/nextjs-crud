"use client";
import "bootstrap/dist/css/bootstrap.min.css"; // Load Bootstrap CSS
import dynamic from 'next/dynamic';
import { useEffect } from 'react';

// Dynamically load Bootstrap JS to avoid SSR issues
// const Bootstrap = dynamic(() => import('bootstrap/dist/js/bootstrap.bundle'), { ssr: false });

export default function RootLayout({ children }) {
  useEffect(() => {     
    import('bootstrap/dist/js/bootstrap.bundle');
  }, []);

  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" rel="stylesheet"></link>
        <title>React Project</title>
      </head>
      <body className="font-sans">{children}</body>
    </html>
  );
}
