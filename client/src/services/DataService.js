import http from "../http-common";

class DataService {
  // getAll() {
  //   return http.get("/tutorials");
  // }

  // get(id) {
  //   return http.get(`/tutorials/${id}`);
  // }

  createUser(data) {
    return http.post("/register", data);
  }

  loginUser(data) {
    return http.post("/login", data);
  }

  // update(id, data) {
  //   return http.put(`/tutorials/${id}`, data);
  // }

  // delete(id) {
  //   return http.delete(`/tutorials/${id}`);
  // }

  // deleteAll() {
  //   return http.delete(`/tutorials`);
  // }

  // findByTitle(title) {
  //   return http.get(`/tutorials?title=${title}`);
  // }
}

export default new DataService();