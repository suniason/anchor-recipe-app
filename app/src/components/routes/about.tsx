import React from 'react'

const About:React.FC = () => {
    return (
        <div className='p-2 text-white'>
            <header className='text-2xl font-bold my-2'>About this App</header>
            <article className='text-xl my-1'>
            Introducing our innovative decentralized application (DApp) built on the Solana blockchain, designed to revolutionize the way people share and discover recipes. Our Solana Recipe Sharing DApp is a cutting-edge platform that brings together food enthusiasts, home chefs, and culinary experts from around the world in a secure, efficient, and decentralized ecosystem.
            </article>
            <article className=''>
                <div className='text-lg font-semibold my-2'>Available Features</div>
                <ul className='m-2'>
                    <li className=''>- Connect to Solana Wallet</li>
                    <li className=''>- Create New Recipe</li>
                    <li className=''>- View Recipe</li>
                </ul>
                <div className='text-lg font-semibold my-2'>Features to be Implemented in the Future</div>
                <ul className='m-2'>
                    <li className=''>- Able to create new recipe with image(if possible)</li>
                    <li className=''>- Able to save recipes to favorites</li>
                    <li className=''>- Able to gain sol if owned recipe is saved by another user</li>
                    <li className=''>- Can edit recipes</li>
                    <li className=''>- Can delete recipes</li>
                    <li className=''>- Add date for easier sorting</li>
                </ul>
                <div className='text-[#ED1D24]'>
                <div className='text-lg font-semibold my-2'>Bugs to fix and improvements</div>
                    <ul className='m-2'>
                        <li className=''>- Not fixed order of data</li>
                        <li className=''>- Needs to reload to see output for creating recipe</li>
                        <li className=''>- Sometimes the ingredients/equipments entered are not stored</li>
                        <li className=''>- Better design</li>
                    </ul>
                </div>
            </article>
        </div>
    )
}

export default About
