// app/api/user/[name]/route.js

import prisma from "@/lib/db";

export async function GET(request, { params }) {
  try {
    const { name } = await params;

    const user = await prisma.user.findMany({
      where: { name },
    });

    if (!user) {
      return new Response(JSON.stringify({ error: "User tidak ditemukan" }), {
        status: 404,
      });
    }

    return new Response(JSON.stringify(user), {
      headers: { "Content-Type": "application/json" },
      status: 200,
    });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
    });
  }
}
