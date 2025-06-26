import React from "react";

const Slide1 = () => (
    <section>
        <h1>Advanced Git &amp; GitHub Actions Workshop</h1>
    </section>
);

const Slide2 = () => (
    <section>
        <h2>Goals</h2>
        <div>
            <div>Deep-dive into branching, rebase, merge flows</div>
            <div>Hands-on with pull-requests &amp; code review tools</div>
            <div>Build and customize GitHub Actions workflows</div>
        </div>
    </section>
);

const Slide3 = () => (
    <section>
        <h2>Why Branch?</h2>
        <div>
            <div style={{ marginBottom: "1em" }}>Isolation: Safely develop features or fixes without affecting main code</div>
            <div style={{ marginBottom: "1em" }}>Parallel work: Multiple contributors can work simultaneously</div>
            <div style={{ marginBottom: "1em" }}>Release management: Prepare, test, and deploy releases independently</div>
            <div>Experimentation: Try new ideas without risk to production</div>
        </div>
    </section>
);

const Slide4 = () => (
    <section>
        <h2>Branching Models</h2>
        <div>
            <div>
                <strong>Git Flow</strong>
                <div style={{ marginLeft: "1em" }}>
                    <div>Long-lived: <code>main (formerly master)</code>, <code>develop</code></div>
                    <div>Feature, release, hotfix branches</div>
                </div>
            </div>
            <br />
            <div>
                <strong>GitHub Flow</strong>
                <div style={{ marginLeft: "1em" }}>
                    <div>Branch → PR → Merge to <code>main</code></div>
                </div>
            </div>
            <br />
            <div>
                <strong>Trunk-Based</strong>
                <div style={{ marginLeft: "1em" }}>
                    <div>Short branches or direct to <code>main</code></div>
                </div>
            </div>
        </div>
    </section>
);

const Slide5 = () => (
    <section>
        <h2>Naming Conventions</h2>
        <div>
            <div><strong>feature/</strong> – for new features (e.g., <code>feature/login-form</code>)</div>
            <div><strong>bugfix/</strong> – for bug fixes (e.g., <code>bugfix/navbar-crash</code>)</div>
            <div><strong>hotfix/</strong> – for urgent production fixes (e.g., <code>hotfix/payment-error</code>)</div>
            <div><strong>release/</strong> – for release preparation (e.g., <code>release/v1.2.0</code>)</div>
        </div>
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
        <code>git rebase master</code>
        <p>Creates linear history</p>
        <div>
            <div>Moves your commits on top of another branch</div>
            <div>Can rewrite commit history</div>
            <div>Use with care on shared branches</div>
        </div>
    </section>
);

const Slide8 = () => (
    <section>
        <h2>When to Use Which</h2>
        <div>
            <div>Keeping history</div>
            <div>Preserving context</div>
        </div>
        <br />
        <div style={{ marginTop: "1em" }}>
            <strong>Example:</strong><br /> Use <code>merge</code> for preserving all context in team projects;<br /> use <code>rebase</code> for a clean, linear history before merging a feature branch.
        </div>
    </section>
);

const Slide9 = () => (
    <section>
        <h2>Interactive Rebase</h2>
        <div>
            <div>Squash</div>
            <div>Edit</div>
            <div>Reorder commits</div>
            <br />
            <div>
                <div>
                    <code>git rebase -i HEAD~3</code>
                </div>
                <div>
                    <code>pick, squash, edit, drop</code>
                </div>
            </div>
        </div>
    </section>
);

const Slide10 = () => (
    <section>
        <h2>Merge Strategies</h2>
        <div>
            <div>Fast-Forward</div>
            <div>No-FF</div>
        </div>
        <br />
        <div>
            <div>Fast-Forward: Moves the branch pointer forward</div>
            <div>No-FF: Creates a merge commit even if a fast-forward is possible</div>
        </div>
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
        <div>
            <div>Markers ({"<"}{"<"}{"<"}{"<"}{"<"}{"<"})</div>
            <div>git mergetool</div>
            <div>git rerere</div>
            <br />
            <div>Stands for "reuse recorded resolution."</div>
        </div>
    </section>
);

const Slide13 = () => (
    <section>
        <h2>Pull Requests</h2>
        <div>
            <div>Opening</div>
            <div>Assigning reviewers</div>
            <div>Linking issues</div>
        </div>
    </section>
);

const Slide14 = () => (
    <section>
        <h2>Code Reviews</h2>
        <div>
            <div>Comments</div>
            <div>Change requests</div>
            <div>Approvals</div>
        </div>
    </section>
);

