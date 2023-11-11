import { Recipe } from '@/utils/types'
import React from 'react'



const RecipePost:React.FC<Recipe> = ({author, name, ingredients, equipments, procedure  }) => {

    const ingredientlist = ingredients.split(',')
    const equimentlist = equipments.split(',')

    return (
            <div className='m-4 bg-accent-800 text-white rounded-md overflow-hidden w-full'>
                <div className='py-4 px-10 '>
                <header>
                    <div className='text-white font-bold text-xl'>
                        {name}
                    </div>
                    <div className='text-sm italic text-accent-300'>{`published by ${author}`}</div>
                </header>
                <article className='py-2 grid grid-cols-2 gap-5'>
                    <div className='p-4 bg-accent-900 rounded-md'>
                        <div className='text-base font-bold mb-2'>Ingredients:</div>
                            <ul className='mx-5'>
                                {ingredientlist.map((val, key)=>(
                                    <li key={key}>{val}</li>
                                    ))}
                            </ul>
                    </div>
                    <div className='p-4 bg-accent-900 rounded-md'>
                        <div className='text-base font-bold mb-2'>Equipments:</div>
                            <ul className='mx-5'>
                                {equimentlist.map((val, key)=>(
                                    <li key={key}>{val}</li>
                                ))}
                            </ul>
                    </div >
                    <div className='col-span-2 p-4 bg-accent-900 rounded-md'>
                        <div className='text-base font-bold mb-2'>Procedure:</div>
                            <div className='mx-5'>
                                {procedure}
                            </div>
                    </div>
                </article>
                <footer></footer>
                </div>
            </div>
    )
}

export default RecipePost
