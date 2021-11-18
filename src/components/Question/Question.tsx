import React, { useState } from "react";
import "./Question.scss"
import { QuestionItem } from '../../store/reducers/questions.reducer'
import Card from '@mui/material/Card';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import ModalAnswers from "../../components/ModalAnswers/ModalAnswers";


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 900,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

type OwnProps = {
    data: QuestionItem;
    id: number;
}
type Props = OwnProps


const Question = ({ data }: Props) => {
    const [modal, setModal] = useState(null);

    const handleOpen = (id) => setModal(id);
    const handleClose = () => setModal(null);

    return (
        <>
            <Card className="main-page-question" onClick={() => handleOpen(data.question_id)}>
                <div className="main-page-question__title">
                    {data.title} - {data.score} - {data.is_answered}
                </div>
                <div className="main-page-question__text">

                </div>
            </Card>
            {/* {modal && ( */}
                <Modal
                    open={false}
                    onClose={handleClose}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{ timeout: 500 }} >
                    <Box sx={style as any}>
                        <ModalAnswers questionId={modal as number} />
                    </Box>
                </Modal>
            {/* )} */}
        </>
    )
}

export default Question;