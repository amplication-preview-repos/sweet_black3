import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { BowlModuleBase } from "./base/bowl.module.base";
import { BowlService } from "./bowl.service";
import { BowlController } from "./bowl.controller";
import { BowlResolver } from "./bowl.resolver";

@Module({
  imports: [BowlModuleBase, forwardRef(() => AuthModule)],
  controllers: [BowlController],
  providers: [BowlService, BowlResolver],
  exports: [BowlService],
})
export class BowlModule {}
