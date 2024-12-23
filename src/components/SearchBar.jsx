import { IconButton, InputBase, alpha, styled } from "@mui/material";
import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: "24px 0px 0px  24px",
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: "0px",
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "30ch",
      "&:focus": {
        width: "40ch",
      },
    },
  },
}));

function SearchBar() {
  const [isFocusedSeacrh, setIsFocusedSeacrh] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const showSeacrhIcon = () => setIsFocusedSeacrh(true);
  const hideSearchIcon = () => setIsFocusedSeacrh(false);
  const navigate = useNavigate();

  const handleSearch = () => {
    if (searchTerm) {
      navigate(`/search/${searchTerm}`);
      setSearchTerm("");
    }
  };

  return (
    <>
      <Search onFocus={showSeacrhIcon} onBlur={hideSearchIcon}>
        {isFocusedSeacrh ? (
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
        ) : null}
        <StyledInputBase
          placeholder="Search…"
          inputProps={{ "aria-label": "search" }}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </Search>
      <IconButton
        color="inherit"
        sx={{
          backgroundColor: "inherit",
          borderRadius: "0px 24px 24px 0px",
        }}
        onClick={handleSearch}
      >
        <SearchIcon />
      </IconButton>
    </>
  );
}

export default SearchBar;
