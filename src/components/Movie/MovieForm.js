import React, { useState } from "react"

const MovieForm =({addMovie})=>{

    const [newMovie, setNewMovie] = useState({});
    const [errors, setErrors] = useState({});


const handleSubmit=(event)=>{
event.preventDefault();
const valid = validate();
if(valid){
    addMovie(newMovie);
}
}

const handleChange=(event)=>{
    setNewMovie({...newMovie, [event.target.name] : event.target.value})
}

const validate = ()=>{
let formErrors = {};
let isValid = true;
if(!newMovie.imageUrl || newMovie.imageUrl === ''){
    formErrors.imageUrl = 'Image url is required!'
    isValid  = false
}
if(!newMovie.title || newMovie.title === ''){
    formErrors.title = 'Title is required!'
    isValid  = false

}
if(!newMovie.subtitle || newMovie.subtitle === ''){
    formErrors.subtitle = 'Subitle is required!'
    isValid  = false

}
if(!newMovie.description || newMovie.description === ''){
    formErrors.description = 'Description is required!'
    isValid  = false

}

setErrors(formErrors);
return isValid;
}
  return(<form onSubmit={handleSubmit}>
<input type="text" name="imageUrl" value={newMovie.imageUrl} placeholder="Image url" onChange={handleChange}></input>
{errors && errors.imageUrl && (<span>{errors.imageUrl}</span>)}
<input type="text" name="title" value={newMovie.title} placeholder="Title" onChange={handleChange}></input>
{errors && errors.title && (<span>{errors.title}</span>)}

<input type="text" name="subtitle" value={newMovie.subtitle} placeholder="Subtitle" onChange={handleChange}></input>
{errors && errors.subtitle && (<span>{errors.subtitle}</span>)}

<input type="text" name="description" value={newMovie.description} placeholder="Description" onChange={handleChange}></input>
{errors && errors.description && (<span>{errors.description}</span>)}

<button type="submit">Submit</button>
    </form>)
}

export default MovieForm;