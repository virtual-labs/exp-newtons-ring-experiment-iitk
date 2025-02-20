function createHero() {
    const hero = document.getElementById('hero');
    hero.className = 'hero';
    
    hero.innerHTML = `
        <div class="container">
            <div class="hero-content">
                <h1 class="hero-title">Newtons Ring Experiment</h1>
                <p class="hero-description">
                    
                </p>
                <div class="hero-buttons">
                    <a href="#simulation" class="btn btn-primary">
                        Try Simulation
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="ml-2">
                            <path d="M5 12h14M12 5l7 7-7 7"/>
                        </svg>
                    </a>
                    
                </div>
            </div>
        </div>
    `;
}

createHero();