/*
  Warnings:

  - You are about to drop the column `location` on the `Ticket` table. All the data in the column will be lost.
  - You are about to drop the column `price` on the `Ticket` table. All the data in the column will be lost.
  - Added the required column `category` to the `Ticket` table without a default value. This is not possible if the table is not empty.
  - Added the required column `city` to the `Ticket` table without a default value. This is not possible if the table is not empty.
  - Added the required column `eventTime` to the `Ticket` table without a default value. This is not possible if the table is not empty.
  - Added the required column `numberOfTickets` to the `Ticket` table without a default value. This is not possible if the table is not empty.
  - Added the required column `pricePerTicket` to the `Ticket` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ticketType` to the `Ticket` table without a default value. This is not possible if the table is not empty.
  - Added the required column `venue` to the `Ticket` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Ticket` DROP COLUMN `location`,
    DROP COLUMN `price`,
    ADD COLUMN `category` VARCHAR(191) NOT NULL,
    ADD COLUMN `city` VARCHAR(191) NOT NULL,
    ADD COLUMN `eventTime` VARCHAR(191) NOT NULL,
    ADD COLUMN `numberOfTickets` INTEGER NOT NULL,
    ADD COLUMN `pricePerTicket` DOUBLE NOT NULL,
    ADD COLUMN `row` VARCHAR(191) NULL,
    ADD COLUMN `seats` VARCHAR(191) NULL,
    ADD COLUMN `section` VARCHAR(191) NULL,
    ADD COLUMN `ticketType` VARCHAR(191) NOT NULL,
    ADD COLUMN `venue` VARCHAR(191) NOT NULL;
