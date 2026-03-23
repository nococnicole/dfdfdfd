/*
  # Create portfolio_posts table

  1. New Tables
    - `portfolio_posts`
      - `id` (uuid, primary key)
      - `title` (text) - Post title
      - `slug` (text, unique) - URL-friendly identifier
      - `category` (text) - e.g. digital-marketing, event-marketing, etc.
      - `excerpt` (text) - Short summary shown on card
      - `body` (text) - Full post body (HTML)
      - `cover_image` (text) - Path or URL to cover image
      - `tags` (text[]) - Array of tags
      - `published` (boolean) - Whether post is visible
      - `created_at` (timestamptz)
      - `updated_at` (timestamptz)

  2. Security
    - Enable RLS
    - Public can read published posts
    - No public write access (admin managed)
*/

CREATE TABLE IF NOT EXISTS portfolio_posts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  slug text UNIQUE NOT NULL,
  category text NOT NULL DEFAULT '',
  excerpt text NOT NULL DEFAULT '',
  body text NOT NULL DEFAULT '',
  cover_image text NOT NULL DEFAULT '',
  tags text[] NOT NULL DEFAULT '{}',
  published boolean NOT NULL DEFAULT true,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE portfolio_posts ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read published posts"
  ON portfolio_posts FOR SELECT
  USING (published = true);
