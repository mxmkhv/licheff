import { graphql } from 'gatsby';

export const ImageFragment = graphql`
  fragment ImageFragment on File {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
  }
`;
