import * as React from 'react';
import {Link, PageProps} from 'gatsby';

const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <div className="mx-auto w-fit">
      <h1>4 0 4 !</h1>
      <p>
        Nothing is here. <Link to="/">Go back.</Link>
      </p>
    </div>
  );
};

export default NotFoundPage;
export {Head} from '../components/GlobalHead';
