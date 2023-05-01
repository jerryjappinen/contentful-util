// NOTE: it would be better to use the official package
// But the extra dependency can lead to compatibility issues on Nuxt 3
// https://github.com/contentful/rich-text/blob/master/packages/rich-text-types/src/index.ts
export const BLOCKS = {
  DOCUMENT: 'document',
  PARAGRAPH: 'paragraph',

  HEADING_1: 'heading-1',
  HEADING_2: 'heading-2',
  HEADING_3: 'heading-3',
  HEADING_4: 'heading-4',
  HEADING_5: 'heading-5',
  HEADING_6: 'heading-6',

  OL_LIST: 'ordered-list',
  UL_LIST: 'unordered-list',
  LIST_ITEM: 'list-item',

  HR: 'hr',
  QUOTE: 'blockquote',

  EMBEDDED_ENTRY: 'embedded-entry-block',
  EMBEDDED_ASSET: 'embedded-asset-block',

  TABLE: 'table',
  TABLE_ROW: 'table-row',
  TABLE_CELL: 'table-cell',
  TABLE_HEADER_CELL: 'table-header-cell'
}

export const INLINES = {
  HYPERLINK: 'hyperlink',
  ENTRY_HYPERLINK: 'entry-hyperlink',
  ASSET_HYPERLINK: 'asset-hyperlink',
  EMBEDDED_ENTRY: 'embedded-entry-inline'
}

export const MARKS = {
  BOLD: 'bold',
  ITALIC: 'italic',
  UNDERLINE: 'underline',
  CODE: 'code',
  SUPERSCRIPT: 'superscript',
  SUBSCRIPT: 'subscript'
}

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
