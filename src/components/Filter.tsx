import { useFilter } from '../hooks/useFilter';
import { IFilter } from '../interfaces/filter.interface';

export const Filter = ({filterAction}:IFilter) => {
  return (
    <div className='filter'>
        <input className='input'onChange={e => filterAction(e.target.value)} placeholder='Buscar...'/>
    </div>
  )
}
