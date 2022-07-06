import React from 'react';
import Typography from "@mui/material/Typography";
import {Button, TextField} from "@mui/material";
import Input from "./Input";

const  FormQuiz = ({setFormData}) => {
    const [state, setState] = React.useState({
        question: '',
        answers: []
    });

    const [answersArray, setAnswersArray] = React.useState([]);
    const [answers, setAnswers] = React.useState({
        answer0: ''
    });
    const handleChangeAnswer = e => {
        setAnswers({...answers, [e.target.name]: e.target.value})
    };
    const handleChange = e => {
        setState({...state, [e.target.name]: e.target.value})
    };

    const [count, setCount] = React.useState([{}]);



    const handleSubmit = e => {
        e.preventDefault();
        Object.values(answers).forEach((value)=>{
            let answer = {option: value, votes: 0};
            setAnswersArray(prev => [...prev, answer])
        });
        setState(prev => ({...prev, answers: state.answers.concat(answersArray)}))
        setFormData(state)
    };
    return (
        <div>
            <form onSubmit={handleSubmit} >
                <Typography style={{fontWeight: 'bold', marginBottom: '50px', textAlign: 'center' }}>АҚПАРАТ ЕНГІЗУ БӨЛІМІ:</Typography>
                <TextField
                    fullWidth
                    id='question'
                    name='question'
                    label='Сұрақ атауы'
                    value={state.question}
                    onChange={e => handleChange(e)}
                />

                {count.map((item, i) => <Input key={i} answers={answers} handleChangeAnswer={handleChangeAnswer} i={i}/>)}
                <Button fullWidth color='primary' variant='contained' type='submit'>Жіберу</Button>
                {/*<input style={style} type="submit" value='bb'/>*/}

            </form>
            <Button fullWidth color='primary' variant='contained' onClick={() => setCount([...count, {}])}>Сұрақ қосу</Button>
            {/*<button onClick={}>add input</button>*/}
        </div>
    );
}

export default FormQuiz;