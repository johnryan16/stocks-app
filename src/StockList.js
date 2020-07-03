import React from 'react';
import { List } from '@material-ui/core';
import StockListItem from './StockListItem';


function StockList(props) {
    const items = props.items
        
    return <List style={{maxHeight: '50vh', overflow: 'auto'}}>
                {
                    React.Children.toArray(
                        items.map((item) => <StockListItem item={item}/>)
                    )
                }
           </List>
}

export default StockList;