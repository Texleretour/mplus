-- CreateTable
CREATE TABLE "Character" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "name" TEXT NOT NULL,
    "realm" TEXT NOT NULL,
    "faction" TEXT NOT NULL,
    "class" TEXT NOT NULL,
    "specialization" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "MplusRatingRecord" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "rating" REAL NOT NULL,
    "date" DATETIME NOT NULL,
    "characterId" INTEGER NOT NULL,
    CONSTRAINT "MplusRatingRecord_characterId_fkey" FOREIGN KEY ("characterId") REFERENCES "Character" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
