export interface TestStateInterface {
  productsInCar: number;
  todo: {
    status:  "loading" | "completed" | "rejected";
    value: TodoInterface;
  };
  photo: {
    status:  "loading" | "completed" | "rejected";
    value: PhotoInterface;
  }
}

export interface TodoInterface {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export interface PhotoInterface {
  albumId: number | null;
  id: number | null;
  title: string;
  url: string;
  thumbnailUrl: string;
}