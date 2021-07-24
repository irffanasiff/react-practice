import React from "react";
import Card from "../UI/Card";

const AddUser = (props) => {
  const addUserHandler = (event) => {
    event.preventDefault();
  };
  return (
    <Card >
      <form
        onSubmit={addUserHandler}
        class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div>
          <label
            htmlFor="username"
            class="block text-gray-700 text-sm font-bold mb-2"
          >
            Username
          </label>
          <input
            type="text"
            id="username"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 "
            placeholder="Username"
          />
        </div>
        <div class="mb-6">
          <label
            htmlFor="age"
            class="block text-gray-700 text-sm font-bold mb-2"
          >
            Age
          </label>
          <input
            type="number"
            id="age"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 "
            placeholder="Age"
          />
        </div>
        <button
          type="submit"
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Add User
        </button>
      </form>
    </Card>
  );
};

export default AddUser;
