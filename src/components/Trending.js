import { Card, Col, Container, Image, Row } from "react-bootstrap"
import partikelirImage from '../assets/images/trending/partikelir.jpg'
import alienImage from '../assets/images/trending/alien.jpg'
import bumiitubulatImage from '../assets/images/trending/bumiitubulat.jpg'
import langitbiruImage from '../assets/images/trending/langitbiru.jpg'
import laskarpelangiImage from '../assets/images/trending/laskarpelangi.jpg'
import ranah3warnaImage from '../assets/images/trending/ranah3warna.jpg'
import tekatekitikaImage from '../assets/images/trending/tekatekitika.jpg'
import malikelsaImage from '../assets/images/trending/malikelsa.jpg'

const Trending = () => {
    return (
        <div id="trending">
            <Container>
                <br />
                <br />
                <h1 className="text-white text-center">Trending Movies</h1>
                <Row>
                    <Col md={4}>
                        <Card className="bg-dark movieImage">
                            <Image src={partikelirImage} alt="Partikelir image" className="images" />
                            <div className="p-2 m-1 text-white">
                                <Card.Title className="text-center">Partikelir</Card.Title>
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
                            <Image src={alienImage} alt="Partikelir image" className="images" />
                            <div className="p-2 m-1 text-white">
                                <Card.Title className="text-center">Alien</Card.Title>
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
                            <Image src={bumiitubulatImage} alt="Partikelir image" className="images" />
                            <div className="p-2 m-1 text-white">
                                <Card.Title className="text-center">Bumi Itu Bulat</Card.Title>
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
                            <Image src={langitbiruImage} alt="Partikelir image" className="images" />
                            <div className="p-2 m-1 text-white">
                                <Card.Title className="text-center">Langit Biru</Card.Title>
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
                            <Image src={laskarpelangiImage} alt="Partikelir image" className="images" />
                            <div className="p-2 m-1 text-white">
                                <Card.Title className="text-center">Laskar Pelangi</Card.Title>
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
                            <Image src={ranah3warnaImage} alt="Partikelir image" className="images" />
                            <div className="p-2 m-1 text-white">
                                <Card.Title className="text-center">Ranah 3 Warna</Card.Title>
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
                            <Image src={tekatekitikaImage} alt="Partikelir image" className="images" />
                            <div className="p-2 m-1 text-white">
                                <Card.Title className="text-center">Teka Teki Tika</Card.Title>
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
                            <Image src={malikelsaImage} alt="Partikelir image" className="images" />
                            <div className="p-2 m-1 text-white">
                                <Card.Title className="text-center">Malik & Elsa</Card.Title>
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

export default Trending