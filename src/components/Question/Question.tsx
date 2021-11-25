import React from "react";
import "./Question.scss"
import { QuestionItem } from '../../store/reducers/questions.reducer'
import Card from '@mui/material/Card';


type OwnProps = {
    data: QuestionItem;
    openModal: (questionId: number) => void;
    setTag: (tag: string) => void;
    tag: string;
}
type Props = OwnProps


const Question = (props: Props) => {
    return (
        <Card className="main-page-question" onClick={() => props.openModal(props.data.question_id)}>
            <div className="main-page-question__title">
                {props.data.title}
            </div>
            {props.data.tags &&
                <div className="main-page-question__tags">
                    {props.data.tags.map((item, index) => (
                        <div 
                            className={item === props.tag ? "main-page-question__active-tag" : "main-page-question__tag"}
                            key={index}
                            onClick={(event) => {
                                event.stopPropagation()
                                props.setTag(item)
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