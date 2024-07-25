import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { StatusUpdateService } from "./statusUpdate.service";
import { StatusUpdateControllerBase } from "./base/statusUpdate.controller.base";

@swagger.ApiTags("statusUpdates")
@common.Controller("statusUpdates")
export class StatusUpdateController extends StatusUpdateControllerBase {
  constructor(
    protected readonly service: StatusUpdateService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
