-- AlterTable
ALTER TABLE "Project" ALTER COLUMN "images" DROP NOT NULL,
ALTER COLUMN "images" SET DEFAULT '[]';
