import { NextResponse } from "next/server";

let thinkerAnswer = '';

export async function GET(request) {
  return new Response(JSON.stringify({ answer: thinkerAnswer }), { status: 200 })
}

// To handle a POST request to /api
export async function POST(request) {
  console.log('post success');
  try {
    const contentType = request.headers.get('content-type');
    if (contentType && contentType.includes('application/json')) {
      const body = await request.json();
      const { answer } = body;
      console.log('received answer', answer);
      // console.log('env variable check:', process.env.NEXT_PUBLIC_THE_THINKER_ANSWER)

      if (answer === process.env.NEXT_PUBLIC_THE_THINKER_ANSWER) {
        thinkerAnswer = answer;
        return new Response(JSON.stringify({ success: true }), { status: 200 })
      } else {
        return new Response(JSON.stringify({ success: false }), { status: 400 });
      }
    } else {
      throw new Error('Content-Type is not application/json');
    }
  } catch (error) {
    console.error('Error:', error);
    return new Response(JSON.stringify({ success: false, error: error.message }), { status: 400 });
  }
}
