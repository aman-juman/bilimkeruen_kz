import {useEffect, useState} from "react";
import styles from './AnswerVote.module.scss'
import {useDispatch, useSelector} from "react-redux";
import {ratingIncrementAction} from "../../../store/quizReducer";
import CheckIcon from '@mui/icons-material/Check';


export const AnswerVote = ({answer, question, handleAnswer, checkLocalstorageIsHave}) =>{
    let data =  JSON.parse(localStorage.getItem('poll'));
    let answerChecked = data
                            ? data.some(item => item.answer === answer.option)
                            : false;

    return(
        <>
            <li className={styles.answer}>
                <input type="hidden"
                       value={answer.option}
                       name='radioGroup'
                />
                <label  className={styles.title} htmlFor={answer.title}>{answer.option} {answerChecked && <CheckIcon />}</label>
                <span className={styles.vote}>{`${answer.votes} дауыс`}</span>
            </li>
            </>
    )
}