/* eslint-disable react/button-has-type */
import React from 'react';
import { Link, graphql } from 'gatsby';
import styled, { keyframes } from 'styled-components';
import Image from 'gatsby-image';
import Layout from '../components/layout';
import Hero from '../components/hero';
import Card from '../components/card';
import Grid from '../components/grid';
import SEO from '../components/seo';

const _ = require('lodash');

const Index = ({ data }) => {
  const { edges: tutorials } = data.allMdx;
  const featured = data.featuredPost.edges[0].node;
  const rotateState = featured.frontmatter.rotate;

  return (
    <Layout>
      <SEO title="Home" />
      <Hero>
        <div>
          {featured.frontmatter.tags.map((tag, i) => (
            <Link
              to={`/tags/${_.kebabCase(tag)}`}
              key={i}
              aria-label="Tutorial Icon"
            >
              <RotateIcon
                className={rotateState === true ? 'rotateTrue' : null}
              >
                <Icon>
                  <Image
                    loading="eager"
                    fluid={featured.frontmatter.icon.sharp.fluid}
                  />
                </Icon>
              </RotateIcon>
            </Link>
          ))}
          <h1>{featured.frontmatter.title}</h1>
          <p>{featured.frontmatter.lead}</p>
          <Link
            key={featured.id}
            to={`/tutorials/${featured.frontmatter.slug}`}
          >
            <button>Read New Tutorials</button>
          </Link>
        </div>
      </Hero>
      <TitlePadding>
        <TitleWrapper>
          <h2>
            Latest Tutorials{' '}
            <Link to="/tutorials">
              <button>View All</button>
            </Link>
          </h2>
        </TitleWrapper>
      </TitlePadding>
      <Grid>
        {tutorials.map(({ node: tutorial }) => (
          <Link
            key={tutorial.id}
            to={`/tutorials/${tutorial.frontmatter.slug}`}
          >
            <Card
              tutorialIcon={tutorial.frontmatter.icon.sharp.fluid}
              tutorialTags={tutorial.frontmatter.tags}
              tutorialTitle={tutorial.frontmatter.title}
            />
          </Link>
        ))}
      </Grid>
    </Layout>
  );
};

export default Index;

export const pageQuery = graphql`
  query IndexPage {
    allMdx(
      sort: { fields: frontmatter___tutorialID, order: DESC }
      filter: { fileAbsolutePath: { regex: "//tutorials//" } }
      limit: 3
    ) {
      edges {
        node {
          id
          excerpt
          frontmatter {
            title
            slug
            tags
            tutorialID
            lead
            image {
              sharp: childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
            icon {
              sharp: childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    }
    featuredPost: allMdx(
      sort: { fields: frontmatter___tutorialID, order: DESC }
      filter: { fileAbsolutePath: { regex: "//tutorials//" } }
      limit: 1
    ) {
      edges {
        node {
          id
          excerpt
          frontmatter {
            title
            slug
            tags
            tutorialID
            lead
            rotate
            image {
              sharp: childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
            icon {
              sharp: childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    }
    placeholderImage2: file(relativePath: { eq: "lauro.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Icon = styled.div`
  width: 60px;
  margin: auto;
  margin-bottom: 25px;
  animation: HeroAnimation 3s 0.8s forwards cubic-bezier(0.2, 0.8, 0.2, 1);
  opacity: 0;
  :hover {
    filter: brightness(1.1) saturate(110%);
  }
`;

const RotateIcon = styled.div`
  &.rotateTrue {
    animation: ${rotate} 15s linear infinite;
  }
`;

const TitlePadding = styled.div`
  padding: 20px;
`;
const TitleWrapper = styled.div`
  max-width: ${props => props.theme.screen.sm};
  margin: auto;
  h2 {
    display: flex;
    align-items: center;
    border-bottom: 0;
    padding-bottom: 0;
    line-height: 0;
  }
  a {
    margin: 0 20px;
  }
  button {
    background: ${props => props.theme.color.primary.purple};
    display: inline-block;
    padding: 6px 20px;
    border-radius: 20px;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1;
    color: white;
    opacity: 0.9;
    .dark & {
      background: ${props => props.theme.color.primary.blue};
      color: ${props => props.theme.color.dark.accent100};
    }
  }
  button:hover {
    transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
    opacity: 1;
  }
  @media (max-width: 680px) {
    h2 {
      font-size: 1.3rem;
    }
  }
`;
