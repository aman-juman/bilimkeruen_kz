import React, {useState} from 'react';
import Poll from 'react-polls';
import styles from './Vote.module.scss'

// Declaring poll question and answers
const data = [
    {
        pollQuestion: 'Жаңартылған білім беру мазмұны аясында гуманитарлық пәндерді оқытудың сапасына деген кӛзқарасыңыз қандай?',
        answers: [
            {option: 'Оң', votes: 58},
            {option: 'Теріс', votes: 0},
            {option: 'Бейтарап', votes: 9},
            {option: 'Бұл тақырып маған қызықты', votes: 16},
            {option: 'Бұл салада менің білімім бар', votes: 11}
        ]
    },
    {
        pollQuestion: 'Жаңартылған білім берудегі білім деңгейіңізді анықтаңыз?',
        answers: [
            {option: 'Толық сәйкес емес', votes: 27},
            {option: 'Мен орындамаймын', votes: 48},
            {option: 'сәйкес келеді', votes: 19},
        ]
    },
    {
        pollQuestion: 'Егер сіздің біліміңіз сәйкес келмейді немесе толық сәйкес келмейді деп ойласаңыз, себептерді атаңыз',
        answers: [
            {option: 'Мотивацияның жоқтығы', votes: 10},
            {option: 'Нормативтік құжаттарды білмеу', votes: 10},
            {option: 'Бұл білімге қажеттілік жоқ', votes: 3},
            {option: 'Ауыр жүктеме', votes: 13},
            {option: 'Осы бағыттағы курстық жұмыстың болмауы', votes: 58},
        ]
    }

]
const pollQuestion1 = 'Жаңартылған білім беру мазмұны аясында гуманитарлық пәндерді оқытудың сапасына деген кӛзқарасыңыз қандай?'
const pollAnswers1 = [
    {option: 'Оң', votes: 58},
    {option: 'Теріс', votes: 0},
    {option: 'Бейтарап', votes: 9},
    {option: 'Бұл тақырып маған қызықты', votes: 16},
    {option: 'Бұл салада менің білімім бар', votes: 11}
]
const pollQuestion2 = 'Жаңартылған білім берудегі білім деңгейіңізді анықтаңыз?'
const pollAnswers2 = [
    {option: 'Толық сәйкес емес', votes: 27},
    {option: 'Мен орындамаймын', votes: 48},
    {option: 'сәйкес келеді', votes: 19},
]
const pollQuestion3 = 'Егер сіздің біліміңіз сәйкес келмейді немесе толық сәйкес келмейді деп ойласаңыз, себептерді атаңыз'
const pollAnswers3 = [
    {option: 'Мотивацияның жоқтығы', votes: 10},
    {option: 'Нормативтік құжаттарды білмеу', votes: 10},
    {option: 'Бұл білімге қажеттілік жоқ', votes: 3},
    {option: 'Ауыр жүктеме', votes: 13},
    {option: 'Осы бағыттағы курстық жұмыстың болмауы', votes: 58},
]

export default function Vote(){

    // handleVote = voteAnswer => {
    //     const {pollAnswers1} = this.state;
    //     const newPollAnswers = pollAnswers1.map(answer => {
    //         if (answer.option === voteAnswer) answer.votes++
    //         return answer
    //     })
    //     this.setState({
    //         pollAnswers1: newPollAnswers
    //     })
    // }
    const [state, setState] = useState(null);
    const handleVote = (voteAnswer, answers) =>{
console.log(voteAnswer)
        const newPollAnswers = answers.map(answer =>{
            if(answer.option === voteAnswer) answer.votes++
            return answer
        })
    }


        return (
            <div>
                {/*<div style={{marginBottom: '40px'}}>*/}
                {/*    /!*<Poll question={pollQuestion1} answers={pollAnswers1}*!/*/}
                {/*    /!*                                      onVote={this.handleVote}/>*!/*/}
                {/*</div>*/}
                {/*{data.map((item, i) =>(*/}
                {/*    <Poll key={i} question={item.pollQuestion} answers={item.answers} onVote={() =>handleVote()} />*/}
                {/*))}*/}
                {/*/!*<Poll customStyles={{theme: 'blue', questionColor: '#6372ff', questionBold: true}}*!/*/}
                {/*/!*      question={pollQuestion2} answers={pollAnswers2} onVote={this.handleVote}/>*!/*/}
                {/*/!*<Poll question={pollQuestion3} answers={pollAnswers3} onVote={this.handleVote}/>*!/*/}
                <Diagnoslic />
            </div>
        );
};


const Diagnoslic = () => {
    return (
        <div>
            <h3 className={styles.title}>Мұғалімдердің кәсіби қиындықтары мен қажеттіліктеріне сұрақ қою арқылы диагностика жасау</h3>
            <div className={styles.wrap}>
                <button><a href="https://docs.google.com/forms/d/e/1FAIpQLScejc0ZrW86sAoEReQmUZgBjdQ5sF5gXFJC0mL0ZbE9zKi1Ew/viewform">Формаға өту</a></button>
            </div>
        </div>
    )
}




