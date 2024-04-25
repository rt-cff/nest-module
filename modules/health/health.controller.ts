import { Controller, Get, Inject } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";

@Controller("health")
export class HealthController {
  @Inject()
  private readonly config: ConfigService;

  @Get()
  health(): string {
    return "success " + this.config.get("port");
  }
}
