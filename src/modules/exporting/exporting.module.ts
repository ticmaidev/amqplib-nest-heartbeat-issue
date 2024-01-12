import { Module } from '@nestjs/common';
import { ExportingService } from 'src/modules/exporting/exporting.service';
import { ExportingController } from 'src/modules/exporting/exporting.controller';
import { ConfigModule } from '@nestjs/config';
import configuration from 'src/config/configuration';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
    }),
  ],
  controllers: [ExportingController],
  providers: [ExportingService],
})
export class ExportingModule {}
