import React, { useEffect, useState } from "react";
import { AppState } from '../../store/reducers/root.reducer'
import Question from "../../components/Question/Question";
import "./MainPage.scss";
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import ModalAnswers from "../../components/ModalAnswers/ModalAnswers";
import Pagination from '@mui/material/Pagination';
import { getQuestionsTC } from "../../store/actions/actions";
import { connect } from "react-redux";
import { QuestionItem } from "store/reducers/questions.reducer";


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

type StateProps = {
    items: Array<QuestionItem>
    isFetching: boolean
}
type DispatchProps = {
    getQuestions: () => void;
}
type Props = StateProps & DispatchProps

const MainPage = (props: Props) => {
    const [modal, setModal] = useState(null);

    useEffect(() => {
        props.getQuestions()
        // eslint-disable-next-line
    }, [])

    const handleOpen = (id: number) => setModal(id);
    const handleClose = () => setModal(null);

    return (
        <div className="main-page">
            <div className="main-page__sidebar">
                sidebar
            </div>
            <div className="main-page__question-wrapper">
                {props.items && props.items.map(item => (
                    <Question
                        data={item}
                        key={item.question_id}
                        onOpenAnswers={(id: number) => handleOpen(id)}
                    />
                ))}
                <Pagination count={10} />
            </div>
            {modal && (
                <Modal
                    open={true}
                    onClose={handleClose}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{ timeout: 500 }}
                >
                    <Box sx={style as any}>
                        <ModalAnswers questionId={modal as number} />
                    </Box>
                </Modal>
            )}

        </div>
    )
}

const mapStateToProps = (state: AppState) => ({
    items: state.questions.items,
    isFetching: state.questions.isFetching
})
const mapDispatchToProps = {
    getQuestions: getQuestionsTC
}

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);