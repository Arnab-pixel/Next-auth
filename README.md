<div align="center">
  <br />
  <br />

  <div>
    <img src="https://img.shields.io/badge/-TypeScript-black?style=for-the-badge&logoColor=white&logo=typescript&color=3178C6" alt="typescript" />
    <img src="https://img.shields.io/badge/-Next_JS-black?style=for-the-badge&logoColor=white&logo=nextdotjs&color=000000" alt="nextdotjs" />
    <img src="https://img.shields.io/badge/-Tailwind_CSS-black?style=for-the-badge&logoColor=white&logo=tailwindcss&color=06B6D4" alt="tailwindcss" />
  </div>

  <h3 align="center">An Authentication app</h3>
</div>

## 📋 <a name="table">Table of Contents</a>

1. 🤖 [Introduction](#introduction)
2. ⚙️ [Tech Stack](#tech-stack)
3. 🔋 [Features](#features)

## <a name="introduction">🤖 Introduction</a>

This project is a robust authentication system built using Next.js and NextAuth.js, designed to securely handle user sign-ins, sessions, and access control. It supports multiple OAuth providers (like Google, GitHub, Facebook), email-based login, and credentials-based authentication. The project follows modern authentication best practices, leveraging server-side rendering for enhanced security and performance. It integrates easily with databases for persistent user sessions and allows for fine-grained control over authentication flows, making it a flexible solution for web applications needing scalable authentication.

## <a name="tech-stack">⚙️ Tech Stack</a>

- Next.js
- TypeScript
- shadcn
- Tailwind CSS

## <a name="features">🔋 Features</a>

**Multiple Authentication Providers**:
Supports OAuth providers like Google, GitHub, Facebook, and more.
Email-based sign-in for passwordless authentication.
Traditional username and password (credentials-based) authentication.

**JWT and Session Management**:
Secure user sessions with JSON Web Tokens (JWT).
Server-side session management for better performance and security.
Configurable session duration and refresh tokens.

**Server-Side Rendering (SSR) Support**:
Seamless integration with Next.js' server-side rendering for secure user data access.
SSR ensures protected content rendering and better SEO performance.

**Role-Based Access Control (RBAC)**:
Fine-grained user roles and permissions.
Ability to restrict routes and pages based on user roles (admin, user, etc.).

**Client-Side and Server-Side Authentication**:
Works seamlessly in both client-side and server-side contexts.
Client-side hooks to easily manage authentication state in React components.

**Extensive Documentation & Community Support**:
Well-documented for easy setup and customization.
Active community and regular updates from the NextAuth.js team.
