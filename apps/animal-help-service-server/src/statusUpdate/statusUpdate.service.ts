import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { StatusUpdateServiceBase } from "./base/statusUpdate.service.base";

@Injectable()
export class StatusUpdateService extends StatusUpdateServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
