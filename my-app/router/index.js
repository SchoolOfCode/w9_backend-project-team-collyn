import express from 'express';
const router = express.Router();
import { query } from '../db/index.js';

// get request that will get all of our data ✅
// get request that will only return the project type
// post request

router.get('/', async (req, res) => {
  try {
    if (req.query.name !== undefined) {
      const name = req.query.name;
      const aval = req.query.aval;
      let data = await query(
        `SELECT * FROM projects WHERE project_type = $1 AND availability = $2 LIMIT 3`,
        [name, aval]
      );
      res.json(data.rows);
      return;
    }
    let data = await query(`SELECT * from projects`);
    res.json(data.rows);
  } catch (error) {
    console.error(error.message);
  }
});

router.get('/type', async (req, res) => {
  try {
    const allusers = await query(`SELECT project_type from projects`);
    res.json(allusers.rows.map((x) => x.project_type));
  } catch (error) {
    console.error(error.message);
  }
});

// the same can be done for the other properties of the object from query by changing the path

router.post('/', async (req, res) => {
  try {
    const {
      name,
      project_interest,
      project_type,
      strength,
      availability,
      img,
    } = req.body;
    const insert = await query(
      `INSERT INTO projects (name, project_interest, project_type, strength, availability, img) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`,
      [name, project_interest, project_type, strength, availability, img]
    );
    res.json(insert.rows);
  } catch (error) {
    console.error(error.message);
  }
});

export default router;
