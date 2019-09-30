import axios from 'axios'

class API {
  getData = () => {
    return axios
      .get('http://5d8a1f54b2568e0014d884cb.mockapi.io/api/v1/accounts')
      .then(function(response) {
        if (response.status === 200 && response != null) {
          var data = response.data
          return data
        } else {
          throw new Error('Empty data')
        }
      })
      .catch(function(error) {
        console.log(error)
        return [] // Return empty array in case error response.
      })
  }
}

export default API;