import { useModal } from '../hooks/useModal'
import { Coments } from './Coments'
import Modal from './Modal'
import { IPost } from '../interfaces/post.interface';

export const PostFooter = ({tag}: IPost) => {
    const {isOpen, openModal, closeModal} = useModal(false)
  return (
    <div className='post-footer'>
        <div className='p-1'>
          <strong className='tag'>{tag}</strong>
        </div>
        <div className='p-1'>
            <a className='accion-btn'>Me guasta</a>
            <strong className='count'>10</strong>
            <a className='pl-1 accion-btn' onClick={openModal}>Comentarios</a>
            <strong className='count'>2</strong>
            <Modal  children={Coments} isOpen={isOpen} closeModal={closeModal}/>
        </div>
    </div>
  )
}
