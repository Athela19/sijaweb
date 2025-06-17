-- CreateEnum
CREATE TYPE "UserStatus" AS ENUM ('MURID', 'GURU');

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "status" "UserStatus" NOT NULL DEFAULT 'MURID';
