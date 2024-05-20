-- CreateTable
CREATE TABLE "SuperHeroe" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "weakness" VARCHAR(255) NOT NULL,

    CONSTRAINT "SuperHeroe_pkey" PRIMARY KEY ("id")
);
