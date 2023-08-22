import { Colors } from "../colors/colors"

  export const gifHandler = (str) => {
     const gifName = removeDash(str)
     const gifURL = `https://projectpokemon.org/images/normal-sprite/${gifName}.gif`
     return gifURL
   }

   const removeDash = (str) => {
    if(str.includes("-") && str.includes("null") || str.includes("tapu")){
      return str.split("-").join("")
    } else if(str.includes("-") && !str.includes("-o")){
      return str.slice(0, str.indexOf("-"))
    } else{
      return str
    }
   }

   export  const ColorPicker = (type) => {
    const {type: {name}} = type;
    return Colors[name];
   }

   export const capitalize = (str) => {
    //take the first letter of string and toUpperCase it
    let firstChar = str.charAt(0).toUpperCase()
    //take the rest of the string and concatenate first char onto it
    let capitalizedStr = firstChar + str.slice(1, str.length)
    //return new str
    return capitalizedStr
  }
