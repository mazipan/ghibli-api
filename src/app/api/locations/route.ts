import { NextResponse } from 'next/server';
import locations from "~data/locations.json";

export async function GET(request: Request) {
  return NextResponse.json({ data: locations.locations });
}