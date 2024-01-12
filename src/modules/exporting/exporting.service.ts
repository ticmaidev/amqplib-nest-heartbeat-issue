import { Injectable } from '@nestjs/common';

@Injectable()
export class ExportingService {

  async export(
    data: any,
    filename: string,
  ): Promise<string> {

    return filename
  }
}