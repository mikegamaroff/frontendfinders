/*
  Warnings:

  - You are about to drop the column `elephant` on the `submissions` table. All the data in the column will be lost.
  - You are about to drop the column `tree` on the `submissions` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `submissions` DROP COLUMN `elephant`,
    DROP COLUMN `tree`;
