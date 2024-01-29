import React from "react";
import { AppBar, Toolbar } from "@mui/material";
import NavLogo from "../Elements/NavbarComponents/NavLogo";
import IconButtons from "../Elements/NavbarComponents/IconButton";
import NavList from "../Elements/NavbarComponents/NavList";
import Search from "../Elements/NavbarComponents/Search";

const Navbar = () => {
    const handleSearch = () => {
        // Handle search logic
      };
    
      return (
        <AppBar position="static" elevation={3} style={{ backgroundColor: '#fff', height: '87px' }}>
          <Toolbar>
            {/* nav-logo */}
            <NavLogo />
            {/* end nav-logo */}
            {/* nav-list */}
            <NavList />
            {/* end nav-list */}
            {/* search */}
            <Search onSubmit={handleSearch} />
            {/* end search */}      
            {/* icons */}
            <IconButtons />
            {/* end icons */}
          </Toolbar>
        </AppBar>
      );
}
export default Navbar;