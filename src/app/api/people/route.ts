import { NextResponse } from 'next/server';
import people from "~data/people.json";

export async function GET(request: Request) {
  return NextResponse.json({ data: people.people });
}