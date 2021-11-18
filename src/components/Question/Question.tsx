import React from "react";
import "./Question.scss"
import { QuestionItem } from '../../store/reducers/questions.reducer'
import Card from '@mui/material/Card';


type OwnProps = {
    data: QuestionItem;
    openModal: (questionId: number) => void;
}
type Props = OwnProps


const Question = ({ data, openModal }: Props) => {
    return (
        <>
            <Card className="main-page-question" onClick={() => openModal(data.question_id)}>
                <div className="main-page-question__title">
                    {data.title} - {data.score} - {data.is_answered}
                </div>
                <div className="main-page-question__text">

                </div>
            </Card> 
        </>
    )
}

export default Question