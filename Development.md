CSR => Client Side Rendering
    Recollecting drawbacks of CSR
    1. SEO
        Since Content relies on JavaScript to render on the client side, search engines
        often struggle to index it properly
    2. Performance and UX
        Users can suffer from slow load times, as their browsers download, parse, and 
        execute JavaScript Before seeing any meaningful content
SSR => Server Side Rendering
    Pros of SSR
    1. SEO
        Search engines can now easily index the server-rerendered content, solving our SEO Problems
    2. Performance and UX
        Users see actual HTML content right away instead of  staring at a blank screen or loading spinner

    Hydration

    Server Side Solutions

    Static Site Genration (SSG)
        SSG happends during build time when you deploy your application to the server.
        This results in page that are already rendered and ready to serve. it's perfect for content 
        that stays relatively stable, like blog posts.
    Server Side Rendering
        SSR, on the other hand, redneres pages on-demand when users requests them.
        it's ideal for personalized content like social media feeds where HTML changes based
        on who's logged in.

    Drawbacks of SSR
    