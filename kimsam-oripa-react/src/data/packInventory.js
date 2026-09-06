/**
 * PLACEHOLDER DATA
 * -----------------
 * Generates 95 unique pack IDs (A-01..A-95) and marks
 * `soldCount` of them as "sold" just so the UI has something to show.
 * Swap this out for a real fetch to your backend/spreadsheet once
 * you have one — components just need an array of { id, status }.
 */
export function generatePackInventory(total = 95, soldCount = 0) {
  const packs = []
  for (let i = 1; i <= total; i++) {
    packs.push({ id: `A-${String(i).padStart(3, '0')}`, status: 'hand' })
  }

  // deterministic-ish shuffle so the demo looks natural but is reproducible
  const soldIndexes = new Set()
  // while (soldIndexes.size < soldCount) {
  //   soldIndexes.add(Math.floor(rand() * total))
  // }
  soldIndexes.forEach((i) => {
    packs[i].status = 'sold'
  })

  return packs
}
