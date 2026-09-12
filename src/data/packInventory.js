/**
 * PLACEHOLDER DATA
 * -----------------
 * Generates 100 unique pack IDs (A01..A100) and marks
 * `soldCount` of them as "sold" just so the UI has something to show.
 * Swap this out for a real fetch to your backend/spreadsheet once
 * you have one — components just need an array of { id, status }.
 */
export const soldItems = [5, 15, 25, 35, 45, 55, 65, 75, 85, 95]

export function generatePackInventory(total = 100, soldCount = 10) {
  const packs = []
  for (let i = 1; i <= total; i++) {
    packs.push({ id: `A${String(i).padStart(3, '0')}`, status: 'hand' })
  }

  soldItems.forEach((i) => {
    packs[i-1].status = 'sold'
  })

  return packs
}
