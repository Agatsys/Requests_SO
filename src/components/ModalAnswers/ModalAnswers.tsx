import React, { useEffect } from "react";
import "./ModalAnswers.scss"
import CloseIcon from '@mui/icons-material/Close';
import { AppState } from '../../store/reducers/root.reducer'
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { getAnswers } from 'store/actions/actions'
import { connect } from "react-redux";
import Answer from "components/Answer/Answer";
import { AnswerItem } from "store/reducers/answers.reducer";
import { QuestionItem } from "store/reducers/questions.reducer";
import CustomSkeleton from "components/CustomSkeleton/CustomSkeleton";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 2,
};

type StateProps = {
    items: Array<AnswerItem>
    questionsItems: Array<QuestionItem>
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


const ModalAnswers = ({ questionsItems, items, isOpen, questionId, handleClose, getAnswers }: Props) => {

    useEffect(() => {
        if (questionId !== null) {
            getAnswers(questionId)
        }
        // eslint-disable-next-line
    }, [questionId])

    const ownQuestion = (questionId: number, questionsItems: Array<QuestionItem>) => {
        let id = questionId
        let findQuestion = questionsItems.find(item => item.question_id === id)
        return {
            findQuestion
        }
    }

    return (
        <Modal
            open={isOpen}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{ timeout: 500 }}>
            <Box sx={style as any} className="main-page-modal" >
                <div className="main-page-modal__close-icon" onClick={handleClose}>
                   <CloseIcon/>
                </div>
                <div className="main-page-modal__question">
                    {questionId && questionsItems
                        ? <>
                            <div className="main-page-modal__title">
                                {ownQuestion(questionId, questionsItems).findQuestion.title}
                            </div>
                            <div className="main-page-modal__text-wrapper">
                                <div 
                                    className="main-page-modal__text" 
                                    dangerouslySetInnerHTML={{ __html: ownQuestion(questionId, questionsItems).findQuestion.body}}>
                                </div>
                            </div>
                          </>
                        : <CustomSkeleton
                            height={100} />
                    }
                </div>
                <div className="main-page-modal__answers-title">
                    Answers:
                    {items.map(item => (
                        <Answer
                            key={item.answer_id}
                            data={item}/>
                    ))}
                </div>
            </Box>
        </Modal>

    )
}
const mapStateToProps = (state: AppState) => ({
    items: state.answers.items,
    questionsItems: state.questions.items
})
const mapDispatchToProps = {
    getAnswers: getAnswers
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalAnswers);