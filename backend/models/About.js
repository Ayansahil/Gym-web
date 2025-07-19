import { query } from '../config/database.js';

export class About {
  static async findAll() {
    const result = await query(
      'SELECT * FROM about ORDER BY id ASC'
    );
    return result.rows;
  }

  static async findById(id) {
    const result = await query(
      'SELECT * FROM about WHERE id = $1',
      [id]
    );
    return result.rows[0];
  }

  static async create({ section, title, content, image_url }) {
    const result = await query(
      `INSERT INTO about (section, title, content, image_url, created_at) 
       VALUES ($1, $2, $3, $4, NOW()) 
       RETURNING *`,
      [section, title, content, image_url]
    );
    return result.rows[0];
  }
}