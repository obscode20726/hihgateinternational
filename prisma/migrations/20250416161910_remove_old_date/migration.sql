/*
  Warnings:

  - You are about to drop the column `date` on the `Event` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Event" DROP COLUMN "date",
ALTER COLUMN "endDate" DROP DEFAULT,
ALTER COLUMN "startDate" DROP DEFAULT;
