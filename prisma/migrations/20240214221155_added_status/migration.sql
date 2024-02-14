/*
  Warnings:

  - You are about to drop the `Request` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Request";

-- CreateTable
CREATE TABLE "WhitelistRequest" (
    "id" SERIAL NOT NULL,
    "nickname" TEXT NOT NULL,
    "reason" TEXT,
    "status" TEXT NOT NULL DEFAULT 'pending',

    CONSTRAINT "WhitelistRequest_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "WhitelistRequest_nickname_key" ON "WhitelistRequest"("nickname");
