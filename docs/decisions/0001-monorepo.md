# 0001 Monorepo

## Status

Accepted

## Context

The product will need multiple apps and shared technical contracts.

## Decision

Use a pnpm workspace monorepo coordinated by Turborepo.

## Consequences

Shared code has explicit package boundaries, root commands are consistent, and CI can verify the whole foundation together.
