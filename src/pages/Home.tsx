import React from 'react';
import { Button, FormControl, Grid, InputAdornment, OutlinedInput, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import TuneIcon from '@mui/icons-material/Tune';
import ContentPage from '../components/ContentPage';
import CardPokemon from '../components/CardPokemon';
import ListPokemon from '../components/ListPokemon';
import PokemonType from '../types/PokemonType';

const items: PokemonType[] = [
  {
    image: '/images/001.png',
    type: 'water',
    name: 'Pokemon Teste',
    cod: '#001'
  },
  {
    image: '/images/001.png',
    type: 'fire',
    name: 'Pokemon Teste2',
    cod: '#002'
  },
  {
    image: '/images/001.png',
    type: 'fire',
    name: 'Pokemon Teste2',
    cod: '#003'
  },
  {
    image: '/images/001.png',
    type: 'grass',
    name: 'Pokemon Teste2',
    cod: '#004'
  }
];

const Home: React.FC = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} textAlign="center">
        <Typography variant="h4">Pokedéx</Typography>
      </Grid>
      <Grid item xs={12} textAlign="center">
        <Typography variant="body2">Pesquise seu pokemon pelo nome.</Typography>
      </Grid>
      <Grid item xs={11} textAlign="center">
        <FormControl fullWidth variant="outlined">
          <OutlinedInput
            id="outlined-adornment-password"
            type={'text'}
            startAdornment={
              <InputAdornment position="start">
                {' '}
                <SearchIcon />{' '}
              </InputAdornment>
            }
          />
        </FormControl>
      </Grid>
      <Grid item xs={1} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Button variant="contained" sx={{ height: '100%' }}>
          <TuneIcon />
        </Button>
      </Grid>
      <Grid item xs={12}>
        <ContentPage>
          <ListPokemon items={items} />
        </ContentPage>
      </Grid>
    </Grid>
  );
};

export default Home;
