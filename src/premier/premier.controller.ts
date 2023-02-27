import { Controller, Delete, Get, Patch, Post, Put } from '@nestjs/common';

@Controller('premier')
export class PremierController {
@Get()
    getPremier(){
        console.log("get");
        return 'methode get : lister les elements' ;
    }


    @Post()
    postPremier(){
        console.log("post");
        return 'methode post: ajouter element' ;
    }
    @Delete()
    DeletePremier(){
        console.log("delete");
        return 'methode delete : supprimer element' ;
    }
    @Patch()
    patchPremier(){
        console.log("patch");
        return 'methode patch :' ;
    }

    @Put()
    putPremier(){
        console.log("put");
        return 'methode put : modifier un element' ;
    }
}
