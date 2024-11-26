'use server';

import { revalidatePath, revalidateTag } from 'next/cache';

import handler from '@datalib/apolloServer';

export default async function handleApolloRequest(
  query: string,
  variables: object,
  revalidate?: { path?: string; type?: 'page' | 'layout'; tag?: string }
) {
  const headers = {
    'Content-Type': 'application/json',
  };

  // We use a dummy URL since we're not actually querying a real endpoint
  const req = new Request('http://a', {
    method: 'POST',
    headers: headers,
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  const res = await handler(req);

  if (revalidate?.path) revalidatePath(revalidate.path, revalidate.type);
  if (revalidate?.tag) revalidateTag(revalidate.tag);

  return res.json();
}
