import axios from 'axios';

export const runtime = 'nodejs';

export async function POST(request: Request) {
  try {
    const { amount, currency, orderId } = await request.json();

    const seed = new Date().toISOString();

    const body = {
      auth: {
        login: process.env.GETNET_LOGIN!,
        tranKey: process.env.GETNET_TRANKEY!,
        seed,
      },
      payment: {
        reference: orderId,
        amount: {
          currency,
          total: amount
        }
      },
      returnUrl: 'https://getnet-shopify-integration.vercel.app/success'
    };

    const { data } = await axios.post(
      'https://checkout.test.getnet.cl/api/session',
      body,
      { headers: { 'Content-Type': 'application/json' } }
    );

    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (err: any) {
    console.error('❌ Error al crear sesión con Getnet:', err.response?.data || err.message);
    return new Response(JSON.stringify({
      error: 'Error al crear sesión con Getnet',
      detalle: err.response?.data || err.message
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
