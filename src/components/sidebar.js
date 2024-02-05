
// import React from "react";
// import myicon from "../../src/Assets/icon1.png";
// import { MoreVertical, ChevronLast, ChevronFirst } from "lucide-react"
// import { useContext, createContext, useState } from "react"



// function sidebar() {
//     const [expanded, setExpanded] = useState(true)
//     return(
//         <>
//         <aside class="offcanvas offcanvas-start show text-bg-dark" tabindex="-1" id="offcanvas" aria-labelledby="offcanvasLabel">
//             <nav>
//             <div>
//             <img src="https://cdn.pixabay.com/photo/2020/07/14/13/07/icon-5404125_960_720.png" className="rounded-md" height={150} width={150} alt="logo">
//             </img>
//             <button
//             onClick={() => setExpanded((curr) => !curr)}
//             className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100"
//           >
//             {expanded ? <ChevronFirst /> : <ChevronLast />}
//           </button>
//             <h5 className="name">Admin</h5>
//             </div>
//             <div className="d-inline-block">
//             <img src="../../Assets/icon1.png" className="rounded-md" height={5} width={5} alt="logo"/>
//             </div>
//             <div className="d-inline-block">
//             <a class="nav-link active" aria-current="page" href="#">Home</a>
//             </div>
//             <div>
//             <div className="d-inline-block">
//             <img src="../../Assets/business.png" className="rounded-md" height={5} width={5} alt="logo"/>
//             </div>
//             <div className="d-inline-block">
//             <a class="nav-link active" aria-current="page" href="#">Business</a>
//             </div>
//             </div>
//             <div>
//             <div className="d-inline-block">
//             <img src="../../Assets/users.png" className="rounded-md" height={5} width={5} alt="logo"/>
//             </div>
//             <div className="d-inline-block">
//             <a class="nav-link active" aria-current="page" href="#">Users</a>
//             </div>
//             </div>
//             <div>
//             <div className="d-inline-block">
//             <img src="../../Assets/rupee.png" className="rounded-md" height={5} width={5} alt="logo"/>
//             </div>
//             <div className="d-inline-block">
//             <a class="nav-link active" aria-current="page" href="#">Subsriptions</a>
//             </div>
//             </div>
//             <div>
//             <div className="d-inline-block">
//             <img src="../../Assets/repass.png" className="rounded-md" height={5} width={5} alt="logo"/>
//             </div>
//             <div className="d-inline-block">
//             <a class="nav-link active" aria-current="page" href="#">Change Password</a>
//             </div>
//             </div>
//             <div>
//             <div className="d-inline-block">
//             <img src="../../Assets/setting.png" className="rounded-md" height={5} width={5} alt="logo"/>
//             </div>
//             <div className="d-inline-block">
//             <a class="nav-link active" aria-current="page" href="#">App Configuration</a>
//             </div>
//             </div>
//             <div>
//             <div className="d-inline-block">
//             <img src="../../Assets/logout.png" className="rounded-md" height={5} width={5} alt="logo"/>
//             </div>
//             <div className="d-inline-block">
//             <a class="nav-link active" aria-current="page" href="#">Logout</a>
//             </div>
//             </div>
//             </nav>
//         </aside>
//         </>
//     )
// }
// export default sidebar;


import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Home, HomeIcon, IndianRupee, Settings, Settings2Icon, Users2Icon } from 'lucide-react';
import LockResetIcon from '@mui/icons-material/LockReset';
import NextWeekIcon from '@mui/icons-material/NextWeek';
import DisabledByDefaultIcon from '@mui/icons-material/DisabledByDefault';
import LogoutIcon from '@mui/icons-material/Logout';
import icon from '../Assets/icon.png';
import { Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export default function MiniDrawer() 
{
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };


  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div" className='text-center'>
            Agro App
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
            <div>
                <img src={icon} width={150} height={150} />
                <h5 className='text-center'>Admin</h5>
                <h5 className='text-center fw-bold' ml-3>DASHBOARD</h5>
            </div>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {['Home', 'Farmers', 'Users', 'Subscriptions'].map((text, index) => (
            <ListItem key={text} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
      component={Link} // Use Link component for navigation
      to={`/${text.toLowerCase()}`} // Specify the route based on the text
      sx={{
        minHeight: 48,
        justifyContent: open ? 'initial' : 'center',
        px: 2.5,
      }}
    >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                    {index === 0 ? <HomeIcon /> :
                    index === 1 ? <NextWeekIcon /> :
                    index === 2 ? <Users2Icon /> :
                    index === 3 ? <IndianRupee /> :
                    <DisabledByDefaultIcon />}

                  {/* {index % 2 === 0 ? <HomeIcon /> : <HomeMaxOutlined />} */}
                </ListItemIcon>
                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['ChangePassword', 'AppConfiguration', 'Logout',].map((text, index) => (
            <ListItem key={text} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
              component={Link} // Use Link component for navigation
              to={`/${text.toLowerCase()}`} // Specify the route based on the text
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                    {index === 0 ? <LockResetIcon /> :
                    index === 1 ? <Settings2Icon /> :
                    index === 2 ? <LogoutIcon /> :
                    <DisabledByDefaultIcon />}
                  {/* {index % 2 === 0 ? <LockResetIcon /> : <Settings />} */}
                </ListItemIcon>
                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      </Box>
  );
}