import { NextResponse } from "next/server";
import { getTeamRanking } from "@/lib/first";

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ team: string }> }
) {
  try {
    const { team } = await params;
    const ranking = await getTeamRanking(team);

    if (!ranking) {
      return NextResponse.json({ error: "Team not found" }, { status: 404 });
    }

    return NextResponse.json({ rank: ranking.rank });
  } catch (error) {
    return NextResponse.json(
      {
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
