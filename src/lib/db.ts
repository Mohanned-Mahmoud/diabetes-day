import postgres from 'postgres';

/**
 * Neon PostgreSQL Connection Client.
 * Configured for serverless pooling with SSL enabled.
 */
const connectionString =
  process.env.DATABASE_URL ||
  'postgresql://neondb_owner:npg_rKFOG8JYx6yB@ep-plain-cloud-b4x15iz5-pooler.c-6.us-east-2.aws.neon.tech/neondb?sslmode=require';

export const sql = postgres(connectionString, {
  max: 10,
  idle_timeout: 20,
  connect_timeout: 10,
  prepare: false, // Recommended for Neon PgBouncer pooler
  ssl: 'require',
});

/**
 * Ensures the contact_submissions table exists and has proper columns.
 */
export async function ensureContactSubmissionsTable() {
  await sql`
    CREATE TABLE IF NOT EXISTS contact_submissions (
      id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      full_name TEXT NOT NULL,
      mobile TEXT NOT NULL,
      city TEXT NOT NULL,
      agreed_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
      ip_address TEXT,
      user_agent TEXT,
      created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
    );
  `;
}

