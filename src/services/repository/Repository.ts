import axios from 'axios'
import { BASE_URL, REQUEST_TIMEOUT } from '../../helpers/constants'

// const baseDomain = 'https://service.deepview.social'
// const baseURL = `${baseDomain}/api/v1`
export default axios.create({
  baseURL: BASE_URL,
  timeout: REQUEST_TIMEOUT
})
