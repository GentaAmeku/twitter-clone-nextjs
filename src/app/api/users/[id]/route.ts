import { users } from "../_db";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const id = (await params).id;
    if (!id) {
      return new Response(null, { status: 404 });
    }
    const user = users.find((user) => user.id === id);
    return Response.json(user);
  } catch (error) {
    if (error instanceof Error) {
      return new Response(error.message, {
        status: 400,
      });
    }
  }
}
