export interface TestStateModel {
  productsInCar: number;
  todo: {
    status:  "loading" | "completed" | "rejected";
    value: TodoModel;
  };
  photo: {
    status:  "loading" | "completed" | "rejected";
    value: PhotoModel;
  }
}

export class TodoModel {
  userId!: number;
  id!: number;
  title!: string;
  completed!: boolean;
}

export class PhotoModel {
  albumId!: number;
  id!: number;
  title!: string;
  url!: string;
  thumbnailUrl!: string;
}