import { query } from '../config/database.js';

export class Trainer {
  static async findAll() {
    const result = await query(
      'SELECT * FROM trainers ORDER BY name ASC'
    );
    return result.rows;
  }

  static async findById(id) {
    const result = await query(
      'SELECT * FROM trainers WHERE id = $1',
      [id]
    );
    return result.rows[0];
  }

  static async create({ name, specialization, experience, bio, image_url }) {
    const result = await query(
      `INSERT INTO trainers (name, specialization, experience, bio, image_url, created_at) 
       VALUES ($1, $2, $3, $4, $5, NOW()) 
       RETURNING *`,
      [name, specialization, experience, bio, image_url]
    );
    return result.rows[0];
  }
}