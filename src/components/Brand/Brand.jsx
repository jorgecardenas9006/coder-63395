import React from 'react'
import BrandComponent from './BrandComponent';
import { Link } from 'react-router-dom';

const Brand = () => {
  const logo = 'http://localhost:5173/public/logo.png';
  const styles = 'block h-24 w-auto';
  return (
    <div className="flex shrink-0">
        <Link to="/" className="flex items-center">
            <BrandComponent logo={logo} size={styles} />
            <span className="ml-2 text-white text-lg font-semibold">Leo Page</span>
        </Link>
    </div>
  )
}

export default Brand