const GamingSection: React.FC = () => {
  return (
    <section id="gaming" className="gaming-section">
      <div className="gaming-content">
        {/* VALORANT Header */}
        <div className="gaming-intro">
          <h2 className="gaming-title">VALORANT</h2>
          <p className="gaming-description">
            VALORANT is a first-person shooter with 17.5 million monthly players. It was the game I spent the most amount of time on when I used to game regularly. I used to be ranked in the top 500 players, here's my <a 
              href="https://www.vlr.gg/player/16712/aritek" 
              target="_blank" 
              rel="noopener noreferrer"
              className="vlr-inline-link"
            >
              semi-pro profile
            </a>. Other games I played include League of Legends (Diamond 3), Overwatch (Master), Marvel Rivals (Grandmaster), and New World (MMO).
          </p>
        </div>

        {/* Achievement 1 - Video Left, Text Right */}
        <div className="gaming-achievement left-video">
          <div className="gaming-video">
            <div className="video-container">
              <iframe
                src="https://clips.twitch.tv/embed?clip=RespectfulWildCheesecakeTheThing-g9r3g5H4LHRKBkD4&parent=localhost&parent=younesbenketira.com"
                allowFullScreen
                title="Winning clutch against Tarik"
                className="twitch-embed"
              />
            </div>
          </div>
          <div className="gaming-text">
            <h3 className="achievement-title">Winning round against famous streamer</h3>
            <p className="achievement-description">
              Tarik is an ex counter strike professional and world champion, this is a clip of me winning the round against 2 of his teammates in a ranked game
            </p>
          </div>
        </div>

        {/* Achievement 2 - Video Right, Text Left */}
        <div className="gaming-achievement right-video">
          <div className="gaming-text">
            <h3 className="achievement-title">Winning round in tournament</h3>
            <p className="achievement-description">
              I formed a team called East Hill and we competed in tournaments, this is a clip from one of our games (we lost it sadly 😢)
            </p>
          </div>
          <div className="gaming-video">
            <div className="video-container">
              <iframe
                src="https://clips.twitch.tv/embed?clip=AverageRelatedBulgogiHassaanChop-OwhJ4mKkPedwEfXn&parent=localhost&parent=younesbenketira.com"
                allowFullScreen
                title="Tournament winning round"
                className="twitch-embed"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default GamingSection