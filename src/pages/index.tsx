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
    <div className="flex flex-wrap gap-x-[2vw] justify-center p-[2vw] m-[2vw]">
      {Links.length > 0 &&
        Links.map(({name, url, target}) => (
          <Link key={name} to={url} target={target} className='inline-block'>
            {name}
          </Link>
        ))}
    </div>
  );
};

export default IndexPage;
