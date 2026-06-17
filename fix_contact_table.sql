-- Copy and paste this code in your Supabase SQL Editor and click RUN

-- Add missing columns to the Contact table
ALTER TABLE "public"."Contact" 
ADD COLUMN IF NOT EXISTS "name" text,
ADD COLUMN IF NOT EXISTS "email" text,
ADD COLUMN IF NOT EXISTS "phone" text,
ADD COLUMN IF NOT EXISTS "product_interest" text,
ADD COLUMN IF NOT EXISTS "application_type" text,
ADD COLUMN IF NOT EXISTS "message" text;
