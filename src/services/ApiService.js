/**
 * Service for handling requests to data
 *
 * server start command:
 *    json-server --watch db.json --port 3001
 */
class ApiService {
  baseUrl = "http://localhost:3001";

  /**
   * Method to get all the products
   *
   * @returns {Promise<any[]>} Array of products
   */
  getProducts = async () => {
    return fetch(`${this.baseUrl}/products`).then((response) =>
      response.json()
    );
  };
}

export default ApiService;
