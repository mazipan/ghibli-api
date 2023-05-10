import { NextResponse } from 'next/server';
import corsHeader from '~/helpers/corsHeader';

export async function GET(request: Request) {
  return NextResponse.json({
    data: {
      films: "/api/films",
      locations: "/api/locations",
      people: "/api/people",
      species: "/api/species",
      vehicles: "/api/vehicles",
    }
  }, {
    headers: corsHeader
  });
}