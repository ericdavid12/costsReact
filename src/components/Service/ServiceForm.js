import { useState } from 'react'

import Input from '../Form/Input'
import SubmitButton from '../Form/SubmitButton'


import styles from '../project/ProjectForm.module.css'

function ServiceForm({handleSubmit, btnText, projectData}){


    const [service, setSevice] = useState({})


    const submit = (e) => {
        e.preventDefault()
        projectData.services.push(service)
        handleSubmit(projectData)

    }

    function handleChange(e){
        setSevice({ ...service,[e.target.name]: e.target.value})

    }


    return(
        <form onSubmit={submit} className={styles.form}>
            <Input  
                type="text" 
                text="Nome do Serviço"
                name="name"
                placeholder='Insira o nome do serviço'
                handleOnChange={handleChange}
            />
                <Input  
                type="number" 
                text="Custo do Serviço"
                name="cost"
                placeholder='Insira o valor total do serviço'
                handleOnChange={handleChange}
            />
                <Input  
                type="text" 
                text="Descrição do Serviço"
                name="description"
                placeholder='Descreva o serviço'
                handleOnChange={handleChange}
            />
            <SubmitButton text={btnText} />

        </form>
    )

}

export default ServiceForm