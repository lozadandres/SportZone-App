import React from 'react';
import Link from 'next/link';
const nav: React.FC = () => {
  return (
    <div className="navbar">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
    </div>
  );
};

export default nav;