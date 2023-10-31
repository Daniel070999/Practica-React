import React, { useState, useEffect } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import * as services from '../../../services/api_services';
import CardReturn from './CardReturn';
import { Pagination, Spinner } from 'react-bootstrap';

function BuildData() {
    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [allData, setAllData] = useState(null);

    useEffect(() => {
        getData(currentPage);
    }, [currentPage]);

    async function getData(page) {
        try {
            const result = await services.fetchData(`https://rickandmortyapi.com/api/character?page=${page}`);
            setAllData(result.info);
            setData(result.results);
        } catch (error) {
            console.error(error);
        }
    }

    function validatePage(num) {
        if (num >= 1 && num <= allData.pages) {
            setCurrentPage(num);
        }
    }

    return (
        <div>
            {
                data.length !== 0 ?
                    data.map((info) => (
                        <Accordion key={info.id}>
                            <Accordion.Item eventKey={info.id}>
                                <Accordion.Header>{info.name}</Accordion.Header>
                                <Accordion.Body className="body-acordion" style={{ display: 'flex', justifyContent: 'center' }}>
                                    <CardReturn
                                        dataName={info.name}
                                        dataSpecie={info.species}
                                        dataStatus={info.status}
                                        dataGender={info.gender}
                                        dataImage={info.image}
                                        dataEpisodes={info.episode.length}
                                        dataOrigin={info.origin}
                                    />
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    )) :
                    <div style={{display:'flex', justifyContent:'center'}}>
                        <Spinner animation="border" variant="primary" />
                    </div>
            }
            <Pagination className='pagiantion'>
                <Pagination.First
                    onClick={() => validatePage(1)}
                    disabled={currentPage === 1}
                />
                <Pagination.Prev
                    onClick={() => validatePage(currentPage - 1)}
                    disabled={currentPage === 1}
                />
                <Pagination.Item active>{currentPage}</Pagination.Item>
                <Pagination.Ellipsis />
                <Pagination.Item onClick={() => validatePage(10)}>{10}</Pagination.Item>
                <Pagination.Ellipsis />
                <Pagination.Item onClick={() => validatePage(20)}>{20}</Pagination.Item>
                <Pagination.Ellipsis />
                <Pagination.Item onClick={() => validatePage(30)}>{30}</Pagination.Item>
                <Pagination.Next
                    onClick={() => validatePage(currentPage + 1)}
                    disabled={currentPage === allData?.pages}
                />
                <Pagination.Last onClick={() => validatePage(allData.pages)}
                    disabled={currentPage === allData?.pages}
                />
            </Pagination>
        </div>
    )
}

export default BuildData;
