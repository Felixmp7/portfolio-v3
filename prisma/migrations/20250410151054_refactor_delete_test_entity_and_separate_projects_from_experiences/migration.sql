/*
  Warnings:

  - The values [professional,personal] on the enum `ProjectType` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the column `contributions` on the `Project` table. All the data in the column will be lost.
  - You are about to drop the column `enterpriseName` on the `Project` table. All the data in the column will be lost.
  - You are about to drop the column `logo` on the `Project` table. All the data in the column will be lost.
  - You are about to drop the column `period` on the `Project` table. All the data in the column will be lost.
  - You are about to drop the column `url` on the `Project` table. All the data in the column will be lost.
  - You are about to drop the column `urlName` on the `Project` table. All the data in the column will be lost.
  - The `images` column on the `Project` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `stack` column on the `Project` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the `Test` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "ProjectType_new" AS ENUM ('fullStack', 'frontEnd');
ALTER TABLE "Project" ALTER COLUMN "type" DROP DEFAULT;
ALTER TABLE "Project" ALTER COLUMN "type" TYPE "ProjectType_new" USING ("type"::text::"ProjectType_new");
ALTER TYPE "ProjectType" RENAME TO "ProjectType_old";
ALTER TYPE "ProjectType_new" RENAME TO "ProjectType";
DROP TYPE "ProjectType_old";
ALTER TABLE "Project" ALTER COLUMN "type" SET DEFAULT 'frontEnd';
COMMIT;

-- AlterTable
ALTER TABLE "Project" DROP COLUMN "contributions",
DROP COLUMN "enterpriseName",
DROP COLUMN "logo",
DROP COLUMN "period",
DROP COLUMN "url",
DROP COLUMN "urlName",
ADD COLUMN     "deployLink" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "repositoryLink" TEXT NOT NULL DEFAULT '',
DROP COLUMN "images",
ADD COLUMN     "images" TEXT[] DEFAULT ARRAY[]::TEXT[],
DROP COLUMN "stack",
ADD COLUMN     "stack" TEXT[],
ALTER COLUMN "type" SET DEFAULT 'frontEnd';

-- DropTable
DROP TABLE "Test";

-- CreateTable
CREATE TABLE "Experience" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "period" TEXT NOT NULL DEFAULT '2000',
    "enterpriseName" TEXT NOT NULL,
    "logo" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "urlName" TEXT NOT NULL,
    "stack" TEXT[],
    "contributions" TEXT NOT NULL,
    "status" "ProjectStatus" NOT NULL DEFAULT 'completed',

    CONSTRAINT "Experience_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Experience_id_key" ON "Experience"("id");
