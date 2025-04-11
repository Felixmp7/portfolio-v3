/*
  Warnings:

  - You are about to drop the column `status` on the `Experience` table. All the data in the column will be lost.
  - You are about to drop the `Job` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `location` to the `Experience` table without a default value. This is not possible if the table is not empty.
  - Added the required column `role` to the `Experience` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Experience" DROP COLUMN "status",
ADD COLUMN     "location" TEXT NOT NULL,
ADD COLUMN     "role" TEXT NOT NULL;

-- DropTable
DROP TABLE "Job";
