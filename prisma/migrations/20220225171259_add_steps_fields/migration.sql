/*
  Warnings:

  - A unique constraint covering the columns `[submissionID]` on the table `Steps` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `Steps` ADD COLUMN `submissionID` INTEGER NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Steps_submissionID_key` ON `Steps`(`submissionID`);