// import React, {Component} from 'react';
// import Poll from 'react-polls';
// import styles from './Vote.module.scss'
//
// // Declaring poll question and answers
// const questions = [
//     {
//         pollQuestion: 'Жаңартылған білім беру мазмұны аясында гуманитарлық пәндерді оқытудың сапасына деген кӛзқарасыңыз қандай?',
//         answers: [
//             {option: 'Оң', votes: 58},
//             {option: 'Теріс', votes: 0},
//             {option: 'Бейтарап', votes: 9},
//             {option: 'Бұл тақырып маған қызықты', votes: 16},
//             {option: 'Бұл салада менің білімім бар', votes: 11}
//         ]
//     },
//     {
//         pollQuestion: 'Жаңартылған білім берудегі білім деңгейіңізді анықтаңыз?',
//         answers: [
//             {option: 'Толық сәйкес емес', votes: 27},
//             {option: 'Мен орындамаймын', votes: 48},
//             {option: 'сәйкес келеді', votes: 19},
//         ]
//     },
//     {
//         pollQuestion: 'Егер сіздің біліміңіз сәйкес келмейді немесе толық сәйкес келмейді деп ойласаңыз, себептерді атаңыз',
//         answers: [
//             {option: 'Мотивацияның жоқтығы', votes: 10},
//             {option: 'Нормативтік құжаттарды білмеу', votes: 10},
//             {option: 'Бұл білімге қажеттілік жоқ', votes: 3},
//             {option: 'Ауыр жүктеме', votes: 13},
//             {option: 'Осы бағыттағы курстық жұмыстың болмауы', votes: 58},
//         ]
//     }
//
// ]
// const pollQuestion1 = 'Жаңартылған білім беру мазмұны аясында гуманитарлық пәндерді оқытудың сапасына деген кӛзқарасыңыз қандай?'
// const pollAnswers1 = [
//     {option: 'Оң', votes: 58},
//     {option: 'Теріс', votes: 0},
//     {option: 'Бейтарап', votes: 9},
//     {option: 'Бұл тақырып маған қызықты', votes: 16},
//     {option: 'Бұл салада менің білімім бар', votes: 11}
// ]
// const pollQuestion2 = 'Жаңартылған білім берудегі білім деңгейіңізді анықтаңыз?'
// const pollAnswers2 = [
//     {option: 'Толық сәйкес емес', votes: 27},
//     {option: 'Мен орындамаймын', votes: 48},
//     {option: 'сәйкес келеді', votes: 19},
// ]
// const pollQuestion3 = 'Егер сіздің біліміңіз сәйкес келмейді немесе толық сәйкес келмейді деп ойласаңыз, себептерді атаңыз'
// const pollAnswers3 = [
//     {option: 'Мотивацияның жоқтығы', votes: 10},
//     {option: 'Нормативтік құжаттарды білмеу', votes: 10},
//     {option: 'Бұл білімге қажеттілік жоқ', votes: 3},
//     {option: 'Ауыр жүктеме', votes: 13},
//     {option: 'Осы бағыттағы курстық жұмыстың болмауы', votes: 58},
// ]
//
// export default class Vote extends Component {
//     // Setting answers to state to reload the component with each vote
//     state = {
//         pollAnswers1: [...pollAnswers1],
//         pollAnswers2: [...pollAnswers2],
//         pollAnswers3: [...pollAnswers3]
//     }
//
//     // Handling user vote
//     // Increments the votes count of answer when the user votes
//     handleVote = voteAnswer => {
//         const {pollAnswers1} = this.state;
//         const newPollAnswers = pollAnswers1.map(answer => {
//             if (answer.option === voteAnswer) answer.votes++
//             return answer
//         })
//         this.setState({
//             pollAnswers1: newPollAnswers
//         })
//     }
//
//     render() {
//         const {pollAnswers1, pollAnswers2, pollAnswers3} = this.state
//         return (
//             <div>
//                 <div style={{marginBottom: '40px'}}><Poll question={pollQuestion1} answers={pollAnswers1}
//                                                           onVote={this.handleVote}/></div>
//                 <Poll customStyles={{theme: 'blue', questionColor: '#6372ff', questionBold: true}}
//                       question={pollQuestion2} answers={pollAnswers2} onVote={this.handleVote}/>
//                 <Poll question={pollQuestion3} answers={pollAnswers3} onVote={this.handleVote}/>
//                 <Diagnoslic />
//             </div>
//         );
//     }
// };
//
//
// const Diagnoslic = () => {
//     return (
//         <div>
//             <h3 className={styles.title}>Мұғалімдердің кәсіби қиындықтары мен қажеттіліктеріне сұрақ қою арқылы диагностика жасау</h3>
//             <div className={styles.wrap}>
//                 <button><a href="https://docs.google.com/forms/d/e/1FAIpQLScejc0ZrW86sAoEReQmUZgBjdQ5sF5gXFJC0mL0ZbE9zKi1Ew/viewform">Формаға өту</a></button>
//             </div>
//         </div>
//     )
// }