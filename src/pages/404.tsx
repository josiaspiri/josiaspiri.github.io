import * as React from 'react';
import {Link, PageProps} from 'gatsby';

const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <>
      <h1>4 0 4 !</h1>
      <p>
        Nothing is here. <Link to="/">Go back.</Link>
      </p>
    </>
  );
};

export default NotFoundPage;
export {Head} from '../components/GlobalHead';
