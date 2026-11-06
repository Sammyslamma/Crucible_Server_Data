export const reversibleCardFixture = {
  cards: {
    'sld-1544': {
      layout: 'reversible_card',
      card_faces: [
        { oracle_id: 'oracle-front', illustration_id: 'art-front' },
        { oracle_id: 'oracle-back', illustration_id: 'art-back' },
      ],
    },
  },
  oracleTags: new Map([
    ['oracle-front', ['Hydra', 'Shared']],
    ['oracle-back', ['Tokens', 'Shared']],
  ]),
  artTags: new Map([
    ['art-front', ['Blue', 'Shared Art']],
    ['art-back', ['Gold', 'Shared Art']],
  ]),
  inheritedOracleTags: new Map([
    ['oracle-front', ['Ancestor', 'Shared']],
    ['oracle-back', ['Ancestor', 'Tribal']],
  ]),
  inheritedArtTags: new Map([
    ['art-front', ['Frame', 'Shared Art']],
    ['art-back', ['Frame', 'Reverse']],
  ]),
};
