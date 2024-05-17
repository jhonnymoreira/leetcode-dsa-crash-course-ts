export function findWinners(matches: [number, number][]): [number[], number[]] {
  const lossesByPlayer = new Map<number, number>();
  const playerIds = new Set<number>();

  for (const [winnerId, loserId] of matches) {
    const loserLostMatches = lossesByPlayer.get(loserId) || 0;

    lossesByPlayer.set(loserId, loserLostMatches + 1);

    playerIds.add(winnerId);
    playerIds.add(loserId);
  }

  const undefeated: number[] = [];
  const singleLoss: number[] = [];

  for (const playerId of playerIds) {
    const losses = lossesByPlayer.get(playerId) || 0;

    if (losses === 0) {
      undefeated.push(playerId);
    }

    if (losses === 1) {
      singleLoss.push(playerId);
    }
  }

  return [undefeated.sort((a, b) => a - b), singleLoss.sort((a, b) => a - b)];
}
