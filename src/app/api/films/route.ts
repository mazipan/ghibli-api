import { NextResponse } from 'next/server';
import corsHeader from '~/helpers/corsHeader';
import films from "~data/films.json";

export async function GET(request: Request) {
  return NextResponse.json({ data: films.films }, {
    headers: corsHeader
  });
}