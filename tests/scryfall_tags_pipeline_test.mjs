import test from 'node:test';
import assert from 'node:assert/strict';
import { fanOutTagsToScryfallIds } from '../scripts/scryfall_tag_fanout.mjs';
import { reversibleCardFixture } from './fixtures/reversible-card.mjs';

test('writes reversible-card face tags under the printing Scryfall ID', () => {
  const { lightTags } = fanOutTagsToScryfallIds(
    reversibleCardFixture.cards,
    reversibleCardFixture.oracleTags,
    reversibleCardFixture.artTags,
    reversibleCardFixture.inheritedOracleTags,
    reversibleCardFixture.inheritedArtTags
  );

  assert.deepEqual(Object.keys(lightTags), ['sld-1544']);
  assert.equal(lightTags['sld-1544'].art_tags.length, 3);
  assert.equal(lightTags['sld-1544'].oracle_tags.length, 3);
});
