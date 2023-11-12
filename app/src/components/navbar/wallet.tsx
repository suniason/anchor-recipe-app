// import React, { useState } from 'react';
// import { Connection, clusterApiUrl } from '@solana/web3.js'
// import { Button, message } from 'antd';
// import { useRecipeContext } from '@/context/appcontext';

// const WalletButton:React.FC = () => {
//     const {wallet, setWallet, connected, setConnected, setConnection}  = useRecipeContext()
//     const solanaNetwork = clusterApiUrl('devnet')
//     const connection = new Connection(solanaNetwork)
//     const [isHovered, setIsHovered] = useState<boolean>(false)
//     const connectToWallet = async () => {
//             try {
//             const {solana} = window as any
//             const res = await solana.connect()
//             if (res) {
//               const publickey = res.publicKey.toString()
//               setWallet(publickey)
//               setConnection(connection)
//               setConnected(true)
//             }
//           } catch (error) {
//             message.error('Wallet not found. Make sure you are connected.')
//           }
//       };
//       const disconnectWallet = async () => {
//         setConnected(false);
//         setWallet('');
//       };

//     return (
//         <>
//           <button className='text-white font-semibold bg-primary-500 px-4 py-2 rounded-lg'
//           onMouseEnter={()=>setIsHovered(true)}
//           onMouseLeave={()=>setIsHovered(false)} 
//           onClick={isHovered&&connected?disconnectWallet : connectToWallet}>
//             {wallet!==''? `${wallet.substring(0, 5) + '...' +  wallet.slice(-5)}`:`Connect Wallet`}
//           </button>
//         </>
//     )
// }

// export default WalletButton
