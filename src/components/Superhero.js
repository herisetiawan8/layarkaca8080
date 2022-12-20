import { Card, Col, Container, Image, Row } from "react-bootstrap"
import batmanImage from '../assets/images/superhero/batman.jpg'
import ironmanImage from '../assets/images/superhero/ironman.jpg'
import jokerImage from '../assets/images/superhero/joker.jpg'
import movie1Image from '../assets/images/superhero/movie1.jpg'
import spidermanImage from '../assets/images/superhero/spiderman.jpg'
import spiderman1Image from '../assets/images/superhero/spiderman1.jpg'

const SuperHero = () => {
    return (
        <div id="superhero">
            <Container>
                <br />
                <br />
                <h1 className="text-white text-center">Superhero Movies</h1>
                <Row>
                    <Col md={4}>
                        <Card className="bg-dark movieImage">
                            <Image src={batmanImage} alt="Partikelir image" className="images" />
                            <div className="p-2 m-1 text-white">
                                <Card.Title className="text-center">Batman</Card.Title>
                                <Card.Text className="text-left">
                                    This is a wider card with supporting text below as a natural lead-in
                                    to additional content.
                                </Card.Text>
                                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="bg-dark movieImage">
                            <Image src={ironmanImage} alt="Partikelir image" className="images" />
                            <div className="p-2 m-1 text-white">
                                <Card.Title className="text-center">Ironman</Card.Title>
                                <Card.Text className="text-left">
                                    This is a wider card with supporting text below as a natural lead-in
                                    to additional content.
                                </Card.Text>
                                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="bg-dark movieImage">
                            <Image src={jokerImage} alt="Partikelir image" className="images" />
                            <div className="p-2 m-1 text-white">
                                <Card.Title className="text-center">Joker</Card.Title>
                                <Card.Text className="text-left">
                                    This is a wider card with supporting text below as a natural lead-in
                                    to additional content.
                                </Card.Text>
                                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="bg-dark movieImage">
                            <Image src={movie1Image} alt="Partikelir image" className="images" />
                            <div className="p-2 m-1 text-white">
                                <Card.Title className="text-center">Joker Part 2</Card.Title>
                                <Card.Text className="text-left">
                                    This is a wider card with supporting text below as a natural lead-in
                                    to additional content.
                                </Card.Text>
                                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="bg-dark movieImage">
                            <Image src={spidermanImage} alt="Partikelir image" className="images" />
                            <div className="p-2 m-1 text-white">
                                <Card.Title className="text-center">Spiderman</Card.Title>
                                <Card.Text className="text-left">
                                    This is a wider card with supporting text below as a natural lead-in
                                    to additional content.
                                </Card.Text>
                                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="bg-dark movieImage">
                            <Image src={spiderman1Image} alt="Partikelir image" className="images" />
                            <div className="p-2 m-1 text-white">
                                <Card.Title className="text-center">Spiderman Part 2</Card.Title>
                                <Card.Text className="text-left">
                                    This is a wider card with supporting text below as a natural lead-in
                                    to additional content.
                                </Card.Text>
                                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default SuperHero