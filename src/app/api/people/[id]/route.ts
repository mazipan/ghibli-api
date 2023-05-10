import { NextResponse, NextRequest } from 'next/server';
import people from "~data/people.json";

export async function GET(request: NextRequest, { params }: { params: { id: string }}) {
  const person = people.people.find(f => f.id === params.id);
  if (person) {
    return NextResponse.json({ data: person });
  }

  return new Response(`Person id ${params.id} is not found!`, {
    status: 400,
  });
}