import * as React from 'react';
import { graphql, type HeadFC } from 'gatsby';

interface PageProps {
  data: {
    contentfulPage: {
      title: string;
    };
  };
}

const IndexPage: React.FC<PageProps> = ({ data }) => {
  console.log(data);
  return (
    <main>
      <h1 className="text-6xl">{data.contentfulPage.title}</h1>
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;

export const query = graphql`
  query Page {
    contentfulPage {
      title
    }
  }
`;
