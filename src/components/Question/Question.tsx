import "./Question.scss"
import React from "react";
import { QuestionItem } from '../../store/reducers/questions.reducer'
import Card from '@mui/material/Card';
import Tag from "components/Tag/Tag";


type OwnProps = {
    data: QuestionItem;
    openModal: (questionId: number) => void;
    setTag: (tag: string) => void;
    tag: string;
}
type Props = OwnProps


const Question = (props: Props) => {
    return (
        <Card 
            className="main-page-question" 
            onClick={() => props.openModal(props.data.question_id)}>
            <div className="main-page-question__title">
                {props.data.title}
            </div>
            {props.data.tags &&
                <div className="main-page-question__tags">
                    {props.data.tags.map((item, index) => (
                        <Tag 
                            key={index}
                            item={item}
                            setTag={props.setTag}
                            tag={props.tag}
                        />
                    ))}
                </div>
            }
        </Card> 
    )
}

export default Question