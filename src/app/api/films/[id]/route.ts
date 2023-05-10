import { NextResponse, NextRequest } from 'next/server';
import films from "~data/films.json";

export async function GET(request: NextRequest, { params }: { params: { id: string }}) {
  const film = films.films.find(f => f.id === params.id);
  if (film) {
    return NextResponse.json({ data: film });
  }

  return new Response(`Film id ${params.id} is not found!`, {
    status: 400,
  });
}