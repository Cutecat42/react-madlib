import React, {useState} from "react";

const MadlibForm = ({setData}) => {
    const initialState = {
        name: "",
        color: "",
        colorTwo: "",
        colorThree: "",
        room: "",
        number: "",
        numberTwo: ""
    }

    const [formData, setFormData] = useState(initialState)

    const handleChange = (e) => {
        const {name, value} = e.target
        setFormData(fData=>({
            ...fData,
            [name]: value         
        }))
    }

    function setDataForParent(e) {
        e.preventDefault()
        setData(formData)
    }

    
    return (
        <form onSubmit={setDataForParent}>

        <label htmlFor="name">Girl's Name</label>
        <input type="text" onChange={handleChange} id="name" name="name" value={formData.name}/>

        <label htmlFor="color">Color</label>
        <input type="text" onChange={handleChange} id="color" name="color" value={formData.color}/>
        
        <label htmlFor="colorTwo">Another Color</label>
        <input type="text" onChange={handleChange} id="colorTwo" name="colorTwo" value={formData.colorTwo}/>

        <label htmlFor="colorThree">One More Color</label>
        <input type="text" onChange={handleChange} id="colorThree" name="colorThree" value={formData.colorThree}/>

        <label htmlFor="room">A Room</label>
        <input type="text" onChange={handleChange} id="room" name="room" value={formData.room}/>

        <label htmlFor="number">A Number</label>
        <input type="text" onChange={handleChange} id="number" name="number" value={formData.number}/>

        <label htmlFor="numberTwo">Another Number</label>
        <input type="text" onChange={handleChange} id="numberTwo" name="numberTwo" value={formData.numberTwo}/>

        <button>Create Story</button>
        </form>
    )
}

export default MadlibForm;