const { request } = require('graphql-request');

async function fetchGraphQL(endpoint, query, variables = {}) {
  try {
    const data = await request(endpoint, query, variables);
    return data;
  } catch (error) {
    console.error('GraphQL request failed:', error);
    throw new Error('GraphQL request failed');
  }
}

module.exports = fetchGraphQL;
