export const runtime = 'nodejs'; // 👈 MUY IMPORTANTE

export async function POST(request: Request) {
  try {
    const body = await request.json();
    console.log("📦 Body recibido:", body);
    return new Response(JSON.stringify({ recibido: body }), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error: any) {
    console.error("❌ Error leyendo body:", error.message);
    return new Response(JSON.stringify({ error: "No se pudo leer el cuerpo de la petición" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }
}
