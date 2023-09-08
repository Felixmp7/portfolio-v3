-- CreateTable
CREATE TABLE "Review" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "gender" TEXT NOT NULL,
    "charge" TEXT NOT NULL,
    "review_text" TEXT[],

    CONSTRAINT "Review_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Project" (
    "id" SERIAL NOT NULL,
    "enterpriseName" TEXT NOT NULL,
    "logo" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "link" TEXT NOT NULL,
    "urlName" TEXT NOT NULL,
    "stack" TEXT[],
    "contributions" TEXT NOT NULL,

    CONSTRAINT "Project_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Test" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "logo" TEXT NOT NULL,
    "position" TEXT NOT NULL,
    "date" TEXT NOT NULL,
    "context" TEXT NOT NULL,
    "deployLink" TEXT NOT NULL,
    "repositoryLink" TEXT NOT NULL,
    "wasHired" BOOLEAN NOT NULL,

    CONSTRAINT "Test_pkey" PRIMARY KEY ("id")
);
