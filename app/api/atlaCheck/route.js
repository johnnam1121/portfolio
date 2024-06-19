import { NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

const filePath = path.join(process.cwd(), 'atlaNumberCorrect.json');

// Ensure the file exists before attempting to read or write to it
async function ensureFileExists() {
  try {
    await fs.access(filePath);
  } catch (error) {
    if (error.code === 'ENOENT') {
      // If the file does not exist, create it with an initial count of 0
      await fs.writeFile(filePath, JSON.stringify({ count: 0 }), 'utf8');
    } else {
      throw error;
    }
  }
}

export async function GET(request) {
  try {
    await ensureFileExists();
    const data = await fs.readFile(filePath, 'utf8');
    const { count } = JSON.parse(data);
    return new Response(JSON.stringify({ atlaNumberCorrect: count }), { status: 200 });
  } catch (error) {
    console.error('Error reading file:', error);
    return new Response(JSON.stringify({ atlaNumberCorrect: 0 }), { status: 500 });
  }
}

export async function POST(request) {
  console.log('post success');
  try {
    await ensureFileExists();
    const contentType = request.headers.get('content-type');
    if (contentType && contentType.includes('application/json')) {
      const body = await request.json();
      const { answer } = body;
      console.log('received answer', answer);

      if (answer === process.env.NEXT_PUBLIC_ATLA_ANSWER) {
        const data = await fs.readFile(filePath, 'utf8');
        const json = JSON.parse(data);
        json.count += 1;
        await fs.writeFile(filePath, JSON.stringify(json), 'utf8');
        return new Response(JSON.stringify({ success: true }), { status: 200 });
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
