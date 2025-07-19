import { query } from '../config/database.js';

export class Contact {
  static async create({ name, email, subject, message }) {
    const result = await query(
      `INSERT INTO contacts (name, email, subject, message, created_at) 
       VALUES ($1, $2, $3, $4, NOW()) 
       RETURNING *`,
      [name, email, subject, message]
    );
    return result.rows[0];
  }

  static async findAll() {
    const result = await query(
      'SELECT * FROM contacts ORDER BY created_at DESC'
    );
    return result.rows;
  }

  static async findById(id) {
    const result = await query(
      'SELECT * FROM contacts WHERE id = $1',
      [id]
    );
    return result.rows[0];
  }
}