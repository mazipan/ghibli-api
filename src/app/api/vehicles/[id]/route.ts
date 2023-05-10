import { NextResponse, NextRequest } from 'next/server';
import corsHeader from '~/helpers/corsHeader';
import vehicles from "~data/vehicles.json";

export async function GET(request: NextRequest, { params }: { params: { id: string }}) {
  const vehicle = vehicles.vehicles.find(f => f.id === params.id);
  if (vehicles) {
    return NextResponse.json({ data: vehicle }, {
      headers: corsHeader
    });
  }

  return new Response(`Vehicle id ${params.id} is not found!`, {
    status: 400,
    headers: corsHeader
  });
}