import { Button, Input, Modal } from 'antd'
import React, { useState } from 'react'
import RecipeTag from './tag'

interface CreateRecipeProps{
    isOpen: boolean
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

interface RecipeProps{
    solanaid: string
    name: string
    ingredients: string[]
    equipments: string[]
    procedure: string
}


const CreateRecipeModal:React.FC<CreateRecipeProps> = ({isOpen, setIsOpen}) => {

    const {TextArea}= Input

    const [recipe, setRecipe] = useState<RecipeProps>({
        solanaid: '',
        name: '',
        ingredients: [],
        equipments: [],
        procedure: ''
    })

    const updateValue = (keyword: string, value: string[]) => {
        setRecipe((prevContent) => ({
          ...prevContent,
          [keyword]: value,
        }));
      };

    const show = () => {
        console.log(recipe)
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
            <Button className='bg-primary-700' key="cofirm" onClick={()=>setIsOpen(false)}>
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
