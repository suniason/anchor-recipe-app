import React, { useState } from 'react';
import { Connection, clusterApiUrl } from '@solana/web3.js'
import { Button, message } from 'antd';
import { useRecipeContext } from '@/context/appcontext';

const WalletButton:React.FC = () => {
    const {wallet, setWallet}  = useRecipeContext()
    const solanaNetwork = clusterApiUrl('devnet')
    const connection = new Connection(solanaNetwork)
    const [connected, setConnected] = useState(false)
    const connectToWallet = async () => {
            try {
            const {solana} = window as any
            const res = await solana.connect()
            if (res) {
              const publickey = res.publicKey.toString()
              setWallet(publickey.substring(0, 5) + '...' +  publickey.slice(-5))
              setConnected(true)
            }
          } catch (error) {
            message.error('Phantom wallet not found')
          }
      };

    return (
          <Button className='text-white font-semibold bg-primary-500 px-4 py-2 rounded-lg' 
          onClick={connectToWallet}>{wallet!==''? `${wallet}`:`Connect Wallet`}</Button>
    )
}

export default WalletButton
