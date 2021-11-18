import React from "react";
import Card from '@mui/material/Card';
import "./Answer.scss"


const Answer = () => {
    return (
        <Card className="modal-window-answer"> 
            <div className="modal-window-answer__text" dangerouslySetInnerHTML={{ __html: 'body' }}>
            </div>
        </Card>
    )
}

export default Answer;