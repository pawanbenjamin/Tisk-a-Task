/*
  Warnings:

  - You are about to drop the `Task` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Task";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "Puppy" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "breed" TEXT NOT NULL,
    "ownerId" INTEGER NOT NULL,
    CONSTRAINT "Puppy_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Puppy_Trick" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "puppyId" INTEGER NOT NULL,
    "trickId" INTEGER NOT NULL,
    CONSTRAINT "Puppy_Trick_puppyId_fkey" FOREIGN KEY ("puppyId") REFERENCES "Puppy" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Puppy_Trick_trickId_fkey" FOREIGN KEY ("trickId") REFERENCES "Trick" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Trick" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Puppy_name_key" ON "Puppy"("name");
