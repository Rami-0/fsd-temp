import { makeAutoObservable, runInAction } from "mobx";
import { QueryParams, Todo } from "../../../shared/api/todos/model";
import { getTodo } from "../../../shared/api/todos";

class TaskStore {
    taskList: Todo[] | any = [];
    task?: Todo;
    isloading = false;
    taskListError = "";
    taskError = "";


    constructor() {
        makeAutoObservable(this);
    }


    getTaskList = async (params: QueryParams) => {
        try {

            this.isloading = true;

            const data = await getTodo(params)

            runInAction(() => {
                this.isloading = false;
                this.taskList = data;
            })
        } catch (err) {
            runInAction(() => {
                this.isloading = false;
                this.taskListError = err as string;
            })
        }

    }
}