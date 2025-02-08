export async function onRequest(context) {
  return new Response(JSON.stringify({
    message: "Hello from the API!",
    timestamp: new Date().toISOString(),
    status: "success"
  }), {
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*"
    }
  });
} 