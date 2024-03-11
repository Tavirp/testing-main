const axios = require("axios");
const TodosMutations = require("./TodosMutations");

// Axios .get Methode soll die weitere Funktion mockResolvedValue erhalten
jest.mock("axios");

const returnedTodo1 = {
  id: 6,
  userId: 1,
  task: "Trinken",
  isDone: true,
  dueDate: "2024-11-10T00:00:00.000Z",
  createdAt: "2024-02-28T08:17:33.000Z",
  updatedAt: "2024-02-28T13:10:19.000Z",
};

const updatedTodo1 = {
  id: 7,
  task: "Essen",
  isDone: false,
  dueDate: "2025-11-10T00:00:00.000Z",
  createdAt: "2024-02-27T08:17:33.000Z",
  updatedAt: "2024-02-29T13:10:19.000Z",
};


describe("Testing POST Functions of Todo Route", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test("Teste POST Create Funktion", async () => {
    const mockData = {
      data: { todo: returnedTodo1 },
    };
    axios.post.mockResolvedValue(mockData);
    const myDate = new Date();
    const result = await TodosMutations.createTodo(1, "Essen", false, myDate);

    expect(result).toEqual(mockData.data.todo);
    expect(axios.post).toHaveBeenCalledTimes(1);
    expect(axios.post).toHaveBeenCalledWith(
      "http://localhost:5050/v1/todos/create",
      { newDueDate: myDate, newIsDone: false, newTask: "Essen", newUserId: 1 }
    );
  });

  test("Sollte einen Todo-Eintrag als erledigt markieren", async () => {
    const mockData = {
      data: { todo: returnedTodo1 },
    };

    axios.put.mockResolvedValue(mockResponse);
    const todoId = 1;
    const isDone = true;

    const updatedTodo = await markTodo(todoId, isDone);

    expect(result).toEqual(mockData.data.todo);
    expect(axios.put).toHaveBeenCalledWith(
      "http://localhost:5050/v1/todos/mark",
      {
        todoId,
        newIsDone: isDone,
      }
    );

  });


  test("Sollte einen Todo-Eintrag aktualisieren", async () => {
    const mockData = {
      data: { todo: returnedTodo1 },
    };

    axios.put.mockResolvedValue(mockResponse);

    // Testdaten
    const mockData = {
      data: { todo: updatedTodo1 },
    };

    const updatedTodo = await updateTodo(updateId, updateTask, updateIsDone, updateDueDate);

    expect(axios.put).toHaveBeenCalledWith(
      "http://localhost:5050/v1/todos/update",
      {
        todoId: updateId,
        newTask: updateTask,
        newIsDone: updateIsDone,
        newDueDate: updateDueDate,
      }
    );

    expect(updatedTodo).toEqual({
      id: 1,
      task: "Einkäufe erledigen",
      isDone: true,
      dueDate: "2024-03-10",
    });
  });
});


// Ich brauch 'ne Pause, ich blick nicht mehr durch.
