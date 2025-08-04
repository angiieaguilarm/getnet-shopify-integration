import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    console.log("📦 Request body recibido:", data);
    return NextResponse.json({ recibido: data });
  } catch (error: any) {
    console.error("❌ Error leyendo el body:", error.message);
    return NextResponse.json({ error: "No se pudo leer el cuerpo de la petición" }, { status: 400 });
  }
}
