const fs = require("fs");
const path = require("path");
const mkdirp = require("mkdirp");

exports.createPages = async ({ actions, graphql, reporter }) => {
  const result = await graphql(`
    query {
      allFile {
        nodes {
          fields {
            slug
          }
        }
      }
    }
  `);

  if (result.errors) {
    // OH NO
    reporter.panic("Error loading styleguide mdx files", result.errors);
  }

  result.data.allFile.nodes.forEach(node => {
    actions.createPage({
      path: node.fields.slug,
      component: require.resolve("./src/templates/default.js"),
      context: { slug: node.fields.slug }
    });
  });
};

exports.onCreateNode = ({ node, actions }, options) => {
  if (node.internal.type !== "File") {
    return;
  }

  // Get post path
  const toPostPath = node => {
    // Using the path plugin from Node
    // Break apart the relative path for the file
    // and give us the directory
    console.log(node);
    const { dir } = path.parse(node.relativePath);
    const basePath = options.basePath || "/";

    return path.join(basePath, dir, node.name);
  };

  const slug = toPostPath(node);
  actions.createNodeField({
    node,
    name: "slug",
    value: slug
  });

  console.log(`DID IT WORK ${slug}`);
};

/*
  Runs before Gatsby does things
  "I'm gonna let u finish but before u do"
  check if there's a content directory and if not create one
*/
exports.onPreBootstrap = ({ store }, options) => {
  const { program } = store.getState();
  const basePath = options.basePath || "docs";
  const dir = path.join(program.directory, basePath);
  if (!fs.existsSync(dir)) {
    mkdirp.sync(dir);
  }
};
