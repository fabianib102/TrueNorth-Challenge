import ApiService from "./ApiService";

export default class TaskService {
  header = {
    "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
  };

  apiService = new ApiService(this.header);

  getTasks = () => {
    return this.apiService.get(`${process.env.REACT_APP_BASE_URL}/tasks`);
  };

  updateTask = (IdData) => {
    return this.apiService.update(`${process.env.REACT_APP_BASE_URL}/tasks/${IdData}`);
  };
}
