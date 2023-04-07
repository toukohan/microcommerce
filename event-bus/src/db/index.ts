import { Pool, QueryResult } from 'pg';

export interface Event {
    id: number;
    type: string;
    data: any;
    created_at: Date;
}

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'events',
  password: 'events',
  port: 5405,
});

export const query = (text: string, params: string[]): Promise<QueryResult<Event>> => pool.query(text, params);

const createDatabaseAndTable = async (): Promise<void> => {
  try {
    // Create the "reviews" database if it doesn't exist
    await pool.query(`
      CREATE DATABASE IF NOT EXISTS events;
    `);

    // Connect to the "reviews" database
    const client = await pool.connect();

    // Create the "reviews" table if it doesn't exist
    await client.query(`
        CREATE TABLE IF NOT EXISTS events (
            id SERIAL PRIMARY KEY,
            type VARCHAR(255) NOT NULL,
            data JSONB NOT NULL
            created_at TIMESTAMP DEFAULT NOW()
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