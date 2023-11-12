import { ReactNode } from "react"

export interface ChildrenProps {
  children: ReactNode
}

export interface AppContextType {
  page: number
  isCreating: boolean
  setPage: React.Dispatch<React.SetStateAction<number>>
  setIsCreating: React.Dispatch<React.SetStateAction<boolean>>
}

export interface Posts{
  recipes: any
}

export interface Recipe{
    author : string
    name : string
    ingredients : string
    equipments : string
    procedure : string
}

export type RecipeApp ={
  "version": "0.1.0",
  "name": "recipe_anchor_app",
  "instructions": [
    {
      "name": "createRecipe",
      "accounts": [
        {
          "name": "recipe",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "owner",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "name",
          "type": "string"
        },
        {
          "name": "ingredients",
          "type": "string"
        },
        {
          "name": "equipments",
          "type": "string"
        },
        {
          "name": "procedure",
          "type": "string"
        }
      ]
    }
  ],
  "accounts": [
    {
      "name": "recipe",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "author",
            "type": "publicKey"
          },
          {
            "name": "name",
            "type": "string"
          },
          {
            "name": "ingredients",
            "type": "string"
          },
          {
            "name": "equipments",
            "type": "string"
          },
          {
            "name": "procedure",
            "type": "string"
          }
        ]
      }
    }
  ],
  "metadata": {
    "address": "BnbRLAnvdutKLxFvtcsT5fCdgeMoV1reHfag2TeEreCA"
  }
}