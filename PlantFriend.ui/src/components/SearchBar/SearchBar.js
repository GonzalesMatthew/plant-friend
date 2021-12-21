import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Div = styled.div`
  margin: 5px;
`;

const SearchBar = ({ searchTerm, setSearchTerm, placeholder }) => (
  <Div>
    <input fullWidth={true} type="text" value={searchTerm} onChange={(e) => { setSearchTerm(e.target.value); } } placeholder={placeholder}></input>
  </Div>
);

SearchBar.propTypes = {
  searchTerm: PropTypes.string,
  setSearchTerm: PropTypes.func,
  placeholder: PropTypes.string,
};

export default SearchBar;
