export async function GET(request) {
    console.log(request.body);
}

export async function POST(request) {
    const body = await request.json()
    console.log(body)
    return new Response("OK");
}