import React from "react";

const Slide1 = () => (
    <section>
        <h1>Advanced Git &amp; GitHub Actions Workshop</h1>
    </section>
);

const Slide2 = () => (
    <section>
        <h2>Goals</h2>
        <ul>
            <li>Deep-dive into branching, rebase, merge flows</li>
            <li>Hands-on with pull-requests &amp; code review tools</li>
            <li>Build and customize GitHub Actions workflows</li>
        </ul>
    </section>
);

const Slide3 = () => (
    <section>
        <h2>Why Branch?</h2>
        <ul>
            <li>Isolation</li>
            <li>Parallel work</li>
            <li>Release management</li>
        </ul>
    </section>
);

const Slide4 = () => (
    <section>
        <h2>Branching Models</h2>
        <ul>
            <li>Git Flow</li>
            <li>GitHub Flow</li>
            <li>Trunk-Based</li>
        </ul>
    </section>
);

const Slide5 = () => (
    <section>
        <h2>Naming Conventions</h2>
        <ul>
            <li>feature/</li>
            <li>bugfix/</li>
            <li>hotfix/</li>
            <li>release/</li>
        </ul>
    </section>
);

const Slide6 = () => (
    <section>
        <h2>Merge Basics</h2>
        <code>git merge &lt;branch&gt;</code>
        <p>Creates merge commits</p>
    </section>
);

const Slide7 = () => (
    <section>
        <h2>Rebase Basics</h2>
        <code>git rebase main</code>
        <p>Creates linear history</p>
    </section>
);

const Slide8 = () => (
    <section>
        <h2>When to Use Which</h2>
        <ul>
            <li>Keeping history</li>
            <li>Preserving context</li>
        </ul>
    </section>
);

const Slide9 = () => (
    <section>
        <h2>Interactive Rebase</h2>
        <ul>
            <li>Squash</li>
            <li>Edit</li>
            <li>Reorder commits</li>
        </ul>
    </section>
);

const Slide10 = () => (
    <section>
        <h2>Merge Strategies</h2>
        <ul>
            <li>Fast-Forward</li>
            <li>No-FF</li>
        </ul>
    </section>
);

const Slide11 = () => (
    <section>
        <h2>The “Ours” and “Theirs” Strategies</h2>
    </section>
);

const Slide12 = () => (
    <section>
        <h2>Resolving Conflicts</h2>
        <ul>
            <li>Markers ({"<"}{"<"}{"<"}{"<"}{"<"}{"<"})</li>
            <li>git mergetool</li>
            <li>git rerere</li>
        </ul>
    </section>
);

const Slide13 = () => (
    <section>
        <h2>Pull Requests</h2>
        <ul>
            <li>Opening</li>
            <li>Assigning reviewers</li>
            <li>Linking issues</li>
        </ul>
    </section>
);

const Slide14 = () => (
    <section>
        <h2>Code Reviews</h2>
        <ul>
            <li>Comments</li>
            <li>Change requests</li>
            <li>Approvals</li>
        </ul>
    </section>
);

const Slide15 = () => (
    <section>
        <h2>Git Hooks &amp; Automation</h2>
        <ul>
            <li>pre-commit</li>
            <li>pre-push</li>
            <li>linting</li>
            <li>tests</li>
        </ul>
    </section>
);

const Slide16 = () => (
    <section>
        <h2>What Are Actions?</h2>
        <p>YAML-based workflows triggered by events</p>
    </section>
);

const Slide17 = () => (
    <section>
        <h2>Anatomy of a Workflow</h2>
        <ul>
            <li>on:</li>
            <li>jobs:</li>
            <li>steps:</li>
            <li>uses: vs. run:</li>
        </ul>
    </section>
);

const Slide18 = () => (
    <section>
        <h2>Hello-World Workflow</h2>
        <pre>
            <code>
                {`name: CI
on: [push, pull_request]
jobs:
    build:
        runs-on: ubuntu-latest
        steps:
            - uses: actions/checkout@v3
            - run: npm ci && npm test`}
            </code>
        </pre>
    </section>
);

const Slide19 = () => (
    <section>
        <h2>Key Concepts</h2>
        <ul>
            <li>Matrix builds</li>
            <li>Caching</li>
            <li>Secrets</li>
        </ul>
    </section>
);

const Slide20 = () => (
    <section>
        <h2>Common Use Cases</h2>
        <ul>
            <li>CI/CD pipelines</li>
            <li>Linting</li>
            <li>Security scans</li>
            <li>Release publication</li>
        </ul>
    </section>
);

const Slide21 = () => (
    <section>
        <h2>Marketplace Actions</h2>
        <ul>
            <li>actions/setup-node</li>
            <li>docker/build-push</li>
        </ul>
    </section>
);

const Slide22 = () => (
    <section>
        <h2>Resources</h2>
        <ul>
            <li>Git docs</li>
            <li>GitHub Actions docs</li>
            <li>Example repos</li>
        </ul>
    </section>
);

const Slide23 = () => (
    <section>
        <h2>Further Learning</h2>
        <ul>
            <li>Workshops</li>
            <li>Courses</li>
            <li>Books</li>
        </ul>
    </section>
);

const Slide24 = () => (
    <section>
        <h2>Thank You!</h2>
    </section>
);

export const slides = [
    Slide1,
    Slide2,
    Slide3,
    Slide4,
    Slide5,
    Slide6,
    Slide7,
    Slide8,
    Slide9,
    Slide10,
    Slide11,
    Slide12,
    Slide13,
    Slide14,
    Slide15,
    Slide16,
    Slide17,
    Slide18,
    Slide19,
    Slide20,
    Slide21,
    Slide22,
    Slide23,
    Slide24,
];