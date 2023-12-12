export interface project{
    id: string;
    name: string;
    creationDate: number; 
    recipes: recipe[] | undefined;
}

export interface recipe{
    id: string;
    name: string; 
    attributes?: attribute[] | undefined;
}

 interface attribute{
    name: string; 
    datatype: any;
    values: any[];  

}