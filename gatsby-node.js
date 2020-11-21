// export async function createPages(){
//   
// }

const path = require("path");

async function turnGalleriesIntoPages({graphql, actions}){
  const galleryTemplate = path.resolve("./src/templates/Gallery.js");
  const {data} = await graphql(`
    query galleryQuery {
      collections: allSanityGallery {
        nodes {
          name
          slug {
            current
          }
        }
      }
    }
  `)

  data.collections.nodes.forEach(gallery => {
    console.log('Creating a Gallery page for: ', gallery.name)
    actions.createPage({
      path: `gallery/${gallery.slug.current}`,
      component: galleryTemplate,
      context: {
        name: gallery.name,
        slug: gallery.slug.current
      }
    });
  });
}

async function turnArtworksIntoPages({graphql, actions}){
  const artworkTemplate = path.resolve("./src/templates/Detail.js");
  const {data} = await graphql(`
    query artworkQuery {
      artworks:   allSanityArtwork {
        nodes {
          name
          slug {
            current
          }
        }
      }
    }
  `)

  data.artworks.nodes.forEach(artwork => {
    console.log('Creating an Artwork page for: ', artwork.name)
    actions.createPage({
      path: `detail/${artwork.slug.current}`,
      component: artworkTemplate,
      context: {
        name: artwork.name,
        slug: artwork.slug.current
      }
    });
  });
}


async function turnTextIntoPages({graphql, actions}){
  const textpageTemplate = path.resolve("./src/templates/Textpage.js");
  const {data} = await graphql(`
    query postsQuery {
      pages: allSanityPost {
        nodes {
          id
          name
          slug {
            current
          }
        }
      }
    }
  `);

  data.pages.nodes.forEach(page => {
    console.log('Creating a textpage for: ', page.name)
    actions.createPage({
      path: `${page.slug.current}`,
      component: textpageTemplate,
      context: {
        name: page.name,
        slug: page.slug.current,
      }
    });
  });
}

exports.createPages = async (params) => {
  console.log('Create pagesssssssssssssssssssssssssssssssssss.')
  await Promise.all([
    turnGalleriesIntoPages(params),
    turnTextIntoPages(params),
    turnArtworksIntoPages(params)
  ])

};
