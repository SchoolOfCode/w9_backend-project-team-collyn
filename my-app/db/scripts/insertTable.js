import { query } from '../index.js';
import { projects } from '../../libs/index.js';

let insert = `INSERT INTO projects (name, project_interest, project_type, strength, availability, img) VALUES ($1, $2, $3, $4, $5, $6)`;

async function insertTable() {
  console.log('Table is being inserted');
  for (let i = 0; i < projects.length; i++) {
    await query(insert, [
      projects[i].name,
      projects[i].project_interest,
      projects[i].project_type,
      projects[i].strength,
      projects[i].availability,
      projects[i].img,
    ]);
  }
}

insertTable();