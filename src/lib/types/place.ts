export enum PlaceType {
  Incomum = 'Incomum',
  Cultural = 'Cultural',
  Ruinas = 'Ruínas',
  Cidade = 'Cidade',
  Arqueologico = 'Arqueológico',
  Estrutura = 'Estrutura',
  Natural = 'Natural',
}

export type Place = {
  name: string
  description: string
  state: string
  coordinates: number[]
  type: PlaceType[]
  img: string
  wikipedia: string
}
