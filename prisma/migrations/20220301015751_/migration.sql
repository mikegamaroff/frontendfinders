/*
  Warnings:

  - You are about to drop the column `stepContent` on the `Steps` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `Steps` DROP COLUMN `stepContent`,
    ADD COLUMN `section` VARCHAR(45) NULL;
