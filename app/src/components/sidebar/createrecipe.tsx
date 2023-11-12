import { Button, Input, Modal, message } from 'antd'
import React, { useState } from 'react'
import RecipeTag from './tag'
import { Recipe, RecipeApp } from '@/utils/types'
import { useRecipeContext } from '@/context/appcontext'
import { create_recipe } from '@/utils/fetch'
import { RecipeIdl } from '@/utils/idl'
import { programid } from '@/utils/constants'
import { Program } from '@coral-xyz/anchor'

interface CreateRecipeProps{
    isOpen: boolean
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}


const CreateRecipeModal:React.FC<CreateRecipeProps> = ({isOpen, setIsOpen}) => {
    const {wallet, connection} = useRecipeContext()
    const {TextArea}= Input
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const [recipe, setRecipe] = useState<Recipe>({
        author: '',
        name: '',
        ingredients: '',
        equipments: '',
        procedure: ''
    })

    const updateValue = (keyword: string, value: string) => {
        setRecipe((prevContent) => ({
          ...prevContent,
          [keyword]: value,
        }));
      };


      const handleConfirm = async () => {
        if(wallet==="" || wallet===null){
            message.error('Wallet not found. Make sure you are connected.')
            return
        }

        setRecipe({...recipe, author: wallet})

        if(connection){
            const program = new Program<RecipeApp>(
              RecipeIdl,
              programid,
              {connection}
            )
            try {
                await create_recipe(program,recipe.author, recipe.name,recipe.ingredients, recipe.equipments, recipe.procedure)
                message.success("Recipe successfully created")
            } catch (error) {
                message.error("Cannot create recipe this time :(")
            }

        }
      }

return (
    <Modal
        width={800}
        open={isOpen}
        centered
        onCancel={()=>setIsOpen(false)}
        footer={[
            <Button key="back" onClick={()=>setIsOpen(false)}>
                Return
            </Button>, 
            <Button className='bg-primary-700' key="cofirm" onClick={handleConfirm} loading={isLoading}>
                Confirm
        </Button>, 
        ]}
        >  
        <div className='text-xl font-semibold mb-6'>Create New Recipe</div>
        <div className='grid grid-cols-2 gap-8'>
        <div>
            <div>
                <div >
                    <div>
                        Recipe Name:
                    </div>
                <Input 
                size='small' 
                className='bg-accent-700' 
                onChange={(e)=>setRecipe({...recipe, name:e.target.value})}/>
                </div>
            </div>
            <div >
                <div>
                    Ingredients: <div className='text-xs italic text-text-300'>
                </div>
                </div>
                <div>
                    <RecipeTag placeholder='Add Ingredient' keyword='ingredients' updateValue={updateValue}/>
                </div>
            </div>
            <div>
                Equipments:
                <div>
                    <RecipeTag placeholder='Add Equipment' keyword='equipments' updateValue={updateValue}/>
                </div>
            </div>
            <div className='mt-8 italic text-xs text-primary-400'>
                Note: (In ingredients, kindly include unit of measure if possible e.g. [2 cloves, 100g])
            </div>
            </div>
            <div>
                <div>Procedure:</div>
                <TextArea
                    size='small'
                    className='bg-primary-700'
                    autoSize={{ minRows: 8, maxRows: 10 }}
                    onChange={(e)=>setRecipe({...recipe, procedure:e.target.value})}

                />
            </div>
        </div>
    </Modal>
)
}

export default CreateRecipeModal
