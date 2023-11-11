import React from 'react'

const About:React.FC = () => {
    return (
        <div>
            <header>About this app</header>
            <article>
            Introducing our innovative decentralized application (DApp) built on the Solana blockchain, designed to revolutionize the way people share and discover recipes. Our Solana Recipe Sharing DApp is a cutting-edge platform that brings together food enthusiasts, home chefs, and culinary experts from around the world in a secure, efficient, and decentralized ecosystem.
            </article>
            <article>
                <div>Available Features</div>
                <ul>
                    <li>Connect to Solana Wallet</li>
                    <li>Create New Recipe</li>
                    <li>View Recipe</li>
                </ul>
                <div>Features to be Implemented in the Future</div>
                <ul>
                    <li>Able to create new recipe with image</li>
                    <li>Able to save recipes to favorites</li>
                    <li>Able to gain sol if owned recipe is saved</li>
                    <li>Can edit recipes</li>
                    <li>Can delete recipes</li>
                </ul>
            </article>
        </div>
    )
}

export default About
