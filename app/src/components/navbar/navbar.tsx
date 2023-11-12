import React from 'react';
import { ChildrenProps } from '@/utils/types';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';

const DefaultLayout:React.FC<ChildrenProps> = ({children}) => {
    

    return (
    <>
    <div className='flex flex-col w-full items-center'>
        <div className='flex w-8/12 justify-end m-5'>
            <div className=''>
                <WalletMultiButton className='bg-primary-500'/>
            </div>
        </div>
    </div>
        {children}
    </>
    )
}

export default DefaultLayout
