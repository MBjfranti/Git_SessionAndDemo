import React from 'react';

const SlideAdvancedGitGitHubActionsWorkshop = () => (
    <section>
        <h1>Advanced Git &amp; GitHub Actions Workshop</h1>
    </section>
);

const SlideGoals = () => (
    <section>
        <h2>Goals</h2>
        <div>
            <div>Deep-dive into branching, rebase, merge flows</div>
            <div>Hands-on with pull-requests &amp; code review tools</div>
            <div>Build and customize GitHub Actions workflows</div>
        </div>
    </section>
);

const SlideWhatIsGitQuickReview = () => (
    <section>
        <h2>What is Git? Quick Review</h2>
        <div>
            <div>
                <strong>Git</strong> is a distributed version control system created by Linus Torvalds in 2005.
            </div>
            <div>
                It tracks changes in source code, enabling collaboration, branching, and history.
            </div>
            <br />
            <div>
                <strong>History:</strong> Developed for Linux kernel development after BitKeeper&apos;s license was revoked.
            </div>
            <div>
                Now the de facto standard for open source and enterprise projects.
            </div>
        </div>
    </section>
);

const SlideGitConceptsWorkingStagingLocalRemote = () => (
    <section>
        <h2>Git Concepts: Working, Staging, Local &amp; Remote</h2>
        <img
            src="https://i.ytimg.com/vi/e9lnsKot_SQ/maxresdefault.jpg"
            alt="Git Working Directory, Staging Area, Local and Remote Repo"
            style={{ maxWidth: "100%", height: "auto", border: "1px solid #ccc", borderRadius: "8px" }}
        />
        <div style={{ marginTop: "1em" }}>
            <ul style={{ textAlign: "left" }}>
                <li><strong>Working Directory:</strong> Your local files and edits</li>
                <li><strong>Staging Area (Index):</strong> Where you prepare changes for commit (<code>git add</code>)</li>
                <li><strong>Local Repository:</strong> Commits saved on your machine (<code>git commit</code>)</li>
                <li><strong>Remote Repository:</strong> Shared server (e.g., GitHub) (<code>git push</code>/<code>git pull</code>)</li>
            </ul>
        </div>
    </section>
);

