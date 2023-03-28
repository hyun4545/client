import axios from 'axios';

const apiHost=process.env.API_HOST;

const memberRequest=axios.create({baseURL:`${apiHost}member`});

//GET
axios.get('http://api/user')
.then(res =>{
    console.log(res);
}).catch(err => {
    console.log(err);
})
//POST
axios.post('http://api/user', {
    firstName: 'Fred',
    lastName: 'Flintstone'
})
.then(res => {
    console.log(response);
})
.catch(err => {
    console.log(error);
});