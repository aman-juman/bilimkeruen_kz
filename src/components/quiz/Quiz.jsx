import styles from './Quiz.module.scss';
import {Question} from "./question/Question";
import {Answer} from "./answer/Answer";
import {useDispatch, useSelector} from "react-redux";
import {ratingIncrementAction, setPollAction} from "../../store/quizReducer";
import Vote from "./Vote";
import {AnswerVote} from "./answer/AnswerVote";
import PreLoader from "../preLoader/PreLoader";
import React from "react";
import TotalVote from "./question/TotalVote";


export const Quiz = () => {
    const quiz = useSelector(state => state.quiz.quiz);
    const dispatch = useDispatch();

    const checkLocalstorageIsHave = (question) => {
        let isTrue = false;
        let data = JSON.parse(localStorage.getItem('poll'));
        if (data) {
            return isTrue = data.some(item => item.question === question);
        } else {
            return isTrue = false
        }
    };

    const handleAnswer = (question, answer) => {
        if (checkLocalstorageIsHave(question)) {
            return
        }
        return dispatch(setPollAction({question, answer}));
    };
    return (
        <>
            <div className="container">
                <div className={styles.wrap}>
                    <h3 style={{textAlign: 'center', color: 'black', fontSize: '36px'}}>САУАЛНАМА</h3>
                    {quiz === undefined ? <PreLoader/> : quiz.map((item, i) => {

                        return <div className={styles.quiz} key={i}>
                            <Question question={item.question}/>
                            <ul>
                                {
                                    checkLocalstorageIsHave(item.question)
                                        ? item.answers.map((answer, index) => (
                                            <AnswerVote key={index} answer={answer} question={item.question}
                                            />
                                        ))
                                        : item.answers.map((answer, index) => (
                                            <Answer checkLocalstorageIsHave={checkLocalstorageIsHave} key={index}
                                                    answer={answer} question={item.question} handleAnswer={handleAnswer}
                                            />
                                        ))


                                }
                            </ul>
                            <TotalVote answers = {item.answers} />
                        </div>
                    })}
                    <Vote />
                </div>

            </div>
        </>
    )
};

