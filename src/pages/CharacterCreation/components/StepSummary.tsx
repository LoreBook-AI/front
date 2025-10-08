import './StepSummary.css'

function StepSummary() {
  return (
    <div className="summary-border">
      <h4>Character Info Summary</h4>
      <hr />

      <p className="summary-text">
        Kaelen Vancent <br />
        Elfo da Floresta <br />
        Ladino (Ladrão) - Nível 3 <br />
        Caótico e Neutro (CN) <br />
        Órfão / Plebeu <br />
        PV: 24 <br />
        Proficiência: +2
      </p>
      <p>Here we will show the chosen race, class, stats, etc.</p>
    </div>
  )
}

export default StepSummary
