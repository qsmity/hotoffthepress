import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { StoreState } from '../App'
import { Button } from '@material-ui/core'
import * as AuthAction from '../store/reducers/session'
import WhatshotIcon from '@material-ui/icons/Whatshot';
import MenuIcon from '@material-ui/icons/Menu';

const Navbar: React.FC<INavbarProps> = ({ toggleDrawerState }) => {
    const dispatch = useDispatch()

    const isLoggedIn = useSelector((state: StoreState) => state.session.isAuthenticated)


    const logout = () => {
        dispatch(AuthAction.logout())
    }

    return (
        <nav className='navbar'>
            <div className='navbar__container'>
                <div className='navbar__logo-box'>
                    <Link to='/'>
                        <WhatshotIcon color='secondary' style={{ fontSize: 40 }} />
                    </Link>
                    <span className='navbar__logo-text'>OFF&rarr;THE&rarr;PRESS</span>
                </div>
                {!isLoggedIn && (
                    <div className='navbar__links'>
                        <Link to='/signup'>
                            SignUp
                    </Link>
                        <Link to='/login'>
                            Login
                    </Link>
                    </div>

                )}

                {isLoggedIn && (
                    <div className=''>
                        <Button variant='contained' color='primary' onClick={logout}>
                            Logout
                        </Button>
                        <a className='menu' onClick={toggleDrawerState(true)}><MenuIcon fontSize='large' ></MenuIcon></a>
                    </div>
                )}
            </div>
        </nav>
    )
}
// todo - update
interface INavbarProps {
    toggleDrawerState: any;
}

export default Navbar;