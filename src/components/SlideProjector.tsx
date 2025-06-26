import React, { useState, ReactNode, useEffect, useCallback } from 'react';

interface SlideProjectorProps {
    children: ReactNode[];
}

const SlideProjector: React.FC<SlideProjectorProps> = ({ children }) => {
    const [current, setCurrent] = useState(0);
    const total = React.Children.count(children);

    const goBack = useCallback(() => setCurrent((prev) => (prev > 0 ? prev - 1 : prev)), []);
    const goForward = useCallback(() => setCurrent((prev) => (prev < total - 1 ? prev + 1 : prev)), [total]);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'ArrowLeft') {
                goBack();
            } else if (e.key === 'ArrowRight') {
                goForward();
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [goBack, goForward]);

    return (
        <div>
            {current !== 0 && (
                <div style={{ position: 'absolute', top: '1rem', left: '1rem' }}>
                    <img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
                        alt="Git Logo"
                        style={{ width: 64, height: 64 }}
                    />
                </div>
            )}
            <div>{React.Children.toArray(children)[current]}</div>
            <div
                style={{
                    position: 'absolute',
                    bottom: '1rem',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    marginTop: 0,
                }}
            >
                <button onClick={goBack} disabled={current === 0}>
                    Back
                </button>
                <span style={{ margin: '0 1rem' }}>
                    {current + 1} / {total}
                </span>
                {current === total - 1 ? (
                    <button onClick={() => setCurrent(0)}>
                        Start Over
                    </button>
                ) : (
                    <button onClick={goForward}>
                        Forward
                    </button>
                )}
            </div>
        </div>
    );
};

export default SlideProjector;