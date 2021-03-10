import React, { useState, useContext } from "react";
import { Card, Container, Button, Row, Col, ButtonToolbar } from "react-bootstrap";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "../../styles/index.scss";
import { Context } from "../store/appContext";

export const Films = props => {
	const { store, actions } = useContext(Context);

	return (
		<Container className="container" fluid>
			<Row>
				{props.data.map((element, index) => {
					return (
						<Col md={4} className="mt-2 mb-1" key={index}>
							<Card>
								<Link to={`/descriptionFilms/${index}`}>
									<Card.Img
										variant="top"
										src="https://cdn.themedizine.com/2020/08/studi-gibli-mejores-peliculas.jpg"
									/>
								</Link>

								{/* <Card.Body>
									<Card.Title className="text-center">{element.title}</Card.Title>
								</Card.Body> */}

								<Card.Footer>
									<ButtonToolbar
										className="justify-content-between"
										aria-label="Toolbar with Button groups">
										{/* <Link to={`/descriptionFilms/${index}`}>
											<Button variant="primary">Learn More</Button>
										</Link>  */}
										<Card.Text>
											<tr>
												<td>
													<strong>Title: {element.title} </strong>
												</td>
											</tr>
										</Card.Text>
										<Link onClick={() => actions.addFavorite(element.name, "people")}>
											<Button variant="outline-warning">
												<i className="far fa-heart" />
											</Button>
										</Link>
									</ButtonToolbar>
								</Card.Footer>
							</Card>
						</Col>
					);
				})}
			</Row>
		</Container>
	);
};

Films.propTypes = {
	data: PropTypes.string
};
