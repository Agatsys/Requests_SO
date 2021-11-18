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
        <div className="main-page-modal">
            <div className="main-page-modal__title">
                Title and bla bla bla
            </div>
            <div className="main-page-modal__text">
                Bebra and her friends
            </div>
        </div>
    )
}

export default ModalAnswers;