import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';
import { createFakeContact } from '../utils/createFakeContact.js';

const generateContacts = async (number) => {
    let contacts = [];
    for (let i = 0; i < number; i++) {
        contacts.push(createFakeContact());
    }
    await fs.appendFile(PATH_DB, JSON.stringify(contacts, null, 2), 'utf-8');
};

await generateContacts(5);