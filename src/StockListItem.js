import React from 'react';
import { Card } from '@material-ui/core';
import { styled } from "@material-ui/styles";

const StyledCard = styled(Card)({
    backgroundColor: 'black',
    color: 'white',
    display: 'flex',
    justifyContent: 'space-around'
})

function StockListItem(props) {
    return <StyledCard>
            <div><b>{props.item.name}</b></div>
            <div>{props.item.price}</div>
           </StyledCard>
}

export default StockListItem;