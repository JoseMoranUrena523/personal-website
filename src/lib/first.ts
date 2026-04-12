const season = 2026;
const eventCode = "NYNY";

export type FirstRanking = {
  rank: number;
  teamNumber: number;
  wins: number;
  losses: number;
  ties: number;
  matchesPlayed: number;
  dq: number;
  qualAverage?: number;
  sortOrder1?: number;
  sortOrder2?: number;
  sortOrder3?: number;
  sortOrder4?: number;
  sortOrder5?: number;
  sortOrder6?: number;
};

type FirstRankingsResponse = {
  Rankings?: FirstRanking[];
};

function getAuthHeader() {
  const username = "jmoranurena";
  const token = "fd0c2eb1-1950-4916-8f67-9b7e04696515";

  return "Basic " + Buffer.from(`${username}:${token}`).toString("base64");
}

export async function getTeamRanking(team: string | number): Promise<FirstRanking | null> {
  const teamNumber = Number(team);

  if (!Number.isInteger(teamNumber) || teamNumber <= 0) {
    throw new Error("Invalid team number");
  }

  const url = `https://frc-api.firstinspires.org/v3.0/${season}/rankings/${eventCode}?teamNumber=${teamNumber}`;

  const res = await fetch(url, {
    method: "GET",
    headers: {
      Authorization: getAuthHeader(),
      Accept: "application/json",
    },
    cache: "no-store",
  });

  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(`FIRST API error ${res.status}: ${text}`);
  }

  const data: FirstRankingsResponse = await res.json();
  return data.Rankings?.[0] ?? null;
}
