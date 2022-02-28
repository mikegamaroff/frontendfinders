/*
  Warnings:

  - You are about to drop the column `stepName` on the `Steps` table. All the data in the column will be lost.
  - Made the column `submissionID` on table `Steps` required. This step will fail if there are existing NULL values in that column.

*/
-- DropIndex
DROP INDEX `Steps_submissionID_key` ON `Steps`;

-- AlterTable
ALTER TABLE `Steps` DROP COLUMN `stepName`,
    ADD COLUMN `stepContent` TEXT NULL,
    MODIFY `submissionID` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `submissions` MODIFY `description` TEXT NULL;
