'use client';
import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import { Preahvihear } from 'next/font/google';

import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@mui/material';

const language = [
  'JavaScript',
  'Python',
  'Java',
  'C#',
  'C++',
  'Ruby',
  'PHP',
  'Swift',
  'TypeScript',
  'Go',
];

const techStack = [
  // Front-End Frameworks
  'React',
  'Angular',
  'Vue.js',
  'Ember.js',
  'Svelte',

  // State Management Libraries
  'Redux',
  'Vuex',
  'MobX',

  // Styling Libraries
  'Material-UI',
  'Bootstrap',
  'Tailwind CSS',
  'Bulma',

  // Backend Frameworks
  'Node.js',
  'Express.js',
  'Django',
  'Ruby on Rails',
  'Spring Boot',

  // Databases
  'MongoDB',
  'MySQL',
  'PostgreSQL',
  'SQLite',
  'Firebase',

  // API Libraries
  'Axios',
  'Fetch API',
  'GraphQL',
  'Restify',

  // Build Tools
  'Webpack',
  'Parcel',
  'Rollup',

  // Testing Frameworks
  'Jest',
  'Mocha',
  'Cypress',

  // DevOps and Deployment
  'Docker',
  'Kubernetes',
  'Heroku',
  'Netlify',
];

const fonts = Preahvihear({ subsets: ['latin'], weight: ['400'] });

export default function SideBar() {
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{
        width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250,
        backgroundColor: '',
        height: '100vh',
        color: 'white',
      }}
      role="presentation"
      //   onClick={toggleDrawer(anchor, false)}
      //   onKeyDown={toggleDrawer(anchor, false)}
    >
      {/* Language */}

      <FormControl
        variant="standard"
        sx={{ m: 1, minWidth: 120, width: '190px' }}
      >
        <InputLabel id="demo-simple-select-standard-label">
          Programming Language
        </InputLabel>

        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          //   value={language}
          //   onChange={handleChange}
          label="language"
        >
          {language.map((item, index) => (
            <MenuItem value={item} key={index}>
              {item}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      {/* Tech Stack */}
      <FormControl
        variant="standard"
        sx={{ m: 1, minWidth: 120, width: '190px' }}
      >
        <InputLabel id="demo-simple-select-standard-label">
          Technology Stack
        </InputLabel>

        <Select
          multiple
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={[]}
          //   onChange={handleChangeMui}
          label="language"
        >
          {techStack.map((item, index) => (
            <MenuItem value={item} key={index}>
              {item}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      {/* Project Type */}
      <FormControl
        variant="standard"
        sx={{ m: 1, minWidth: 120, width: '190px' }}
      >
        <InputLabel id="demo-simple-select-standard-label">
          Project Type
        </InputLabel>

        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          //   value={language}
          //   onChange={handleChange}
          label="language"
        >
          {['Web App', 'Mobile App', 'Libraries', 'Frame Works'].map(
            (item, index) => (
              <MenuItem value={item} key={index}>
                {item}
              </MenuItem>
            )
          )}
        </Select>
      </FormControl>
      <Divider sx={{ backgroundColor: '#00000055', marginTop: '40px' }} />
      {/* Check Box */}
      <FormGroup sx={{ color: 'black', marginLeft: '10px' }}>
        <FormControlLabel control={<Checkbox />} label="Most Contributors" />
        <FormControlLabel control={<Checkbox />} label="Latest Update" />
      </FormGroup>

      <Button
        sx={{
          color: 'black',
          border: '1px solid black',
          backgroundColor: 'transparent',
          padding: '10px 20px',
          marginLeft: '4.8rem',
          marginTop: '4.8rem',
          '&:hover': {
            color: 'white',
            backgroundColor: 'black',
          },
        }}
      >
        Search :){' '}
      </Button>
    </Box>
  );

  return (
    <div>
      {['right'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button
            onClick={toggleDrawer(anchor, true)}
            sx={{
              position: 'fixed',
              bottom: '2.8rem',
              right: '2.8rem',
              backgroundColor: 'black',
              padding: '1.3rem 1.3rem',
              borderRadius: '50%',
              color: 'white',
              fontWeight: 400,
              '&:hover': {
                border: '1px solid black',
                color: 'black',
              },
              fontFamily: fonts.style,
              zIndex: 10,
            }}
          >
            Filter <br />
            Now
          </Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            sx={{ backgroundColor: '#00000055' }}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
