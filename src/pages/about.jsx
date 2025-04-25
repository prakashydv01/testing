const TravelAbout = () => {
    const travelData = {
      name: "Your Name",
      tagline: "Wanderer & Story Collector",
      mission: "to uncover hidden gems and share authentic travel experiences",
      stats: {
        countries: 23,
        continents: 5,
        favoriteTrip: "Road-tripping through Patagonia"
      },
      philosophy: "I believe travel is about the people you meet, the flavors you taste, and the moments that take your breath away—not just the passport stamps.",
      socialLinks: [
        { name: "Instagram", icon: "📷", url: "#" },
        { name: "Travel Blog", icon: "✈️", url: "#" },
        { name: "YouTube", icon: "🎥", url: "#" }
      ]
    };
  
    return (
      <section style={styles.container}>
        <div style={styles.header}>
          <h1 style={styles.title}>About My Travels</h1>
          <p style={styles.subtitle}>"{travelData.tagline}"</p>
        </div>
  
        <div style={styles.content}>
          <p style={styles.paragraph}>
            <span role="img" aria-label="Globe">🌎</span> Hi! I'm {travelData.name}. My mission is {travelData.mission}.
          </p>
  
          <div style={styles.statsContainer}>
            <div style={styles.statItem}>
              <span style={styles.statNumber}>{travelData.stats.countries}+</span>
              <span style={styles.statLabel}>Countries</span>
            </div>
            <div style={styles.statItem}>
              <span style={styles.statNumber}>{travelData.stats.continents}</span>
              <span style={styles.statLabel}>Continents</span>
            </div>
            <div style={styles.statItem}>
              <span style={styles.statNumber}>∞</span>
              <span style={styles.statLabel}>Memories</span>
            </div>
          </div>
  
          <blockquote style={styles.quote}>
            {travelData.philosophy}
          </blockquote>
  
          <p style={styles.paragraph}>
            Currently dreaming about: <em>{travelData.stats.favoriteTrip}</em>
          </p>
        </div>
  
        <div style={styles.socialLinks}>
          {travelData.socialLinks.map((link) => (
            <a 
              key={link.name}
              href={link.url}
              style={styles.socialLink}
              aria-label={link.name}
            >
              {link.icon} {link.name}
            </a>
          ))}
        </div>
      </section>
    );
  };
  
  // Modern CSS-in-JS styles
  const styles = {
    container: {
      maxWidth: '800px',
      margin: '0 auto',
      padding: '2rem',
      backgroundColor: '#f8f9fa',
      borderRadius: '12px',
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
      fontFamily: "'Inter', sans-serif"
    },
    header: {
      textAlign: 'center',
      marginBottom: '2rem',
      borderBottom: '2px dashed #e2e8f0',
      paddingBottom: '1rem'
    },
    title: {
      fontSize: '2.5rem',
      color: '#2d3748',
      margin: 0,
      background: 'linear-gradient(90deg, #4299e1, #48bb78)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent'
    },
    subtitle: {
      fontSize: '1.2rem',
      color: '#4a5568',
      fontStyle: 'italic',
      marginTop: '0.5rem'
    },
    content: {
      lineHeight: '1.8'
    },
    paragraph: {
      fontSize: '1.1rem',
      margin: '1.5rem 0'
    },
    statsContainer: {
      display: 'flex',
      justifyContent: 'space-around',
      margin: '2rem 0',
      flexWrap: 'wrap'
    },
    statItem: {
      textAlign: 'center',
      padding: '1rem',
      minWidth: '100px'
    },
    statNumber: {
      display: 'block',
      fontSize: '2.5rem',
      fontWeight: 'bold',
      color: '#4299e1'
    },
    statLabel: {
      fontSize: '0.9rem',
      textTransform: 'uppercase',
      letterSpacing: '1px',
      color: '#718096'
    },
    quote: {
      borderLeft: '4px solid #48bb78',
      paddingLeft: '1.5rem',
      color: '#4a5568',
      fontStyle: 'italic',
      fontSize: '1.1rem',
      margin: '2rem 0'
    },
    socialLinks: {
      display: 'flex',
      justifyContent: 'center',
      gap: '1rem',
      marginTop: '2rem',
      flexWrap: 'wrap'
    },
    socialLink: {
      padding: '0.8rem 1.5rem',
      backgroundColor: '#4299e1',
      color: 'white',
      borderRadius: '50px',
      textDecoration: 'none',
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      transition: 'all 0.3s ease',
      ':hover': {
        backgroundColor: '#2b6cb0',
        transform: 'translateY(-2px)'
      }
    }
  };
  
  export default TravelAbout;