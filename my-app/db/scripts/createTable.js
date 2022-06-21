import { query } from '../index.js';

const table = `CREATE TABLE IF NOT EXISTS projects(
id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
name TEXT,
project_interest TEXT,
project_type TEXT,
strength TEXT,
availability TEXT,
img TEXT
)`;

async function createTable() {
  console.log('Table is being created');
  return await query(table);
}

createTable();
