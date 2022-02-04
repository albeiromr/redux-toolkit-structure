import React, {useState} from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import './photo.component.scss';
import { getPhotoByIdThunk } from '../../redux/photo/thunks/getPhotoByIdThunk';
import { AsyncStatusEnum } from '../../enums/async-status.enum';

const PhotoComponent = () => {

    const dispatch = useAppDispatch()
    const {value, status} = useAppSelector(state => state.photoReducer.photo)

    const [id, setId]  = useState<number>(0);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setId(Number(e.target.value));  
    }

    const handleFormSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(getPhotoByIdThunk(id));
    }
    
    return(
        <div className='photo'>
            <h2 className='photo__title'>Photo</h2>

            {status === AsyncStatusEnum.idle && <h3 className='photo__status-title'>Por favor busque una foto</h3>}
            {status === AsyncStatusEnum.completed && <img className='photo__img' src={value.thumbnailUrl} alt="photo" />}
            {status === AsyncStatusEnum.loading && <h3 className='photo__status-title'>...loading</h3>}
            {status === AsyncStatusEnum.rejected && <h3 className='photo__status-title'>La foto que buscas no existe</h3>}

            <form onSubmit={handleFormSubmit} className='photo__form'>
                <input type="number" className='photo__form-input' onChange={handleInputChange}/>
                <button type='submit'className='photo__form-button'>Buscar</button>
            </form>
        </div>
    )
}

export default PhotoComponent;