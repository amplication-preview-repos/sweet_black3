import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { StatusUpdateResolverBase } from "./base/statusUpdate.resolver.base";
import { StatusUpdate } from "./base/StatusUpdate";
import { StatusUpdateService } from "./statusUpdate.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => StatusUpdate)
export class StatusUpdateResolver extends StatusUpdateResolverBase {
  constructor(
    protected readonly service: StatusUpdateService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
