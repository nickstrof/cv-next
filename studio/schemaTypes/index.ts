import { // Locale
    localeString, 
} from './localeString'

import { // Locale
    localePortableText,
} from './localePortableText'

import { // Locale
    localeText 
} from './localeText'
import { // Generic
    socialType,
} from './generic/index'

import { // Stack Page
    developmentStackType,
    productivityStackType
} from './stackPage/index'

import { // Blog Page
    authorSchema,
    test,
    articleCategories,
} from './blogPage/index'

export const schemaTypes = [
    // Project
    socialType,
    
    // Locale
    localeString,
    localePortableText,
    localeText,

    // Home Page

    // About Page

    // Project Page

    // Contact Page

    // Blog Page
    authorSchema,
    test,
    articleCategories,

    // Stack Page
    developmentStackType,
    productivityStackType,
]