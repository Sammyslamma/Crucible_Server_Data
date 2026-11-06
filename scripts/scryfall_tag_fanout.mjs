function collectLabelsByIds(tagMap, ids) {
  if (!tagMap) return null;

  const labels = new Set();
  for (const id of ids) {
    if (!id) continue;
    for (const label of tagMap.get(id) || []) {
      labels.add(label);
    }
  }
  return labels.size > 0 ? [...labels].sort() : null;
}

function getCardTagIds(card, field) {
  const ids = new Set();
  if (card[field]) ids.add(card[field]);
  if (Array.isArray(card.card_faces)) {
    for (const face of card.card_faces) {
      if (face && face[field]) ids.add(face[field]);
    }
  }
  return [...ids];
}

/**
 * Fan inverted Tagger maps out to per-printing entries keyed by scryfall_id.
 * Multi-faced cards use the IDs on both the card and its faces; tags from all
 * matching IDs are combined into sorted, unique label arrays.
 */
export function fanOutTagsToScryfallIds(
  scryfallCards,
  oracleByOracleId,
  artByIllustrationId,
  oracleInheritedByOracleId,
  artInheritedByIllustrationId
) {
  const lightTags = {};
  let cardsWithTags = 0;
  for (const [scryfallId, card] of Object.entries(scryfallCards)) {
    const entry = {};
    const oracleIds = getCardTagIds(card, 'oracle_id');
    const illustrationIds = getCardTagIds(card, 'illustration_id');
    const oracleLabels = collectLabelsByIds(oracleByOracleId, oracleIds);
    if (oracleLabels) {
      entry.oracle_tags = oracleLabels;
    }

    const inheritedOracleLabels = collectLabelsByIds(oracleInheritedByOracleId, oracleIds);
    if (inheritedOracleLabels) {
      const directOracleLabels = new Set(oracleLabels || []);
      const ancestorOnlyLabels = inheritedOracleLabels.filter(label => !directOracleLabels.has(label));
      if (ancestorOnlyLabels.length > 0) {
        entry.inherited_oracle_tags = ancestorOnlyLabels;
      }
    }

    const artLabels = collectLabelsByIds(artByIllustrationId, illustrationIds);
    if (artLabels) {
      entry.art_tags = artLabels;
    }

    const artInheritedLabels = collectLabelsByIds(artInheritedByIllustrationId, illustrationIds);
    if (artInheritedLabels) {
      entry.inherited_art_tags = artInheritedLabels;
    }

    if (Object.keys(entry).length > 0) {
      lightTags[scryfallId] = entry;
      cardsWithTags++;
    }
  }
  return { lightTags, cardsWithTags };
}
