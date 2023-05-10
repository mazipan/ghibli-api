import { NextResponse, NextRequest } from 'next/server';
import corsHeader from '~/helpers/corsHeader';
import species from "~data/species.json";

export async function GET(request: NextRequest, { params }: { params: { id: string }}) {
  const spc = species.species.find(f => f.id === params.id);
  if (spc) {
    return NextResponse.json({ data: spc }, {
      headers: corsHeader
    });
  }

  return new Response(`Species id ${params.id} is not found!`, {
    status: 400,
    headers: corsHeader
  });
}