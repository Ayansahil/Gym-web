import { query } from '../config/database.js';

export class Schedule {
  static async findAll() {
    const result = await query(
      `SELECT * FROM schedule 
       ORDER BY 
         CASE day_of_week 
           WHEN 'Monday' THEN 1
           WHEN 'Tuesday' THEN 2
           WHEN 'Wednesday' THEN 3
           WHEN 'Thursday' THEN 4
           WHEN 'Friday' THEN 5
           WHEN 'Saturday' THEN 6
           WHEN 'Sunday' THEN 7
         END,
         start_time ASC`
    );
    return result.rows;
  }

  static async findById(id) {
    const result = await query(
      'SELECT * FROM schedule WHERE id = $1',
      [id]
    );
    return result.rows[0];
  }

  static async create({ class_name, trainer_name, day_of_week, start_time, end_time, max_participants = 20 }) {
    const result = await query(
      `INSERT INTO schedule (class_name, trainer_name, day_of_week, start_time, end_time, max_participants, created_at) 
       VALUES ($1, $2, $3, $4, $5, $6, NOW()) 
       RETURNING *`,
      [class_name, trainer_name, day_of_week, start_time, end_time, max_participants]
    );
    return result.rows[0];
  }
}