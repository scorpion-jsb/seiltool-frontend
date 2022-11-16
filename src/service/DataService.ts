
const rootUrl = "http://127.0.0.1:8000/";

export default class DataService {
  getAll = () => {
    return fetch(`${rootUrl}`,{
          method: "GET",
          headers:{
              "Content-Type": "application/json",
          }
      })
      .then((res) => res.json())
      .then((d) => d.data);
  }

  getDataByCategories = (categories:any) => {
    return fetch(`${rootUrl}${categories}`,{
          method: "GET",
          headers:{
              "Content-Type": "application/json",
          }
      })
      .then((res) => res.json())
      .then((d) => d.data);
  }
}
