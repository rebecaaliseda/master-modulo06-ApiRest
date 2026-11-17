export interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  gender: string;
  image: string;
  origin: string;
  location: string;
  bestSentence: string;
}

export const createEmptyCharacter = (): Character => ({
  id: 0,
  name: '',
  status: '',
  species: '',
  gender: '',
  image: '',
  origin: '',
  location: '',
  bestSentence: '',
});
