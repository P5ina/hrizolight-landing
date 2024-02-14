-- CreateTable
CREATE TABLE "Request" (
    "id" SERIAL NOT NULL,
    "nickname" TEXT NOT NULL,
    "reason" TEXT,

    CONSTRAINT "Request_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Request_nickname_key" ON "Request"("nickname");
