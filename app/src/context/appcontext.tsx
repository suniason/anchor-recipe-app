import { PhantomProvider } from '@/utils/phantom'
import { AppContextType, ChildrenProps, IProgram, RecipeApp } from '@/utils/types'
import { Connection } from '@solana/web3.js'
import React, { createContext, useContext, useState } from 'react'

const RecipeContext = createContext<AppContextType | undefined>(undefined)

export const RecipeProvider: React.FC<ChildrenProps> = ({ children }) => {
  const [wallet, setWallet] = useState<string>("")
  const [page, setPage] = useState<number>(0)
  const [connected, setConnected] = useState<boolean>(false)
  const [connection, setConnection] = useState<Connection|null>(null)
  
  return (
    <RecipeContext.Provider 
      value={{ wallet, page, connected, connection,
        setWallet, setPage, setConnected, setConnection }}>
      {children}
    </RecipeContext.Provider>

  )
}

export const useRecipeContext = (): AppContextType => {
  const context = useContext(RecipeContext)

  if (context == null) {
    throw new Error('useRecipeContext must be used within a RecipeProvider')
  }

  return context
}