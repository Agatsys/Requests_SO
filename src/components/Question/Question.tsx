import React from "react";
import "./Question.scss"
import { QuestionItem } from '../../store/reducers/questions.reducer'
import Card from '@mui/material/Card';


type OwnProps = {
    data: QuestionItem;
    openModal: (questionId: number) => void;
    setTag: (tag: string) => void;
}
type Props = OwnProps


const Question = ({ setTag, data, openModal }: Props) => {
    return (
        <Card className="main-page-question" onClick={() => openModal(data.question_id)}>
            <div className="main-page-question__title">
                {data.title}
            </div>
            {data.tags &&
                <div className="main-page-question__tags">
                    {data.tags.map((item, index) => (
                        <div 
                            className="main-page-question__tag" 
                            key={index}
                            onClick={(event) => {
                                event.stopPropagation()
                                setTag(item)
                            }}>
                            {item}
                        </div>
                    ))}
                </div>
            }
        </Card> 
    )
}

export default Question