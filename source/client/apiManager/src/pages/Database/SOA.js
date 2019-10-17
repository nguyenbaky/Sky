import axios from 'axios'

class SOA{
    Connect = (key) => {
        return axios
          .post('http://localhost:4000',
          {
              key: key
          })
          .then(res =>{
            return res.data;
          })
          .catch(function(error) {
            console.log(error)
          })
      }

      translate = (eng)=>{
        return axios
          .get(`http://localhost:4000/engvies/${eng}`)
          .then(res =>{
            return res.data;
          })
          .catch(function(error) {
            console.log(error)
          })
      }

      CnnTrans = (key,eng)=>{
        return axios
          .post('http://localhost:4000/translate',
          {
              key,
              eng
          })
          .then(res =>{
            return res.data;
          })
          .catch(function(error) {
            console.log(error)
          })
      }
}
export default SOA;