import React from 'react';

import styled from 'styled-components';

const Input = styled.input`
    padding: 5px;
    padding-left: 20px;
    width: 40%;
    font-size: 20px;
    display: block;
    margin: 0 auto;
    margin-top: 5px;
    border-radius: 10px;
    outline: none;
`;

const Search = (props) => {
    return (
        <Input
            type="text"
            placeholder={"Search..."}
            onChange={props.onChange}
            value={props.value}
        />
    );
};

export default Search;