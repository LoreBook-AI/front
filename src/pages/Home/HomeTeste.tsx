import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import logo from '/logo.png'
import { useState } from 'react';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { Outlet } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { Divider } from '@mui/material';

function HomeTeste() {

    const [open, setOpen] = useState<boolean>(false);

    const toggleDrawer = (open: boolean) => () => {
        setOpen(open);
    };

    return (
        <>

            <AppBar position="static" sx={{ bgcolor: 'var(--color-bg)' }}>
                <Toolbar sx={{
                    display: "flex", justifyContent: "space-between",
                    minHeight: { xs: 35, md: 50 }, // Define 35px para todos os tamanhos de tela
                    height: 50 // Opcional, mas ajuda a reforçar
                }}>

                    <IconButton
                        size="small"
                        edge="start"
                        aria-label="menu"
                        disableRipple
                        disableFocusRipple
                        onClick={toggleDrawer(true)}
                        sx={{
                            mr: 2, color: 'var(--color-text)',
                            "&:hover": {
                                filter: "drop-shadow(0 0 2em var(--color-text))"
                            },
                            "&:active": {
                                backgroundColor: "transparent"
                            },
                            "&:focus": {
                                backgroundColor: "transparent"
                            }
                        }}
                    >
                        <MenuIcon />
                    </IconButton>

                    <Box sx={{
                        display: "flex", alignItems: "center",
                        "&:hover": {
                            filter: "drop-shadow(0 0 2em var(--color-text))"
                        }
                    }}>
                        <img src={logo} alt="Lorebook logo" style={{ height: 40 }} />
                    </Box>
                </Toolbar>
            </AppBar>


            <SwipeableDrawer anchor="left" open={open} onClose={toggleDrawer(false)} onOpen={toggleDrawer(true)}
                slotProps={{
                    paper: { sx: { bgcolor: 'var(--color-bg)', color: 'var(--color-text)' } }
                }} >
                <Box
                    sx={{ width: 250 }}
                    role="presentation"
                    onClick={toggleDrawer(false)}
                    onKeyDown={toggleDrawer(false)}
                >
                    <DrawerHeader>
                        <IconButton sx={{ color: 'var(--color-text)' }} >
                            <ChevronLeftIcon />
                        </IconButton>
                    </DrawerHeader>

                    <Divider sx={{ bgcolor: 'var(--color-bg)' }} />

                    <List>
                        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                            <ListItem key={text} disablePadding>
                                <ListItemButton>
                                    <ListItemIcon sx={{ color: 'var(--color-text)' }}>
                                        {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                                    </ListItemIcon>
                                    <ListItemText primary={text} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </SwipeableDrawer>

            <Outlet />
        </>
    );
}

export default HomeTeste

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));