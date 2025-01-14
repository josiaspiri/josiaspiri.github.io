import * as React from 'react';
import type {GatsbyBrowser} from 'gatsby';
import Layout from './src/components/Layout';
import '@fontsource/ibm-plex-sans';
import './src/styles/global.scss';

export const wrapPageElement: GatsbyBrowser['wrapPageElement'] = ({
  element,
}) => {
  return <Layout>{element}</Layout>;
};
