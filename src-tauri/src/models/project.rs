

pub struct Project{
    id: String, 
    pub name: String, 
    creationDate: i64, 
    recipes: Vec<Recipe>
}


struct Recipe{
    id: String, 
    name: String, 
    attributes: Vec<Attribute>
}

struct  Attribute{
    name: String, 
    datatype: String, 
    value: Vec<String>
}