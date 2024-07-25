/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  StatusUpdate as PrismaStatusUpdate,
  Bowl as PrismaBowl,
  User as PrismaUser,
} from "@prisma/client";

export class StatusUpdateServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.StatusUpdateCountArgs, "select">
  ): Promise<number> {
    return this.prisma.statusUpdate.count(args);
  }

  async statusUpdates(
    args: Prisma.StatusUpdateFindManyArgs
  ): Promise<PrismaStatusUpdate[]> {
    return this.prisma.statusUpdate.findMany(args);
  }
  async statusUpdate(
    args: Prisma.StatusUpdateFindUniqueArgs
  ): Promise<PrismaStatusUpdate | null> {
    return this.prisma.statusUpdate.findUnique(args);
  }
  async createStatusUpdate(
    args: Prisma.StatusUpdateCreateArgs
  ): Promise<PrismaStatusUpdate> {
    return this.prisma.statusUpdate.create(args);
  }
  async updateStatusUpdate(
    args: Prisma.StatusUpdateUpdateArgs
  ): Promise<PrismaStatusUpdate> {
    return this.prisma.statusUpdate.update(args);
  }
  async deleteStatusUpdate(
    args: Prisma.StatusUpdateDeleteArgs
  ): Promise<PrismaStatusUpdate> {
    return this.prisma.statusUpdate.delete(args);
  }

  async getBowl(parentId: string): Promise<PrismaBowl | null> {
    return this.prisma.statusUpdate
      .findUnique({
        where: { id: parentId },
      })
      .bowl();
  }

  async getUser(parentId: string): Promise<PrismaUser | null> {
    return this.prisma.statusUpdate
      .findUnique({
        where: { id: parentId },
      })
      .user();
  }
}
