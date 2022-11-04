import { HttpException, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Postagem } from "../entities/entity.postagem";

@Injectable()
export class PostagemService{

    constructor(
        @InjectRepository(Postagem)
        private PostagemRepository: Repository<Postagem>
    ) { }

    async findAll(): Promise<Postagem[]> {
        return await this.PostagemRepository.find()

    }

    async findById(id: number): Promise<Postagem>{
        let postagem = await this.PostagemRepository.findOne({
            where: {
                id
            }
});
            if(!postagem)
            throw new HttpException('Postagem não existe')
        }
}

