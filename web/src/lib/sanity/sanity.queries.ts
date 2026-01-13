import { privateClient } from './sanity.client';

// Data

// Social
export const getSocialsData = async () => {
  try {
    const query = `*[_type == "socials"] | order(order asc) {
      platform,
      url,
      icon,
      isActive,
      openInNewTab,
      order
    }`;
    return await privateClient.fetch(query);
  } catch (error) {
    console.error('Failed to fetch all socials data:', error);
    return [];
  }
};

// Stack
export const getDevStackData = async () => {
  try {
    const query = `*[_type == "developmentStack"]{
      icon,
      title,
      description
    }`;
    return await privateClient.fetch(query);
  } catch (error) {
    console.error('Failed to fetch development stack data:', error);
    return [];
  }
};
export const getProdStackData = async () => {
  try {
    const query = `*[_type == "productivityStack"]{
      icon,
      title,
      description
    }`;
    return await privateClient.fetch(query);
  } catch (error) {
    console.error('Failed to fetch development stack data:', error);
    return [];
  }
};
export const getAllStacksData = async () => {
  try {
    const query = `
    {
      "dev":  *[_type == "developmentStack"]   | order(date desc){
        icon, title, description
      },
      "prod": *[_type == "productivityStack"] | order(date desc){
        icon, title, description
      }
    }`;
    
    const { dev, prod } = await privateClient.fetch(query);
    return [...dev, ...prod];          // ενιαίος πίνακας 6 στοιχείων
  } catch (error) {
    console.error("Failed to fetch stacks", error);
    return [];
  }
};
export const getLatestStacksData = async () => {
  try {
    const query = `
    {
      "dev":  *[_type == "developmentStack"]   | order(date desc)[0...3]{
        icon, title, description
      },
      "prod": *[_type == "productivityStack"] | order(date desc)[0...3]{
        icon, title, description
      }
    }`;
    
    const { dev, prod } = await privateClient.fetch(query);
    return [...dev, ...prod];          // ενιαίος πίνακας 6 στοιχείων
  } catch (error) {
    console.error("Failed to fetch stacks", error);
    return [];
  }
};

// Blog
export const getBlogData = async () => {
  try {
    const query = `*[_type == "blog"] | order(date desc) {
      title,
      "slug": slug.current,
      excerpt,
      coverImage,
      "author": author->{name, picture},
      date,
      content
    }`;
    return await privateClient.fetch(query);
  } catch (error) {
    console.error('Failed to fetch blog data:', error);
    return [];
  }
};
export const getLatestBlogData = async () => {
  try {
    const query = `*[_type == "blog"] | order(date desc)[0...3] {
      title,
      "slug": slug.current,
      excerpt,
      coverImage,
      "author": author->{name, picture},
      date,
      content
    }`;
    return await privateClient.fetch(query);
  } catch (error) {
    console.error('Failed to fetch latest blog data:', error);
    return [];
  }
};
export const getAuthorsData = async () => {
  try {
    const query = `*[_type == "author"] | order(name asc) {
      name,
      picture
    }`;
    return await privateClient.fetch(query);
  } catch (error) {
    console.error('Failed to fetch authors data:', error);
    return [];
  }
};
export const getBlogPostBySlug = async (slug: string) => {
  try {
    const query = `*[_type == "blog" && slug.current == $slug][0] {
      title,
      "slug": slug.current,
      excerpt,
      coverImage,
      "author": author->{name, picture},
      date,
      content
    }`;
    return await privateClient.fetch(query, { slug });
  } catch (error) {
    console.error('Failed to fetch blog post:', error);
    return null;
  }
};







{/*
  const query = `*[_type == "heroSectionType"][0]{
    welcometext,
    author,
    description,
    image,
    buttons,
    socials
  }`;
  return await privateClient.fetch(query);
*/}




























export const getTestData = async (language: string = 'el') => {
  try {
    const query = `*[_type == "test"] | order(date desc) {
      "title": title.${language},
      "slug": slug.current,
      "excerpt": excerpt.${language},
      coverImage,
      "author": author->{name, picture},
      date,
      "content": content.${language},
            
      "articleCategories": articleCategories[]->{
        "slug": slug.current,
        "title": title
      }

    }`;
    return privateClient.fetch(query, { language })
  } catch (error) {
    console.error('Failed to fetch blog data:', error);
    return [];
  }
};
export const getLatestTestData = async (language: string = 'el') => {
  try {
    const query = `*[_type == "test"] | order(date desc)[0...3] {
      "title": title.${language},
      "slug": slug.current,
      "excerpt": excerpt.${language},
      coverImage,
      "author": author->{name, picture},
      date,
      "content": content.${language},

            
      "articleCategories": articleCategories[]->{
        "slug": slug.current,
        "title": title
      }


    }`;
    return await privateClient.fetch(query);
  } catch (error) {
    console.error('Failed to fetch latest blog data:', error);
    return [];
  }
};
export const getTestPostBySlug = async (slug: string, language: string = 'el') => {
  try {
    const query = `*[_type == "test" && slug.current == $slug][0] {
      "title": title.${language},
      "slug": slug.current,
      "excerpt": excerpt.${language},
      coverImage,
      "author": author->{name, picture},
      date,
      "content": content.${language},

      
      "articleCategories": articleCategories[]->{
        "slug": slug.current,
        "title": title
      }


    }`;
    return await privateClient.fetch(query, { slug, language });
  } catch (error) {
    console.error('Failed to fetch blog post:', error);
    return null;
  }
};
export const checkTranslation = async (slug: string, language: string) => {
  try {
    const query = `*[_type == "test" && slug.current == $slug][0] {
      "hasTitle": defined(title.${language}),
      "hasContent": defined(content.${language}),
      "title": title.${language}
    }`;
    const result = await privateClient.fetch(query, { slug });
    return result?.hasTitle && result?.hasContent;
  } catch (error) {
    console.error('Failed to check translation:', error);
    return false;
  }
};
