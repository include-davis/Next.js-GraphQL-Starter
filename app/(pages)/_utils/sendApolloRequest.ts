import { DocumentNode, print } from 'graphql';

import handleApolloRequest from '@actions/handleApolloRequest';

export default async function sendApolloRequest(
  query: DocumentNode,
  variables: object
) {
  return handleApolloRequest(print(query), variables);
}
