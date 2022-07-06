import React from 'react';
import {TextField} from "@mui/material";

function Input({answers, i, handleChangeAnswer}) {
    return (
        <div style={{margin: '50px 0'}}>
            <TextField
                fullWidth
                id={`answer${i}`}
                name={`answer${i}`}
                label={`Жауап ${i+1}`}
                value={answers[i]}
                onChange={e => handleChangeAnswer(e)}
            />
        </div>
    );
}

export default Input;