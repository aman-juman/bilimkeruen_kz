import {collection, query, orderBy, onSnapshot, doc, updateDoc} from 'firebase/firestore';
import {db} from '../firebase/config';
const data = {
//     quiz: [
//     {
//         question: '',
//         answers: [
//             {option: '', votes: 0},
//         ]
//     },
// ]
};

const start = () =>{
    const quizRef = collection(db, 'Quiz');
    const q = query(quizRef, orderBy('createdAt', 'desc'));
    onSnapshot(q, (snapshot) => {
        const quiz = snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }));
        const sort = quiz.reverse();
        data.quiz = sort;
    });
};
start();




const saveToLocalstorage = async (question, answer) =>{
    const poll = {
        question,
        answer
    };
    let voteData = [];
    voteData = JSON.parse(localStorage.getItem('poll')) || [];
    voteData.push(poll);
    localStorage.setItem('poll', JSON.stringify(voteData));
    const getQuizItem = data.quiz.find(item => item.question === question);
    let answersArrayCopy = JSON.parse(JSON.stringify(getQuizItem.answers));
    let getNestedAnswer = answersArrayCopy.map(item => {
        if(item.option === answer) {
            item.votes ++
        } return item
    } );

    const currentRef = doc(db, 'Quiz', getQuizItem.id);
    await updateDoc(currentRef, {
        answers: getNestedAnswer
    })

};

export const quizReducer = (state = data, action) => {
    switch (action.type) {
        case 'INCREMENT_RATING':
            // const {question, answer} = action.payload;
            // let i = state.quiz.indexOf(question);
            // let ii = question.answers.indexOf(answer);
            return {
                state
                // quiz: [
                //     ...state.quiz.slice(0, i),
                //
                //     {...state.quiz[i], answers: [
                //             ...state.quiz[i].answers.slice(0, ii),
                //             {...state.quiz[i].answers[ii], rating: state.quiz[i].answers[ii].rating + 1},
                //             ...state.quiz[i].answers.slice(ii +1)
                //     ]},
                //     ...state.quiz.slice(i +1)
                //
                // ]
            };
        case 'SET_POLL':
           return {
                ...state,
                quiz: state.quiz.map(item => {
                    if(item.question === action.payload.question) {
                        return {...item, answers: item.answers.map(ans=>{
                            if(ans.option === action.payload.answer){
                                return {...ans, votes: ans.votes+1}
                            } return ans
                            })}
                    } else {
                        return  item
                    }
                })
            };
        default:
            return state
    }
}

export const ratingIncrementAction = (payload) => {
    return {type: 'INCREMENT_RATING', payload}
};

export const setPollAction = (payload) =>{
    saveToLocalstorage(payload.question, payload.answer);
    return {type: 'SET_POLL', payload}
};

