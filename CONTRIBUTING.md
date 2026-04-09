# Contributing

Contributions are welcome. Whether it is a bug report, a feature request, or a
pull request — every contribution helps improve the library.

## Development Setup

```bash
git clone https://github.com/faubulous/mentor-rdf.git
cd mentor-rdf
npm install
```

## Running Tests

```bash
npm test            # single run
npm run test:watch  # watch mode
npm run test:coverage
```

## Type Checking

```bash
npm run typecheck
```

## Building

```bash
npm run build
npm run check:pack
```

## CI Parity (Recommended Before Opening PR)

```bash
npm run ci:quality
```

## Pull Requests

1. Fork the repository and create a feature branch.
2. Make your changes and add or update tests as appropriate.
3. Ensure quality checks pass locally with `npm run ci:quality`.
4. Open a pull request against `main`.

## CI/CD Overview

- `Quality Checks` runs type checks, tests, build, and package dry-run on pull requests and pushes to `main`.
- `Test Coverage` runs coverage reporting, uploads artifacts, and posts a sticky PR coverage summary.
- `Publish Package` runs on version tags (`v*.*.*`) or manual dispatch and publishes to npm with provenance.

## Publishing

Publishing is automated by GitHub Actions via the `Publish Package` workflow.

1. Bump the version in `package.json`.
2. Create and push a version tag (for example: `v1.3.4`).
3. Ensure npm trusted publishing is configured for this repository.

## Reporting Issues

Please open an issue on
[GitHub](https://github.com/faubulous/mentor-rdf/issues) with a
clear description and, if possible, a minimal reproduction.

## Related Projects

| Package | Description |
|---------|-------------|
| [@faubulous/mentor-rdf-parsers](https://github.com/faubulous/mentor-rdf-parsers) | RDF parsing library |
| [@faubulous/mentor-rdf-serializers](https://github.com/faubulous/mentor-rdf-serializers) | RDF serialization library |
| [@faubulous/mentor-vscode](https://github.com/faubulous/mentor-vscode) | RDF IDE and workbench for VS Code |

---

[Back to documentation index](README.md)
