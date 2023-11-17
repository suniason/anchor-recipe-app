import { Button, Input, Modal, message } from 'antd'
import React, { useState } from 'react'
import RecipeTag from './tag'
import { Recipe } from '@/utils/types'
import { Keypair } from '@solana/web3.js'
import { useAnchorWallet } from '@solana/wallet-adapter-react'
import createRecipe from '@/utils/fetch'
import { useRecipeContext } from '@/context/appcontext'

interface CreateRecipeProps{
    isOpen: boolean
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}


const CreateRecipeModal:React.FC<CreateRecipeProps> = ({isOpen, setIsOpen}) => {    
    const {TextArea}= Input
    const [recipeAccount, _] = useState(Keypair.generate());
    const wallet = useAnchorWallet();
    const {isCreating,setIsCreating} = useRecipeContext()

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
        if(wallet){
            try {
                setIsCreating(true)
                const recipeResult = await createRecipe(
                    recipe.name,
                    recipe.ingredients,
                    recipe.equipments,
                    recipe.procedure,
                    wallet,
                    recipeAccount
                    )
                    if (recipeResult) {
                        message.success("Successfully created recipe.")
                        setIsOpen(false)
                    }
                } catch (error) {
                    console.error(error)
                    message.error("An error has occured. Try again later.")
                }
                setIsCreating(false)
                
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
            <Button className='bg-primary-700' key="cofirm" onClick={handleConfirm} loading={isCreating}>
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

