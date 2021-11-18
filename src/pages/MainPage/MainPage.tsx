import React, { useEffect } from "react";
import { AppState } from '../../store/reducers/root.reducer'
import Question from "../../components/Question/Question";
import "./MainPage.scss";
import Pagination from '@mui/material/Pagination';
import { getQuestions, setPageSize } from "../../store/actions/actions";
import { connect } from "react-redux";
import { QuestionItem } from "store/reducers/questions.reducer";
import CustomSkeleton from "components/CustomSkeleton/CustomSkeleton";
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';


type StateProps = {
    items: Array<QuestionItem>
    questionsIsFetching: boolean
    totalQuestionsCount: number
    pageSize: number
    currentPage: number
    sort: string
}
type DispatchProps = {
    getQuestions: (currentPage: number, pageSize: number, sort: string) => void;
    setPageSize: (pageSize: number) => void;
}
type Props = StateProps & DispatchProps


const MainPage = (props: Props) => {
    useEffect(() => {
        props.getQuestions(props.currentPage, props.pageSize, props.sort)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    useEffect(() => {
        props.getQuestions(props.currentPage, props.pageSize, props.sort)
    }, [props.currentPage, props.pageSize, props.sort])

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };



    const pagesCount = Math.ceil(props.totalQuestionsCount / props.pageSize)


    return (
        <div className="main-page">
            <div className="main-page__header">
                <ButtonGroup variant="contained" aria-label="outlined button group">
                    <Button onClick={() => props.setPageSize(5)}>5</Button>
                    <Button onClick={() => props.setPageSize(10)}>10</Button>
                    <Button onClick={() => props.setPageSize(15)}>15</Button>
                </ButtonGroup>
                <Button
                    id="basic-button"
                    aria-controls="basic-menu"
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                >
                    Dashboard
                </Button>
                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}
                >
                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                    <MenuItem onClick={handleClose}>My account</MenuItem>
                    <MenuItem onClick={handleClose}>Logout</MenuItem>
                </Menu>
            </div>
            <div className="main-page__question-wrapper">
                {props.questionsIsFetching
                    ? <CustomSkeleton />
                    : <>
                        {props.items.map(item => (
                            <Question
                                data={item}
                                key={item.question_id}
                                id={item.question_id}
                            />
                        ))}
                    </>
                }
                <Pagination count={10} />
            </div>
        </div>
    )
}

const mapStateToProps = (state: AppState) => ({
    items: state.questions.items,
    questionsIsFetching: state.questions.questionsIsFetching,
    totalQuestionsCount: state.filter.totalQuestionsCount,
    pageSize: state.filter.pageSize,
    sort: state.filter.sort
})
const mapDispatchToProps = {
    getQuestions: getQuestions,
    setPageSize: setPageSize
}

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);