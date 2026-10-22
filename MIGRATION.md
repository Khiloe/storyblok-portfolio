# Migration Case Study: HTML Portfolio to Storyblok

## 1. Content Inventory
| Old URL | Page Title | Type | Keep, Merge, or Retire | New Storyblok URL | Notes |
| :--- | :--- | :--- | :--- | :--- | :--- |
| / | Home | Page | Keep | / | Used as the main hero section. |
| /projects.html | Projects | Page | Keep | /projects | Migrated project links to Feature blocks. |
| /about.html | About | Page | Merge | /about | Merged with contact info and profile picture. |
| /contact.html | Contact | Page | Retire | /contact | Old contact page retired, replaced with CMS contact cards. |

## 2. Redirect Map
| Old URL | New URL | Redirect Type | Tested (yes/no) |
| :--- | :--- | :--- | :--- |
| /projects.html | /projects | 301 (Permanent) | Yes |
| /about.html | /about | 301 (Permanent) | Yes |
| /contact.html | /contact | 301 (Permanent) | Yes |

## 3. QA Verification
- [x] Tested all new Storyblok URLs on desktop.
- [x] Tested all new Storyblok URLs on mobile viewport.
- [x] Verified text content matched the original source.
- [x] Verified all image assets loaded with correct Alt Text.
- [x] Verified all internal links and external redirects.