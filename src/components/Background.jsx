import Particles from './ui/Particles';

const Background = () => {
    return (
        <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none bg-black">
            <Particles
                particleColors={["#ffffff", "#4285F4"]}
                particleCount={300}
                particleSpread={10}
                speed={0.1}
                particleBaseSize={100}
                moveParticlesOnHover={true}
                alphaParticles={false}
                disableRotation={false}
                pixelRatio={1}
            />
        </div>
    );
};

export default Background;
