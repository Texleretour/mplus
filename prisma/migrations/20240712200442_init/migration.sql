/*
  Warnings:

  - You are about to drop the column `createdAt` on the `MplusRatingRecord` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_MplusRatingRecord" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "updatedAt" DATETIME NOT NULL,
    "rating" REAL NOT NULL,
    "date" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "characterId" INTEGER NOT NULL,
    CONSTRAINT "MplusRatingRecord_characterId_fkey" FOREIGN KEY ("characterId") REFERENCES "Character" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_MplusRatingRecord" ("characterId", "date", "id", "rating", "updatedAt") SELECT "characterId", "date", "id", "rating", "updatedAt" FROM "MplusRatingRecord";
DROP TABLE "MplusRatingRecord";
ALTER TABLE "new_MplusRatingRecord" RENAME TO "MplusRatingRecord";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
