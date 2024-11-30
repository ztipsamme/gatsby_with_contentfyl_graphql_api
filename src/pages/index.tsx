import * as React from 'react';
import { graphql, type HeadFC, type PageProps } from 'gatsby';

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
