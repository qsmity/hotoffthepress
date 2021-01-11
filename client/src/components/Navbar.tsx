import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { StoreState } from '../App'
import { Button } from '@material-ui/core'

const Navbar: React.FC = () => {
    const isLoggedIn = useSelector((state: StoreState) => state.session.isAuthenticated)

    return (
        <nav className='navbar'>

            {!isLoggedIn && (
                <>
                    <Link to='/signup'>
                        SignUp
                    </Link>
                    <Link to='/login'>
                        Login
                    </Link>
                </>

            )}

            {isLoggedIn && (
                <Button variant='contained' color='primary'>
                    Logout
                </Button>
            )}
        </nav>
    )
}

export default Navbar;