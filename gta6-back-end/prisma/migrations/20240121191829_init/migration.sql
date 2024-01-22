/*
  Warnings:

  - You are about to drop the column `data` on the `wait_list` table. All the data in the column will be lost.
  - Added the required column `date` to the `wait_list` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "wait_list" DROP COLUMN "data",
ADD COLUMN     "date" TIMESTAMP(3) NOT NULL;
