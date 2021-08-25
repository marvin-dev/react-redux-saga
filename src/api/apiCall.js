import axios from "axios";

export const getEntries = () => {
  return axios.get(`http://localhost:3001/entries`);
};

export const addEntry = ({ id, description, value, isExpense }) => {
  return axios.post(`http://localhost:3001/entries`, {
    id,
    description,
    value,
    isExpense,
  });
};
