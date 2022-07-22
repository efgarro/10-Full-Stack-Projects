import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addQuizId } from "../topics/topicsSlice";

const initialState = {
  quizzes: {
    // 123: {
    //   id: "123",
    //   name: "example topic",
    //   icon: "icon url",
    //   quizIds: ["456"]
    // }
  }
};

export const thunkActionCreator = (payload) => {
  return (dispatch) => {
    dispatch(
      addQuiz({
        id: payload.id,
        name: payload.name,
        topicId: payload.topicId,
        cardIds: payload.cardIds
      })
    );
    dispatch(addQuizId({ quizId: payload.id, topicId: payload.topicId }));
  };
};

const quizzesSlice = createSlice({
  name: "quizzes",
  initialState,
  reducers: {
    addQuiz: (state, action) => {
      state.quizzes = {
        ...state.quizzes,
        [action.payload.id]: {
          id: action.payload.id,
          name: action.payload.name,
          topicId: action.payload.topicId,
          cardIds: action.payload.cardIds
        }
      };
    }
  }
});

export const selectQuizzes = (state) => state.quizzes.quizzes;
export const { addQuiz } = quizzesSlice.actions;
export default quizzesSlice.reducer;
