-- CreateTable
CREATE TABLE "Bet" (
    "id" TEXT NOT NULL,
    "question" TEXT NOT NULL,
    "description" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "PriceHistorySendLog" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "bet_id" TEXT NOT NULL,
    "question" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateIndex
CREATE UNIQUE INDEX "Bet_id_key" ON "Bet"("id");
