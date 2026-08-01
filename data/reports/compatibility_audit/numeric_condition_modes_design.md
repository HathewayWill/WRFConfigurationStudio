# Numeric comparison and range compatibility condition modes

This design note documents numeric condition modes for the namelist compatibility engine.

## Purpose

Some remaining compatibility rules require numeric comparisons rather than simple equality checks.

Examples:

- `bucket_j > 0`
- `opt_irr > 0`
- `10 km < dx < 50 km`

These cannot be safely represented with `active`, `non_zero`, or `one_of`.

## Supported modes

| Mode | Alias | Meaning |
|---|---|---|
| `greater_than` | `gt` | value > threshold |
| `greater_than_or_equal` | `gte` | value >= threshold |
| `less_than` | `lt` | value < threshold |
| `less_than_or_equal` | `lte` | value <= threshold |
| `between` | none | min <= value <= max |
| `outside_range` | none | value < min or value > max |

## Numeric parsing

The engine parses finite JavaScript numbers and supports Fortran-style `D` exponents by converting `D` or `d` to `e`.

Examples:

- `1e-8`
- `1D-8`
- `25000`
- `-1`

Invalid numeric values do not match numeric comparison modes.

## Conservative behavior

If a threshold, min, max, or tested value cannot be parsed as a finite number, the condition returns `false`.

This prevents accidental enforcement from malformed numeric rule metadata.
