export interface TestStateInterface {
  productsInCar: number;
  todo: {
    status:  "loading" | "completed" | "rejected"
    value: {
      userId: number;
      id: number;
      title: string;
      completed: boolean;
    };
  };
}
