import React from 'react'
import { useModal } from '../hooks/useModal'
import Modal from './Modal'
import { InfoUserPost } from './InfoUserPost';
import { IAuthor } from '../interfaces/author.interface';

export const PostHeader = ({avatar, name, id}: IAuthor) => {
    const {isOpen, openModal, closeModal} = useModal(false)
  return (
    <div className='post-header' key={id}>
            <img className='avatar-post' 
            src={avatar}>
            </img>
            <a className='text accion-btn'  onClick={openModal}>{name}</a>
            <Modal  children={InfoUserPost} isOpen={isOpen} closeModal={closeModal}/>
    </div>
  )
}
