# Scryfall Tagger Vocabulary Reference

_Generated 2026-09-13 from Scryfall bulk data (oracle_tags updated 2026-09-12T21:00:32.915+00:00, art_tags updated 2026-09-12T21:01:13.909+00:00). Regenerate by re-downloading the bulk files and re-running the same join._

Reference for designing the app-side role buckets: the pipeline ships raw labels only, so grouping tags into gameplay roles (Removal, Ramp, Draw, ...) is a curated mapping done in the app. Counts are card taggings.

## Oracle tags (gameplay roles) ? 4396 labels with taggings

Sorted by tagging count. `Parent` is the label of the tag this one sits under in Tagger's hierarchy (useful, but inconsistent: some role families are orphaned, and structural families like `cycle` group 1300+ tags of mechanical trivia). Hyphenated prefixes (`removal-*`, `tutor-*`, `counterspell-*`, `reanimate-*`) are the most reliable bucketing signal.

| Label | Cards | Parent | Children |
|---|---:|---|---:|
| activated ability | 9125 | - | 7 |
| triggered ability | 7922 | - | 21 |
| spot removal | 5329 | removal | 1 |
| evasion | 4718 | - | 19 |
| single target instant/sorcery | 4700 | - | - |
| alliteration | 4432 | card names | - |
| repeatable crime | 3706 | - | 1 |
| unique type line | 2220 | - | 3 |
| intervening if clause | 2200 | triggered ability | 5 |
| attack trigger | 2069 | triggered ability | 3 |
| removal-creature | 1924 | removal | 10 |
| repeatable removal | 1787 | removal | 1 |
| gains pp counters | 1773 | - | 5 |
| repeatable pp counters | 1722 | - | 3 |
| noncreature typal | 1714 | typal-creature | - |
| removal-destroy | 1709 | removal | 2 |
| namesake spell | 1637 | card names | - |
| attacking matters-self | 1636 | - | 1 |
| virtual vanilla | 1608 | flavors of vanilla | - |
| draw engine | 1579 | repeatable draw | 1 |
| french vanilla | 1556 | flavors of vanilla | 1 |
| multiple targets | 1535 | - | - |
| repeatable creature tokens | 1490 | repeatable token generator | 1 |
| repeatable lifegain | 1404 | lifegain | 3 |
| repeatable pure draw | 1395 | pure draw, repeatable draw | 1 |
| cheaper than mv | 1394 | - | 3 |
| gives pp counters | 1371 | - | 11 |
| drawback | 1351 | - | 10 |
| virtual french vanilla | 1322 | flavors of vanilla | - |
| cast trigger-you | 1308 | cast trigger | 2 |
| single english word name | 1299 | card names | - |
| pure draw | 1272 | draw | 5 |
| attacking matters | 1183 | - | 5 |
| delayed trigger | 1128 | triggered ability | 4 |
| combat trick | 1091 | - | 1 |
| mana sink | 1067 | - | 2 |
| burn creature | 1041 | removal-burn, removal-creature | 7 |
| more expensive than mv | 983 | - | 3 |
| power boost to all | 958 | - | 5 |
| burn any | 917 | burn player, burn battle, burn planeswalker, burn creature | - |
| opponent loses life | 913 | - | - |
| sacrifice outlet-creature | 896 | sacrifice outlet | 5 |
| burn player | 891 | burn | 2 |
| lifegain | 885 | - | 8 |
| exile-self | 868 | - | 5 |
| bottomless mana sink | 806 | mana sink | - |
| toughness boost to all | 801 | - | 2 |
| symmetrical | 796 | - | 3 |
| pinger | 769 | - | - |
| group slug | 743 | - | 1 |
| sweeper | 739 | removal | 1 |
| protects-creature | 732 | protection | 2 |
| death trigger-self | 709 | death trigger | 3 |
| synergy-artifact | 707 | - | 7 |
| cantrip | 683 | pure draw | - |
| multi removal | 676 | removal | - |
| gives haste | 631 | - | 7 |
| burst draw | 628 | draw | 1 |
| tapper-creature | 624 | tapper | 2 |
| removal-toughness | 611 | removal-creature | - |
| repeatable sacrifice outlet | 600 | sacrifice outlet | 2 |
| death trigger | 591 | triggered ability | 5 |
| utility land | 581 | - | 2 |
| anthem | 576 | - | - |
| type addition human | 573 | type errata addition | - |
| modal | 572 | - | 6 |
| tutor-to-hand | 568 | tutor-to | 2 |
| ramp | 560 | - | 8 |
| discard | 559 | hand disruption, black effect | 2 |
| reanimate-creature | 559 | reanimate, recursion-creature | - |
| creaturefall | 553 | thingfall | 2 |
| martyr | 545 | sacrifice self | 2 |
| activate from hand | 533 | activated ability | 2 |
| saboteur | 532 | - | 7 |
| adds multiple mana | 529 | - | 1 |
| potentially black border | 522 | - | - |
| punny name | 518 | card names | - |
| keyword anthem | 516 | - | - |
| out of color token | 513 | - | - |
| enters in company | 507 | multiple bodies | - |
| type errata | 501 | - | 16 |
| land ramp | 494 | ramp | 1 |
| discard outlet | 491 | - | 10 |
| synergy-instant | 474 | - | 3 |
| synergy-sorcery | 473 | - | 3 |
| scry | 471 | top deck manipulation, bottom deck manipulation, peek-library | 1 |
| gives flying | 459 | gives evasion | 1 |
| mana dork | 459 | mana producer | - |
| untapper-creature | 454 | untapper | 1 |
| removal-exile | 452 | removal | 1 |
| gives trample | 448 | - | 1 |
| per-player | 446 | multiplayer | 6 |
| castable from exile | 443 | castable from nonhand, unexile | 1 |
| free-cast-another | 423 | cost ignorer | - |
| multiple bodies | 423 | - | 1 |
| block trigger | 422 | triggered ability | - |
| castable from graveyard | 409 | castable from nonhand | - |
| scales with power | 408 | power matters | 5 |
| cast on resolution | 403 | - | 7 |
| removal-nonland | 400 | removal, removal-artifact, removal-enchantment, removal-creature, removal-planeswalker, removal-battle, removal-equipment, removal-aura, removal-spacecraft, removal-vehicle | - |
| drain life | 394 | lifegain, inverted effects | 2 |
| gives castable from exile | 391 | gives castable from nonhand | 11 |
| unique token | 382 | - | - |
| scales with mana value | 381 | mana value matters | - |
| burn planeswalker | 380 | removal-burn, removal-planeswalker | 1 |
| fun ruling | 378 | - | - |
| self-replacement effect | 374 | - | - |
| damage prevention | 373 | - | 6 |
| hate-attacker | 373 | hate | - |
| sacrifice self | 372 | - | 4 |
| hate-blocker | 367 | hate | 4 |
| copy-creature | 363 | copy | 3 |
| removal-sacrifice | 363 | removal | 2 |
| pp counters matter | 353 | counters matter | 2 |
| mini refund | 352 | refund | - |
| tutor-land-basic | 351 | tutor-land | 7 |
| repeatable card advantage | 350 | card advantage | 6 |
| removal-bounce | 346 | removal, bounce, blue effect | 1 |
| life payment | 344 | - | 6 |
| removal-artifact | 340 | removal | 6 |
| offcolor ability | 338 | - | - |
| regrowth-creature | 338 | regrowth, recursion-creature | 2 |
| mill-self | 337 | mill | 4 |
| untracked indefinite effect | 329 | indefinite effect | 3 |
| egg | 328 | sacrifice self | 2 |
| surveil | 327 | mill-self, top deck manipulation, peek-library | 1 |
| unique mana cost | 326 | - | - |
| force draw | 325 | - | - |
| tap fuel-creature | 318 | tap outlet | 3 |
| gains flying | 317 | evasion | - |
| enlarge | 314 | - | - |
| copy-self | 313 | copy | 1 |
| reflexive trigger | 313 | triggered ability | - |
| aesthetic counter | 311 | - | 2 |
| synergy-noncreature | 310 | - | 3 |
| digital-only mechanics | 306 | - | 3 |
| power matters-self | 302 | power matters | 1 |
| removal-land | 301 | removal | 3 |
| shade pump | 300 | - | - |
| bear with set's mechanic | 298 | staple with set's mechanic | - |
| mana value matters | 298 | - | 5 |
| life for cards | 296 | life payment, black effect, card advantage | 2 |
| firebreathing | 295 | - | - |
| counters matter | 293 | - | 9 |
| sacrifice outlet-artifact | 293 | sacrifice outlet | 3 |
| front-card | 291 | - | - |
| gives vigilance | 290 | - | - |
| hate-graveyard | 290 | hate | 3 |
| gives first strike | 289 | - | - |
| gives indestructible | 286 | protection | - |
| gains haste | 281 | - | 1 |
| protects-all | 279 | protection | - |
| refund | 279 | - | 2 |
| burn with set's mechanic | 278 | staple with set's mechanic | - |
| tutor-land-to-battlefield | 276 | tutor-to-battlefield, tutor-land | 2 |
| type change | 275 | - | 12 |
| hate-set-mechanic | 274 | hate | - |
| reanimate-self | 274 | reanimate, recursion-self | - |
| rhystic | 267 | tax | - |
| shapechange | 259 | - | - |
| curiosity | 257 | draw, curiosity-like | - |
| cast trigger-self | 253 | cast trigger | - |
| cda-power | 253 | characteristic-defining ability | - |
| repeatable loot | 251 | loot, repeatable draw | - |
| prevent blocker | 249 | - | 2 |
| pair-commander | 247 | - | - |
| utility mana rock | 245 | mana rock | - |
| sacrifice outlet-land | 239 | sacrifice outlet | 1 |
| theft-creature | 239 | theft | - |
| sweeper-one-sided | 238 | sweeper | - |
| landfall | 237 | lands matter, thingfall | 7 |
| unnoted tracked information | 235 | - | - |
| gives lifelink | 233 | lifegain | - |
| low mana value matters | 231 | mana value matters | - |
| type addition phyrexian | 231 | type errata addition | - |
| upkeep cost | 231 | - | - |
| cards in graveyard matter | 226 | - | 6 |
| creates bigger body | 225 | - | - |
| removal-enchantment | 223 | removal | 4 |
| creature count matters | 221 | - | 3 |
| selective group hug | 221 | group hug | - |
| repeatable treasures | 214 | repeatable noncreature tokens, repeatable artifact tokens | - |
| temporary token | 214 | - | - |
| removal-permanent | 213 | removal-artifact, removal-enchantment, removal-planeswalker, removal-land, removal-creature, removal-battle, removal-spacecraft, removal-vehicle, removal-aura, removal-equipment | - |
| synergy-white | 213 | - | - |
| virtual legendary | 211 | card names | - |
| theft-cast | 209 | theft | - |
| discount-self | 208 | cheaper than mv | 8 |
| dnd character | 208 | dnd | - |
| manaless value | 205 | - | 1 |
| unblockable | 205 | evasion | - |
| deprecated legend type | 204 | deprecated card types, type errata | - |
| discard with set's mechanic | 204 | staple with set's mechanic, hand disruption | - |
| gives pp counters to all | 204 | gives pp counters, power boost to all, toughness boost to all | - |
| name matters | 202 | - | 5 |
| crew | 200 | tap fuel-power, activated ability, animate self | - |
| restricted mana | 199 | - | 1 |
| hate-artifact | 198 | hate | 1 |
| non mana ability mana | 198 | - | 2 |
| regrowth-self | 198 | recursion-self | - |
| synergy-legendary | 198 | - | 3 |
| synergy-green | 197 | - | - |
| repeatable artifact tokens | 196 | repeatable token generator | 11 |
| activate from graveyard | 195 | activated ability | 1 |
| mill-opponent | 195 | mill | 3 |
| synergy-commander | 195 | - | - |
| toll | 193 | tax | 1 |
| free sacrifice outlet | 192 | repeatable sacrifice outlet | - |
| jump | 192 | - | - |
| cda-toughness | 191 | characteristic-defining ability | - |
| mill-any | 191 | mill, mill-opponent, mill-self | - |
| group hug | 190 | - | 2 |
| synergy-equipment | 190 | - | 2 |
| gives deathtouch | 189 | - | - |
| donate token | 188 | - | - |
| freeze-creature | 188 | freeze | - |
| synergy-red | 188 | - | - |
| gives mm counters | 186 | - | 3 |
| gives menace | 184 | gives evasion | - |
| bounce-self | 183 | bounce | 2 |
| graveyard fuel | 182 | - | 12 |
| paper-compatible | 182 | - | - |
| synergy-black | 182 | - | - |
| graveyard fuel-creature | 181 | graveyard fuel | - |
| typal coupling | 181 | - | 9 |
| disenchant/naturalize | 179 | removal-artifact, removal-enchantment | 1 |
| regenerates self | 178 | - | - |
| repeatable impulsive draw | 177 | impulsive draw, repeatable card advantage | 1 |
| tutor-to-battlefield | 177 | tutor-to | 1 |
| aikido | 176 | - | - |
| titan trigger | 174 | attack trigger | - |
| untaps self | 174 | untapper | - |
| giant growth | 173 | combat trick | 1 |
| repeatable impulse | 173 | impulse, repeatable card advantage | 1 |
| one-sided fight | 171 | burn creature, scales with power | - |
| force attacker | 170 | combat manipulation | - |
| power matters | 169 | - | 13 |
| counterspell with set mechanic | 168 | counterspell, staple with set's mechanic | - |
| synergy-blocker-self | 168 | - | 1 |
| synergy-blue | 168 | - | - |
| hate-high-pt | 167 | hate | 2 |
| multi land ramp | 167 | land ramp | - |
| ward | 167 | triggered ability, hate-target | 1 |
| gives hexproof | 166 | protection | - |
| gives unblockable | 166 | gives evasion | 1 |
| vanity card | 166 | - | - |
| color change | 162 | - | 2 |
| damage prevention-creature | 162 | protects-creature | - |
| type addition from none | 161 | type errata addition | - |
| combat ramp | 160 | ramp | 3 |
| copy-instant | 160 | copy | - |
| damage prevention-you | 160 | - | - |
| gains first strike | 160 | - | - |
| leaves trigger-self | 160 | leaves battlefield trigger | 1 |
| mix-and-match | 159 | - | - |
| renew | 159 | activate from graveyard, graveyard fuel-self | - |
| color break | 158 | - | - |
| rescue-creature | 158 | rescue | 4 |
| rhyming name | 158 | card names | - |
| tome | 158 | card advantage | - |
| faux targeting | 156 | - | - |
| copy-sorcery | 155 | copy | - |
| gives double strike | 155 | - | - |
| hate-tapped | 155 | hate | 1 |
| synergy-artifact-creature | 155 | - | - |
| thoughtseize | 155 | hand disruption, peek-hand, black effect | - |
| copy-spell | 153 | copy | 5 |
| gains trample | 153 | - | - |
| hate-black | 153 | hate-color | 1 |
| impulse-creature | 152 | impulse | 24 |
| uninspired | 152 | - | - |
| prevent attack | 151 | - | 1 |
| reanimate-cast | 151 | reanimate | - |
| removal-planeswalker | 151 | removal | 5 |
| unique counter | 151 | - | - |
| removal-tuck | 149 | removal, tuck | - |
| cast trigger | 148 | triggered ability | 4 |
| removal-fight | 148 | burn creature | 1 |
| synergy-enchantment | 147 | - | 5 |
| cda-color | 146 | characteristic-defining ability | - |
| portmanteau | 145 | card names | - |
| trigger from graveyard | 145 | triggered ability | - |
| ditch hand | 144 | - | 1 |
| synergy-planeswalker | 144 | - | 27 |
| toughness matters | 143 | - | 10 |
| gains indestructible | 142 | - | - |
| typal-dragon | 142 | typal-creature | - |
| hate-flying | 141 | hate | 2 |
| hate-regenerate | 141 | hate | - |
| multiplayer | 141 | - | 3 |
| burn-you | 140 | - | 1 |
| unprinted token | 140 | - | - |
| humble | 139 | - | - |
| punisher | 139 | dilemma | 3 |
| counterspell-soft | 138 | counterspell | 1 |
| hate-discard | 138 | hate | - |
| heroic | 138 | synergy-target | - |
| real life animal name | 138 | card names | - |
| typal-elf | 138 | typal-creature | 1 |
| repeatable plunder | 137 | plunder, repeatable draw, repeatable sacrifice outlet | - |
| synergy-aura | 137 | - | 2 |
| flicker-creature | 136 | flicker | 2 |
| giant growth with set mechanic | 136 | giant growth, staple with set's mechanic | - |
| swap removal | 135 | - | - |
| bombard-self | 134 | burn, sacrifice self | - |
| gives tap ability | 134 | tap outlet | 1 |
| consult-cast | 133 | consult | - |
| mana filter | 133 | - | 4 |
| burn player-each | 132 | burn player, group slug, burn-you | - |
| morbid | 132 | - | - |
| hate-red | 131 | hate-color | 1 |
| poisonous | 131 | poison mechanics | - |
| typal-spirit | 131 | typal-creature | - |
| meme | 130 | - | - |
| combat-neutral damage trigger | 129 | triggered ability | - |
| 40k model | 128 | - | - |
| cast trigger-other | 128 | cast trigger | - |
| counter fuel-aesthetic | 128 | counter fuel | 1 |
| land count matters | 128 | lands matter | - |
| cheat death-self | 127 | cheat death | 2 |
| gives protection | 127 | gives evasion, protection | - |
| roll d6 | 127 | dice roll | 1 |
| hate-counterspell | 126 | hate | 1 |
| synergy-vehicle | 126 | - | 1 |
| typal-zombie | 126 | typal-creature | - |
| deanimate self | 125 | type change | - |
| energy generator | 125 | - | 3 |
| single-minded color hate | 125 | single-minded hate, hate-color | - |
| counter fuel-energy | 124 | counter fuel, remove counters-player | - |
| ferocious | 124 | power matters-individual, power matters | - |
| impulse-onto-battlefield | 124 | impulse-to-zone, sneak from library | - |
| life loss matters | 124 | - | 2 |
| lifegain matters | 124 | - | 3 |
| typal-sliver | 124 | typal-creature | - |
| mana producer | 123 | ramp | 3 |
| your sacrifice matters | 122 | sacrifice matters | - |
| exponential | 121 | - | - |
| mill-exile | 121 | mill | 1 |
| mulch | 120 | mill-self, impulse | 1 |
| repeatable rummage | 120 | rummage, repeatable draw | 1 |
| rummage | 119 | red effect, discard outlet, draw | 2 |
| synergy-forest | 119 | - | 1 |
| undergrowth | 119 | cards in graveyard matter | 2 |
| loot | 118 | blue effect, discard outlet, draw | 5 |
| rainbow land | 118 | - | - |
| tutored by name | 118 | - | 2 |
| hate-white | 117 | hate-color | 1 |
| restricted blocker | 117 | drawback | 1 |
| animate self | 116 | animate | 4 |
| cheat death | 116 | - | 4 |
| long term impulsive draw | 116 | impulsive draw | - |
| synergy-flying | 116 | - | - |
| tap fuel-power | 116 | power matters, tap fuel-creature | 1 |
| bombard | 115 | burn, sacrifice outlet | - |
| bottom deck manipulation | 115 | library manipulation | 4 |
| gives castable from graveyard | 115 | gives castable from nonhand, recursion | 7 |
| nightveil theft | 115 | - | - |
| restricted attacker | 115 | drawback | - |
| cost reducer | 114 | - | 17 |
| threshold | 114 | cards in graveyard matter | - |
| exile on resolution | 113 | exile-self | 1 |
| mass land denial | 113 | - | - |
| self-discard matters | 113 | discard matters | 1 |
| synergy-token-creature | 113 | synergy-token | - |
| typal-goblin | 113 | typal-creature | 1 |
| convoke | 112 | tap fuel-creature, discount-self, synergy-color-share | - |
| banish | 111 | removal-exile | 4 |
| gives mana ability | 111 | - | - |
| hand size matters | 111 | - | 4 |
| repeatable rescue | 111 | rescue | - |
| tutor-card | 111 | tutor, black effect | - |
| discarded type matters | 110 | - | 1 |
| extra untap | 110 | - | - |
| flicker-slow | 110 | flicker | - |
| french vanilla aura | 110 | - | - |
| lhurgoyf | 110 | cards in graveyard matter | - |
| lockdown-creature | 110 | lockdown | - |
| universal type change | 110 | type change | - |
| amount spent matters | 109 | mana spent matters | - |
| mana rock | 109 | mana producer | 3 |
| shrink | 109 | - | 1 |
| draw matters | 108 | - | 2 |
| mana rock with set's mechanic | 108 | staple with set's mechanic, mana rock | - |
| passive ability | 108 | - | - |
| synergy-token | 108 | - | 2 |
| animate land | 107 | animate | 2 |
| nonbasic-basic-land-type | 107 | - | - |
| opponent chooses | 107 | - | 4 |
| turn-face-up-trigger-self | 107 | face-up-face-down-effects, triggered ability | - |
| wheel-one-sided | 107 | wheel | - |
| card types in graveyard matter | 106 | cards in graveyard matter, card types matter | - |
| cost ignorer | 106 | - | 3 |
| damage prevention-self | 106 | - | - |
| flowstone | 106 | - | 1 |
| impulse-land | 106 | impulse | - |
| typal-human | 106 | typal-creature | - |
| gains lifelink | 105 | lifegain | - |
| exhaust | 104 | untracked indefinite effect, activated ability | - |
| full refund | 104 | refund | - |
| quick equip | 104 | quick attach | 2 |
| synergy-blocker | 103 | - | 1 |
| leaves body behind | 102 | death trigger-self | 1 |
| counter fuel-pp | 101 | pp counters matter, counter fuel | - |
| gains vigilance | 101 | - | - |
| protects-planeswalker | 101 | protection | 1 |
| untapper-land | 101 | untapper | 1 |
| commander set booster cards | 100 | - | - |
| minigame | 100 | - | 1 |
| type errata summon creature | 100 | type errata | - |
| conjure-to-hand | 99 | conjure | - |
| man-o'-war | 99 | removal-bounce, removal-creature | - |
| regenerates other | 99 | - | - |
| temporary reanimation | 99 | - | - |
| tutor-creature | 99 | tutor | 47 |
| conjure-named | 97 | conjure | - |
| counterspell | 97 | blue effect | 20 |
| dnd monster | 97 | dnd | - |
| drain creature | 97 | lifegain, burn creature | - |
| gives reach | 97 | - | - |
| multi character card | 97 | - | 1 |
| multiple species types | 97 | - | - |
| overrun | 97 | gives trample, power boost to all | - |
| reanimate-from-any | 97 | reanimate-from-opponent | - |
| synergy-mill | 97 | - | - |
| imprint | 96 | - | 1 |
| pacifism | 96 | removal-creature | - |
| sneak-creature | 96 | sneak | - |
| strive | 96 | - | - |
| artifactfall | 95 | synergy-artifact, thingfall | - |
| catch up | 95 | - | - |
| conjure-creature | 95 | conjure | - |
| hate-color-choose | 95 | hate-color | - |
| specialized | 95 | - | - |
| synergy-swamp | 95 | - | 1 |
| hate-blue | 94 | hate-color | 1 |
| hellbending | 94 | ditch hand | - |
| typal-choose | 94 | typal-creature | - |
| eponymous | 93 | card names | - |
| multi-copy | 93 | - | - |
| repeated keyword | 93 | repeated effect | - |
| hate-instant | 92 | hate | - |
| curiosity-like | 91 | saboteur | 3 |
| hate-green | 91 | hate-color | - |
| synergy-food | 91 | - | 1 |
| synergy-mountain | 91 | - | 1 |
| exile-self-dfc-transform | 90 | exile-self | - |
| misnomer | 90 | card names | - |
| tutor-mv | 90 | tutor | 3 |
| coin flip | 89 | - | - |
| hate-high-mv | 89 | hate | - |
| weaker in singleton formats | 89 | - | 1 |
| color change-self | 88 | color change | - |
| forced attacker | 88 | drawback | - |
| mixed subtypes | 88 | - | - |
| modal inverse choices | 88 | modal | - |
| gains deathtouch | 87 | - | - |
| gains menace | 87 | evasion | - |
| repeatable clues | 87 | repeatable noncreature tokens, draw engine, repeatable artifact tokens, repeatable pure draw | - |
| seek-to-hand | 86 | seek-to-zone | - |
| typal-vampire | 86 | typal-creature | - |
| alternate win condition | 85 | - | - |
| homeward effect | 85 | hate-theft | - |
| living weapon | 85 | quick equip | 2 |
| peek-hand | 85 | peek | 1 |
| synergy-island | 85 | - | 1 |
| cost-reducer-creature | 84 | cost reducer | - |
| offcolor additional cost | 84 | more expensive than mv | - |
| trigger from exile | 84 | triggered ability | - |
| typal-ally | 84 | typal-creature | 1 |
| typal-merfolk | 84 | typal-creature | - |
| un type line | 84 | un-set mechanics | - |
| sweeper-graveyard | 83 | hate-graveyard | - |
| hate-nonbasic-land | 82 | hate | - |
| maro-sorcerer | 82 | lands matter | - |
| tapland with set's mechanic | 82 | tapland, staple with set's mechanic | - |
| threaten | 82 | theft | 1 |
| top matters | 82 | - | - |
| tutors by name | 82 | tutor, name matters | 2 |
| warlord | 82 | creature count matters | - |
| doom blade | 81 | removal-creature, removal-destroy, spot removal | - |
| land conversion | 81 | type change | - |
| named token | 81 | - | - |
| plunder | 81 | draw, sacrifice outlet | 1 |
| quadratic | 81 | - | - |
| synergy-arcane | 81 | - | - |
| lands matter | 80 | - | 9 |
| typal-wizard | 80 | typal-creature | 1 |
| hate-sorcery | 79 | hate | - |
| high mana value matters | 79 | mana value matters | - |
| animate artifact | 78 | animate | - |
| ramp with set's mechanic | 78 | ramp, staple with set's mechanic | - |
| notorious templating | 77 | - | - |
| typal-share | 77 | typal-creature | - |
| type errata hound | 77 | type errata | - |
| cost increaser | 76 | - | - |
| counterspell-reusable | 76 | counterspell | - |
| donate | 76 | control changing effects | - |
| sneak-land | 76 | extra land, sneak | - |
| synergy-multicolor | 76 | - | 3 |
| untapper-permanent | 76 | untapper, untapper-creature, untapper-artifact, untapper-land, untapper-nonland | - |
| life-total-matters-self | 75 | - | - |
| pseudo-fog | 75 | - | - |
| death trigger opponent | 74 | death trigger | - |
| discard to exile | 74 | hand disruption | 1 |
| reanimate-artifact | 74 | reanimate, recursion-artifact | 1 |
| regrowth-sorcery | 74 | regrowth, recursion-sorcery | 1 |
| typal-army | 74 | typal-creature | - |
| enchantmentfall | 73 | synergy-enchantment, thingfall | - |
| phasing | 73 | - | - |
| regrowth-instant | 73 | regrowth, recursion-instant | 1 |
| enrage | 72 | - | 3 |
| recycle | 72 | - | - |
| scales with damage dealt | 72 | - | 4 |
| turns off defender-self | 72 | - | - |
| unique plane type | 72 | unique type line | - |
| copy-artifact | 71 | copy | 2 |
| gives ward | 71 | protection | - |
| inverted effects | 71 | - | 3 |
| second spell matters | 71 | - | - |
| shapesharing | 71 | copy | - |
| tap fuel-artifact | 71 | synergy-artifact, tap outlet | 2 |
| unique cr reference | 71 | - | - |
| chromatic lantern | 70 | - | - |
| conjure-duplicate | 70 | conjure | - |
| scales with multiple | 70 | name matters | - |
| second draw matters | 70 | draw matters | - |
| synergy-low-power | 70 | power matters | 1 |
| artifactify | 69 | type change | - |
| free discard outlet | 69 | discard outlet | - |
| tapper-artifact | 69 | tapper | 2 |
| type errata name self | 69 | type errata | - |
| werewolf mechanic | 69 | catch-22 | - |
| auto equip | 68 | quick equip | - |
| class type only | 68 | - | - |
| french vanilla walker | 68 | french vanilla, evasion | - |
| leaves battlefield trigger | 68 | triggered ability | 1 |
| naturalize with set mechanic | 68 | disenchant/naturalize, staple with set's mechanic | - |
| ritual | 68 | ramp | - |
| slith ability | 68 | saboteur, repeatable pp counters | - |
| twiddle | 68 | tapper, untapper | - |
| unique keyword | 68 | - | - |
| dexterity | 67 | un-set mechanics, deprecated mechanics | - |
| haven | 67 | - | 1 |
| move counters | 67 | - | - |
| power doubler | 67 | scales with power | - |
| prevent activation | 67 | - | 2 |
| color spent matters | 66 | mana spent matters | 1 |
| consult-onto-battlefield | 66 | consult, sneak from library | - |
| defector | 66 | control changing effects | - |
| hatebear | 66 | hate | - |
| impulse | 66 | card advantage | 19 |
| mass reanimation | 66 | - | - |
| peek-library | 66 | peek | 6 |
| rescue-land | 66 | rescue | 3 |
| restock-to-top | 66 | restock, top deck manipulation | - |
| state trigger | 66 | triggered ability | - |
| synergy-activated-ability | 66 | - | - |
| synergy-basic | 66 | - | - |
| gives flash | 65 | - | - |
| protects-artifact | 65 | protection | - |
| auraify | 64 | type change | - |
| clone | 64 | copy | 2 |
| counter fuel-charge | 64 | counter fuel | - |
| disintegrate | 64 | - | - |
| extra turn | 64 | blue effect | - |
| mana ability with extra effect | 64 | - | - |
| repeatable food | 64 | repeatable noncreature tokens, repeatable artifact tokens, repeatable lifegain | - |
| set life total | 64 | - | - |
| support | 64 | gives pp counters | - |
| counter doubler | 63 | counter increaser | - |
| gains hexproof | 63 | protection | - |
| hate full hand | 63 | hand size hate | - |
| madness | 63 | delayed trigger, castable from exile, exile-self, cast on resolution, self-discard matters | - |
| mana increaser | 63 | ramp, green effect | - |
| specter ability | 63 | saboteur, hand disruption | - |
| splits on death | 63 | leaves body behind | - |
| synergy-colorless | 63 | - | - |
| tuck-self | 63 | tuck | - |
| typal-dinosaur | 63 | typal-creature | - |
| usg-storyline-in-cards | 63 | - | - |
| draw hate | 62 | hate | - |
| gains double strike | 62 | - | - |
| reanimate-permanent | 62 | reanimate, recursion-permanent | - |
| regrowth-permanent | 62 | regrowth, recursion-permanent | - |
| sacrifice outlet-enchantment | 62 | sacrifice outlet | 2 |
| dnd item | 61 | dnd | - |
| regrowth-artifact | 61 | regrowth, recursion-artifact | 3 |
| speech matters | 61 | un-set mechanics | - |
| synergy-burn | 61 | - | - |
| synergy-plains | 61 | - | 1 |
| wish | 61 | - | 1 |
| creature-ability-noncreature | 60 | - | - |
| fog-selective | 60 | fog | - |
| keyword errata flash | 60 | keyword errata | - |
| mill-each | 60 | mill-self, mill-opponent | - |
| mutual sacrifice | 60 | removal-sacrifice | 1 |
| tapland | 60 | - | 61 |
| tmp-storyline-in-cards | 60 | - | - |
| delayed cantrip | 59 | pure draw, delayed trigger, deprecated mechanics | - |
| hate-target | 59 | hate | 4 |
| impact effect | 59 | creaturefall | - |
| mana storage | 59 | - | 1 |
| synergy-snow | 59 | - | 1 |
| unheroic | 59 | synergy-target | - |
| card advantage | 58 | - | 11 |
| conjure-to-battlefield | 58 | conjure | - |
| opponent lifegain | 58 | - | - |
| place sticker | 58 | - | - |
| type errata viashino | 58 | type errata genericise | - |
| charm | 57 | modal | 13 |
| dnd mechanic | 57 | dnd | 1 |
| hate-planeswalker | 57 | hate | 1 |
| parasitic aura | 57 | - | - |
| repeatable mulch | 57 | mulch, repeatable impulse | - |
| staple with set's mechanic | 57 | - | 16 |
| tapper-land | 57 | tapper | 1 |
| theft-artifact | 57 | theft | - |
| copy-token | 56 | copy | - |
| division | 56 | - | 1 |
| typal-warrior | 56 | typal-creature | 2 |
| french vanilla equipment | 55 | - | - |
| graveyard seal | 55 | hate-graveyard | - |
| hand size increase | 55 | - | - |
| hellbent | 55 | hand size matters | - |
| non-mana ward | 55 | ward | - |
| prevent mass blockers | 55 | prevent blocker | - |
| roll d20 | 55 | dice roll | - |
| tutor-to-top | 55 | tutor-to, top deck manipulation | - |
| damage multiplier | 54 | - | - |
| extra combat phase | 54 | phase manipulation | - |
| synergy-historic | 54 | synergy-saga, synergy-artifact, synergy-legendary | 4 |
| synergy-solo-attack | 54 | - | 2 |
| synergy-treasure | 54 | - | - |
| transform-improvement | 54 | - | - |
| typal-soldier | 54 | typal-creature | - |
| changeling | 53 | cda-subtype | 4 |
| day/night | 53 | - | - |
| discard outlet-land | 53 | discard outlet | - |
| regrowth-any | 53 | regrowth, recursion-any | - |
| sacrifice outlet-universal | 53 | sacrifice outlet, sacrifice outlet-artifact, sacrifice outlet-creature, sacrifice outlet-enchantment, sacrifice outlet-land, sacrifice outlet-planeswalker | - |
| synergy-haste | 53 | - | - |
| token errata | 53 | - | - |
| earthquake | 52 | red effect | - |
| interrupt | 52 | deprecated card types | - |
| precognition engine | 52 | play from top, precognition, repeatable card advantage | - |
| synergy-tapped | 52 | - | - |
| threaten with set's mechanic | 52 | threaten, staple with set's mechanic | - |
| catalog | 51 | loot | - |
| counterspell-ability | 51 | counterspell | 1 |
| counterspell-creature | 51 | counterspell | - |
| damage redirection | 51 | damage prevention | 1 |
| exalted | 51 | synergy-solo-attack | - |
| gains flash | 51 | - | - |
| reanimate-land | 51 | reanimate, recursion-land | 1 |
| tapper-permanent | 51 | tapper-artifact, tapper-creature, tapper-land | - |
| theft-mass | 51 | theft | - |
| unique evasion | 51 | evasion | - |
| untapper-artifact | 51 | untapper | 1 |
| copy from graveyard | 50 | copy, recursion | 4 |
| copy-ability | 50 | copy | - |
| copy-legendary | 50 | copy | - |
| gains mm counters | 50 | - | 1 |
| hate-enchantment | 50 | hate | - |
| hate-low-power | 50 | hate | 2 |
| reanimate-from-opponent | 50 | reanimate, theft | 1 |
| scry like | 50 | top deck manipulation, peek-library, bottom deck manipulation | - |
| gives shroud | 49 | protection | - |
| legendary team-up | 49 | multi character card | - |
| pseudo-proliferate | 49 | - | - |
| raid | 49 | attacking matters | - |
| remove counters-other | 49 | remove counters, hate-counters | - |
| rules nightmare | 49 | - | - |
| synergy-color-share | 49 | - | 1 |
| the ring tempts you | 49 | gives skulk, legendify | - |
| tutor-land-forest | 49 | tutor-land | - |
| typal-knight | 49 | typal-creature | 1 |
| counter fuel-other | 48 | counter fuel | - |
| creates token of a card | 48 | token versions of cards | 1 |
| lure-limited | 48 | force blocker | - |
| miniwheel | 48 | wheel | - |
| play additional land | 48 | extra land | - |
| repeatable noncreature tokens | 48 | repeatable token generator | 12 |
| restock-to-bottom | 48 | restock, bottom deck manipulation | - |
| synergy-cycling | 48 | - | - |
| synergy-graveyard-cast | 48 | - | 1 |
| synergy-modified | 48 | synergy-equipment, synergy-aura, counters matter | - |
| typal-elemental | 48 | typal-creature | - |
| typal-pirate | 48 | typal-creature | 1 |
| change target | 47 | - | - |
| deal with the devil | 47 | drawback, black effect | - |
| mass shrink | 47 | shrink | - |
| monarch matters | 47 | - | - |
| pridemate | 47 | lifegain matters | 1 |
| references keyword | 47 | - | - |
| tutor-artifact | 47 | tutor | 8 |
| unique creature type | 47 | unique type line | - |
| ball lightning | 46 | - | - |
| creature type name | 46 | card names | - |
| exchange control | 46 | control changing effects | - |
| hate-noncreature | 46 | hate | - |
| leaves graveyard trigger | 46 | triggered ability, leaving graveyard matters | - |
| open attraction | 46 | - | - |
| restock-all | 46 | restock | - |
| sacrifice outlet-token | 46 | sacrifice outlet | - |
| sliver-stackable | 46 | - | - |
| trigger doubler | 46 | - | - |
| tutor-land-plains | 46 | tutor-land | - |
| type addition book | 46 | type errata addition | - |
| anagram | 45 | card names | - |
| discard outlet-random | 45 | - | - |
| extract | 45 | - | - |
| firebend-like | 45 | attack trigger, combat ramp | - |
| flying counter | 45 | keyword counter | - |
| paradox | 45 | synergy-exile-cast, synergy-graveyard-cast, synergy-library-cast | - |
| prevent cast | 45 | - | 2 |
| remove counters-you | 45 | remove counters | 2 |
| vanilla aura | 45 | - | - |
| abrade | 44 | removal-artifact, burn creature, red effect | - |
| bushido | 44 | hate-blocker, synergy-blocker-self | - |
| filterland | 44 | mana filter | 4 |
| impulse-artifact | 44 | impulse | 5 |
| ninjutsu | 44 | sneak-self, rescue-creature, activate from hand | - |
| quote name | 44 | card names | - |
| remove-from-stack | 44 | - | - |
| shares name with a mechanic | 44 | card names | - |
| tutor-land-any | 44 | tutor-land, green effect | - |
| unblocked trigger | 44 | triggered ability | - |
| armoring | 43 | - | - |
| copy-permanent-spell | 43 | copy-spell | - |
| counter preservation-self | 43 | counters matter | - |
| doesn't untap | 43 | - | - |
| eponymous planeswalker | 43 | card names | - |
| guess | 43 | - | - |
| hate-wide | 43 | hate | - |
| infusion | 43 | lifegain matters | - |
| metalcraft | 43 | synergy-artifact | - |
| regrowth-land | 43 | regrowth, recursion-land | - |
| repeatable-proliferate | 43 | - | - |
| typal-hero | 43 | typal-creature | - |
| unique protection | 43 | - | - |
| affinity for artifacts | 42 | affinity, synergy-artifact | - |
| any player ability | 42 | - | - |
| combat timing restriction | 42 | timing restriction | - |
| cost-reducer-instant-sorcery | 42 | cost-reducer-instant, cost-reducer-sorcery | 1 |
| daunt | 42 | evasion, power matters, hate-low-power | - |
| day zero errata | 42 | - | - |
| dnd spell | 42 | dnd, card names | - |
| donate mana | 42 | - | - |
| gains protection | 42 | evasion, protection | - |
| mana egg | 42 | egg | - |
| power matters-individual | 42 | power matters | 3 |
| restock-self | 42 | restock, recursion-self | 1 |
| single-minded hate | 42 | hate | 3 |
| synergy-poison | 42 | poison mechanics | - |
| synergy-sticker | 42 | - | 4 |
| unique planeswalker type | 42 | unique type line | - |
| flicker-self | 41 | flicker, exile-self | - |
| named choice | 41 | - | 2 |
| phyrexian mana cost | 41 | phyrexian mana, alternate-cost-life, discount-self | - |
| planeswalker deck face card | 41 | - | - |
| repeatable seek | 41 | seek, repeatable card advantage | - |
| tax attack | 41 | pillowfort | - |
| wheel-symmetrical | 41 | wheel, symmetrical | 1 |
| young pyromancer ability | 41 | synergy-instant, synergy-sorcery, repeatable creature tokens | - |
| abyss | 40 | repeatable removal | - |
| alternate-cost-bounce | 40 | bounce | - |
| blood artist ability | 40 | death trigger, drain life, repeatable lifegain | - |
| graveyard fuel-instant | 40 | graveyard fuel | - |
| high x matters | 40 | - | - |
| inscryption achievement | 40 | card names | - |
| mm counter cost | 40 | gives mm counters | - |
| synergy-party | 40 | typal coupling, typal-rogue, typal-cleric, typal-wizard, typal-warrior | 1 |
| type errata naga | 40 | type errata genericise | - |
| deprecated p/t counter | 39 | deprecated mechanics | - |
| has identical token | 39 | token versions of cards | - |
| maro | 39 | hand size matters | - |
| polymorph | 39 | - | - |
| power matters-total | 39 | power matters | 1 |
| random discard | 39 | hand disruption | - |
| silence | 39 | prevent cast, white effect | - |
| soul warden ability | 39 | creaturefall, repeatable lifegain | - |
| unique-type-exclusion | 39 | - | - |
| clash-like | 38 | mana value matters | - |
| counterspell-automatic | 38 | counterspell | - |
| counterspell-exile | 38 | counterspell | 1 |
| graveyard fuel-sorcery | 38 | graveyard fuel | - |
| pwdeck-sidekick | 38 | planeswalker deck staples | - |
| restock-creature | 38 | restock, recursion-creature | - |
| stasis | 38 | - | - |
| typal-bird | 38 | typal-creature | 1 |
| typal-rat | 38 | typal-creature | - |
| unique p/t | 38 | - | - |
| demilich effect | 37 | gives castable from exile, recursion, cast on resolution | - |
| enchantmentize | 37 | type change | - |
| impulse-permanent | 37 | impulse | - |
| ingest | 37 | mill-exile, saboteur, mill-opponent | - |
| mimic | 37 | - | - |
| painland | 37 | life payment | 2 |
| protects-permanent | 37 | protection, protects-creature | - |
| regrowth-enchantment | 37 | regrowth, recursion-enchantment | 2 |
| rescue-permanent | 37 | rescue-artifact, rescue-creature, rescue-enchantment, rescue-land | - |
| seek-mv | 37 | seek | - |
| self life loss matters | 37 | life loss matters | - |
| soothsaying | 37 | top deck manipulation, peek-library | - |
| wingman | 37 | gives flying | - |
| alternate-equip-cost | 36 | - | - |
| consult | 36 | card advantage | 2 |
| counter fuel-any | 36 | counter fuel | - |
| cycle-ust-functional-variant | 36 | unstable variant, cycle | - |
| earthbend | 36 | animate land, cheat death, gives haste, gives pp counters, delayed trigger | - |
| extra land | 36 | ramp | 3 |
| fog | 36 | damage prevention | 1 |
| force blocker | 36 | combat manipulation | 3 |
| hate-lifegain | 36 | hate | - |
| lobotomy | 36 | hate-named | - |
| monstrosity | 36 | untracked indefinite effect, gains pp counters | - |
| potentially free | 36 | cheaper than mv | 5 |
| protects-land | 36 | protection | - |
| pwdeck-tutor | 36 | planeswalker deck staples, tutor-planeswalker, tutor-to-hand, tutors by name, regrowth-planeswalker | - |
| ransom | 36 | - | - |
| regrowth | 36 | recursion, card advantage | 21 |
| removes flying | 36 | hate-flying | - |
| rescue-nonland | 36 | rescue-artifact, rescue-creature, rescue-enchantment | - |
| retaliate to damage | 36 | - | 1 |
| spite damage | 36 | enrage | - |
| start of game | 36 | - | 2 |
| theft-permanent | 36 | theft | - |
| typal-mount | 36 | typal-creature | - |
| typal-villain | 36 | - | - |
| unpreventable-damage | 36 | - | - |
| vanilla equipment | 36 | - | - |
| whirlpool | 36 | wheel | - |
| 5c set mechanic commander | 35 | staple with set's mechanic | - |
| alternate-cost-sacrifice | 35 | sacrifice outlet | 1 |
| breaks-ktk-morph-rule | 35 | - | - |
| counterspell-noncreature | 35 | counterspell | - |
| high flying | 35 | evasion, restricted blocker, drawback | - |
| hurricane | 35 | hate-flying, green effect | - |
| landhome | 35 | deprecated mechanics, drawback | - |
| old blocking deathtouch | 35 | deprecated mechanics | - |
| powerstone mana | 35 | restricted mana | 2 |
| revolt | 35 | - | - |
| seek-nonland | 35 | seek | - |
| synergy-battle | 35 | - | - |
| tormenting voice | 35 | rummage | - |
| trumpet blast | 35 | power boost to all | 1 |
| tutor-to-graveyard | 35 | tutor-to | - |
| voting | 35 | - | - |
| combat ping | 34 | - | - |
| delayed replacement effect | 34 | - | - |
| fling | 34 | sacrifice outlet-creature, scales with power | - |
| graveyard fuel-self | 34 | exile-self | 1 |
| hate-token | 34 | hate | - |
| hungry demon | 34 | drawback, black effect | - |
| inspired | 34 | - | - |
| life-and-death-trigger-self | 34 | death trigger-self | - |
| opponent-discard matters | 34 | discard matters | - |
| reanimate-enchantment | 34 | reanimate, recursion-enchantment | - |
| sneak-permanent | 34 | sneak | - |
| sth-storyline-in-cards | 34 | - | - |
| synergy-clue | 34 | - | - |
| tutor-land-mountain | 34 | tutor-land | - |
| typal-assassin | 34 | typal-creature | 1 |
| typal-giant | 34 | typal-creature | - |
| buff mana | 33 | - | - |
| gives uncounterable | 33 | hate-counterspell | - |
| hate-removal-sacrifice | 33 | hate | - |
| magecraft | 33 | synergy-instant, synergy-sorcery, synergy-copy, cast trigger-you | - |
| protects-enchantment | 33 | protection | - |
| synergy-gate | 33 | - | 1 |
| tutor-land-basic-plains | 33 | tutor-land-basic | - |
| typal-cleric | 33 | typal-creature | 1 |
| typal-faerie | 33 | typal-creature | - |
| untapped matters-self | 33 | - | - |
| alt-commander | 32 | - | 28 |
| alternate loss condition | 32 | drawback | 1 |
| bribery | 32 | group hug | - |
| gives evasion | 32 | - | 14 |
| illusion ability | 32 | drawback | - |
| mirrored knight | 32 | - | - |
| off-turn casting matters | 32 | - | - |
| shares name with a set | 32 | card names | - |
| synergy-color-each | 32 | - | 1 |
| synergy-exile-cast | 32 | - | 1 |
| unique enchant target | 32 | - | - |
| vivid | 32 | synergy-color-each | - |
| wind drake with set's mechanic | 32 | staple with set's mechanic | - |
| counterspell-sacrifice | 31 | counterspell | - |
| cr 107.3f x card | 31 | - | - |
| creates oracle token | 31 | creates token of a card | - |
| hate-damaged | 31 | hate | - |
| impulsive draw | 31 | red effect, card advantage, gives castable from exile | 3 |
| mana dork egg | 31 | mana producer, martyr | - |
| players outside game matter | 31 | un-set mechanics | 1 |
| secretly choose | 31 | - | - |
| synergy-desert | 31 | - | - |
| synergy-trample | 31 | - | - |
| tapped matters-self | 31 | - | - |
| times resolved matters | 31 | - | - |
| tutor-land-swamp | 31 | tutor-land | - |
| block additional | 30 | - | 1 |
| counterspell-instant | 30 | counterspell | - |
| cranial plating | 30 | synergy-artifact | 1 |
| damage increaser | 30 | - | - |
| delve | 30 | discount-self, graveyard fuel | - |
| landfall other | 30 | landfall | - |
| lure | 30 | force blocker, green effect | - |
| playtest forecast | 30 | - | - |
| sneaky-self-trigger | 30 | - | - |
| synergy-deathtouch | 30 | - | - |
| synergy-dice | 30 | - | 4 |
| tunneling | 30 | gives unblockable, synergy-low-power | - |
| typal-demon | 30 | typal-creature | - |
| typal-spider | 30 | typal-creature | - |
| typal-squirrel | 30 | typal-creature | - |
| copy-equipment | 29 | copy | - |
| discard-symmetrical | 29 | discard outlet, symmetrical, discard | - |
| game name | 29 | card names | 1 |
| gives fear | 29 | gives evasion | - |
| hate-activation | 29 | hate | 1 |
| kismet effect | 29 | - | - |
| lands in graveyard matter | 29 | cards in graveyard matter | - |
| synergy-face-down | 29 | face-up-face-down-effects | - |
| synergy-theft | 29 | - | - |
| turn-face-up-trigger | 29 | face-up-face-down-effects, triggered ability | - |
| typal-non-human | 29 | typal-creature, typal-exclusion | - |
| attacking opponents matters | 28 | attacking matters | - |
| bring your own crew | 28 | - | - |
| counterspell-sorcery | 28 | counterspell | - |
| creatureland | 28 | animate self, utility land | 3 |
| deck requirement | 28 | - | - |
| discard outlet-creature | 28 | discard outlet | - |
| gains reach | 28 | - | - |
| graveyard fuel-artifact | 28 | graveyard fuel | 1 |
| hate-vehicle | 28 | hate | - |
| lifelink counter | 28 | keyword counter | - |
| mm counters matter | 28 | counters matter | 1 |
| o-ring with set mechanic | 28 | staple with set's mechanic, banish | - |
| old lifelink | 28 | lifegain, deprecated mechanics, scales with damage dealt | - |
| removal-aura | 28 | removal | 3 |
| stalking | 28 | evasion, green effect | - |
| storm count matters | 28 | - | - |
| sunburst | 28 | converge | - |
| synergy-dungeon | 28 | - | - |
| synergy-lesson | 28 | - | 1 |
| synergy-shrine | 28 | - | - |
| synergy-vigilance | 28 | - | - |
| three-letter name | 28 | card names | - |
| tokenlink | 28 | scales with damage dealt | - |
| tutor-land-island | 28 | tutor-land | - |
| typal-kithkin | 28 | typal-creature | - |
| art matters | 27 | un-set mechanics | 1 |
| color-choose-land | 27 | - | - |
| donate rampant growth | 27 | - | - |
| drain strength | 27 | inverted effects | - |
| hate-aura | 27 | hate | - |
| hate-color-share | 27 | hate | - |
| hate-island | 27 | hate | - |
| hate-typal-wall | 27 | hate-typal | - |
| indestructible counter | 27 | keyword counter | - |
| keyword soup | 27 | - | - |
| naya ferocious | 27 | power matters-individual, power matters | - |
| sleeping enchantment | 27 | animate self | - |
| synergy-scry | 27 | - | - |
| tutor-land-basic-forest | 27 | tutor-land-basic | - |
| tutor-to-exile | 27 | tutor-to | - |
| typal-lupine | 27 | typal coupling, typal-wolf, typal-werewolf | - |
| type errata cephalid | 27 | type errata genericise | - |
| battalion | 26 | - | - |
| damage prevention-planeswalker | 26 | protects-planeswalker | - |
| devour | 26 | gains pp counters, sacrifice outlet | - |
| even/odd matters | 26 | - | - |
| leveler | 26 | mana sink | - |
| outnumber | 26 | burn creature, creature count matters | - |
| persist | 26 | cheat death-self, intervening if clause, gains mm counters, death trigger-self | - |
| processing | 26 | unexile | - |
| provoke lite | 26 | force blocker | - |
| rampage | 26 | hate-blocker | - |
| remove from combat | 26 | - | - |
| restock-any | 26 | recursion-any, restock | - |
| synergy-first-strike | 26 | - | - |
| synergy-room | 26 | - | - |
| theft-land | 26 | theft | - |
| tutor-self | 26 | tutors by name, tutored by name | - |
| typal-beast | 26 | typal-creature | - |
| borrow ability | 25 | - | - |
| cost-reducer-activated-ability | 25 | cost reducer | 1 |
| counter fuel-oil | 25 | oil counters matter, counter fuel-aesthetic | - |
| counts as a type | 25 | - | - |
| cycle-mm3-draft-signpost | 25 | draft signpost, cycle | - |
| harmonic | 25 | - | - |
| impulse-enchantment | 25 | impulse | 3 |
| quest | 25 | - | - |
| reanimate-nonland | 25 | reanimate | - |
| special action | 25 | - | - |
| synergy-exiling | 25 | - | - |
| synergy-suspend | 25 | - | - |
| tap fuel-land | 25 | tap outlet | - |
| text change | 25 | - | 2 |
| typal-dwarf | 25 | typal-creature | - |
| typal-rogue | 25 | typal-creature | 3 |
| typal-treefolk | 25 | typal-creature | - |
| type errata lord | 25 | type errata | - |
| unique noncreature token | 25 | - | - |
| useless in singleton formats | 25 | weaker in singleton formats | - |
| absorb | 24 | damage prevention | - |
| auto buyback | 24 | - | - |
| bounceable aura | 24 | bounce-self | - |
| buttstrike | 24 | toughness matters | - |
| copy-aura | 24 | copy | - |
| damage prevention-player | 24 | - | - |
| deanimate | 24 | type change | - |
| improvise | 24 | discount-self, tap fuel-artifact | - |
| impulse-cast | 24 | impulse | - |
| magic term name | 24 | game name | - |
| random card | 24 | - | 1 |
| scene | 24 | - | - |
| seek-to-battlefield | 24 | seek-to-zone | - |
| synergy-defender | 24 | - | - |
| synergy-double-strike | 24 | - | - |
| typal-cat | 24 | typal-creature | - |
| typal-phyrexian | 24 | typal-creature | - |
| typal-saproling | 24 | typal-creature | - |
| type addition noble | 24 | type errata addition | - |
| type addition sorcerer | 24 | type errata addition | - |
| digital to paper | 23 | - | - |
| draft matters | 23 | - | 1 |
| gives player hexproof | 23 | gives player ability, protection | - |
| graveyard order matters | 23 | deprecated mechanics | - |
| hate-named | 23 | name matters | 2 |
| impulsive curiosity | 23 | curiosity-like, impulsive draw | - |
| old damage deathtouch | 23 | deprecated mechanics, triggered ability | - |
| quick enchant | 23 | quick attach | - |
| removes-mm-counters-self | 23 | removes-mm-counters | - |
| repeatable enchantment tokens | 23 | repeatable token generator | 1 |
| synergy-menace | 23 | - | - |
| take the initiative | 23 | tutor-land-basic, tutor-to-hand, gives pp counters, scry | - |
| tutor-instant | 23 | tutor | 3 |
| typal-angel | 23 | typal-creature | - |
| un-keyword | 23 | un-set mechanics | - |
| x cost matters | 23 | mana cost matters | - |
| ablative armor | 22 | damage prevention | - |
| cards in exile matter | 22 | - | - |
| conjure-spellbook | 22 | conjure | - |
| discard to library | 22 | hand disruption | - |
| expertise | 22 | cast on resolution | - |
| fact or fiction | 22 | divvy, opponent chooses | - |
| four plus creature types | 22 | - | 1 |
| hate-low-toughness | 22 | hate | - |
| hate-multicolor | 22 | hate-color | - |
| impulse-instant | 22 | impulse | 1 |
| impulse-sorcery | 22 | impulse | 1 |
| life divider-you | 22 | life divider | - |
| lifegain to damage | 22 | lifegain matters | - |
| mathy name | 22 | card names | - |
| neo-regenerate | 22 | - | - |
| pariah | 22 | damage redirection | - |
| reanimate matters | 22 | - | - |
| removal-equipment | 22 | removal | 4 |
| seek-creature | 22 | seek | 8 |
| synergy-color-choose | 22 | - | - |
| synergy-enchantment-creature | 22 | - | - |
| synergy-lifelink | 22 | - | - |
| synergy-name-sticker | 22 | synergy-sticker | - |
| synergy-warp | 22 | - | - |
| theft-nonland | 22 | theft | - |
| toughness matters-self | 22 | toughness matters | - |
| trample counter | 22 | keyword counter | - |
| transferrable aura | 22 | - | - |
| alternative crewing | 21 | animate self | - |
| behold | 21 | - | 3 |
| burn bright with set mechanic | 21 | staple with set's mechanic, trumpet blast | - |
| conjure-artifact | 21 | conjure | - |
| converge | 21 | color spent matters | 2 |
| cost-reducer-colored-mana | 21 | cost reducer | - |
| cost-reducer-equip-ability | 21 | cost reducer, cost-reducer-activated-ability | - |
| crewless vehicle | 21 | - | - |
| deathtouch counter | 21 | keyword counter | - |
| enchantment engine | 21 | draw, synergy-enchantment | - |
| formidable | 21 | power matters-total | - |
| genesis effect | 21 | - | - |
| hate-artifact-creature | 21 | hate | - |
| hate-legendary | 21 | hate | - |
| impulsive recursion | 21 | gives castable from exile, recursion | - |
| instant speed discard | 21 | - | - |
| poison opponents | 21 | poison mechanics | - |
| reanimate-aura | 21 | reanimate | - |
| reanimate-planeswalker | 21 | reanimate, recursion-planeswalker | - |
| rulebreaker | 21 | - | - |
| surge | 21 | - | - |
| synergy-creatureland | 21 | - | - |
| synergy-reach | 21 | - | - |
| tokenfall | 21 | synergy-token, thingfall | - |
| tutor-artifact-equipment | 21 | tutor-artifact | - |
| un-forecast | 21 | - | - |
| zoo | 21 | - | - |
| artist matters | 20 | un-set mechanics | - |
| blood moon effect | 20 | - | - |
| cost-reducer-artifact | 20 | synergy-artifact, cost reducer | 3 |
| counter increaser | 20 | - | 1 |
| cycle-2x2-draft-signpost | 20 | cycle, draft signpost | - |
| cycle-2xm-r-two-color | 20 | cycle | - |
| cycle-dsk-draft-signpost | 20 | cycle, draft signpost | - |
| cycle-fin-draft-signpost | 20 | draft signpost, cycle | - |
| cycle-ltr-draft-signpost | 20 | draft signpost, cycle | - |
| cycle-ltr-r-two-color | 20 | cycle | - |
| cycle-mm2-draft-signpost | 20 | draft signpost, cycle | - |
| cycle-war-r-two-color | 20 | cycle | - |
| doctor who episode name | 20 | card names | 1 |
| fateseal | 20 | top deck manipulation, peek-library | - |
| gains shroud | 20 | protection | - |
| gives flashback | 20 | gives castable from graveyard | - |
| hate empty hand | 20 | hand size hate | 1 |
| hate-typal-non-wall | 20 | hate-typal | - |
| just shuffle | 20 | - | - |
| legends retold | 20 | - | - |
| offcolor mana generation | 20 | - | - |
| offspring token | 20 | token version of a card | - |
| pillowfort | 20 | - | 1 |
| preexisting dnd background | 20 | dnd mechanic, card names | - |
| radiate | 20 | synergy-target | - |
| recursion from exile | 20 | unexile | - |
| renown | 20 | untracked indefinite effect, gains pp counters, intervening if clause, saboteur | - |
| ritual-untap | 20 | - | - |
| skip draw step | 20 | phase manipulation | - |
| sneak-artifact | 20 | sneak | - |
| spell with no casting cost | 20 | - | - |
| synergy-indestructible | 20 | - | - |
| table order matters | 20 | - | - |
| typal coupling-distinct | 20 | typal coupling | - |
| vigilance counter | 20 | keyword counter | - |
| berserk | 19 | delayed trigger | - |
| catch-22 | 19 | - | 1 |
| conditional tapland | 19 | - | 19 |
| conjure-instant | 19 | conjure | - |
| conjure-random | 19 | conjure, random card | - |
| crucible of worlds | 19 | reanimate-land | - |
| doctor who episode saga | 19 | doctor who episode name | - |
| exile with tax | 19 | - | - |
| fetchland | 19 | sacrifice self, tutor-land-to-battlefield | 5 |
| functional reminder counter | 19 | aesthetic counter | - |
| hate-flash | 19 | hate | - |
| hate-snow | 19 | hate | - |
| life divider-opponent | 19 | life divider | 1 |
| mana spent matters | 19 | - | 2 |
| manaless land | 19 | - | - |
| multicolor kicker | 19 | more expensive than mv | - |
| noted tracked information | 19 | - | - |
| oil counters matter | 19 | counters matter | 1 |
| predefined token | 19 | - | - |
| repeatable blood | 19 | repeatable noncreature tokens, repeatable artifact tokens, repeatable rummage | - |
| synergy-no-flying | 19 | - | - |
| team matters | 19 | - | - |
| theft | 19 | control changing effects | 16 |
| token doubler | 19 | token increaser | - |
| typal-ninja | 19 | typal-creature | 3 |
| typal-outlaw | 19 | typal-assassin, typal-rogue, typal-warlock, typal-mercenary, typal-pirate, typal coupling | - |
| afflict | 18 | hate-blocker | - |
| arc lightning | 18 | - | - |
| armament ability | 18 | synergy-equipment | - |
| battle cry | 18 | power boost to all | - |
| conjure-to-library | 18 | conjure | - |
| copy-permanent | 18 | copy-artifact, copy-creature, copy-enchantment, copy-land, copy-planeswalker | - |
| detain | 18 | prevent activation, prevent attack, prevent blocker | - |
| external prop | 18 | un-set mechanics | 1 |
| face-commander | 18 | - | 34 |
| gives cascade | 18 | gives castable from exile | - |
| gives changeling | 18 | type change | - |
| gives intimidate | 18 | gives evasion | - |
| hate-storm | 18 | hate | - |
| hate-swamp | 18 | hate | - |
| lightning bolt redux | 18 | - | - |
| multiple kicker costs | 18 | more expensive than mv | - |
| noncreature french vanilla | 18 | flavors of vanilla | - |
| opaline effect | 18 | hate-target, pure draw, toll | - |
| opponent sacrifice matters | 18 | sacrifice matters | - |
| permanentfall | 18 | thingfall | - |
| repeatable powerstones | 18 | repeatable artifact tokens, repeatable noncreature tokens, powerstone mana | - |
| sacrifice outlet-nonland | 18 | sacrifice outlet, sacrifice outlet-artifact, sacrifice outlet-creature, sacrifice outlet-enchantment | - |
| skulk | 18 | evasion, hate-high-pt | - |
| sneak from library | 18 | cost ignorer | 2 |
| sports name | 18 | card names | - |
| synergy-adventure | 18 | - | - |
| synergy-blood | 18 | - | - |
| synergy-hexproof | 18 | - | - |
| synergy-saga | 18 | - | 2 |
| synergy-surveil | 18 | - | - |
| tapper-nonland | 18 | tapper-artifact, tapper-creature | - |
| titan immortality | 18 | restock-self | - |
| tutor-copy | 18 | tutor, name matters | - |
| typal-eldrazi | 18 | typal-creature | - |
| typal-goblin-orc | 18 | typal-orc, typal-goblin, typal coupling | - |
| typal-neo-solo-attack | 18 | typal coupling, typal-warrior, typal-samurai | - |
| white elephant | 18 | - | - |
| addendum | 17 | - | - |
| animate vehicle | 17 | animate | - |
| cast tax | 17 | tax | - |
| commander tax matters | 17 | commander matters | - |
| conjure-enchantment | 17 | conjure | - |
| conjure-sorcery | 17 | conjure | - |
| copy-enchantment | 17 | copy | 2 |
| copy-land | 17 | copy | 1 |
| counterspell-bounce | 17 | counterspell | - |
| dehydration with set mechanic | 17 | staple with set's mechanic, lockdown | - |
| gives affinity | 17 | cost reducer | - |
| gives castable from library | 17 | gives castable from nonhand | 2 |
| gives suspend | 17 | gives castable from exile, gives haste, cast on resolution | - |
| hate-plains | 17 | hate | - |
| hate-tutor | 17 | hate | - |
| hate-typal-choose | 17 | hate-typal | - |
| hate-typal-zombie | 17 | hate-typal | - |
| hatebird | 17 | hate | - |
| keyword errata surveil | 17 | keyword errata | - |
| land or hand | 17 | extra land, card advantage | - |
| legacy | 17 | - | 2 |
| marauder | 17 | mutual sacrifice | - |
| pseudo-exert | 17 | - | - |
| rules text matters | 17 | un-set mechanics | - |
| school name | 17 | card names | - |
| set matters | 17 | - | 1 |
| sift | 17 | loot, burst draw | - |
| sneak-self | 17 | sneak | 1 |
| starting player matters | 17 | - | - |
| storm-like | 17 | - | 1 |
| the doctor | 17 | - | - |
| torment | 17 | punisher, black effect, removal-sacrifice, discard | - |
| trading post like | 17 | - | - |
| tutor-from-opponent | 17 | tutor | - |
| tutor-land-basic-mountain | 17 | tutor-land-basic | - |
| wth-storyline-in-cards | 17 | - | - |
| attacking matters-any | 16 | - | - |
| birthing pod | 16 | - | - |
| brainstorm | 16 | top deck manipulation, draw, tuck-outlet | - |
| conjure-land | 16 | conjure | - |
| copy-planeswalker | 16 | copy | 1 |
| emblem-lite | 16 | - | - |
| ethereal armor | 16 | synergy-enchantment | - |
| first strike counter | 16 | keyword counter | - |
| flicker-artifact | 16 | flicker | 2 |
| flicker-permanent | 16 | flicker-artifact, flicker-creature, flicker-enchantment, flicker-land, flicker-planeswalker | - |
| gifts ungiven | 16 | opponent chooses, dilemma | - |
| gives castable from nonhand | 16 | - | 3 |
| guest designer | 16 | - | - |
| hate-landwalk | 16 | - | - |
| hate-mountain | 16 | hate | - |
| hate-typal-spirit | 16 | hate-typal | - |
| instant-sorcery-dichotomous | 16 | - | - |
| legendfall | 16 | synergy-legendary, thingfall | - |
| lockdown-artifact | 16 | lockdown | - |
| menace counter | 16 | keyword counter | - |
| old banish templating | 16 | - | - |
| prevent sacrifice | 16 | - | - |
| rack effect | 16 | hate empty hand | - |
| seek-card | 16 | seek | - |
| single-minded graveyard hate | 16 | hate-graveyard, single-minded hate | - |
| synergy-transform | 16 | - | - |
| token version of a card | 16 | token versions of cards | 2 |
| turn-face-up | 16 | face-up-face-down-effects | - |
| tutor-land-basic-island | 16 | tutor-land-basic | - |
| tutor-land-basic-swamp | 16 | tutor-land-basic | - |
| tutor-sorcery | 16 | tutor | 3 |
| typal-snake | 16 | typal-creature | - |
| type errata dinosaur | 16 | type errata | - |
| uril ability | 16 | synergy-aura | - |
| wannabe dark confidant | 16 | life for cards | - |
| awaken | 15 | animate land, gives haste, gives pp counters | - |
| color ward | 15 | - | 1 |
| counterspell-artifact | 15 | counterspell | - |
| creature type ship | 15 | type errata | - |
| cycle-sos-draft-signpost | 15 | - | - |
| embalm token | 15 | - | - |
| enters-and-leaves-trigger-self | 15 | leaves trigger-self | - |
| explore-like | 15 | - | - |
| frost armor | 15 | hexproof soft | - |
| gives defender | 15 | - | - |
| gives loyalty ability | 15 | synergy-planeswalker | - |
| grim return | 15 | recursion | - |
| hand disruption | 15 | - | 7 |
| hand size decrease | 15 | - | - |
| hate-equipment | 15 | hate | 1 |
| hate-forest | 15 | hate | - |
| hate-typal-goblin | 15 | hate-typal | - |
| impulse-planeswalker | 15 | impulse | 2 |
| impulse-to-top | 15 | impulse-to-zone | - |
| lifegain increaser | 15 | - | - |
| onomatopoeia | 15 | card names | - |
| phase manipulation | 15 | - | 5 |
| phoenix with set's mechanic | 15 | staple with set's mechanic | - |
| play from top | 15 | gives castable from library | 2 |
| prevents win/loss | 15 | - | 2 |
| reanimate-equipment | 15 | reanimate | - |
| regrowth-planeswalker | 15 | regrowth, recursion-planeswalker | 4 |
| removal-noncreature | 15 | removal, removal-aura, removal-artifact, removal-equipment, removal-spacecraft, removal-vehicle, removal-enchantment, removal-planeswalker, removal-land, removal-battle | - |
| reveal hand | 15 | - | - |
| sunder | 15 | removal | - |
| synergy-kicker | 15 | - | - |
| synergy-sacrifice-self | 15 | sacrifice matters | - |
| synergy-spacecraft | 15 | - | - |
| theft-ownership | 15 | - | - |
| token increaser | 15 | - | 1 |
| token without a card | 15 | - | - |
| tutor-creature-dragon | 15 | tutor-creature | - |
| tutor-enchantment | 15 | tutor | 5 |
| unstoppable | 15 | - | - |
| booster tutor | 14 | wish | - |
| burn-self | 14 | burn creature | - |
| card types matter | 14 | - | 2 |
| command | 14 | modal | 5 |
| conditional aura | 14 | - | - |
| conjure-to-graveyard | 14 | conjure | - |
| divvy | 14 | dilemma | 1 |
| emerge-from-creature | 14 | sacrifice outlet-creature, emerge | 1 |
| exo-storyline-in-cards | 14 | - | - |
| flavor text matters | 14 | un-set mechanics | - |
| gives banding | 14 | - | - |
| gives convoke | 14 | cost reducer, tap fuel-creature | - |
| gives player protection | 14 | gives player ability, protection | - |
| gives shadow | 14 | gives evasion | - |
| hate-colorless | 14 | - | - |
| hate-monocolor | 14 | hate-color | - |
| lich effect | 14 | - | - |
| mana gorger | 14 | cast trigger | - |
| other games matter | 14 | un-set mechanics | 1 |
| planechase mechanic | 14 | - | - |
| pseudo-shroud | 14 | - | 5 |
| reach counter | 14 | keyword counter | - |
| recasting commander matters | 14 | commander matters | 1 |
| removes defender | 14 | - | - |
| roman numeral | 14 | card names | - |
| sacrifice outlet-planeswalker | 14 | sacrifice outlet | 1 |
| skip turn | 14 | - | - |
| sneak | 14 | cost ignorer | 10 |
| synergy-flashback | 14 | - | - |
| theft-spell | 14 | theft | - |
| typal-doctor | 14 | typal-creature | - |
| typal-mercenary | 14 | typal-creature | 1 |
| typal-minotaur | 14 | typal-creature | - |
| typal-rebel | 14 | typal-creature | - |
| typal-shaman | 14 | typal-creature | - |
| typal-wolf | 14 | typal-creature | 1 |
| vigor effect | 14 | - | - |
| affinity undergrowth | 13 | undergrowth, affinity for graveyard | - |
| banish-hand | 13 | discard to exile, banish | - |
| burn battle | 13 | burn | 1 |
| compulsive research | 13 | loot, discarded type matters | - |
| counterspell-free | 13 | counterspell | - |
| eternalize token | 13 | - | - |
| face-up-face-down-effects | 13 | - | 15 |
| flicker-nonland | 13 | flicker-creature, flicker-artifact, flicker-enchantment, flicker-planeswalker | - |
| fulfilled futureshift | 13 | - | - |
| gains fear | 13 | evasion | - |
| gives ingest | 13 | - | - |
| gives stalking | 13 | gives evasion, green effect | - |
| hate-free-spell | 13 | hate | - |
| hate-typal-human | 13 | hate-typal | - |
| howlgeist ability | 13 | evasion, scales with power | - |
| hunger | 13 | hunger trigger, gains pp counters | - |
| library size matters | 13 | - | 1 |
| loner | 13 | - | - |
| mana abilities matter | 13 | - | - |
| mechanical foreshadow | 13 | - | - |
| nonfunctional reminder counter | 13 | indefinite effect, aesthetic counter | - |
| pile | 13 | - | - |
| pseudo-equipment | 13 | deprecated mechanics | - |
| recursion-instant | 13 | recursion | 2 |
| relentless | 13 | - | - |
| removal-vehicle | 13 | removal | 4 |
| rule of law | 13 | - | - |
| specific power matters | 13 | power matters | 1 |
| super-menace | 13 | evasion | - |
| synergy-cave | 13 | - | - |
| synergy-ring | 13 | - | - |
| theft-planeswalker | 13 | theft | - |
| turns off defender | 13 | - | - |
| turns taken matter | 13 | - | - |
| tutor-enchantment-aura | 13 | tutor-enchantment | 2 |
| typal-frog | 13 | typal-creature | - |
| typal-insect | 13 | typal-creature | - |
| typal-mouse | 13 | typal-creature | - |
| typal-mutant | 13 | typal-creature | 2 |
| typal-wall | 13 | typal-creature | - |
| watermark matters | 13 | un-set mechanics | - |
| animate enchantment | 12 | animate | - |
| block unlimited | 12 | block additional | - |
| bottom of library matters | 12 | - | - |
| bounty | 12 | - | - |
| change name | 12 | text change | - |
| coin flips matter | 12 | - | - |
| counter preservation | 12 | counters matter | - |
| counterspell-tuck | 12 | counterspell, tuck | - |
| creature type townsfolk | 12 | - | - |
| cycle-zodiac-creature | 12 | cycle | - |
| discard matters | 12 | - | 2 |
| fling-self | 12 | power matters-self, martyr, scales with power | - |
| four loyalty abilities | 12 | - | - |
| fractional power/toughness | 12 | un-set mechanics, non-integer | - |
| fungusaur effect | 12 | enrage | - |
| gives charge counter | 12 | - | - |
| greed ability | 12 | life for cards | - |
| hate-colored | 12 | hate-color | - |
| hate-shadow | 12 | hate | - |
| hate-theft | 12 | hate | 1 |
| landslow | 12 | - | - |
| legendify | 12 | type change | 1 |
| lose trigger | 12 | triggered ability, multiplayer | - |
| pillage effect | 12 | - | - |
| platinum angel effect | 12 | prevents win/loss | - |
| pseudo-dethrone | 12 | - | - |
| quietus effect | 12 | saboteur, life divider-opponent | - |
| removal-battle | 12 | removal | 4 |
| removes indestructible | 12 | - | - |
| rescue-artifact | 12 | rescue | 2 |
| sacrifice outlet | 12 | - | 14 |
| seek-land-any | 12 | seek-land | - |
| single-minded typal hate | 12 | single-minded hate, hate-typal | - |
| sol land | 12 | - | - |
| substance | 12 | deprecated mechanics, triggers at cleanup step | - |
| synergy-attraction | 12 | - | 1 |
| synergy-bounce | 12 | - | - |
| synergy-land-graveyard | 12 | - | - |
| typal-bat | 12 | typal-creature | - |
| typal-dog | 12 | typal-creature | - |
| typal-lizard | 12 | - | - |
| typal-samurai | 12 | typal-creature | 1 |
| un-color | 12 | un-set mechanics | - |
| unexile | 12 | - | 3 |
| untapper-nonland | 12 | untapper | 1 |
| x doesn't matter | 12 | - | - |
| commander tax evasion | 11 | commander matters | - |
| conjure-card | 11 | conjure | - |
| control blocker | 11 | combat manipulation | - |
| copy-nonland | 11 | copy, copy-artifact, copy-creature, copy-enchantment | - |
| cost-reducer-enchantment | 11 | synergy-enchantment, cost reducer | 2 |
| cost-reducer-noncreature | 11 | cost reducer | - |
| counter fuel-mm | 11 | counter fuel, removes-mm-counters | - |
| cycle-rav-mmn | 11 | cycle | - |
| distinct echo cost | 11 | - | - |
| drawlink | 11 | pure draw, curiosity-like, scales with damage dealt | 1 |
| eminence | 11 | - | - |
| gives exalted | 11 | synergy-solo-attack | - |
| gives forestwalk | 11 | gives landwalk | - |
| gives islandwalk | 11 | gives landwalk | - |
| hate-typal-elf | 11 | hate-typal | - |
| hate-typal-vampire | 11 | hate-typal | - |
| heckbent | 11 | hand size matters | - |
| impulse-artifact-equipment | 11 | impulse-artifact | - |
| invitational card | 11 | - | - |
| mob name | 11 | card names | - |
| nevermore | 11 | prevent cast, hate-named | - |
| phyrexian token | 11 | - | - |
| poison mechanics | 11 | - | 9 |
| prevent put counter | 11 | hate-counters | - |
| pseudo-cycling | 11 | activate from hand | - |
| reanimate | 11 | recursion | 22 |
| recurring suspend | 11 | exile on resolution | - |
| recursion-sorcery | 11 | recursion | 2 |
| removes hexproof | 11 | - | - |
| restock-instant | 11 | restock, recursion-instant | - |
| restock-sorcery | 11 | restock, recursion-sorcery | - |
| skip untap step | 11 | phase manipulation | - |
| speed matters | 11 | - | - |
| synergy full hand | 11 | - | - |
| synergy-target | 11 | - | 3 |
| top deck manipulation | 11 | library manipulation | 8 |
| tribute | 11 | punisher, gains pp counters, opponent chooses | - |
| tuck | 11 | - | 3 |
| turn control | 11 | - | - |
| tutor-creature-mercenary | 11 | tutor-creature | - |
| typal-golem | 11 | typal-creature | - |
| typal-otter | 11 | - | - |
| worship | 11 | - | - |
| affinity for attacking | 10 | affinity, attacking matters | - |
| affinity for party | 10 | affinity for creature type, synergy-party | - |
| affinity for spells | 10 | affinity for graveyard | - |
| casting restriction | 10 | - | 2 |
| clothing matters | 10 | un-set mechanics, you matter | - |
| combat arbiter | 10 | combat manipulation | - |
| commander identity matters | 10 | commander matters | - |
| cone spell | 10 | - | - |
| counterspell-enchantment | 10 | counterspell | - |
| creature type guardian | 10 | - | - |
| cycle-2xm-draft-signpost | 10 | draft signpost, cycle | - |
| cycle-a25-draft-signpost | 10 | cycle, draft signpost | - |
| cycle-a25-r-two-color | 10 | cycle | - |
| cycle-abu-dual-land | 10 | cycle-dual-land | - |
| cycle-aer-draft-signpost | 10 | cycle, draft signpost | - |
| cycle-afr-u-legend | 10 | cycle, draft signpost | - |
| cycle-akh-draft-signpost | 10 | cycle, draft signpost | - |
| cycle-ala-u-two-color | 10 | cycle | - |
| cycle-apc-c-two-color | 10 | cycle | - |
| cycle-apc-r-two-color | 10 | cycle | - |
| cycle-apc-u-two-color | 10 | cycle | - |
| cycle-bbd-draft-signpost | 10 | cycle, draft signpost | - |
| cycle-bbd-legendary-partner | 10 | cycle | - |
| cycle-bbd-u-partner | 10 | cycle | - |
| cycle-bfz-draft-signpost | 10 | cycle, draft signpost | - |
| cycle-blb-c-typal-boost | 10 | cycle | - |
| cycle-blb-draft-signpost | 10 | cycle, draft signpost | - |
| cycle-blb-duo | 10 | cycle | - |
| cycle-blb-hybrid | 10 | cycle | - |
| cycle-blb-r-two-color-legend | 10 | cycle | - |
| cycle-blb-u-typal | 10 | cycle | - |
| cycle-block-rav-c-hybrid | 10 | cycle | - |
| cycle-block-rav-colors-matter | 10 | cycle | - |
| cycle-block-rav-guild-champion | 10 | cycle | - |
| cycle-block-rav-guildmage | 10 | cycle | - |
| cycle-block-rav-mnn | 10 | cycle | - |
| cycle-block-rav-r-hybrid | 10 | cycle | - |
| cycle-block-rtr-c-hybrid | 10 | cycle | - |
| cycle-block-rtr-guild-charm | 10 | charm, cycle | - |
| cycle-block-rtr-guildmage | 10 | cycle | - |
| cycle-block-rtr-guildmaster | 10 | cycle | - |
| cycle-block-rtr-m-multicolor | 10 | cycle | - |
| cycle-block-rtr-off-color | 10 | cycle | - |
| cycle-block-rtr-r-hybrid | 10 | cycle | - |
| cycle-block-rtr-u-guild-kw | 10 | cycle | - |
| cycle-block-rtr-u-hybrid | 10 | cycle | - |
| cycle-block-ths-scry-land | 10 | tapland, cycle-dual-land | - |
| cycle-bro-draft-signpost | 10 | cycle, draft signpost | - |
| cycle-c16-m-partner | 10 | cycle | - |
| cycle-c21-mono-legend | 10 | cycle | - |
| cycle-clb-draft-signpost | 10 | draft signpost, cycle | - |
| cycle-clb-r-two-color-legend | 10 | cycle | - |
| cycle-clb-tricolor-legend | 10 | cycle | - |
| cycle-clb-u-background | 10 | cycle | - |
| cycle-clu-guild-rare | 10 | cycle | - |
| cycle-clu-r-hybrid | 10 | cycle | - |
| cycle-clu-unc-hybrid | 10 | cycle | - |
| cycle-cmm-draft-signpost | 10 | draft signpost, cycle | - |
| cycle-cmm-m-mono-legend | 10 | cycle | - |
| cycle-cmm-r-two-color-legend | 10 | cycle | - |
| cycle-cmm-tricolor-legend | 10 | cycle | - |
| cycle-cmr-backward-partner | 10 | cycle | - |
| cycle-cmr-draft-signpost | 10 | cycle, draft signpost | - |
| cycle-cmr-forward-partner | 10 | cycle | - |
| cycle-cmr-r-two-color | 10 | cycle | - |
| cycle-cmr-tricolor-legend | 10 | cycle | - |
| cycle-cn2-draft-signpost | 10 | cycle, draft signpost | - |
| cycle-cns-draft-signpost | 10 | cycle, draft signpost | - |
| cycle-cns-r-two-color | 10 | cycle | - |
| cycle-dft-nonvehicle-signpost | 10 | cycle-dft-draft-signpost | - |
| cycle-dft-team-captain | 10 | cycle | - |
| cycle-dft-team-vehicle | 10 | cycle-dft-draft-signpost | - |
| cycle-dgm-c-guild-ability | 10 | cycle | - |
| cycle-dgm-cluestones | 10 | cycle | - |
| cycle-dgm-draft-signpost | 10 | cycle, draft signpost | - |
| cycle-dgm-m-two-color | 10 | cycle | - |
| cycle-dgm-maze-runner | 10 | cycle | - |
| cycle-dgm-u-fuse | 10 | cycle | - |
| cycle-dmr-draft-signpost | 10 | cycle, draft signpost | - |
| cycle-dmu-dual-land | 10 | tapland, cycle-dual-land | - |
| cycle-dmu-mmn-signpost | 10 | cycle-dmu-draft-signpost | - |
| cycle-dmu-mn-signpost | 10 | cycle-dmu-draft-signpost | - |
| cycle-dmu-r-two-color-legend | 10 | cycle | - |
| cycle-dom-draft-signpost | 10 | cycle, draft signpost | - |
| cycle-dsk-r-two-color | 10 | cycle | - |
| cycle-dsk-thirteenland | 10 | cycle-dual-land, conditional tapland | - |
| cycle-dual-investigate-tapland | 10 | cycle-dual-land, tapland | - |
| cycle-dual-surveil-land | 10 | cycle-dual-land, tapland | - |
| cycle-eld-hybrid | 10 | cycle, cycle-eld-draft-signpost | - |
| cycle-eld-r-m-two-color | 10 | cycle | - |
| cycle-eld-u-two-color | 10 | cycle, cycle-eld-draft-signpost | - |
| cycle-ema-draft-signpost | 10 | draft signpost, cycle | - |
| cycle-ema-r-two-color | 10 | cycle | - |
| cycle-eoe-draft-signpost | 10 | draft signpost, cycle | - |
| cycle-eoe-r-two-color | 10 | cycle | - |
| cycle-eoe-u-spacecraft | 10 | cycle | - |
| cycle-fdn-draft-signpost | 10 | draft signpost, cycle | - |
| cycle-fdn-r-two-color | 10 | cycle | - |
| cycle-fin-dual-town | 10 | tapland, cycle-dual-land | - |
| cycle-fin-r-two-color | 10 | cycle | - |
| cycle-gtc-m-two-color | 10 | cycle | - |
| cycle-guildgate | 10 | tapland, cycle-dual-land | - |
| cycle-hbg-draft-signpost | 10 | draft signpost, cycle | - |
| cycle-hbg-u-specialize | 10 | cycle | - |
| cycle-iko-companion | 10 | cycle | - |
| cycle-ima-draft-signpost | 10 | cycle, draft signpost | - |
| cycle-ima-r-two-color | 10 | cycle | - |
| cycle-inr-draft-signpost | 10 | draft signpost | - |
| cycle-inr-r-two-color | 10 | cycle | - |
| cycle-keyrune | 10 | cycle | - |
| cycle-khm-legendary-signpost | 10 | cycle-khm-draft-signpost | - |
| cycle-khm-r-saga | 10 | cycle | - |
| cycle-khm-realm | 10 | tapland, cycle-land | - |
| cycle-khm-snow-tapland | 10 | tapland, cycle-dual-land | - |
| cycle-khm-u-saga | 10 | cycle-khm-draft-signpost | - |
| cycle-kld-draft-signpost | 10 | cycle, draft signpost | - |
| cycle-ktk-draft-signpost | 10 | draft signpost, cycle | - |
| cycle-ktk-enemy-ability | 10 | cycle | - |
| cycle-ktk-gainland | 10 | tapland, cycle-dual-land, gainland | - |
| cycle-lci-draft-signpost | 10 | draft signpost | - |
| cycle-lci-r-two-color | 10 | cycle | - |
| cycle-m19-draft-signpost | 10 | draft signpost, cycle | - |
| cycle-m20-draft-signpost | 10 | cycle, draft signpost | - |
| cycle-m21-draft-signpost | 10 | cycle, draft signpost | - |
| cycle-mh1-draft-signpost | 10 | cycle, draft signpost | - |
| cycle-mh1-r-two-color | 10 | cycle | - |
| cycle-mh2-bridge | 10 | cycle-dual-land, tapland | - |
| cycle-mh2-c-draft-signpost | 10 | cycle-mh2-draft-signpost | - |
| cycle-mh2-r-two-color-new | 10 | cycle | - |
| cycle-mh2-u-draft-signpost | 10 | cycle-mh2-draft-signpost | - |
| cycle-mh3-c-draft-signpost | 10 | cycle-mh3-draft-signpost | - |
| cycle-mh3-landscape | 10 | fetchland, cycle-colorless-land | - |
| cycle-mh3-mdfc-dual-land | 10 | cycle-dual-land, cycle-mh3-draft-signpost, tapland | - |
| cycle-mh3-mdfc-mono-land | 10 | cycle-mono-land, boltland | - |
| cycle-mh3-r-m-two-color | 10 | cycle | - |
| cycle-mh3-u-draft-signpost | 10 | cycle-mh3-draft-signpost | - |
| cycle-mid-draft-signpost | 10 | cycle, draft signpost | - |
| cycle-mid-r-flashback | 10 | cycle | - |
| cycle-mid-r-two-color-legend | 10 | cycle | - |
| cycle-mid-u-flashback | 10 | cycle | - |
| cycle-mkm-draft-signpost | 10 | draft signpost, cycle | 1 |
| cycle-mkm-hybrid-disguise | 10 | cycle | - |
| cycle-mkm-m-two-color | 10 | cycle | - |
| cycle-mkm-r-2c-noncreature | 10 | cycle | - |
| cycle-mkm-r-two-color-legend | 10 | cycle | - |
| cycle-mkm-u-gold-noncreature | 10 | cycle-mkm-draft-signpost | - |
| cycle-mm2-r-two-color | 10 | cycle | - |
| cycle-mm3-r-two-color | 10 | cycle | - |
| cycle-mom-draft-signpost | 10 | draft signpost, cycle | 1 |
| cycle-mom-invasion-signpost | 10 | cycle-mom-draft-signpost | - |
| cycle-mom-two-color-team-up | 10 | - | - |
| cycle-mom-u-mono-invasion | 10 | cycle | - |
| cycle-msh-draft-signpost | 10 | cycle, draft signpost | - |
| cycle-msh-gainland | 10 | cycle-dual-land, tapland, gainland | - |
| cycle-msh-hybrid | 10 | cycle | - |
| cycle-neo-draft-signpost | 10 | cycle, draft signpost | - |
| cycle-ogw-draft-signpost | 10 | cycle, draft signpost | - |
| cycle-one-draft-signpost | 10 | draft signpost, cycle | - |
| cycle-one-r-two-color | 10 | cycle | - |
| cycle-ori-draft-signpost | 10 | cycle, draft signpost | - |
| cycle-otj-draft-signpost | 10 | cycle, draft signpost | 1 |
| cycle-otj-pingland | 10 | cycle-dual-land, tapland | - |
| cycle-otj-u-legend | 10 | cycle-otj-draft-signpost | - |
| cycle-pls-r-two-color | 10 | cycle | - |
| cycle-rav-backward-ability | 10 | cycle | - |
| cycle-rav-backward-boost | 10 | cycle | - |
| cycle-rav-bounceland | 10 | bounceland, cycle-dual-land, adds multiple mana | - |
| cycle-rav-forward-ability | 10 | cycle | - |
| cycle-rav-forward-boost | 10 | cycle | - |
| cycle-rav-guild-artifact | 10 | cycle | - |
| cycle-rav-guildhall | 10 | cycle-land | - |
| cycle-rav-guildmaster | 10 | cycle | - |
| cycle-rav-shockland | 10 | cycle-dual-land, shockland | - |
| cycle-rav-signet | 10 | mana filter, cycle | - |
| cycle-rix-c-typal-boost | 10 | cycle | - |
| cycle-rix-draft-signpost | 10 | cycle, draft signpost | - |
| cycle-rtr-m-two-color | 10 | cycle | - |
| cycle-rvr-c-hybrid | 10 | cycle | - |
| cycle-rvr-c-two-color | 10 | cycle | - |
| cycle-rvr-r-guild-spell | 10 | cycle | - |
| cycle-rvr-r-two-color-legend | 10 | cycle | - |
| cycle-rvr-u-two-color | 10 | cycle | - |
| cycle-shm-liege | 10 | cycle | - |
| cycle-soi-draft-signpost | 10 | cycle, draft signpost | - |
| cycle-spm-c-legend | 10 | cycle | - |
| cycle-spm-draft-signpost | 10 | cycle | - |
| cycle-spm-r-two-color | 10 | cycle | - |
| cycle-tdm-draft-signpost | 10 | draft signpost, cycle | - |
| cycle-tdm-r-tricolor | 10 | cycle | - |
| cycle-thb-draft-signpost | 10 | cycle, draft signpost | - |
| cycle-thb-r-m-two-color | 10 | cycle | - |
| cycle-ths-draft-signpost | 10 | cycle, draft signpost | - |
| cycle-ths-r-two-color | 10 | cycle | - |
| cycle-tkhm-realm-token | 10 | cycle | - |
| cycle-tla-c-hybrid | 10 | cycle | - |
| cycle-tla-c-tapland | 10 | tapland, cycle-dual-land | - |
| cycle-tla-r-two-color | 10 | cycle | - |
| cycle-tla-u-hybrid | 10 | cycle-tla-draft-signpost | - |
| cycle-tla-u-two-color | 10 | cycle-tla-draft-signpost | - |
| cycle-tmt-c-hybrid | 10 | cycle | - |
| cycle-tmt-r-hybrid | 10 | cycle | - |
| cycle-tmt-team-up | 10 | cycle | - |
| cycle-tsp-c-sliver | 10 | cycle | - |
| cycle-unf-draft-signpost | 10 | draft signpost, cycle | - |
| cycle-vma-draft-signpost | 10 | cycle, draft signpost | - |
| cycle-vma-r-two-color | 10 | cycle | - |
| cycle-vow-draft-signpost | 10 | cycle, draft signpost | - |
| cycle-vow-r-two-color-legend | 10 | cycle | - |
| cycle-war-draft-signpost | 10 | cycle, draft signpost | - |
| cycle-war-hybrid-planeswalker | 10 | cycle | - |
| cycle-war-u-planeswalker | 10 | cycle | - |
| cycle-war-u-two-color-spell | 10 | cycle | - |
| cycle-woe-draft-signpost | 10 | draft signpost, cycle | - |
| cycle-woe-r-2c-adventurer | 10 | cycle | - |
| cycle-woe-u-2c-adventurer | 10 | cycle | - |
| cycle-znr-draft-signpost | 10 | cycle, draft signpost | - |
| cycle-znr-two-color-legend | 10 | cycle | - |
| freeze-artifact | 10 | freeze | - |
| freeze-land | 10 | freeze | - |
| future sight engine | 10 | play from top, repeatable card advantage | - |
| gives horsemanship | 10 | gives evasion | - |
| gives wither | 10 | - | - |
| great-designer-search-3 | 10 | - | - |
| grind | 10 | mill | - |
| hate-first-strike | 10 | hate | - |
| hate-graveyard-cast | 10 | hate | - |
| hunger trigger | 10 | death trigger | 2 |
| lockdown-land | 10 | lockdown | - |
| morphling | 10 | flowstone | - |
| moxen | 10 | mana rock | 1 |
| old fight | 10 | deprecated mechanics | - |
| orochi ability | 10 | freeze | - |
| reminder card | 10 | helper card | - |
| rummage to library | 10 | draw, red effect, tuck-outlet, bottom deck manipulation | - |
| share counters | 10 | - | - |
| sneak-aura | 10 | sneak | - |
| synergy-1/1 | 10 | specific power matters, specific toughness matters | - |
| synergy-art-sticker | 10 | synergy-sticker | - |
| synergy-flash | 10 | - | - |
| synergy-incubator | 10 | - | - |
| synergy-suspect | 10 | - | - |
| synergy-toxic | 10 | - | - |
| synergy-untapped | 10 | - | - |
| text change color | 10 | text change | - |
| timing restriction | 10 | casting restriction | 1 |
| turn-face-down | 10 | face-up-face-down-effects | - |
| tutor-creature-rebel | 10 | tutor-creature | - |
| typal-fungus | 10 | typal-creature | - |
| typal-robot | 10 | typal-creature | - |
| undergrowth-all | 10 | undergrowth | - |
| unique mana symbol | 10 | - | - |
| wheel-symmetrical-optional | 10 | wheel-symmetrical | - |
| affinity for land type | 9 | affinity, lands matter | 3 |
| animate planeswalker | 9 | animate | - |
| any zone type change | 9 | type change | - |
| border color matters | 9 | un-set mechanics | - |
| buff pact | 9 | - | - |
| chain spell | 9 | - | - |
| circle of protection | 9 | damage prevention, white effect | 2 |
| counter fuel-fade | 9 | counter fuel | - |
| counter fuel-keyword | 9 | counter fuel | - |
| differently named lands matter | 9 | name matters, lands matter | - |
| dolmen ability | 9 | damage prevention | - |
| eldrazi titan | 9 | - | - |
| empty library | 9 | library size matters | - |
| end turn | 9 | - | - |
| form | 9 | - | - |
| format matters | 9 | un-set mechanics | - |
| gives landwalk | 9 | gives evasion | 6 |
| gives lifelink noncreature | 9 | lifegain | - |
| gives myriad | 9 | copy-creature, per-player | - |
| gives skulk | 9 | gives evasion | 1 |
| gives toxic | 9 | poison mechanics | - |
| gives unearth | 9 | gives haste, reanimate | - |
| hate-color-every | 9 | - | - |
| hate-etb | 9 | - | - |
| hats matter | 9 | art matters | - |
| imprinted card types matter | 9 | card types matter, imprint | - |
| jackal pup ability | 9 | enrage | - |
| karnstructs | 9 | cranial plating | - |
| loot to library | 9 | draw, blue effect, tuck-outlet | - |
| mana cost matters | 9 | - | 1 |
| mutiny | 9 | - | - |
| nimble | 9 | evasion, power matters, hate-high-pt | - |
| no-creature-type | 9 | - | - |
| omnivore ability | 9 | saboteur, scales with damage dealt | - |
| peek-face-down | 9 | hate-face-down, peek | - |
| perpetual aura | 9 | - | 4 |
| pile card | 9 | helper card | - |
| power nine | 9 | - | - |
| prevent etb | 9 | - | - |
| pseudo-leveler | 9 | - | - |
| reanimate-face-down | 9 | face-up-face-down-effects, reanimate | - |
| reanimate-vehicle | 9 | reanimate | - |
| remove counters-player | 9 | remove counters | 1 |
| sacrifice cost land | 9 | - | - |
| show and tell | 9 | symmetrical | - |
| super-pridemate | 9 | pridemate | - |
| synergy-color-every | 9 | synergy-multicolor | - |
| synergy-foretell | 9 | - | - |
| synergy-initiative | 9 | - | - |
| synergy-protection | 9 | - | - |
| token replacer | 9 | - | - |
| transform-mirror | 9 | - | - |
| tutor-cast | 9 | tutor | - |
| tutor-interaction | 9 | - | - |
| tutor-land-desert | 9 | tutor-land | - |
| tutor-planeswalker | 9 | tutor | 1 |
| typal-bear | 9 | typal-creature | - |
| typal-horror | 9 | typal-creature | - |
| typal-multi-sea-monster | 9 | typal-kraken, typal-serpent, typal-octopus, typal-leviathan, typal coupling | - |
| typal-rabbit | 9 | typal-creature | - |
| ante matters | 8 | legacy, deprecated mechanics | 1 |
| bablovian faction leader | 8 | - | - |
| cda-subtype | 8 | characteristic-defining ability | 1 |
| checklist card | 8 | substitute card | - |
| conjure-artifact-creature | 8 | conjure | - |
| counterspell-planeswalker | 8 | counterspell | - |
| counterspell-sweeper | 8 | counterspell | - |
| cycle-c17-alt-commander | 8 | alt-commander, cycle | - |
| cycle-c18-alt-commander | 8 | cycle, alt-commander | - |
| cycle-c19-alt-commander | 8 | cycle, alt-commander | - |
| cycle-lrw-harbinger | 8 | cycle | - |
| cycle-lrw-typal-legend | 8 | cycle | - |
| cycle-lrw-typal-lord | 8 | cycle | - |
| cycle-ons-typal-land | 8 | cycle-colorless-land | - |
| cycle-tlrw-typal-token | 8 | cycle | - |
| cycle-xln-draft-signpost | 8 | cycle, draft signpost | - |
| dnd book | 8 | dnd | - |
| etb-untapper | 8 | untapper | - |
| eternalize | 8 | copy from graveyard | - |
| fake flying | 8 | evasion | - |
| fallout vault saga | 8 | card names | - |
| forestfall | 8 | landfall, synergy-forest | - |
| fractional life/damage | 8 | un-set mechanics, non-integer | 1 |
| gainland | 8 | lifegain | 5 |
| gains banding | 8 | - | - |
| gives afflict | 8 | - | - |
| gives daunt | 8 | gives evasion, power matters, hate-low-power | - |
| gives infect | 8 | poison mechanics | - |
| gives prowess | 8 | synergy-noncreature, cast trigger-you | - |
| gives unstoppable | 8 | - | - |
| graveyard fuel-land | 8 | graveyard fuel | - |
| hate-counters | 8 | hate | 2 |
| hate-cycling | 8 | hate | - |
| hate-typal-cleric | 8 | hate-typal | - |
| hate-typal-dragon | 8 | hate-typal | - |
| hexproof counter | 8 | keyword counter | - |
| krarks other thumb effect | 8 | synergy-dice | - |
| leaving graveyard matters | 8 | - | 1 |
| mirror gallery | 8 | synergy-legendary | - |
| persecution effect | 8 | inverted effects | - |
| phasing matters | 8 | - | - |
| prevent trigger | 8 | - | - |
| prowess anthem | 8 | power boost to all, toughness boost to all, synergy-noncreature | - |
| pseudo-hexproof | 8 | - | - |
| purgatory | 8 | haven | - |
| rarity matters | 8 | un-set mechanics | - |
| repeatable mutagens | 8 | repeatable artifact tokens, gives pp counters, repeatable noncreature tokens, repeatable crime, repeatable pp counters | - |
| rescue-enchantment | 8 | rescue | 3 |
| restock-artifact | 8 | restock, recursion-artifact | - |
| restores old rule | 8 | - | - |
| royal assassin ability | 8 | hate-tapped | - |
| synergy-augment | 8 | - | - |
| synergy-exhaust | 8 | - | - |
| synergy-explore | 8 | - | - |
| synergy-goad | 8 | - | - |
| synergy-vote | 8 | - | - |
| theft-enchantment | 8 | theft | - |
| third draw matters | 8 | draw matters | - |
| time matters | 8 | un-set mechanics | - |
| tongue twister | 8 | card names | - |
| tuck-outlet | 8 | - | 3 |
| tutor-land-gate | 8 | tutor-land | - |
| typal-detective | 8 | typal-creature | - |
| typal-illusion | 8 | typal-creature | - |
| typal-raccoon | 8 | typal-creature | - |
| typal-skeleton | 8 | typal-creature | - |
| type errata specific insect | 8 | type errata specific | - |
| unique counters matter | 8 | counters matter | - |
| affinity for creatures | 7 | affinity, creature count matters | - |
| alternate-cost-life | 7 | life payment | 1 |
| animate dead-like | 7 | - | - |
| banish-graveyard | 7 | banish | - |
| board-reset | 7 | - | - |
| clone graveyard | 7 | clone, copy from graveyard | - |
| color count matters | 7 | - | - |
| control attacker | 7 | combat manipulation | - |
| copy | 7 | - | 19 |
| cost-reducer-equipment | 7 | cost-reducer-artifact | - |
| cycle-apc-envoy | 7 | cycle | - |
| cycle-da1-stage | 7 | cycle | - |
| cycle-khm-r-god | 7 | cycle | - |
| cycle-ori-c-spell-mastery | 7 | cycle | - |
| cycle-tr-mage | 7 | cycle, tutor-mv | - |
| cycle-usg-rune-protection | 7 | cycle, circle of protection | - |
| damage stays | 7 | - | - |
| delayed payment | 7 | - | - |
| discard outlet-nonland | 7 | discard outlet | - |
| double strike counter | 7 | keyword counter | - |
| extra upkeep | 7 | phase manipulation | - |
| flicker-land | 7 | flicker | 1 |
| gains defender | 7 | - | - |
| gains landwalk | 7 | evasion | 4 |
| gains ward | 7 | - | - |
| gives annihilator | 7 | - | - |
| gives drawlink | 7 | drawlink | - |
| gives escape | 7 | gives castable from graveyard | - |
| gives melee | 7 | per-player | - |
| gives persist | 7 | cheat death, gives mm counters, death trigger, intervening if clause | - |
| gives rampage | 7 | hate-blocker | - |
| gives swampwalk | 7 | gives landwalk | - |
| grafted skullcap | 7 | - | - |
| grave pact | 7 | - | - |
| graveyard fuel-nonland | 7 | graveyard fuel | - |
| hate-commander | 7 | hate | - |
| hate-defender | 7 | hate | - |
| hate-face-down | 7 | face-up-face-down-effects, hate | 1 |
| hate-off-turn-cast | 7 | hate | - |
| hate-suspend | 7 | hate | - |
| hate-typal-non-elf | 7 | hate-typal | - |
| hate-typal-non-spirit | 7 | hate-typal | - |
| impulse-enchantment-aura | 7 | impulse-enchantment | - |
| keywords matter | 7 | - | - |
| mana restriction | 7 | casting restriction | - |
| no mercy | 7 | retaliate to damage, removal-creature, removal-destroy, black effect | - |
| old ward | 7 | hexproof soft | - |
| opponent sacrifices | 7 | - | - |
| outlast mentor | 7 | pp counters matter | - |
| phyrexian mana ability | 7 | phyrexian mana | 6 |
| pierce | 7 | - | - |
| probe | 7 | loot | - |
| promotes to commander | 7 | - | - |
| protects-nonland | 7 | protection | - |
| reanimate-artifact-creature | 7 | reanimate | - |
| regrowth-equipment | 7 | regrowth | - |
| repeatable junk | 7 | repeatable noncreature tokens, repeatable artifact tokens, repeatable impulsive draw | - |
| rupture spire | 7 | tapland, drawback | - |
| save from death | 7 | prevents win/loss | - |
| shares name with a format | 7 | card names | - |
| sneak from command zone | 7 | - | - |
| specific toughness matters | 7 | toughness matters | 1 |
| synergy-bobblehead | 7 | - | - |
| synergy-colored | 7 | - | - |
| synergy-face-down-cast | 7 | face-up-face-down-effects | - |
| synergy-locus | 7 | - | - |
| synergy-monocolor | 7 | - | - |
| synergy-multicolor-pair | 7 | synergy-multicolor | - |
| synergy-mutate | 7 | - | - |
| synergy-playtest | 7 | - | - |
| synergy-proliferate | 7 | - | - |
| synergy-pw-chandra | 7 | synergy-planeswalker | - |
| tax block | 7 | - | - |
| theft-equipment | 7 | theft, hate-equipment | - |
| toughness matters-total | 7 | toughness matters | - |
| tutor-creature-legendary | 7 | tutor-creature | - |
| tutor-legendary | 7 | tutor | - |
| tutor-permanent | 7 | tutor | - |
| typal-kavu | 7 | typal-creature | - |
| typal-myr | 7 | typal-creature | - |
| typal-non-share | 7 | typal-creature | - |
| typal-ooze | 7 | typal-creature | - |
| typal-thopter | 7 | typal-creature | - |
| type errata specific bird | 7 | type errata specific | 4 |
| bounce | 6 | - | 4 |
| creates oracle copy | 6 | - | - |
| cycle-basic-snow-land | 6 | cycle-mono-land | - |
| cycle-bng-draft-signpost | 6 | cycle, draft signpost | 1 |
| cycle-bok-genju | 6 | perpetual aura, cycle | - |
| cycle-bro-command | 6 | cycle, command | - |
| cycle-clu-suspect | 6 | cycle | - |
| cycle-da1-poison-tolerance | 6 | cycle | - |
| cycle-dom-legendary-sorcery | 6 | cycle | - |
| cycle-dst-lucky-charm | 6 | cycle | - |
| cycle-eoe-legend-after | 6 | cycle | - |
| cycle-eoe-legend-before | 6 | cycle | - |
| cycle-fra-way-of-the | 6 | cycle | - |
| cycle-fut-spellshaper | 6 | cycle | - |
| cycle-hbg-alora | 6 | cycle | - |
| cycle-hbg-amber | 6 | cycle | - |
| cycle-hbg-gale | 6 | cycle | - |
| cycle-hbg-gut | 6 | cycle | - |
| cycle-hbg-imoen | 6 | cycle | - |
| cycle-hbg-jaheira | 6 | cycle | - |
| cycle-hbg-karlach | 6 | cycle | - |
| cycle-hbg-klement | 6 | cycle | - |
| cycle-hbg-lae'zel | 6 | cycle | - |
| cycle-hbg-lukamina | 6 | cycle | - |
| cycle-hbg-lulu | 6 | cycle | - |
| cycle-hbg-rasaad | 6 | cycle | - |
| cycle-hbg-sarevok | 6 | cycle | - |
| cycle-hbg-shadowheart | 6 | cycle | - |
| cycle-hbg-skanos | 6 | cycle | - |
| cycle-hbg-vhal | 6 | cycle | - |
| cycle-hbg-viconia | 6 | cycle | - |
| cycle-hbg-wilson | 6 | cycle | - |
| cycle-hbg-wyll | 6 | cycle | - |
| cycle-horizon-land | 6 | cycle-dual-land, painland | - |
| cycle-jud-wormfang-vertical | 6 | vertical-cycle | - |
| cycle-lea-basic-land | 6 | cycle-mono-land | - |
| cycle-lrw-r-champion | 6 | cycle | - |
| cycle-m15-soul | 6 | cycle | - |
| cycle-m19-mare | 6 | cycle | - |
| cycle-m21-planeswalker | 6 | cycle | - |
| cycle-m21-sanctum | 6 | cycle-shrine | - |
| cycle-mh2-no-mana-cost-suspend | 6 | cycle | - |
| cycle-mmq-cateran-recruiter | 6 | cycle, tutor-mv | - |
| cycle-mrd-artifact-land | 6 | cycle-mono-land | - |
| cycle-mrd-slith | 6 | cycle | - |
| cycle-neo-shrine | 6 | cycle-shrine | - |
| cycle-ons-lord | 6 | cycle | - |
| cycle-rix-elder-dinosaur | 6 | cycle | - |
| cycle-scg-mv-matters | 6 | - | - |
| cycle-spellshaped-from-fut | 6 | cycle | - |
| cycle-tsp-no-mana-cost-suspend | 6 | cycle | - |
| cycle-unf-single-sticker | 6 | cycle | - |
| cycle-usg-2-cycling-land | 6 | cycle-mono-land, cycle-cycling-land, tapland | - |
| cycle-voice-angel | 6 | cycle | - |
| cycle-znr-pathway | 6 | cycle-pathway | - |
| discard outlet-artifact | 6 | discard outlet | - |
| draw to seven | 6 | - | - |
| energy increaser | 6 | - | - |
| equipless equipment | 6 | - | - |
| fallout perk name | 6 | card names | - |
| freeze-nonland | 6 | freeze | - |
| freeze-permanent-any | 6 | freeze | - |
| functional art | 6 | un-set mechanics | - |
| gains forestwalk | 6 | gains landwalk | - |
| gains shadow | 6 | evasion | - |
| gamble | 6 | tutor, red effect | - |
| gives cycling | 6 | - | - |
| gives demonstrate | 6 | - | - |
| gives flanking | 6 | - | - |
| gives mountainwalk | 6 | gives landwalk | - |
| gives plot | 6 | gives castable from exile | - |
| gives poisonous | 6 | poison mechanics | - |
| gives storm | 6 | copy-spell | - |
| greatest power matters | 6 | power matters-individual | - |
| half mana | 6 | un-set mechanics, non-integer | - |
| hate-ramp | 6 | hate | - |
| hate-typal-coward | 6 | hate-typal | - |
| hate-typal-non-choose | 6 | hate-typal | - |
| hate-typal-werewolf | 6 | hate-typal | - |
| hunger reanimation | 6 | hunger trigger | - |
| impulse-artifact-vehicle | 6 | impulse-artifact | - |
| impulse-nonland | 6 | impulse | - |
| instant loyalty ability | 6 | - | - |
| last chance | 6 | red effect, alternate loss condition | - |
| loot to exile | 6 | draw | - |
| mountainfall | 6 | landfall, synergy-mountain | - |
| null rod | 6 | hate-artifact, prevent activation, hate-activation | - |
| one-off | 6 | - | - |
| precognition | 6 | peek-library | 1 |
| pseudo-haste | 6 | - | - |
| regrowth-aura | 6 | regrowth | - |
| removes first strike | 6 | - | - |
| repeatable maps | 6 | repeatable noncreature tokens, surveil, gives pp counters, repeatable artifact tokens, repeatable pp counters | - |
| seek-instant | 6 | seek | - |
| seek-permanent | 6 | seek | - |
| seek-sorcery | 6 | seek | - |
| sideboard matters | 6 | - | - |
| squad token | 6 | token version of a card | - |
| stronger in singleton formats | 6 | - | - |
| swampfall | 6 | landfall, synergy-swamp | - |
| synergy-contraption | 6 | - | - |
| synergy-copy | 6 | - | 1 |
| synergy-nonbasic-land | 6 | - | - |
| synergy-pw-jace | 6 | synergy-planeswalker | - |
| synergy-shadow | 6 | - | - |
| synergy-town | 6 | - | 1 |
| synergy-vanilla | 6 | - | - |
| tap fuel-token | 6 | tap outlet | - |
| turn-face-down-self | 6 | face-up-face-down-effects | - |
| tutor-nonland | 6 | tutor | - |
| typal-assembly-worker | 6 | typal-creature | - |
| typal-boar | 6 | typal-creature | - |
| typal-citizen | 6 | typal-creature | - |
| typal-each | 6 | typal-creature | - |
| typal-god | 6 | typal-creature | - |
| typal-halfling | 6 | typal-creature | - |
| typal-horse | 6 | typal-creature | - |
| typal-plant | 6 | typal-creature | - |
| typal-sneaky | 6 | typal coupling, typal-ninja, typal-rogue | - |
| typal-warlock | 6 | typal-creature | 1 |
| type addition frog | 6 | type errata addition | - |
| type errata falcon | 6 | type errata specific bird | - |
| type errata ghost | 6 | type errata specific spirit | - |
| type errata specific ape | 6 | type errata specific | - |
| type removal cat rakshasa | 6 | type errata | - |
| y value | 6 | - | - |
| you matter | 6 | un-set mechanics | 3 |
| activate from exile | 5 | activated ability | - |
| affinity for domain | 5 | affinity for land type | - |
| balance | 5 | white effect | - |
| becomes changeling | 5 | type change | - |
| bible reference | 5 | - | - |
| block without creature | 5 | - | - |
| card game reference | 5 | - | - |
| card style matters | 5 | un-set mechanics | - |
| castable from library | 5 | castable from nonhand | - |
| conjure-to-exile | 5 | conjure | - |
| cost-reducer-aura | 5 | cost-reducer-enchantment | - |
| creature type phantasm | 5 | - | - |
| cunning | 5 | - | - |
| cycle-1mv-tutor | 5 | cycle | - |
| cycle-5dn-beacon | 5 | cycle | - |
| cycle-5dn-bringer | 5 | cycle | - |
| cycle-5dn-mm-attach-equipment | 5 | cycle | - |
| cycle-a25-allied-enhanced | 5 | cycle | - |
| cycle-a25-same-name-enhanced | 5 | cycle | - |
| cycle-a25-u-legend | 5 | cycle | - |
| cycle-acr-auto-equip | 5 | cycle | - |
| cycle-acr-saga | 5 | cycle | - |
| cycle-aer-aether-servo-creator | 5 | cycle, energy generator | - |
| cycle-aer-automaton | 5 | cycle | - |
| cycle-aer-expertise | 5 | cycle | - |
| cycle-aer-implement | 5 | cycle | - |
| cycle-aer-legend | 5 | cycle | - |
| cycle-afc-d20-spell | 5 | cycle | - |
| cycle-afc-endeavor | 5 | cycle | - |
| cycle-afr-chromatic-dragon | 5 | cycle | - |
| cycle-afr-color-hate | 5 | cycle | - |
| cycle-afr-creatureland | 5 | creatureland, cycle-mono-land, conditional tapland | - |
| cycle-afr-m-dragon | 5 | cycle | - |
| cycle-afr-planeswalker | 5 | cycle | - |
| cycle-afr-u-class | 5 | cycle | - |
| cycle-akh-allied-aftermath | 5 | cycle | - |
| cycle-akh-cartouche | 5 | cycle | - |
| cycle-akh-cycle-effect | 5 | cycle | - |
| cycle-akh-dual-cycling-land | 5 | cycle-dual-cycling-land | - |
| cycle-akh-enemy-aftermath | 5 | cycle | - |
| cycle-akh-god | 5 | cycle | - |
| cycle-akh-monocolor-aftermath | 5 | cycle | - |
| cycle-akh-monument | 5 | cycle | - |
| cycle-akh-trial | 5 | cycle | - |
| cycle-ala-4mnno | 5 | tutored by name, cycle | - |
| cycle-ala-allied-2-drop | 5 | cycle | - |
| cycle-ala-backward-ability | 5 | cycle | - |
| cycle-ala-battlemage | 5 | cycle | - |
| cycle-ala-c-1-drop | 5 | cycle | - |
| cycle-ala-c-tricolor | 5 | cycle | - |
| cycle-ala-c-two-color | 5 | cycle | - |
| cycle-ala-charm | 5 | charm, cycle | - |
| cycle-ala-forward-ability | 5 | cycle | - |
| cycle-ala-herald | 5 | cycle | - |
| cycle-ala-legend | 5 | cycle | - |
| cycle-ala-obelisk | 5 | cycle | - |
| cycle-ala-panorama | 5 | fetchland, cycle-colorless-land | - |
| cycle-ala-r-tricolor | 5 | cycle | - |
| cycle-ala-resounding-spell | 5 | cycle | - |
| cycle-ala-shard-ultimatum | 5 | cycle | - |
| cycle-ala-shardland | 5 | cycle-triple-tapland, shardland | - |
| cycle-ala-u-tricolor | 5 | cycle | - |
| cycle-all-enemy-hate | 5 | cycle | - |
| cycle-all-pitch-spell | 5 | pitch spell, cycle | - |
| cycle-all-r-tricolor | 5 | cycle | - |
| cycle-all-replacement-land | 5 | cycle-mono-land | - |
| cycle-all-u-two-color | 5 | cycle | - |
| cycle-apc-disciple | 5 | cycle | - |
| cycle-apc-painland | 5 | cycle-painland | - |
| cycle-apc-r-tricolor | 5 | cycle | - |
| cycle-apc-sanctuary | 5 | cycle | - |
| cycle-apc-split-card | 5 | cycle | - |
| cycle-apc-volver | 5 | cycle | - |
| cycle-arb-allied-equipment | 5 | cycle | - |
| cycle-arb-borderposts | 5 | cycle | - |
| cycle-arb-c-cascade | 5 | cycle | - |
| cycle-arb-c-enemy | 5 | cycle | - |
| cycle-arb-c-hybrid-gold | 5 | cycle | - |
| cycle-arb-crossed-shard | 5 | cycle | - |
| cycle-arb-dual-landcycler | 5 | cycle | - |
| cycle-arb-hybrid-cycler | 5 | cycle | - |
| cycle-arb-legend | 5 | cycle | - |
| cycle-arb-shard-blade | 5 | cycle | - |
| cycle-arb-sojourner | 5 | cycle | - |
| cycle-arb-u-cascade | 5 | cycle | - |
| cycle-arb-u-hybrid-gold | 5 | cycle | - |
| cycle-arb-u-tricolor | 5 | cycle | - |
| cycle-bbd-bond-land | 5 | cycle-bondland | - |
| cycle-bbd-c-two-color | 5 | cycle | - |
| cycle-bbd-friend-foe | 5 | cycle, named choice | - |
| cycle-bbd-r-two-color | 5 | cycle | - |
| cycle-bfz-blighted-land | 5 | cycle-colorless-land | - |
| cycle-bfz-color-landfall | 5 | cycle | - |
| cycle-bfz-landfall-2-2-pump | 5 | cycle | - |
| cycle-bfz-retreat | 5 | cycle, modal | - |
| cycle-bfz-tangoland | 5 | cycle-tangoland | - |
| cycle-bfz-utilityland | 5 | tapland, cycle-mono-land | - |
| cycle-blb-c-gift | 5 | cycle | - |
| cycle-blb-c-offspring | 5 | cycle | - |
| cycle-blb-m-mono-calamity | 5 | cycle | - |
| cycle-blb-r-talent | 5 | cycle | - |
| cycle-blb-season | 5 | cycle | - |
| cycle-blb-u-offspring | 5 | cycle | - |
| cycle-blb-u-talent | 5 | cycle | - |
| cycle-blb-valley-caller | 5 | cycle | - |
| cycle-blb-village | 5 | cycle-mono-land | - |
| cycle-block-bfz-creatureland | 5 | cycle-zendikar-creatureland | - |
| cycle-block-zen-monocolor-pw | 5 | cycle | - |
| cycle-bng-archetype | 5 | cycle | - |
| cycle-bng-devotion-x | 5 | cycle | - |
| cycle-bng-fated-spell | 5 | cycle | - |
| cycle-bng-inspired-token | 5 | cycle | - |
| cycle-bng-minor-god | 5 | cycle-block-ths-minor-god | - |
| cycle-bng-nyxborn | 5 | cycle | - |
| cycle-bng-tapping-aura | 5 | cycle | - |
| cycle-bng-u-bestow | 5 | cycle | - |
| cycle-bng-u-tribute | 5 | cycle | - |
| cycle-bok-baku | 5 | cycle | - |
| cycle-bok-flip-creature | 5 | cycle | - |
| cycle-bok-kami-patron | 5 | cycle, emerge-from-creature | - |
| cycle-bok-m-sac-spirit | 5 | cycle | - |
| cycle-bok-nomana-splice-arcane | 5 | cycle | - |
| cycle-bok-shoal | 5 | cycle, pitch spell | - |
| cycle-bro-basic-land-count | 5 | lands matter | - |
| cycle-bro-c-mulch | 5 | cycle | - |
| cycle-bro-m-color-artifact | 5 | cycle | - |
| cycle-c13-alt-commander | 5 | cycle, alt-commander | - |
| cycle-c13-curse | 5 | cycle | - |
| cycle-c13-face-commander | 5 | face-commander, cycle | - |
| cycle-c13-reprint-commander | 5 | cycle | - |
| cycle-c13-tempting-offer | 5 | cycle | - |
| cycle-c14-alt-commander | 5 | cycle, alt-commander | - |
| cycle-c14-historical-legend | 5 | cycle | - |
| cycle-c14-lieutenant | 5 | cycle | - |
| cycle-c14-offering | 5 | cycle | - |
| cycle-c14-planeswalker | 5 | cycle, face-commander | - |
| cycle-c15-alt-commander | 5 | cycle, alt-commander | - |
| cycle-c15-commander-reference | 5 | cycle | - |
| cycle-c15-confluence | 5 | cycle, confluence | - |
| cycle-c15-experience-commander | 5 | cycle, face-commander | - |
| cycle-c15-myriad-creature | 5 | cycle | - |
| cycle-c15-reprint-commander | 5 | cycle | - |
| cycle-c16-basic-landcycling | 5 | cycle | - |
| cycle-c16-face-commander | 5 | cycle, face-commander | - |
| cycle-c16-r-partner | 5 | cycle | - |
| cycle-c16-u-monocolor | 5 | cycle | - |
| cycle-c16-undaunted-spell | 5 | cycle, undaunted | - |
| cycle-c17-curse | 5 | cycle | - |
| cycle-c17-kindred-spell | 5 | cycle | - |
| cycle-c18-commander-storm | 5 | storm-like, recasting commander matters, cycle, copy-self | - |
| cycle-c18-lieutenant | 5 | cycle | - |
| cycle-c20-alt-commander | 5 | cycle, alt-commander | - |
| cycle-c20-bonder-partner | 5 | cycle | - |
| cycle-c20-face-commander | 5 | cycle, face-commander | - |
| cycle-c20-free-spell | 5 | cycle, potentially free | - |
| cycle-c20-impetus | 5 | cycle | - |
| cycle-c20-monster-partner | 5 | cycle | - |
| cycle-c20-planeswalker | 5 | cycle | - |
| cycle-c21-alt-commander | 5 | alt-commander, cycle | - |
| cycle-c21-college-spell | 5 | cycle | - |
| cycle-c21-face-commander | 5 | face-commander, cycle | - |
| cycle-c21-technique | 5 | cycle | - |
| cycle-chk-deceiver | 5 | cycle | - |
| cycle-chk-dragon | 5 | cycle | - |
| cycle-chk-flash-aura | 5 | cycle | - |
| cycle-chk-honden | 5 | cycle-shrine | - |
| cycle-chk-legendary-land | 5 | cycle-mono-land | - |
| cycle-chk-myojin | 5 | cycle | - |
| cycle-chk-napland | 5 | cycle-napland | - |
| cycle-chk-r-flip | 5 | cycle | - |
| cycle-chk-u-flip | 5 | cycle | - |
| cycle-chk-zubera | 5 | cycle | - |
| cycle-clb-adventurer | 5 | cycle | - |
| cycle-clb-ancient-dragon | 5 | cycle | - |
| cycle-clb-back-enemy-legend | 5 | cycle | - |
| cycle-clb-backward-ally-legend | 5 | cycle | - |
| cycle-clb-c-background | 5 | cycle | - |
| cycle-clb-c-d20 | 5 | cycle | - |
| cycle-clb-dethrone-background | 5 | cycle | - |
| cycle-clb-forward-ally-legend | 5 | cycle | - |
| cycle-clb-forward-enemy-legend | 5 | cycle | - |
| cycle-clb-gem-dragon | 5 | cycle | - |
| cycle-clb-invoker | 5 | cycle | - |
| cycle-clb-legend-spell | 5 | cycle | - |
| cycle-clb-r-background | 5 | cycle | - |
| cycle-clb-r-mono-legend | 5 | cycle | - |
| cycle-clb-thriving-gate | 5 | cycle-dual-land, tapland | - |
| cycle-clb-u-d20 | 5 | cycle | - |
| cycle-clb-u-initiative | 5 | cycle | - |
| cycle-clu-clue-equipment | 5 | - | - |
| cycle-cmb1-dual-land | 5 | cycle-playtest-dual-land | - |
| cycle-cmd-alt-commander | 5 | cycle, alt-commander | - |
| cycle-cmd-enemy-legend | 5 | cycle | - |
| cycle-cmd-face-commander | 5 | cycle, face-commander | - |
| cycle-cmd-join-forces | 5 | cycle | - |
| cycle-cmd-vow | 5 | cycle | - |
| cycle-cmm-sliver | 5 | cycle | - |
| cycle-cmr-artifact-partner | 5 | cycle | - |
| cycle-cmr-bond-land | 5 | cycle-bondland | - |
| cycle-cmr-court | 5 | cycle | - |
| cycle-cmr-familiar | 5 | cycle | - |
| cycle-cmr-m-partner | 5 | cycle | - |
| cycle-cmr-m-sorcery | 5 | cycle | - |
| cycle-cmr-r-partner | 5 | cycle | - |
| cycle-cmr-vow | 5 | cycle | - |
| cycle-cmr-will | 5 | cycle | - |
| cycle-cn2-c-draft | 5 | cycle | - |
| cycle-cn2-color-conspiracy | 5 | cycle | - |
| cycle-cn2-r-draft | 5 | cycle | - |
| cycle-cn2-r-monarch | 5 | cycle | - |
| cycle-cn2-u-draft | 5 | cycle | - |
| cycle-cns-m-monocolor | 5 | cycle | - |
| cycle-cns-pp-counter-recycler | 5 | cycle | - |
| cycle-con-backward-synergy | 5 | cycle | - |
| cycle-con-basic-landcycling | 5 | cycle | - |
| cycle-con-c-domain-spell | 5 | cycle | - |
| cycle-con-c-two-color | 5 | cycle | - |
| cycle-con-enemy-hate | 5 | cycle | - |
| cycle-con-outlander | 5 | cycle | - |
| cycle-con-r-tricolor | 5 | cycle | - |
| cycle-con-shard-ability | 5 | cycle | - |
| cycle-con-u-tricolor | 5 | cycle | - |
| cycle-con-u-two-color | 5 | cycle | - |
| cycle-csp-allied-cumulative | 5 | cycle | - |
| cycle-csp-enemy-hate | 5 | cycle | - |
| cycle-csp-kindle-spell | 5 | cycle | - |
| cycle-csp-martyr | 5 | cycle | - |
| cycle-csp-pitchspell | 5 | cycle, pitch spell | - |
| cycle-csp-r-tricolor | 5 | - | - |
| cycle-csp-snow-tapland | 5 | tapland, cycle-dual-land | - |
| cycle-csp-surging-spell | 5 | cycle | - |
| cycle-csp-u-two-color | 5 | cycle | - |
| cycle-da1-charm | 5 | cycle, charm | - |
| cycle-da1-commander-tax | 5 | cycle | - |
| cycle-da1-detective | 5 | cycle | - |
| cycle-da1-mono-eminence | 5 | cycle | - |
| cycle-da1-spell-commander | 5 | cycle | - |
| cycle-da1-taught-by | 5 | cycle | - |
| cycle-da1-unclaimed | 5 | cycle | - |
| cycle-dft-gearhulk | 5 | cycle | - |
| cycle-dft-roads | 5 | cycle-mono-land, conditional tapland | - |
| cycle-dft-surveyor | 5 | cycle | - |
| cycle-dft-tyrant | 5 | cycle | - |
| cycle-dft-verge | 5 | cycle-verge | - |
| cycle-dgm-gatekeeper | 5 | cycle | - |
| cycle-dgm-maze-elemental | 5 | cycle | - |
| cycle-dgm-r-fuse | 5 | cycle | - |
| cycle-dis-eidolon | 5 | cycle | - |
| cycle-dis-r-split | 5 | cycle | - |
| cycle-dis-u-split | 5 | cycle | - |
| cycle-dka-allied-flashback | 5 | cycle | - |
| cycle-dka-enemy-flashback | 5 | cycle-dka-draft-signpost | - |
| cycle-dka-enemy-utilityland | 5 | cycle-colorless-land | - |
| cycle-dka-increasing-flashback | 5 | cycle | - |
| cycle-dmr-r-two-color | 5 | cycle | - |
| cycle-dmr-tricolor-legend | 5 | cycle | - |
| cycle-dmu-c-back-ally-kicker | 5 | cycle | - |
| cycle-dmu-c-back-en-kicker | 5 | cycle | - |
| cycle-dmu-c-for-ally-kicker | 5 | cycle | - |
| cycle-dmu-c-for-en-kicker | 5 | cycle | - |
| cycle-dmu-cost-reduction | 5 | cycle | - |
| cycle-dmu-defiler | 5 | cycle | - |
| cycle-dmu-jumpstart | 5 | cycle | - |
| cycle-dmu-lord | 5 | cycle | - |
| cycle-dmu-r-m-saga | 5 | cycle | - |
| cycle-dmu-tricolor-legend | 5 | cycle | - |
| cycle-dmu-u-back-ally-kicker | 5 | cycle | - |
| cycle-dmu-u-back-en-kicker | 5 | cycle | - |
| cycle-dmu-u-for-ally-kicker | 5 | cycle | - |
| cycle-dmu-u-for-en-kicker | 5 | cycle | - |
| cycle-dmu-u-saga | 5 | cycle | - |
| cycle-dmu-wedge-kicker | 5 | cycle | - |
| cycle-dom-m-legend | 5 | cycle | - |
| cycle-dom-memorial | 5 | cycle-mono-land, tapland | - |
| cycle-dom-r-mmm-creature | 5 | cycle | - |
| cycle-dsk-glimmer | 5 | cycle | - |
| cycle-dsk-landcycler | 5 | cycle | - |
| cycle-dsk-leyline | 5 | leyline, cycle | - |
| cycle-dsk-m-room | 5 | cycle | - |
| cycle-dsk-overlord | 5 | cycle | - |
| cycle-dsk-u-room | 5 | cycle | - |
| cycle-dsk-verge | 5 | cycle-verge | - |
| cycle-dst-affinity-golem | 5 | cycle, potentially free | - |
| cycle-dst-echoing-spell | 5 | cycle | - |
| cycle-dst-pulse | 5 | cycle | - |
| cycle-dtk-behold-dragon | 5 | cycle | - |
| cycle-dtk-command | 5 | command, cycle | - |
| cycle-dtk-draft-signpost | 5 | draft signpost, cycle | - |
| cycle-dtk-dragonlord | 5 | cycle | - |
| cycle-dtk-enemy-hate | 5 | cycle | - |
| cycle-dtk-khan | 5 | cycle | - |
| cycle-dtk-monument | 5 | cycle | - |
| cycle-dtk-r-megamorpher | 5 | cycle | - |
| cycle-dtk-r-two-color-dragon | 5 | cycle | - |
| cycle-dtk-regent | 5 | cycle | - |
| cycle-dtk-u-monocolor-dragon | 5 | cycle | - |
| cycle-dual-cycling-land | 5 | tapland, cycle-dual-land, cycle-cycling-land | 1 |
| cycle-ecc-incarnation | 5 | cycle | - |
| cycle-ecl-c-hybrid | 5 | cycle | 1 |
| cycle-ecl-c-hybrid-changeling | 5 | cycle-ecl-c-hybrid | - |
| cycle-ecl-champion | 5 | cycle, behold | - |
| cycle-ecl-command | 5 | cycle, command | - |
| cycle-ecl-eclipsed | 5 | cycle | - |
| cycle-ecl-hybrid-signpost | 5 | cycle-ecl-draft-signpost | - |
| cycle-ecl-incarnation | 5 | cycle | - |
| cycle-ecl-r-dfc | 5 | cycle | - |
| cycle-ecl-student | 5 | cycle | - |
| cycle-ecl-typal-convoke | 5 | cycle | - |
| cycle-ecl-typal-kindred | 5 | cycle | - |
| cycle-ecl-typal-signpost | 5 | cycle-ecl-draft-signpost | - |
| cycle-ecl-u-behold | 5 | cycle, behold | - |
| cycle-ecl-u-changeling | 5 | cycle | - |
| cycle-eld-adamant-land | 5 | cycle-mono-land, conditional tapland | - |
| cycle-eld-c-adamant-spell | 5 | cycle | - |
| cycle-eld-castle | 5 | cycle-mono-land, conditional tapland | - |
| cycle-eld-color-equipment | 5 | cycle | - |
| cycle-eld-color-hate | 5 | cycle | - |
| cycle-eld-court-artifact | 5 | cycle | - |
| cycle-eld-court-leader | 5 | cycle | - |
| cycle-eld-paladin | 5 | cycle | - |
| cycle-eld-r-adventurer | 5 | cycle | - |
| cycle-eld-syr-legend | 5 | cycle | - |
| cycle-eld-u-adamant-spell | 5 | cycle | - |
| cycle-ema-tutor | 5 | cycle | - |
| cycle-emn-allied-creature | 5 | cycle | - |
| cycle-emn-draft-signpost | 5 | cycle, draft signpost | - |
| cycle-eoe-planet | 5 | cycle-mono-land, tapland | - |
| cycle-eoe-r-mono-spacecraft | 5 | cycle | - |
| cycle-eve-avatar | 5 | cycle-spirit-avatar | - |
| cycle-eve-c-hybrid-1-drop | 5 | cycle-block-shm-c-h-1-drop | - |
| cycle-eve-c-retrace | 5 | cycle | - |
| cycle-eve-demigod-aura | 5 | cycle-demigod-aura | - |
| cycle-eve-filterland | 5 | cycle-hybrid-filterland | - |
| cycle-eve-hatchling | 5 | cycle | - |
| cycle-eve-hedge-mage | 5 | cycle, lands matter | - |
| cycle-eve-hybrid-modal | 5 | cycle-hybrid-modal | - |
| cycle-eve-mimic | 5 | cycle | - |
| cycle-eve-monocolor-hybrid | 5 | cycle | - |
| cycle-eve-r-chroma | 5 | cycle | - |
| cycle-eve-skulkin | 5 | cycle | - |
| cycle-eve-u-hybrid-3-drop | 5 | cycle-block-shm-u-h-3-drop | - |
| cycle-eve-untapper | 5 | cycle | - |
| cycle-exo-keeper | 5 | cycle | - |
| cycle-exo-oath | 5 | cycle | - |
| cycle-exo-retriever | 5 | cycle | - |
| cycle-extraplanar-praetor | 5 | cycle | - |
| cycle-fdn-enemy-hate | 5 | cycle | - |
| cycle-fdn-planeswalker | 5 | cycle | - |
| cycle-fem-artifact-boon | 5 | cycle | - |
| cycle-fem-sacland | 5 | tapland, cycle-mono-land | - |
| cycle-fem-storage-land | 5 | storage land, tapland, cycle-mono-land | - |
| cycle-fin-adventure-land | 5 | cycle-mono-land, tapland | - |
| cycle-fin-crystal | 5 | cycle | - |
| cycle-fin-landcycler | 5 | cycle | - |
| cycle-fin-sidequest | 5 | cycle | - |
| cycle-fin-u-summon | 5 | cycle | - |
| cycle-force-elemental | 5 | cycle | - |
| cycle-fra-charm | 5 | cycle, charm | - |
| cycle-fra-elder-sphinx | 5 | cycle | - |
| cycle-frf-c-monocolor-manifest | 5 | cycle | - |
| cycle-frf-c-two-color | 5 | cycle | - |
| cycle-frf-clan-enhanced | 5 | cycle | - |
| cycle-frf-dragonlord | 5 | cycle | - |
| cycle-frf-hybrid-ability | 5 | cycle | - |
| cycle-frf-khan | 5 | cycle | - |
| cycle-frf-modal-etb-creature | 5 | cycle | - |
| cycle-frf-modal-spell | 5 | cycle | - |
| cycle-frf-runemark | 5 | cycle | - |
| cycle-frf-siege | 5 | cycle, siege (modal) | - |
| cycle-frf-u-4mm-dragon | 5 | cycle | - |
| cycle-fut-augur | 5 | cycle | - |
| cycle-fut-c-cycling | 5 | cycle | - |
| cycle-fut-dual-land | 5 | cycle-dual-land | - |
| cycle-fut-grandeur-legend | 5 | cycle | - |
| cycle-fut-magus | 5 | cycle | - |
| cycle-fut-pact | 5 | cycle | - |
| cycle-fut-recurring-suspend | 5 | cycle | - |
| cycle-fut-scry-reveal | 5 | cycle | - |
| cycle-fut-sliver | 5 | cycle | - |
| cycle-fut-utilityland | 5 | tapland, cycle-mono-land | - |
| cycle-fut-vanilla | 5 | cycle | - |
| cycle-gn2-mythic | 5 | cycle | - |
| cycle-gn3-mythic | 5 | - | - |
| cycle-gnt-mythic | 5 | cycle | - |
| cycle-gpt-leyline | 5 | cycle, leyline | - |
| cycle-gpt-magemark | 5 | cycle | - |
| cycle-gpt-nephilim | 5 | cycle | - |
| cycle-gpt-rusalka | 5 | cycle | - |
| cycle-grn-c-guild-ability | 5 | cycle-block-grn-c-guild-kw | - |
| cycle-grn-guild-champion | 5 | cycle-block-grn-guild-champion | - |
| cycle-grn-guildmage | 5 | cycle-block-grn-guildmage | - |
| cycle-grn-guildmaster | 5 | cycle-block-grn-guildmaster | - |
| cycle-grn-hybrid-creature | 5 | cycle-block-grn-hybrid-critter | - |
| cycle-grn-locket | 5 | cycle-block-grn-locket | - |
| cycle-grn-m-guild-spell | 5 | cycle | - |
| cycle-grn-mmnn | 5 | cycle-block-grn-mmnn | - |
| cycle-grn-r-monocolor-care | 5 | cycle | - |
| cycle-grn-r-split | 5 | cycle-block-grn-r-split | - |
| cycle-grn-u-split | 5 | cycle-block-grn-u-split | - |
| cycle-gtc-denizen | 5 | cycle | - |
| cycle-gtc-land-aura | 5 | cycle | - |
| cycle-gtc-m-monocolor | 5 | cycle | - |
| cycle-gtc-primordial | 5 | cycle | - |
| cycle-gtc-x-spell | 5 | cycle | - |
| cycle-hbg-gate | 5 | tapland, cycle-mono-land | - |
| cycle-hbg-legend | 5 | cycle | - |
| cycle-hml-triland | 5 | shardland, filterland, cycle-triland | - |
| cycle-hob-c-adventurer | 5 | cycle | - |
| cycle-hob-c-hybrid | 5 | cycle | - |
| cycle-hob-company | 5 | cycle | - |
| cycle-hob-draft-signpost | 5 | draft signpost, cycle | 1 |
| cycle-hob-typal-dual | 5 | cycle-dual-land, tapland | - |
| cycle-hob-u-hybrid | 5 | cycle-hob-draft-signpost | - |
| cycle-hou-allied-aftermath | 5 | cycle-hou-draft-signpost | - |
| cycle-hou-defeat | 5 | cycle | - |
| cycle-hou-desert-cycling-land | 5 | tapland, cycle-mono-land, cycle-cycling-land | - |
| cycle-hou-desert-painland | 5 | cycle-mono-land | - |
| cycle-hou-deserts-matter | 5 | cycle | - |
| cycle-hou-draft-signpost | 5 | cycle, draft signpost | 1 |
| cycle-hou-enemy-aftermath | 5 | cycle | - |
| cycle-hou-gods-last-act | 5 | cycle | - |
| cycle-hou-hour | 5 | cycle | - |
| cycle-hou-power-eternalizer | 5 | cycle | - |
| cycle-ice-depletion-land | 5 | cycle-dual-land, depletion land | - |
| cycle-ice-painland | 5 | cycle-painland | - |
| cycle-ice-r-tricolor | 5 | cycle | - |
| cycle-ice-r-two-color | 5 | cycle | - |
| cycle-ice-scarab | 5 | cycle | - |
| cycle-ice-talisman | 5 | cycle | - |
| cycle-ice-two-color-enemy-hate | 5 | cycle | - |
| cycle-iko-apex | 5 | cycle | - |
| cycle-iko-apex-spell | 5 | cycle | - |
| cycle-iko-c-keyword-boost | 5 | cycle | - |
| cycle-iko-c-mutate | 5 | cycle | - |
| cycle-iko-counter-cycler | 5 | cycle | - |
| cycle-iko-crystal | 5 | cycle | - |
| cycle-iko-keyword-bonder | 5 | cycle | - |
| cycle-iko-keyword-mentor | 5 | cycle | - |
| cycle-iko-keyword-monster | 5 | cycle | - |
| cycle-iko-legendary-human | 5 | cycle | - |
| cycle-iko-modal-creature | 5 | cycle | - |
| cycle-iko-mutate-hybrid | 5 | cycle | - |
| cycle-iko-mutate-x | 5 | cycle | - |
| cycle-iko-mythos | 5 | cycle | - |
| cycle-iko-r-mutate | 5 | cycle | - |
| cycle-iko-signpost-creature | 5 | cycle-iko-draft-signpost, cycle | - |
| cycle-iko-signpost-noncreature | 5 | cycle-iko-draft-signpost, cycle | - |
| cycle-iko-triome | 5 | wedgeland, tricycle-land | - |
| cycle-iko-ultimatum | 5 | cycle | - |
| cycle-iko-wedge-enchantment | 5 | cycle | - |
| cycle-inv-allied-2-2 | 5 | cycle | - |
| cycle-inv-allied-t-ability | 5 | cycle | - |
| cycle-inv-apprentice | 5 | cycle | - |
| cycle-inv-backward-ability | 5 | cycle | - |
| cycle-inv-c-ally-kicker-spell | 5 | cycle | - |
| cycle-inv-c-nonc-kicker-spell | 5 | cycle | - |
| cycle-inv-c-two-color | 5 | cycle | - |
| cycle-inv-cameo | 5 | cycle | - |
| cycle-inv-djinn | 5 | cycle | - |
| cycle-inv-domain-spell | 5 | cycle | - |
| cycle-inv-dragon-attendant | 5 | mana filter, cycle | - |
| cycle-inv-dual-tapland | 5 | tapland, cycle-dual-land | - |
| cycle-inv-emissary | 5 | cycle | - |
| cycle-inv-flash-sorcery | 5 | cycle | - |
| cycle-inv-forward-ability | 5 | cycle | - |
| cycle-inv-leech | 5 | cycle | - |
| cycle-inv-master | 5 | cycle | - |
| cycle-inv-primeval-dragon | 5 | cycle-primeval-dragon | - |
| cycle-inv-sac-enchantment | 5 | cycle | - |
| cycle-inv-sacland | 5 | tapland, shardland, cycle-triland | - |
| cycle-inv-selfbounce-aura | 5 | cycle | - |
| cycle-inv-split-card | 5 | cycle | - |
| cycle-inv-weaver | 5 | cycle | - |
| cycle-isd-allied-flashback | 5 | cycle | - |
| cycle-isd-allied-utilityland | 5 | cycle-colorless-land | - |
| cycle-isd-checkland | 5 | cycle-checkland | - |
| cycle-isd-draft-signpost | 5 | draft signpost, cycle | - |
| cycle-isd-r-flashback | 5 | cycle | - |
| cycle-j21-perpetual | 5 | cycle | - |
| cycle-j21-planeswalker | 5 | cycle | - |
| cycle-j22-hybrid-legend | 5 | cycle-jumpstart-hybrid-legend | - |
| cycle-j22-m-mono-legend | 5 | cycle | - |
| cycle-jmp-hybrid-legend | 5 | cycle-jumpstart-hybrid-legend | - |
| cycle-jmp-thriving-land | 5 | tapland, cycle-dual-land | - |
| cycle-jou-c-heroic-grower | 5 | cycle | - |
| cycle-jou-c-strive | 5 | cycle | - |
| cycle-jou-dictate | 5 | cycle | - |
| cycle-jou-draft-signpost | 5 | cycle, draft signpost | - |
| cycle-jou-font | 5 | cycle | - |
| cycle-jou-land-type-matters | 5 | cycle | - |
| cycle-jou-minor-god | 5 | cycle-block-ths-minor-god | - |
| cycle-jou-nymph | 5 | cycle | - |
| cycle-jou-u-bestow | 5 | cycle | - |
| cycle-jud-1mv-martyr | 5 | cycle | - |
| cycle-jud-incarnation | 5 | continuous effect from graveyard, cycle | - |
| cycle-jud-wish | 5 | cycle | - |
| cycle-khm-living-weapon | 5 | cycle | - |
| cycle-khm-m-foretell-spell | 5 | cycle | - |
| cycle-khm-m-god | 5 | cycle | - |
| cycle-khm-rune | 5 | cycle | - |
| cycle-khm-snow-scaler | 5 | cycle | - |
| cycle-kld-color-artifact | 5 | cycle | - |
| cycle-kld-fastland | 5 | cycle-fastland | - |
| cycle-kld-gearhulk | 5 | cycle | - |
| cycle-kld-puzzleknot | 5 | cycle, egg | - |
| cycle-kld-thriving-creature | 5 | cycle, energy generator | - |
| cycle-ktk-ascendancy | 5 | cycle-ascendancy | - |
| cycle-ktk-banner | 5 | cycle | - |
| cycle-ktk-c-3mno-creature | 5 | cycle | - |
| cycle-ktk-charm | 5 | charm, cycle | - |
| cycle-ktk-khan | 5 | cycle | - |
| cycle-ktk-r-2mno-creature | 5 | cycle | - |
| cycle-ktk-r-two-color | 5 | cycle | - |
| cycle-ktk-reveal-morpher | 5 | cycle | - |
| cycle-ktk-u-2mno-creature | 5 | cycle | - |
| cycle-ktk-wedgeland | 5 | cycle-triple-tapland, wedgeland | - |
| cycle-lci-c-craft | 5 | cycle | - |
| cycle-lci-god | 5 | cycle | - |
| cycle-lci-hidden-land | 5 | tapland, cycle-mono-land | - |
| cycle-lci-landcycler | 5 | - | - |
| cycle-lci-r-land-dfc | 5 | cycle | - |
| cycle-lci-restless-land | 5 | cycle-restless-land | - |
| cycle-lea-boon | 5 | cycle | - |
| cycle-lea-circle-protection | 5 | cycle, circle of protection | - |
| cycle-lea-lace | 5 | cycle | - |
| cycle-lea-lucky-charm | 5 | cycle | - |
| cycle-lea-moxen | 5 | cycle, moxen | - |
| cycle-lea-slush-art | 5 | cycle | - |
| cycle-lea-ward | 5 | color ward, cycle | - |
| cycle-leg-anti-landwalk-enchant | 5 | cycle | - |
| cycle-leg-banding-land | 5 | cycle-nonmana-land | - |
| cycle-leg-battery | 5 | cycle | - |
| cycle-leg-color-wash-instant | 5 | cycle | - |
| cycle-leg-elder-dragon | 5 | cycle | - |
| cycle-leg-glyph | 5 | cycle | - |
| cycle-leg-legendary-land | 5 | cycle-mono-land | - |
| cycle-lgn-c-sliver | 5 | cycle | - |
| cycle-lgn-gempalm | 5 | cycle | - |
| cycle-lgn-invoker | 5 | cycle | - |
| cycle-lgn-muse | 5 | cycle | - |
| cycle-lgn-r-sliver | 5 | cycle | - |
| cycle-lgn-u-sliver | 5 | cycle | - |
| cycle-lrw-c-changeling | 5 | changeling, cycle | - |
| cycle-lrw-clash-counter-creature | 5 | cycle | - |
| cycle-lrw-command | 5 | command, cycle | - |
| cycle-lrw-hideaway-land | 5 | tapland, cycle-mono-land | - |
| cycle-lrw-incarnation | 5 | cycle | - |
| cycle-lrw-legend | 5 | cycle | - |
| cycle-lrw-lorwyn-five | 5 | cycle | - |
| cycle-lrw-r-changeling | 5 | changeling, cycle | - |
| cycle-lrw-token-fuel | 5 | cycle | - |
| cycle-lrw-typal-cantrip | 5 | cycle | - |
| cycle-lrw-typal-dual-land | 5 | cycle-dual-land, cycle-lrw-typal-land | - |
| cycle-lrw-typal-revealer | 5 | cycle | - |
| cycle-lrw-u-changeling | 5 | changeling, cycle | - |
| cycle-lrw-vivid-land | 5 | tapland, cycle-land | - |
| cycle-ltc-alt-commander | 5 | cycle, alt-commander | - |
| cycle-ltc-face-commander | 5 | cycle, face-commander | - |
| cycle-ltr-landcycler | 5 | cycle | - |
| cycle-ltr-legendary-land | 5 | cycle-mono-land, conditional tapland | - |
| cycle-ltr-r-saga | 5 | - | - |
| cycle-ltr-u-saga | 5 | cycle | - |
| cycle-m10-checkland | 5 | cycle-checkland | - |
| cycle-m10-enemy-hate | 5 | cycle | - |
| cycle-m10-typal-lord | 5 | cycle | - |
| cycle-m11-c-pw-signature | 5 | cycle | - |
| cycle-m11-enemy-hate | 5 | cycle | - |
| cycle-m11-leyline | 5 | cycle, leyline | - |
| cycle-m11-titan | 5 | cycle | - |
| cycle-m11-typal-lord | 5 | cycle | - |
| cycle-m11-u-pw-signature | 5 | cycle | - |
| cycle-m12-c-pw-signature | 5 | cycle | - |
| cycle-m12-mage | 5 | cycle | - |
| cycle-m12-planeswalker | 5 | cycle | - |
| cycle-m12-r-pw-signature | 5 | cycle | - |
| cycle-m13-legend | 5 | cycle | - |
| cycle-m13-legend-spell | 5 | cycle | - |
| cycle-m13-planeswalker | 5 | cycle | - |
| cycle-m13-pw-hallmark | 5 | cycle | - |
| cycle-m13-pw-signature | 5 | cycle | - |
| cycle-m13-sedge-creature | 5 | cycle | - |
| cycle-m13-shandalar-ring | 5 | cycle | - |
| cycle-m14-iconic-creature | 5 | cycle | - |
| cycle-m14-magus-staff | 5 | cycle | - |
| cycle-m14-planeswalker | 5 | cycle | - |
| cycle-m14-pw-signature | 5 | cycle | - |
| cycle-m14-r-enemy-hate | 5 | cycle | - |
| cycle-m14-r-sliver | 5 | cycle | - |
| cycle-m15-legend | 5 | cycle | - |
| cycle-m15-paragon | 5 | cycle | - |
| cycle-m15-planeswalker | 5 | cycle | - |
| cycle-m15-same-color-enhancer | 5 | cycle | - |
| cycle-m15-sedge-creature | 5 | cycle | - |
| cycle-m15-sliver | 5 | cycle | - |
| cycle-m15-wall | 5 | cycle | - |
| cycle-m19-dig-spell | 5 | cycle | - |
| cycle-m19-elder-dragon | 5 | cycle | - |
| cycle-m19-monocolor-legend | 5 | cycle | - |
| cycle-m19-planeswalker | 5 | cycle | - |
| cycle-m19-precon-c | 5 | cycle | - |
| cycle-m19-precon-planeswalker | 5 | cycle | - |
| cycle-m19-precon-pw-enhanced | 5 | cycle | - |
| cycle-m19-precon-r | 5 | cycle | - |
| cycle-m19-signature-spell | 5 | cycle | - |
| cycle-m19-typal-lord | 5 | cycle | - |
| cycle-m20-cavalier | 5 | cycle | - |
| cycle-m20-color-artifact | 5 | cycle | - |
| cycle-m20-doubles | 5 | cycle | - |
| cycle-m20-enemy-hate | 5 | cycle | - |
| cycle-m20-iconic-legend | 5 | cycle | - |
| cycle-m20-leyline | 5 | cycle, leyline | - |
| cycle-m20-planeswalker | 5 | cycle | - |
| cycle-m20-precon-common | 5 | cycle | - |
| cycle-m20-precon-planeswalker | 5 | cycle | - |
| cycle-m20-precon-tutor | 5 | cycle | - |
| cycle-m20-precon-u | 5 | cycle | - |
| cycle-m20-protection-creature | 5 | cycle | - |
| cycle-m20-same-name-enhanced | 5 | cycle | - |
| cycle-m20-wedge-legend | 5 | cycle | - |
| cycle-m21-mono-teferi-legend | 5 | cycle | - |
| cycle-m21-precon-c | 5 | cycle | - |
| cycle-m21-precon-planeswalker | 5 | cycle | - |
| cycle-m21-precon-tutor | 5 | cycle | - |
| cycle-m21-precon-u | 5 | cycle | - |
| cycle-m21-r-typal | 5 | cycle | - |
| cycle-mb2-dual-land | 5 | cycle-playtest-dual-land | - |
| cycle-mbc-mono-planeswalker | 5 | - | - |
| cycle-mbs-color-artifact | 5 | cycle | - |
| cycle-mbs-sun-zenith | 5 | cycle | - |
| cycle-mh1-force | 5 | pitch spell, cycle | - |
| cycle-mh1-monocolor-legend | 5 | cycle | - |
| cycle-mh1-talisman | 5 | cycle-talisman | - |
| cycle-mh1-u-sliver | 5 | cycle | - |
| cycle-mh2-basic-landcycler | 5 | cycle | - |
| cycle-mh2-converge | 5 | - | - |
| cycle-mh2-incarnation | 5 | pitch spell, cycle | - |
| cycle-mh3-flare | 5 | cycle | - |
| cycle-mh3-flip-walker | 5 | cycle | - |
| cycle-mh3-r-mono-land | 5 | cycle-mono-land, conditional tapland | - |
| cycle-mh3-saga | 5 | cycle | - |
| cycle-mic-curse | 5 | cycle | - |
| cycle-mic-visions | 5 | cycle | - |
| cycle-mid-adversary | 5 | cycle | - |
| cycle-mid-alt-transform | 5 | cycle | - |
| cycle-mid-c-typal | 5 | cycle | - |
| cycle-mid-r-mono-werewolf | 5 | cycle | - |
| cycle-mid-slowland | 5 | cycle-slowland | - |
| cycle-mir-charm | 5 | charm, cycle | - |
| cycle-mir-diamond | 5 | cycle | - |
| cycle-mir-dragon | 5 | cycle | - |
| cycle-mir-enemy-backward-hate | 5 | cycle | - |
| cycle-mir-enemy-forward-hate | 5 | cycle | - |
| cycle-mir-enemy-fw-protection | 5 | cycle | - |
| cycle-mir-fetchland | 5 | tapland, fetchland, cycle-nonmana-land | - |
| cycle-mir-guildmage | 5 | cycle | - |
| cycle-mir-instantment | 5 | cycle | - |
| cycle-mir-monocolor-enemy-hate | 5 | cycle | - |
| cycle-mir-two-color-enemy-hate | 5 | cycle | - |
| cycle-mir-x-allied-spell | 5 | cycle | - |
| cycle-mkm-r-case | 5 | cycle | - |
| cycle-mkm-split | 5 | - | - |
| cycle-mm2-enemy-hate | 5 | cycle | - |
| cycle-mm3-r-tricolor | 5 | cycle | - |
| cycle-mm3-u-tricolor | 5 | cycle | - |
| cycle-mmq-ability-wall | 5 | cycle | - |
| cycle-mmq-alpha-spellshaper | 5 | cycle | - |
| cycle-mmq-c-spellshaper | 5 | cycle | - |
| cycle-mmq-depletion-land | 5 | tapland, cycle-mono-land, depletion land | - |
| cycle-mmq-enemy-hate | 5 | cycle | - |
| cycle-mmq-flash-aura | 5 | cycle | - |
| cycle-mmq-legate | 5 | cycle, potentially free | - |
| cycle-mmq-monger | 5 | cycle | - |
| cycle-mmq-pitchspell | 5 | cycle, pitch spell | - |
| cycle-mmq-r-spellshaper | 5 | cycle | - |
| cycle-mmq-ramos-artifact | 5 | cycle | - |
| cycle-mmq-ramosian-recruiter | 5 | cycle, tutor-mv | - |
| cycle-mmq-storage-land | 5 | storage land, tapland, cycle-mono-land | - |
| cycle-mmq-u-spellshaper | 5 | cycle | - |
| cycle-mmq-unwilling-creature | 5 | cycle | - |
| cycle-moc-alt-commander | 5 | alt-commander, cycle | - |
| cycle-moc-face-commander | 5 | face-commander, cycle | - |
| cycle-moc-path | 5 | cycle | - |
| cycle-moc-talent | 5 | cycle | - |
| cycle-mom-c-dfc | 5 | cycle, phyrexian mana ability | - |
| cycle-mom-c-landcycler | 5 | cycle | - |
| cycle-mom-corrupted-dfc-leg | 5 | cycle, phyrexian mana ability | - |
| cycle-mom-enemy-backward-dfc | 5 | cycle, phyrexian mana ability | - |
| cycle-mom-enemy-forward-dfc | 5 | cycle, phyrexian mana ability | - |
| cycle-mom-enemy-hate | 5 | cycle | - |
| cycle-mom-praetor | 5 | cycle | - |
| cycle-mom-tricolor-team-up | 5 | - | - |
| cycle-monocolor-atog | 5 | cycle | - |
| cycle-monocolor-gatewatch-oath | 5 | cycle, gatewatch oath | - |
| cycle-mor-0-0-elemental | 5 | cycle | - |
| cycle-mor-banneret | 5 | cycle | - |
| cycle-mor-c-changeling | 5 | changeling, cycle | - |
| cycle-mor-c-kinship | 5 | cycle | - |
| cycle-mor-clashback-spell | 5 | cycle | - |
| cycle-mor-typal-counter-lord | 5 | cycle | - |
| cycle-mor-typal-equipment | 5 | cycle | - |
| cycle-mor-typal-reward-spell | 5 | cycle | - |
| cycle-mor-u-evoke | 5 | cycle | - |
| cycle-mor-u-kinship | 5 | cycle | - |
| cycle-morphling | 5 | cycle | - |
| cycle-mrd-c-entwine | 5 | cycle | - |
| cycle-mrd-golem | 5 | cycle | - |
| cycle-mrd-mana-myr | 5 | cycle | - |
| cycle-mrd-r-color-artifact | 5 | cycle | - |
| cycle-mrd-replica | 5 | cycle | - |
| cycle-mrd-shard | 5 | cycle | - |
| cycle-mrd-spellbomb | 5 | cycle | - |
| cycle-mrd-talisman | 5 | cycle-talisman | - |
| cycle-mrd-tower | 5 | cycle | - |
| cycle-msc-landcycler | 5 | cycle | - |
| cycle-msc-origin | 5 | cycle | - |
| cycle-msh-c-modal-teamwork | 5 | cycle | - |
| cycle-msh-lair-dual | 5 | cycle-dual-land | - |
| cycle-msh-landcycler | 5 | cycle | - |
| cycle-msh-u-plan | 5 | cycle | - |
| cycle-ncc-alt-commander | 5 | alt-commander, cycle | - |
| cycle-ncc-confluence | 5 | confluence, cycle | - |
| cycle-ncc-enemy-multicolored | 5 | cycle | - |
| cycle-ncc-face-commander | 5 | cycle, face-commander | - |
| cycle-ncc-r-two-color-legend | 5 | cycle | - |
| cycle-ncc-tri-legend-reprint | 5 | cycle | - |
| cycle-nec-myojin | 5 | cycle | - |
| cycle-nem-c-spellshaper | 5 | cycle | - |
| cycle-nem-fading-creature | 5 | cycle | - |
| cycle-nem-free-spell | 5 | cycle, potentially free | - |
| cycle-nem-seal | 5 | cycle | - |
| cycle-neo-dragon | 5 | cycle | - |
| cycle-neo-invoke | 5 | cycle | - |
| cycle-neo-legendary-land | 5 | cycle-mono-land | - |
| cycle-neo-march | 5 | cycle, pitch spell, discount-self | - |
| cycle-nph-chancellor | 5 | cycle, start of game | - |
| cycle-nph-exarch | 5 | cycle | - |
| cycle-nph-praetor | 5 | cycle | - |
| cycle-nph-shrine | 5 | cycle | - |
| cycle-nph-souleater | 5 | cycle, phyrexian mana ability | - |
| cycle-ody-allied-atog | 5 | cycle | - |
| cycle-ody-ally-filterland | 5 | cycle-ody-filterland | - |
| cycle-ody-burst | 5 | cycle | - |
| cycle-ody-desire | 5 | cycle | - |
| cycle-ody-egg | 5 | mana filter, cycle | - |
| cycle-ody-hound | 5 | cycle | - |
| cycle-ody-land-aura | 5 | cycle | - |
| cycle-ody-lhurgoyf | 5 | cycle | - |
| cycle-ody-mmm-lord | 5 | cycle | - |
| cycle-ody-r-two-color | 5 | cycle | - |
| cycle-ody-retriever | 5 | cycle | - |
| cycle-ody-rites | 5 | cycle | - |
| cycle-ody-sacland | 5 | tapland, cycle-mono-land | - |
| cycle-ody-shrine | 5 | cycle | - |
| cycle-ody-sphere | 5 | cycle | - |
| cycle-ody-threshold-painland | 5 | cycle-mono-land | - |
| cycle-ody-wincon-enchantment | 5 | cycle | - |
| cycle-ogw-tapland | 5 | cycle-dual-tapland | - |
| cycle-one-colored-sphere | 5 | cycle-mono-land, tapland | - |
| cycle-one-dominus | 5 | cycle, phyrexian mana ability | - |
| cycle-one-skullbomb | 5 | cycle | - |
| cycle-one-sun-twilight | 5 | cycle | - |
| cycle-ons-aura-crown | 5 | cycle | - |
| cycle-ons-avatar | 5 | cycle | - |
| cycle-ons-c-cycle-effect | 5 | cycle | - |
| cycle-ons-chain-spell | 5 | cycle | - |
| cycle-ons-charm | 5 | charm, cycle | - |
| cycle-ons-courier | 5 | cycle | - |
| cycle-ons-cycling-matters | 5 | cycle | - |
| cycle-ons-fetchland | 5 | cycle-fetchland | - |
| cycle-ons-m-cycling-land | 5 | tapland, cycle-mono-land, cycle-cycling-land | - |
| cycle-ons-pit-fighter | 5 | cycle | - |
| cycle-ons-u-cycle-effect | 5 | cycle | - |
| cycle-ons-word | 5 | cycle | - |
| cycle-ori-flip-walker | 5 | cycle | - |
| cycle-ori-mentor | 5 | cycle | - |
| cycle-ori-pivotal-moment | 5 | cycle | - |
| cycle-ori-plane-enchantment | 5 | cycle | - |
| cycle-ori-r-spell-mastery | 5 | cycle | - |
| cycle-ori-same-name-enhanced | 5 | cycle | - |
| cycle-ori-u-spell-mastery | 5 | cycle | - |
| cycle-otj-join-up | 5 | cycle | - |
| cycle-otj-r-monocolor-mount | 5 | cycle | - |
| cycle-pcy-ability-losing-creature | 5 | cycle | - |
| cycle-pcy-avatar | 5 | cycle | - |
| cycle-pcy-field-aura | 5 | cycle | - |
| cycle-pcy-legendary-spellshaper | 5 | cycle | - |
| cycle-pcy-pitchspell | 5 | cycle, pitch spell | - |
| cycle-pcy-rhystic-bonus | 5 | cycle | - |
| cycle-pcy-spellshaper-aura | 5 | cycle | - |
| cycle-pcy-wind | 5 | cycle | - |
| cycle-pip-enemy-filterland | 5 | cycle-ody-filterland | - |
| cycle-plc-alternate-reality-legend | 5 | cycle | - |
| cycle-plc-c-sliver | 5 | cycle | - |
| cycle-plc-charm | 5 | charm, cycle | - |
| cycle-plc-enemy-sliver | 5 | cycle | - |
| cycle-plc-magus | 5 | cycle | - |
| cycle-plc-primeval-dragon | 5 | cycle-primeval-dragon | - |
| cycle-plc-spellshaper | 5 | cycle | - |
| cycle-plc-suspend-x-creature | 5 | cycle | - |
| cycle-plc-tsb-colorshift | 5 | cycle | - |
| cycle-plc-u-vanishing-creature | 5 | cycle | - |
| cycle-pls-battlemage | 5 | cycle | - |
| cycle-pls-c-gating-creature | 5 | cycle, gating | - |
| cycle-pls-c-two-color | 5 | cycle | - |
| cycle-pls-cantrip | 5 | cycle | - |
| cycle-pls-familiar | 5 | cycle | - |
| cycle-pls-lair | 5 | shardland, cycle-triland | - |
| cycle-pls-primeval-charm | 5 | charm, cycle | - |
| cycle-pls-pw-enchantment | 5 | cycle | - |
| cycle-pls-r-tricolor | 5 | cycle | - |
| cycle-pls-sacland-kicker-spell | 5 | cycle | - |
| cycle-pls-u-gating-creature | 5 | cycle, gating | - |
| cycle-rav-etb-aura | 5 | cycle | - |
| cycle-rav-hunted-creature | 5 | cycle | - |
| cycle-rix-legendary-transform | 5 | cycle | - |
| cycle-rix-m-monocolor | 5 | cycle | - |
| cycle-rna-c-guild-ability | 5 | cycle-block-grn-c-guild-kw | - |
| cycle-rna-guild-champion | 5 | cycle-block-grn-guild-champion | - |
| cycle-rna-guild-color-ability | 5 | cycle | - |
| cycle-rna-guildmage | 5 | cycle-block-grn-guildmage | - |
| cycle-rna-guildmaster | 5 | cycle-block-grn-guildmaster | - |
| cycle-rna-hybrid-creature | 5 | cycle-block-grn-hybrid-critter | - |
| cycle-rna-locket | 5 | cycle-block-grn-locket | - |
| cycle-rna-m-guild-spell | 5 | cycle | - |
| cycle-rna-m-monocolor | 5 | cycle | - |
| cycle-rna-mmnn | 5 | cycle-block-grn-mmnn | - |
| cycle-rna-r-split | 5 | cycle-block-grn-r-split | - |
| cycle-rna-u-split | 5 | cycle-block-grn-u-split | - |
| cycle-roe-invoker | 5 | cycle | - |
| cycle-roe-r-leveler | 5 | cycle | - |
| cycle-rtr-land-aura | 5 | cycle | - |
| cycle-rtr-m-monocolor | 5 | cycle | - |
| cycle-rtr-uncounterable-spell | 5 | cycle | - |
| cycle-rvr-r-mono-legend | 5 | cycle | - |
| cycle-s99-vanilla-1-drop | 5 | cycle | - |
| cycle-scd-face-commander | 5 | face-commander, cycle | - |
| cycle-scg-5m-landcycler | 5 | cycle | - |
| cycle-scg-c-storm-instant | 5 | cycle | - |
| cycle-scg-decree | 5 | cycle | - |
| cycle-scg-dragon-aura | 5 | cycle | - |
| cycle-scg-warchief | 5 | cycle | - |
| cycle-shm-allied-conspire | 5 | cycle | - |
| cycle-shm-allied-scarecrow | 5 | cycle | - |
| cycle-shm-allied-selfboost | 5 | cycle | - |
| cycle-shm-avatar | 5 | cycle-spirit-avatar | - |
| cycle-shm-basic-land-count | 5 | cycle, lands matter | - |
| cycle-shm-c-hybrid-1-drop | 5 | cycle-block-shm-c-h-1-drop | - |
| cycle-shm-cohort | 5 | cycle | - |
| cycle-shm-demigod-aura | 5 | cycle-demigod-aura | - |
| cycle-shm-duo | 5 | cycle | - |
| cycle-shm-filterland | 5 | cycle-hybrid-filterland | - |
| cycle-shm-hate-enhanced-spell | 5 | cycle | - |
| cycle-shm-hideaway-creature | 5 | cycle | - |
| cycle-shm-hybrid-modal | 5 | cycle-hybrid-modal | - |
| cycle-shm-initiate | 5 | cycle | - |
| cycle-shm-mentor | 5 | cycle | - |
| cycle-shm-monocolored-conspire | 5 | cycle | - |
| cycle-shm-permanent-count | 5 | cycle | - |
| cycle-shm-r-persist | 5 | cycle | - |
| cycle-shm-reflection | 5 | cycle | - |
| cycle-shm-twobrid-spell | 5 | cycle | - |
| cycle-shm-u-hybrid-3-drop | 5 | cycle-block-shm-u-h-3-drop | - |
| cycle-shm-unblockable-enemy | 5 | cycle | - |
| cycle-shm-utilityland | 5 | tapland, cycle-mono-land | - |
| cycle-shm-wisps | 5 | cycle | - |
| cycle-shm-witch | 5 | cycle | - |
| cycle-snc-ascendancy | 5 | cycle-ascendancy | - |
| cycle-snc-c-signpost | 5 | cycle-snc-draft-signpost | - |
| cycle-snc-c-tapland | 5 | cycle-dual-land, tapland | - |
| cycle-snc-charm | 5 | cycle, charm | - |
| cycle-snc-color-hate | 5 | cycle | - |
| cycle-snc-fetchland | 5 | fetchland, cycle-nonmana-land, gainland | - |
| cycle-snc-fixer | 5 | cycle | - |
| cycle-snc-hideaway | 5 | cycle | - |
| cycle-snc-hybrid-legend | 5 | cycle | - |
| cycle-snc-initiate | 5 | cycle | - |
| cycle-snc-leader | 5 | cycle | - |
| cycle-snc-r-shard-removal | 5 | cycle | - |
| cycle-snc-r-tricolor | 5 | cycle | - |
| cycle-snc-r-two-color | 5 | cycle | - |
| cycle-snc-triland | 5 | shardland, tricycle-land | - |
| cycle-snc-u-legend | 5 | cycle | - |
| cycle-snc-u-mno-henchman | 5 | cycle | - |
| cycle-snc-u-signpost-creature | 5 | cycle-snc-draft-signpost | - |
| cycle-snc-u-signpost-nonc | 5 | cycle-snc-draft-signpost | - |
| cycle-soc-alt-commander | 5 | cycle, alt-commander | - |
| cycle-soc-face-commander | 5 | cycle, face-commander | - |
| cycle-soc-guest-lecturer | 5 | cycle | - |
| cycle-soc-octoland | 5 | cycle-dual-land, conditional tapland | - |
| cycle-soc-two-color-prepare | 5 | cycle | - |
| cycle-soi-c-typal-boost | 5 | cycle | - |
| cycle-soi-crazed-creature | 5 | cycle | - |
| cycle-soi-r-tdfc | 5 | cycle | - |
| cycle-soi-r-two-color | 5 | cycle | - |
| cycle-soi-reveal-land | 5 | cycle-reveal-land | - |
| cycle-soi-tapland | 5 | cycle-dual-tapland | - |
| cycle-soi-typal-lord | 5 | cycle | - |
| cycle-soi-vessel | 5 | cycle | - |
| cycle-sok-epic-sorcery | 5 | cycle | - |
| cycle-sok-flip-ascendant | 5 | cycle | - |
| cycle-sok-ghostlit-kami | 5 | cycle | - |
| cycle-sok-legendary-kirin | 5 | cycle | - |
| cycle-sok-maro-creature | 5 | cycle | - |
| cycle-sok-maro-spell | 5 | cycle | - |
| cycle-sok-onna | 5 | cycle | - |
| cycle-sok-shinen | 5 | cycle | - |
| cycle-sok-upkeep-rescue | 5 | cycle | - |
| cycle-som-1mv-combat-trick | 5 | cycle | - |
| cycle-som-c-metalcraft | 5 | cycle | - |
| cycle-som-color-artifact | 5 | cycle | - |
| cycle-som-fastland | 5 | cycle-fastland | - |
| cycle-som-replica | 5 | cycle | - |
| cycle-som-smith | 5 | cycle | - |
| cycle-som-spellbomb | 5 | cycle | - |
| cycle-som-trigon | 5 | cycle | - |
| cycle-som-vanilla-creature | 5 | cycle | - |
| cycle-sorcery-magus | 5 | cycle | - |
| cycle-sos-a{a/b}b | 5 | cycle | - |
| cycle-sos-charm | 5 | cycle, charm | - |
| cycle-sos-dragon | 5 | cycle | - |
| cycle-sos-emeritus | 5 | cycle | - |
| cycle-sos-lesson | 5 | cycle | - |
| cycle-sos-mascot | 5 | cycle | - |
| cycle-sos-mono-u-legend | 5 | cycle | - |
| cycle-sos-r-2c-legend | 5 | cycle | - |
| cycle-sos-student | 5 | cycle | - |
| cycle-sos-surveil-dual | 5 | cycle-dual-land, tapland | - |
| cycle-spe-c-creature | 5 | cycle | - |
| cycle-spe-face-legend | 5 | cycle | - |
| cycle-spe-u-legend | 5 | cycle | - |
| cycle-spm-c-hybrid | 5 | cycle | - |
| cycle-spm-color-coded-artifact | 5 | cycle | - |
| cycle-spm-r-hybrid | 5 | cycle | - |
| cycle-spm-saga | 5 | cycle | - |
| cycle-spm-surveil-dual | 5 | cycle-dual-land, tapland | - |
| cycle-spm-tmdfc | 5 | cycle | - |
| cycle-spm-u-hybrid | 5 | cycle | - |
| cycle-sth-allied-sliver | 5 | cycle | - |
| cycle-sth-licid | 5 | cycle | - |
| cycle-sth-wall | 5 | cycle | - |
| cycle-stx-a{a/b}b | 5 | cycle, cycle-stx-draft-signpost | - |
| cycle-stx-apprentice | 5 | cycle-stx-draft-signpost | - |
| cycle-stx-c-2c-creature | 5 | cycle | - |
| cycle-stx-c-2c-noncreature | 5 | cycle | - |
| cycle-stx-c-hybrid-spell | 5 | cycle | - |
| cycle-stx-campus | 5 | tapland, cycle-dual-land | - |
| cycle-stx-command | 5 | command, cycle | - |
| cycle-stx-dean | 5 | cycle | - |
| cycle-stx-double-keyword | 5 | cycle | - |
| cycle-stx-dragon-founder | 5 | cycle | - |
| cycle-stx-hhhh | 5 | cycle | - |
| cycle-stx-m-college-spell | 5 | cycle | - |
| cycle-stx-m-mdfc | 5 | cycle | - |
| cycle-stx-mastery | 5 | cycle | - |
| cycle-stx-pledgemage | 5 | cycle | - |
| cycle-stx-r-learner | 5 | cycle | - |
| cycle-stx-r-lesson | 5 | cycle | - |
| cycle-stx-r-mdfc | 5 | cycle | - |
| cycle-stx-reveal-land | 5 | cycle-reveal-land | - |
| cycle-stx-student | 5 | cycle, cycle-stx-draft-signpost | - |
| cycle-stx-summoning | 5 | cycle | - |
| cycle-stx-u-lesson | 5 | cycle | - |
| cycle-stx-u-mono-magecraft | 5 | cycle | - |
| cycle-sword-ally-color | 5 | sword of x and y, cycle | - |
| cycle-sword-enemy-color | 5 | sword of x and y, cycle | - |
| cycle-tangoland | 5 | cycle-dual-land, conditional tapland | 1 |
| cycle-tbng-inspired-token | 5 | cycle | - |
| cycle-tdc-alt-commander | 5 | cycle, alt-commander | - |
| cycle-tdc-face-commander | 5 | face-commander, cycle | - |
| cycle-tdc-will | 5 | - | - |
| cycle-tdm-c-behold | 5 | cycle, behold | - |
| cycle-tdm-c-omen | 5 | cycle | - |
| cycle-tdm-c-twobrid | 5 | cycle | - |
| cycle-tdm-devotee | 5 | cycle | - |
| cycle-tdm-dragonstorm | 5 | cycle | - |
| cycle-tdm-khan | 5 | cycle | - |
| cycle-tdm-m-clan-spell | 5 | cycle | - |
| cycle-tdm-monument | 5 | cycle | - |
| cycle-tdm-r-dragon | 5 | cycle | - |
| cycle-tdm-saga | 5 | cycle | - |
| cycle-tdm-siege | 5 | cycle, siege (modal) | - |
| cycle-tdm-spirit-dragon | 5 | cycle | - |
| cycle-tdm-u-omen | 5 | cycle | - |
| cycle-tdm-u-twobrid | 5 | cycle | - |
| cycle-tdm-u-wedge-dragon | 5 | cycle | - |
| cycle-tdm-u-wedge-nondragon | 5 | cycle | - |
| cycle-tdm-utility-land | 5 | cycle-mono-land, conditional tapland | - |
| cycle-thb-c-removal-aura | 5 | cycle | - |
| cycle-thb-demigod | 5 | cycle | - |
| cycle-thb-intervention | 5 | cycle | - |
| cycle-thb-monocolor-god | 5 | cycle | - |
| cycle-thb-nymph | 5 | cycle | - |
| cycle-thb-nyxborn | 5 | cycle | - |
| cycle-thb-omen | 5 | cycle | - |
| cycle-thb-r-m-saga | 5 | cycle | - |
| cycle-thb-u-saga | 5 | cycle | - |
| cycle-ths-c-allied-ability | 5 | cycle | - |
| cycle-ths-c-enemy-ability | 5 | cycle | - |
| cycle-ths-cantrip-aura | 5 | cycle | - |
| cycle-ths-double-tactics | 5 | cycle | - |
| cycle-ths-emissary | 5 | cycle | - |
| cycle-ths-god-weapon | 5 | cycle | - |
| cycle-ths-major-god | 5 | cycle | - |
| cycle-ths-nymph | 5 | cycle | - |
| cycle-ths-ordeal | 5 | cycle | - |
| cycle-ths-self-hate | 5 | cycle | - |
| cycle-tla-basic-count | 5 | cycle | - |
| cycle-tla-landcycler | 5 | cycle | - |
| cycle-tla-m-saga | 5 | cycle | - |
| cycle-tla-shrine | 5 | cycle-shrine | - |
| cycle-tla-utility-land | 5 | cycle-mono-land, conditional tapland, utility land | - |
| cycle-tle-bending-master | 5 | cycle | - |
| cycle-tmc-character-select | 5 | cycle | - |
| cycle-tmc-face-commander | 5 | face-commander, cycle | - |
| cycle-tmp-c-sliver | 5 | cycle | - |
| cycle-tmp-enemy-backward-hate | 5 | cycle | - |
| cycle-tmp-enemy-forward-hate | 5 | cycle | - |
| cycle-tmp-licid | 5 | cycle | - |
| cycle-tmp-medallion | 5 | cycle | - |
| cycle-tmp-napland | 5 | cycle-napland | - |
| cycle-tmp-pain-tapland | 5 | tapland, cycle-dual-land | - |
| cycle-tmp-r-two-color | 5 | cycle | - |
| cycle-tmp-u-sliver | 5 | cycle | - |
| cycle-tmp-u-two-color | 5 | cycle | - |
| cycle-tmt-class | 5 | cycle | - |
| cycle-tmt-enemy-ability | 5 | cycle | - |
| cycle-tmt-gainland | 5 | cycle-dual-land, gainland, tapland | - |
| cycle-tmt-landcycler | 5 | cycle | - |
| cycle-tmt-r-technique | 5 | cycle | - |
| cycle-tmt-signpost-legend | 5 | cycle-tmt-draft-signpost | - |
| cycle-tmt-signpost-noncreature | 5 | cycle-tmt-draft-signpost | - |
| cycle-tmt-u-equipment | 5 | cycle | - |
| cycle-tmt-u-technique | 5 | cycle | - |
| cycle-tor-c-flashback | 5 | cycle | - |
| cycle-tor-c-madness | 5 | cycle | - |
| cycle-tor-disorder-enchantment | 5 | cycle | - |
| cycle-tor-r-dreams | 5 | cycle | - |
| cycle-tor-threshold-etb | 5 | cycle | - |
| cycle-tor-u-madness | 5 | cycle | - |
| cycle-trk-landcycler | 5 | cycle | - |
| cycle-tsp-addendum | 5 | cycle | - |
| cycle-tsp-allied-sliver | 5 | cycle | - |
| cycle-tsp-flash-aura | 5 | cycle | - |
| cycle-tsp-forward-flashback | 5 | cycle | - |
| cycle-tsp-m-suspend-creature | 5 | cycle | - |
| cycle-tsp-magus | 5 | cycle | - |
| cycle-tsp-perpetual-aura | 5 | perpetual aura, cycle | - |
| cycle-tsp-r-buyback | 5 | cycle | - |
| cycle-tsp-r-morph-creature | 5 | cycle | - |
| cycle-tsp-r-sliver | 5 | cycle | - |
| cycle-tsp-r-split-second | 5 | cycle | - |
| cycle-tsp-spellshaper | 5 | cycle | - |
| cycle-tsp-storage-land | 5 | storage land, cycle-dual-land, filterland | - |
| cycle-tsp-totem | 5 | cycle | - |
| cycle-tsp-two-color-legend | 5 | cycle | - |
| cycle-tsp-u-sliver | 5 | cycle | - |
| cycle-tsp-u-split-second | 5 | cycle | - |
| cycle-tstx-mascot | 5 | cycle | - |
| cycle-uds-growing-enchantment | 5 | cycle | - |
| cycle-uds-lobotomy-spell | 5 | cycle | - |
| cycle-uds-scent | 5 | cycle | - |
| cycle-uds-seer | 5 | cycle | - |
| cycle-ugl-double-spell | 5 | other games matter, cycle | - |
| cycle-ugl-multiplayer | 5 | - | - |
| cycle-ulg-creatureland | 5 | creatureland, tapland, cycle-mono-land | - |
| cycle-ulg-perpetual-aura | 5 | perpetual aura, cycle | - |
| cycle-ulg-sleeping-enchantment | 5 | cycle | - |
| cycle-und-enemy-colored-legend | 5 | cycle | - |
| cycle-unf-c-blank | 5 | cycle | - |
| cycle-unf-c-employee | 5 | - | - |
| cycle-unf-etb-attraction | 5 | - | - |
| cycle-unf-i-spy | 5 | - | - |
| cycle-unf-myra's-marvels | 5 | cycle | - |
| cycle-unf-sticker-activation | 5 | cycle | - |
| cycle-unf-u-blank | 5 | - | - |
| cycle-unh-c-gotcha | 5 | cycle | - |
| cycle-unh-donkey | 5 | cycle | - |
| cycle-unh-minigame | 5 | cycle | - |
| cycle-unh-u-gotcha | 5 | cycle | - |
| cycle-unk-devoted | 5 | cycle | - |
| cycle-usg-embrace | 5 | cycle | - |
| cycle-usg-enemy-backward-hate | 5 | cycle-usg-enemy-hate | - |
| cycle-usg-enemy-forward-hate | 5 | cycle-usg-enemy-hate | - |
| cycle-usg-legendary-land | 5 | cycle-mono-land | - |
| cycle-usg-perpetual-aura | 5 | perpetual aura, cycle | - |
| cycle-usg-r-growing-enchant | 5 | cycle | - |
| cycle-usg-u-growing-enchant | 5 | cycle | - |
| cycle-ust-dice-host | 5 | cycle | - |
| cycle-ust-flavor-variant | 5 | unstable variant, cycle | - |
| cycle-ust-m-contraption | 5 | cycle | - |
| cycle-ust-outside-assistance | 5 | players outside game matter, cycle | - |
| cycle-ust-u-watermark-matters | 5 | cycle | - |
| cycle-vis-charm | 5 | charm, cycle | - |
| cycle-vis-enemy-backward-hate | 5 | cycle | - |
| cycle-vis-karoo-land | 5 | bounceland, cycle-mono-land | - |
| cycle-voc-soulbond | 5 | cycle | - |
| cycle-vow-c-typal-boost | 5 | cycle | - |
| cycle-vow-cemetery | 5 | cycle | - |
| cycle-vow-enemy-cleave | 5 | cycle | - |
| cycle-vow-m-tdfc | 5 | cycle | - |
| cycle-vow-slowland | 5 | cycle-slowland | - |
| cycle-vow-typal-hate | 5 | cycle | - |
| cycle-w16-r | 5 | cycle | - |
| cycle-w16-u | 5 | cycle | - |
| cycle-w17-r-creature | 5 | cycle | - |
| cycle-war-bond | 5 | cycle | - |
| cycle-war-color-artifact | 5 | cycle | - |
| cycle-war-finale | 5 | cycle | - |
| cycle-war-gatewatch | 5 | cycle | - |
| cycle-war-god | 5 | cycle | - |
| cycle-war-ravnican-legend | 5 | cycle | - |
| cycle-war-triumph | 5 | cycle | - |
| cycle-woc-court | 5 | cycle | - |
| cycle-woe-r-two-color | 5 | cycle | - |
| cycle-woe-restless-land | 5 | cycle-restless-land | - |
| cycle-woe-u-saga | 5 | cycle | - |
| cycle-woe-virtue | 5 | cycle | - |
| cycle-wth-sac-aura | 5 | cycle | - |
| cycle-wwk-allied-land-bonus | 5 | cycle | - |
| cycle-wwk-c-multikicker | 5 | cycle | - |
| cycle-wwk-creatureland | 5 | cycle-zendikar-creatureland | - |
| cycle-wwk-enemy-hate-trap | 5 | cycle | - |
| cycle-wwk-landfall-instant | 5 | cycle | - |
| cycle-wwk-utilityland | 5 | tapland, cycle-mono-land | - |
| cycle-wwk-zendikon | 5 | cycle | - |
| cycle-xln-c-explorer | 5 | cycle | - |
| cycle-xln-keeper | 5 | cycle | - |
| cycle-xln-legendary-transform | 5 | cycle | - |
| cycle-ymkm-incorporate | 5 | cycle | - |
| cycle-yotj-collector | 5 | cycle | - |
| cycle-zen-ascension | 5 | cycle | - |
| cycle-zen-c-growing-ally | 5 | cycle | - |
| cycle-zen-c-kicker | 5 | cycle | - |
| cycle-zen-expedition | 5 | cycle | - |
| cycle-zen-fetchland | 5 | cycle-fetchland | - |
| cycle-zen-landfall-self-pump | 5 | cycle | - |
| cycle-zen-namedland | 5 | tapland, cycle-mono-land | - |
| cycle-zen-quest | 5 | cycle | - |
| cycle-zen-r-ally | 5 | cycle | - |
| cycle-zen-refugeland | 5 | cycle-dual-land, gainland, tapland | - |
| cycle-zen-strong-kicker | 5 | cycle | - |
| cycle-zen-u-ally | 5 | cycle | - |
| cycle-zen-utilityland | 5 | tapland, cycle-mono-land | - |
| cycle-znr-boltland | 5 | cycle-mono-land, boltland | - |
| cycle-znr-m-mono-creature | 5 | cycle | - |
| cycle-znr-m-mono-legend | 5 | cycle | - |
| cycle-znr-r-mdfc | 5 | cycle-mono-land, tapland | - |
| cycle-znr-u-mdfc-creature | 5 | cycle-mono-land, tapland | - |
| deprecated untapped artifact | 5 | deprecated mechanics | - |
| dice reroll | 5 | synergy-dice | - |
| discard outlet-last drawn | 5 | discard outlet | - |
| discard outlet-legendary | 5 | discard outlet | - |
| dual land | 5 | - | 1 |
| exiletouch | 5 | - | - |
| expansion sweeper | 5 | deprecated mechanics, set matters | - |
| extra draft | 5 | draft matters | - |
| fire drake | 5 | - | - |
| gains intimidate | 5 | evasion | - |
| gives cumulative upkeep | 5 | - | - |
| gives double team | 5 | digital-only mechanics | - |
| gives improvise | 5 | tap fuel-artifact, cost reducer | - |
| gives player shroud | 5 | gives player ability, protection | - |
| gives rebound | 5 | gives castable from exile, cast on resolution | - |
| hate-arcane | 5 | hate | - |
| hate-deathtouch | 5 | hate | - |
| hate-spacecraft | 5 | hate | - |
| hate-suspect | 5 | hate | - |
| hate-typal-non-dragon | 5 | hate-typal | - |
| hate-typal-non-human | 5 | hate-typal | - |
| hate-typal-non-zombie | 5 | hate-typal | - |
| hate-typal-wizard | 5 | hate-typal | - |
| impulse-battle | 5 | impulse | - |
| impulse-creature-dragon | 5 | impulse-creature | - |
| impulse-creature-elf | 5 | impulse-creature | - |
| impulse-legendary | 5 | impulse | 1 |
| impulsive mill | 5 | gives castable from graveyard, card advantage | - |
| islandfall | 5 | landfall, synergy-island | - |
| leyline | 5 | start of game, potentially free | 4 |
| life doubler | 5 | - | - |
| lose unspent mana | 5 | - | - |
| no-planeswalker-type | 5 | - | - |
| nonstandard-bestow | 5 | - | - |
| old typeline | 5 | un-design | - |
| outside objects matter | 5 | un-set mechanics | - |
| player spotlight | 5 | - | - |
| regrowth-historic | 5 | synergy-historic, regrowth-artifact, regrowth-legendary, regrowth-saga | - |
| regrowth-nonland | 5 | regrowth, regrowth-creature, regrowth-artifact, regrowth-enchantment, regrowth-instant, regrowth-sorcery, regrowth-planeswalker | - |
| removal-spacecraft | 5 | removal | 4 |
| removes-mm-counters | 5 | mm counters matter, remove counters-you | 2 |
| repeatable draw | 5 | draw, repeatable card advantage | 5 |
| repeatable roles | 5 | repeatable noncreature tokens, repeatable enchantment tokens | - |
| roll d4 | 5 | dice roll | - |
| seek-artifact | 5 | seek | 1 |
| shakedown | 5 | punisher | - |
| shardland | 5 | triland | 5 |
| siege (modal) | 5 | named choice, modal | 2 |
| sneak-equipment | 5 | sneak | - |
| storage land | 5 | mana storage | 3 |
| supercycle-legendary-land | 5 | cycle-land | - |
| synergy-banding | 5 | - | - |
| synergy-chorus | 5 | - | - |
| synergy-counterspell | 5 | - | - |
| synergy-curse | 5 | - | - |
| synergy-dfc | 5 | - | - |
| synergy-disturb | 5 | - | - |
| synergy-exert | 5 | - | - |
| synergy-landwalk | 5 | - | - |
| synergy-ninjutsu | 5 | - | - |
| synergy-planet | 5 | - | - |
| synergy-power-up | 5 | - | - |
| synergy-pw-bolas | 5 | synergy-planeswalker | - |
| synergy-pw-gideon | 5 | synergy-planeswalker | - |
| synergy-pw-liliana | 5 | synergy-planeswalker | - |
| synergy-pw-tyvar | 5 | - | - |
| synergy-tutor | 5 | - | - |
| tap fuel-permanent | 5 | tap outlet | - |
| tapper-planeswalker | 5 | tapper | - |
| tutor-creature-doctor | 5 | - | - |
| tutor-creature-green | 5 | tutor-creature | - |
| typal-artificer | 5 | typal-creature | - |
| typal-berserker | 5 | typal-creature | - |
| typal-devil | 5 | typal-creature | - |
| typal-druid | 5 | typal-creature | - |
| typal-goat | 5 | typal-creature | - |
| typal-griffin | 5 | typal-creature | - |
| typal-mutant-ninja-turtle | 5 | typal coupling, typal-mutant, typal-ninja, typal-turtle | - |
| typal-nightmare | 5 | typal-creature | - |
| typal-non-wall | 5 | typal-creature | - |
| typal-ogre | 5 | typal-creature | - |
| typal-serpent | 5 | typal-creature | 1 |
| typal-turtle | 5 | typal-creature | 2 |
| typal-werewolf | 5 | typal-creature | 1 |
| typal-zubera | 5 | typal-creature | - |
| type errata egg | 5 | type errata | - |
| type errata shark | 5 | type errata | - |
| type errata specific elemental | 5 | type errata specific | - |
| type errata specific fish | 5 | type errata specific | - |
| type errata specific horse | 5 | type errata specific | - |
| unique token type | 5 | - | - |
| unusual landwalk | 5 | - | - |
| affinity for creature type | 4 | affinity | 13 |
| affinity for equipment | 4 | affinity | - |
| affinity for graveyard | 4 | affinity, cards in graveyard matter | 2 |
| bid | 4 | minigame | - |
| buttfight | 4 | removal-creature, toughness matters | - |
| collector number matters | 4 | un-set mechanics | - |
| confluence | 4 | modal | 2 |
| continuous effect from graveyard | 4 | manaless value | 1 |
| copy-noncreature | 4 | copy | - |
| cost-reducer-nonland | 4 | cost reducer | - |
| cost-reducer-planeswalker | 4 | cost reducer | - |
| cover card | 4 | helper card | - |
| cycle-40k-alt-commander | 4 | alt-commander, cycle | - |
| cycle-40k-face-commander | 4 | face-commander, cycle | - |
| cycle-40k-saga | 4 | cycle | - |
| cycle-5dn-station | 4 | cycle | - |
| cycle-afc-alt-commander | 4 | cycle, alt-commander | - |
| cycle-afc-face-commander | 4 | face-commander, cycle | - |
| cycle-apc-bloodfire-vertical | 4 | vertical-cycle | - |
| cycle-arn-djinn | 4 | cycle | - |
| cycle-arn-efreet | 4 | cycle | - |
| cycle-avr-legend-angel | 4 | cycle-innistrad-legend-angel | - |
| cycle-avr-r-miracle | 4 | cycle | - |
| cycle-avr-u-miracle | 4 | cycle | - |
| cycle-blc-alt-commander | 4 | alt-commander, cycle | - |
| cycle-blc-face-commander | 4 | face-commander, cycle | - |
| cycle-blc-talent | 4 | cycle | - |
| cycle-block-inv-counterspell | 4 | cycle | - |
| cycle-bng-enemy-ability | 4 | cycle-bng-draft-signpost | - |
| cycle-bro-mishra-vertical | 4 | vertical-cycle | - |
| cycle-bro-urza-vertical | 4 | vertical-cycle | - |
| cycle-c17-eminence-commander | 4 | cycle, face-commander | - |
| cycle-c18-planeswalker | 4 | cycle, face-commander | - |
| cycle-c18-signature-spell | 4 | cycle | - |
| cycle-c18-sub-commander | 4 | cycle | - |
| cycle-c19-face-commander | 4 | cycle, face-commander | - |
| cycle-c19-planeswalker | 4 | cycle | - |
| cycle-c19-secondary-commander | 4 | cycle | - |
| cycle-c19-signature-spell | 4 | cycle | - |
| cycle-cardinal-paladin | 4 | cycle | - |
| cycle-clb-alt-commander | 4 | cycle, alt-commander | - |
| cycle-clb-face-commander | 4 | cycle, face-commander | - |
| cycle-clb-precon-background | 4 | cycle, alt-commander | - |
| cycle-cmm-alt-commander | 4 | alt-commander, cycle | - |
| cycle-cmm-face-commander | 4 | face-commander, cycle | - |
| cycle-con-forward-synergy | 4 | cycle | - |
| cycle-dka-m-monster | 4 | cycle | - |
| cycle-dka-monster-lord | 4 | cycle-dka-draft-signpost | - |
| cycle-dsc-alt-commander | 4 | cycle, alt-commander | - |
| cycle-dsc-face-commander | 4 | cycle, face-commander | - |
| cycle-eld-brawler | 4 | cycle | - |
| cycle-elemental-servant | 4 | cycle | - |
| cycle-fic-alt-commander | 4 | alt-commander, cycle | - |
| cycle-fic-face-commander | 4 | face-commander, cycle | - |
| cycle-hob-bear-vertical | 4 | vertical-cycle | - |
| cycle-iko-u-mutate | 4 | cycle | - |
| cycle-inv-mutation | 4 | cycle | - |
| cycle-khm-pathway | 4 | cycle-pathway | - |
| cycle-lcc-alt-commander | 4 | alt-commander, cycle | - |
| cycle-lcc-face-commander | 4 | face-commander, cycle | - |
| cycle-m21-basri-vertical | 4 | vertical-cycle | - |
| cycle-m21-chandra-vertical | 4 | vertical-cycle | - |
| cycle-m21-garruk-vertical | 4 | vertical-cycle | - |
| cycle-m21-liliana-vertical | 4 | vertical-cycle | - |
| cycle-m21-teferi-vertical | 4 | vertical-cycle | - |
| cycle-m3c-alt-commander | 4 | cycle, alt-commander | - |
| cycle-m3c-face-commander | 4 | cycle, face-commander | - |
| cycle-mh3-energy-reservedlist | 4 | cycle, energy generator | - |
| cycle-mkc-alt-commander | 4 | alt-commander, cycle | - |
| cycle-mkc-face-commander | 4 | face-commander, cycle | - |
| cycle-msc-f4-spell | 4 | cycle | - |
| cycle-msc-fantastic-four | 4 | cycle-msc-face-commander | - |
| cycle-msh-fantastic-four | 4 | cycle | - |
| cycle-nightscape-vertical | 4 | vertical-cycle | - |
| cycle-otc-alt-commander | 4 | alt-commander, cycle | - |
| cycle-otc-face-commander | 4 | face-commander, cycle | - |
| cycle-pc2-legend | 4 | cycle | - |
| cycle-pip-alt-commander | 4 | alt-commander, cycle | - |
| cycle-pip-face-commander | 4 | face-commander, cycle | - |
| cycle-plc-extortion-vertical | 4 | vertical-cycle | - |
| cycle-plc-rescue-vertical | 4 | vertical-cycle | - |
| cycle-rix-forerunner | 4 | cycle | - |
| cycle-rix-immortal-sun-purpose | 4 | cycle | - |
| cycle-rix-typal-revealer | 4 | cycle | - |
| cycle-stormscape-vertical | 4 | vertical-cycle | - |
| cycle-sunscape-vertical | 4 | vertical-cycle | - |
| cycle-thornscape-vertical | 4 | vertical-cycle | - |
| cycle-thunderscape-vertical | 4 | vertical-cycle | - |
| cycle-tla-ascension | 4 | cycle | - |
| cycle-tla-bending-lesson | 4 | cycle | - |
| cycle-tla-vertical-aang | 4 | vertical-cycle | - |
| cycle-tmc-m-turtle | 4 | cycle | - |
| cycle-tmc-teamup | 4 | cycle | - |
| cycle-tmt-avatar-vertical | 4 | vertical-cycle | - |
| cycle-tmt-donatello-vertical | 4 | vertical-cycle | - |
| cycle-tmt-leonardo-vertical | 4 | vertical-cycle | - |
| cycle-tmt-michelangelo-vert | 4 | vertical-cycle | - |
| cycle-tmt-raphael-vertical | 4 | vertical-cycle | - |
| cycle-tor-possessed-creature | 4 | cycle | - |
| cycle-tor-tainted-land | 4 | cycle-dual-land | - |
| cycle-ulg-vertical-phyrexian | 4 | vertical-cycle | - |
| cycle-un-psychographics | 4 | cycle, un-design | - |
| cycle-unk-vegas | 4 | - | - |
| cycle-unspeakable | 4 | - | - |
| cycle-vis-chimera | 4 | cycle | - |
| cycle-wwk-quest | 4 | cycle | - |
| cycle-xln-m-legend | 4 | cycle | - |
| cycle-znr-expeditioner | 4 | cycle | - |
| cycle-znr-relic | 4 | cycle | - |
| deathtouch to planeswalkers | 4 | hate-planeswalker | - |
| deprecated wall restriction | 4 | deprecated mechanics | - |
| divides battlefield | 4 | - | - |
| eat food | 4 | external prop | - |
| extra draw step | 4 | phase manipulation | - |
| flagbearer | 4 | hate-target | - |
| gains infect | 4 | poison mechanics | - |
| gives casualty | 4 | copy-spell, sacrifice outlet-creature | - |
| gives encore | 4 | gives haste, copy from graveyard, per-player | - |
| gives firebending | 4 | non mana ability mana, combat ramp, attacking matters | - |
| gives foretell | 4 | gives castable from exile | - |
| gives high flying | 4 | - | - |
| gives miracle | 4 | cast on resolution | - |
| gives nimble | 4 | gives evasion, power matters | - |
| gives phasing | 4 | - | - |
| gives replicate | 4 | copy-spell | - |
| gives retrace | 4 | gives castable from graveyard | - |
| gives riot | 4 | gives haste, gives pp counters | - |
| gives split second | 4 | - | - |
| gives undying | 4 | cheat death | - |
| graveyard fuel-permanent | 4 | graveyard fuel | - |
| gunk | 4 | un-set mechanics | - |
| haste counter | 4 | keyword counter | - |
| hate-attraction | 4 | hate | - |
| hate-creatureland | 4 | hate | - |
| hate-desert | 4 | hate | - |
| hate-enchantment-creature | 4 | hate | - |
| hate-exile-cast | 4 | hate | - |
| hate-horsemanship | 4 | hate | - |
| hate-nonhand-cast | 4 | hate | - |
| hate-shuffle | 4 | hate | - |
| hate-typal-beast | 4 | hate-typal | - |
| hate-typal-demon | 4 | hate-typal | - |
| hate-typal-god | 4 | hate-typal | - |
| hate-typal-orc | 4 | hate-typal | - |
| hate-typal-share | 4 | hate-typal | - |
| hate-typal-sliver | 4 | hate-typal | - |
| impulse-creature-hero | 4 | impulse-creature | - |
| impulse-creature-human | 4 | impulse-creature | - |
| impulse-creature-warrior | 4 | impulse-creature | - |
| impulse-noncreature | 4 | impulse | - |
| liliana's pact demon | 4 | - | - |
| lockdown-permanent | 4 | lockdown | - |
| mana leak series | 4 | counterspell-soft | - |
| marvel storyline name | 4 | card names | - |
| multiclass party member | 4 | four plus creature types | - |
| non-integer | 4 | un-set mechanics | 3 |
| old mana burn clause | 4 | deprecated mechanics | - |
| prevent damage redirection | 4 | - | - |
| prevent extra turns | 4 | hate | - |
| pseudo-intimidate | 4 | evasion | - |
| regrowth-vehicle | 4 | regrowth, synergy-vehicle | - |
| removal-token | 4 | removal | - |
| removes landwalk | 4 | - | - |
| removes trample | 4 | - | - |
| repeatable gold | 4 | repeatable artifact tokens, repeatable noncreature tokens | - |
| repeatable token generator | 4 | - | 4 |
| repeated effect | 4 | - | 1 |
| rescue | 4 | bounce | 6 |
| roll d8 | 4 | dice roll | - |
| scooch dice | 4 | synergy-dice | - |
| seek-to-exile | 4 | seek-to-zone | - |
| sleeves matter | 4 | un-set mechanics | - |
| sneak-planeswalker | 4 | sneak | - |
| square stats matter | 4 | - | - |
| supercycle-mmmm-enrager | 4 | cycle | - |
| sword of x and y | 4 | - | 2 |
| synergy-clash | 4 | - | - |
| synergy-conjure | 4 | - | - |
| synergy-connive | 4 | - | - |
| synergy-exploit | 4 | - | - |
| synergy-fear | 4 | - | - |
| synergy-fight | 4 | - | - |
| synergy-library-cast | 4 | - | 1 |
| synergy-modal | 4 | - | - |
| synergy-omen | 4 | - | - |
| synergy-pw-garruk | 4 | synergy-planeswalker | - |
| synergy-self-burn | 4 | - | - |
| tappable enchantment | 4 | - | - |
| temporary counter | 4 | - | - |
| tutor-artifact-vehicle | 4 | tutor-artifact | - |
| tutor-black | 4 | tutor-color | - |
| tutor-creature-dinosaur | 4 | tutor-creature | - |
| tutor-creature-elf | 4 | tutor-creature | - |
| tutor-creature-goblin | 4 | tutor-creature | - |
| tutor-land-cave | 4 | tutor-land | - |
| typal-aurochs | 4 | typal-creature | - |
| typal-chimera | 4 | typal-creature | - |
| typal-construct | 4 | typal-creature | - |
| typal-dalek | 4 | typal-creature | - |
| typal-eldrazi-spawn | 4 | typal-creature | - |
| typal-fish | 4 | typal-creature | - |
| typal-flagbearer | 4 | typal-creature | - |
| typal-hamster | 4 | typal-creature | - |
| typal-imp | 4 | typal-creature | - |
| typal-kobold | 4 | typal-creature | - |
| typal-pegasus | 4 | typal-creature | - |
| typal-pest | 4 | typal-creature | - |
| typal-reveler | 4 | typal-creature | - |
| typal-thrull | 4 | typal-creature | - |
| typal-time-lord | 4 | typal-creature | - |
| typal-wraith | 4 | typal-creature | - |
| type errata chicken | 4 | type errata specific bird | - |
| type errata specific spirit | 4 | type errata specific | 1 |
| type errata specific wizard | 4 | type errata specific | - |
| type errata tiger | 4 | type errata specific cat | - |
| unique doubler | 4 | - | - |
| unstable killbot | 4 | unstable variant | - |
| you make the card | 4 | - | - |
| activate from command zone | 3 | activated ability | - |
| activate from stack | 3 | activated ability | - |
| affinity for devotion | 3 | affinity | - |
| age matters | 3 | you matter | - |
| alternate-cost-gain-life | 3 | - | - |
| animate battle | 3 | animate | - |
| animate instant | 3 | animate | - |
| animate sorcery | 3 | animate | - |
| any zone color change | 3 | color change | - |
| arena effect | 3 | opponent chooses, removal-fight | - |
| cost-reducer-legendary | 3 | cost reducer | 1 |
| counter fuel-time | 3 | counter fuel | - |
| counterspell-aura | 3 | counterspell | - |
| creature type bodyguard | 3 | - | - |
| creature type enchantress | 3 | - | - |
| creature type hero | 3 | type errata | - |
| creature type monster | 3 | type errata | - |
| creature type undead | 3 | - | - |
| cycle-ala-esper-capsule | 3 | cycle | - |
| cycle-ala-jund-scavenger | 3 | cycle | - |
| cycle-ala-naya-cycler | 3 | cycle | - |
| cycle-ala-naya-druid | 3 | cycle | - |
| cycle-ala-naya-soul-spell | 3 | cycle | - |
| cycle-apc-penumbra-vertical | 3 | vertical-cycle | - |
| cycle-apc-phyrexian-vertical | 3 | vertical-cycle | - |
| cycle-apc-whirlpool-vertical | 3 | vertical-cycle | - |
| cycle-arch-charm | 3 | cycle, charm | - |
| cycle-bok-glasskite-vertical | 3 | vertical-cycle | - |
| cycle-bro-meld | 3 | - | - |
| cycle-bro-tron-worker | 3 | cycle | - |
| cycle-clb-god | 3 | cycle | - |
| cycle-clb-orb-of-dragonkind | 3 | cycle | - |
| cycle-con-esper-artifact-boost | 3 | cycle | - |
| cycle-con-esper-scepter | 3 | cycle | - |
| cycle-con-wubrg-ability | 3 | cycle | - |
| cycle-csp-rimewind-vertical | 3 | vertical-cycle | - |
| cycle-dft-raceway | 3 | vertical-cycle, cycle-colorless-land | - |
| cycle-emn-escalate-borrowed | 3 | cycle | - |
| cycle-emn-escalate-collective | 3 | cycle | - |
| cycle-frf-manifest-form | 3 | cycle | - |
| cycle-fut-noncreature-morph | 3 | cycle, vertical-cycle | - |
| cycle-hou-god | 3 | cycle | - |
| cycle-hou-modal-spell | 3 | cycle | - |
| cycle-hou-torment | 3 | cycle | - |
| cycle-inr-delver | 3 | vertical-cycle | - |
| cycle-jud-gorger-vertical | 3 | vertical-cycle | - |
| cycle-kld-module | 3 | cycle | - |
| cycle-lea-red-escalate | 3 | - | - |
| cycle-lrw-typal-land | 3 | cycle-land, conditional tapland | 1 |
| cycle-lrw-velis-vel | 3 | cycle | - |
| cycle-m12-artifact-of-empires | 3 | cycle | - |
| cycle-m12-phantasmal | 3 | cycle | - |
| cycle-m19-bolas-reign | 3 | cycle | - |
| cycle-m20-chandra | 3 | vertical-cycle | - |
| cycle-m3c-lhurgoyf | 3 | - | - |
| cycle-mid-black-werewolf | 3 | vertical-cycle | - |
| cycle-mmq-flailing-creature | 3 | cycle | - |
| cycle-mmq-rishadan-pirate | 3 | cycle | - |
| cycle-msc-face-commander | 3 | face-commander, cycle | 1 |
| cycle-nem-parallax | 3 | cycle | - |
| cycle-nem-recruiter | 3 | - | - |
| cycle-ody-restock-creature | 3 | vertical-cycle | - |
| cycle-ody-thought-beast | 3 | vertical-cycle | - |
| cycle-ody-x-of-the-y | 3 | vertical-cycle | - |
| cycle-ons-symbiotic-vertical | 3 | vertical-cycle | - |
| cycle-plc-split-vertical | 3 | vertical-cycle | - |
| cycle-restock-legendary-land | 3 | cycle-colorless-land | - |
| cycle-shm-untap | 3 | cycle | - |
| cycle-soi-x-madness-sorcery | 3 | cycle | - |
| cycle-stx-treasure-spell | 3 | cycle | - |
| cycle-tor-black-dreams | 3 | vertical-cycle | - |
| cycle-tor-red-punisher | 3 | vertical-cycle | - |
| cycle-triple-one-drop | 3 | cycle | - |
| cycle-tsp-time-removal | 3 | cycle | - |
| cycle-ugl-rock-paper-scissors | 3 | cycle | - |
| cycle-unf-stickered | 3 | - | - |
| cycle-woe-boon | 3 | vertical-cycle | - |
| cycle-xln-dino-avatar | 3 | cycle | - |
| cycle-xln-sun-aspect | 3 | cycle | - |
| cycle-ylci-typal-seek | 3 | cycle | - |
| cycle-yneo-costs-2-less | 3 | - | - |
| cycle-ywoe-little-pig | 3 | - | - |
| cycle-znr-inscription | 3 | cycle | - |
| cycle-znr-multiclass-creature | 3 | vertical-cycle | - |
| damage prevention-permanent | 3 | - | - |
| deprecated legend restriction | 3 | deprecated mechanics | - |
| flavor matters | 3 | un-set mechanics | - |
| flicker-enchantment | 3 | flicker | 2 |
| fourth spell matters | 3 | - | - |
| gains islandwalk | 3 | gains landwalk | - |
| gains suspend | 3 | gains haste | - |
| gains swampwalk | 3 | gains landwalk | - |
| gains wither | 3 | - | - |
| gatefall | 3 | landfall, synergy-gate | - |
| gatewatch oath | 3 | synergy-planeswalker | 1 |
| gating | 3 | bounce-self | 2 |
| gives blitz | 3 | gives haste | - |
| gives conspire | 3 | copy-spell | - |
| gives decayed | 3 | - | - |
| gives evolve | 3 | - | - |
| gives fake flying | 3 | gives evasion | - |
| gives jump-start | 3 | gives castable from graveyard | - |
| gives mentor | 3 | - | - |
| gives outlast | 3 | gives pp counters, gives tap ability | - |
| gives provoke | 3 | - | - |
| gives scavenge | 3 | - | - |
| gives sunburst | 3 | converge | - |
| gives warp | 3 | gives castable from exile | - |
| graveyard fuel-enchantment | 3 | - | - |
| graveyard fuel-noncreature | 3 | graveyard fuel | - |
| hate-adventure | 3 | hate | - |
| hate-battle | 3 | hate | - |
| hate-color-non-share | 3 | hate | - |
| hate-infect | 3 | hate | - |
| hate-life-payment | 3 | hate | - |
| hate-mm-counter | 3 | hate | - |
| hate-nonartifact | 3 | hate | - |
| hate-protection | 3 | hate | - |
| hate-typal-goat | 3 | hate-typal | - |
| hate-typal-kavu | 3 | hate-typal | - |
| hate-typal-mercenary | 3 | hate-typal | - |
| hate-typal-non-demon | 3 | hate-typal | - |
| hate-typal-robot | 3 | hate-typal | - |
| hate-typal-skeleton | 3 | hate-typal | - |
| high five matters | 3 | un-set mechanics | - |
| impulse-creature-dwarf | 3 | impulse-creature | - |
| impulse-creature-goblin | 3 | impulse-creature | - |
| impulse-enchantment-saga | 3 | impulse-enchantment | 1 |
| impulse-historic | 3 | impulse-artifact, impulse-legendary, impulse-enchantment-saga, synergy-historic | - |
| infernal spawn family | 3 | - | - |
| ip matters | 3 | un-set mechanics | - |
| keyword errata hexproof | 3 | keyword errata | - |
| keyword errata scry | 3 | keyword errata | - |
| land kavu | 3 | - | - |
| low x matters | 3 | - | - |
| nemesis-mega-cycle | 3 | cycle | - |
| night matters | 3 | - | - |
| noncreature virtual vanilla | 3 | - | - |
| pitch spell | 3 | cheaper than mv | 8 |
| planeswalkerfall | 3 | thingfall | - |
| prepare matters | 3 | - | - |
| reanimate-noncreature | 3 | reanimate | - |
| regrowth-noncreature | 3 | regrowth | - |
| reminder text matters | 3 | un-set mechanics | - |
| removal-nonenchantment | 3 | removal, removal-artifact, removal-creature, removal-planeswalker, removal-land, removal-battle, removal-equipment, removal-vehicle, removal-spacecraft | - |
| repeatable landers | 3 | repeatable noncreature tokens, tutor-land-basic, tutor-land-to-battlefield, ramp, repeatable artifact tokens | - |
| repeatable vibranium | 3 | repeatable artifact tokens, repeatable noncreature tokens, powerstone mana | - |
| rescue-aura | 3 | rescue | - |
| restock-land | 3 | restock, recursion-land | - |
| roll d10 | 3 | dice roll | - |
| roll d12 | 3 | dice roll | - |
| seek-land-forest | 3 | seek-land | - |
| seek-to-graveyard | 3 | seek-to-zone | - |
| shadow counter | 3 | keyword counter | - |
| singleton matters | 3 | - | - |
| sneak-enchantment | 3 | sneak | - |
| snowfall | 3 | synergy-snow, thingfall | - |
| stock turn | 3 | - | - |
| stun counters matter | 3 | - | - |
| synergy-ability-sticker | 3 | synergy-sticker | - |
| synergy-boast | 3 | - | - |
| synergy-cascade | 3 | - | - |
| synergy-collect evidence | 3 | - | - |
| synergy-colorless-mana | 3 | - | - |
| synergy-convoke | 3 | - | - |
| synergy-flanking | 3 | - | - |
| synergy-leaves-creature | 3 | - | - |
| synergy-level-up | 3 | - | - |
| synergy-pw-nissa | 3 | synergy-planeswalker | - |
| synergy-renown | 3 | - | - |
| synergy-seek | 3 | - | - |
| synergy-shroud | 3 | - | - |
| synergy-sphere | 3 | - | - |
| synergy-unearth | 3 | - | - |
| theft-aura | 3 | theft | - |
| theft-mana | 3 | theft | - |
| third-spell-matters | 3 | - | - |
| toys matter | 3 | - | - |
| tutor-augment | 3 | tutor | - |
| tutor-battle | 3 | tutor | - |
| tutor-creature-colorless | 3 | tutor-creature | - |
| tutor-creature-demon | 3 | tutor-creature | - |
| tutor-creature-merfolk | 3 | tutor-creature | - |
| tutor-creature-power | 3 | tutor-creature | - |
| tutor-creature-spirit | 3 | tutor-creature | - |
| tutor-creature-toughness | 3 | tutor-creature | - |
| tutor-enchantment-shrine | 3 | tutor-enchantment | - |
| typal-advisor | 3 | typal-creature | - |
| typal-crab | 3 | typal-creature | - |
| typal-egg | 3 | typal-creature | - |
| typal-eldrazi-scion | 3 | typal-creature | - |
| typal-fractal | 3 | typal-creature | - |
| typal-gamma | 3 | typal-creature | - |
| typal-lhurgoyf | 3 | typal-creature | - |
| typal-non-spirit | 3 | typal-creature | - |
| typal-octopus | 3 | typal-creature | 1 |
| typal-phoenix | 3 | typal-creature | - |
| typal-praetor | 3 | typal-creature | - |
| typal-shapeshifter | 3 | typal-creature | - |
| typal-slug | 3 | typal-creature | - |
| typal-unicorn | 3 | typal-creature | - |
| type errata cheetah | 3 | type errata specific cat | - |
| type errata cobra | 3 | type errata specific snake | - |
| type errata ghoul | 3 | type errata specific zombie | - |
| type errata lion | 3 | type errata specific cat | - |
| type errata specific ouphe | 3 | type errata specific | - |
| type errata specific snake | 3 | type errata specific | 1 |
| type errata specific zombie | 3 | type errata specific | 1 |
| wedgeland | 3 | triland | 2 |
| affinity for enchantments | 2 | affinity, synergy-enchantment | - |
| animate token | 2 | animate | - |
| banish-spell | 2 | banish, counterspell-exile | - |
| block when tapped | 2 | - | - |
| bounceland | 2 | tapland, rescue-land | 2 |
| buttcrew | 2 | toughness matters | - |
| clone assassin | 2 | clone | - |
| conjure-battle | 2 | conjure | - |
| conjure-planeswalker | 2 | conjure | - |
| cost-reducer-historic | 2 | synergy-historic, cost-reducer-artifact, cost-reducer-legendary, cost-reducer-saga | - |
| cost-reducer-instant | 2 | cost reducer, synergy-instant | 1 |
| counter fuel-loyalty | 2 | counter fuel | - |
| counter fuel-shield | 2 | counter fuel | - |
| counters remain | 2 | counters matter | - |
| creature type lycanthrope | 2 | type errata | - |
| cross-game card | 2 | - | - |
| cycle-aer-precon-tutor | 2 | cycle | - |
| cycle-cmr-face-commander | 2 | face-commander | - |
| cycle-drc-alt-commander | 2 | alt-commander, cycle | - |
| cycle-drc-face-commander | 2 | face-commander | - |
| cycle-emn-escalate-alliance | 2 | cycle | - |
| cycle-grn-precon-tutor | 2 | cycle | - |
| cycle-infinity-stone | 2 | cycle | - |
| cycle-khc-face-commander | 2 | face-commander | - |
| cycle-young-planeswalker | 2 | cycle | - |
| cycle-znc-face-commander | 2 | face-commander | - |
| cycling-non-mana | 2 | - | - |
| emerge-from-artifact | 2 | sacrifice outlet-artifact, emerge | - |
| exchange dice roll | 2 | synergy-dice | - |
| flicker-planeswalker | 2 | flicker | 2 |
| gains annihilator | 2 | - | - |
| gains battle cry | 2 | attacking matters | - |
| gains bushido | 2 | - | - |
| gains mountainwalk | 2 | gains landwalk | - |
| gains myriad | 2 | per-player | - |
| gains prowess | 2 | synergy-noncreature | - |
| gains rampage | 2 | - | - |
| gains toxic | 2 | poison mechanics | - |
| gains vanishing | 2 | triggered ability | - |
| gives afterlife | 2 | - | - |
| gives battle cry | 2 | - | - |
| gives bloodthirst | 2 | gives pp counters | - |
| gives bushido | 2 | - | - |
| gives deathtouch noncreature | 2 | - | - |
| gives devoid | 2 | - | - |
| gives embalm | 2 | copy from graveyard | - |
| gives evoke | 2 | intervening if clause | - |
| gives exploit | 2 | - | - |
| gives mobilize | 2 | - | - |
| gives ninjutsu | 2 | - | - |
| gives offspring | 2 | - | - |
| gives player ability | 2 | - | 3 |
| gives tantrum | 2 | synergy-blocker | - |
| gives training | 2 | gives pp counters | - |
| graveyard fuel-historic | 2 | graveyard fuel-artifact, graveyard fuel-legendary, graveyard fuel-saga, graveyard fuel | - |
| graveyard fuel-legendary | 2 | graveyard fuel | 1 |
| hate-artifact-land | 2 | hate | - |
| hate-banding | 2 | hate | - |
| hate-color | 2 | hate | 10 |
| hate-double-strike | 2 | hate | - |
| hate-flashback | 2 | hate | - |
| hate-food | 2 | hate | - |
| hate-haste | 2 | hate | - |
| hate-library-cast | 2 | hate | - |
| hate-morph | 2 | face-up-face-down-effects, hate | - |
| hate-reach | 2 | hate | - |
| hate-transform | 2 | hate | - |
| hate-treasure | 2 | hate | - |
| hate-typal-angel | 2 | hate-typal | - |
| hate-typal-assassin | 2 | hate-typal | - |
| hate-typal-bird | 2 | hate-typal | - |
| hate-typal-dalek | 2 | - | - |
| hate-typal-dinosaur | 2 | hate-typal | - |
| hate-typal-djinn | 2 | hate-typal | - |
| hate-typal-efreet | 2 | hate-typal | - |
| hate-typal-eldrazi | 2 | hate-typal | - |
| hate-typal-knight | 2 | hate-typal | - |
| hate-typal-mutant | 2 | hate-typal | - |
| hate-typal-non-elemental | 2 | hate-typal | - |
| hate-typal-non-giant | 2 | hate-typal | - |
| hate-typal-non-gorgon | 2 | hate-typal | - |
| hate-typal-non-kraken | 2 | hate-typal | - |
| hate-typal-non-leviathan | 2 | hate-typal | - |
| hate-typal-non-merfolk | 2 | hate-typal | - |
| hate-typal-non-octopus | 2 | hate-typal | - |
| hate-typal-non-pirate | 2 | hate-typal | - |
| hate-typal-non-serpent | 2 | hate-typal | - |
| hate-typal-ox | 2 | - | - |
| hate-typal-rat | 2 | hate-typal | - |
| hate-typal-rebel | 2 | hate-typal | - |
| hate-typal-reflection | 2 | hate-typal | - |
| hate-typal-rogue | 2 | hate-typal | - |
| hate-typal-treefolk | 2 | hate-typal | - |
| hate-untapped | 2 | hate | - |
| hate-vigilance | 2 | hate | - |
| impulse-artifact-creature | 2 | impulse | - |
| impulse-creature-legendary | 2 | impulse-creature | - |
| impulse-creature-soldier | 2 | impulse-creature | - |
| impulse-creature-turtle | 2 | impulse-creature, typal-turtle | - |
| impulse-green | 2 | impulse-color | - |
| impulse-instant-sorcery-lesson | 2 | impulse-instant, impulse-sorcery | - |
| impulse-pw-tyvar | 2 | impulse-planeswalker | - |
| lockdown | 2 | - | 7 |
| lockdown-nonland | 2 | lockdown | - |
| lockdown-planeswalker | 2 | lockdown | - |
| mana source (type) | 2 | deprecated card types | - |
| off-turn attack | 2 | un-set mechanics | - |
| ownership change in hand | 2 | un-set mechanics | - |
| plainsfall | 2 | landfall, synergy-plains | - |
| prevent-transform | 2 | - | - |
| pseudo-legendary | 2 | - | - |
| punchcard | 2 | - | - |
| reanimate-battle | 2 | reanimate, recursion-battle | - |
| reanimate-historic | 2 | reanimate-artifact, reanimate-legendary, reanimate-saga, synergy-historic | - |
| reanimate-spacecraft | 2 | reanimate | - |
| recursion-artifact | 2 | recursion | 3 |
| regrowth-artifact-creature | 2 | regrowth | - |
| regrowth-legendary | 2 | regrowth, regrowth-planeswalker | 1 |
| regrowth-nonland-permanent | 2 | regrowth-creature, regrowth-artifact, regrowth-enchantment, regrowth-planeswalker, regrowth-battle | - |
| regrowth-spacecraft | 2 | regrowth | - |
| removes banding | 2 | - | - |
| removes protection | 2 | - | - |
| removes shadow | 2 | - | - |
| removes shroud | 2 | - | - |
| restart game | 2 | - | - |
| restock-battle | 2 | recursion-battle | - |
| restock-enchantment | 2 | restock, recursion-enchantment | - |
| roll to visit | 2 | synergy-attraction, roll d6 | - |
| seek-creature-dragon | 2 | seek-creature | - |
| seek-creature-elf | 2 | seek-creature | - |
| seek-land-basic | 2 | seek-land | - |
| seek-land-mountain | 2 | seek-land | - |
| shroud from white | 2 | pseudo-shroud, hate-white | - |
| substitute card | 2 | helper card | 1 |
| synergy-backup | 2 | - | - |
| synergy-class | 2 | - | - |
| synergy-cumulative upkeep | 2 | - | - |
| synergy-devoid | 2 | - | - |
| synergy-discover | 2 | - | - |
| synergy-doctor's companion | 2 | - | - |
| synergy-emblem | 2 | - | - |
| synergy-energy | 2 | - | - |
| synergy-forage | 2 | - | - |
| synergy-freerunning | 2 | - | - |
| synergy-horsemanship | 2 | - | - |
| synergy-hybrid | 2 | - | - |
| synergy-infect | 2 | - | - |
| synergy-investigate | 2 | - | - |
| synergy-islandwalk | 2 | - | - |
| synergy-junk | 2 | - | - |
| synergy-lander | 2 | - | - |
| synergy-life-payment | 2 | - | - |
| synergy-manifest-dread | 2 | face-up-face-down-effects | - |
| synergy-modular | 2 | - | - |
| synergy-morph | 2 | face-up-face-down-effects | - |
| synergy-multicolor-trio | 2 | synergy-multicolor | - |
| synergy-p/t-sticker | 2 | synergy-sticker | - |
| synergy-pin | 2 | - | - |
| synergy-plan | 2 | - | - |
| synergy-powerstone | 2 | - | - |
| synergy-pw-ajani | 2 | synergy-planeswalker | - |
| synergy-pw-choose | 2 | synergy-planeswalker | - |
| synergy-pw-teferi | 2 | synergy-planeswalker | - |
| synergy-pw-tezzeret | 2 | synergy-planeswalker | - |
| synergy-pw-vivien | 2 | synergy-planeswalker | - |
| synergy-pw-vraska | 2 | synergy-planeswalker | - |
| synergy-pw-yanling | 2 | synergy-planeswalker | - |
| synergy-rune | 2 | - | - |
| synergy-skulk | 2 | - | - |
| synergy-soulbond | 2 | - | - |
| synergy-teamwork | 2 | - | - |
| synergy-tuck | 2 | - | - |
| synergy-wastes | 2 | - | - |
| tap outlet | 2 | - | 6 |
| tearing | 2 | legacy | - |
| transcendental life/damage | 2 | fractional life/damage | - |
| triggers at cleanup step | 2 | triggered ability | 1 |
| tutor-artifact-creature | 2 | tutor | - |
| tutor-artifact-legendary | 2 | tutor-artifact | - |
| tutor-aura-curse | 2 | tutor-enchantment-aura | - |
| tutor-blue | 2 | tutor-color | - |
| tutor-creature-ally | 2 | tutor-creature | - |
| tutor-creature-god | 2 | - | - |
| tutor-creature-myr | 2 | tutor-creature | - |
| tutor-creature-praetor | 2 | tutor-creature | - |
| tutor-creature-sliver | 2 | tutor-creature | - |
| tutor-creature-wizard | 2 | tutor-creature | - |
| tutor-flash | 2 | tutor | - |
| tutor-green | 2 | tutor-color | - |
| tutor-land-snow | 2 | tutor-land | - |
| tutor-land-town | 2 | tutor-land | - |
| tutor-red | 2 | tutor-color | - |
| tutor-rune | 2 | - | - |
| typal-ape | 2 | typal-creature | - |
| typal-archer | 2 | typal-creature | - |
| typal-barbarian | 2 | typal-creature | - |
| typal-demigod | 2 | typal-creature | - |
| typal-elephant | 2 | typal-creature | - |
| typal-employee | 2 | typal-creature | - |
| typal-fox | 2 | typal-creature | - |
| typal-gorgon | 2 | typal-creature | - |
| typal-gremlin | 2 | typal-creature | - |
| typal-hydra | 2 | typal-creature | - |
| typal-klingon | 2 | typal-creature | - |
| typal-kraken | 2 | typal-creature | 1 |
| typal-leech | 2 | typal-creature | - |
| typal-moogle | 2 | typal-creature | - |
| typal-non-angel | 2 | typal-creature | - |
| typal-orc | 2 | typal-creature | 1 |
| typal-ox | 2 | typal-creature | - |
| typal-salamander | 2 | typal-creature | - |
| typal-scarecrow | 2 | typal-creature | - |
| typal-servo | 2 | typal-creature | - |
| typal-shark | 2 | typal-creature | - |
| typal-sphinx | 2 | typal-creature | - |
| typal-tiefling | 2 | typal-creature | - |
| typal-wurm | 2 | typal-creature | - |
| type addition rabbit | 2 | type errata addition | - |
| type errata mammoth | 2 | type errata | - |
| type errata roc | 2 | type errata specific bird | - |
| type errata specific cat | 2 | type errata specific | 3 |
| type errata specific yeti | 2 | type errata specific | - |
| type errata vulture | 2 | type errata specific bird | - |
| un-set mechanics | 2 | un-design | 36 |
| unspent mana matters | 2 | - | - |
| affinity for allies | 1 | affinity for creature type, typal-ally | - |
| affinity for birds | 1 | affinity for creature type, typal-bird | - |
| affinity for cats | 1 | affinity for creature type | - |
| affinity for caves | 1 | affinity for land type | - |
| affinity for citizens | 1 | affinity for creature type | - |
| affinity for daleks | 1 | affinity for creature type | - |
| affinity for elves | 1 | affinity for creature type, typal-elf | - |
| affinity for humans | 1 | affinity for creature type | - |
| affinity for knights | 1 | typal-knight, affinity for creature type | - |
| affinity for outlaws | 1 | affinity for creature type | - |
| affinity for phyrexians | 1 | affinity for creature type | - |
| affinity for slivers | 1 | affinity for creature type | - |
| affinity for spirits | 1 | affinity for creature type | - |
| affinity for tokens | 1 | affinity | - |
| affinity for towns | 1 | affinity for land type, synergy-town | - |
| artifact matters | 1 | - | - |
| boltland | 1 | life payment, conditional tapland | 2 |
| buttfling | 1 | toughness matters, sacrifice outlet | - |
| buttlink | 1 | toughness matters | - |
| buttsaddle | 1 | toughness matters | - |
| buttstation | 1 | toughness matters | - |
| conjure-nonland | 1 | conjure | - |
| conjure-permanent | 1 | conjure | - |
| cost-reducer-battle | 1 | cost reducer | - |
| cost-reducer-lesson | 1 | cost-reducer-instant-sorcery, synergy-lesson | - |
| cost-reducer-sorcery | 1 | cost reducer, synergy-sorcery | 1 |
| cost-reducer-vehicle | 1 | cost-reducer-artifact | - |
| counter fuel-lore | 1 | counter fuel, synergy-saga | - |
| counter fuel-pt | 1 | counter fuel | - |
| counter fuel-stun | 1 | counter fuel | - |
| counterspell-battle | 1 | counterspell | - |
| counterspell-loyalty-ability | 1 | counterspell-ability | - |
| creature type fungusaur | 1 | - | - |
| cycle-innistrad-legend-angel | 1 | cycle | 1 |
| decayed counter | 1 | keyword counter | - |
| digital replacement | 1 | - | - |
| exalted counter | 1 | keyword counter | - |
| flicker | 1 | - | 9 |
| flicker-nonenchantment | 1 | flicker | - |
| flicker-vehicle | 1 | flicker | - |
| gains cascade | 1 | - | - |
| gains dethrone | 1 | - | - |
| gains exploit | 1 | - | - |
| gains firebending | 1 | non mana ability mana, attacking matters-self, attack trigger, combat ramp | - |
| gains for mirrodin! | 1 | living weapon | - |
| gains living weapon | 1 | living weapon | - |
| gains provoke | 1 | - | - |
| gains soulshift | 1 | - | - |
| gains split second | 1 | - | - |
| gains umbra armor | 1 | - | - |
| gains undying | 1 | cheat death-self | - |
| gender matters | 1 | you matter | - |
| gives absorb | 1 | - | - |
| gives adventure | 1 | gives castable from exile | - |
| gives assist | 1 | - | - |
| gives basic landcycling | 1 | - | - |
| gives delve | 1 | - | - |
| gives dethrone | 1 | - | - |
| gives devour | 1 | - | - |
| gives disguise | 1 | face-up-face-down-effects | - |
| gives dredge | 1 | - | - |
| gives echo | 1 | - | - |
| gives emerge | 1 | - | - |
| gives epic | 1 | - | - |
| gives extort | 1 | drain life | - |
| gives fabricate | 1 | - | - |
| gives fossilize | 1 | - | - |
| gives freerunning | 1 | - | - |
| gives frenzy | 1 | - | - |
| gives harmonize | 1 | gives castable from graveyard | - |
| gives living weapon | 1 | - | - |
| gives madness | 1 | gives castable from exile, cast on resolution | - |
| gives mayhem | 1 | gives castable from graveyard | - |
| gives modular | 1 | - | - |
| gives plainswalk | 1 | gives landwalk | - |
| gives prowl | 1 | - | - |
| gives read ahead | 1 | - | - |
| gives relentless | 1 | - | - |
| gives renown | 1 | intervening if clause | - |
| gives ripple | 1 | gives castable from library | - |
| gives saddle | 1 | - | - |
| gives sneak | 1 | - | - |
| gives spectacle | 1 | life loss matters | - |
| gives super haste | 1 | - | - |
| gives thoughtweft | 1 | - | - |
| gives townwalk | 1 | gives landwalk | - |
| gives triple strike | 1 | - | - |
| gives umbra armor | 1 | - | - |
| gives undaunted | 1 | cost reducer, per-player | - |
| gives unleash | 1 | - | - |
| gives web-slinging | 1 | - | - |
| gives wither noncreature | 1 | gives mm counters | - |
| graveyard fuel-saga | 1 | graveyard fuel | 1 |
| hand size hate | 1 | hand size matters, hate | 2 |
| hate-backup | 1 | hate | - |
| hate-blood | 1 | hate | - |
| hate-clue | 1 | hate | - |
| hate-conspiracy | 1 | hate | - |
| hate-contraption | 1 | hate | - |
| hate-curse | 1 | hate | - |
| hate-dice | 1 | hate | - |
| hate-disturb | 1 | hate | - |
| hate-fear | 1 | hate | - |
| hate-flanking | 1 | hate | - |
| hate-goad | 1 | hate | - |
| hate-hybrid | 1 | hate | - |
| hate-kicker | 1 | hate | - |
| hate-lifelink | 1 | hate | - |
| hate-menace | 1 | hate | - |
| hate-planeswalker-bolas | 1 | hate | - |
| hate-planeswalker-chandra | 1 | hate | - |
| hate-planeswalker-jace | 1 | hate | - |
| hate-room | 1 | hate | - |
| hate-saga | 1 | hate | - |
| hate-scry | 1 | hate | - |
| hate-speed | 1 | hate | - |
| hate-splice | 1 | hate | - |
| hate-surveil | 1 | hate | - |
| hate-town | 1 | hate | - |
| hate-toxic | 1 | hate | - |
| hate-trap | 1 | hate | - |
| hate-typal-alien | 1 | hate-typal | - |
| hate-typal-archon | 1 | hate-typal | - |
| hate-typal-coyote | 1 | - | - |
| hate-typal-cyclops | 1 | hate-typal | - |
| hate-typal-devil | 1 | hate-typal | - |
| hate-typal-dog | 1 | hate-typal | - |
| hate-typal-eldrazi-scion | 1 | hate-typal | - |
| hate-typal-elk | 1 | - | - |
| hate-typal-giant | 1 | hate-typal | - |
| hate-typal-glimmer | 1 | hate-typal | - |
| hate-typal-gorgon | 1 | hate-typal | - |
| hate-typal-homarid | 1 | hate-typal | - |
| hate-typal-inkling | 1 | hate-typal | - |
| hate-typal-kithkin | 1 | hate-typal | - |
| hate-typal-lizard | 1 | hate-typal | - |
| hate-typal-ninja | 1 | hate-typal | - |
| hate-typal-non-assassin | 1 | hate-typal | - |
| hate-typal-non-faerie | 1 | hate-typal | - |
| hate-typal-non-god | 1 | - | - |
| hate-typal-non-rogue | 1 | hate-typal | - |
| hate-typal-non-soldier | 1 | hate-typal | - |
| hate-typal-non-vampire | 1 | hate-typal | - |
| hate-typal-non-werewolf | 1 | hate-typal | - |
| hate-typal-phyrexian | 1 | - | - |
| hate-typal-pirate | 1 | hate-typal | - |
| hate-typal-salamander | 1 | hate-typal | - |
| hate-typal-saproling | 1 | hate-typal | - |
| hate-typal-scarecrow | 1 | hate-typal | - |
| hate-typal-serf | 1 | hate-typal | - |
| hate-typal-soldier | 1 | hate-typal | - |
| hate-typal-spider | 1 | hate-typal | - |
| hate-typal-survivor | 1 | hate-typal | - |
| hate-typal-thrull | 1 | hate-typal | - |
| hate-typal-villain | 1 | hate-typal | - |
| hate-typal-warlock | 1 | hate-typal | - |
| hate-typal-warrior | 1 | - | - |
| hate-typal-wolf | 1 | hate-typal | - |
| hate-typal-yeti | 1 | hate-typal | - |
| hate-ward | 1 | hate | - |
| hate-warp | 1 | hate | - |
| hexproof soft | 1 | hate-target | 2 |
| impulse-artifact-legendary | 1 | impulse-artifact | - |
| impulse-artifact-spacecraft | 1 | impulse-artifact | - |
| impulse-black | 1 | impulse-color | - |
| impulse-blue | 1 | impulse-color | - |
| impulse-colorless | 1 | impulse | - |
| impulse-creature-ally | 1 | impulse-creature | - |
| impulse-creature-angel | 1 | impulse-creature | - |
| impulse-creature-assassin | 1 | impulse-creature | - |
| impulse-creature-demon | 1 | impulse-creature | - |
| impulse-creature-dinosaur | 1 | impulse-creature | - |
| impulse-creature-elemental | 1 | impulse-creature | - |
| impulse-creature-kavu | 1 | impulse-creature | - |
| impulse-creature-knight | 1 | impulse-creature | - |
| impulse-creature-merfolk | 1 | impulse-creature | - |
| impulse-creature-mutant | 1 | impulse-creature, typal-mutant | - |
| impulse-creature-ninja | 1 | impulse-creature, typal-ninja | - |
| impulse-creature-pirate | 1 | impulse-creature | - |
| impulse-creature-rat | 1 | impulse-creature | - |
| impulse-creature-zombie | 1 | impulse-creature | - |
| impulse-enchantment-shrine | 1 | impulse-enchantment | - |
| impulse-multicolor | 1 | impulse-color | - |
| impulse-pw-garruk | 1 | impulse-planeswalker | - |
| impulse-red | 1 | impulse-color | - |
| impulse-white | 1 | impulse-color | - |
| indefinite effect | 1 | - | 2 |
| location matters | 1 | un-set mechanics | - |
| lockdown-spacecraft | 1 | - | - |
| match points matter | 1 | - | - |
| mono-red value | 1 | - | - |
| nanni | 1 | - | - |
| protects-token | 1 | - | - |
| protects-vehicle | 1 | protection | - |
| pseudo-ante | 1 | ante matters | - |
| quick attach | 1 | - | 2 |
| reanimate-instant/sorcery | 1 | reanimate | - |
| reanimate-legendary | 1 | reanimate | 1 |
| reanimate-saga | 1 | reanimate | 1 |
| recursion-creature | 1 | recursion | 3 |
| recursion-enchantment | 1 | recursion | 3 |
| recursion-permanent | 1 | recursion | 2 |
| regrowth-arcane | 1 | regrowth | - |
| regrowth-battle | 1 | regrowth, recursion-battle | 1 |
| regrowth-food | 1 | regrowth | - |
| removes deathtouch | 1 | - | - |
| removes double strike | 1 | - | - |
| removes infect | 1 | poison mechanics | - |
| removes toxic | 1 | - | - |
| removes ward | 1 | - | - |
| rescue-nonartifact | 1 | rescue-creature, rescue-enchantment, rescue-land | - |
| restart turn | 1 | - | - |
| restock-noncreature | 1 | - | - |
| restock-nonland | 1 | restock | - |
| restock-permanent | 1 | - | - |
| roll planar die | 1 | dice roll | - |
| seek-artifact-spacecraft | 1 | seek-artifact | - |
| seek-cast | 1 | seek | - |
| seek-creature-kithkin | 1 | seek-creature | - |
| seek-creature-merfolk | 1 | seek-creature | - |
| seek-creature-pirate | 1 | seek-creature | - |
| seek-creature-rat | 1 | seek-creature | - |
| seek-creature-survivor | 1 | seek-creature | - |
| seek-creature-vampire | 1 | seek-creature | - |
| seek-enchantment | 1 | seek | 1 |
| seek-enchantment-saga | 1 | seek-enchantment | - |
| seek-land-island | 1 | seek-land | - |
| seek-land-nonbasic | 1 | seek-land | - |
| seek-land-plains | 1 | seek-land | - |
| seek-land-swamp | 1 | seek-land | - |
| seek-land-urza's | 1 | seek-land | - |
| seek-legendary | 1 | seek | - |
| seek-noncreature | 1 | seek | - |
| seek-planeswalker | 1 | seek | - |
| seek-self | 1 | seek | - |
| shockland | 1 | conditional tapland, life payment | 1 |
| shroud from black | 1 | pseudo-shroud, hate-black | - |
| shroud from blue | 1 | pseudo-shroud, hate-blue | - |
| shroud from nongreen | 1 | pseudo-shroud | - |
| shroud from red | 1 | pseudo-shroud, hate-red | - |
| sneak-artifact-creature | 1 | sneak | - |
| static-from-graveyard | 1 | - | - |
| synergy-affinity | 1 | - | - |
| synergy-airbending | 1 | - | - |
| synergy-awaken | 1 | - | - |
| synergy-banana | 1 | - | - |
| synergy-bargain | 1 | - | - |
| synergy-blitz | 1 | - | - |
| synergy-boon | 1 | - | - |
| synergy-bushido | 1 | - | - |
| synergy-case | 1 | - | - |
| synergy-changeling | 1 | - | - |
| synergy-color-non-share | 1 | - | - |
| synergy-craft | 1 | - | - |
| synergy-damage-prevention | 1 | - | - |
| synergy-dash | 1 | - | - |
| synergy-devour | 1 | - | - |
| synergy-disguise | 1 | face-up-face-down-effects | - |
| synergy-earthbending | 1 | - | - |
| synergy-echo | 1 | - | - |
| synergy-embalm | 1 | - | - |
| synergy-enlist | 1 | - | - |
| synergy-equipment-legendary | 1 | - | - |
| synergy-eternalize | 1 | - | - |
| synergy-firebending | 1 | - | - |
| synergy-gift | 1 | - | - |
| synergy-haunt | 1 | - | - |
| synergy-ingest | 1 | - | - |
| synergy-intimidate | 1 | - | - |
| synergy-jump-start | 1 | - | - |
| synergy-madness | 1 | - | - |
| synergy-manifest | 1 | face-up-face-down-effects | - |
| synergy-map | 1 | - | - |
| synergy-mentor | 1 | - | - |
| synergy-partner | 1 | - | - |
| synergy-plot | 1 | - | - |
| synergy-pw-angrath | 1 | synergy-planeswalker | - |
| synergy-pw-ashiok | 1 | synergy-planeswalker | - |
| synergy-pw-basri | 1 | synergy-planeswalker | - |
| synergy-pw-davriel | 1 | - | - |
| synergy-pw-domri | 1 | synergy-planeswalker | - |
| synergy-pw-dovin | 1 | synergy-planeswalker | - |
| synergy-pw-elspeth | 1 | - | - |
| synergy-pw-huatli | 1 | - | - |
| synergy-pw-lukka | 1 | - | - |
| synergy-pw-oko | 1 | synergy-planeswalker | - |
| synergy-pw-ral | 1 | synergy-planeswalker | - |
| synergy-pw-rowan | 1 | synergy-planeswalker | - |
| synergy-pw-sarkhan | 1 | synergy-planeswalker | - |
| synergy-pw-tamiyo | 1 | - | - |
| synergy-pw-ugin | 1 | synergy-planeswalker | - |
| synergy-pw-yanggu | 1 | synergy-planeswalker | - |
| synergy-regenerate | 1 | - | - |
| synergy-role | 1 | - | - |
| synergy-saddle | 1 | - | - |
| synergy-sneak | 1 | - | - |
| synergy-spectacle | 1 | - | - |
| synergy-start-your-engines | 1 | - | - |
| synergy-tantrum | 1 | - | - |
| synergy-type-change | 1 | - | - |
| synergy-urza's | 1 | - | - |
| synergy-villainous-choice | 1 | - | - |
| synergy-waterbending | 1 | - | - |
| synergy-wither | 1 | - | - |
| tapper-spacecraft | 1 | - | - |
| tax | 1 | - | 3 |
| theft-artifact-creature | 1 | theft | - |
| theft-commander | 1 | - | - |
| theft-spacecraft | 1 | - | - |
| triland | 1 | - | 3 |
| tutor-artifact-colored | 1 | tutor-artifact | - |
| tutor-artifact-food | 1 | tutor-artifact, synergy-food | - |
| tutor-artifact-land | 1 | tutor-land, tutor-artifact | - |
| tutor-artifact-noncreature | 1 | tutor-artifact | - |
| tutor-aura-creature | 1 | tutor-enchantment-aura | - |
| tutor-creature-assembly-worker | 1 | tutor-creature | - |
| tutor-creature-aurochs | 1 | tutor-creature | - |
| tutor-creature-bird | 1 | - | - |
| tutor-creature-construct | 1 | tutor-creature | - |
| tutor-creature-deathtouch | 1 | tutor-creature | - |
| tutor-creature-demigod | 1 | - | - |
| tutor-creature-dwarf | 1 | tutor-creature | - |
| tutor-creature-eldrazi | 1 | tutor-creature | - |
| tutor-creature-elemental | 1 | tutor-creature | - |
| tutor-creature-embalm | 1 | tutor-creature | - |
| tutor-creature-eternalize | 1 | tutor-creature | - |
| tutor-creature-faerie | 1 | tutor-creature | - |
| tutor-creature-flying | 1 | tutor-creature | - |
| tutor-creature-giant | 1 | tutor-creature | - |
| tutor-creature-halfling | 1 | tutor-creature | - |
| tutor-creature-hexproof | 1 | tutor-creature | - |
| tutor-creature-kithkin | 1 | tutor-creature | - |
| tutor-creature-minotaur | 1 | tutor-creature | - |
| tutor-creature-mount | 1 | tutor-creature | - |
| tutor-creature-nephilim | 1 | tutor-creature | - |
| tutor-creature-ninja | 1 | - | - |
| tutor-creature-noble | 1 | tutor-creature | - |
| tutor-creature-phyrexian | 1 | tutor-creature | - |
| tutor-creature-pirate | 1 | tutor-creature | - |
| tutor-creature-rat | 1 | tutor-creature | - |
| tutor-creature-reach | 1 | tutor-creature | - |
| tutor-creature-squirrel | 1 | - | - |
| tutor-creature-trample | 1 | tutor-creature | - |
| tutor-creature-treefolk | 1 | tutor-creature | - |
| tutor-creature-vampire | 1 | tutor-creature | - |
| tutor-creature-vanilla | 1 | tutor-creature | - |
| tutor-creature-zombie | 1 | tutor-creature | - |
| tutor-enchantment-plan | 1 | tutor-enchantment | - |
| tutor-enchantment-room | 1 | tutor-enchantment | - |
| tutor-enchantment-saga | 1 | tutor-enchantment | - |
| tutor-flashback | 1 | tutor | - |
| tutor-host | 1 | tutor | - |
| tutor-instant-sorcery-arcane | 1 | tutor-instant, tutor-sorcery | - |
| tutor-instant-sorcery-lesson | 1 | tutor-sorcery, tutor-instant | - |
| tutor-instant-sorcery-trap | 1 | tutor-instant, tutor-sorcery | - |
| tutor-land-specific | 1 | tutor-land | - |
| tutor-monocolored | 1 | tutor-color | - |
| tutor-multicolored | 1 | tutor-color | - |
| tutor-permanent-snow | 1 | tutor | - |
| tutor-white | 1 | tutor-color | - |
| typal-aetherborn | 1 | typal-creature | - |
| typal-alicorn | 1 | typal-creature | - |
| typal-alien | 1 | typal-creature | - |
| typal-archon | 1 | typal-creature | - |
| typal-atog | 1 | typal-creature | - |
| typal-balloon | 1 | typal-creature | - |
| typal-bard | 1 | typal-creature | - |
| typal-beeble | 1 | typal-creature | - |
| typal-bison | 1 | typal-creature | - |
| typal-blinkmoth | 1 | typal-creature | - |
| typal-brainiac | 1 | typal-creature | - |
| typal-camarid | 1 | typal-creature | - |
| typal-camel | 1 | typal-creature | - |
| typal-caribou | 1 | typal-creature | - |
| typal-centaur | 1 | typal-creature | - |
| typal-clown | 1 | typal-creature | - |
| typal-donkey | 1 | typal-creature | - |
| typal-drake | 1 | typal-creature | - |
| typal-elder-dragon | 1 | typal-creature | - |
| typal-exclusion | 1 | - | 3 |
| typal-gamer | 1 | typal-creature | - |
| typal-glimmer | 1 | - | - |
| typal-guest | 1 | typal-creature | - |
| typal-homarid | 1 | typal-creature | - |
| typal-homunculus | 1 | typal-creature | - |
| typal-human-werewolf | 1 | typal-creature | - |
| typal-jackal | 1 | typal-creature | - |
| typal-juggernaut | 1 | typal-creature | - |
| typal-killbot | 1 | typal-creature | - |
| typal-kor | 1 | typal-creature | - |
| typal-lobster | 1 | - | - |
| typal-minion | 1 | typal-creature | - |
| typal-monk | 1 | typal-creature | - |
| typal-monkey | 1 | typal-creature | - |
| typal-moonfolk | 1 | typal-creature | - |
| typal-nautilid | 1 | typal-creature | - |
| typal-nautilus | 1 | - | - |
| typal-nephilim | 1 | typal-creature | - |
| typal-nightstalker | 1 | typal-creature | - |
| typal-noble | 1 | typal-creature | - |
| typal-non-archon | 1 | typal-creature | - |
| typal-non-assassin | 1 | - | - |
| typal-non-borg | 1 | typal-exclusion | - |
| typal-non-horse | 1 | typal-creature | - |
| typal-non-kree | 1 | typal-creature | - |
| typal-non-lemur | 1 | typal-creature | - |
| typal-non-pilot | 1 | typal-creature, typal-exclusion | - |
| typal-non-villain | 1 | typal-creature | - |
| typal-non-zombie | 1 | typal-creature | - |
| typal-pentavite | 1 | typal-creature | - |
| typal-performer | 1 | typal-creature | - |
| typal-pilot | 1 | typal-creature | - |
| typal-pony | 1 | typal-creature | - |
| typal-prism | 1 | typal-creature | - |
| typal-reflection | 1 | typal-creature | - |
| typal-rhino | 1 | typal-creature | - |
| typal-rigger | 1 | typal-creature | - |
| typal-satyr | 1 | typal-creature | - |
| typal-scion | 1 | typal-creature | - |
| typal-scout | 1 | typal-creature | - |
| typal-sculpture | 1 | typal-creature | - |
| typal-seal | 1 | typal-creature | - |
| typal-shade | 1 | typal-creature | - |
| typal-snail | 1 | typal-creature | - |
| typal-spawn | 1 | typal-creature | - |
| typal-specter | 1 | typal-creature | - |
| typal-starfish | 1 | - | - |
| typal-survivor | 1 | typal-creature | - |
| typal-symbiote | 1 | typal-creature | - |
| typal-teddy-bear | 1 | typal-creature | - |
| typal-tentacle | 1 | typal-creature | - |
| typal-transformer | 1 | typal-creature | - |
| typal-trilobite | 1 | - | - |
| typal-tyranid | 1 | typal-creature | - |
| typal-whale | 1 | typal-creature | - |
| typal-worm | 1 | typal-creature | - |
| undaunted | 1 | discount-self, per-player | 1 |
| unstable secret base | 1 | unstable variant | - |
| untapper | 1 | - | 8 |
| untapper-equipment | 1 | - | - |
| untapper-planeswalker | 1 | - | - |
| wheel | 1 | draw | 4 |

## Art tags (artwork content) ? 11338 labels with taggings

Sorted by tagging count, formatted as `label (cards)`.

artist signature (9267) · digital painting (9009) · solo (8633) · loose lips (6326) · human (6229)  
female (4700) · dominaria (origin) (4382) · tail (4345) · male (3591) · tree (3409) · sword (3337) · smile (3275)  
dominaria (3150) · two figures (3132) · ravnica (3056) · wing (3022) · oil paint (2965) · right-facing (2887)  
innistrad (2818) · left-facing (2678) · no one (2588) · dutch angle (2365) · fang (2322) · fire (2265)  
cloudy sky (2196) · creation date (2057) · staff (2004) · monochromatic (1789) · black hair (1754)  
glowing eye (1721) · acrylic paint (1649) · zendikar (1591) · forest (1514) · horn (1504) · pointy ear (1479)  
three figures (1478) · arm raised (1477) · spear (1428) · water (1413) · tarkir (1399) · beard (1397)  
helmet (1354) · skull (1347) · topless (1306) · blue sky (1264) · armor (1252) · snow (1249)  
hooded figure (1246) · otaria (1227) · elf (1224) · brown hair (1216) · cloud (1209) · flying (1206)  
mountain (1204) · mirrodin (1185) · mount & rider (1170) · shield (1157) · lightning (1150)  
digital only artwork (1141) · neutral background (1140) · day (1098) · outdoor (1096) · terisiare (1055)  
smoke (1044) · dagger (1030) · hand outstretched (1029) · standing on edge (1024) · cape (1012) · pauldron (991)  
theros (988) · person of color (980) · indoor (961) · hat (959) · chain (936) · axe (924) · kamigawa (920)  
perspective from below (913) · scale humanoid (909) · mist (892) · abeir-toril (886) · spikes/spines (877)  
flower (876) · bird (873) · vambrace (857) · earring (847) · stair (838) · dual wielding (833) · group (813)  
blood (807) · english text (802) · bald (795) · hand (791) · blue glow (783) · rath (774) · windswept hair (772)  
grass (771) · night (762) · green skin (757) · abstract background (756) · blue magic (755) · sitting (754)  
blonde hair (739) · claw (739) · waterfall (739) · horse (732) · facing forward (730) · zombie (729)  
white hair (722) · moon (715) · lorwyn (710) · vampire (696) · red eye (694) · anime (692)  
tongue sticking out (680) · eldraine (679) · sunrise/sunset (673) · green glow (653) · red hair (650)  
shadowmoor (647) · jamuraa (639) · duo (633) · eyes closed (622) · tooth (619) · candle (618)  
ixalan (plane) (616) · muscular (613) · new york (605) · orb (597) · building (595) · first-person (594)  
book (581) · stars (581) · bisexual lighting (577) · new capenna (574) · window (570) · multiple arms (566)  
swamp (555) · skeleton (554) · statue (554) · bloomburrow (549) · leaf (548) · constructed archway (546)  
green magic (544) · four figures (542) · goggles (541) · cleavage (537) · banner (536) · four legs (533)  
corpse (532) · ruin (530) · belt (524) · facing away (524) · stone (522) · mask (516) · tower (515)  
barefoot (514) · boat (513) · scale bird (513) · arcavios (511) · scroll (503) · thigh (503) · braided hair (501)  
lava (501) · sun (501) · long hair (498) · rath (origin) (498) · tentacle (496) · electricity (494)  
midriff (494) · thunder junction (493) · ravnica (origin) (486) · bridge (478) · fist (472) · lantern (472)  
feather (471) · column (470) · ocean (467) · open pose (463) · knight (461) · new phyrexia (461) · earth (460)  
not canon (459) · blue background (458) · pointing (456) · glowing hand (454) · green background (452)  
ice (452) · tattoo (452) · blue eye (451) · necklace (450) · phyrexian (450) · soldier (450) · hedron (448)  
perspective from above (448) · kneeling (447) · merfolk (446) · avishkar (439) · vine (435) · backlit (428)  
bellybutton (427) · bloomburrow animalfolk (426) · gritted teeth (425) · symmetry (425) · dragon (422)  
desert (421) · explosion (420) · creature armor (419) · ponytail (418) · dark (417) · robot (417) · horror (416)  
ixalan (continent) (415) · underwater (412) · mustache (411) · nipple (400) · full moon (397) · giant (396)  
robe (394) · crystal (390) · avacyn's collar (389) · sword raised (387) · word-art-title (386) · wolf (385)  
green eye (384) · cloak (382) · rope (382) · amonkhet (379) · glove (378) · purple magic (374) · mushroom (373)  
left-handed (370) · crepuscular ray (367) · army (365) · charging (364) · hammer (364) · orange glow (364)  
elderly (362) · yellow background (360) · blue skin (358) · yellow glow (358) · watercolor (353)  
red background (351) · gray background (350) · ghirapur (346) · little guy (345) · arrow (343) · naktamun (343)  
white eye (343) · duskmourn (342) · wave (342) · cave (340) · cityscape (339) · cute (339) · red glow (339)  
crowd (338) · mirrodin (origin) (338) · glow (337) · big arm small arm (336) · ring (336) · werewolf (336)  
angel (335) · eye contact (334) · orange background (333) · orc (332) · river (332) · bent knee (331)  
glasses (328) · katana (327) · pirate (327) · skintight clothing (327) · dead tree (326)  
purple background (325) · mercadia (320) · written language (319) · snake (315) · boob plate (314)  
bow & arrow (312) · torch (312) · grin (311) · plains (310) · running (310) · face obscured (309)  
looking up (309) · web (309) · united states (308) · fish (306) · goblin (306) · cliff (305) · demon (305)  
floating rock (305) · ghirapur grand prix (305) · spiral (305) · chair (304) · construct (304)  
kami floating object (303) · light ray (302) · spirit (302) · tusk (300) · cowboy hat (298) · headdress (298)  
floating (295) · white beard (295) · purple glow (293) · sand (293) · countermagic (292) · dominaria goblin (292)  
destruction (291) · fleeing (290) · astrotorium (289) · beast (289) · kaldheim (289) · yelling (289)  
reflection (287) · strixhaven (284) · gun (283) · geist (281) · wizard (280) · circle (279) · stained glass (279)  
five figures (277) · horizon (276) · touch of nyx (276) · vial (276) · bracelet (275) · red magic (275)  
japanese exclusive art (274) · shadow (273) · greave (270) · flat perspective (266) · machine (262)  
the edge (262) · abstract (261) · loincloth (261) · phyrexian symbol (261) · white glow (261) · gear (260)  
antler (259) · boot (259) · red lips (259) · yellow eye (258) · ikoria (257) · bookshelf (255) · spire (254)  
kami (252) · silhouette (252) · spider (252) · polearm (251) · colorful (250) · crown (250) · zettai ryōiki (249)  
realmbreaker (248) · fire breath (247) · floating island (246) · white dress (246) · glyph (245) · paper (245)  
car (244) · cemetery (244) · dwarf (244) · leonin (244) · asian (242) · bloomburrow (origin) (242) · crouch (242)  
filigree (242) · screaming (242) · rock formation (241) · cuirass (240) · face paint (240) · island (239)  
bablovia (238) · falling (238) · close-up (237) · pipe (237) · t-pose (237) · fear (235) · castle (234)  
oversized creature (233) · sketch (232) · gold (231) · magic circle (230) · body horror (229) · elk (225)  
bat (222) · obelisk (222) · flock of birds (221) · glowing mouth (221) · arda (220) · rat (220)  
tree branch (220) · mercadia (origin) (218) · weapon raised (218) · black background (217) · color pie (217)  
diagram (217) · space (217) · door (216) · table (216) · on fire (215) · looking back (214) · gray hair (212)  
brown background (211) · flag (211) · night sky (211) · white magic (210) · pyramid (209) · sparkles (209)  
autumn (208) · ogre (207) · path (207) · green fumes (206) · kithkin (205) · energy beam (204)  
light from within (204) · tombstone (204) · number (203) · glowing weapon (202) · horned helmet (199)  
sarpadia (199) · abs (198) · golem (198) · roots (198) · bug (197) · light from above (197) · palm tree (197)  
skyscraper (197) · twink (196) · bones (195) · dinosaur (195) · shandalar (195) · fingerless glove (194)  
surrealism (193) · cathar (192) · target dragon (192) · volcano (192) · bondage (191) · roar (191)  
larger than landscape (190) · motion blur (190) · beach (189) · rain (187) · china (186) · face (186)  
fight (186) · kamigawa text (186) · treefolk (186) · pyromancy (185) · goatee (184) · hand on waist (184)  
arms crossed (183) · moss (183) · gauntlet (182) · scar (182) · colored pencil (medium) (181)  
looking down (181) · spacecraft (181) · wurm (181) · bear (180) · eyeball (180) · temple (180) · kor (179)  
pedestal (179) · black wing (178) · stormy sky (178) · high five (177) · house (176) · rulebook style (175)  
throne (175) · tongue (175) · butterfly (174) · fiora (173) · multiple eyes (173) · spider-man (173)  
squirrel (173) · bolas horns (172) · bottle (172) · planet (172) · ulamog's brood (172) · vedalken (172)  
girl (171) · leaping (171) · wall (171) · 3d render (medium) (170) · creepy (170) · drake (170)  
jace beleren (170) · sheathed sword (170) · nature elemental (169) · weapon pointed (169) · green hair (168)  
overcast (168) · window light (168) · laboratory (166) · ambush (165) · drool (165)  
i don't feel so good mr stark (165) · mace (165) · frog (164) · fur clothing (164) · open book (164)  
rooftop (164) · jewel (163) · kamigawa (origin) (163) · ribbon (163) · thopter (163) · treasure (163)  
boggart (162) · eating (162) · plate armor (162) · portal (162) · reins (162) · bow (weapon) (161) · devil (161)  
pincer (161) · stealth (161) · chalice (160) · laser (160) · flaming weapon (159) · skirt (159) · swarm (159)  
tolaria (159) · battle (158) · lorwyn/shadowmoor (158) · torn clothing (158) · whiskers (158) · crow (157)  
street (157) · cactus (156) · cat (156) · phyrexian omenpath (156) · steam (156) · chandra nalaar (155)  
city (155) · shiv (continent) (155) · crescent moon (154) · eternal (153) · hill (153)  
light pillar (weather) (153) · lizard (153) · pink background (153) · quiver (153) · spark (153)  
broken glass (152) · samurai (152) · stone wall (152) · tricorn (152) · aether (151) · black dress (151)  
neck tie (151) · scale (151) · ulgrotha (151) · wind (151) · yellow magic (151) · elemental (150)  
good boy (150) · jund (150) · jungle (150) · nude (150) · barrel (149) · chest (149) · legion of dusk (149)  
lily pad (149) · rearing (149) · sultai (148) · town (148) · amulet (147) · field (147) · gold coin (147)  
imminent death (147) · mardu (147) · the tangle (147) · argoth (146) · assassin (146) · billowing skirt (146)  
impale (146) · plant (146) · trio (146) · weapon over shoulder (146) · map (145) · satchel (145) · azorius (144)  
emrakul's infestation (144) · tendril (144) · black lips (143) · squatting (143) · a skeleton is in you (142)  
airship (142) · pale skin (142) · race track (142) · rakdos (142) · short hair (142) · dress (141) · lake (141)  
quill (141) · sheath (141) · simic (141) · tarkir dragon (141) · bant (140) · bringer (140) · child (140)  
fire elemental (140) · ink (medium) (140) · scythe (140) · taking aim (140) · wheel (140) · boar (139)  
eyeless (139) · lesser sliver (139) · ribcage (139) · comic style (138) · fence (138)  
half-timbered building (138) · hydromancy (138) · animal skull (137) · buckle (137) · cosmium (137) · egg (137)  
mecha (137) · rabbit (137) · red skin (137) · dust (136) · jumping (136) · orckind (136) · splash (136)  
surprise (136) · dog (135) · esper (135) · eyelash (135) · indigo background (135) · metal body part (135)  
naya (135) · romance of the three kingdoms (135) · blue hair (134) · club (134) · hair bun (134) · owl (134)  
pink glow (134) · wide-eyed (133) · antenna (132) · hook (132) · humanoid (132) · many legs (132) · ghost (131)  
jade (131) · saddle (131) · scale animal (131) · stalactite (131) · golgari (130) · hydra (130) · line art (129)  
transformation (129) · blue/orange (128) · gouache (128) · key art (booster pack) (128) · leather (128)  
stream (128) · viashino (128) · abzan (127) · crested helmet (127) · dimir (127) · membranous wing (127)  
negative image (127) · phyrexianized mirran (127) · rainbow (127) · flaming hair (126) · housecat (126)  
hunch (126) · high collar (125) · liliana vess (125) · acrylic gouache (124) · cable (124) · cuisses (124)  
elephant (124) · holding head (124) · jukai forest (124) · perch (124) · purple eye (124) · dome (123)  
gate (123) · grasping hand (123) · grixis (123) · lens flare (123) · centered perspective (122) · coin (122)  
fallout (universe) (122) · izzet (122) · long tongue (122) · monk (122) · pigtails (122) · smirk (122)  
collar (121) · green dress (121) · injury (121) · lance (121) · library (121) · liliana headdress (121)  
sleep (121) · stitching (121) · weatherlight (121) · djinn (120) · hybrid (120) · key art (booster box) (120)  
witherbloom college (120) · yellow sky (120) · bubble (119) · glowing sword (119) · gruul (119) · pain (119)  
sunbeam (119) · weapon drop (119) · boros (118) · crossbow (118) · doppelgänger (118) · flying debris (118)  
halo (circle of light) (118) · merrow (118) · selesnya (118) · selesnya symbol (118) · sothera system (118)  
sphinx (118) · standard (118) · mixed media (117) · mug (117) · non-fantasy animal (117) · urza (117)  
yavimaya (117) · metal animal (116) · peter parker (116) · pleated skirt (116) · tree stump (116)  
two suns (116) · anger (115) · eye (focus) (115) · frown (115) · griffin (115) · lorwyn/shadowmoor faerie (115)  
muraganda (115) · ninja (115) · petal (115) · purple skin (115) · spade (115) · tolarian academy (115)  
aang (114) · archery (114) · jace's cloak (114) · printmaking (medium) (114) · prismari college (114)  
sail (114) · shore (114) · bowl (113) · magic shield (113) · urborg (113) · brilliant light (112)  
illusion (112) · kozilek's brood (112) · mana symbol (112) · bant (origin) (111) · circlet (111) · headband (111)  
jeskai (111) · orzhov (111) · star (shape) (111) · sunlight (111) · unusual hair (111) · air bubble (110)  
boy (110) · curtain (110) · hexagon (110) · key (110) · phallic (110) · pouch (110) · saber (110) · dryad (109)  
paw (109) · winged helmet (109) · archway (108) · baby (108) · brick wall (108) · candlestick (108)  
censer (108) · lamp (108) · natural archway (108) · peril (108) · phyrexian tear (108) · eyepatch (107)  
loxodon (107) · six figures (107) · whip (107) · backpack (106) · faceless (106) · mirror (106)  
river heralds (106) · scarf (106) · storm (106) · cane (105) · facial piercing (105) · gray skin (105)  
guard (105) · armblade (104) · blue fire (104) · fire trail (104) · ixalan's core (104) · phyrexia (104)  
rabiah (104) · temur (104) · vulvic (104) · dance (103) · death (103) · green liquid (103) · aerial view (102)  
geometric pattern (102) · horn (instrument) (102) · olivia's wedding (102) · one eye (102) · red sky (102)  
suit (102) · valor's reach stadium (102) · witch (102) · aven (101) · phyrexian oil (101)  
seven steel thanes (101) · sokenzan (101) · thorn (101) · walking (101) · apple (100) · burning building (100)  
fir tree (100) · landscape (100) · machine orthodoxy (100) · mutant (100) · nyx (100) · pink hair (100)  
progress engine (100) · reused art (100) · serra's realm (100) · smash (100) · voldaren estate (100) · blade (99)  
leonardo (tmnt) (99) · ooze (99) · silverquill college (99) · telescope (99) · upside down (99) · vase (99)  
beetle (98) · flail (98) · orazca (98) · punch (98) · side profile (98) · turtle/tortoise (98) · bikini (97)  
caliman (97) · greatsword (97) · lion (97) · lorehold college (97) · metal claw (97) · purple fumes (97)  
romantic couple (97) · cavalry (96) · doctor who (96) · sandal (96) · stripe (96) · bell (95)  
braided facial hair (95) · cleavage window (95) · energy aura (95) · esper (origin) (95) · fiction reference (95)  
naya (origin) (95) · nicol bolas (95) · photograph (medium) (95) · pizza (95) · power armor (95)  
purple dress (95) · purple hair (95) · raphael (tmnt) (95) · red dress (95) · shaved head (95) · star arch (95)  
ulgrotha (origin) (95) · walking in water (95) · brain (94) · diegetic artwork (94) · thievery (94)  
time spiral dominaria (94) · turquoise background (94) · boros symbol (93) · donatello (tmnt) (93)  
iron alliance (93) · oxidda chain (93) · sky tyrant (93) · blood petal (92) · brazen coalition (92) · cozy (92)  
firebending (92) · gerrard capashen (92) · gideon jura (92) · halberd (92) · halo (substance) (92) · prone (92)  
transparent (92) · wizard hat (92) · chainmail (91) · mohawk (91) · panorama-position-1 (91) · pickaxe (91)  
shipwreck (91) · sigil (91) · skaab (91) · symbol (91) · tent (91) · two-handed weapon (91) · bifurcated arm (90)  
brazier (90) · etherium (90) · fireball (90) · michelangelo (tmnt) (90) · real life reference (90)  
undercut (90) · vicious swarm (90) · cherry blossom (89) · deer (89) · gargoyle (89) · hand fire (89)  
heart (89) · jund (origin) (89) · lotus (89) · meme (89) · moth (89) · panorama-position-2 (89)  
predator/prey (89) · armband (88) · blue dress (88) · canyon (88) · jacket (88) · vein (88) · cross-legged (87)  
dreadlocks (87) · flat color (87) · fountain (87) · mouse (87) · screen (87) · serra's realm (origin) (87)  
the shire (87) · wire (87) · kavu (86) · nissa revane (86) · siblings (86) · time rift (86)  
water elemental (86) · ajani goldmane (85) · eyes covered (85) · gandalf (85) · mephidross (85) · naga (85)  
one sun (85) · ritual (85) · swinging weapon (85) · vest (85) · bas relief (84) · crab (84) · goat (84)  
shatter (84) · streamer (84) · teferi akosa (84) · twilight (84) · white skin (84) · beak (83)  
captain america (83) · cracked earth (83) · eldraine faerie (83) · embers (83) · eye shadow (83)  
frodo baggins (83) · microphone (83) · warrior (83) · alligator/crocodile (82) · cage (82)  
disembodied head (82) · extra wings (82) · grixis (origin) (82) · ladder (82) · myr (82) · painting (82)  
reading (82) · rubble (82) · train (82) · ulvenwald (82) · captain america's shield (81) · detached sleeve (81)  
garden (81) · kasa (81) · red dragon (81) · wasteland (81) · arabian (80) · climb (80) · earth's moon (80)  
emrakul's brood (80) · fan (80) · glimmervoid (80) · goth (80) · iron man (80) · jar (80) · quiet furnace (80)  
razor fields (80) · rose (80) · shell (80) · straight hair (80) · undercity (ravnica) (80) · cube (79)  
eye of doom (79) · fingernail (79) · horn monument (79) · laugh (79) · other fictional language (79)  
quandrix college (79) · scarecrow (79) · talon (79) · the world tree (79) · unicorn (79) · white background (79)  
bandage (78) · burnished banner (78) · eyes where they shouldn't be (78) · facing hands (78) · forcefield (78)  
second sun (78) · sewer (78) · sunglasses (78) · throwing (78) · unfinished artwork (78) · urban (78)  
black fumes (77) · bra (77) · capture (77) · cartoon (77) · cauldron (77) · exclamation point (77)  
fancy clothes (77) · mummy (77) · painted nail (77) · potion (77) · zombie horde (77) · alabaster host (76)  
dualism (76) · geometric (76) · headphones (76) · karn (76) · lyese (76) · orzhov symbol (76)  
phyrexianized (76) · plant growing on creature (76) · plate (76) · stalagmite (76) · top knot (76)  
zendikar goblin (76) · centipede/millipede (75) · chandelier (75) · forge (75) · graffiti (75) · meletian (75)  
orange eye (75) · pegasus (75) · sigarda's heron (75) · smog (75) · sun empire (75) · easter egg (74)  
llanowar (74) · mechanical eyestalk (74) · pencil (medium) (74) · ravnica goblin (74) · runic text (74)  
curly hair (73) · cyborg (73) · fern (73) · kick (73) · neon lights (73) · pitchfork (73) · pot (73)  
prosthetic limb (73) · tiger (73) · wakanda (73) · waterbending (73) · cleric (72) · earthbending (72)  
long fingernail (72) · marvel (universe) (72) · phyrexianized dominarian (72) · rebecca guay (72) · renegade (72)  
ripple (72) · spotlight (72) · stronghold (72) · tasset (72) · teacup (72) · triangle (72) · alara (71)  
fireball outrun (71) · hologram (71) · mogg (71) · reaching (71) · rhino (71) · teapot (71) · vortex (71)  
altar (70) · basket (70) · battlefield (70) · cephalid (70) · england (70) · flamekin (70) · fling (70)  
keldon (70) · slime (70) · bilbo baggins (69) · bomb (69) · coral (69) · fantastic four symbol (69) · hoof (69)  
imp (69) · innistrad angel (69) · labrys (69) · magic (69) · magnifying glass (69) · monocle (69)  
multiple heads (69) · poggers (69) · science (69) · student (69) · thinking (69) · cannon (68) · crafting (68)  
fortress (68) · glider (68) · mirran resistance (68) · target minotaur (68) · tornado (68) · black magic (67)  
cravat (67) · meteor (67) · mkm-arg-clue (67) · net (67) · quicksilver sea (67) · sea serpent (67) · shackle (67)  
tony stark (67) · trident (67) · underground (67) · windmill (67) · akroan (66) · benalish glazeplate (66)  
carving (66) · luxa river (66) · metallic (66) · raptor (66) · serrated blade (66) · thunder blaster (66)  
wood (66) · aurora (65) · changeling (65) · coast (65) · coat (65) · cobblestone (65) · crack (65) · fox (65)  
full beard (65) · grotesque (65) · hourglass (65) · huge beast (65) · jewelry (65) · lava elemental (65)  
market (65) · reclined (65) · stare (65) · tunnel (65) · two-headed (65) · underworld (65) · vehicle (65)  
wand (65) · auriok (64) · bandana (64) · doorway (64) · fin (64) · fur collar (64) · golden glow (64)  
hexgold (64) · king (64) · reed richards (64) · takenuma (64) · the dross pits (64) · the wilds (64)  
thrull (64) · village (64) · bamboo (63) · bare buttock (63) · bear (body type) (63) · ben grimm (63)  
butch (63) · corset (63) · deflect (63) · engulfed in flames (63) · fisheye perspective (63) · footprint (63)  
protection sphere (63) · scale building (63) · valley (63) · will-o-the-wisp (63) · alley (62) · bridle (62)  
coffin (62) · dromoka clan (62) · druid (62) · fungus (62) · katara (62) · magic text (62) · minas tirith (62)  
music (62) · nunchaku (62) · raccoon person (62) · railing (62) · sawblade (62) · sickle (62)  
solar eclipse (62) · street lamp (62) · wrench (62) · blindfold (61) · chimney (61) · eruption (61)  
fighting stance (61) · glitch ghost (61) · grimace (61) · hall (61) · hand from the earth (61) · ingle (61)  
purple sky (61) · rhox (61) · saproling (61) · spiked club (61) · wineglass (61) · bismuth (60) · campfire (60)  
cyclops (60) · desk (60) · faerie (60) · firework (60) · hauntwoods (60) · lavafall (60) · motorcycle (60)  
paintbrush (60) · plume (60) · shark (60) · stinger (60) · theros minotaur (60) · trap (60) · vulshok (60)  
azorius symbol (59) · colonnade (59) · cross-species friendship (59) · eagle (59) · face tattoo (59)  
gem of becoming (59) · gray sky (59) · pelennor fields (59) · prosthetics (59) · the surgical bay (59)  
tyrannosaur (59) · webbed digits (59) · abstract elemental (58) · audience (58) · back to back (58) · choke (58)  
clock (58) · fruit (58) · grave (58) · hellspurs (58) · leaning figure (58) · moonlight (58) · sand dune (58)  
scepter (58) · shapeshifter (58) · thran technology (58) · wagon (58) · ajani's axe (57) · apron (57)  
bone clothing (57) · bow (ribbon) (57) · breath vapor (57) · crater (57) · flower crown (57) · flying mount (57)  
fork (57) · gigot sleeve (57) · havoc (57) · haze (57) · pixel art (57) · rakdos symbol (57) · shoe (57)  
still life (57) · the hulk (57) · torii (57) · turban (57) · visual pun (57) · celebrating (56) · chariot (56)  
dimir secret uniform (56) · flying machine (56) · goblin rocketeers (56) · hexhaven (location) (56) · kessig (56)  
lightning elemental (56) · mechanical arm (56) · mind control (56) · mr. fantastic (56) · phoenix (56)  
rabiah (origin) (56) · silumgar clan (56) · steve rogers (56) · winged beast (56) · zuko (56) · bed (55)  
breastplate (55) · constellation (55) · crying (55) · fat (55) · ffvii (55) · holding hands (55) · london (55)  
mirrodin goblin (55) · nest (55) · no nose (55) · pen (55) · rami symbol (55) · six seven (55)  
spellcasting (55) · tooth necklace (55) · vraska (55) · animated object (54) · carriage (54) · foot clan (54)  
lórien (54) · mercadia city (54) · ojutai clan (54) · pants (54) · scimitar (54) · sheathed weapon (54)  
shockwave (54) · swipe (54) · thor (marvel) (54) · torture (54) · vibranium (54) · bite (53) · bucket (53)  
clown (53) · cuneiform (53) · disintegrate (53) · drum (53) · jitte (53) · light from below (53) · no pupil (53)  
ravnica angel (53) · ruby (53) · ship mast (53) · spiked armor (53) · teacher (53)  
teenage mutant ninja turtles (53) · third eye (53) · thor's hammer (53) · white horse (53) · avatar (52)  
bead necklace (52) · demolition (52) · fabric (52) · framed art (52) · growth (52) · hands (52)  
harvesttide festival (52) · kaya cassir (52) · monastery (52) · monster (52) · monster and bonder (52)  
pouncing (52) · pumpkin (52) · scale ship (52) · the hunter maze (52) · theros satyr (52) · web-swinging (52)  
aether pipe (51) · ardenvale symbol (51) · argyle (51) · black panther (marvel) (51) · gorilla (51)  
lipstick (51) · loupe (51) · metal (51) · oxen (51) · pool (51) · pursuit (51) · rapier (51) · sad (51)  
seaweed (51) · shenmeng (51) · spoon (51) · ba sing se (50) · bag (50) · benalia (50) · black eye (50)  
cartouche (50) · consulate (50) · corpse pile (50) · dragonstorm (50) · falling rock (50) · ffvi (50)  
fireplace (50) · floating book (50) · gore (50) · green fire (50) · hieroglyph (50) · high heel (50)  
khenra (50) · krosa (50) · magic card (50) · meta gameplay (50) · molten (50) · plateau (50)  
ravnica centaur (50) · rigging (50) · shaman (50) · snarl (50) · space suit (50) · veil (50)  
art acknowledges frame (49) · bloodstain (49) · cabaretti (49) · cinder (elemental) (49) · drinking (49)  
elspeth tirel (human) (49) · evendo (49) · farm (49) · inspect (49) · lock (49) · mane (49) · mouth (49)  
multiple tails (49) · plant creature (49) · regional variant (49) · sauropod (49) · scale tree (49)  
seven figures (49) · sexually suggestive (49) · silk (49) · spinal column (49) · worm (49) · anvil (48)  
aragorn (48) · assassin's creed (48) · buttress (48) · chicken (48) · gnome (48) · human & monster (48)  
merchant (48) · over-under (48) · prison (48) · saliva (48) · sash (48) · sorin markov (48) · tezzeret (48)  
tool (48) · urza's symbol (48) · victim (48) · afro (47) · armrest pose (47) · ash (47) · bone weapon (47)  
cabal (47) · circle of people (47) · dark sky (47) · decay (47) · duel (47) · earth elemental (47) · eiganjo (47)  
floating building (47) · frozen (47) · furnace layer (47) · invasive species (47) · khopesh (47)  
kolaghan clan (47) · lattice (47) · magic binding (47) · mandible (47) · mouth covered (47) · necron (47)  
otawara (47) · peregrin took (47) · pond (47) · samwise gamgee (47) · sheep (47) · sign (47)  
sunstar free company (47) · target demon (47) · teferi's staff (47) · acorn (46) · amputee (46)  
atarka clan (46) · bee (46) · catapult (46) · cultist (46) · dove (46) · eumidian (46) · four fingers (46)  
hand on head (46) · johnny storm (46) · leaf hair (46) · leather armor (46) · leyline (46)  
lightning breath (46) · moonfolk (46) · mouse person (46) · nezumi (46) · paladin (46) · pest (46)  
shuriken (46) · the human torch (46) · tomb (46) · writing (46) · balcony (45) · bow tie (45) · brown eye (45)  
cart (45) · cellarspawn (45) · clear sky (45) · confetti (45) · cutlass (45) · fumes (45) · garruk's helmet (45)  
keld (location) (45) · mask of yawgmoth (45) · oh yeah! (45) · omenpath (45) · otter person (45) · pearl (45)  
phyrexian text (45) · rib (45) · swinging on rope (45) · the one ring (45) · theros centaur (45)  
war hammer (45) · wreckage (45) · box (44) · cup (44) · curved horizon (44) · dust storm (44) · floodpits (44)  
gorgon (44) · healing (44) · helix (44) · hole (44) · ivy (44) · lens (44) · light (44) · log (44) · meadow (44)  
needle (44) · pink cloud (44) · porcelain-metal armor (44) · standing on one leg (44) · sword resting (44)  
thraben (44) · umbrella (44) · akki (43) · amonkhet minotaur (43) · art deco (43) · baloth (43) · bread (43)  
broken (43) · carrot (43) · chocobo (43) · church (43) · cleaver (43) · dominaria centaur (43) · family (43)  
food (43) · garruk wildspeaker (43) · grappling hook (43) · imperials (43) · interplanar (43) · kimono (43)  
legs crossed (43) · lots of legs (43) · moria (43) · mox (43) · octopus (43) · potted plant (43) · prayer (43)  
pterodactyl (43) · returned mask (43) · setessan (43) · sideburn (43) · singing (43) · sue storm (43)  
the fair basilica (43) · toro (43) · ugin (43) · ant (42) · boulder (42) · choker (42) · crawling (42)  
dock (42) · drannith (42) · foreground (42) · harness (42) · heron in the moon (42) · ink (42) · iridescent (42)  
ixalan monkey goblin (42) · massachusetts (42) · maze (42) · meriadoc brandybuck (42) · minamo (42) · monkey (42)  
monoist (42) · offering (42) · pink dress (42) · quandrix fractal (42) · raugrin (42) · riveteers (42)  
rotting (42) · sarkhan vol (42) · splatter (42) · steampunk (42) · tarkir aven (42) · teddy bear (42)  
white hair streak (42) · yearbook photo (42) · balance scale (41) · beast of burden (41) · broken ground (41)  
carnival performance (41) · cheering (41) · chimera (41) · crate (41) · echoverse (41) · entangle (41)  
falcon (41) · fist pump (41) · fur (41) · green sky (41) · hairband (41) · hobbit (41) · homunculus (41)  
kitsune (41) · monument (41) · orange fur (41) · pigeon (41) · poison (41) · saiba futurists (41)  
sword in ground (41) · the monumental facade (41) · truck (41) · workshop (41) · after battle (40) · arm (40)  
astrotorium symbol (40) · baldur's gate (city) (40) · balemurk (40) · debris (40) · fblthp (40) · field note (40)  
gull (40) · hippogriff (40) · improbable weapon (40) · kolaghan's brood (40) · makeup (40)  
multiple characters (40) · neurok (40) · phyrexian symbol omen (40) · queen (40) · ral zarek (baseline) (40)  
selfie (40) · shard (40) · shielding eyes (40) · sokka (40) · war machine (40) · water tower (40) · wink (40)  
ainok (39) · airbrush (39) · alien (39) · black cat (39) · bodysuit (39) · boilerbilges (39) · brown dress (39)  
carcass (39) · dominaria minotaur (39) · drawing (39) · endriders (39) · gooddog (39) · halo glass (39)  
izzet symbol (39) · jug (39) · leash (39) · meditation (39) · mercadia city symbol (39) · mistmoors (39)  
morph spider (39) · mountain top (39) · plant clothing (39) · razorgrass (39) · sack (39) · shiny clothing (39)  
shrine (39) · skyshroud forest (39) · stick (39) · target drake (39) · toe (39) · trypophobia (39) · vault (39)  
agency barrier ward (38) · airbending (38) · appa (38) · artificer (38) · bag end (38) · balloon (38)  
barbed wire (38) · beheading (38) · blacksmith (38) · break (38) · calamity beast (38) · carapace (38)  
cattail (38) · cho-arrim (38) · cloud figure (38) · complete coalition symbol (38) · daru cleric (38)  
dawnhart coven (38) · etched host (38) · garruk's axe (38) · gondorian (38) · helmet holding (38)  
hidden blade (38) · invisible woman (38) · meletis (38) · miles morales (38) · mob (38) · mom (38) · momo (38)  
narset (38) · nevada (38) · orochi (38) · panorama-position-3 (38) · pie (38) · protecting (38) · shelf (38)  
skemfar (38) · slash (38) · steeple (38) · strapless dress (38) · tamiyo (38) · team cloudspire (38)  
vault boy (38) · wheat (38) · wristband (38) · bablovia goblin (37) · black horse (37) · bruce banner (37)  
cabal arena (37) · cow (37) · cracked stone (37) · crovax (37) · diamond (37) · eaten alive (37) · emaciated (37)  
energy ball (37) · energy blade (37) · feathered cap (37) · firefly (37) · gray dress (37) · gwen stacy (37)  
hatsune miku (37) · headscarf (37) · isla nublar (37) · lorehold spirit (37) · missing teeth (37) · montage (37)  
nightmare (37) · pink skin (37) · planeswalker spark (37) · purple fire (37) · question mark (37) · rocket (37)  
sai (weapon) (37) · scale armor (37) · shade (37) · stage (37) · star trek: the original series (37)  
static (37) · sterling company (37) · tardis (37) · thumbs up (37) · tiefling (37) · vat (37) · walkway (37)  
well (37) · aircraft (36) · arcavios owlin (36) · arena (36) · baseball bat (36) · broken weapon (36)  
brokers (faction) (36) · castle ardenvale (36) · cheese (36) · cloud strife (36) · copper host (36)  
dimir symbol (36) · emerald (36) · energy tank (36) · furnace host (36) · ghostly creature (36) · glimmer (36)  
grape (36) · great desert (terisiare) (36) · guildmage (36) · hands cupped (36) · hanna (36) · hat sticker (36)  
headless (36) · hug (36) · hybrid animal (avatar) (36) · kavaron (36) · kraken (36) · lamprey mouth (36)  
leech (36) · madness (36) · melt (36) · metathran (36) · mother (36) · multiple mouths (36)  
planeswalker symbol (36) · puddle (36) · repair (36) · severed hand (36) · speed demons (36) · spooky (36)  
standing (36) · tattered wing (36) · thief (36) · top hat (36) · towashi (36) · toy (36) · venom (symbiote) (36)  
ancestral armor (35) · blood moon (35) · blue dragon (35) · chasm (35) · checkered (35) · conquistador (35)  
crumble (35) · dirt (35) · doctor doom (35) · dominaria faerie (35) · emrakul (35) · finger gun (35) · globe (35)  
hands clasped (35) · headache (35) · hot air balloon (35) · idol (35) · jack-o-lantern (35) · jellyfish (35)  
kellan (35) · labcoat (35) · maag taranau (35) · manifest ball (35) · mirkwood (35) · morningstar (35)  
nebula (35) · nephalia (35) · ouphe (35) · parapet (35) · poleyn (35) · pouring (35) · rabbit person (35)  
ravnica minotaur (35) · shorts (35) · shredder (tmnt) (35) · t'challa (35) · tahngarth (35) · the chain veil (35)  
the horns (35) · toph beifong (35) · triceratops (35) · tyranid (35) · victor von doom (35)  
weapon back sling (35) · whale (35) · armored horse (34) · art nouveau (34) · black hole (34) · bookmark (34)  
conifer (34) · crystal ball (34) · cybertron (34) · dragonborn (34) · drill (34) · exhaust (34) · flood (34)  
fly (insect) (34) · guidelight voyagers (34) · howl (34) · ikorian nightmare (34) · kaito shizuki (34)  
kung fu (34) · leviathan (34) · maestros (faction) (34) · magic gun (34) · mammoth (34) · minotaur (34)  
missing eye (34) · order of the widget (34) · rocket goblin (34) · seedpod (34) · shrub (34) · skyline (34)  
smaug (34) · thallid (34) · the lonely mountain (34) · undead (34) · asari uprisers (33) · beads (33)  
body distortion (33) · body paint (33) · carnival game (33) · construction (33) · crypt (33) · darksteel (33)  
doorway light (33) · exploding with light (33) · fallaji (33) · frame (33) · glass (cup) (33)  
gondor faction symbol (33) · gruul symbol (33) · hawkeye (33) · herd (33) · icicle (33) · indatha (33)  
jaya ballard (33) · league of dastardly doom (33) · light bulb (33) · light of starnheim (33) · no mouth (33)  
obscura (33) · page (33) · pendant (33) · pink sky (33) · prisoner (33) · razorkin (33) · rust (33)  
sailing (33) · scorpion (33) · skull helmet (33) · stensia (33) · target angel (33) · telephone (33)  
the wanderer (33) · turquoise glow (33) · wallpaper (33) · warhammer 40k (33) · whispering (33) · wirewood (33)  
worship (33) · alas poor yorick (32) · artifact (32) · behemoth (32) · bident (32) · burst of energy (32)  
disease (32) · facial hair (32) · flute (32) · gollum (32) · group photo (32) · helicopter (32) · heron (32)  
hexplate (32) · inkwell (32) · invisible (32) · lighthouse (32) · marbling (32) · nahiri (32) · pillow (32)  
pip-boy (32) · race (32) · rohirrim (32) · rubblebelt (32) · sarcophagus (32) · sarong (32) · serpent (32)  
slickshot (32) · smokestack (32) · speedbrood (32) · star trek: the next generation (32) · tear (32)  
tights (32) · undead animal (32) · warg (32) · agents of sneak (31) · araba (31) · aura (31) · avacyn (31)  
blue fumes (31) · bolas's citadel (31) · bone pile (31) · brick (31) · bush (31) · california (31) · doll (31)  
energy field (31) · fissure (31) · flesh (31) · gavony (31) · hazoret's monument (31) · hobbit-hole (31)  
hut (31) · impossible crescent moon (31) · kav (31) · keelhaulers (31) · leather jacket (31)  
life and death (31) · mirrodin's/phyrexia's core (31) · murasa (31) · nail (31) · nim (31) · niv-mizzet (31)  
papercraft (medium) (31) · performance (31) · planetary ring (31) · pointy hat (31) · powerstone (31)  
red lightning (31) · regal dress (31) · rivendell (31) · sacrifice (31) · sewer grate (31) · shusher (31)  
skin lesion (31) · stampede (31) · stomp (31) · talk to the hand (31) · tentacle hair (31) · tunic (31)  
volley (31) · wildfire (31) · zendikar skyclave (31) · aetherborn (30) · air elemental (30) · angelic (30)  
animalshifted (30) · arcbound (30) · argivian (30) · arlinn kord (30) · autobot symbol (30) · bad breath (30)  
birch (30) · blackblade (30) · cake (30) · chinese character (30) · clint barton (30) · command uniform (30)  
earth kingdom (30) · elesh norn (30) · extra finger (30) · eyestalk (30) · fetal position (30)  
fields of strife (30) · ghitu (30) · horde (30) · jeans (30) · lhurgoyf (30) · lute (30) · meat (30)  
misty mountains (30) · necrogen vent (30) · necromancy (30) · nuka cola (30) · one-segment cartouche (30)  
panorama-position-4 (30) · poster (30) · sisay (30) · speech bubble (30) · splinter (tmnt) (30) · squee (30)  
sural (30) · surgery (30) · surround (30) · white fur (30) · wing armor (30) · zendikar angel (30)  
aether rangers (29) · akros (29) · avatar (series) (29) · blood glass (29) · bone necklace (29) · card (29)  
champions of amonkhet (29) · colossus (29) · cooking (29) · dragonfly (29) · drone (29) · fell beast (29)  
five suns (29) · fu manchu (29) · gimli (29) · goblin explosioneers (29) · golgari symbol (29) · head (29)  
human vs monster (29) · isengard (29) · littjara (29) · love (29) · mishra (29) · monoist spaceship (29)  
monolith (29) · phasing through (29) · rowan kenrith (29) · scissors (29) · sculpture (29) · shield symbol (29)  
sothera (29) · spanish moss (29) · tattered clothes (29) · the wasp (29) · thorin oakenshield (29)  
three-headed (29) · treehouse (29) · triton (29) · trumpet (29) · ulamog (29) · vaulting (29) · vryn (29)  
weaponry (29) · wooden armor (29) · ballista (28) · bat person (28) · camera (28) · carrying a body (28)  
computer (28) · dabbing (28) · dandelion (28) · drain life (28) · dynamite (28) · eye socket (28)  
full body (28) · galaxy brain (28) · goo (28) · green goblin (28) · hazoret (28) · holding (28) · kozilek (28)  
lily (28) · mind extraction (28) · mine (28) · mirri (28) · misplaced anatomy (28) · murder (28) · orim (28)  
parasite (28) · pink magic (28) · puppetry (28) · red fumes (28) · sauron (28) · savai (28) · short sword (28)  
simic symbol (28) · siren (28) · snowflake (28) · specter (28) · third path (28) · two moons (28)  
arcade (architecture) (27) · banister (27) · barbarian (27) · black lotus (27) · bladiator (27) · blue lips (27)  
captain marvel (27) · chrome host (27) · claw marks (27) · creature mob (27) · dalek (27) · disembodied limb (27)  
dynamic (27) · eel (27) · eladamri (27) · eumidian spaceship (27) · foot clan symbol (27) · formation (27)  
fungal clothing (27) · glass (27) · great hall of thráin (27) · harp (27) · inkling (27) · iroh (27) · kiora (27)  
knuckleduster (27) · kylem (27) · legacy (27) · loki (marvel) (27) · mana rig (27) · masters of the universe (27)  
metal leaf (medium) (27) · missing limb (27) · mouth where it shouldn't be (27) · nantuko (27) · oltec (27)  
one arm (27) · pet (27) · pit (27) · portcullis (27) · rally (27) · sapling (27) · savannah (27) · searching (27)  
seashell (27) · she-hulk (27) · sibsig (27) · slice (27) · spit (27) · stone floor (27) · sunflower (27)  
talisman (27) · tardis interior (27) · tassel (27) · terisia city (27) · the vision (27) · toga (27)  
two-segment cartouche (27) · ultron drone (27) · volrath (27) · vulture (27) · warlock (27) · waterway (27)  
wax seal (27) · white robe (27) · wicked slumber (27) · widow's peak (27) · angler (26) · argument (26)  
atarka's brood (26) · aurelia (26) · avacyn's spear (26) · bolas's meditation realm (26) · breaching (26)  
broken sword (26) · candy (26) · cathedral (26) · chibi (26) · cobra (26) · crash (26) · crook (26) · cross (26)  
cupping item (26) · dekella (26) · dry grass (26) · factory (26) · frog person (26) · germ (26) · grenade (26)  
hand resting on pommel (26) · helm's deep (26) · hidden picture (26) · hunt (26) · hybrid elemental (26)  
indigo (26) · jester (26) · kitchen (26) · kjeldor (26) · leopard (26) · medallion (26) · moogle (26)  
null moon (26) · ob nixilis (demon) (26) · olivia voldaren (26) · peasant (26) · quickbeasts (26)  
rise from the grave (26) · selesnya elemental (26) · shocked (26) · soda (26) · stool (26) · supine (26)  
tavern (26) · the scarlet witch (26) · torn banner (26) · traffic light (26) · valkyrie (26) · yellow skin (26)  
akroma (25) · amonkhet aven (hawk) (25) · avengers symbol (25) · bala ged (25) · banana (25) · barren (25)  
burning-tree clan (25) · caervelin (25) · carnival ride (25) · collage (medium) (25) · compass (25)  
costume (25) · dismemberment (25) · dromoka's brood (25) · efreet (25) · eidolon (25) · eyebrow raised (25)  
fallen tree (25) · farming (25) · fire escape (25) · floating candle (25) · gauge (25) · ghost-spider (25)  
half-elf (25) · hand on chest (25) · heterochromia (25) · high fae (25) · hippo (25) · hive fleet leviathan (25)  
interplanar beacon (25) · javelin (25) · jennifer walters (25) · jund goblin (25) · legion of dusk rose (25)  
loot (25) · mage (25) · manta ray (25) · mardu symbol (25) · mutton chops (25) · noble (25) · oketra (25)  
operations uniform (25) · orthanc (25) · overalls (25) · pagoda (25) · qal sisma (25) · returned (25)  
sapphire (25) · saw (25) · sliver prime (25) · snail (25) · squirrel person (25) · sword half-sheathed (25)  
thunder tech (25) · tidus (25) · trash (25) · vault-tec (25) · vizier (25) · wagon wheel (25) · yellow fumes (25)  
zagoth (25) · alkyd paint (24) · androgynous (24) · beaker (24) · black skin (24) · blanket (24)  
bolas staff (24) · brickwork (24) · brooch (24) · cap (24) · carol danvers (24) · chamber of the guildpact (24)  
circus (24) · control panel (24) · crucible (24) · cryptolith (24) · digging (24) · dirigible (24)  
doctor octopus (24) · fangorn forest (24) · felidar (24) · fire nation (24) · flowstone (24) · foliage (24)  
glacier (24) · hellion (24) · hidden monster (24) · huatli (24) · ice elemental (24) · jeskai third eye (24)  
kav spaceship (24) · kitesail (24) · mutation (24) · nightstalker (24) · oil (24) · ojutai's brood (24)  
orange magic (24) · paint (24) · paliano (24) · pan (24) · paper money (24) · paradox gardens (24)  
partial color pie (24) · phyrexianized rathi (24) · priest (24) · prismari elemental (24) · puppet (24)  
pushing (24) · recursion (24) · rhonas's monument (24) · ship wheel (24) · silumgar's brood (24)  
sound wave (24) · stall (24) · stardew valley (24) · sting (sword) (24) · stocking (24) · target (24) · taur (24)  
thalia (24) · three-segment cartouche (24) · throwing dagger (24) · wanda maximoff (24) · war (24) · welder (24)  
west virginia (24) · will kenrith (24) · witch king (24) · yuna (24) · ant-man (23) · antelope (23) · archon (23)  
avishkar gremlin (23) · barbel (23) · baseball cap (23) · baton (23) · bird cage (23) · black dragon (23)  
black widow (marvel) (23) · bloody weapon (23) · blue robe (23) · blushing (23) · book-cover (23) · broom (23)  
butterfly wing (23) · capenna angel (23) · cat eye (23) · cave painting (23) · centaur (23) · cocoon (23)  
crags (23) · crossbreed labs (23) · devkarin elf (23) · drowning (23) · echoverse variant (23)  
eight figures (23) · eldrazi (23) · engraving (23) · escheresque (23) · europe (23) · falkenrath (23)  
gisa cecani (23) · gloomy (23) · halloween (23) · harpoon (23) · hawk (23) · hekma (23) · kefnet (23)  
lazotep (23) · ledge (23) · letter (23) · lightning rod (23) · loch larent (23) · lotus position (23)  
manticore (23) · markov (23) · military aircraft (23) · mountainside (23) · natalia romanova (23)  
new benalia (23) · orrery (23) · panther (23) · pipe (smoking) (23) · prism (23) · pwned (23) · raccoon (23)  
rakdos (character) (23) · redcap (eldraine) (23) · royalty (23) · rug (23) · sam wilson (23) · saruman (23)  
sengir (23) · servo (23) · shooting star (23) · skeletal hand (23) · squirrel horde (23)  
strixhaven stadium (23) · summoning (23) · tank top (23) · television (23) · tile (23) · tongs (23)  
tumbleweed (23) · urn (23) · vantress symbol (23) · vivien reid (23) · weird (23) · zhalfir (plane) (23)  
zimone wola (23) · ape (22) · archaic (22) · automaton (22) · azula (22) · azure (22) · beret (22) · berry (22)  
big eye (22) · bisection (22) · black fingernail (22) · bonfire (22) · bontu (22) · bramble (22)  
buster sword (22) · button (clothing) (22) · camouflage (22) · chainsaw (22) · chordatan (22) · dack fayden (22)  
domri rade (22) · dungeons and dragons (22) · farmer (22) · fedora (22) · fishing (22) · freckle (22)  
fur cape (22) · fuse (22) · gallifrey (22) · gasp (22) · gearhulk (22) · green dragon (22) · harpy (22)  
homarid (22) · ichor (22) · invisible chair (22) · izzet goblin (22) · janet van dyne (22) · japan (22)  
jeskai symbol (22) · jin-gitaxias (22) · kamahl (22) · ketria (22) · kiss (22) · kyren (22) · legolas (22)  
liquid (22) · long nose (22) · lumengrid (22) · mantle (22) · mardu goblin (22) · menagerie (22)  
morph ball (22) · music note (22) · oni (22) · plantfolk (22) · portrait (22) · reflection in eye (22)  
rogue (22) · sextant (22) · sheoldred (22) · si wong desert (22) · silverquill symbol (22) · stag (22)  
strawberry (22) · string (22) · stuffed animal (22) · sunstar free company spaceship (22) · suspenders (22)  
sylvok (22) · syringe (22) · three legs (22) · three suns (22) · tree canopy (22) · underdark (22) · vapor (22)  
viscera (22) · vision (22) · wasp (22) · akoum (21) · arashin (21) · arcavios troll (21) · ashiok (21)  
assassin symbol (21) · blade between teeth (21) · bokeh (21) · bretagard (21) · capenna aven (21)  
cross section (21) · crush (21) · deadeye fleet (21) · decepticon symbol (21) · disembodied eye (21)  
duskmourn nightmare (21) · ear (21) · edoras (21) · electric guitar (21) · ezio auditore da firenze (21)  
falcon (marvel) (21) · frying pan (21) · furnace (21) · galadriel (21) · grid (21) · heliod (21) · himoto (21)  
hooded cape (21) · illvoi (21) · lake-town (21) · leotau (21) · locket (21) · lynx (21) · markov manor (21)  
mascot (21) · mental intrusion (21) · mist moon (21) · mosaic (21) · mural (21) · nathaniel richards (21)  
obscura symbol (21) · omenport (21) · park heights (21) · pilot (21) · pliers (21) · pulling (21) · rails (21)  
rescue (21) · resting head (21) · saheeli rai (21) · sling (21) · spooky eyes (21) · sun dog (21)  
the biblioplex (21) · thoughtweft (21) · thread (21) · tiara (21) · towers of new prahv (21) · trostani (21)  
umbra (21) · vault dweller (21) · whirlpool (21) · winged cat (21) · wolverine (marvel) (21) · wrenn (21)  
alabile (20) · barn (20) · basilisk (20) · beholder (20) · bird person (20) · brotherhood of steel (20)  
cabbage (20) · cosplay (20) · cult of valgavoth (20) · daredevil (20) · distortion (20) · dragon rider (20)  
earthquake (20) · éowyn (20) · feast (20) · fire nation symbol (20) · flamethrower (20) · france (20)  
frost (20) · gag (20) · gilding (20) · glowing symbol (20) · hole in the clouds (20) · hot dog (20)  
ish sah (20) · judge (20) · mage tower (20) · mightstone (20) · missile (20) · mouser robot (20) · multani (20)  
new phyrexia goblin (20) · newspaper (20) · order of jukai (20) · otto octavius (20) · outline (20) · pelt (20)  
phyrexian orb (20) · pony (20) · predator (ship) (20) · princess (20) · projectile (20) · prosperity (20)  
psychedelic (20) · rathi overlay (20) · ravnica faerie (20) · ravnica guild champion (20)  
riddermark faction symbol (20) · roc (20) · science uniform (20) · scout (20) · sea gate (zendikar) (20)  
skull and crossbones (20) · sleeper agent (20) · slingshot (20) · sloth (20) · speaking (20) · square (20)  
squid (20) · starfish (20) · starfleet insignia (20) · stick figure (20) · tea (20) · the eclipsed realms (20)  
the immortal sun (20) · the seedcore (20) · thran symbol (20) · threefold sun symbol (20) · timebending (20)  
tomato (20) · treasure pile (20) · volcanic fallout (20) · wrist wrap (20) · alquist proft (19) · anchor (19)  
april o'neil (19) · arkbow (19) · avatar state (19) · background eyes (19) · barad-dûr (19) · barrin (19)  
battlement (19) · bench (19) · bioluminescence (19) · bontu's monument (19) · broken mirror (19)  
brown skin (19) · bull (19) · bus (19) · caravan (19) · castle vantress (19) · chalkboard (19) · chef (19)  
combadge (19) · dire fleet (19) · dragon bone (19) · fan axe (19) · figurine (19) · fin hair (19)  
firestorm (19) · fishing rod (19) · flaming fist symbol (19) · flashlight (19) · flower bouquet (19)  
forced perspective (19) · freestrider (19) · garfield (cat) (19) · geyser (19) · gruul goblin (19)  
gunblade (19) · joust (19) · junk (19) · kamehameha (19) · keyhole (19) · khrusor (19) · lever (19)  
mage-ring (19) · many tusks (19) · matoc family sword (19) · meletis symbol (19) · mirari (19) · money bag (19)  
moriok (19) · naruto run (19) · nazgûl (19) · ojutai (19) · oko (19) · operating table (19)  
original orochi design (19) · owlin (19) · party (19) · pepperoni (19) · phaser (19) · planar bridge (19)  
possessed (19) · propellor (19) · rat person (19) · robotic arm (19) · salamander (19) · sandwich (19)  
scarab (19) · scrap (19) · scrying (19) · setessa (19) · sinking (19) · snake hair (19) · spores (19)  
stalking (19) · stirrup (19) · surtland (19) · the abyss (19) · titan's grave (19) · turned to stone (19)  
ultramarines (19) · ultramarines symbol (19) · valgavoth (19) · vomit (19) · vorinclex (19) · wade wilson (19)  
worry (19) · anduin (18) · andúril (18) · atog (18) · axgard (18) · badger (18) · beeble (18) · bite mark (18)  
blow (18) · boseiju (18) · bow (action) (18) · cargo (18) · chest hair (18) · cho-arrim symbol (18)  
classroom (18) · cower (18) · crane (bird) (18) · dalkovan tent (18) · dark cloud (18) · dead eyes (18)  
dolmen (18) · dominant (ffxvi) (18) · duck (18) · egypt (18) · exhumation (18) · father and son (18) · ffxiv (18)  
fire nation capital (18) · frutiger aero (18) · furby (18) · geistmage (18) · ghoul (18) · goblin-town (18)  
greece (18) · green cloak (18) · hand signal (18) · handshake (18) · hellhound (18) · jhoira (18)  
koilos (pre-thaw) (18) · lichen (18) · lizard person (18) · logan (marvel) (18) · lunar phases (18)  
malakir (18) · matthew murdock (18) · mirrex (18) · molten weapon (18) · mud (18) · new argive (18) · oar (18)  
outcaster (18) · palace (18) · panorama-cosmic-cube-battle (18) · panorama-ltr-pelennor-fields (18) · pastel (18)  
quintorius kand (18) · ram (18) · red armor (18) · rhonas (18) · riveteers symbol (18)  
rootwater (pre-invasion) (18) · scaffolding (18) · screw (18) · serialized only artwork (18) · serra (18)  
servant (18) · six pack (18) · sonic screwdriver (18) · soul patch (18) · soup/stew (18) · spring (water) (18)  
super mutant (18) · susur secundi (18) · talas (18) · tape (18) · target phyrexian (18) · taxicab (18)  
teysa karlov (18) · the celestus (18) · tibalt (18) · triarch symbol (18) · tyvar kell (18) · weeping angel (18)  
wooden stake (18) · workbench (18) · wristwatch (18) · yellow dress (18) · zurgo (18) · arm wrap (17)  
armcannon (17) · astrolabe (17) · azra (17) · black rose symbol (17) · blue cloak (17) · boromir (17)  
breath weapon (17) · briefcase (17) · brush (tool) (17) · bug person (17) · bust (17) · castle embereth (17)  
cat rakshasa (17) · cateran (17) · cherry (17) · chubby (17) · cid (17) · collage (17) · cushion (17)  
cyberman (17) · dive (17) · document (17) · dovin baan (17) · erebos (17) · flock of animals (17)  
genestealer (17) · glaive (17) · hanging meat (17) · henry pym (17) · hidden (17) · hummingbird (17)  
hydra symbol (17) · iceberg (17) · illithid (17) · illvoi emote screen (17) · impact (17) · jester's cap (17)  
jet (17) · kalonia (17) · kang the conqueror (17) · kefka palazzo (17) · kefnet's monument (17) · keral keep (17)  
keyboard (17) · koth of the hammer (17) · kyoketsu-shoge (17) · landslide (17) · lich (17)  
locthwain symbol (17) · locust (17) · martial arts (17) · moose (17) · mordor (17) · mount doom (17)  
orange skin (17) · phyrexian invasion ship (17) · pinnacle (17) · power lines (17) · pulley (17) · rampart (17)  
riptide wizard (17) · rocksteady (17) · rohan (17) · rushwood (17) · sapphic (17) · scowl (17) · screwdriver (17)  
siege (17) · sigarda (17) · skaberen (17) · smug (17) · soul (17) · spirit animal (17) · spur (17) · spy (17)  
stone path (17) · tank (container) (17) · training dummy (17) · ultron (17) · uthros (17)  
valley of the spirit dragon (17) · vampire bite (17) · weakstone (17) · weapon rack (17) · white dragon (17)  
winter (17) · winter (character) (17) · wrinkle (17) · yeti (17) · alaborn (16) · artist (16) · bay (16)  
bear trap (16) · bell jar (16) · bird nest (16) · black mage (final fantasy) (16) · bottle cap (16) · butte (16)  
button (mechanical) (16) · cactusfolk (16) · cairn (16) · changeling goo (16) · chimil (16) · closed door (16)  
coppercoat (16) · corn (16) · daisy (16) · dangle (16) · dodging (16) · don't look down (16) · dream (16)  
effigy (16) · ember (16) · escape (16) · etrata (16) · expansion symbol (16) · experiment (16) · felling (16)  
ffiii (16) · ffxiv adventurer (16) · foot (16) · foundry (16) · frillneck lizard (16) · godsend (16)  
greven il-vec (16) · hair (16) · harbor (16) · hedge (16) · hero landing (16) · hive (16) · hoard (16)  
horseshoe (16) · incense (16) · jawbone (16) · keychain (16) · krang (16) · kris (weapon) (16) · lace (16)  
leather glove (16) · mantis (16) · marble (16) · miniature (16) · miter (16) · necromancer (16)  
northern water tribe (16) · number joke (16) · oasis (16) · ornate (16) · partial face (16) · pelt hat (16)  
phyrexian portal ship (16) · pia nalaar (16) · pike (16) · planning (16) · puzzle (16) · quartet (16)  
reckoner (16) · revised artwork (16) · robber (16) · roku (16) · shoulder pad (16) · shrink (16) · silumgar (16)  
skateboard (16) · star trek (16) · steering wheel (16) · sweettooth village (16) · tanuki (16) · the hand (16)  
three fingers (16) · uniform (16) · visor (16) · vitu-ghazi (16) · voda sea (16) · voldaren (16)  
white coalition symbol (16) · windgrace (16) · acrylic ink (15) · aeroplane (15) · astrotorium hat (15)  
bard (15) · bars (15) · basri ket (15) · beanstalk (15) · black panther (15) · blood magic (15)  
bloody knife (15) · blorbian (15) · broken horn (15) · cabaretti symbol (15) · caldaia (15) · candlekeep (15)  
chaos symbol (warhammer 40k) (15) · clock tower (15) · coffee (15) · contract (15) · custodi symbol (15)  
cyclone (15) · cytoplast (15) · dakmor (15) · dauthi (15) · deck (15) · delverhaugh (15) · detective (15)  
doctor (15) · doombot (15) · drink (15) · dungeons and dragons goblin (15) · earth kingdom symbol (15)  
edge of plane (15) · etching (15) · explorer (15) · exultation (15) · face decoration (15) · ffxv (15)  
flying saucer (15) · forked tongue (15) · freyalise (15) · gale (character) (15) · garruk cursed (15) · gift (15)  
goose (15) · hair pin (15) · halfling (15) · helical staircase (15) · hoe (15) · hornet (15) · illness (15)  
illvoi spaceship (15) · inventors' fair (15) · kaiju (15) · kitten (15) · kyoshi (15) · lurking evil (15)  
makindi trenches (15) · menhir (15) · midgar (ffvii) (15) · minaret (15) · mite (15) · monica rambeau (15)  
mutagen (15) · nacatl (15) · niko aris (15) · oil resisting adapation (15) · oracle (15) · oran-rief forest (15)  
origami (15) · painter (15) · pier (15) · pod (15) · pyrefly (15) · ragged clothing (15)  
red coalition symbol (15) · redtooth keep (15) · room (15) · round shield (15) · samut (15) · shark person (15)  
silver (15) · slipper (15) · soldev (15) · stained glass wings (15) · strixhaven first-year (15) · swan (15)  
thanos (15) · the elderspell (15) · ticket (15) · time vortex (15) · tiny (15) · tinybones (15)  
traffic sign (15) · tree trunk (15) · urabrask (15) · vandalism (15) · voodoo doll (15) · werefox (15)  
wheelchair (15) · wooden beams (15) · aerith gainsborough (14) · airborne (14) · amonkhet aven (ibis) (14)  
anthropomorphic (14) · archaeology (14) · arrest (14) · avabruck/hollowhenge (14) · avengers (14)  
avengers tower (14) · avishkar (origin) (14) · awe (14) · bat'leth-like (14) · bebop (14) · beckon (14)  
binoculars (14) · black beard (14) · black tear (14) · bloodshot eye (14) · boomerang (14) · brown fur (14)  
canal (14) · caracal (14) · casey jones (14) · chitin (14) · chokehold (14) · cliff dwelling (14)  
contraption (14) · couch (14) · court of law (14) · crescent (14) · crowbar (14) · daretti (14) · darigaaz (14)  
deadpool (hero icon) (14) · deathclaw (14) · dora milaje (14) · draugr (14) · dromoka (14) · drop of water (14)  
drumstick (14) · dungeon (14) · edgar markov (14) · electric lamp (14) · excavation (14) · faerie dragon (14)  
final fantasy summon (14) · floating text (14) · floor (14) · foggy swamp (14) · game (14) · gavel (14)  
geralf cecani (14) · ghalta (14) · gilt-leaf wood (14) · gixian (14) · glamdring (14) · halterneck (14)  
handprint (14) · hatch (14) · hatchet (14) · hidetsugu (14) · hippocamp (14) · hyena (14) · ice breath (14)  
ice cream (14) · ifrit (14) · immersturm (14) · incineration (14) · investigation (14) · jetpack (14)  
juggernaut (14) · katilda (14) · kirin (14) · klingon (14) · lectern (14) · licid (14) · lockpick (14)  
longboat (14) · mallet (14) · mathematics (14) · milk (14) · mycoid (14) · new coalition (14) · noose (14)  
nostril (14) · okiba reckoners (14) · orator (14) · ororo munroe (14) · paleoart (14) · palette (14)  
panorama-position-5 (14) · pardic barbarian (14) · parrot (14) · pipe (instrument) (14) · pocket watch (14)  
port (14) · present (14) · pteron (14) · quicksilver (14) · radha (14) · ragavan (14) · ravnica troll (14)  
red cloak (14) · red robe (14) · rimekin (14) · sand wave (14) · serving (14) · skysail (14) · smiley face (14)  
spring (coil) (14) · squall leonhart (14) · stadium (14) · starke il-vec (14) · stegosaurus (14)  
stingerquill college (14) · storm elemental (14) · surfing (14) · terra branford (14) · the maelstrom (14)  
the moorland (14) · theater (14) · thirteen (14) · toad (14) · town square (14) · ulgrotha minotaur (14)  
wine (14) · wrapping (14) · yargle (14) · yellow tooth (14) · zhalfir (14) · abandoned (13) · abzan symbol (13)  
acrobat (13) · adagia (13) · aqueduct (13) · arwen undómiel (13) · ashling (flamekin) (13) · assembly line (13)  
atarka (13) · attack (13) · attacking (13) · balancing (13) · barrow-blade (13) · bicep (13)  
blind eternities (13) · blizzard (13) · bogardan (13) · boiler (13) · bola (13) · boxing ring (13) · brass (13)  
brokers symbol (13) · burger (13) · carnivore plant (13) · castle locthwain (13) · caterpillar (13) · cereal (13)  
charcoal (medium) (13) · coin purse (13) · compleation (13) · consulate symbol (13) · cork (13) · corondor (13)  
crane (machinery) (13) · crayon (medium) (13) · creature on shoulder (13) · crow's nest (13) · cymbals (13)  
display case (13) · distant cityscape (13) · dominaria spires (13) · drix (13) · eddie (iron maiden) (13)  
edgewall (13) · elementalkin (13) · elrond (13) · elspeth tirel (angel) (13) · emeria (location) (13)  
engine (13) · envelope (13) · eorzea (13) · eriette (13) · explosive (13) · eye (creature) (13)  
eye (symbol) (13) · fisherman (13) · funeral (13) · giada (13) · gigeresque (13) · gix (13) · gnottvold (13)  
god-pharaoh's statue (13) · googly eyes (13) · green light (13) · gríma wormtongue (13) · guitar (13)  
hama pashar (13) · hockey mask (13) · hulk smash (13) · hydra (marvel) (13) · judith (13) · juggling (13)  
kher ridges (pre-thaw) (13) · kin tree (13) · kolaghan (13) · krasis (13) · ladle (13) · maestros symbol (13)  
manhole (13) · marchesa d'amati (13) · marker (medium) (13) · mine cart (13) · mole (animal) (13)  
mordor faction symbol (13) · mowu (13) · muzzle flash (13) · mysterio (13) · nadaar (13) · namor (13)  
neck ruff (13) · not a hat (13) · null (13) · office (13) · omashu (13) · ondu (13) · onomatopoeia (13)  
orange dress (13) · pair (13) · parade (13) · parasite blade (13) · phyrexian airship (13)  
phyrexian corruption (13) · pinecone (13) · pixie (13) · prince (13) · quadruple wielding (13) · quarry (13)  
regisaur (13) · sabaton (13) · saddlebag (13) · scale dragon (13) · scale spaceship (13) · sconce (13)  
sephiroth (13) · shadowheart (13) · shandalar (origin) (13) · sofa (13) · somberwald (13)  
southern air temple (13) · spider leg (13) · statuette (13) · storm fleet (13) · taj-nar (13)  
tank (vehicle) (13) · tazeem (13) · thassa (13) · the eleventh doctor (13) · the locust god (13)  
the tenth doctor (13) · the thirteenth doctor (13) · tifa lockhart (13) · toolbox (13) · train station (13)  
trip (13) · unit (doctor who) (13) · vanishing (13) · varis (13) · venser (13) · vodalian (13)  
vulture (marvel) (13) · warrior of light (ff1) (13) · wart (13) · waterspout (13) · wolverine (13) · xander (13)  
xantcha (13) · zendikar minotaur (13) · adrian toomes (12) · aesthir (12) · alcohol (12) · algae (12)  
amonkhet angel (12) · aquila (12) · archfiend of ifnir (12) · argive symbol (12) · art mismatch (12)  
astra militarum (12) · bayek (12) · black armor (12) · bonsai tree (12) · bronze (12) · bust (perspective) (12)  
camel (12) · can (12) · candy cane (12) · carnival stand (12) · ceremony (12) · chaos emerald (12) · chapel (12)  
chisel (12) · chrome (12) · circle of weapons (12) · coil (12) · compass rose (12) · confused (12)  
conveyor belt (12) · creepshow (12) · cupcake (12) · danny rand (12) · dina (12) · dinosaur skull (12)  
dissolve (12) · dogmeat (12) · donkey person (12) · drapery (12) · drumstick (instrument) (12)  
ears covered (12) · easel (12) · eldrazi werewolf (12) · eldritch (12) · elektra (12) · ellywick tumblestrum (12)  
embereth symbol (12) · faerûn (12) · ffxi (12) · fiery eye (12) · flaming arrow (12) · frog, fleeing (12)  
gadgetry (12) · geisha (12) · geist as fuel (12) · genestealer symbol (12) · ghoul (fallout) (12)  
gingerbread house (12) · gondor (12) · goohaired (12) · grand coliseum (12) · grey havens (12) · grindstone (12)  
gross (12) · guild roundel (12) · hammerhead shark (12) · havengul (12) · helica tree (12) · hilt (12)  
hornburg (12) · hot spring (12) · hoverbike (12) · hunter (12) · hyozan reckoners (12) · istfell (12)  
ithilien (12) · ixalan (origin) (12) · jhovall (12) · karlach (12) · keikogi (12) · krenko (12)  
kyren clothing (12) · lat-nam (pre-thaw) (12) · latveria (12) · long arms (12) · lorwyn/shadowmoor goblin (12)  
lukka (12) · lyre (12) · magic invitational art (12) · malamet (12) · mary jane watson (12)  
masamune (ffvii) (12) · mastix (12) · mausoleum (12) · megalith (12) · merge site (12) · motley (12)  
mu yanling (12) · nashi (12) · nautilus (12) · nick fury jr. (12) · nipple piercing (12)  
noctis lucis caelum (12) · norwood (12) · oboro (12) · old forest (12) · orange hair (12) · oriq (12)  
otter (12) · ozai (12) · pelargir (12) · piano (12) · plaque (12) · purple dragon (12) · radiant breath (12)  
rags (12) · red dragon (dnd) (12) · reef (12) · rith (12) · roast chicken (12) · satellite dish (12)  
screech (12) · sea gate lighthouse (12) · selvala (12) · sergei kravinoff (12) · serra's sanctum (12)  
shining (12) · skirge (12) · sport (12) · squee's toy (12) · squire (12) · starfleet spacecraft (12)  
stormkeld (12) · strixhaven symbol (12) · sweat (12) · talking (12) · tank tread (12) · tar pit (12)  
the gitrog monster (12) · the scarab god (12) · théoden (12) · thorny thicket (12) · thran (12)  
transparent skin (12) · trench (12) · tsabo tavoc (12) · un-iverse (12) · ureni (12) · urza's tower (12)  
vnwxt (12) · watering can (12) · wig (12) · wild cat (12) · winter's home (12) · wrist blade (12) · wyll (12)  
xenagos (god) (12) · zebra (12) · zodiac (12) · aetherflux reservoir (11) · amber (11) · angrath (11)  
anklet (11) · atraxa (11) · auger (11) · balduvia (pre-thaw) (11) · ballpoint pen (medium) (11) · bant angel (11)  
bark (11) · baseball (11) · bath (11) · beauty mark (11) · bicycle (11) · billboard (11) · blitzball (11)  
bloody sword (11) · blue coalition symbol (11) · blueberry (11) · chess (11) · chopstick (11)  
classic art homage (11) · clockwork (11) · coatl (11) · cold climate (11) · cookie (11) · crank (11) · cub (11)  
dagorlad (11) · danitha capashen (11) · dice (11) · dunbarrow (11) · duskmourn gremlin (11) · eikon (11)  
eivor varinsdottir (11) · electro (11) · ember island (11) · emoji (11) · emyn muil (11) · ephara (11)  
eyebrow (11) · fae world (11) · fathom fleet (11) · fishnet stockings (11) · flaming fist (faction) (11)  
flying carpet (11) · four eyes (11) · foxglove (11) · gazebo (11) · giant-man (11)  
glissa sunseeker (phyrexian) (11) · gnoll (11) · golgothian sylex (11) · grenzo (11) · grim face (11)  
grist (11) · grove (11) · hanged figure (11) · happy (11) · helicarrier (11) · hypnotism (11)  
imperium (faction) (11) · ink wash (11) · iron fist (11) · isperia (11) · ivalice (11) · japanese text (11)  
jiang yanggu (11) · jolrael (11) · karametra (11) · karfell (11) · kasmina (11) · kazandu (11) · killian lu (11)  
kitchen knife (11) · knot (11) · koilos (11) · konda symbol (11) · kraul (11) · kuldotha (11) · lavabrink (11)  
luke cage (11) · mage hunter (11) · maxwell dillon (11) · metal beam (11) · microscope (11) · militia (11)  
mirrodin text (11) · mold (11) · monty python (11) · morannon (11) · mosquito (11) · necron glyphs (11)  
orthanc-stone (11) · party hat (11) · phage the untouchable (11) · phalanx (11) · photon (11)  
phyrexian negator (11) · pink fumes (11) · porcupine (11) · proboscis (11) · prostrate (11) · purse (11)  
quicksilver (marvel) (11) · quirion (11) · rakshasa (11) · ranger (11) · rat fink style (11) · ravine (11)  
red sun (11) · regatha (11) · religion (11) · rome (11) · rot (11) · runner (11) · sailor (11)  
sammath naur (11) · sea foam (11) · self portrait (11) · serra's alternate symbol (11) · shang-chi (11)  
sinkhole (11) · sizzling feet (11) · skirsdag (11) · skull facepaint (11) · soltari (11) · spatula (11)  
spike (species) (11) · spinosaurus (11) · spiran text (11) · spying (11) · squinting (11) · stone skin (11)  
tablet (11) · tanglespan (11) · temur symbol (11) · teval (11) · the cabbage merchant (11)  
the first doctor (11) · the scorpion god (11) · the speed demon (11) · the twelfth doctor (11) · thrun (11)  
tiered farmland (11) · titania (11) · toppling (11) · tovolar (11) · training (11) · tray (11) · trilobite (11)  
unconscious (11) · unusual proportions (11) · venus flytrap (11) · vigorbloom college (11)  
wan shi tong's library (11) · western paladin (7ed) (11) · white mustache (11) · wickerfolk (11)  
witherbloom symbol (11) · wooden door (11) · wooden shield (11) · xmas (11) · yotian (11) · zhalfirin (11)  
ziggurat (11) · a.i.m. (10) · abseiling (10) · accordion (10) · acid (10) · adeptus sororitas (10)  
aerosaur (10) · baldur's gate 3 companion (10) · balrog (10) · banshee (10) · baral (10)  
baxter stockman (mutant) (10) · belzenlok (10) · boston (10) · bowl cut (10) · brotherhood (ffx sword) (10)  
bucky barnes (10) · burrog (10) · capenna angel (statue) (10) · caradora (10) · celesta (10) · ceratops (10)  
chain whip (10) · chef hat (10) · clean slice (10) · consulate enforcer (10) · covering ears (10)  
cragflame (10) · crenelation (10) · dappled (10) · dead marshes (10) · death pits (10)  
deformed avacyn's collar (10) · demigod (10) · dire-strain werewolf (10) · disguise (10) · diver helmet (10)  
dolphin (10) · dragon engine (10) · dragoon (10) · drawer (10) · duplicate (10) · east-asian dragon (10)  
eddie brock (10) · emmara tandris (10) · ertai (10) · faramir (10) · fatehold college (10) · festival (10)  
figurehead (10) · flexing (10) · flying sword (10) · fyndhorn (10) · geometry (10) · ghoulcaller (10)  
gingerbread man (10) · glowing chain (10) · gonti (10) · greenhouse (10) · grief (10) · griselbrand (10)  
ground-level (10) · guild cooperation (10) · guul draz (10) · hag (10) · handcuff (10) · hanweir (10)  
helmut zemo (10) · hive fleet behemoth (10) · hoodie (10) · improvised weapon (10) · intimidate (10) · iroas (10)  
isometric (10) · italy (10) · ivory (10) · jennika (10) · koi (10) · koma (10) · kuruk (10) · la (avatar) (10)  
lamp post (10) · laurel wreath (10) · lazav (10) · leatherhead (10) · li'l giri (10) · lin sivvi (10)  
lizard (marvel) (10) · locke cole (10) · mabel (10) · machete (10) · manhole cover (10) · mannequin (10)  
marching (10) · mars (10) · massacre girl (10) · masticore (10) · mechanical exoskeleton (10) · mortis dog (10)  
mycosynth (10) · nenya (10) · new california republic (10) · norman osborn (10) · norway (10) · omnath (10)  
optimus prime (10) · orange (fruit) (10) · panorama-mkm-strange-scene (10) · panorama-spg-reality-fracture (10)  
panorama-tla-book3 (10) · panorama-xln-map (10) · parchment (10) · peacock (10) · petrify (10) · petroglyph (10)  
piggyback (10) · pitcher (10) · polar bear (10) · pottery (10) · puppetbeast (10) · quentin beck (10)  
quinjet (10) · radiation symbol (10) · rake (10) · red carpet (10) · renegade symbol (10) · restaurant (10)  
rhino (marvel) (10) · rishada (10) · rootha squallheart (10) · rootwalla (10) · scorpion dragon (10)  
seedling (10) · seedpod cocoon (10) · sejiri (10) · serra's symbol (10) · severed foot (10) · silver surfer (10)  
skycoach (10) · soul siphon (10) · spectacle summit (10) · spider-ham (10) · spider-sense (10) · spot (10)  
star wars (10) · stromkirk (10) · stubble (10) · stuffy doll (10) · surfacing (10) · swimsuit (10)  
sword fight (10) · t-60 power armor (10) · takara en-dal (10) · tamiyo (phyrexian) (10) · teach (10)  
tevesh szat (10) · teyo verada (10) · the arkenstone (10) · the benefactors (10) · the fourth doctor (10)  
the princess bride (10) · the second doctor (10) · the third doctor (10) · thought strand (10)  
tolaria west (10) · treebeard (10) · tyrranax (10) · uktabi (10) · underwear (10)  
unintentional phyrexian symbol (10) · valakut (10) · virot maglan (10) · wanderbrine (10) · wary (10)  
water wheel (10) · waterskin (10) · weathertop (10) · westvale cult symbol (10) · wheelbarrow (10)  
white cloak (10) · white mountains (10) · wolf pack (10) · wreck (10) · wrestling (10) · zanarkand (10)  
zidane tribal (10) · abduction (9) · aclazotz (9) · advisor (9) · aeon (ffx) (9) · ajani goldmane (phyrexian) (9)  
altaïr ibn-la'ahad (9) · aminatou (9) · anurid (9) · astarion (9) · asteroid (9) · axolotl (9) · bant aven (9)  
barrier (9) · battering ram (9) · beastie (9) · big red button (9) · black aura (9) · black coalition symbol (9)  
blinkmoth (9) · boardwalk (9) · bobblehead (9) · body piercing (9) · boros goblin (9) · boxing glove (9)  
brahmin (9) · brain in a jar (9) · bram stoker's dracula (9) · broken bottle (9) · brook (9)  
building elemental (9) · bumi (9) · butcher (9) · cannon fodder (9) · card "damage" (9) · carrion (9)  
castle garenbrig (9) · cat person (9) · catacomb (9) · celes chere (9) · chainer (9) · chaos space marine (9)  
charm (9) · chick (9) · clapping (9) · clearing (9) · clipboard (9) · compleated planeswalker (9)  
count dracula (9) · crosis (9) · dakkon blackblade (9) · dam (9) · dark figure (9) · decorated skull (9)  
deepwood (9) · digital tablet (9) · disembodied hand (9) · door knocker (9) · doreen green (9)  
drownyard temple (9) · eastern paladin (7ed) (9) · ent (9) · esika (9) · exoskeleton (9) · fancy armor (9)  
ffx (9) · fiora goblin (9) · fish (food) (9) · fluorescent light (9) · flying fish (9) · fried egg (9)  
galactus (9) · garlic (9) · gas (9) · gas mask (9) · germany (9) · giant tree (9) · giraffe (9) · girder (9)  
gold saucer (9) · gold tooth (9) · gorge (9) · gown (9) · graphite (9) · gray eye (9) · green robe (9)  
hades (ffxiv) (9) · hairy arm (9) · helvault (9) · hylda (9) · hylda's crown (9) · indiana (9)  
james t. kirk (9) · jeska (9) · jetmir (9) · kairi (9) · kaldra (9) · karai (9) · kassandra (9) · khalni (9)  
kiki-jiki (9) · kirby krackle (9) · kite (9) · kobold (9) · krark (9) · kratos (9) · lagorin (9) · lalafell (9)  
lambholt (9) · large weapon (9) · lasso (9) · lavender (9) · lavinia (9) · lawyer (9) · legionnaire (9)  
lgbtq-plus (9) · lights (9) · liliana vess (echoverse) (9) · liliana's demonic pact (9) · living historians (9)  
lone rider (9) · lotr troll (9) · luca (ffx) (9) · lumaret (9) · lunge (9) · lure (9) · luxior (9)  
macuahuitl (9) · magic handcuff (9) · magic wing (9) · magitek armor (9) · many horns (9)  
mer-ek/great aerie (9) · model (9) · momir vig (9) · mortar (9) · mountain slope (9)  
multicolored background (9) · myojin (9) · nails (9) · neriv (9) · no nipple (9) · northern paladin (7ed) (9)  
oketra's monument (9) · ophelia sarkissian (9) · optical illusion (9) · ouroboros (9) · oven (9) · owlbear (9)  
pale (9) · panorama-amsh-thanos (9) · panorama-contraption-cross (9) · panorama-contraption-doom (9)  
panorama-contraption-goblin (9) · panorama-contraption-sneak (9) · panorama-contraption-widget (9)  
panorama-hob-five-armies (9) · panorama-khm-substitute-card (9) · panorama-ltr-isengard (9)  
panorama-mid-substitute-card (9) · panorama-neo-substitute-card (9) · panorama-spm-scene (9)  
panorama-stx-substitute-card (9) · panorama-tmt-mutantmelee (9) · panorama-vow-substitute-card (9)  
panorama-znr-substitute-card (9) · pencil (9) · perspective from far (9) · pharika (9) · pin (9)  
poison breath (9) · radiant (character) (9) · raffine (9) · raffine's mask (9) · rainbow hair (9) · raspberry (9)  
red beard (9) · reed (9) · reptile (9) · russia (9) · rusted sword (9) · scavenger (9) · scott lang (9)  
seed (9) · sharp chin (9) · shepherd (9) · shiko (9) · slimefoot (9) · slug (9) · sneer (9) · snout (9)  
spider-punk (9) · spiked collar (9) · split jaw (9) · stamp (9) · star trail (9) · stephen strange (9)  
stone tablet (9) · storm crane monastery (9) · struggle (9) · suki (9) · surrak dragonclaw (9) · suspension (9)  
swamp elemental (9) · sword of the realms (9) · tapestry (9) · tatami mat (9) · taxidermy (9) · tel-jilad (9)  
temur goblin (9) · the fifth doctor (9) · the roil (9) · theorix college (9) · tire (9) · tmnt turtle (9)  
topiary (9) · tyrite (9) · urborg witch (9) · vacuum tube (9) · vent (9) · vesuva (9) · video arcade (9)  
virginia (9) · visual impairment (9) · vito (9) · vulture aven (9) · wakka (9) · watermelon (9) · whirl (9)  
white mage (final fantasy) (9) · white sky (9) · wildsear (9) · willow (9) · wilson fisk (9) · wisp (9)  
wisteria (9) · wojek (9) · world war ii (9) · wumpus (9) · x marks the spot (9) · yin yang (9) · zegana (9)  
aetheryte (8) · agrus kos (spirit) (8) · akmon (8) · aleksei sytsevich (8) · alesha (8) · allosaurus (8)  
aya (8) · azusa (8) · badgermole (8) · balamb garden (8) · barcode (8) · bard the bowman (8) · baron zemo (8)  
barred window (8) · battle camp (8) · bauble (8) · bear cub (8) · beard ring (8) · beer (8) · betor (8)  
blue drake (8) · blurred (8) · bo levar (8) · bolt (8) · boo (8) · borg (8) · bowl island (8) · branding iron (8)  
breeches (character) (8) · brigid baeli (8) · bunny ears (8) · bury (8) · bustier (8) · cabal city (8)  
cactuar (8) · cannonball (8) · canoe (8) · card art (8) · carpet (8) · cat warrior (8) · cecil harvey (8)  
cho-manno (8) · cindy moon (8) · cirith ungol (8) · clara oswald (8) · cloche (8) · comet (8) · corridor (8)  
curse guy (8) · cyberpunk (8) · cypress (8) · dad (8) · dai li (8) · debauchery (8) · displacer beast (8)  
djeru (8) · dodecahedron (8) · doomskar (8) · doughnut (8) · dragon bell (8) · dropping (8) · dwight schrute (8)  
earth rumble arena (8) · eggshell (8) · eldraine troll (8) · elvenking's halls (8) · emperor (8)  
eriette's apple (8) · ertai (phyrexian) (8) · eshki dragonclaw (8) · esper (ffvi) (8) · examining (8)  
execution (8) · ezuri (phyrexian) (8) · familiar (8) · feed (8) · ffii (8) · ffix (8) · final fantasy job (8)  
firelight (8) · fort (8) · four-segment cartouche (8) · fun guy (8) · gateless (8) · ghor clan (8) · gisela (8)  
godzilla (8) · gourd (8) · green coalition symbol (8) · green dragon (dnd) (8) · green jewel (8) · guff (8)  
gyroscope (8) · hagra (8) · half (8) · hay bale (8) · hedge maze (8) · herugrim (8) · hockey stick (8)  
honey (8) · hose (8) · hot coals (8) · infinity gauntlet (8) · ingot (8) · intestine (8) · ixidor (8)  
jackal (8) · jadzi (8) · jaheira (8) · james rhodes (8) · jerren (8) · jodah (8) · jwar (8) · kaalia (8)  
kaervek (8) · kalastria (8) · kathari (8) · kelp (8) · keranos (8) · key art (tournament pack) (8) · korvold (8)  
kroog (8) · kroxa (8) · ladybird (8) · lae'zel (8) · lim-dûl (8) · lollipop (8) · lorehold symbol (8)  
lower city (baldur's gate) (8) · lulu (ffx) (8) · maggot (8) · maro-sorcerer (8) · medal (8) · megatron (8)  
mental battle (8) · metal wing (8) · minas morgul (8) · minsc (8) · mizzium (8) · modern shop (8) · mogis (8)  
moloid (8) · mother and son (8) · mr. handy (8) · ms. marvel (8) · museum (8) · mutilation (8) · nearheath (8)  
oathbreaker (lotr) (8) · odric (human) (8) · olive (8) · onion dome (8) · opal (8) · opossum (8) · orangutan (8)  
origami crane (8) · ormendahl (8) · ouroboros of pharika (8) · palisade (8) · pangolin (8) · pardic mountains (8)  
parhelion ii (8) · phantom (8) · pietro maximoff (8) · pixelated (8) · plow (8) · precinct three (8)  
pteruges (8) · punch card (8) · purple cloak (8) · queue line (8) · ramos (8) · ravenloft (8) · razaketh (8)  
red cloud (8) · redwing (8) · roast suckling pig (8) · rockslide (8) · rod (8) · romania (8) · rose tyler (8)  
runaways (marvel) (8) · sabin rene figaro (8) · sandman (8) · sarevok anchev (8) · satoru umezawa (8)  
sausage (8) · scalpel (8) · scotland (8) · sculptor (8) · scythecat (8) · seahorse (8) · selenia (8)  
setessa symbol (8) · seven (character) (8) · shadowfax (8) · shatterskull pass (8) · shifting wastes (8)  
shocker (marvel) (8) · shroud (8) · silk (marvel) (8) · sink (8) · sirwal (8) · six (character) (8) · skarrg (8)  
skophos (8) · skrull (8) · skull necklace (8) · slash (tmnt) (8) · slave (8) · sled (8) · sliding (8)  
slimer (8) · slith (8) · spaceship bridge (8) · spider-like (8) · spinning top (8)  
star trek: deep space nine (8) · star trek: voyager (8) · steepling (gesture) (8) · stepping stone (8)  
sticker (8) · straining (8) · sultai symbol (8) · swing (8) · switch (8) · sword of chaos (8) · sygg (8)  
tarkir goblin (8) · tawnos (8) · terrarium (8) · thalakos (8) · the island (fortnite) (8)  
tolsimir wolfblood (8) · toshiro umezawa (8) · transmogrant (8) · traxos (8) · triceraton (8) · trowel (8)  
turntimber (8) · tzeentch daemon (8) · umezawa's jitte (8) · underbite (8) · undine (8)  
upper city (baldur's gate) (8) · urborg spirit (8) · us flag (8) · useless island (8) · vhal (8)  
vivi ornitier (8) · voja fenstalker (8) · vraska (phyrexian) (8) · wanderwine (8) · war pick (8) · weapon (8)  
weasel (8) · wester drumlins (8) · winter soldier (8) · witchstalker (8) · wolf cove (8) · wraith (8)  
yellow dragon (8) · yoke (8) · zahur (8) · zhur-taa clan (8) · zoom (8) · zubera (8) · 1st place (7)  
achillean (7) · acoustic guitar (7) · aerona (7) · agatha (7) · air nomad symbol (7) · akros banner (7)  
algenus kenrith (7) · alora (7) · alrund (7) · animal hide (7) · ankh (7) · aphetto (7) · apothecary (7)  
ashaya (7) · ashmouth (7) · assaultron (7) · au ra (7) · aurochs (7) · avengers mansion (7) · bacon (7)  
bairn (7) · ball and chain (7) · banana peel (7) · barnacle (7) · barret wallace (7) · barrow-downs (7)  
basin (7) · basketball (7) · basketball court (7) · bat'leth (7) · bayou (7) · ben reilly (7) · besaid (7)  
bill the pony (7) · bloodbowl (7) · booby trap (7) · border (7) · brago (7) · braids (character) (human) (7)  
bumblesheep (7) · bunting (7) · buried alive (7) · carnage (symbiote) (7) · cerberus (7) · chainsword (7)  
chakram (7) · chamber (7) · cheetah (7) · church of serra (7) · church pew (7) · clive rosfield (7)  
clothing on ground (7) · coif (7) · collapsing (7) · compass (drawing) (7) · concentration (7) · condor (7)  
contrasting colors (7) · converter beast (7) · cornucopia (7) · corsair of umbar (7) · crystal tower (ffxiv) (7)  
curt connors (7) · daemogoth (7) · dagger (ffix) (7) · davriel cane (7) · dimension x (7) · disco ball (7)  
disgust (7) · dominaria troll (7) · dragon head (7) · drana (7) · duergar (7) · dwarf fortress (7)  
dwimorberg pass (7) · ecoline (7) · eirdu (7) · eldraine satyr (7) · electrocute (7) · elenda of garrano (7)  
elessar (7) · epaulette (7) · erdwal (7) · erik killmonger (7) · erratic portal (7) · etali (7) · far fortune (7)  
ferret (7) · fetus (7) · flat cap (7) · floating face (7) · forum of amity (7) · french fry (7) · g'raha tia (7)  
galazeth prismari (7) · gallifrey (origin) (7) · gary (snail) (7) · glowing dagger (7) · gobakhan (7)  
goldfish (7) · gollum's lake (7) · gothic (7) · great necropolis (7) · grim reaper (marvel) (7) · grimgrin (7)  
guardian (7) · gut (character) (7) · hakka (7) · hand crossbow (7) · headbutt (7) · headshot (7) · help (7)  
high ceiling (7) · honeycomb (7) · ian malcolm (7) · icatia (7) · ichor eyes (7) · icing (7) · iguana (7)  
imoen (7) · innistrad (origin) (7) · interrogation (7) · ixalan deep goblin (7) · izoni (7) · jacob frye (7)  
jugan (7) · junji (7) · kagamine len (7) · kagamine rin (7) · kaito (vocaloid) (7) · kamala khan (7)  
kari zev (7) · karlov (7) · karona (7) · kayla bin-kroog (7) · khorne daemon (7) · kirol (7) · kjeldoran (7)  
klement (7) · kneepad (7) · kobold (dungeons and dragons) (7) · kruphix (7) · kyodai (7) · kyoshi island (7)  
lagac (7) · late afternoon (7) · lathliss (7) · leori (7) · lettuce (7) · lier (7)  
lightning (final fantasy) (7) · lulu (7) · lyra dawnbringer (7) · m.o.d.o.k. (7) · magic logo (7)  
mako reactor (7) · man ray (7) · marit lage (7) · mary macpherran (7) · match (7) · materia (7) · memnarch (7)  
miqo'te (7) · mirrored subject (7) · mishra (phyrexian) (7) · mizzix (7) · mondo gecko (7) · money (7)  
mongoose (7) · morkrut (7) · mwonvuli (7) · nature & building (7) · new phyrexia (origin) (7) · niambi (7)  
nissa's symbol (7) · noggle (7) · nomad (7) · northern air temple (7) · nylea (7) · o-kagachi (7)  
ojer kaslem (7) · okaun (7) · one leg (7) · one vs many (7) · onesie (7) · onion (7) · orchid (7) · orcrist (7)  
osgiliath (7) · pajama (7) · pan flute (7) · panorama-position-6 (7) · panorama-tla-book2 (7) · pear (7)  
pec (7) · pentagram (7) · physical disability (7) · picture (7) · pink eye (7) · playing (7) · polukranos (7)  
prairie (7) · prehensile tail (7) · prismari symbol (7) · prompto argentum (7) · purphoros (7) · radagast (7)  
radiation (7) · rakdos goblin (7) · ramunap (7) · rasaad yn bashir (7) · rat king (tmnt) (7) · red fur (7)  
riot (7) · rollercoaster (7) · rona (human) (7) · ruby (character) (7) · ruffian (7) · sanctum of the sun (7)  
scale vehicle (7) · scarlet spider (7) · scholar (7) · scratching head (7) · secret squirrel (7)  
severed finger (7) · shadowspear (7) · shiva (ff) (7) · shrapnel (7) · sidesaddle (7) · signature (7)  
sita varma (7) · skanos (7) · smelling (7) · sozin's comet (7) · spock (7) · stain (7) · steel beam (7)  
sticky note (7) · stockade (7) · straw (7) · stronghold furnace (7) · sunken (7) · superhero (7)  
sword coast (7) · taigam (7) · tattered (7) · tennessee (7) · the first (ffxiv) (7) · the mind stone (7)  
the ninth doctor (7) · the soul stone (7) · thranduil (7) · three tree city (7) · thumb (7) · tinkering (7)  
titan (ff) (7) · titania (marvel) (7) · tocasia (7) · torture chamber (7) · traffic cone (7) · traft (7)  
trapdoor (7) · triple wielding (7) · troll (7) · trophy (7) · turned face (7) · uss enterprise ncc-1701-d (7)  
utrom (7) · varmint (7) · venice (7) · vess manor (7) · viconia devir (7) · violin (7) · war machine (marvel) (7)  
weathervane (7) · web strand (7) · wedding (7) · weeping willow (7) · whistle (instrument) (7)  
white lotus symbol (7) · wilderness (7) · william baker (7) · william kaplan (7) · wilson (7) · wrecking ball (7)  
y'shtola rhul (7) · yari (7) · yawgmoth (7) · yuffie kisaragi (7) · zen garden (7) · abomination (marvel) (6)  
adarkar (6) · aetherborn vampire (6) · agony (6) · all ten guild symbols (6) · altisaur (6)  
amber gristle o'maul (6) · amelia pond (6) · amethyst (6) · anafenza (6) · anax (6) · ancestral recall person (6)  
annie flash (6) · ao (character) (6) · arahbo (6) · arbalest (6) · arizona (6) · art swap (6)  
ascii (medium) (6) · astelli (6) · athlete (6) · atlantean (6) · atsushi (6) · avishkar angel (6) · backstab (6)  
bahamut (final fantasy) (6) · baku (6) · bean (6) · beaver (6) · beckett brass (6) · belegaer sea (6)  
bellows (6) · berserker (6) · bert (lotr) (6) · black cat (marvel) (6) · blood drinking (6) · boarded opening (6)  
bone dragon (6) · bookstand (6) · borborygmos (6) · brain dead logo (6) · bree (6) · broccoli (6)  
brown boot (6) · brushwagg (6) · buck teeth (6) · buckland (6) · bullseye (marvel) (6) · button-down shirt (6)  
cabinet (6) · cadian symbol (6) · caesar's legion (6) · calendar (6) · caradhras (6) · card game (6)  
carrier (6) · cave of light (6) · cello (6) · cervin (6) · charred (6) · chili pepper (6) · clam (6)  
coconut (6) · collared shirt (6) · conservatory (6) · cordyceps infected (6) · cornrows (6) · cougar (6)  
cough (6) · crossed eyes (6) · cryptek (6) · cyan garamonde (6) · dáin ironfoot (6) · dale (6)  
dark knight (ff) (6) · dawnglove (6) · decay elemental (6) · defensive stance (6) · deforestation (6)  
devour (6) · dinghy (6) · doran (6) · dorothea (6) · dotted line (6) · dream halls (6) · dromar (6)  
dromoka symbol (6) · dune (6) · duskmantle (6) · edward kenway (6) · elspeth tirel (6) · elspeth's cloak (6)  
emil blonsky (6) · éomer (6) · ephixis (6) · eric williams (6) · erik josten (6) · eye of ugin (6)  
eye popping (6) · fallaji symbol (6) · fallen warrior (6) · fangren (6) · felix the cat (6) · felothar zanhar (6)  
ffiv (6) · ffv (6) · filigree sylex (6) · fin beard (6) · fishbowl (6) · flare (6) · flower bud (6) · font (6)  
fountainport (6) · furrowed brow (6) · galaxy (6) · garenbrig symbol (6) · garter (6) · ghost council (6)  
gilgamesh (ffv) (6) · gill (6) · gishath (6) · glissa sunseeker (elf) (6) · glowing arrow (6) · glowing feet (6)  
glue (6) · gnarlid (6) · gnarr (6) · goat person (6) · goddric (6) · gold dragon (6) · goldmeadow (6)  
golf club (6) · goma fada caravan (6) · groot (6) · ground (6) · growling (6) · grub (character) (6)  
guan yu (6) · guillotine (6) · haazda (6) · hadrosaurid (6) · hagi (6) · hairless (6) · hairy leg (6)  
halcyon (6) · haliya (6) · ham (6) · hand mouth (6) · handkerchief (6) · hazmat suit (6) · heat (6) · helga (6)  
henrika domnathi (6) · herman schultz (6) · high and dry (6) · hobgoblin (marvel) (6) · hollow tree (6)  
horobi (6) · hoverboard (6) · hurricane (6) · huu (6) · hyur (6) · ibex (6) · icosahedron (6) · iliona (6)  
ilysia (6) · indigenous (6) · indrelon (6) · ir (plane) (6) · ishgard (6) · jace beleren (phyrexian) (6)  
jaguar (6) · jet (avatar) (6) · johann (6) · john jonah jameson (6) · kappa (6)  
karplusan mountains (pre-thaw) (6) · kemba (6) · ketchup (6) · kimahri ronso (6) · klothys (6) · komainu (6)  
kothophed (6) · kotis (6) · krark-clan (6) · kura (6) · kylem goblin (6) · laccolith (6) · lake of sirannon (6)  
lamb (6) · lara croft (6) · lazy eye (6) · leafmail (6) · lid (6) · light elemental (6) · light-darkness (6)  
linvala (6) · litter (6) · lluwen (6) · lobster (6) · lochmere (6) · lonely (6) · longshot (avatar) (6)  
luggage (6) · lukamina (6) · lurking (6) · magic gesture (6) · magic missile (6) · magnet (6) · magpie (6)  
mai (6) · mailbox (6) · malcolm (6) · mandrill (6) · marshmallow (6) · martini (6) · medicine (6) · megaphone (6)  
megurine luka (6) · meiko (6) · memorial (6) · menacing face (6) · meta imagery (6) · metal elemental (6)  
miguel o'hara (6) · minion (6) · mirage (6) · mirrodin troll (6) · moag (6) · moat (6) · monitor lizard (6)  
mortar and pestle (6) · mosque (6) · mural-position-1-1 (6) · mural-position-1-2 (6) · mural-position-2-1 (6)  
mural-position-2-2 (6) · myra (6) · nahiri (phyrexian) (6) · nerono (6) · new capenna (origin) (6) · nock (6)  
nodosaurus (6) · norin (6) · notepad (6) · octahedron (6) · omenseeker clan (6) · orgg (6)  
origami butterfly (6) · orzhova (6) · packbeast (6) · panopticon (6) · panorama-acr-ezio (6)  
panorama-battling-hydra (6) · panorama-fic-ffi (6) · panorama-fic-ffix (6) · panorama-fic-ffviii (6)  
panorama-fic-ffxv (6) · panorama-gamma-infused (6) · panorama-heroes-united (6) · panorama-hob-goblin (6)  
panorama-hoc-bag-end (6) · panorama-hoc-treasure (6) · panorama-ltc-helms-deep (6) · panorama-ltc-lorien (6)  
panorama-ltc-minas-morgul (6) · panorama-ltc-pelennor-fields (6) · panorama-ltr-birthday (6)  
panorama-ltr-grey-havens (6) · panorama-ltr-khazad-dûm (6) · panorama-ps17-planeswalkers (6)  
panorama-som-forests (6) · panorama-som-islands (6) · panorama-som-mountains (6) · panorama-som-plains (6)  
panorama-som-swamps (6) · panorama-spe-venom-ock (6) · panorama-tle-black-sun (6) · panorama-tle-tea-time (6)  
panorama-tmt-rooftopbattle (6) · panorama-villains-unleashed (6) · passageway (6) · peace sign (6) · penregon (6)  
peryton (6) · phenax (6) · photo (6) · player signature (6) · podium (6) · pregnant (6) · progenitus (6)  
propellor hat (6) · purple robe (6) · puzzle box (6) · rabid (6) · rafter (6) · rankle (6) · ratonhnhaké꞉ton (6)  
red liquid (6) · reito (6) · remora (6) · resurrection (6) · rice (6) · ricochet (6) · right-handed (6)  
rinoa heartilly (6) · river song (6) · rofellos (6) · rollerskate (6) · rubber stamp (6) · rude gesture (6)  
sakashima (6) · sami (6) · samite symbol (6) · sandwurm (6) · saprazzo (6) · scorchbeast (6) · seal (6)  
securitron (6) · servo-skull (6) · sharknado (6) · sharlayan (6) · shuttlecraft (6) · skelle mire (6)  
snakeskin (6) · sonic the hedgehog (6) · southern water tribe (6) · sozin (6) · space station (6)  
spectral wing (6) · spider-man noir (6) · spider-woman (6) · spindrell (6) · spirit world (6) · splitting (6)  
springjack (6) · standoff (6) · starfleet uniform (6) · starscream (6) · stationery (6) · steam elemental (6)  
steamflogger (6) · stern (6) · straitjacket (6) · stunt (6) · submarine (6) · summitfest (6) · sundial (6)  
surf (6) · sword of kaldra (6) · synth (6) · tabard (6) · table runner (6) · tam (6) · target goblin (6)  
tarot reference (6) · tazri (6) · teleferico (6) · textured canvas (6) · the belligerent (6)  
the boiling rock (6) · the great goblin (6) · the great wave off kanagawa (6) · the last ride (6)  
the mycosynth gardens (6) · the regalia (6) · the walking dead (6) · the watcher (6) · three arms (6)  
thunder bow (6) · time bubble (6) · tippy-toe (squirrel) (6) · titan engine (6) · tizerus (6) · tokyo (6)  
tom (lotr) (6) · tom bombadil (6) · toralf's hammer (6) · torbran (6) · totentanz (6) · track (6) · trade (6)  
trench coat (6) · treva (6) · trudge (6) · trystan (6) · turret (6) · turtle van (6)  
twilight sparkle (character) (6) · twinkle (6) · undressing (6) · updog (6) · utah (6) · vacuum (6) · vadrok (6)  
velis vel (6) · venom (6) · videogame controller (6) · viera (6) · vincent valentine (6) · volcanic crater (6)  
volrath's laboratory (6) · water jet (6) · william (lotr) (6) · windsock (6) · winged serpent (6) · wipe (6)  
witch engine (6) · woad (6) · wreath (6) · yamabushi (6) · yarn (6) · yellow light (6) · yotia (6) · yue (6)  
ziatora (6) · zur (6) · 8-ball (5) · aatchik (5) · abigale (5) · absorbing man (5) · actress aang (5)  
adelbert steiner (5) · agadeem (5) · al bhed (5) · alena (5) · amaurot (5) · amphin (5) · an-havva (5)  
anaglyph glasses (5) · apple of eden (5) · applejack (5) · apprentice (5) · aquatic creature (5)  
ardyn izunia (5) · argivia (5) · armadillo (5) · armodon (5) · arni brokenbrow (5) · arno dorian (5) · ashnod (5)  
atiin (5) · atoll (5) · awning (5) · ayara (5) · badger person (5) · badnik (5) · bandolier (5) · banjo (5)  
baranduin (5) · barb (5) · barbell (5) · baron sengir (5) · bartz klauser (5) · bathroom (5) · bear person (5)  
belenon (5) · bell tower (5) · beorn (5) · bevelle (5) · big (5) · big hair (5) · birth (5) · birthday cake (5)  
biwa (5) · black suit spider-man (5) · blaster (character) (5) · blood angels symbol (5) · blowgun (5)  
booster pack (5) · bovine skull (5) · braids (character) (nightmare) (5) · breya (5) · bruna (5) · buffalo (5)  
bunsen burner (5) · bureaucrat (5) · burning eye (5) · burnwillow (5) · calix (5) · calligraphy (5)  
callipygian (5) · caltrop (5) · cameo (5) · canada (5) · canoptek scarab (5) · caribbean (5) · carl creel (5)  
caryatid (5) · cat dragon (5) · chandra nalaar (echoverse) (5) · chaos (faction) (5) · chatterfang (5)  
clay (medium) (5) · coal (5) · cockroach (5) · colos (5) · combined guild symbol (5) · commune with animal (5)  
corgi (5) · cornfield (5) · cosmic cube (5) · cottage (5) · cowboy bebop (5) · crescent island temple (5)  
crest (5) · cruelclaw (5) · cymede (5) · d20 (5) · damask wallpaper (5) · darien (5) · davros (5) · davvol (5)  
daxos (5) · decoy (5) · devil dinosaur (5) · dial (5) · dilophosaurus (5) · dirk garthwaite (5) · dna strand (5)  
dnd multiverse (5) · donkey (5) · double ended sword (5) · dracosaur (5) · dragonhawk (5) · dralnu (5)  
dreadmaw (5) · drivnod (5) · dromedary camel (5) · east emnet (5) · eavesdropping (5) · edgar roni figaro (5)  
eldraine (origin) (5) · elevator (5) · ellie williams (5) · elspeth's returned mask (5) · endry (5)  
errant (character) (5) · erstwhile (5) · evie frye (5) · evolution (5) · faction leader (5) · falco spara (5)  
father and daughter (5) · feather boa (clothing) (5) · felicia sara hardy (5) · femeref (5) · fezz (5)  
fingerprint (5) · fire hydrant (5) · firewood (5) · fist pound (5) · flamewar (5) · floating castle (5)  
fluttershy (5) · foam (5) · foam hand (5) · fomori vault (5) · football (5) · four freedoms plaza (5)  
four seasons (5) · four-leaf clover (5) · friends (5) · funeral pyre (5) · gallows (5) · gang (5) · garuda (5)  
gatha (5) · geode (5) · geyadrone dihada (5) · ghostfire (5) · gladiolus amicitia (5) · glittering (5)  
glóin (5) · glowing bottle (5) · goldbug (5) · golden egg (5) · goliath (marvel) (5) · goofy (5) · goreclaw (5)  
gravblade (5) · green armor (5) · green lips (5) · grey hair (5) · grotto (5) · guadosalam (5)  
guardian force (5) · gummy (5) · halana (5) · hall of oracles (5) · hall of valkyries (5) · hama (avatar) (5)  
harald (5) · hard hat (5) · haru (5) · heartwood (5) · hedgehog (5) · helm of kaldra (5) · hobbiton (5)  
hobgoblin (5) · holding onto edge (5) · hole in the head (5) · hollin (5) · hook sword (5) · hospital (5)  
icewind dale (5) · ignis scientia (5) · ignus (5) · india (5) · indrik (5) · infinity (5) · inga rune-eyes (5)  
ink-eyes (5) · institute (fallout) (5) · iron man (reference) (5) · isengard faction symbol (5) · isilu (5)  
itlimoc (5) · jackalope (5) · jacob hauken (5) · jaspera tree (5) · jecht (5) · jedit ojanen (5)  
jeff the land shark (5) · jetfire (5) · jeweled hilt (5) · josu vess (lich) (5) · journey to the west (5)  
julia carpenter (5) · kaldring (5) · kate bishop (5) · kathryn janeway (5) · kazoo (5) · kelpie (5) · khamûl (5)  
kher ridges (5) · khorne symbol (5) · kilt (5) · knitting (5) · kogla (5) · kongming (5) · konrad (5)  
konstrari college (5) · krovod (5) · krushok (5) · kumena (5) · kunai (5) · kunoros (5) · kykar (5)  
kyoshi warrior (5) · lair (5) · land shark (5) · lannery storm (5) · laptop (5) · lasagna (5) · lashing (5)  
lat-nam (5) · leaf armor (5) · lemon (5) · liesa (5) · lightsaber (5) · linden kenrith (5) · llama (5)  
lofi girl (5) · macalania woods (5) · madame hydra (5) · magda (5) · magicite (5) · maha (5) · malboro (5)  
malfegor (5) · maralen (queen of the fae) (5) · maraxus (5) · mare lamentorum (5) · mechanical leg (5)  
mendicant core (5) · mercadia's subterranean hangar (5) · metal clamp (5) · michiko konda (5) · mileva (5)  
missy (5) · mobius strip (5) · mona lisa (tmnt) (5) · monger (5) · monster hunter (5) · mote (5)  
mount kulrath (5) · mural-position-1-3 (5) · mural-position-2-3 (5) · mural-position-3-1 (5)  
mural-position-3-2 (5) · mural-position-3-3 (5) · myojin of night's reach (5) · natural armor (5) · nev (5)  
neverwinter (5) · new earth (5) · new phyrexian angel (5) · nissa revane (phyrexian) (5) · no skin (5)  
ojutai symbol (5) · oliphaunt (5) · onlooker (5) · orange light (5) · order of the widget symbol (5)  
outer city (baldur's gate) (5) · padd (5) · pakku (5) · panorama-fblthp (5) · panorama-magicfest-lands (5)  
panorama-mh1-lands (5) · panorama-parl-lands (5) · panorama-showdown-danner (5)  
panorama-sld-bitterblossom-dreams (5) · panorama-sld-explosion-sounds (5) · panorama-super-hero-meal (5)  
panorama-tj-train-heist (5) · panorama-war-basics (5) · parachute (5) · parka (5) · peach (5) · pendulum (5)  
peppermint (5) · petticoat (5) · phelddagrif (5) · phyrexian cyst (5) · phyrexian monitor (5) · piandao (5)  
piece of eden (5) · pinkie pie (5) · pinnacle symbol (5) · pinned (5) · pipsqueak (avatar) (5) · pir (5)  
piranha (5) · plaguebearer (5) · platinum (5) · player spotlight art (5) · plaza (5) · poppy (5)  
post malone (5) · potato (5) · precinct one (5) · protester (5) · pterodon (5) · pulpit (5) · puppet show (5)  
pyrulea (5) · raft (5) · rafwyn capashen (5) · rainbow dash (5) · raksha (5) · ramen (5) · rarity (character) (5)  
real life historical figure (5) · red xiii (5) · reindeer (5) · rem karolus (5) · remote control (5)  
richard garfield (5) · rikku (5) · rin (5) · riptide laboratory (5) · roheryn (5) · rolling pin (5)  
rubber duck (5) · runo stromkirk (5) · ruric thar (5) · ryusaki kumano (5) · ryusei (5) · sailback (5)  
saluting (5) · samuel sterns (5) · sandbar (5) · saprazzan vizier (5) · satellite (5) · savage land (5)  
saxophone (5) · scab clan (5) · scuzzback (5) · seance (5) · seri (5) · seshiro (5) · severed appendage (5)  
seymour guado (5) · shadow (ffvi) (5) · shadow elemental (5) · shanna sisay (5) · shawl (5) · sheldon menery (5)  
shelob (5) · shield of kaldra (5) · shuri (5) · sidisi (sultai khan) (5) · sidisi (zombie) (5) · signet (5)  
signpost (5) · silo (5) · simon williams (5) · sin (5) · skaro (5) · skelle clan (5) · skewer (5)  
skirk ridge (5) · skylight (5) · sliver (5) · smellerbee (5) · snake eye (5) · snapdax (5) · snowman (5)  
sock (5) · sombrero (5) · southern paladin (7ed) (5) · space marine (5) · spattering (5) · speaker (5)  
sphere (ffx) (5) · spider-man (hero symbol) (5) · spider-man 2099 (5) · spinal centipede (5) · spray attack (5)  
spy eye (5) · squished art frame (5) · star trek: enterprise (5) · star trek: lower decks (5)  
star trek: strange new worlds (5) · suffocation (5) · sursi (5) · susan foreman (5) · sword of the meek (5)  
syria (5) · tabaxi (5) · takeshi konda (5) · talion (5) · tanazir quandrix (5) · tannuk (5) · tantalite (5)  
tarot (5) · tattered sail (5) · teddy altman (5) · teleportation (5) · tergrid's lantern (5) · tether (5)  
thaddeus ross (5) · the aetherspark (5) · the endstone (5) · the envoy (5) · the master (harold saxon) (5)  
the mimeoplasm (5) · the muse (5) · the reality chip (5) · the seventh doctor (5) · the sixth doctor (5)  
the source (ffxiv) (5) · the war doctor (5) · the watcher in the water (5) · the wise mothman (5)  
theros titan (5) · thragtusk (5) · three wise monkeys (5) · thrinax (5) · tiamat (5) · time lord symbol (5)  
toaster (5) · toby (gary baseman) (5) · toralf (5) · torech ungol (5) · torga (5) · toski (5) · toucan (5)  
tractor (5) · troop (5) · turnip (5) · tymaret (5) · tyr symbol (5) · ugin horns (5) · ultimecia (5)  
ultimecia castle (5) · ultra magnus (5) · unicycle (5) · uss enterprise ncc-1701 (5) · valki (5) · valkmira (5)  
vannifar (5) · vassal soul (5) · vec (5) · veesa (5) · vial smasher (5) · vice (5) · violent magic (5)  
viper (marvel) (5) · volo's journal (5) · volothamp geddarm (5) · volver (5) · vorrac (5) · walking on water (5)  
wan shi tong (5) · warrior (ff job) (5) · washington dc (5) · water tribe symbol (5) · waving (5)  
wedding dress (5) · wilt-leaf wood (5) · wilting (5) · wolfir (5) · wonder man (5) · wrecker (5) · yangchen (5)  
yawgmoth (phyrexian) (5) · yevon text (5) · yuriko (5) · zacama (5) · zada (5) · zndrsplt (5) · zygon (5)  
abaddon (4) · aboshan (4) · academy (4) · accident (4) · acid breath (4) · actor sokka (4) · actress katara (4)  
adeline (4) · adeptus mechanicus (4) · adrix (4) · aging (4) · agnate (4) · agrus kos (human) (4) · akul (4)  
alan grant (4) · alara (origin) (4) · alela (4) · alexander (ffix) (4) · alhammarret (4) · alisaie leveilleur (4)  
alpharael (4) · alphinaud leveilleur (4) · american gothic (4) · american shot (4) · amphibian (4)  
amputation (4) · androzani minor (4) · animar (4) · anje falkenrath (4) · ankylosaurus (4) · annoyed (4)  
anzrag (4) · aquarium (4) · arab (4) · arachne (marvel) (4) · araña (4) · arc reactor (4) · arcades sabboth (4)  
arcanis (4) · arcavios goblin (4) · archival ink (medium) (4) · arcum dagsson (4) · arixmethes (4)  
arm wrestling (4) · armasaur (4) · armrest (4) · arnorian (4) · ascian mask (4) · ash (character) (4)  
ash williams (4) · ashling (rimekin) (4) · asmor (4) · astrologian (ff) (4) · atmosphere (4) · augustin iv (4)  
aveline de grandpré (4) · avernus (4) · aysen abbey (4) · azgol (4) · azorius lawmage (4) · baboon (4)  
bagpipe (4) · bald patch (4) · ballet (4) · barbara morse (4) · bare earth (4) · basim ibn ishaq (4) · bast (4)  
battle nexus (4) · baxter stockman (human) (4) · bay of belfalas (4) · bedroll (4) · belbe (4)  
beledros witherbloom (4) · bird helmet (4) · birthday (4) · bivouac (4) · blackberry (4) · blackout (marvel) (4)  
blitzwing (4) · blood angels (4) · blood sun (4) · blood writing (4) · blowtorch (4) · board game (4) · bogle (4)  
boombox (4) · boreal (location) (4) · bosco (4) · bosh (4) · breaking through (4) · brimaz (4) · brokkos (4)  
bronze dragon (4) · brood (4) · brute (4) · bugbear (4) · bulette (4) · butterfly bubble (4) · c'tan (4)  
cabal pit (4) · calipers (4) · canary (4) · canoptek (4) · canteen (4) · cao cao (4) · cape (geography) (4)  
captain howler (4) · castle sengir (4) · catachan jungle fighters (4) · cave of two lovers (4) · celebdil (4)  
celtic knot (4) · ceratok (4) · cerodon (4) · charcoal (4) · chime (4) · chop (4) · clockwork key (4)  
closed mouth (4) · closet (4) · clover (4) · cocktail (4) · colosseum (4) · columnar jointing (4) · coralhelm (4)  
corner (4) · creation of adam (4) · crib (4) · crystarium (4) · cuddle (4) · cupboard (4) · cuttlefish (4)  
cyborg animal (4) · cyclonus (4) · dachshund (4) · dal (4) · dart board (4) · daxos's returned mask (4)  
dazed (4) · death guard (4) · decanter (4) · decepticon (4) · deck of many things (4) · deep space nine (4)  
defense (4) · dellian fel (4) · denethor (4) · denzilore fatehold (4) · desmond miles (4) · diamond (pattern) (4)  
disarmed (4) · dismantle (4) · dog tag (4) · dol amroth (4) · dol guldur (4) · dosan (4) · dragonscale (4)  
drasus (4) · drawbridge (4) · dreadnought (4) · dreadnought (40k) (4) · drúadan forest (4) · ducking (4)  
dumbbell (4) · dumpster (4) · dwynen (4) · earth symbol (4) · eastern air temple (4) · edea's house (4)  
eden (ffxiii location) (4) · elenora (4) · elezen (4) · eliot franklin (4) · elixir (4)  
elongated elliptical pupil (4) · elpis (4) · eluge (4) · emperor mateus (4) · enclave (fallout) (4)  
engineer (4) · entrance (4) · eos (4) · epikos (4) · erase (4) · eriador (4) · erosion (4) · eruth (4)  
estinien varlineau (4) · evincar (4) · exdeath (4) · exposed shoulder (4) · fabacin (4) · face palm (4)  
ferris wheel (4) · ffi (4) · ffxvi (4) · fiber (medium) (4) · file (4) · finger snap (4) · fire sage (4)  
firefoot (4) · firion (4) · firja (4) · flattened (4) · floating object (4) · florence (4) · fomori spacesuit (4)  
formless (4) · franklin richards (4) · fungusaur (4) · fur coat (4) · fynn (4) · gate to the afterlife (4)  
gau (4) · gelatin (4) · geomancy (4) · geth (4) · ghostbusters (universe) (4) · gimbal (4) · glarb (4)  
glowing metal (4) · glowing shield (4) · godo (4) · gogo (4) · golden apple (4) · golden argosy (4) · gomazoa (4)  
goo girl (4) · goro-goro (4) · grandfather clock (4) · graph (4) · greel (4) · greensleeves (4) · greyhound (4)  
grub (4) · guado (4) · gunbreaker (4) · gwaihir (4) · gwyllion (4) · gyatso (4) · gym equipment (4) · halimar (4)  
hallucination (4) · halvar (4) · hammerhead (marvel) (4) · hamster (4) · hand lettering (4) · harold (4)  
heart (organ) (4) · henry mccoy (4) · heroes for hire (4) · hide armor (4) · honeybee (4)  
horizon (videogame series) (4) · horseshoe crab (4) · hula hoop (4) · huorn (4) · hurkyl (4)  
hurloon mountains (4) · hyperion (4) · icingdeath (sword) (4) · iguana parrot (4) · ilharg (4) · illuna (4)  
immortus (4) · imperial symbol (4) · impressionistic (4) · ingeloakastimizilian (4) · intellect devourer (4)  
inti (4) · iroan games (4) · isobel (4) · isopod (4) · istanbul (4) · ithil-stone (4) · jacques duquesne (4)  
jane foster (4) · jazal goldmane (4) · jean-luc picard (4) · jenova (4) · jeskai goblin (4) · jessica drew (4)  
jhess (4) · jin sakai (4) · jinnie fay (4) · jirina kudro (4) · joo dee (4) · jorn (4) · joshua rosfield (4)  
joshua tree (4) · judoon (4) · juno (assassin's creed) (4) · jurassic park (universe) (4)  
just some totally normal guy (4) · k'rrik (4) · kalastria family (4) · karazikar (4) · kardur (4)  
karla sofen (4) · karok (4) · karona's shadow (4) · kibo (4) · kilika (4) · kintsugi (4) · kiran nalaar (4)  
knights of thorn (4) · knitting needle (4) · knowledge seeker (4) · kodama of the west tree (4) · kokusho (4)  
kolodin (4) · koto (4) · krothuss (4) · kuja (4) · lammasu (4) · landscape background (4) · laquatus (4)  
larva (4) · last ronin (4) · lathnu (4) · lathril (4) · lead pipe (4) · lemur (4) · leonard mccoy (4)  
light pillar (4) · light-paws (4) · lion turtle (4) · lita (tmnt) (4) · liu bei (4) · llawan (4)  
lobelia sackville-baggins (4) · lockjaw (4) · locus (4) · locus palace (4) · log cabin (4) · long feng (4)  
lovisa coldeyes (4) · lucky (marvel) (4) · ludevic (4) · lukka (phyrexian) (4) · lux foundation library (4)  
lyna (4) · lys alana (4) · madara (4) · madison li (4) · maelstrom wanderer (4) · maggia (4) · magic bonding (4)  
magic mark (4) · magic window (4) · magosi (4) · maia (lotr) (4) · man-o'-war (4) · mangara (4) · maple leaf (4)  
marcus daniels (4) · mardu punching shield (4) · mass production (4) · master emerald (4) · mavren fein (4)  
mazirek (4) · meloku (4) · mercedes knight (4) · meren (4) · minerva (assassin's creed) (4) · minfilia warde (4)  
mining (4) · mirelurk (4) · mirrored depths (4) · mistmeadow (4) · mitten (4) · moa (4)  
mockingbird (marvel) (4) · mojave (4) · mole (birthmark) (4) · mole man (marvel) (4) · moloch (4) · mona lisa (4)  
moonglove (4) · moonsilver key (4) · moonstone (marvel) (4) · mor dhona (4) · mordenkainen (4)  
mother and daughter (4) · mount tanufel (4) · mtenda (4) · musician (4) · mussel (4) · napkin (4) · narya (4)  
nature (4) · neckerchief (4) · neheb (eternal) (4) · nethroi (4) · neutrino (tmnt) (4) · new jersey (4)  
new mexico (4) · nirkana family (4) · nishoba (4) · nivea (4) · not to scale (4) · nun (4) · nurgling (4)  
nut (mechanical) (4) · oak leaf (4) · obeka (4) · odric (vampire) (4) · oerba yun fang (4) · ojer taq (4)  
olag (4) · old rutstein (4) · olexo (4) · onakke (4) · oona (4) · open field (4) · oracle en-vec (4) · orbit (4)  
oread (4) · ori (4) · ork (4) · orvar (4) · otarian nomad (4) · oyster (4) · package (4) · pancake (4)  
panorama-2xm-urza-karn (4) · panorama-5dn-station (4) · panorama-aleksi-briclot (4) · panorama-chk-forests (4)  
panorama-chk-islands (4) · panorama-chk-mountains (4) · panorama-chk-plains (4) · panorama-chk-swamps (4)  
panorama-fantastic-four (4) · panorama-hell's-kitchen (4) · panorama-ice-age-plains (4)  
panorama-ltr-mount-doom (4) · panorama-ltr-scouring (4) · panorama-mir-forest (4) · panorama-mir-nims (4)  
panorama-roe-forest (4) · panorama-roe-island (4) · panorama-roe-mountain (4) · panorama-roe-plains (4)  
panorama-roe-swamp (4) · panorama-sld-dandan (4) · panorama-tla-book1 (4) · panorama-tmt-turtletots (4)  
panorama-usg-plains (4) · panther warrior (4) · paperweight (4) · paralysis (4) · parasaurolophus (4)  
pathik (4) · pavitr prabhakar (4) · peema (4) · pennsylvania (4) · perspective blur (4) · phyrexian tower (4)  
phyrexianized werewolf (4) · pickpocket (4) · pilgrim of the fires (4) · piltover (4) · piñata (4)  
pink horror (4) · piotr rasputin (4) · plagiarized (4) · plant border (4) · pollen (4) · pompeii (4) · poncho (4)  
primal (ffxiv) (4) · prowl (character) (4) · pyxis (4) · quandrix symbol (4) · questing beast (4) · quickbeam (4)  
quina quen (4) · rabaroo (4) · radio (4) · radish (4) · radrat (4) · radroach (4) · rafiq (4) · raised finger (4)  
raised shield (4) · ratchet (character) (4) · raubahn aldynn (4) · real life event (4) · red fire (4)  
red glove (4) · red hulk (4) · redshift (4) · referee (4) · reflection (creature) (4) · regna (4) · reidane (4)  
relm arrowny (4) · rick jones (4) · robert reynolds (4) · rocco (4) · ronom glacier (4) · rooster (4)  
root body (4) · rope ladder (4) · rorix bladewing (zombie) (4) · runeterra (4) · sab-sunen (4) · sable (4)  
safer sephiroth (4) · salamander person (4) · sanar (4) · sand elemental (4) · sap (4) · savanti romero (4)  
savra vod savo (4) · scale foot (4) · scone (4) · sea anemone (4) · sea weed (4) · segovia (4) · selkie (4)  
sentry (4) · serpent's pass (4) · serra paladin symbol (4) · setzer gabbiani (4) · shadowbox (4)  
shadrix silverquill (4) · shao jun (4) · sharpening (4) · shedding (4) · sheoldred's coliseum (4) · shrimp (4)  
sidisi's crown (4) · sifa grent (4) · sindarin (4) · skeletal wing (4) · skithiryx (4) · slaanesh daemon (4)  
slap (4) · sledgehammer (4) · slicer (character) (4) · sliver queen (4) · smothering (4) · sneers (avatar) (4)  
snorse (4) · snow globe (4) · snowball (4) · sol'kanar (4) · soundwave (character) (4) · southron (4)  
space whale (4) · spider-girl (4) · spider-man india (4) · spinning (4) · spire of industry (4)  
spitfire bastion (4) · spongebob squarepants (4) · sprite (4) · sram (4) · star map (4) · steel (4)  
stew pot (4) · stone armor (4) · storyteller (4) · stratum (4) · stretch (4) · stretched arm (4) · studying (4)  
stybba (4) · subterranea (4) · summer (4) · surrakar (4) · surrender (4) · swallow (4) · swarm elemental (4)  
symbiote spider-man (4) · tajic (4) · talon gates (4) · tambourine (4) · tarnation (4) · tarrasque (4)  
tartyx (4) · tasigur (4) · tatyova (4) · tegan jovanka (4) · tenza (4) · tesla coil (4) · tetsuko umezawa (4)  
teysa karlov (spirit) (4) · the blackjack (4) · the cauldron of eternity (4) · the duke (avatar) (4)  
the eighth doctor (4) · the farbogs (4) · the fugitive doctor (4) · the master (doctor who) (4)  
the omenkeel (4) · the reaper king (4) · the scream (4) · the time stone (4) · the unspeakable (4) · thoctar (4)  
thunderball (4) · tiger shark (4) · tightrope (4) · toast (4) · toby (4) · todd arliss (4) · tokka (4)  
tolvada (4) · tomik vrona (4) · toothy (4) · torgal (4) · torrezon (4) · towashi undercity (4) · towel (4)  
triangle (instrument) (4) · tricorder (4) · triple triad (4) · trombone (4) · tui (4) · tulip (4) · tundra (4)  
turkey (4) · turntable (4) · twin swords (4) · ty lee (4) · typewriter (4) · uldaros theorix (4)  
ulder ravengard (4) · ultima (ffxvi) (4) · ultima thule (4) · ultima weapon (ffxiv) (4) · ulysses klaw (4)  
unagi (4) · undergrowth (4) · unnamed roman plane (4) · unseen realm (4) · vaan (4) · vadrik (4) · valefor (4)  
valeria richards (4) · valeron (4) · varnish (medium) (4) · vegetable (4) · velomachus lorehold (4)  
vending machine (4) · verdeloth (4) · vertibird (4) · vilya (4) · vincent stegron (4) · vizzerdrix (4)  
vona of iedo (4) · vorthos (4) · wakizashi (4) · walking building (4) · warrior of light (ffxiv) (4)  
washington (state) (4) · watcher (4) · weasel person (4) · weatherseed (4) · whistle (4) · wight (4)  
wildfire (plane) (4) · wingnut (4) · wooden sword (4) · wrecking crew (4) · wyvern (4) · xerex (4) · xorn (4)  
yasmin khan (4) · yellow fire (4) · yellowjacket (4) · yidaro (4) · zenon (4) · zenos yae galvus (4) · zetan (4)  
zhao (4) · zoetic symbol (4) · zopandrel (4) · a town called christmas (3) · abbey (3) · abby anderson (3)  
abdel adrian (3) · abuelo (3) · ace (doctor who) (3) · ace duck (3) · actor toph (3) · actor zuko (3)  
adanto (location) (3) · adarkar (pre-thaw) (3) · aegar (3) · aerid konstrari (3) · aerophin (3) · aesi (3)  
agatha's cauldron (3) · ahriman (3) · ajani goldmane (echoverse) (3) · akal (3) · ala mhigo (3) · alania (3)  
alexandria (3) · alexios (3) · alfava metraxis (3) · alin (3) · alistair lethbridge-stewart (3) · almaaz (3)  
alseid (3) · amarant coral (3) · amon hen (3) · amonkhet (origin) (3) · amy rose (3) · anchovy (3)  
ancient fang (3) · andorian (3) · angel island (3) · angelica jones (3) · anguiped (3) · anhelo (3)  
anima (ffx) (3) · animal horn (3) · anne bonny (3) · anowon (3) · anteater (3) · anthousa (3) · arabic text (3)  
arcee (3) · arguel (3) · arnim zola (3) · aron capashen (3) · arvad (3) · arynx (3) · asgard (3) · athreos (3)  
atlantis (marvel) (3) · attic (3) · auron (3) · auton (3) · axebane (3) · ayula (3) · azami ozu (3) · azor (3)  
baaj temple (3) · baelsar's wall (3) · baghdad (3) · bahamut (3) · baird (3) · balance knight (3) · balin (3)  
balthier (3) · bandar (3) · bane (character) (3) · bant owlin (3) · baron von count (3) · barone (3)  
barred door (3) · barrow-wight (3) · bartolomé del presidio (3) · bear buttock (3) · beetle (marvel) (3)  
belisarius cawl (3) · beorn's hall (3) · beskir clan (3) · beyeen (3) · beza (3) · bisexual (3) · black bolt (3)  
blackletter-font (3) · bleacher (3) · bless (3) · blind seer (3) · blinded (3) · blob (3) · blood avatar (3)  
blood spurt (3) · bloodhound (3) · blorpityblorpboop (3) · blue dragon (dnd) (3) · blue horror (3)  
blue ribbon (3) · bofur (3) · boiling oil (3) · bolg (3) · bombur (3) · bone bracelet (3) · booster box (3)  
boxing (3) · brainiac (3) · brainstorm (3) · brass dragon (3) · brawler (3) · breaker bay (3) · brew (3)  
brian calusky (3) · briars (3) · bribe (3) · brides of dracula (3) · brisela (3) · brock rumlow (3)  
broken limb (3) · brown cloak (3) · brown robe (3) · bruinen (3) · bruvac (3) · brynhildr (ffxiii) (3)  
bucklebury ferry (3) · bulldozer (marvel) (3) · bullet (3) · burning isles (3) · burrowing (3)  
buttercup (flower) (3) · bywater (3) · cabaretti staff (3) · cadian (warhammer) (3) · caesar (3) · caitian (3)  
caldera (3) · caligo (3) · camellia (3) · cannibal (3) · canoeing (3) · caparocti (3) · carah (3)  
cardassian (3) · carnival (3) · carrack (3) · cassie lang (3) · catfish (3) · caveman (3) · celery (3)  
cerberus (ff) (3) · chang (3) · chardansearavitriol (3) · cheerleader (3) · child's play (universe) (3)  
chin village (3) · chinese exclusive art (3) · chipped weapon (3) · chira (3) · chit sang (3)  
chopping block (3) · chorus (3) · chrome dome (3) · chromium rhuell (3) · chucky (3) · chupacabra (3)  
cie'th (3) · citizen v (3) · clamfolk (3) · claugiyliamatar (3) · clavileño (3) · clement (3) · clothes line (3)  
cloud trail (3) · coal hill school (3) · cockatrice (3) · coeurl (3) · colleen wing (3) · comb (3)  
comet (character) (3) · cone (3) · conjurer (ffxiv class) (3) · contorted limb (3) · copper dragon (3)  
corkscrew hair (3) · cornelia (3) · coronation (3) · corrosion (3) · crickhollow (3) · crimson cowl (3)  
cringing (3) · croissant (3) · crop circle (3) · crossbones (3) · crowd surfing (3) · crying blood (3)  
cryptid (3) · curled up (3) · daemon engine (3) · daily bugle (3) · darillium (3) · dark-dweller goblin (3)  
david cannon (3) · daxos (demigod) (3) · deejay (3) · delina (3) · deling city (3) · delney (3) · dementia (3)  
demon's run (3) · dennick (human) (3) · dennick (spirit) (3) · device (3) · discord (character) (3)  
dominaria aven (3) · don't talk to me or my son (3) · donna noble (3) · drach'nyen (3) · dragon's smile (3)  
dragonsguard (3) · drakkus (3) · dravania (3) · dream chisel (3) · dreamscape (3) · drizzt do'urden (3)  
durkwood (3) · dyed hair (3) · earmuffs (3) · edea kramer (3) · egon (3) · eiko carol (3) · electric weapon (3)  
electrical socket (3) · elephant person (3) · eloren wilds (3) · elvish archer (7ed) (3) · emiel (3)  
emperor of mankind (3) · emry (3) · engulfing (3) · ephel dúath (3) · equipment (3) · erestor (3) · ergamon (3)  
estrid (3) · etched horn (3) · ettin (3) · eugene krabs (3) · exava (3) · extus narr (3) · ezuri (3)  
fallaji empire (3) · false hanna (3) · false vraska memory (3) · faren (3) · farideh (3) · feldon (3)  
fertilid (3) · feywild (3) · fíli (3) · finger blade (3) · fingers (3) · finneas (3) · firdoch (3) · firesong (3)  
firestar (3) · fish person (3) · fish tank (3) · five-segment cartouche (3) · flamingo (3) · flan (ff) (3)  
flash thompson (3) · florian voldaren (3) · flying car (3) · fomori (3) · foriys (3) · fortification (3)  
fortnite (3) · fossil (3) · fran (3) · gae bolg (ffxiv) (3) · gaius van baelsar (3) · galea (3)  
garland (ff) (3) · garna (3) · garruk wildspeaker (echoverse) (3) · gaunt (3) · glade (3) · gladehart (3)  
gladiator (3) · gliese 581d (3) · glorybringer (3) · glowing liquid (3) · glowing stone (3) · golbez (3)  
golf (3) · goose mother (3) · gordon fraley (3) · gorget (3) · gorion (3) · gorm (3) · gorn (3) · grappling (3)  
greasefang (3) · green blood (3) · green hill zone (3) · green water (3) · greta (3) · grey knights (3)  
gridania (3) · grimlock (3) · grizzlegom (3) · grolnok (3) · gyruda (3) · hair pulling (3)  
hairball (marvel) (3) · hakoda (3) · haldir (3) · hallar (3) · halo orb (3) · hans eriksson (3) · hardy (3)  
harnfel (3) · hatchling (3) · haunted (3) · hawky (3) · haytham kenway (3) · hazezon tamar (3) · heated shot (3)  
hei bai (3) · heiko yamazaki (3) · heliod (phyrexian) (3) · hellcat (3) · henneth annûn (3) · henry camp (3)  
herald (3) · hercules (marvel) (3) · herdcaller (3) · herman (tmnt) (3) · high up (3) · higure (3)  
hive fleet kraken (3) · hixus (3) · hobgoblin (dnd) (3) · hog-monkey (3) · holodeck (3) · hooked nose (3)  
hope estheim (3) · hot chocolate (3) · hrothgar (3) · hulkbuster (3) · ibis (3) · ice cave (3)  
idol of moloch (3) · ihsan (3) · illinois (3) · imaginary friend (3) · imperial fists symbol (3)  
imperial palace (40k) (3) · imperiosaur (3) · imvaernarho (3) · iname (3) · ingris stingerquill (3) · inlay (3)  
inquisition symbol (3) · inquisitor (3) · interceptor (ffvi) (3) · iona (3) · iquatana (3) · irencrag (3)  
iron (3) · iron lad (3) · iron spider (3) · ironheart (3) · ishkanah (3) · isildur (3) · iymrith (3)  
jackal (marvel) (3) · jackdaw (boat) (3) · jadar (3) · james (fallout) (3) · james sanders (3)  
jarad vod savo (3) · jaws (shark) (3) · jaws (universe) (3) · jaxis (3) · jeong jeong (3) · jerboa (3)  
jermane (3) · jessica jones (3) · joaquin torres (3) · joel miller (3) · john jonah jameson iii (3)  
johnathon ohnn (3) · jon irenicus (3) · jor kadeen (3) · juke box (3) · jupiter (assassin's creed) (3)  
jurassic park dilophosaurus (3) · justine hammer (3) · kaheera (3) · kain highwind (3) · kalamax (3)  
kalitas (3) · kan-e-senna (3) · kangaroo (3) · karn (phyrexian) (3) · karn (planet) (3) · karumonix (3)  
kastral (3) · keiga (3) · keimi (3) · keldon necropolis (3) · kelsien (3) · keno (3) · kethek (3) · ketramose (3)  
khorvath brightflame (3) · kíli (3) · kilika temple (3) · killbot (3) · kingfisher (3) · kitsune (tmnt) (3)  
klauth (3) · klingon spacecraft (3) · knight (40k) (3) · knights of round (3) · knit cap (3)  
knuckles the echidna (3) · koh (3) · kolaghan symbol (3) · koll (3) · komodo rhino (3) · kona (3) · krav (3)  
kree (3) · kresh the bloodbraided (3) · krop tor (3) · krotiq (3) · krydle (3) · kudro (3) · kuei (3) · kwain (3)  
kwia vigorbloom (3) · kylix (3) · kylox (3) · kynaios (3) · lagrella (3) · lamia (3) · lampad (3) · lanyard (3)  
latex (3) · layla hassan (3) · leaning on sword (3) · lembas (3) · leovold (3) · leveler (3) · liberty prime (3)  
lick (3) · life preserver (3) · lionfish (3) · liquify (3) · lockheed (3) · lolth (3) · long figure (3)  
lonis (3) · loran (3) · lord skitter (3) · lorwyn/shadowmoor (origin) (3) · lotho sackville-baggins (3)  
lucy maclean (3) · lumra (3) · lunar eclipse (3) · lutri (3) · lyev (3) · lyzolda (3) · maaka (3)  
mac gargan (3) · macaw (3) · machinist (3) · maduin (3) · magic arrow (3) · magic staff (3) · magician (3)  
magnus (warhammer 40k) (3) · magus sisters (3) · maine (3) · makapu village (3) · mar-vell (3)  
marina vendrell (3) · mark milton (3) · marrow-gnawer (3) · martyrs' tomb (3) · marwyn (3) · mary read (3)  
masonry (3) · mass transport (3) · matoc (3) · mayael (3) · mayday parker (3) · medomai (3) · medusa cascade (3)  
melek (3) · melira (3) · melissa gold (3) · merlwyb bloefhiswyn (3) · metalbending (3) · metalsmith (3)  
mi'ihen highroad (3) · michigan (3) · middle finger gesture (3) · miirym (3) · mikaeus cecani (zombie) (3)  
miles prower (3) · miles warren (3) · mime (3) · mimic (3) · mimir (3) · minwu (ffii) (3) · mirko vosk (3)  
mirrodin sun (3) · mithra (3) · miyamoto usagi (3) · mm'menon (3) · mog (ffvi) (3) · moja (3) · molimo (3)  
mondrak (3) · monk (ff job) (3) · moonflow (3) · moradin symbol (3) · moroii (3) · morophon (3) · mossdog (3)  
mothercrystal (3) · mount velus (3) · mount vesuvius (3) · muldrotha (3) · mushroom cloud (3) · mutagen man (3)  
muzzio (3) · myconid (3) · naginata (3) · naiad (3) · name (3) · narfi (3) · narsil (3) · nassari (3)  
nathan drake (3) · nemata (3) · neural (3) · newt (3) · nick fury sr. (3) · nightkin (3) · nimana (3)  
nine figures (3) · nine hells (3) · noah bradley (3) · non-binary (3) · norika yamazaki (3) · nurgle daemon (3)  
nurgle symbol (3) · nykthos (3) · obyra (3) · ocelot (3) · odin (assassin's creed) (3) · odin (ff) (3) · odyn (3)  
oerba dia vanille (3) · ojer axonil (3) · ojer pakpatiq (3) · okinec ahau (3) · okoye (3) · old prahv (3)  
old stickfingers (3) · omnath (phyrexian) (3) · omo (3) · one-off (3) · orfeo (3) · ossuary (3) · ostrich (3)  
outhouse (3) · oven mitt (3) · overbite (3) · oviya pashiri (3) · ozolith (3) · pacifier (3) · padeem (3)  
palladia-mors (3) · panharmonicon (3) · panorama-allspark (3) · panorama-allspark-transformed (3)  
panorama-dom-cabal (3) · panorama-fra-forest (3) · panorama-fra-island (3) · panorama-fra-mountain (3)  
panorama-fra-plains (3) · panorama-fra-swamp (3) · panorama-modules (3) · panorama-outlaws-merriment (3)  
panorama-prm-urza's-land (3) · panorama-ptdmu (3) · panorama-sld-alayna-2 (3)  
panorama-sld-restless-in-peace (3) · panorama-tc21-golem (3) · papercraft (3) · pashalik mons (3) · pastry (3)  
patrick star (3) · patsy walker (3) · pelakka (3) · pendelhaven (3) · penguin (3) · pepper potts (3) · perrie (3)  
peru (3) · pete (tmnt) (3) · peter (3) · pharagax bridge (3) · phial of galadriel (3) · phlage (3) · phoberos (3)  
phoenix (ff) (3) · pickle (3) · piercing (3) · piko piko hammer (3) · piledriver (3) · pillardrop (location) (3)  
pink elephant (3) · pitcher plant (3) · pittsburgh (3) · plargg (3) · playground (3) · playmat (3)  
police car (3) · polyhedron (3) · pomegranate (3) · pop-up book (3) · pout (3) · preston garvey (3)  
prismatic (3) · prosper (3) · prossh (3) · prowler (marvel) (3) · puff adder (3) · pulse (3) · pulse vestige (3)  
purple armor (3) · push dagger (3) · pustule (3) · pyrite (3) · quartzwood (3) · quicksand (3) · rabanastre (3)  
radsquirrel (3) · rage (3) · rahzar (3) · rama-tut (3) · ran (3) · rapids (3) · rashmi (3) · rassilon (3)  
rat king (3) · razia (3) · reaper (ffxiv job) (3) · red bird (3) · red hat (3) · red mage (final fantasy) (3)  
redcap (shadowmoor) (3) · redirection (3) · reki (3) · renata (3) · reno (ffvii) (3) · reya dawnbringer (3)  
rhys (3) · ria ivor (3) · rinata (3) · riri williams (3) · risona (3) · rix maadi (3) · robert drake (3)  
rocket launcher (3) · roegadyn (3) · roku's island (3) · ronin (marvel) (3) · roper (3) · rorix bladewing (3)  
rory williams (3) · rosheen meanderer (3) · rothga (3) · rotisserie (3) · rotunda (3) · ruching (3) · rukh (3)  
ryne waters (3) · s.h.i.e.l.d. (3) · saffi eriksdotter (3) · sahagin (3) · sarah jane smith (3) · sarulf (3)  
saryth (3) · saucepan (3) · sauna (3) · sautekh symbol (3) · scene-innistrad-forest-woods (3)  
scene-innistrad-island-sea (3) · scene-innistrad-mountain-path (3) · scene-innistrad-plains-river (3)  
scene-innistrad-swamp-cemetery (3) · scene-ravnica-swamp (3) · scene-weatherlight-capsize (3) · school (3)  
scooter (3) · scorch mark (3) · scorpion (marvel) (3) · scratchboard (3) · seifer almasy (3) · sentinel (3)  
senu (3) · serum (3) · serval (3) · shadow the hedgehog (3) · shalai (3) · shamisen (3) · shanodin (3)  
shape attack (3) · shares art with token (3) · shark fin (3) · shattered isles (3) · shauku (3) · shaw (3)  
sheena (3) · shendyt (3) · shilgengar (3) · shinka (3) · shizo (3) · shutter (3) · sidar jabari (3)  
silver dragon (3) · silver sable (3) · sinspawn (3) · skaal kesh (3) · skalla (origin) (3) · skep (3)  
skrelv (3) · skunk (3) · skunk person (3) · sleepy (3) · sliver overlord (3) · slogurk (3) · snowmane (3)  
solphim (3) · sontaran (3) · sp//dr (3) · spats (3) · spear of leonidas (3) · speckled (3)  
speed demon (marvel) (3) · spider-uk (3) · spriggan (3) · squad (3) · squidward tentacles (3) · stangg (3)  
staple (3) · star elemental (3) · star-nosed mole (3) · starnheim (3) · steak (3) · stenn (3) · stilt (3)  
stiltzkin (3) · storm giant (3) · strago magus (3) · stronghold's map room (3) · structure (3)  
studded leather (3) · stupor (3) · sun warrior (3) · sunspeaker (3) · supervoid (3) · suq'ata (3)  
swarmlord (warhammer 40k) (3) · swarmweaver (3) · sylvia brightspear (3) · symbiote (3) · sythis (3) · szadek (3)  
t-45 power armor (3) · tadpole (3) · tailcoat (3) · tally (3) · talruum (3) · tamiyo's journal (3) · tart (3)  
tartan (3) · taskmaster (3) · tataru taru (3) · technodrome (3) · tekuthal (3) · telepathy (3) · temmet (3)  
tergrid (3) · tern (3) · terrace (3) · thalamra vanthampur (3) · thanalan (3) · thancred waters (3)  
thaumatic compass (3) · the blue spirit (3) · the circle of loyalty (3) · the dawning archaic (3)  
the fire nation drill (3) · the great eagle (3) · the horned halo (3) · the lord of pain (3)  
the master (fallout) (3) · the mighty thor (3) · the moment (3) · the prancing pony (3) · the spot (3)  
the spy master (3) · the ur-dragon (3) · the void (3) · the yawning portal (3) · thompson's unnamed elf (3)  
throat (3) · throg (3) · throne of the god-pharaoh (3) · thumbs down (3) · tiana (3) · time elemental (3)  
time walk skeleton (3) · timothy dugan (3) · tin street (3) · tiro (3) · tomakul (3) · tomb raider (3)  
tombstone (marvel) (3) · tonberry (3) · tonfa (3) · torens (3) · tourach (3) · toxrill (3) · trans male (3)  
tresserhorn (3) · trickery (3) · trojan horse (3) · trow (3) · tuning fork (3) · tura kennerüd (3)  
tusk (character) (3) · twisting (3) · two thumbs (3) · ul'dah (3) · ulrich (3) · umaro (3) · unaware (3)  
undercity (baldur's gate) (3) · uno (tmnt) (3) · uppercut (3) · urianger augurelt (3) · uril (3) · uro (3)  
vaevictis asmadi (3) · valigarmanda (3) · vampire embrace (3) · varragoth (3) · venat (3) · verdant order (3)  
verdura (3) · vhati il-dal (3) · victor (character) (3) · videogame console (3) · vilis (3) · vintara (3)  
virtus (3) · visara (3) · vivian vision (3) · vondam (3) · vortis (3) · vraan (3) · vulcan (3)  
vulcan salute (3) · warcraft (3) · warehouse (3) · warhorn (3) · warpick (3) · warrior of light (character) (3)  
water balloon (3) · water gun (3) · water leak (3) · waterdeep (3) · wayta (3) · werebear (3) · wererat (3)  
western air temple (3) · westfold (3) · whisk (3) · whiskers (character) (3) · whispering woods (3)  
white dragon (dnd) (3) · white widow (3) · william t. riker (3) · windriddle palaces (3) · wolf person (3)  
wolfgang von strucker (3) · worf (3) · wulong forest (3) · wyrm's crossing (3) · xanathar (3) · xira arien (3)  
yahenni (3) · yarok (3) · yawn (3) · yelena belova (3) · yggdrasil (3) · yi (tmnt) (3) · yisan (3) · yojimbo (3)  
yosei (3) · yuan-ti (3) · yueya chan (3) · yusri (3) · zabu (3) · zagorka (3) · zariel (3) · zei (3)  
zendikar troll (3) · zhou yu (3) · zirda (3) · zo-zu (3) · zodiark (3) · zof bog (3) · zoyowa (3) · zulaport (3)  
aarakocra (2) · aaron davis (2) · aaron stack (2) · abner jenkins (2) · abraham van helsing (2)  
abstergo symbol (2) · academic cap (2) · acererak (2) · actor ozai (2) · adamaro (2) · adeptus ministorum (2)  
adéwalé (2) · adherents of the moon (2) · adherents of the sun (2) · adipose (2) · adriana vallore (2)  
adric (2) · aegisaur (2) · aerial silk (2) · aether spire (2) · afternoon (2) · agent of stromgald (2)  
agent venom (2) · aglarond (2) · agonas (2) · agyrem (2) · air hockey table (2) · akawalli (2) · akhara (2)  
akiri (2) · akrasa (2) · akros symbol (2) · aku (2) · al mualim (2) · alandra (2) · alaundo (2) · albino (2)  
alcove (2) · aldergard forest (2) · alexi (2) · alicia masters (2) · alicorn (2) · alirios (2)  
all-winners squad (2) · allagan tomestone of poetics (2) · allenal (2) · alonzo lincoln (2) · alopex (2)  
aloy (2) · amadeus cho (2) · amalia benavides aguirre (2) · ambrosia whiteheart (2) · ame-no-habakiri (2)  
ammit (2) · amusement arcade (2) · aña corazón (2) · anaconda (marvel) (2) · anárion (2) · ancient (ffxiv) (2)  
ancient one (2) · anim pakal (2) · animating (2) · anor-stone (2) · anrakyr (2) · antarctica (2)  
anthony masters (2) · anti-venom (2) · anton vanko (2) · apalapucia (2) · aragorn (marvel) (2) · arasta (2)  
arbaaz mir (2) · arborea (2) · archades (ffxii) (2) · archive (2) · arco-flagellant (2) · argive (2)  
argonath (2) · arkhos (2) · armageddon steel legion (2) · armix (2) · armont (2) · armorer (2) · arna (2)  
arthur maxson (2) · arthur parks (2) · artificial intelligence (2) · artist reflection (2) · ascian (2)  
asfaloth (2) · asgardian (2) · ashelia b'nargin dalmasca (2) · asphodex (2) · astele keene (2) · astor (2)  
astoundingly awesome tales (2) · atlantean giganto (2) · atlas (marvel) (2) · atreus (2) · atris (2) · atzal (2)  
atzocan (2) · augusta (human) (2) · augustus autumn (2) · auntie blyte (2) · auricorn (2) · autumn willow (2)  
averna (2) · ayara (phyrexian) (2) · ayesha tanaka (2) · ayumi (2) · azcanta (2) · aziza (2) · azlask (2)  
azog (2) · azrael (2) · baba lysaga (2) · baggy eyes (2) · balan (2) · balduvia (2) · ballot (2) · balmor (2)  
balthor rockfist (zombie) (2) · bane alley (2) · banon (2) · banyan-grove tree (2) · baobab (2)  
barbara wright (2) · barbed creature (2) · barrenton (2) · barrowin undurr (2) · baru (2) · battleworld (2)  
baylen (2) · bayonet (2) · beach ball (2) · beau (2) · beckett mariner (2) · belladonna took (2) · bello (2)  
belly mouth (2) · beluna grandsquall (2) · belynne stelmane (2) · benedikta harman (2) · benjamin sisko (2)  
benny (fallout) (2) · beverly crusher (2) · bhaal (2) · bhaal symbol (2) · bifur (2) · big bertha (2)  
biggs (ffvii) (2) · bill potts (2) · birgi (2) · biscuit (2) · bishop (tmnt) (2) · bison (2)  
black dragon (dnd) (2) · black knight (marvel) (2) · black legion symbol (2) · black mage (ffix race) (2)  
blackbloom bog (2) · blanche sitznski (2) · blech (2) · blink dog (2) · blor the impervious (2)  
blue (dinosaur) (2) · boar person (2) · bob dobalina (2) · bobby (2) · boko (2) · bolrac clan (2) · bomat (2)  
bomb (ff) (2) · bonny pall (2) · boomerang (marvel) (2) · boop (2) · bortuk bonerattle (2) · bosch-esque (2)  
bradward boimler (2) · brawn (marvel) (2) · breakdancing (2) · bree-land (2) · bree-man (2) · bria (2)  
brine (2) · brood (marvel) (2) · brudiclad (2) · bruenor battlehammer (2) · brunnhilde (2) · bruse tarl (2)  
brush (plant) (2) · brushstrider (2) · bulb (2) · bundle (2) · bunker (2) · burner (2) · burrito (2)  
bushmaster (2) · buzzard-wasp (2) · cactuar island (2) · cadia (2) · cadira (2) · cait (2) · cait sith (2)  
calamity (character) (2) · callaphe (2) · calm lands (2) · calvin zabo (2) · cantaloupe (2) · capybara (2)  
carolyn trainer (2) · carrying (2) · casal (2) · cash register (2) · catoblepas (2) · cauliflower (2) · cayth (2)  
celebr-8000 (2) · cement (2) · chagaska (2) · chainaxe (2) · chalk pastel (2) · chameleon (2)  
chameleon (marvel) (2) · chandler (2) · changeling (dnd) (2) · chaos (ff) (2) · chaos spawn (2) · chapiter (2)  
charix (2) · charnovokh symbol (2) · chatzuk (2) · chawan (2) · cheetah planet (2) · chen lu (2) · cherubael (2)  
chin the conqueror (2) · chinchilla (2) · chitauri (2) · choco (2) · chocolina (2) · chong (2) · chulane (2)  
cicada (2) · cigar (2) · circuitry (2) · city of traitors (2) · clare d'loon (2) · cleopatra (2) · cloakwood (2)  
clockwork droid (2) · clockwork orange eyes (2) · clownfish (2) · codie (2) · colander (2) · colfenor (2)  
combustion man (2) · compsognathus (2) · conflagration (2) · contest (2) · continuity error (2) · coram (2)  
core (2) · corkscrew (2) · cormela (2) · corpse-art (2) · corsage (2) · cosima (2) · cotton candy (2)  
coward (2) · coyote (2) · craghorn (2) · craig hollis (2) · cren (2) · crimson dynamo (2)  
crossbreed labs symbol (2) · crustacean (2) · crystal body (2) · crystalia amaquelin (2) · cucumber (2)  
cult of kosmos (2) · cup noodle (2) · d00-dl (2) · daghatar (2) · daisho (2) · dan lewis (2)  
dancer (ff job) (2) · dane whitman (2) · dargo (2) · daria (2) · darien xlviii (2) · dark angels (2)  
dark meanders (2) · darkstar (2) · death dealer (2) · deception (2) · dee kay (2) · deerstalker (2) · denn (2)  
dennis nedry (2) · depala (2) · derevi (2) · desolation (planet) (2) · dessert (2) · devil k. nevil (2)  
diamond weapon (2) · diana (2) · didgeridoo (2) · dillard portyr (2) · dimir spybug (2) · dimitri bukharin (2)  
dion lesage (2) · dirtbag (2) · disa (2) · disassemble (2) · disc of tzeentch (2) · dmitri smerdyakov (2)  
doctor spectrum (2) · doe (2) · dog person (2) · dol amroth faction symbol (2) · doll head (2) · dollhouse (2)  
doors of durin (2) · dori (2) · doric (2) · dormammu (2) · dragon turtle (2) · dragon's podium (2) · dreadmon (2)  
drow (2) · duel masters (2) · duggan (2) · dung beetle (2) · dungeon master (character) (2)  
dungeons and dragons troll (2) · durnan (2) · dwalin (2) · dyadrine (2) · dye (medium) (2) · dynaheir (2)  
earhorn (2) · eater of virtue (2) · echo (marvel) (2) · echoir (2) · edith keeler (2) · edosian (2)  
edwin jarvis (2) · eight-and-a-half-tails (2) · ekundu (2) · elanor gardner (2) · elas il-kor (2)  
electrical plug (2) · elena (ffvii) (2) · elephant-rat (2) · elijah bradley (2) · ellie sattler (2)  
ellyn harbreeze (2) · elminster aumar (2) · elsha (2) · elturel (2) · embercleave (2) · embraal (2)  
embrose lu (2) · emerald grove (2) · emo (2) · emperor's children (2) · enchantment (2) · endrek sahr (2)  
equilor (2) · erech (2) · eric (2) · erinis (2) · erkenbrand (2) · etali (phyrexian) (2) · eugene patilio (2)  
eunice blackblade (2) · eureka (2) · evelyn (2) · everett ross (2) · eyebot (2) · ezrim (2) · f.r.i.d.a.y. (2)  
fairy circle (2) · faked death (2) · fang (dog) (2) · fang (dragon) (2) · far away (2) · farmer maggot (2)  
fashion icon (2) · feather (character) (2) · ferrous rokiric (2) · ferry (2) · ffviii (2) · fig (2)  
file folder (2) · filthy (2) · fin fang foom (2) · finger waggle (2) · fingers crossed (2) · firbolg (2)  
fire extinguisher (2) · firepit (2) · first sliver (2) · fixer (2) · fjord (2) · flamer (2) · flatman (2)  
flayed one (2) · floating skull (2) · flopsie (2) · flora colossus (2) · floral design (2) · florida (2)  
flotsam (2) · flow state student (2) · flower opening (2) · fluros (2) · foam weapon (2) · foecleaver (2)  
foggy nelson (2) · folding chair (2) · fox person (2) · frances barrison (2) · frankie peanuts (2)  
frederick myers (2) · freya crescent (2) · fritz von meyer (2) · frog-man (2) · frolic (2) · froth (2)  
fruitcake (2) · fugitoid (2) · fuming eyes (2) · fylgja (2) · gaddock teeg (2) · gadwick (2) · gaia (ffxiv) (2)  
galina (2) · galion (2) · gambit (marvel) (2) · gambling (2) · ganax (2) · gandalf's sign (2) · ganke lee (2)  
gardagig (2) · garden gnome (2) · gargantikar (2) · gargos (2) · garland (2) · garth one-eye (2) · gavi (2)  
gearsmith (2) · genasi (2) · general (2) · genetically modified organism (2) · genghis (tmnt) (2) · genku (2)  
georges batroc (2) · georgia (2) · gev (2) · ghave (2) · ghired (2) · gibbon (2) · gideon's promise (2)  
giganto (2) · gil-galad (2) · ginger (character) (2) · gingerbread (2) · githzerai (2) · gladden river (2)  
glass sword (2) · glorfindel (2) · glowing one (2) · gluntch (2) · glyph (tmnt) (2) · goben (2)  
goblin explosioneers symbol (2) · goldberry (2) · golden-scale (2) · golf ball (2) · good king moggle mog xii (2)  
gorgoroth (2) · gothmog (2) · graaz (2) · gradient (2) · graham o'brien (2) · grail (2) · grakk (2)  
greenery (2) · greer nelson (2) · gretchen titchwillow (2) · greyscale (2) · gribble (2) · grime (2)  
grip (dog) (2) · groff (2) · grond (2) · groodion (2) · groundchuck (2) · guardsmen (2) · guenhwyvar (2)  
guild (baldur's gate) (2) · gum (2) · gustha ebbasdotter (2) · gustin (2) · guy (ffii) (2) · gwenom (2)  
h.e.r.b.i.e. (2) · haakon (2) · haemovore (2) · hair loop (2) · hairy back (2) · hajar (2) · hakbal (2)  
halfdane (2) · hall of heliod's generosity (2) · halsin (2) · hamfast gamgee (2) · hamza (2) · hand on thigh (2)  
handstand (2) · hangar (2) · hanging edge (ffxiii) (2) · hank (2) · happy hogan (2) · harbin (2)  
harpers (faction) (2) · harry osborn (2) · harvey elder (2) · hatut zeraze (2) · hay (2) · hazel (2)  
heart of kiran (2) · heart-shaped herb (2) · hearth (2) · hedgehog person (2) · heidegger (2)  
helm of possession (2) · herigast (2) · hermes (2) · hexapoda (2) · hinata (2) · hippy (2) · hit (2)  
hms bounty (2) · hokori (2) · hole in body (2) · homura (2) · hookshot (2) · horncrest (2) · hot rod (2)  
house avenant symbol (2) · house cecani (2) · hraesvelgr (2) · hugs (character) (2) · humbaba (2) · hypospray (2)  
hythonia (2) · ian chesterton (2) · igloo (2) · ignacio (2) · iki hisoka (2) · ikra shidiqi (2) · il mheg (2)  
imbraham (2) · imodane (2) · imoti (2) · imperial fists (2) · impossible construction (2) · imrahil (2)  
imskir (2) · inalla (2) · indominus rex (2) · indoraptor (2) · infinite guideline (2) · inspirit (2)  
iron giant (ff) (2) · iron hands (2) · iron hands symbol (2) · irvine kinneas (2) · isamaru (2) · isareth (2)  
ishai (2) · isshin (2) · istvan (2) · isu (2) · italian exclusive art (2) · itzquinth (2) · ivo robotnik (2)  
ivy (character) (2) · ixion (2) · jace-bird (2) · jack-in-the-box (2) · jackhammer (2) · jagged shaped (2)  
jagwar (2) · jam (2) · jamie mccrimmon (2) · jan jansen (2) · janice lincoln (2) · jared carthalion (2)  
jasmine boreal (2) · jasper flint (2) · jayce talis (2) · jazz (2) · jean grey (2) · jegantha (2)  
jelly baby (2) · jenny flint (2) · jessie rasberry (2) · jill warrick (2) · jim hammond (2) · jo grant (2)  
john walker (2) · johnny/jenny (2) · jolene (2) · jolly balloon man (2) · jon arbuckle (2) · jonathan archer (2)  
jonathan harker (2) · jori en (2) · josu vess (human) (2) · joven (2) · june (avatar) (2) · junon (2) · juri (2)  
jyoti (2) · k-9 (2) · kagha (2) · kalain (2) · kaldheim (origin) (2) · kaldheim troll (2) · kambal (2)  
kangee (2) · kanna (2) · karador (2) · karakas (2) · karl lykos (2) · karn (marvel) (2) · karolina dean (2)  
karox bladewing (2) · karplusan mountains (2) · karrthus (2) · kaseto (2) · katarinya greyfax (2)  
kate stewart (2) · katerina (2) · kathril (2) · kaysa (2) · kaza (2) · kazuul (2) · kebab (2) · kelly kapoor (2)  
kemonomimi (2) · kenessos (2) · kenku (2) · keruga (2) · keskit (2) · kess (2) · kettle (2) · kianne (2)  
king caesar (2) · king cobra (2) · kinsbaile (2) · kira (2) · kirri (2) · kirtar (2) · kitsa (2) · kiyomaro (2)  
kl'rt (2) · klaus voorhees (2) · knowledge pool (2) · koala (2) · kolvori (2) · koma (phyrexian) (2)  
korlash (2) · korlessa (2) · korlis (2) · korrigan (2) · kotose (2) · koya (2) · kraum (2) · kronch (2)  
krynoid (2) · kuberr (2) · kudo (2) · kudu (2) · kugane (2) · kujar (2) · kujata (2) · kukri (2) · kutzil (2)  
kwende (2) · kylem aven (2) · label (2) · lady octopus (2) · lady of otaria (2) · laelia (2) · lagomos (2)  
lagoon (2) · lamprey (2) · landroval (2) · lapis lazuli (2) · laser screwdriver (2) · lathiel (2)  
latulla-pose (2) · laura kinney (2) · leaning tower (2) · ledger (2) · legate lanius (2) · leman russ (2)  
lemure (2) · leonardo da vinci (2) · lexya (2) · liara portyr (2) · liberator (2) · life model decoy (2)  
liger (2) · lila (2) · lily (avatar) (2) · limsa lominsa (2) · linda (evil dead) (2) · linda carter (2)  
lindblum (ffix) (2) · liquid form (2) · lita (2) · livaan (2) · lo and li (2) · long river (2)  
lord of tresserhorn (2) · lorian (2) · lorthos (2) · los angeles (2) · loudspeaker (2) · louisiana (2)  
lozhan (2) · lucille (2) · lucy westenra (2) · ludmilla (2) · lumia (2) · lunch (2) · lunella lafayette (2)  
lurrus (2) · lúthien tinúviel (2) · luvion (2) · lydia frye (2) · lydya (2) · m'baku (2) · machine man (2)  
macie (2) · madame kovarian (2) · madame masque (2) · madame vastra (2) · magar (2) · mageta (2)  
magic bag of tricks (2) · mahadi (2) · mail box (2) · maja (2) · makluan (2) · malacan (2) · malcator (2)  
mallard (2) · mambele (2) · man-thing (2) · mandala (2) · mandolin (2) · manriki-gusari (2) · maralen (2)  
marang river (2) · marc spector (2) · marcus (fallout) (2) · marhault elsdragon (2) · marisi (2)  
martha franklin (2) · marvel boy (2) · marvel god (2) · marvin (2) · maryland (2) · masako (2) · mascara (2)  
maximus (fallout) (2) · may parker (2) · maya lopez (2) · mayor tong (2) · mazzy fentan (2) · mechagodzilla (2)  
medusalith amaquelin (2) · meet and greet "sisay" (2) · mek'leth (2) · membrane (2) · memento (2) · meowscles (2)  
mercadia faerie (2) · mercadia satyr (2) · meria (2) · message (2) · metal detector (2) · metalhead (2)  
metallic dragon (2) · metalwork (2) · metathran airship (2) · meteion (2) · mezzio (2) · midgar zolom (2)  
migloz (2) · migration (2) · mila (2) · mina (2) · mind (2) · mineral pigment (2) · minthara baenre (2)  
mister hyde (2) · mister immortal (2) · mister negative (2) · moccasin (2) · mochi (2) · modron (2) · moku (2)  
monoxa (2) · monster isle (2) · monstrosaur (2) · moon girl (2) · moon knight (2) · moon-boy (2) · moraug (2)  
morcant (2) · morgul-knife (2) · morinfen (2) · moritte (2) · mortarion (2) · moseo (2) · mothra (2) · motor (2)  
mount gulg (2) · mounted (2) · ms. bumbleflower (2) · muerra (2) · mugato (2) · mule (2) · munetsugu takeno (2)  
mushroom rock road (2) · music box (2) · musket (2) · muted (2) · muxus (2) · mycotyrant (2) · myrel (2)  
myrkul (2) · myrkul symbol (2) · naban (2) · nadu (2) · nael (2) · nagao (2) · najal (2) · namora (2)  
nargacuga (2) · nath (2) · nathan summers (2) · nautiloid (2) · naya minotaur (2) · neera (2) · negative zone (2)  
nekoru (2) · nekusar (2) · neldoreth (2) · neva (2) · neverwinter wood (2) · nezahal (2) · nia (2) · nicanzil (2)  
nick valentine (2) · nico minoru (2) · nidhogg (2) · nido sanctuary (2) · night nurse (2) · nighteyes (2)  
nighthawk (2) · nightveil (2) · nikya (2) · nill (2) · nocturno (2) · nodorog (2) · noldo (2) · noodle (2)  
norbert ebersol (2) · nori (2) · north pole (2) · nose art (2) · nosedive (2) · nova (2) · novijen (2)  
novo symbol (2) · noyan dar (2) · null (tmnt) (2) · nurse (2) · nyla (2) · nyssa (2) · oathbreaker king (2)  
ob nixilis (human) (2) · objects on the ground (2) · obosh (2) · obscura's cloud spire (2) · ochu (2) · odie (2)  
odor (2) · oglor (2) · ognis (2) · ohabi caleria (2) · óin (2) · oji (2) · okapi (2) · okina (2) · olantin (2)  
old hob (2) · oloro (2) · omega (ff) (2) · ood (2) · open ground (2) · orah (2) · orca (animal) (2)  
orca (character) (2) · orcus (2) · ore (2) · origami frog (2) · orion (2) · ornament (2) · oros (2) · oscorp (2)  
osprey (2) · oswald fiddlebender (2) · otarian barbarian (2) · otharri (2) · otrimi (2) · otter-penguin (2)  
ouija board (2) · ovika (2) · owen grady (2) · owen reece (2) · owyn lyons (2) · pacman (2) · padded room (2)  
paddle (2) · paleontology (2) · panorama-7ed-plains (2) · panorama-anaba-shaman (2) · panorama-bombardment (2)  
panorama-bro-prodigy (2) · panorama-chk-yamazaki (2) · panorama-dark-maze (2) · panorama-ddk-planewalker (2)  
panorama-ddm-planeswalkers (2) · panorama-diamond (2) · panorama-dom-knight (2) · panorama-dwarven-trader (2)  
panorama-ertai (2) · panorama-fic-levilleurs (2) · panorama-fin-intro (2) · panorama-fireball-incinerate (2)  
panorama-fra-ajani (2) · panorama-fra-ajani-borderless (2) · panorama-fra-chandra (2) · panorama-fra-fblthp (2)  
panorama-fra-gideon (2) · panorama-fra-karn (2) · panorama-fra-liliana (2) · panorama-fra-lyra (2)  
panorama-fra-thalia (2) · panorama-fra-winter (2) · panorama-j25-yamazaki (2) · panorama-lancers (2)  
panorama-lrw-br (2) · panorama-lrw-gb (2) · panorama-lrw-gu (2) · panorama-lrw-rg (2) · panorama-lrw-rw (2)  
panorama-lrw-ub (2) · panorama-lrw-ur (2) · panorama-lrw-wb (2) · panorama-lrw-wg (2) · panorama-lrw-wu (2)  
panorama-m15-twingrove (2) · panorama-m19-gearsmith (2) · panorama-miles-and-gwen (2)  
panorama-mir-plains-blue (2) · panorama-mir-plains-red (2) · panorama-mir-swamp (2)  
panorama-mom-phyrexian-hydra (2) · panorama-msc-ff-hero (2) · panorama-msc-hero-for-hire (2)  
panorama-nalaars-revolution (2) · panorama-neo-yamazaki (2) · panorama-ondu (2)  
panorama-otj-coyote-roadrunner (2) · panorama-phage-akroma (2) · panorama-phyrexian-boon (2)  
panorama-repentant-gallantry (2) · panorama-sld-alayna-1 (2) · panorama-slx-casal (2)  
panorama-soldevi-adnate (2) · panorama-trade-caravan (2) · panorama-urza-mishra (2) · panorama-who-osgood (2)  
panorama-zndrsplt-okaun-blue (2) · panorama-zndrsplt-okaun-red (2) · pantlaza (2) · paper airplane (2)  
paperclip (2) · pareidolia (2) · parker robbins (2) · passenger (2) · patriot (marvel) (2) · pearl-ear (2)  
peg leg (2) · peggy carter (2) · perfume (2) · peri brown (2) · persimmon (2) · phelia (2) · phil coulson (2)  
phylath (2) · phylias (2) · phyrexian gremlin (2) · phyrexian ruin (2) · picking nose (2) · picking teeth (2)  
pietra (2) · pink fire (2) · piper wright (2) · piru (2) · piston (2) · plague marine (2) · planeswalker (2)  
planetarium (2) · plasma elemental (2) · plectrum (2) · plesiosaur (2) · pneumatic tube (2) · poker chip (2)  
polukranos (phyrexian) (2) · pooky (2) · popped collar (2) · porcupine person (2) · portico (2) · powder (2)  
powder/jinx (character) (2) · power tool (2) · poxwalker (2) · praetor (2) · pram (2) · presto (2) · primo (2)  
primoc (2) · princess luna (2) · princess python (2) · professor zayton honeycutt (2) · promontory (2)  
psionic breath (2) · pter ptarker (2) · puca (2) · pudding (2) · pug (2) · puma (2) · pup (2) · purraj (2)  
qarsi (2) · qo'nos (2) · queen lian (2) · queza (2) · quilt (2) · quincy mciver (2) · quistis trepe (2)  
quyzl (2) · radial blur (2) · radiant's symbol (2) · radioactive man (2) · radix (2) · radstag (2)  
raggadragga (2) · ragnarok (2) · ragost (2) · rahilda (2) · railroad (fallout) (2) · raiyuu (2)  
ral zarek (echoverse) (2) · ramazith's tower (2) · ramirez depietro (human) (2) · ramonda (2)  
ramses overdark (2) · rannet (2) · raphael (dnd) (2) · rasputin dreamweaver (2) · ratadrabik (2) · rath dínen (2)  
rath troll (2) · rathalos (2) · raven guard (2) · raven guild (2) · ravencroft institute (2) · ravi sengir (2)  
rayne (2) · reaper (2) · rebbec (2) · rebecca crane (2) · red helmet (2) · red room (2) · red wizards of thay (2)  
relic (2) · renari (2) · renet (2) · repaired avacyn's collar (2) · replacement artwork (2) · research (2)  
revive (2) · rex nebula (2) · reyav (2) · rice paddy (2) · ridge (2) · rielle (2) · rigo (2) · rikkig (2)  
riku (2) · rilsa rael (2) · rionya (2) · rip (2) · rishkar (2) · rita demara (2) · rivaz (2) · roalesk (2)  
robobrain (2) · rock 'n roll (2) · rocking chair (2) · rocking horse (2) · rodan (2) · rograkh (2)  
rogue (marvel) (2) · rohgahh (2) · romana (2) · rona (phyrexian) (2) · roon (2) · rose cotton (2) · roshan (2)  
rotated-perspective (2) · roxi (2) · rubber ball (2) · rubber chicken (2) · rubinia soulsinger (2)  
rude (ffvii) (2) · ruler (2) · rulik mons (2) · rumiyo (2) · rydia (2) · ryu (2) · safana (2) · safe (2)  
sage (ffxiv job) (2) · sage's row (2) · sai (character) (2) · sakiko (2) · sakura miku (2) · salad (2)  
sally pride (2) · sally sparrow (2) · salt flats (2) · salt vampire (2) · salve (2) · san francisco (2)  
sand blast (2) · sangrite (2) · sant' angelo di roma (2) · santa hat (2) · saprazzo symbol (2) · sarah (ff1) (2)  
sarulf (phyrexian) (2) · saskia (2) · satsuki (2) · satya (2) · satyr (2) · saurid (2) · sauron (marvel) (2)  
sazh katzroy (2) · scale coin (2) · scene-akros-irregulars (2) · scene-arashin-war-beast (2)  
scene-dragonscale-boon (2) · scene-fierce-invocation (2) · scene-hewed-stone-retainers (2)  
scene-innistrad-forest-ravine (2) · scene-innistrad-forest-tree (2) · scene-innistrad-island-bridge (2)  
scene-innistrad-island-ravine (2) · scene-innistrad-mountain-rock (2) · scene-innistrad-mountain-tower (2)  
scene-innistrad-plains-crags (2) · scene-innistrad-plains-fields (2) · scene-innistrad-swamp-field (2)  
scene-innistrad-swamp-hill (2) · scene-jeering-instigator (2) · scene-jeskai-infiltrator (2)  
scene-krenko-alley (2) · scene-legion-of-dusk-moment (2) · scene-mastery-of-the-unseen (2)  
scene-ravnica-forest (2) · scene-ravnica-island (2) · scene-ravnica-mountain (2) · scene-ravnica-plains (2)  
scene-reality-shift (2) · scene-sultai-emissary (2) · scene-ugins-construct (2) · scene-ulamog-kozilek-fall (2)  
scene-wildcall (2) · scene-write-into-being (2) · scorn pole (2) · scott summers (2) · scream (symbiote) (2)  
scrubland (2) · sea devil (2) · sea sponge (2) · sea urchin (2) · seatower of balduran (2) · sedris (2)  
seeq (2) · sefris (2) · segmented spear (2) · segovian hippodrome (2) · seitaro yamazaki (2) · seizan (2)  
sek'kuar (2) · selphie tilmitt (2) · sen triplets (2) · serah farron (2) · seriema (2) · sethron (2) · seton (2)  
seven of nine (2) · sevinne (2) · sewing pin (2) · shabraz (2) · shadow hostel (2) · shadow object (2)  
shadow puppet (2) · shaile talonrook (2) · shantotto (2) · sharaz jek (2) · shark shredder (2)  
sharon carter (2) · sharuum (2) · shaun hastings (2) · shay cormac (2) · shears (2) · sheila (2)  
shellephant (2) · shessra (2) · shield bash (2) · shield magic (2) · shigeki (2) · shimia (2) · shinryu (2)  
shirei (2) · shoji (2) · shoopuf (2) · shop (2) · shorikai (2) · shroudstomper (2) · shujiro yamazaki (2)  
sidar kondo (2) · sideswipe (2) · sigrid (2) · sigurd styrbjornsson (2) · silkscreen (2) · silumgar symbol (2)  
silvija sablinova (2) · silvos (2) · sin eater (2) · sivitri scarzam (2) · sivriss (2) · six heads (2)  
skola vale (2) · skull seal (2) · slaanesh symbol (2) · sliver hivelord (2) · slizt clan (2) · slobad (2)  
slobad (phyrexian) (2) · slum (2) · smack (2) · snake person (2) · snake-eyes (2) · snarg's house of sin (2)  
snot (2) · snow villiers (2) · snuggles (2) · soap (2) · sock and buskin (2) · socrates (2) · solaflora (2)  
songbird (2) · sonic breath (2) · space wolves symbol (2) · spacegodzilla (2) · spaghetti (2) · spain (2)  
spark harvest (2) · spear pointed (2) · speed (marvel) (2) · spider-rex (2) · spiderfolk (2)  
spike (character) (2) · spike (my little pony) (2) · spike witwicky (2) · spilling (2) · spine of the world (2)  
spinneret (marvel) (2) · spinnerette (2) · spinning wheel (2) · splicer (2) · spuzzem (2) · stable (2)  
staff of eden (2) · standing above (2) · stangg twin (2) · star trek: discovery (2) · starrix (2)  
stasis person (2) · steamboat (2) · stethoscope (2) · stinky (2) · stormcast eternal (warhammer) (2)  
strahd von zarovich (2) · strahl (2) · stranger things (2) · stretcher (2) · studded bracelet (2) · subira (2)  
summoner (ff job) (2) · sunastian falconer (2) · super-adaptoid (2) · superior spider-man (2)  
supreme intelligence (2) · surcoat (2) · surgical (2) · surris (2) · susurian (2) · svella (2) · svyelun (2)  
swarm (doctor who) (2) · swarm (marvel) (2) · swiss army knife (2) · switzerland (2) · symbiosis (2)  
symbiote (marvel) (2) · szarekh (2) · t-51 power armor (2) · t'chaka (2) · taborax (2) · tal terig (2)  
tall hat (2) · talrand (2) · tameshi (2) · taneleer tivan (2) · tarkir (origin) (2) · tasha (2) · tatsunari (2)  
tau (2) · taysir (2) · tea set (2) · tecteun (2) · tegwyll (2) · telim'tor (2) · tellah (2) · teremko (2)  
tersa lightshatter (2) · tetsuo umezawa (2) · the eruption of mount vesuvius (2) · the falcon (2)  
the fourteenth doctor (2) · the great henge (2) · the hood (2) · the master (tremas) (2)  
the master of lake-town (2) · the mechanist (2) · the mindskinner (2) · the most dangerous gamer (2)  
the mouth of sauron (2) · the necrobloom (2) · the pandorica (2) · the scorched forest (avatar) (2)  
the silence (2) · the ten rings (2) · the tiger god (2) · the tornado (2) · the wandering minstrel (ffxiv) (2)  
themberchaud (2) · themis (2) · thokt symbol (2) · thought bubble (2) · thrakkus (2) · thrasios (2) · thrasta (2)  
thraximundar (2) · thraxodemon (2) · three vs one (2) · thruster (2) · thryx (2) · tibor (2) · tigra (2)  
tilt (2) · tilt-shift perspective (2) · time (planet) (2) · time bomb (2) · time variance authority (2)  
timin (2) · timmy (2) · tiny (character) (2) · tivadar (2) · tobias andrion (2) · toilet (2) · tojira (2)  
toluz (2) · tommy shepherd (2) · toothbrush (2) · top secret (2) · tor wauki (2) · tori d'avenant (2)  
torpedo (2) · torsten von ursus (2) · tower hills (2) · trans female (2) · transformers (2) · trazyn (2)  
tree of redemption (2) · trelasarra zuind (2) · trench warfare (2) · treza warehouse (2) · trial (2)  
trireme (2) · tromokratis (2) · troyan (2) · truss (character) (2) · tuktuk (2) · turtleneck (2)  
tusk mountains (2) · tuskeri clan (2) · tutu (2) · tuvasa (2) · tweezer (2) · tyro (2) · u.s.agent (2)  
uchbenbak (2) · ula (god) (2) · ulalek (2) · ulf (2) · ulgrotha goblin (2) · ultros (ffvi) (2) · umori (2)  
uncertain mirrodin sun (2) · uncharted (2) · unctus (2) · unglued (2) · uni (2) · unibrow (2) · unsent (ffx) (2)  
unyaro (2) · upside down (place) (2) · ursa (2) · uss voyager (2) · uurg (2) · uuserk (2) · vaar (2)  
valakut stoneforge (2) · valduk (2) · valentina allegra de fontaine (2) · valla (2) · valve (2) · vana'diel (2)  
vark (2) · vayne carudas solidor (2) · veena (2) · vega (2) · venger (2) · venser (phyrexian) (2)  
verity circle (2) · verix bladewing (2) · veyran (2) · victor timely (2) · viggo (2) · violet (character) (2)  
vislor turlough (2) · vitruvian man (2) · vohar (2) · volley ball (2) · vorel (2) · voter (2) · vren (2)  
vulcan (planet) (2) · vuliev (2) · walkie talkie (2) · warhammer aos (2) · warm (2) · warren worthington iii (2)  
warring triad (2) · washing (2) · wasitora (2) · wasteland survival guide (2) · weather maker (2)  
wedge (ffvii) (2) · wheel of fortune figure (2) · whiplash (2) · whisper (character) (2)  
white tiger (marvel) (2) · whiteboard (2) · whitney frost (2) · wick (2) · wildebeest (2) · wilfred mott (2)  
william braddock (2) · william foster (2) · willowdusk (2) · windfola (2) · windlance (2) · winota (2) · wok (2)  
wombat (2) · woodpecker (2) · wort (2) · woven branches (2) · wrexial (2) · wyleth (2) · xande (2)  
xenomorph (2) · xindi (2) · xu-ifit (2) · xyris (2) · yaguaro (2) · yao guai (2) · yarus (2) · yedora (2)  
yenna (2) · yeva (2) · ygra (2) · yiazmat (2) · yidris (2) · yorion (2) · yoshimaru (2) · yukata (2)  
zack fair (2) · zaffai (2) · zahid (2) · zalto (2) · zar ojanen (2) · zaxara (2) · zebra stripes (2)  
zelda dubois (2) · zell dincht (2) · zeppelid (2) · zevlor (2) · zhang fei (2) · zheng (2) · zilortha (2)  
zinnia (2) · zoraline (2) · zul ashur (2) · aardvark (1) · abdul qamar (1) · abian (1) · aboleth (1)  
abomination of llanowar (1) · absolute virtue (1) · abu ja'far (1) · achilles davenport (1) · acne (1)  
acornelia (1) · actor iroh (1) · actress azula (1) · adeliz (1) · ademi (1) · adeptus custodes (1)  
adeptus mechanicus symbol (1) · adrestia (1) · adrian adanto of lujio (1) · adun oakenshield (1) · adze (1)  
aegis-fang (1) · aeglos (1) · aetherwing (1) · aeve (1) · africa (1) · agents of sneak symbol (1)  
aggression (1) · agility (1) · ahriman (warhammer 40k) (1) · airiam (1) · aisha (1)  
ajani goldmane (cosplay) (1) · akhaten (1) · akim (1) · akuta (1) · al-abara (1) · alacria (origin) (1)  
aladdin (1) · alaska (1) · alberto (1) · albiorix (1) · ale (1) · alenni (1) · alessos (1) · alex wilder (1)  
alexander (ffxiii) (1) · alexander (ffxiv) (1) · alexander clamilton (1) · alexander graham bell (1)  
alexei shostakov (1) · alexis murphy (1) · alharu (1) · ali baba (1) · alibou (1) · alice nugent (1)  
alistaire smythe (1) · allagan tomestone of causality (1) · alligator/crocodile person (1) · alone (1)  
altanak (1) · amareth (1) · amethyst dragon (1) · amity island (1) · amy (tmnt) (1) · amzu (1) · anara (1)  
anchin (1) · andres (1) · andrew forson (1) · andrios (1) · androzani major (1) · anemomancer (1) · anep (1)  
angrath (cosplay) (1) · anguirus (1) · angus mackenzie (1) · anikthea (1) · animal person (1) · anina (1)  
ankheg (1) · annie parker (1) · annihilus (1) · antausia (1) · anya (1) · apatzec intli iv (1) · aphelia (1)  
aphemia (1) · apothecary white (1) · apricot (1) · aquatic humanoid (1) · arabella (1) · aradesh (1) · arala (1)  
arashi (1) · araumi (1) · arcade gannon (1) · arcavios (origin) (1) · archaon (1) · archelos (1) · archeology (1)  
arctic (1) · arcturus rann (1) · ardbert hylfyst (1) · ardenn (1) · ardoz (1) · arek (1) · arenos karlaen (1)  
ares (marvel) (1) · aretopolis (1) · argalith (1) · argyr (1) · aristocrat (1) · arius (1) · arjun (1)  
ark (ffix) (1) · arlene (1) · armageddon (warhammer 40k) (1) · armaggon (1) · armus (1) · arnyn (1)  
arrowslit (1) · art watermark (1) · arteeoh (1) · arthrosian (1) · arthur (1) · artichoke (1) · arvinox (1)  
aryel (1) · arzakon (1) · ashad (1) · ashcoat (1) · ashildr (1) · asia (1) · asmira (1) · asmodeus (1)  
astral plane (1) · astrid peth (1) · atalya (1) · atarka symbol (1) · atemsis (1) · athena (1) · athens (1)  
atla palani (1) · atlatl (1) · atropal (1) · atsu (1) · attilan (1) · attuma (1) · auditory impairment (1)  
augusta (spirit) (1) · aunt wu (1) · auntie ool (1) · aureola (1) · aurlock (1) · australia (1)  
austriadactylus (1) · autumn-tail (1) · ava ayala (1) · avarax (1) · averru (1) · awesome android (1)  
axavar (1) · axelrod gunnarson (1) · axurik (1) · ayli (1) · aymeric de borel (1) · azamuki (1)  
ba'ku (planet) (1) · baal (40k) (1) · babygodzilla (1) · badgey (1) · baeloth barrityl (1) · bagel (1)  
bahamut symbol (1) · bajor (1) · bajoran (1) · bakery (1) · baku (ffix) (1) · baldin (1) · baldric (1)  
baldur's gate (gate) (1) · balefang (1) · balor (1) · balthor rockfist (1) · balustrade (1) · bane symbol (1)  
banesword (1) · bangaa (1) · barbar (1) · barbariccia (ffiv) (1) · barkskin (1) · barktooth warbeard (1)  
barliman butterbur (1) · barnabas tharmr (1) · baron blood (1) · barrow (character) (1) · barry reich (1)  
bartel runeaxe (1) · barthandelus (1) · basandra (1) · basil (character) (1) · basil (herb) (1)  
basilisk gate (baldur's gate) (1) · battra (1) · bavlorna blightstraw (1) · bayo (1) · be'lakor (1) · beatrix (1)  
beefcake (1) · behir (1) · belbe (phyrexian) (1) · belgium (1) · belion (1) · bell borca (1) · ben parker (1)  
ben-ben (1) · bending the elements (1) · bennie bracks (1) · bentley wittman (1) · benzite (1) · beregond (1)  
beren (1) · berta (1) · bertram graywater (1) · bess (1) · bessie (1) · betting (1) · betty brant (1)  
betty wray (1) · bhaalspawn (1) · big ben (1) · big brain (1) · big wheel (1) · biggs (ffvi) (1) · bike lock (1)  
bilbo (1) · bill ferny (1) · billiards (1) · binox (1) · biollante (1) · biran ronso (1) · bird feeder (1)  
bird strike (1) · biting lip (1) · bitterthorn (1) · bjorna (1) · black bart roberts (1) · black dragon gate (1)  
black legion (1) · black tom cassidy (1) · black tunic (1) · black waltz no. 3 (1) · blackstaff of waterdeep (1)  
blanka (1) · blazon (1) · blex (1) · blim (1) · blond beard (1) · blowfly (1) · blue cap (1) · blue mage (ff) (1)  
bluebell (1) · boareskyr bridge (1) · bob (fallout) (1) · bobbit worm (1) · bobsled (1) · bodhum (1) · bohn (1)  
bolian (1) · books in air (1) · borg cube (1) · borg queen (1) · boris bullski (1) · boris devilboon (1)  
born (1) · borys (1) · bovine (1) · bowling pin (1) · brachydios (1) · bracing (1) · brainwave (1) · brako (1)  
brallin (1) · braulios (1) · brawn (transformers) (1) · bre (1) · breadfruit (1) · breena (1) · brenard (1)  
bricklaying (1) · bride of nine spiders (1) · bright-palm (1) · brigone (1) · brimaz (phyrexian) (1)  
brimstone horror (1) · brinelin (1) · brint doobin (1) · brion stoutarm (1) · bristly bill (1)  
bron stonebrow (1) · brontothere (1) · brown tunic (1) · bruno horgan (1) · brutalist (1) · bug (marvel) (1)  
bullet casing (1) · bumper car (1) · burakos (1) · burke (1) · burning man (1) · burrenton (1) · buskins (1)  
butch deloria (1) · butter (1) · butterflyfish (1) · buxton (1) · byode (1) · byrke (1) · cacophony (god) (1)  
cadian (1) · cadoras damellawar (1) · cadric (1) · caelorna (1) · caetus (1) · cagnazzo (ffiv) (1)  
cair andros (1) · calim (1) · cam (1) · candela (1) · cao ren (1) · caparison (1) · capelet (1)  
capenna (plane) (1) · capenna faerie (1) · carbuncle (1) · carcass as building (1) · cardassia prime (1)  
cardz logo (1) · carlo (1) · carmen (1) · carnifex (1) · carter dawson (tmnt) (1) · carth (1) · cartomancy (1)  
casein paint (1) · cass (fallout) (1) · cassandra webb (1) · cassava (1) · cassette tape (1)  
catachan symbol (1) · catfolk (1) · catti-brie (1) · caves of chaos (1) · cazador (wasp) (1) · cazur (1)  
cecily (1) · celeborn (1) · celestial body (1) · celestine (warhammer 40k) (1) · cenobite (1) · censor bar (1)  
cerise (1) · cesare borgia (1) · ceti alpha v (1) · chakotay (1) · chamber of the obzedat (1)  
chancer's vale (1) · changeling (star trek) (1) · chao (1) · chaps (1) · charles xavier (1)  
charlotte webber (1) · charmed sleep (1) · chase stein (1) · chea (1) · checkpoint (1) · cherub (1)  
cheryl williams (1) · chevill (1) · chimpanzee (1) · chisei (1) · chishiro (1) · chiss-goria (1) · chizak (1)  
chloe (tmnt) (1) · chloe frazer (1) · choice (1) · christine chapel (1) · chun-li (1) · chwinga (1)  
cigarette (1) · circu (1) · circular door (1) · círdan (1) · cirina bargainspinner (1) · cirrus (1)  
citadel gate (baldur's gate) (1) · city tree (selesnya conclave) (1) · claire brown (1) · clan raukaan symbol (1)  
cleon (1) · cliffgate (1) · cliffjumper (1) · climate change (1) · cloud of darkness (1) · coalition symbol (1)  
coast way (1) · code (1) · codsworth (1) · collector (1) · colonel mustard (1) · colorado (1) · command rod (1)  
commissar (1) · confessor cromwell (1) · conrad kellogg (1) · constellation stone (1) · cooler (1)  
cooper howard (1) · core set eighth edition (1) · corel (1) · corpus brethren (1) · corpus brethren symbol (1)  
cosi (god) (1) · court street (1) · cowl (location) (1) · crab person (1) · craig boone (1)  
crash (character) (1) · cream (1) · creepweed (1) · cricket (1) · cridhe (1) · cromat (1) · crooked artwork (1)  
crusher hogan (1) · crutch (1) · cryin' houn' (1) · crystal dragon (1) · crystal elemental (1)  
crystal tower (ffiii) (1) · crystalline entity (1) · cube (fortnite) (1) · cubism (1) · cuddle team leader (1)  
cudley (1) · curie (1) · curtsy (1) · cynette (1) · daisy johnson (1) · dalakos (1) · dame (1) · damia (1)  
damocles base (1) · dan hibiki (1) · dancer (1) · dango (1) · danny pink (1) · daraja (1)  
dark angels symbol (1) · dark street (1) · darren cross (1) · darryl philbin (1) · darval (1) · daryl dixon (1)  
dastardly doom symbol (1) · data (1) · davida devito (1) · dawnsire (1) · dci card (1) · deadite (1) · déagol (1)  
deanna troi (1) · death elemental (1) · death kiss (1) · death korps of krieg (1) · deathleaper (1)  
deathlok (1) · deb thomas (1) · deekah (1) · demera (1) · demogoblin (marvel) (1) · demogorgon (1) · denmark (1)  
denry klin (1) · desdemona (1) · desecrex (1) · destoroyah (1) · detection (1) · devastator (1) · devin (1)  
dhalsim (1) · diabolos (1) · diamond (tmnt) (1) · diaochan (1) · diaper (1) · dieselpunk (1) · dima (1)  
dime (1) · dinosaur person (1) · dionus (1) · diorama (1) · dirndl (1) · dissolving (1)  
district of columbia (1) · diving bell (1) · dnd cartoon (1) · doctor faustus (1) · dog biscuit (1)  
dog brother #1 (1) · dokai (1) · dollet (1) · doma (1) · domestication (1) · dominaria satyr (1) · dona (ffx) (1)  
donal (1) · donald blake (1) · dong zhou (1) · doot (1) · doppelganger (marvel) (1) · doradur (1) · dorat (1)  
drafna (1) · dragon cult (1) · dragon cult symbol (1) · dragon man (1) · dragon's lair (1) · drakuseth (1)  
dreadfang (1) · drednok (1) · dregg (1) · drew tucker (1) · drider (1) · dripping (1) · druneth (1) · duchess (1)  
dúnadan (1) · dundoolin (1) · durlag's tower (1) · duskana (1) · dusthawk hill (1) · dustin henderson (1)  
dyfed (1) · ea (species) (1) · eärendil (1) · east-mark (1) · easterling (1) · eberhart (1) · ed-e (1)  
edda blackbosom (1) · eden's promise (1) · edgin darvis (1) · edmond honda (1) · edric (1) · edward teach (1)  
eesha (1) · effie (1) · eggplant (1) · egrix (1) · ekthi (1) · el yunque (1) · el-hajjâj (1) · eladrin (1)  
elayne garamonde (1) · elbrus (1) · elda (1) · eldar (1) · elendil (1) · eleven (character) (1) · eligeth (1)  
elim garak (1) · elizabeth shaw (1) · elizabeth taggerdy (1) · ellie perkins (1) · ellivere (1) · elmar (1)  
eloise (1) · elusen (1) · elwing (1) · embalming tool (1) · emerald dragon (1) · emeralds of girion (1)  
emergency medical hologram (1) · emeria (god) (1) · emi sawatari (1) · emil (1) · emissary (1)  
emissary green (1) · emma frost (1) · emperor gestahl (1) · endelyn moongrave (1) · endsinger (1)  
energy wave (1) · enezesku (1) · english exclusive art (1) · enkira (1) · ennis (1) · eorzean (language) (1)  
eos (ffxiv) (1) · ephemeral (1) · eraser (1) · erayo (1) · erebos (phyrexian) (1) · eriana (1) · eris (1)  
eron (1) · error-9 (1) · ersta (1) · ertha jo (1) · erupting creature (1) · esior (1) · esix (1)  
esper angel (1) · esper minotaur (1) · ethrimik (1) · ettercap (1) · eula blue (1) · euru (1) · eutropia (1)  
evangela (1) · evaporate (1) · evereth (1) · evidence capsule (1) · evil dead (universe) (1) · evin (1)  
evra (1) · ex-borg (1) · excava (1) · exhaustion (1) · exocomp (1) · exterminatus (1) · external ip (1)  
eye of horus (1) · eye-level (1) · ezekiel sims (1) · eztli (1) · fabian stankiewicz (1) · fading (1) · fain (1)  
fajjal (1) · fake goblin (1) · faldorn (1) · falthis (1) · family of blood (1) · fan-plate (1) · farid (1)  
faris scherwiz (1) · farplane (1) · farrik (1) · fat cobra (1) · fatalis (1) · fautomni (1) · feeling (1)  
felisa fang (1) · felix (1) · fen (marvel) (1) · feroz (1) · ferrafor (1) · ff chocobo spinoffs (1) · ffxii (1)  
file cabinet (1) · finial (1) · fire fountain city (1) · fire nation ship (1) · firepower (marvel) (1)  
firkraag (1) · fishsticks (fortnite) (1) · fishtail (1) · fizik (1) · flail snail (1) · flamberge (1)  
flayed (1) · fleem (1) · flesh shapeshifter (1) · flippers (1) · flitwing (1) · floating isle (location) (1)  
flubs (1) · fludge (1) · flugelhorn (1) · flumph (1) · flying tiger (1) · force breath (1) · forceps (1)  
forge fitzwilliam (1) · fort condor (1) · fortune (character) (1) · forum (1) · foundry street (1)  
francisco (1) · frank horrigan (1) · frankie (1) · frankie raye (1) · franklin hall (1) · freejam (1)  
french exclusive art (1) · frenzy (1) · freya njördsdottir (1) · freyja nordottir (1) · frisbee (1)  
frodo gardner (1) · froghemoth (1) · frost giant (1) · frost marsh (1) · fry (1) · fumiko (1) · fumulus (1)  
fungus humungous (1) · furgul (1) · gabriel angelfire (1) · gabriel jones (1) · gadrak (1) · gaea (1)  
gaea's liege (1) · gahiji (1) · galbadia hotel (1) · galdor (1) · gallia (1) · gallowbraid (1)  
galuf halm baldesion (1) · gamma mutate (1) · gandrel (1) · gang sign (1) · garlean (1) · garlemald (1)  
gary (fallout) (1) · garza zol (1) · gates of istfell (1) · gatta (1) · geisel bugenhagen (1) · gemsbok (1)  
genesis (planet) (1) · genestealer patriarch (1) · genie (1) · genocide (1) · geordi la forge (1) · gerbil (1)  
german exclusive art (1) · gertrude yorkes (1) · gesticulating (1) · ghal maraz (1) · ghalma (1)  
ghalta (echoverse) (1) · ghazghkull (1) · ghen (1) · ghet family (1) · ghidorah (1) · ghost (marvel) (1)  
ghost of tsushima (1) · ghostly object (1) · ghyrson starn (1) · giant of babil (1) · gigan (1) · gilanra (1)  
gilraen (1) · gimbal (character) (1) · giott (1) · giraffe person (1) · give (1) · glacian (1)  
gladden fields (1) · glair (1) · glava (1) · gleemax (1) · glenn rhee (1) · glimpse (character) (1) · gloria (1)  
gnat alley (1) · gnostro (1) · god (1) · godfrey gwilym (1) · godzillaverse (1) · gohei (1) · goka (1)  
golden (1) · golden grove (1) · golden throne (warhammer 40k) (1) · golden-tail (character) (1) · goliath (1)  
golos (1) · gond (1) · gond gate (1) · gongaga (1) · gopher (1) · gor muldrak (1) · gorbag (1) · gore magala (1)  
gorex (1) · goriak (1) · gorilla-man (1) · gorma (1) · gornog (1) · goro rel (1) · gorra tash (1) · gosling (1)  
gosta dirk (1) · grakmaw (1) · gramophone (1) · gran pulse (1) · grandmother goby (1) · gravel-hide clan (1)  
graviton (1) · gray harbor (1) · gray wolf (1) · graypelt (1) · grayson wildemere (1) · grazilaxx (1)  
great intelligence (1) · green mantle (1) · green tunic (1) · greenwheel (1) · gregor (1) · gregor eisenhorn (1)  
grell (1) · grendel (symbiote) (1) · grete (1) · greymond (1) · grishnákh (1) · grismold (1)  
grizzly (marvel) (1) · grothama (1) · grumgully (1) · grung (1) · grunn (1) · grusilda (1) · guava (1)  
guerrilla (1) · guile (character) (1) · gus (1) · gutmorn (1) · gwafa hazid (1) · gwendlyn di corci (1)  
gwendolyn poole (1) · gwenna (1) · gwyn (1) · gylwain (1) · gyome (1) · gyox (1) · gyr abania (1)  
gyrus (character) (1) · hadana (1) · hair colors (1) · hair wrap (1) · hajime kano (1) · hakim (1) · haktos (1)  
haldan (1) · hallway (1) · hame (1) · hammerheim (1) · hammock (1) · hand off (1) · hand on mouth (1)  
handheld communicator (1) · hands bound (1) · handwriting (1) · hanging (1) · hanging pot (1) · hansk (1)  
hapato (1) · hapatra (1) · harad (1) · haradrim faction symbol (1) · hardin (1) · hargilde (1) · harmonica (1)  
harold (fallout) (1) · harry kim (1) · hashaton (1) · haunt of hightower (1) · havel (1) · hayloft (1)  
hazduhr (1) · hazmat (marvel) (1) · he who hungers (1) · headboard (1) · headliner scarlett (1)  
heap gate (baldur's gate) (1) · hearing aid (1) · hearthhull (1) · hector ayala (1) · hedorah (1) · heidar (1)  
hela (1) · hellen feliciano (1) · henry wu (1) · henzie torre (1) · herbivore (1) · hero (1) · hewen frit (1)  
hex (dog) (1) · hexagram (1) · hezrou (1) · hien rijin (1) · hieracosphinx (1) · hiexel tree (1)  
highwind (ffvii) (1) · hikari (1) · hildibrand manderville (1) · hiroku (1) · hish (1) · hit-monkey (1)  
hive (marvel) (1) · hivis (1) · hoarfrost (1) · hofri ghostforge (1) · hogaak (1) · hojo (1) · holding breath (1)  
holga kilgore (1) · holiday (1) · holly (1) · holy infusion (1) · homer (1) · hong kong (1)  
honor among thieves (1) · hookah (1) · hookiver (1) · hoopoe (1) · hope of ghirapur (1) · horde of notions (1)  
horta (1) · horus lupercal (1) · hoshi sato (1) · hound (transformer) (1) · house joryev symbol (1)  
house of ideas (1) · house tarmula symbol (1) · house terryn (1) · howard the duck (1) · hua tuo (1)  
huang zhong (1) · hub cap (1) · huffer (1) · hugh grant (1) · hugo kupka (1) · humberto lopez (1) · hume (1)  
hummingway (1) · hundelstone (1) · hunding gjornersen (1) · hurska (1) · hydaelyn (1) · hydro-man (1)  
hyena person (1) · hylderhigh (1) · hypercube (1) · hythlodaeus (1) · ian (fallout) (1) · ib halfheart (1)  
ice magic (1) · ice warrior (1) · ich-tekik (1) · ichiga (1) · idris (1) · iizuka (1) · ikoria gremlin (1)  
ilsabard (1) · imaryll (1) · immard (1) · imotekh (1) · impossible man (1) · incendiary bottle (1)  
indonesia (1) · indris (1) · infinity stone (1) · inniaz (1) · integrated weapon (1) · intet (1)  
invaders (marvel) (1) · inzerva (1) · ioreth (1) · iowa (1) · iraxxa (1) · ireland (1) · irini sengir (1)  
irma (1) · iron cross (1) · iron maiden (band) (1) · iron monger (1) · iron patriot (1) · iron throne (1)  
ironclaw (1) · ironclaw sigil (1) · isaaru (ffx) (1) · isao (1) · ishi-ishi (1) · isle of silence (1)  
itazura (1) · ith (1) · itla (1) · ivan kragoff (1) · ivora (1) · ivy lane (1) · iwamori (1) · ixhel (1)  
jabs (1) · jack of hearts (1) · jack taggert (1) · jackal person (1) · jacques le vert (1) · jalira (1)  
james beverley (1) · james woo (1) · jamira (1) · jandor (character) (1) · janus vi (1) · jaraku (1) · jareth (1)  
jarkeld (1) · jarsyl (1) · jason bright (1) · jasper (1) · jay (1) · jazz hands (1) · jeff hagees (1) · jei (1)  
jeleva (1) · jelly (1) · jem lightfoote (1) · jem'hadar (1) · jenara (1) · jennifer takeda (1)  
jenny (the doctor's daughter) (1) · jenson carthalion (1) · jerrard (1) · jessie zane (1) · jessup (1)  
jharic (1) · jiao (1) · jim hopper (1) · jinku (1) · jiwari (1) · job stone (1) · jocasta pym (1)  
joe eyeball (1) · johan (1) · john aman (1) · john benton (1) · john hammond (1) · john hancock (1)  
john lumic (1) · john seward (1) · jonathan hart (1) · jonesy (1) · joseph ledger (1) · joshua graham (1)  
jotunheim (1) · julia heartilly (1) · julius caesar (1) · julius jumblemorph (1) · jurin (1) · justice (1)  
juvenile (1) · jyscal guado (1) · ka-zar (1) · kadena (1) · kagemaro (1) · kaho (1) · kaima (1) · kaine (1)  
kaiso (1) · kakra (1) · kalakscion (1) · kaldor draigo (1) · kalemne (1) · kamachal (1) · kamber (1)  
kamelion (android) (1) · kamiz (1) · kardum (1) · karen (1) · karen page (1) · karvanista (1) · kasimir (1)  
kasla (1) · katachton mountains (1) · kataki (1) · katrina van horn (1) · katsuichi (1) · katsumasa (1)  
kaust (1) · kavaero (1) · kazarov (1) · kazuo (1) · kediss (1) · kei takahashi (1) · keleth (1) · kelk ronso (1)  
kelpien (1) · kels (1) · kelvin timeline (1) · ken (1) · ken hale (1) · ken mack (1) · kenan sahrmal (1)  
kentaro (1) · kenya (1) · kenzo (1) · kephon (1) · kequia akosa (1) · kestia (1) · kethis (1) · kevin malone (1)  
keytar (1) · khan noonien singh (1) · kharis (1) · khârn (1) · khelvor (1) · khod (1) · kiku (1) · kilo (1)  
king of the coldblood curse (1) · kinnan (1) · kinscaer (1) · kinshala (1) · kinzu (1) · kiros seagill (1)  
kitsune (usagi yojimbo) (1) · kitt kanto (1) · kivni (1) · kiwi (bird) (1) · kiwi (fruit) (1)  
klingon symbol (1) · knockout (1) · knoll (1) · koinobori (1) · koko (1) · kolbahan (1) · kolbjorn (1)  
kolevi (1) · komuso (1) · koni kim (1) · kookaburra (1) · kopala (1) · korea (1) · korean exclusive art (1)  
kosei (1) · koskun (1) · koskun keep (1) · kotori (1) · kraj (1) · kraza (1) · kreat (1)  
krile baldesion (ffv) (1) · krile baldesion (ffxiv) (1) · krisa (1) · kristina (1) · kroble (1) · krond (1)  
kros (1) · kruge (1) · kumonosu (1) · kuon (1) · kup (1) · kurbis (1) · kurkesh (1) · kuro (1) · kuroki (1)  
kushala daora (1) · kydele (1) · kylem (origin) (1) · kyler (1) · kyneth (1) · kyoki (1) · kzinti (1) · l'cie (1)  
la'an noonien-singh (1) · labyrinth of memories (1) · lady spider (1) · lady sun (1) · lagiacrus (1)  
laguna loire (1) · lake bresha (1) · lal (1) · lam (1) · larine arneza (1) · larsa ferrinas solidor (1)  
lascivious (supervillain) (1) · laserbeak (1) · latin text (1) · latulla (1) · laurine (1) · lawnmower (1)  
lawrence nightingale (1) · lazlo (1) · lean on me (1) · leather kilt (1) · lee oliver (1) · leela (1) · lei (1)  
leia hair (1) · leinore (1) · lena (1) · leo cristophe (1) · leon (ffii) (1) · leonard samson (1) · leotard (1)  
leprechaun (1) · leshen (1) · leshrac (1) · letha (1) · li hua (1) · liar (1) · license plate (1) · licia (1)  
lilah (1) · lily bowen (1) · lily hollister (1) · lily wu (1) · limbo (location) (1) · limpet (1) · linessa (1)  
linnorm (1) · lirpa (1) · lisette (1) · lit path (1) · living brain (1) · living lightning (1) · livio (1)  
livonya silone (1) · lizard marsh (1) · lode (1) · lone wolf the pickpocket (1) · long bow (1) · loporrit (1)  
lorcan (1) · lord tyger (1) · lorwyn/shadowmoor troll (1) · losheel (1) · louisoix leveilleur (1) · louvaq (1)  
lu bu (1) · lu meng (1) · lu su (1) · lu xun (1) · lucas bishop (1) · lucas sinclair (1) · lucea kane (1)  
luchino nefaria (1) · lucius (1) · lucrezia (1) · luis (1) · lunafreya nox fleuret (1) · lunar whale (1)  
lunatic pandora (1) · luther manning (1) · luvion (origin) (1) · luzzu (1) · lyja storm (1) · lyla (marvel) (1)  
lynde (1) · lyse hext (1) · lyssa (1) · m'odo (1) · ma chao (1) · maarika (1) · macalania temple (1) · macar (1)  
mach-1 (1) · machinesmith (1) · macmu-ling (1) · macragge (1) · mad thinker (1) · madagascar (1)  
madame de pompadour (1) · madame web (1) · madcap (1) · madcap jester (1) · madeline (1) · madeline berry (1)  
maechen (1) · maelstrom (location) (1) · maeve (1) · maga (1) · magdalene (1) · magic website (1) · magnamalo (1)  
magnus (1) · mairsil (1) · makari (1) · makdee (1) · malik (1) · maltese cross (1) · malzeno (1) · man-killer (1)  
man-wolf (1) · manatee (1) · mancatcher (1) · manmoth (1) · mannichi (1) · manor gate (baldur's gate) (1)  
marath (1) · marauder (1) · margaret (1) · margo kess (1) · margot (1) · mari (1) · maria (ffii) (1)  
maria hill (1) · marian pouncy (1) · marid (1) · marijuana leaf (1) · marinus (1) · marionette (1)  
mark raxton (1) · marlene wallace (1) · marneus calgar (1) · marsha rosenberg (1) · martha jones (1)  
márton stromgald (1) · marut (1) · marvo (1) · mary o'kill (1) · mary walker (1) · mass of mysteries (1)  
massimo (1) · mastermind plum (1) · masumaro (1) · matcha (1) · mathas (1) · mathise (1) · matoya (1)  
matryoshka doll (1) · mauhúr (1) · maular (1) · maurer (1) · mavinda sharpbeak (1) · max borne (1)  
max mayfield (1) · maxwell markham (1) · maybelle reilly (1) · mayor lewis (1) · mcmurphy (1) · meatsqueak (1)  
mechanus (1) · mechtitan (1) · meeple (1) · meerkat (1) · mel medarda (1) · melon lord (1) · melter (1)  
melwythorne (1) · mendel stromm (1) · meneldor (1) · meng huo (1) · menoptra (1) · mephit (1) · mer-goat (1)  
merata (1) · mercadia troll (1) · mere of dead men (1) · meredith palmer (1) · merieke ri berit (1)  
merry gardner (1) · metronome (1) · mettle (1) · mexico (1) · mezzanine (1) · miara (1) · miau (1) · mica (1)  
michonne (1) · microverse (1) · mid previa (1) · midday (1) · midgardsormr (1) · miguel santos (1)  
mihail stovorod (1) · mikaeus cecani (human) (1) · mike wheeler (1) · mikokoro (1) · millicent (1)  
millicent (tmnt) (1) · mina harker (1) · mina lee (1) · mind flayer (stranger things) (1) · mindwitness (1)  
minn (1) · minos (1) · minotaur (marvel) (1) · minutemen (fallout) (1) · minwu (ffiv) (1) · miren (1)  
miriam (1) · miron tillas junior (1) · mirri (housecat) (1) · mirrormere (1) · miss minutes (1)  
mister sinister (1) · mistletoe (1) · mixer (1) · mobius m. mobius (1) · moira (1) · moira (phyrexian) (1)  
moira brown (1) · mol (1) · molly hayes (1) · molten man (1) · mongo (1) · mongseng (1) · monocycle (1)  
monopoly (1) · monsterex (1) · montana (1) · moon lander (1) · moonstone (1) · moopsy (1) · moosehead (1)  
morbius (1) · morgenstern (1) · morlun (1) · morris bench (1) · morse code (1) · morska (1) · mossy stone (1)  
mount megeshra (1) · mount ordeals (1) · mr. foxglove (1) · mr. house (1) · mrs. maggot (1) · mrs. peacock (1)  
ms. fantastic (1) · mt gagazet (1) · muckman (1) · muddle (1) · muffin (1) · munda (1) · muraganda (origin) (1)  
murakami gennosuke (1) · muzzle (1) · mystical creature (1) · mythweaver poq (1) · n'ghathrod (1) · nadier (1)  
nailah (1) · najeela (1) · nakia (1) · nalathni (1) · nalfeshnee (1) · nalia de'arnise (1) · namazu (1)  
name tag (1) · nanamo ul namo (1) · naomi (1) · narci (1) · nardole (1) · narod (1) · naru meha (1) · narwhal (1)  
nashu mhakaracca (1) · nathaniel essex (1) · nathaniel richards senior (1) · nausicaan (1) · navy (1)  
nazahn (1) · nazar (1) · neach (1) · neave blacktalon (1) · nebuchadnezzar (1) · necron (ffix) (1)  
necronomicon ex-mortis (1) · necrotic breath (1) · neerdiv (1) · nefarox (1) · negan (1) · neheb (1)  
nelly borca (1) · nephrekh symbol (1) · nerf darts (1) · nergigante (1) · netherlands (1) · nevinyrral (1)  
new orleans (1) · new zealand (1) · neyali (1) · neyam shai murad (1) · neyith (1)  
nightmare moon (character) (1) · nihilakh symbol (1) · nihiloor (1) · nikara (1) · nikola tesla (1) · nils (1)  
nimblewright (1) · nimrodel (river) (1) · nin (1) · nindalf (1) · niquab (1) · nira (1) · nita (1) · nivix (1)  
noah fon ronsenburg (1) · nobody (character) (1) · nogi (1) · nolan (1) · nolan mcnamara (1) · nora ann wu (1)  
north america (1) · norvrandt (1) · nothic (1) · nu (character) (1) · numa (1) · numot (1) · nymph (1)  
nymris (1) · nyota uhura (1) · o'aka xxiii (1) · oak street (1) · oathkeeper (1) · obadiah stane (1) · obi (1)  
observed (1) · obuun (1) · octagon (1) · octavia (1) · octopus person (1) · odd acorn gang (1) · oddric (1)  
officer (1) · ogdobekh symbol (1) · oglop (1) · oklahoma (1) · ol' buzzbark (1) · old flitterfang (1)  
old lace (1) · old man willow (1) · old one eye (1) · olesian (1) · olinda (1) · oliver (1) · oliver swanick (1)  
olumo bashenga (1) · olx (1) · omamori (1) · omarthis (1) · omega (doctor who) (1) · one (1) · one-punch man (1)  
onora (1) · oompa loompa (1) · opal-eye (1) · oracle of athreos (1) · oracle of ephara (1) · oracle of heliod (1)  
oracle of kefnet (1) · oracle of kruphix (1) · oracle of mogis (1) · oracle of phenax (1)  
oracle of purphoros (1) · orc skull (1) · oregano (squirrel) (1) · orestes (1) · oret (1) · oriss (1)  
ormacar (1) · ormos (1) · ornithomimus (1) · orphan (ffxiii) (1) · orphan's cradle (ffxiii) (1) · orrinshire (1)  
orris (1) · orthion (1) · oruscar symbol (1) · orvada (1) · orysa (1) · osgir (1) · oskar (1) · oski (1)  
osteomancy (1) · othelm (1) · otiev (1) · oura (1) · overcoat (1) · overdrive (marvel) (1)  
overseer of vault 76 (1) · owain garamonde (1) · oyaminartok (1) · oyobi (1) · ozor (1) · ozox (1)  
pachycephalosaur (1) · page (character) (1) · pako (1) · paladin (marvel) (1) · paladin danse (1)  
pallbearer (1) · palom (ffiv) (1) · pam beesly (1) · panda (1) · pang tong (1) · panorama-position-7 (1)  
panorama-position-8 (1) · panorama-position-9 (1) · panorama-prm-fftcg-crossover (1) · papalymo totolymo (1)  
paq (1) · parabolic-microphone (1) · parentheses (1) · parnesse (1) · parody art (1) · parsnip (1)  
partridge (1) · passage (1) · passport (1) · paste-pot pete (1) · pasties (1) · pasture (1) · patera (1)  
patience (1) · patta (1) · pauper princes (1) · pavel maliki (1) · peace symbol (1) · pedestrian (1) · peely (1)  
pelia (1) · pelican (1) · peni parker (1) · pensive (1) · penvar (1) · pep (1) · pepper grinder (1)  
pepperoni (character) (1) · peregrine dynamo (1) · perisophia (1) · peter petruski (1) · phabine (1)  
philippines (1) · phillip masters (1) · phobos (1) · phodia (1) · phoebe (1) · phonograph (1) · phrenology (1)  
phyllis vance (1) · phyrexianized pegasus (1) · pianna (1) · pickelhaube (1) · picnic (1) · pictograph (1)  
piet mondrian (1) · pilings (1) · pinch (1) · pinchy mcstingbutt (1) · pineapple (1) · pink ring spot (1)  
pippa (1) · pistachio (1) · pitfall (1) · pizza face (1) · plagon (1) · plankton (spongebob) (1) · plantain (1)  
planting (1) · platypus (1) · pokey (1) · poking (1) · pol jamaar (1) · polukranos (zombie) (1) · popeye (1)  
porcelain (1) · porom (ffiv) (1) · porthos (star trek) (1) · portuguese exclusive art (1) · pot of gold (1)  
poundcakes (marvel) (1) · power broker (1) · power man (1) · power princess (1) · pramikon (1) · pras (1)  
prava (1) · precinct six (1) · press (1) · preston (1) · pride of hull clade (1) · primaris (1)  
prince of orphans (1) · princess celestia (1) · prishe (1) · prismatic piper (1) · prisoner zero (1)  
proper dave (1) · prototype x-8 (1) · protractor (1) · providence of night (1) · proxima midnight (1)  
psemilla (1) · psi-lord (1) · psycho-man (1) · pufferfish (1) · puppet man (1) · puppet master (1) · pupu (1)  
pusheen (1) · qala (1) · qoneus (1) · quake (1) · quark (1) · quasit (1) · queen brahne (1) · queen cat (1)  
quentillius a melentor iii (1) · quincey harker (1) · raddic (1) · radical (1) · radical highway (1) · ragnar (1)  
rahne sinclair (1) · rakka mar (1) · ramirez depietro (ghost) (1) · ramuh (1) · ranar (1) · ransack (1)  
rashel (1) · rashida scalebane (1) · rashka (1) · rat horde (1) · ratbat (1) · rattle (1) · raul tejada (1)  
ravage (character) (1) · ravos (1) · ray arnold (1) · rayami (1) · rectangle (1) · red belt (1) · red bone (1)  
red death (1) · red ghost (1) · red guardian (1) · red jewel (1) · red spark (1) · red tail (1) · red tape (1)  
red terror (1) · red wings logo (1) · reezug (1) · refrigerator (1) · regis lucis caelum (1) · remiem temple (1)  
remus (1) · rendmaw (1) · rené rodin (1) · renfield (1) · reptil (1) · rescue (marvel) (1) · rev (1) · reveka (1)  
rex (fallout) (1) · reyhan (1) · rhilex (1) · rhino (40k) (1) · rhino person (1) · rhoda (1) · rhordon (1)  
rhuk (1) · ribbed (1) · richlau (1) · rick grimes (1) · rienne (1) · rikala (1) · rime (1) · rio morales (1)  
ripley vance (1) · rishei (1) · rissa lee (1) · riven turnbull (1) · rizna (1) · robert baldwin (1)  
robert l. frank (1) · robert maccready (1) · robert muldoon (1) · robin hood (1) · robot chicken (1)  
robot master (1) · roboute guilliman (1) · rock relief (1) · rocket town (1) · rodolf duskbringer (1)  
romulan (1) · roof spike (1) · roosevelt (1) · rosa farrell (1) · rosary (1) · rose (fallout) (1)  
rose gardner (1) · rose noble (1) · rosemary (squirrel) (1) · rosie wuzfeddlims (1) · rosnakht (1)  
rough rhinos (1) · roxanne (1) · rubicante (ffiv) (1) · rubicun iii (1) · rubina larkingdale (1)  
ruff (character) (1) · rufus shinra (1) · ruhan (1) · rukarumel (1) · rumble (1) · runadi (1) · rundvelt (1)  
rune-tail (1) · rusko (1) · russian exclusive art (1) · ruxa (1) · ruzic (1) · ruzka (1) · ryan sinclair (1)  
saavik (1) · sac (1) · sachi (1) · sacred site (1) · sahir (1) · sala (1) · salacinder (1) · salome sirio (1)  
salt lake city (1) · samuel alexander (1) · samuel saxon (1) · sand castle (1) · sandy cheeks (1)  
sanguinius (1) · santa claus (1) · sanwell (1) · sapling of colfenor (1) · sapphire dragon (1)  
saradoc brandybuck (1) · sarah lyons (1) · sarn (1) · sarn (doctor who) (1) · sarrasa (1) · sasaya (1)  
sash (character) (1) · sasquatch (1) · sautekh (1) · sawfish (1) · sazacap (1) · scalebane (1)  
scarification (1) · scarlet (ffvii) (1) · scarmaker (1) · scarmiglione (ffiv) (1) · scaroth (1) · scary tree (1)  
scientist supreme (1) · scorvus ames (1) · scourged (1) · scourged symbol (1) · scouring stormsoul (1)  
screaming mimi (1) · screwloose (1) · scriv (1) · sea gate (baldur's gate) (1) · seafloor (1) · seal person (1)  
secluded (1) · secret lair (1) · seesaw (1) · segante guarneri (1) · sekemtar (1) · sekki (1) · seluma (1)  
sephara (1) · seraph (ffxiv) (1) · seregios (1) · seri (tmnt) (1) · serpopard (1) · sersi (1) · servitor (1)  
seto (1) · severed leg (1) · severina raine (1) · shadow alley (1) · shadow lord (ffxi) (1) · shadow thieves (1)  
shagrat (1) · shaka (1) · shaker (1) · shambler (1) · shandlar (1) · shanid (1) · sharae (1)  
shaun (fallout) (1) · shawarma (1) · sheep person (1) · shelinda (1) · shi'ar (1) · shibuya (1) · shidako (1)  
shield of missile attraction (1) · shift (marvel) (1) · shimatsu (1) · shinra no. 26 (1) · shirma (1)  
shisato (1) · shizuko (1) · shredder (1) · shroofus sproutsire (1) · shrunken head (1) · shu yun (1)  
shuttlecock (1) · shuvadri glintmantle (1) · siani (1) · siegfried (1) · sierra petrovita (1) · sigma (1)  
sigma iota ii (1) · sihing (1) · silas (1) · silas renn (1) · silvar (1) · silvermane (1) · silverpoint (1)  
silvio manfredi (1) · sima yi (1) · simon aumar (1) · sindbad (1) · singapore (1) · singing city (1)  
siobhan (1) · siona (1) · sisters of silence (1) · sitar (1) · sixteen figures (1) · skabatha nightshade (1)  
skalla (1) · skiing (1) · skitarii (1) · skoa (1) · skrill (1) · skullbriar (1) · skullport (1) · skv'x (1)  
sky bison (1) · sky city (1) · skybreen (1) · skysovereign (1) · slaad (1) · slate street (1) · slater (1)  
slightly-off-center (1) · slinn voda (1) · slinza (1) · sliv-mizzet (1) · sliver gravemother (1)  
sliver weftwinder (1) · slurrk (1) · smelting quarter (1) · smith (1) · smoky room (1) · snaggletooth (1)  
snorkeling (1) · soccer ball (1) · social life (1) · sofia daguerre (1) · software (1) · sokovia (1)  
sol (character) (1) · solar gem (1) · solar insidiator (1) · sonic boom (1) · soot (character) (1) · soovril (1)  
sophia (1) · sophina (1) · soramaro (1) · soraya (1) · sorceress memorial (1) · sosuke (1) · sound stage (1)  
sousaphone (1) · sovka (1) · space marine apothecary (1) · space wolves (1) · spanish exclusive art (1)  
spanish lime (1) · sparrow (1) · sparrow (marvel) (1) · specimen 73 (1) · spectrum (1) · speedball (marvel) (1)  
spider-byte (1) · spider-cat (1) · spider-kid (1) · spider-people (marvel) (1) · spider-slayer (1)  
spiderling (1) · spiders-man (1) · spiked hammer (1) · spiky hair (1) · spill (1)  
spongebob squarepants (series) (1) · spork (1) · squadron supreme (1) · squeakers (1) · squid person (1)  
stabwhisker (1) · stafe (1) · stapler (1) · star kindred symbol (1) · star paladin cross (1)  
star trek: prodigy (1) · starling (marvel) (1) · statue of liberty (1) · stella lee (1) · stet (1)  
stick (marvel) (1) · stilt-man (1) · stingray (marvel) (1) · stirge (1) · stone hair (1) · storage (1)  
stormwreck sea (1) · storrev (1) · storvald (1) · strax (1) · strefan maurer (1) · strong (fallout) (1)  
stupa (1) · sugar glider (1) · suite (1) · suleiman (1) · sumi (1) · sun ce (1) · sun dial (1) · sun quan (1)  
sun-spider (1) · sundial (character) (1) · sune (1) · sunhome (1) · sunstreaker (1) · supervillain (1)  
suplex (1) · support beam (1) · surgeon commander (1) · surtr (1) · sushi (1) · sutina (1) · svega (1)  
svogthos (1) · swerve (1) · sword one (1) · sycorax (1) · sydri (1) · sylgar (1) · syr joshua (1) · syr saxon (1)  
syrix (1) · szarel (1) · szeras (1) · t'pol (1) · tadeas (1) · taeko (1) · tahira (1) · tahiti (1)  
taii wakeen (1) · taishiar (1) · taiwan (1) · talon of horus (1) · talosian (1) · tamarian (1) · tan jolom (1)  
tana (1) · tandy bowen (1) · taniwha (1) · taranika (1) · tarantusk (1) · targ nar (1) · target elf (1)  
target orc (1) · target vampire (1) · target zombie (1) · tariel (1) · tarox bladewing (1) · tarp (1)  
tarutaru (1) · tatsumasa (1) · tatyana (1) · taulmaril (1) · tayam (1) · tea ceremony (1) · tea party (1)  
tearle (1) · tekhenu (1) · telegraph machine (1) · tellarite (1) · tempestra (1) · tempus symbol (1)  
ten fingers (1) · teneb (1) · tengu (1) · tennis racket (1) · tenochtitlan (1) · tenth district (1) · teo (1)  
terashi (1) · terminus of return (1) · teroh (1) · terrian (1) · terry pin (1) · tesak (1) · teshar (1)  
teshar (phyrexian) (1) · tethex (1) · tetzimoc (1) · tetzin (1) · texas (1) · thada adel (1) · thailand (1)  
thalisse (1) · thantis (1) · the archimandrite (1) · the art of war (1) · the beast (doctor who) (1)  
the big idea (1) · the black arrow (1) · the boulder (1) · the carrock (1) · the curator (1) · the everforger (1)  
the face of boe (1) · the fifteenth doctor (1) · the finger (1) · the grand calcutron (1)  
the grand goatnapper (1) · the guardian of forever (1) · the in-betweener (1) · the infernus (1) · the maker (1)  
the master of keys (1) · the meep (1) · the motherlode (1) · the outlands (1) · the painted lady (1)  
the prydwen (1) · the rani (1) · the ringhart crest (1) · the shattered (1) · the slithery (1) · the toymaker (1)  
the valeyard (1) · the weaver king (1) · the wurmwall (1) · thelon (1) · thendar (1) · theodore sallis (1)  
theremin (1) · therizinosaurus (1) · theros (origin) (1) · thijarian (1) · thimble (1) · tholian (1)  
thomas maximoff (1) · thomas raymond (1) · thomil (1) · thorna (1) · thorned lizard (1) · thoros-alpha (1)  
thoros-beta (1) · three dog (1) · thriss (1) · thromok (1) · thunder (1) · thunder plains (1) · thunderwolf (1)  
thurid (1) · thyme (squirrel) (1) · tiana toomes (1) · tibalt (phyrexian) (1) · tidal (1) · tiffany (1)  
tigella (1) · tiger's beautiful daughter (1) · tilana kapule (1) · tilted towers (1) · tim (1) · time (1)  
timothar markov (1) · tishana (1) · titan (40k) (1) · titanbones (1) · titanium man (1) · tivash (1) · tivit (1)  
tlincalli (1) · toadstool (1) · tobi-kadachi (1) · tobita (1) · tocatli (1) · toclafane (1) · toggo (1)  
tok-tok (1) · tolabow (1) · tolman cotton (1) · tomb of horrors (1) · tomi shishido (1)  
tomorrow (character) (1) · tomoya (1) · toofer (1) · topa (1) · topaz (1) · topaz dragon (1) · topos (1)  
torgaar (1) · tormod (1) · toro (marvel) (1) · tosk (1) · toski (phyrexian) (1) · tournament (1) · traag (1)  
traitor (1) · trampoline (1) · trance (1) · transia (1) · trapezoid (1) · treble clef (1) · treizeci (1)  
trelane (1) · trenzalore (1) · trepanation (1) · trest (1) · tri-sentinel (1) · tricephalous (1)  
trill (planet) (1) · trine (1) · triptych (1) · triskelion (marvel) (1) · tromell (1) · truss (1) · trynn (1)  
tsagan (1) · tseng (1) · tugboat (1) · tuknir deathlock (1) · turk barrett (1) · turtle/tortoise person (1)  
tuya bearclaw (1) · twigtooth (1) · twinkle park (1) · twisted metal (1) · two mouth (1) · tymna (1)  
typhon (ffvi) (1) · typhus (1) · tyrone johnson (1) · tyrox (1) · tzeentch symbol (1) · uchuulon (1) · uglúk (1)  
uharis (1) · ukkima (1) · ulasht (1) · ulgrotha troll (1) · ultimo (1) · umbris (1) · unesh (1) · unguligrade (1)  
unravel (1) · unscythe (1) · unsundered source (ffxiv) (1) · untaidake (1) · unyaro (post-phasing) (1)  
uppies (1) · ur-drago (1) · uramon (1) · urdnan (1) · urgoros (1) · urtet (1) · urzmaktok grojsh (1)  
usagi yojimbo (1) · uss discovery (1) · uss enterprise (1) · uthden (1) · uthgardt (1) · uugguu (1) · uvilda (1)  
uvula (1) · uyo (1) · v'ger (1) · vadmir (1) · vagra ii (1) · val (1) · valentin (1) · valko indorian (1)  
valstrax (1) · vance astrovik (1) · vandri (1) · vanity (1) · vanity plate (1) · vantage point (1)  
vantoleone (1) · vara beth hannifer (1) · varchild (1) · vargus wrath (1) · varina (1) · varolz (1)  
vast oblivium (1) · vastar (1) · vazal (1) · vazi (1) · vazin (1) · vecna (1) · vegepygmy (1) · vegetal cloth (1)  
veil (marvel) (1) · veko (1) · vela (1) · veldrane (1) · velkhana (1) · velociraptor (1) · venus (tmnt) (1)  
verazol (1) · verilax (1) · veronica santangelo (1) · verrak (1) · vexyr (1) · vibrate (1) · victor mancha (1)  
victor strange (1) · vignette (photography) (1) · vihaan (1) · viking (1) · viktor (1) · vikya (1)  
vile peaks (ffxiii) (1) · vincent (1) · vincent van gogh (1) · viscerid (1) · viscid (1) · vish kal (1)  
vishgraz (1) · vladimir horngaard (1) · vogar (1) · volcana (1) · voluptara highwater (1) · vorosh (1)  
vorta (1) · vostroyan firstborn (1) · voth (1) · vrestin (1) · vrock (1) · vrondiss (1) · vronos (1)  
vv'viza (1) · w'kabi (1) · wadi (1) · waistcoat (character) (1) · wake (1) · wallis parrish (1) · walrus (1)  
walter langkowski (1) · walter newell (1) · wankel shield (1) · ward zabac (1) · wardens of silverweb summit (1)  
warrior of light (ffiii) (1) · washi ink (1) · watcher (ffxiv) (1) · water dispenser (1) · wave-bladed sword (1)  
weather hills (1) · wedge (ffvi) (1) · weeping woods (1) · wei (1) · wekhdu (1) · wenceslaus (1) · wernog (1)  
wheeljack (1) · whip sword (1) · white fire (1) · white jungle (1) · white mantle (1) · white plume mountain (1)  
whtz (1) · wilbur day (1) · wilhelt (1) · will byers (1) · william maximoff (1) · william shakespeare (1)  
willie lumpkin (1) · wing boot (1) · wisconsin (1) · witchcraft (1) · withar (1) · withengar (1) · withering (1)  
wizard (marvel) (1) · woah! (1) · wolf (dog) (1) · wolfsbane (1) · wooden shingle (1) · wooden spike (1)  
woodweaving (1) · world eaters (1) · world eaters symbol (1) · world of darkness (fiii) (1) · wormhole (1)  
worzel (1) · wotc logo (1) · wowzer (1) · wraith (marvel) (1) · wrench (character) (1) · wulfgar (1) · wutai (1)  
wydwen (1) · wylie duke (1) · x (character) (1) · x-atm092 (1) · x-men (1) · xavier sal (1) · xecau (1)  
xenagos (mortal) (1) · xenk yendar (1) · xho cai (1) · xiahou dun (1) · xil xaxosz (1) · xin fu (1)  
xmas stocking (1) · xolatoyac (1) · xun yu (1) · yannik (1) · yasharn (1) · yasova dragonclaw (1) · yelise (1)  
yennett (1) · yera (1) · yes man (1) · yian garuga (1) · yo mika (1) · yomiji (1) · yorvo (1) · yotsuyu (1)  
young man (1) · yu (avatar) (1) · yuan shao (1) · yukora (1) · yuma (1) · yume (1) · yuriko watanabe (1)  
yurlok (1) · yuyuhase luluhase (1) · zabaz (1) · zagras (1) · zamriel (1) · zan (1) · zanak (1) · zangief (1)  
zara (1) · zarbi (1) · zareth san (1) · zask (1) · zedruu (1) · zellix (1) · zendikar (origin) (1) · zeph (1)  
zerapa (1) · zeriam (1) · zeta minor (1) · zetalpa (1) · zethi (1) · zeus (1) · zhang he (1) · zhang liao (1)  
zhao zilong (1) · zhentarim (1) · zhuge jin (1) · zhulodok (1) · zhurong (1) · zinogre (1) · zirilan (1)  
zodi (1) · zodiac key (1) · zoe heriot (1) · zog (1) · zora (1) · zuberi (1) · zuo ci (1) · zuri (1)  
zurzoth (1) · zyym (1) · zzzyxas (1)  

## Notes

- Tags join cards by `oracle_id` (oracle) / `illustration_id` (art); the pipeline fans them out to `scryfall_id` keys in `oracle_tags.json.gz` / `art_tags.json.gz`.
- ~96.5% of printings have at least one oracle tag; ~95.7% at least one art tag.
- Weights exist in the schema but are 99.75% `median` - do not design around them.
- Slugs/labels can change over time; tag UUIDs are the only stable identifiers (relevant only if a per-tag suppression list is ever needed).