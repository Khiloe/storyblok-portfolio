import { storyblokEditable } from '@storyblok/react/rsc';

const Feature = ({ blok }) => {
  return (
    <div className="feature" {...storyblokEditable(blok)}>
      <h2>{blok.headline || blok.name || blok['Storyblok CMS']}</h2>
      {blok.description && <p>{blok.description}</p>}
      
      {blok.link && (
        <a 
          href={blok.link.cached_url || blok.link.url} 
          target="_blank" 
          rel="noopener noreferrer"
          style={{
            display: 'inline-block',
            marginTop: '15px',
            padding: '8px 16px',
            backgroundColor: '#6c5ce7',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '6px',
            fontWeight: 'bold'
          }}
        >
          Connect
        </a>
      )}
    </div>
  );
};

export default Feature;