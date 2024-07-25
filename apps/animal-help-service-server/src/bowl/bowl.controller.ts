import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { BowlService } from "./bowl.service";
import { BowlControllerBase } from "./base/bowl.controller.base";

@swagger.ApiTags("bowls")
@common.Controller("bowls")
export class BowlController extends BowlControllerBase {
  constructor(
    protected readonly service: BowlService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
