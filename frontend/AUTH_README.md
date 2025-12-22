# Frontend Authentication System

This is a modern authentication system built with Next.js 16, React 19, Zustand, and Tailwind CSS.

## Features

- 🔐 **Secure Authentication** - JWT tokens with httpOnly cookies
- 🎨 **Modern UI** - Built with Tailwind CSS and shadcn/ui components
- 🚀 **State Management** - Zustand for simple and efficient state management
- 📱 **Responsive Design** - Works seamlessly on all devices
- 🌙 **Dark Mode Support** - Automatic dark mode support

## Project Structure

```
frontend/
├── app/
│   ├── page.tsx              # Landing page
│   ├── login/
│   │   └── page.tsx          # Login page
│   ├── register/
│   │   └── page.tsx          # Registration page
│   └── dashboard/
│       └── page.tsx          # Protected dashboard
├── src/
│   ├── components/
│   │   └── ui/               # Reusable UI components
│   │       ├── button.tsx
│   │       ├── input.tsx
│   │       └── card.tsx
│   ├── lib/
│   │   ├── api/
│   │   │   └── auth.api.ts   # API service layer
│   │   └── utils.ts          # Utility functions
│   ├── stores/
│   │   └── auth.store.ts     # Zustand auth store
│   └── types/
│       └── auth.ts           # TypeScript types
└── .env.local                # Environment variables
```

## Getting Started

1. **Install dependencies:**

   ```bash
   npm install zustand
   ```

2. **Configure environment variables:**
   Create `.env.local` file:

   ```
   NEXT_PUBLIC_API_URL=http://localhost:8000
   ```

3. **Run the development server:**

   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Pages

### Landing Page (`/`)

- Hero section with call-to-action buttons
- Feature highlights
- Modern gradient design

### Login Page (`/login`)

- Email and password authentication
- Error handling with user-friendly messages
- Redirect to dashboard on success

### Register Page (`/register`)

- User registration with email and password
- Password confirmation
- Client-side validation
- Automatic login after registration

### Dashboard Page (`/dashboard`)

- Protected route (requires authentication)
- User profile display
- Logout functionality

## State Management (Zustand)

The auth store (`src/stores/auth.store.ts`) manages:

- User authentication state
- Login/Register/Logout actions
- Loading states
- Error handling

```typescript
const { user, isAuthenticated, login, register, logout } = useAuthStore();
```

## API Integration

The API service layer (`src/lib/api/auth.api.ts`) handles:

- HTTP requests to backend
- Automatic cookie management
- Error handling
- TypeScript type safety

## UI Components

Built with shadcn/ui style components:

- **Button** - Various variants (default, outline, ghost)
- **Input** - Styled input fields with icons
- **Card** - Container components for content

## Styling

- **Tailwind CSS** - Utility-first CSS framework
- **Gradients** - Modern gradient effects
- **Dark Mode** - Automatic dark mode support
- **Responsive** - Mobile-first design

## Backend Integration

The frontend connects to your Deno backend:

- `POST /auth/register` - User registration
- `POST /auth/login` - User login
- Cookies handled automatically by the browser

## Security Features

- HttpOnly cookies for JWT tokens
- Client-side input validation
- Error message sanitization
- CSRF protection via SameSite cookies
- Secure flag for production

## Customization

### Change API URL

Edit `.env.local`:

```
NEXT_PUBLIC_API_URL=https://your-api-url.com
```

### Modify UI Theme

Edit Tailwind classes in components or customize `tailwind.config.ts`

### Add More Auth Features

Extend `auth.store.ts` and `auth.api.ts` for additional functionality

## Best Practices Used

✅ TypeScript for type safety  
✅ Modular component structure  
✅ Separated concerns (API, Store, UI)  
✅ Error handling at all levels  
✅ Loading states for better UX  
✅ Responsive design  
✅ Accessible UI components  
✅ Clean and maintainable code

## Technologies

- **Next.js 16** - React framework with App Router
- **React 19** - Latest React version
- **Zustand** - Lightweight state management
- **Tailwind CSS** - Utility-first CSS
- **TypeScript** - Type safety
- **Lucide React** - Beautiful icons

## Next Steps

- Add password reset functionality
- Implement email verification
- Add OAuth providers (Google, GitHub)
- Add user profile management
- Implement role-based access control
- Add remember me functionality
- Implement refresh tokens
