import React from 'react';
import { Card } from '@material-ui/core';
import { styled } from "@material-ui/styles";
import './StockListItem.css'

const StyledCard = styled(Card)({
    backgroundColor: 'black',
    color: 'white',
})

function StockListItem(props) {
    return <StyledCard>
            {props.name}
           </StyledCard>
}

export default StockListItem;