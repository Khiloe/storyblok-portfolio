import Page from '@/components/Page';
import Feature from '@/components/Feature';
import Grid from '@/components/Grid';
import Teaser from '@/components/Teaser';
import { apiPlugin, storyblokInit } from '@storyblok/react/rsc';

export const getStoryblokApi = storyblokInit({
  accessToken: '8xUFsyBYpXTbZLqFBrL1Dgtt',
  version: 'published',
  use: [apiPlugin],
  components: {
    page: Page,
    feature: Feature,
    grid: Grid,
    teaser: Teaser,
  },
  apiOptions: {
    region: process.env.STORYBLOK_REGION || 'eu',
  },
});