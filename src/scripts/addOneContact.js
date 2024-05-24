import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';
import { createFakeContact } from '../utils/createFakeContact.js';

export const addOneContact = async () => {
        const contacts = JSON.parse(await fs.readFile(PATH_DB, 'utf-8'));
        const contact = createFakeContact();
        contacts.push(contact);
        await fs.appendFile(PATH_DB, JSON.stringify(contact, null, 2), 'utf-8');
        console.log(contact);
};

await addOneContact();
