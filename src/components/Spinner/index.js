import React from 'react';
import LoaderContainer from '../../containers/loaderContainer';
import { ClipLoader } from 'react-spinners';

export const Spinner = () => {
    return (

        <LoaderContainer>
            {
                (props) => (
                    <div className='sweet-loading'>
                        <ClipLoader
                            sizeUnit={"px"}
                            size={100}
                            color={'#123abc'}
                            loading={props.loading}
                        />
                    </div>
                )
            }
        </LoaderContainer>

    );
}