const SlideWhyBranch = () => (
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

const SlideBranchingModels = () => (
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

const SlideBranchingVisualized = () => (
    <section>
        <h2>Branching Visualized</h2>
        <img
            src="https://user-images.githubusercontent.com/1256329/80170009-f9d03200-85b4-11ea-94d3-3041887565ac.png"
            alt="Git Branching Diagram"
            style={{ maxWidth: "100%", height: "auto", border: "1px solid #ccc", borderRadius: "8px" }}
        />
        <div style={{ marginTop: "1em", color: "#555" }}>
            Visual representation of branching, merging, and history in Git.
        </div>
    </section>
);

const SlideNamingConventions = () => (
    <section>
        <h2>Naming Conventions</h2>
        <div>
            <div><strong>feature/</strong> – for new features (e.g., <code>feature/login-form</code>)</div>
            <div><strong>bugfix/</strong> – for bug fixes (e.g., <code>bugfix/navbar-crash</code>)</div>
            <div><strong>hotfix/</strong> – for urgent production fixes (e.g., <code>hotfix/payment-error</code>)</div>
            <div><strong>release/</strong> – for release preparation (e.g., <code>release/v1.2.0</code>)</div>

            <br />
            <div style={{ marginTop: "1em", fontWeight: "bold", color: "#c0392b" }}>
                EXERCISE!<br />
                Come up with a branch name for a code change on this repo - it can be anything.<br />
                Then, make a small change in the codebase on that branch (e.g., add a comment or a placeholder component).
            </div>
        </div>

    </section>
);

const SlideMergeBasics = () => (
    <section>
        <h2>Merge Basics</h2>
        <code>git merge &lt;branch&gt;</code>
        <p>Creates merge commits</p>
    </section>
);

const SlideRebaseBasics = () => (
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

const SlideWhenToUseWhich = () => (
    <section>
        <h2>When to Use Which</h2>
        <div>
            <div>Keeping history</div>
            <div>Preserving context</div>
        </div>
        <br />
        <div style={{ margin: "1em 0" }}>
            <img
                src="https://i.ytimg.com/vi/0chZFIZLR_0/maxresdefault.jpg"
                alt="Merge vs Rebase Diagram"
                style={{ maxWidth: "65%", height: "auto", border: "1px solid #ccc", borderRadius: "8px" }}
            />
        </div>
        <div style={{ marginTop: "1em" }}>
            <strong>Example:</strong><br /> Use <code>merge</code> for preserving all context in team projects;<br /> use <code>rebase</code> for a clean, linear history before merging a feature branch.
        </div>
    </section>
);

const SlideInteractiveRebase = () => (
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
            <br />
            <div style={{ marginTop: "1em", fontWeight: "bold", color: "#2980b9" }}>
                INTERACTIVE REBASE EXERCISE!<br />
                Try running <code>git rebase -i HEAD~3</code> in your terminal.<br />
                In the editor that opens, experiment with <code>pick</code>, <code>squash</code>, <code>edit</code>, and <code>drop</code>.<br />
                <br />
                <span style={{ color: "#c0392b" }}>
                    What happens if you squash two commits? What if you drop one?<br />
                    Try it out and see how your commit history changes!
                </span>
            </div>
        </div>
    </section>
);

const SlideMergeStrategies = () => (
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

const SlideOursTheirsStrategies = () => (
    <section>
        <h2>The “Ours” and “Theirs” Strategies</h2>
    </section>
);

const SlideResolvingConflicts = () => (
    <section>
        <h2>Resolving Conflicts</h2>
        <div>
            <div>Markers ({"<"}{"<"}{"<"}{"<"}{"<"}{"<"})</div>
            <div>git mergetool</div>
            <div>git rerere</div>
            <br />
            <div>Stands for &quot;reuse recorded resolution.&quot;</div>
        </div>
    </section>
);

const SlideConflictVizualized = () => (
    <section>
        <h2>Conflict Visualized</h2>
        <img
            src="https://jonathanmh.com/assets/2015/temporary-git-merge-conflict-files.png"
            alt="Git Merge Conflict Visualization"
            style={{ maxWidth: "100%", height: "auto", border: "1px solid #ccc", borderRadius: "8px" }}
        />
        <div style={{ marginTop: "1em", color: "#555" }}>
            Visual example of a merge conflict in Git—when two branches change the same part of a file.
        </div>
    </section>
);

const SlidePullRequests = () => (
    <section>
        <h2>Pull Requests</h2>
        <div>
            <div>Opening</div>
            <div>Assigning reviewers</div>
            <div>Linking issues</div>
        </div>
        <br />
        <h2>Code Reviews</h2>
        <div>
            <div>Comments</div>
            <div>Change requests</div>
            <div>Approvals</div>
        </div>
    </section>
);

const SlidePullRequestBestPractices = () => (
    <section>
        <h2>Pull Request Best Practices</h2>
        <div>
            <div>Keep PRs small and focused</div>
            <div>Write clear titles and descriptions</div>
            <div>Link related issues or tasks</div>
            <div>Request specific feedback from reviewers</div>
        </div>
        <br />
        <div style={{ marginTop: "1em", fontWeight: "bold", color: "#c0392b" }}>
            EXERCISE!<br />
            Open a pull request for the branch you created earlier.<br />
            Add a description, link any related issues (fake), and request a review from a teammate.<br />
            <br />
            <span style={{ color: "#2980b9" }}>
                Bonus: Try adding comments to your own PR or asking for feedback on specific lines of code!
            </span>
        </div>
    </section>
);

const SlideGitHooksAutomation = () => (
    <section>
        <h2>Git Hooks &amp; Automation</h2>
        <div style={{ background: "#222", color: "#fff", padding: "1em", borderRadius: "6px", fontSize: "0.95em" }}>
            <strong>What’s a Git hook?</strong> <br />
            Small scripts that run automatically at certain Git events (like before commit or push).
            <br /><br />
            <strong>Example: pre-commit</strong>
            <pre style={{ background: "#111", color: "#fff", margin: "0.5em 0", padding: "0.5em", borderRadius: "4px" }}>
                {`# .husky/pre-commit
npm run lint`}
            </pre>
            This runs <code>npm run lint</code> before every commit to catch errors early.
        </div>
        <br />
        <div style={{ marginTop: "1em", fontWeight: "bold", color: "#27ae60" }}>
            TRY IT!<br />
            Set up a <code>pre-commit</code> or <code>pre-push</code> hook to run <code>npm test</code> or <code>eslint</code> before you commit or push.
            <br /><br />
            <span style={{ color: "#2980b9" }}>
                Tip: Break a test or linter rule and see how the hook blocks your commit!
            </span>
        </div>
    </section>
);

const SlideGitHooksVisualized = () => (
    <section>
        <h2>Git Hooks Visualized</h2>
        <img
            src="https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2022/02/git-hooks.webp"
            alt="Git Hooks Diagram"
            style={{ maxWidth: "100%", height: "auto", border: "1px solid #ccc", borderRadius: "8px" }}
        />
        <div style={{ marginTop: "1em" }}>
            <strong>Use Case:</strong> Automatically run tests before every push to prevent broken code from reaching the repository.
        </div>
    </section>
);

const SlideWhatAreActions = () => (
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

const SlideWorkflowAnatomy = () => (
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

const SlideHelloWorldWorkflow = () => (
    <section>
        <h2>Hello-World Workflow</h2>
        <pre style={{ textAlign: "left", background: "#222", color: "#fff", padding: "1em", borderRadius: "6px" }}>
            <code style={{ textAlign: "left", display: "block" }}>
                {
                    `name: CI

    on:
      workflow_dispatch: // Allows manual triggering
      push: // Trigger on push events
        branches: [master]
      pull_request: // Trigger on pull requests
        branches: [master]
        
    jobs:
        build:
        runs-on: ubuntu-latest // Use the latest Ubuntu runner
        steps:
        - uses: actions/checkout@v3 // Check out the code from the repository
        - run: npm ci && npm test // Install dependencies and run tests
        `
                }
            </code>
        </pre>
    </section>
);

const SlideWorkflowUseCaseDeployToProduction = () => (
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
        <br />
        <div style={{ marginTop: "1em", fontWeight: "bold", color: "#2980b9" }}>
            TRY IT!<br />
            Add a new step to your workflow:<br />
            <code>run: echo &quot;Hello from Actions&quot;</code><br />
            Commit and push your change to trigger the workflow and see the output in the Actions tab.
        </div>
    </section>
);

/**
 * Renders a slide section highlighting common use cases such as CI/CD pipelines,
 * linting, security scans, and release publication.
 *
 * @remarks
 * CI/CD stands for Continuous Integration and Continuous Deployment/Delivery,
 */
const SlideCommonUseCases = () => (
    <section>
        <h2>Common Use Cases</h2>
        <div>
            <div>CI/CD pipelines</div>
            <div>Linting</div>
            <div>Security scans</div>
            <div>Release publication</div>
        </div>
        <br />
        <br />
        <small style={{ color: "#888" }}>
            CI/CD stands for Continuous Integration and Continuous Deployment/Delivery,<br /> which are practices that automate the building, testing, and deployment of applications.
        </small>
    </section>
);

const SlidePossibleMarketBeatActions = () => (
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

const SlideQuestions = () => (
    <section>
        <h2>Questions?</h2>
        <div>
            <div>What would you like to ask or discuss?</div>
        </div>
    </section>
);

const SlideKeyTakeawaysForYourWork = () => (
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

const SlideThanks = () => (
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
    SlideAdvancedGitGitHubActionsWorkshop,
    SlideGoals,
    SlideWhatIsGitQuickReview,
    SlideGitConceptsWorkingStagingLocalRemote,
    SlideWhyBranch,
    SlideBranchingModels,
    SlideBranchingVisualized,
    SlideNamingConventions,
    SlideMergeBasics,
    SlideRebaseBasics,
    SlideWhenToUseWhich,
    SlideInteractiveRebase,
    SlideMergeStrategies,
    SlideOursTheirsStrategies,
    SlideResolvingConflicts,
    SlideConflictVizualized,
    SlidePullRequests,
    SlidePullRequestBestPractices,
    SlideGitHooksAutomation,
    SlideGitHooksVisualized,
    SlideWhatAreActions,
    SlideWorkflowAnatomy,
    SlideHelloWorldWorkflow,
    SlideWorkflowUseCaseDeployToProduction,
    SlideCommonUseCases,
    SlidePossibleMarketBeatActions,
    SlideQuestions,
    SlideKeyTakeawaysForYourWork,
    SlideThanks,
];