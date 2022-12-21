
export interface IPersonagens {
  id : number,
  name : string,
  status: string,
  species : string,
  type : string,
  gender : string,
  origin : {
    name : string,
    Location : string
  }
  location : {
    name : string,
    Location : string
  }
  image : string,
  episode : [],
  url : string,
  created : string,
}