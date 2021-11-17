import React, { useEffect } from "react";
import "./ModalAnswers.scss"

type OwnProps = {
    questionId: number
}
type Props = OwnProps

const ModalAnswers = ({ questionId } : Props) => {

    useEffect(() => {
        // someFuncCall(questionId)

        // eslint-disable-next-line
    }, [])

    return (
        <div className="main_page_modal">
            <div className="main_page_modal__title">
                Title and bla bla bla
            </div>
            <div className="main_page_modal__text">
                Bebra and her friends
            </div>
        </div>
    )
}

export default ModalAnswers;