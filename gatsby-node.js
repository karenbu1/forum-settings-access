const path = require('path');
const paginate = require('gatsby-awesome-pagination').paginate;

exports.createPages = async ({ graphql, actions }) => {
  const { createRedirect } = actions;

  // createRedirect({
  //   fromPath: '/',
  //   toPath: 'https://training.bootuppd.org/login/index.php',
  //   redirectInBrowser: true,
  //   isPermanent: true,
  //   force: true
  // });
};
