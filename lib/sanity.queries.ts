import { groq } from "next-sanity";

export const layoutQuery = groq`
  {
 "writeupCategories": *[_type == "category"]{'name':title, "path": "/writeup/"+_id,}
}
`;

export const photosQuery = groq`*[_type == "photos"]`;

export const writeupsByCategoryQuery = groq`{
  "writeupCategory":*[_type == "category" && _id==$slug][0]{title, description},
  "writeups": *[_type == "writeupPost" && references($slug)]{writeupPost,_createdAt,slug,writeupTags,title}
}`;

export const writeupPostQuery = groq`*[_type=="writeupPost" && slug.current==$slug][0]{writeupPost,_createdAt,slug,writeupTags,title,writeupCoverImage,writeupCategory->{_id,title}}`;
