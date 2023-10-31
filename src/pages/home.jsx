import { Card, ListGroup } from "react-bootstrap";

function Home() {
    return (
        <>
            <h1>Home</h1>
            <div style={{display:'flex',justifyContent:'center'}}>
                <Card style={{ width: '18rem' }}>
                    <ListGroup variant="flush">
                        <ListGroup.Item action='true' href="./ram">RAM</ListGroup.Item>
                        <ListGroup.Item action='true' href="./login">Login / Register</ListGroup.Item>
                    </ListGroup>
                </Card>
            </div>
        </>
    )
}
export default Home;