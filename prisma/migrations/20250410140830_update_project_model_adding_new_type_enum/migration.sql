-- CreateEnum
CREATE TYPE "ProjectType" AS ENUM ('professional', 'personal');

-- AlterTable
ALTER TABLE "Project" ADD COLUMN     "type" "ProjectType" NOT NULL DEFAULT 'professional';
