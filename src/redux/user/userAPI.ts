import axios from 'axios'

export async function fetchUsers({limit = 20, page = 1}: {limit?: number, page?: number }) {
	return await axios.get(`https://randomuser.me/api/?results=${limit}&seed=abc&nat=us&page={page}`)
}
