import * as React from 'react';
import type {GatsbyBrowser} from 'gatsby';
import Layout from './src/components/Layout';
import './src/styles/global.css';

export const wrapRootElement: GatsbyBrowser['wrapRootElement'] = ({
  element,
}) => {
  return <Layout>{element}</Layout>;
};
