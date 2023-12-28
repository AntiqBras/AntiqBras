export function convertCoordinates(coordinates: number[]): string {
  const [latitude, longitude] = coordinates

  const toDegreesMinutesSeconds = (
    coord: number,
    isLatitude: boolean,
  ): string => {
    const absolute = Math.abs(coord)
    const degrees = Math.floor(absolute)
    const minutes = Math.floor((absolute - degrees) * 60)
    const seconds = Math.round(((absolute - degrees) * 3600) % 60)

    const direction = isLatitude
      ? coord < 0
        ? 'S'
        : 'N'
      : coord < 0
      ? 'W'
      : 'E'

    return `${degrees}° ${minutes}' ${seconds}" ${direction}`
  }

  const latitudeString = toDegreesMinutesSeconds(latitude, true)
  const longitudeString = toDegreesMinutesSeconds(longitude, false)

  return `${latitudeString}, ${longitudeString}`
}
