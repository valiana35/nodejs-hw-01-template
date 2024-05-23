import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';
import { createFakeContact } from '../utils/createFakeContact.js';

export const addOneContact = async () => {
        const contact = createFakeContact();
        await fs.appendFile(PATH_DB, JSON.stringify(contact, null, 2), 'utf-8');
        console.log(contact);
};

await addOneContact();
