import { RecipeApp } from "./types";

export const RecipeIdl : RecipeApp =  {
    version: "0.1.0",
    name: "recipe_anchor_app",
    instructions: [
      {
        name: "createRecipe",
        accounts: [
          {
            name: "recipe",
            isMut: true,
            isSigner: true,
          },{
            name: "owner",
            isMut: true,
            isSigner: true
          },{
            name: "systemProgram",
            isMut: false,
            isSigner: false
          }
        ],
        args: [
          {
            name: "name",
            type: "string",
          },{
            name: "ingredients",
            type: "string",
          },{
            name: "equipments",
            type: "string",
          },{
            name: "procedure",
            type: "string",
          }
        ]
      },
    ],
    accounts: [
      {
        name: "Recipe",
        type: {
          kind: "struct",
          fields: [
            {
              name: "author",
              type: "publicKey"
            },{
              name: "name",
              type: "string"
            },{
              name: "ingredients",
              type: "string"
            },{
              name: "equipments",
              type: "string"
            },{
              name: "procedure",
              type: "string"
            }
          ]
        }
      }
    ],
    "metadata": {
      "address": "6xpX3GHGBP7JcEAMuGhhFLxQy16RMESnNjnJteiSHu8X"
    }
  }

