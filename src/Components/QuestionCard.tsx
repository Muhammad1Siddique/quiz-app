import React from 'react'
import {Wrapper, ButtonWrapper} from './Qus.styles';

type Props = {
    question: string;
    answers: string[];
    callback: any;
    userAnswer: any;
    questionNum: number;
    totalQuestions: number;
}

export const QuestionCard: React.FC<Props> = ({question, answers, callback, userAnswer, questionNum, totalQuestions}) => {
    return (
        <Wrapper>
            <p className="qus-count">
                Question: {questionNum}/ {totalQuestions}
            </p>
            <p className="qus-style" dangerouslySetInnerHTML={{__html: question}}/>
            <div>
                {answers.map(answer=>(
                    <ButtonWrapper
                    correct = {userAnswer?.correctAnswer === answer}
                    userClicked = { userAnswer?.answer === answer }
                    >
                        <button className="ans-option" disabled={userAnswer} value={answer} onClick={callback}>
                            <span dangerouslySetInnerHTML={{__html: answer}}></span>
                        </button>
                    </ButtonWrapper>
                ))}
            </div>
        </Wrapper>
    )
}
