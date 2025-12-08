import { createAsyncThunk } from "@reduxjs/toolkit";
import { IUserData } from "./usersSlice";
import { API_BASE_URL } from "@/lib/constants";

export const fetchUsers = createAsyncThunk(
  "users/getUsers",
  async ({ limit, skip }: { skip?: number; limit?: number }): Promise<IUserData> => {
 
    try {
      let url = `${API_BASE_URL}/users`;
      if (limit) url = `${url}?limit=${limit}`;
      if (skip) url = `${url}?skip=${skip}`;
      if (skip && limit) url = `${url}?limit=${limit}&skip=${skip}`; 

      const response = await fetch(url);
      return await response.json();
    } catch (error) {
      console.log("users/getUsers");
      console.log(error);

      throw new Error(
        "something went worng while calling data through endpoint - users"
      );
    }
  }
);

export const fetctUser = createAsyncThunk(
  "users/getUser",
  async (productId: string) => {
    const response: unknown = fetch(`${API_BASE_URL}/users/${productId}`);
    return response;
  }
);

