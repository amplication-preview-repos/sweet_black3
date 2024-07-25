import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { StatusUpdateModuleBase } from "./base/statusUpdate.module.base";
import { StatusUpdateService } from "./statusUpdate.service";
import { StatusUpdateController } from "./statusUpdate.controller";
import { StatusUpdateResolver } from "./statusUpdate.resolver";

@Module({
  imports: [StatusUpdateModuleBase, forwardRef(() => AuthModule)],
  controllers: [StatusUpdateController],
  providers: [StatusUpdateService, StatusUpdateResolver],
  exports: [StatusUpdateService],
})
export class StatusUpdateModule {}
