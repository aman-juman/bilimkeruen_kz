import {TextField, Button} from "@mui/material";
import {Timestamp, addDoc, collection} from 'firebase/firestore';
import React, {useState} from "react";
import {toast, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Typography from "@mui/material/Typography";
import {db} from "../../firebase/config";
import SendIcon from '@mui/icons-material/Send';
import AddIcon from '@mui/icons-material/Add';
import SaveIcon from '@mui/icons-material/Save';
import IconButton from "@mui/material/IconButton";
import Input from "./quiz/Input";


export const FormContainer = () => {
    const [formData, setFormData] = useState({
        question: '',
        answers: [],
        createdAt: Timestamp.now().toDate(),
    });
    const [answersArray, setAnswersArray] = React.useState([]);
    const [answers, setAnswers] = React.useState({});

    const boxPack = () => {
        Object.values(answers).forEach((value) => {
            let answer = {option: value, votes: 0};
            setAnswersArray(prev => [...prev, answer])
        });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.question) {
            toast('Барлық ақпаратты енгізіңіз!', {type: 'error'})
            return
        }
        try {
            const quizRef = await addDoc(collection(db, "Quiz"), {
                question: formData.question,
                answers: answersArray,
                createdAt: Timestamp.now().toDate()
            });

            console.log("Document written with ID: ", quizRef.id);
            setFormData({
                question: '',
                answers: [],
                createdAt: Timestamp.now().toDate(),
            });
            setAnswers({});
            setCount([]);
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    };

    const handleChangeAnswer = e => {
        setAnswers({...answers, [e.target.name]: e.target.value})
    };
    const handleChange = e => {
        setFormData({...formData, [e.target.name]: e.target.value})
    };

    const [count, setCount] = React.useState([]);

    return (
        <div style={{border: '1px solid grey', padding: '50px', borderRadius: '10px'}}>
            <form onSubmit={handleSubmit}>
                <Typography style={{fontWeight: 'bold', marginBottom: '50px', textAlign: 'center'}}>САУАЛНАМА ЕНГІЗУ
                    БӨЛІМІ:</Typography>
                <TextField
                    fullWidth
                    id='question'
                    name='question'
                    label='Сұрақ атауы'
                    value={formData.question}
                    onChange={e => handleChange(e)}
                />

                {count && count.map((item, i) => <Input key={i} answers={answers} handleChangeAnswer={handleChangeAnswer}
                                               i={i}/>)}
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                    <Button color='secondary' variant='outlined' onClick={boxPack}><SaveIcon/>Жинақтау</Button>
                    <IconButton size='large' color="primary" aria-label="add"
                                onClick={() => setCount([...count, {}])}><AddIcon/></IconButton>
                    <Button disabled={answersArray.length < 1} type='submit' variant="contained" endIcon={<SendIcon/>}>
                        Жөнелту
                    </Button>
                </div>


            </form>

            <div>
                <ToastContainer/>
            </div>
        </div>
    )
}