# Mashambanzou Laravel CMS

This Laravel app provides a MySQL-backed success stories CMS for Mashambanzou Care Trust.

## Local Setup

1. Create a MySQL database:

```bash
mysql -u root -e "CREATE DATABASE mashambanzou CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;"
```

2. Configure `laravel/.env`:

```env
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=mashambanzou
DB_USERNAME=root
DB_PASSWORD=

NEXT_SITE_URL=http://localhost:3000

ADMIN_EMAIL=admin@mashambanzou.test
ADMIN_PASSWORD=change-me
```

3. Install and prepare the app:

```bash
cd laravel
composer install
php artisan key:generate
php artisan storage:link
php artisan migrate
php artisan serve
```

## URLs

- Public success stories: `http://127.0.0.1:8000/success-stories`
- Admin login: `http://127.0.0.1:8000/admin/login`
- Admin stories: `http://127.0.0.1:8000/admin/success-stories`
- Admin website images: `http://127.0.0.1:8000/admin/website-media`

The admin panel supports title, date, picture, summary, story text, publish/draft state, editing and deletion. Uploaded story images are stored on Laravel's public disk and served from `/storage`.

The Website Images area lets an admin replace images across the public Next.js website. It shows the current image appearing on the site first, including built-in fallback images from `NEXT_SITE_URL`, then lets the admin replace them with uploaded images.

## Next.js Integration

The existing Next.js feed at `/api/posts` and the Website Images bridge at `/api/website-media` can read from this Laravel app when `LARAVEL_API_URL` is set in the root `.env.local`:

```env
LARAVEL_API_URL=http://127.0.0.1:8000
```

If the Laravel URL is not configured, the current Next.js feed falls back to the existing Vercel KV/Blob story storage.

