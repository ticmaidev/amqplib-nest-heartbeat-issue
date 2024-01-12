import { Module } from '@nestjs/common';
import { AppController } from 'src/app.controller';
import { AppService } from 'src/app.service';
import { ExportingModule } from 'src/modules/exporting/exporting.module';

@Module({
  imports: [
    ExportingModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
