import { Grid } from '@mui/material';
import React from 'react';
import CardPokemon from './CardPokemon';
import PokemonType from '../types/PokemonType';

interface ListPokemonProps {
  items: PokemonType[];
}

const ListPokemon: React.FC<ListPokemonProps> = ({ items }) => {
  return (
    <Grid container spacing={2}>
      {items.map(item => (
        <Grid item xs={12} sm={3} key={item.cod}>
          <CardPokemon pokemon={item} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ListPokemon;
