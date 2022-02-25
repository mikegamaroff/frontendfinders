-- CreateTable
CREATE TABLE `submissions` (
    `id` INTEGER NOT NULL,
    `name` VARCHAR(45) NULL,
    `email` VARCHAR(45) NULL,
    `description` VARCHAR(45) NULL,
    `phone` VARCHAR(45) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
