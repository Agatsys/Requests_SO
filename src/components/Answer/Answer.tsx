import React from "react";
import "./Answer.scss"
import { AnswerItem } from "store/reducers/answers.reducer";


type OwnProps = {
    data: AnswerItem;
}
type Props = OwnProps


const Answer = (props: Props) => {
    return (
        <div className="modal-window-answer-wrapper">
            <div className="modal-window-answer"> 
                <div className="modal-window-answer__text" dangerouslySetInnerHTML={{ __html: props.data.body }}></div>
            </div>

        </div>
    )
}

export default Answer;