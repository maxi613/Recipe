export interface project{
    id: string;
    name: string;
    creationDate: number; 
    datasets?: dataset[] ;
}

export interface dataset{
    id: string;
    name: string; 
    attributes: attribute<any>[]
    recipes: recipe[]
}


export interface attribute<T> {
    name: string,
    typeWritte: string
    disabled?: boolean | string
}

export interface recipe{
    id: string
    values: any[]
}



