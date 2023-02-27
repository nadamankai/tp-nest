import { Module } from '@nestjs/common';
import {v4 as uuid} from 'uuid' ;
export const Token = {
    "uuid":uuid
} ;
@Module({
providers : [
    {
        useValue :uuid ,
        provide : Token.uuid
    }
],
exports : [
    {
        useValue :uuid ,
        provide : Token.uuid
    }
]
})
export class CommonModule {

}
