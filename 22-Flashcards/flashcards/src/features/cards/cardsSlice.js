import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { addQuizId } from "../topics/topicsSlice";

const initialState = {
  cards: {
    // 123: {
    //   id: "123",
    //   name: "example topic",
    //   icon: "icon url",
    //   quizIds: ["456"]
    // }
  }
};

// export const thunkActionCreator = (payload) => {
//   return (dispatch) => {
//     dispatch(
//       addQuiz({
//         id: payload.id,
//         name: payload.name,
//         topicId: payload.topicId,
//         cardIds: payload.cardIds
//       })
//     );
//     dispatch(addQuizId({ quizId: payload.id, topicId: payload.topicId }));
//   };
// };

const cardssSlice = createSlice({
  name: "cards",
  initialState,
  reducers: {
    addCard: (state, action) => {
      state.cards = {
        ...state.cards,
        [action.payload.id]: {
          id: action.payload.id,
          front: action.payload.front,
          back: action.payload.back
        }
      };
    }
  }
});

export const selectCards = (state) => state.cards.cards;
export const { addCard } = cardssSlice.actions;
export default cardssSlice.reducer;
