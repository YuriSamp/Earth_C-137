
export interface ILocation{
      id: number,
      name: string,
      type: string,
      dimension: string,
      residents: [string],
      url: string,
      created: string
}

export interface FiltroLocation{
  info: {
    count: number,
    pages: number,
    next: string,
    prev: null
  },
  results: [
    {
      id: number,
      name: string,
      type: string,
      dimension: string,
        residents: [string]
      url: string,
      created: string
    }
  ]
}
