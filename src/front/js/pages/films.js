import React, { useState, useContext } from "react";
import { Card, Container, Button, Row, Col, ButtonToolbar } from "react-bootstrap";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "../../styles/index.scss";
import { Context } from "../store/appContext";

export const Films = props => {
	const { store, actions } = useContext(Context);
	let [black, setBlack] = useState("far fa-heart");

	let blackColor = element => {
		console.log(element);
		if (black == "far fa-heart") {
			setBlack("fas fa-heart");
		} else {
			setBlack("far fa-heart");
		}
	};

	// handleClick() {
	// 	this.setState(function(prevState) {
	// 		return {isToggleOn: !prevState.isToggleOn};
	// 	});
	// }

	return (
		<div className="animate__animated animate__fadeInDownBig">
			<Container className="container fluid">
				<Row>
					{props.data.map((element, index) => {
						return (
							<Col md={4} className="mt-2 mb-1" key={index}>
								<Card>
									<div className="overflow">
										<Link to={`/descriptionFilms/${index}`}>
											<Card.Img
												className="card-img-top"
												src="https://cdn.themedizine.com/2020/08/studi-gibli-mejores-peliculas.jpg"
											/>
										</Link>
									</div>
									<Card.Footer>
										<ButtonToolbar
											className="justify-content-between"
											aria-label="Toolbar with Button groups">
											<Card.Text>
												<tr>
													<td>
														<strong>Title: {element.title} </strong>
													</td>
												</tr>
											</Card.Text>
											<Link
												onClick={() => {
													blackColor(element.title);
													actions.addFavorite(element.title, "films");
												}}>
												<Button variant="outline-warning">
													{/* {this.state.isToggleOn ? <i className="far fa-heart" id={black} /> : <i class="fas fa-heart"></i>}
                                                <i className="far fa-heart" id={black} /> */}
													<i className={black} />
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
		</div>
	);
};

Films.propTypes = {
	data: PropTypes.string
};
