# Rule: Component Architecture
Role: Agent 04 (CC Front-End Developer)

## Description
Enforces Atomic Design principles: atoms, molecules, organisms, templates, and pages.

## Standards
1. Components must be stored in `src/components/[category]/`.
2. Each component must contain: `index.tsx`, `styles.css`, and `[Component].test.tsx`.
3. No business logic in 'Atoms'.
4. Props must be strictly typed using TypeScript interfaces.
