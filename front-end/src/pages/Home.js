import Form from '../components/Form'
import { useState } from "react";
import '../styles/Home.css'

import Input from '../components/Input';
import Select from '../components/Select';
import Result from '../components/Result'
const Home = () => {
    const [body, setBody] = useState({ "a": '', "b": '', "c": '', "measure": "cm" })
    const [show, setShow] = useState(false)
    const [result, setResult] = useState('')

    // Atualiza o hook body com o valores digitados nos campos de input
    function handleChange(e) {
        const name = e.target.name;
        const value = e.target.value;
        setBody(values => ({ ...values, [name]: value }))
    }
    // Ao clicar em CALCULAR faz uma simples validação dos campos e caso passe, envia o payload ao back end

    function handleSubmit(e) {
        e.preventDefault();
        validateField()
    }
    function validateField() {
        if ((body.a !== '' && body.c !== '') || (body.a !== '' && body.b !== '') || (body.b !== '' && body.c !== '')) {
            getData()
        }
        else return alert('Pelo menos dois campos são necessários para o cálculo')
    }

    // Como no desafio se tratava de apenas uma requisição, foi usado query string parameters com os valores dos campos do hook body
    function getData() {
        fetch(`/get?a=${body.a}&b=${body.b}&c=${body.c}`).then(response => {
            if (response.status === 200) {
                return response.json()
            }
        })
            .then(data => {
                console.log(data)
                setResult(data)
                setShow(true)
            })
            .then(error => console.log(error))

    }

    return (
        <div className="home">
            <Form
                onClick={handleSubmit}
                onSubmit={handleSubmit}
            >
                <Input
                    placeholder={'da Hipotenusa'}
                    onChange={handleChange}
                    name="a"
                    value={body.a || ''}
                >
                </Input>
                <Input
                    placeholder={'do Cateto Oposto'}
                    onChange={handleChange}
                    name="b"
                    value={body.b || ''}
                >
                </Input>
                <Input
                    placeholder={'do Cateto Adjacente'}
                    onChange={handleChange}
                    name="c"
                    value={body.c || ''}
                >
                </Input>
                <Select
                    onChange={handleChange}
                    name="measure"
                    value={body.measure || ''} />
            </Form>
            {show &&

                <Result>

                    {result ? <div>{result + " " + body.measure}</div>
                        :
                        <div>Ainda não é possível verificar se é um triângulo pitagórico</div>
                    }
                    </Result>}
        </div>
    );
}

export default Home;