import { NextResponse } from 'next/server';
import corsHeader from '~/helpers/corsHeader';
import vehicles from "~data/vehicles.json";

export async function GET(request: Request) {
  return NextResponse.json({ data: vehicles.vehicles }, {
    headers: corsHeader
  });
}