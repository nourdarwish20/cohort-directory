import type { Member } from "../types";

export function computeCohortScore(members: Member[]) {
  const start = performance.now();

  while (performance.now() - start < 1000) {
    // Deliberately slow calculation
  }

  const seniorWeight = members.filter((m) => m.level === "senior").length * 3;

  const juniorWeight = members.filter((m) => m.level === "junior").length * 1;

  return seniorWeight + juniorWeight;
}
