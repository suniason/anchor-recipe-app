import { EditFilled, ExclamationCircleFilled, HomeFilled } from '@ant-design/icons'
import React, { useState } from 'react'
import CreateRecipeModal from './createrecipe'
import { useRecipeContext } from '@/context/appcontext'
import { useAnchorWallet } from '@solana/wallet-adapter-react'
import { message } from 'antd'

const Sidebar:React.FC = () => {
    const {setPage} = useRecipeContext()
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const wallet = useAnchorWallet();
    
    const handleClickCreate = () => {
        if(wallet)setIsOpen(true)
        else message.warning("Please connect to a wallet")
    }

    return (
        <div className="flex h-[50vh] py-5 px-2 text-base justify-center lg:w-full lg:justify-normal">
          <ul className='fixed'>
            <li className="flex items-center justify-center lg:justify-normal my-5 px-5 cursor-pointer"
                onClick={()=> setPage(0)}>
                <HomeFilled style={{fontSize: 22}} />
                <div className='mx-3 hidden lg:block'>
                    Home
                </div>
            </li>
            <li className="flex items-center justify-center lg:justify-normal my-5 px-5 cursor-pointer"
                onClick={()=>setPage(1)}>
                <ExclamationCircleFilled style={{fontSize: 22}}/>
                <div className='mx-3 hidden lg:block'>
                    About
                </div>
            </li>
            <li onClick={handleClickCreate}
            className="flex items-center justify-center my-3 px-5 py-2 bg-primary-700 font-semibold rounded-full w-fit cursor-pointer">
                <EditFilled style={{fontSize: 22}}/>
                <div className='lg:mx-3 hidden lg:block'>
                    Create Recipe
                </div>
            </li>
            <CreateRecipeModal isOpen={isOpen} setIsOpen={setIsOpen}/>
          </ul>
        </div>
    )
}

export default Sidebar