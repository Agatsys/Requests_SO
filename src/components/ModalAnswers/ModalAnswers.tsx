import React, { useEffect } from "react";
import "./ModalAnswers.scss"
import { AppState } from '../../store/reducers/root.reducer'
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { getAnswers } from 'store/actions/actions'
import { connect } from "react-redux";
import Answer from "components/Answer/Answer";
import { AnswerItem } from "store/reducers/answers.reducer";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 900,
    height: 700,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

type StateProps = {
    items: Array<AnswerItem>
}
type OwnProps = {
    isOpen: boolean;
    questionId: number;
    handleClose: () => void;
}
type DispatchProps = {
    getAnswers: (questionId: number) => void;
}
type Props = OwnProps & DispatchProps & StateProps

const ModalAnswers = ({ items, isOpen, questionId, handleClose, getAnswers }: Props) => {

    useEffect(() => {
        if (questionId !== null) {
            getAnswers(questionId)
        }
        // eslint-disable-next-line
    }, [questionId])

    return (
        <Modal
            open={isOpen}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{ timeout: 500 }}
        >
            <Box sx={style as any} >
                <div className="main-page-modal">
                    <div className="main-page-modal__title">
                        Title question
                    </div>
                    <div className="main-page-modal__text">
                        Bebra and her friends
                    </div>
                </div>
                <>
                    {items.map(item => (
                        <Answer
                            key={item.answer_id}
                            data={item}/>
                    ))}
                </>
            </Box>
        </Modal>

    )
}
const mapStateToProps = (state: AppState) => ({
    items: state.answers.items
})
const mapDispatchToProps = {
    getAnswers: getAnswers
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalAnswers);