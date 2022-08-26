import {useReducer} from 'react'
import { posts } from '../db/post.db';
import { IPost } from '../interfaces/post.interface';

export const useFilter = ()=>{

    const initialState:IPost[] = posts

    type FilterAction = {type: 'filter', payload:{ filter:string, list:IPost[]}}

    const filterReducer = (state: IPost[], action: FilterAction):IPost[] => {
        if(action.payload.filter.length > 2)
            return action.payload.list.filter( row=> row.tag.toLocaleLowerCase().startsWith(action.payload.filter.toLocaleLowerCase()))
        return posts
    }

    const [_posts, dispatch] = useReducer(filterReducer, initialState);

    const filterAction = (filter: string)=>{
        dispatch({type: 'filter', payload: {filter, list: posts}})
    }

    return{
        _posts,
        filterAction
    }

}