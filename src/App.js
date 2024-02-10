import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Card from './components/Card';
import './App.css';
import heroes from './heroes.json';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function App() {
  const cardItem = heroes.map(hero =>
    <Card
      name={hero.name}
      universe={hero.universe}
      alterego={hero.alterego}
      occupation={hero.occupation}
      friends={hero.friends}
      superpowers={hero.superpowers}
      url={hero.url}
    />);
  console.log(cardItem);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {Array.from(cardItem).map((_, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
            <Item>
              {_}
            </Item>
          </Grid>
        ))
        }
      </Grid>
    </Box>
  );
}