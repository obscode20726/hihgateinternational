/*
  Warnings:

  - Made the column `french_note` on table `events` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "events" ALTER COLUMN "french_note" SET NOT NULL;
