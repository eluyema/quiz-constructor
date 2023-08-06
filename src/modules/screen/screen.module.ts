import { Module } from '@nestjs/common';
import { ScreenController } from './screen.controller';
import { ScreenService } from './screen.service';
import { ScreenRepository } from './screen.repository';

@Module({
  controllers: [ScreenController],
  providers: [ScreenService, ScreenRepository],
})
export class ScreenModule {}
