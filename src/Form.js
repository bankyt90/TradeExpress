import React, {useState} from 'react'

const Form = () => {
    const [FullName,setFullName ] = useState('')
    const [Email,setEmail ] = useState('')
    const [people, setPeople] = useState([])
    function handleSubmit(e){
        e.preventDefault()
        // console.log(FullName, Email)
        // console.log('hello world')
        if (FullName && Email) {
            const person = {id: new Date().getTime().toString(),FullName:FullName, Email:Email}
            console.log(person);
            setPeople((people) => {
                return[...people, person]
            })
            setFullName('')
            setEmail('')
        }
    }

    let handleFullName= (e) => {
        setFullName(e.target.value)
    }

    let handleEmail = function (e){
        setEmail(e.target.value)
    }

    function removeInfo(id){
        let remove= people.filter((person) => person.id !==id);
        setPeople(remove) 
    }
  return (
    <div>
        <form className='form' onSubmit={handleSubmit}>
            <div className='form-control'>
            <label htmlFor='FullName'>FullName:</label>
            {/* <input type="text" id='fullName' value={FullName} onChange={(e) => setFullName(e.target.value)}/> */}
            <input type="text" id='fullName' value={FullName} onChange={handleFullName}/>
            </div>
            <div className='form-control'>
            <label htmlFor='Email'>Email:</label>
            {/* <input type="email" id='Email' value={Email} onChange={(e) => setEmail(e.target.value)}/> */}
            <input type="email" id='Email' value={Email} onChange={handleEmail}/>
            </div>
            <button className='btn'>Add client</button>
        </form>

        {people.map((person) => {
            const {id, FullName, Email} = person
            return(
                <div key={id}>
                    <h2>{FullName}</h2>
                    <h2>{Email}</h2>
                    <button onClick={() => removeInfo(person.id)}>Clear</button>
                </div>
            )
        })}
    </div>
  )
}

export default Form