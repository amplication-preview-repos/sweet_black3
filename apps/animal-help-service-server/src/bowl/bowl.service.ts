import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { BowlServiceBase } from "./base/bowl.service.base";

@Injectable()
export class BowlService extends BowlServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
