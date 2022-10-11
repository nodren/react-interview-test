import { FC } from 'react'
import { Card, Col, Container, Image, Row } from 'react-bootstrap'
import { User } from '../../interfaces'

interface Props {
	user: User
}
const UserListItem: FC<Props> = ({user}) => {
	return (
		<Card>
			<Card.Body>
				<Container>
					<Row>
						<Col md={6} lg={6} sm={6} xl={6} xxl={6} xs={6}>
							<Card.Title>{`${user.name.first} ${user.name.last}`}</Card.Title>
						</Col>
						<Col>
							<Image thumbnail roundedCircle src={user.picture.thumbnail} alt={`${user.name.first} ${user.name.last}`}/>
						</Col>
					</Row>
				</Container>
				<Container>
					<Row>
						<Col>
							<Card.Subtitle>{user.email}</Card.Subtitle>
						</Col>
						<Col>
							<Card.Subtitle>{user.cell}</Card.Subtitle>
						</Col>
					</Row>
				</Container>
			</Card.Body>
		</Card>
	)
}

export default UserListItem
