import { NextResponse, NextRequest } from 'next/server';
import locations from "~data/locations.json";

export async function GET(request: NextRequest, { params }: { params: { id: string }}) {
  const location = locations.locations.find(f => f.id === params.id);
  if (location) {
    return NextResponse.json({ data: location });
  }

  return new Response(`Location id ${params.id} is not found!`, {
    status: 400,
  });
}