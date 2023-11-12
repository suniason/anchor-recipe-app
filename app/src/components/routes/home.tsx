import { Posts } from '@/utils/types'
import React, { useState } from 'react'
import { RecipeList } from '..'

const HomePage:React.FC<Posts> = ({recipes}) => {
    const [recipeList, _] = useState<any[]>(recipes)

    return (
        <>
            <div className="flex flex-col gap-5">
            {recipeList && recipeList.map((val, key)=>(
              <RecipeList key={key} 
              author={val.account.author} 
              name={val.account.name} 
              ingredients={val.account.ingredients} 
              equipments={val.account.equipments} 
              procedure={val.account.procedure} />
              ))}
            </div>
        </>
    )
}

export default HomePage
