import { Controller, Get, HttpCode, HttpStatus, Param, ParseIntPipe } from "@nestjs/common";
import { HttpErrorByCode } from "@nestjs/common/utils/http-error-by-code.util";
import { Postagem } from "../entities/entity.postagem";
import { PostagemService } from "../service/postagem.service";

@Controller("/postagens")
export class PostagemController{
    constructor(private readonly PostagemService: PostagemService) {}
    @Get()
    @HttpCode(HttpStatus.OK)
    findAll(): Promise<Postagem[]>{
        return this.PostagemService.findAll();
    }

    @Get('/:id')
    @HttpCode(HttpStatus.OK)
    findById(@Param('id', ParseIntPipe) id: number): Promise<Postagem> {
        return PostagemService.findById(id)
    }

}