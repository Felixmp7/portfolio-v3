/*
  Warnings:

  - You are about to drop the column `logo` on the `Test` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `Test` table. All the data in the column will be lost.
  - Made the column `enterpriseName` on table `Project` required. This step will fail if there are existing NULL values in that column.
  - Made the column `logo` on table `Project` required. This step will fail if there are existing NULL values in that column.
  - Made the column `description` on table `Project` required. This step will fail if there are existing NULL values in that column.
  - Made the column `status` on table `Project` required. This step will fail if there are existing NULL values in that column.
  - Made the column `url` on table `Project` required. This step will fail if there are existing NULL values in that column.
  - Made the column `stack` on table `Project` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `enterpriseLogo` to the `Test` table without a default value. This is not possible if the table is not empty.
  - Added the required column `enterpriseName` to the `Test` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Project" ALTER COLUMN "enterpriseName" SET NOT NULL,
ALTER COLUMN "logo" SET NOT NULL,
ALTER COLUMN "description" SET NOT NULL,
ALTER COLUMN "status" SET NOT NULL,
ALTER COLUMN "url" SET NOT NULL,
ALTER COLUMN "stack" SET NOT NULL;

-- AlterTable
ALTER TABLE "Test" DROP COLUMN "logo",
DROP COLUMN "name",
ADD COLUMN     "enterpriseLogo" TEXT NOT NULL,
ADD COLUMN     "enterpriseName" TEXT NOT NULL;
