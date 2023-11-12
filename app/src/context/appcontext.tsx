import { AppContextType, ChildrenProps} from '@/utils/types'
import React, { createContext, useContext, useState } from 'react'

const RecipeContext = createContext<AppContextType | undefined>(undefined)

export const RecipeProvider: React.FC<ChildrenProps> = ({ children }) => {
  const [page, setPage] = useState<number>(0)
  const [connected, setConnected] = useState<boolean>(false)
  const [isCreating, setIsCreating] = useState<boolean>(false)
  
  return (
    <RecipeContext.Provider 
      value={{  page, connected, isCreating, setPage, setConnected, setIsCreating }}>
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