// exports.createPages = async ({ actions, graphql, reporter }) => {
//   const result = await graphql(`
//     query {
//       allMarkdownRemark {
//         nodes {
//           frontmatter {
//             project_title
//           }
//         }
//       }
//     }
//   `);

//   if (result.errors) {
//     reporter.panicOnBuild(`Error while running GraphQL query.`);
//     return;
//   }

//   const projects = result.data.allMarkdownRemark.nodes;

//   projects.forEach(({ project }) => {
//     createPage({
//       path: project.frontmatter.project_title,
//       component: blogPostTemplate,
//       context: {} // additional data can be passed via context
//     });
//   });
// };
