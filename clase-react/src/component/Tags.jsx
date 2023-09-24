import Badge from 'react-bootstrap/Badge'

const Tags = ({texto, colorFondo}) => {
    return (
        <>
            <Badge bg={colorFondo}>{texto}</Badge>
        </>
    )
}

export default Tags