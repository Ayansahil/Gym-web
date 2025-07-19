import { query } from '../config/database.js';

export class Testimonial {
  static async findAll() {
    const result = await query(
      'SELECT * FROM testimonials WHERE approved = true ORDER BY created_at DESC'
    );
    return result.rows;
  }

  static async findById(id) {
    const result = await query(
      'SELECT * FROM testimonials WHERE id = $1',
      [id]
    );
    return result.rows[0];
  }

  static async create({ name, content, rating, image_url }) {
    const result = await query(
      `INSERT INTO testimonials (name, content, rating, image_url, approved, created_at) 
       VALUES ($1, $2, $3, $4, false, NOW()) 
       RETURNING *`,
      [name, content, rating, image_url]
    );
    return result.rows[0];
  }

  static async approve(id) {
    const result = await query(
      'UPDATE testimonials SET approved = true WHERE id = $1 RETURNING *',
      [id]
    );
    return result.rows[0];
  }
}