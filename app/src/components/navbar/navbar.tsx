import React from 'react';
import WalletButton from './wallet';
import { ChildrenProps } from '@/utils/types';

const DefaultLayout:React.FC<ChildrenProps> = ({children}) => {
    

    return (
    <>
    <div className='flex flex-col w-full items-center'>
        <div className='flex w-8/12 justify-end m-5'>
            <div className=''>
                <WalletButton/>
            </div>
        </div>
    </div>
        {children}
    </>
    )
}

export default DefaultLayout
