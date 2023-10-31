import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import * as services from '../../../services/api_services';

function OrigenBtn(props) {
    const [show, setShow] = useState(false);
    const [data, setData] = useState(null);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    let info = props.dataAll.url;
    useEffect(() => {

        async function fetchData() {
            try {
                const result = await services.fetchData(props.dataAll.url);
                setData(result);
            } catch (error) {
                console.error(error);
            }
        }
        fetchData();
    }, [props.dataAll.url]);

    return (
        <>
            <Button variant="primary" onClick={handleShow} className="me-2">
                Origen
            </Button>
            <Offcanvas show={show} onHide={handleClose} placement='bottom'>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>{
                        info ?
                            data ?
                                data.name
                                : 'Loading...'
                            : 'No hay datos'}</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    {info ? data ? (
                        <div>
                            <p>Nombre: {data.name}</p>
                            <p>Dimensión: {data.dimension}</p>
                            <p>Habitantes: {data.residents.length}</p>
                        </div>
                    ) : (
                        <p>Loading data...</p>
                    ) : <p>No hay datos</p>}
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

export default OrigenBtn;
