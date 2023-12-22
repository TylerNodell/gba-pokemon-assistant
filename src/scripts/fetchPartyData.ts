import Pokedex from 'pokedex-promise-v2';
const P = new Pokedex();

interface Pokemon {
  toughRibbon: number | null;
  language: number | null;
  level: number | null;
  ppBonuses: number | null;
  markings: number | null;
  championRibbon: number | null;
  status: number | null;
  speedIV: number | null;
  spDefense: number | null;
  otId: number | null;
  isBadEgg: number | null;
  eventLegal: number | null;
  smartRibbon: number | null;
  spDefenseIV: number | null;
  coolRibbon: number | null;
  hp: number | null;
  cute: number | null;
  sheen: number | null;
  spAttackEV: number | null;
  tough: number | null;
  personality: number | null;
  heldItem: number | null;
  marineRibbon: number | null;
  countryRibbon: number | null;
  artistRibbon: number | null;
  isEgg: number | null;
  metLocation: number | null;
  victoryRibbon: number | null;
  speedEV: number | null;
  worldRibbon: number | null;
  hpEV: number | null;
  hpIV: number | null;
  effortRibbon: number | null;
  spAttack: number | null;
  pp: Array<number> | null;
  mail: number | null;
  spAttackIV: number | null;
  cuteRibbon: number | null;
  maxHP: number | null;
  pokerus: number | null;
  speed: number | null;
  species: number | null;
  attack: number | null;
  smart: number | null;
  skyRibbon: number | null;
  metLevel: number | null;
  otName: string | null;
  defenseEV: number | null;
  nickname: string | null;
  beautyRibbon: number | null;
  beauty: number | null;
  altAbility: number | null;
  landRibbon: number | null;
  defenseIV: number | null;
  hasSpecies: number | null;
  defense: number | null;
  otGender: number | null;
  friendship: number | null;
  experience: number | null;
  pokeball: number | null;
  attackIV: number | null;
  metGame: number | null;
  attackEV: number | null;
  spDefenseEV: number | null;
  cool: number | null;
  moves: Array<number> | null;
  nationalRibbon: number | null;
  earthRibbon: number | null;
  winningRibbon: number | null;
}

function fetchPokemonData(pokemon: Array<Pokemon>): Promise<any> {
  for (const mon in pokemon) {
    console.log(mon);
  }
  return P.getPokemonByName('pikachu');
}

export default fetchPokemonData;