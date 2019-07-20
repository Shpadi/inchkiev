import axios from 'axios'

export default {
  getUser () {
    return axios.get('https://uinames.com/api/?ext&amount=5')
  }
}
