// import {BifrostPage, PageNode} from '@Types'

// export const convertPageListToTree = (pages: BifrostPage[]) => {
//   if (pages.length === 0) return

//   const sortedPages = [...pages].sort(
//     (a, b) => a.urlPath.split('/').length - b.urlPath.split('/').length
//   )

//   const deepestLayer = (pages: BifrostPage[]) => {
//     const level = pages[0].urlPath.split('/').length
//     const layerPages: BifrostPage[] = []

//     for (let page of pages) {
//       if (page.urlPath.split('/').length !== level) {
//         break
//       }

//       layerPages.push(page)
//     }

//     return layerPages
//   }

//   const outerLayer = deepestLayer(sortedPages)

//   function processData(data: any): any {
//     if (!data) return

//     const values = []

//     for (var i = 0; i < data.length; i++) {
//       let val = data[i]

//       const children = val.children.map((i: string) =>
//         sortedPages.find(e => e.id === i)
//       )

//       val = {...val, children: processData(children)}

//       values.push(val)
//     }
//     return values
//   }

//   return processData(outerLayer) as PageNode[]
// }
