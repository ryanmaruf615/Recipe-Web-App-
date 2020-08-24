import React, {Component, Fragment} from 'react';
import {Container,Row,Col} from "react-bootstrap";


class RecipeDetails extends Component {
    render() {
        return (
            <Fragment>
                <Container>
                    <Row>
                        <Col lg={6} md={6} sm={12}>
                        <img className="Img" src="https://c.ndtvimg.com/2020-04/6bpknrd8_chicken_625x300_10_April_20.jpg"/>
                        </Col>

                        <Col lg={6} md={6} sm={12}>
                        <h2 className="RecipeTitle">Roast Chicken Recipe</h2>
                            <p>Easter commemorates the Resurrection of Jesus Christ after 40 days of Lent
                                (period of fasting) and as we know it, there is a close association
                                with food. To celbrate the festival, here's a simple roast chicken
                                recipe that you can try at home.
                            </p>
                            <Row>
                                <Col lg={6} md={6} sm={12}>
                                    <h2 className="RecipeTitle">Ingredients Of Roast Chicken</h2>
                                    <ul>
                                        <li className="RecepiDescription">1x1 kg/ 2lbs whole chicken</li>
                                        <li className="RecepiDescription">2 medium onions</li>
                                        <li className="RecepiDescription">2 Carrots</li>
                                        <li className="RecepiDescription">2 Celery sticks</li>
                                        <li className="RecepiDescription">1 bulb garlic</li>
                                        <li className="RecepiDescription">nfused cold pressed virgin coconut oil
                                            – curry coriander</li>
                                    </ul>
                                </Col>

                                <Col lg={6} md={6} sm={12}>
                                    <h2 className="RecipeTitle">How to Make Roast Chicken</h2>
                                    <ul>
                                        <li className="RecepiDescription">Preheat the oven to 240°C.</li>
                                        <li className="RecepiDescription">Remove the chicken from the fridge 30 minutes before you want to cook it, to let it come up to room temperature.</li>
                                        <li className="RecepiDescription">Drizzle the chicken with curry corriander infused virgin coconut oil and season well with sea salt and black pepper, then rub all over the bird.</li>
                                        <li className="RecepiDescription">Place the tray in the oven, then turn the heat down immediately to 200°C and cook for 1 hour 20 minutes.</li>
                                    </ul>
                                </Col>
                            </Row>

                        </Col>
                    </Row>
                </Container>

            </Fragment>
        );
    }
}

export default RecipeDetails;