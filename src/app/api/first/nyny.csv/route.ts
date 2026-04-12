import { NextResponse } from "next/server";

const season = 2026;

type Ranking = {
  rank: number;
  teamNumber: number;
  wins: number;
  losses: number;
  ties: number;
};

function getAuthHeader() {
  const username = "jmoranurena";
  const token = "fd0c2eb1-1950-4916-8f67-9b7e04696515";

  return "Basic " + btoa(`${username}:${token}`);
}

export async function GET() {
  try {
    const res = await fetch(
      `https://frc-api.firstinspires.org/v3.0/${season}/rankings/nyny`,
      {
        headers: {
          Authorization: getAuthHeader(),
          Accept: "application/json",
        },
        cache: "no-store",
      }
    );

    if (!res.ok) {
      const text = await res.text();
      return new NextResponse(`FIRST API Error: ${text}`, {
        status: 502,
      });
    }

    const data = await res.json();
    const rankings: Ranking[] = data?.Rankings ?? [];

    const csvLines = [
      "team,rank,record",
      ...rankings.map((r) =>
        `${r.teamNumber},${r.rank},${r.wins}-${r.losses}-${r.ties}`
      ),
    ];

    const csvString = csvLines.join("\n");

    return new NextResponse(csvString, {
      status: 200,
      headers: {
        "Content-Type": "text/csv",
        "Content-Disposition": `attachment; filename="nyny.csv"`,
        "Cache-Control": "no-store"
      },
    });
  } catch (error) {
    return new NextResponse(
      error instanceof Error ? error.message : "Server error",
      { status: 500 }
    );
  }
}
