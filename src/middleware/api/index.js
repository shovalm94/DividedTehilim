const axios = require('axios');

export default {
    get: options => {
        return axios.get(`https://www.sefaria.org/api/texts/תהילים ${options.path}`)
            .then(resp => {
                return resp.data.he;
            })
            .catch(error => {

                console.log(error);
            })
    },
    // create: options => {
    //
    //         return axios.post(`http://localhost:4000/${options.entity}`,{groups: options.group})
    //             .then(resp => {
    //                 return resp.data.result;
    //             })
    //             .catch(error => {
    //
    //                 console.log(error);
    //             })
    //
    // },
    // remove: options => {
    //     return axios.delete(`http://localhost:4000/${options.entity}/${options.id}`)
    //         .then(resp => {
    //             return resp.data.result;
    //         })
    //         .catch(error => {
    //
    //             console.log(error);
    //         })
    //
    // },
    //
    // update: options => {
    //
    // }
}