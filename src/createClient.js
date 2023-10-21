import contentful from 'contentful'

// Export constructor that can be used elsewhere
export default ({
  space,
  spaceId,
  accessToken,
  previewAccessToken,
  environment
}) => {
  return contentful.createClient({
    space: spaceId || space,
    host: previewAccessToken ? 'preview.contentful.com' : undefined,
    environment: environment || 'master',
    accessToken: previewAccessToken || accessToken
  })
}
