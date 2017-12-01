import axios from 'axios';
// import faker from 'faker'; // move to tests when api ready

/**
 *  TODO: move all route strings into CONST / file (redux style)
 *  Should we move user, location, review and etc...
 *  to its own class and import it into api?
 */

class Api {
  constructor(token = '') {
    this.token = token;
  }

  /**
   *
   * @param {string} email
   * @param {string} password
   * @returns {json} json
   */
  // userRegister(email, password) {
  //   return axios
  //     .post('http://localhost:9000/api/v1/users/register', {
  //       email,
  //       password
  //     })
  //     .then(response => response)
  //     .catch(error => {
  //       console.log(error);
  //     });
  // }

  // /**
  //  * @param {string} token
  //  * @param {string} password
  //  * @returns {json} json
  //  */
  // userRegisterWLocation(token, customer) {
  //   return axios
  //     .post('http://localhost:9000/api/v1/create/location-with-customer', {
  //       token,
  //       customer
  //     })
  //     .then(response => response)
  //     .catch(error => {
  //       console.log(error);
  //     });
  // }

  // /**
  //  * method for user login
  //  *
  //  * @param {string} email
  //  * @param {string} password
  //  * @returns {json} json
  //  */
  // static userLogin(email, password) {
  //   return axios
  //     .post('http://localhost:9000/api/v1/users/login', {
  //       email,
  //       password
  //     })
  //     .then(response => response)
  //     .catch(error => {
  //       console.log(error);
  //     });
  // }

  // // TODO: should we add option for user deletion?
  // //       would it be better to ask for removal via this api
  // //       and application moderator will remove user?
  // /**
  //  * method for removing user from our application
  //  * @param {string} id
  //  * @param {string} token
  //  */
  // userRemove(id, token) {
  //   return axios
  //     .delete(`http://localhost:9000/api/v1/users/${id}`, {
  //       headers: {
  //         Authorization: token
  //       }
  //     })
  //     .then(response => response)
  //     .catch(error => {
  //       console.log(error);
  //     });
  // }

  // userGetOneByEmail() {}

  // userGetAll() {
  //   return axios
  //     .get('http://localhost:9000/api/v1/users')
  //     .then(response => response)
  //     .catch(error => console.log(error));
  // }

  static locationGetAll() {
    return axios
      .get('http://localhost:9000/api/v1/locations')
      .then(response => response)
      .catch(error => console.log(error));
  }

  // locationGetOneById() {}

  // locationGetOwner() {}

  // locationGetReviews() {}

  // locationCreate() {}

  // locationUpdate() {}

  // locationRemove() {}

  // reviewGetAll() {}

  // reviewGetLocationReviews() {}

  // reviewGetOneById() {}

  // reviewCreate() {}

  // reviewUpdate() {}

  // reviewDelete() {}
}

export default { Api };
