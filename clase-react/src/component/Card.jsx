import Card from 'react-bootstrap/Card'
import Tags from './tags'


const MyCard = ({image, nombre, descripcion, raza, colorFondo}) => {
    return (
        <>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{nombre}</Card.Title>
                    <Card.Text>{descripcion}</Card.Text>
                    <Tags>
                        <Tags
                        raza = {raza}
                        colorFondo = {colorFondo}
                    />
                    </Tags>
                </Card.Body>
            </Card>
        </>
    )
}

export default MyCard