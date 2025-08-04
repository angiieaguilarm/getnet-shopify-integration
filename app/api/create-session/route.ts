export const runtime = 'nodejs'; // ⚠️ muy importante

export async function POST(request: Request) {
  try {
    const body = await request.json();
    return new Response(JSON.stringify({ recibido: body }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err: any) {
    return new Response(JSON.stringify({
      error: "No se pudo leer el cuerpo de la petición",
      detalle: err.message
    }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
