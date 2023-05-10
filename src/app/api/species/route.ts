import { NextResponse } from 'next/server';
import species from "~data/species.json";

export async function GET(request: Request) {
  return NextResponse.json({ data: species.species });
}