import styles from './Question.module.scss'


export const Question = ({question, i, computedTotalVote, answers}) => {
    let total = 0;

    return (
        <div className={styles.wrap}>
            <h3>{question}</h3>
        </div>
    )
}