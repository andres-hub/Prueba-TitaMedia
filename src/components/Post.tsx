import React from 'react'
import Modal from './Modal';
import { useModal } from '../hooks/useModal';
import { Coments } from './Coments';
import { PostHeader } from './PostHeader';
import { PostBody } from './PostBody';
import { PostFooter } from './PostFooter';
import { IPost } from '../interfaces/post.interface';

export const Post = ({id, title, img, author, tag}: IPost ) => {
  return (
    <div className='post' key={id}>
        <PostHeader avatar={author.avatar} id={author.id} name={author.name}/>
        <PostBody tag={tag} id={id} title={title} img={img} author={author}/>
        <PostFooter id={id} title={title} img={img} author={author} tag={tag} />
    </div>
  )
}
