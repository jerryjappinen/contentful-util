import contentful from 'contentful-management'

export default async (managementAccessToken, spaceId, environment) => {
  const managementClient = contentful.createClient({
    accessToken: managementAccessToken
  })

  const space = await managementClient.getSpace(spaceId)

  return space.getEnvironment(environment || 'master')
}
