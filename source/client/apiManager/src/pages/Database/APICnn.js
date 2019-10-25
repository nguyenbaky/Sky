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

  GenKey = (data) => {
    return axios
      .post('http://localhost:4000/key',
      {
        method: data.method,
        id: data.id,
        type: data.type,
        user: data.user,
        start: data.start
      })
      .catch(function(error) {
        console.log(error)
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

  putData = (data, id) =>{
    return axios({
      method: 'put',
      url : `http://5d8a1f54b2568e0014d884cb.mockapi.io/api/v1/accounts/${id}`,
      data: data
    })
    .then(function(response){
      console.log('thành công rồi')
    })
    .catch(function(error) {
      console.log(error)
    })
  }

  putDataWithParamAccount = (data, Account) =>{
    return axios({
      method: 'put',
      url : `http://5d8a1f54b2568e0014d884cb.mockapi.io/api/v1/accounts`,
      data: data,
      params: {
        account: 'account1'
      }
    })
    .then(function(response){
      console.log('thành công rồi')
    })
    .catch(function(error) {
      console.log(error)
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
          console.log(response.data);
          console.log("thanh cong roi")
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
      email: data.email,
      phone: data.phone,
      avatar: data.avatar
    })
    .then(function(response){
      if (response.status === 201 && response != null) {
       console.log('created');
      } else {
        throw new Error('Empty data')
      }
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  SendMail = (data)=>{
    return axios
    .post("http://localhost:4000/send-mail",
    {
      code : data.code,
      email: data.email,
      contain: data.contain
    })
    .then(res=>{
      return res.data
    })
    .catch(function(err)
    {
      console.log(err);
    })
  }


  SendMailContacts = (data)=>{
    return axios
    .post("http://localhost:4000/send-mail-contacts",
    {
      email: data.email,
      from: data.from,
      content: data.content
    })
    .then(res=>{
      return res.data;
    })
    .catch(function(err)
    {
      console.log(err);
    })
  }

  getKey = data=>{
    return axios
    .get(`http://localhost:4000/get-keys/${data.id}`)
    .then(res=>{
      return res.data;
    })
    .catch(function(err){
      console.log(err);
    })
  }

  delkey = (id)=>{
    return axios
    .delete(`http://localhost:4000/keys/${id}`)
    .then(res=>{
      return res.data;
    })
    .catch(function(err){
      console.log(err);
    })
  }
}


export default API;