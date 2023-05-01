import { BLOCKS, INLINES, MARKS } from '@contentful/rich-text-types'

export { BLOCKS as blocks }
export { INLINES as inlines }
export { MARKS as marks }

export const isCustomBlock = (nodeType) => {
  return nodeType === BLOCKS.EMBEDDED_ENTRY
}

export const isCustomInline = (nodeType) => {
  return nodeType === INLINES.EMBEDDED_ENTRY
}

export const isCustomAsset = (nodeType) => {
  return nodeType === BLOCKS.EMBEDDED_ASSET
}

export const isCustomEntry = (nodeType) => {
  return isCustomBlock(nodeType) || isCustomInline(nodeType)
}
