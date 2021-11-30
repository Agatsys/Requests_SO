import "./Tag.scss"
import React from "react"


type OwnProps = {
    setTag: (tag: string) => void;
    tag: string;
    item: string;
}
type Props = OwnProps


const Tag = ({item, tag, setTag}: Props) => {
    return (
        <div 
            className={item === tag ? "question__active-tag" : "question__tag"}
            onClick={(event) => {
                event.stopPropagation()
                item === tag 
                ? setTag("")
                : setTag(item)  
            }}>
            {item}
        </div>
    )
}

export default Tag