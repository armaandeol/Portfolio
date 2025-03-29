<script lang="ts">
    import Bounded from '$lib/components/Bounded.svelte';
    import Heading from '$lib/components/Heading.svelte';
    import { isFilled, type Content } from '@prismicio/client';
    import { PrismicRichText } from '@prismicio/svelte';
    import ContentList from './ContentList.svelte';
    import { onMount } from 'svelte';

    export let slice: Content.ContentIndexSlice;
    export let items: Content.BlogpostDocument[] | Content.ProjectDocument[] = [];
    
    let error = '';
    
    onMount(() => {
        
        if (!items || items.length === 0) {
            error = `No ${slice.primary.content_type || 'content'} items found.`;
            console.warn(error);
        }
    });
</script>

<Bounded data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
    <Heading size="xl" class="mb-8">
        {slice.primary.heading}
    </Heading>
    
    {#if isFilled.richText(slice.primary.description)}
        <div class="prose prose-xl prose-invert mb-10">
            <PrismicRichText field={slice.primary.description} />
        </div>
    {/if}
    
    {#if error}
        <p class="text-yellow-400 mb-6">{error}</p>
    {/if}

    <ContentList
        {items}
        fallbackItemImage={slice.primary.fallback_item_image}
        viewMoreText={slice.primary.view_more_text}
    />
</Bounded>