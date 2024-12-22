import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ProductsModule } from './products/products.module';
import { PrismaService } from './prisma/prisma.service';

@Module({
  imports: [ProductsModule],
  controllers: [AppController], // Include the AppController here
  providers: [PrismaService],
})
export class AppModule {}
