import { query } from '../config/database.js';

export class Membership {
  static async findAll() {
    const result = await query(
      'SELECT * FROM memberships ORDER BY price ASC'
    );
    return result.rows;
  }

  static async findById(id) {
    const result = await query(
      'SELECT * FROM memberships WHERE id = $1',
      [id]
    );
    return result.rows[0];
  }

  static async create({ name, price, duration, features, popular = false }) {
    const result = await query(
      `INSERT INTO memberships (name, price, duration, features, popular, created_at) 
       VALUES ($1, $2, $3, $4, $5, NOW()) 
       RETURNING *`,
      [name, price, duration, features, popular]
    );
    return result.rows[0];
  }
}