import React from "react"
import { SortableElement } from 'react-sortable-hoc';
import { areEqual } from "react-window";


//Concional criada

const areEqual = (prevProps, nextProps) => {
    return prevProps.post.id === nextProps.post.id
}

const VirtualPost = React.memo(({ post, imgStyle }) => {

    return (<div>
				{post.id === 2 && <h1>Banner dois</h1>}
        <img src={post.url} alt={post.title} style={imgStyle} />
        <h3>{post.title}</h3>
    </div>)
}, areEqual) // Condional passada como segundo argumento da função React.memo

export const Post = SortableElement(VirtualPost);