import Card from '../card/Card'
import {ChangeEvent, useState} from 'react'



export default function Editfield() {

    const [front, setFront] = useState<stateFront>({
        title:'',
        profession:''
    })

    const handleChangeFront = (e: ChangeEvent<HTMLInputElement>) => {
        let {value,name} = e.target;
        setFront({...front, [name]:value})
    }


    const [back, setBack] = useState<stateBack>({
        description:'',
        socialMedia:'',
        mail:'',
        siteWeb:''
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
                <input onChange={handleChangeFront} placeholder="Titulo principal" type="text" name='title'/>
                <input onChange={handleChangeFront} placeholder="Frase o eslogan" type="text" name='profession'/>
            </div>
            <div className="editBack">
                <h2>Dorso de la tarjeta</h2>
                <textarea onChange={handleChangeBack} maxLength={110} placeholder="breve descripcion o especialidad" name='description'/>
                <input onChange={handleChangeBack} placeholder="red social" type="text" name='socialMedia'/>
                <input onChange={handleChangeBack} placeholder="correo" type="text" name='mail'/>
                <input onChange={handleChangeBack} placeholder="sitio web" type="text" name='siteWeb'/>
            </div>
        </section>
        <Card frontCard={front}  backCard={back}/>
    </>
  )
}
