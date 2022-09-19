// pages/api/publish/[id].ts
// This create a new API route to publish a post.
// Update the API route to modify the database using the Prisma Client.

import prisma from '../../../lib/prisma';

// PUT /api/publish/:id
export default async function handle(req, res) {
  const postId = req.query.id;
  const post = await prisma.post.update({
    where: { id: postId },
    data: { published: true },
  });
  res.json(post);
}
