import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText'
import { Home, ReportProblem, Call, AssignmentReturn, ShoppingCart, MenuOutlined, LocalShipping  } from '@mui/icons-material';
import '../styles/sidebar.css'


export default function TemporaryDrawer() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (

    <Box sx={{ width: 250, top: 80 }} role="presentation" onClick={toggleDrawer(false)}>
      <List  >
        {
          [
            { title: "Home", image: <Home /> },
            { title: "Shipping", image: <ShoppingCart /> },
            { title: "Orders", image: < LocalShipping /> },
            { title: "Returns", image: <AssignmentReturn /> },
          ].map((item, index) => {
            return (
              <ListItem key={index} disablePadding>
                <ListItemButton >
                  <ListItemIcon >
                    {item.image}
                  </ListItemIcon>
                  <ListItemText primary={item.title} />
                </ListItemButton>
              </ListItem>
            )
          })
        }
      </List>

      <Divider />

      <List  >
        {
          [
            { title: "Report Issue", image: < ReportProblem /> },
            { title: "Contact Us", image: < Call /> },
          ].map((item, index) => {
            return (
              <ListItem key={index} disablePadding>
                <ListItemButton >
                  <ListItemIcon >
                    {item.image}
                  </ListItemIcon>
                  <ListItemText primary={item.title} />
                </ListItemButton>
              </ListItem>
            )
          })
        }
      </List>
    </Box>

  );

  return (
    <div >
      <MenuOutlined onClick={toggleDrawer(true)} style={{ fontSize: "35px", marginLeft: "15px", cursor: "pointer" }} />
      <Drawer open={open} style={{ marginTop: "80px" }} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}