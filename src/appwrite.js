import { Client } from 'appwrite';

const DATABASE_ID = import.meta.env.VITE_APPWRITE_DATABASE_ID;
const PROJECT_ID = import.meta.env.VITE_APPWRITE_PROJECT_ID;
const TABLE_ID = import.meta.env.VITE_APPWRITE_TABLE_ID;

const client = new Client();
client.setEndpoint('https://cloud.appwrite.io/v1').setProject(PROJECT_ID);

const database = new Database(client);

export const updateSearchCount = async (searchTerm, movie) => {
  //use appwrite to
};
