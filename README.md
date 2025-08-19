# Developer Blog

A clean, markdown-powered blog designed for developers who love to write. Built with Next.js and Tailwind CSS for optimal performance and developer experience.

## Features

- 🚀 **Fast & Responsive** - Built with Next.js and optimized for performance
- ✍️ **Markdown-First** - Write in pure markdown with frontmatter support
- 🏷️ **Smart Organization** - Tag-based categorization and date filtering
- 🔍 **Full-Text Search** - Find posts quickly across titles, content, and tags
- 🎨 **Developer-Friendly Design** - Dark theme optimized for readability
- 📱 **Mobile Responsive** - Works perfectly on all devices

## Quick Start

### Prerequisites

- Node.js 18+ 
- pnpm (recommended) or npm

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/sashakhad/blog-public.git
   cd blog-public
   ```

2. **Install dependencies:**
   ```bash
   pnpm install
   ```

3. **Start the development server:**
   ```bash
   pnpm run dev
   ```

4. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Writing Posts

### Create a New Post

```bash
pnpm run create
```

This creates a new markdown file in `posts/YYYY/MM/YYYY-MM-DD.md` with the current date.

### Post Structure

Posts are organized by date in the following structure:
```
posts/
├── 2024/
│   ├── 12/
│   │   ├── 2024-12-01.md
│   │   ├── 2024-12-02.md
│   │   └── 2024-12-03.md
│   └── 11/
│       └── 2024-11-30.md
```

### Frontmatter Format

Each post requires frontmatter at the top:

```markdown
---
title: "Your Post Title"
date: "2024.12.01"
tags: [development, react, javascript]
---

Your markdown content goes here...
```

**Required fields:**
- `title` - The post title
- `date` - Date in YYYY.MM.DD format
- `tags` - Array of tags for categorization

### Publishing Posts

```bash
pnpm run publish
```

This command:
1. Adds all posts to git
2. Commits changes with a descriptive message
3. Prepares your posts for deployment

## Available Scripts

- `pnpm run dev` - Start development server
- `pnpm run build` - Build for production
- `pnpm run start` - Start production server
- `pnpm run lint` - Run ESLint
- `pnpm run create` - Create a new blog post
- `pnpm run publish` - Commit and prepare posts for publishing

## Customization

### Colors and Theming

The blog uses a developer-friendly color scheme defined in `tailwind.config.ts`:

```typescript
colors: {
  "dev-primary": "#1a1a1a",    // Dark background
  "dev-accent": "#3b82f6",     // Blue accent
  "dev-text": "#f8fafc",       // Light text
  "dev-secondary": "#64748b",   // Gray secondary
  "dev-bg": "#0f172a",         // Page background
  "dev-card": "#1e293b",       // Card background
}
```

To customize colors, edit the `tailwind.config.ts` file and update the color values.

### Typography

The blog uses system fonts by default. To add custom fonts:

1. Add font imports to `app/layout.tsx`
2. Update the `fontFamily` section in `tailwind.config.ts`
3. Apply the font classes in your components

### Layout and Components

Key components you can customize:

- `app/components/SideBar.tsx` - Navigation and search
- `app/components/PostLink.tsx` - Post preview cards
- `app/components/FilteredPosts.tsx` - Post listing and pagination
- `app/globals.css` - Global styles and markdown formatting

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy automatically on every push

### Other Platforms

The blog is a standard Next.js application and can be deployed to:
- Netlify
- AWS Amplify
- Railway
- Any platform supporting Node.js

Build command: `pnpm run build`
Output directory: `.next`

## Project Structure

```
├── app/                    # Next.js app directory
│   ├── components/         # React components
│   ├── context/           # React context providers
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── lib/                   # Utility libraries
│   ├── posts.ts          # Post processing logic
│   ├── searchIndex.ts    # Search functionality
│   └── utils/            # Helper functions
├── posts/                # Blog posts (markdown)
│   └── YYYY/MM/          # Organized by date
├── public/               # Static assets
├── scripts/              # Build and utility scripts
│   └── posts/           # Post management scripts
└── package.json         # Dependencies and scripts
```

## Contributing

This is a template repository designed to be forked and customized. Feel free to:

1. Fork the repository
2. Customize the design and functionality
3. Add your own posts and content
4. Share your improvements with the community

## License

MIT License - feel free to use this for your own blog!

## Support

If you encounter any issues or have questions:

1. Check the existing issues on GitHub
2. Create a new issue with a detailed description
3. Include your environment details and steps to reproduce

---

Happy blogging! 🎉
