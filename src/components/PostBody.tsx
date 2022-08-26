import { IPost } from '../interfaces/post.interface';

export const PostBody = ({title, img, id}: IPost) => {
  return (
    <div className='post-body' key={id}>
        <h1 className='text'>{title}</h1>
        <p className='text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, molestias quo eos quam ratione dolorem, saepe, incidunt soluta quibusdam odio rem expedita animi accusantium temporibus fuga optio minus? Maxime, animi.</p>
        <img className='img-post' 
        src={img}>
        </img>
    </div>
  )
}
