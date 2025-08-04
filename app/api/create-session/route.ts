import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';

export async function POST(req: NextRequest) {
  const { amount, currency, orderId } = await req.json();

  const seed = new Date().toISOString();

  const body = {
    auth: {
      login: process.env.GETNET_LOGIN,
      tranKey: process.env.GETNET_TRANKEY,
      seed,
    },
    payment: {
      reference: orderId,
      amount: {
        currency,
        total: amount,
      },
    },
    returnUrl: "https://TU_DOMINIO.vercel.app/success"
  };

  try {
    const response = await axios.post(
      "https://checkout.test.getnet.cl/api/session",
      body,
      { headers: { "Content-Type": "application/json" } }
    );

    return NextResponse.json(response.data);
  } catch (error: any) {
    console.error(error?.response?.data || error.message);
    return NextResponse.json({ error: "Error al crear sesión con Getnet" }, { status: 500 });
  }
}
