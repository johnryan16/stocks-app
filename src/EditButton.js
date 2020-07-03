import React from 'react';
import { Button } from '@material-ui/core';
import { styled } from "@material-ui/styles";

const StyledButton = styled(Button)({
    color: '#61dafb',
    textTransform: 'none'
})

function EditButton(props) {
    return <StyledButton>Edit</StyledButton>
}

export default EditButton;