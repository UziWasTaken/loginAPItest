import type { APIRoute } from 'astro';

export const GET: APIRoute = async ({ request }) => {
  return new Response(
    JSON.stringify({
      message: "Hello from the API!",
      timestamp: new Date().toISOString(),
      version: "1.0.0"
    }),
    {
      status: 200,
      headers: {
        "Content-Type": "application/json"
      }
    }
  );
};

export const POST: APIRoute = async ({ request }) => {
  const body = await request.json();
  
  return new Response(
    JSON.stringify({
      message: "Data received!",
      data: body,
      timestamp: new Date().toISOString()
    }),
    {
      status: 200,
      headers: {
        "Content-Type": "application/json"
      }
    }
  );
}; 