import { useState } from "react"


//props.onNewCategory
export const AddCategory = ({ onNewCategory }) => {

    //hooks
    const [inputValue, setInputValue] = useState("hola")

    const onInputChange = (event) => {
        setInputValue(event.target.value)    
    }

    const onSubmitFuncion = (event) => {
        event.preventDefault();
        if (inputValue.trim().length <= 1) {
          return; 
        }
        //setcategories( categories => [ inputValue, ...categories ]);
        onNewCategory( inputValue.trim() )
        setInputValue("")
      }
  return (

    // <form onSubmit={ (event) => onSubmitFuncion(event)}>
      <form onSubmit={ onSubmitFuncion }>
        <input 
        type="text" 
        placeholder="gift"
        value={ inputValue }
        onChange={ onInputChange }
        //onChange={ (event) => onInputChange(event)}
        />
    </form>
 
  )
}
