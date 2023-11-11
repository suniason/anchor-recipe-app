import { RecipeApp } from "./types";

export const RecipeIdl : RecipeApp =  {
    version: "0.1.0",
    name: "anchor_recipe_app",
    instructions: [
      {
        name: "createRecipe",
        accounts: [
          {
            name: "recipe",
            isMut: true,
            isSigner: false,
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
        name: "recipe",
        type: {
          kind: "struct",
          fields: [
            {
              name: "firstName",
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
    ]
  }

