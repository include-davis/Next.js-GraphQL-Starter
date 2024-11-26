import handleApolloRequest from '@actions/handleApolloRequest';
import { DocumentNode, print } from 'graphql';

export default async function sendApolloRequest(
  query: DocumentNode,
  variables: object
) {
  return handleApolloRequest(print(query), variables);
}
