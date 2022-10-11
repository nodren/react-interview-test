import React, { FC } from "react";
import { Container, Navbar } from "react-bootstrap";

const Header: FC = () => {
	return (
		<Navbar bg="dark" variant="dark">
			<Container>
				<Navbar.Brand>eVRM Interview Project</Navbar.Brand>
			</Container>
		</Navbar>
	);
};

export default Header;
