import React from "react";
import Card from '@mui/material/Card';
import "./Answer.scss"
import { AnswerItem } from "store/reducers/answers.reducer";


type OwnProps = {
    data: AnswerItem;
}
type Props = OwnProps

const Answer = (props: Props) => {
    return (
        <Card className="modal-window-answer"> 
            <div className="modal-window-answer__text" dangerouslySetInnerHTML={{ __html: props.data.body }}></div>
        </Card>
    )
}

export default Answer;