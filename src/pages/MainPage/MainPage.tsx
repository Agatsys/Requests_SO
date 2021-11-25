import React, { useEffect, useState } from "react";
import { AppState } from '../../store/reducers/root.reducer'
import Question from "../../components/Question/Question";
import "./MainPage.scss";
import Pagination from '@mui/material/Pagination';
import { getQuestions, setPageSize, setSortRules, setCurrentPage, setTag } from "../../store/actions/actions";
import { connect } from "react-redux";
import { QuestionItem } from "store/reducers/questions.reducer";
import CustomSkeleton from "components/CustomSkeleton/CustomSkeleton";
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import ModalAnswers from '../../components/ModalAnswers/ModalAnswers'
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';


type StateProps = {
    items: Array<QuestionItem>
    questionsIsFetching: boolean
    totalQuestionsCount: number
    pageSize: number
    currentPage: number
    sort: string
    tag: string
}
type DispatchProps = {
    getQuestions: () => void;
    setPageSize: (pageSize: number) => void;
    setSortRules: (sort: string) => void;
    setCurrentPage: (page: number) => void;
    setTag: (tag: string) => void;
}
type Props = StateProps & DispatchProps


const MainPage = (props: Props) => {

    const [sort, setSort] = useState('');
    const [modalState, setModalState] = useState({ isOpen: false, questionId: null })
    useEffect(() => {
        props.getQuestions()
        // eslint-disable-next-line
    }, [])
    
    const openModal = (id: number) => setModalState({ isOpen: true, questionId: id }) 
    const closeModal = () => setModalState({ isOpen: false, questionId: null })
    const pagesCount = Math.ceil(props.totalQuestionsCount / props.pageSize)
    const handleChange = (event: SelectChangeEvent) => {
        setSort(event.target.value as string);
    };
    
    
    return (
        <div className="main-page">
            <div className="main-page__header">
                <ButtonGroup variant="contained" aria-label="outlined button group">
                    <Button 
                        variant={props.pageSize === 10 ? "contained" : "outlined"} 
                        onClick={() => props.setPageSize(10)}>10</Button>
                    <Button 
                        variant={props.pageSize === 15 ? "contained" : "outlined"} 
                        onClick={() => props.setPageSize(15)}>15</Button>
                    <Button 
                        variant={props.pageSize === 20 ? "contained" : "outlined"} 
                        onClick={() => props.setPageSize(20)}>20</Button>
                </ButtonGroup>
                <div className="main-page__current-tag">
                    tag
                </div>
                <div className="main-page__sort">
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Sort by:</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={sort}
                            label="Sort by:"
                            onChange={handleChange}>
                            <MenuItem value={"activity"} onClick={() => props.setSortRules("activity")}>Activity</MenuItem>
                            <MenuItem value={"votes"} onClick={() => props.setSortRules("votes")}>Votes</MenuItem>
                            <MenuItem value={"creation"} onClick={() => props.setSortRules("creation")}>Creation</MenuItem>
                            <MenuItem value={"hot"} onClick={() => props.setSortRules("hot")}>Hot</MenuItem>
                            <MenuItem value={"week"} onClick={() => props.setSortRules("week")}>Week</MenuItem>
                            <MenuItem value={"month"} onClick={() => props.setSortRules("month")}>Month</MenuItem>
                        </Select>
                    </FormControl>
                </div>
            </div>
            <div className="main-page__question-wrapper">
                <Pagination 
                    onChange={(event, page) => {props.setCurrentPage(page)}}
                    count={pagesCount} 
                />
                {props.questionsIsFetching
                    ? <CustomSkeleton
                        height={150} />
                    : <>
                        {props.items.map(item => (
                            <Question
                                openModal={(questionId: number) => openModal(questionId)}
                                data={item}
                                key={item.question_id}
                                setTag={props.setTag}
                                tag={props.tag}
                            />
                        ))}
                    </>
                } 
            </div>
            <ModalAnswers 
                handleClose={() => closeModal()}
                questionId={modalState.questionId}
                isOpen={modalState.isOpen}
            />
        </div>
    )
}

const mapStateToProps = (state: AppState) => ({
    items: state.questions.items,
    questionsIsFetching: state.questions.questionsIsFetching,
    totalQuestionsCount: state.filter.totalQuestionsCount,
    pageSize: state.filter.pageSize,
    sort: state.filter.sort,
    tag: state.filter.tag
})
const mapDispatchToProps = {
    getQuestions: getQuestions,
    setPageSize: setPageSize,
    setSortRules: setSortRules,
    setCurrentPage: setCurrentPage,
    setTag: setTag
}

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);


