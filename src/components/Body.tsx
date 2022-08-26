import { useFilter } from '../hooks/useFilter'
import { Filter } from './Filter'
import { Post } from './Post'

export const Body = () => {
  const {_posts, filterAction} = useFilter()
  console.log(_posts)
  return (
    <div className='body'>
        <Filter filterAction={filterAction}/>
        {_posts.map(post => <Post tag={post.tag} id={post.id} title={post.title} img={post.img} author={post.author} />)}
    </div>
  )
}
