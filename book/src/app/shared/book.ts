
export class Book {
    nom: string | undefined;
    selectedCategory(arg0: string, selectedCategory: any) {
      throw new Error('Method not implemented.');
    }
    id: number|any;
    code: string;
    name: string;
    prix: number;
    auteur: string;
    image?: string;
    categoryId: number;
    description: string;
 // categoryDTO?: any|undefined |Category;

    constructor(
        id: any,
        code: string,
        name: string,
        prix: number,
        auteur: string,
        image: string,
       categoryId: number,
        description: string,
   //     categoryDTO?: Category 

    ) {
        this.id = id;
        this.code = code;
        this.name = name;
        this.prix = prix;
        this.auteur = auteur;
        this.image = image;
        this.categoryId = categoryId;
        this.description = description;
      //  this.categoryDTO= categoryDTO
    }
}

