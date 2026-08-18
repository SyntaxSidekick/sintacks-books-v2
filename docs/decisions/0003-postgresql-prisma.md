# 0003 PostgreSQL And Prisma

## Status

Accepted

## Context

The application will need relational integrity and explicit migration workflows.

## Decision

Use PostgreSQL with Prisma. Production migrations are an explicit deploy step.

## Consequences

Application startup does not mutate schema automatically, and Stage 1 contains no product-domain models.
