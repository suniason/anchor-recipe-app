import { Posts } from '@/utils/types'
import React from 'react'
import { RecipeList } from '..'

const HomePage:React.FC<Posts> = ({recipes}) => {
    return (
        <>
            <div className="flex flex-col gap-5">
            {recipes.map((val, key)=>(
              <RecipeList key={key} author={val.author} name={val.name} ingredients={val.ingredients} equipments={val.equipments} procedure={val.procedure} />
              ))}
            </div>
        </>
    )
}

export default HomePage
