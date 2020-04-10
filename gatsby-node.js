exports.createPages = async ({ actions, graphql, reporter }) => {
  const result = await graphql(`
    query {
      allMarkdownRemark {
        nodes {
          frontmatter {
            slug
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  result.data.allMarkdownRemark.nodes.forEach(project => {
    console.log(project);

    actions.createPage({
      path: project.frontmatter.slug,
      component: require.resolve('./src/templates/Project.js'),
      context: {
        slug: project.frontmatter.slug
      }
    });
  });
};
