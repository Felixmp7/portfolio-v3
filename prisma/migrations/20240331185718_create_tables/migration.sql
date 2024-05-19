-- CreateTable
CREATE TABLE "Review" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "gender" TEXT NOT NULL,
    "charge" TEXT NOT NULL,
    "reviewText" TEXT NOT NULL,

    CONSTRAINT "Review_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Project" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "period" TEXT NOT NULL DEFAULT '2000',
    "images" TEXT NOT NULL DEFAULT 'https://earnionc.sirv.com/portfolio-felix/Projects/sp1.png, https://earnionc.sirv.com/portfolio-felix/Projects/sp2.png, https://earnionc.sirv.com/portfolio-felix/Projects/sp3.png',
    "enterpriseName" TEXT,
    "logo" TEXT,
    "description" TEXT,
    "status" TEXT,
    "url" TEXT,
    "urlName" TEXT NOT NULL,
    "stack" TEXT,
    "contributions" TEXT NOT NULL,

    CONSTRAINT "Project_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Test" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "name" TEXT NOT NULL,
    "logo" TEXT NOT NULL,
    "position" TEXT NOT NULL,
    "date" TEXT NOT NULL,
    "context" TEXT NOT NULL,
    "deployLink" TEXT NOT NULL,
    "repositoryLink" TEXT NOT NULL,
    "hired" BOOLEAN NOT NULL,

    CONSTRAINT "Test_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Review_id_key" ON "Review"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Project_id_key" ON "Project"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Test_id_key" ON "Test"("id");
