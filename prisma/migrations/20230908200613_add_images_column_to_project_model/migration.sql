-- AlterTable
ALTER TABLE "Project" ADD COLUMN     "images" TEXT[] DEFAULT ARRAY['https://earnionc.sirv.com/portfolio-felix/Projects/sp1.png', 'https://earnionc.sirv.com/portfolio-felix/Projects/sp2.png', 'https://earnionc.sirv.com/portfolio-felix/Projects/sp3.png']::TEXT[];
