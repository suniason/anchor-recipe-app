import React from 'react';
import WalletButton from './wallet';
import { ChildrenProps } from '@/utils/types';

const DefaultLayout:React.FC<ChildrenProps> = ({children}) => {
    

    return (
    <div className='flex w-full justify-center'>
        <div className=''>
            <div className='flex w-8/12 justify-end m-5'>
                <WalletButton/>
            </div>
        </div>
        <div>
            {children}
        </div>
    </div>
    )
}

export default DefaultLayout
