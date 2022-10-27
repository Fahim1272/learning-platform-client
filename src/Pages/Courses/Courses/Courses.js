
import { Col, Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import LeftSideNav from '../../LeftSideNav/LeftSideNav';

const Courses = () => {
    const  selectCourse = useLoaderData();
    return (
        <div>
            <Container>
                <Row>
                    <Col lg="4">
                        <LeftSideNav></LeftSideNav>
                    </Col>
                    <Col lg="8">
                        <h2>Main Content {selectCourse.length} </h2>
                        
                    </Col>

                </Row>
            </Container>
        </div>
    );
};

export default Courses;