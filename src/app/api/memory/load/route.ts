import { db } from "@/lib/db";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const chatId = searchParams.get("chatId");

  if (!chatId) {
    return new Response(JSON.stringify({ error: "Missing chatId" }), { status: 400 });
  }

  const rows = db
    .prepare(
      "SELECT role, content FROM messages WHERE chat_id = ? ORDER BY created_at ASC"
    )
    .all(chatId) as { role: "user" | "assistant"; content: string }[];

  return new Response(JSON.stringify({ messages: rows }), {
    headers: { "Content-Type": "application/json" },
  });
}
