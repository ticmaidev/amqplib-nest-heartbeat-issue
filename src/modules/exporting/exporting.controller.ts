import { Controller } from '@nestjs/common';
import { Ctx, MessagePattern, Payload, RmqContext } from '@nestjs/microservices';
import { ExportingService } from 'src/modules/exporting/exporting.service';
import { CreateExportingDto } from 'src/modules/exporting/dto/create-exporting.dto';

@Controller()
export class ExportingController {
  constructor(
    private readonly service: ExportingService,
  ) { }

  @MessagePattern('createExporting')
  async create(
    @Payload() createExportingDto: CreateExportingDto,
    @Ctx() context: RmqContext
  ) {
    const message = context.getMessage()
    const channel = context.getChannelRef()

    console.log('processing')

    try {
      mySuperResourceIntensiveTask(9e30);
    }
    catch (error) {
      console.error(error)
    }

    channel.ack(message)
    return createExportingDto.filename
  }
}

async function mySuperResourceIntensiveTask(iterations: number) {
  return new Promise(resolve => {
    for (let i = 0; i < iterations; i++) {}
    resolve(true);
    console.log('done processing!')
  });
}