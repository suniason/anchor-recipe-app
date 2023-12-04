import React from 'react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { Image } from 'antd';

const DefaultLayout:React.FC = () => {
    

    return (
    <div className='flex flex-col w-full items-center'>
        <div className='flex w-8/12 justify-between m-5'>
            <div className='w-20'>
                <Image src='gourmetquest_logo.png' preview={false} />
            </div>
            <div className=''>
                <WalletMultiButton/>
            </div>
        </div>
    </div>
    )
}

export default DefaultLayout
