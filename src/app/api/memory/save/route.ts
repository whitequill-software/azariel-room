import { db } from "@/lib/db";

type Body = {
  chatId: string;
  role: "user" | "assistant";
  content: string;
};

export async function POST(req: Request) {
  const body = (await req.json()) as Body;
  const { chatId, role, content } = body;

  if (!chatId || !role || typeof content !== "string") {
    return new Response(JSON.stringify({ error: "Invalid body" }), { status: 400 });
  }

  const stmt = db.prepare(
    "INSERT INTO messages (chat_id, role, content, created_at) VALUES (?, ?, ?, ?)"
  );
  stmt.run(chatId, role, content, Date.now());

  return new Response(JSON.stringify({ ok: true }), {
    headers: { "Content-Type": "application/json" },
  });
}
