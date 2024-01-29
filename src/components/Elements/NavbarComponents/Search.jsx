import React from "react";
import { IconButton, InputBase } from "@mui/material";

const Search = ({onSubmit}) => {
    return(
        <div className="input-group rounded">
        <form action="" method="POST" onSubmit={onSubmit}>
          <IconButton type="submit" style={{ border: 'none', outline: 'none' }}>
            {/* Replace this with the appropriate Material-UI icon for search */}
            <i className="fa fa-search"></i>
          </IconButton>
          <InputBase
            name="keyword"
            placeholder="Search"
            inputProps={{ 'aria-label': 'search' }}
            sx={{ marginLeft: '8px' }}
          />
        </form>
      </div>
    );
}

export default Search;