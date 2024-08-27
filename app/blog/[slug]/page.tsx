import BlogContent from '@/components/BlogContent';
import { IBlog, getBlog, getBlogs } from '@/lib/getblogs';
import constants from '@/shared/constants';
import axios from 'axios';
import { notFound } from 'next/navigation';
import { useEffect, useState } from 'react';

// Static Params
export async function generateStaticParams() {
    try {
        const blogFiles = await getBlogs();
        return blogFiles.map((file) => ({ slug: file.slug }));
    } catch (err) {
        console.error("Failed to generate static params:", err);
        return [];
    }
}

// Blog page content
export default async function SingleBlogPage({ params }: { params: any }) {
    const blog = await getBlog(params.slug);
    const viewsRes = await axios.post(
        `${
            constants.VIEWS_ENDPOINT
        }/update?slug=${encodeURIComponent(params.slug)}`
    );
    const viewsData = viewsRes.data;

    return <BlogContent blog={blog!} views={viewsData['payload']['views']} slug={params.slug} />;
}
