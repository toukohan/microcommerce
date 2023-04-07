import { Pool, QueryResult } from 'pg';

export interface Review {
  id: number;
  product_id: number;
  user_id: number;
  rating: number;
  comment: string;
  created_at: Date;
  status: 'pending' | 'approved' | 'rejected';
}

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'reviews',
  password: 'reviews',
  port: 5406,
});

export const query = (text: string, params: string[]): Promise<QueryResult<Review>> => pool.query(text, params);

const createDatabaseAndTable = async (): Promise<void> => {
  try {
    // Create the "reviews" database if it doesn't exist
    await pool.query(`
      CREATE DATABASE IF NOT EXISTS reviews;
    `);

    // Connect to the "reviews" database
    const client = await pool.connect();

    // Create the "reviews" table if it doesn't exist
    await client.query(`
      CREATE TABLE IF NOT EXISTS reviews (
        id SERIAL PRIMARY KEY,
        product_id INTEGER REFERENCES products(id),
        user_id INTEGER,
        rating INTEGER CHECK (rating BETWEEN 1 AND 5),
        comment TEXT,
        created_at TIMESTAMP DEFAULT NOW(),
        status VARCHAR(10) DEFAULT 'pending' NOT NULL
      );
    `);

    // Release the client back to the pool
    client.release();
  } catch (err) {
    console.error(err);
  } finally {
    // End the database pool to exit the Node.js process
    pool.end();
  }
};

createDatabaseAndTable();