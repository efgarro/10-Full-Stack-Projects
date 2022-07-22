import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  topics: {
    // 123: {
    //   id: "123",
    //   name: "example topic",
    //   icon: "icon url",
    //   quizIds: ["456"]
    // }
  }
};

const topicsSlice = createSlice({
  name: "topics",
  initialState,
  reducers: {
    addTopic: (state, action) => {
      state.topics = {
        ...state.topics,
        [action.payload.id]: {
          id: action.payload.id,
          name: action.payload.name,
          icon: action.payload.icon,
          quizIds: []
        }
      };
    },
    addQuizId: (state, action) => {
      console.log(action.payload);
      state.topics[action.payload.topicId].quizIds.push(action.payload.quizId);
    }
  }
});

export const selectTopics = (state) => state.topics.topics;
export const { addTopic, addQuizId } = topicsSlice.actions;
export default topicsSlice.reducer;
