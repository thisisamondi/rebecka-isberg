// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// We import object and document schemas
import blockContent from './blockContent'
import category from './category'
import artist from './artist'
import country from './country'
import about from './about'
import home from './home'
import work from './work'
import contact from './contact'
import figure from './figure'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.
    artist,
    category,
    country,
    about,
    home,
    work,
    contact,
    figure,
    // When added to this list, object types can be used as
    // { type: 'typenamef' } in other document schemas
    blockContent,
  ]),
})
