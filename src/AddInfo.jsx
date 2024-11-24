
import {useState} from 'react'
import Select  from 'react-select'

function AddInfo(){

    const[formData,setFormData]=useState({
        name:'',
        email:'',
        phone:''
    })

    const[formError,setFormError]=useState({

    })

    const handleChange=(e)=>{
        
        setFormData((previous)=>({
            ...previous,
            [e.target.name]:e.target.value
        }))
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(formData);
        if(Object.keys(validation()).length!=0){
            setFormError(validation())
            console.log(validation())
            console.log('Invalid form submission')
            return;
        }
        console.log('Valid form submission')

    }

    const validation=()=>{
        const formError={};
        if(!formData.name.trim()){
            formError.name="Name must have some characters"
        }
        if(formData.phone.toString().length!=10 ){
            formError.phone="Phone must have 10 digits"
        }
        return formError;
    }

    return(
        <>
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" value={formData.name} id="name" onChange={handleChange}/>
            <p>{formError.name }</p>

            <label htmlFor="email">Email</label>
            <input type="email" value={formData.email} id="email" name="email" onChange={handleChange}/>
            <p>{formError.email}</p>

            <label htmlFor="phone">Phone</label>
            <input type="number" value={formData.phone} id="phone" name="phone" onChange={handleChange}/>
            <p>{formError.phone}</p>

            <button type='submit'>Submit</button>
            <Select></Select>
        </form>
        </>
    )
}

export default AddInfo;