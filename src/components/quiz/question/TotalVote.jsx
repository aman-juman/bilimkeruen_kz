import React from 'react';

function TotalVote({answers}) {
    let total  = 0;
    for(const answer of answers){
        total = total + answer.votes
    }
    return (
        <div style={{textAlign: 'center', fontSize: '16px', fontWeight: 'bold', color: 'grey'}}>
            {total}  Дауыс
        </div>
    );
}

export default TotalVote;