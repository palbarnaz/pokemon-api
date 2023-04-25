import { Chip, Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import colorType from '../utils/colorType';
import PokemonType from '../types/PokemonType';

interface CardPokemonProps {
  pokemon: PokemonType;
}

const CardPokemon: React.FC<CardPokemonProps> = ({ pokemon }) => {
  return (
    <Grid container spacing={1}>
      <Grid item xs={12}>
        <Paper
          elevation={0}
          sx={{ backgroundColor: colorType[pokemon.type].card, textAlign: 'center', borderRadius: '10px' }}
        >
          <img src={pokemon.image} alt={pokemon.name} width={200} />
        </Paper>
      </Grid>
      <Grid item xs={6}>
        <Typography variant="body1">{pokemon.cod}</Typography>
      </Grid>
      <Grid item xs={6} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Chip
          sx={{ minWidth: '100px', backgroundColor: colorType[pokemon.type].chip, border: 'none' }}
          label={pokemon.type}
          variant="outlined"
        />
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h5">{pokemon.name}</Typography>
      </Grid>
    </Grid>
  );
};

export default CardPokemon;
