# Developer Blog

A clean, markdown-powered blog designed for developers who love to write. Built with Next.js and Tailwind CSS for optimal performance and developer experience.

## Why This Blog?

**The Developer's Dream Blog Platform** - Finally, a blogging solution built by developers, for developers:

- ✍️ **Pure Markdown** - Write in your favorite editor, no web interfaces
- ⚡ **3-Command Workflow** - From idea to published post in seconds
- 🎯 **Zero Configuration** - No databases, no admin panels, no complexity
- 🚀 **Git-Based** - Version control your content like code
- 🎨 **Beautiful Output** - Professional design that makes your content shine
- 📱 **Developer-First** - Dark theme, responsive, fast, and clean

**Stop fighting with WordPress, Ghost, or Medium.** Start writing.

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

## The Developer's Workflow (3 Simple Steps)

### 1. Create a New Post

```bash
pnpm run create
```

**What happens:**
- Creates a new markdown file at `posts/2024/12/2024-12-19.md` (today's date)
- Generates proper frontmatter with title, date, and default tags
- Adds starter content to get you writing immediately
- Organizes everything in a clean date-based structure

**Output:**
```
✅ New post created at: posts/2024/12/2024-12-19.md
ℹ️  Edit your post and then run 'pnpm run publish' when ready.
```

### 2. Write Your Content

Open the generated file in your favorite editor. You'll see:

```markdown
---
title: "New Post on 2024-12-19"
date: "2024.12.19"
tags: [development, blog]
---

Write your content here.

This is a sample post created with the developer blog. You can write in markdown and use all the standard formatting options.

## Features

- Clean markdown writing experience
- Tag-based organization
- Fast search and filtering
- Responsive design

Happy writing!
```

**Edit the frontmatter:**
- `title` - Your post title
- `date` - Date in YYYY.MM.DD format (auto-generated)
- `tags` - Array of tags for categorization

**Write your content** using standard markdown. Support for:
- Headers, lists, code blocks, links, images
- Syntax highlighting for code
- Responsive tables and media
- All standard markdown features

### 3. Publish Your Post

```bash
pnpm run publish
```

**What happens:**
- Automatically adds all posts to git
- Creates a descriptive commit message with today's date
- Prepares everything for deployment
- No manual git commands needed

**Output:**
```
✅ Post committed successfully!
ℹ️  Your post is now ready. Push to your repository when ready to publish.
```

## From Markdown to Beautiful Pages

Your simple markdown files automatically become:

- **Responsive blog posts** with professional typography
- **Automatic reading time** calculation
- **Tag-based organization** and filtering
- **Full-text search** across all content
- **Date-based archives** by year and month
- **Mobile-optimized** layouts
- **Fast loading** with Next.js optimization

No databases. No complex setup. Just markdown → beautiful blog.

## File Structure

Posts are automatically organized by date:

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

## Tag Management

```bash
pnpm run tags:collect
```

Automatically collects and organizes all tags from your posts for better categorization and search functionality.

## Available Scripts

### Blog Management
- `pnpm run create` - **Create a new blog post** with proper date structure and frontmatter
- `pnpm run publish` - **Publish your posts** by committing to git with descriptive messages
- `pnpm run tags:collect` - **Organize tags** by collecting and indexing all tags from posts

### Development
- `pnpm run dev` - **Start development server** at http://localhost:3000
- `pnpm run build` - **Build for production** with optimizations
- `pnpm run start` - **Start production server** from built files
- `pnpm run lint` - **Run ESLint** to check code quality

### Complete Workflow Example

```bash
# 1. Create a new post
pnpm run create
# ✅ New post created at: posts/2024/12/2024-12-19.md

# 2. Edit the post in your favorite editor
# Write your amazing content...

# 3. Publish when ready
pnpm run publish
# ✅ Post committed successfully!

# 4. Push to deploy (optional)
git push origin main
```

**That's it!** Your markdown is now a beautiful blog post.

## Customization

### Colors and Theming

The blog uses a developer-friendly color scheme defined in `tailwind.config.ts`:

```typescript
colors: {
  "dev-primary": "#1a1a1a",    // Dark background
  "dev-accent": "#10b981",     // Emerald accent
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
