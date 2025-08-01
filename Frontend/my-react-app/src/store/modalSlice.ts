import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '../api/UserApi';

interface ModalState {
  isModalOpen: boolean;
  selectedUser: User | null;
}

const initialState: ModalState = {
  isModalOpen: false,
  selectedUser: null,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state, action: PayloadAction<User>) => {
      state.isModalOpen = true;
      state.selectedUser = action.payload;
    },
    closeModal: (state) => {
      state.isModalOpen = false;
      state.selectedUser = null;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer; 