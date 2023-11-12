import React from 'react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';

const DefaultLayout:React.FC = () => {
    

    return (
    <div className='flex flex-col w-full items-center'>
        <div className='flex w-8/12 justify-end m-5'>
            <div className=''>
                <WalletMultiButton/>
            </div>
        </div>
    </div>
    )
}

export default DefaultLayout
