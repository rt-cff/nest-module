import { Module } from "@nestjs/common";\
import { ConfigService } from "@nestjs/config";
import { HealthController } from "./health.controller";

@Module({
  imports: [],
  controllers: [HealthController],
  providers: [ConfigService],
})
export class HealthModule {}
