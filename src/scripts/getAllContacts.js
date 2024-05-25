import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const getAllContacts = async () => {
    try {
        const contactsRead = await fs.readFile(PATH_DB, 'utf-8');
        return contactsRead;
    } catch (error) {
        console.log(error);
    }
};

console.log(await getAllContacts());
