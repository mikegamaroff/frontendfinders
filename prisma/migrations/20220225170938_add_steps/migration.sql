/*
  Warnings:

  - You are about to drop the column `skills` on the `submissions` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `submissions` DROP COLUMN `skills`;

-- CreateTable
CREATE TABLE `Steps` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `stepName` VARCHAR(45) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
