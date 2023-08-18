import AttractionService from "@src/services/AttractionService";

async function getAll() {
  const attractions = await AttractionService.getAll();
  return attractions;
}

export default {
  getAll,
} as const;
