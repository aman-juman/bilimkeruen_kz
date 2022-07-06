import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {ratingIncrementAction} from "../../../store/quizReducer";
import styles from "./Answer.module.scss";


export const Answer = ({answer, question, handleAnswer, checkLocalstorageIsHave}) =>{

    // useEffect(()=>{
    //     console.log(checkLocalstorageIsHave(question));
    // },[]);
    return(
        <>
            <li className={styles.answer}
                onClick={() => handleAnswer(question, answer.option)}>
                <input type="hidden"
                       value={answer.option}
                       name='radioGroup'
                />
                <label className={styles.title} htmlFor={answer.title}>{answer.option}</label>
            </li>
            </>
    )
}