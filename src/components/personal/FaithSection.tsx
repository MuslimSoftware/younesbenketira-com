const FaithSection: React.FC = () => {
  return (
    <section id="faith" className="faith-section">
      <div className="faith-content">
        <h2 className="faith-title">Faith & Values</h2>
        <div className="faith-image">
          <img 
            src="https://i.pinimg.com/736x/34/94/a3/3494a38d347b1f9c97c3eb58eae0b49c.jpg"
            alt="Islamic geometric pattern with beautiful calligraphy"
            className="faith-picture"
          />
        </div>
        <div className="faith-text">
          <p className="faith-description">
            Being a Muslim is a fundamental part of who I am and significantly influences my approach to life and work. 
            My faith provides me with strong moral principles, discipline, and a sense of purpose that drives me to excel 
            in everything I do.
          </p>
          <p className="faith-description">
            I believe that having a clear sense of purpose and strong moral foundation makes me not just a better engineer, 
            but a more reliable team member, a more thoughtful problem-solver, and a more dedicated professional who brings 
            both technical excellence and ethical leadership to my work.
          </p>
        </div>
      </div>
    </section>
  )
}

export default FaithSection