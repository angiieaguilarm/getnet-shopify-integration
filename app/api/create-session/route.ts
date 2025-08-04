import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'nodejs'; // ⚠️ SIN ESTO, NO FUNCIONA req.json()

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    console.log("📦 Body recibido:", data);
    return NextResponse.json({ recibido: data });
  } catch (error: any) {
    console.error("❌ Error leyendo el body:", error.message);
    return NextResponse.json({ error: "No se pudo leer el cuerpo de la petición" }, { status: 400 });
  }
}
