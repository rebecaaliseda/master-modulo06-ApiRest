import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

import { switchRoutes } from '#core/router';
import * as classes from './app.layout.styles';
import GroupIcon from '@mui/icons-material/Group';
import PublicIcon from '@mui/icons-material/Public';
import TvIcon from '@mui/icons-material/Tv';

interface Props {
  children: React.ReactNode;
}

export const AppLayout: React.FC<Props> = (props) => {
  const { children } = props;

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            sx={{
              flexGrow: 1,
              fontWeight: 'bold',
            }}
          >
            Rick & Morty Explorer
          </Typography>

          <Box sx={{ display: 'flex', gap: 1 }}>
            <Button
              color="inherit"
              component={Link}
              to={switchRoutes.characterCollection}
              startIcon={<GroupIcon />}
            >
              Characters
            </Button>

            <Button
              color="inherit"
              component={Link}
              to={switchRoutes.locations}
              startIcon={<PublicIcon />}
            >
              Locations
            </Button>

            <Button
              color="inherit"
              component={Link}
              to={switchRoutes.episodes}
              startIcon={<TvIcon />}
            >
              Episodes
            </Button>
          </Box>
        </Toolbar>
      </AppBar>

      <main className={classes.content}>{children}</main>
    </>
  );
};
