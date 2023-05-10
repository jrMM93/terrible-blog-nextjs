import { z } from 'zod';
import { getPosts } from '~/db/posts';
import { NextResponse } from 'next/server';
// import { apiHandler } from '~/lib/api/apiHandler';

const PageParamsScheme = z.object({
  page: z.string().optional(),
});

// apiHandler({
//   endpoints: {
//     GET: async (req, res) => {
//       const params = PageParamsScheme.parse(req.query);
//       const page = Number(params.page ?? 0);
//       console.log('PAGE : ', page);

//       const posts = await getPosts(page);

//       res.status(200).json({
//         posts,
//         nextPage: posts.length === 4 ? page + 1 : undefined,
//       });
//     },
//   },
// });

// export { apiHandler as GET };

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const page = Number(searchParams.get('page') ?? 0);

  console.log('PAGE : ', page);

  const posts = await getPosts(page);

  return NextResponse.json({
    posts,
    nextPage: posts.length === 4 ? page + 1 : undefined,
  });
}
