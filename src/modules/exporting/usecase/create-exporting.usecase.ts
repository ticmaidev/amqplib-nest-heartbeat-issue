import { CreateExportingDto } from "src/modules/exporting/dto/create-exporting.dto";
import { ExportingService } from "src/modules/exporting/exporting.service";

async function CreateExporting(
  dto: CreateExportingDto,
  service: ExportingService
): Promise<string> {

  try {
    return await service.export(dto.data, dto.filename)
  }
  catch (error) {
    console.error(error)
  }
}

export { CreateExporting };