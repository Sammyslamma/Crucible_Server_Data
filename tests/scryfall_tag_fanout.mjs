import test from 'node:test';
import assert from 'node:assert/strict';
import { fanOutTagsToScryfallIds } from '../scripts/scryfall_tag_fanout.mjs';
import { reversibleCardFixture } from './fixtures/reversible-card.mjs';

test('fans out and combines sorted unique tags from both reversible card faces', () => {
  const result = fanOutTagsToScryfallIds(
    reversibleCardFixture.cards,
    reversibleCardFixture.oracleTags,
    reversibleCardFixture.artTags,
    reversibleCardFixture.inheritedOracleTags,
    reversibleCardFixture.inheritedArtTags
  );

  assert.equal(result.cardsWithTags, 1);
  assert.deepEqual(result.lightTags['sld-1544'], {
    oracle_tags: ['Hydra', 'Shared', 'Tokens'],
    inherited_oracle_tags: ['Ancestor', 'Tribal'],
    art_tags: ['Blue', 'Gold', 'Shared Art'],
    inherited_art_tags: ['Frame', 'Reverse', 'Shared Art'],
  });
});
