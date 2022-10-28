
import { Col, Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import LeftSideNav from '../../LeftSideNav/LeftSideNav';
import CourseCard from '../../Shared/CourseCard/CourseCard';

const Courses = () => {
    const  selectCourse = useLoaderData();
    return (
        <div>
            <Container>
                <Row className='mt-5 '>
                    <Col lg="4">
                        <LeftSideNav></LeftSideNav>
                    </Col>
                    <Col lg="8">
                            {
                              selectCourse.map(course => <CourseCard
                              key={course._id}
                              course={course}
                              ></CourseCard>)  
                            },
                            
                    </Col>

                </Row>
            </Container>
        </div>
    );
};

export default Courses;