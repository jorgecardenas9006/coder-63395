import React from 'react'
import BrandComponent from './BrandComponent';

const Brand = () => {
  const logo = 'http://localhost:5173/public/logo.png';
  const styles = 'block h-24 w-auto';
  return (
    <div className="flex shrink-0">
        <a href="/" className="flex items-center">
            <BrandComponent logo={logo} size={styles} />
            <span className="ml-2 text-white text-lg font-semibold">Leo Page</span>
        </a>
    </div>
  )
}

export default Brand