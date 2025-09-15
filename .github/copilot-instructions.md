# Copilot Code Review Instructions

Use these rules when summarizing PRs and suggesting review feedback.

## Project context
- Repo: MyMaoGenGame — web racing game for kids.
- Tech: HTML/CSS/TS (vanilla), planned Three.js later.

## What to focus on
1. Correctness: logic, boundary conditions, null/undefined handling.
2. Simplicity: avoid over-engineering; prefer clear readable code.
3. Safety: DOM access guards, event listeners cleanup, timer disposal.
4. Performance: avoid unnecessary reflows, tight loops, large allocations.
5. Accessibility: semantic HTML, focus order, button labels, contrasts.
6. Security: no eval/dangerous innerHTML; sanitize external inputs.
7. Consistency: naming, file organization, commit messages.

## PR summary format
- Title: Short single-line summary.
- Changes: bullet list of key edits (files, functions).
- Risk: what could break and why.
- Test: quick steps to validate manually.
- Follow-ups: small next actions if any.

## Style preferences
- TypeScript: strict types, explicit function return types for exports.
- Avoid global state; isolate logic into functions/modules under `src/`.
- Keep functions under ~40 lines; extract helpers.
- Use early returns and guard clauses.

## Examples
- Good: clear variable names, small pure functions, defensive checks.
- Bad: magic numbers, deeply nested conditionals, duplicated code.

