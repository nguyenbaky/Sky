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

  getDataURL = (url) =>{
    return axios
      .get(url)
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

  putData = (data) =>{
    return axios({
      method: 'put',
      url : 'http://5d8a1f54b2568e0014d884cb.mockapi.io/api/v1/accounts',
      data: data
    })
    .then(response =>{
      resolve(response.data.data)
    },response =>  {this.handleEditError(response)})
    .catch(function(error) {
      console.log(error)
      return [] // Return empty array in case error response.
    })
  }

  getDataWithAccountParams = (account) =>
  {
    return axios
      .get('http://5d8a1f54b2568e0014d884cb.mockapi.io/api/v1/accounts', {
        params: {
          account: account
        }
      })
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

  postData = (data)=>{
    return axios
    .post('http://5d8a1f54b2568e0014d884cb.mockapi.io/api/v1/accounts',
    {
      account : data.account,
      password: data.password,
      name: data.name,
      avatar: data.avatar
    })
    .then(function(response){
      if (response.status === 201 && response != null) {
       console.log('created')
      } else {
        throw new Error('Empty data')
      }
    })
    .catch(function (error) {
      console.log(error);
    });
  }
}

export default API;