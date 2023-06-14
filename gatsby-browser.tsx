import * as React from 'react';
import type {GatsbyBrowser} from 'gatsby';
import Layout from './src/components/Layout';
import './src/styles/global.scss';

export const wrapRootElement: GatsbyBrowser['wrapRootElement'] = ({
  element,
}) => {
  return <Layout>{element}</Layout>;
};
