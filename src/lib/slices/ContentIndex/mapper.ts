import type { Client, Content, SliceMapper } from '@prismicio/client';
import type { ComponentProps } from 'svelte';
import ContentIndex from './index.svelte';

type Context = { client: Client<Content.AllDocumentTypes> };

const mapper: SliceMapper<
    Content.ContentIndexSlice,
    ComponentProps<ContentIndex>,
    Context
> = async ({ slice, context }) => {
    // Get the client from context
    const { client } = context;
    
    if (!client) {
        console.error("Prismic client is not available in context");
        return { slice, items: [] };
    }
    
    try {

        const contentType = slice.primary.content_type;
        
        let items: Content.BlogpostDocument[] | Content.ProjectDocument[] = [];
        

        if (contentType === 'Blog') {
            items = await client.getAllByType('blogpost');
        } else if (contentType === 'Project') {
            items = await client.getAllByType('project');
        } else {
            console.log("Unknown content type:", contentType);
        }
        
        
        return { 
            slice, 
            items 
        };
    } catch (error) {
        return { slice, items: [] };
    }
};

export default mapper;