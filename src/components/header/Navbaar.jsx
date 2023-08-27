import React, { useContext } from 'react';
import './navbaar.css';
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Avatar from '@mui/material/Avatar';
import { NavLink } from 'react-router-dom';
import { LoginContext } from '../context/Contextprovider';

const Navbaar = () => {
    const { account, setAccount } = useContext(LoginContext);
    // console.log(account)

    return (
        <header>
            <nav>
                <div className='left'>
                    <div className='navlogo'>
                        <NavLink to='/'>
                            <img src='amazon_PNG25.png' alt='' />
                        </NavLink>
                    </div>
                    <div className='nav_searchbaar'>
                        <input type='text' name='' />
                        <div className='search_icon'>
                            <SearchIcon id='search' />
                        </div>
                    </div>
                </div>
                <div className='right'>
                    <div className='nav_btn'>
                        <NavLink to='/Login'>signin</NavLink>
                    </div>
                    <div className='cart_btn'>
                        <navlink to='/buynow'>
                            <Badge badgeContent={0} color="primary">
                                <ShoppingCartIcon id='icon' />
                            </Badge>
                        </navlink>
                        <p>Cart</p>
                    </div>
                    <Avatar className='avatar'>A</Avatar>
                </div>
            </nav>
        </header>
    );
};

export default Navbaar;

