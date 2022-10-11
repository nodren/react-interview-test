import { FC, useEffect } from 'react'
import { Container } from 'react-bootstrap'

import { useAppSelector } from '../../utils/hooks'
import { fetchUsersAsync, getUsers } from '../../redux/user/userSlice'
import { useAppDispatch } from '../../utils/hooks'
import UserListItem from '../userListItem/UserListItem'

import CSS from './Users.module.css'

const Users: FC = () => {
	const dispatch = useAppDispatch()
	useEffect(() => {
		dispatch(fetchUsersAsync({}))
	}, [])

	const users = useAppSelector(getUsers)

	return (
		<Container className={CSS.container}>
			{users.map((user) => (
				<UserListItem user={user} key={user.email}/>
			))}
		</Container>
	)
}

export default Users
