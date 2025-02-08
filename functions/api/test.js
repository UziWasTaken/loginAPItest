export function onRequest(context) {
    return new Response(
        JSON.stringify({
            message: "Hello from the API!",
            timestamp: new Date().toISOString()
        }),
        {
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*"
            }
        }
    );
} 