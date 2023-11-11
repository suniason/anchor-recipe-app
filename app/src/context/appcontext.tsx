import { program } from '@/utils/constants'
import { AppContextType, ChildrenProps } from '@/utils/types'
import { PublicKey } from '@solana/web3.js'
import React, { createContext, useContext, useState } from 'react'

const RecipeContext = createContext<AppContextType | undefined>(undefined)

export const RecipeProvider: React.FC<ChildrenProps> = ({ children }) => {
  const [wallet, setWallet] = useState<string>("")
  const [page, setPage] = useState<number>(0)
  const [programId, setProgramId] = useState<PublicKey>(program)

  return (
    <RecipeContext.Provider value={{ wallet, page, programId, setWallet, setPage, setProgramId }}>
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