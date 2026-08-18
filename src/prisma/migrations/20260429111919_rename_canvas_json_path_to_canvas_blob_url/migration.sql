/*
  Warnings:

  - You are about to drop the column `canvasJsonPath` on the `Project` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Project" DROP COLUMN "canvasJsonPath",
ADD COLUMN     "canvasBlobUrl" TEXT;