import { Card, Col, ListGroup, Row } from "react-bootstrap";
import OrigenBtn from "./Origen";

function CardReturn(props) {
    return (
        <Card className="card">
            <Row>
                <Col style={{ display: 'flex', alignItems: 'center', margin: '10px' }}>
                    <Card.Img src={props.dataImage} />
                </Col>
                <Col>
                    <Card.Body>
                        <Card.Title>{props.dataName}</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                    </Card.Body>
                    <ListGroup>
                        <ListGroup.Item style={{ backgroundColor: 'transparent', borderColor: 'transparent' }}><b>Especie:</b> {props.dataSpecie}</ListGroup.Item>
                        <ListGroup.Item style={{ backgroundColor: 'transparent', borderColor: 'transparent' }}><b>Estado:</b> {props.dataStatus}</ListGroup.Item>
                        <ListGroup.Item style={{ backgroundColor: 'transparent', borderColor: 'transparent' }}><b>Genero:</b> {props.dataGender}</ListGroup.Item>
                        <ListGroup.Item style={{ backgroundColor: 'transparent', borderColor: 'transparent' }}><b>Episodios:</b> {props.dataEpisodes}</ListGroup.Item>
                    </ListGroup>
                    <Card.Body>
                        <OrigenBtn
                            dataAll={props.dataOrigin} />
                    </Card.Body>
                </Col>
            </Row>
        </Card >
    )
}

export default CardReturn;