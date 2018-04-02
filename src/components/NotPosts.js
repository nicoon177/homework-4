import React from 'react';

import styled from 'styled-components';

const Nothing = styled.div`
    text-align: center;
    color: red;
    padding-top: 20px;
    font-size: 20px;
`;

const NotPosts = () => {
    return (
        <Nothing>
            Sorry but nothing was found! Please enter a next request.
        </Nothing>
    );
};

export default NotPosts;