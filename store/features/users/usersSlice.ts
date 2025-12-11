import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchUsers } from "./api";
import { ICustomer } from "@/types/customer";

export interface IUserData {
  users: ICustomer[];
  total: number;
  skip: number;
  limit: number;
}

interface InitialState {
  limit: number;
  lastCalled: Date | null;
  data: IUserData | null;
  status: "idle" | "loading" | "failed";
  error: string | null;
}

const initialState: InitialState = {
  data: null,
  status: "idle",
  error: null,
  lastCalled: null,
  limit: 0,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // setStatus: (state, action: PayloadAction<InitialState["status"]>) => {
    //   state.status = action.payload;
    // },
    // setError: (
    //   state,
    //   action: PayloadAction<{ error: string; status: InitialState["status"] }>
    // ) => {
    //   state.error = action.payload.error;
    //   state.status = action.payload.status;
    // },
    // clearError: (state) => {
    //   state.error = null;
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.status = "loading"
      })
      .addCase(fetchUsers.fulfilled, (state, action: PayloadAction<IUserData>) => {
        state.data = action.payload;
        state.status = "idle";

        console.log(initialState.data);
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "error getting users";
      });
  },
});

// export const { setStatus, setError, clearError } = usersSlice.actions;
export default userSlice.reducer;

