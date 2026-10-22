import {
  storyblokEditable,
  StoryblokServerComponent,
} from '@storyblok/react/rsc';

const Page = ({ blok }) => {
  // Safety check: if the page has no body or blok is missing, don't crash
  if (!blok || !blok.body) {
    return <div>Loading...</div>;
  }

  return (
    <main {...storyblokEditable(blok)}>
      {blok.body.map((nestedBlok) => (
        <StoryblokServerComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </main>
  );
};

export default Page;