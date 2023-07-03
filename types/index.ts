
export interface PageProps {
  limit:number,
  offset:number
}

export interface PokemonProps{
 results:ItemProps,
 pokemon:ItemProps
 }


export interface ItemProps{
  name:string,
  url:string
}

export interface Pokemon{
  name:string,
  url:string,
  id:number
}


export interface FilterItem{
  id: number;
  name: string,
 unavailable: boolean,
 
}

export interface FilterPokemonProps{
   selected: FilterItem;
  setSelected: React.Dispatch<React.SetStateAction<FilterItem>>;
  filterName: FilterItem[];
}

export interface NavbarProps{
 query:string,
 setQuery : React.Dispatch<React.SetStateAction<string>>
}

export interface InfoPokemonProps{
  params:{
   pokemonName:string
  }}

  export interface PokemonInfo {
  id: string;
  name: string;
  abilities?: Ability[];
  types?: Type[];
  stats?: Stat[];
}

export interface Ability {
  ability: {
    name: string;
    url: string;
  };
}

export interface Type {
  slot: number;
  type: {
    name: string;
    url: string;
  };
}

export interface Stat {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
    url: string;
  };
}

