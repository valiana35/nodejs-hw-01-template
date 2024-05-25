import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';
import { createFakeContact } from '../utils/createFakeContact.js';

export const addOneContact = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    const contacts = JSON.parse(data);
    const contact = createFakeContact();
    contacts.push(contact);
    await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2));
    console.log(contact);
  } catch (error) {
    console.log(error);
  }
};

await addOneContact();
