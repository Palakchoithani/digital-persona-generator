export async function POST(request) {
  const body = await request.json().catch(() => ({}));
  const answers = body.answers || [];

  return new Response(
    JSON.stringify({
      palette: ["#111827", "#1F2937", "#3B82F6"],
      avatarSeed: answers.join("-") || "guest",
      moodboard: [
        "https://picsum.photos/seed/1/400",
        "https://picsum.photos/seed/2/400",
      ],
    }),
    { status: 200, headers: { "Content-Type": "application/json" } }
  );
}
