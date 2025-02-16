export interface UnsplashImage {
    id: string;
    slug: never;
    alternative_slugs: never;
    created_at: never;
    updated_at: never;
    promoted_at: never;
    width: never;
    height: never;
    color: never;
    blur_hash: never;
    description: never;
    alt_description: string;
    breadcrumbs: never;
    urls: {
        raw: string;
        full: string;
        regular: string;
        small: string;
        thumb: string;
        small_s3: string;
    };
    links: never;
    likes: number;
    liked_by_user: never;
    current_user_collections: never;
    sponsorship: never;
    topic_submissions: {
        [key: string]: {
            status: string;
            approved_on: string;
        };
    };
    asset_type: never;
    user: {
        id: never;
        updated_at: never;
        username: never;
        name: string;
        first_name: never;
        last_name: never;
        twitter_username: never;
        portfolio_url: never;
        bio: never;
        location: never;
        links: never;
        profile_image: never;
        instagram_username: never;
        total_collections: never;
        total_likes: never;
        total_photos: never;
        accepted_tos: never;
        for_hire: never;
        social: never;
    };
}