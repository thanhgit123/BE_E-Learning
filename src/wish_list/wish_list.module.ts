import { Module } from '@nestjs/common';
import { WishListService } from './wish_list.service';
import { WishListController } from './wish_list.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WishList } from './entities/wish_list.entity';

@Module({
  controllers: [WishListController],
  providers: [WishListService],
  imports:[TypeOrmModule.forFeature([WishList])],
})
export class WishListModule {}
