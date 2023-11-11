import { RecipeProvider } from '@/context/appcontext'
import '@/styles/globals.css'
import { ConfigProvider } from 'antd'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
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
  )
}