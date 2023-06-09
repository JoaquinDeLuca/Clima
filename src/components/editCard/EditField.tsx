import Card from '../card/Card'
import {ChangeEvent, useState} from 'react'
import './editField.css'

export default function Editfield() {

    const [front, setFront] = useState<stateFront>({
        title:'Harry Potter',
        profession:'Actor profesional'
    })

    const handleChangeFront = (e: ChangeEvent<HTMLInputElement>) => {
        let {value,name} = e.target;
        setFront({...front, [name]:value})
    }

    const [back, setBack] = useState<stateBack>({
        phone:'0342678890',
        socialMedia:'Harrypotter/twitter',
        mail:'harrypotter@gmail.com',
        siteWeb:'www.harryactor.com'
    })

    const handleChangeBack = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
        let {value,name} = e.target;
        setBack({...back, [name]:value})
    }

  return (
    <>
        <section className="editSection">
            <div className="editFront">
                <h2>Frente de la tarjeta</h2>
                <input className='editInput' onChange={handleChangeFront} placeholder="Titulo principal" type="text" name='title'/>
                <input className='editInput' onChange={handleChangeFront} placeholder="Frase o eslogan" type="text" name='profession'/>
            </div>
            <div className="editBack">
                <h2>Dorso de la tarjeta</h2>
                <input className='editInput' onChange={handleChangeBack} placeholder="Telefono" type="text" name='phone'/>
                <input className='editInput' onChange={handleChangeBack} placeholder="red social" type="text" name='socialMedia'/>
                <input className='editInput' onChange={handleChangeBack} placeholder="correo" type="text" name='mail'/>
                <input className='editInput' onChange={handleChangeBack} placeholder="sitio web" type="text" name='siteWeb'/>
            </div>
        </section>
        <Card frontCard={front}  backCard={back}/>
    </>
  )
}
