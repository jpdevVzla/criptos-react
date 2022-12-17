import styled from "@emotion/styled"

const Contenedor = styled.div`
    color: #FFF;
    font-family: 'Lato', sans-serif;

    display: flex;
    align-items: center;
    gap: 1rem;
    margin-top: 30px;
`
const Imagen = styled.img`
       display: block;
       width: 120px;
`

const Texto = styled.p`

`
const Precio = styled.p`
    font-size: 24px;
    span{
        font-weight: 700;
    }
`

const Resultado = ({resultado}) => {
    const {PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE} = resultado
  return (
    <Contenedor>
        <Imagen 
        src={`https://cryptocompare.com/${IMAGEURL}`} 
        alt="imagen cripto" 
        />
        <div>
        <Precio>El precio es de: <span>{PRICE}</span></Precio>
        <Texto>El precio más alto del dia es de: <span>{HIGHDAY}</span></Texto>
        <Texto>El precio más bajo del dia es de: <span>{LOWDAY}</span></Texto>
        <Texto>Variacion ultimas 24 horas es de  es de: <span>{CHANGEPCT24HOUR}</span></Texto>
        <Texto>Ultima Actualizacion es de: <span>{LASTUPDATE}</span></Texto>
        </div>

    </Contenedor>
  )
}

export default Resultado