import { Button, Modal } from 'antd'
import React, { useState } from 'react'
import RecipePost from './post'
import { Recipe } from '@/utils/types'

const RecipeList:React.FC<Recipe> = ({ author, name, ingredients, equipments, procedure}) => {
    const[isOpen, setIsOpen] = useState<boolean>(false)

return (
    <div className=''>
        <div onClick={()=>setIsOpen(true)}> 
            <div>
                
            </div>
        <div className='bg-accent-800 px-8 py-3 rounded-lg cursor-pointer hover:scale-110 transition-all'>
            <div className='text-white text-lg font-bold'>{name}</div>
            <div className='text-sm text-primary-200'>{`Published by ${author}`}</div>
            </div>
        </div>
            <Modal
            width={800}
            open={isOpen}
            centered
            onCancel={()=>setIsOpen(false)}
            footer={[
                <Button className='bg-primary-700' key="back" onClick={()=>setIsOpen(false)}>
                  Return
                </Button>
            ]}
            >  
             <RecipePost author={author} name={name} ingredients={ingredients} equipments={equipments} procedure={procedure} />

            </Modal>
    </div>
)
}

export default RecipeList
