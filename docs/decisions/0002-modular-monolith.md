# 0002 Modular Monolith

## Status

Accepted

## Context

The backend must support many future domains without adding distributed-system complexity early.

## Decision

Start with an Express modular monolith and keep domain boundaries inside modules and packages.

## Consequences

Deployment remains simple while future extraction remains possible if operational needs justify it.
