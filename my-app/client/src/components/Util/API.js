import axios from "axios";

export default {
  getSubs: function() {
    return axios.get("./schema");
  },
  // Gets the book with the given id
  getSubs: function(id) {
    return axios.get("./schema" + id);
  },
  // Deletes the book with the given id
  deleteSubs: function(id) {
    return axios.delete("./schema" + id);
  },
  // Saves a book to the database
  saveSubs: function(subsData) {
    return axios.post("./schema", subsData);
  }
};