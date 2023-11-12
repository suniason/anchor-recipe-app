import { Program } from "@coral-xyz/anchor"
import { Connection, PublicKey } from "@solana/web3.js"
import { ReactNode } from "react"
import { PhantomProvider } from "./phantom"

export interface ChildrenProps {
  children: ReactNode
}

export interface AppContextType {
  wallet: string
  page: number
  connected: boolean
  connection: Connection|null
  setWallet: React.Dispatch<React.SetStateAction<string>>
  setPage: React.Dispatch<React.SetStateAction<number>>
  setConnected: React.Dispatch<React.SetStateAction<boolean>>
  setConnection: React.Dispatch<React.SetStateAction<Connection|null>>
}

export interface Posts{
  recipes: Recipe[]
}

export interface Recipe{
    author : string
    name : string
    ingredients : string
    equipments : string
    procedure : string
}

export type IProgram = Program<RecipeApp>;

export type RecipeApp = {
    version: "0.1.0";
    name: "anchor_recipe_app"
    instructions: [
      {
        name: "createRecipe"
        accounts: [
          {
            name: "recipe"
            isMut: true
            isSigner: false
          },{
            name: "owner"
            isMut: true
            isSigner: true
          },{
            name: "systemProgram"
            isMut: false
            isSigner: false
          }
        ]
        args: [
          {
            name: "name"
            type: "string"
          },{
            name: "ingredients"
            type: "string"
          },{
            name: "equipments"
            type: "string"
          },{
            name: "procedure"
            type: "string"
          }
        ]
      },
    ]
    accounts: [
      {
        name: "recipe"
        type: {
          kind: "struct"
          fields: [
            {
              name: "firstName"
              type: "publicKey"
            },{
              name: "name"
              type: "string"
            },{
              name: "ingredients"
              type: "string"
            },{
              name: "equipments"
              type: "string"
            },{
              name: "procedure"
              type: "string"
            }
          ]
        }
      }
    ]
  }

