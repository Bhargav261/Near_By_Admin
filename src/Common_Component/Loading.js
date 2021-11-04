import React from 'react';

const Loading = () => {
    return (
        <>
            <div className="justify-center" >
                <div className="loader">
                    <div class="lds-facebook">
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Loading;