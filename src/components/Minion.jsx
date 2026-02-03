import '../styles/Minion.css';

function Minion() {
  return (
    <div className="character">
      <div className="character-body">
        {/* Hair */}
        <div className="hair hair-1"></div>
        <div className="hair hair-2"></div>
        <div className="hair hair-3"></div>
        
        {/* Goggles */}
        <div className="goggles">
          <div className="goggle goggle-left">
            <div className="eye">
              <div className="pupil"></div>
            </div>
          </div>
          <div className="goggle goggle-right">
            <div className="eye">
              <div className="pupil"></div>
            </div>
          </div>
        </div>
        
        {/* Mouth */}
        <div className="mouth">
          <div className="teeth tooth-1"></div>
          <div className="teeth tooth-2"></div>
          <div className="teeth tooth-3"></div>
        </div>
        
        {/* Overalls */}
        <div className="overalls">
          <div className="overall-pocket"></div>
        </div>
        
        {/* Straps */}
        <div className="strap strap-left">
          <div className="strap-button"></div>
        </div>
        <div className="strap strap-right">
          <div className="strap-button"></div>
        </div>
        
        {/* Arms */}
        <div className="arm arm-left">
          <div className="hand hand-left"></div>
        </div>
        <div className="arm arm-right">
          <div class="hand hand-right"></div>
        </div>
        
        {/* Legs */}
        <div className="legs">
          <div className="leg leg-left">
            <div className="shoe"></div>
          </div>
          <div className="leg leg-right">
            <div className="shoe"></div>
          </div>
        </div>
        
        {/* Heart in hands */}
        <div className="heart-hands">
          <div className="heart-hands-bottom"></div>
        </div>
      </div>
    </div>
  );
}

export default Minion;
