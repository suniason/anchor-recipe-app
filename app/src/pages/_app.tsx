import { RecipeProvider } from '@/context/appcontext'
import '@/styles/globals.css'
import { ConfigProvider } from 'antd'
import type { AppProps } from 'next/app'
import { PhantomWalletAdapter } from "@solana/wallet-adapter-phantom";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import "@solana/wallet-adapter-react-ui/styles.css";
import "../styles/globals.css";
import { clusterApiUrl } from '@solana/web3.js';

export default function App({ Component, pageProps }: AppProps) {
  const phantomWallet = new PhantomWalletAdapter();
  return (
    <ConnectionProvider endpoint={clusterApiUrl("devnet")}>
      <WalletProvider wallets={[phantomWallet]}>
        <WalletModalProvider>
          <ConfigProvider 
            theme={{
              token:{
                colorBgContainer: "#0c215a",
                colorBgElevated: "#0c215a",
                colorText: "#ffffff",
                colorIcon:"#ffffff",
              },
              components: {
                Select: {
                  multipleItemBg: "#143285",  
                },
              }}}>
              <RecipeProvider>
                <Component {...pageProps} />
              </RecipeProvider>
            </ConfigProvider>
          </WalletModalProvider>
        </WalletProvider>
    </ConnectionProvider>
  )
}