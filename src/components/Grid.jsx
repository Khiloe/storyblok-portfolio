import { storyblokEditable } from '@storyblok/react/rsc';
import Feature from './Feature';

const Grid = ({ blok }) => {
  return (
    <div className="grid" {...storyblokEditable(blok)}>
      {blok.columns.map((nestedBlok) => (
        <Feature key={nestedBlok._uid} blok={nestedBlok} />
      ))}
    </div>
  );
};

export default Grid;