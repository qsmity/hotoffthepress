import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { useHistory } from 'react-router-dom'

const useStyles = makeStyles({
    list: {
        width: 300,
        fontSize: '1.6em'
    }
});

const Sidebar: React.FC<ISidebar> = ({ toggleDrawerState, isOpen }) => {

    const history = useHistory()

    const classes = useStyles();

    const handleNav = (e: React.SyntheticEvent) => {

        history.push(`/news/${e.currentTarget.id}`)
    }


    return (
        <div>

            <Drawer anchor={'left'} open={isOpen} onClose={e => toggleDrawerState(false)}>
                <div
                    className={classes.list}
                    role="presentation"
                    onClick={toggleDrawerState(false)}
                    onKeyDown={toggleDrawerState(false)}
                >
                    <List>
                        <ListItem onClick={toggleDrawerState(false)} button key={-100}>
                            <ListItemText className='menu__text' primary={'X'} />
                        </ListItem>
                        {['Business', 'Entertaiment', 'General', 'Health', 'Science', 'Sports', 'Tech',].map((category, i) => (
                            <ListItem onClick={handleNav} id={category.toLowerCase()} button key={i}>
                                <ListItemText className='menu__text' primary={category} />
                            </ListItem>
                        ))}
                    </List>
                </div>
            </Drawer>
        </div>
    );
}

// todo - update
interface ISidebar {
    toggleDrawerState: any;
    isOpen: boolean;
}

export default Sidebar;