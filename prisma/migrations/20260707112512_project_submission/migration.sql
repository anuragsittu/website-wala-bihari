/*
  Warnings:

  - You are about to alter the column `budget` on the `Project` table. The data in that column could be lost. The data in that column will be cast from `Decimal(10,2)` to `DoublePrecision`.
  - A unique constraint covering the columns `[projectCode]` on the table `Project` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `customerEmail` to the `Project` table without a default value. This is not possible if the table is not empty.
  - Added the required column `customerName` to the `Project` table without a default value. This is not possible if the table is not empty.
  - Added the required column `projectCode` to the `Project` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "public"."Project" DROP CONSTRAINT "Project_clientId_fkey";

-- AlterTable
ALTER TABLE "public"."Project" ADD COLUMN     "category" TEXT,
ADD COLUMN     "company" TEXT,
ADD COLUMN     "customerEmail" TEXT NOT NULL,
ADD COLUMN     "customerName" TEXT NOT NULL,
ADD COLUMN     "customerPhone" TEXT,
ADD COLUMN     "projectCode" TEXT NOT NULL,
ALTER COLUMN "budget" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "clientId" DROP NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Project_projectCode_key" ON "public"."Project"("projectCode");

-- AddForeignKey
ALTER TABLE "public"."Project" ADD CONSTRAINT "Project_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "public"."User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
