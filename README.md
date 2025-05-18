# Filatique

## About
This is a web site for one musician who's name is "Filatique".

## Environment Variables (.env)

```
POSTGRES_USER=%POSTGRES_USER%
POSTGRES_PASSWORD=%POSTGRES_PASSWORD%
POSTGRES_DB=%POSTGRES_DB%
POSTGRES_PORT=%POSTGRES_PORT%
POSTGRES_IP =%POSTGRES_IP%

DATABASE_URL="postgresql://${POSTGRES_USER}:${POSTGRES_PASSWORD}@${POSTGRES_IP}:${POSTGRES_PORT}/${POSTGRES_DB}?schema=public"
```

## Deploy

To deploy the application using Docker Compose:

1. Make sure you have Docker and Docker Compose installed on your system
2. Create `.env` file in the root directory with required environment variables
3. Run the following commands:
```
docker-compose up -d
```

## Tech Stack

- Next.js 13 - React framework
- TypeScript - Programming language
- Tailwind CSS - Styling
- Prisma - ORM
- PostgreSQL - Database
- Docker - Containerization
- ESLint - Code linting
- Prettier - Code formatting