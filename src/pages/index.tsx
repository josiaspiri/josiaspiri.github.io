import * as React from 'react';
import {Link, type PageProps} from 'gatsby';

const IndexPage: React.FC<PageProps> = () => {
  const Links: { name: string; url: string; target: string | undefined }[] = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/josias-piri-0a4a71aa',
      target: '_blank',
    },
    {
      name: 'GitHub',
      url: 'https://github.com/josiaspiri',
      target: '_blank',
    },
  ];

  return (
    <div className="prose prose-invert text-center">
      <h1>Josias Piri</h1>
      <div className="-mx-[calc(5px+2vw)]">
        {Links.length > 0 &&
          Links.map(({name, url, target}) => (
            <Link
              key={name}
              to={url}
              target={target}
              className="mx-[calc(5px+.5vw)] inline-block"
            >
              {name}
            </Link>
          ))}
      </div>
    </div>
  );
};

export default IndexPage;
