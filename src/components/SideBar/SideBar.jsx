'use client';
import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import {
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@mui/material';
import { makeStyles } from '@mui/styles';

// const useStyles = makeStyles((theme) => ({
//   customInput: {
//     '& .MuiOutlinedInput-root': {
//       '& fieldset': {
//         borderColor: 'transparent', // Change to your desired border color
//         // borderWidth: '2px', // Change to your desired border width
//       },
//       '&:hover fieldset': {
//         borderColor: 'transparent', // Change to your desired hover border color
//       },
//       '&.Mui-focused fieldset': {
//         borderColor: '#ffcc00', // Change to your desired focused border color
//       },
//       '&.Mui-focused': {
//         color: 'black',
//       },
//     },
//     '& .MuiInputLabel-root': {
//       color: '#555', // Change to your desired label color
//     },
//     '& .MuiInputLabel-root.Mui-focused': {
//       color: '#ffcc00', // Change to your desired focused label color
//     },
//   },
// }));

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
    </Box>
  );

  return (
    <div>
      {['right'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button
            onClick={toggleDrawer(anchor, true)}
            sx={{ position: 'absolute', bottom: '0px', right: '0px' }}
          >
            {anchor}
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
