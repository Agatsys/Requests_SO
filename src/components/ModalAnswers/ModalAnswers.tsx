import React, { useEffect } from "react";
import "./ModalAnswers.scss"
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { getAnswers } from 'store/actions/actions'
import { connect } from "react-redux";

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
    isOpen: boolean;
    questionId: number;
    handleClose: () => void;
}
type DispatchProps = {
    getAnswers: (questionId: number) => void;
}
type Props = OwnProps & DispatchProps

const ModalAnswers = ({ isOpen, questionId, handleClose, getAnswers }: Props) => {


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
                        Title and bla bla bla
                    </div>
                    <div className="main-page-modal__text">
                        Bebra and her friends
                    </div>
                </div>
            </Box>
        </Modal>

    )
}

const mapDispatchToProps = {
    getAnswers: getAnswers
}

export default connect(null, mapDispatchToProps)(ModalAnswers);