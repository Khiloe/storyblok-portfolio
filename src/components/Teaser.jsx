'use client';
import { storyblokEditable } from '@storyblok/react/rsc';
import { usePathname } from 'next/navigation';

const Teaser = ({ blok }) => {
  const pathname = usePathname();
  const isAboutPage = pathname === '/about';

  return (
    <div className="teaser" {...storyblokEditable(blok)}>
      <h1>{blok.headline}</h1>
	  {blok.headline.toLowerCase() === 'about' && (
  <p style={{ textAlign: 'center', fontSize: '1.2rem', marginBottom: '1rem', zIndex: 10, position: 'relative' }}>
    IT and web-focused professional with a strong QA habit, building modern web experiences.
  </p>
)}
      {blok.image && (
        <img 
          src={blok.image.filename} 
          alt={blok.image.alt || 'Teaser image'} 
          className={isAboutPage ? 'profile-image' : 'bg-image'}
        />
      )}
    </div>
  );
};

export default Teaser;