const Slide15 = () => (
    <section>
        <h2>Git Hooks &amp; Automation</h2>
        <div>
            <div>pre-commit</div>
            <div>pre-push</div>
            <div>linting</div>
            <div>tests</div>
        </div>
        <br/>
        <div>
            <strong>Tools:</strong>
            <div>Husky (manage Git hooks)</div>
            <div>lint-staged (run linters on staged files)</div>
            <div>Commitizen (standardize commit messages)</div>
            <div>prettier (code formatting)</div>
            <div>eslint (linting)</div>
            <div>Jest (testing)</div>
        </div>
    </section>
);

const Slide16 = () => (
    <section>
        <h2>What Are Actions?</h2>
        <p>YAML-based workflows triggered by events</p>
        <small>
            <div><strong>Workflow:</strong> Fancy word for “script that runs itself.”</div>
            <div><strong>Job:</strong> A thing your computer does so you don’t have to.</div>
            <div><strong>Step:</strong> One small click for code, one giant leap for automation.</div>
            <div><strong>Action:</strong> Pre-made magic you can borrow from strangers on the internet.</div>
        </small>
        <br />
        <div>
            <strong>TL;DR:</strong> Automate tasks (build, test, deploy) on GitHub using simple YAML files triggered by events like push or PR.
        </div>
    </section>
);

const Slide17 = () => (
    <section>
        <h2>Workflow Anatomy</h2>
        <div>
            <div><strong>on:</strong> Trigger events (e.g., <code>push</code>)</div>
            <div><strong>jobs:</strong> Tasks to run</div>
            <div><strong>steps:</strong> Sequence in each job</div>
            <div><strong>uses:</strong> Run an action</div>
            <div><strong>run:</strong> Execute a command</div>
        </div>
    </section>
);

const Slide18 = () => (
    <section>
        <h2>Hello-World Workflow</h2>
        <pre style={{ textAlign: "left" }}>
            <code style={{ textAlign: "left", display: "block" }}>
    {
`name: CI
on:
  push:
    branches: [master]
  pull_request:
    branches: [master]
jobs:
    build:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v3
    - run: npm ci && npm test`
          }
            </code>
        </pre>
    </section>
);

const Slide19 = () => (
    <section>
        <h2>Workflow Use Case: Deploy to Production</h2>
        <div>
            <div>Automatically deploys your app when code is merged to <code>main</code></div>
            <div>Runs tests, builds the project, and uploads artifacts</div>
            <div>Notifies the team on deployment success or failure</div>
        </div>
        <br />
        <div>
            <strong>Cool fact:</strong> You can run workflows on your pull requests without needing to merge them!
        </div>
    </section>
);

const Slide20 = () => (
    <section>
        <h2>Common Use Cases</h2>
        <div>
            <div>CI/CD pipelines</div>
            <div>Linting</div>
            <div>Security scans</div>
            <div>Release publication</div>
        </div>
    </section>
);

const Slide21 = () => (
    <section>
        <h2>Possible MarketBeat Actions</h2>
        <div style={{ textAlign: "left" }}>
            <div>Restore NuGet packages</div>
            <div>Build .NET 4.8 solution with MSBuild</div>
            <div>Run unit tests on PR creation/update</div>
            <div>Publish artifacts (e.g., .zip, .msi)</div>
            <div>Deploy via script</div>
            <div>Static code analysis</div>
        </div>
    </section>
);

const Slide22 = () => (
    <section>
        <h2>Questions?</h2>
        <div>
            <div>What would you like to ask or discuss?</div>
        </div>
    </section>
);

const Slide23 = () => (
    <section>
        <h2>Key Takeaways for Your Work</h2>
        <div>
            <div><strong>Branches:</strong> Use feature branches for new work; keep them up to date with <code>main</code>.</div>
            <br />
            <div><strong>Pull Requests:</strong> Open PRs early for feedback; link related issues and request reviews.</div>
            <br />
            <div><strong>Conflict Resolution:</strong> Communicate with your team, resolve conflicts promptly, and test after merging.</div>
        </div>
    </section>
);

const Slide24 = () => (
    <section>
        <h2>Thanks!</h2>
        <div>
            <em>
                Why do programmers prefer dark mode?<br />
                Because light attracts <code>bugs</code>—and nobody wants the <code>git blame</code>!
            </em>
            <br />
            <span>…</span>
            <br />
            <small>
                <strong>git blame</strong> shows who last modified each line of a file—so you know exactly who to thank (or blame) for that bug!
            </small>
        </div>
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